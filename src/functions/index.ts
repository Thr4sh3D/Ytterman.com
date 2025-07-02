import { superdevClient } from "@/lib/superdev/client";

export const generateSitemap = superdevClient.functions.generateSitemap;
export const diagnoseWebsocket = superdevClient.functions.diagnoseWebsocket;
export const getVersion = superdevClient.functions.getVersion;
export const index = superdevClient.functions.index;
export const sendContactEmail = superdevClient.functions.sendContactEmail;
export const updateBlogPosts = superdevClient.functions.updateBlogPosts;
export const deleteBlogPosts = superdevClient.functions.deleteBlogPosts;
export const updateBlogPostImage = superdevClient.functions.updateBlogPostImage;