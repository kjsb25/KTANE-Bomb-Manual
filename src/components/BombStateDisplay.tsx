import { Button, Grid, Typography } from '@mui/material'
import React, { MouseEventHandler } from 'react'
import { BombState } from '../types/utilityTypes'
import styled from 'styled-components'

const StateValue = styled.span`
    color: orangered;
`

type Props = {
    bombState: BombState
    strike: MouseEventHandler<HTMLButtonElement>
    clearBombState: MouseEventHandler<HTMLButtonElement>
}

function BombStateDisplay(props: Props) {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <Typography display="inline">
                    Serial Last Digit is Even:{' '}
                </Typography>
                <StateValue>{props.bombState.isSerialDigitEven}</StateValue>
            </Grid>
            <Grid item>
                <Typography display="inline"># Batteries: </Typography>
                <StateValue>{props.bombState.numBatteries}</StateValue>
            </Grid>
            <Grid item>
                <Typography display="inline">Parallel Port: </Typography>
                <StateValue>{props.bombState.isParallelPort}</StateValue>
            </Grid>
            <Grid item>
                <Typography display="inline">Serial # has Vowel: </Typography>
                <StateValue>{props.bombState.isSerialNumVowel}</StateValue>
            </Grid>
            <Grid item>
                <Typography display="inline">Strikes: </Typography>
                <StateValue>{props.bombState.numStrikes}</StateValue>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={props.strike}>
                    Strike!
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={props.clearBombState}>
                    Clear Bomb Properties
                </Button>
            </Grid>
        </Grid>
    )
}

export default BombStateDisplay
