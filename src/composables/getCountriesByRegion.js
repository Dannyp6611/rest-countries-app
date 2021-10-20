import { ref } from "vue";

const getCountriesByRegion = async (region) => {
  const error = ref(null);
  const regionCountries = ref(null);

  try {
    const res = await fetch("https://restcountries.com/v2/continent/" + region);
    const data = await res.json();
    regionCountries.value = data;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }

  return { error, regionCountries };
};

export default getCountriesByRegion;
