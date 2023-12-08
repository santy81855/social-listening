import styles from '@styles/HashtagSelection.module.css';
import Link from 'next/link';
import UpdateUrl from '@/lib/UpdateUrl';

const HashtagSelection = ({ searchParams }) => {
    const getHashTagArray = () => {
        let hashtags = searchParams.hashtags || "";
        const regex = /\b[^,]+/g;
        const matches = hashtags.match(regex);
        hashtags = matches || [];
        return hashtags;
    }
    const hashtags = getHashTagArray();
    const selectedHashtag = searchParams.selectedHashtag || "";

    return (
        <section className={styles.hashtagContainer}>
            {hashtags.map((hashtag, index) => {
                return (
                    <Link key={index} href={UpdateUrl(searchParams, [{ key: 'selectedHashtag', value: hashtag }])} className={hashtag === selectedHashtag ? styles.selectedHashtag : styles.unselectedHashtag}>{hashtag}</Link>
                );
            })}
        </section>
    );
};

export default HashtagSelection;