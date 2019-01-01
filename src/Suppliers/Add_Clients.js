import React from 'react';
class Add_Clients extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            PhoneNumber: '',
            EmailID: '',
            GST_Number: ''
        }
    }
    Name_Changed(event){
        this.setState({Name:event.target.value})
    }
    PhoneNumber_Changed(event) {
        this.setState({ PhoneNumber: event.target.value })
    }
    EmailID_Changed(event) {
        this.setState({ EmailID: event.target.value })
    }
    GST_Number_Changed(event) {
        this.setState({ GST_Number: event.target.value })
    }
    Add_Clients_Func(obj,any){
        fetch('http://localhost:4000/Add_Clients',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                Name: obj.state.Name,
                PhoneNumber: obj.state.PhoneNumber,
                EmailID: obj.state.EmailID,
                GST_Number: obj.state.GST_Number
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
                        <lable>Name</lable>
                    </td>
                    <td>
                        <input type="text" value={this.state.Name} onChange={this.Name_Changed.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <lable>PhoneNumber</lable>
                    </td>
                    <td>
                        <input type="text" value={this.state.PhoneNumber} onChange={this.PhoneNumber_Changed.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <lable>EmailID</lable>
                    </td>
                    <td>
                        <input type="text" value={this.state.EmailID} onChange={this.EmailID_Changed.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <lable>GST_Number</lable>
                    </td>
                    <td>
                        <input type="text" value={this.state.GST_Number} onChange={this.GST_Number_Changed.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" onClick={this.Add_Clients_Func.bind(this,this)}/>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
        )
    }
}
export default Add_Clients
  

