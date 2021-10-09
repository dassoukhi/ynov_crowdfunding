import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: auto;
  display: block;
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
  margin: auto;
  float: left;
  border-radius: 0.2rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;

  @media screen and (min-width: 1025px) {
    :hover {
      box-shadow: 1px 8px 10px grey;
      -webkit-transition: box-shadow 0.1s ease-in;
    }
    margin: auto;
    min-height: 100%;
    display: block;
    float: left;
    width: 25%;
    border-radius: 0.2rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    padding-top: 70px;
    align-items: left;
  }
`

export const StyleImageUploadProgress = styled.progress`
  width: 100%;
  clear: both;
  border: 1px solid #34ca96;
  border-radius: 4px;
`
