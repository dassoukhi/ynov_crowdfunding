/* eslint-disable react/no-unescaped-entities */
import React from 'react'
//Css pour le caroussel
import 'antd/dist/antd.css'
import { Carousel } from 'antd'
import styled from 'styled-components'

const CarousalPage1 = styled.div`
  z-index: 1;
  position: relative;
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608667675/m6guh5tq0v9ypc1vd2ej.jpg');
`

const CarousalPage2 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608748919/tqyqpnl9vkx3zx1ddqnj.png');
`

const CarousalPage3 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608658307/gchyvtpphekdl8zonr6h.jpg');
`

const CarousalPage4 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608749867/thnmyeklefbnyekueggw.jpg');
`

const CarousalPage5 = styled.div`
  height: 400px;
  color: #fff;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1608750044/ogmigx3rbohk3dsjkalk.jpg');
`

const Caroussel = () => {
  return (
    <div>
      <Carousel
        style={{ marginTop: '-16px', padding: '10px' }}
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span
              style={{
                margin: '5%',
                fontSize: '20px',
                fontWeight: '700'
              }}
            >
              Olive Pro - Appareils auditifs et oreillettes Bluetooth 2 en 1
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Une audition améliorée pour les sons, la musique et les
              conversations.
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Une audition abordable pour tous.
            </span>
          </CarousalPage1>
        </div>
        {/* Carousal Page 2 */}
        <div>
          <CarousalPage2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span
              style={{
                margin: '5%',
                fontSize: '20px',
                fontWeight: '700'
              }}
            >
              inCharge X - Le couteau suisse des câbles de 100W
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Le câble le plus financé par le crowdfunding est de retour !
              Minuscule,
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Universel, Câble ultra puissant.
            </span>
          </CarousalPage2>
        </div>
        {/* Carousal Page 3 */}
        <div>
          <CarousalPage3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span
              style={{
                margin: '5%',
                fontSize: '20px',
                fontWeight: '700'
              }}
            >
              Aura Mate Pro - Le meilleur scanner Premium mis à jour à ce jour
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Double appareil photo, Appareil photo pour documents, Utilisation
              avec zoom, 16 MegaPixel.
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Technologie d'aplatissement des courbes, Numérisation d'un livre
              en 8 minutes.
            </span>
          </CarousalPage3>
        </div>
        {/* Carousal Page 4 */}
        <div>
          <CarousalPage4>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span
              style={{
                margin: '5%',
                fontSize: '20px',
                fontWeight: '700'
              }}
            >
              Phantom - Le skateboard électrique à entraînement direct
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              30 MPH, 48 km d'autonomie. Nouvelle génération de 21700 Lithium
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Une batterie et un pont de chute en fibre de carbone sur lesquels
              vous pouvez compter.
            </span>
          </CarousalPage4>
        </div>
        {/* Carousal Page 5 */}
        <div>
          <CarousalPage5>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span
              style={{
                margin: '5%',
                fontSize: '20px',
                fontWeight: '700'
              }}
            >
              Flynova Pro - Boomerang spinner avec des tours infinis !
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Lumières dynamiques｜Sécurité pour les enfants｜Résistant aux
              chocs｜
            </span>
            <br />
            <span style={{ margin: '5%' }}>
              Longue durée de vie de la batterie
            </span>
          </CarousalPage5>
        </div>
      </Carousel>
    </div>
  )
}

export { Caroussel }
