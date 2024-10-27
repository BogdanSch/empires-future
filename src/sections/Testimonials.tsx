import { FC } from "react";

import Section from "../components/Section";
import Image from "../components/images/Image";

import darthVaderImage from "/assets/img/testimonials/Darth-Vader.jpg";
import admiralThrawnImage from "/assets/img/testimonials/Grand_Admiral_Thrawn.png";
import stormTrooperImage from "/assets/img/testimonials/Storm-Trooper-Commander.webp";

const Testimonials: FC = () => {
  return (
    <Section
      sectionName="testimonials"
      containerType="container"
      id="testimonials"
      isDecorated={true}
    >
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="text-content text-center">
            <h2>Long live the Empire!</h2>
            <p>
              From seasoned commanders to new recruits, the Imperial Navy is
              filled with individuals who have dedicated themselves to serving
              the Empire. Hear from those who have risen through the ranks and
              played a role in securing peace across the galaxy:
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="face front-face">
              <Image
                src={darthVaderImage}
                alt="Darth Vader - The Dark Lord"
                className="profile"
              />
              <div className="pt-3 text-uppercase name">Lord Vaders</div>
              <div className="designation">The Emperor's right-hand</div>
            </div>
            <div className="face back-face">
              <i className="bi bi-quote bi-quote-left"></i>
              <div className="testimonial">
                Only through the strength of the Empire can we bring order to
                the galaxy.
              </div>
              <i className="bi bi-quote bi-quote-right"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="face front-face">
              <Image
                src={admiralThrawnImage}
                alt="Grand Admiral Thrawn in the Imperial Navy"
                className="profile"
              />
              <div className="pt-3 text-uppercase name">Admiral Thrawn</div>
              <div className="designation">
                Grand Admiral of the Imperial Navy
              </div>
            </div>
            <div className="face back-face">
              <i className="bi bi-quote bi-quote-left"></i>
              <div className="testimonial">
                The Empire values intelligence, strategy, and loyalty above all.
              </div>
              <i className="bi bi-quote bi-quote-right"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="face front-face">
              <Image
                src={stormTrooperImage}
                alt="Storm Trooper Commander TK-421"
                className="profile"
              />
              <div className="pt-3 text-uppercase name">
                Stormtrooper TK-421
              </div>
              <div className="designation">Storm Trooper Commander</div>
            </div>
            <div className="face back-face">
              <i className="bi bi-quote bi-quote-left"></i>
              <div className="testimonial">
                Serving the Empire has given me purpose and direction in a
                chaotic galaxy.
              </div>
              <i className="bi bi-quote bi-quote-right"></i>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
