export default class Hopital {
    id: number;
    etablissement: string;
    installation: string;
    permis: number;
    civ_fonc: number;
    civs_occ: number;
    p24h: number;
    p48h: number;
    maj: string;

    constructor(reponse: any){
        this.id = reponse.result.records._id;
        this.etablissement = reponse.result.records.Nom_etablissement;
        this.installation = reponse.result.records.Nom_installation;
        this.permis = reponse.result.records.No_permis_installation;
        this.civ_fonc = reponse.result.records.Nombre_de_civieres_fonctionnelles;
        this.civs_occ = reponse.result.records.Nombre_de_civieres_occupees;
        this.p24h = reponse.result.records.Nombre_de_patients_sur_civiere_plus_de_24_heures;
        this.p48h = reponse.result.records.Nombre_de_patients_sur_civiere_plus_de_48_heures;
        this.maj = reponse.result.records.Mise_a_jour;
    }
}