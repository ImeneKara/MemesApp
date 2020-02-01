import React from 'react'

function Meme(props) {
    const { image, title, author } = props;
    
    return (
        <div className="col col-md-3 col-sm-2 mb-3">
              <div className="card">
                <img src={image} className="card-img-top" height="300" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text"><small className="text-muted">By: {author}</small></p>
                </div>
              </div>
        </div>
    )
}

export default Meme;