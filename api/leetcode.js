export default async function handler(req, res) {
  try {
    const username = (req.query.username || "").toString().trim();
    if (!username) return res.status(400).json({ error: "Missing username" });

    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const r = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({ query, variables: { username } }),
    });

    const data = await r.json();
    if (!r.ok) return res.status(r.status).json(data);

    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
}
