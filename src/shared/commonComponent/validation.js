export const TabelValidation = (value) => {
    if (value === 0) {
        return false
    } else if (value === "0") {
        return false
    } else if (value === null) {
        return false
    } else if (value === undefined) {
        return false
    } else if (value === '' || value === "") {
        return false
    } else {
        return true
    }
}