import React, { Suspense } from 'react';
import { routes } from '../lib/routes';
import { Router, View } from 'react-navi';
import Layout from '../components/Layout';

const App: React.FC = () => {
    return (
        <Router routes={routes}>
            <Layout>
                <Suspense fallback={null}>
                    <View />
                </Suspense>
            </Layout>
        </Router>
    );
};

export default App;
