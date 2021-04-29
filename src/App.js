import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
