import React, { useState } from 'react'
import { BombState, BooleanState } from '../types/utilityTypes'
import { Link, Route, Routes } from 'react-router-dom'
import BombStateDisplay from './BombStateDisplay'
import HorizontalWires from './HorizontalWires'
import ButtonSolver from './ButtonSolver'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { Grid } from '@mui/material'

//Stylings
const SolverWindow = styled.div`
    background-color: lightgray;
    min-height: 60vh;
    min-width: 20vw;
`

//State Control
const initialBombState = {
    isSerialDigitEven: BooleanState.unknown,
    numBatteries: 0,
    isParallelPort: BooleanState.unknown,
    isSerialNumVowel: BooleanState.unknown,
    numStrikes: 0,
}

type puzzleType = {
    name: string
    component: React.ReactElement
    active: Boolean
}

//Avaliable Pages
const puzzleSolvers: puzzleType[] = [
    { name: 'Horizontal Wires', component: <HorizontalWires />, active: true },
    { name: 'Button', component: <ButtonSolver />, active: false },
    { name: 'Keypad', component: <ButtonSolver />, active: false },
    { name: 'Simon Says', component: <ButtonSolver />, active: false },
    { name: "Who's on First", component: <ButtonSolver />, active: false },
    { name: 'Oscilloscope', component: <ButtonSolver />, active: false },
    { name: 'Morse Code', component: <ButtonSolver />, active: false },
    { name: 'Vertical Wires', component: <ButtonSolver />, active: false },
    { name: 'Crossed Wires', component: <ButtonSolver />, active: false },
    { name: 'Maze', component: <ButtonSolver />, active: false },
    { name: 'Password', component: <ButtonSolver />, active: false },
    { name: 'Knob', component: <ButtonSolver />, active: false },
]

function BombSolver() {
    const [bombState, setBombState] = useState<BombState>(initialBombState)

    function strike() {
        setBombState({ ...bombState, numStrikes: bombState.numStrikes + 1 })
    }

    function clearBombState() {
        setBombState(initialBombState)
    }

    return (
        <div>
            <BombStateDisplay
                bombState={bombState}
                strike={strike}
                clearBombState={clearBombState}
            />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ mx: 'auto', my: 1 }}
            >
                {puzzleSolvers.map((puzzleSolver) => {
                    return (
                        <Grid item>
                            <Button
                                variant="contained"
                                size="small"
                                disabled={!puzzleSolver.active}
                                component={Link}
                                to={puzzleSolver.name.replace(/\W/g, '')}
                            >
                                {puzzleSolver.name}
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>
            <Routes>
                <Route path="/" element={<SolverWindow />} />
                {puzzleSolvers.map((puzzleSolver) => {
                    return (
                        <Route
                            path={puzzleSolver.name.replace(/\W/g, '')}
                            element={
                                <SolverWindow>
                                    {puzzleSolver.component}
                                </SolverWindow>
                            }
                        ></Route>
                    )
                })}
            </Routes>
        </div>
    )
}

export default BombSolver
