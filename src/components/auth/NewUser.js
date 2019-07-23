import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateUserId, updateUsername } from '../../redux/auth_reducer'
import axios from 'axios'


class NewUser extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            loginError: false,
            loginErrorMessage: 'Username taken, please try a different one.',
            registerToggle: false
        }
    }

    handleFormInputUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            loginError: false
        })
    }

    conditionalToggle = () => {
        this.setState({
            registerToggle: !this.state.registerToggle
        })
    }

    handleNewUserFormSubmit = async (e) => {
        e.preventDefault()
        console.log('handle active')
        const { username, password } = this.state
        try {
            const res = await axios.post('/auth/register', { username, password })
            this.props.updateUsername(username)
            this.props.updateUserId(res.data.user_id)
            this.props.history.push('/home')
        } catch (err) {
            this.setState({ username: '', password: '', loginError: true })
        }
    }

    render() {
        return (
            <>
                {this.state.registerToggle ?
                    <>
                        <form className="form_container" onSubmit={this.handleNewUserFormSubmit}>
                            <div className="login_subheader">Party Name</div>
                            <input className="input_container"
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={this.handleFormInputUpdate}
                            />
                            <br></br>
                            <div className="login_subheader">Party Code</div>
                            <input className="input_container"
                                type='text'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleFormInputUpdate}
                            />
                            <br></br>
                            <br></br>
                            <button className="login_button" >Save</button>
                        </form>
                    </>
                    :
                    <>
                    <button className="login_button" onClick={this.conditionalToggle}>Create New Party</button>
                    </>
                }


                {this.state.loginError && <h3>{this.state.loginErrorMessage}</h3>}
            </>
        )
    }
}

const mapDispatchToProps = {
    updateUserId,
    updateUsername
}

export default connect(null, mapDispatchToProps)(withRouter(NewUser))