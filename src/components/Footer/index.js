import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia,WebSiteRights, SocialIcons, SocialIconLink,SocialMediaWrap, SocialLogo } from './FooterElements.js';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                            <FooterLink to='/signin'>How to apply</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Coming Soon</FooterLinkTitle>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                            <FooterLink to='/signin'>Linkedin</FooterLink>
                            <FooterLink to='/signin'>YouTube</FooterLink>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>TechAlchemy</SocialLogo>
                        <WebSiteRights>TechAlchemy © {new Date().getFullYear()} All rights reserved.</WebSiteRights>
                        <SocialIcons>
                        <SocialIconLink href="//www.facebook.com" target ="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
