import { React, useState } from 'react'
import { BiLogIn, BiLogOut, BiSearchAlt } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [sideState, setSideState] = useState('-100%');

  const navigate = useNavigate();
  const menuList = ['WOMAN','MAN','KIDS','ZARA SRPLS','BEAUTY','ZARA ORIGINS']
  
  const search = (event) => {
    if(event.key === 'Enter') {  
      let keyword = event.target.value; 
      navigate(`/?q=${keyword}`);
    }
  }

  const gotoLogin = () => {
    navigate("/login");
  };
  
  return (
    <div>
      <div className="side_menu" style={{left: sideState}}>
        <div className="closeBtnWrap">
          <VscChromeClose className="closeBtn" onClick={() => {setSideState('-100%'); }} />
        </div>
        <ul className="side-menu-list">
          {menuList.map((menu) => (
          <li>{menu}</li>
          ))}
        </ul>
      </div>

      <div className="burger-menu hide">
        <HiOutlineMenuAlt4 onClick={() => {setSideState('0'); }} />
      </div>

      <div className="login-btnWrap">
        { authenticate ? (<div className="login-btn" onClick={() => setAuthenticate(false)}>
          <BiLogOut /> <span>로그아웃</span>
        </div> ) : ( <div className="login-btn" onClick={gotoLogin}>
          <BiLogIn /> <span>로그인</span>
        </div>)}    
      </div> 
      
      <h1>
        <Link to="/">
          <div className="img_wrap">
            <img width={120} src="img/logo.png" alt="ZARA" />
          </div>
        </Link>  
      </h1>
      
      <nav>
        <ul className="menu-list">
          {menuList.map((menu) => (<li>{menu}</li>))}
        </ul>
        <div className="search">
          <BiSearchAlt />
          <input type="text" placeholder='제품검색' onKeyPress={(event) => search(event)} />
        </div>    
      </nav>    
    </div> 
  )
}

export default Navbar