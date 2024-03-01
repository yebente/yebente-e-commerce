import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import SellPage from './pages/SellPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sell" component={SellPage} />
          <Route path="/product/:id" component={ProductDetailsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          {/* Add more routes for additional pages */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
