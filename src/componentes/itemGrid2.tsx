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

export default class ItemGrid2 extends Component<props> {
    render() {
        let estiloBotao = `btn waves-effect waves-light col right ${this.props.tema}`
        let nome:any = this.props.tipo
        let tela:string =  Tipo[this.props.tipo]
        return (
            <a className="collection-item row">
                    {nome + this.props.nome}
                    <a className="col s1 right"> </a>
                    <button className={estiloBotao} type="submit" name="action" onClick={(e:any) => this.props.seletorView('Cadastros' + tela, e)}>EDITAR
                        <i className="material-icons right">create </i>
                    </button>
                </a>
        )
    }
}