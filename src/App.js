import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

// import { setContext } from "@apollo/client/link/context";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home.js";
import Header from "./components/Header";
// import About from "./pages/About.js";
// import Footer from "./components/Footer";
// import Study from "./pages/study";
// import Cards from "./pages/cards";
// import Decks from "./pages/decks";


function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <>
          <Header />/
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
