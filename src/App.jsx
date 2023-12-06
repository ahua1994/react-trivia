import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TriviaContextProvider from "./context/TriviaContext";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Game from "./pages/Game";

function App() {
    return (
        <div className="App">
            <TriviaContextProvider>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/result" element={<Results />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </TriviaContextProvider>
        </div>
    );
}

export default App;
