import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Footer from "./components/Footer/Footer"
import fetchData from "./api";

import coronaImage from './images/image.jpg'

import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country:'',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    
    this.setState({ data: fetchedData, country: country})
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
