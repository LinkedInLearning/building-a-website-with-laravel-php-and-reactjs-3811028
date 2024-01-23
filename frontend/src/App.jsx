import "./App.css";
import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Create from "./Pages/Posts/Create";

function App() {
    return (
        <div className="w-3/5 mx-auto my-10">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts/create" element={<Create />} />
            </Routes>
        </div>
    );
}

export default App;
