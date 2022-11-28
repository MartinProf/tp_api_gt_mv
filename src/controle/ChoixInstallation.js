import { Component } from "react";
import { Select } from "semantic-ui-react";
import { regionAdministrative, nomEtablissement, nomInstallation } from "./tableau";
import './ChoixInstallation.css';

class ChoixInstallation extends Component{

    state ={ region: "", nomEtab: "", nomInstall: ""}

    onRegionChange = (e,data) => { 
        this.setState({ region: data.value })

    }

    onNameEtabChange = (e,data) => {
        this.setState({nomEtab: data.value })
    }

    onInstaChange = (e,data) => {
        this.setState({nomInstall: data.value })
    }

    render(){

        console.log(this.state)

        return(
            
            <>
            <div className="choixInstallation ui container">
                <Select placeholder="Région administrative" options={regionAdministrative} value={this.state.region}  onChange={this.onRegionChange}/>
                <Select placeholder="Nom de l'établissement" options={nomEtablissement.filter(a => a.code === this.state.region)} value={this.state.nomEtab} onChange={this.onNameEtabChange}/>
                <Select placeholder="Nom de l'Installation" options={nomInstallation.filter(a => a.code === this.state.nomEtab)} value={this.state.nomInstall} onChange={this.onInstaChange}/>
            </div>
            </>

        )
    }
}

export default ChoixInstallation