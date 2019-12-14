import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';

const SizedCard = styled(Card)`
    width: 280px;
`;

interface Props {
    title: string;
    description: string;
    imgUrl: string;
}

const SeriesCard: React.FC<Props> = ({ title, description, imgUrl }) => {
    const slicedDescription = useMemo(() => description.slice(0, 50), [
        description,
    ]);
    return (
        <SizedCard interactive={true}>
            <h2>{title}</h2>
            <img src={imgUrl} width="150" />
            <p>{slicedDescription}...</p>
        </SizedCard>
    );
};

export default SeriesCard;
