import axiosInstance from '../api/api';
import { useQuery } from 'react-query';

const fetchDetailsCountry = async (code: string) => {
    const response = await axiosInstance.get(`/alpha/${code}`);
    return response.data;
};
export const useFetchDetailsCountry = (code: string) => {
    return useQuery(['country', code], () => fetchDetailsCountry(code), {
        retry: 1,
        onSuccess: (data) => {
            console.log('Fetched country successfully', data);

        },
        onError: (error) => {
            console.error('Error fetching country', error);
        },
    });
};