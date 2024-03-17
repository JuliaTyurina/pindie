// GET

async function getData(url) {
    try {
        const response = await fetch(url)
        if (response.status !== 200) {
            throw new Error('Ошибка получения данных')
        }
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export const isResponseOk = (response) => {
    return !(response instanceof Error);
};

export function normalizedDataObject(obj) {
    return {
        ...obj,
        category: obj.categories,
        users: obj.users_permissions_users,
    }
}

export function normalizedData(data) {
    return data.map((item) => {
        return normalizedDataObject(item)
    })
}

export async function getNormalizedGameDataById(url, id) {
    const data = await getData(`${url}/${id}`)
    return isResponseOk(data) ? normalizedDataObject(data) : data;
}

export async function getNormalizedGameDataByCategory(url, category) {
    const data = await getData(`${url}?categories.name=${category}`)
    return isResponseOk(data) ? normalizedData(data) : data;
}

// POST

export async function authorize(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.status !== 200) {
            throw new Error('Ошибка авторизации')
        }
        const result = await response.json()
        return result
    } catch (error) {
        return error
    }
}

export async function getMe(url, jwt) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${jwt}` },
        });
        if (response.status !== 200) {
            throw new Error("Ошибка получения данных");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
};

export function setJWT(jwt) {
    return localStorage.setItem('jwt', jwt)
}

export function getJWT() {
    return localStorage.getItem('jwt')
}

export function removeJWT() {
    return localStorage.removeItem('jwt')
}

export function checkIfUserVoted(game, userID) {
    return game.users.find((user) => user.id === userID)
}

export async function vote(url, jwt, usersArray) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify({
                users_permissions_users: usersArray
            })
        });
        if (response.status !== 200) {
            throw new Error("Ошибка голосования");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
};