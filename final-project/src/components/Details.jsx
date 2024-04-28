import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details() {

    const id = useParams();
    const [detail, setDetail] = useState({});

    const fetchDetail = async () => {
        try {
            const response = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            setDetail(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetail()
    },[])


    const renderData = () => {
        return detail.map((param) => {
             return (
                <h1>{param.tiitle}</h1>
            )
        })
    }

  return (
    <div>
        <h1>{renderData()}</h1>
    </div>
  )
}
