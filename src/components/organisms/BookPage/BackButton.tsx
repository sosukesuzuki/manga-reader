import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigation } from 'react-navi';

const Container = styled.div`
    position: absolute;
    left: 2px;
    top: 10px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
`;

interface Props {
    seriesId: string;
}

const BackButton: React.FC<Props> = ({ seriesId }) => {
    const navigation = useNavigation();
    const handleClickBackButton = useCallback(() => {
        navigation.navigate(`/series/${seriesId}`);
    }, [seriesId]);
    return (
        <Container onClick={handleClickBackButton}>
            {'< シリーズページにもどる'}
        </Container>
    );
};

export default React.memo(BackButton);
