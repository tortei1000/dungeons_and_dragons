import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios';
import { updateUsername, logout } from "../redux/auth_reducer"
import CharacterCard from './CharacterCard'



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
            
            {username && <div>Welcome, {username}  <button className="logout_button" onClick={() => {
                        this.props.logout()
                        axios.get('/auth/logout').then(() => { this.props.history.push('/') })


                    }}>logout</button></div>}
                    <CharacterCard />
          </div>
        ) : (
            <div >
              {this.props.history.push('/')}  
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