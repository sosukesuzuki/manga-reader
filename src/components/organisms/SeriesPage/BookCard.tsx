import React from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import { BookOutline } from '../../../lib/types';

const StyledCard = styled(Card)`
    display: flex;
`;
const BookOutlineImage = styled.img`
    width: 100px;
    height: 80px;
    object-fit: cover;
`;

interface Props {
    book: BookOutline;
}

const BookCard: React.FC<Props> = ({ book }) => {
    const { title, image } = book;
    return (
        <StyledCard>
            <BookOutlineImage src={image} />
            <h3>{title}</h3>
        </StyledCard>
    );
};

export default BookCard;
