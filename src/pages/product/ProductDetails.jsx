import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import { ProductData } from "../../Data";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Card } from "../../components/card/Card";
import { addToCart, changeQuantity } from "../../redux/features/product/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/features/product/productSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [productDatails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  
  const photoUrl =
    product.photos.length > 0
      ? `https://api.timbu.cloud/images/${product.photos[0].url}`
      : "default-image-url.jpg";

  console.log("SINGLE PRODUCT =>", product);

  console.log("ID =>", id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  const handleMinusQuantity = () => {
    const newQuantity = quantity - 1 < 1 ? 1 : quantity - 1;
    setQuantity(newQuantity);
    dispatch(changeQuantity({ productId: id, quantity: newQuantity }));
  };

  const handlePlusQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(changeQuantity({ productId: id, quantity: newQuantity }));
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: quantity,
      })
    );
  };
  return (
    <>
      <section className={styles.section}>
        <div className={styles["product-details-container"]}>
          <div className={styles["product-details-wrapper"]}>
            <Card cardClass={styles.img}>
              <img src={photoUrl} alt={product.name} />
            </Card>
            <div className={styles["product-details-info"]}>
              <h3>{product?.name}</h3>
              <p>Price: {product.current_price}</p>
              <p>Quantity: {productDatails?.quantity}</p>
              <p>
                {Array(5)
                  .fill()
                  .map((_, id) => (
                    <FaStar
                      key={id}
                      color={
                        id < productDatails?.ratings ? "#FFD700" : "#D3D3D3"
                      }
                      size={20}
                    />
                  ))}
              </p>
              <div>
                <div className={styles["btn-container"]}>
                  <button
                    className={`--btn ${styles.inc}`}
                    onClick={handleMinusQuantity}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className={`--btn ${styles.inc}`}
                    onClick={handlePlusQuantity}
                  >
                    +
                  </button>
                </div>
                <button
                  className={`--btn ${styles.addToCartD}`}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
              <p className={styles.desc}>{productDatails?.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
