import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add_Clients from './Add_Clients';
import './supplyClients.css';
class SupplyClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
        this.ClientList();
    }

    componentDidMount() {
        this.ClientList();
    }

    ClientList() {
        fetch('http://localhost:4000/List_All_Clients').then((result) => {
            return result.json();
        }).then((Response) => {
            this.setState({ Data: Response })
        })
    }
    render() {
        var all_clients = this.state.Data.map((item, i) => (
            <tr>
                <td>
                    {i + 1}
                </td>
                <td>
                    {item.Name}
                </td>
                <td>
                    {item.PhoneNumber}
                </td>
                <td>
                    {item.EmailID}
                </td>
                <td>
                    {item.GST_Number}
                </td>
            </tr>
        ));
        return (
            <Router>
                <div classname="supply_clients">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    S.No
                            </th>
                                <th>
                                    Name
                            </th>
                                <th>
                                    Phone Number
                            </th>
                                <th>
                                    Email ID
                            </th>
                                <th>
                                    GST Number
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_clients}
                        </tbody>
                    </table>
                    <button classname="button">
                        <Link to="/supply/add_clients">
                            ADD Clients
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path="/supply/add_clients" component={Add_Clients} />
                    </Switch>
                </div>

            </Router>
        )

    }
}
export default SupplyClients
