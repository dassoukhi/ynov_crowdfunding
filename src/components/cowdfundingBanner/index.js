/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import left from './crowdLeft.png'
import right from './crowdRight.png'

const BannerStyle = styled.div`
  display: flex;
  flex-direction: row;
  //margin: 20px 13%;
  width: 100%;
`
const Stylediv = styled.div`
  //margin: 30px 50px;
  margin: auto;
  height: 30%;
`
const StyleP1 = styled.p`
  font-size: 18px;
  margin: 30px;
`
const StyleP2 = styled.p`
  font-size: 12px;
  margin: 20px 30px;
  text-align: justify;
`
const StyleP3 = styled.p`
  font-size: 18px;
`
const CrowdfundingBanner = () => {
  return (
    <BannerStyle>
      <img src={left} alt='crowdLeftImg' />
      <Stylediv>
        <StyleP1>
          <strong>Soutenez le projet, prenez la route</strong>
        </StyleP1>
        <StyleP2>
          YnovFunding est votre destination pour les innovations intelligentes
          en matière de technologie, design, avec des avantages et des prix
          spéciaux. Soutenez une campagne, partagez vos idées et vos
          commentaires avec l'équipe du projet.
        </StyleP2>
        <StyleP3>
          <strong>S'INFORMER SUR LE CROWDFUNDING</strong>
        </StyleP3>
      </Stylediv>
      <img src={right} alt='crowdRightImg' />
    </BannerStyle>
  )
}

export default CrowdfundingBanner
