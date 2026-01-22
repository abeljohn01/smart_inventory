import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onUpdateStock }) => {
    const { id, name, price, stockQuantity, lowStockThreshold } = product;
    const [loading, setLoading] = useState(false);

    const isLowStock = stockQuantity < lowStockThreshold;
    const isOutOfStock = stockQuantity === 0;

    const handleStockChange = async (change) => {
        const newQuantity = stockQuantity + change;
        if (newQuantity < 0) return;

        setLoading(true);
        try {
            await onUpdateStock(id, newQuantity);
        } catch (error) {
            console.error("Failed to update stock", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`product-card ${isLowStock ? 'low-stock-warning' : ''}`}>
            <div className="card-header">
                <h3 className="product-name">{name}</h3>
                {isLowStock && (
                    <span className="badge badge-danger">
                        {isOutOfStock ? 'Out of Stock' : 'Critical Low'}
                    </span>
                )}
            </div>

            <div className="product-price">${price.toFixed(2)}</div>

            <div className="stock-controls">
                <div className="stock-info">
                    <span className="label">Stock:</span>
                    <span className={`value ${isLowStock ? 'text-danger' : ''}`}>
                        {stockQuantity}
                    </span>
                </div>

                <div className="actions">
                    <button
                        className="btn-icon"
                        onClick={() => handleStockChange(-1)}
                        disabled={isOutOfStock || loading}
                        aria-label="Decrease stock"
                    >
                        −
                    </button>
                    <button
                        className="btn-icon"
                        onClick={() => handleStockChange(1)}
                        disabled={loading}
                        aria-label="Increase stock"
                    >
                        +
                    </button>
                </div>
            </div>

            {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
        </div>
    );
};

export default ProductCard;
