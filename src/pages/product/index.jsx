import { Link, useLocation } from "react-router-dom";
import { Card } from "../../components/card/Card";
// import Header from "../../components/header/Header";
import { Services } from "../../Data";
import styles from "./Product.module.scss";

export default function HeroSection() {
    return(
        <section className={styles["home-section"]}>
        {/* <Header /> */}
        <div className={styles["hero-text-container"]}>
          <h3 className={styles["head-text"]}>
            Quality, Comfortable And Affordable Furniture Delivered To Your
            Doorstep.
          </h3>
          <p className={styles["p-text"]}>
            Select And Purchase A Preferred Furniture of Your Choice Without Any
            Hassle.
          </p>
          <Link to={"/shop"}>
          <button className={styles.btn}>Shop Now</button>
          </Link>
        </div>
      </section>
    )
}

export function PriorSection() {

    return(
        <section className={styles["priority-section"]}>
        <div className={styles["priority-div"]}>
          {Services.map((s, id) => {
            return (
              <>
                <Card key={id} cardClass={styles["prior-card"]}>
                  {s.icon}
                  <h4>{s.title}</h4>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    )
}


export function ProductList() {
  const location = useLocation()
    return(
        <section className={styles["product-section"]}>
        <div className={styles["product-wrapper"]}>
            <h2>Our Products</h2>
            <div className={styles["product-avail"]}>
                <Link to={"/product"} className={location.pathname === "/product" ? `${styles.activeLink}` : ""}><h5>New Arrivals</h5></Link>
                <Link to={"/top-rated"} className={location.pathname === "/top-rated" ? `${styles.activeLink}` : ""}><h5>Top Rated</h5></Link>
                <Link to={"/featured"} className={location.pathname === "/featured" ? `${styles.activeLink}` : ""}><h5>Featured</h5></Link>
            </div>
        </div>
      </section>
    )
}