import type { NextApiRequest, NextApiResponse } from "next";
import { searchBlogPages } from "@/src/contentful";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { query } = req.query;
  searchBlogPages(query as string).then((resp) => {
    const result = resp?.map(
      ({ fields: { title, slug } }: any) => ({
        title,
        href: `/blog/${slug}`,
      }),
    );
    res.status(200).json(result as any);
  });
}
