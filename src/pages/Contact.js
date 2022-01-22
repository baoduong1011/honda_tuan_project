import React from 'react'

export default function Contact() {
    return (
        <section className='contact' id='contact' >
            <h1 className='heading' >contact us</h1>
            <div className='row' >
                <iframe  className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.3922076703752!2d106.38006438146164!3d10.239364457888634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa9c999b814ef%3A0x590dfc90333a2ed7!2zU8awzIlhIHhlIFR1w6LMgW4!5e0!3m2!1sen!2s!4v1642509437726!5m2!1sen!2s"  allowfullscreen="" loading="lazy"></iframe>

                <form action='' >
                    <h3>get in touch</h3>
                    <input type='text' placeholder='name' className='box' />
                    <input type='email' placeholder='email' className='box' />
                    <input type='number' placeholder='phone' className='box' />
                    <textarea name='' placeholder='message' className='box' id='' cols='30' rows='10' ></textarea>
                    <input style={{textAlign:"center",alignItems:'center'}} type='submit' value='send message' className='btn' />
                
                </form>
            </div>
        </section>
    )
}
