import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ text, add }) => {
  return (
    <HeaderWrapper>
      {add ? <div className="add-div"><div>{text}</div> <div className="plus"><Link to="add">{add}</Link></div></div> : <div>{text}</div>}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background: #674aed;
  height: 45px;
  font-size: 25px;
  color: white;
  padding: 10px 50px 6px 75px;
  .add-div {
    display: flex;
    justify-content: space-between;
  }
  .plus {
    font-size: 30px;
  }

  a {
    text-decoration: none;
    color: white
  }
`;

export default Header;
