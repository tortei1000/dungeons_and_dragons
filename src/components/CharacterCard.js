import React, { Component } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'





class CharacterCard extends Component {
  constructor() {
    super()
    this.state = {
      chars: [],
      char_name: null,
      char_class: null,
      char_level: null,
      race: null,
      background: null,
      alignment: null,
      player_name: null,
      experience_points: null,
      str: null,
      dex: null,
      con: null,
      intel: null,
      wis: null,
      cha: null,
      inspiration: null,
      proficiency_bonus: null,
      sav_str: null,
      sav_dex: null,
      sav_con: null,
      sav_int: null,
      sav_wis: null,
      sav_cha: null,
      armor_class: null,
      initiative: null,
      speed: null,
      hit_point_max: null,
      current_hit_points: null,
      temporary_hit_points: null,
      hit_dice: null,
      success_1: null,
      success_2: null,
      success_3: null,
      failures_1: null,
      failures_2: null,
      failures_3: null,
      personality_trait: null,
      ideal: null,
      bond: null,
      flaw: null,
      str_bonus: null,
      dex_bonus: null,
      con_bonus: null,
      int_bonus: null,
      wis_bonus: null,
      cha_bonus: null,
      passive_perception: null,
      acrobatics: null,
      animal_handling: null,
      arcana: null,
      athletics: null,
      deception: null,
      history: null,
      insight: null,
      intimidation: null,
      investigation: null,
      medicine: null,
      nature: null,
      perception: null,
      performance: null,
      persuation: null,
      religion: null,
      sleight_of_hand: null,
      stealth: null,
      survival: null,
      laguages: [],
      proficiencies: [],
      attacks: [{ name: null, atk_bonus: null, damage: null, type: null }],
      dungeoneer_pack: [{ name: null, qty: null }],
      outlander_gear: [{ name: null, qty: null }],
      features: [{ name: null, desc: null, uses: null }],
      
    }
  }

  componentDidMount() {
    axios.get(`/api/chars/`).then(res => {
      this.setState({
        chars: res.data
      })
    })
  }

  handleChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  newChar = () => {
    const { char_name } = this.state

    axios.post(`/api/chars/`, { char_name }).then(res => {
      this.setState({
        chars: res.data
      })
    })

  }

  handleCategories = ( event ) => {
    
    this.props.history.push(`/singlechar/${event.target.value}`)
  } 


  render() {
    console.log(this.state.chars)

    let charsArr = this.state.chars.map((char, index) => {
      return (
        <>

          <option key={index} value={char.char_name}>{char.char_name}</option>

        </>
      )

    })
    return (
      <>
        <p>choose your character:</p>
        <select onChange={this.handleCategories}>
          {charsArr}
        </select>
        <p>or ...</p>
        <p>Create new character: </p><input placeholder='character name' name="char_name" onChange={this.handleChange} />
        <button onClick={this.newChar}>Create</button>
      </>

    )
  }
}
const mapStateToProps = (reduxState) => {
  const { username } = reduxState
  return { username }
}

export default connect(mapStateToProps)(withRouter(CharacterCard))