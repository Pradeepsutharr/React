import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <span>Please Login</span>
    return <span>Hello {user.username}</span>
}

export default Profile
