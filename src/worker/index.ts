import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/health", (c) => c.json({ ok: true, name: "Royal Executive Residency" }));

// Images live in the R2 bucket; until they are uploaded (and in local dev) the bundled copies in /public/media are served.
app.get("/media/:key{.+}", async (c) => {
	const key = c.req.param("key");
	const object = await c.env.IMAGES.get(key, { onlyIf: c.req.raw.headers });

	if (!object) return c.env.ASSETS.fetch(c.req.raw);

	const headers = new Headers();
	object.writeHttpMetadata(headers);
	headers.set("etag", object.httpEtag);
	headers.set("cache-control", "public, max-age=604800");

	if (!("body" in object)) return new Response(null, { status: 304, headers });
	return new Response(object.body, { headers });
});

export default app;
