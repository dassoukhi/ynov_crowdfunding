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
  position: absolute;
  bottom: 50;
  left: 0;
  padding: 60px 10px;
`

const FooterList = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
  font-size: 17px;
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

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        {/* -----Footer Top Section ------ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <FooterList>
            <div style={{ color: 'grey' }}>EXPLORER</div>
            <br />
            <div>Ce que nous faisons</div>
            <div>Financement</div>
            <div>GoFundMe</div>
          </FooterList>
          <FooterList>
            <div style={{ color: 'grey' }}>A PROPOS</div>
            <br />
            <div>A propos de nous</div>
            <div>Blog</div>
            <div>Contact</div>
          </FooterList>

          <FooterCard>
            <div>
              <strong> Découvrez-le en premier sur YnovFunding</strong>
            </div>
            <div>
              Découvrez des produits nouveaux et astucieux dans <br />
              la newsletter d'YnovFunding
            </div>
            <br />
            <input
              placeholder='Votre adresse mail'
              style={{ padding: '12px', width: '200px' }}
            />
            <br />
            <br />
            <div
              style={{ display: 'flex', flexDirection: 'row', margin: '-9px' }}
            ></div>
            <br />
            <button
              style={{
                color: 'white',
                backgroundColor: '#FF0F00',
                border: 'none',
                padding: '12px',
                width: '200px'
              }}
            >
              S'enregistrer
            </button>
          </FooterCard>
        </div>
        <br />
        {/* ---------Footer Bottom Section ---------- */}
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
        <hr style={{ color: '#dddddd', width: '60%' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '60%',
            justifyContent: 'space-around',
            marginLeft: '20%'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              fontSize: '15px',
              marginLeft: '20%'
            }}
          >
            <div style={{ margin: '10px' }}>
              © 2021 YnovFunding. Tous droits réservés
            </div>
          </div>
        </div>
      </FooterStyle>
    </div>
  )
}

export default Footer
