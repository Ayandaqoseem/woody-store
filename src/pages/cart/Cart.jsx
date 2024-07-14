import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import { CartItem } from "./CartItem";
import { useEffect, useState } from "react";
import cardName from "../../asset/CARDS-NAMES.svg";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/features/product/productSlice";

export default function Cart() {
  const carts = useSelector((store) => store.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [detail, setDetail] = useState([]);


  console.log("CART DETAILS =>", detail);

  const { products } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const cartDetails = carts.map((cartItem) => {
      const productDetail = products.find(
        (product) => product.id === cartItem.productId
      );
      return { ...productDetail, quantity: cartItem.quantity };
    });
    setDetail(cartDetails);

    const totalPrice = cartDetails.reduce((acc, item) => {
      const price = item?.current_price?.length ? parseFloat(item.current_price[0].NGN[0]) : 0;
      if (isNaN(price)) {
        console.warn(`Invalid price for product: ${item.name}`);
        return acc;
      }
      return acc + price * item.quantity;
    }, 0);

    setTotalPrice(totalPrice);
  }, [carts, products]);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles["cart-container"]}>
          {windowWidth >= 765 ? (
            <div className={styles["shopping-cart-container"]}>
              <div className={styles["cart-header"]}>
                <h3>Shopping Cart</h3>
                <p>{totalQuantity} items</p>
              </div>
              <div className={styles.table}>
                <table>
                  <thead>
                    <tr>
                      <th className="">Product</th>
                      <th className="">Quantity</th>
                      <th className="">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((item, key) => (
                      <CartItem key={key} data={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <section className={styles["media-section"]}>
              <div className={styles["media-div"]}>
                <h3>Shopping Cart</h3>
                <div className={styles["cart-div"]}>
                  {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                  ))}
                </div>
              </div>
            </section>
          )}

          <div className={styles["order-summary-container"]}>
            <h3>Order Summary</h3>
            <p className={styles.amt}>
              <span>ITEMS {totalQuantity}</span>
              <span>
                <b>₦</b>
                {totalPrice}
              </span>
            </p>
            <p className={styles.amt}>
              DELIVERY
              <span>
                <b>₦</b>100
              </span>
            </p>
            <p className={styles.amt}>
              TAX
              <span>
                <b>₦</b>0
              </span>
            </p>
            <div className={styles["cart-pay"]}>
              <p>PAYMENT WITH CARD</p>
              <img src={cardName} alt="card-name" />
            </div>

            <p className={styles["cart-promo"]}>
              <label>Promo Code</label>
              <input
                type="text"
                placeholder="******"
                className={styles["cart-input"]}
              />
            </p>
            <div className={styles.hr}></div>

            <p className={styles.amt}>
              TOTAL PRICE
              <span>
                <b>₦</b>
                {totalPrice + 100}
              </span>
            </p>
            <div className={styles["cart-btn-container"]}>
              <button
                type="btn"
                className={`--btn --btn-secondary ${styles["checkout-btn"]}`}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
