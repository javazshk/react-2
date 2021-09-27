import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia,WebSiteRights, SocialIcons, SocialIconLink,SocialMediaWrap, SocialLogo, FooterOpeningLink } from './FooterElements.js';
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
                            <FooterLinkTitle>Contact US</FooterLinkTitle>
                            <FooterOpeningLink >   </FooterOpeningLink>
                            <FooterOpeningLink >7543 Alexandra dr</FooterOpeningLink>
                            <FooterOpeningLink >NewArk DE</FooterOpeningLink>
                            <FooterOpeningLink >(510)931-9136</FooterOpeningLink>
                            <FooterOpeningLink >info@tech-alchemy.com</FooterOpeningLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Openings</FooterLinkTitle>
                            <FooterOpeningLink >Java Developers</FooterOpeningLink>
                            <FooterOpeningLink >Full Stack Developers</FooterOpeningLink>
                            <FooterOpeningLink >Network Engineer</FooterOpeningLink>
                            <FooterOpeningLink >Cloud Security</FooterOpeningLink>
                            <FooterOpeningLink >Automation Engineers</FooterOpeningLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>Coming Soon</FooterLinkTitle>
                            <FooterLink to='/signin'>What are MicroServices</FooterLink>
                            <FooterLink to='/signin'>What is Cloud</FooterLink>
                            <FooterLink to='/signin'>What are Containers</FooterLink>
                            <FooterLink to='/signin'>What is DevOps</FooterLink>
                            <FooterLink to='/signin'>What is Agile</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Coming Soon</FooterLinkTitle>
                            <FooterLink to="//www.linkedin.com">Linkedin</FooterLink>
                            <FooterLink to="//www.twitter.com">Twitter</FooterLink>
                            <FooterLink to="//www.facebook.com" target ="_blank" aria-label="Facebook">Facebook</FooterLink>
                            <FooterLink to="//www.instagram.com">Instagram</FooterLink>
                            <FooterLink to="//www.youtube.com">Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>TechAlchemy</SocialLogo>
                        <WebSiteRights>TechAlchemy LLC © {new Date().getFullYear()} All rights reserved.</WebSiteRights>
                        <SocialIcons>
                        <SocialIconLink href="//www.facebook.com" target ="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target ="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target ="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//youtube.com" target ="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//linkedin.com" target ="_blank" aria-label="LinkedIn">
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
