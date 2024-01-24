import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

enum colors {
    Red = 'Red',
    White = 'White',
    Blue = 'Blue',
    Yellow = 'Yellow',
    Black = 'Black',
}

function HorizontalWires() {
    const [numWires, setNumWires] = useState<number>(0)
    const [wires, setWires] = useState<Array<string>>([])

    let isWireColorsSet = wires.length > 0 && !wires.includes('')

    const handleNumChange = (e: SelectChangeEvent<number>) => {
        let value = +e.target.value
        setNumWires(value)
        setWires(Array(value).fill(''))
    }

    const handleWireColorChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        //replace wire with new color
        const newWires = wires.map((color, i) => {
            if (i === index) {
                return e.target.value as unknown as typeof color
            } else {
                return color
            }
        })
        setWires(newWires)
    }

    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                    >
                        <InputLabel>Number of Wires</InputLabel>
                        <Select
                            value={numWires}
                            label="Number of Wires"
                            autoWidth
                            onChange={handleNumChange}
                            type="number"
                        >
                            <MenuItem value={3}>Three</MenuItem>
                            <MenuItem value={4}>Four</MenuItem>
                            <MenuItem value={5}>Five</MenuItem>
                            <MenuItem value={6}>Six</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {wires.map((wire, index) => {
                    return (
                        <Grid item key={index}>
                            <FormControl variant="standard">
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Wire {index + 1}
                                </FormLabel>
                                <RadioGroup
                                    name="radio-buttons-group"
                                    row
                                    onChange={(e) =>
                                        handleWireColorChange(e, index)
                                    }
                                    value={wire}
                                >
                                    {Object.values(colors)
                                        .filter((value) => isNaN(Number(value)))
                                        .map((color) => {
                                            return (
                                                <FormControlLabel
                                                    key={color}
                                                    value={color}
                                                    control={<Radio />}
                                                    label={color}
                                                />
                                            )
                                        })}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    )
                })}
                {isWireColorsSet && <Grid item>Lorem ipsum answer</Grid>}
            </Grid>
        </>
    )
}

export default HorizontalWires
