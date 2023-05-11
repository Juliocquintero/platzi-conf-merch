const Product = ({ product, addToCart }) => {

  const handleClick = ()=>{
    addToCart(product)
  }
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2 className="Product-title">
          {product.title}
          <span> ${product.price}</span>
        </h2>
        <p className="Product-description">{product.description}</p>
        <button type="button" onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );
};

export default Product;
