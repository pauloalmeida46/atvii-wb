import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import ItemGrid3 from "./itemGrid3";
import { Tipo } from "../model/tipo";


type props = {
    tema: string
    seletorView: Function
}

export default class ListaListagem extends Component<props> {
    render() {
        return (
            <div className="collection">
                <ItemGrid3 tema={this.props.tema} nome=' 1' tipo={Tipo.Listagem} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid3 tema={this.props.tema} nome=' 2' tipo={Tipo.Listagem} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid3 tema={this.props.tema} nome=' 3' tipo={Tipo.Listagem} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid3 tema={this.props.tema} nome=' 4' tipo={Tipo.Listagem} id='' seletorView = {this.props.seletorView}/>

            </div>
        )
    }
}