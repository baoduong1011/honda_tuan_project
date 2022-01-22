import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([EffectCoverflow,Pagination]);

export default function Review() {
    return (
        <section className='reviews'>
            <h1 className='heading' >Clients Reviews</h1>
            <div className='swiper reviews-slider' >
                <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                    "clickable": true
                  }} breakpoints={{
                    "640": {
                      "slidesPerView": 1,
                      "spaceBetween": 20
                    },
                    "768": {
                      "slidesPerView": 2,
                      "spaceBetween": 40
                    },
                    "1024": {
                      "slidesPerView": 3,
                      "spaceBetween": 50
                    }
                  }} className="mySwiper">
                    <SwiperSlide>
                        <div className='slide' >
                            <p>Not everyone understands what a completely rational process this is, this maintenance of a motorcycle. </p>
                            <div className='user' >
                                <img src='images/u1.jpg' alt='' />
                                <div className='info' >
                                    <h3>Nguyen Bao Phuc</h3>
                                    <div className='stars' >
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='slide' >
                            <p>Not everyone understands what a completely rational process this is, this maintenance of a motorcycle. </p>
                            <div className='user' >
                                <img src='images/u3.jpg' alt='' />
                                <div className='info' >
                                    <h3>Nguyen Minh Phu</h3>
                                    <div className='stars' >
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slide' >
                            <p>Not everyone understands what a completely rational process this is, this maintenance of a motorcycle.</p>
                            <div className='user' >
                                <img src='images/u2.jpg' alt='' />
                                <div className='info' >
                                    <h3>Ngo Trong Gia</h3>
                                    <div className='stars' >
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slide' >
                            <p>They think it's some kind of "knack" or some kind of "affinity for machines" in operation.</p>
                            <div className='user' >
                                <img src='images/u4.jpg' alt='' />
                                <div className='info' >
                                    <h3>Minh Quan Le</h3>
                                    <div className='stars' >
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slide' >
                            <p> They are right, but the knack is almost purely a process of reason</p>
                            <div className='user' >
                                <img src='images/u5.jpg' alt='' />
                                <div className='info' >
                                    <h3>Nguyen Quy Thuong</h3>
                                    <div className='stars' >
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slide' >
                            <p>A motorcycle functions entirely in accordance with the laws of reason.</p>
                            <div className='user' >
                                <img src='images/u6.jpg' alt='' />
                                <div className='info' >
                                    <h3>Nguyen Nhat Duy</h3>
                                    <div className='stars' >
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                        <i className='fas fa-star' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
