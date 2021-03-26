import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import { db } from './../../config/firebase'
const Gived = () => {
  const [donation, setDonation] = useState(0)
  const [fond, setfond] = useState(0)

  const handleChangeDonation = e => {
    setDonation(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    db.collection('donation')
      .doc('fonds')
      .onSnapshot(snapshot => {
        setfond(snapshot.data().montant)
      })

    if (donation) {
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
  return (
    <div>
      <Navbar />
      <form className='start-camp-form' onSubmit={handleSubmit}>
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
          <input type='submit' value='Donner'></input>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Gived
