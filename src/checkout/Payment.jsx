import { useEffect, useState } from "react";
import styles from "./Payment.module.scss";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import img_1 from "../asset/cancel_2.svg";
import img_2 from "../asset/cancel_1.svg";
import { getProducts } from "../redux/features/product/productSlice";

const initialstate = {
  cardNumber: "",
  cvv: "",
  date: "",
};

export default function Payment() {
  const [isForm, setIsForm] = useState(initialstate);
  const carts = useSelector((store) => store.cart.items);
  const [detail, setDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { products } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsForm({ ...isForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, cvv, date } = isForm;
    if (!cardNumber || !cvv || !date) {
      return toast.warning("All fields are required.");
    } else {
      toast.success("Payment successful, continue shopping.");
    }

    navigate("/");
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
      const price = item?.current_price?.length
        ? parseFloat(item.current_price[0]?.NGN?.[0])
        : 0;
      if (isNaN(price)) {
        console.warn(`Invalid price for product: ${item.name}`);
        return acc;
      }
      return acc + price * item.quantity;
    }, 0);

    setTotalPrice(totalPrice);
  }, [carts, products]);

  return (
    <>
      <section className={styles["checkout-section"]}>
        <div className={styles["checkout-container"]}>
          <h3>Make Payment</h3>
          <p className={styles["text-1"]}>Please fill in the boxes below</p>
          <div>
            <form className={styles["checkout-form"]} onSubmit={handleSubmit}>
              <p>
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={isForm?.cardNumber}
                  onChange={handleInputChange}
                />
              </p>
              <p className={styles["user-name-input"]}>
                <span>
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={isForm?.cvv}
                    onChange={handleInputChange}
                  />
                </span>

                <span>
                  <label>Date</label>
                  <input
                    type="text"
                    name="date"
                    value={isForm?.date}
                    onChange={handleInputChange}
                  />
                </span>
              </p>

              <p className={styles["checkbox-parag"]}>
                <input
                  type="checkbox"
                  className={styles["checkbox-con"]}
                  required
                />
                Save details
              </p>
              <div className={styles["btn-proceed"]}>
                <button type="submit" className="--btn --btn-secondary">
                  Pay{" "}
                  <span>
                    <b> $</b>
                    {totalPrice}
                  </span>
                </button>
              </div>
            </form>
            <div className={styles["option-btn"]}>
              <Link to={"/payment-method"}>
                <button type="submit" className="--btn --btn-1">
                  <span>
                    <img src={img_1} alt="" />
                  </span>
                  Change Payment
                </button>
              </Link>
              <Link to={"/"}>
                <button type="submit" className="--btn --btn-2">
                  <span>
                    <img src={img_2} alt="" />
                  </span>
                  Cancel Payment
                </button>
              </Link>
              <p>
                Secure by <b>Paystack</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
