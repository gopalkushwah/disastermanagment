import React from 'react'
import sahil from '../assets/sahil.jpeg'
import vishal from '../assets/vishal.jpeg'
import anuj from '../assets/anuj.jpeg'
import gopal from '../assets/gopal.jpeg'


const socialIco = {
    fb: `fab fa-facebook-f`,
    tw: `fab fa-twitter`,
    insta: `fab fa-instagram`,
    yt: `fab fa-youtube`,
}
const TeamCardData = [
    {
        imgSrc: anuj,
        name: `Anuj sahu`,
        job: `saviour`,
        icons: socialIco
    },

    {
        imgSrc: sahil,
        name: `sahil jain`,
        job: `saviour`,
        icons: socialIco
    },
    {
        imgSrc: vishal,
        name: `vishal meena`,
        job: `saviour`,
        icons: socialIco
    },
    {
        imgSrc: gopal,
        name: `Gopal`,
        job: `saviour`,
        icons: socialIco
    },
    {
        imgSrc: ``,
        name: `suryansh jain`,
        job: `saviour`,
        icons: socialIco
    },
    {
        imgSrc: ``,
        name: `Girraj`,
        job: `saviour`,
        icons: socialIco
    },


]

const ProfileSlider = () => {
    return (


        <div className="team-card flex-align">
            <div className="container1">
                <input type="radio" name="dot" id="one" />
                <input type="radio" name="dot" id="two" />
                <div className="main-card">
                    <div className="cards flex-align">

                        {
                            TeamCardData.map((item, i) => {
                                return <div className="card" key={i}>
                                    <div className="content flex-align">
                                        <div className="img">
                                            <img src={item.imgSrc} alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="name">{item.name}</div>
                                            <div className="job">{item.job}</div>
                                        </div>
                                        <div className="media-icons">
                                            <a href="#"><i className={item.icons.fb}></i></a>
                                            <a href="#"><i className={item.icons.tw}></i></a>
                                            <a href="#"><i className={item.icons.insta}></i></a>
                                            <a href="#"><i className={item.icons.yt}></i></a>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className="button">
                    <label htmlFor="one" className=" active one"></label>
                    <label htmlFor="two" className="two"></label>
                </div>
            </div>
        </div>
    )
}

export default ProfileSlider