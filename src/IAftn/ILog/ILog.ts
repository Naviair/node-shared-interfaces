/** These interfaces is used by docker-dcg-broker */
export interface ILogInput {
    type: 'warning' | 'info' | 'error' | 'success',
    payload: any,
    event: string,
    error?: any
}


export interface ILog extends ILogInput {
    timestamp: Date,
    agent: string,
}