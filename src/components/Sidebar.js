import React, {useState, useEffect} from 'react'; 
import './styles/Sidebar.css'; 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase/Firebase';
import {useStateValue} from '../stateProvider/StateProvider';

function Sidebar() {

    const [channels, setChannels] = useState([])
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => {
            setChannels(
                snapshot.docs.map(doc => {
                    return {
                        id: doc.id, 
                        name: doc.data().name
                    }
                })
            )
        })

    }, [])
   

    return(
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'> 
                    <h2>
                        Dev Chat
                    </h2>
                    <h3>
                     <FiberManualRecordIcon/>
                     {user?.displayName}
                        
                    </h3>
                </div>
                <CreateIcon/>  
            </div>
            <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
            <SidebarOption Icon={InboxIcon} title={`Direct messages`}/>
            <SidebarOption Icon={DraftsIcon} title='Drafts'/>
            <SidebarOption Icon={BookmarkBorderIcon} title='Bookmarked'/>
            <SidebarOption Icon={PeopleOutlineIcon} title={`People and user groups`}/>
            <SidebarOption Icon={ExpandLessIcon} title='Show less'/>
             <hr/>
             <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
             <hr/>
             <SidebarOption Icon={AddIcon} title='Add Channel' addChannelOption/>
             {channels.map((channel) => {
                 return (
                     <SidebarOption title={channel.name} id={channel.id}/>
                 )
             })}
     


             {/*Connect to DB and list all channels  */}
             {/*We will be mapping over our SidebarOptions */}

        </div> 
    )
}



export default Sidebar;