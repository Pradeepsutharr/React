import { useEffect, useState} from "react"

import React from 'react'

function useCurrency(currency) {
const [data,setData] = useState({})

    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err)=> console.log(`${err}Api Call Failed`))
    },[currency])
  return data
}

export default useCurrency;
