import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './news.module.scss';

interface NewsItem {
  imageUrl: string;
  alt: string;
  bottomImage: string;
  bottomAlt: string;
  bottomLink: string;
}

const newsItems: NewsItem[] = [
  {
    imageUrl: '/Afaqs-logo.png',
    alt: 'News 1',
    bottomImage: '/News1.png',
    bottomAlt: 'news1',
    bottomLink: 'https://www.afaqs.com/agency-briefs/creativity-has-survived-every-tech-shift-and-genai-is-simply-the-next-evolution-9457132',
  },
  {
    imageUrl: '/Campaign-logo.png',
    alt: 'News 2',
    bottomImage: '/News2.png',
    bottomAlt: 'news2',
    bottomLink: 'https://www.campaignindia.in/article/ai-storm-will-agencies-sink-or-soar/504387',
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
            <Image className={styles.newsImage}
              src={item.bottomImage}
              alt={item.bottomAlt}
              width={500}
              height={150}
            />
            <div>
              <Link href={item.bottomLink} target="_blank" rel="noopener noreferrer">
                <span className={styles.readMore}>Read More</span>
              </Link>
            </div>
          </div>
          </div>
      ))}
    </div>
  </section>
);

export default InTheNews;