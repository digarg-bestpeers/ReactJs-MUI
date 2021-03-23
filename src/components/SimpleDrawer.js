import React, {useState} from 'react'
import {Button, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: "auto",
    },
    content: {
        padding: theme.spacing(3),
    },
    drawer: {
        width: 250,
    },
}));



function SimpleDrawer() {
    const classes = useStyles()
    return (
        <div>
            <CssBaseline/>
            <Drawer open={true}>
                <List disablePadding className={classes.drawer}>
                    <ListItem button>
                        <ListItemText primary="First Item" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Second Item" />
                    </ListItem> 
                </List>
            </Drawer>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton}
                    color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Introduction</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <Typography variant="h3">New ReactJs Feature!</Typography>
                <Typography>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
            </main>
        </div>
    )
}

export default SimpleDrawer;
