import React, { Component } from 'react';
import 'normalize.css';

import NavBar from './Navbar';

class FontHelper extends Component {
    state = {
        font: null
    }

    onGrabFonts = (font) => {
        this.setState(() => ({ font }));
    }

    render() {
        const styles = {
            fontFamily: this.state.font
        }
        // let fontFamily = { fontFamily: this.state.font};

        return (
            <div style={styles}>
                <NavBar onGrabFonts={this.onGrabFonts} />
                <div style={{ marginTop: '10vh' }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default FontHelper;
