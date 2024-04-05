import React from 'react'
import {Table} from 'flowbite-react'

function Tugas9() {
  return (
    <div className="overflow-x-auto mx-[150px] my-[50px] rounded-xl drop-shadow-xl bg-white px-4">
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
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            1
          </Table.Cell>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Algoritma</Table.Cell>
          <Table.Cell>80</Table.Cell>
          <Table.Cell>A</Table.Cell>
          <Table.Cell>
            <a href="#" className="font-medium text-white hover:underline mr-4 rounded-lg p-2 bg-green-400 border-solid">
              Edit
            </a>
            <a href="#" className="font-medium text-white hover:underline border-solid bg-red-500 p-2 rounded-lg">
              Delete
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            2
          </Table.Cell>
          <Table.Cell>Doe</Table.Cell>
          <Table.Cell>Matematika</Table.Cell>
          <Table.Cell>70</Table.Cell>
          <Table.Cell>B</Table.Cell>
          <Table.Cell>
            <a href="#" className="font-medium text-white hover:underline mr-4 rounded-lg p-2 bg-green-400 border-solid">
              Edit
            </a>
            <a href="#" className="font-medium text-white hover:underline border-solid bg-red-500 p-2 rounded-lg">
              Delete
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">3</Table.Cell>
          <Table.Cell>Frank</Table.Cell>
          <Table.Cell>Kalkulus</Table.Cell>
          <Table.Cell>60</Table.Cell>
          <Table.Cell>C</Table.Cell>
          <Table.Cell>
            <a href="#" className="font-medium text-white hover:underline mr-4 rounded-lg p-2 bg-green-400 border-solid">
              Edit
            </a>
            <a href="#" className="font-medium text-white hover:underline border-solid bg-red-500 p-2 rounded-lg">
              Delete
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">4</Table.Cell>
          <Table.Cell>Jason</Table.Cell>
          <Table.Cell>Basis Data</Table.Cell>
          <Table.Cell>90</Table.Cell>
          <Table.Cell>A</Table.Cell>
          <Table.Cell>
            <a href="#" className="font-medium text-white hover:underline mr-4 rounded-lg p-2 bg-green-400 border-solid">
              Edit
            </a>
            <a href="#" className="font-medium text-white hover:underline border-solid bg-red-500 p-2 rounded-lg">
              Delete
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
  )
}

export default Tugas9