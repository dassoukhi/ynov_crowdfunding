import styled from 'styled-components'

export const Card = styled.div`
  :hover {
    -webkit-transition: box-shadow 0.1s ease-in;
  }
  margin: auto;
  display: inline-block;
  float: center;
  width: 50%;
  border-radius: 0.2rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  text-align: justify;

  float: center;
  width: 100%;
`

export const TitleH1 = styled.p`
  font-size: 20px;
  @media screen and (min-width: 768px) {
    text-align: justify;
    font-size: 40px;
  }
`
export const StyleSpan = styled.span`
  color: red;
  float: center;
`
export const StyleInput = styled.input`
  width: 95%;
  color: black;
  border: 1px solid black;
  float: left;
  text-align: center;
`
