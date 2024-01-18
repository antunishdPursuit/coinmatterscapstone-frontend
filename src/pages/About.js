import "../CSS/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  // {
  //   name: "Lakisha Johnson",
  //   bio: `"LA FIN"`,
  //   image: "https://ca.slack-edge.com/TCVA3PF24-U023QNLU8AF-f97d7c72a3e9-512",
  //   linkedin: "https://www.linkedin.com/in/lakisha-johnson-0b0587219/",
  //   twitter: "Twitter URL 2",
  //   facebook: "Facebook URL 2",
  // },
  {
    name: "Irwin Jorge",
    bio: `"Short sentence.... "`,
    // image: "https://ca.slack-edge.com/TCVA3PF24-U04DJT6DW3B-504952daa222-512",
    image: "https://placehold.co/600x400",
    linkedin: "LinkedIn URL 2",
    twitter: "Twitter URL 2",
    facebook: "Facebook URL 2",
  },
  {
    name: "Noni Porter",
    bio: `"Short sentence.... "`,
    // image: "https://ca.slack-edge.com/TCVA3PF24-U04DJT704N5-c3f8a5fd5f98-512",
    image: "https://placehold.co/600x400",
    linkedin: "LinkedIn URL 2",
    twitter: "Twitter URL 2",
    facebook: "Facebook URL 2",
  },
  {
    name: "Dennys Antunish",
    bio: `"Short sentence...."`,
    // image: "https://ca.slack-edge.com/TCVA3PF24-U04D65DEY59-e1e2a4fce1b9-512",
    image: "https://placehold.co/600x400",
    linkedin: "LinkedIn URL 1",
    twitter: "Twitter URL 1",
    facebook: "Facebook URL 1",
  },
];

function About() {

  return (
    <div>
      <header className="about-banner">
        <div className="about-background-box">
          <h1>Who we are</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="about-background-box">
          <h1>What we did</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </header>
      <section className="team">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.bio}</p>
            <div className="social-links">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;
