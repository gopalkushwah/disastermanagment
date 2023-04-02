import React, { useEffect, useState } from 'react'
import HomeCarousel from './HomeCarousel'
import SmallCarousel from './SmallCarousel';
import { Carousel } from 'react-responsive-carousel';
import blood from '../assets/blood.jpg'
import monney from '../assets/monney.jpg'
import pro from '../assets/pro.jpg'
import ProfileSlider from './ProfileSlider';
import { Link } from 'react-router-dom';
const SecBlockData = [
    {
        icon: "",
        heading: 'Become A Saviour',
        data: ` Think about the issues that matter most to you. Is it helping people in need, protecting the environment, or something else?`,
        batan: `Join Us Now`,
        link: `/signup`
    },
    {
        icon: "",
        heading: 'Donate To Support',
        data: `donating is just one way to support a cause or organization. You can also volunteer your time, raise awareness about an issue`,
        batan: `Donate Now`,
        link: `/donate`
    },
    {
        icon: "",
        heading: `Become A Partner`,
        data: `Becoming a partner can be a rewarding way to make a positive impact on the world. `,
        batan: `Learn More`,
        link: `/`
    },
]
const ReasonHelpingData = [
    {
        imgSrc: monney,
        heading: `Collecting Fund`,
        pera: `Collecting funds is an important way to support help the needy people, you can pay for it`
    },
    {
        imgSrc: blood,
        heading: `Blood Camp`,
        pera: `A blood camp is a community event where people come together to donate blood.



        `
    },
    {
        imgSrc: pro,
        heading: `Friendly volunteer`,
        pera: ` friendly volunteer is someone who dedicates their time and effort to support a cause or organization while being kind`
    },
]
const Home = () => {
    return (
        <>
            <HomeCarousel />
            <div className="sec-block">
                <section className="about ">
                    <div className='about-first-div flex-align '>
                        <h4 className="one">GET INVOLVED</h4>
                        <h1 className="two">Let's Make A Difference <br /> Today</h1>
                        <div className="three"> </div>
                    </div>
                    <div className="four flex-align">
                        {
                            SecBlockData.map((item, i) => (
                                <div className="under" key={i}>
                                    <div className="icon">{item.icon}</div>
                                    <h1 className="heading">{item.heading}</h1>
                                    <h4 className="data">{item.data}</h4>
                                    <div className="batan flex-align"><Link to={item.link}>{item.batan}</Link></div>
                                </div>

                            ))
                        }
                    </div>
                </section>
            </div>

            {/* ------------- small slider block after about section ------------- */}
            <SmallCarousel />

            {/* ------------- after small slider block  ------------- */}


            <div className="baba">
                <h1 className="h1"> Reasons of helping</h1>
                <div className="Box">
                    {
                        ReasonHelpingData.map((item, i) => {
                            return <div className="box" key={i}>
                                <div className="image-box"> <img className="inside-img" src={item.imgSrc} alt="" height="600px" width="500px" />
                                </div>
                                <div className="inside-box">
                                    <h4 className="h4">{item.heading}</h4>
                                    <p>{item.pera}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <ProfileSlider />

        </>
    )
}

export default Home