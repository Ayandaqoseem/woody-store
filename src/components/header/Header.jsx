import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../asset/woody_logo_1.svg";
import { useEffect, useState } from "react";
import {  FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useSelector } from "react-redux";
// import { toggleStatusTab } from "../../redux/features/product/cartSlice";


export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    // const dispatch = useDispatch();


    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const hideMenu = () => {
        setShowMenu(false)
    }

    useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      setTotalQuantity(total);
  }, [carts])


  return (
    <header className={styles.fixed}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <nav
            className={
                showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
        >
        <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
            <FaTimes size={22} color="#5C2C06" onClick={hideMenu} />
            </li>
            {/* <li>
              <NavLink exact to={"/"} activeClassName="active" >Home</NavLink>
            </li> */}
            <li>
              <NavLink to={"/product"} activeClassName="active" >Products</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"} className={styles.cart}  activeClassName="active" >Cart <span>{totalQuantity}</span></NavLink>
            </li>
            <li>
              <NavLink to={"/blog"} activeClassName="active" >Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} activeClassName="active" >Contact Us</NavLink>
            </li>
            <li>
              <Link to={"/shop"}>
                <button className="--btn --btn-secondary">Shop Now</button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 size={28} color="#ffffff" onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
