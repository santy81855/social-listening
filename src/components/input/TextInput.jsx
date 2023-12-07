'use client';
import styles from '@styles/TextInput.module.css';
import React, { useState } from 'react';

const TextInput = ({ name, value, placeholder }) => {
    const [inputValue, setInputValue] = useState(value);
    return (
        <input
            type="text"
            name={name}
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
            placeholder={placeholder}
            className={styles.textInput}
            required
        />
    );
}

export default TextInput;