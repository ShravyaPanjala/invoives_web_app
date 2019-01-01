import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add_Clients from './Add_Clients';

class Supply extends React.Component {
    render() {
        return (
            <Router>
                <div className="tab">
                    <button className="tablinks">
                        <Link to="/supply/add_clients">
                            Clients
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path='/supply/add_clients' component={Add_Clients} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Supply
