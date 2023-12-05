'use client';
import styles from '../styles/InputSection.module.css';
import React, { useEffect } from 'react';
import { useAppContext } from '../app/providers';
import axios from 'axios';
import { useRouter, useSearchParams } from "next/navigation";

const InputSection = ({ userInput }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { appState, setAppState } = useAppContext();
    // at initial load, set the url to the default values if they are not already set
    useEffect(() => {
        const hashtags = searchParams.get('hashtags') || userInput.hashtags;
        const startDate = searchParams.get('startDate') || userInput.startDate;
        const endDate = searchParams.get('endDate') || userInput.endDate;
        const facebook = searchParams.get('facebook') || userInput.facebook;
        const twitter = searchParams.get('twitter') || userInput.twitter;
        const youtube = searchParams.get('youtube') || userInput.youtube;
        // if any of the parameters are null, set them to the default values
        if (searchParams.get('hashtags') == null || searchParams.get('startDate') == null || searchParams.get('endDate') == null || searchParams.get('facebook') == null || searchParams.get('twitter') == null || searchParams.get('youtube') == null) {
            router.replace(`?hashtags=${hashtags}&startDate=${startDate}&endDate=${endDate}&facebook=${facebook}&twitter=${twitter}&youtube=${youtube}`)
            // update the checkboxes to be the same as the url
            const facebookCheckbox = document.getElementById('facebookCheckbox');
            const twitterCheckbox = document.getElementById('twitterCheckbox');
            const youtubeCheckbox = document.getElementById('youtubeCheckbox');
            facebookCheckbox.checked = JSON.parse(facebook);
            twitterCheckbox.checked = JSON.parse(twitter);
            youtubeCheckbox.checked = JSON.parse(youtube);
        }
    }, []);

    async function checkResults(executionArn) {
        // poll the check-results api every 10 seconds until we get a result
        let interval = setInterval(() => {
            axios.get(`/api/check-results?executionArn=${executionArn}`)
                .then((response) => {
                    //console.log(response);
                    if (response.data.status == 'SUCCEEDED') {
                        setAppState({ ...appState, output: response.data });
                        // Clear interval when SUCCEEDED
                        clearInterval(interval);
                    }
                }
                ).catch((error) => { console.log(error) });
        }, 10000);
    }

    async function onSubmit(event) {
        event.preventDefault();
        var socialNetworks = [];
        if (JSON.parse(searchParams.get('facebook'))) {
            socialNetworks.push('facebook');
        }
        if (JSON.parse(searchParams.get('twitter'))) {
            socialNetworks.push('twitter');
        }
        if (JSON.parse(searchParams.get('youtube'))) {
            socialNetworks.push('youtube');
        }
        let body = {
            "input": {
                "hashtags": searchParams.get("hashtags").split(','),
                "filters": {
                    "startDate": searchParams.get("startDate"),
                    "endDate": searchParams.get("endDate"),
                    "socialNetworks": socialNetworks,
                },
            },
            "stateMachineArn": process.env.NEXT_PUBLIC_STATEMACHINEARN
        };
        axios.post('/api/submit', body)
            .then((response) => {
                //console.log("POST RESPONSE: ", response);
                // clear the current output
                setAppState({ ...appState, output: {}, executionArn: response.data.executionArn });
                // execute the check-results api
                checkResults(response.data.executionArn);
            }
            ).catch((error) => { console.log(error) });
    }

    return (
        <form className={styles.sectionContainer} onSubmit={onSubmit}>
            <section className={`${styles.section} ${styles.borderRight}`}>
                <p className={styles.inputTitle}>
                    Ingrese los hashtags
                </p>
                <p className={styles.inputSubtitle}>
                    Ingrese los hashtags separados por comas.
                </p>
                <section className={styles.inputContainer}>
                    <input
                        className={styles.textInput}
                        type="text"
                        name="hashtags"
                        placeholder="e.g. Medellin, #Medellin, Hilton"
                        onChange={(event) => {
                            router.replace(`?hashtags=${event.target.value}&startDate=${searchParams.get('startDate')}&endDate=${searchParams.get("endDate")}&facebook=${searchParams.get("facebook")}&twitter=${searchParams.get("twitter")}&youtube=${searchParams.get("youtube")}`)
                        }}
                        required
                    />
                    <button className={styles.submitButton}>
                        Realizar reporte
                    </button>
                </section>
            </section>
            <section className={`${styles.section}`}>
                <p className={styles.inputTitle}>
                    Canales de redes sociales
                </p>
                <section className={styles.dateContainer}>
                    <section className={styles.dateItem}>
                        <p>Fecha Inicial</p>
                        <input type="date" name="start-date" className={styles.date}
                            value={searchParams.get('startDate')}
                            onChange={(event) => {
                                router.replace(`?hashtags=${searchParams.get("hashtags")}&startDate=${event.target.value}&endDate=${searchParams.get("endDate")}&facebook=${searchParams.get("facebook")}&twitter=${searchParams.get("twitter")}&youtube=${searchParams.get("youtube")}`)
                            }}
                            required
                        />
                    </section>
                    <section className={styles.dateItem}>
                        <p>Fecha Inicial</p>
                        <input type="date" name="end-date" className={styles.date}
                            value={searchParams.get('endDate')}
                            onChange={(event) => {
                                router.replace(`?hashtags=${searchParams.get("hashtags")}&startDate=${searchParams.get('startDate')}&endDate=${event.target.value}&facebook=${searchParams.get("facebook")}&twitter=${searchParams.get("twitter")}&youtube=${searchParams.get("youtube")}`)
                            }}
                            required
                        />
                    </section>
                </section>
                <section className={styles.checkboxContainer}>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="facebook" id="facebookCheckbox"
                            defaultChecked={JSON.parse(searchParams.get('facebook'))}
                            onChange={(event) => {
                                event.target.value = !event.target.checked;
                                router.replace(`?hashtags=${searchParams.get("hashtags")}&startDate=${searchParams.get('startDate')}&endDate=${searchParams.get("endDate")}&facebook=${event.target.checked}&twitter=${searchParams.get("twitter")}&youtube=${searchParams.get("youtube")}`)
                            }}
                        />
                        <div className={styles.socialNameContainer}>
                            <i className={`fa-brands fa-square-facebook ${styles.facebookIcon}`}></i>
                            <p>Facebook e Instagram</p>
                        </div>
                    </section>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="twitter" id="twitterCheckbox"
                            defaultChecked={JSON.parse(searchParams.get('twitter'))}
                            onChange={(event) => {
                                event.target.value = !event.target.checked;
                                router.replace(`?hashtags=${searchParams.get("hashtags")}&startDate=${searchParams.get('startDate')}&endDate=${searchParams.get("endDate")}&facebook=${searchParams.get("facebook")}&twitter=${event.target.checked}&youtube=${searchParams.get("youtube")}`)
                            }}
                        />
                        <div className={styles.socialNameContainer}>
                            <i className={`fa-brands fa-square-twitter ${styles.twitterIcon}`}></i>
                            <p>Twitter</p>
                        </div>
                    </section>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="youtube" id="youtubeCheckbox"
                            defaultChecked={JSON.parse(searchParams.get('youtube'))}
                            onChange={(event) => {
                                event.target.value = !event.target.checked;
                                router.replace(`?hashtags=${searchParams.get("hashtags")}&startDate=${searchParams.get('startDate')}&endDate=${searchParams.get("endDate")}&facebook=${searchParams.get("facebook")}&twitter=${searchParams.get("twitter")}&youtube=${event.target.checked}`)
                            }}
                        />
                        <div className={styles.socialNameContainer}>
                            <i className={`fa-brands fa-youtube ${styles.youtubeIcon}`}></i>
                            <p>Youtube</p>
                        </div>
                    </section>
                </section>
            </section>
        </form >
    );
};

export default InputSection;