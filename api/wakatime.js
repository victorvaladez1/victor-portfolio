export default async function handler(req, res) {
    try {
        const apiKey = process.env.WAKATIME_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: "Missing WAKATIME_API_KEY" });
        }

        const auth = Buffer.from(apiKey).toString("base64");

        const r = await fetch(
            "https://wakatime.com/api/v1/users/current/summaries?range=last_7_days",
            { headers: { Authorization: `Basic ${auth}` } }
        );

        const data = await r.json();
        if (!r.ok) return res.status(r.status).json(data);

        res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600")
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({error: "Server error"});
    }
}