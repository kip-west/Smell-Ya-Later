const rootUrl = 'http://localhost:1337'

export const fetchItems = async () => {
    const response = await fetch(`${rootUrl}/api/v1/items`)
    if(response.ok) {
        const favorites = response.json()
        return favorites
    } else {
        throw response
    }
}