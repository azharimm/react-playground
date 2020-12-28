import React from 'react'
import FunctionContextComponent from '../context/FunctionContextComponent'
import { ThemeProvider } from '../context/ThemeContext'

const UseContextPage = (props) => {

    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    )
}

export default UseContextPage
