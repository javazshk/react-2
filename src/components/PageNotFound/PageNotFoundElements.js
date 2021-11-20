import styled from "styled-components";

export const PageNotFoundContainer=styled.div`
    color: #fff;
    background: ${ ({lightBg}) => (lightBg ? '#f9f9f9' : '#010606') };

    @media and screen and (max-width: 768px) {
        // padding: 100px 0;
    };
`;

export const PageNotFoundImage = styled.img`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 70%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;
export const PageNotFoundWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const TopLine = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 50px;
    text-align: center;
`;
