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

export const getAllMessages = async () => {
    const response = await fetch(`${rootUrl}/api/v1/messages`)
    if(response.ok) {
        const allMessages = response.json()
        return allMessages
    } else {
        throw response
    }
}

export const sendMessage = async (body) => {
    console.log(body)
    const response = await fetch(`${rootUrl}/api/v1/messages`, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if(response.ok) {
        const res = response.json()
        return res
    } else {
        throw response
    }
}