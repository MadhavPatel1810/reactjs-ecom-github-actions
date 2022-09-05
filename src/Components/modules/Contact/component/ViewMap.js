import React from "react";

const ViewMap = () => {
  const go_full_screen = () => {
    var elem = document.getElementById("mapView");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  };
  return (
    <div className="viewMap">
      <i className="fa-solid fa-compress"></i>
      <i className="fa-solid fa-expand" onClick={go_full_screen}></i>
      <iframe
        id="mapView"
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1859.995966794579!2d72.78625430809487!3d21.192479396477488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.191065599999998!2d72.7875584!4m5!1s0x3be04e7a1bdbcb8b%3A0x6d99440e38057faa!2sdifferenz%20system!3m2!1d21.1938531!2d72.78638839999999!5e0!3m2!1sen!2sin!4v1656315368015!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ViewMap;
