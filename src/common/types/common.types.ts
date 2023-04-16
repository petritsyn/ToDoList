export type ResponseAppType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}