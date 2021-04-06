import React from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd'
import { useTranslation } from 'react-i18next'
import {
  CarousalPage1,
  CarousalPage2,
  CarousalPage3,
  CarousalPage4,
  CarousalPage5,
  TitleSpan,
  DetailSpan
} from './carousStyle'

const Caroussel = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Carousel effect='fade' dots={null} autoplay>
        {/* Carousal Page 1 */}
        <div>
          <CarousalPage1>
            <br />
            <br />
            <br />
            <TitleSpan>{t('ban1.title')}</TitleSpan>
            <br />
            <DetailSpan>{t('ban1.desc1')}</DetailSpan>
            <br />
            <DetailSpan>{t('ban1.desc2')}</DetailSpan>
          </CarousalPage1>
        </div>
        {/* Carousal Page 2 */}
        <div>
          <CarousalPage2>
            <br />
            <br />
            <br />
            <TitleSpan>{t('ban2.title')}</TitleSpan>
            <br />
            <DetailSpan>{t('ban2.desc1')}</DetailSpan>
            <br />
            <DetailSpan>{t('ban2.desc2')}</DetailSpan>
          </CarousalPage2>
        </div>
        {/* Carousal Page 3 */}
        <div>
          <CarousalPage3>
            <br />
            <br />
            <br />
            <TitleSpan>{t('ban3.title')}</TitleSpan>
            <br />
            <DetailSpan>{t('ban3.desc1')}</DetailSpan>
            <br />
            <DetailSpan>{t('ban3.desc2')}</DetailSpan>
          </CarousalPage3>
        </div>
        {/* Carousal Page 4 */}
        <div>
          <CarousalPage4>
            <br />
            <br />
            <br />
            <TitleSpan>{t('ban4.title')}</TitleSpan>
            <br />
            <DetailSpan>{t('ban4.desc1')}</DetailSpan>
            <br />
            <DetailSpan>{t('ban4.desc2')}</DetailSpan>
          </CarousalPage4>
        </div>
        {/* Carousal Page 5 */}
        <div>
          <CarousalPage5>
            <br />
            <br />
            <br />
            <TitleSpan>{t('ban5.title')}</TitleSpan>
            <br />
            <DetailSpan>{t('ban5.desc1')}</DetailSpan>
            <br />
            <DetailSpan>{t('ban5.desc2')}</DetailSpan>
          </CarousalPage5>
        </div>
      </Carousel>
    </div>
  )
}
export default Caroussel
