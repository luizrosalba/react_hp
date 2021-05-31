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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media only screen and (max-width: 800px) {
    display: block;
    z-index: 1;
  }
`

export const ButtonSobre = styled.button`
  display:flex;
  justify-content: center;
  text-decoration: none;
  background: #ac4c4c;
  border-radius: 15px;
  border: 3px none #ac4c4c;
  color: white;
  margin: 10px 40px 10px 40px ; 
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;  
  width: -webkit-fill-available;
  height: 50px; 
  ${props => props.selected && css`
    background: #ac4c4c;
    color: white;
  `}
  @media only screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    font-size:24px ; 
    margin: 10px 5px 20px 5px;
  }
`;

export const CardWrapperSobre = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  margin: 10px 40px 10px 40px ; 
  background-color: white;
  color: black; 
  background: white;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 7.0px );
  -webkit-backdrop-filter: blur( 7.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  button { margin-top: auto; } /* Push it and following elements to the bottom */

  @media only screen and (max-width: 800px) {
    z-index: 1;
    margin: 20px 10px 30px 10px;
  }
`;
