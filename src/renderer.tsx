import { Parafraph } from "@/components/Parafraph";
import { Quote } from "@/components/Quote";
import { LeftRight } from '@/components/LeftRight'

export function renderComponent(data: any) {
  const contentType = data?.sys?.contentType?.sys?.id;
  switch (contentType) {
    case "paragraph":
      return <Parafraph key={data?.sys?.id} {...data?.fields} />;
    case "quote":
      return <Quote key={data?.sys?.id} {...data?.fields} />;
    case "leftRight":
      return <LeftRight key={data?.sys?.id} {...data?.fields} />;
    default:
      return <p key={data?.sys?.id}>{`Unknown content type ${contentType}`}</p>;
  }
}
