import Header from "./Header";

const Container = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className={`content`}>{children}</main>
    </div>
  );
};

export default Container;
