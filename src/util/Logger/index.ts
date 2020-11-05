const logUrl: string = ''

interface ILogger {
    info: (args: any) => Promise<Response>
    warn: Console['warn']
    error: (args: any) => Promise<Response>
}

type TLogLevel = 'error' | 'info'

const logWrapper = (logIt: any, level: TLogLevel) => (args: any) => {
    if (logUrl.length <= 0) {
        return null
    } else {
        return logIt(args)
    }
}

const logMethod = (args: any) => {
    return fetch(logUrl, {
        method: 'POST',
        body: JSON.stringify(args),
    })
}
const Logger: ILogger = {
    info: logWrapper(logMethod, 'info'),
    warn: console.warn,
    error: logWrapper(logMethod, 'error'),
}

export default Logger
