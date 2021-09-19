import React from 'react';
import { ServicesContainer, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesWrapper } from './ServicesElements';
import Icon1 from '../../images/svg_1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
    return (
        <ServicesContainer id ="services">
            <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Increase Productivity</ServicesH2>
                        <ServicesP>We help reduce your job hastle and increase your overall productivity</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Increase Productivity</ServicesH2>
                        <ServicesP>We help reduce your job hastle and increase your overall productivity</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Increase Productivity</ServicesH2>
                        <ServicesP>We help reduce your job hastle and increase your overall productivity</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
