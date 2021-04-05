import React from 'react'; 
import {useStateValue} from '../stateProvider/StateProvider';
import './styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
    const [{user}, dispatch] = useStateValue();



    return(
        <div className='app'>   
         <BrowserRouter>
         { !user ? <Login/> :

         <>  
            <Header/>
            <div className='app__body'> {/*The app body wil hold the sidebar and the chat screen */}
            <Sidebar/>

            
            <Switch>
                <Route path='/room/:roomId'> 
                    <Chat/>
                </Route> 

                <Route path='/room/stacked'>
                
                </Route> 

            </Switch>
            </div>
         </>
                    
         }



             
         </BrowserRouter>    
      
        </div>


     


        
    )
}


export default App;