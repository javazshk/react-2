import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type ='video/mp4' /> 
            </HeroBg>
            <HeroContent>
                <HeroH1>Revolutionary Tech Solutions for an Empowered Tomorrow!</HeroH1>
                <HeroP>
                TechAlchemy is a leading IT firm providing innovative software and IT solutions to Service and Product providers for a brighter and better future. Utilizing Agile development tools and technologies, we create a better understanding between IT and business leaders.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ='sign up' onMouseEnter={onHover} onMouseLeave={onHover} primary ='true' dark='true'>
                        Get Started { hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
