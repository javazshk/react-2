import React from 'react';
import { ServicesContainer, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesWrapper } from './ServicesElements';
import Icon1 from '../../images/undraw_cloud_hosting_aodd.svg';
import Icon2 from '../../images/undraw_interaction_design_odgc.svg';
import Icon3 from '../../images/undraw_interview_rmcf.svg';

const Services = () => {
    return (
        <ServicesContainer id ="services">
            <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Cloud Platform</ServicesH2>
                        <ServicesP>We recommend and provide cloud services for cost efficenct and resilient IT products.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Increase Productivity</ServicesH2>
                        <ServicesP>Efficent hiring of suitable workforce for clients and for consultants to increase the overall productivity.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Talent Acquisition</ServicesH2>
                        <ServicesP>we are helping our clients, finding suitable and most skilled workforce.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
