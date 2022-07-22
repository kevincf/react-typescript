import { useState } from "react"

interface Props {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 }: Props) => {
    const [counter, setCounter] = useState({
        counter: initialValue,
        clicks: 0
    })

    const handleClick = (increment: number) => {
        setCounter({
            counter: counter.counter += increment
            clicks: counter.clicks += 1,
        })
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => handleClick(1)}>
                +1
            </button>
            <button onClick={() => handleClick(5)}>
                +5
            </button>
        </>
    )
}
