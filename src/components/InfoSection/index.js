import React from 'react';
import { Button } from '../ButtonElements';
import { Infocontainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, BtnWrap } from './InfoElements';
import svg_1 from '../../images/svg_1.svg';

const InfoSection = ({lightBg, id, imgStart,topLine, lightText, darkText, headline, description, buttonLabel,img, alt, primary, dark, dark2}) => {
    return (
        <>
            <Infocontainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 :0 }
                                    dark={dark ? 1 : 0} 
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {/* <Img src={img} alt={alt}/> */}
                                <Img src={svg_1} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </Infocontainer>
        </>
    );
};

export default InfoSection;
