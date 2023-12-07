'use server';
import axios from 'axios';
import generateReportData from '@lib/GenerateReportData';
import { parseCheckState } from '@/lib/ParseCheckState';

// server action to get report data
export async function getReportData(executionArn) {
    const res = await axios.get(`http://localhost:3000/api/check-results?executionArn=${executionArn}`);
    const reportData = await res.data;
    return generateReportData(reportData);
}

export async function submitPressed(formData, keys) {
    var socialNetworks = [];
    if (parseCheckState(keys.facebook)) {
        socialNetworks.push("facebook");
    }
    if (parseCheckState(keys.twitter)) {
        socialNetworks.push("twitter");
    }
    if (parseCheckState(keys.youtube)) {
        socialNetworks.push("youtube");
    }
    let hashtags = formData.get("hashtags") || "";
    const regex = /\b[^,]+\b/g;
    const matches = hashtags.match(regex);
    hashtags = matches || [];

    let body = {
        "input": {
            // remove any spaces from the hashtags
            "hashtags": hashtags,
            "filters": {
                "startDate": keys.startDate,
                "endDate": keys.endDate,
                "socialNetworks": socialNetworks,
            },
        }
    };
    const res = await axios.post('http://localhost:3000/api/submit', body);
    try {
        const executionArn = await res.data.executionArn;
        return executionArn;

    } catch (error) {
        console.log(error);
        return null;
    }

}