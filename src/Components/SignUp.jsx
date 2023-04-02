import React, { useState } from 'react';

const SignUp = () => {
    const [data, getData] = useState({ fname: '', email: '', phone: '', username: '', cpass: '', pass: '' });

    const UserDetails = [
        {
            type: `Full Name`,
            placeholder: `Enter your name`,
            store: data.fname,
            name: 'fname'
        },
        {
            type: `Username`,
            placeholder: `Enter your username`,
            store: data.username,
            name: 'username'
        },
        {
            type: `Email`,
            placeholder: `Enter your email`,
            store: data.email,
            name: 'email'
        },
        {
            type: `Phone Number`,
            placeholder: `Enter your phone number`,
            store: data.phone,
            name: 'phone'
        },
        {
            type: `Password`,
            placeholder: `Enter your password`,
            store: data.pass,
            name: 'pass'
        },
        {
            type: `Confirm Password`,
            placeholder: `Confirm your password`,
            store: data.cpass,
            name: 'cpass'
        },

    ]

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        getData({ ...data, [name]: [value] });
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Registration Successful`);
        console.log(data);
    }

    return (
        <>
            <div className="signup-container">
                <div className="title">Registration Form Aasha</div>
                <div className="content">
                    {/* <!-- this is form backend --> */}
                    <form action="#">
                        <div className="user-details">
                            {
                                UserDetails.map((item, i) => {
                                    return <div className="input-box" key={i}>
                                        <span className="details">{item.type}</span>
                                        {console.log(item.store)}
                                        <input type="text" placeholder={item.placeholder} name={item.name} value={item.store} onChange={handleChange} required />
                                    </div>
                                })
                            }

                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            <input type="radio" name="gender" id="dot-3" />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        {/* <!-- here is submit button --> */}
                        <div className="button flex-align">
                            <input type="submit" onClick={handleSubmit} value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp