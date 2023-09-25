import styles from "./Customer.module.css";

const Customer = (props) => {
  return <li className={styles.customer}>{props.name}</li>;
};

export default Customer;
