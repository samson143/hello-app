import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Alldocumentcss from "./alldocumentcss";

class Alldocument extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid className={classes.alldocument}>
          <div>
            <ul className={classes.unorderedlist}>
              <div className={classes.all}>
                <li>
                  <p style={{ margin: 0 }}>All</p>
                </li>
              </div>

              <div style={{ padding: "0px 0px 12px 32px" }}>
                <hr className={classes.horizental} />
              </div>

              <div className={classes.list}>
                <li>Basic Plan</li>
              </div>

              <div className={classes.list}>
                <li>Borrowing</li>
              </div>

              <div className={classes.list}>
                <li>Company Secretarial</li>
              </div>

              <div className={classes.list}>
                <li>Date Privacy</li>
              </div>
              <div className={classes.list}>
                <li>Employment and Benefits</li>
              </div>

              <div className={classes.list}>
                <li>Fundraising</li>
              </div>

              <div className={classes.list}>
                <li>Intellectual Property</li>
              </div>

              <div className={classes.list}>
                <li>Legal Health Check</li>
              </div>

              <div className={classes.list}>
                <li>Online Business</li>
              </div>

              <div className={classes.list}>
                <li>Payment Collection</li>
              </div>
              <div className={classes.list}>
                <li>SME Trade</li>
              </div>

              <div className={classes.list}>
                <li>Intellectual Property</li>
              </div>

              <div className={classes.list}>
                <li>Intellectual Property</li>
              </div>

              <div className={classes.list}>
                <li>Intellectual Property</li>
              </div>

              <div className={classes.list}>
                <li>Intellectual Property</li>
              </div>

              <div className={classes.list}>
                <li>Intellectual Property</li>
              </div>
            </ul>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Alldocumentcss)(Alldocument);
