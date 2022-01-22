import React from 'react'

export default function Header() {


    const onClickMenuBtn = () => {

        document.querySelector('.header .navbar').classList.toggle('active');
        document.querySelector('#header #search-form').classList.remove('active');
        document.querySelector('#header .login-form').classList.remove('active');

    }

    const onClickSearchBtn = () => {
        // console.log( document.querySelector('#header #search-form'))
        document.querySelector('#header #search-form').classList.toggle('active');
        document.querySelector('#header .login-form').classList.remove('active');
        document.querySelector('.header .navbar').classList.remove('active');
    }

    const onClickLoginBtn = () => {
        document.querySelector('#header .login-form').classList.toggle('active');
        document.querySelector('.header .navbar').classList.remove('active');
        document.querySelector('#header #search-form').classList.remove('active');
    }

    const onClickInfoBtn = () => {
        document.querySelector('.contact-info').classList.toggle('active');
        document.querySelector('#header #search-form').classList.remove('active');
        document.querySelector('#header .login-form').classList.remove('active');
        document.querySelector('.header .navbar').classList.remove('active');
    }

    const onClickInfoCloseBtn = () => {
        document.querySelector('.contact-info').classList.remove('active');
    }

    window.onscroll = () => {
        document.querySelector('.header .navbar').classList.remove('active');
        document.querySelector('#header #search-form').classList.remove('active');
        document.querySelector('#header .login-form').classList.remove('active');
       
    }



    return (
        <>
            <div className='header' id='header'>
                <a href='#' className='logo' >Honda<span>Tuan</span></a>
                <nav className='navbar' >
                    <a href='#home' >Home</a>
                    <a href='#about' >About</a>
                    <a href='#services' >Services</a>
                    <a href='#projects' >Projects</a>
                    <a href='#pricing' >Pricing</a>
                    <a href='#contact' >Contact</a>
                    <a href='blogs' >Blogs</a>
                </nav>

                <div className='icons' >
                    <div onClick={onClickMenuBtn} id='menu-btn' className='fas fa-bars' ></div>
                    <div onClick={onClickInfoBtn} id='info-btn' className='fas fa-info-circle' ></div>
                    <div onClick={onClickSearchBtn} id='search-btn' className='fas fa-search' ></div>
                    <div onClick={onClickLoginBtn} id='login-btn' className='fas fa-user' ></div>
                </div>

                <form action='' className='search-form' id='search-form' >
                    <input type='search' name="" placeholder='Search here...' id='search-box' />
                    <label for="search-box" className='fas fa-search' ></label>
                </form>

                <form action='' className='login-form' >
                    <h3>Login Form</h3>
                    <input type='email' placeholder='Enter your email' className='box' />
                    <input type='password' placeholder='Enter your password' className='box' />
                    <div className='flex' >
                        <input type='checkbox' name='' id='remember-me' />
                        <label for="remember-me">Remember me</label>
                        <a href='#'>Forgot password?</a>
                    </div>
                    <input type='submit' value='Login Now' className='btn' />
                    <p>Don't have an account <a href='#'>Create new account!</a>  </p>
                </form>
            </div>

            <div className='contact-info' >

                <div onClick={onClickInfoCloseBtn} id='close-contact-info' className='fas fa-times' ></div>

                <div className='info'>
                    <i className='fas fa-phone'></i>
                    <h3>phone number</h3>
                    <p>0373162396</p>
                    <p>0964649392</p>
                </div>

                <div className='info'>
                    <i className='fas fa-envelope'></i>
                    <h3>email address</h3>
                    <p>baoduong101110@gmail.com</p>
                    <p>19520017@gm.uit.edu.vn</p>
                </div>

                <div className='info'>
                    <i className='fas fa-map-market-alt'></i>
                    <h3>Office Address</h3>
                    <p>3 Hai Ba Trung Road, Ben Tre City , Ben Tre , Viet Nam</p>
                   
                </div>

                <div className='share'>
                   <a href='#' className='fab fa-facebook-f' ></a>
                   <a href='#' className='fab fa-twitter' ></a>
                   <a href='#' className='fab fa-instagram' ></a>
                   <a href='#' className='fab fa-linkedin' ></a>
                </div>

            </div>
        </>
    )
}
