import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 350,
    height: 150,
    margin: 5,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  contentRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cover: {
    width: 125,
    height: 80,
    marginTop: 8,
    borderRadius: 4,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  input: {
    height: '0.2em'
  }
});

const ShopItem = (props) => {
  const { classes, item } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textPrimary">
            {item['im:name'].label}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {item['im:artist'].label}
          </Typography>
        </CardContent>
      </div>
      <div className={classes.contentRight}>
        <CardMedia
          className={classes.cover}
          image={item['im:image'][0].label}
          title="Live from space album cover"
        />
        <TextField
          id="outlined-number"
          label="Qty"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{className: classes.input}}
          margin="normal"
          variant="outlined"

        />
      </div>
    </Card>
  );
};

ShopItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShopItem);