import { useRef } from 'react';
import styles from './Checkout.module.css';

const Checkout = (props) => {

    const nameInputRef = useRef();
    const streetiInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetiInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;


    };

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' />
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>Street</label>
                <input ref={streetiInputRef} type='text' id='street' />
            </div>
            <div className={styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalCodeInputRef} type='text' id='postal' />
            </div>
            <div className={styles.control}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type='text' id='city' />
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;