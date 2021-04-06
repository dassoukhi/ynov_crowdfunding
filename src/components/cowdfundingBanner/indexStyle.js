import styled from 'styled-components'
export const BannerStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 762px) {
    display: none;
  }
`
export const Stylediv = styled.div`
  display: block;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10%;
`
export const StyleP1 = styled.p`
  font-size: 18px;
  text-align: center;
`
export const StyleP2 = styled.p`
  font-size: 12px;
  text-align: justify;
`
export const StyleP3 = styled.p`
  font-size: 20px;
  text-align: center;
`
