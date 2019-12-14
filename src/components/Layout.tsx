import React from 'react';
import styled from 'styled-components';
import BusyIndicator from 'react-busy-indicator';
import TopNav from './template/TopNav';
import { useLoadingRoute } from 'react-navi';

const MainContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
`;

const Layout: React.FC = ({ children }) => {
    const loadingRoute = useLoadingRoute();
    return (
        <div>
            <BusyIndicator
                isBusy={!!loadingRoute}
                delayMs={200}
                color=""
                className=""
                active=""
                style=""
            />
            <TopNav />
            <MainContainer>{children}</MainContainer>
        </div>
    );
};

export default Layout;
