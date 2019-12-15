import React, { useMemo } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-navi';

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
    const href = useMemo(() => `/series/${id}`, [id]);
    const slicedDescription = useMemo(() => description.slice(0, 50), [
        description,
    ]);
    return (
        <Link href={href} prefetch>
            <SizedCard>
                <Card.Body>
                    <h2>{title}</h2>
                    <img src={imgUrl} width="150" height="200" alt={title} />
                    <p>{slicedDescription}...</p>
                </Card.Body>
            </SizedCard>
        </Link>
    );
};

export default SeriesCard;
