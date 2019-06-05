import React from "react";
import Card from "../Mycomponent/card";
import Grid from "@material-ui/core/Grid";
import Documentpaper from "../Mycomponent/documentpaper";

class Dataprivacy extends React.Component {
  render() {
    return (
      <div>
        
        <Card title="Basic plan">
          <Grid container spacing={6}>
            <Documentpaper
              upgradebtn
              title="Confidentiality Agreement(NDA)"
              paragraph="A confidentiality Agreement, also known as
               a Non-disclosure Agreement (NDA),is a contract by which a party
               A confidentiality Agreement, also known as
               a Non-disclosure Agreement (NDA),is a contract by which a party"
            />
            <Documentpaper
              title="Employment Contract (simplified)"
              paragraph="An Employment Contract is a contract by
               which a company hires an employee. "
            />
            <Documentpaper
              title="Information Audit Form"
              paragraph="Information Audit Form is a form to guide 
              you through the process of establishing a comprehensive.. "
            />
          </Grid>
        </Card>
      </div>
    );
  }
}

export default Dataprivacy;
