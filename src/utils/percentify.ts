/**
 * Trivial function to calcuate a rounded percentage.
 */
const percentify = (numerator: number, denominator: number) => {
    return Math.ceil((numerator / denominator) * 100)
}

export default percentify
