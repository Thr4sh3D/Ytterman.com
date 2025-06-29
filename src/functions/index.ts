import { superdevClient } from "@/lib/superdev/client";

export const updateBlogPostImage = superdevClient.functions.updateBlogPostImage;
export const diagnoseWebsocket = superdevClient.functions.diagnoseWebsocket;
export const sendContactEmail = superdevClient.functions.sendContactEmail;
export const deleteBlogPosts = superdevClient.functions.deleteBlogPosts;
