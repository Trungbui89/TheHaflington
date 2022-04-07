import React, {useEffect} from "react";
import { Link } from 'react-router-dom'

function NewDetail(props) {

    useEffect(() => {
        const toNewsBtn = document.querySelector('.news-detail-footer')
        toNewsBtn.addEventListener('click', () => {
            window.scrollTo(0,0)
        })
    },[])

    if(props !== undefined){
        return (
            <div className="container newsDetail">
                <div className="news-detail-title">
                    <h1>{props.newsInfo.name}</h1>
                </div>
                <hr />
                <div className="news-detail-date">
                    <h2>{`${props.newsInfo.day} ${props.newsInfo.month} 20${props.newsInfo.year}`}</h2>
                </div>
                <div className="news-detail-img">
                    <img src={props.newsInfo.image} alt='news detail'/>
                </div>
                <div className="news-detail-content">
                    <p>Whether you are a gin enthusiast or fresh to the world of juniper spirit, our passionate team has put together unique offerings to enjoy during your visit at ATLAS.</p>
                    <h2>Gin Tower Experience</h2>
                    <p>Our iconic ATLAS Gin Collection houses over 1,400 bottles of gin curated from all corners of the globe. The Gin Tower Experience guided by a talented bar team member gives you an exclusive up-close look at this remarkable collection of the juniper spirit. ⁠</p>
                    <p>Enjoy a tasting and presentation of your gin of choice, followed by a custom paired G&T.</p>
                    <h2>Gins Of The World</h2>
                    <p>ATLAS houses one of the world’s most diverse physical gin collections, with over 55 countries represented.</p>
                    <p>Gins of The World invites you to sample unique pours of gins from a featured country selected by our bartenders - explore innovative distillation methods, unusual botanicals, and local craft. Enjoy the experience with a selection of garnishes, soda water and tonic.</p>
                    <p>For more information, please email info@atlasbar.sg</p>
                </div>
                <div className="news-detail-footer">
                    <Link to='/TheHaflington/news'>BACK TO NEWS</Link>
                    <hr />
                </div>
            </div>
        )
    } else return <div></div>
}

export default NewDetail