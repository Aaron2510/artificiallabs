import React from 'react';
import Image from 'next/image';
import styles from './news.module.scss';

interface NewsItem {
  imageUrl: string;
  link: string;
  alt: string;
}

const newsItems: NewsItem[] = [
  {
    imageUrl: '/Afaqs-logo.png',
    link: 'https://www.afaqs.com/agency-briefs/creativity-has-survived-every-tech-shift-and-genai-is-simply-the-next-evolution-9457132',
    alt: 'News 1',
  },
  {
    imageUrl: '/Campaign-logo.png',
    link: 'https://www.campaignindia.in/article/ai-storm-will-agencies-sink-or-soar/504387',
    alt: 'News 2',
  },
];

const InTheNews: React.FC = () => (
  <section>
    <div className={styles.newsImages}>
      {newsItems.map((item, index) => (
        <div className={styles.imageContainer} key={index}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={item.imageUrl}
              alt={item.alt}
              width={200}
              height={100}
              style={{ borderRadius: 8}}
            />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default InTheNews;