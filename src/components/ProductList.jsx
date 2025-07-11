import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '무선 마우스', price: 32000 },
    { id: 3, name: '키보드', price: 55000 },
  ];

  return (
    <div>
      <h2>🛍️ 상품 목록</h2>
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default ProductList;