const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
	const headers = { "Content-Type": "application/json" };

	const res = await fetch(API_URL, {
		method: "POST",
		headers,
		body: JSON.stringify({ query, variables }),
	});

	const json = await res.json();
	if (json.errors) {
		console.log(json.errors);
		console.log("error details", query, variables);
		throw new Error("Failed to fetch API");
	}
	return json.data;
}

export async function getAllProjects(preview) {
	const data = await fetchAPI(
		`
      query AllProjects {
        projects (first: 10000, where: { orderby: { field: TITLE, order: ASC}}) {
          edges {
            node {
              content
              id
              title
              slug
              projectsPostType {
                techStack
                summary
                logo {
                  altText
                  caption
                  title
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              featuredImage {
                node {
                  altText
                  caption
                  title
                  sourceUrl(size: LARGE)
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }      
    `
	);

	return data;
}

export async function getAllProjectsWithSlug() {
	const data = await fetchAPI(
		`
        {
            projects(first: 10000) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `
	);
	return data?.projects;
}

export async function getProject(slug) {
	const data = await fetchAPI(
		`
      query ProjectBySlug($id: ID!, $idType: ProjectIdType!) {
        project(id: $id, idType: $idType) {
          content
          id
          slug
          title
          projectsPostType {
            techStack
            websiteUrl
            websiteName
            summary
            logo {
              altText
              caption
              title
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              title
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    `,
		{
			variables: {
				id: slug,
				idType: "URI",
			},
		}
	);

	return data;
}

export async function getHomeProjects() {
	const data = await fetchAPI(
		`
    query HomeProjects {
      hsl: project(id: "166", idType: DATABASE_ID) {
        content
        id
        title
        slug
        projectsPostType {
          techStack
          summary
          logo {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            title
            sourceUrl(size: LARGE)
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      bbms: project(id: "29", idType: DATABASE_ID) {
        content
        id
        title
        slug
        projectsPostType {
          techStack
          summary
          logo {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            title
            sourceUrl(size: LARGE)
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      ci: project(id: "25", idType: DATABASE_ID) {
        content
        id
        title
        slug
        projectsPostType {
          techStack
          summary
          logo {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            title
            sourceUrl(size: LARGE)
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      dusty: project(id: "14", idType: DATABASE_ID) {
        content
        id
        title
        slug
        projectsPostType {
          techStack
          summary
          logo {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            title
            sourceUrl(size: LARGE)
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      lri: project(id: "13", idType: DATABASE_ID) {
        content
        id
        title
        slug
        projectsPostType {
          techStack
          summary
          logo {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            title
            sourceUrl(size: LARGE)
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      netflix: project(id: "22", idType: DATABASE_ID) {
        content
        id
        title
        slug
        projectsPostType {
          techStack
          summary
          logo {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            title
            sourceUrl(size: LARGE)
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      llr: project(id: "17", idType: DATABASE_ID) {
        content
        id
        title
        slug
        projectsPostType {
          techStack
          summary
          logo {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            title
            sourceUrl(size: LARGE)
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }      
    }
    `
	);
	return data;
}

export async function getLogos() {
	const data = await fetchAPI(
		`
    query LogosQuery {
      logoBBMS: mediaItem(id: 91, idType: DATABASE_ID) {
        title
        mediaItemUrl
        mediaDetails {
          height
          width
        }
      }
      logoA3: mediaItem(id: 90, idType: DATABASE_ID) {
        title
        mediaItemUrl
        mediaDetails {
          height
          width
        }
      }
      logoCI: mediaItem(id: 92, idType: DATABASE_ID) {
        title
        mediaItemUrl
        mediaDetails {
          height
          width
        }
      }
      logoLRI: mediaItem(id: 94, idType: DATABASE_ID) {
        title
        mediaItemUrl
        mediaDetails {
          height
          width
        }
      }
      logoDMR: mediaItem(id: 93, idType: DATABASE_ID) {
        title
        mediaItemUrl
        mediaDetails {
          height
          width
        }
      }
      logoTH: mediaItem(id: 95, idType: DATABASE_ID) {
        title
        mediaItemUrl
        mediaDetails {
          height
          width
        }
      }
    }
         
    `
	);

	return data;
}

export async function getAboutMe() {
	const data = await fetchAPI(
		`
  query getAbout {
    page(id: "about-me", idType: URI) {
      content
      aboutMe {
        summary
      }
    }
  }
  `
	);
	return data;
}
