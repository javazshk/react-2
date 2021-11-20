import React from 'react'
import { Icon, CloseIcon, SidebarContainer, SidebarWrapper, SidebarMenu, 
    SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="alchemists" onClick={toggle}>Alchemists</SidebarLink>
                    <SidebarLink to="clients" onClick={toggle}>Clients</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signin" onClick={toggle}>Sign in</SidebarLink>
                    {/* <SidebarLink to="about">About</SidebarLink> */}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to ='/signup'>Sign up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};


export default Sidebar;
