import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { IconPositionButton, ThemeMode } from '../types/types';
import Button from './Button'
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Header = () => {

    const { theme, toggleTheme } = useTheme()
    return (
        <header className='flex flex-col md:flex-row justify-center md:justify-between p-4 bg-white dark:bg-black-200 shadow-bottom px-10'>
            <Link to='/' ><h1 className='text-center md:text-start text-xl font-bold text-black dark:text-white'>Where in the world?</h1></Link>
            <Button
                title={theme === ThemeMode.LIGHT ? 'Light Mode' : 'Dark Mode'}
                icon={theme === ThemeMode.LIGHT ? <FaRegSun /> : <FaRegMoon />}
                position={IconPositionButton.LEFT}
                otherClasses='p-2 bg-white dark:bg-DEFAULT text-black dark:text-white bg-opacity-0 text-center md:text-start'
                handleClick={toggleTheme}
            />
        </header>
    )
}

export default Header