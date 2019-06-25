import React, { Component } from 'react';
import axios from 'axios'
import { tsParenthesizedType } from '@babel/types';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
import { async } from 'q';

export default class SingleChar extends Component {
    state = {
        char: [],
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

    }
    componentDidMount() {
        let char_name = this.props.match.params.char_name
        console.log(char_name)
        axios.post(`/api/character/`, { char_name }).then(res => {
            this.setState({
                char: res.data,
                str: res.data.str,
                dex: res.data.dex,
                con: res.data.con,
                intel: res.data.intel,
                wis: res.data.wis,
                cha: res.data.cha,
                char_name : res.data.char_name

            })
        })
        axios.post(`/api/languages/`, { char_name }).then(res => {
            this.setState({
                languages: res.data,
            })
        })
        axios.post(`/api/prof/`, { char_name }).then(res => {
            this.setState({
                proficiencies: res.data,
            })
        })
        axios.post(`/api/attacks/`, { char_name }).then(res => {
            this.setState({
                attacks: res.data,
            })
        })

        axios.post(`/api/dPack/`, { char_name }).then(res => {
            this.setState({
                dungeoneerPack: res.data,
            })
        })

        axios.post(`/api/outlander/`, { char_name }).then(res => {
            this.setState({
                outlanderGear: res.data,
            })
        })

        axios.post(`/api/features/`, { char_name }).then(res => {
            this.setState({
                features: res.data,
            })
        })

    }
    //this calculates the bonus on the stats based on the stats on DB
    bonusCalc = (num) => {
        let bonus = (num - 10) / 2
        if (bonus > 0) {
            return `+${Math.round(bonus)}`
        } else {
            return `-${Math.round(bonus)}`
        }
    }
    //this edit toggle works for charInfo
    editToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    //this should handle all input boxes except the ones that are nested in state like features, dungeoneer_pack, etc
    handleChange = (e) => {
        let { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    //charInfoSave sends to DB 
    charInfoSave = async (char_name) => {
        let { char_class, char_level, background, player_name, race, alignment, experience_points } = this.state

        await axios.post('/api/charsInfo', { char_name, char_class, char_level, background, player_name, race, alignment, experience_points })
        this.editToggle()
        window.location.reload()

    }
    //this adds 1 to str on db... still working on refreshing the view automatically
    strAdd = async() => {
        let {str, char_name} = this.state
        this.setState({ str: this.state.str + 1 })
        console.log(this.state.str)
        await axios.post('/api/strUp', {char_name, str})
        
    }




    render() {

        console.log(this.state.languages)
        let { char, languages, proficiencies, attacks, dungeoneerPack, outlanderGear, features } = this.state

        return (
            <>
                <p>CHARACTER NAME: {char.char_name}</p>
                {/* this is the first conditional render, based on the state condition of edit */}
                {(this.state.edit) ?
                    <div style={{ border: 'solid', margin: '1px' }}>
                        <p>Class & Level: <input name='char_class' placeholder={char.char_class} onChange={this.handleChange} />
                            <input name='char_level' placeholder={char.char_level} onChange={this.handleChange} /> </p>
                        <p>Background: <input name='background' placeholder={char.background} onChange={this.handleChange} /></p>
                        <p>Player Name: <input name='player_name' placeholder={char.player_name} onChange={this.handleChange} /></p>
                        <p>Race: <input name='race' placeholder={char.race} onChange={this.handleChange} /></p>
                        <p>Alignment:<input name='alignment' placeholder={char.alignment} onChange={this.handleChange} /> </p>
                        <p>Experience Poins:<input name='experience_points' placeholder={char.experience_points} onChange={this.handleChange} /> </p>
                        <button onClick={() => this.charInfoSave(char.char_name)}>save</button>
                        <button onClick={this.editToggle}>cancel</button>
                    </div>
                    :
                    <div style={{ border: 'solid', margin: '1px' }}>
                        <button onClick={this.editToggle}>edit</button>
                        <p>Class & Level: {char.char_class} {char.char_level} </p>
                        <p>Background: {char.background}</p>
                        <p>Player Name: {char.player_name}</p>
                        <p>Race: {char.race}</p>
                        <p>Alignment: {char.alignment}</p>
                        <p>Experience Poins: {char.experience_points}</p>
                    </div>
                }
                <div>
                    <div>
                        <p>Strength: {char.str} <button onClick={this.strAdd}>+</button> </p>
                        <p>bonus{this.bonusCalc(char.str)}</p>
                        <p>Dexterity: {char.dex}</p>
                        <p>bonus{this.bonusCalc(char.dex)}</p>
                        <p>Constitution: {char.con}</p>
                        <p>bonus{this.bonusCalc(char.con)}</p>
                        <p>Inteligence: {char.intel}</p>
                        <p>bonus{this.bonusCalc(char.intel)}</p>
                        <p>Wisdon: {char.wis}</p>
                        <p>bonus{this.bonusCalc(char.wis)}</p>
                        <p>Charisma: {char.cha}</p>
                        <p>bonus{this.bonusCalc(char.cha)}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Insipiration: {char.inspiration}</p>
                        <p>Proficiency Bonus: {char.proficiency_bonus}</p>
                    </div>
                    <div>Saving throws:
                        <p>Strength: {char.sav_str}</p>
                        <p>Dexterity: {char.sav_dex}</p>
                        <p>Constitution: {char.sav_con}</p>
                        <p>Inteligence: {char.sav_int}</p>
                        <p>Wisdon: {char.sav_wis}</p>
                        <p>Charisma: {char.sav_cha}</p>
                    </div>
                    <div>Skills:
                    <p>{char.acrobatics} Acrobatics (Dex)</p>
                        <p>{char.animal_handling} Animal Handling (Wis)</p>
                        <p>{char.arcana} arcana (Int)</p>
                        <p>{char.athletics} athletics (Str)</p>
                        <p>{char.deception} deception (Cha)</p>
                        <p>{char.history} history (Int)</p>
                        <p>{char.insight} insight (Wis)</p>
                        <p>{char.intimidation} intimidation (Cha)</p>
                        <p>{char.investigation} investigation (Int)</p>
                        <p>{char.medicine} medicine (Wis)</p>
                        <p>{char.nature} nature (Int)</p>
                        <p>{char.perception} perception (Wis)</p>
                        <p>{char.performance} performance (Cha)</p>
                        <p>{char.persuation} persuation (Cha)</p>
                        <p>{char.religion} religion (Int)</p>
                        <p>{char.sleight_of_hand} sleight of hand (Dex)</p>
                        <p>{char.stealth} stealth (Dex)</p>
                        <p>{char.survival} survival (Wis)</p>
                    </div>
                </div>
                <div>
                    {char.passive_perception}Passive Wisdom (Perception)
                    <div>Other Proficiencies & Languages:
                    <p>Languages:
                        {languages.map((lag) => {
                        return <p>{lag.name}</p>
                    })}
                        </p>
                        <p>Proficiencies:
                        {proficiencies.map((prof) => {
                            return <p>{prof.name}</p>
                        })}
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Armor Class {char.armor_class}</p>
                        <p>Initiative {char.initiative}</p>
                        <p>Speed {char.speed}</p>
                    </div>
                    <p>Hit Point Maximun  {char.current_hit_point_max}</p>
                    <p>Current Hit Points  {char.current_hit_points}</p>
                    <p>Temporary Hit Points  {char.temporary_hit_points}</p>
                    <div>
                        <p>Hit Dice  {char.hit_dice}</p>
                        <div>
                            <p>Successes {char.sucess_1} {char.sucess_2} {char.sucess_3}</p>
                            <p>Failures {char.failures_1} {char.failures_2} {char.failures_3}</p>
                        </div>
                    </div>
                </div>
                <div>
                    Attacks & Spellcasting
                    {attacks.map((atk) => {
                        return <>
                            <p>{atk.name}</p>
                            <p>{atk.atk_bonus}</p>
                            <p>{atk.damage}</p>
                            <p>{atk.type}</p>
                        </>
                    })}
                </div>
                <div>
                    Equipament
                    {dungeoneerPack.map((pack) => {
                        return <>
                            <p>{pack.name}</p>
                            <p>{pack.quantity}</p>
                        </>
                    })}

                    {outlanderGear.map((gear) => {
                        return <>
                            <p>{gear.name}</p>
                            <p>{gear.quantity}</p>
                        </>
                    })}
                </div>
                <div>
                    <div>
                        <p>Personality Trait  {char.personality_trait}</p>
                        <p>Ideal {char.ideal}</p>
                        <p>Bond {char.bond}</p>
                        <p>Flaw  {char.flaw}</p>
                    </div>
                    <div>
                        Features & Traits

                        {features.map((feature) => {
                            return <>
                                <p>{feature.name}</p>
                                <p>{feature.description}</p>
                                <p>{feature.uses}</p>
                            </>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

