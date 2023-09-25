import { Fragment, useState, useEffect } from "react";
import Customers from "./Customers";
import styles from "./CustomerFilter.module.css";

const DUMMY_CUSTOMERS = [
  { id: "c1", name: "Дмитрий" },
  { id: "c2", name: "Михаил" },
  { id: "c3", name: "Ирина" },
];

const CustomerFilter = () => {
  const [filteredCustomers, setFilteredCustomers] = useState(DUMMY_CUSTOMERS);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilteredCustomers(
      DUMMY_CUSTOMERS.filter((customer) => customer.name.includes(filter))
    );
  }, [filter]);

  const filterHandler = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Fragment>
      <div className={styles.filter}>
        <input type="search" onChange={filterHandler} />
      </div>

      <Customers customers={filteredCustomers} />
    </Fragment>
  );
};

export default CustomerFilter;
