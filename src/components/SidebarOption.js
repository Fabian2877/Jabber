import React from 'react'; 
import {useHistory} from 'react-router-dom';
import db from '../firebase/Firebase'
import './styles/SidebarOption.css';



function SidebarOption({Icon, title, id, addChannelOption}) {
    const history = useHistory();


    const selectChannel = () => { // This function will force a redirect to a new room with the id that is attached to each sidebar option
        if(id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }


    const addChannel = () => {
        const channelName = prompt('Please Enter Channel Name'); 

        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }
    return(
        <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon ? <Icon className='sidebarOption__icon'/> : null} {/*Only render the Icon component if we have a render icon */}
            {Icon ? // if we have an icon we will render the icon along with the title. If we do not have an icon, we will simply render the title as a channel
             <h3>{title}</h3> : 
            <h3 className='sidebarOption__channel'>
               <span className='sidebarOption__hash'>#</span>
               {title}
            </h3>
            }
        </div>
    )
}

export default SidebarOption;