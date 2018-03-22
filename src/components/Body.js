import React, { Component } from 'react';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5rem'
    }
}

export default class Body extends Component {
    render() {
        return (
            <div style={styles.root}>
                <h1>Title</h1>
                <h2>Title</h2>
                <h3>Title</h3>
                <h4>Title</h4>
                <h4>Title</h4>
                <h5>Title</h5>
                <p>Habe die Ehre! Die fatal Gemächt. Die Wildfang lustwandeln die feist Lude. Das Schabracke schlampampen die bierernst Waschweib. Der piesacken Damenbart festnageln. Die hurtig Kokolores bauchpinseln. Zeche und Abort lobpreisen verhärmt Taugenichts. Der hanebüchen Schlawiner bemuttern. Weinbrandbohne und Affenzahn piesacken hochnäsig Kaiserwetter. Die Fernweh bohnern das adrett Fräulein. Taugenichts und Quacksalber gutheißen schamlos Kokolores. Der Erbfeind auftakeln der piesacken Hatz. Wendehals und Autobahn meucheln flügge Naschkatze. Stümper und Luder dengeln hanebüchen Kokolores. Habe die Ehre!</p>
            </div>
        );
    }
}