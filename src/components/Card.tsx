import { Link } from "react-router-dom";
import { ICountry } from "../types/types";

const Card = ({ country }: { country: ICountry }) => {
    return (
        <Link to={`/${country.ccn3}`} className="block w-full h-full cursor-pointer">
            <div className="flex flex-col gap-1 dark:bg-black-200 rounded-xl shadow-md w-full h-full">
                <div className="rounded-t-xl">
                    <img className="object-cover w-full h-48 rounded-t-xl" src={country.flags.png} alt="flag" />
                </div>
                <div className="flex flex-col text-black dark:text-white p-5">
                    <h2 className="font-bold mb-5">{country.name.official}</h2>
                    <p>
                        <span className="font-bold">Population:</span> {country.population}
                    </p>
                    <p>
                        <span className="font-bold">Region:</span> {country.region}
                    </p>
                    <p>
                        <span className="font-bold">Capital:</span> {country.capital}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
