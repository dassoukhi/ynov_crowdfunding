import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import NavvBar from '../navBar'
import Footer from '../footer'
import ButtonLike from '../buttonLike'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Payment from '../payment'
import { useTranslation } from 'react-i18next'
import {
  Card,
  StyleImageUploadProgress,
  StyleSpan,
  StyleImg,
  StyleTitle,
  StyleDesc
} from './indexStyle'

const Detail = props => {
  const { t } = useTranslation()
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id
  const [test, setTest] = useState()
  const [donation, setDonation] = useState(0)

  useEffect(() => {
    //use a firestore db to retrieve data for a post
    db.collection('popular_projects')
      .doc(id)
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        setTest(snapshot.data())
      })
  })

  const handleChangeDonation = e => {
    setDonation(e.target.value)
  }
  const handleSubmit = () => {
    if (test) {
      db.collection('popular_projects')
        .doc(id)
        .update('price', Number(test.price) + Number(donation))
        .then(function () {
          console.log('Montant successfully added!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  }

  const convertDate = e => {
    var convert = Date.parse(e)
    let now = Date.now()

    var seconds = Math.floor((convert - now) / 1000)
    var minutes = Math.floor(seconds / 60)
    var hours = Math.floor(minutes / 60)
    var days = Math.floor(hours / 24)

    hours = hours - days * 24
    minutes = minutes - days * 24 * 60 - hours * 60
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

    return days
  }

  return (
    <div>
      <ReactNotification />
      <NavvBar />
      {test ? (
        <div>
          <Card>
            {/* Image du produit */}
            <StyleImg src={test.avatar} alt={test.name} />
            {/* Détails du produit */}
            <div>
              <div>
                <StyleSpan>{t('financement')}</StyleSpan>

                <ButtonLike postId={id} />
              </div>
              <StyleTitle>
                {/* Print le nom */}
                <strong>{test.name}</strong>
              </StyleTitle>

              {/* Print la description */}
              <StyleDesc>{test.description}</StyleDesc>
              {/* Print le prix */}
              <p>
                {test.price}€ / {test.recolte}€
              </p>
              {/* Print le pourcentage */}
              <div
                style={{
                  paddingTop: 4,
                  float: 'right'
                }}
              >
                {Math.round((test.price / test.recolte) * 100)} %
              </div>
              {/* Print bar de progression */}
              <StyleImageUploadProgress
                value={Math.round((test.price / test.recolte) * 100)}
                max='100'
              />
              {/* Print nombre de jour restant */}
              <div
                style={{
                  padding: '4px 6px 0px 20px',
                  clear: 'both',
                  textAlign: 'center'
                }}
              >
                {convertDate(test.deadline) + ' ' + t('days')}
              </div>
              <br />
              <div>
                <StyleTitle>
                  <strong>{t('campaign.don.title')} ?</strong>
                </StyleTitle>

                <div>
                  <label>{t('gived.mntDesc')}</label>
                  <div>
                    <input
                      type='number'
                      step='any'
                      min='1.00'
                      placeholder={t('gived.mntDesc')}
                      value={donation}
                      onChange={handleChangeDonation}
                      style={{
                        width: '90%',
                        color: 'black',
                        textAlign: 'center'
                      }}
                      required
                    />
                    <span className='eur'> €</span>
                  </div>
                </div>
                <Payment handleSubmit={handleSubmit} />
              </div>
            </div>
          </Card>
        </div>
      ) : (
        ''
      )}
      <Footer />
    </div>
  )
}

export default Detail
