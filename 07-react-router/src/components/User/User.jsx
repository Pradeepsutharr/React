import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { UserId } = useParams()
    return (
        <div className='bg-gray-900 text-white p-5 text-center text-3xl'>
            User: {UserId}
        </div>
    )
}

export default User
