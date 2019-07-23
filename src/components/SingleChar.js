import React, { Component } from 'react';
import axios from 'axios'
import './singleChar.css'
import FooterNav from './FooterNav'


export default class SingleChar extends Component {
    state = {
        char: [],
        spells:[],
        createSpells : false,
        spellsToggle : false,
        id: null,
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
        party: null,
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
                id: res.data.id,
                party: res.data.party,
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
        await axios.post(`/api/spells/`, { char_name }).then(res => {
            console.log(" ai m running")
            this.setState({
                spells: res.data,
            })
        })
    }

    //this should handle all input boxes except the ones that are nested in state like features, dungeoneer_pack, etc
    handleChange = (e) => {
        let { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    //this adds or subs 1 to attributes on state.
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

    //this calculates the bonus on the stats based on the stats on DB
    bonusCalc = (num) => {
        let bonus = (num - 10) / 2
        if (bonus > 0) {
            return `+${Math.round(bonus)}`
        } else {
            return `-${Math.round(bonus)}`
        }
    }

    //this is the toggle handler for conditional rendering
    armorToggle = (e) => {

        let { name, value } = e.target

        this.setState({
            [`${name}`]: !eval(value)
        })

    }


    //this is for the check boxes on sucess and failures
    checkboxToggler = (e) => {

        let { name, value } = e.target

        this.setState({
            [`${name}`]: !eval(value)
        })
    }

    //-----saving to DB below this ------

    //this saves to db the state values of the attributes

    //charInfoSave sends to DB 
    charInfoSave = async (char_name) => {
        let { char_class, char_level, background, player_name, race, alignment, experience_points } = this.state

        await axios.post('/api/charsInfo', { char_name, char_class, char_level, background, player_name, race, alignment, experience_points })
        this.setState({edit : false})
        window.location.reload()

    }

    traitSave = async (char_name) => {
        let { personality_trait, ideal, bond, flaw } = this.state

        await axios.post('/api/traits', { char_name, personality_trait, ideal, bond, flaw })
        this.setState({traits : false})
        window.location.reload()

    }
    //this saves att to DB
    saveAtt = async () => {
        let { char_name, str, dex, con, cha, intel, wis } = this.state
        await axios.post('/api/attributes', { char_name, str, dex, con, cha, intel, wis })
        this.setState({attToggle : false})
    }
    //this saves the skills section to db
    saveSkills = async () => {
        let { char_name, inspiration, proficiency_bonus, sav_str, sav_dex, sav_con, sav_int, sav_wis, sav_cha, acrobatics, animal_handling, arcana, athletics,
            deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleight_of_hand,
            stealth, survival } = this.state
        await axios.post('/api/skills', {
            char_name, inspiration, proficiency_bonus, sav_str, sav_dex, sav_con, sav_int, sav_wis, sav_cha, acrobatics, animal_handling, arcana, athletics,
            deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleight_of_hand,
            stealth, survival
        })
        this.setState({skillsToggle : false})
    }
    //this saves to db the armor section
    saveArmor = async () => {
        let { char_name, armor_class, initiative, speed, hit_point_max, current_hit_points, temporary_hit_points, hit_dice,
            success_1, success_2, success_3, failures_1, failures_2, failures_3 } = this.state
        await axios.post('/api/armor', {
            char_name, armor_class, initiative, speed, hit_point_max, current_hit_points, temporary_hit_points, hit_dice,
            success_1, success_2, success_3, failures_1, failures_2, failures_3
        })
        this.setState({armorToggle : false})
    }

    //delete from DB function
    deleteThis = (item) => {

        let { id } = item
        let { char_name } = this.state

        axios.put(`/api/attacks/${id}`, { char_name }).then(res => {
            this.setState({
                attacks: res.data
            })
        })
        this.loadAllThings()
    }

    deleteProf = (item) => {
        let { id } = item
        let { char_name } = this.state

        axios.put(`/api/prof/${id}`, { char_name }).then(res => {
            this.setState({
                attacks: res.data
            })
        })
        this.loadAllThings()
    }

    deleteLag = (item) => {
        let { id } = item
        let { char_name } = this.state

        axios.put(`/api/lag/${id}`, { char_name }).then(res => {
            this.setState({
                attacks: res.data
            })
        })
        this.loadAllThings()
    }

    deletePack = (item) => {
        let { id } = item
        let { char_name } = this.state

        axios.put(`/api/pack/${id}`, { char_name }).then(res => {
            this.setState({
                attacks: res.data
            })
        })
        this.loadAllThings()
    }

    deleteGear = (item) => {
        let { id } = item
        let { char_name } = this.state

        axios.put(`/api/gear/${id}`, { char_name }).then(res => {
            this.setState({
                attacks: res.data
            })
        })
        this.loadAllThings()
    }

    deleteFeature = (item) => {
        let { id } = item
        let { char_name } = this.state

        axios.put(`/api/feature/${id}`, { char_name }).then(res => {
            this.setState({
                attacks: res.data
            })
        })
        this.loadAllThings()
    }
    deleteSpell = (item) => {
        let { id } = item
        let { char_name } = this.state

        axios.put(`/api/spells/${id}`, { char_name }).then(res => {
            this.setState({
                spells: res.data
            })
        })
        this.loadAllThings()
    }

    newAttack = async () => {
        let { id, atk_name, atk_bonus, atk_damage, atk_type } = this.state
        await axios.post('/api/newattacks', { id, atk_name, atk_bonus, atk_damage, atk_type })
        this.loadAllThings()
        this.setState({
            createAttToggle: false
        })
    }

    newProf = async () => {
        let { id, prof_name } = this.state
        await axios.post('/api/profi', { id, prof_name })
        this.loadAllThings()
        this.setState({
            createProfToggle: false
        })
    }

    newLang = async () => {
        let { id, lang_name } = this.state
        await axios.post('/api/lang', { id, lang_name })
        this.loadAllThings()
        this.setState({
            createProfToggle: false
        })
    }

    newDung = async () => {
        let { id, dung_name, dung_qty } = this.state
        await axios.post('/api/dung', { id, dung_name, dung_qty })
        this.loadAllThings()
        this.setState({
            createGearToggle: false
        })
    }

    newOut = async () => {
        let { id, out_name, out_qty } = this.state
        await axios.post('/api/out', { id, out_name, out_qty })
        this.loadAllThings()
        this.setState({
            createGearToggle: false
        })
    }

    newFeature = async () => {
        let { id, feature_name, feature_desc, feature_uses } = this.state
        await axios.post('/api/feature', { id, feature_name, feature_desc, feature_uses })
        this.loadAllThings()
        this.setState({
            createFeature: false
        })
    }

    newSpell = async () => {
        let { id, spell_name, spell_desc, spell_uses, spell_level } = this.state
        await axios.post('/api/newspell', { id, spell_name, spell_desc, spell_uses, spell_level })
        this.loadAllThings()
        this.setState({
            createSpells: false
        })
    }

    savePerception = async () => {
        let { char_name, passive_perception } = this.state
        await axios.post('/api/perception', { char_name, passive_perception })
        this.setState({ perceptionToggle: false })
    }


    //----end of saving to DB -----

    render() {

        console.log(this.state.languages)
        let { char, languages, proficiencies, attacks, dungeoneerPack, outlanderGear, features } = this.state

        return (
            <div className="single_char_container">
                <button className='button_char' onClick={() => this.props.history.push('/home')}>change character</button>
                <div className="name_info_container">
                    <div className="name_container">CHARACTER NAME: {char.char_name}</div>
                    {/* this is the first conditional render, based on the state condition of edit */}
                    {(this.state.edit) ?
                        <div className="char_info_container" >
                            <p className="class_level">Class & Level: <input name='char_class' value={this.state.char_class} onChange={this.handleChange} />
                                <input name='char_level' value={this.state.char_level} onChange={this.handleChange} /> </p>
                            <p className="background_info">Background: <input name='background' value={this.state.background} onChange={this.handleChange} /></p>
                            <p className="player_name">Player Name: <input name='player_name' value={this.state.player_name} onChange={this.handleChange} /></p>
                            <p className="race">Race: <input name='race' value={this.state.race} onChange={this.handleChange} /></p>
                            <p className="alignment">Alignment:<input name='alignment' value={this.state.alignment} onChange={this.handleChange} /> </p>
                            <p className="experience">Experience Poins:<input name='experience_points' value={this.state.experience_points} onChange={this.handleChange} /> </p>
                            <button className='button_char' onClick={() => this.charInfoSave(char.char_name)}>save</button>
                            <button className='button_char' name="edit" value={this.state.edit} onClick={this.armorToggle}>cancel</button>
                        </div>
                        :
                        <>
                            <div className="char_info_container">
                                <p id="class_level">Class & Level: {this.state.char_class} {this.state.char_level} </p>
                                <p className="background_info">Background: {this.state.background}</p>
                                <p className="player_name">Player Name: {this.state.player_name}</p>
                                <p className="race">Race: {this.state.race}</p>
                                <p className="alignment">Alignment: {this.state.alignment}</p>
                                <p className="experience">Experience Poins: {this.state.experience_points}</p>
                            </div>
                            <button className='button_char' name="edit" value={this.state.edit} onClick={this.armorToggle}>edit</button>
                        </>
                    }
                </div>
                <section className="att_skills_armor_container">
                    {/* this is the attributes conditional render */}
                    {(this.state.attToggle) ?
                        <div className="att_container" >
                            <div>
                                <p name='str'>Strength: {this.state.str}
                                    <button className='button_char' value='this.state.str' name="str" onClick={e => this.strAdd(e)}>+</button>
                                    <button className='button_char' value='this.state.str' name="str" onClick={this.strSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.str)} </p>

                                <p>Dexterity: {this.state.dex}
                                    <button className='button_char' value='this.state.dex' name="dex" onClick={e => this.strAdd(e)}>+</button>
                                    <button className='button_char' value='this.state.dex' name="dex" onClick={this.strSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.dex)}</p>

                                <p>Constitution: {this.state.con}
                                    <button className='button_char' value='this.state.con' name="con" onClick={e => this.strAdd(e)}>+</button>
                                    <button className='button_char' value='this.state.con' name="con" onClick={this.strSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.con)}</p>

                                <p>Inteligence: {this.state.intel}
                                    <button className='button_char' value='this.state.intel' name="intel" onClick={e => this.strAdd(e)}>+</button>
                                    <button className='button_char' value='this.state.intel' name="intel" onClick={this.strSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.intel)}</p>

                                <p>Wisdon: {this.state.wis}
                                    <button className='button_char' value='this.state.wis' name="wis" onClick={e => this.strAdd(e)}>+</button>
                                    <button className='button_char' value='this.state.wis' name="wis" onClick={this.strSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.wis)}</p>

