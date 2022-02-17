import React from 'react'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItem from '@material-ui/core/ListItem'
import { Typography } from '@material-ui/core'

const listItem = (props) => {
    return (
        <ListItem disableGutters>
            <ListItemIcon style={{width: '30px', height: '35px'}}>
                <img src={props.img} role="presentation" />
            </ListItemIcon>
            <Typography variant={"body2"} style={{textAlign: "center", height: "15px"}}>{props.title}</Typography>
        </ListItem>
    )
}

export default listItem
