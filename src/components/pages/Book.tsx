import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Book } from '../../lib/types';
import Viewer from '../organisms/BookPage/Viewer';

const Container = styled.div`
    width: 100vw;
`;

interface Props {
    book: Book;
}

const Book: React.FC<Props> = ({ book }) => {
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
            {imageData.map((image, i) => {
                return (
                    <Viewer
                        image={image.imageUrl}
                        shouldShown={currentPage === i}
                    />
                );
            })}
            <button onClick={incrementPage}>←</button>
            <button onClick={decrementPage}>→</button>
        </Container>
    );
};

export default Book;
