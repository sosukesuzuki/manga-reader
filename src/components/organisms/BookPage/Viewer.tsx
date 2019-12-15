import React from 'react';
import styled from 'styled-components';
import { BookImageData } from '../../../lib/types';
import ViewerImage from './ViewerImage';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    overflow-y: hidden;
    width: 100vw;
    max-width: 900px;
`;
const IncrementSpan = styled.span`
    position: absolute;
    top: 50px;
    bottom: 0;
    right: 50%;
    left: 0;
    opacity: 0;
`;
const DecrementSpan = styled.span`
    position: absolute;
    top: 50px;
    bottom: 0;
    right: 0;
    left: 50%;
    opacity: 0;
`;

interface Props {
    imageData: BookImageData[];
    currentPage: number;
    incrementPage: () => void;
    decrementPage: () => void;
}

const Viewer: React.FC<Props> = ({
    imageData,
    currentPage,
    incrementPage,
    decrementPage,
}) => {
    return (
        <Container>
            <IncrementSpan onClick={incrementPage} />
            <DecrementSpan onClick={decrementPage} />
            {imageData.map(({ imageId, imageUrl }, i) => (
                <ViewerImage
                    key={imageId}
                    image={imageUrl}
                    shouldShown={currentPage === i}
                />
            ))}
        </Container>
    );
};

export default Viewer;
