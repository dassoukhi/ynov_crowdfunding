import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import {
  CampaignStyle,
  CampaignCard,
  DivResp,
  InfoDiv,
  FraisInfoDiv,
  TitleH2,
  TitleH1
} from './indexStyle'

const Campaign = () => {
  const history = useHistory()

  const { t } = useTranslation()

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
        <strong>{t('campaign.title')}</strong>
      </TitleH1>
      <DivResp>
        <CampaignCard onClick={newProject}>
          <TitleH2>{t('campaign.ajProj.title')}</TitleH2>
          <p style={{ color: 'black', fontSize: '18px', textAlign: 'center' }}>
            {t('campaign.ajProj.desc')}
          </p>
          <FraisInfoDiv>{t('campaign.ajProj.frais')}</FraisInfoDiv>
        </CampaignCard>
        <CampaignCard onClick={newGiver}>
          <TitleH2 style={{ marginTop: '50px' }}>
            {t('campaign.don.title')}
          </TitleH2>
          <FraisInfoDiv>{t('campaign.don.frais')}</FraisInfoDiv>
        </CampaignCard>
      </DivResp>
      <InfoDiv>{t('campaign.info')}</InfoDiv>
    </CampaignStyle>
  )
}

export default Campaign
