import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, onUpdateStock }) => {
    if (products.length === 0) {
        return (
            <div className="empty-state">
                <p>No products available.</p>
            </div>
        );
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onUpdateStock={onUpdateStock}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
