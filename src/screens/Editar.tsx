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
                console.log('if');
                
                setItems(JSON.parse(json))
            }
          


        }, [])
        
        useEffect(() => {

            localStorage.setItem('links',JSON.stringify(Items))
            
        }, [Items])

        const addItem = ({Hora,Link,Title}:Link )=>{
        
            setItems([{Title,Hora,Link},...Items])
           
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
                        <div className="list" style={{overflowY:'scroll',height:500}}>
                            {
                                Items.map( ( item, i ) => <Card deleteItem={() => deleteItem(i)} Link={item} key={i}/> )
                            }
                        </div>
                    )
                }
                
                <nav style={{width:'100vw'}}>
                    <button onClick={() => setShow(!show)}
                        style={{position:'absolute',right:45,bottom:100,width:100}}
                        className="btn btn-success">
                            { show ? 'Volver' : 'Agregar'  }
                    </button>   

                </nav>

               
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
        justifyContent:'center',
        flexDirection:'column',
        height:'70vh',
        margin:0,
    }
}