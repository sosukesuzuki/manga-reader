import React, { Suspense } from 'react';
import { routes } from '../lib/routes';
import { Router, View } from 'react-navi';

const App: React.FC = () => {
    return (
        <Router routes={routes}>
            <Suspense fallback={null}>
                <View />
            </Suspense>
        </Router>
    );
};

export default App;
