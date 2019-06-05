import React from "react";
import Card from "../Mycomponent/card";
import Grid from "@material-ui/core/Grid";
import Documentpaper from "../Mycomponent/documentpaper";
import { Typography } from "@material-ui/core";
//import { Typography } from "@material-ui/core";

class Employment extends React.Component {
  render() {
    return (
      <div>
       
        <Card title="Borrowing">
          <Grid container spacing={6}>
            <Documentpaper title="first document for..">
              <button>upgrate</button>
            </Documentpaper>

            <Documentpaper>this is me</Documentpaper>
            <Documentpaper>this is me</Documentpaper>
            <Documentpaper>this is me</Documentpaper>
            <Documentpaper>this is me</Documentpaper>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default Employment;
