import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { IThemeContextType, ThemeMode } from "../types/types";

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeMode>(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ?
            (storedTheme === ThemeMode.DARK ?
                ThemeMode.DARK : ThemeMode.LIGHT) :
            ThemeMode.LIGHT;
    });

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }, []);

    useEffect(() => {
        document.body.classList.remove(ThemeMode.LIGHT, ThemeMode.DARK);
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const themeContextValue: IThemeContextType = {
        theme,
        toggleTheme,
        isDarkMode: theme === ThemeMode.DARK,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <main className={`${theme}`}>
                {children}
            </main>
        </ThemeContext.Provider>
    );
};