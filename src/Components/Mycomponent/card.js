import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Cardcss from "./cardcss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Cards extends React.Component {
  render() {
    const { classes, title, children } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" className={classes.card_heading}>
              {title}
            </Typography>
            {children}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(Cardcss)(Cards);
