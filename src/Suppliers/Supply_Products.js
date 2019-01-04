import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add_Products from './Add_Products';
import './table.css';
class SupplyProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
        this.ProductList();
    }

    componentDidMount() {
        this.ProductList();
    }

    ProductList() {
        fetch('http://localhost:4000/List_All_Products').then((result) => {
            return result.json();
        }).then((Response) => {
            this.setState({ Data: Response })
        })
    }
    render() {
        var all_products = this.state.Data.map((item, i) => (
            <tr>
                <td>
                    {i + 1}
                </td>
                <td>
                    {item.ProductID}
                </td>
                <td>
                    {item.Product_Name}
                </td>
                <td>
                    {item.Product_Price}
                </td>
            </tr>
        ));
        return (
            <Router>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    S.No
                            </th>
                                <th>
                                    Product ID
                            </th>
                                <th>
                                    Product Name
                            </th>
                                <th>
                                   Product Price
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_products}
                        </tbody>
                    </table>
                    <button classname="button">
                        <Link to="/supply/add_products">
                            ADD Products
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path="/supply/add_products" component={Add_Products} />
                    </Switch>
                </div>

            </Router>
        )

    }
}
export default SupplyProducts
