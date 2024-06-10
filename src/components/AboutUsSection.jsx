import styles from "./AboutUsSection.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const TEAM = [
  {
    name: "Mohamed Kamal",
    photo: "team/mk.png",
    avatar: "avatars/mk.png",
    jobTitle: "Front-End Developer",
    phones: ["01227300872"],
    socialMedia: {
      whatsApp: "https://wa.me/201227300872",
      linkedIn: "https://www.linkedin.com/in/mohamedkamal-in/",
    },
  },
  {
    name: "Banoub Nagy",
    photo: "team/bn.png",
    avatar: "avatars/bn.png",
    jobTitle: "AI Developer",
    phones: ["01024071289"],
    socialMedia: {
      whatsApp: "https://wa.me/201024071289",
      linkedIn: "https://www.linkedin.com/in/banoub-nagy-edwar-b33b15277/",
    },
  },
  {
    name: "Maryam Mohamed",
    photo: "team/mm.png",
    avatar: "avatars/mm.png",
    jobTitle: "AI Developer",
    phones: ["01006517272", "01210400751"],
    socialMedia: {
      whatsApp: "https://wa.me/201006517272",
      linkedIn: "https://www.linkedin.com/in/maryam-mohamedd/",
      facebook: "https://www.facebook.com/profile.php?id=100012562810123",
    },
  },
  {
    name: "Rowan Abdelkader",
    photo: "team/ra.png",
    avatar: "avatars/ra.png",
    jobTitle: "AI Developer",
    phones: ["01229671297", "01507166626"],
    socialMedia: {
      whatsApp: "https://wa.me/01229671297",
      linkedIn: "https://www.linkedin.com/in/rowan-abdelkader-877000244",
      facebook: "https://www.facebook.com/rowan.roro.3?mibextid=LQQJ4d",
    },
  },
  {
    name: "Sherif Mohamed",
    photo: "team/sm.png",
    avatar: "avatars/sm.png",
    jobTitle: "Back-End Developer",
    phones: ["01012569196"],
    socialMedia: {
      whatsApp: "https://wa.me/01012569196",
      linkedIn: "https://www.linkedin.com/in/sherif-mohamed-6a97141b8/",
    },
  },
  {
    name: "Raed Mohamed",
    photo: "team/rm.png",
    avatar: "avatars/rm.png",
    jobTitle: "Front-End Developer",
    phones: ["01277053851"],
    socialMedia: {
      whatsApp: "https://wa.me/01277053851",
      linkedIn: "https://www.linkedin.com/in/raed--mohamed/",
    },
  },
];
function AboutUsSection({ aboutUsRef }) {
  return (
    <section ref={aboutUsRef} className={styles.aboutUsSection}>
      <h1>About us</h1>

      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        autoplay={false}
      >
        {TEAM.map((teamMember, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.first}>
              <img src={teamMember.photo} width="200px" alt="homeImg.png" />
            </div>
            <div className={styles.last}>
              <span className={styles.avatarNameContainer}>
                <img
                  src={teamMember?.avatar}
                  className={styles.avatar}
                  alt="avatar"
                />
                <h2>{teamMember.name}</h2>
              </span>
              <h3>{teamMember.jobTitle}</h3>
              <div className={styles.phones}>
                {teamMember.phones.map((phone, i) => (
                  <div key={i}>
                    <img width={40} src="phone.png" alt="phone-icon" />
                    <p>{phone}</p>
                  </div>
                ))}
              </div>
              <div className={styles.socialMedia}>
                {teamMember.socialMedia.linkedIn && (
                  <a target="_blank" href={teamMember.socialMedia?.linkedIn}>
                    <img width={35} src="linkedin.png" alt="linkedIn-icon" />
                  </a>
                )}
                {teamMember.socialMedia.whatsApp && (
                  <a target="_blank" href={teamMember.socialMedia?.whatsApp}>
                    <img width={35} src="whatsapp.png" alt="whatsApp-icon" />
                  </a>
                )}
                {teamMember.socialMedia.facebook && (
                  <a target="_blank" href={teamMember.socialMedia?.facebook}>
                    <img width={35} src="facebook.png" alt="facebook-icon" />
                  </a>
                )}
                {teamMember.socialMedia.twitter && (
                  <a target="_blank" href={teamMember.socialMedia?.twitter}>
                    <img width={35} src="twitter.png" alt="twitter-icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
}

export default AboutUsSection;
