// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  res.status(200).json({ name: "John Doe" });
}
