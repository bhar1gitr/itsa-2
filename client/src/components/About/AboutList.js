import React from 'react'

const AboutList = () => {
  return (
    <div >
      <hr></hr>
      <div className='box3'/>
      <div> Academic Infrastructure available with the Department:</div>
      <ul style={{
        // zIndex:'7'
      }}>
      <div className='box4'/>
        <li>Air Conditioned Classrooms and Tutorial Rooms equipped with LCD Projectors and Smartboards.</li>
        <li>Well equipped Air Conditioned Laboratories connected to Centralized Server Room.</li>
        <li>Centralized Server Room with dedicated Servers, Firewalls, Gateways with all time online UPS backup 130 KVA for IT infrastructure.</li>
        <li>Media Equipped Air Conditioned Seminar halls.</li>
        <li>Online Departmental Library Management System.
        </li>
      </ul>

      <div className='box5'/>

      <hr></hr>
      <div>
      Computational Facility available with the Department:</div>
      <ul>
        <li>Number of Computational Nodes available in Department: 300.</li>
        <li>NVIDIA DGX-1 with Integrated software and hardware system that supports students commitment to AI research with an optimized combination of compute power, software and deep learning performance.</li>
        <li>Dedicated iOS Lab to develop, build & test Cross Platform Applications</li>
        <li>Number of Blade Server Systems: 05</li>
        <li>PC to Student ratio: 1:1.</li>
        <li>Dedicated leased line of Internet</li>
        <li>Wi-Fi Access & CCTV Surveillance.</li>
      </ul>
        <div className='box7'></div>

      <hr></hr>


    </div>
  )
}

export default AboutList