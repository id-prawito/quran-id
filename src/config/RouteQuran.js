import { Route, Switch } from "react-router-dom";
import React from "react";

import Quran from "../pages/Quran";

const RouteQuran = () => {
    return (
        <Switch>
            <Route exact path="/" component={Quran} />
        </Switch>
    );
};

export default RouteQuran;
