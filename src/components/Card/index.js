import React from 'react'
import './index.scss'
import img from '../../assets/images/ninea-profile.png'
import img2 from '../../assets/images/Portfolio/Bookshelf.png'


function Card(props) {
  let image = props.image
  let imageAuthor = props.imageAuthor;

  return (
    <>
      <li>
        <a href={props.url} target="_blank" className="card-portfolio">
          <img src={img2} className="card-image" alt="" />
          <div className="card-overlay">
            <div className="card-header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
              <img className="card__thumb" src={img} alt="" />
              {console.log(img)}
              <div className="card-header-text">
                <h3 className="card__title">{props.name}</h3>            
                <span className="card__status">{props.tools}</span>
              </div>
            </div>
            <p className="card__description">{props.description}</p>
          </div>
        </a>   
      </li>
    </>
  )
}

export default Card