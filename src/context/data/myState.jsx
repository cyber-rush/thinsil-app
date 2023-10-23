import { useState } from 'react'
import MyContext from './myContext'


const myState = ({ children }) => {
    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = '#fff';
        }
    }

    const [loading, setLoading] = useState(false)

    return (
        <MyContext.Provider value={{ mode, toggleMode, loading, setLoading }}>
            {children}
        </MyContext.Provider>
    )
}

export default myState

