import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Page from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import OverthoughtList from '~/components/Ghost/List'
import DesignDetailsGrid from '~/components/DesignDetailsGrid'
import PodcastEpisodesList from '~/components/PodcastEpisodesList'
import FigmaPlugins from '~/components/FigmaPlugins'
import { initApolloClient } from '~/graphql/services/apollo'
import { GET_HOME } from '~/graphql/queries'
import { Post, Episode, Repo } from '~/graphql/types.generated'
import { DesignDetailsPostSummary, summaries } from '~/data/appDissections'
import Divider from '~/components/Divider'

interface Props {
  data: {
    posts: Post[]
    episodes?: Episode[]
    repos?: Repo[]
  }
  summaries: DesignDetailsPostSummary[]
}

function About({ data, summaries }: Props) {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12" data-cy="about-page">
          <div className="-mx-4 -mt-24 md:mt-0 md:-mx-8 ">
            <Image
              src="https://d2fl8krjhnb3wd.cloudfront.net/static/img/about.png"
              alt={'A photo of me'}
              layout="responsive"
              width="1922"
              height="1430"
              className="md:rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col prose lg:prose-lg">
              <p>
                👋 I’m a software developer and researcher, currently living in
                Toronto.
              </p>
              <p>
                I currently conduct research at{' '}
                <a
                  href="https://lassonde.yorku.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  York University
                </a>{' '}
                where I work with an interdisciplinary team to study discourse
                and information cascades in social networks. My research is
                primarily motivated by the need to accurately discover
                interesting patterns in large data sets. It profoundly involves
                the design and development of methods at the intersection of{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Data_mining"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  data mining
                </a>{' '}
                and{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Machine_learning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  machine learning
                </a>
                .
              </p>

              <p>
                I also co-founded{' '}
                <a
                  href="https://www.pharmassess.ca/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PharmAssess Diagnostics Corp.
                </a>
                , where I develop software to mine data from literature and
                public databases, and securely process PHI used in real-time
                inference engines that provide better healthcare to Canadians.
              </p>
              <p>
                Through creation of software, I hope to make impactful and novel
                contributions that accelerate applications of{' '}
                <a
                  href="https://cci.mit.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  collective intelligence
                </a>{' '}
                in our society. You can find me on{' '}
                <a
                  href="https://github.com/paulowe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{' '}
                where I’m building in the open, or on{' '}
                <a
                  href="https://www.linkedin.com/in/paulowe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                for professional networking.
              </p>
            </div>

            <Divider />

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <h4>Writing</h4>

                <p className="text-lg">Thoughts, stories and ideas.</p>
              </div>

              {data && data.posts && <OverthoughtList posts={data.posts} />}

              <div className="flex flex-col space-y-1">
                <Link href="/paulsmessage" as="/paulsmessage" passHref>
                  <a className="text-blue-600 dark:text-blue-500">
                    See all posts &rarr;
                  </a>
                </Link>

                <a
                  href="https://paulsmessage.com/rss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500"
                >
                  Subscribe via RSS &rarr;
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <h4>Projects</h4>
                <p className="text-lg">Weekend hacks for fun and learning.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <Link passHref href="/hn">
                  <a className="text-blue-600 dark:text-blue-500">
                    Hacker News
                  </a>
                </Link>
                <p>A better Hacker News.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <Link passHref href="/stack">
                  <a className="text-blue-600 dark:text-blue-500">My Stack</a>
                </Link>
                <p>A curated list of my favorite tools and software.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <Link passHref href="/security">
                  <a className="text-blue-600 dark:text-blue-500">
                    Security Checklist
                  </a>
                </Link>
                <p>Tools and resources for staying safe on the internet.</p>
              </div>
              <div className="flex flex-col space-y-1">
                <Link passHref href="/bookmarks">
                  <a className="text-blue-600 dark:text-blue-500">Bookmarks</a>
                </Link>
                <p>Internet things, saved for later.</p>
              </div>
              <div />
            </div>

            <div className="flex flex-col space-y-4">
              <h4>Open source work</h4>
              <div className="flex flex-col space-y-1">
                <a
                  href="https://github.com/paulowe/paulowe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500"
                >
                  paulowe / paulowe
                </a>
                <p>The code that powers this website you’re looking at.</p>
              </div>

              <div className="flex flex-col space-y-1">
                <a
                  className="text-blue-600 dark:text-blue-500"
                  href="https://github.com/paulowe/influence-max-gpp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  paulowe / influence-max-gpp
                </a>
                <p>
                  A graph processing platform to create a ranking dashboard of
                  influential Twitter profiles.{' '}
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <a
                  href="https://github.com/paulowe/maps4resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500"
                >
                  paulowe / maps4resources
                </a>
                <p>
                  A flask application for visualizing spreadsheets on a map.
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <a
                  href="https://github.com/paulowe/twint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500"
                >
                  paulowe / twint
                </a>
                <p>
                  An advanced Twitter scraping &amp; OSINT tool written in
                  Python.
                </p>
              </div>

              <a
                href="https://github.com/paulowe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500"
              >
                Follow me on GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const client = await initApolloClient({})
  const { data } = await client.query({ query: GET_HOME })
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      data,
      apolloStaticCache: client.cache.extract(),
      summaries,
    },
  }
}

export default About
