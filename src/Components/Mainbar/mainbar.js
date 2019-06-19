import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Mainbarcss from "./mainbarcss";
import Grid from "@material-ui/core/Grid";
import Dataprivacy from "../Documents/dataprivacy";
import Employment from "../Documents/employment";

class Mainbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.mainbar}>
          <Grid item className={classes.scrollmainbar}>
            <Dataprivacy />
            <Employment />
          </Grid>    
        </Grid>
      </div>
    );
  }
}

export default withStyles(Mainbarcss)(Mainbar);