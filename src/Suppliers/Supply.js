import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add_Clients from './Add_Clients';
import Supply_Clients from './Supply_Clients';

class Supply extends React.Component {
    render() {
        return (
            <Router>
                <div className="tab">
                    <button className="tablinks">
                        <Link to="/supply/add_clients">
                            ADD Clients
                        </Link>
                    </button>
                    <br/>
                    <br/>
                    <button>
                        <Link to="/supply/supply_clients">
                            ALL Clients
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path='/supply/add_clients' component={Add_Clients} />
                        <Route exact path='/supply/supply_clients' component={Supply_Clients} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Supply
