import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add_Clients from './Add_Clients';
import Supply_Clients from './Supply_Clients';
import Add_Products from './Add_Products';
import Supply_Products from './Supply_Products';

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
                    <br/>
                    <br/>
                    <button>
                        <Link to="/supply/add_products">
                            ADD Products
                        </Link>
                    </button>
                    <br/>
                    <br/>
                    <button>
                        <Link to="/supply/supply_products">
                            ALL Products
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path='/supply/add_clients' component={Add_Clients} />
                        <Route exact path='/supply/supply_clients' component={Supply_Clients} />
                        <Route exact path='/supply/add_products' component={Add_Products} />
                        <Route exact path='/supply/supply_products' component={Supply_Products} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Supply
