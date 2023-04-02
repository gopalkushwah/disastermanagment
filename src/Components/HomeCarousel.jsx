import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/best.jpg'
import img2 from '../assets/bestest.jpg'
import img3 from '../assets/bssst.jpg'
const carouselData = [
    {
        h4: `We can bring smile`,
        h1: `Lets Built The Better World Together`,
        p: `Become a savier to help the needy people . just create your account with us and help others . currently we have team of 1000 saviers`,
        b1: `Disaster Info`,
        b2: ` Be a Savier`,
        imgSrc: img1
    },
    {
        h4: `Let's go to help others`,
        h1: `Our single effort can make life of someone more easier`,
        p: `let's bring some necessary ingredients to help needy people`,
        b1: `Disaster Info`,
        b2: ` Be a Savier`,
        imgSrc: img2
    },
    {
        h4: `Be the warrior`,
        h1: `we are the warriors against to the nature`,
        p: `If you need help just go to send Messege tab and click on send messege to saviers....`,
        b1: `Disaster Info`,
        b2: ` Be a Savier`,
        imgSrc: img3
    }
]

const HomeCarousel = () => {
    return (
        <>
            <Carousel
                infiniteLoop
                autoPlay
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={3000}
                className='carousel-main'
            >
                {
                    carouselData.map((item, i) => {
                        return <div key={i}>
                            <img src={item.imgSrc} />
                            <div className="legend-own legend">
                                <h4>{item.h4}</h4>
                                <h1>{item.h1}</h1>
                                <p>{item.p}</p>
                                <div className="on-sl-btn">
                                    <span className="b1">{item.b1}</span>
                                    <span className="b2">{item.b2}</span>
                                </div>
                            </div>
                        </div>
                    })
                }

            </Carousel>
        </>
    )
}

export default HomeCarousel