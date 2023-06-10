import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

function Facts() {
   const {data: catData, isLoading, isError, refetch} = useQuery(['cat'], ()=>{
    return(
        Axios.get('https://catfact.ninja/fact')
        .then((res)=>res.data)
    )
   })

   if (isLoading){
        return <h1>Loading...</h1>
   }

   if (isError){
    return <h1>Sorry, there was an error</h1>
   }

    return (
    <div className='catfacts'>
        <h1>Cat Facts 😸</h1>
        <h2>{catData?.fact}</h2>
        <button onClick={refetch}>
            Update Data
        </button>
    </div>
    )
} 

export default Facts;