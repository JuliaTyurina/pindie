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

export const normalizeDataObject = (obj) => {
    let str = JSON.stringify(obj)
    
    str = str.replaceAll('_id', 'id');
    const newObj = JSON.parse(str)
    const result = { ...newObj, category: newObj.categories }
    return result;
  } 

export function normalizedData(data) {
    return data.map((item) => {
        return normalizeDataObject(item)
    })
}

export async function getNormalizedGameDataById(url, id) {
    const data = await getData(`${url}/${id}`)
    return isResponseOk(data) ? normalizeDataObject(data) : data;
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

export const setJWT = (jwt) => {
    document.cookie = `jwt=${jwt}`
    localStorage.setItem('jwt', jwt)
  }

export const getJWT = () => {
  if (document.cookie === '') {
    return localStorage.getItem('jwt')
  }
  const jwt = document.cookie.split(';').find((item) => item.includes('jwt'))
  return jwt ? jwt.split('=')[1] : null
}

export const removeJWT = () => {
  document.cookie = 'jwt=;'
  localStorage.removeItem('jwt')
}

export function checkIfUserVoted(game, userID) {
    return game.users.find((user) => user.id === userID)
}

export async function getUserVotedGames(url, userID) {
    try {
        const data = await getData(url);
        isResponseOk(data) ? normalizedData(data) : data;

        const votedGames = data.filter((game) => {
            return game.users.find((user) => {
                return user._id === userID
            });
        });
        return normalizedData(votedGames);
    } catch (error) {
        return error;
    }
}

export async function vote(url, jwt, usersArray) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify({ users: usersArray })
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