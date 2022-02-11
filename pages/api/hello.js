// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from "next-connect";

const handle = nc().get((req, res) => {});

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
