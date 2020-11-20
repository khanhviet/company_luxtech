import React, { useContext, useState } from 'react'
import { LoginContext } from '../../../contexts/loginContext'
import { Table, Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import store from '../../../app/store'
import './Home.css'
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import Body from '../../layouts/body/Body';
import User from '../User';
export default function Home() {
    // const { isAuthenticated } = useContext(LoginContext)
    const history = useHistory();
    // if (!store.getState().isAuthenticated) {
    //     history.push('/login')
    // }
    return <div>
        <Header></Header>
        <div className="container">
            <Body content={User}></Body>
        </div>
        <Footer></Footer>
    </div>
}
