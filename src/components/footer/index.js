import React from 'react'
import 'antd/dist/antd.css'
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeFilled,
  InstagramOutlined,
  LinkedinFilled
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

import {
  FooterStyle,
  FooterStyleDiv,
  FooterList,
  FooterListDiv,
  FooterCard,
  BottomIcon,
  EnregistrerButton,
  InputAdr
} from './indexStyle'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div>
      <FooterStyle>
        {/* -----Footer Top Section ------ */}
        <FooterStyleDiv>
          <FooterList>
            <FooterListDiv>{t('explorer.title')}</FooterListDiv>
            <br />
            <h4>{t('explorer.desc1')}</h4>
            <h4>{t('explorer.desc2')}</h4>
          </FooterList>
          <FooterList>
            <FooterListDiv>{t('about.title')}</FooterListDiv>
            <br />
            <h4>{t('about.desc1')}</h4>
            <h4>{t('about.desc2')}</h4>
            <h4>{t('about.desc3')}</h4>
          </FooterList>

          <FooterCard>
            <div>
              <h2>
                <strong>{t('decouvrir.title')}</strong>
              </h2>
            </div>
            <h4>{t('decouvrir.desc1')}</h4>
            <br />
            <InputAdr placeholder={t('decouvrir.holder')} />
            <br />
            <EnregistrerButton>{t('decouvrir.enregistrer')}</EnregistrerButton>
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
            <div style={{ textAlign: 'center', color: 'black' }}>
              {t('copyright')}
            </div>
          </div>
        </div>
      </FooterStyle>
    </div>
  )
}

export default Footer
