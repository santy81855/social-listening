import axios from 'axios'
import { NextResponse } from "next/server";

import cache from 'memory-cache';

export async function POST(request, res) {
    const body = await request.json();
    // send request to start execution and return executionArn
    const result = await axios.post(process.env.NEXT_PUBLIC_STARTEXCUTION, body);

    if (!result) {
        return NextResponse.json({ error: "No Response." });
    }

    if (!result.data.executionArn) {
        return NextResponse.json({ error: "No executionArn." });
    }
    // store the executionArn
    const executionArn = result.data.executionArn;

    // Store the executionArn in cache (can use a more persistent storage for production)
    cache.put("executionArn", executionArn, 24 * 60 * 60 * 1000); // 24 hours expiration

    // // create a loop that checks the status of the execution every 10 seconds until it is complete or fails
    // var status = 'RUNNING';
    // var executionOutput = {
    //     "executionArn": executionArn,
    //     "status": status,
    // };

    // // loop until the execution is complete or fails
    // while (status == 'RUNNING') {
    //     await new Promise(r => setTimeout(r, 10000));
    //     executionOutput = await axios.get(`${process.env.NEXT_PUBLIC_EXECUTION}/sentiments?executionArn=${executionArn}`);
    //     status = executionOutput.data.status;
    // }

    // // if the execution fails, return an error
    // if (!executionOutput || status != 'SUCCEEDED') {
    //     return NextResponse.error(new Error("Error generating analysis."));
    // }


    return NextResponse.json({ success: true });
}