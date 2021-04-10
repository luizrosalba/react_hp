import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-weight: 500;
  cursor: pointer;
`

export const header = styled.div`
    background-color: #0C243C;
    display: block;
    /* font-size: 1.5em; */
    position: fixed;
    font-weight: bold;
    z-index: 100;
`
export const container_header = styled.div`
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 100vw;
    border-bottom: 1px solid #e1e1e1;
    justify-content: space-evenly;
    align-items: center;
    margin-top: -5vh;
`