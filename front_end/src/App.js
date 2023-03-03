import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import DefaultLayout from './components/layouts/DefaultLayout';
import * as routes from '~/routes';

function App() {
    const user = true;

    return (
        <div className="App">
            <Container disableGutters maxWidth="false">
                <Routes>
                    {user
                        ? routes.publicRoutes.map((route, index) => {
                              const Layout = route.layout || DefaultLayout;
                              const Page = route.component;
                              return (
                                  <Route
                                      path={route.path}
                                      key={index}
                                      element={
                                          <Layout>
                                              <Page />
                                          </Layout>
                                      }
                                  />
                              );
                          })
                        : //<Route path="/" element={<Login />} />
                          null}
                </Routes>
            </Container>
        </div>
    );
}

export default App;
