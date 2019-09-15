import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component{
    mapFunc() {
        alert(Object.values(this.props.user))
    }
    render(){
        return(
            <div>
                <center>
                <h1>Profile page</h1><br/>
                <p>{"Data Coming from rudex"}</p>
                <h5>{"Name: " + this.props.user.name}</h5>
                <h5>{"Age: " + this.props.user.age}</h5>
                <h5>{"Email: " + this.props.user.email}</h5>
                <button onClick={this.mapFunc.bind(this)}>
                    Check
                </button>
                </center>
            </div>
        )
    }
   
}
const PropsFunc = (state) => {
    return {
        user: state
    }
}
export default connect(PropsFunc, null)(Profile)
