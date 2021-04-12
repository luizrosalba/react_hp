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
export const ButtonSobre = styled.button`
  background: white;
  border-radius: 15px;
  border: 3px none #ac4c4c;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.0ch;
  font-weight: bold;
  text-transform: uppercase;
  
  ${props => props.selected && css`
    background: #ac4c4c;
    color: white;
  `}
`;

export const CardWrapperSobre = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  width: 30vw;
  margin 10px 0px 0px 10px ; 
  background-color: white;
  color: black; 
  background: rgba( 177, 184, 247, 0.40 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 7.0px );
  -webkit-backdrop-filter: blur( 7.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  button { margin-top: auto; } /* Push it and following elements to the bottom */
`;
