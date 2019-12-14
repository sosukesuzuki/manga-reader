import React from 'react';
import styled from 'styled-components';

const SizedImg = styled.img`
    margin: 0 auto;
    width: 100%;
    object-fit: contain;
    height: calc(100vh - 50px);
    display: ${({ shouldShown }: { shouldShown: boolean }) =>
        shouldShown ? 'block' : 'none'};
`;

interface Props {
    image: string;
    shouldShown: boolean;
}

const ViewerImage: React.FC<Props> = ({ image, shouldShown }) => {
    return <SizedImg src={image} shouldShown={shouldShown} />;
};

export default ViewerImage;
