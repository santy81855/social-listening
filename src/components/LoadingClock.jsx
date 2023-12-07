'use client';
import { ClockLoader } from "react-spinners";

export default function LoadingClock() {
    return (
        <ClockLoader color={"#000000"} loading={true} size={150} />
    );
};