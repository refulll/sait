import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

// Компонент ProductList отображает список продуктов
const ProductList = () => {
    const products = [
        {
            title: 'Electric Ace',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: ['велик1.jpg', 'велик2.jpg', 'велик3.jpg', 'велик4.jpg'],
            colorImages: ['color1.jpg', 'color2.jpg', 'color3.jpg', 'color4.jpg']
        },
        {
            title: 'Electric Ivy',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: ['велик1.jpg', 'велик2.jpg', 'велик3.jpg', 'велик4.jpg'],
            colorImages: ['color1.jpg', 'color2.jpg', 'color3.jpg', 'color4.jpg']
        }
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    images={product.images}
                    colorImages={product.colorImages}
                />
            ))}
        </div>
    );
};

export default ProductList;
