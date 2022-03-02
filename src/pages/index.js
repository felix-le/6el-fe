import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Components/Layout';
export default function Home({ data }) {
  return (
    <Layout>
      {/* {data.allStrapiHome.edges.map(({ node }) => ( */}
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <main>
            {/* <Banner 
              title=
              description=
              input=
            />
            <Intro 
              preTitle=
              title=
              description=
              image=
            /> */}

            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-orange-600 uppercase">
                  {/* Pre Title */}
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  {/* Title */}
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  {/* Description */}
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* There are a few features... might need to do something different here. ;)
                      <Feature key=
                        title=
                        description=
                      /> 
                    */}
                  </div>
                </div>
              </div>
            </div>
            {/* <Testimonial 
              testimonial=
            /> */}
          </main>
        </div>
      </div>
      {/* ))} */}
    </Layout>
  );
}

export const query = graphql`
  query Home {
    allStrapiHome {
      edges {
        node {
          homeBanner {
            id
            title
            description
            input
          }
          intro {
            id
            preTitle
            title
            description
            image {
              localFile {
                publicURL
              }
            }
          }
          featureIntro {
            id
            preTitle
            title
            description
          }
          features {
            id
            title
            description
          }
          testimonial {
            id
            testimonial
          }
        }
      }
    }
  }
`;

{
  /* Welcome to the Element 6 programming test. Please note:

Requirements:
  Using NPM 14.17.0. We use NVM in house to toggle our node version.
  Create a branch for your work. Title it: 'test-{name}'
  Swap name for your name.
  You can reference https://programming-example.netlify.app/ for the complete project.

Test Notes:
  1. We use Strapi as our CMS of choice. This dependency is installed for you. Please configure the plugin to gather data.
    - apiURL is http://172.105.25.208:1420
    - Single type is Home
    - The path is set to public. When connected properly, it will work.

  2. You will encounter errors when trying to run gatsby develop. This is normal. You need to resolve these errors. Few notes:
    - Please use ES6 syntax
    - Everything you need is available in this project
    - console.log(data) will come in handy. Look at the content, look at the live example, and map the content accordingly.
  
Please remove this comment block before you post your code for review. Best of luck! */
}
