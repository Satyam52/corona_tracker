import React, { Component } from "react";
import { Cards, Charts, Country } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import CoronaImage from "./new.png";
import Stay from "./stay.jpeg";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchdata = await fetchData();

    this.setState({ data: fetchdata });
  }
  handleCountryChange = async (country) => {
    const fetchdata = await fetchData(country);
    this.setState({ data: fetchdata, country: country });
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.img} src={CoronaImage} alt="COVID-19" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Charts data={this.state.data} country={this.state.country} />
        <img className={styles.img} src={Stay} alt="Stay Home" />
      </div>
    );
  }
}
