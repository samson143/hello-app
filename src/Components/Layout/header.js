import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Headercss from "./headercss";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Description from "@material-ui/icons/Description";

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ position: "fixed" }}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Grid container className={classes.grid}>
              <Grid item>
                <Typography className={classes.Typography}>Zegal</Typography>
              </Grid>

              <Grid item className={classes.griditem}>
                <Typography>
                  <Button
                    variant="outlined"
                    color="inherit"
                    className={classes.button}
                  >
                    <Description className={classes.description} />

                    <Typography className={classes.buttontext}>
                      Upgrade
                    </Typography>
                  </Button>
                </Typography>

                <Typography className={classes.rightzegal}>Zegal</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(Headercss)(Header);
