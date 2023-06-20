import React from 'react'
import {Container,Row,Button} from 'reactstrap'
import { NavLink,Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import './header.css'
const nav__links=[
  {
    path:'./home',
    diplay:'Home'
  },
  {
    path:'/about',
    diplay:'About'
  },
  {
    path:'./tours',
    diplay:'Tours'
  },
]
const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item,index)=>(
                  <li className="nav__items" key={index}>
                    <NavLink to={item.path} className={navClass=>navClass.isActive ? "active__link":""} >{item.diplay}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                  <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                  <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
              </div>
              <span className="mobile__menu">
                <AiOutlineMenu/>
              </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header
