import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateUserId, updateUsername } from '../../redux/auth_reducer'
import axios from 'axios'
import "../styles/styles.css"

class Register extends Component {
    constructor() {
        super()
        this.state = {
            loginUsername: '',
            loginPassword: '',
            loginError: false,
            loginErrorMessage: 'Username or password is incorrect. Please try again'
        }
    }

    handleFormInputUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            loginError: false
        })
    }

    handleLoginFormSubmit = async (e) => {
        e.preventDefault()
        const { loginUsername, loginPassword } = this.state

        try {

            const res = await axios.post('/auth/login', { loginUsername, loginPassword })

            this.props.updateUsername(loginUsername)
            this.props.updateUserId(res.data.id)

            this.props.history.push('/home')
        } catch (err) {
            this.setState({ loginUsername: '', loginPassword: '', loginError: true })
        }
    }

    render() {
        return (
            <div class="login_bg">
                <div className="login_box">

                    <h1>Tabletop RPG Characters Sheets</h1>
                    
                    <form onSubmit={this.handleLoginFormSubmit}>

                    
                        <input className="pill"
                            type='text'
                            name='loginUsername'
                            value={this.state.loginUsername}
                            onChange={this.handleFormInputUpdate}
                            placeholder='Party Name'
                        />

                        <br></br>

                        <input className="pill"
                            type='text'
                            name='loginPassword'
                            value={this.state.loginPassword}
                            onChange={this.handleFormInputUpdate}
                            placeholder='Party Code'
                        />

                        <br></br>

                        <button className="login_button">Sign in</button>
                        
                    </form>
                    {this.state.loginError && <h3>{this.state.loginErrorMessage}</h3>}

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUserId,
    updateUsername
}

export default connect(null, mapDispatchToProps)(withRouter(Register))