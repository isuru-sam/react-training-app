import { AppBar, Toolbar, Typography } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";

import React from "react";

// import Link from '@material-ui/core/Link';
// import LangSwithcher from '../languageSwitcher';
import styles from "./styles";
import './topMenuBar.sass';
//import { makeStyles } from '@material-ui/core/styles';
class TopMenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            language: 'en',
            lang: false
        }
    }

    componentDidMount() {
        const user = localStorage.getItem('user');
        if (user) {
            this.setState({
                user: JSON.parse(user)
            });
        }
    }

  

    handleLanguage = event => {
        let newLang = event.target.value;
        this.setState({ language: newLang })
        this.props.i18n.changeLanguage(newLang);
    }

    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    openLangSelector = () => {
        // this.setState({ lang: true });
    }

    render() {
       
          
     //   const classes = useStyles();

        return (
            <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className="classes.menuButton" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="classes.title">
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        );
    }
}


//const TopMenuBarStyles = withStyles(styles)(TopMenuBar);





export default (withStyles(styles)(TopMenuBar));
//export default connect(mapStateToProps, { signOut })(withTranslation('translations')(TopMenuBarStyles));