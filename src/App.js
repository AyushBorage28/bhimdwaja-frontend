import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductPage from "./screens/ProductPage";
import CategoryPage from "./screens/CategoryPage";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import VerifyOtpScreen from "./screens/VerifyOtpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import { CategoryContext } from "./context";
import TandCScreen from "./screens/TandCScreen";
import FAQsScreen from "./screens/FAQsScreen";
import CustomizationScreen from "./screens/CustomizationScreen";
import EnergizationScreen from "./screens/EnergizationScreen";
import PageNotFound from "./screens/PageNotFound";
import SearchScreen from "./screens/SearchScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import SimpleMap from "./screens/ContactUs";
import ShippingAndReturn from "./screens/ShippingAndReturn";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <Router>
        <Header />
        <main className="py-3">
          <Container fluid>

            <Switch>
              <Route path="/order/:id" component={OrderScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/login" component={LoginScreen} />
              <Route path="/category/:category" component={ProductPage} />
              <Route path="/categories" component={CategoryPage} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/verifyotp" component={VerifyOtpScreen} />
              <Route path="/terms-and-conditions" component={TandCScreen} />
              <Route path="/faqs" component={FAQsScreen} />
              <Route path="/customization" component={CustomizationScreen} />
              <Route path="/contact-us" component={SimpleMap} />
              <Route path="/shipping-and-return" component={ShippingAndReturn} />
              <Route path="/energization" component={EnergizationScreen} />
              <Route path="/privacy-policy" component={PrivacyPolicyScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/admin/userlist" component={UserListScreen} />
              <Route path="/admin/user/:id/edit" component={UserEditScreen} />
              <Route
                path="/admin/productlist"
                component={ProductListScreen}
                exact
              />
              <Route
                path="/admin/productlist/:pageNumber"
                component={ProductListScreen}
                exact
              />
              <Route
                path="/admin/product/:id/edit"
                component={ProductEditScreen}
              />
              <Route path="/admin/orderlist" component={OrderListScreen} />
              <Route path="/search/:keyword" component={SearchScreen} exact />
              <Route path="/page/:pageNumber" component={HomeScreen} exact />
              {/* <Route
                path="/search/:keyword/page/:pageNumber"
                component={HomeScreen}
                exact
              /> */}
              <Route path="/" component={HomeScreen} exact />
              <Route component={PageNotFound} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </CategoryContext.Provider>
  );
};

export default App;
