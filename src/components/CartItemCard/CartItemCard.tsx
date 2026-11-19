import { Link } from 'react-router-dom';
import styles from './CartItemCard.module.scss';
import { useCart } from '../../context/CartContext';
import minusActive from './img/buttons/minus-active.svg';
import minusDisabled from './img/buttons/minus-disabled.svg';
import plusActive from './img/buttons/plus-active.svg';
import deleteIcon from './img/buttons/delete.svg';

interface Props {
  id: string;
  image: string;
  name: string;
  price: string;
  count: number;
  // Optional: items saved to localStorage before these fields existed
  // don't have them, so such cards are rendered without a link.
  category?: string;
  itemId?: string;
}

export const CartItemCard = ({
  id,
  image,
  name,
  price,
  count,
  category,
  itemId,
}: Props) => {
  const { updateQuantity, removeFromCart } = useCart();

  const isMinusDisabled = count <= 1;

  const productInfo = (
    <>
      <img src={image} alt="product image" className={styles.productImage} />

      <p className={styles.productName}>{name}</p>
    </>
  );

  return (
    <div className={styles.CartItemCard}>
      <div className={styles.topRow}>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => removeFromCart(id)}
          aria-label="Remove from cart"
        >
          <img src={deleteIcon} alt="delete icon" />
        </button>

        {category && itemId ? (
          <Link to={`/${category}/${itemId}`} className={styles.productLink}>
            {productInfo}
          </Link>
        ) : (
          <div className={styles.productLink}>{productInfo}</div>
        )}
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => updateQuantity(id, -1)}
            disabled={isMinusDisabled}
          >
            <img
              src={isMinusDisabled ? minusDisabled : minusActive}
              alt="minus"
            />
          </button>

          <span className={styles.count}>{count}</span>

          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => updateQuantity(id, 1)}
          >
            <img src={plusActive} alt="plus" />
          </button>
        </div>

        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
};
