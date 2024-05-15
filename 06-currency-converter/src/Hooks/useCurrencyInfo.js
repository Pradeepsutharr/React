import { useEffect, useState } from "react";

function useCurrencyInfo(Currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.min.json`
        )
            .then((res) => res.json())
            .then((res) => setData(res[Currency]))
            .catch((error => console.log("Api Fetch Faild")))
        // console.log(data);
    }, [Currency]);
    // console.log(data)
    return data;
}
export default useCurrencyInfo;
 