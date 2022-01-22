import React from 'react'

export default function About() {
    return (
        <section className='about' id="about" >
            <h1 className='heading'>About Us</h1>

            <div className='row' >
                <div className='video' >
                    <video src='images/video.mp4' loop muted autoPlay ></video>
                </div>

                <div className='content' >
                    <h3>We will provide you the best work which you dream for</h3>
                    <p>Don’t try to tell the customer what he wants. If you want to be smart, be smart in the shower. Then get out, go to work and serve the customer!</p>
                    <a href='#service' className='btn'>Read More</a>
                </div>
            </div>

            <div className='box-container' >
                <div className='box'>
                    <h3>10+</h3>
                    <p>years of experience</p>
                </div>

                <div className='box'>
                    <h3>1500+</h3>
                    <p>project completed</p>
                </div>

                <div className='box'>
                    <h3>790+</h3>
                    <p>satiesfied clients</p>
                </div>

                <div className='box'>
                    <h3>450+</h3>
                    <p>active mechanic</p>
                </div>

            </div>

        </section>
    )
}
