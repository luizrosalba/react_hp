import styled, { css } from 'styled-components'

export const wrapperHeaderBig = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px 5px 0px;
  width: 100vw;
  border-top: 0.05em solid white;
  border-bottom: 0.05em solid white;
  justify-content: space-evenly;
  padding 5px 0 5px 0px; 

  @media(max-width: 800px) {
    display: none;
  }
}
`
export const wrapperHeaderSmall = styled.div`
  @media(max-width: 800px) {
    display: grid;
    background-color: gray;
    position: fixed;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    margin: 5px 0px 0px 0px;
  }
}
`


export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 3px none #ac4c4c;
  outline: 0; 
  color: white;
  margin: 0 1em;
  justify-content: center;
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

