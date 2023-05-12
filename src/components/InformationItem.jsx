const InformationItem = ({ product }) => {
  return (
    <div className="Information-item">
      <div className="Information-element">
        <h4>{product.title}</h4>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default InformationItem;
