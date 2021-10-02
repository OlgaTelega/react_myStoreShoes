import React from "react";
import AppContext from '../context';

const Info = ({image, title, description}) => {
    const {setCartOpened} = React.useContext(AppContext);

    return (
            <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                <img className='mb-20' width='120px' src={image} alt="cart"/>
                <h2>{title}</h2>
                <p className='opacity-6'>{description}</p>
                <button onClick={()=>setCartOpened(false)} className='green-button'>
                    <img src="/img/arrow2.svg" alt="arrow"/>
                    Вернуться назад
                </button>
            </div>
    )
}

export default Info;