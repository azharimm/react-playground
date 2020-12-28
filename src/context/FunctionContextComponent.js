import React from 'react'
import { useTheme, useThemeUpdate}  from './ThemeContext'

const FunctionContextComponent = (props) => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1 className="text-center" style={themeStyles}>Funtion Context Component</h1>
        </div>
    )
}

export default FunctionContextComponent
