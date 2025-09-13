"use client";

import { useEffect, useState } from "react";
import { CalendarDays, ExternalLink } from "lucide-react";
import Image from "next/image";
import "./blog-section.css";

const HASHNODE_API = "https://gql.hashnode.com";

async function fetchFromHost(host: string) {
  const query = `
    query GetAllArticles {
      publication(host: "${host}") {
        posts(first: 5) {
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `;

  const res = await fetch(HASHNODE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  return data.data.publication?.posts.edges || [];
}

type PostNode = {
  title: string;
  coverImage: { url: string };
  publishedAt: string;
  brief: string;
  slug: string;
  host?: string;
};

type Post = {
  node: PostNode;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const hosts = [
        "ai-for-everyone.hashnode.dev",
        "text-to-tokens.hashnode.dev",
        "failsinrag.hashnode.dev",
        "ragintro.hashnode.dev",
        "agenticais.hashnode.dev",
        "prmpt.hashnode.dev",
        "cot.hashnode.dev",
        "vectorsamjhoaasaan.hashnode.dev",
      ];

      let allPosts: Post[] = [];
      for (const host of hosts) {
        const hostPosts: Post[] = await fetchFromHost(host);
        // Add host info to each post
        hostPosts.forEach((p) => {
          p.node.host = host;
        });
        allPosts = [...allPosts, ...hostPosts];
      }

      // Sort by date
      allPosts.sort(
        (a, b) =>
          new Date(b.node.publishedAt).getTime() -
          new Date(a.node.publishedAt).getTime()
      );

      setPosts(allPosts);
      setLoading(false);
    }

    fetchAll();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-wrapper">
          <div className="blog-header">
            <h1 className="blog-title">
              My <span className="blog-title-accent">Blog</span>
            </h1>
            <p className="blog-description">Loading latest articles...</p>
          </div>
          <div className="blog-grid-section">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="loading-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line skeleton-line-short"></div>
                  <div className="skeleton-line skeleton-line-medium"></div>
                  <div className="skeleton-line skeleton-line-full"></div>
                  <div className="skeleton-line skeleton-line-partial"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-wrapper">
        {/* Header Section */}
        <div className="blog-header">
          <h1 className="blog-title">
            My <span className="blog-title-accent">Blogs</span>
          </h1>
          <p className="blog-description">
            Exploring AI, Generative AI, and the latest in technology through
            detailed articles and insights.
          </p>
          <span className="blog-count-badge">
            {posts.length} Articles Published
          </span>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid-section">
          {posts.map((post, i) => (
            <div key={i} className="blog-card">
              {/* Cover Image */}
              {post.node.coverImage?.url && (
                <div className="blog-card-image-container">
                  <Image
                    src={post.node.coverImage.url || "/placeholder.svg"}
                    alt={post.node.title}
                    width={600}
                    height={400}
                    className="blog-card-image"
                    priority={false}
                  />
                </div>
              )}

              {/* Card Header */}
              <div className="blog-card-header">
                <h3 className="blog-card-title">{post.node.title}</h3>
                <div className="blog-card-date">
                  <CalendarDays
                    className="blog-card-date-icon"
                    style={{ width: "1rem", height: "1rem" }}
                  />
                  {formatDate(post.node.publishedAt)}
                </div>
              </div>

              {/* Card Content */}
              <div className="blog-card-content">
                <p className="blog-card-brief">{post.node.brief}</p>

                <a
                  href={`https://${post.node.host}/${post.node.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card-link"
                >
                  Read More
                  <ExternalLink className="blog-card-link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && !loading && (
          <div className="empty-state">
            <h3 className="empty-state-title">No articles found</h3>
            <p className="empty-state-description">
              Check back later for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
