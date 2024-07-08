import create from 'zustand';
import { ICountry, IOptionReactSelect } from '../types/types';


interface IState {
    countries: ICountry[];
    regions: IOptionReactSelect[];
    setCountries: (countries: ICountry[]) => void;
    setRegions: (options: IOptionReactSelect[]) => void;
    
}

export const useStore = create<IState>((set) => ({
    countries: [],
    regions: [],
    setCountries: (countries) => set({ countries }),
    setRegions: (regions) => set({ regions }),
}));