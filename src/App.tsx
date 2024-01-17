import React from 'react'
import BombSolver from './components/BombSolver'
import '@fontsource/cabin'
import {
    Stack,
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from '@mui/material'
import Footer from './components/Footer'
import styled from 'styled-components'
import Header from './components/Header'

let theme = createTheme({
    typography: {
        fontFamily: 'Cabin, Helvetica, Arial, sans-serif',
        allVariants: {
            color: 'white',
        },
    },
    palette: {
        primary: { main: '#FF5733' },
    },
})
theme = responsiveFontSizes(theme)

const Main = styled.div`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    min-width: 100vw;
`

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack
                component={Main}
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Header />
                <BombSolver />
                <Footer />
            </Stack>
        </ThemeProvider>
    )
}

export default App
