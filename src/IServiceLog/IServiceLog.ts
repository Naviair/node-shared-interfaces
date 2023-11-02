export interface IServiceLogInput {
    type: 'warning' | 'info' | 'error' | 'success',
    payload: any,
    event: string,
    error?: any
}


export interface ILog extends IServiceLogInput {
    timestamp: Date,
    agent: string,
}