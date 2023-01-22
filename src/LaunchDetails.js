import React, { Component } from 'react';
import withRouter from './withRouter';

class LaunchDetails extends Component {
    // declaring launch array 
    state = {
        launch: {}
    }

    // Fetching the launches API for a particular launchpad
    componentDidMount() {
        fetch(`https://api.spacexdata.com/v4/launches/${this.props.params.id}`)
            .then((response) => response.json())
            .then((data) => this.setState({ launch: data }));
    }
    // rendering the name, details,date, reused data of the launches from the launch array
    render() {
        return (
            <div className="launchpad-card col-sm-6">
                <h2 className="launchpad-card-title">Name: {this.state.launch.name}</h2>
                <p className="launchpad-card-text">{this.state.launch.details}</p>
                <p className="launchpad-card-text">Launch Date: {this.state.launch.date_local}</p>
                <p className="launchpad-card-text">Reused: {this.state.launch.reused ? 'Yes' : 'No'}</p>
            </div>
        );
    }
}

export default withRouter(LaunchDetails);
