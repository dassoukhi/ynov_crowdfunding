import React, { useEffect, useState } from 'react'
import white from '../projectCard/white.png'
import red from '../projectCard/red.png'
import { db } from './../../config/firebase'
import { useSelector } from 'react-redux'

import { ButtonImg } from './buttLikeStyle'

// eslint-disable-next-line react/prop-types
const ButtonLike = ({ postId }) => {
  const [icon, setIcon] = useState()
  const [likes, setLikes] = useState()
  const user = useSelector(state => state.user.userValue)

  useEffect(() => {
    db.collection('popular_projects')
      .doc(postId)
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        let post = snapshot.data()
        let li = post.likes
        setLikes(li)
        let exist = li.find(e => e === user.uid)
        if (exist) {
          setIcon(red)
        } else {
          setIcon(white)
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      onClick={() => likeClick()}
    ></ButtonImg>
  )
}

export default ButtonLike
