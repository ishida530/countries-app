import { createContext, useContext, useState, useEffect } from "react"
import { IThemeContextType, ThemeMode } from "../types/types"


const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<ThemeMode>(() => localStorage.getItem('theme') ? ThemeMode.DARK : ThemeMode.LIGHT);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => localStorage.getItem('theme') === ThemeMode.DARK ? true : false)

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
            localStorage.setItem('theme', newTheme);
            setIsDarkMode(newTheme === ThemeMode.DARK ? true : false)
            return newTheme;
        });
    }

    const themeContextValue: IThemeContextType = {
        theme,
        toggleTheme,
        isDarkMode
    }

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <main className={`${theme === ThemeMode.LIGHT ? ThemeMode.LIGHT : ThemeMode.DARK}`}>
                {children}
            </main>
        </ThemeContext.Provider >
    )
}