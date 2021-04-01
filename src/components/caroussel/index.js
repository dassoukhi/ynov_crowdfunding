/* eslint-disable react/no-unescaped-entities */
import React from 'react'
//Css pour le caroussel
import 'antd/dist/antd.css'
import { Carousel } from 'antd'
import styled from 'styled-components'

const CarousalPage1 = styled.div`
  z-index: 1;
  position: relative;
  height: 300px;
  width: 100%;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608667675/m6guh5tq0v9ypc1vd2ej.jpg');
  @media screen and (max-width: 762px) {
    display: none;
  }
`

const CarousalPage2 = styled.div`
  height: 300px;
  width: 100%;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608748919/tqyqpnl9vkx3zx1ddqnj.png');
  @media screen and (max-width: 762px) {
    display: none;
  }
`

const CarousalPage3 = styled.div`
  height: 300px;
  width: 100%;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608658307/gchyvtpphekdl8zonr6h.jpg');
  @media screen and (max-width: 762px) {
    display: none;
  }
`

const CarousalPage4 = styled.div`
  height: 300px;
  width: 100%;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608749867/thnmyeklefbnyekueggw.jpg');
  @media screen and (max-width: 762px) {
    display: none;
  }
`

const CarousalPage5 = styled.div`
  height: 300px;
  width: 100%;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608750044/ogmigx3rbohk3dsjkalk.jpg');
  @media screen and (max-width: 762px) {
    display: none;
  }
`

const TitleSpan = styled.span`
  margin: 5%;
  font-size: 20px;
  font-size: 700;
`
const DetailSpan = styled.span`
  margin: 5%;
`
const Caroussel = () => {
  return (
    <div>
      <Carousel
        //style={{ marginTop: '-16px', padding: '10px', margin: 'auto' }}
        effect='fade'
        dots={null}
        autoplay
      >
        {/* Carousal Page 1 */}
        <div>
          <CarousalPage1>
            <br />
            <br />
            <br />
            <TitleSpan>
              Olive Pro - Appareils auditifs et oreillettes Bluetooth 2 en 1
            </TitleSpan>
            <br />
            <DetailSpan>
              Une audition améliorée pour les sons, la musique et les
              conversations.
            </DetailSpan>
            <br />
            <DetailSpan>Une audition abordable pour tous.</DetailSpan>
          </CarousalPage1>
        </div>
        {/* Carousal Page 2 */}
        <div>
          <CarousalPage2>
            <br />
            <br />
            <br />
            <TitleSpan>
              inCharge X - Le couteau suisse des câbles de 100W
            </TitleSpan>
            <br />
            <DetailSpan>
              Le câble le plus financé par le crowdfunding est de retour !
              Minuscule,
            </DetailSpan>
            <br />
            <DetailSpan>Universel, Câble ultra puissant.</DetailSpan>
          </CarousalPage2>
        </div>
        {/* Carousal Page 3 */}
        <div>
          <CarousalPage3>
            <br />
            <br />
            <br />
            <TitleSpan>
              Aura Mate Pro - Le meilleur scanner Premium mis à jour à ce jour
            </TitleSpan>
            <br />
            <DetailSpan>
              Double appareil photo, Appareil photo pour documents, Utilisation
              avec zoom, 16 MegaPixel.
            </DetailSpan>
            <br />
            <DetailSpan>
              Technologie d'aplatissement des courbes, Numérisation d'un livre
              en 8 minutes.
            </DetailSpan>
          </CarousalPage3>
        </div>
        {/* Carousal Page 4 */}
        <div>
          <CarousalPage4>
            <br />
            <br />
            <br />
            <TitleSpan>
              Phantom - Le skateboard électrique à entraînement direct
            </TitleSpan>
            <br />
            <DetailSpan>
              30 MPH, 48 km d'autonomie. Nouvelle génération de 21700 Lithium
            </DetailSpan>
            <br />
            <DetailSpan>
              Une batterie et un pont de chute en fibre de carbone sur lesquels
              vous pouvez compter.
            </DetailSpan>
          </CarousalPage4>
        </div>
        {/* Carousal Page 5 */}
        <div>
          <CarousalPage5>
            <br />
            <br />
            <br />
            <TitleSpan>
              Flynova Pro - Boomerang spinner avec des tours infinis !
            </TitleSpan>
            <br />
            <DetailSpan>
              Lumières dynamiques｜Sécurité pour les enfants｜Résistant aux
              chocs｜
            </DetailSpan>
            <br />
            <DetailSpan>Longue durée de vie de la batterie</DetailSpan>
          </CarousalPage5>
        </div>
      </Carousel>
    </div>
  )
}
export default Caroussel
