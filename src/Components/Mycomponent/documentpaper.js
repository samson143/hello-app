import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Documentpapercss from "./documentpapercss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Description from "@material-ui/icons/Description";
import Info from "@material-ui/icons/Info";
import { Button, Tooltip } from "@material-ui/core";

class Documentpaper extends React.Component {
  render() {
    const { classes, title, paragraph, upgradebtn } = this.props;
    return (
      <Grid item lg={6} md={12}>
        <Paper className={classes.documentpaper}>
          <div className={classes.documentpaper_body}>
            <div className={classes.descriptionicon}>
              <Description />
            </div>

            <div className={classes.papertext}>
              <div className={classes.documentpaper_title}>
                <div>{title}</div>

                {upgradebtn && (
                  <Button color="primary" variant="outlined" size="small">
                    upgrade
                  </Button>
                )}
              </div>

              <div className={classes.paperparagraph}>
                <Tooltip title={paragraph}>
                  <div>
                    <div>{paragraph}</div>
                  </div>
                </Tooltip>

                <div className={classes.info}>
                  <Info className={classes.infoicon} />
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(Documentpapercss)(Documentpaper);
