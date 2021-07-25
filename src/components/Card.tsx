
import React,{CSSProperties, FC, MouseEvent} from 'react'

export interface Link{
    Title:string
    Hora:string
    Link:string
}

interface CardProps {
    Link:Link
    deleteItem?:(e:MouseEvent<HTMLButtonElement>)=>void
    // deleteItem?:(id:number)=>void
}

export const Card: FC<CardProps> = ({
    Link:{Hora,Link,Title},
    deleteItem
}) => {
        
        return (
            <div className="card my-2" style={{cursor:'pointer',width:300}}>
                <div className="card-body" style={styles.body}>
                    <div>
                        <h5 className="card-title">{Title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Hora: {Hora}</h6>
                    </div>
                    {
                        deleteItem && (
                            <button onClick={deleteItem} 
                            style={styles.btn} 
                            className="btn btn-danger">Quitar</button>
                        )
                    }
                   
                </div>
            </div>
        )
}

interface StylesProps{
    body:CSSProperties
    btn:CSSProperties
}

const styles:StylesProps = {
    body:{
        display:'flex',
        justifyContent:'space-between'
    },
    btn:{
        height:38,
        width:70
    }
}