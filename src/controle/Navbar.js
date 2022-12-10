import { Component } from "react";
import React from "react";

class Navbar extends Component{

    render(){
        return(
            <>
            <div className="Navbar header ui-container">
                <div className="ui large top fixed hidden menu">
                    <div className="ui container">
                        <a className="active item" href="http://localhost:3000/">Urgence Québec</a>
                        <a className="item" href="https://reactjs.org">React</a>
                        <a className="item" href="https://crosemont.omnivox.ca/intr/">Omnivox</a>
                        <a className="item" href="https://developer.mozilla.org/fr/docs/Web">MDN</a>
                        <a className="item" href="https://www.jobillico.com/recherche-emploi?skwd=react&scty=&icty=0&ipc=0&sil=&sjdpl=&sdl=&imc1=0&imc2=0&flat=0&flng=0&mfil=40&ipg=1&clr=1">Carrière en React</a>
                        <div className="right menu">
                            <div className="ui image">
                                <img className="ui tiny image" src="/images/ambulance.png" alt="Marche pas"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>

        )
    }

}
export default Navbar