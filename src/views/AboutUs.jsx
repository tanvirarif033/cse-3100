import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-container">
      <section className="text-center mt-4">
      <h2>About Us</h2>
      </section>

      <section className="goals-section text-left mt-4">
        <h2>Our Goals</h2>
        <p>
          To provide a safe and loving environment for cats, and to ensure they
          are adopted into caring homes.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis fugiat maxime doloremque neque? Suscipit officia earum rem! Illo a magnam animi delectus, harum quidem laborum autem eos. In, aspernatur excepturi. Numquam.
        </p>
      </section>

      <section className="achievements-section text-left mt-4">
        <h2>Our Achievements</h2>
        <p>
          Over 500 cats rescued and rehomed. Recognized as one of the leading
          cat adoption centers in the country.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur corporis natus quis atque ut, sequi quam esse vitae deserunt labore, quia similique alias asperiores minima minus, dolore ipsam laudantium non quibusdam.
        </p>
      </section>

      <section className="team-section text-left mt-4">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img
              src="/assets/m1.jpg"
              alt="Team Member 1"
              className="team-photo"
            />
            <h3 className="team-name">Tanvir Arif</h3>
            <p className="team-position">Founder & Director</p>
          </div>
          <div className="team-card">
            <img
              src="/assets/m2.jpg"
              alt="Team Member 2"
              className="team-photo"
            />
            <h3 className="team-name">Amirul Momin</h3>
            <p className="team-position">Adoption Coordinator</p>
          </div>
          <div className="team-card">
            <img
              src="/assets/m3.jpg"
              alt="Team Member 3"
              className="team-photo"
            />
            <h3 className="team-name">Eusha Ahmed</h3>
            <p className="team-position">Veterinary Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
}
