import React from 'react';
import ProductCard from './ProductCard';
import '../components/css/ProductList.css';
import Velik1 from "../images/91f45267d8722e8114ad014e10c4db8a.png"
import Velik2 from "../images/Ace_Two_-_Graphite_-_NEW.webp"
import Velik3 from "../images/Ace_Two_-_Dune_-_NEW.webp"
import Velik4 from "../images/Ace_Two_-_Jet_Black_-_NEW.webp"
import Velik5 from "../images/Ivy_Two_-_Pebble_Grey_-_NEW.webp"
import Cvet1 from "../images/span-color-swatch_wrapper.png"
import Cvet2 from "../images/span-color-swatch_wrapper-1.png"
import Cvet3 from "../images/span-color-swatch_wrapper-2.png"
import Cvet4 from "../images/span-color-swatch_wrapper-3.png"
import Cvet5 from "../images/span-color-swatch_wrapper-4.png"




// Компонент ProductList отображает список продуктов
const ProductList = () => {
    const products = [
        {
            title: 'Electric Ace',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [Velik1, Velik2, Velik3, Velik4],
            colorImages: [Cvet1, Cvet2, Cvet3, Cvet4]
        },
        {
            title: 'Electric Ivy',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [Velik1, Velik2, Velik3, Velik5],
            colorImages: [Cvet1, Cvet2, Cvet3, Cvet5]
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
