
export interface ISearchField {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IButton {
    title: string;
    icon?: React.ReactNode;
    position?: IconPositionButton;
    handleClick?: () => void;
    otherClasses?: string;
}

export enum IconPositionButton {
    LEFT = "left",
    RIGHT = "right"
}

export enum ThemeMode {
    LIGHT = "light",
    DARK = "dark"
}

export interface IThemeContextType {
    theme: ThemeMode;
    toggleTheme: () => void;
    isDarkMode: boolean
}

export interface IReactSelectProvided {
    backgroundColor: string;
    borderColor: string;
    color: string;
}


interface INativeName {
    official: string;
    common: string;
}

interface ICurrency {
    name: string;
    symbol: string;
}

interface IDemonym {
    f: string;
    m: string;
}

interface IMaps {
    googleMaps: string;
    openStreetMaps: string;
}

interface IFlags {
    png: string;
    svg: string;
}

interface ICapitalInfo {
    latlng?: [number, number];
}

interface IPostalCode {
    format: string;
    regex: string;
}

interface ITranslations {
    [key: string]: {
        official: string;
        common: string;
    };
}

export interface ICountry {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: INativeName;
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [key: string]: ICurrency;
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    translations: ITranslations;
    latlng: [number, number];
    landlocked: boolean;
    area: number;
    demonyms: {
        eng: IDemonym;
    };
    flag: string;
    maps: IMaps;
    population: number;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: IFlags;
    coatOfArms: object;
    startOfWeek: string;
    capitalInfo: ICapitalInfo;
    postalCode: IPostalCode;
}

export interface IOptionReactSelect {
    value: string,
    label: string
}