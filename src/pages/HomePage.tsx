import { ChangeEvent, Suspense, useCallback, useMemo } from 'react';
import Select, { CSSObjectWithLabel, OptionProps, SingleValue } from 'react-select';
import { useTheme } from '../context/ThemeContext';
import SearchField from '../components/SearchField';
import ListCountries from '../components/ListCountries';
import { useFetchCountries } from '../hooks/useFetchCountries';
import { useStore } from '../store/store';
import useFilterCountries from '../hooks/useFilterCountries';

const HomePage = () => {
    const { isDarkMode } = useTheme();


    const customStyles: Record<string, (provided: CSSObjectWithLabel, state: OptionProps) => CSSObjectWithLabel> = {
        control: (provided) => ({
            ...provided,
            backgroundColor: isDarkMode ? '#2B3743' : '#FFFFFF',
            borderColor: isDarkMode ? '#2B3743' : '#E2E8F0',
            color: isDarkMode ? '#FFFFFF' : '#000000',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            padding: '0.375rem 0.75rem',
            cursor: 'pointer',
            '&:hover': {
                borderColor: isDarkMode ? '#2B3743' : '#E2E8F0',
            },
            transition: 'none !important'

        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: isDarkMode ? '#2D3748' : '#FFFFFF',
            color: isDarkMode ? '#FFFFFF' : '#000000',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: isDarkMode ? '#FFFFFF' : '#000000',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? (isDarkMode ? '#4A5568' : '#E2E8F0') : (isDarkMode ? '#2D3748' : '#FFFFFF'),
            color: isDarkMode ? '#FFFFFF' : '#000000',
            cursor: 'pointer',
            '&:active': {
                backgroundColor: isDarkMode ? '#4A5568' : '#E2E8F0',
            },
        }),

    };
    const { isLoading, error } = useFetchCountries();
    const { regions } = useStore()

    const { filteredCountryByPhrase, filteredCountryByRegion, originalCountries } = useFilterCountries()

    const handleFilterByPhrase = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        filteredCountryByPhrase(e.target.value)
    }, [filteredCountryByPhrase])


    const handleFilteredCountryByRegion = useCallback((selectedOption: SingleValue<{ value: string }>) => {
        if (selectedOption && selectedOption.value) {
            filteredCountryByRegion(selectedOption.value);
        }
    }, [filteredCountryByRegion])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="text-7xl  text-black dark:text-white">Error fetching data</div>;



    return (
        <section className='p-10'>
            <Suspense fallback={<p>loading...</p>}>
                <div className='flex flex-col md:flex-row gap-5 justify-start  md:justify-between md:items-center'>
                    <SearchField onChange={handleFilterByPhrase} />
                    <div className=''>
                        <Select
                            styles={customStyles}
                            placeholder="Filter by region"
                            options={regions}
                            onChange={handleFilteredCountryByRegion} />
                    </div>
                </div>
                <ListCountries items={originalCountries} />
            </Suspense>
        </section>
    );
};

export default HomePage;
