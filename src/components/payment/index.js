import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { store } from 'react-notifications-component'

// eslint-disable-next-line react/prop-types
const Payment = ({ handleSubmit }) => {
  // eslint-disable-next-line no-unused-vars
  const handleToken = (token, adress) => {
    //console.log({ token, adress })
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
    <div align='center'>
      <StripeCheckout
        stripeKey='pk_test_51Ia9vMBob8pzUf4Ur0hAdyqds42T7ftb5URwhVi7anAevgpj7X1cqEA2LTtWHahTpPLT5yA0vGSqDAct3l3hwFFI00DKCVo64L'
        token={handleToken}
      />
    </div>
  )
}

export default Payment
