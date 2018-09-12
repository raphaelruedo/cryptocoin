import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Apppage from './components/apppage/apppage';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Apppage} />
    </Switch>
);

export default Main;