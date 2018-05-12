import React, { Component } from 'react'

class TodoForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: false   
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

        // console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onAddTask(this.state)
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: false
        })
    }

    render() {
        return (
            <div className="card mb-2">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <h4>Agregar tarea</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Título"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            placeholder="Responsable"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Descripción"
                        />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="priority" checked={this.state.priority} onChange={this.handleInputChange}/> Prioritaria
                        </label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

export default TodoForm