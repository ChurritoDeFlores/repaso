import React from 'react'
import './Navbar.css'

const Navbar = () => {

    return (
            <nav className="navbar d-flex bd-highlight mb-3">
                <a className="navbar-brand mr-auto p-2 bd-highlight" href="/">
                    <img src='/logo.jpg' width="60" height="60" alt="logo"/>
                </a>
                <a className="navbar-brand p-2 bd-highlight" href="/reloj">Reloj</a>
                <a className="navbar-brand p-2 bd-highlight" href="/contador">Contador</a>
                <a className="navbar-brand p-2 bd-highlight" href="/tareas">Tareas</a>
                <a className="navbar-brand p-2 bd-highlight" href="/usuarios">Usuarios</a>
                <a className="navbar-brand p-2 bd-highlight" href="/formusuarios">Crear usuario</a>
            </nav>
    )
}

export default Navbar