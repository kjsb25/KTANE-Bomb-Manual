import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Grid item container justifySelf="flex-end" direction="column">
            <Grid item component={Typography}>
                Bomb Manual v{process.env.REACT_APP_VERSION}
            </Grid>
            <Grid item component={Typography}>
                This tool was created to be used with the game found here:
                http://www.keeptalkinggame.com/
            </Grid>
        </Grid>
    )
}

export default Footer
