import React from 'react'
import { Link  } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectToken } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import './TopPage.css'

const TopPage = ({token}) => {

    return (
        <div className='bg'>
            <div>
                <ul>
                    {token ?
                        (<li className='nav__right'>
                            <Link to='/'>Home</Link>
                        </li>
                        )
                        :
                        (
                        <React.Fragment>
                            <li className='nav__right'>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li className='nav__right'>
                                <Link to='/signup'>Register</Link>
                            </li>
                        </React.Fragment>)
                    }
                    <li className='nav__right'>
                        <Link to=''>About Us</Link>
                    </li>
                </ul>
            </div>
            <div className='main-content'>
                <h1 className='content__title1' style={{fontSize: '50px'}}>INSTAGRAM</h1>
                <h2 className='content__title2'>A Photo And Video Sharing Social Networking Service</h2>
                <br />
                <button className='btn-top'>
                    <span><Link to='/signup' style={{textDecoration: 'none', color: 'white'}}>join with us </Link></span>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    token: selectToken
});

export default connect(mapStateToProps, null)(TopPage);
