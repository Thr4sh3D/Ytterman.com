import { superdevClient } from "@/lib/superdev/client";

export const deleteBlogPosts = superdevClient.functions.deleteBlogPosts;
export const diagnoseWebsocket = superdevClient.functions.diagnoseWebsocket;
export const sendContactEmail = superdevClient.functions.sendContactEmail;
