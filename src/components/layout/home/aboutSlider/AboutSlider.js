import React from "react";

function AboutSlider() {    

    return (
        <div className="about-slide-container">
            <div className="slide-body row">
                <div className="cardList col-12 col-md-8 col-lg-8">
                    {/* <button className="silde-btn-left">
                        <div className="icon">
                            <svg>
                                <symbol id="arrow-left" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                    <polyline points='328 112 184 256 328 400' />
                                </symbol>
                            </svg>
                        </div>
                    </button> */}

                    <div className="slide-content">
                        <div className="slide-card-items">
                            <div className="card-image">
                                <img src="/assets/images/slider/image-1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="slide-card-items active">
                            <div className="card-image">
                                <img src="/assets/images/slider/image-2.jpg" alt="" />
                            </div>
                        </div>

                        <div className="slide-card-items">
                            <div className="card-image">
                                <img src="/assets/images/slider/image-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <button className="slide-btn-right">
                        <div className="icon">
                            <svg>
                                <symbol id="arrow-right" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                    <polyline points='184 112 328 256 184 400' />
                                </symbol>
                            </svg>
                        </div>
                    </button> */}
                </div>

                <div className="infoList col-12 col-md-4 col-lg-4">
                    <div className="info__wrslide-bodyer">
                        <div className="info current--info">
                            <h1 className="text name">Highlands</h1>
                            <h4 className="text location">Scotland</h4>
                            <p className="text description">The mountains are calling</p>
                        </div>

                        <div className="info next--info">
                            <h1 className="text name">Machu Pichu</h1>
                            <h4 className="text location">Peru</h4>
                            <p className="text description">Adventure is never far away</p>
                        </div>

                        <div className="info previous--info">
                            <h1 className="text name">Chamonix</h1>
                            <h4 className="text location">France</h4>
                            <p className="text description">Let your dreams come true</p>
                        </div>
                    </div>
                </div>

                {/* <div className="slide-body__bg">
                    <div className="slide-body__bg__image current--image">
                        <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
                    </div>
                    <div className="slide-body__bg__image next--image">
                        <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
                    </div>
                    <div className="slide-body__bg__image previous--image">
                        <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AboutSlider