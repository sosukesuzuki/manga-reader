import React, { useMemo } from 'react';
import { Card } from '@blueprintjs/core';

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
        <Card interactive={true}>
            <h2>{title}</h2>
            <img src={imgUrl} width="200" />
            <p>{slicedDescription}...</p>
        </Card>
    );
};

export default SeriesCard;
