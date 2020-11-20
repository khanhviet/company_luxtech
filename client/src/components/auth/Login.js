import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { LoginContext } from '../../contexts/loginContext';
import Notice from '../misc/Notice'
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, isAuthenticated } from '../../features/user/UserSlice';
export default function Login() {
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const hasToken = useSelector(selectUser);
    const dispatch = useDispatch();
    const [notice, setNotice] = useState();
    const [type, setType] = useState();
    const submit = async (obj, e) => {
        try {
            e.preventDefault();
            const loginRes = await Axios.post('http://localhost:7000/users/login', obj)
            localStorage.setItem('auth-token', loginRes.data.token);
            setNotice('thành công');
            setType('sucess');
            dispatch(isAuthenticated());
            history.push('/');
        }
        catch (err) {
            err.response.data.msg && setNotice(err.response.data.msg);
            setType('error');
        }
    }
    // console.log(err, !!err)

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(submit)}>
                <h1>Welcome to Supper club</h1>
                {
                    notice && <Notice message={notice} type={type} clearMsg={() =>
                        setNotice(undefined)
                    }></Notice>
                }
                <input className="input-signup" name="username" type="text" placeholder="Username or email" ref={register({ required: true })} />
                {errors.username && errors.username.type === "required" && <p>the field cannot be left blank</p>}
                {errors.username && errors.username.type === "minlength" && <p>this is field required min leight of 2</p>}
                <input className="input-signup" name="password" type="password" placeholder="Password" ref={register({ required: true })} />
                {errors.password && errors.password.type === "required" && <p>the field cannot be left blank</p>}
                <button className="btn btn-signup" type="submit"> Login </button>
                <div>
                    <a href="/signup" className=""> or Signup</a>
                </div>
            </form>

        </div >
    )
}

