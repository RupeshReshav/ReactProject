import React, { Component } from 'react'
import axios from 'axios'


export default class PersonList extends React.Component {
    state={
        persons: []
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res:any)=>{
            const persons =res.data;
            console.log(persons)
            this.setState({persons:persons})
        })
    }
    render() {
        return (
            <ul>
                {this.state.persons.map((person:any)=>
                    <li>{person.name}</li>)}
            </ul>
        )
    }
}
interface Istate{
    persons: string[]
}