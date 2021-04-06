import React from 'react'
import left from './crowdLeft.png'
import right from './crowdRight.png'
import { useTranslation } from 'react-i18next'
import { BannerStyle, Stylediv, StyleP1, StyleP2, StyleP3 } from './indexStyle'

const CrowdfundingBanner = () => {
  const { t } = useTranslation()

  return (
    <BannerStyle>
      <img src={left} alt='crowdLeftImg' />
      <Stylediv>
        <StyleP1>
          <strong>{t('bannerC.title')}</strong>
        </StyleP1>
        <StyleP2>{t('bannerC.desc')}</StyleP2>
        <StyleP3>
          <strong>{t('bannerC.info')}</strong>
        </StyleP3>
      </Stylediv>
      <img src={right} alt='crowdRightImg' />
    </BannerStyle>
  )
}

export default CrowdfundingBanner
