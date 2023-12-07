'use client';
import styles from '@styles/SubmitButton.module.css';
import { useFormStatus } from "react-dom";
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { submitPressed } from '@actions/action'
import UpdateUrl from '@lib/UpdateUrl';
import axios from 'axios';

const SubmitButton = ({ text }) => {
    const status = useFormStatus();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        async function checkResults(executionArn) {
            // poll the check-results api every 10 seconds until we get a result
            let interval = setInterval(() => {
                axios.get(`/api/check-results?executionArn=${executionArn}`)
                    .then((response) => {
                        if (response.data.status == 'SUCCEEDED') {
                            console.log(status.data.get("hashtags"));
                            var keys = {};
                            for (const key of searchParams.keys()) {
                                keys[key] = status.data.get(key);
                            }
                            console.log(keys);
                            const newUrl = UpdateUrl(keys, [{ key: "status", value: "SUCCESS" }, { key: "executionArn", value: executionArn }]);
                            router.push(newUrl);
                            // Clear interval when SUCCEEDED
                            clearInterval(interval);
                        }
                    }
                    ).catch((error) => {
                        console.log(error);
                        var keys = {};
                        for (const key of searchParams.keys()) {
                            keys[key] = searchParams.get(key);
                        }
                        const newUrl = UpdateUrl(keys, [{ key: 'executionArn', value: "" }, { key: 'status', value: "ERROR" }]);
                        router.replace(newUrl);
                    });
            }, 10000);
        }
        // if the form is completed then start the polling
        const getExecutionArn = async () => {
            console.log(status.data.get("hashtags"));
            var keys = {};
            for (const key of searchParams.keys()) {
                keys[key] = searchParams.get(key);
            }
            const executionArn = await submitPressed(status.data, keys);
            if (!executionArn) {
                alert("Error: No executionArn.");
                return;
            }
            const newUrl = UpdateUrl(keys, [{ key: 'hashtags', value: status.data.get("hashtags") }, { key: 'executionArn', value: executionArn }, { key: 'status', value: "LOADING" }]);
            router.replace(newUrl);
            checkResults(executionArn);
        }
        if (status.data) {
            getExecutionArn();
        }
    }, [searchParams, status, router]);

    return (
        <button type="submit" className={styles.submitButton} disabled={status.pending}>
            {status.pending ? "Loading..." : text}
        </button>
    );
};

export default SubmitButton;