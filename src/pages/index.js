import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Elements/Banner';
import Intro from '../components/Elements/Intro';
import Feature from '../components/Elements/Feature';
import Testimonial from '../components/Elements/Testimonial';
export default function Home({ data }) {
  const {
    allStrapiHome: { edges: node },
  } = data;

  return (
    <Layout>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <main>
            {node.map(({ node }) => (
              <React.Fragment key={node}>
                <Banner
                  title={node.homeBanner.title}
                  description={node.homeBanner.description}
                  input={node.homeBanner.input}
                />
                <Intro
                  preTitle={node.intro.preTitle}
                  title={node.intro.title}
                  description={node.intro.description}
                  image={node.intro.image.localFile.publicURL}
                />
                {/* Feature Intro */}
                <div className="relative bg-white py-16 sm:py-24 lg:py-32">
                  <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-base font-semibold tracking-wider text-orange-600 uppercase">
                      {node.featureIntro.preTitle}
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                      {node.featureIntro.title}
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                      {node.featureIntro.description}
                    </p>
                    <div className="mt-12">
                      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {node.features.map(({ id, title, description }) => {
                          return (
                            <Feature
                              key={id}
                              id={id}
                              title={title}
                              description={description}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Feature Intro */}
                <Testimonial testimonial={node.testimonial.testimonial} />
              </React.Fragment>
            ))}
          </main>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Home {
    allStrapiHome {
      edges {
        node {
          id # id of the node
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
