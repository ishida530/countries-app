import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";
import { useFetchDetailsCountry } from "../hooks/useFetchDetailsCountry";
import { IconPositionButton } from "../types/types";

const DetailsCountryPage = () => {
    const { isDarkMode } = useTheme();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data, isLoading, error } = useFetchDetailsCountry(id ?? '');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="text-7xl  text-black dark:text-white">Error fetching data</div>;

    const country = data[0];

    const {
        flags: { png },
        name: { official },
        population,
        region,
        subregion,
        capital,
        tld,
        borders
    } = country;

    const nativeName = country.name?.nativeName?.common ?? 'N/A';
    const currencyName = country['currencies']?.[0]?.name ?? 'N/A';
    const language = country['languages']?.[0]?.name ?? 'N/A';
    const capitalInfo = country['capitalInfo']?.[0]?.name ?? 'N/A';

    return (
        <section className='p-10'>
            <div className='flex flex-col mb-[70px]'>
                <Button
                    title="Back"
                    icon={<FaArrowLeft style={isDarkMode ? { color: '#fff' } : { color: '#000' }} />}
                    position={IconPositionButton.LEFT}
                    handleClick={() => navigate(-1)}
                    otherClasses='bg-white dark:bg-black-200 shadow-full-border py-2 px-5 gap-3 bg-white dark:bg-DEFAULT text-black dark:text-white rounded-xl h-[50px] flex items-center justify-center w-[100px] md:w-[150px]'
                />
            </div>
            <Suspense fallback={<p>loading...</p>}>
                <div className='flex flex-col md:flex-row gap-10 md:gap-[50px] lg:gap-[130px] xl:md:gap-[200px]  items-start md:items-center justify-start md:justify-between'>
                    <div className='w-[100%] md:w-[40%]'>
                        <img src={png} alt="flag" className='w-full' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h1 className='text-xl md:text-4xl text-black-100 dark:text-white font-bold'>{official}</h1>
                        </div>
                        <div className='flex flex-col md:flex-row justify-start md:justify-between w-[100%] gap-20 text-black-100 dark:text-white'>
                            <div>
                                <p><span className='font-semibold'>Native Name:</span> {nativeName}</p>
                                <p><span className='font-semibold'>Population:</span> {population}</p>
                                <p><span className='font-semibold'>Region:</span> {region}</p>
                                <p><span className='font-semibold'>Sub Region:</span> {subregion}</p>
                                {capital && <p><span className='font-semibold'>Capital:</span> {capital[0] ?? 'N/A'}</p>}
                                {!capital && capitalInfo[0] && <p><span className='font-semibold'>Capital:</span> {capitalInfo[0] ?? 'N/A'}</p>}
                            </div>
                            <div>
                                <p><span className='font-bold'>Top Level Domain:</span> {tld[0]}</p>
                                {currencyName && <p><span className='font-semibold'>Currencies:</span> {currencyName}</p>}
                                <p><span className='font-semibold'>Languages:</span> {language}</p>
                            </div>
                        </div>
                        {borders && <div className="text-black-100 dark:text-white flex flex-col md:flex-row items-start  text-left" >
                            Border countries:
                            <ul className="ml-0 md:ml-10 mt-3 md:mt-0 flex gap-5 flex-wrap w-[100%] md:w-[80%]  justify-start">
                                {borders.map((item: string) => <span
                                    key={item}
                                    className="bg-white dark:bg-black-200 shadow-full-border py-2 px-7 rounded-md min-w-[90px]"
                                >
                                    {item}
                                </span>)}
                            </ul>
                        </div>}
                    </div>
                </div>
            </Suspense>
        </section>
    );
};
export default DetailsCountryPage;