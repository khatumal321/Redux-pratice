import React from 'react'
import {connect} from 'react-redux'

class Contact extends React.Component{
    mapFunc() {
        alert(Object.values(this.props.user))
    }
    render(){
        console.log(this.props.user)
        return(
            <div>
                <center>
                <h1>Contact page</h1><br/>
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

const mapStateToProps =(state)=> {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Contact)
