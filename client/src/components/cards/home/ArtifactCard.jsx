import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css'

export default function ArtifactCard ({artifactId,collectionId, imgUrl, artifactTitle, assetDescrip}) {
  const [isActive, setIsActive] = useState(false);
  
  const tempImg =
    'https://media.cnn.com/api/v1/images/stellar/prod/210526205712-06-thai-lintels-san-francisco.jpg?q=w_1600,h_900,x_0,y_0,c_fill'
  const tempText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'

    const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const buttonStyle = {
    transform: isMouseDown ? 'scale(0.98)' : 'scale(1)',
  };
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/asset/${artifactId}/${collectionId}`)
  }
  return (
    <div className='asset--card--cont'>
      <div className='asset--card--img'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
onClick={handleRedirect}
      >
        <img src={imgUrl} />
      </div>

      <div className='asset--card--info--cont'>
      <div className='asset--card--text'>
      <h2>{artifactTitle}</h2>
      {/* <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m</h2> */}
        {/* <p>{assetDescrip}</p> */}
      </div>
      <button 
      className='asset--card--btn '
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={buttonStyle}
      onClick={handleRedirect}
      >
        License Image
      </button>
    </div>
      </div>
      
  )
}
