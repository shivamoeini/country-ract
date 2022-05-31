import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Country from "./components/Country";

function App() {

  return (

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

  );
}

export default App;
