import React from 'react'

const Footer = () => {
    return (<>
        <section className="bottom flex">
            <footer>
                <div className="content">
                    <div className="top flex-space-between">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <span className="logo_name">Disaster Management</span>

                        </div>

                        {/* <!-- <hr style="color: black;"> --> */}
                        <div className="media-icons flex-space-between">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            {/* <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a> */}
                        </div>
                    </div>
                    <hr style={{ width: "100%" }} />
                    <br />
                    <div className="link-boxes">
                        <h4>Disaster Management</h4>
                        <pre className="mod flex">
                            {`"Together, we can achieve 
anything we set our minds to."
"Each of us brings a unique perspective
and skillset to the team, 
making us stronger together."
"Let's support and encourage one another
to reach our fullest potential."`}
                        </pre>


                        <ul className="boxes">
                            <li className="link_name">Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">MY donation</a></li>
                            <li><a href="#">funding</a></li>
                        </ul>
                        <ul className="boxes">
                            <li className="link_name">services</li>
                            <li><a href="#">food</a></li>
                            <li><a href="#">mediciens</a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#">Emergency transport

                            </a></li>
                        </ul>
                        <ul className="boxes input-box">
                            <li className="link_name">Donate</li>

                            <li><input type="text" placeholder="Enter Amount" /></li>
                            <li><input type="button" value="Donate" /></li>

                        </ul>
                    </div>
                </div>

            </footer>

        </section>
        <div className="bottom-details">
            <div className="bottom_text flex-space-between">
                <span className="copyright_text">Copyright © 2023 <a href="#">The decoders</a>All rights reserved</span>
                <span className="policy_terms">
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & condition</a>
                </span>
            </div>
        </div></>
    )
}

export default Footer