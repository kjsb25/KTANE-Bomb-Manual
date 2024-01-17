import React, { useState } from 'react'
import { BombState, BooleanState } from '../types/utilityTypes'
import BombStateDisplay from './BombStateDisplay'

function BombSolver() {
    const [bombState, setBombState] = useState<BombState>({
        isSerialDigitEven: BooleanState.unknown,
        numBatteries: 0,
        isParallelPort: BooleanState.unknown,
        isSerialNumVowel: BooleanState.unknown,
        numStrikes: 0,
    })

    function strike() {
        setBombState({ ...bombState, numStrikes: bombState.numStrikes + 1 })
    }

    return (
        <div>
            <BombStateDisplay bombState={bombState} strike={strike} />
            <span>Solver</span>
        </div>
    )
}

export default BombSolver
