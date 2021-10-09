import styled from 'styled-components'

export const CampaignStyle = styled.div`
  @media screen and (max-width: 762px) {
    font-size: 20px;
    & > div {
      flex-direction: table;
      justify-content: center;
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: 762px) {
    font-size: 20px;
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 25px;
    }
  }
`
export const CampaignCard = styled.button`
  @media screen and (min-width: 768px) {
    border: 1px solid lightgrey;
    margin: 10px;
    width: 450px;
    height: auto;
    align-text: center;
    padding: 20px 20px;
    :hover {
      box-shadow: 1px 8px 10px grey;
      -webkit-transition: box-shadow 0.1s ease-in;
    }
  }
  width: 100%;
  display: block;

  border: 1px solid lightgrey;
  margin-right: 10px;
  height: auto;
  align-text: center;
  padding: 20px 20px;
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
`
export const DivResp = styled.div`
  display: block;
  width: auto;
`
export const InfoDiv = styled.div`
  color: lightgrey;
  font-size: 12px;
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
`
export const FraisInfoDiv = styled.div`
  color: lightgrey;
  margin: 15px auto;
  text-align: center;
`

export const TitleH2 = styled.h2`
  text-align: center;
  font-size: 26px;
`
export const TitleH1 = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: -4px;

  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`
