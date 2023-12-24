function delay(max: number = 3333, min: number = 450): Promise<any> {
    return new Promise((resolve) =>
        setTimeout(
            resolve,
            Math.max(min, Math.floor(Math.random() * Math.floor(max)))
        )
    )
}

export default delay
