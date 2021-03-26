import React, { useState, useEffect } from 'react'
//import data from '../../data.json'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { db } from './../../config/firebase'

import white from './white.png'
import red from './red.png'
import { Link } from 'react-router-dom'

const Card = styled.div`
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
  margin: auto;
  min-width: 600px;
  max-width: 2000px;
`
const styleTextLeftH2 = styled.div`
  margin-left: 10%;
`
const styleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 100px;
`
const ButtonImg = styled.img`
  width: 22px;
  height: 22px;
  float: right;
  margin-right: 1px;
  align: left;
`

// const styleCard = styled.div`
//   min-height: '100%';
//   display: 'inline-block';
//   float: 'left';
//   width: '20%';
//   cursor: pointer;
//   border-radius: '0.2rem';
//   flex-direction: 'row';
//   justify-content: 'space-between';
//   padding: '30px';
// `

const ProjectCard = () => {
  const [popular, setPopular] = useState([])

  const username = localStorage.getItem('username')
  // eslint-disable-next-line no-unused-vars
  const [icone, setIcone] = useState()
  // Get the color of a like (red or white)
  // Default white
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

  //console.log('Collection ->', db.collection('popular_projects'))
  return (
    <div>
      <styleTextLeftH2>
        <h2>Les projets populaires</h2>
      </styleTextLeftH2>
      <styleContainer>
        {popular.map((item, index) => {
          console.log(item.popular_projects)
          return (
            <Link key={index} to={'/project/' + item.id}>
              <Card key={index}>
                <div
                  style={{
                    minHeight: '100%',
                    display: 'inline-block',
                    float: 'left',
                    width: '50%',
                    cursor: 'pointer',
                    borderRadius: '0.2rem',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '30px'
                  }}
                >
                  {/* Image du produit */}
                  <img
                    src={item.popular_projects.avatar}
                    alt={item.popular_projects.name}
                    style={{ height: '100%', width: '100%' }}
                  />
                  {/* Détails du produit */}
                  <div style={{ height: '100px', textAlign: 'justify' }}>
                    <div>
                      <span style={{ color: '#268366' }}>
                        Financement en cours
                      </span>

                      <ButtonImg
                        src={getIcone({ index, username })}
                        // pass all data to store into favorites then use it to print into /favorites
                        onClick={() =>
                          addInStorage({
                            index,
                            username
                            // item.popular_projects.name,
                            // item.popular_projects.description,
                            // item.popular_projects.avatar
                          })
                        }
                      ></ButtonImg>
                    </div>
                    <h5
                      style={{
                        fontSize: '14px',
                        textAlign: 'justify'
                      }}
                    >
                      {/* Print le nom */}
                      {item.popular_projects.name}
                    </h5>
                    {/* Print la description */}
                    <p style={{ fontSize: '12px', textAlign: 'justify' }}>
                      {item.popular_projects.description}
                    </p>
                    {/* Print le prix */}
                    <p>{item.popular_projects.price}</p>
                    {/* Print le pourcentage */}
                    <div
                      style={{
                        paddingTop: 4,
                        float: 'right'
                      }}
                    >
                      {item.popular_projects.percentage}
                    </div>
                    {/* Print bar de progression */}
                    <hr
                      style={{
                        width: '100%',
                        clear: 'both',
                        border: '4px solid #34ca96',
                        borderRadius: '4px'
                      }}
                    />
                    {/* Print nombre de jour restant */}
                    <div
                      style={{
                        padding: '4px 6px 0px 20px',
                        clear: 'both',
                        textAlign: 'center'
                      }}
                    >
                      {item.popular_projects.no_of_days_left}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </styleContainer>
      {/* <styleContainer>
        {popular.map((post => {
          console.log(post)
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <p>{post.name}</p>
            </div>
          )
        })}
      </styleContainer> */}
    </div>
  )
}

export default ProjectCard
