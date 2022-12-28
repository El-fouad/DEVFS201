import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
const NavBar = () => {
  const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #7a7171;
    width: 100%;
    height: 3rem;
  `;
  const Logo = styled.h1`
    margin-left: 20px;
  `;
  const Div1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
  `;
  const List = styled.ul``;
  const Li = styled.li`
    margin: 10px;
    display: inline-block;
    margin-right: 20px;
  `;
  const Btncard = styled.button`
    margin-right: 12%;
    height: 30px;
    width: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
  `;

  const Cyrcle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    color: red;
    height: 90%;
    width: 25px;
    border-radius: 50%;
  `;
  return (
    <>
      <Navbar>
        <Div1>
          <Logo>Start Bootstrap</Logo>
          <List>
            <Li>Home</Li>
            <Li>About</Li>
            <Li>Shop</Li>
          </List>
        </Div1>
        <Btncard>
          <BsFillCartFill /> Cart <Cyrcle>0</Cyrcle>
        </Btncard>
      </Navbar>
    </>
  );
};

export default NavBar;