                                <p>Charisma: {this.state.cha}
                                    <button className='button_char' value='this.state.cha' name="cha" onClick={e => this.strAdd(e)}>+</button>
                                    <button className='button_char' value='this.state.cha' name="cha" onClick={this.strSub}>-</button></p>
                                <p>bonus{this.bonusCalc(this.state.cha)}</p>
                            <button className='button_char' onClick={this.saveAtt}>save</button>
                            <button className='button_char' name="attToggle" value={this.state.attToggle} onClick={this.armorToggle}>cancel</button>
                            </div>
                        </div>
                        :
                        <div className="att_container">
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
                            <button className='button_char' name="attToggle" value={this.state.attToggle} onClick={this.armorToggle}>edit</button>
                            </div>
                        </div>
                    }
                    {/* this is the conditional render for skills section */}
                    {(this.state.skillsToggle) ?

                        <div className="skill_section_container">
                            <div>
                                <p>Insipiration: <input name='inspiration' value={this.state.inspiration} onChange={this.handleChange} /></p>
                                <p>Proficiency Bonus: <input name='proficiency_bonus' value={this.state.proficiency_bonus} onChange={this.handleChange} /></p>
                            </div>
                            <div>Saving throws:
                                <p>Strength: <input name='sav_str' value={this.state.sav_str} onChange={this.handleChange} /></p>
                                <p>Dexterity: <input name='sav_dex' value={this.state.sav_dex} onChange={this.handleChange} /></p>
                                <p>Constitution: <input name='sav_con' value={this.state.sav_con} onChange={this.handleChange} /></p>
                                <p>Inteligence: <input name='sav_int' value={this.state.sav_int} onChange={this.handleChange} /></p>
                                <p>Wisdon: <input name='sav_wis' value={this.state.sav_wis} onChange={this.handleChange} /></p>
                                <p>Charisma: <input name='sav_cha' value={this.state.sav_cha} onChange={this.handleChange} /></p>
                            </div>
                            <div>Skills:
                                <p><input name='acrobatics' value={this.state.acrobatics} onChange={this.handleChange} /> Acrobatics (Dex)</p>
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
                                <p>Insipiration: {this.state.inspiration}</p>
                                <p>Proficiency Bonus: {this.state.proficiency_bonus}</p>
                            </div>
                            <div>Saving throws:
                                <p>Strength: {this.state.sav_str}</p>
                                <p>Dexterity: {this.state.sav_dex}</p>
                                <p>Constitution: {this.state.sav_con}</p>
                                <p>Inteligence: {this.state.sav_int}</p>
                                <p>Wisdon: {this.state.sav_wis}</p>
                                <p>Charisma: {this.state.sav_cha}</p>
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
                    <div>
                        {/* this is the conditional render for armor class up to attacks (not including) */}
                        {(this.state.armorToggle) ?
                            <div className='armor_container'>
                                <div>
                                    <p>Armor Class <input name='armor_class' value={this.state.armor_class} onChange={this.handleChange} /></p>
                                    <p>Initiative <input name='initiative' value={this.state.initiative} onChange={this.handleChange} /></p>
                                    <p>Speed <input name='speed' value={this.state.speed} onChange={this.handleChange} /></p>
                                </div>
                                <p>Hit Point Maximun  <input name='hit_point_max' value={this.state.hit_point_max} onChange={this.handleChange} /></p>
                                <p>Current Hit Points  <input name='current_hit_points' value={this.state.current_hit_points} onChange={this.handleChange} /></p>
                                <p>Temporary Hit Points  <input name='temporary_hit_points' value={this.state.temporary_hit_points} onChange={this.handleChange} /></p>
                                <div>
                                    <p>Hit Dice  <input name='hit_dice' value={this.state.hit_dice} onChange={this.handleChange} /></p>
                                    <div>
                                        <p>Successes
                                            <input type='checkbox' name='success_1' value={this.state.success_1}
                                                onClick={e => this.checkboxToggler(e)} />
                                            <input type='checkbox' name='success_2' value={this.state.success_2}
                                                onClick={e => this.checkboxToggler(e)} />
                                            <input type='checkbox' name='success_3' value={this.state.success_3}
                                                onClick={e => this.checkboxToggler(e)} />
                                        </p>
                                        <p>Failures
                                            <input type='checkbox' name='failures_1' value={this.state.failures_1}
                                                onClick={e => this.checkboxToggler(e)} />
                                            <input type='checkbox' name='failures_2' value={this.state.failures_2}
                                                onClick={e => this.checkboxToggler(e)} />
                                            <input type='checkbox' name='failures_3' value={this.state.failures_3}
                                                onClick={e => this.checkboxToggler(e)} />
                                        </p>
                                    </div>
                                </div>
                                <button className='button_char' onClick={this.saveArmor}>save</button>
                                <button className='button_char' name="armorToggle" value={this.state.armorToggle} onClick={this.armorToggle}>cancel</button>
                            </div>
                            :
                            <div className='armor_container'>
                                <div>
                                    <p>Armor Class {this.state.armor_class}</p>
                                    <p>Initiative {this.state.initiative}</p>
                                    <p>Speed {this.state.speed}</p>
                                </div>
                                <p>Hit Point Maximun  {this.state.current_hit_point_max}</p>
                                <p>Current Hit Points  {this.state.current_hit_points}</p>
                                <p>Temporary Hit Points  {this.state.temporary_hit_points}</p>
                                <div>
                                    <p>Hit Dice  {this.state.hit_dice}</p>
                                    <div>
                                        <p>Successes {this.state.sucess_1} {this.state.sucess_2} {this.state.sucess_3}</p>
                                        <p>Failures {this.state.failures_1} {this.state.failures_2} {this.state.failures_3}</p>
                                    </div>
                                </div>
                                <button className='button_char' name="armorToggle" value={this.state.armorToggle} onClick={this.armorToggle}>edit</button>
                            </div>
                        }
                        {/* this is the toggle for the attack section, there is a double toggle... one to edit and inside that one to create */}
                        {(this.state.attackToggle) ?
                            <div className="attack_container">
                                <button className='button_char' name="createAttToggle" value={this.state.createAttToggle} onClick={this.armorToggle}>create</button>
                                <button className='button_char' name="attackToggle" value={this.state.attackToggle}
                                    onClick={() => this.setState({ attackToggle: false, createAttToggle: false })}>cancel</button>
                                <p>Attacks & Spellcasting</p>
                                <p>name   bonus   damage   type</p>
                                {(this.state.createAttToggle) ?
                                    <div>
                                    name: <input name='atk_name' onChange={this.handleChange} />
                                    atk bonus: <input name='atk_bonus' onChange={this.handleChange} />
                                    atk damage: <input name='atk_damage' onChange={this.handleChange} />
                                    atk type: <input name='atk_type' onChange={this.handleChange} />
                                    <button className='button_char' onClick={this.newAttack}>save new</button>
                                    </div>
                                    
                                    :
                                    <div>
                                        {attacks.map((atk) => {
                                            return <div className="ind_att_container" key={atk.name} name={atk.name}>
                                                <button name={atk.name} onClick={() => this.deleteThis(atk)}>X</button>
                                                <p className='atk_name'>{atk.name}</p>
                                                <p className='atk_bonus'>{atk.atk_bonus}</p>
                                                <p className='atk_damage'>{atk.damage}</p>
                                                <p className='atk_type'>{atk.type}</p>
                                            </div>
                                        })}
                                    </div>
                                }
                                </div>
                                :
                                <div className="attack_container">
                                <button className='button_char' name="attackToggle" value={this.state.attackToggle} onClick={this.armorToggle}>edit</button>

                                <p>Attacks & Spellcasting</p>
                                {attacks.map((atk) => {
                                    return <div className="ind_att_container" key={atk.name}>
                                        <p>{atk.name}</p>
                                        <p>{atk.atk_bonus}</p>
                                        <p>{atk.damage}</p>
                                        <p>{atk.type}</p>
                                    </div>
                                })}
                            </div>
                        }
                    </div>
                </section>

                <div>
                    {/* passive perception toggle just like attributes */}
                    {(this.state.perceptionToggle) ?
                        <div className="perception">
                            <button className='button_char' onClick={this.savePerception}>save</button>
                            <button className='button_char' name="perceptionToggle" value={this.state.perceptionToggle} onClick={this.armorToggle}>cancel</button>
                            <div>{this.state.passive_perception} Passive Wisdom (Perception)
                                <button className='button_char' value='this.state.passive_perception' name="passive_perception"
                                    onClick={e => this.strAdd(e)}>+</button>
                                <button className='button_char' value='this.state.passive_perception' name="passive_perception"
                                    onClick={this.strSub}>-</button>
                            </div>
                        </div>
                        :
                        <div className="perception">
                            <button className='button_char' name="perceptionToggle" value={this.state.perceptionToggle} onClick={this.armorToggle}>edit</button>
                            {this.state.passive_perception} Passive Wisdom (Perception)
                        </div>
                    }
                    <div className="prof_container">
                    {(this.state.profToggle ?
                        <div >
                            <button className='button_char' name="createProfToggle" value={this.state.createProfToggle} onClick={this.armorToggle}>create</button>
                            <button  className='button_char'name="profToggle" value={this.state.profToggle}
                                onClick={() => this.setState({ profToggle: false, createProfToggle: false })}>cancel</button>
                            <div>Other Proficiencies & Languages:
                                {(this.state.createProfToggle ? 
                                <div>
                                    new Proficiency: <input name='prof_name' onChange={this.handleChange} />
                                    <button className='button_char' onClick={this.newProf}>save new</button>
                                    new Language: <input name='lang_name' onChange={this.handleChange} />
                                    <button className='button_char' onClick={this.newLang}>save new</button>
                                </div>

                                :

                                <div>Languages:
                                    
                                </div>
                                )}
                                <div>
                                    {languages.map((lag) => {
                                return (
                                    <div>
                                        <button className='button_char' name={lag.name} onClick={() => this.deleteLag(lag)}>X</button>
                                        <p key={lag.name}>{lag.name}</p>
                                    </div>
                                )
                            })}
                                </div>
                                <div >Proficiencies:
                                    {proficiencies.map((prof) => {
                                    return (
                                        <div>
                                            
                                            <p key={prof.name}>{prof.name} 
                                                <button className='button_char' name={prof.name} onClick={() => this.deleteProf(prof)}>X</button>
                                            </p>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                        :
                        <div >
                            <button className='button_char' name="profToggle" value={this.state.profToggle} onClick={this.armorToggle} >edit</button>
                            <div>Other Proficiencies & Languages:
                                <div>Languages:
                                {languages.map((lag) => {
                                return <p key={lag.name}>{lag.name}</p>
                            })}
                                </div>
                                <div>Proficiencies:
                                {proficiencies.map((prof) => {
                                    return <div key={prof.name}>{prof.name}</div>
                                })}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                </div>
                

                <div className='equip'>
                    Equipament
                    {(this.state.gearToggle) ? 
                    <div >
                        <button className='button_char' name="createGearToggle" value={this.state.createGearToggle} onClick={this.armorToggle}>create</button>
                        <button className='button_char' name="gearToggle" value={this.state.gearToggle}
                            onClick={() => this.setState({ gearToggle: false, createGearToggle: false })}>cancel</button>
                        {(this.state.createGearToggle)?
                        <div>
                            new Dungeoneer item: <input name='dung_name' onChange={this.handleChange} />
                            quantity: <input name='dung_qty' onChange={this.handleChange} />
                            <button className='button_char' onClick={this.newDung}>save new</button>
                            new Outlander item: <input name='out_name' onChange={this.handleChange} />
                            quantity: <input name='out_qty' onChange={this.handleChange} />
                            <button className='button_char' onClick={this.newOut}>save new</button>
                        </div>

                        :
                        <div >
                            <p>Dungeoneer Pack:</p>
                            {dungeoneerPack.map((pack) => {
                            return <div key={pack.name}>
                            <p>{pack.name}</p>
                            <p>{pack.quantity}</p>
                            <button className='button_char' name={pack.name} onClick={() => this.deletePack(pack)}>X</button>
                            </div>
                            })}

                            <p>Outlander Gear:</p>
                            {outlanderGear.map((gear) => {
                            return <div key={gear.name}>
                            <p>{gear.name}</p>
                            <p>{gear.quantity}</p>
                            <button className='button_char' name={gear.name} onClick={() => this.deleteGear(gear)}>X</button>
                            </div>
                            })}

                        </div>
                        }
                        
                        
                    </div>
                    :
                    <div >
                    <button className='button_char' name="gearToggle" value={this.state.gearToggle} onClick={this.armorToggle} >edit</button>
                    {dungeoneerPack.map((pack) => {
                        return <div key={pack.name}>
                            <p>{pack.name}</p>
                            <p>{pack.quantity}</p>
                        </div>
                    })}
                    {outlanderGear.map((gear) => {
                        return <div key={gear.name}>
                            <p>{gear.name}</p>
                            <p>{gear.quantity}</p>
                        </div>
                    })}
                    </div>
                    }
                    

                    
                </div>
                <div className="trait_container">
                    {(this.state.traits) ? 
                    <div>
                      Personality Trait:  <input name='personality_trait' value={this.state.personality_trait} onChange={this.handleChange} />
                      Ideal:  <input name='ideal' value={this.state.ideal} onChange={this.handleChange} />
                      Bond:  <input name='bond' value={this.state.bond} onChange={this.handleChange} />
                      Flaw:  <input name='flaw' value={this.state.flaw} onChange={this.handleChange} />
                        <button onClick={() => this.traitSave(char.char_name)}>save</button>
                        <button className='button_char' name="traits" value={this.state.traits} onClick={this.armorToggle}>cancel</button>
                    </div>
                    :
                    <div>
                        <button className='button_char' name="traits" value={this.state.traits} onClick={this.armorToggle}>edit</button>
                        <p>Personality Trait  {this.state.personality_trait}</p>
                        <p>Ideal {this.state.ideal}</p>
                        <p>Bond {this.state.bond}</p>
                        <p>Flaw  {this.state.flaw}</p>
                        
                    </div>
                    }
                    
                    <div>
                        Features & Traits
                        {(this.state.featuresToggle) ? 
                        <div>
                            <button className='button_char' name="createFeature" value={this.state.createFeature} onClick={this.armorToggle}>create</button>
                            <button className='button_char' name="featuresToggle" value={this.state.featuresToggle}
                            onClick={() => this.setState({ featuresToggle: false, createFeature: false })}>cancel</button>
                            {(this.state.createFeature)?
                                <div>
                                    new Feature: <input name='feature_name' onChange={this.handleChange} />
                                    description: <input name='feature_desc' onChange={this.handleChange} />
                                    uses: <input name='feature_uses' onChange={this.handleChange} />
                                    <button className='button_char' onClick={this.newFeature}>save new</button>
                                </div>

                                :
                                <div>
                                    {features.map((feature) => {
                                    return <div key={feature.name}>
                                    <p>{feature.name}</p>
                                    <p>{feature.description}</p>
                                    <p>{feature.uses}</p>
                                    <button className='button_char' name={feature.name} onClick={() => this.deleteFeature(feature)}>X</button>
                                    </div>
                                    })}
                                </div>
                            }
                                               
                        </div>

                        :

                        <div>
                        <button className='button_char' name="featuresToggle" value={this.state.featuresToggle} onClick={this.armorToggle} >edit</button>
                        {features.map((feature) => {
                            return <div key={feature.name}>
                                <p>{feature.name}</p>
                                <p>{feature.description}</p>
                                <p>{feature.uses}</p>
                            </div>
                        })}
                        </div>
                        }
                        
                    </div>
                
                </div>
                <div className='spells_container'> SPELLS:
                    {(this.state.spellsToggle) ? 
                    <>
                        <button className='button_char' name="createSpells" value={this.state.createSpells} onClick={this.armorToggle}>create</button>
                        <button className='button_char' name="spellsToggle" value={this.state.spellsToggle}
                            onClick={() => this.setState({ spellsToggle: false, createSpells: false })}>cancel</button>
                        
                            {(this.state.createSpells) ?
                        <div>
                            new Spell: <input name='spell_name' onChange={this.handleChange} />
                            description: <input name='spell_desc' onChange={this.handleChange} />
                            uses: <input name='spell_uses' onChange={this.handleChange} />
                            level: <input name='spell_level' onChange={this.handleChange} />
                            <button className='button_char' onClick={this.newSpell}>save new</button>
                        </div>
                    :
                        <div>
                            {this.state.spells.map((spell) => {
                                return <div key={spell.name}>
                                <p>{spell.name}</p>
                                <p>{spell.description}</p>
                                <p>{spell.cost}</p>
                                <p>{spell.level}</p>
                                <button className='button_char' name={spell.name} onClick={() => this.deleteSpell(spell)}>X</button>
                                </div>
                                })}
                                </div>
                            } 
                         
                    
                    </>
                    :
                    <div>
                        <button className='button_char' name="spellsToggle" value={this.state.spellsToggle} onClick={this.armorToggle} >edit</button>
                        {this.state.spells.map((spell) => {
                            return <div key={spell.name}>
                                <p>{spell.name}</p>
                                <p>{spell.description}</p>
                                <p>{spell.cost}</p>
                                <p>{spell.level}</p>
                            </div>
                        })}
                        </div>
                    }
                
                   

                </div>
                <FooterNav char_name = {this.state.char_name} />
            </div>
        )
    }
}

