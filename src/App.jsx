import { useEffect, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import Map from "./components/Map";
import axios from "axios";

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [addressData, setAddressData] = useState({});
  const [fetchData, setFetchData] = useState(false);
  useEffect(() => {
    if (fetchData) {
      axios
        .get(
          `https://geo.ipify.org/api/v2/country?apiKey=at_uI46T6qCzgEzUmT8Oqu1bHkifvBJo&ipAddress=${ipAddress}`
        )
        .then((res) => {
          setAddressData(res.data);
          console.log(res.data);
        });
    }
    setFetchData(false);
  }, [ipAddress, fetchData]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFetchData(true);
  };
  const onChangeHandler = (e) => {
    setIpAddress(e.target.value);
  };
  return (
    <>
      <Header
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
      <Result addressData={addressData} />
      <Map />
    </>
  );
};

export default App;
