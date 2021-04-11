import styled, { css } from 'styled-components'

export const textoSecao = styled.div`
    letter-spacing: 3px;
    line-height: 1.7;
    -webkit-hyphens: auto; /**Chrome/Android**/
    -moz-hyphens: auto; /**Firefox**/
    -ms-hyphens: auto; /**Edge**/
    hyphens: auto; /**Outros**/
    width: 100%;
    background: #ac4c4c;
    text-transform: uppercase;
    padding-left: 10px;
  }
`
export const WrapperColunasSobre = styled.div`
    display: flex;
    justify-content: center; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
    margin-top: 2vh;
}
`

export const CardWrapperSobre = styled.div`
  overflow: hidden;
  padding: 20px;
  width: 30vw;
  margin 10px 0px 0px 10px ; 
  border-radius: 15px;
  background-color: white;
  color: black; 
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 3px none #ac4c4c;
  outline: 0; 
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.3ch;
  font-weight: bold;
  text-transform: uppercase;
  
  ${props => props.selected && css`
    background: #ac4c4c;
    color: white;
  `}

`;


