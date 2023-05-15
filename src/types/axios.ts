// axios响应的data的结构
export interface CustomResponseType<T> {
    code: number;
    message: string;
    data: T;
}
