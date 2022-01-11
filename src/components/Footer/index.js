import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia,WebSiteRights, SocialIcons, SocialIconLink,SocialMediaWrap, SocialLogo, FooterOpeningLink, RecruitmentConditions } from './FooterElements.js';
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
                            <FooterOpeningLink >PO Box 1675</FooterOpeningLink>
                            <FooterOpeningLink >Bear DE 19702</FooterOpeningLink>
                            <FooterOpeningLink >(510)931-9136</FooterOpeningLink>
                            <FooterOpeningLink >info@tech-alchemy.com</FooterOpeningLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Openings</FooterLinkTitle>
                            <FooterOpeningLink >Java Developer</FooterOpeningLink>
                            <FooterOpeningLink >Full Stack Developer</FooterOpeningLink>
                            <FooterOpeningLink >Network Engineer</FooterOpeningLink>
                            <FooterOpeningLink >Cloud Security</FooterOpeningLink>
                            <FooterOpeningLink >Automation Engineer</FooterOpeningLink>
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
                        <WebSiteRights>TechAlchemy, L.L.C. © {new Date().getFullYear()} All rights reserved.</WebSiteRights>
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
                    <RecruitmentConditions>TechAlchemy is an equal opportunity employer and will not discriminate against its employees for employment because of sex, race, color, religion, national origin, age, sexual orientation, disability, or veteran status or other basic classes protected by applicable federal or state law provided they are qualified for employment.</RecruitmentConditions>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
