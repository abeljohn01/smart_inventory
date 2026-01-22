import React, { useState, useEffect } from 'react';
import ProductGrid from './components/ProductGrid';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3001' : '/api');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStock = async (id, newQuantity) => {
    try {
      const response = await fetch(`${API_URL}/update-stock`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, newQuantity }),
      });

      if (!response.ok) {
        throw new Error('Failed to update stock');
      }

      const updatedProduct = await response.json();

      setProducts(prevProducts =>
        prevProducts.map(p => p.id === updatedProduct.id ? updatedProduct : p)
      );
    } catch (err) {
      console.error(err);
      throw err; // Re-throw to let child component handle UI state if needed
    }
  };

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}><div className="spinner" style={{ width: '2rem', height: '2rem', color: 'var(--accent-color)' }}></div></div>;
  if (error) return <div style={{ textAlign: 'center', color: 'var(--danger-color)', marginTop: '4rem' }}>Error: {error}</div>;

  return (
    <div className="app-container">
      <h1>Product Inventory</h1>
      <ProductGrid products={products} onUpdateStock={handleUpdateStock} />
    </div>
  );
}

export default App;
