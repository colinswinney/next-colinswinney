import { useEffect, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Jumbotron from '../components/jumbotron'
import Main from '../components/main'
import AboutSection from '../components/home/about-section'
import ProjectsSection from '../components/home/projects-section'
import LogoSection from '../components/home/logo-section'
import Guitar from '../components/svg/guitar'
import ContactSection from '../components/home/contact-section'
import Form from '../components/form'
import { getLogos, getHomeProjects } from '../lib/api'

const Home = ({ logos, projects }) => {

  return (
		<>
			<Head>
				<title>Colin Swinney</title>
			</Head>

			<Jumbotron className="home-jumbotron">
				<Jumbotron.Container>
					<Jumbotron.Heading>Colin Swinney</Jumbotron.Heading>
					<Jumbotron.SubHeading>
						I&apos;m a web developer from Milwaukee, WI. Let&apos;s make great
						music together.
					</Jumbotron.SubHeading>
					<Jumbotron.ButtonWrap>
						<Link href="/projects" passHref>
							<Jumbotron.Button>See My Work</Jumbotron.Button>
						</Link>
					</Jumbotron.ButtonWrap>

					<Jumbotron.RightSide>
						<Guitar />
					</Jumbotron.RightSide>
				</Jumbotron.Container>
			</Jumbotron>

			<Main noPadding>
				<AboutSection />

				<ProjectsSection projects={projects} />

				<LogoSection logos={logos} />

				<ContactSection />
			</Main>
		</>
	);
}

export default Home

export async function getStaticProps() {
  const logos = await getLogos();
  const projects = await getHomeProjects();
  return {
      props: {
          logos: logos,
          projects: projects
      }
  };
}