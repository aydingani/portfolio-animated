import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Movie Watchlist',
    description: 'Find and bookmark your movies',
    image: '/imgs/movielist.png',
    url: 'https://gani-movielist.netlify.app',
    giturl: 'https://github.com/aydingani/movie-watchlist',
  },
  {
    title: 'Bookology',
    description: 'Sign in, save your books, AI chat',
    image: '/imgs/bookology.gif',
    url: '',
    giturl: 'https://github.com/aydingani/bookology-app',
  },
  {
    title: 'Rabalon',
    description: 'Company Website',
    image: '/imgs/rabalon.png',
    url: 'https://rabalon.com',
    giturl: '',
  },
  {
    title: 'CodeReview GPT',
    description: 'Loading',
    image: '/imgs/quiz.jpg',
    url: '',
    giturl: '',
  },
]

export default function Projects() {
  return (
    <section className="mb-8 md:mb-12 mt-6 md:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
