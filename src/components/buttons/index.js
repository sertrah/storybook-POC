// @ts-nocheck

import styled from "styled-components";

const HButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 9px 23px;
  text-decoration: none;
  transition-duration: 0.8s;
  background-color:  ${props => props.primary ? "#000" : "palevioletred"};
  text-shadow: 0px -1px 0px  ${props => props.primary ? "#000" : "palevioletred"};
  &:hover ${this} {
    background:  ${props => props.primary ? "#ccc" : "palevioletred"};
  }
`;


const HRoundedButton = styled(HButton)`
  border-radius: 10px;
`;

export {HRoundedButton, HButton};