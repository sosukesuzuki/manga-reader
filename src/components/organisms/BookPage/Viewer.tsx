import React from 'react';
import styled from 'styled-components';

const SizedImg = styled.img`
    width: 100%;
    display: ${({ shouldShown }: { shouldShown: boolean }) =>
        shouldShown ? 'block' : 'none'};
`;

interface Props {
    image: string;
    shouldShown: boolean;
}

const Viewer: React.FC<Props> = ({ image, shouldShown }) => {
    return <SizedImg src={image} shouldShown={shouldShown} />;
};

export default Viewer;
