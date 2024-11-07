import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light col left ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">NOME</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">NOME SOCIAL</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">TELEFONE</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-MAIL</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" />
                            <label htmlFor="telefone">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">SEXO</label>
                        </div>
                    </div>
                    <div className="">
                        <div className="row">
                            <button className={estiloBotao} onClick={(e:any) => this.props.seletorView('Clientes', e)}>SALVAR
                                <i className="material-icons right">send</i>
                            </button>
                            <a className="col s1 left"> </a>
                            <button className={estiloBotao} >DELETAR
                                <i className="material-icons right">clear</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}