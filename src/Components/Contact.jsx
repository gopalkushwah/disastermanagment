import React from 'react'

const Contact = () => {

    const handleClick = e => {
        e.preventDefault();
        alert('message sent sucessfully');
    }

    return (
        <div className="container">
            <div className="content flex-space-between">
                <div className="left-side flex-align">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">trinity collage, NP12</div>

                        <div className="text-two">raisen road 06</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one"><a href="tel:+918319363714">call us</a></div>
                        <div className="text-two">+826727276726</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one"><a href="mailto:sahuanuj4455@gmail.com">mailto</a></div>
                        <div className="text-two">jainsahil60@gmail.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p>If you are in any problem like flood, Earthquake ,Landslide , you can contact us , we will provide you help within half a day</p>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-box message-box">

                            <div>
                                <input type="file" name="VIDIO" placeholder="CHOODSE FILE" />
                            </div>
                            <div className="input-box message-box">
                                <input type="text" placeholder="enter problem" />
                            </div>
                            <div className="button">
                                <input type="button" onClick={handleClick} value="Send Now" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact