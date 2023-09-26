import { Fragment, Component } from "react";
import Customers from "./Customers";
import styles from "./CustomerFilter.module.css";
import CustomersContext from "../store/customers-context";
import ErrorBoundary from "./ErrorBoundary";

class CustomerFilter extends Component {
  static contextType = CustomersContext;

  constructor() {
    super();
    this.state = {
      filteredCustomers: [],
      filter: "",
    };
  }

  componentDidMount() {
    // Отправить HTTP запрос...
    this.setState({
      filteredCustomers: this.context.customers,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.setState({
        filteredCustomers: this.context.customers.filter((customer) =>
          customer.name.includes(this.state.filter)
        ),
      });
    }
  }

  filterHandler(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.filter}>
          <input type="search" onChange={this.filterHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Customers customers={this.state.filteredCustomers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default CustomerFilter;
