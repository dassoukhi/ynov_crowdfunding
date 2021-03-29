import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import { db } from './../../config/firebase'
import { useHistory } from 'react-router'
import StripeCheckout from 'react-stripe-checkout'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'
const Gived = () => {
  const [donation, setDonation] = useState(5)
  const [fond, setfond] = useState()
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    history.push('/')
  }

  const handleChangeDonation = e => {
    setDonation(e.target.value)
  }

  const handleSubmit = () => {
    db.collection('donation')
      .doc('fonds')
      .onSnapshot(snapshot => {
        setfond(snapshot.data().montant)
      })
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
    } else {
      alert('Vous devez remplir la case de donation')
    }
  }
  const handleToken = (token, adress) => {
    console.log({ token, adress })
    if (token) {
      handleSubmit()
      store.addNotification({
        title: 'Paiement effectué avec succés!',
        message: 'Merci de votre générosité.',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
    } else {
      store.addNotification({
        title: 'Paiement non effectué',
        message: 'Une erreur est produit',
        type: 'error',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
    }
  }
  return (
    <div>
      <ReactNotification />
      <Navbar />
      <div className='start-camp-section' align='center'>
        <label>Combien d'argent aimeriez-vous donner?</label>
        <div className='goal-input'>
          <input
            className='amount-input'
            type='number'
            step='any'
            min='1.00'
            placeholder={null}
            value={donation}
            onChange={handleChangeDonation}
            required
          />
          <span className='eur'>EUR</span>
        </div>
      </div>

      <div align='center'>
        <StripeCheckout
          stripeKey='pk_test_51Ia9vMBob8pzUf4Ur0hAdyqds42T7ftb5URwhVi7anAevgpj7X1cqEA2LTtWHahTpPLT5yA0vGSqDAct3l3hwFFI00DKCVo64L'
          token={handleToken}
        />
      </div>

      <Footer />
    </div>
  )
}

export default Gived
