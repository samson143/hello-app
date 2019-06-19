import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Sidebarcss from "./sidebarcss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Gesture from "@material-ui/icons/Gesture";
import Folder from "@material-ui/icons/Folder";
import Announcement from "@material-ui/icons/Announcement";

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid item className={classes.sidebarwidth}>
          <Grid item className={classes.sidebar_icons}>
            <Fab color="primary" aria-label="Add" className={classes.fab}>
              <AddIcon />
            </Fab>
            <Typography className={classes.sidebar_icontext}>Create</Typography>
          </Grid>

          <Grid item className={classes.sidebar_icons}>
            <Fab color="primary" aria-label="Add" className={classes.fab}>
              <Gesture style={{ width: "34%" }} />
            </Fab>
            <Typography className={classes.sidebar_icontext}>
              ZegalSign
            </Typography>
          </Grid>

          <Grid item className={classes.sidebar_icons}>
            <Fab color="primary" aria-label="Add" className={classes.fab}>
              <Folder style={{ width: "50%" }} />
            </Fab>
            <Typography className={classes.sidebar_icontext}>Manage</Typography>
          </Grid>

          <div className={classes.sidebar_down}>
            <Grid item className={classes.sidebar_icons}>
              <Announcement style={{ width: "22%", color: "#efe8e8eb" }} />

              <Typography className={classes.sidebar_icontext}>
                Feedback
              </Typography>
            </Grid>

            <Grid item className={classes.sidebar_icons}>
              <Fab
                color="primary"
                aria-label="Add"
                className={classes.fab}
                style={{ border: "1.5px solid rgb(255, 255, 255)" }}
              >
                ST
              </Fab>
              <Typography
                className={classes.sidebar_icontext}
                style={{ color: "#fff" }}
              >
                samson tamang
              </Typography>
              
              
            </Grid>
          </div>
        </Grid>
          <Fab color="primary" aria-label="Add" className={classes.chevron}>
              <AddIcon />
          </Fab>
      </div>
    );
  }
}

export default withStyles(Sidebarcss)(Sidebar);
