import React from 'react'
import { Link } from "react-router-dom";

import FeatureCard from '../components/featureCard/FeatureCard';
import './Home.css';

function Home() {
  return (
    <div className="landing">
      <div className="hero-image">
        <p className="landing-headline">Save Time. Save Money. Shop Smart.</p>
        <div className="landing-cta">
          <Link className="landing-cta-button" to="/search">Start Saving</Link>
        </div>
      </div>
      <div className="landing-features">
        <FeatureCard 
          imgUrl='./featurecard1.jpg'
          title='Feature 1'
          text='Some text from props.'
          buttonText='Click from Prop'
        />
        <FeatureCard
          imgUrl='./featurecard2.jpg'
          title='Feature 1'
          text='Some text from props.'
          buttonText='Click from Prop'
        />
        <FeatureCard 
          imgUrl='./featurecard3.jpg'
          title='Feature 1'
          text='Some text from props.'
          buttonText='Click from Prop'
        />
      </div>
    </div>
  )
}

export default Home