import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Book } from '../../../lib/types';
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
    book: Book;
}

const Viewer: React.FC<Props> = ({ book }) => {
    const { imageData } = book;
    const [currentPage, setCurrentPage] = useState(0);
    const incrementPage = useCallback(() => {
        setCurrentPage(v => {
            if (v !== imageData.length) {
                return v + 1;
            }
            return v;
        });
    }, [setCurrentPage]);
    const decrementPage = useCallback(() => {
        setCurrentPage(v => {
            if (v !== 0) {
                return v - 1;
            }
            return v;
        });
    }, [setCurrentPage]);
    return (
        <Container>
            <IncrementSpan onClick={incrementPage} />
            <DecrementSpan onClick={decrementPage} />
            {imageData.map((image, i) => {
                return (
                    <ViewerImage
                        key={image.imageId}
                        image={image.imageUrl}
                        shouldShown={currentPage === i}
                    />
                );
            })}
        </Container>
    );
};

export default Viewer;
