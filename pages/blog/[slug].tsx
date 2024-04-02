import { Box } from '@mui/material'
import { getBlogPage } from "@/src/contentful";
import { renderComponent } from "@/src/renderer";
import { BreadcrumbcNavigation } from '@/components/BreadcrumbcNavigation'

export default function BlogPage({ content, title }: any) {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        width: "100%",
      }}
    >
        <BreadcrumbcNavigation
            breadcrumbs={[{ href: "/", title: "Home" }, { href: "/blog", title: "Blog" }]}
            current={title}
        />
      {content?.map((item: any) => renderComponent(item))}
    </Box>
  );
}

export async function getServerSideProps({ query: { slug } }: any) {
  const blog = await getBlogPage(slug);
  return {
    props: { ...blog?.fields },
  };
}
