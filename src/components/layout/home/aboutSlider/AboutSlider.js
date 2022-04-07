import React, { useEffect } from "react";
import aboutSlideSideEffect from "./aboutSlideSideEffect";

function AboutSlider() {   
    
    useEffect(() => {
        aboutSlideSideEffect()
    },[])

    return (
        <div className="about-slide-container">
            {console.log('mounted')}
            <div className="slide-body row">
                <div className="cardList col-12 col-md-8 col-lg-8">

                    <div className="slide-btn">
                        <button className="slide-btn-left">
                            <div className="slide-icon">
                                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                            </div>
                        </button>

                        <button className="slide-btn-right">
                            <div className="slide-icon">
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                        </button>
                    </div>

                    <div className="slide-content">
                        <div className="slide-card-items preview">
                            <div className="card-image">
                                <img src="https://raw.githubusercontent.com/Trungbui89/TheHaflington/gh-pages/assets/images/slider/image-1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="slide-card-items active">
                            <div className="card-image">
                                <img src="https://raw.githubusercontent.com/Trungbui89/TheHaflington/gh-pages/assets/images/slider/image-2.jpg" alt="" />
                            </div>
                        </div>

                        <div className="slide-card-items next">
                            <div className="card-image">
                                <img src="https://raw.githubusercontent.com/Trungbui89/TheHaflington/gh-pages/assets/images/slider/image-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="infoList col-12 col-md-4 col-lg-4">
                    <div className="silde-info-body active">
                        <div className="silde-info-item">
                            <p className="silde-info-top-text">HAPPY HOUR</p>
                            <p className="silde-info-title">CRAFT BEER TUESDAY</p>
                            <p className="silde-info-words">The I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>

                        <div className="silde-info-item active">
                            <p className="silde-info-top-text">HAPPY HOUR 2</p>
                            <p className="silde-info-title">CRAFT BEER TUESDAY</p>
                            <p className="silde-info-words">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>

                        <div className="silde-info-item">
                            <p className="silde-info-top-text">HAPPY HOUR 3</p>
                            <p className="silde-info-title">CRAFT BEER TUESDAY</p>
                            <p className="silde-info-words">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSlider