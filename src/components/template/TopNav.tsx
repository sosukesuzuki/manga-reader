import React from 'react';
import styled from 'styled-components';
import { MAX_WIDTH } from '../../lib/constants';
import { Link } from 'react-navi';

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #006ebd;
    a {
        color: white;
    }
    .main {
        max-width: ${MAX_WIDTH};
        margin: 0 auto;
        h1 {
            margin: 0;
            line-height: 50px;
        }
    }
`;

const TopNav: React.FC = () => {
    return (
        <Container>
            <div className="main">
                <Link href="/">
                    <h1>マンガリーダー</h1>
                </Link>
            </div>
        </Container>
    );
};

export default TopNav;
