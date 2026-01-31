"use client"

import { useEffect } from "react"

export default function AboutError({ error, reset }: { error: Error & { digest?: string };  reset: () => void}) {
    
    useEffect(() => {
        console.error(error)
    }, [])
    return (
        <div>
            <h1>
                About error handling
            </h1>
            <button onClick={() => reset()}>Click me</button>
        </div>
    )
}
