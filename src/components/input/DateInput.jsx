'use client';
import styles from '@styles/DateInput.module.css';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import UpdateUrl from '@lib/UpdateUrl';

const DateInput = ({ name, value }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    return (
        <input
            type="date"
            name={name}
            value={searchParams.get(name)}
            max={new Date().toISOString().split("T")[0]}
            onChange={(event) => {
                var keys = {};
                for (const key of searchParams.keys()) {
                    keys[key] = searchParams.get(key);
                }
                const newUrl = UpdateUrl(keys, [{ key: name, value: event.target.value }])
                router.replace(newUrl);
            }}
            className={styles.dateInput}
            required
        />
    );
}

export default DateInput;