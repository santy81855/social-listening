// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const data = req.body;

//         console.log(data);

//         res.status(200).json({ message: 'webhook received!' });
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

import { NextResponse } from "next/server";

export async function POST(req) {
    const payload = await req.text();
    console.log(req.body);
    console.log(payload);
    return NextResponse.json({ received: true });
}