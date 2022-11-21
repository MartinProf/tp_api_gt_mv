import { Component } from "react";
import { Select } from "semantic-ui-react";

class RegionAdministrative extends Component{

    state ={ region: "", nomEtab:"", nomInsta:""}

    onRegionChange = (e,data) => { this.setState({region:data.value})}
    onNameEtabChange = (e,data) => {this.setState({nomEtab:data.value})}
    onInstaChange = (e,data) => {this.setState({nomInsta:data.value})}

    render(){

        const regionAdministrative = [
            {value: "RSS01", key: "RSS01", "text": "Bas-Saint-Laurent"},
            {value: "RSS02", key: "RSS02", "text": "Saguenay - Lac-Saint-Jean"},
            {value: "RSS03", key: "RSS03", "text": "Capitale-Nationale"},
            {value: "RSS04", key: "RSS04", "text": "Mauricie et Centre-du-Québec"},
            {value: "RSS05", key: "RSS05", "text": "Estrie"},
            {value: "RSS06", key: "RSS06", "text": "Montréal"},
            {value: "RSS07", key: "RSS07", "text": "Outaouais"},
            {value: "RSS08", key: "RSS08", "text": "Abitibi-Témiscamingue"},
            {value: "RSS09", key: "RSS09", "text": "Côte-Nord"},
            {value: "RSS10", key: "RSS10", "text": "Nord-du-Québec"},
            {value: "RSS11", key: "RSS11", "text": "Gaspésie - Îles-de-la-Madeleine"},
            {value: "RSS12", key: "RSS12", "text": "Chaudière-Appalaches"},
            {value: "RSS13", key: "RSS13", "text": "Laval"},
            {value: "RSS14", key: "RSS14", "text": "Lanaudière"},
            {value: "RSS15", key: "RSS15", "text": "Laurentides"},
            {value: "RSS16", key: "RSS16", "text": "Montérégie"}
        ]

        const nomEtablissement = [
            {value: "1", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "2", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "3", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "4", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "5", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "6", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "7", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "8", key: "RSS01", "text": "CISSS du Bas-Saint-Laurent"},
            {value: "9", key: "RSS02", "text": "CIUSSS du Saguenay - Lac-Saint-Jean"},
            {value: "10", key: "RSS02", "text": "CIUSSS du Saguenay - Lac-Saint-Jean"},
            {value: "11", key: "RSS02", "text": "CIUSSS du Saguenay - Lac-Saint-Jean"},
            {value: "12", key: "RSS02", "text": "CIUSSS du Saguenay - Lac-Saint-Jean"},
            {value: "13", key: "RSS02", "text": "CIUSSS du Saguenay - Lac-Saint-Jean"},
            {value: "14", key: "RSS02", "text": "CIUSSS du Saguenay - Lac-Saint-Jean"},
            {value: "15", key: "RSS03", "text": "CIUSSS de la Capitale-Nationale"},
            {value: "16", key: "RSS03", "text": "CIUSSS de la Capitale-Nationale"},
            {value: "17", key: "RSS03", "text": "CIUSSS de la Capitale-Nationale"},
            {value: "18", key: "RSS03", "text": "CIUSSS de la Capitale-Nationale"},
            {value: "19", key: "RSS03", "text": "CIUSSS de la Capitale-Nationale"},
            {value: "20", key: "RSS03", "text": "CIUSSS de la Capitale-Nationale"},
            {value: "21", key: "RSS03", "text": "CHU"},
            {value: "22", key: "RSS03", "text": "CHU"},
            {value: "23", key: "RSS03", "text": "CHU"},
            {value: "24", key: "RSS03", "text": "CHU"},
            {value: "25", key: "RSS03", "text": "CHU"},
            {value: "26", key: "RSS03", "text": "Institut universitaire de cardiologie et de pneumologie de Québec"},
            {value: "27", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "28", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "29", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "30", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "31", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "32", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "33", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "34", key: "RSS04", "text": "CIUSSS de la Mauricie et du Centre-du-Québec"},
            {value: "35", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "36", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "37", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "38", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "39", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "40", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "41", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "42", key: "RSS05", "text": "CIUSSS de l'Estrie - Centre hospitalier de Sherbrooke"},
            {value: "43", key: "RSS05", "text": "CIUSSS de l'Ouest-de-l'Île-de-Montréal"},
            {value: "44", key: "RSS05", "text": "CIUSSS de l'Ouest-de-l'Île-de-Montréal"},
            {value: "45", key: "RSS05", "text": "CIUSSS de l'Ouest-de-l'Île-de-Montréal"},
            {value: "46", key: "RSS05", "text": "CIUSSS de l'Ouest-de-l'Île-de-Montréal"},
            {value: "47", key: "RSS05", "text": "CIUSSS du Centre-Ouest-de-l'Île-de-Montréal"},
            {value: "48", key: "RSS05", "text": "CIUSSS du Centre-Sud-de-l'Île-de-Montréal"},
            {value: "49", key: "RSS05", "text": "CIUSSS du Centre-Sud-de-l'Île-de-Montréal"},
            {value: "50", key: "RSS05", "text": "CIUSSS du Nord-de-l'Île-de-Montréal"},
            {value: "51", key: "RSS05", "text": "CIUSSS du Nord-de-l'Île-de-Montréal"},
            {value: "52", key: "RSS05", "text": "CIUSSS du Nord-de-l'Île-de-Montréal"},
            {value: "53", key: "RSS05", "text": "CIUSSS du Nord-de-l'Île-de-Montréal"},
            {value: "54", key: "RSS05", "text": "CIUSSS de l'Est-de-l'Île-de-Montréal"},
            {value: "55", key: "RSS05", "text": "CIUSSS de l'Est-de-l'Île-de-Montréal"},
            {value: "56", key: "RSS05", "text": "CIUSSS de l'Est-de-l'Île-de-Montréal"},
            {value: "57", key: "RSS05", "text": "CHUM"},
            {value: "58", key: "RSS05", "text": "CUSM"},
            {value: "59", key: "RSS05", "text": "CUSM"},
            {value: "60", key: "RSS05", "text": "CUSM"},
            {value: "61", key: "RSS05", "text": "CUSM"},
            {value: "62", key: "RSS05", "text": "Institut de Cardiologie de Montréal"},
            {value: "63", key: "RSS05", "text": "CHU Sainte-Justine"},
            {value: "64", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "65", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "66", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "67", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "68", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "69", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "70", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "71", key: "RSS07", "text": "CISSS de l'Outaouais"},
            {value: "72", key: "RSS08", "text": "CISSS de l'Abitibi-Témiscamingue"},
            {value: "73", key: "RSS08", "text": "CISSS de l'Abitibi-Témiscamingue"},
            {value: "74", key: "RSS08", "text": "CISSS de l'Abitibi-Témiscamingue"},
            {value: "75", key: "RSS08", "text": "CISSS de l'Abitibi-Témiscamingue"},
            {value: "76", key: "RSS08", "text": "CISSS de l'Abitibi-Témiscamingue"},
            {value: "77", key: "RSS08", "text": "CISSS de l'Abitibi-Témiscamingue"},
            {value: "78", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "79", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "80", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "81", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "82", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "83", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "84", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "85", key: "RSS09", "text": "CISSS de la Côte-Nord"},
            {value: "86", key: "RSS11", "text": "CISSS de la Gaspésie"},
            {value: "87", key: "RSS11", "text": "CISSS de la Gaspésie"},
            {value: "88", key: "RSS11", "text": "CISSS de la Gaspésie"},
            {value: "89", key: "RSS11", "text": "CISSS de la Gaspésie"},
            {value: "90", key: "RSS11", "text": "CISSS de la Gaspésie"},
            {value: "91", key: "RSS11", "text": "CISSS de la Gaspésie"},
            {value: "92", key: "RSS11", "text": "CISSS de la Gaspésie"},
            {value: "93", key: "RSS11", "text": "CISSS des Îles"},
            {value: "94", key: "RSS12", "text": "CISSS de Chaudière-Appalaches"},
            {value: "95", key: "RSS12", "text": "CISSS de Chaudière-Appalaches"},
            {value: "96", key: "RSS12", "text": "CISSS de Chaudière-Appalaches"},
            {value: "97", key: "RSS12", "text": "CISSS de Chaudière-Appalaches"},
            {value: "98", key: "RSS12", "text": "CISSS de Chaudière-Appalaches"},
            {value: "99", key: "RSS13", "text": "CISSS de Laval"},
            {value: "100", key: "RSS14", "text": "CISSS de Lanaudière"},
            {value: "101", key: "RSS14", "text": "CISSS de Lanaudière"},
            {value: "102", key: "RSS15", "text": "CISSS des Laurentides"},
            {value: "103", key: "RSS15", "text": "CISSS des Laurentides"},
            {value: "104", key: "RSS15", "text": "CISSS des Laurentides"},
            {value: "105", key: "RSS15", "text": "CISSS des Laurentides"},
            {value: "106", key: "RSS15", "text": "CISSS des Laurentides"},
            {value: "107", key: "RSS15", "text": "CISSS des Laurentides"},
            {value: "108", key: "RSS16", "text": "CISSS de la Montérégie-Centre"},
            {value: "109", key: "RSS16", "text": "CISSS de la Montérégie-Centre"},
            {value: "110", key: "RSS16", "text": "CISSS de la Montérégie-Est"},
            {value: "111", key: "RSS16", "text": "CISSS de la Montérégie-Est"},
            {value: "112", key: "RSS16", "text": "CISSS de la Montérégie-Est"},
            {value: "113", key: "RSS16", "text": "CISSS de la Montérégie-Ouest"},
            {value: "114", key: "RSS16", "text": "CISSS de la Montérégie-Ouest"},
            {value: "115", key: "RSS16", "text": "CISSS de la Montérégie-Ouest"}    
        ]

        const nomInstallation = [
            {value: "1", key: "1", "text":"Hôpital de Matane"},
            {value: "2", key: "2", "text":"Centre hospitalier d'Amqui"},
            {value: "3", key: "3", "text":"Hôpital régional de Rimouski"},
            {value: "4", key: "4", "text":"Centre hospitalier Trois-Pistoles"},
            {value: "5", key: "5", "text":"Centre hospitalier régional du Grand-Portage"},
            {value: "6", key: "6", "text":"Hôpital de Notre-Dame-du-Lac"},
            {value: "7", key: "7", "text":"CLSC de Pohenegamook"},
            {value: "8", key: "8", "text":"Hôpital Notre-Dame-de-Fatima"},
            {value: "9", key: "9", "text":"Hôpital de La Baie"},
            {value: "10", key: "10", "text":"Hôpital de Chicoutimi"},
            {value: "11", key: "11", "text":"Hôpital et Centre de réadaptation de Jonquière"},
            {value: "12", key: "12", "text":"Hôpital d'Alma"},
            {value: "13", key: "13", "text":"Hôpital, CLSC et Centre d'hébergement de Roberval"},
            {value: "14", key: "14", "text":"Hôpital de Dolbeau-Mistassini"},
            {value: "15", key: "15", "text":"Hôpital régional de Portneuf et CLSC Saint-Raymond"},
            {value: "16", key: "16", "text":"CLSC Saint-Marc-des-Carrières"},
            {value: "17", key: "17", "text":"Hôpital Chauveau"},
            {value: "18", key: "18", "text":"Hôpital de Sainte-Anne-de-Beaupré"},
            {value: "19", key: "19", "text":"Hôpital de Baie-Saint-Paul"},
            {value: "20", key: "20", "text":"Hôpital de La Malbaie"},
            {value: "21", key: "21", "text":"Le Centre hospitalier de l'Université Laval"},
            {value: "22", key: "22", "text":"Hôpital Saint-François-d'Assise"},
            {value: "23", key: "23", "text":"L'Hôtel-Dieu de Québec"},
            {value: "24", key: "24", "text":"Hôpital de l'Enfant-Jésus"},
            {value: "25", key: "25", "text":"Hôpital du Saint-Sacrement"},
            {value: "26", key: "26", "text":"Institut universitaire de cardiologie et de pneumologie de Québec"},
            {value: "27", key: "27", "text":"CSSS du Haut-Saint-Maurice"},
            {value: "28", key: "28", "text":"Hôpital du Centre-de-la-Mauricie"},
            {value: "29", key: "29", "text":"Résidence Avellin-Dalcourt"},
            {value: "30", key: "30", "text":"Centre hospitalier régional de Trois-Rivières"},
            {value: "31", key: "31", "text":"Hôtel-Dieu d'Arthabaska"},
            {value: "32", key: "32", "text":"Hôpital Sainte-Croix"},
            {value: "33", key: "33", "text":"CLSC de Fortierville"},
            {value: "34", key: "34", "text":"Centre multiservices de santé et services sociaux Christ-Roi"},
            {value: "35", key: "35", "text":"Hôpital Fleurimont"},
            {value: "36", key: "36", "text":"Hôtel-Dieu"},
            {value: "37", key: "37", "text":"CSSS de Memphrémagog"},
            {value: "38", key: "38", "text":"CSSS de la MRC-de Coaticook"},
            {value: "39", key: "39", "text":"CSSS du Granit"},
            {value: "40", key: "40", "text":"Hôpital, CLSC et Centre d'hébergement d'Asbestos"},
            {value: "41", key: "41", "text":"Hôpital Brome-Missisquoi-Perkins"},
            {value: "42", key: "42", "text":"Centre hospitalier de Granby"},
            {value: "43", key: "43", "text":"Centre hospitalier de St. Mary"},
            {value: "44", key: "44", "text":"Institut universitaire en santé mentale Douglas"},
            {value: "45", key: "45", "text":"Hôpital de LaSalle"},
            {value: "46", key: "46", "text":"Hôpital général du Lakeshore"},
            {value: "47", key: "47", "text":"L'Hôpital général Juif Sir Mortimer B. Davis"},
            {value: "48", key: "48", "text":"Hôpital de Verdun"},
            {value: "49", key: "49", "text":"Hôpital Notre-Dame"},
            {value: "50", key: "50", "text":"Hôpital Fleury"},
            {value: "51", key: "51", "text":"Hôpital du Sacré-Coeur de Montréal"},
            {value: "52", key: "52", "text":"Hôpital Jean-Talon"},
            {value: "53", key: "53", "text":"Pavillon Albert-Prévost"},
            {value: "54", key: "54", "text":"Institut universitaire en santé mentale de Montréal"},
            {value: "55", key: "55", "text":"Hôpital Maisonneuve-Rosemont"},
            {value: "56", key: "56", "text":"Hôpital Santa Cabrini"},
            {value: "57", key: "57", "text":"Centre hospitalier de l'Université de Montréal"},
            {value: "58", key: "58", "text":"Hôpital Royal Victoria"},
            {value: "59", key: "59", "text":"Hôpital général de Montréal"},
            {value: "60", key: "60", "text":"Hôpital de Montréal pour enfants"},
            {value: "61", key: "61", "text":"Campus Lachine"},
            {value: "62", key: "62", "text":"Institut de Cardiologie de Montréal"},
            {value: "63", key: "63", "text":"CHU Sainte-Justine"},
            {value: "64", key: "64", "text":"Hôpital du Pontiac"},
            {value: "65", key: "65", "text":"Hôpital de Hull"},
            {value: "66", key: "66", "text":"Hôpital de Gatineau"},
            {value: "67", key: "67", "text":"Hôpital de Papineau"},
            {value: "68", key: "68", "text":"Hôpital Memorial de Wakefield"},
            {value: "69", key: "69", "text":"CLSC de Fort-Coulonge"},
            {value: "70", key: "70", "text":"Hôpital de Maniwaki"},
            {value: "71", key: "71", "text":"CLSC et Centre d'hébergement la Petite-Nation"},
            {value: "72", key: "72", "text":"Hôpital et CLSC de Val-d'Or"},
            {value: "73", key: "73", "text":"Centre hospitalier Hôtel-Dieu d'Amos"},
            {value: "74", key: "74", "text":"Centre hospitalier La Sarre"},
            {value: "75", key: "75", "text":"Centre hospitalier de Rouyn-Noranda"},
            {value: "76", key: "76", "text":"Pavillon Ste-Famille"},
            {value: "77", key: "77", "text":"Point de service de Temiscaming-et-de-Kipawa"},
            {value: "78", key: "78", "text":"Pavillon Forestville"},
            {value: "79", key: "79", "text":"Pavillon Escoumins"},
            {value: "80", key: "80", "text":"Hôpital Le Royer"},
            {value: "81", key: "81", "text":"Hôpital et Centre d'hébergement de Sept-Iles"},
            {value: "82", key: "82", "text":"CSSS de l'Hématite"},
            {value: "83", key: "83", "text":"CSSS de la Minganie"},
            {value: "84", key: "84", "text":"CSSS de la Basse-Côte-Nord"},
            {value: "85", key: "85", "text":"CSSS de Port-Cartier"},
            {value: "86", key: "86", "text":"Hôpital de Sainte-Anne-des-Monts"},
            {value: "87", key: "87", "text":"Hôpital de Maria"},
            {value: "88", key: "88", "text":"CLSC de Paspébiac"},
            {value: "89", key: "89", "text":"Hôpital de Chandler"},
            {value: "90", key: "90", "text":"Hôpital Hôtel-Dieu"},
            {value: "91", key: "91", "text":"CLSC de Grande-Vallée"},
            {value: "92", key: "92", "text":"CLSC de Murdochville"},
            {value: "93", key: "93", "text":"Hôpital de l'Archipel"},
            {value: "94", key: "94", "text":"Hôpital de Montmagny"},
            {value: "95", key: "95", "text":"Hôtel-Dieu de Lévis"},
            {value: "96", key: "96", "text":"Centre Paul-Gilbert - Centre d'hébergement de Charny"},
            {value: "97", key: "97", "text":"Hôpital de St-Georges"},
            {value: "98", key: "98", "text":"Hôpital de Thetford Mines"},
            {value: "99", key: "99", "text":"Hôpital Cité de la Santé"},
            {value: "100", key: "100", "text":"Hôpital Pierre-Le Gardeur"},
            {value: "101", key: "101", "text":"Centre hospitalier régional de Lanaudière"},
            {value: "102", key: "102", "text":"Hôpital de Saint-Eustache"},
            {value: "103", key: "103", "text":"Hôpital régional de Saint-Jérôme"},
            {value: "104", key: "104", "text":"CSSS d'Argenteuil"},
            {value: "105", key: "105", "text":"Hôpital Laurentien"},
            {value: "106", key: "106", "text":"Centre de services de Rivière-Rouge"},
            {value: "107", key: "107", "text":"Hôpital de Mont-Laurier"},
            {value: "108", key: "108", "text":"Hôpital Charles Lemoyne"},
            {value: "109", key: "109", "text":"Hôpital du Haut-Richelieu"},
            {value: "110", key: "110", "text":"Hôtel-Dieu de Sorel"},
            {value: "111", key: "111", "text":"Hôpital Honoré-Mercier"},
            {value: "112", key: "112", "text":"Hôpital Pierre-Boucher"},
            {value: "113", key: "113", "text":"Centre hospitalier Anna-Laberge"},
            {value: "114", key: "114", "text":"Hôpital Barrie Memorial"},
            {value: "115", key: "115", "text":"Hôpital du Suroît"}
        ]

        return(
            <>
                <div>Bonjour</div>
                <Select placeholder="Région administrative" options={regionAdministrative} value={this.state.region} key={this.state.region} onChange={this.onRegionChange}/>
                <Select placeholder="Nom de l'établissement" options={nomEtablissement} value={this.state.nomEtab} key={this.state.nomEtab} onChange={this.onNameEtabChange}/>
                <Select placeholder="Nom de l'Installation" options={nomInstallation} value={this.state.nomInsta} key={this.state.nomInsta} onChange={this.onInstaChange}/>

            </>

        )
    }
}

export default RegionAdministrative