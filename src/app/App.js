import { BrowserRouter, Route } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
// import { useContext } from "react";
// import GlobalStyles from "../config/GlobalStyles";
// import ThemeContext from "../config/ThemeContext";
import RouteQuran from "../config/RouteQuran";

import "./app.scss";

function App() {
    // const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter>
            <Route>
                {/* <ThemeProvider theme={{ theme }}> */}
                {/* <GlobalStyles /> */}
                <RouteQuran />
                {/* </ThemeProvider> */}
            </Route>
        </BrowserRouter>
    );
}

export default App;
