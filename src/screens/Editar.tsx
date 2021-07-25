import React, { 
    CSSProperties,
    useEffect, 
    useState
 } from 'react'
import { Card, Link } from '../components/Card'
import { LinkForm } from '../components/LinkForm'

interface EditarProps {

}

export const Editar: React.FC<EditarProps> = ({}) => {

        const [Items, setItems] = useState<Link[]>([])
        const [show, setShow] = useState<boolean>(false)

        useEffect(() => {
            
            const json = localStorage.getItem('links')
            
            if(json !== null && json !== '[]'){ 
                setItems(JSON.parse(json))
            }
          


        }, [])
        
        useEffect(() => {

            localStorage.setItem('links',JSON.stringify(Items))
            
        }, [Items])

        const addItem = ({Hora,Link,Title}:Link )=>{
        
            setItems([{Title,Hora,Link},...Items])
            setShow(!show)
        }

        const deleteItem = (id:number)=>{
            setItems(Items.filter( ( item, i ) =>  i !== id))
        }

        return (
            <div style={styles.center}>
                {
                    show ? (
                        <div className="agregar">
                            <LinkForm addItem={addItem}/>
                        </div>
                    ): (
                        <div style={styles.center} >

                        <div className="list" style={{overflowY:'auto',height:500,padding:5}}>
                            {
                                Items.map( ( item, i ) => <Card deleteItem={() => deleteItem(i)} Link={item} key={i}/> )
                            }
                        </div>
                        <nav style={{width:'100vw'}}>
                        <button onClick={() => setShow(!show)}
                            style={{position:'absolute',right:45,bottom:100,width:100}}
                            className="btn btn-success">
                                Agregar
                        </button>   
    
                        </nav>
                    </div>
                    )
                }
                
        
            </div>
        )
}

interface StylesProps{
    center:CSSProperties
}
const styles:StylesProps = {
    center:{
        display:'flex',
        alignItems:'center',
        // justifyContent:'center',
        flexDirection:'column',
        height:'70vh',
        margin:0,
    }
}