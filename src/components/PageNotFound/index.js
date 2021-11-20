import React from 'react'
import ImageNotFound from '../../images/undraw_not_found_60pq.svg';
import { PageNotFoundContainer, PageNotFoundImage, TopLine, PageNotFoundWrapper } from './PageNotFoundElements';

const PageNotFound = () => {
    return (
        <PageNotFoundContainer> 
            <PageNotFoundWrapper>
            <TopLine>Whoops! Page not found</TopLine>
            <PageNotFoundImage src={ImageNotFound} alt='notFound'></PageNotFoundImage>
            </PageNotFoundWrapper>
        </PageNotFoundContainer>
            
    )
}

export default PageNotFound;
