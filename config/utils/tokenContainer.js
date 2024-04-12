export const setAccessToken = (token) => {

    localStorage.setItem("accessToken", token)
}

export const getAccessToken = () => {
    let tempToken = localStorage?.getItem("accessToken")
    if (tempToken)
        return tempToken
}

export const removeAccessToken = () => {
    localStorage.removeItem("accessToken")
}

export const clearAccessToken = () => {
    localStorage.clear()
}

