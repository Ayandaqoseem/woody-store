import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../../redux/features/product/cartSlice";
import styles from "./CartItem.module.scss";
import remove from "../../asset/REMOVE.svg";
import { Card } from "../../components/card/Card";
import { getProducts } from "../../redux/features/product/productSlice";

export const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null); // Initialize as null
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { products } = useSelector((state) => state.product);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(products)) {
      const findDetail = products.find((product) => product.id === productId);
      setDetail(findDetail || {}); // Set an empty object if no product found
    }
  }, [productId, products]);

  const photoUrl =
    detail && detail.photos && detail.photos.length > 0
      ? `https://api.timbu.cloud/images/${detail.photos[0].url}`
      : "default-image-url.jpg";

  const currentPrice =
    detail && detail.current_price && detail.current_price.length > 0
      ? detail.current_price[0].NGN[0]
      : "N/A";

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!detail) {
    return null; // Add this check to handle the case where detail is null
  }

  return (
    <>
      {windowWidth >= 765 ? (
        <tr className={styles["main-container"]}>
          <td className={styles["cart-img-name-details"]}>
            <p className={styles["cart-img"]}>
              <img
                src={photoUrl}
                alt={detail.name || "Product"}
                className="w-12"
              />
            </p>
            <p className={styles["cart-info"]}>
              {detail.name || "Product Name"}
              {/* <img
                className={styles["remove-cart"]}
                src={remove}
                alt="remove"
              /> */}
            </p>
          </td>
          <td>
            <div className={styles["cart-btn"]}>
              <button
                className={`--bth ${styles["btn-inc"]}`}
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className={styles["cart-quant"]}>{quantity}</span>
              <button
                className={`--bth ${styles["btn-inc"]}`}
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
          </td>
          <td className={styles["cart-price"]}>{currentPrice}</td>
        </tr>
      ) : (
        <div>
          <Card cardClass={styles.shoppingCart}>
            <div className={styles["shop-cart-img"]}>
              <img
                src={photoUrl}
                alt={detail.name || "Product"}
                className={styles["cart-img"]}
              />
            </div>

            <div className={styles["cart-info-div"]}>
              <div>
                <p>{detail.name || "Product Name"}</p>
                <div className={styles["cart-btn"]}>
                  <button
                    className={`--bth ${styles["btn-inc"]}`}
                    onClick={handleMinusQuantity}
                  >
                    -
                  </button>
                  <span className={styles["cart-quant"]}>{quantity}</span>
                  <button
                    className={`--bth ${styles["btn-inc"]}`}
                    onClick={handlePlusQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* <img
                className={styles["remove-cart-shop"]}
                src={remove}
                alt="remove"
              /> */}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
