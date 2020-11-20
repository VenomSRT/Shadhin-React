import React from 'react';
import './SidebarRight.css';
import { Search } from './Search/Search';

export const SidebarRight = () => {
  return (
    <div className="sidebar right-sidebar">
      <div className="top-part">
        <Search />
        <div className="mobile-logo d-block d-md-none">
          <a href="index.html"><img src="./img/logo.png" alt="logo"/></a>
        </div>
        <div className="user-info">
          <ul>
            <li><a href="#!" className="open-drop" id="usertab2"><i className="fa fa-bell"></i></a></li>
            <li><a href="#!" className="open-drop" id="usertab1"><img src="./img/user.jpg" alt=""/></a></li>
          </ul>
        </div>
        <div className="user-menu" id="usertab1show">
          <ul>
            <li className="waves-effect">
              <a href="my-profile.html">
                <div className="d-flex">
                  <ul className="d-flex user-desc">
                    <li><img src="./img/user.jpg" className="dropdown-user" alt="user"/></li>
                    <li><h4 className="user-name">Johnathon Joe</h4><p className="phone">+8801710 000 000</p></li>
                  </ul>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </a>
            </li>
            <li className="waves-effect">
              <div className="d-flex upgrade-to-pro">
                <div className="user-upgrade">
                  <h4>Upgrade to pro</h4>
                  <p>Ad-free, unlimited offline downloads and create playlist</p>
                </div>
                <a href="#!" className="waves-effect user-get-pro">Get Pro</a>
              </div>
            </li>
            <li>
              <div className="d-flex">
                <h4>App push notifications</h4>
                <label className="switch">
                  <input type="checkbox" checked/>
                  <span className="slider round"></span>
                </label>
              </div>
            </li>
            <li className="waves-effect">
              <a href="#!">
                <div className="d-flex">
                  <h4>Your point</h4>
                  <h6 className="your-point">100</h6>
                </div>
              </a>
            </li>
            <li className="waves-effect">
              <a href="#!">
                <div className="d-flex">
                  <h4>Rate on Google play</h4>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </a>
            </li>
            <li className="waves-effect">
              <a href="#!">
                <div className="d-flex">
                  <h4>Contact us</h4>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </a>
            </li>
            <li className="waves-effect">
              <a href="#!">
                <div className="d-flex">
                  <h4>Terms of use</h4>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </a>
            </li>
            <li>
              <a href="#!" className="waves-effect user-logout">Log out</a>
            </li>
            <li>
              <p className="dropdown-copyright">&copy; 2020 Shadhin. All rights reserved.</p>
            </li>
          </ul>
        </div>
        <div className="user-menu" id="usertab2show">
          <h4 className="noti-heading">Notifications</h4>
          <ul className="notification-list">
            <li className="waves-effect">
              <a href="#!">
                <div className="d-flex">
                  <div className="noti-action noti-comment"><img src="./img/notification1.jpg" alt="notification"/></div>
                  <div>
                    <p className="noti-date">Yesterday at 3:00 pm</p>
                    <h4 className="user-name">Russell responed to your comment, Tap to view details.</h4>
                  </div>
                </div>
              </a>
            </li>
            <li className="waves-effect">
              <a href="#!">
                <div className="d-flex">
                  <div className="noti-action noti-like"><img src="./img/notification2.jpg" alt="notification"/></div>
                  <div>
                    <p className="noti-date">28 April at 6:00 pm</p>
                    <h4 className="user-name">Shariar ahmed liked to your comment, Tap to view details.</h4>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div className="notification-drop-btm">
            <p className="noti-date">22 April at 5:00 pm</p>
            <h4>Listen Hridpindo on Shadhin music</h4>
            <p>Lorem ipsum dolor set amit, consectetur adipiscing elit. Lorem ipsum dolor set amit.</p>
            <img src="./img/notification3.jpg" alt=""/>
          </div>
        </div>
      </div>

      <div className="p30 src src-mobile d-block d-md-none">
        <h3 className="heading">Search</h3>
        <form>
          <input type="" name="" placeholder="Search artist, songs, videos..."/>
          <button type="submit" className="btn-submit"><i className="fa fa-search"></i></button>
          <button className="search-cancil"><img src="./img/icon-cross.png" alt=""/></button>
        </form>
      </div>

      <div className="user-info-mobile d-block d-md-none">
        <h6 className="title2">Hi there, <span>John!</span></h6>
        <p className="f14">Good Morning, Listen Free Music</p>
      </div>
      
      <div className="body-content">
        <div className="top-picks">
          <h3 className="heading">Top Picks</h3>
          <div className="owl-carousel" id="carousel1">
            <div>
              <a href="#!">
                <img src="./img/TopPick1.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/TopPick2.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/TopPick3.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/TopPick1.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/TopPick2.jpg" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="popular-artist">
          <h3 className="heading">Popular Artist</h3>
          <div className="owl-carousel" id="carousel2">
            <div>
              <a href="#!">
                <img src="./img/artist1.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Hridoy Khan</h4>
                  <p><span>0000</span> fans</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/artist2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Asif</h4>
                  <p><span>0000</span> fans</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/artist3.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Habib Wahid</h4>
                  <p><span>0000</span> fans</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/artist4.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Imran</h4>
                  <p><span>0000</span> fans</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/artist2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Asif</h4>
                  <p><span>0000</span> fans</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="recently-played">
          <h3 className="heading">Recently Played</h3>
          <div className="owl-carousel" id="carousel3">
            <div>
              <a href="#!">
                <img src="./img/recentlyplayed1.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Cats and music</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/recentlyplayed2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/recentlyplayed3.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/recentlyplayed4.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/recentlyplayed2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="featured-playlist">
          <h3 className="heading">Featured Playlist</h3>
          <div className="owl-carousel" id="carousel4">
            <div>
              <a href="#!">
                <img src="./img/fplaylist1.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/fplaylist2.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/fplaylist3.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/fplaylist4.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/fplaylist2.jpg" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="popular-playlist">
          <h3 className="heading">Popular Playlist</h3>
          <div className="owl-carousel" id="carousel5">
            <div>
              <a href="#!">
                <img src="./img/pplaylist1.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pplaylist2.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pplaylist3.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pplaylist4.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pplaylist2.jpg" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="made-for-you">
          <h3 className="heading">Made for you</h3>
          <div className="owl-carousel" id="carousel1b">
            <div>
              <a href="#!">
                <img src="./img/mfy1.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>My Favorites</h4>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/mfy2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Mix International Hitz</h4>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/mfy3.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Summer Vides</h4>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/mfy1.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>My Favorites</h4>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/mfy3.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Summer Vides</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="trending-now">
          <h3 className="heading">Trending Now</h3>
          <div className="owl-carousel" id="carousel7">
            <div>
              <a href="#!">
                <img src="./img/trending1.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Cats and music</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/trending2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/trending3.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/trending4.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/trending2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="popupar-videos">
          <h3 className="heading">Popupar Videos</h3>
          <div className="owl-carousel" id="carousel8">
            <div>
              <a href="#!">
                <img src="./img/pvideo1.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music video name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pvideo2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music video name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pvideo3.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music video name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pvideo4.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music video name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/pvideo2.jpg" alt=""/>
                <div className="carousel-desc">
                  <h4>Music video name</h4>
                  <p>Artist name goes here</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="radios">
          <h3 className="heading">Radio</h3>
          <div className="owl-carousel" id="carousel9">
            <div>
              <a href="#!">
                <img src="./img/radio1.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/radio2.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/radio3.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/radio4.jpg" alt=""/>
              </a>
            </div>
            <div>
              <a href="#!">
                <img src="./img/radio2.jpg" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="trending-videos">
          <h3 className="heading">Trending Videos</h3>
          <div className="owl-carousel" id="carousel10">
            <div><img src="./img/trendingvideo1.jpg" alt=""/></div>
            <div><img src="./img/trendingvideo2.jpg" alt=""/></div>
            <div><img src="./img/trendingvideo2.jpg" alt=""/></div>
          </div>
        </div>
        <footer>
          <div className="row">
            <div className="col">
              <ul className="first-block">
                <li><a href="index.html"><img src="./img/logo2.png" className="footer-logo" alt="logo"/></a></li>
                <li><a href="#!"><i className="fa fa-instagram"></i>Instagram</a></li>
                <li><a href="#!"><i className="fa fa-facebook"></i>Facebook</a></li>
                <li><a href="#!"><i className="fa fa-twitter"></i>Twitter</a></li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><h4 className="footer-title">Who we are?</h4></li>
                <li><a href="#!">About us</a></li>
                <li><a href="#!">Contact us</a></li>
                <li><a href="#!">News</a></li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><h4 className="footer-title">Explore</h4></li>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Podcast</a></li>
                <li><a href="#!">Video</a></li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><h4 className="footer-title">Legal</h4></li>
                <li><a href="#!">Help &amp; Support</a></li>
                <li><a href="#!">Terms of services</a></li>
                <li><a href="#!">FAQ</a></li>
              </ul>
            </div>
            <div className="col d-none d-md-block">
              <ul>
                <li><h4 className="footer-title">Products</h4></li>
                <li><a href="#!">Android</a></li>
                <li><a href="#!">iOS</a></li>
                <li><a href="#!">Web Player</a></li>
              </ul>
            </div>
            <div className="col-12 d-block d-md-none">
              <div className="footer-mobile-app">
                <h6>Download the App</h6>
                <ul>
                  <li><a href="#!"><img src="./img/gp.png" alt=""/></a></li>
                  <li><a href="#!"><img src="./img/as.png" alt=""/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copyright">&copy; 2020 Shadhin. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
