import React from "react";
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';


function Cart({
                  id,
                  onFavorite,
                  onPlus,
                  title,
                  imageUrl,
                  price,
                  favorited = false,
                  added = false,
                  loading = false
              }) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                    speed={4}
                    width={160}
                    height={210}
                    viewBox="0 0 150 210"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="55" y="-133" rx="3" ry="3" width="88" height="6"/>
                    <rect x="101" y="-59" rx="3" ry="3" width="52" height="9"/>
                    <rect x="0" y="0" rx="11" ry="11" width="150" height="100"/>
                    <rect x="0" y="117" rx="5" ry="5" width="150" height="15"/>
                    <rect x="0" y="140" rx="5" ry="5" width="100" height="15"/>
                    <rect x="0" y="178" rx="5" ry="5" width="80" height="25"/>
                    <rect x="118" y="173" rx="10" ry="10" width="32" height="32"/>
                </ContentLoader> :
                    <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked"/>
                    </div>
                    <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
                    <h5>{title}</h5>
                    <div className='d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        <img className={styles.plus} onClick={onClickPlus}
                             src={isAdded ? '/img/btn-chacked.svg' : '/img/btn-plus.svg'} alt="Plus"/>
                    </div>
                </>
            }

        </div>
    );
}

export default Cart;


