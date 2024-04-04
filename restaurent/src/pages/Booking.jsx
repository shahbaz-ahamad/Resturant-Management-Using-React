import React, { useState } from 'react';
import Axios from 'axios';

const Booking = () => {

  const url = "localhost:3000/api/data"
  const [data,setData] = useState({
    name : "",
    email : "",
    datetime : "",
    select1 : "",
    message : ""
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      name:data.name,
      email:data.email,
      datetime:data.datetime,
      select1:data.select1,
      message:data.message
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  function handle (e){
      const newdata={...Axios.data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)
  }
  return (
    <>

<div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-0">
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
            >
              <span></span>
            </button>
          </div>
        </div>
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
            <h1 className="text-white mb-4">Book A Table Online</h1>
            <form onSubmit={(e)=>submit(e)}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input onChange={(e)=>handle(e)} type="text" className="form-control" id="name" value={data.name} placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input onChange={(e)=>handle(e)} value={data.email} type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating date" id="date3" data-target-input="nearest">
                    <input
                    onChange={(e)=>handle(e)} value={data.datetime}
                      type="text"
                      className="form-control datetimepicker-input"
                      id="datetime"
                      placeholder="Date & Time"
                      data-target="#date3"
                      data-toggle="datetimepicker"
                    />
                    <label htmlFor="datetime">Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select onChange={(e)=>handle(e)} value={data.select1} className="form-select" id="select1">
                      <option value="1">People 1</option>
                      <option value="2">People 2</option>
                      <option value="3">People 3</option>
                    </select>
                    <label htmlFor="select1">No Of People</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                    onChange={(e)=>handle(e)} value={data.message}
                      className="form-control"
                      placeholder="Special Request"
                      id="message"
                      style={{ height: '100px' }}
                    ></textarea>
                    <label htmlFor="message">Special Request</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allowScriptAccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Booking;
