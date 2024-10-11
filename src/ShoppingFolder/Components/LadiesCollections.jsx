import React from 'react'

const LadiesCollections = (props) => {

    const{title,image1, image2, image3} = props.ladiesFashion

  return (
    <div className='collectionSection'>

<div>{title}</div> 
<div className="womenImages">

          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
          <img src={image3} alt={title} />
          <img src={image1} alt={title} />
          <img src={image1} alt={title} />

        
      </div>


    </div>
  )
}

export default LadiesCollections
