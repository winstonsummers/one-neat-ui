const logUrl: string = ''

interface ILogger {
    info: (args: any) => Promise<Response>
    warn: (args: any) => Promise<Response>
    error: (args: any) => Promise<Response>
}

type TLogLevel = 'error' | 'log' | 'warn'

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
    warn: logWrapper(logMethod, 'warn'),
    error: logWrapper(logMethod, 'error'),
}

export default Logger
