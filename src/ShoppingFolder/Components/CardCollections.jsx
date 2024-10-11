
import React from 'react'

const CardCollections = (props) => {

  const {title,image1,image2,image3} = props.gentsFashion

  return (
    <div className='collectionSection'>
     <div>{title}</div>
      <div className="menImages">
         
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
          <img src={image3} alt={title} />
          <img src={image1} alt={title} />
          <img src={image1} alt={title} />
        
      </div>
    </div>
  )
}

export default CardCollections
