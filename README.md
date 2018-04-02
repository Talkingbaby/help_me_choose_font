# help_my_font
A react component that gives the user a choice of popular fonts to see what works best for their app.

##How to use
1. Copy fonthelper folder into project.
2. Add this link tag to your index.html file
    ```<link href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans|Anonymous+Pro|Archivo+Narrow|Arvo|BioRhyme|Bitter|Cabin|Cardo|Chivo|Cormorant|Crimson+Text|Domine|Eczar|Fira+Sans|Inconsolata|Inknut+Antiqua|Karla|Lato|Libre+Baskerville|Libre+Franklin|Lora|Merriweather|Montserrat|Neuton|Open+Sans|PT+Sans|PT+Serif|Playfair+Display|Poppins|Proza+Libre|Raleway|Roboto|Roboto+Slab|Rubik|Source+Sans+Pro|Source+Serif+Pro|Space+Mono|Spectral|Work+Sans" rel="stylesheet">```
3. The component does use the latest version of Material UI. Make sure to have it added as a dependency. 
  * You can find it here [https://material-ui-next.com/getting-started/installation/](https://material-ui-next.com/getting-started/installation/)
4. import FontHelper into the root of your app and wrap component around app.
    ```<FontHelper>
        <App />
    </FontHelper>
    ```
5. Start app and play with the fonts.
