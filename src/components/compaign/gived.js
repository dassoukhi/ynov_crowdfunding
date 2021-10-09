import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import { db } from './../../config/firebase'
import { useHistory } from 'react-router'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Payment from '../payment'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Card, TitleH1, StyleSpan, StyleInput } from './givedStyle'

const Gived = () => {
  const { t } = useTranslation()
  const [donation, setDonation] = useState(5)
  const [fond, setfond] = useState()
  const history = useHistory()
  const user = useSelector(state => state.user.userValue)
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
          <strong>{t('gived.title')}</strong>
        </TitleH1>
        <p>
          {t('gived.desc')}
          <br />
          <br />
          {t('gived.info')}{' '}
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
              <strong>{t('campaign.don.title')} ?</strong>
            </TitleH1>

            <div>
              <label>
                {t('gived.mntDesc')} <StyleSpan> *</StyleSpan>
              </label>
              <div>
                <StyleInput
                  type='number'
                  step='any'
                  min='1.00'
                  placeholder={t('gived.mntDesc')}
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

export default Gived
