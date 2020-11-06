const logUrl: string = ''

interface ILogger {
    info: (args: any) => Promise<Response>
    warn: Console['warn']
    error: (args: any) => Promise<Response>
}

type TLogLevel = 'error' | 'log'

const logWrapper = (logIt: any, level: TLogLevel) => (args: any) => {
    if (logUrl.length <= 0) {
        console[level](args)
        return null
    } else {
        return logIt(args, level)
    }
}

const logMethod = (args: any, level: TLogLevel) => {
    return fetch(logUrl, {
        method: 'POST',
        body: JSON.stringify(args) + level,
    })
}
const Logger: ILogger = {
    info: logWrapper(logMethod, 'log'),
    warn: console.warn,
    error: logWrapper(logMethod, 'error'),
}

export default Logger
