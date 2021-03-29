import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db } from './../../config/firebase'
import white from './white.png'
import red from './red.png'
import { Link } from 'react-router-dom'

const Card = styled.div`
  width: 100%;
  height: auto;
  display: block;
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
  margin: auto;
  float: left;
  border-radius: 0.2rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;

  @media screen and (min-width: 768px) {
    :hover {
      box-shadow: 1px 8px 10px grey;
      -webkit-transition: box-shadow 0.1s ease-in;
    }
    margin: auto;
    min-height: 100%;
    display: inline-block;
    float: left;
    width: 25%;
    border-radius: 0.2rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
  }
`
const StyleTextLeftH2 = styled.div`
  //margin-left: 10%;
  //text-align: center;
`
// const StyleContainer = styled.div`
//   /display: flex;
//   width: 100%;
//   @media screen and (max-width: 768px) {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     padding: 20px 100px;
//   }
// `
const ButtonImg = styled.img`
  width: 30px;
  height: 30px;
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

const StyleImageUploadProgress = styled.progress`
  width: 100%;
  clear: both;
  border: 1px solid #34ca96;
  border-radius: 4px;
`
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
      <StyleTextLeftH2>
        <p style={{ textAlign: 'center', fontSize: '24px' }}>
          <strong>Les projets populaires</strong>
        </p>
      </StyleTextLeftH2>
      <div>
        {popular.map((item, index) => {
          //console.log(item.popular_projects)
          return (
            <Card key={index}>
              {/* Image du produit */}
              <Link key={index} to={`/project/${item.id}`}>
                <img
                  src={item.popular_projects.avatar}
                  alt={item.popular_projects.name}
                  style={{ height: '100%', width: '100%' }}
                />
              </Link>
              {/* Détails du produit */}
              <div style={{ height: '100px', textAlign: 'justify' }}>
                <div>
                  <span style={{ color: '#268366' }}>Financement en cours</span>

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
                  <Link key={index} to={`/project/${item.id}`}>
                    {/* Print le nom */}
                    {item.popular_projects.name}
                  </Link>
                </h5>

                {/* Print la description */}
                <p style={{ fontSize: '12px', textAlign: 'justify' }}>
                  {item.popular_projects.description}
                </p>
                {/* Print le prix */}
                <p>{item.popular_projects.price} €</p>
                {/* Print le pourcentage */}
                <div
                  style={{
                    paddingTop: 4,
                    float: 'right'
                  }}
                >
                  {Math.round(
                    (item.popular_projects.price /
                      item.popular_projects.recolte) *
                      100
                  )}{' '}
                  %
                </div>
                {/* Print bar de progression */}
                <StyleImageUploadProgress
                  value={Math.round(
                    (item.popular_projects.price /
                      item.popular_projects.recolte) *
                      100
                  )}
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
                  {item.popular_projects.no_of_days_left}
                  {/* {Math.floor(
                      item.popular_projects.deadline -
                        item.popular_projects.timestamp
                    ) /
                      (1000 * 3600 * 24)} */}
                  {/* {Math.floor(item.popular_projects.deadline) /
                      (1000 * 3600 * 24)} */}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
      {/* <StyleContainer>
        {popular.map((post => {
          console.log(post)
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <p>{post.name}</p>
            </div>
          )
        })}
      </StyleContainer> */}
    </div>
  )
}

export default ProjectCard
