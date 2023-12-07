import axios from 'axios'
import { NextResponse, nextRequest } from "next/server";

import crypto from 'crypto';

export async function GET(request, res) {
    // get the executionArn from the url
    const searchParams = request.nextUrl.searchParams;
    // get the executionArn from the url
    let encryptedText = searchParams.get("executionArn");
    if (!encryptedText) {
        return NextResponse.json({ error: "No executionArn" });
    }
    // Create an AES decipher with the same key
    const key = "AGhNEBNTrw6sKWZkUEqw5phSN98+oaTqmFdQNDghQwf6WifEaSkNl+PfZMTb2aCasWl+nVgLKrnbCqUPGnUYDpyHaquL7u596Gb++QeKudKXqukDBL9LZ/zwZ7+d9gvdgogRWAbh0ImE/KlpefaNqGE5YGrpRsNvpWR9kW5Xhc56AcN6nGUTg0wbeWCL7hEnOp1LgBtBo9PpQc5mrUQbHK/FeIlOs5cI1sQWVOGFFyrnFtKnJ/3ycDNZxnVRzwo0hKuLYWnanHP+vGqlxKD84nqJ4ozSouqDOeZVW63NnGvaTkdPVYLL8HvT521Q7RqJTofnQgL0JVLOs9so6AemCLLlUYZmBZN8bIBvAlDSLNg="
    const decipher = crypto.createDecipher('aes-256-cbc', key);

    // Decrypt the text
    let executionArn = decipher.update(encryptedText, 'hex', 'utf-8');
    executionArn += decipher.final('utf-8');

    // uuse the executionArn to retrieve the output
    const executionOutput = await axios.get(`${process.env.NEXT_PUBLIC_EXECUTION}/sentiments?executionArn=${executionArn}`);

    // if the execution fails, return an error
    if (!executionOutput) {
        return NextResponse.json({ error: "Error generating analysis." });
    }

    // if the execution completes but is not 'SUCCEEDED', return an error
    if (executionOutput && executionOutput.data.status != 'SUCCEEDED' && executionOutput.data.status != 'RUNNING') {
        return NextResponse.json({ error: executionOutput.data.status });
    }

    return NextResponse.json(executionOutput.data);
}