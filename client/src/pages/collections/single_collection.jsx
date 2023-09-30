import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import institutionsData from './tempAssets/tempInstit.json'
// import artifactsData from './tempAssets/tempArtifacts.json'
import ImageContainer from '../../components/containers/ImageContainer'
import ArtifactCard from '../../components/cards/home/ArtifactCard'
import InstHomeColl_ImageContainer from './notused/institute/InstColl_ImageContainer'
import './style.css'

function Single_collection() {
  const { param1 } = useParams() //collection id
  const [collectionObject, setCollectionObject] = useState(null);
  const [collectionUser, setCollectionUser] = useState(null);
  useEffect(() => {
    if (param1) {
      const fetchCollections = async () => {
        const collectionResponse = await fetch(`http://localhost:5000/api/collection/${param1}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'true'
          }
        })
        const collectionJson = await collectionResponse.json()
        if (collectionResponse.ok) {
          setCollectionObject(collectionJson);
          // console.log(collectionJson);
        } else { }
      }
      if(collectionObject !== null){
        const fetchCollectionUser = async () => {
          
          const collectionUserResponse = await fetch(`http://localhost:5000/api/user/${collectionObject.ownerName}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'true'
            }
          })
          const collectionUserJson = await collectionUserResponse.json()
          if (collectionUserResponse.ok) {
            setCollectionUser(collectionUserJson);
            console.log(collectionUserJson)
          } else { 
            console.log('error')
          }
        }
        fetchCollectionUser()
      }
      
      fetchCollections()
      
      

    }
   

  }, []);


  return (
    <div className='instit--collhomepage--main--cont'>
      <div className='instit--collhomepage--cont'>
        <div className='instit--collhomepage--title--cont'>
          <div className='instit--collhomepage--title--img'>
          {/* <div className={collectionUser.isInstit ? 'coll--avatar--cont instit--shape' : 'coll--avatar--cont indiv--shape'}
            // 'coll--avatar--cont'
            > 
              // <img></img> 
            </div>*/}
          </div> 
          {collectionObject? collectionObject.collectionName :"Loading..."}
        </div>
        <div className='instit--collhomepage--content--cont'>
          {/* {institution.description} */}
          {/* {institution.collections.map((collection) => (
                <div
                  className='browse--instit--collection--card--1'
                  key={collection.id}
                >
                  <InstHomeColl_ImageContainer
                    imageUrl={collection.imgurl}
                    collName={collection.name}
                    parentid={institution.id}
                    collectionid={collection.id}
                  />
                </div>
              ))} */}
        </div>
      </div>
    </div>
  )

  // } else if (param1) {
  // const institution = institutions.find((inst) => inst.id === param1)

  // }

  // return (
  // <div>
  // test
  // </div>
  // ) // If neither param1 nor param2 is provided, return null or display an appropriate message
}

export default Single_collection
