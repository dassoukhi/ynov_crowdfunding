import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import white from '../projectCard/white.png'
import red from '../projectCard/red.png'
import { db } from './../../config/firebase'

const ButtonImg = styled.img`
  width: 22px;
  height: 22px;
  float: right;
  margin-right: 1px;
  align: left;
`

// eslint-disable-next-line react/prop-types
const ButtonLike = ({ postId }) => {
  const [icon, setIcon] = useState()
  const [likes, setLikes] = useState()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    db.collection('popular_projects')
      // eslint-disable-next-line react/prop-types
      .doc(postId)
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        let post = snapshot.data()
        let li = post.likes
        setLikes(li)
        console.log('likes :', li)
        let exist = li.find(e => e === user.uid)
        console.log('icon :', exist)
        if (exist) {
          setIcon(red)
        } else {
          setIcon(white)
        }
      })
  }, [icon])
  const likeClick = () => {
    if (icon === white) {
      let array = [...likes]
      let existe = array.find(e => e === user.uid)
      if (!existe) {
        array.push(user.uid)
        db.collection('popular_projects')
          .doc(postId)
          .update('likes', array)
          .then(function () {
            console.log('Montant successfully added!')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
        setIcon(red)
      }
    } else {
      let array = [...likes]
      let existe = array.find(e => e === user.uid)
      if (existe) {
        let newArray = array.filter(e => e !== user.uid)
        db.collection('popular_projects')
          .doc(postId)
          .update('likes', newArray)
          .then(function () {
            console.log('Montant successfully added!')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
        setIcon(white)
      }
    }
  }
  return (
    <ButtonImg
      src={icon}
      // pass all data to store into favorites then use it to print into /favorites
      onClick={
        () => likeClick()
        // addInStorage({
        //   index,
        //   user
        //   // item.popular_projects.name,
        //   // item.popular_projects.description,
        //   // item.popular_projects.avatar
        // })
      }
    ></ButtonImg>
  )
}

export default ButtonLike
