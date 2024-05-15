// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// function Github() {
//     const data = useLoaderData()


//     // const [data, setData] = useState([])

//     // useEffect(() => {
//     //     fetch('https://api.github.com/users/Pradeepsutharr')
//     //         .then((Response) => Response.json())
//     //         .then((data) => {
//     //             console.log(data)
//     //             setData(data)
//     //         })
//     // })

//     return (
//         <div className='bg-gray-900 text-white text-center flex flex-wrap items-center justify-center'>
//             <div className='w-1/4'><img className='w-full rounded-full overflow-hidden' src={data.avatar_url} alt="" /></div>
//             <div>
//                 <h1 className=' p-5 text-3xl'>Username : {data.login}</h1>
//                 <p className=' p-5 text-3xl'>Repositries: {data.public_repos} <a
//                     href="https://github.com/Pradeepsutharr?tab=repositories"
//                     className="hover:underline text-orange-500"
//                     target="_blank"
//                     rel="noreferrer"
//                 >
//                     Visit
//                 </a></p>
//             </div>
//         </div >
//     )
// }

// export default Github





//  Optimized way For faster Fetching 

import React from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()

    return (
        <div className='bg-gray-900 py-5 text-white text-center flex flex-wrap items-center justify-center'>
            <div className='w-1/5'><img className='w-full rounded-full overflow-hidden' src={data.avatar_url} alt="" /></div>
            <div>
                <h1 className=' p-5 text-3xl'>Username : {data.login}</h1>
                <p className=' p-5 text-3xl'>Repositries: {data.public_repos} <a
                    href="https://github.com/Pradeepsutharr?tab=repositories"
                    className="hover:underline text-orange-500"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit
                </a></p>
            </div>
        </div >
    )
}
export default Github

//  Pass this method(githubLoader) in Loader in index.js
export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/Pradeepsutharr')
    return res.json()
}


