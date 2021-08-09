const API_URL = `http://local.nextcolinswinney.test/graphql`

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };

    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })
    });

    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

export async function getAllProjects(preview) {
    const data = await fetchAPI(
    `
      query AllProjects {
        projects (first: 10000, where: { orderby: { field: DATE, order: ASC}}) {
          edges {
            node {
              content
              id
              title
              slug
              projectsPostType {
                techStack
              }
              featuredImage {
                node {
                  altText
                  caption
                  title
                  mediaItemUrl
                  sourceUrl(size: THUMBNAIL)
                  mediaDetails {
                    sizes {
                      height
                      width
                      sourceUrl
                    }
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
            }
            featuredImage {
            node {
                altText
                caption
                title
                mediaItemUrl
                sourceUrl(size: THUMBNAIL)
                mediaDetails {
                    sizes {
                        height
                        width
                        sourceUrl
                    }
                }
              }
            }
        }
      }
    `,
      {
        variables: {
          id: slug,
          idType: "URI"
        }
      }
    );
  
    return data;
  }