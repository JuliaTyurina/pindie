import { create } from 'zustand'
import { getJWT, getMe, removeJWT, setJWT } from '@/app/api/api-utils'
import { endpoints } from '@/app/api/config'

export const useStore = create((set) => ({
    isAuth: false,
    user: null,
    token: null,
    login: (user, token) => {
        set({ isAuth: true, user: user, token: token })
        setJWT(token)
    },
    logout: () => {
        set({ isAuth: false, user: null, token: null })
        removeJWT()
    },
    checkAuth: async () => {
        const jwt = getJWT()
        if (jwt) {
            const user = await getMe(endpoints.me, jwt)
            if (user) {
                set({ isAuth: true, user: user, token: jwt })
                setJWT(jwt)
            } else {
                set({ isAuth: false, user: null, token: null })
                removeJWT()
            }
        } else {
            set({ isAuth: false, user: null, token: null })
        }
    }
}))