import React, { useState, useEffect } from "react";
import { countries } from "./../../api/index";
import styles from "./Country.module.css";
import { FormControl, NativeSelect } from "@material-ui/core";

const Country = ({ handleCountryChange }) => {
  const [Country, setCountry] = useState([]);

  useEffect(() => {
    const secountry = async () => {
      setCountry(await countries());
    };
    secountry();
  }, [setCountry]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {Country.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
