import axiosInstance from '../api/api';
import { useQuery } from 'react-query';
import { ICountry, IOptionReactSelect } from '../types/types';
import { useStore } from '../store/store';

const fetchCountries = async () => {
    const response = await axiosInstance.get('/all');
    return response.data;
};

export const useFetchCountries = () => {
    const { setCountries, setRegions } = useStore();

    const { data, isLoading, error } = useQuery('countries', fetchCountries, {
        staleTime: 5000,
        cacheTime: 10000,
        retry: 1,
        onSuccess: (data) => {
            const uniqueRegions = data.reduce((acc: IOptionReactSelect[], country: ICountry) => {
                if (country.region && !acc.some(item => item.value === country.region)) {
                    acc.push({ value: country.region, label: country.region });
                }
                return acc;
            }, []);
            setRegions([{ value: 'All', label: 'All' }, ...uniqueRegions]);
            setCountries(data)
        },
        onError: (error) => {
            console.error('Error fetching countries', error);
        },
    });

    return { data, isLoading, error };
};