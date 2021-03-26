import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import styled from 'styled-components'
import NavvBar from '../navBar'
import white from '../projectCard/white.png'
import red from '../projectCard/red.png'
import Footer from '../footer'

const Card = styled.div`
  margin: auto;
  min-width: 600px;
  max-width: 2000px;

  min-height: 100%;
  display: inline-block;
  float: left;
  width: 50%;
  border-radius: 0.2rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`
const Card2 = styled.div`
  margin: auto;
  min-width: 600px;
  max-width: 2000px;

  width: 50%;
  float: right;
  padding-right: 10%;
`
const StyleImageUploadProgress = styled.progress`
  width: 100%;
  clear: both;
  border: 1px solid #34ca96;
  border-radius: 4px;
`
const ButtonImg = styled.img`
  width: 22px;
  height: 22px;
  float: right;
  margin-right: 1px;
  align: left;
`

const divDetail = styled.div`
  height: 100px;
  width: 100%;
  text-align: justify;
`

const StyleSpan = styled.span`
  color: #268366;
`

const StyleImg = styled.img`
  height: 70%;
  width: 70%;
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
  const [popular, setPopular] = useState([])

  const username = localStorage.getItem('username')
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
  // if (test) {
  //   console.log('données -->', test)
  // }

  const handleChangeDonation = e => {
    setDonation(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    db.collection('popular_projects')
      // eslint-disable-next-line react/prop-types
      .doc(id)
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        setfond(snapshot.data().price)
      })
    setTimeout(() => {
      console.log('This will run after 1 second!')
      if (donation && fond) {
        db.collection('popular_projects')
          // eslint-disable-next-line react/prop-types
          .doc(id)
          .update('price', Number(fond) + Number(donation))
          .then(function () {
            console.log('Montant successfully added!')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
      } else {
        alert('Vous devez remplir la case de donation')
      }
    }, 1000)
  }

  const getIcone = post => {
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
    const isPresent = currentFavorite.find(e => e.index === post.index)

    if (isPresent) {
      return red
    } else {
      return white
    }
  }

  //Add a post into Favorite (localStorage)
  const addInStorage = post => {
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []

    const isPresent = currentFavorite.find(e => e.index === post.index)
    //is not present do that
    if (!isPresent) {
      // add the post into localstorage and change the color red (to say "I like it")
      currentFavorite.push(post)
      localStorage.setItem('favorite', JSON.stringify(currentFavorite))
      setIcone(red)
    }
    //if it's present so do that
    else {
      //I did a filter to sortout the item
      const curr = currentFavorite.filter(
        e => e.index !== isPresent.index && e.username === isPresent.username
      )
      //set the element into localstorage and change the color
      localStorage.setItem('favorite', JSON.stringify(curr))
      setIcone(white)
    }
  }

  useEffect(() => {
    //console.log(db)
    //use a firestore db to retrieve data for a post
    db.collection('popular_projects')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        setPopular(
          snapshot.docs.map(doc => ({
            id: doc.id,
            popular_projects: doc.data()
          }))
        )
      })
  }, [])

  return (
    <div>
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
          </Card>
          <Card2>
            {/* Détails du produit */}
            <divDetail>
              <div>
                <StyleSpan>Financement en cours</StyleSpan>

                <ButtonImg
                  src={getIcone({ id, username })}
                  // pass all data to store into favorites then use it to print into /favorites
                  onClick={() =>
                    addInStorage({
                      id,
                      username
                      // item.popular_projects.name,
                      // item.popular_projects.description,
                      // item.popular_projects.avatar
                    })
                  }
                ></ButtonImg>
              </div>
              <StyleTitle>
                {/* Print le nom */}
                <strong>{test.name}</strong>
              </StyleTitle>

              {/* Print la description */}
              <StyleDesc>{test.description}</StyleDesc>
              {/* Print le prix */}
              <p>{test.price} €</p>
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
                <form onSubmit={handleSubmit}>
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
                          width: '95%',
                          color: 'black',
                          textAlign: 'center'
                        }}
                        required
                      />
                      <span className='eur'> €</span>
                    </div>
                  </div>
                  <div align='center'>
                    {/* <input type='submit' value='Donner'></input> */}
                    <Buttons type='submit' value='Donner'></Buttons>
                  </div>
                </form>
              </div>
            </divDetail>
          </Card2>
        </div>
      ) : (
        ''
      )}
      <Footer />
    </div>
  )
}
const Buttons = styled.input`
  background: #008cba;
  width: 95%;
  float: left;
  //border: 0;
  border: 1px solid #008cba;
  border-style: none;
  outline: none;
`
export default Detail
