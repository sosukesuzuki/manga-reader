import React from 'react';
import BusyIndicator from 'react-busy-indicator';
import TopNav from './template/TopNav';
import { useLoadingRoute } from 'react-navi';

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
            {children}
        </div>
    );
};

export default Layout;
