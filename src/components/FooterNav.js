import React, { Component } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default class Combat extends Component {
  
   
  render(){
    
    console.log(this.props.char_name)
    return(
      <div className='bottom_nav'>
        <p className='bottom_link'><Link to={`/combat/${this.props.char_name}`} ><p className='text_link'>COMBAT</p></Link></p>
        <p className='bottom_link'><Link to={`/spells/${this.props.char_name}`} ><p className='text_link'>Spells and Features</p></Link></p>
        <p className='bottom_link'><Link to={`/singlechar/${this.props.char_name}`} ><p className='text_link'>Edit Char</p></Link></p>
      </div>
    )
  }
}