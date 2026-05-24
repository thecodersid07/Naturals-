import { productPromises, products } from '../data/products.js';

function Products() {
  return (
    <section className="products-section" id="products">
      <div className="products-layout">
        <div className="section-heading">
          <p>Products</p>
          <h2>Professional Products We Use</h2>
        </div>
        <div className="product-copy">
          <p>
            Naturals uses Wella Professionals System Professional (SP) for hair care and
            Brillare for skin care, supporting salon services with trusted professional
            formulas.
          </p>
          <ul className="promise-list">
            {productPromises.map((promise) => (
              <li key={promise}>{promise}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image">
              <img
                src={product.image}
                alt={product.fullName}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span>{product.focus}</span>
            <h3>{product.name}</h3>
            <h4>{product.fullName}</h4>
            <p>{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
