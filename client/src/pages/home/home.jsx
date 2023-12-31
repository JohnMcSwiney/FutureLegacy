import React,{useState, useEffect} from 'react'
// import '../../app.css';
import './homePage_v2.css'
// import FL_splitter from '../../components/splitter/Splitter'
// import CollectionCard from '../../unused/CollectionCard'
// import FL_footer from '../../components/FL_Footer/FL_footer'
// import SearchBarHome from '../../unused/SearchbarHome'
// import { AiOutlineArrowDown } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';

import AppContentWrapper from '../../components/containers/AppContentWrapper';
import PageContainer from '../../components/containers/PageContainer';

import FeaturedCollectionsCont from './FeaturedCollectionsCont';

import Pitch1_Logo from './elevatorPitchParts/Pitch1_Logo';
import Pitch2_Problem from './elevatorPitchParts/Pitch2_Problem';
import Pitch3_Trust from './elevatorPitchParts/Pitch3_Trust';
import Pitch4_LearnMore from './elevatorPitchParts/Pitch4_LearnMore';
import FeaturedCollectionCarousel from './elevatorPitchParts/FeaturedCollectionCarousel';

export default function Home() {
  // https://firebasestorage.googleapis.com/v0/b/futurelegacy-test.appspot.com/o/FL_TempAssets%2Fimage%2028.png?alt=media&token=a86ebad3-fef1-4279-8361-f15639e62331
  // Temp assets

  const navigate = useNavigate();
  const redirectCollection = (collectionid) => { navigate(`/collection/${collectionid}`) };
  const handleMouseDown = () => {
    setIsMouseDown(true);
  };
  const [isActive, setIsActive] = useState(false);
  const [showPitch, setShowPitch] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const buttonStyle = {
    transform: isMouseDown ? 'scale(0.98)' : 'scale(1)',
  };
 
  return (
    <AppContentWrapper>
      <PageContainer>
        {showPitch ? 
        <section className='home--cont'>
        <Pitch1_Logo/>
        <Pitch2_Problem/>
        <Pitch3_Trust/>
        <Pitch4_LearnMore/>
        <br/>
        <br/>
        <br/>
        <FeaturedCollectionCarousel/>
        </section>
        :
        <section className='home--cont'>
        <FeaturedCollectionCarousel/>
        {/* <FeaturedCollectionsCont/> */}
        </section>
      
      }
        
        
      </PageContainer>
      {/* <FL_footer/> */}
    </AppContentWrapper>

  )
}

