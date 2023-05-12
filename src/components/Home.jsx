import initialState from "../initialState";
import Products from "./Products";

const Home = () => {
  return <Products products={initialState}></Products>;
};

export default Home;
