import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    background-image: url(${({ img }: { img: string }) => img});
    background-size: cover;
    background-position-y: 30%;
    height: 250px;
`;

interface Props {
    image: string;
}

const SeriesImage: React.FC<Props> = ({ image }) => {
    return <Container img={image} />;
};

export default SeriesImage;
