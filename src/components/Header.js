import React, {useState} from 'react'; 
import './styles/Header.css'
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from '../stateProvider/StateProvider';
import { Input } from 'antd';




function Header() {
    const [textValue, setValue] = useState('')
    const [{user}, dispatch] = useStateValue();


    const onTextChange = (e) => {
        const {value} = e.target;
        setValue(value)
        console.log(textValue)
    }



    return( 
        <div className='header'>
           <div className='header__left'>
               <Avatar
            className='header__avatar'
               alt={user?.displayName}
               src={user?.photoURL}
               
               />
               <AccessTimeIcon/>
           </div>

           <div className='header__search'>
            <SearchIcon/>
            <Input placeholder="" size="100"/>
            </div>
           <div className='header__right'>
            <HelpOutlineIcon/>
           </div>



        </div>
    )
}




export default Header;