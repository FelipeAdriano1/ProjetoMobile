class RequestError extends Error {
    constructor(public message: string, public status: number) {
        super(message)
        Object.setPrototypeOf(this, RequestError.prototype)
    }
}

export { RequestError }