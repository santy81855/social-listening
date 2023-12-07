'use client';
import styles from '../styles/InputSection.module.css';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../app/providers';
import axios from 'axios';
import { useRouter, useSearchParams } from "next/navigation";
import generateReportData from '../lib/GenerateReportData';
import UpdateUrl from '../lib/UpdateUrl';

const InputSection = ({ userInput }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { appState, setAppState } = useAppContext();
    const [hashtagsInput, setHashtagsInput] = useState(searchParams.get('hashtags') || userInput.hashtags);
    // at initial load, set the url to the default values if they are not already set
    useEffect(() => {
        const hashtags = searchParams.get('hashtags') || userInput.hashtags;
        const startDate = searchParams.get('startDate') || userInput.startDate;
        const endDate = searchParams.get('endDate') || userInput.endDate;
        const facebook = searchParams.get('facebook') || userInput.facebook;
        const twitter = searchParams.get('twitter') || userInput.twitter;
        const youtube = searchParams.get('youtube') || userInput.youtube;
        const status = searchParams.get('status') || "IDLE";
        const executionArn = searchParams.get('executionArn') || "";
        /*if (executionArn !== "undefined" && executionArn !== "") {
            (async () => {
                try {
                    await checkResults();
                } catch (err) {
                    console.error(err);
                }
            })();
        }*/
        // if any of the parameters are null, set them to the default values
        if (searchParams.get('hashtags') == null || searchParams.get('startDate') == null || searchParams.get('endDate') == null || searchParams.get('facebook') == null || searchParams.get('twitter') == null || searchParams.get('youtube') == null || searchParams.get("status") == null || searchParams.get('executionArn') == null) {
            router.replace(UpdateUrl(getKeys(), [{ key: 'hashtags', value: hashtags }, { key: 'startDate', value: startDate }, { key: 'endDate', value: endDate }, { key: 'facebook', value: facebook }, { key: 'twitter', value: twitter }, { key: 'youtube', value: youtube }, { key: 'status', value: status }, { key: 'executionArn', value: executionArn }]));
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
                    if (response.data.status == 'SUCCEEDED') {
                        const newUrl = UpdateUrl(getKeys(), [{ key: "status", value: "SUCCESS" }, { key: "executionArn", value: executionArn }]);
                        router.push(newUrl);
                        setAppState({ ...appState, output: response.data, reportData: generateReportData(response.data), status: 'SUCCESS' });
                        // Clear interval when SUCCEEDED
                        clearInterval(interval);
                    }
                }
                ).catch((error) => {
                    console.log(error);
                    const newUrl = UpdateUrl(getKeys(), [{ key: 'executionArn', value: "" }, { key: 'status', value: "ERROR" }]);
                    router.replace(newUrl);
                    setAppState({ ...appState, status: 'ERROR', error: error, executionArn: "" });
                });
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
        console.log(searchParams.get('facebook'));
        let body = {
            "input": {
                // remove any spaces from the hashtags
                "hashtags": hashtagsInput.replace(/\s/g, '').split(','),
                "filters": {
                    "startDate": searchParams.get("startDate"),
                    "endDate": searchParams.get("endDate"),
                    "socialNetworks": socialNetworks,
                },
            },
            "stateMachineArn": process.env.NEXT_PUBLIC_STATEMACHINEARN
        };
        // change the state to loading
        setAppState({ ...appState, status: 'LOADING' });
        axios.post('/api/submit', body)
            .then((response) => {
                const newUrl = UpdateUrl(getKeys(), [{ key: 'hashtags', value: hashtagsInput }, { key: 'executionArn', value: response.data.executionArn }, { key: "status", value: "LOADING" }]);
                router.push(newUrl);
                // clear the current output
                setAppState({ ...appState, output: {}, executionArn: response.data.executionArn, status: 'LOADING' });
                // execute the check-results api
                checkResults(response.data.executionArn);
            }
            ).catch((error) => {
                console.log(error);
                setAppState({ ...appState, status: 'ERROR', error: error, executionArn: "" });
                const newUrl = UpdateUrl(getKeys(), [{ key: 'hashtags', value: hashtagsInput }, { key: 'executionArn', value: "" }, { key: 'status', value: "ERROR" }]);
                router.replace(newUrl);
            });
    }

    const checkBox = (id) => {
        if (id === "facebook") {
            const facebookCheckbox = document.getElementById('facebookCheckbox');
            facebookCheckbox.checked = !facebookCheckbox.checked;
            const newUrl = UpdateUrl(getKeys(), [{ key: 'facebook', value: facebookCheckbox.checked }]);
            router.replace(newUrl);
        }
        else if (id === "twitter") {
            const twitterCheckbox = document.getElementById('twitterCheckbox');
            twitterCheckbox.checked = !twitterCheckbox.checked;
            const newUrl = UpdateUrl(getKeys(), [{ key: 'twitter', value: twitterCheckbox.checked }]);
            router.replace(newUrl);
        }
        else if (id === "youtube") {
            const youtubeCheckbox = document.getElementById('youtubeCheckbox');
            youtubeCheckbox.checked = !youtubeCheckbox.checked;
            const newUrl = UpdateUrl(getKeys(), [{ key: 'youtube', value: youtubeCheckbox.checked }]);
            router.replace(newUrl);
        }
    };

    // get the current keys from the url
    const getKeys = () => {
        var keys = {};
        for (const key of searchParams.keys()) {
            keys[key] = searchParams.get(key);
        }
        return keys;
    };

    return (
        <form className={styles.sectionContainer} onSubmit={onSubmit}>
            <section className={`${styles.section} ${styles.borderRight}`}>
                <p className={styles.inputTitle}
                    onClick={getKeys}
                >
                    Ingrese los hashtags
                </p>
                <p className={styles.inputSubtitle}>
                    Ingrese los hashtags separados por comas.
                </p>
                <section className={styles.inputContainer}>
                    <input
                        className={styles.textInput}
                        value={hashtagsInput}
                        id="hashtags"
                        type="text"
                        name="hashtags"
                        placeholder="e.g. Medellin, #Medellin, Hilton"
                        onChange={(event) => {
                            setHashtagsInput(event.target.value);
                            if (event.target.value === "") {
                                const newUrl = UpdateUrl(getKeys(), [{ key: 'hashtags', value: event.target.value }]);
                                router.replace(newUrl);
                            }
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
                                const newUrl = UpdateUrl(getKeys(), [{ key: 'startDate', value: event.target.value }])
                                router.replace(newUrl);
                            }}
                            required
                        />
                    </section>
                    <section className={styles.dateItem}>
                        <p>Fecha Inicial</p>
                        <input type="date" name="end-date" className={styles.date}
                            value={searchParams.get('endDate')}
                            onChange={(event) => {
                                const newUrl = UpdateUrl(getKeys(), [{ key: 'endDate', value: event.target.value }])
                                router.replace(newUrl);
                            }}
                            required
                        />
                    </section>
                </section>
                <section className={styles.checkboxContainer}>
                    <section className={styles.checkboxItem} >
                        <input type="checkbox" name="facebook" id="facebookCheckbox"
                            defaultChecked={JSON.parse(searchParams.get('facebook'))}
                            onChange={(event) => {
                                event.target.value = !event.target.checked;
                                const newUrl = UpdateUrl(getKeys(), [{ key: 'facebook', value: event.target.checked }]);
                                router.replace(newUrl);
                            }}
                        />
                        <div className={styles.socialNameContainer} onClick={
                            () => {
                                console.log("here");
                                checkBox("facebook");
                            }
                        }>
                            <i className={`fa-brands fa-square-facebook ${styles.facebookIcon}`}></i>
                            <p>Facebook e Instagram</p>
                        </div>
                    </section>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="twitter" id="twitterCheckbox"
                            defaultChecked={JSON.parse(searchParams.get('twitter'))}
                            onChange={(event) => {
                                event.target.value = !event.target.checked;
                                const newUrl = UpdateUrl(getKeys(), [{ key: 'twitter', value: event.target.checked }]);
                                router.replace(newUrl);
                            }}
                        />
                        <div className={styles.socialNameContainer} onClick={
                            () => {
                                checkBox("twitter");
                            }
                        }>
                            <i className={`fa-brands fa-square-twitter ${styles.twitterIcon}`}></i>
                            <p>Twitter</p>
                        </div>
                    </section>
                    <section className={styles.checkboxItem}>
                        <input type="checkbox" name="youtube" id="youtubeCheckbox"
                            defaultChecked={JSON.parse(searchParams.get('youtube'))}
                            onChange={(event) => {
                                event.target.value = !event.target.checked;
                                const newUrl = UpdateUrl(getKeys(), [{ key: 'youtube', value: event.target.checked }]);
                                router.replace(newUrl);
                            }}
                        />
                        <div className={styles.socialNameContainer}
                            onClick={
                                () => {
                                    checkBox("youtube");
                                }
                            }
                        >
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