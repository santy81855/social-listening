import axios from 'axios'
import { NextResponse } from "next/server";

import crypto from 'crypto';

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

    // encrypt the executionArn
    const key = "AGhNEBNTrw6sKWZkUEqw5phSN98+oaTqmFdQNDghQwf6WifEaSkNl+PfZMTb2aCasWl+nVgLKrnbCqUPGnUYDpyHaquL7u596Gb++QeKudKXqukDBL9LZ/zwZ7+d9gvdgogRWAbh0ImE/KlpefaNqGE5YGrpRsNvpWR9kW5Xhc56AcN6nGUTg0wbeWCL7hEnOp1LgBtBo9PpQc5mrUQbHK/FeIlOs5cI1sQWVOGFFyrnFtKnJ/3ycDNZxnVRzwo0hKuLYWnanHP+vGqlxKD84nqJ4ozSouqDOeZVW63NnGvaTkdPVYLL8HvT521Q7RqJTofnQgL0JVLOs9so6AemCLLlUYZmBZN8bIBvAlDSLNg="

    // Create an AES cipher with the provided key
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encryptedText = cipher.update(executionArn, 'utf8', 'hex');
    encryptedText += cipher.final('hex');

    return NextResponse.json({ success: true, executionArn: encryptedText });
}