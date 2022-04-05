import React from 'react';

function Footer() {

    return(
    <div className="footer">
        <div className="footer-container">
            <div className="row">             
                <div className='col-12 col-md-3 col-lg-3'>
                    <div className='brand-footer'>
                        <p>the</p>
                        <p>Haflington</p>
                    </div>
                </div>
                <div className='col-12 col-md-9 col-lg-9 row'>
                    <div className='footer-contact col-12 col-md-4 col-lg-4'>
                        <p>Liên Hệ</p>
                        <p>Email: tenten@gmail.com</p>
                        <p>Phone: 0359.999.999</p>
                    </div>
                    <div className='footer-open-times col-12 col-md-6 col-lg-6'>
                        <p>Giờ Mở Cửa</p>
                        <p>Thứ 2 đến Thứ 6: 9AM - 9PM</p>
                        <p>Thứ 7, CN: 9AM - 12PM</p>
                    </div>
                    <div className='footer-icon col-12 col-md-2 col-lg-2'>
                        <a href='https://www.facebook.com/' target='_blank'><i class="fa fa-facebook"></i></a>
                        <a href='https://www.instagram.com/' target='_blank'><i class="fa fa-instagram"></i></a>
                        <a href='https://twitter.com/' target='_blank'><i class="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;