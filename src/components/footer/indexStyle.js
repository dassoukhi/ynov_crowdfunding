import styled from 'styled-components'
export const FooterStyle = styled.div`
  clear: both;
  background: #f5f5f5;
  height: auto;
  width: 100%;
  position: relative;
  bottom: 50;
  left: 0;
  right: 0;
  padding: 60px 10px;
  margin: auto;
`
export const FooterStyleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const FooterList = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
  font-size: 17px;
  @media screen and (max-width: 762px) {
    font-size: 10px;
  }
`
export const FooterListDiv = styled.div`
  color: grey;
`

export const FooterCard = styled.div`
  margin-left: 100px;
  @media screen and (max-width: 762px) {
    display: none;
  }
`

export const BottomIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20%;

  & div {
    margin: 7px;
  }
  & button {
    background: white;
    border: 1px solid lightgrey;
    width: 150px;
    margin-top: -8px;
    padding: 7px;
  }
`

export const EnregistrerButton = styled.button`
  color: white;
  background-color: #ff0f00;
  border: none;
  padding: 12px;
  width: 200px;
`

export const InputAdr = styled.input`
  padding: 12px;
  width: 200px;
`
