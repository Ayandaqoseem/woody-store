import styles from "./Footer.module.scss"
import Logo from "../../asset/woody_logo.png"
import { Link } from "react-router-dom";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear()
    return(
        <>
           <section className={styles["footer-section"]}>
            <div className={styles["logo-container"]}>
                <div className={styles.logo}>
                    <Link to={"/"}>
                    <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <p>&copy; {year} All Rights Reserved</p>
            </div>
            <div className={styles["center-text"]}>
                <h4>FAQ</h4>
                <ul className={styles["footer-ul-link"]}>
                    <Link to={"/support"}>
                        <li>Help And Support</li>
                    </Link>
                    <Link to={"/location"}>
                        <li>Location</li>
                    </Link>
                    <Link to={"/log"}>
                        <li>Blog</li>
                    </Link>
                    <Link to={"/contact"}>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
            <div className={styles["newsletter"]}>
                <p>Input Email To Subscribe to Our News Letter</p>
                <form>
                    <input 
                        type="text" 
                        
                    />
                    <button 
                        className="--btn "
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            </section> 
        </>
    )
}