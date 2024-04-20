import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button, Checkbox, Label, TextInput  } from 'flowbite-react'
import Tugas12 from '../tugas12/tugas12'

function Tugas11() {
    const [data, setData] = useState(null)
    const [input, setInput] = useState({
        name: '',
        course: '',
        score: 0
    })

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        if(fetchStatus === true){
            axios.get('https://backendexample.sanbercloud.com/api/student-scores')
            .then((res) => {
                setData([...res.data])
            })
            .catch((error) => {
            })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "name"){
            setInput( {...input, name : value} )
          }else if(name === "course"){
            setInput( {...input, course : value} )
          }else if(name === "score"){
            setInput( {...input, score : value} )
          }
    }

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

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name,
            course,
            score
          } = input
        
        axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
        })

        setInput({
            name: "",
            course: "",
            score: 0
        })
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
            setFetchStatus(true)
        })
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
            <button onClick={handleDelete} value={res.id} className="font-medium text-white hover:underline border-solid bg-red-500 p-2 rounded-lg">Delete</button>
          </Table.Cell>
        </Table.Row>    
        )
      })}
      </Table.Body>
    </Table>

    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 my-10">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput onChange={handleInput} value={input.name} id="name" type="text" name='name' placeholder="name" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="course" value="Mata Kuliah" />
        </div>
        <TextInput onChange={handleInput} value={input.course} id="course" type="text" name='course' required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="score" value="Nilai" />
        </div>
        <TextInput onChange={handleInput} value={input.score} id="score" type="number" name='score' min={0} max={100} required />
      </div>
      {/* <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div> */}
      <Button type="submit" className='p-3 text-white border-black justify-center bg-green-500'>Submit</Button>
    </form>
  </div>
  )
}

export default Tugas11