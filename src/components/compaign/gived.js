/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import { db } from './../../config/firebase'
import { useHistory } from 'react-router'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Payment from '../payment'
const Gived = () => {
  const [donation, setDonation] = useState(5)
  const [fond, setfond] = useState()
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    db.collection('donation')
      .doc('fonds')
      .onSnapshot(snapshot => {
        setfond(snapshot.data().montant)
      })
  }, [])
  if (!user) {
    history.push('/')
  }

  const handleChangeDonation = e => {
    setDonation(e.target.value)
  }

  const handleSubmit = () => {
    // db.collection('donation')
    //   .doc('fonds')
    //   .onSnapshot(snapshot => {
    //     setfond(snapshot.data().montant)
    //   })
    console.log('This will run after 1 second!')
    if (donation && fond) {
      db.collection('donation')
        .doc('fonds')
        .update('montant', Number(fond) + Number(donation))
        .then(function () {
          console.log('Montant successfully added!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  }

  return (
    <div>
      <ReactNotification />
      <Navbar />
      <Card>
        <TitleH1>
          <strong>
            Collecte de fonds pour les personnes et les causes qui nous tiennent
            à coeur
          </strong>
        </TitleH1>
        <p>
          Nous voulons aider tous les entrepreneurs à réaliser tous les projets
          qui leur tiennent à coeur. La somme que vous verserez sera versé
          auprès des projets qui n'ont pas pu arriver à terme à cause d'un
          manque de financement.
          <br />
          <br />
          Aujourd'hui, nous en sommes à{' '}
          <StyleSpan>
            <strong>{fond} €</strong>
          </StyleSpan>
          .
        </p>
        <br />
        <br />
        <div>
          <div>
            <TitleH1>
              <strong>Faire un don ?</strong>
            </TitleH1>

            <div>
              <label>
                Montant que vous souhaitez donner? <StyleSpan> *</StyleSpan>
              </label>
              <div>
                <StyleInput
                  type='number'
                  step='any'
                  min='1.00'
                  placeholder='Montant que vous souhaitez donner?'
                  value={donation}
                  onChange={handleChangeDonation}
                  required
                />
                <span>€</span>
              </div>
            </div>
            <Payment handleSubmit={handleSubmit} />
          </div>
        </div>
      </Card>

      <Footer />
    </div>
  )
}

const Card = styled.div`
  /* @media screen and (min-width: 768px) {
    :hover {
      //box-shadow: 1px 8px 10px grey;
      -webkit-transition: box-shadow 0.1s ease-in;
    }
    margin: auto;
    display: inline-block;
    float: center;
    width: 50%;
    border-radius: 0.2rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    text-align: justify;
  } */
  :hover {
    //box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
  margin: auto;
  display: inline-block;
  float: center;
  width: 50%;
  border-radius: 0.2rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  text-align: justify;

  float: center;
  width: 100%;
`

const TitleH1 = styled.p`
  /* text-align: justify;
  font-size: 20px; */
  font-size: 20px;
  @media screen and (min-width: 768px) {
    text-align: justify;
    font-size: 40px;
  }
`
const StyleSpan = styled.span`
  color: red;
  float: center;
`
const StyleInput = styled.input`
  width: 95%;
  color: black;
  border: 1px solid black;
  float: left;
  text-align: center;
`
export default Gived
