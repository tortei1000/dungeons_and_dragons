import React, { Component } from 'react';
import axios from 'axios'
import './singleChar.css'


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
    }
    //section for the character info
    //double space for clearity

    //this edit toggle works for charInfo
    editToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    //handles the edit toggle view with state
    editStatToggle = () => {
        this.setState({
            statToggle: !this.state.statToggle
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
    //this section is for attributes
    //double space for clearity

    attToggle = () => {
        this.setState({
            attToggle: !this.state.attToggle
        })
    }

    //this adds or subs 1 to attributes on state.
    strAdd = () => {
        console.log()
        this.setState({ str: this.state.str + 1 })
    }
    strSub = () => {
        this.setState({ str: this.state.str - 1 })
    }

    dexAdd = () => {
        console.log()
        this.setState({ dex: this.state.dex + 1 })
    }
    dexSub = () => {
        this.setState({ dex: this.state.dex - 1 })
    }

    intelAdd = () => {
        console.log()
        this.setState({ intel: this.state.intel + 1 })
    }
    intelSub = () => {
        this.setState({ intel: this.state.intel - 1 })
    }

    chaAdd = () => {
        console.log()
        this.setState({ cha: this.state.cha + 1 })
    }
    chaSub = () => {
        this.setState({ cha: this.state.cha - 1 })
    }

    conAdd = () => {
        console.log()
        this.setState({ con: this.state.con + 1 })
    }
    conSub = () => {
        this.setState({ con: this.state.con - 1 })
    }

    wisAdd = () => {
        console.log()
        this.setState({ wis: this.state.wis + 1 })
    }
    wisSub = () => {
        this.setState({ wis: this.state.wis - 1 })
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
    //this saves to db the state values of the attributes
    saveAtt = async () => {
        let { char_name, str, dex, con, cha, intel, wis } = this.state
        await axios.post('/api/attributes', { char_name, str, dex, con, cha, intel, wis })
        this.attToggle()
    }

    skillsToggle = () => {
        this.setState({
            skillsToggle: !this.state.skillsToggle
        })
    }



    render() {

        console.log(this.state.languages)
        let { char, languages, proficiencies, attacks, dungeoneerPack, outlanderGear, features } = this.state

        return (
            <div className="single_char_container">
                <div className="name_info_container">
                    <div className="char_name_container">CHARACTER NAME: {char.char_name}</div>
                    {/* this is the first conditional render, based on the state condition of edit */}
                    {(this.state.edit) ?
                        <div className="char_info_container" >
                            <p>Class & Level: <input name='char_class' value={this.state.char_class} onChange={this.handleChange} />
                                <input name='char_level' value={this.state.char_level} onChange={this.handleChange} /> </p>
                            <p>Background: <input name='background' value={this.state.background} onChange={this.handleChange} /></p>
                            <p>Player Name: <input name='player_name' value={this.state.player_name} onChange={this.handleChange} /></p>
                            <p>Race: <input name='race' value={this.state.race} onChange={this.handleChange} /></p>
                            <p>Alignment:<input name='alignment' value={this.state.alignment} onChange={this.handleChange} /> </p>
                            <p>Experience Poins:<input name='experience_points' value={this.state.experience_points} onChange={this.handleChange} /> </p>
                            <button onClick={() => this.charInfoSave(char.char_name)}>save</button>
                            <button onClick={this.editToggle}>cancel</button>
                        </div>
                        :
                        <>
                            <button onClick={this.editToggle}>edit</button>
                            <div className="char_info_container">
                                <p>Class & Level: {this.state.char_class} {this.state.char_level} </p>
                                <p>Background: {this.state.background}</p>
                                <p>Player Name: {this.state.player_name}</p>
                                <p>Race: {this.state.race}</p>
                                <p>Alignment: {this.state.alignment}</p>
                                <p>Experience Poins: {this.state.experience_points}</p>
                            </div>
                        </>
                    }
                </div>
                <section className="att_skills_armor_container">
                    {/* this is the attributes conditional render */}
                    {(this.state.attToggle) ?
                        <div className="att_container" >
                            <button onClick={this.saveAtt}>save</button>
                            <button onClick={this.attToggle}>cancel</button>
                            <div>
                                <p name='str'>Strength: {this.state.str} <button onClick={this.strAdd}>+</button>
                                    <button onClick={this.strSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.str)} </p>

                                <p>Dexterity: {this.state.dex} <button onClick={this.dexAdd}>+</button>
                                    <button onClick={this.dexSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.dex)}</p>

                                <p>Constitution: {this.state.con} <button onClick={this.conAdd}>+</button>
                                    <button onClick={this.conSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.con)}</p>

                                <p>Inteligence: {this.state.intel} <button onClick={this.intelAdd}>+</button>
                                    <button onClick={this.intelSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.intel)}</p>

                                <p>Wisdon: {this.state.wis} <button onClick={this.wisAdd}>+</button>
                                    <button onClick={this.wisSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.wis)}</p>

                                <p>Charisma: {this.state.cha} <button onClick={this.chaAdd}>+</button>
                                    <button onClick={this.chaSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.cha)}</p>
                            </div>
                        </div>
                        :
                        <div className="att_container">
                            <button onClick={this.attToggle}>edit</button>
                            <div>
                                <p>Strength: {this.state.str} </p>
                                <p>bonus{this.bonusCalc(this.state.str)}</p>
                                <p>Dexterity: {this.state.dex}</p>
                                <p>bonus{this.bonusCalc(this.state.dex)}</p>
                                <p>Constitution: {this.state.con}</p>
                                <p>bonus{this.bonusCalc(this.state.con)}</p>
                                <p>Inteligence: {this.state.intel}</p>
                                <p>bonus{this.bonusCalc(this.state.intel)}</p>
                                <p>Wisdon: {this.state.wis}</p>
                                <p>bonus{this.bonusCalc(this.state.wis)}</p>
                                <p>Charisma: {this.state.cha}</p>
                                <p>bonus{this.bonusCalc(this.state.cha)}</p>
                            </div>
                        </div>
                    }
                    {/* this is the conditional render for skills section */}
                    {(this.state.skillsToggle) ?

                        <div className="skill_section_container">
                            <button onClick={this.skillsToggle}>cancel</button>
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

                        :
                        <div className="skill_section_container">
                            <button onClick={this.skillsToggle}>edit</button>
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
                    }
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
                    </div>
                </section>
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
            </div>
        )
    }
}

