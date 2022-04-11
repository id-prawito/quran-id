import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import RouteQuran from "../config/RouteQuran";
import "./app.scss";

function App() {
    // const { theme } = useContext(ThemeContext);
    return (
        // <h1>Bisa react</h1>
        <BrowserRouter basename="quran-id">
            <Route>
                <RouteQuran />
            </Route>
        </BrowserRouter>
    );
}

export default App;
