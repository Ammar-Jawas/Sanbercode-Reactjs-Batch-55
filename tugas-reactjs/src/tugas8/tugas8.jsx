import React, { useState } from 'react'

function Tugas8() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
        
        <div className="container">
        <p>{count}</p>
        {count > 10 ?  <p>State count lebih dari 10</p> : ""}
        <button className='button' onClick={handleCount}>Tambah</button>
        </div>
    </div>
    )
}

export default Tugas8