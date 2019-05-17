import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../../context/context";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    minWidth: 275,
    padding: 15,
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 5
  },
  font: {
    fontWeight: 500
  },
  contentRight: {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  textField: {
    width: '30%',
  }
};

class CartItem extends Component {

  changeQty = (dispatch, item, e) => {
    const newItem = {
      ...item,
      qty: e.target.value
    };
    dispatch({type: 'UPDATE_ITEM', payload: newItem});
  };

  render() {
    const { classes, item, click } = this.props;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;

          return (
            <React.Fragment>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardMedia image={item.image} className={classes.image}/>
                  <div className={classes.content}>
                    <Typography variant="button" className={classes.font} gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="caption">
                      {item.artist}
                    </Typography>
                  </div>
                  <div className={classes.contentRight}>
                    <TextField
                      id="outlined-number"
                      label="Number"
                      value={item.qty}
                      onChange={this.changeQty.bind(this, dispatch, item)}
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        min: 1,
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                    <Typography variant="h5" color="textSecondary">
                      € {item.price}
                    </Typography>
                    <Chip
                      label={`X`}
                      className={classes.chip}
                      variant="outlined"
                      color="secondary"
                      clickable
                      onClick={click}
                    />
                  </div>
                </Card>
              </Grid>
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
};

export default withStyles(styles)(CartItem);