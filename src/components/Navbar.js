import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

const fonts = [
    'Open Sans, sans-serif',
    'Josefin Slab, serif',
    'Arvo, serif',
    'Lato, sans-serif',
    'Vollkorn, serif',
    'Abril Fatface, cursive',
    'Ubuntu, sans-serif',
    'PT Sans, sans-serif',
    'PT Serif, serif',
    'Old Standard TT, serif'
]

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        zIndex: 10,
        width: '100%'
    },
};

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Open Sans, sans-serif' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        this.props.onGrabFonts(this.state.value)
    }

    render() {

        return (
                <AppBar position="static" color="default">
                    <Toolbar style={styles.root}>
                        <Typography variant="title" color="inherit">
                            Help Me Choose a Font
                        </Typography>
                        <Select
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            {fonts.map((font) => <MenuItem key={font} value={font}>{font}</MenuItem>)}
                        </Select>
                    </Toolbar>
                </AppBar>
        );
    }

}

export default Navbar;