import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink   
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
       window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>TechAlchemy</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="alchemists" smooth={true} duration={500} spy={true} offset={-80} >Alchemists</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="clients" smooth={true} duration={500} spy={true} offset={-80} >Clients</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} offset={-80} >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="ContactUs"smooth={true} duration={500} spy={true} offset={-80} >Contact Us</NavLinks>
                        </NavItem>
                        <NavBtn>
                        <NavBtnLink to ="/"  onClick={(e) => {window.location = "mailto:info@tech-alchemy.com";
                        e.preventDefault();}}>APPLY NOW</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;