import React, {useState} from 'react'; 
import './styles/ChatInput.css';
import Button from '@material-ui/core/Button';
import db from '../firebase/Firebase';
import {useStateValue} from '../stateProvider/StateProvider';
import firebase from 'firebase';




function ChatInput({channelName, channelId}) {
   const [input , setInput] = useState('');
   const [{user}, dispatch] = useStateValue();


 const sendMessage = (e) => {
     e.preventDefault();

     if(channelId) {
         db.collection('rooms').doc(channelId).collection('messages').add({
             message: input, 
             timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
             user: user.displayName, 
             userImage: user.photoURL
         })

     }

 }




    return(
        <div className='chatInput'>
            <form> 
                <input onChange ={e => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
                <button onClick={sendMessage} type='submit'>SEND</button>
            </form>
          

        </div>
    )
}



export default ChatInput;