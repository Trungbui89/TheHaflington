import React from "react";

function RenderCard(props) {
    const item = props.item
    let cols = ''
    switch(item.id) {
        case '0':
        case '4':
            cols = 'w-2'
            break

        default:
            cols = 'w-1'
    }
    return (
        <div className={`${cols} card-container`} key={item.id}>
            <div className="news-img">
                <img src={item.image} alt=''/>
            </div>
            <div className="news-date">
                <p>{item.day}</p>
                <p>{item.month}</p>
                <p>{item.year}</p>
            </div>
            <div className="news-name">
                <p>{item.name}</p>
            </div>
        </div>
    )
}

function News(props) {

    const news = props.news.news.map((item) => {
          return (
              <RenderCard key={item.id} item={item} />
          )
      });

    return (
        <div className="container news">
            <div className="title">
                <p>NEWS</p>
            </div>
            <div className="rows">
                {news}
            </div>
        </div>
    )
}

export default News