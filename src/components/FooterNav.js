import React, { Component } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default class Combat extends Component {
  
  constructor() {
    super()
    this.state = {
      chars: []
    }
  }

  componentDidMount() {
    axios.get(`/api/chars/`).then(res => {
      this.setState({
        chars: res.data
      })
    })
  }
  render(){
    let {char_name} = this.state
    return(
      <div>
        <Link to='/combat/:char_name' >COMBAT</Link>
      </div>
    )
  }
}