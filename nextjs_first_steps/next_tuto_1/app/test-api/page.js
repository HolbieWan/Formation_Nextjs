"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

// https://dumbstockapi.com/stock?exchanges=NYSE

const Page = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dumbstockapi.com/stock?exchanges=NYSE"
        )
        setData(response.data)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      // nettoyer au démontage du composant
      // cancelRequest()
    }
  }, []);
   return (
     <div>
       {loading ? (
       <p>Chargement...</p>
       ) : (
           <ul>
             {data &&
               data.map((item) => (
                 <li key={item.ticker}>{item.name}</li>
               ))
             }
           </ul>
       )}
     </div>
  )
}

export default Page
