import React from 'react';
import styled from 'styled-components';
import TopNav from './template/TopNav';

const MainContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
`;

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <TopNav />
            <MainContainer>{children}</MainContainer>
        </div>
    );
};

export default Layout;
