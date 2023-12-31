import React, { useEffect, useState } from 'react';
import { useMyContext } from "../../context/FLContext";
import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './stylev2.css';
import AppContentWrapper from '../../components/containers/AppContentWrapper';
import PageContainer from '../../components/containers/PageContainer';
import ContentTitle from '../../components/containers/ContentTitle';
import CollectionCard_v2 from '../../components/cards/home/CollectionCard_v2';
import PaginatedPurchaseContainer from '../../components/containers/Paginated/PaginatedPurchaseContainer';

import UpdatePfpPopup from './UpdatePfpPopup';
import UpdateBioPopup from './UpdateBioPopup';
import UserProfilePicture from '../../components/profilePicture/UserProfilePicture';

import API_BASE_URL from '../../apiConfig';

function Profile() {

  // const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Lorem ipsum dolor sit amet consectetur adipiscing. Consectetur libero id faucibus nisl tincidunt eget nullam. Cursus sit amet dictum sit amet justo donec enim. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Nunc non blandit massa enim. Non enim praesent elementum facilisis leo vel fringilla. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Nulla posuere sollicitudin aliquam ultrices sagittis. Elit sed vulputate mi sit amet mauris commodo. Eu tincidunt tortor aliquam nulla. Justo laoreet sit amet cursus sit amet. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsum dolor sit amet consectetur adipiscing elit.';

  const { userData, currentUserId, currentUserObject, setCurrentUserObject } = useMyContext();
  const [userPurchases, setUserPurchases] = useState(null);
  const [toggleView, setToggleView] = useState(false);
  const [isPfpPopupVisible, setPfpPopupVisible] = useState(false);
  const [isBioPopupVisible, setBioPopupVisible] = useState(false)

  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  useEffect(() => {
    const fetchUserPurchases = async () => {
      try {
        const userResponse = await fetch(`${API_BASE_URL}/api/user/${currentUserId}/purchase`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'true',
          },
        });
        if (userResponse.ok) {
          const userPurchases = await userResponse.json();
          // const temp = `${userJson.firstName} ${userJson.lastName}`;
          console.log(userPurchases)
          setUserPurchases(userPurchases)
        } else {
          // Handle error
          console.log('bruh');
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchUserPurchases();
  }, [currentUserId]);

  return (
    <AppContentWrapper>
      <PageContainer>
        {isPfpPopupVisible && currentUserId &&
          <UpdatePfpPopup
            userId={currentUserId}
            clickToExit={() => setPfpPopupVisible(false)}
            onUploadSuccess={() => setPfpPopupVisible(false)}
            onUploadError={() => setPfpPopupVisible(false)}
          />
        }
        {isBioPopupVisible && currentUserId &&
          <UpdateBioPopup
            userId={currentUserId}
            bioIn={currentUserObject.bio}
            onClose={() => setBioPopupVisible(false)}
            onUpdateSuccess={() => setBioPopupVisible(false)}
            onUpdateError={() => setBioPopupVisible(false)}
          />
        }
        {currentUserObject &&
          <div className="profile--banner">
            <div className='banner--gradient'></div>
            {currentUserObject.userBannerImage ?
              <div className="banner--img">
                <img src={`${API_BASE_URL}/uploaded_files/${currentUserObject._id}/Banner/${currentUserObject.userBannerImage}`} alt={`Image ${currentUserObject.userBannerImage}`} />
              </div>
              :
              <div>

              </div>
            }
          </div>
        }
        <div className='profile--v2--cont'>
          <div className='left--profile--v2--cont'>
            <div className='left--profile--v2--info--cont'>
              {/* top container with profile pic, edit, name, email & connect wallet btn */}
              {currentUserObject &&
                <div className='profile--v2--avatar--name'>

                  <div className='profile--v2--avatar--img-n-edit'>

                    {currentUserObject &&
                      <div className='profile--v2--avatar--cont'>
                        <UserProfilePicture currentUserObject={currentUserObject} size={1}/>
                      </div>
                    }

                    <button className='profile--v2--edit--btn' onClick={() => setPfpPopupVisible(true)}>Edit</button>
                  </div>

                  <div className='left--profile--v2--text--cont'>
                    <h3>{currentUserObject ? currentUserObject.firstName + " " + currentUserObject.lastName : 'Loading...'}</h3>
                    <h4>{currentUserObject ? currentUserObject.username : 'Loading...'}</h4>

                  </div>
                  <button className='profile--v2--wallet--btn'>Connect A Wallet</button>
                </div>
              }

              {/* container with social buttons */}
              <div className='profile--v2--socials--cont'>
                <button className='profile--v2--socials--btn'><TiSocialFacebook /> </button>
                <button className='profile--v2--socials--btn'><FaTwitter /> </button>
                <button className='profile--v2--socials--btn'><FaTelegramPlane /> </button>
                <button className='profile--v2--socials--btn'><AiFillInstagram /> </button>
              </div>
              {/* bio container */}
              <div className='profile--v2--bio--cont'>
                <h3>Bio:<button className='profile--v2--wallet--btn' onClick={() => setBioPopupVisible(true)}>Edit</button></h3>
                <p>{currentUserObject.bio}</p>
              </div>
            </div>

          </div>



          <div className='right--profile--v2--cont'>

            <section className='right--profile--v2--inner--box'>

              {currentUserObject &&
                <>
                  {currentUserObject.userCollections ?
                    <>
                      <ContentTitle>
                        <h3>Created Collections:</h3>
                      </ContentTitle>

                      <div className='profile--v2--horiz--scroll'>
                        {currentUserObject.userCollections.map((collection, index) => {
                          return (
                            <CollectionCard_v2
                              key={collection._id}
                              collectionIn={collection}
                              toggleView={toggleView}
                              style={{}}
                            />
                          );
                        })
                        }
                      </div>

                    </>

                    :
                    <div>
                      No Created Collections!
                    </div>}

                </>}


              <div className='right--profile--v2--content--cont--row--2'>
                {userPurchases ?
                  <>
                    <div className='blurring--bg--title'>
                      <h3>Licensed Assets:</h3>
                    </div>

                    <PaginatedPurchaseContainer itemsPerPage={8} data={userPurchases} />
                  </>
                  :
                  <div>
                    no purchases
                  </div>
                }

              </div>
            </section>



          </div>
        </div>
      </PageContainer>
    </AppContentWrapper>



  )
}

export default Profile