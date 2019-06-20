import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios';
import { updateUsername, logout } from "../redux/auth_reducer"




class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    axios.get('/auth/users').then((res) => {
      this.props.updateUsername(res.data.username)
    }).catch((err) => { console.log(err) })
  }

  render() {

    const { username } = this.props


    return (
      <div>
         {this.props.username ? (
          <div>
            hello logged in
            {username && <div>Welcome, {username}  <button className="logout_button" onClick={() => {
                        this.props.logout()
                        axios.get('/auth/logout').then(() => { this.props.history.push('/home') })


                    }}>logout</button></div>}
          </div>
        ) : (
            <div >
              <ul className="login_register_container">
                        <li className="login_container">
                            <Link to='/login' className="login_text">Login</Link>
                        </li>
                        <li className="register_container">
                            <Link to='/register' className="register_text">Get Started</Link>
                        </li>
                    </ul>
              not logged in
            </div>
          )}

      </div>
    )

  }

}
const mapDispatchToProps = {
  updateUsername,
  logout
}

const mapStateToProps = (reduxState) => {
  const { username } = reduxState
  return { username }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))