import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,homeObjFive } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

export const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services />
          <Footer />
          {/* <InfoSection {...homeObjThree}/>
          <InfoSection {...homeObjFour}/>
          <InfoSection {...homeObjFive}/> */}
        </>
    );
};

export default Home;