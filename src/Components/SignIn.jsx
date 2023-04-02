import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
    const [data, setData] = useState({ fname: '', pass: '' });

    const handleSubmit = e => {
        e.preventDefault();
        alert('login Successful');
        console.log(data);
    }

    return (
        <>
            <div className='login-container flex-align'>
                <div className="forms">
                    <div className="form-content flex-align">
                        <div className="login-form">
                            <div className="title">Login</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" name='fname' value={data.fname} onChange={e => setData({ ...data, fname: e.target.value })} placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" name='pass' value={data.pass} onChange={e => setData({ ...data, pass: e.target.value })} placeholder="Enter your password" required />
                                    </div>
                                    <div className="text"><a href="#">Forgot password?</a></div>
                                    <div className="button input-box">
                                        <input type="submit" onClick={handleSubmit} value="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">Don't have an account? <Link to={'/signup'} htmlFor="flip">Sigup now</Link></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn