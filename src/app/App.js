import { BrowserRouter, Route } from "react-router-dom";
import { useContext } from "react";
import RouteQuran from "../config/RouteQuran";
import "./app.scss";
import GlobalStyles from "../config/GlobalStyles";
import ThemeContext from "../config/theme/ThemeContext";
import { ThemeProvider } from "styled-components";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter basename="quran-id">
            <Route>
                <ThemeProvider theme={{ theme }}>
                    <GlobalStyles />
                    <RouteQuran />
                </ThemeProvider>
            </Route>
        </BrowserRouter>
    );
}

export default App;
