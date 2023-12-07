'use client';
import styles from '@styles/Checkbox.module.css';
import { useRouter, useSearchParams } from "next/navigation";
import UpdateUrl from '@lib/UpdateUrl';
import { parseCheckState } from '@/lib/ParseCheckState';

const Checkbox = ({ name, value, text }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const getIconClass = () => {
        if (text === "facebook") {
            return `fa-brands fa-square-facebook ${styles.facebookIcon}`;
        }
        else if (text === "twitter") {
            return `fa-brands fa-square-twitter ${styles.twitterIcon}`;
        }
        else if (text === "youtube") {
            return `fa-brands fa-youtube ${styles.youtubeIcon}`;
        }
    };

    const iconClass = getIconClass();

    const checkBox = (id) => {
        var keys = {};
        for (const key of searchParams.keys()) {
            keys[key] = searchParams.get(key);
        }
        const element = document.getElementById(`${id}Checkbox`);
        element.checked = !element.checked;
        const newUrl = UpdateUrl(keys, [{ key: id, value: element.checked }]);
        router.replace(newUrl);
    };

    return (
        <label htmlFor={name} className={styles.checkboxLabel}>
            <input
                className={styles.checkbox}
                id={`${text}Checkbox`}
                type="checkbox"
                name={name}
                checked={parseCheckState(searchParams.get(text))}
                onChange={(event) => {
                    event.target.value = !event.target.checked;
                    var keys = {};
                    for (const key of searchParams.keys()) {
                        keys[key] = searchParams.get(key);
                    }
                    const newUrl = UpdateUrl(keys, [{ key: text, value: event.target.checked }]);
                    router.replace(newUrl);
                }}
            />
            <div className={styles.checkBoxTitle} onClick={() => {
                checkBox(text);
            }}>
                <i className={iconClass}></i>
                <p>{text}</p>
            </div>
        </label>
    );
};

export default Checkbox;