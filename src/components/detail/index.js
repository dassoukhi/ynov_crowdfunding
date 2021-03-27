import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'

const Detail = props => {
  const [test, setTest] = useState()
  useEffect(() => {
    //console.log(db)
    //use a firestore db to retrieve data for a post
    db.collection('popular_projects')
      // eslint-disable-next-line react/prop-types
      .doc(props.match.params.id)
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        setTest(snapshot.data())
      })
  }, [])

  if (test) {
    console.log('he', test.likes)
  }
  return <div>{test ? test.name : ''}</div>
}

export default Detail
