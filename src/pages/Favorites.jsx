import React from "react";
import Cart from "../components/Card/Cart";

function Favorites({items, onAddToFavorite}){

    return(
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Мои закладки</h1>

            </div>
            <div className="d-flex flex-wrap">
                {items
                    .map((item, index) => (
                        <Cart
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Favorites;