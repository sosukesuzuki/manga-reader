import React from 'react';
import styled from 'styled-components';
import { Book } from '../../lib/types';
import Viewer from '../organisms/BookPage/Viewer';

const Container = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
    z-index: 0;
`;

interface Props {
    book: Book;
}

const Book: React.FC<Props> = ({ book }) => {
    return (
        <Container>
            <Viewer book={book} />
        </Container>
    );
};

export default Book;
