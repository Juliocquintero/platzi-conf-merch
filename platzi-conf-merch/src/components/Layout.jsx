import Header from "./Header";
import "../styles/components/Layout.css";
import "../styles/App.css";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      <main className="Main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
