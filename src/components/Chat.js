import React, {useState, useEffect} from 'react'; 
import {useParams} from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import db from '../firebase/Firebase';
import Message from './Message';
import './styles/Chat.css'




function Chat() {

    const {roomId} = useParams(); //This will allows us to capture the params within the URL. In this case, everthing after 'room/'
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => { // Going into our collection 'room' and grabbing the document with the id equal to our roomId
                setRoomDetails(snapshot.data()) // grabbing the data from that room and setting on our state
            })
        }


        //grabbing the document with the current roomId, if it has a collection of 'messages' order them by timestamp and take a snapshot of the messages. setRoomMessages equal to an array of the document data
        db.collection('rooms').doc(roomId) 
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))

    }, [roomId])



    return (
        <div className='chat'>
            <div className='chat__header'>
                 <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                    <strong>#{roomDetails?.name}</strong>
                    </h4>
                 </div>

                 <div className='chat__headerRight'>
                   <p>
                    <InfoOutlinedIcon/>
                     Details
                   </p>
                  </div>
            </div>

            <div className='chat__messages'> 
              {roomMessages.map(({message, timestamp, userImage, user}, idx) => {
                  console.log(message)
                  return (
                      <Message key={idx} message={message} timestamp={timestamp} userImage={userImage} user={user}/>
                  )
              })}
            </div>


            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>

        </div>
    )
}


export default Chat;