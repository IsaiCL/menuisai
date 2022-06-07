import React, { useEffect, useState } from "react";

export function Operation() {
    const [number, setNumber] = useState({ one: 0, two: 0 });
    const [multi, setMulti] = useState();

    useEffect(() => {
        const { one, two } = number
        setMulti(Number(one) * Number(two))
    }, [number])

    const handleInput = (event) => {
        const { name, value } = event.target
        setNumber({ ...number, [name]: value })
    }

    return <>
        <div className="Operations">
        <h2>MULTIPLICATION</h2>
            Type the numbers: <input className="input" onChange={handleInput} name="one" value={number.one} /><b>x</b>
            <input className="input" onChange={handleInput} name="two" value={number.two} /><b>=</b>
            <input value={multi}/>
        </div>
    </>
}

export default Operation;