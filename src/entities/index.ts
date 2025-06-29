import { superdevClient } from "@/lib/superdev/client";

export const BlogPost = superdevClient.entity("BlogPost");
export const User = superdevClient.auth;