import React from "react";

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellidos: "",
            telefono: "",
            email: "",
            comentarios: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit(event) {
        alert('Se enviaron los datos de : ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return <><div className="Formulario">
            <h2>CONTACT FORM</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Lastname:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Cellphone number:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    E-mail:
                    <input type="email" name="email" placeholder="ejemplo@gmail.com" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Comments:
                    <textarea value={this.state.value} />
                </label>
            </form>
            <form onSubmit="console.log('You clicked submit.'); return false">
                <button type="submit" class ="btn btn-dark">Submit</button>
            </form>
        </div></>
    };
}

export default Formulario;