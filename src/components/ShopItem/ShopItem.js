import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 350,
    height: 150,
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
  },
  content: {
    flex: '1 0 auto',
  },
  contentRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between',
  },
  cover: {
    width: 125,
    height: 80,
    marginTop: 8,
    borderRadius: 4,
  },
  chip: {
    marginBottom: 8,
    fontSize: 20,
  },
  fab: {
    margin: 6,
  },
  extendedIcon: {
    marginRight: 5,
  },
};

const ShopItem = props => {

  const { classes, click, item } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography noWrap variant="subtitle1" color="textPrimary">
            {item['im:name'].label}
          </Typography>
          <Typography noWrap variant="subtitle1" color="textSecondary">
            {item['im:artist'].label}
          </Typography>
        </CardContent>
        <Fab color="primary" variant="extended" className={classes.fab} onClick={click} >
          <AddShoppingCart className={classes.extendedIcon} />
          To Cart
        </Fab>
      </div>
      <div className={classes.contentRight}>
        <CardMedia
          className={classes.cover}
          image={item['im:image'][0].label}
          title="Live from space album cover"
        />
        <Chip
          label={`${parseFloat(item['im:price'].attributes.amount).toFixed(2)} €`}
          className={classes.chip}
          variant="outlined"
          color="secondary"
          clickable
        />
      </div>
    </Card>
  );
};

ShopItem.propTypes = {
  classes: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShopItem);