import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {

    useEffect(() => {
        return () => {
            window.addEventListener("scroll", function () {
                let header = document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0);
            }
            )
        };
    }, []);

    return (
        <>
            <header className={`header flex`}>
                <div className="hd-container flex-space-between">
                    <h1 className="hd-logo"><span>A</span>asha</h1>
                    <div className="hd-navbar flex">
                        <ul className="hd-ul flex">
                            <li className="nav-items"><NavLink to={'/'}>Home</NavLink></li>
                            <li className="nav-items"><NavLink to={'/about'}>About</NavLink></li>
                            <li className="nav-items"><NavLink to={'/contact'}>Contact</NavLink></li>
                            <li className="nav-items"><NavLink to={'/oursaviers'}>Our Saviour</NavLink></li>
                            <li className="nav-items"><NavLink to={'/donate'}>Donate</NavLink></li>
                            <li className="nav-items"><NavLink to={'/sendnotification'}>Send Notification</NavLink></li>
                            <li id="sign-btn1" className=' hd-btn'><NavLink to={'/signin'}>SignIn</NavLink></li>
                            <li id="sign-btn2 " className='hd-btn'><NavLink to={'/signup'}>SignUp</NavLink></li>
                        </ul>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header