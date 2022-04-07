import React, { useEffect } from 'react';
import About from './About';

function Home() {

    const d = new Date()

    useEffect(() => {
      const toTop = document.querySelector('.up-top-btn')
      toTop.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
    },[])

    useEffect(() => {
      const parallax = document.querySelector('.home-container .top-bg-img')
      window.addEventListener('scroll', function() {
        let offset = window.scrollY
        parallax.style.backgroundPositionY = `${offset * 0.6}px`
      })
    },[])

    useEffect(() => {
      const parallax = document.querySelector('.background-bot-container .img-container')
        window.addEventListener('scroll', function() {                
          let offset = window.scrollY
          parallax.style.backgroundPositionY = `${offset * 0.6}px`
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
        <div className='up-top-btn' />
      </div>
    )
}

export default Home;   