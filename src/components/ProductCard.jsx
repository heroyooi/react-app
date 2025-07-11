function ProductCard({ name, price }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <p>상품명: {name}</p>
      <p>가격: {price.toLocaleString()}원</p>
    </div>
  );
}

export default ProductCard;