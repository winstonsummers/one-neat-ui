import Logger from '../Logger'

interface IFetchCli {
    get: (data?: any) => Promise<any>
    post: (data?: any) => Promise<any> 
}

interface IFetchCliArgs {
    url: string
}

type TMethod = 'POST' | 'GET'

const FetchCli = ({ url }: IFetchCliArgs): IFetchCli => {
    const fetching = (method: TMethod) => (data?: any) => {
        return fetch(url, {
            method,
            body: JSON.stringify(data),
        })
            .then((resp) => resp.json())
            .catch((error) => Logger.error(error))
    }

    return {
        get: fetching('GET'),
        post: fetching('POST'),
    }
}

export default FetchCli
