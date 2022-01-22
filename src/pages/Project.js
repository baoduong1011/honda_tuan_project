import React, { useEffect } from 'react';
import lightGallery from 'lightgallery';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Project() {

    useEffect(() => {
        lightGallery(document.querySelector('.projects .box-container'))
    }, [])


    return (
        <section className='projects' id='projects'>
            <h1 className='heading'>our projects</h1>

            <div className='box-container' id='box-container'>

                <a href='images/pro5.jpg' className='box' >
                    <div className='image' >
                        <img src='images/pro5.jpg' alt='' />
                    </div>

                    <div className='content' >
                        <div className='info' >
                            <h3>dream one</h3>
                            <p>construction, design</p>
                        </div>
                        <i className='fas fa-plus' ></i>
                    </div>
                </a>



                <a href='images/pro8.jpg' className='box' >
                    <div className='image' >
                        <img src='images/pro8.jpg' alt='' />
                    </div>

                    <div className='content' >
                        <div className='info' >
                            <h3>dream one</h3>
                            <p>construction, design</p>
                        </div>
                        <i className='fas fa-plus' ></i>
                    </div>
                </a>

                <a href='images/pro3.jpg' className='box' >
                    <div className='image' >
                        <img src='images/pro3.jpg' alt='' />
                    </div>

                    <div className='content' >
                        <div className='info' >
                            <h3>dream one</h3>
                            <p>construction, design</p>
                        </div>
                        <i className='fas fa-plus' ></i>
                    </div>
                </a>

                <a href='images/pro4.jpg' className='box' >
                    <div className='image' >
                        <img src='images/pro4.jpg' alt='' />
                    </div>

                    <div className='content' >
                        <div className='info' >
                            <h3>dream one</h3>
                            <p>construction, design</p>
                        </div>
                        <i className='fas fa-plus' ></i>
                    </div>
                </a>

                <a href='images/pro7.jpg' className='box' >
                    <div className='image' >
                        <img src='images/pro7.jpg' alt='' />
                    </div>

                    <div className='content' >
                        <div className='info' >
                            <h3>dream one</h3>
                            <p>construction, design</p>
                        </div>
                        <i className='fas fa-plus' ></i>
                    </div>
                </a>

                <a href='images/pro6.jpg' className='box' >
                    <div className='image' >
                        <img src='images/pro6.jpg' alt='' />
                    </div>

                    <div className='content' >
                        <div className='info' >
                            <h3>dream one</h3>
                            <p>construction, design</p>
                        </div>
                        <i className='fas fa-plus' ></i>
                    </div>
                </a>

            </div>
        </section>
    )
}
