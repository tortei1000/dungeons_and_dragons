import React, { Component } from 'react';
import axios from 'axios'

export default class SingleChar extends Component {
    state = {
        char: [],
        languages: [],
        proficiencies: [],
        attacks: [],
        dungeoneerPack: [],
        outlanderGear: [],
        features: [],

    }
    componentDidMount() {
        let char_name = this.props.match.params.char_name
        console.log(char_name)
        axios.post(`/api/character/`, { char_name }).then(res => {
            this.setState({
                char: res.data
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

    render() {

        console.log(this.state.languages)
        let { char, languages, proficiencies, attacks, dungeoneerPack, outlanderGear, features } = this.state

        return (
            <>
                <p>CHARACTER NAME: {char.char_name}</p>
                <div>
                    <p>Class & Level: {char.char_class} {char.char_level}</p>
                    <p>Background: {char.background}</p>
                    <p>Player Name: {char.player_name}</p>
                    <p>Race: {char.race}</p>
                    <p>Alignment: {char.alignment}</p>
                    <p>Experience Poins: {char.experience_points}</p>
                </div>
                <div>
                    <div>
                        <p>Strength: {char.str}</p>
                        <p>Dexterity: {char.dex}</p>
                        <p>Constitution: {char.con}</p>
                        <p>Inteligence: {char.intel}</p>
                        <p>Wisdon: {char.wis}</p>
                        <p>Charisma: {char.cha}</p>
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

