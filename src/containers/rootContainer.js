import React, { Component } from 'react';
import { logOutRequest } from '../store/actions/logout';
import { connect } from 'react-redux';
import { loadUserRequest } from '../store/actions/loadUserData';
import { childAddedHandler } from '../store/actions/childAddedHandler';

import * as mat from 'material-ui';
import './logo.css';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class rootContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, isAdmin:false };
    }

    handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    gotoDashoard = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/dashboard');
    };

    gotoAvailable = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addReport');
    };

     gotoComplains = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/myIncidents');
    };

    gotoViewCrimes = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewCrimes');
    };

     gotoAllViewCrimes = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewAllCrimes');
    };

    componentDidMount() {
        this.props.loadUserRequest();
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            if (!this.props.application || !this.props.application.user) {
                browserHistory.push('/login');
            }else if(this.props.application && this.props.application.user && this.props.application.user.isAdmin){
                this.setState({isAdmin:true});
            }
        }, 5)
    }


    logOutRequest = () => {
        this.setState({ open: !this.state.open });
        this.props.logOutRequest();
    }

    render() {
        return (
            <div>
                <mat.AppBar
                    title="Support System"
                    onLeftIconButtonTouchTap={this._handleClick}
                    />
                <mat.Drawer open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({ open })}>
                    <mat.MenuItem disabled className="disbaledImage"><img src="http://www.angani.co/images/img19.png" className="logoImage" /></mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoDashoard}>Dashoard</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoAvailable}>Add Report</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoComplains}>View My Compalains</mat.MenuItem>
                    <mat.MenuItem onTouchTap={this.gotoViewCrimes}>View Crimes List</mat.MenuItem>
                    {this.state && this.state.isAdmin?<mat.MenuItem onTouchTap={this.gotoAllViewCrimes}>Respond to Crimes</mat.MenuItem>:""}
                    <mat.MenuItem onTouchTap={this.logOutRequest}>Logout</mat.MenuItem>
                </mat.Drawer>
                {this.props.children}
            </div>
        );
    }
}


function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {

        logOutRequest: () => dispatch(logOutRequest()),
        loadUserRequest     : () => dispatch(loadUserRequest())
    };
}

const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(rootContainer);

export default rootMainContainer;