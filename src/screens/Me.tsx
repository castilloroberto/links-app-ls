import React from 'react'

export const Me = () => {
    return (
        <div className="container mt-4">
            <h3>Herramientas usadas en esta app</h3>

            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">React js</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Typescript</li>
                </ul>
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">Bootstrap</h5>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">GitHub Pages</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Host</li>
                </ul>
            </div>
            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">LocalStorage</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Guardar links</li>
                </ul>
            </div>
        </div>
    )
}
