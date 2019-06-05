import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Mainbarcss from "./mainbarcss";
import Grid from "@material-ui/core/Grid";
import Tabsitem from "../Mycomponent/tabs";
import Dataprivacy from "../Documents/dataprivacy";
import Employment from "../Documents/employment";
import Alldocument from "../Aboutzegal/alldocument";

class Mainbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.grid}>

          <Grid item >
          <Alldocument />
          </Grid>

          <Grid item className={classes.mainbar}>
            <Tabsitem />
            <Dataprivacy />
            <Employment />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Mainbarcss)(Mainbar);