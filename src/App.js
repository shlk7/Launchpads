import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LaunchDetails from './LaunchDetails';

class App extends React.Component {
  // declaring launchpad array
  state = {
    launchpads: [],
  }

  // Fetching the launchpad API from SpaceXAPI
  componentDidMount() {
    fetch('https://api.spacexdata.com/v4/launchpads')
      .then((response) => response.json())
      .then(data => this.setState({ launchpads: data }));
  }

  // rendering the name, details, status, top 3 launches from the launchpads array
  render() {
    return (
      <Router>

        <Routes>
          <Route path='/launchpad/:id' element={<LaunchDetails />} exact />
          <Route path='/' element={<div className="container">
            {this.state.launchpads.map((launchpad) => (
              <div className="row">
                <div className="launchpad-card " key={launchpad.id}>
                  <h2 className="launchpad-card-title">Name: {launchpad.name}</h2>
                  <p className="launchpad-card-text">{launchpad.details}</p>
                  <p className="launchpad-card-text">Status: {launchpad.status}</p>

                  {launchpad.launches.length ? (
                    <div>
                      <h3 className="launchpad-card-subtitle">Top 3 Launches:</h3>
                      <ol>
                        {console.log(launchpad.launches
                          .slice(0, 3)
                        )}
                        {launchpad.launches
                          .slice(0, 3)
                          // .filter(launch => launch.id)
                          .map((launch) => (
                            <Link key={launch} to={`/launchpad/${launch}`}>
                              <li >{launch}</li>
                            </Link>
                          ))}
                      </ol>
                    </div>
                  ) : (
                    <p className="launchpad-card-text">No Launches Available</p>
                  )}

                </div>
              </div>

            ))}
          </div>} exact />
        </Routes>
      </Router >
    );
  }

}
export default App;


