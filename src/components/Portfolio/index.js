import React, { useState, useEffect } from 'react'
import Card from './../Card'
import FancyButton from '../FancyButton'
import './index.scss'
import axios from 'axios'


function Portfolio() {

  const [data, setData] = useState()

  useEffect(() => {
    axios.get('portfolio_Data.json')
    .then(res => setData(res.data.items))
    .catch(err => console.log(err));
  }, []);


    
  return (
  <ul className='container cards-portfolio'>
      { Array.isArray(data) && data.map((item)=>{
        let name = item.name;
        let author = item.author;
        let authorImage = item.authorImage;
        let image = item.image;
        let tools = item.tools;
        let url = item.url;
        let description = item.description;
        console.log(name, author,image,tools,url, description)
        return <Card name={name} image={image} author={author} authorImage={authorImage} tools={tools} url={url} description={description}/>
      })} 
      
  </ul>
  )
}

export default Portfolio