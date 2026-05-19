"use client";
import { use } from "react";

export default async function BlogSlugCatchAllRoute({
    params
}: {
    params: Promise<{ slugs: string[] }>
}) {
    const { slugs } = use(params);
    return (
        <div>
            <h1>welcome To BlogSlugCatchAllRoute: {slugs.join(', ')}</h1>
        </div>
)
}