import React from 'react';
import { FaBook, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../assets/image/bcslogo.png";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color:white;
    font-width:bold;
  }

  & > svg {
    margin-right: 0.5rem;
  }
`;

function MenuBar() {
  return (
    <div className="row">
    <Navbar>
      
        <div className="col-md-2" style={{textAlign:"center"}}>
      <Logo><img style={{height:"80px"}} src={logo} alt="" /></Logo>

      </div>
      
      <>
        <div className="col-md-6">
        <NavLink style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
          <MenuLink to="/">
            <FaHome />
            হোম
          </MenuLink>
          <MenuLink to="/about">
            আমাদের সম্পর্কে
          </MenuLink>
          <MenuLink to="/branches">
            শাখা সমূহ
          </MenuLink>
          <MenuLink to="">
            কোর্স সমূহ
          </MenuLink>
          <MenuLink to="/examportal">
            এক্সাম সমূহ
          </MenuLink>
          <MenuLink to="/contact">
            যোগাযোগ
          </MenuLink>
        </NavLink>
        </div>

<div className="col-md-4" style={{display:"flex",justifyContent:"end",padding:"15px"}}>
  <NavLinks>
        <NavLink>
          <MenuLink to="/login">
            <FaUser />
            Login
          </MenuLink>
        </NavLink>
        <NavLink>
          <MenuLink to="https://bcsconfidence.prostuti.net/">
            <FaBook />
            Exam
          </MenuLink>
        </NavLink>
        </NavLinks>
        </div>
      </>
      
    </Navbar>
    </div>
  );
}

export default MenuBar;
