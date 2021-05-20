export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a5a94d5bb46f3750a299a3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-27t9j3gw",
                  apiId: "a6193304-dfb9-40c2-967f-300ffdaa7949",
                },
                {
                  buildHookId: "60a5a94da1c8e2489dff4444",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wtdtw5qa",
                  apiId: "07ad6346-005d-4c1b-99ea-781c85d1a22b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/MauMccoy/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wtdtw5qa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
