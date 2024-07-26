'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User } from '@barber/core'
import useLocalStorage from '../hooks/useLocalStorage'

export interface UserContextProps {
    loading: boolean
    user: User | null
    enter: (user: User) => Promise<void>
    exit: () => void
}

const UserContext = createContext<UserContextProps>({} as any)

export function UserProvider({ children }: any) {
    const { get, set } = useLocalStorage()
    const router = useRouter()
    const [loading, setloading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    const userLoading = useCallback(
        function () {
            try {
                const localUser = get('user')
                if (localUser) {
                    setUser(localUser)
                }
            } finally {
                setloading(false)
            }
        },
        [get]
    )

    async function enter(user: User) {
        setUser(user)
        set('user', user)
    }

    function exit() {
        router.push('/')
        setUser(null)
        set('user', null)
    }

    useEffect(() => userLoading(), [userLoading])

    return (
        <UserContext.Provider
            value={{
                loading,
                user,
                enter,
                exit,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
