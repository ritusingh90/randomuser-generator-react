
import React, { useEffect, useRef, useState } from 'react';
import { CiUser, CiMail, CiCalendar, CiLocationOn, CiPhone, CiLock } from "react-icons/ci";
import axios from 'axios';

const baseURL = "https://randomuser.me/api/";

const RandomUser = () => {
    const [user, setUser] = useState(null);
    const [dataValue, setDataValue] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [active, setActive] = useState('');
    const [showActive, setShowActive] = useState(true);
    
  
    const [dateFormate, setDateFormate] = useState('');
  
  
    const ref = useRef(null);
  
    //Fetching data from API using Axios and Formatting Date
    const randomUserAPI = async () => {
      const {data} = await axios.get(baseURL);
      setUser(data.results[0])
  
      //Formattting Date using toLocalDateString
      const dobs = new Date(data.results[0].dob.date).toLocaleDateString('el-GR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      setDateFormate(dobs)
    }
  
    //on list hover gettting attribute data
    const onUserHover = (e ) => {
      console.log("dsfsdf", e.currentTarget.getAttribute('data-value'))
      setDataValue(e.currentTarget.getAttribute('data-value'));
      setDataTitle(e.currentTarget.getAttribute('data-label'))
      setActive(e.currentTarget.getAttribute('data-active'))
  
      if (ref.current.classList.contains('m-active')) {
        ref.current.classList.remove('m-active')
      }
    
      setShowActive(false)
    }
  
  
  
    // on click of New button refreshing API to show new data
    const dataReloadHandle = async () => {
        const {data} = await axios.get(baseURL);
  
        setUser(data.results[0])
        console.log(data.results[0])
  
        ref.current.classList.add('m-active')
        setShowActive(true)
      
    };
  
    
  
    useEffect(() => {
      randomUserAPI();
  
    }, []);
  
    if(!user) return null

  return (
    <div>
         <div className='top-sectoin'>
      <h2>Random User Generator</h2>
      </div>
      <div className='user_card'>
        <div className='card'>
          {/*----- Displaying User ------*/}
          <div className='detail'>
            <div className='user_photo horizontal_center'>
              <button onClick={dataReloadHandle} className='refresh'>New</button>
              <img src={user.picture.large} alt="" title=""/>
            </div>
            
            {/*----- Conditional Rendering of User (Ternary Opeator) ------*/}
            {showActive ? (<>
              <p className="user_title">My Name is</p>
              <p className="user_value">{user.name.title} {user.name.first} {user.name.last}</p>
              </>) : (
                <>
                  <p className="user_title" >{dataTitle}</p>
                  <p className="user_value" >{dataValue}</p>
                </>
              )
            }
            
          </div>
            
          {/*----- User Data List ------*/}  
          <ul className='values_list horizontal_center' >
            <li 
              ref={ref}  
              data-label="My Name is" 
              data-value={`${user.name.title} ${user.name.first} ${user.name.last} `} 
              data-active={user.name.first} 
              onMouseOver={onUserHover} 
              className={active === user.name.first  ? "active" : "m-active list"} >
                <CiUser/>
            </li>

            <li 
              data-label="My Email Address is" 
              data-value={user.email} 
              data-active={user.email} 
              onMouseOver={onUserHover} 
              className={active === user.email  ? "active" : "list"}>
                <CiMail/>
            </li>

            <li 
              data-label="My DOB is" 
              data-value={dateFormate} 
              data-active={user.dob.date} 
              onMouseOver={onUserHover} 
              className={active === user.dob.date  ? "active" : "list"}>
                <CiCalendar/>
            </li>

            <li 
              data-label="My Address is" 
              data-value={`${user.location.street.number} ${user.location.street.name} ${user.location.state}`} 
              data-active={user.location.street.name} 
              onMouseOver={onUserHover} 
              className={active === user.location.street.name  ? "active" : ""}>
                <CiLocationOn/>
            </li>

            <li 
              data-label="My Phone No. is" 
              data-value={user.phone} 
              data-active={user.phone} 
              onMouseOver={onUserHover} 
              className={active === user.phone  ? "active" : "list"}>
                <CiPhone/>
            </li>

            <li 
              data-label="My Password is" 
              data-value={user.login.password} 
              data-active={user.login.password} 
              onMouseOver={onUserHover} 
              className={active === user.login.password  ? "active" : "list"}>
                <CiLock/>
            </li>
          </ul>
        </div>
     
      </div>
    </div>
  )
}

export default RandomUser