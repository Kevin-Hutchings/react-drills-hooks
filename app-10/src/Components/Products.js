import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        try {
            axios.get("https://practiceapi.devmountain.com/products")
            .then(({ data }) => {
                setProducts(data)
            })
        }
        catch(err) {
            console.log(err);
        }
    }, []);

    const productsMap = products.map((product, index) => {
        if(product.image) {
            return(
                <Link key={index} to={`/details/${product.id}`}>
                    <img src={product.image} alt='product'/>
                </Link>
            );
        }
    });

    return(
        <div>
            <h1> Products </h1>
            <div className='products'> {productsMap} </div>
        </div>
    );
}

export default Products;