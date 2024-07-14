import { useState } from "react";
import styles from "./Checkout.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const initialstate = {
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    address: "",
    city: "",
  };
export default function Checkout() {
    const [isForm, setIsForm] = useState(initialstate);
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    setIsForm({ ...isForm, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { firstname, email, lastname, address, city, country } = isForm;
        if (!firstname || !email || !lastname || !country || !address || !city) {
          return toast.warning("All fields are required.");
        }

        navigate("/checkout/payment")
    }

  return (
    <>
      <section className={styles["checkout-section"]}>
        <div className={styles["checkout-container"]}>
          <h3>Checkout</h3>
          <p className={styles["text-1"]}>Please fill in the boxes below</p>
          <div>
            <form className={styles["checkout-form"]} onSubmit={handleSubmit}>
              <p className={styles["user-name-input"]}>
                <span>
                  <label>First Name</label>
                  <input type="text" name="firstname" value={isForm?.firstname} onChange={handleInputChange}/>
                </span>

                <span>
                  <label>Last Name</label>
                  <input type="text" name="lastname" value={isForm?.lastname} onChange={handleInputChange}/>
                </span>
              </p>

              <p>
                <label>Country</label>
                <input type="text" name="country" value={isForm?.country} onChange={handleInputChange}/>
              </p>
              <p>
                <label>City</label>
                <input type="text" name="city" value={isForm?.city} onChange={handleInputChange}/>
              </p>
              <p>
                <label>Address</label>
                <textarea type="text" name="address" value={isForm?.address} className={styles["text-area-input"]} onChange={handleInputChange}/>
              </p>
              <p>
                <label>Email</label>
                <input type="text" name="email" value={isForm?.email} onChange={handleInputChange}/>
              </p>
              <p className={styles["checkbox-parag"]}>
                <input type="checkbox" className={styles["checkbox-con"]} required />
                Save details
              </p>
              <div className={styles["btn-proceed"]}>
                <button type="submit" className="--btn --btn-secondary">
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
