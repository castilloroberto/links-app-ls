import React, { useEffect, useState } from 'react'
import { Card, Link } from '../components/Card'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {

        const [Items, setItems] = useState<Link[]>([])


        useEffect(() => {
            
            const json = localStorage.getItem('links')
            
            if(json !== null && json !== '[]'){
                console.log('if');
                
                setItems(JSON.parse(json))
            }
            else{
                console.log('else');
                
                setItems([{
                    Title:'Creador de esta app',
                    Hora:'1:00PM',
                    Link:'https://github.com/castilloroberto'
                }])
                
            }


        }, [])


        const renderItems = () => {
                return Items.map( (item, i ) => (
                    <Card key={i.toString()} 
                        Link={item}/>
                ))
        } 


        return (
            <div style={{
                display:'flex',
                flexDirection:'column',
                // justifyContent:'center',
                alignItems:'center',
                height:'70vh'
            }}>

                <div className="list" 
                    style={{
                        overflowY:'scroll',
                        height:500
                    }}>
                    {
                        renderItems()
                    }
                </div>
            </div>
        )
}