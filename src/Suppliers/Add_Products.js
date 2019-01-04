import React from 'react';
class Add_Products extends React.Component {
    constructor() {
        super();
        this.state = {
            Product_Name: '',
            Product_Price: 0,
            
        }
    }
    Product_Name_Changed(event) {
        this.setState({Product_Name : event.target.value })
    }
   Product_Price_Changed(event) {
        this.setState({ Product_Price: event.target.value })
    }
    
    Add_Products_Func(obj,any){
        console.log(obj)
        fetch('http://localhost:4000/Add_Product',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                Product_Name: obj.state.Product_Name,
                Product_Price: obj.state.Product_Price,
            })
        }).then((res)=>{
            return alert("saved successfully");
        })  
    };
    render(){
        return (
            <div classname="center">
            <table>
            <tbody>
                <tr>
                    <td>
                        <lable>Product_Name</lable>
                    </td>
                    <td>
                        <input type="text" value={this.state.Product_Name} onChange={this.Product_Name_Changed.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <lable>Product_Price</lable>
                    </td>
                    <td>
                        <input type="text" value={this.state.Product_Price} onChange={this.Product_Price_Changed.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" onClick={this.Add_Products_Func.bind(this,this)}/>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
        )
    }
}
export default Add_Products
  

