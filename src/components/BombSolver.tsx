import React, { useState } from 'react'
import { BooleanState } from '../types/utilityTypes'
import BombStateDisplay from './BombStateDisplay'

function BombSolver() {
    const [isSerialDigitEven, setIsSerialDigitEve] = useState<BooleanState>(
        BooleanState.unknown
    )

    return (
        <div>
            <BombStateDisplay isSerialDigitEven={isSerialDigitEven} />
            <span>Solver</span>
        </div>
    )
}

export default BombSolver
