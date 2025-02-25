import RSS from "rss";

export async function GET() {
  // First we will add some basic blog info.
  const feed = new RSS({
    title: "Pixel and Circuit",
    description: "Your local tech shop.",
    generator: "RSS for Node and Next.js",
    feed_url: "https://blog.pxlandcircuit.shop/feed.xml",
    site_url: "https://blog.pxlandcircuit.shop/",
    managingEditor: "TiffLabs",
    webMaster: "Tiff at pxlandcircuit@tifflabs.org",
    copyright: "Copyright 2025, Pixel & Circuit",
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  // Then we will add our individual blog posts. You can of course
  // fetch these from somewhere else.
  feed.item({
    title: "Blog Post #1",
    description: "Description of Blog Post #1",
    url: `https://drazen.bebic.dev/blog/blog-post-1`,
    categories: ["nextjs", "blog"],
    author: "Drazen Bebic",
    date: "2024-08-27",
  });
  feed.item({
    title: "Blog Post #2",
    description: "Description of Blog Post #2",
    url: `https://drazen.bebic.dev/blog/blog-post-2`,
    categories: ["nextjs", "blog"],
    author: "Drazen Bebic",
    date: "2024-08-28",
  });

  // And finally, we return a response with the appropriate
  // Content-Type header.
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
