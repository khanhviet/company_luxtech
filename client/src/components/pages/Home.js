import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'
export default function Home() {
    const { isAuthenticated } = useContext(LoginContext)
    return isAuthenticated ? (
        <div>
            <h1>Welcome to back</h1>
        </div>) : (<div>đăng nhập thất bại</div>
        )
}
