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
                <HeroH1>Programming Made Easy</HeroH1>
                <HeroP>
                    Contact us now to find out how our team will help 
                    you find your dream job!
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
