import { Typography } from '@mui/material'
import React from 'react'
import { BooleanState } from '../types/utilityTypes'

type Props = {
    isSerialDigitEven: BooleanState
}

function BombStateDisplay(props: Props) {
    return (
        <div>
            <Typography>
                Serial Last Digit: {props.isSerialDigitEven}
            </Typography>
        </div>
    )
}

export default BombStateDisplay
