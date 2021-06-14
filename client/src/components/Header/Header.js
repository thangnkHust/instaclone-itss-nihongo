import React, { useState, memo, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/userSelectors';

import useScrollPositionThrottled from '../../hooks/useScrollPositionThrottled';

import { ReactComponent as LogoCamera } from '../../assets/svg/logo-camera.svg';
import logo from '../../assets/svg/logo.png';
import SearchBox from '../SearchBox/SearchBox';
import NewPostButton from '../NewPost/NewPostButton/NewPostButton';
import NotificationButton from '../Notification/NotificationButton/NotificationButton';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import IconUi from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { signOut } from '../../redux/user/userActions';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = memo(({ currentUser, signOut }) => {
  const [shouldMinimizeHeader, setShouldMinimizeHeader] = useState(false);
  const {
    location: { pathname },
  } = useHistory();

  // Shrink header height and remove logo on scroll
  useScrollPositionThrottled(({ currentScrollPosition }) => {
    if (window.outerWidth > 600) {
      setShouldMinimizeHeader(currentScrollPosition > 100);
    }
  });

  const headerClassNames = classNames({
    header: true,
    'header--small': shouldMinimizeHeader,
  });


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut();
  }

  return (
    <header className={headerClassNames}>
      <div className="header__content">
        <Link to="/" className="header__logo">
          <div className="header__logo-header">
            <h3 className="heading-logo">Instagram</h3>
          </div>
        </Link>
        <SearchBox />
        <div className="header__icons">
          {currentUser ? (
            <Fragment>
              <Link to="/">
                <Icon
                  icon={'home'}
                />
              </Link>
              {/* <NotificationButton /> */}
              <Icon icon={'heart-outline'}/>
              {/* <Link to={'/' + currentUser.username}>
                <Icon
                  icon={'person-circle'}
                />
              </Link> */}
              <div>
                <Icon
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                  icon={'person-circle'}
                />
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to={'/' + currentUser.username} style={{ textDecoration: 'none'}}>
                    <StyledMenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Icon icon={'person-circle'}/>
                      </ListItemIcon>
                      <ListItemText primary="Profile"/>
                    </StyledMenuItem>
                  </Link>
                  <Link to={'/settings/edit'} style={{ textDecoration: 'none' }}>
                    <StyledMenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Icon icon={'cog'}/>
                      </ListItemIcon>
                      <ListItemText primary="Setting" />
                    </StyledMenuItem>
                  </Link>
                  <Link to={'/admin'} style={{ textDecoration: 'none' }}>
                    <StyledMenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Icon icon={'logo-angular'}/>
                      </ListItemIcon>
                      <ListItemText primary="Admin" />
                    </StyledMenuItem>
                  </Link>
                  <Link to={'/top-page'} style={{ textDecoration: 'none', color: 'gray' }}>
                    <StyledMenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Icon icon={'log-out'}/>
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </StyledMenuItem>
                  </Link>
                </StyledMenu>
              </div>
              <NewPostButton />
            </Fragment>
          ) : (
            <Fragment>
              <Link style={{ marginRight: '1rem' }} to="/login">
                <Button>Log In</Button>
              </Link>
              <Link to="/signup">
                <h3 className="heading-3 heading--button color-blue">
                  Sign Up
                </h3>
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </header>
  );
});

Header.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
