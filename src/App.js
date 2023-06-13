import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import ProgressBar from "react-bootstrap/ProgressBar";
import LogoLoader from "./components/LogoLoader";


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = ((scrollTop / maxScroll) * 90) + 10;
      setScrollProgress(progress);
    };

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleLoad);
    };
  }, []);


  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <Router>
        <div style={{ position: "relative", minHeight: "100vh" }}>
          {isLoading ? (
            <LogoLoader />
          ) : (
            <>
              <Header />
              <div style={{ paddingBottom: "60px" }}>
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

                  {/* <Route
                path="/search/:keyword/page/:pageNumber"
                component={HomeScreen}
                exact
              /> */}
                  <Route path="/page/:pageNumber" component={HomeScreen} exact />
                  <Route path="/" component={HomeScreen} exact />
                  <Route component={PageNotFound} />
                </Switch>
                <ProgressBar now={scrollProgress} style={{ width: '100%', height: '2px', backgroundColor: '#b27b23' }} className="fixed-top" variant="warning" />
                <div style={{ marginTop: '2px' }}></div>
              </div>
            </>
          )}
        </div>
        <Footer style={{ position: "absolute", bottom: 0, width: "100%" }} />
      </Router>
    </CategoryContext.Provider>
  );
};

export default App;
