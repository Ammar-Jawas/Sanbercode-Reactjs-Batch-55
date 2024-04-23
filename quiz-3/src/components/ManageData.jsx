import React, { useEffect, useState } from 'react'
import { Table, Button, Label, TextInput } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
// import TextTruncate from 'react-text-truncate'

function ManageData() {

  const [movie, setMovie] = useState([])
  const [fetchStatus, setFetchStatus] = useState(true)

  const getResponse = async () => {
      try {
          const response = await axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
          setMovie(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      if(fetchStatus === true){
          getResponse()
          setFetchStatus(false)
      }
  },[fetchStatus, setFetchStatus])

    const [input, setInput] = useState({
      name: '',
      description: '',
      category: '',
      release_year: 2009,
      size: 0,
      price: 0,
      rating: 0,
      image_url: '',
      is_android_app: 0,
      is_ios_app: 0
    })

    const [currentId, setCurrentId] = useState(-1)

    const handleInput = (event) => {
      const {name, value} = event.target;
      setInput({...input, [name]: value})
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      let{
        name,
        description,
        category,
        release_year,
        size,
        price,
        rating,
        image_url,
        is_android_app,
        is_ios_app
      } = input

      if(currentId === -1){
        await axios.post('https://backendexample.sanbercloud.com/api/mobile-apps',{
          name,
          description,
          category,
          release_year,
          size,
          price,
          rating,
          image_url,
          is_android_app,
          is_ios_app
        })
        setFetchStatus(true)
      }else{
        axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {
          name,
          description,
          category,
          release_year,
          size,
          price,
          rating,
          image_url,
          is_android_app,
          is_ios_app
        })
        setFetchStatus(true)
      }

      setCurrentId(-1)

      setInput({
        name: '',
        description: '',
        category: '',
        release_year: '',
        size: 0,
        price: 0,
        rating: 0,
        image_url: '',
        is_android_app: 0,
        is_ios_app: 0,
      })
      setFetchStatus(true)
    }

    const handleDelete = async (event) => {
      let ID_MOBILE_APPS = parseInt(event.target.value)

      await axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
      setFetchStatus(true)


    }

    const handleEdit = async (event) => {
      let ID_MOBILE_APPS = parseInt(event.target.value)

      setCurrentId(ID_MOBILE_APPS)

      const response = await axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
      
      let data = response.data

      setInput({
        name: data.name,
        description: data.description,
        category: data.category,
        release_year: data.release_year,
        size: data.size,
        price: data.price,
        rating: data.rating,
        image_url: data.image_url,
        is_android_app: data.is_android_app,
        is_ios_app: data.is_ios_app,
      })


    }

    const convertSize = (param) => {
      if(param >= 1000){
        return `${param/1000} GB`
      }else{
        return `${param} MB`
      }
    }

    const convertPrice = (param) => {
      if(param !== 0){
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(param);
      }else{
        return 'Free'
      }
    }

    const renderData = () => {
        return movie.map((param, index) => {
            return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                    </Table.Cell>
                    <Table.Cell className='p-4'>{param.name}</Table.Cell>
                    <Table.Cell className='p-4'>{param.category}</Table.Cell>
                    <Table.Cell className='p-4'>{param.description}</Table.Cell>
                    {/* <TextTruncate className='p-4'
    line={2}
    element="span"
    truncateText="…"
    text={param.description}
    textTruncateChild={<a href="">Read on</a>}
/> */}
                    <Table.Cell className='p-4'>{convertPrice(param.price)}</Table.Cell>
                    <Table.Cell className='p-4'>{param.rating}</Table.Cell>
                    <Table.Cell className='p-4'>{param.release_year}</Table.Cell>
                    <Table.Cell className='p-4'>{convertSize(param.size)}</Table.Cell>
                    <Table.Cell className='p-4'>{param.is_android_app}</Table.Cell>
                    <Table.Cell className='p-4'>{param.is_ios_app}</Table.Cell>
                    <Table.Cell>
                    <button onClick={handleEdit} value={param.id} className="font-medium text-white hover:underline border-solid bg-green-500 p-2 rounded-lg mb-2">Edit</button>
                    <button onClick={handleDelete} value={param.id} className="font-medium text-white hover:underline border-solid bg-red-500 p-2 rounded-lg">Delete</button>
                    </Table.Cell>
                </Table.Row>
            )
        })
    }

    
  return (
    <div>
        {/* batas awal Navbar Section */}
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Quiz 3 | Nama anda
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/managed-data"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Manage Data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        {/* batas akhir Navbar Section */}
        {/* batas awal table section */}
        <div className="shadow-lg bg-white m-10 rounded-lg overflow-hidden">
            <Table>
              <Table.Head className='bg-emerald-700'>
                  <Table.HeadCell className='p-4'>No</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Nama</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Category</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Description</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Price</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Rating</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Release Year</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Size</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Is_Android_App</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Is_IOS_App</Table.HeadCell>
                  <Table.HeadCell className='p-4'>Action</Table.HeadCell>
                  <Table.HeadCell>
                      <span className="sr-only">Edit</span>
                  </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y text-center">
                {renderData()}
              </Table.Body>
            </Table>
        </div>
        {/* batas akhir table section */}
        {/* batas awal form section */}
        <h1 className='mx-10 text-2xl font-bold'>Create Data Game</h1>
        <div className=' bg-white m-10 rounded-lg shadow-lg'>
            <h3 className='px-4 pt-4 text-black'>Gambar data game</h3>
            <hr className='mx-4 mt-2'/>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="image_url" value="Image Url" />
                    </div>
                    <TextInput onChange={handleInput} value={input.image_url} sizing='md' id="image_url" type="text" name='image_url' required />
                </div>
                <h3 className='text-black'>Data game</h3>
                <hr/>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput onChange={handleInput} value={input.name} sizing='md' id="name" type="text" name='name' required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="category" value="Category" />
                    </div>
                    <TextInput onChange={handleInput} value={input.category} sizing='md' id="category" type="text" name='category' required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="description" value="Description" />
                    </div>
                    <TextInput onChange={handleInput} value={input.description} sizing='md' id="description" type="text" name='description' required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="price" value="Price" />
                    </div>
                    <TextInput onChange={handleInput} value={input.price} min={0} sizing='md' id="price" type="number" name='price' required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="rating" value="Rating" />
                    </div>
                    <TextInput onChange={handleInput} value={input.rating} min={0} max={5} sizing='md' id="rating" type="number" name='rating' required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="release_year" value="Release year" />
                    </div>
                    <TextInput onChange={handleInput} value={input.release_year} min={2009} max={2023} sizing='md' id="release_year" type="number" name='release_year' required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="size" value="Size" />
                    </div>
                    <TextInput onChange={handleInput} value={input.size} sizing='md' id="size" type="number" name='size' required />
                </div>
                <h3 className='text-black'>Jenis Perangkat</h3>
                <hr/>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="android" value="Android?" />
                    </div>
                    <TextInput onChange={handleInput} value={input.is_android_app} sizing='md' id="android" type="number" name='is_android_app' required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="ios" value="Ios?" />
                    </div>
                    <TextInput onChange={handleInput} value={input.is_ios_app} sizing='md' id="ios" type="number" name='is_ios_app' required />
                </div>
                <Button type="submit" className='p-3 text-white border-black justify-center bg-blue-500'>Submit</Button>
            </form>
        </div>
        {/* batas akhir form section */}
    </div>
  )
}

export default ManageData