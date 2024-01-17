import React, { useState } from 'react'
import { BombState, BooleanState } from '../types/utilityTypes'
import BombStateDisplay from './BombStateDisplay'

const initialBombState = {
    isSerialDigitEven: BooleanState.unknown,
    numBatteries: 0,
    isParallelPort: BooleanState.unknown,
    isSerialNumVowel: BooleanState.unknown,
    numStrikes: 0,
}

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
            <span>Solver</span>
        </div>
    )
}

export default BombSolver
