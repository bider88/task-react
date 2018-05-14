import React, { Component } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import TodoForm from './components/todo-form/TodoForm'

import { todo } from './todo.json'

class App extends Component {

    constructor() {
        super()
        this.state = {
            todo
        }

        this.handleAddTask = this.handleAddTask.bind(this)
    }

    deleteTask(index) {
        this.setState({
            todo: this.state.todo.filter((e, i) => {
                return i !== index
            })
        })
    }

    handleAddTask(task) {
        this.setState({
            todo: [...this.state.todo, task]
        })
    }

    render() {

        const todo = this.state.todo.map((t, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card m-2">
                        <div className="card-header">
                            {t.title}
                        </div>
                        <div className="card-body ">
                            <h6 className="card-subtitle mb-2 text-muted" >{t.responsable}</h6>
                            <p>Prioridad <Priority priority={t.priority} /></p>
                            <p className="card-text">{t.description}</p>
                            <div className="text-center">
                                <button className="btn btn-danger" onClick={this.deleteTask.bind(this, i)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        function Priority(props) {
            const priority = props.priority;
            if (priority) {
                return <i className="fa fa-star"></i>;
            }
            return <i className="fa fa-star-o"></i>;
        }

        return (
            <div className="App">
                <Navigation title="Task React" count={todo.length} />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <TodoForm onAddTask={this.handleAddTask} />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {todo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App
