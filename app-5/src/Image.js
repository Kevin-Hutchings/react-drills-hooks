import React from 'react';

const Image = (props) => {
    return(
        <div>
            <img src={props.url} />
            <div> Error 599 </div>
        </div>
    )
}

export default Image;