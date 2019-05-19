import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import MessageOutlined from '@material-ui/icons/MessageOutlined';
import TextField from '@material-ui/core/TextField';
import Message from '../../components/Message/Message';

const styles = {
  chat: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  drawer: {
    height: '40%',
    width: '100%',
    position: 'absolute',
    outline: 'none',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  messagesContainer: {
    width: '100%',
    overflowY: 'scroll',
    marginBottom: 60
  },
  form: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
};

class Chat extends Component {
  state = {
    bottom: false,
    message: '',
    messages: []
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  messageHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { message, messages } = this.state;
    const newMessages = [...messages, message];
    this.setState({ messages: newMessages });

    this.setState({
      message: ''
    });
  };

  messageMock = (index) => {
     if ( index !== 0 || index % 2 ) {
        return 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
     } else {
       return 'Hello'
     }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chat}>
        <Fab color="secondary" onClick={this.toggleDrawer('bottom', true)}>
          <MessageOutlined />
        </Fab>
        <Drawer
          PaperProps={{
            className: classes.drawer
          }}
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div className={classes.messagesContainer}>
            {this.state.messages.length > 0 && this.state.messages.map((message, index) => (
              <Message key={index} message={message} answer={this.messageMock(index)}/>
            ))}
          </div>
          <form className={classes.form} autoComplete="off" noValidate onSubmit={this.onSubmit.bind(this)}>
            <TextField
              label="message"
              name="message"
              value={this.state.message}
              placeholder="Enter Your Message"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.messageHandler.bind(this)}
            />
          </form>
        </Drawer>
      </div>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Chat);