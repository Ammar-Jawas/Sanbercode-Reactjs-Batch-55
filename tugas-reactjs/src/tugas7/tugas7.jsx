import React from 'react'
import Tugas12 from '../tugas12/tugas12'

function Tugas7(props) {
  return (
    <div className="App">
      <Tugas12/>
    <div className="mx-[150px] my-[50px] rounded-xl drop-shadow-xl bg-white p-4">
      <h1 className="h1">Data diri peserta kelas ReactJs</h1>
      <hr className="hr"></hr>
      <ul style={{ textAlign: 'left' }}>
        <li>Nama Lengkap: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Batch pelatihan: {props.batch}</li>
      </ul>
      
    </div>
  </div>
  )
}

export default Tugas7