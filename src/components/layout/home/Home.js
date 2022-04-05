import React, { useEffect } from 'react';
import About from './About';

function Home() {

    const d = new Date()

    useEffect(() => {
      const parallax = document.querySelector('.home-container .top-bg-img')
      window.addEventListener('scroll', function() {
        let offset = window.scrollY
        parallax.style.backgroundPositionY = `${offset * 0.6}px`
      })
    },[])

    useEffect(() => {
      const parallax = document.querySelector('.background-bot-container .img-container')
      const toBotImgBg = document.querySelector('.about-clips-container').scrollHeight +
                    document.querySelector('.about-slide-container').scrollHeight +
                    document.querySelector('.about-header-container').scrollHeight
        window.addEventListener('scroll', function() {
          if(window.scrollY >= toBotImgBg){                 
            let offset = window.scrollY
            parallax.style.backgroundPositionY = `${offset * 0.6}px`
          }
        })
    },[])
  
    return(
      <div className="home-container">
        <div className='top-bg-bar'>
          <div className='top-bg-img'>
            <div className='brand-card'>
              <div className='brand-card-container'>
                <div className='info-top'>
                  <p>Hà Nội</p>
                  <p> | </p>
                  <p>{d.getFullYear()}</p>
                </div>
                <div className='info-middle'>
                  <p>the</p>
                  <p>Haflington</p>
                </div>
                <div className='info-bot'>
                  <p>94 Hàng Mã, Hoàn Kiếm, Hà Nội</p>
                  <p>Mở cửa: 9AM - 9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
      </div>
    )
}

export default Home;   