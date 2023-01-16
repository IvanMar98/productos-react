import React from 'react';
import './Heart.css'
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from 'react';

const Heart = () => {

    const [like, setLike] = useState(false);

    const handleClick = () =>{
        like == true ? setLike(false) : setLike(true);
    };

    return (
        <div onClick={handleClick}>
            {like == true ?
            <AiFillHeart className="heart"/> : <AiOutlineHeart />}
        </div>
    );
};

export default Heart