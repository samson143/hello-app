import React from "react";
import Card from "../Mycomponent/card";
import Grid from "@material-ui/core/Grid";
import Documentpaper from "../Mycomponent/documentpaper";
//import { Typography } from "@material-ui/core";

class Employment extends React.Component {
  render() {
    return (
      <div>
       
        <Card title="Borrowing">
          <Grid container spacing={6}>
          <Documentpaper
              title="Employment Contract (simplified)"
              paragraph="An Employment Contract is a contract by
               which a company hires an employee. "
            />

             <Documentpaper
              title="Employment Contract (simplified)"
              paragraph="An Employment Contract is a contract by
               which a company hires an employee. "
            />
             <Documentpaper
              title="Employment Contract (simplified)"
              paragraph="An Employment Contract is a contract by
               which a company hires an employee. "
            />
             <Documentpaper
              title="Employment Contract (simplified)"
              paragraph="An Employment Contract is a contract by
               which a company hires an employee. "
            />
             <Documentpaper
              title="Employment Contract (simplified)"
              paragraph="An Employment Contract is a contract by
               which a company hires an employee. "
            />
          </Grid>
        </Card>
      </div>
    );
  }
}

export default Employment;
