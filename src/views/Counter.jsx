import React, { useState } from 'react'

export const Counter = ({increaseDecrease = 1, valorInicial = 0}) => {
    
    const [counter, setCounter] = useState(valorInicial)
    
    const suma = () => {
        setCounter(counter + increaseDecrease)
    }

    const resta = () => {
        setCounter(counter - increaseDecrease)
    }

    const reset = () => {
        setCounter(valorInicial)
    }

  return (
    <div>
        <h1>Contadores</h1>
        <div>
            <h2>Contador: {counter}</h2>
        </div>
        <div>
            <button onClick={suma}>Sumar</button>
            <button onClick={resta}>Restar</button>
            <button onClick={reset}>Reset</button>
        </div>
        <hr />
    </div>
  )
}
