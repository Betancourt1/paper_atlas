import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/papers/paper_attention_is_all_you_need");
}

