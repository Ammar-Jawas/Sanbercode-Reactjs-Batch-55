import axios from "axios"
import { useState, useEffect } from "react"


export const useData = () => {
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

    return {
        data: movie
    }
}