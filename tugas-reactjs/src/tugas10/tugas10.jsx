import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'flowbite-react'
import Tugas12 from '../tugas12/tugas12'

function Tugas10() {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
        .then((res) => {
            setData([...res.data])
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const handleScore = (param) => {
        if(param < 50){
            return 'E'
        }else if(param >= 50 && param < 60){
            return 'D'
        }else if(param >= 60 && param < 70){
            return 'C'
        }else if(param >= 70 && param < 80){
            return 'B'
        }else{
            return 'A'
        }
    }

  return (
    <div className="overflow-x-auto mx-[150px] my-[50px] rounded-xl drop-shadow-xl bg-white px-4">
    <Tugas12/>
    <Table>
      <Table.Head className='bg-violet-400 text-white'>
        <Table.HeadCell>No</Table.HeadCell>
        <Table.HeadCell>Nama</Table.HeadCell>
        <Table.HeadCell>Mata Kuliah</Table.HeadCell>
        <Table.HeadCell>Nilai</Table.HeadCell>
        <Table.HeadCell>Index Nilai</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
      {data !== null && data.map((res, index) =>{
        return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white p-3">
            {index + 1}
          </Table.Cell>
          <Table.Cell>{res.name}</Table.Cell>
          <Table.Cell>{res.course}</Table.Cell>
          <Table.Cell>{res.score}</Table.Cell>
          <Table.Cell>{handleScore(res.score)}</Table.Cell>
          <Table.Cell>
            <a href="#" className="font-medium text-white hover:underline mr-4 rounded-lg p-2 bg-green-400 border-solid">
              Edit
            </a>
            <a href="#" className="font-medium text-white hover:underline border-solid bg-red-500 p-2 rounded-lg">
              Delete
            </a>
          </Table.Cell>
        </Table.Row>    
        )
      })}
      </Table.Body>
    </Table>
  </div>
  )
}

export default Tugas10