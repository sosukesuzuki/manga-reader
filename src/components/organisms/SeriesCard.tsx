import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import { useNavigation } from 'react-navi';

const SizedCard = styled(Card)`
    width: 280px;
    height: 400px;
`;

interface Props {
    title: string;
    description: string;
    imgUrl: string;
    id: string;
}

const SeriesCard: React.FC<Props> = ({ title, description, imgUrl, id }) => {
    const navigation = useNavigation();
    const handleClickSeries = useCallback(() => {
        navigation.navigate(`/series/${id}`);
    }, [id, navigation]);
    const slicedDescription = useMemo(() => description.slice(0, 50), [
        description,
    ]);
    return (
        <SizedCard interactive={true} onClick={handleClickSeries}>
            <h2>{title}</h2>
            <img src={imgUrl} width="150" />
            <p>{slicedDescription}...</p>
        </SizedCard>
    );
};

export default SeriesCard;
