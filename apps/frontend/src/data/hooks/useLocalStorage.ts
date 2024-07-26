'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((chave: string) => {
        const localValue = window?.localStorage?.getItem(chave)
        return localValue ? JSON.parse(localValue) : null
    }, [])

    const set = useCallback((chave: string, valor: any) => {
        window?.localStorage?.setItem(chave, JSON.stringify(valor))
    }, [])

    return { get, set }
}
