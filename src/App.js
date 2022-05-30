import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Country from "./components/Country";
import UseDarkMode from "./components/UseDarkMode";
function App() {
const [theme,toggleTheme]=UseDarkMode();
  return (
<div className="app" style={{background:theme==='dark'?'#212121':'#ffffff',transition:'.2s all',}}>
<Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter />
              <Countries />
            </>
          }
        ></Route>
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
</div>
  );
}

export default App;
