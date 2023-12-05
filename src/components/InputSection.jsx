'use client';
import styles from '../styles/InputSection.module.css';
import React, { useState } from 'react';
import { useAppContext } from '../app/providers';
import axios from 'axios';

const InputSection = () => {
    const { appState, setAppState } = useAppContext();
    const [hashtags, setHashtags] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [facebook, setFacebook] = useState(false);
    const [twitter, setTwitter] = useState(false);
    const [youtube, setYoutube] = useState(false);

    async function test(event) {
        event.preventDefault();
        axios.get('/api/check-results').then((response) => {
            console.log("GET RESPONSE: ", response);
            if (response.data.status == 'SUCCEEDED') {
                setAppState({ ...appState, output: response.data });
            }
            // send request to start execution
            //process.env.NEXT_PUBLIC_EXECUTION
            //setDate({ ...date, executionArn: response.data.executionArn });
        }
        ).catch((error) => { console.log(error) });
    }

    async function onSubmit(event) {
        event.preventDefault();

        console.log('Hashtags: ' + hashtags);
        console.log('Start date: ' + startDate);
        console.log('End date: ' + endDate);
        console.log('Facebook: ' + facebook);
        console.log('Twitter: ' + twitter);
        console.log('Youtube: ' + youtube);

        var socialNetworks = [];
        if (facebook) {
            socialNetworks.push('facebook');
        }
        if (twitter) {
            socialNetworks.push('twitter');
        }
        if (youtube) {
            socialNetworks.push('youtube');
        }

        let body = {
            "input": {
                "hashtags": hashtags.split(','),
                "filters": {
                    "startDate": startDate,
                    "endDate": endDate,
                    "socialNetworks": socialNetworks,
                },
            },
            "stateMachineArn": process.env.NEXT_PUBLIC_STATEMACHINEARN
        };
        axios.post('/api/submit', body)
            .then((response) => {
                console.log("POST RESPONSE: ", response);
                //setAppState({ ...appState, output: response.data });
                // send request to start execution
                //process.env.NEXT_PUBLIC_EXECUTION
                //setDate({ ...date, executionArn: response.data.executionArn });
            }
            ).catch((error) => { console.log(error) });
        /*const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
        */
    }

    return (
        <form className={styles.sectionContainer} onSubmit={onSubmit}>
            <section className={`${styles.section} ${styles.borderRight}`}>
                <p className={styles.inputTitle}
                    onClick={test}>
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
                        value={hashtags}
                        onChange={(event) => {
                            setHashtags(event.target.value);
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
                            value={startDate}
                            onChange={(event) => {
                                setStartDate(event.target.value);
                            }}
                            required
                        />
                    </section>
                    <section className={styles.dateItem}>
                        <p>Fecha Inicial</p>
                        <input type="date" name="end-date" className={styles.date}
                            value={endDate}
                            onChange={(event) => {
                                setEndDate(event.target.value);
                            }}
                            required
                        />
                    </section>
                </section>
                <section className={styles.checkboxContainer}>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="facebook"
                            onChange={(event) => {
                                setFacebook(event.target.checked);
                            }}
                        />
                        <div className={styles.socialNameContainer}>
                            <i className={`fa-brands fa-square-facebook ${styles.facebookIcon}`}></i>
                            <p>Facebook e Instagram</p>
                        </div>
                    </section>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="twitter"
                            onChange={(event) => {
                                setTwitter(event.target.checked);
                            }}
                        />
                        <div className={styles.socialNameContainer}>
                            <i className={`fa-brands fa-square-twitter ${styles.twitterIcon}`}></i>
                            <p>Twitter</p>
                        </div>
                    </section>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="youtube"
                            onChange={(event) => {
                                setYoutube(event.target.checked);
                            }}
                        />
                        <div className={styles.socialNameContainer}>
                            <i className={`fa-brands fa-youtube ${styles.youtubeIcon}`}></i>
                            <p>Youtube</p>
                        </div>
                    </section>
                </section>
            </section>
        </form>
    );
};

export default InputSection;