import './Register.css'
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Notice from '../misc/Notice';
const Sign = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const history = useHistory();
    const [type, setType] = useState();
    const [notice, setNotice] = useState();
    const onSubmit = async (obj, e) => {

        e.preventDefault();
        try {
            await Axios.post('http://localhost:7000/users/register', obj);
            setType('succes')

            setNotice('Đăng nhập thành công');
            history.push('/login');

        } catch (error) {
            error.response.data.msg && setNotice(error.response.data.msg);
            setType('error')
        }

    }
    let comfirmPasss = watch("password");
    return (
        <div className="sign-up-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Welcome to Supper club</h1>
                {
                    notice && <Notice message={notice} type={type} clearMsg={
                        () => setNotice(undefined)
                    }></Notice>
                }
                <input className="input-signup" name="username" type="text" placeholder="Username or email" ref={register({ required: true, minLength: 2 })} />

                {errors.username && errors.username.type === "required" && <p>this is required</p>}
                {errors.username && errors.username.type === "minlength" && <p>this field must be greater than 2 characters</p>}
                <input className="input-signup" type="password" name="password" placeholder="Password" ref={register({ required: true, minLength: 5 })} />

                {errors.password && errors.password.type === "required" && <p>this is required</p>}
                {errors.password && errors.password.type === "minlength" && <p>this field must be greater than 5 characters</p>}

                <input className="input-signup" type="password" name="confirmPassword" placeholder="Confirm password" ref={register({ validate: value => value === comfirmPasss || "The passwords do not match" })} />

                {errors.confirmPassword && <p> {errors.confirmPassword.message}</p>}

                <button type="submit">
                    Create Account
                    </button>
                <div>
                    <a href="/login" className=""> or Login</a>
                </div>
            </form>
        </div >
    );
};
export default Sign;