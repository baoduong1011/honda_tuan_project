import React from 'react';
import homeBg from '../images/homeBg.jpg'
import homeBg2 from '../images/homeBg2.jpg'
import homeBg3 from '../images/homeBg3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"




// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
export default function Home() {
    return (
        <section className='home' id='home'>
            <div className='home-slider' >
                <Swiper pagination={{ "type": "fraction" }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <section className='slide' style={{ background: `url(images/homeBg.jpg)` }} >
                            <div className='content' >
                                <h3>we provide best service</h3>
                                <p>The construction of the nuclear doomsday machine - and its continued maintenance and development since the mid-twentieth century - is surely one of the most astounding acts of collective insanity in the history of the human species</p>
                                <a href='#about' className='btn' >get started</a>
                            </div>
                        </section>
                    </SwiperSlide>

                    <SwiperSlide>
                        <section className='slide' style={{ background: 'url(images/homeBg2.jpg)' }} >
                            <div className='content' >
                                <h3>making dream come to life</h3>
                                <p>Dreams don't work unless you take action. The surest way to make your dreams come true is to live them.</p>
                                <a href='#about' className='btn' >get started</a>
                            </div>
                        </section>
                    </SwiperSlide>

                    <SwiperSlide>

                        <section className='slide' style={{ background: 'url(images/homeBg3.jpg)' }} >
                            <div className='content' >
                                <h3>from concept to creation</h3>
                                <p>Dreams don't work unless you take action. The surest way to make your dreams come true is to live them.</p>
                                <a href='#about' className='btn' >get started</a>
                            </div>
                        </section>

                    </SwiperSlide>

                </Swiper>
            </div>


            
        </section>


    )
}
