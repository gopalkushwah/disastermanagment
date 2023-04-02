import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import earthquake from '../assets/earthquake.png'
import flood from '../assets/flood.png'
import landslide from '../assets/Landslide.png'
import tornedo from '../assets/Tornedo.png'
import '../style/smallCrousel.css'
const smallCarouselData = [
    {
        imgSrc: earthquake,
        h3: `Earthquake`,
        link: `https://en.wikipedia.org/wiki/Earthquake`

    },
    {
        imgSrc: flood,
        h3: `Flood`,
        link: `https://en.wikipedia.org/wiki/Flood`

    },
    {
        imgSrc: tornedo,
        h3: `Tornedo`,
        link: `https://en.wikipedia.org/wiki/Tornado`

    },
    {
        imgSrc: landslide,
        h3: `Landslide`,
        link: `https://en.wikipedia.org/wiki/Landslide`

    },
]
const SmallCarousel = () => {
    return (
        <div className='small-slider'>
            <h1 className="heading"><span>L</span>et's <span>L</span>earn <span>A</span>bout <span>D</span>isasters</h1>

            <Carousel
                infiniteLoop
                autoPlay
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={3000}
            >

                {
                    smallCarouselData.map((item, i) => {
                        return <div key={i}>
                            <img src={item.imgSrc} />
                            <a className="legend" href={item.link} target='blank'>{item.h3}</a>
                        </div >
                    })
                }
            </Carousel>
        </div>
    )
}

export default SmallCarousel