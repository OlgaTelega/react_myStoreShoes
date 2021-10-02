import React from "react";
import axios from "axios";

import Cart from "../components/Card/Cart";
import AppContext from "../context";

function Orders() {
    const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://6140d864357db50017b3d923.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка ошибка при запросе заказов');
            }
        })();
    }, []);
    return (
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Мои заказы</h1>
            </div>

            <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Cart
                        key={index} loading={isLoading}{...item}/>
                ))}
            </div>
        </div>
    );
}

export default Orders;