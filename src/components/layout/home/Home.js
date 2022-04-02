import React, { useEffect } from 'react';

function Home() {

    const d = new Date()

    useEffect(() => {
      const parallax = document.querySelector('.home-container .top-bg-img img')
      window.addEventListener('scroll', function() {
        let offset = window.scrollY
        parallax.style.objectPosition = `0, ${offset * 0.1}px`
      })
    },[])
  
    return(
      <div className="home-container">
        <div className='top-bg-bar'>
          <div className='top-bg-img' />
          <div className='brand-card'>
            <div className='brand-card-container'>
              <div className='info-top'>
                <p>HÀ NỘI</p>
                <p>|</p>
                <p>{d.getFullYear()}</p>
              </div>
              <div className='info-middle'>
                <p>the</p>
                <p>HAFLINGTON</p>
              </div>
              <div className='info-bot'>
                <p>94 Hàng Mã, Hoàn Kiếm, Hà Nội</p>
                <p>Mở cửa: 9AM - 9PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;   