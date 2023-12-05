import axios from 'axios'
import { NextResponse } from "next/server";

import cache from 'memory-cache';

export async function GET(request, res) {
    console.log("here");
    // retrieve the executionArn
    const executionArn = cache.get("executionArn");

    if (!executionArn) {
        return NextResponse.json({ error: "No executionArn" });
    }
    // uuse the executionArn to retrieve the output
    const executionOutput = await axios.get(`${process.env.NEXT_PUBLIC_EXECUTION}/sentiments?executionArn=${executionArn}`);

    // if the execution fails, return an error
    if (!executionOutput) {
        cache.del(executionArn);
        return NextResponse.json({ error: "Error generating analysis." });
    }

    // if the execution completes but is not 'SUCCEEDED', return an error
    if (executionOutput && executionOutput.data.status != 'SUCCEEDED' && executionOutput.data.status != 'RUNNING') {
        cache.del(executionArn);
        return NextResponse.json({ error: executionOutput.data.status });
    }

    return NextResponse.json(executionOutput.data);
}