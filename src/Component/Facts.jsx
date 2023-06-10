import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'
import { useQuery } from '@tanstack/react-query'

function Facts() {
   const {data, isLoading} = useQuery(['cat'], ()=>{
    return(
        Axios.get('https://catfact.ninja/fact')
        .then((res)=>res.data)
    )
   })

   if (isLoading){
        return <h1>Loading...</h1>
   }

    return (
    <div className='catfacts'>
        <h1>Cat Facts 😸</h1>
        <h2>{data?.fact}</h2>
    </div>
    )
}