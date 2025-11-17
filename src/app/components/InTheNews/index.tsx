import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './news.module.scss';

interface NewsItem {
  imageUrl: string;
  alt: string;
  bottomText: string;
  bottomLink: string;
}

const newsItems: NewsItem[] = [
  {
    imageUrl: '/Afaqs-logo.png',
    alt: 'News 1',
    bottomText: 'EMA Group acquires 20% stake in Bluebot Digital/Artificial Labs',
    bottomLink: 'https://www.afaqs.com/industry-briefs/ema-group-acquires-20-stake-in-bluebot-digitalartificial-labs-10620793',
  },
  {
    imageUrl: '/Afaqs-logo.png',
    alt: 'News 2',
    bottomText: 'The author challenges the fear around Generative AI, suggesting it’s not a threat but a tool that democratises creativity like never before.',
    bottomLink: 'https://www.afaqs.com/agency-briefs/creativity-has-survived-every-tech-shift-and-genai-is-simply-the-next-evolution-9457132',
  },
  {
    imageUrl: '/Campaign-logo.png',
    alt: 'News 3',
    bottomText: 'Carl Savio, founder and CEO of Bengaluru’s Artificial Labs feels that AI is an accelerator for ideas but that it cannot, will not in the foreseeable future.',
    bottomLink: 'https://www.campaignindia.in/article/ai-storm-will-agencies-sink-or-soar/504387',
  },
  {
    imageUrl: '/Curious-logo.png',
    alt: 'News 4',
    bottomText: 'In Carl Savio’s AI short film, Rat City isn’t just another rodent block-it’s a full-blown gangster paradise. With a slick execution and a surprising twist.',
    bottomLink: 'https://curiousrefuge.com/ai-film-gallery/rat-city',
  },
];

const InTheNews: React.FC = () => (
  <section>
    <div className={styles.newsImages}>
      {newsItems.map((item, index) => (
        <div className={styles.imageContainer} key={index}>
        <div className={styles.newsTop}>          
            <Image className={styles.newsLogo}
              src={item.imageUrl}
              alt={item.alt}
              width={200}
              height={100}
            />
        </div>
        <div className={styles.newsBottom}>
            <p className={styles.newstext}>{item.bottomText}</p>
            <div>
              <Link href={item.bottomLink} target="_blank" rel="noopener noreferrer">
                <span className={styles.readMore}>Read More...</span>
              </Link>
            </div>
          </div>
          </div>
      ))}
    </div>
  </section>
);

export default InTheNews;