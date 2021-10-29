import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

import "./Dashboard.css";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace("/login");
  }, [user, loading, error, history]);

  return (
    <div id="dashboard" className="container-fluid">
      <div
        className="bg-light border border-light hero-photography jumbotron layer"
        style={{
          backgroundImage: "url('assets/img/hero-background-photography.jpg')",
        }}
      >
        <div className="hero-text">
          <h1 className="hero-title">Qued-est?</h1>
          <p className="hero-subtitle">
            Qued-est helps you find out how to say anything in any language!
          </p>
          <p className="hero-subtitle"> 
            You just need to upload a photo of the object and review the
            available translations!
          </p>
          <p>
            <a
              className="btn btn-primary btn-lg hero-button"
              role="button"
              href="/"
            >
              Take a photo
            </a>
          </p>
        </div>
      </div>
      {/* Gallery */}
      
      <br/>

      <div className="container-fluid">
        <div className="px-lg-5">

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg" alt="" className="img-fluid card-img-top"/>
                <div className="p-4">
                  <h5> <a href="#" className="text-dark">Red paint cup</a></h5>
                  <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                    <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="" className="img-fluid card-img-top"/>
                <div className="p-4">
                  <h5> <a href="#" className="text-dark">Blorange</a></h5>
                  <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
                    <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" alt="" className="img-fluid card-img-top"/>
                <div className="p-4">
                  <h5> <a href="#" className="text-dark">And She Realized</a></h5>
                  <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                    <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                  </div>
                </div>
              </div>
            </div> 

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg" alt="" className="img-fluid card-img-top"/>
                <div className="p-4">
                  <h5> <a href="#" className="text-dark">Yellow banana</a></h5>
                  <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                    <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/mike-meyers-737494-unsplash_yd11yq.jpg" alt="" className="img-fluid card-img-top"/>
                <div className="p-4">
                  <h5> <a href="#" className="text-dark">Teal Gameboy</a></h5>
                  <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPEG</span></p>
                    <div className="badge badge-info px-3 rounded-pill font-weight-normal">Hot</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294930/ronald-cuyan-434484-unsplash_iktjid.jpg" alt="" className="img-fluid card-img-top"/>
                <div className="p-4">
                  <h5> <a href="#" className="text-dark">Color in Guatemala.</a></h5>
                  <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
                    <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                  </div>
                </div>
              </div>
            </div> 
   
          </div>
          <div className="py-5 text-right"><a href="#" className="btn btn-dark px-5 py-3 text-uppercase">Show me more</a></div>
        </div>
      </div>


    </div>
  );
}
export default Dashboard;
