import React from 'react'

const Donate = () => {
    return (
        <>
            <section className="donate-container">
                <div className="donate-about flex-space-between">
                    <form action="#" className="donate-form flex-align">
                        <input className="div1 donate-form-input" type="text" placeholder="Enter Name " required />
                        <input className="div2 donate-form-input" type="email" placeholder="Enter Email" required />
                        <input className="div3 donate-form-input" type="number" placeholder="Enter Amount" required />
                        <input className="div4 donate-form-input" type="text" placeholder="Your message with donation" />
                        <input className="div5 donate-form-btn" type="submit" value="Donate" />
                    </form>
                    <div className="donate-text">
                        <h2>Donation</h2>
                        <h5>Donate for Disaster Relief  </h5>
                        <p> 90% of all natural disasters are water-related.

                            25.3 million people are displaced each year by sudden disasters.

                            Annual economic losses are estimated at US$250B-US$300B.</p>
                        <div className="data">
                            <a href="#" className="hire">Read</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Donate