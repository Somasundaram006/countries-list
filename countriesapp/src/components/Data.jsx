import { useEffect } from "react";
import { connect } from "react-redux";
import { getInitialData } from "./../actions/fetchAction";
import { get as lodashGet } from "lodash";
import CardComponent from "./Card";

const Data = ({ getInitialData, countriesFetchLoading, countries }) => {
 useEffect(() => {
  getInitialData();
 }, []);

 if (countriesFetchLoading) return "Fetching the countries data";
 return (
  <div>
   {countries.map((country, index) => {
    return (
     <CardComponent key={country.name} flag={country.flag} countryName={country.name} capital={country.capital} population={country.population} />
    );
   })}
  </div>
 );
};

const mapStateToProps = (state) => {
 const countries = lodashGet(state, ["dataFetch", "allCountries"], []);
 const countriesFetchLoading = lodashGet(
  state,
  ["dataFetch", "loading"],
  false
 );
 return {
  countries,
  countriesFetchLoading,
 };
};
export default connect(mapStateToProps, { getInitialData })(Data);
