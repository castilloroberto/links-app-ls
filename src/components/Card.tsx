
import React,{CSSProperties, FC, MouseEvent, useEffect} from 'react'

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
        
        const navigateTo = ()=>{
            let url = Link.toLowerCase()
            console.log('click');
            
            if(url.startsWith('http' || 'meet.google')){
                window.location.href = url;
                
            }
        }


        return (
            <div className="card my-2" style={{cursor:'pointer',width:300}}>
                <div className="card-body" style={styles.body}>
                    <div style={{width:'100%',height:'100%'}} onClick={navigateTo}>
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
        justifyContent:'space-between',
        marginRight:5
    },
    btn:{
        height:38,
        width:70
    }
}