import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Navbarcss from "./navbarcss"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Menu from "../Mycomponent/menu";

class Nav extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.navbar}>
        <Typography className={classes.grow} variant="h6" color="inherit">
          Solutions
        </Typography>
        <Typography className={classes.search}>
          <TextField
            id="standard-full-width"
            style={{ margin: 8, fontSize: 15 }}
            placeholder="Search by document name"
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Typography>
        <Typography className={classes.grow}>
          <Menu />
        </Typography>
      </div>
    );
  }
}

export default withStyles(Navbarcss)(Nav);
