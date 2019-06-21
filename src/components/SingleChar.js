import React, { Component } from 'react';
import axios from 'axios'

export default class SingleChar extends Component {
    state = {
        char: []
    }
    componentDidMount() {
        let char_name = this.props.match.params.char_name
        console.log(char_name)
        axios.post(`/api/character/`, { char_name }).then(res => {
            this.setState({
                char: res.data
            })
        })

    }

    render() {

        console.log(this.state.char)


        return (
            <>
                {this.state.char.char_name}
            </>
        )
    }
}

