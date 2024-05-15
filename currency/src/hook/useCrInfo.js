import { useState, useEffect } from "react";

function useCurrency(Currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.min.json`)
            .then((response) => response.json())
            .then((response) => setData(response[Currency]))
            .catch((error) => console.log('something went wrong with API'))
    })
    return data
}
export default useCurrency