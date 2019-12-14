import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import { BookOutline } from '../../../lib/types';
import { Link } from 'react-navi';

const StyledCard = styled(Card)`
    display: flex;
    margin-bottom: 10px;
    h3 {
        margin: 0;
    }
`;
const BookOutlineImage = styled.img`
    width: 100px;
    height: 80px;
    object-fit: cover;
    margin-right: 10px;
`;

interface Props {
    seriesId: string;
    book: BookOutline;
}

const BookCard: React.FC<Props> = ({ book, seriesId }) => {
    const { title, image, id } = book;
    const href = useMemo(() => `/series/${seriesId}/${id}`, [seriesId, id]);
    return (
        <Link href={href} prefetch>
            <StyledCard className="book-card">
                <BookOutlineImage src={image} />
                <h3>{title}</h3>
            </StyledCard>
        </Link>
    );
};

export default BookCard;
