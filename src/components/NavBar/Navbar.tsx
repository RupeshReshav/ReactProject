import React, { Component } from 'react'
import  './Navbar.css'

export default class Navbar extends Component {
   public render():JSX.Element {
        return (
            <div id="banner" className="row">
                <div className="titleLogo">
                    Expense@Microsoft
                </div>
                <div className="sideLogo">
                    Hello..
                </div>
            </div>
        )
    }
}
