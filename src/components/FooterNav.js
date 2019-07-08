import React, { Component } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default class Combat extends Component {
  
   
  render(){
    
    console.log(this.props.char_name)
    return(
      <div>
        <Link to={`/combat/${this.props.char_name}`} >COMBAT</Link>
        <Link to={`/singlechar/${this.props.char_name}`} >Edit Char</Link>
      </div>
    )
  }
}