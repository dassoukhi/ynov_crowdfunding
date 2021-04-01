import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import styled from 'styled-components'
import NavvBar from '../navBar'
import Footer from '../footer'
import ButtonLike from '../buttonLike'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Payment from '../payment'

const Card = styled.div`
  /* margin: auto;
  min-width: 600px;
  max-width: 2000px;

  min-height: 100%;
  display: inline-block;
  float: left;
  width: 50%;
  border-radius: 0.2rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px; */

  //////////////////////////////
  //min-height: 100%;
  border-radius: 0.2rem;
  padding: 40px;
  font-size: 20px;

  /* @media screen and (min-width: 768px) {
    margin: auto;
    min-height: 100%;
    display: inline-block;
    float: left;
    width: 50%;
    border-radius: 0.2rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
  } */
`
const StyleImageUploadProgress = styled.progress`
  width: 100%;
  clear: both;
  border: 1px solid #34ca96;
  border-radius: 4px;
`
const StyleSpan = styled.span`
  color: #268366;
`

const StyleImg = styled.img`
  height: 90%;
  width: 90%;
  text-align: center;
  margin: auto;
  display: flex;

  @media screen and (min-width: 768px) {
    height: 30%;
    width: 30%;
    text-align: center;
    margin: auto;
    display: flex;
  }
`

const StyleTitle = styled.p`
  font-size: 20px;
  text-align: justify;
`
const StyleDesc = styled.p`
  font-size: 18px;
  text-align: justify;
`
const Detail = props => {
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id
  const [test, setTest] = useState()
  const [donation, setDonation] = useState(0)
  const [fond, setfond] = useState(0)
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
  const [icone, setIcone] = useState()
  // Get the color of a like (red or white)
  // Default white

  useEffect(() => {
    //console.log(db)
    //use a firestore db to retrieve data for a post
    db.collection('popular_projects')
      // eslint-disable-next-line react/prop-types
      .doc(id)
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        setTest(snapshot.data())
      })
  }, [])

  const handleChangeDonation = e => {
    setDonation(e.target.value)
  }
  const handleSubmit = () => {
    // db.collection('popular_projects')
    //   // eslint-disable-next-line react/prop-types
    //   .doc(id)
    //   .onSnapshot(snapshot => {
    //     //every time a new post is added do this
    //     setfond(snapshot.data().price)
    //   })
    if (test) {
      console.log('prix : ', test.price)
      db.collection('popular_projects')
        // eslint-disable-next-line react/prop-types
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

  //Add a post into Favorite (localStorage)

  return (
    <div>
      <ReactNotification />
      <NavvBar />
      {test ? (
        <div>
          <Card>
            {/* Image du produit */}
            <StyleImg
              src={test.avatar}
              alt={test.name}
              // style={{ height: '70%', width: '70%' }}
            />
            {/* Détails du produit */}
            <div>
              <div>
                <StyleSpan>Financement en cours</StyleSpan>

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
                {String(test.deadline)}
              </div>
              <br />
              <div>
                <StyleTitle>
                  <strong>Faire un don ?</strong>
                </StyleTitle>

                <div>
                  <label>Montant que vous souhaitez donner?</label>
                  <div>
                    <input
                      type='number'
                      step='any'
                      min='1.00'
                      placeholder={null}
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
