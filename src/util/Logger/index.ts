const logUrl: string = ''

interface ILogger {
    info: (args: any) => Promise<Response>
    warn: (args: any) => Promise<Response>
    error: (args: any) => Promise<Response>
}

type TLogLevel = 'error' | 'log' | 'warn'

const logWrapper = (logIt: any, level: TLogLevel) => (args: any): Promise<Response> => {
    if (logUrl.length <= 0) {
        return new Promise((resolve) => {
            console[level](args)
            resolve(new Response(`No url provided, console.${level} => ${args}`))
        })
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
