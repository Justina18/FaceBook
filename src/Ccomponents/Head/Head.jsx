import React,{useState} from 'react'
import './Head.css'
import {FaTimes, FaFacebookMessenger, FaUserFriends} from 'react-icons/fa'
import {FiAlignJustify} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {CgMenuGridO} from 'react-icons/cg'
import {MdNotifications, MdAccountCircle} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'

const Header = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = () => setToggle(!toggle)

  return (
    <div className='Header_Container'>
        <div className='Header_Wrapper'>
            <div>
                <BsFacebook fontSize='28px' color='#036EE4' /> 
                <input placeholder='Search Facebook '></input>
            </div>

            <div className='middle-head'>
                <AiFillHome fontSize='30px' />
                <FaUserFriends fontSize='30px'/>

            </div>

            <div className='Nav_Contain'>
            <input placeholder='Find Friends'></input>
            <div className='icons'>
            <CgMenuGridO fontSize='28px'/>
            </div>
            <div className='icons'>
            <FaFacebookMessenger fontSize='28px'/>
            </div>
            <div className='icons'>
            <MdNotifications fontSize='28px'/>
            </div>
            <MdAccountCircle fontSize='28px'/>
            </div>

            <div className='Burger'>
                {toggle ? (<FiAlignJustify onClick={handleToggle} fontSize='30px'/>)
                :(<FaTimes onClick={handleToggle} fontSize='30px'/>)}     
            </div>
        </div>
    </div>
  )
}

export default Header