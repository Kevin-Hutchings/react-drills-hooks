import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Details = (props) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        try {
            axios.get(`https://practiceapi.devmountain.com/products/${props.match.params.id}`)
            .then(({ data }) => {
                setItem(data);
            })
        }
        catch(err) {
            console.log(err);
        }
    });

    return (
        <div>
            <h2> {item.title} </h2>
            <img src={item.image} alt='item' />
            <h4> {`Price: $${item.price}.00`} </h4>
        </div>
    );
}

export default Details;