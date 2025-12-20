import { NextResponse } from "next/server";

const GET = async () => {
    const metrics = await globalThis.metrics?.registry?.metrics();

    if (metrics) {
        return NextResponse.json({
            message: "metrics is missing",
        }, { status: 404 });
    }

    return new NextResponse(metrics, {
        headers: {
            "Content-Type": "text/plain",
        }
    });
}

export {
    GET,
}
