import { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import { ICountry } from '../types/types';

const useFilterCountries = () => {
    const { countries } = useStore();
    const [originalCountries, setOriginalCountries] = useState<ICountry[]>(countries);

    useEffect(() => {
        setOriginalCountries(countries);
    }, [countries]);

    const filteredCountryByPhrase = (inputValue: string) => {
        if (inputValue.trim() === '') {
            setOriginalCountries(countries);
        } else {
            const filtered = countries.filter((country) => country.name.official.toLowerCase().includes(inputValue.toLowerCase()));
            setOriginalCountries(filtered);
        }
    };
    const filteredCountryByRegion = (region: string) => {
        if (region.trim() === 'All') {
            setOriginalCountries(countries);
        } else {
            const filtered = countries.filter((country) => country.region.toLowerCase().includes(region.toLowerCase()));
            setOriginalCountries(filtered);
        }
    };
    return {
        filteredCountryByPhrase,
        filteredCountryByRegion,
        originalCountries
    };
};

export default useFilterCountries;