import { useState, useEffect } from "react";

function useQuery<T>(promise: Promise<T>, initial: T | undefined = undefined, dependencies: any[] = []) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any | undefined>()
    const [data, setData] = useState<T | undefined>(initial)
    useEffect(() => {
        setLoading(true)
        promise.then((result) => {
            setLoading(false)
            setData(result)
            setError(undefined)
        }).catch((error) => {
            setLoading(false)
            setError(error)
        })
    }, dependencies)
    return { loading, error, data }
}

export default useQuery
