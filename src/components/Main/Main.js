import React from "react";
import "./Main.css"
import { Grid } from "@mui/material";

function Main() {
    return(
        <Grid item xs={12}>
            <Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="Intro">Hello, it's me!</div>
                <h1>Nifemi</h1>
                <p className="Info">An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world</p>
            </Grid>
        </Grid>
    );
    
}

export default Main;