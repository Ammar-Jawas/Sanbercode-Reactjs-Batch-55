import React, { useState } from 'react'

function Tugas8() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
        
        <div className="mx-[150px] my-[50px] rounded-xl drop-shadow-xl bg-white p-4">
        <p>{count}</p>
        {count > 10 ?  <p>State count lebih dari 10</p> : ""}
        <button className='w-full p-3 my-3 bg-emerald-400 rounded-xl text-white' onClick={handleCount}>Tambah</button>
        </div>
    </div>
    )
}

export default Tugas8