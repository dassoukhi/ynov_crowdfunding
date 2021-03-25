/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'

const CampaignStyle = styled.div`
  font-size: 20px;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
  }
`
const CampaignCard = styled.div`
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
`
const InfoDiv = styled.div`
  color: lightgrey;
  font-size: 10px;
  text-align: justify;
`
const FraisInfoDiv = styled.div`
  color: lightgrey;
  margin: 15px auto;
  text-align: center;
`

const TitleH2 = styled.h2`
  text-align: center;
  font-size: 24px;
`

const Campaign = () => {
  return (
    <CampaignStyle>
      <br />
      <br />
      <h1> Bienvenue sur YnovFunding</h1>
      <div>
        <CampaignCard>
          <TitleH2>Ajouter un projet</TitleH2>
          <div>
            YnovFunding est une plateforme de crowdfunding qui aide <br />
            les idées à prendre vie.
          </div>
          <FraisInfoDiv>frais: 5%</FraisInfoDiv>
          {/* <div>
            <img src={logo} alt='YnovFunding' />
          </div> */}
        </CampaignCard>
        <CampaignCard>
          <TitleH2 style={{ marginTop: '50px' }}>Faire un don</TitleH2>
          <FraisInfoDiv>Pas de frais</FraisInfoDiv>
        </CampaignCard>
      </div>
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
