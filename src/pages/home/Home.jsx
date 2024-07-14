import styles from "./Home.module.scss";

import HeroSection, { PriorSection, ProductList } from "../product/index";
import { Card } from "../../components/card/Card";
import { FaStar } from "react-icons/fa";
// import { ProductData } from "../../Data";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/product/cartSlice";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/product/productSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";




export default function Home() {
  const dispatch = useDispatch();
  const carts = useSelector((store) => store?.cart?.items);

  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
 

  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    console.log("PRODUCT =>", product.id);
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
      })
    );
  };

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error loading products: {message}</p>;

  return (
    <div>
      <HeroSection />
      <PriorSection />
      <ProductList />
      <section>
        <div className={styles["main-product-container"]}>
          <div className={styles["line-1"]}></div>
          <div className={styles["line-1"]}></div>
          <div className={styles["products-container"]}>
            {currentItems.map((p, id) => {
              const currentPrice =
                p.current_price && p.current_price.length > 0
                  ? p.current_price[0].NGN[0]
                  : "N/A";
              const photoUrl =
                p.photos.length > 0
                  ? `https://api.timbu.cloud/images/${p.photos[0].url}`
                  : "default-image-url.jpg";

              return (
                <Card key={id} cardClass={styles["product-card"]}>
                  <div key={id} className={styles.img}>
                    <Link to={`/product/${p.id}`}>
                     
                      <img src={photoUrl} alt={p.name} />
                    </Link>
                  </div>
                  <h5>{p.name}</h5>
                  <span>
                    {Array(5)
                      .fill()
                      .map((_, id) => (
                        <FaStar
                          key={id}
                          color={id < p.ratings ? "#FFD700" : "#D3D3D3"}
                          size={20}
                        />
                      ))}
                    <p className={styles.price}>Price: {currentPrice}</p>
                  </span>
                  <button
                    className={styles.btn}
                    onClick={() => handleAddToCart(p)}
                  >
                    Add To Cart
                  </button>
                </Card>
              );
            })}
          </div>
        </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="activePage"
          />

      </section>
      <Footer />
    </div>
  );
}
