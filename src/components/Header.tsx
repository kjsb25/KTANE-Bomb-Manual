import React from 'react'
import logo from '../assets/img/logo-transparent.png'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Logo = styled.img`
    margin-top: 20px;
    max-width: 40vw;
    pointer-events: none;
`

function Header() {
    return (
        <div>
            <Logo src={logo} alt="logo" />
            <Typography variant="h2">Bomb Manual</Typography>
        </div>
    )
}

export default Header
