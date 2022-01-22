import React, { useEffect } from 'react'

export default function Service() {

    // useEffect(() => {
    //     lightGallery(document.querySelector('.projects .box-container'));
    // },[])

    return (
        <section className='services' id='services'>
            <h1 className='heading'>our services</h1>

            <div className='box-container'>

                <div className='box' >
                    <img src='images/service-3.png' alt='' />
                    <h3>repair and refurbish</h3>
                    <p>Specializes in repairing and refurbishing all kinds of motorcycles with reasonable prices</p>
                </div>

                <div className='box' >
                    <img src='images/service-5.png' alt='' />
                    <h3>Unique creation</h3>
                    <p>Creating unusual styles for motorcycle parts</p>
                </div>

                <div className='box' >
                    <img src='images/service-6.png' alt='' />
                    <h3>Motorcycle check</h3>
                    <p>Change the oil and check the safety of the motorcycle</p>
                </div>

                <div className='box' >
                    <img src='images/service-7.png' alt='' />
                    <h3>Total machine system implementation</h3>
                    <p>Making machines and ensuring the stability of the motorcycle system</p>
                </div>
            </div>
            
            <h1 className='oil'>famous oil brands</h1>
            
            <div className='box-container'>

                <div className='box' >
                    <img src='images/1.png' alt='' />
                    <h3>CALTEX</h3>
                    <p>Caltex is a petroleum brand name of Chevron Corporation used in 29 countries in the Asia-Pacific region, the Middle East, and Southern Africa.</p>
                </div>

                <div className='box' >
                    <img src='images/2.png' alt='' />
                    <h3>CASTROL</h3>
                    <p>Castrol is a British oil company that markets industrial and automotive lubricants, offering a wide range of oil, greases and similar products for most lubrication applications.</p>
                </div>

                <div className='box' >
                    <img src='images/3.png' alt='' />
                    <h3>TOTAL</h3>
                    <p>otalEnergies SE is a French multinational integrated oil and gas company founded in 1924 and one of the seven "supermajor" oil companies.</p>
                </div>

                <div className='box' >
                    <img src='images/4.png' alt='' />
                    <h3>SHELL</h3>
                    <p>Shell Oil Company is the United States-based wholly owned subsidiary of Royal Dutch Shell, a transnational corporation "oil major" of Anglo-Dutch origins, which is amongst the largest oil companies in the world.</p>
                </div>
            </div>


        </section>
    )
}
