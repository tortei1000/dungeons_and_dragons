import React, { Component } from 'react';
import axios from 'axios'

export default class Skills extends Component {
  state = {
    char: null,
    id: null,
    proficiency_bonus: null,
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
  }

  componentDidMount() {
    this.loadAllThings()

  }

  loadAllThings = async () => {
    let char_name = this.props
    await axios.post(`/api/character/`, { char_name }).then(res => {
      this.setState({
        char: res.data,
        id: res.data.id,
        proficiency_bonus: res.data.proficiency_bonus,
        acrobatics: res.data.acrobatics,
        animal_handling: res.data.animal_handling,
        arcana: res.data.arcana,
        athletics: res.data.athletics,
        deception: res.data.deception,
        history: res.data.history,
        insight: res.data.insight,
        intimidation: res.data.intimidation,
        investigation: res.data.investigation,
        medicine: res.data.medicine,
        nature: res.data.nature,
        perception: res.data.perception,
        performance: res.data.performance,
        persuation: res.data.persuation,
        religion: res.data.religion,
        sleight_of_hand: res.data.sleight_of_hand,
        stealth: res.data.stealth,
        survival: res.data.survival,

      })
    })
  }
  strAdd = (e) => {
    let { name, value } = e.target
    this.setState({
      [`${name}`]: eval(value) + 1
    })
  }

  strSub = (e) => {
    let { name, value } = e.target
    this.setState({
      [`${name}`]: eval(value) - 1
    })
  }
  armorToggle = (e) => {
    let { name, value } = e.target
    this.setState({
      [`${name}`]: !eval(value)
    })
  }
  render() {
    console.log(this.props)
    let {acrobatics} = this.props
    return (
      <>
        {/* this is the conditional render for skills section */}
        {(this.state.skillsToggle) ?

          <div className="skill_section_container">
            <div>
              <p>Proficiency Bonus: <input name='proficiency_bonus' value={this.state.proficiency_bonus} onChange={this.handleChange} /></p>
            </div>
            <div>Skills:
              <p>{acrobatics} Acrobatics (Dex)
              <button className='button_char' value='this.state.acrobatics' name="acrobatics" onClick={e => this.strAdd(e)}>+</button>
                <button className='button_char' value='this.state.acrobatics' name="acrobatics" onClick={this.strSub}>-</button>
              </p>
              <p><input name='animal_handling' value={this.state.animal_handling} onChange={this.handleChange} /> Animal Handling (Wis)</p>
              <p><input name='arcana' value={this.state.arcana} onChange={this.handleChange} /> arcana (Int)</p>
              <p><input name='athletics' value={this.state.athletics} onChange={this.handleChange} /> athletics (Str)</p>
              <p><input name='deception' value={this.state.deception} onChange={this.handleChange} /> deception (Cha)</p>
              <p><input name='history' value={this.state.history} onChange={this.handleChange} /> history (Int)</p>
              <p><input name='insight' value={this.state.insight} onChange={this.handleChange} /> insight (Wis)</p>
              <p><input name='intimidation' value={this.state.intimidation} onChange={this.handleChange} /> intimidation (Cha)</p>
              <p><input name='investigation' value={this.state.investigation} onChange={this.handleChange} /> investigation (Int)</p>
              <p><input name='medicine' value={this.state.medicine} onChange={this.handleChange} /> medicine (Wis)</p>
              <p><input name='nature' value={this.state.nature} onChange={this.handleChange} /> nature (Int)</p>
              <p><input name='perception' value={this.state.perception} onChange={this.handleChange} /> perception (Wis)</p>
              <p><input name='performance' value={this.state.performance} onChange={this.handleChange} /> performance (Cha)</p>
              <p><input name='persuation' value={this.state.persuation} onChange={this.handleChange} /> persuation (Cha)</p>
              <p><input name='religion' value={this.state.religion} onChange={this.handleChange} /> religion (Int)</p>
              <p><input name='sleight_of_hand' value={this.state.sleight_of_hand} onChange={this.handleChange} /> sleight of hand (Dex)</p>
              <p><input name='stealth' value={this.state.stealth} onChange={this.handleChange} /> stealth (Dex)</p>
              <p><input name='survival' value={this.state.survival} onChange={this.handleChange} /> survival (Wis)</p>
              <button className='button_char' onClick={this.saveSkills}>save</button>
              <button className='button_char' name="skillsToggle" value={this.state.skillsToggle} onClick={this.armorToggle}>cancel</button>
            </div>
          </div>

          :
          <div className="skill_section_container">
            <div>
              <p>Proficiency Bonus: {this.state.proficiency_bonus}</p>
            </div>
            <div>Skills:
            <p>{this.state.acrobatics} Acrobatics (Dex)</p>
              <p>{this.state.animal_handling} Animal Handling (Wis)</p>
              <p>{this.state.arcana} arcana (Int)</p>
              <p>{this.state.athletics} athletics (Str)</p>
              <p>{this.state.deception} deception (Cha)</p>
              <p>{this.state.history} history (Int)</p>
              <p>{this.state.insight} insight (Wis)</p>
              <p>{this.state.intimidation} intimidation (Cha)</p>
              <p>{this.state.investigation} investigation (Int)</p>
              <p>{this.state.medicine} medicine (Wis)</p>
              <p>{this.state.nature} nature (Int)</p>
              <p>{this.state.perception} perception (Wis)</p>
              <p>{this.state.performance} performance (Cha)</p>
              <p>{this.state.persuation} persuation (Cha)</p>
              <p>{this.state.religion} religion (Int)</p>
              <p>{this.state.sleight_of_hand} sleight of hand (Dex)</p>
              <p>{this.state.stealth} stealth (Dex)</p>
              <p>{this.state.survival} survival (Wis)</p>
              <button className='button_char' name="skillsToggle" value={this.state.skillsToggle} onClick={this.armorToggle}>edit</button>
            </div>
          </div>
        }

      </>
    )
  }
}