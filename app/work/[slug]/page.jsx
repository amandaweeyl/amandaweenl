import { projects } from '../../../lib/content.js'
import Portfolio from '../../../components/Portfolio.jsx'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    }
  }

  const title = `${project.client} / ${project.title} — Amanda Wee`
  const description = project.description[0]

  return {
    title,
    description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function WorkPage() {
  return <Portfolio />
}
