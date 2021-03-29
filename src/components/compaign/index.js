/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const CampaignStyle = styled.div`
  /* font-size: 20px;
  & > div {
    //display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
  } */
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
const CampaignCard = styled.button`
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
const DivResp = styled.div`
  display: block;
  width: auto;
`
const InfoDiv = styled.div`
  color: lightgrey;
  font-size: 12px;
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
`
const FraisInfoDiv = styled.div`
  color: lightgrey;
  margin: 15px auto;
  text-align: center;
`

const TitleH2 = styled.h2`
  text-align: center;
  font-size: 26px;
`
const TitleH1 = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: -4px;

  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`

const Campaign = () => {
  const history = useHistory()

  const newProject = () => {
    history.push('/compagne/addProject')
  }
  const newGiver = () => {
    history.push('/compagne/gived')
  }
  return (
    <CampaignStyle>
      <br />
      <br />
      <TitleH1>
        <strong>Bienvenue sur YnovFunding</strong>
      </TitleH1>
      <DivResp>
        <CampaignCard onClick={newProject}>
          <TitleH2>Ajouter un projet</TitleH2>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            YnovFunding est une plateforme de crowdfunding qui aide les idées à
            prendre vie.
          </p>
          <FraisInfoDiv>frais: 5%</FraisInfoDiv>
        </CampaignCard>
        <CampaignCard onClick={newGiver}>
          <TitleH2 style={{ marginTop: '50px' }}>Faire un don</TitleH2>
          <FraisInfoDiv>Pas de frais</FraisInfoDiv>
        </CampaignCard>
      </DivResp>
      <InfoDiv>
        Tous les projets d'YnovFunding doivent fournir des informations
        bancaires ainsi qu'une pièce d'identité. Ces informations sont utilisées
        pour prévenir la fraude, se conformer à la loi et débourser les fonds du
        projet.
      </InfoDiv>
    </CampaignStyle>
  )
}

export default Campaign
