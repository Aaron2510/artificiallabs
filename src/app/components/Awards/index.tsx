"use awards";
import Image from 'next/image';
import React from 'react';
import styles from "./award.module.scss";

const Awards = () => {
  const awardsList = [
    { src: "/Mukdeee1.jpg", alt: "mukdeee" },
    { src: "/Foxglove.png", alt: "foxglove" },
    { src: "/Maddy.png", alt: "maddy" },
    { src: "/Mukdeee.png", alt: "mukdeee-kyoorius" },
    { src: "/Kyoorius1.png", alt: "kyoorius1" },
    { src: "/Kling.jpg", alt: "kling" },
    { src: "/Kyoorius2.png", alt: "kyoorius2" }
  ];

//   return (
//     <div className={styles.awards}>
//       {awardsList.map((award, index) => (
//         <div className={styles.imageContainer} key={index}>
//           <Image key={index} src={award.src} alt={award.alt} layout="responsive" width={275} height={275} />
//         </div>
//       ))}
//     </div>
//   );
// };

  return (
    <div className={styles.awards}>
      {awardsList.map((award, index) => (
        <div className={styles.imageContainer} key={index}>
          <Image src={award.src} alt={award.alt} layout="responsive" width={275} height={275} />
        </div>
      ))}
    </div>
  );
};

export default Awards;
