import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
    mapFunc() {
        alert(Object.values(this.props.user))
    }
    render() {
        console.log(this.props.user)
        return (
            <div>
                <center>
                <h1>Home page</h1><br/>
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

const mapState = (state) => {
    return {
        user: state
    }
}
export default connect(mapState, null)(Home)