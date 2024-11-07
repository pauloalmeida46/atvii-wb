import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Tipo } from "../model/tipo";


type props = {
    tema: string
    tipo: Tipo
    id: string
    nome: string
    seletorView: Function
}

export default class ItemGrid3 extends Component<props> {
    render() {
        let nome:any = this.props.tipo
        return (
            <a className="collection-item row">
                    {nome + this.props.nome}
                </a>
        )
    }
}