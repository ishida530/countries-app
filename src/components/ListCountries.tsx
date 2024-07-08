import Card from "./Card";
import { ICountry } from "../types/types";

const ListCountries = ({ items }: { items: ICountry[] }) => {
    return (
        <ul className="pt-10 flex flex-wrap justify-center gap-10 sm:justify-center md:justify-around xl:justify-between">
            {items.map((country: ICountry, index) => (
                <li key={index} className="flex justify-center items-center max-w-sm w-[400px]">
                    <Card country={country} />
                </li>
            ))}
        </ul>
    );
};

export default ListCountries;