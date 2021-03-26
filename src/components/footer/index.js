/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeFilled,
  InstagramOutlined,
  LinkedinFilled
} from '@ant-design/icons'

const FooterStyle = styled.div`
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
  //min-width: 600px;
  //max-width: 2000px;
`
const FooterStyleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const FooterList = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
  font-size: 17px;
`
const FooterListDiv = styled.div`
  color: grey;
`

const FooterCard = styled.div`
  margin-left: 100px;
`

const BottomIcon = styled.div`
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

const EnregistrerButton = styled.button`
  color: white;
  background-color: #ff0f00;
  border: none;
  padding: 12px;
  width: 200px;
`

const InputAdr = styled.input`
  padding: 12px;
  width: 200px;
`

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        {/* -----Footer Top Section ------ */}
        <FooterStyleDiv>
          <FooterList>
            <FooterListDiv>EXPLORER</FooterListDiv>
            <br />
            <h4>Ce que nous faisons</h4>
            <h4>YnovFunding financement</h4>
          </FooterList>
          <FooterList>
            <FooterListDiv>A PROPOS</FooterListDiv>
            <br />
            <h4>A propos de nous</h4>
            <h4>Blog</h4>
            <h4>Contact</h4>
          </FooterList>

          <FooterCard>
            <div>
              <h2>
                <strong> Découvrez-le en premier sur YnovFunding</strong>
              </h2>
            </div>
            <h4>
              Découvrez des produits nouveaux et astucieux dans <br />
              la newsletter d'YnovFunding
            </h4>
            <br />
            <InputAdr placeholder='Votre adresse mail' />
            <br />
            <EnregistrerButton>S'enregistrer</EnregistrerButton>
          </FooterCard>
        </FooterStyleDiv>
        <br />
        {/* ---------Footer Bottom Section ---------- */}
        {/* Icone des réseaux sociaux */}
        <BottomIcon>
          <div>
            <FacebookOutlined />
          </div>
          <div>
            <TwitterOutlined />
          </div>
          <div>
            <YoutubeFilled />
          </div>
          <div>
            <InstagramOutlined />
          </div>
          <div>
            <LinkedinFilled />
          </div>
        </BottomIcon>
        {/* Droite noir en footer */}
        <hr style={{ color: '#dddddd', width: '100%' }} />
        <div>
          <div>
            <div>© 2021 YnovFunding. Tous droits réservés</div>
          </div>
        </div>
      </FooterStyle>
    </div>
  )
}

export default Footer
