import  { CSSProperties } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Editar } from "./screens/Editar";
import { Home } from "./screens/Home";
import { Me } from "./screens/Me";



function App() {
  return (
    <Router>
      <div style={{padding:0}}>
        <nav style={styles.nav}>
          <h3>LinksApp</h3>
          <Link className="text-decoration-none" to="/me">
            <i className="fas fa-user-alt"></i>
          </Link>
        </nav>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/editar">
            <Editar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


        <nav style={styles.nav2}>
          
            <Link className="text-decoration-none"  to="/">
              <button className="btn btn-outline-primary mx-2" style={styles.btn}>
                Links
             </button>
            </Link>

            <Link className="text-decoration-none" to="/editar">
              <button className="btn btn-outline-primary" style={styles.btn}>
                Editar
              </button>
            </Link>
        </nav>

      </div>
    </Router>
  );
}

interface StylesProps{
  btn:CSSProperties
  nav:CSSProperties
  nav2:CSSProperties
}

const styles:StylesProps = {
  btn:{
    width:100,
  },
  nav:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    backgroundColor:"#000000",
    color:"white",
    margin:0
  },
  nav2:{
    display:'flex',
    position:'fixed',
    paddingLeft:45,
    paddingRight:45,
    justifyContent:'space-between',
    bottom:50,
    width:'100vw',
    margin:0,

  },

}



export default App;
