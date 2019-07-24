import React, { Component } from 'react';
import axios from 'axios'

import FooterNav from './FooterNav'
import Select from 'react-select'



export default class Spells extends Component {
  state = {
    char: [],
    id: null,
    selectedOption: null,
    spell_level: null,
    cantrips: [],
    level1: [],
    level2: [],
    level3: [],
    level4: [],
    level5: [],
    level6: [],
    level7: [],
    level8: [],
    level9: [],
    traits: false,
    featuresToggle: false,
    createFeature: false,
    createProfToggle: false,
    gearToggle: false,
    createGearToggle: false,
    attackToggle: false,
    createAttToggle: false,
    perceptionToggle: false,
    profToggle: false,
    armorToggle: false,
    languages: [],
    proficiencies: [],
    attacks: [],
    dungeoneerPack: [],
    outlanderGear: [],
    features: [],
    edit: false,
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
    spells: [],
    attToggle: false,
    skillsToggle: false

  }



  componentDidMount() {
    this.loadAllThings()

  }

  loadAllThings = async () => {
    let char_name = this.props.match.params.char_name

    await axios.post(`/api/character/`, { char_name }).then(res => {
      this.setState({
        char: res.data,
        id: res.data.id,
        str: res.data.str,
        dex: res.data.dex,
        con: res.data.con,
        intel: res.data.intel,
        wis: res.data.wis,
        cha: res.data.cha,
        char_name: res.data.char_name,
        char_class: res.data.char_class,
        char_level: res.data.char_level,
        race: res.data.race,
        background: res.data.background,
        alignment: res.data.alignment,
        player_name: res.data.player_name,
        experience_points: res.data.experience_points,
        inspiration: res.data.inspiration,
        proficiency_bonus: res.data.proficiency_bonus,
        sav_str: res.data.sav_str,
        sav_dex: res.data.sav_dex,
        sav_con: res.data.sav_con,
        sav_int: res.data.sav_int,
        sav_wis: res.data.sav_wis,
        sav_cha: res.data.sav_cha,
        armor_class: res.data.armor_class,
        initiative: res.data.initiative,
        speed: res.data.speed,
        hit_point_max: res.data.hit_point_max,
        current_hit_points: res.data.current_hit_point_max,
        temporary_hit_points: res.data.temporary_hit_points,
        hit_dice: res.data.hit_dice,
        success_1: res.data.success_1,
        success_2: res.data.success_2,
        success_3: res.data.success_3,
        failures_1: res.data.failures_1,
        failures_2: res.data.failures_2,
        failures_3: res.data.failures_3,
        personality_trait: res.data.personality_trait,
        ideal: res.data.ideal,
        bond: res.data.bond,
        flaw: res.data.flaw,
        str_bonus: res.data.str_bonus,
        dex_bonus: res.data.dex_bonus,
        con_bonus: res.data.con_bonus,
        int_bonus: res.data.int_bonus,
        wis_bonus: res.data.wis_bonus,
        cha_bonus: res.data.cha_bonus,
        passive_perception: res.data.passive_perception,
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
    await axios.post(`/api/languages/`, { char_name }).then(res => {
      this.setState({
        languages: res.data,
      })
    })
    await axios.post(`/api/prof/`, { char_name }).then(res => {
      this.setState({
        proficiencies: res.data,
      })
    })
    await axios.post(`/api/attacks/`, { char_name }).then(res => {
      this.setState({
        attacks: res.data,
      })
    })

    await axios.post(`/api/dPack/`, { char_name }).then(res => {
      this.setState({
        dungeoneerPack: res.data,
      })
    })

    await axios.post(`/api/outlander/`, { char_name }).then(res => {
      this.setState({
        outlanderGear: res.data,
      })
    })

    await axios.post(`/api/features/`, { char_name }).then(res => {
      this.setState({
        features: res.data,
      })
    })

    await axios.post('/api/spells/', { char_name }).then(res => {
      this.setState({
        spells: res.data
      })
    })

    await axios.post('/api/cantrips/', { char_name }).then(res => {
      this.setState({
        cantrips: res.data
      })
    })
    await axios.post('/api/level1/', { char_name }).then(res => {
      this.setState({
        level1: res.data
      })
    })

  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });

  };

  addSpell = () => {
    let { selectedOption, id, spell_level } = this.state
    let cantripName = selectedOption.label
    axios.post(`/api/addcantrips/`, { id, cantripName, spell_level }).then(res => {
      this.setState({
        cantrips: res.data
      })
    })
    window.location.reload()
  }

  inputChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  deleteSpell = (id) => {
    axios.post('/api/removecantrips/', { id }).then(res => {
      this.setState({
        cantrips: res.data
      })
    })
    window.location.reload()
  }



  render() {
    console.log('this is the render', this.state.cantrips)
    const { selectedOption } = this.state



    return (
      <div>

        {/* <input value={this.state.spell_level} name='spell_level' placeholder='level' onChange={this.inputChange} />
        <button onClick={this.addSpell}>+</button> */}
        <div className="spell_grid_container">
          <div>
            <h2>Cantrips</h2>
            <div className="select_contain">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.cantrips.map(spell => ({ label: spell.name, value: spell.name }))}
              />
            </div>
            <button onClick={this.addSpell}>+</button> 
          </div>

          <div>
            <h2>level 1</h2>
            <div className="select_contain">
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.level1.map(spell => ({ label: spell.name, value: spell.name }))}
              />
            </div>
          </div>

          <div><h2>level 2</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level2.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>
          <div><h2>level 3</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level3.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>
          <div><h2>level 4</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level4.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>
          <div><h2>level 5</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level5.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>
          <div><h2>level 6</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level6.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>
          <div><h2>level 7</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level7.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>
          <div><h2>level 8</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level8.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>
          <div><h2>level 9</h2>
            <div className="select_contain"><Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.level9.map(spell => ({ label: spell.name, value: spell.name }))}
            /></div>
          </div>




        </div>
        <FooterNav char_name={this.state.char_name} />

      </div >

    )
  }
}
