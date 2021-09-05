import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 380px;
  height: 150px;
  align-content: center;
  word-break: break-all;
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
  text-align: center;
  color:white;
  
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: Cornsilk;
`;

export const WrapperLink = styled.a`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: white;
  padding-top: 10px;
  text-decoration: underline;
  text-align: center;
  justify-content: space-around;
  
  &:hover{
    color: chocolate;
  }
`;
