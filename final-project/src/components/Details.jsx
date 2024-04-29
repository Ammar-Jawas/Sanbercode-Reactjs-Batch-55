import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {HiCurrencyDollar, HiLocationMarker, HiOutlineClipboard, HiOutlineDotsVertical, HiOutlineBriefcase} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function Details() {

    const [detail, setDetail] = useState({});
    const {id} = useParams();
    
    const fetchDetail = async () => {
        try {
            const response = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            setDetail(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAlert = () => {
        Swal.fire({
            title: "Thank You!",
            text: "Check Your Email!",
            icon: "success"
          });
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

    const convertStatus = (param) => {
        if(param === 1){
            return 'Open'
        }else{
            return 'Close'
        }
    }

    

    useEffect(() => {
        fetchDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

  return (
   
    <section className="">
        <div className="container mx-auto flex flex-col items-center px-4 my-10 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl rounded-xl drop-shadow-xl bg-white">
            <div className='flex items-center justify-start w-full gap-2 mb-10'>
                <img src={detail.company_image_url} alt="" className='w-20 h-20' />
                <h1 className='text-2xl font-bold'>{detail.company_name}</h1>
            </div>
            <h1 className="text-4xl text-left w-full font-bold sm:text-5xl">{detail.title}</h1>
            <p className="mt-8 mb-8 text-lg text-left w-full">{detail.job_description}</p>
            <p className="mt-8 mb-8 text-lg text-left w-full">{detail.job_qualification}</p>
            <div className="flex justify-start flex-row items-center w-full flex-wrap">
                <HiLocationMarker/>
                <p className="font-normal text-gray-700 dark:text-gray-400 ml-1">
                    {detail.job_type} 
                </p>
                <HiOutlineDotsVertical/>
                <p className="font-normal text-gray-700 dark:text-gray-400 mr-5">
                    {detail.company_city}
                </p>
                <HiOutlineClipboard/>
                <p className="font-normal text-gray-700 dark:text-gray-400 mr-5 ml-1">
                    {detail.job_tenure}
                </p>
                <HiOutlineBriefcase/>
                <p className="font-normal text-gray-700 dark:text-gray-400 mr-5 ml-1">
                    {convertStatus(detail.job_status)}
                </p>
            </div>
            <div className='flex justify-start flex-row items-center w-full mt-2'>
                <HiCurrencyDollar/>
                <p className="font-normal text-gray-700 dark:text-gray-400 ml-1">
                    {convertPrice(detail.salary_min)}
                </p>
                <p> - </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {convertPrice(detail.salary_max)}
                </p>
            </div>
            <div className="flex flex-wrap w-full justify-start mt-10">
                <button onClick={handleAlert} className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-400 text-white">Register Now!</button>
                <Link to={'/'}>
                    <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Home</button>
                </Link>
            </div>
        </div>
    </section>
    // <Card className="mb-10 items-center" imgSrc={detail.company_image_url} horizontal>
    //     <div className="flex flex-col">
    //         <div className="gap-4 flex flex-col">
    //             <h5 className="text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
    //                 {detail.title}
    //             </h5>
    //             <div className="flex text-left flex-row flex-wrap items-center">
    //                 <HiLocationMarker/>
    //                 <p className="font-normal text-gray-700 dark:text-gray-400 ml-1">
    //                     {detail.job_type} 
    //                 </p>
    //                 <HiOutlineDotsVertical/>
    //                 <p className="font-normal text-gray-700 dark:text-gray-400 mr-5">
    //                     {detail.company_city}
    //                 </p>
    //                 <HiOutlineClipboard/>
    //                 <p className="font-normal text-gray-700 dark:text-gray-400 mr-5">
    //                     {detail.job_tenure}
    //                 </p>
    //                 <HiCurrencyDollar/>
    //                 <p className="font-normal text-gray-700 dark:text-gray-400">
    //                     {detail.salary_min}
    //                 </p>
    //                 <p> - </p>
    //                 <p className="font-normal text-gray-700 dark:text-gray-400">
    //                     {detail.salary_max}
    //                 </p>
    //             </div>
    //         </div>
    //         {/* <Link to={`/job/${param.id}`}>
    //             <Button>Details</Button>
    //         </Link> */}
    //     </div>
    // </Card>
  )
}
