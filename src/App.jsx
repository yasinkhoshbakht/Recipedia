import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Community from "./Pages/Community";
import About from "./Pages/About";
import SingleRecepe from "./pages/SingleRecepe";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recepies/:Id" element={<SingleRecepe />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="community" element={<Community />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
