import React, { useCallback } from 'react';
import styled from 'styled-components';
import { MAX_WIDTH } from '../../lib/constants';
import { useNavigation } from 'react-navi';

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #006ebd;
    .main {
        max-width: ${MAX_WIDTH};
        margin: 0 auto;
        h1 {
            margin: 0;
            cursor: pointer;
            line-height: 50px;
            color: white;
        }
    }
`;

const TopNav: React.FC = () => {
    const navigation = useNavigation();
    const handleClickTitle = useCallback(() => {
        navigation.navigate('/');
    }, []);
    return (
        <Container>
            <div className="main">
                <h1 onClick={handleClickTitle}>マンガリーダー</h1>
            </div>
        </Container>
    );
};

export default React.memo(TopNav);
