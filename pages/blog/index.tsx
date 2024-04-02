import { Box } from "@mui/material";
import { BlogCover } from "@/components/BlogCover";
import { getBlogPages } from "@/src/contentful";
import { BlockGrid } from "@/components/Grid";
import { BreadcrumbcNavigation } from "@/components/BreadcrumbcNavigation";

export default function Home({ blogs }: any) {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <BreadcrumbcNavigation
        breadcrumbs={[{ href: "/", title: "Home" }]}
        current="Blog"
      />
      <BlockGrid>
        {blogs?.map((blog: any) => (
          <BlogCover key={blog.sys.id} {...blog.fields} />
        ))}
      </BlockGrid>
    </Box>
  );
}

export async function getServerSideProps() {
  const blogPages = await getBlogPages();
  return {
    props: { blogs: blogPages },
  };
}
