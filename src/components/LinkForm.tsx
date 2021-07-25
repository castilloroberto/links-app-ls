import React, { useState } from 'react'
import { Link } from './Card'

interface LinkFormProps {
    addItem:(item:Link) => void
}

export const LinkForm: React.FC<LinkFormProps> = ({addItem}) => {


        const [Title, setTitle] = useState('')
        const [Hora, setHora] = useState('')
        const [Link, setLink] = useState('')

        const handleSubmit = (e:any)=>{
            e.preventDefault()
            addItem({Title,Hora,Link})
            setTitle('')
            setLink('')
            setHora('')
        }

        return (
            <form onSubmit={handleSubmit} style={{width:'fit-content'}}>
            <h3 className="my-4">Agregar Link</h3>
            <label className="form-label">Titulo</label>
            <input onChange={( { target:{ value } } ) => setTitle( value )}
                value={Title}  
                type="text" 
                className="form-control" />

            <label className="form-label">Hora</label>
            <input onChange={( { target:{ value } } ) => setHora( value )}
                value={Hora} 
                type="text" 
                className="form-control" />

            <label className="form-label">Link</label>
            <input onChange={( { target:{ value } } ) => setLink( value )}
                value={Link} 
                type="text" className="form-control" />

            <button
                onClick={handleSubmit} 
                className="btn btn-primary mt-2">Guardar</button>
        </form>
        )
}