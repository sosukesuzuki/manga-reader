import React, { useCallback, Dispatch } from 'react';
import styled from 'styled-components';
import { Book } from '../../../lib/types';
import ViewerImage from './ViewerImage';
import { Action } from '../../pages/Book';

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
    currentPage: number;
    dispatch: Dispatch<Action>;
}

const Viewer: React.FC<Props> = ({ book, currentPage, dispatch }) => {
    const { imageData } = book;
    const incrementPage = useCallback(() => {
        if (currentPage < imageData.length + 1) {
            dispatch({ type: 'incrementPage' });
        }
    }, [currentPage, imageData]);
    const decrementPage = useCallback(() => {
        if (currentPage > 0) {
            dispatch({ type: 'decrementPage' });
        }
    }, [currentPage, imageData]);
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
