import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import { BookOutline } from '../../../lib/types';
import { useNavigation } from 'react-navi';

const StyledCard = styled(Card)`
    display: flex;
    h3 {
        margin: 0;
    }
`;
const BookOutlineImage = styled.img`
    width: 100px;
    height: 80px;
    object-fit: cover;
`;

interface Props {
    seriesId: string;
    book: BookOutline;
}

const BookCard: React.FC<Props> = ({ book, seriesId }) => {
    const navigation = useNavigation();
    const { title, image, id } = book;
    const handleClickCard = useCallback(() => {
        navigation.navigate(`/series/${seriesId}/${id}`);
    }, [navigation, id]);
    return (
        <StyledCard onClick={handleClickCard}>
            <BookOutlineImage src={image} />
            <h3>{title}</h3>
        </StyledCard>
    );
};

export default BookCard;
