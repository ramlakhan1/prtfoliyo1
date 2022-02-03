import React from 'react';
import {Row} from 'reactstrap';

import Card from './Cards/Card';

const Teaching = () => {
  return (
    <section style={{background: "#d4d4d4"}} className="py-3">
      <h1 className="mt-5 mb-2 mb-md-3 mx-auto text-center display-md-4 font-weight-bold" style={{color: "rgb(255, 103, 68)"}}>Coaching</h1>
      <h4 className="w-50 mx-auto font-weight-normal text-muted mt-4 text-center">I have enjoyed transfering knowledge to others for the last couple of years, having taught coding both in person and online</h4>

      <Card
        image="techieslab.png"
        title="Techies Lab"
        description="Techies Lab is an organization teaching children the basics of coding. This covers Scratch for the younger ones, and JavaScript for the older/more advanced ones."
        website="http://techieslab.be"/>

      <Card reverse
        image="eurospace.jpg"
        title="Euro Space Center"
        description="Euro Space Center is a former autronaut training center. They organize several arduino coding camps teaching how to code a micro-satellite, which I was participating in as a teacher."
        website="https://www.eurospacecenter.be/en/holiday-camps/satellite"/>
    </section>
  )
}

export default Teaching;
