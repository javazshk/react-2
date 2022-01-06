import React from 'react';
import { ServicesContainer, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesWrapper } from './ServicesElements';
import Icon1 from '../../images/undraw_cloud_hosting_aodd.svg';
import Icon2 from '../../images/undraw_interaction_design_odgc.svg';
import Icon3 from '../../images/undraw_interview_rmcf.svg';

const Services = () => {
    return (
        <ServicesContainer id ="services">
            <ServicesH1>Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Cloud Adaptation</ServicesH2>
                        <ServicesP>We strive to provide cost-efficient, secure, and fast cloud infrastructure to help you minimize IT costs and process your data, ensuring cyber-security and resiliency.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Increase Productivity</ServicesH2>
                        <ServicesP>Great talent brings about a productive workplace that helps you meet your goals. We deliver the best IT products, so your business can prosper.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Talent Acquisition</ServicesH2>
                        <ServicesP>Our experts have a hawk's eye for talent. Let us know your requirements, and we will help you meet the best talent from the market.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
