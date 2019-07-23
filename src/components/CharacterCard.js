import React, { Component } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { async } from 'q';





class CharacterCard extends Component {
  constructor() {
    super()
    this.state = {
      chars: [],
      partyToggle: false,
      party_name : null,
      createToggle: false,
      selectedClass : null,
      classes : [],
      last_name: null,
      char_name: null,
      char_class: null,
      char_level: null,
      party: null,
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

  componentDidMount () {
    
    this.loadAllThings()
  }

  loadAllThings = async() => {
     await axios.get(`/api/chars/`).then(res => {
      this.setState({
        chars: res.data,
        user_id: res.data.user_id
      })
    })
     await axios.get('/api/classes/').then(res => {
      this.setState({
        classes: res.data
      })
    })
    await axios.get('/api/parties/').then(res=>{
      this.setState({
        party_name : res.data
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
    const { char_name, party, selectedClass } = this.state

    axios.post(`/api/chars/`, { char_name, party, selectedClass }).then(res => {
      this.setState({
        chars: res.data
      })
    })

  }

  handleCategories = ( event ) => {
    console.log(event.target.value)
    this.props.history.push(`/singlechar/${event.target.value}`)
  } 

  setSelected = (e) => {
    let { value, name } = e.target
    this.setState({
        [name]: value
    })
  }

  deleteChar = (id) =>{
    

    axios.post('/api/deletechar/', {id}).then(res=>{
      this.setState({
        chars: res.data
      })
    })
    window.location.reload()
  }

  conditionalToggle = (e) => {

    let { name, value } = e.target

    this.setState({
        [`${name}`]: !eval(value)
    })

  }

  saveName = () => {
    let {party_name} = this.state
    
    axios.post('/api/partyname/', {party_name})
    this.setState({
      partyToggle : !this.state.partyToggle
    })

  }


  render() {
    
    
    let classesMap = this.state.classes.map((item)=>{
      return (
        <div >
          <button className='class_item' name='selectedClass' value={item.class} onClick={this.setSelected}>{item.class}</button>
          
        </div>
      )
    })

    

    let charsArr = this.state.chars.map((char) => {
      return (
        <div className='select_char_container'>
          <p > {char.char_name}</p>
          <p > {char.last_name}</p>
          <p className="char_class_container">  {char.char_class}</p>
          <p className="char_party_container">  {char.race}</p>
          <button className='button_char' key={char.char_name} value={char.char_name}>SELECT</button>
          <button onClick={()=>this.deleteChar(char.id)}>delete</button>
        </div>
      )

    })
    return (
      <>
        <div className="conditional_render_input_for_party">
          {(!this.state.partyToggle)?
          <>
          <button className='button_char' name="partyToggle" value={this.state.partyToggle} 
          onClick={this.conditionalToggle}>edit</button>
          <p>{this.state.party_name}</p>
          </>
          :
          <>
            <input name='party_name' value={this.state.party_name} onChange={this.handleChange} />
            <button onClick={this.saveName}>save</button>
          </>
          }
        
        </div>
        
        <div  onClick={this.handleCategories}>{charsArr}</div>
        {(this.state.createToggle)?
        <div className="pop_out_create">
        <p>Create new character: </p>
        <p>character name: </p><input placeholder='character name' name="char_name" onChange={this.handleChange} />
        <p>party name: </p><input placeholder='party name' name='party' onChange={this.handleChange} />
        <p>Choose your class: </p> <p>{this.state.selectedClass}</p>
        <div className='select_class_container'>{classesMap}</div>
        
        
        <button onClick={this.newChar}>Create</button>
        <button onClick={()=>this.setState({createToggle: !this.state.createToggle})}>cancel</button>
        </div>
        :
        <>
        <button onClick={()=>this.setState({createToggle: !this.state.createToggle})}>create a new character</button>
        </>
        }
        
      </>

    )
  }
}
const mapStateToProps = (reduxState) => {
  const { username } = reduxState
  return { username }
}

export default connect(mapStateToProps)(withRouter(CharacterCard))