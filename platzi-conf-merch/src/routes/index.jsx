import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";
import NotFound from "../components/NotFound";
import Success from "../components/Success";
import Payment from "../components/Payment";
import Information from "../components/Information";
import Home from "../components/Home";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default AppRoutes;
