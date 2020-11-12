import React, { useEffect } from 'react'
import Context from '../../contexts/loginContext'
import { useContext } from 'react'
export default function Home() {
    const { userData } = useContext(Context)
    return (
        <div>
            {
                userData.token ? <div>
                    <h1>Welcome to back</h1>
                </div> : <div>đăng nhập thất bại</div>
            }
        </div>

    )
}
