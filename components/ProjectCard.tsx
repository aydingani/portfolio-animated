import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  url?: string
  giturl?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  url,
  giturl,
}: ProjectCardProps) {
  return (
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x hover:shadow-[0_0_2rem_-0.5rem_#ffffff80] transition-shadow duration-300">
      <Card className="bg-white dark:bg-gray-950 rounded-xl h-full">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription className="text-sm md:text-base">
            {description}
          </CardDescription>
          <div className="mt-2 text-sm">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            )}
            {url && giturl && <span className="mx-2">|</span>}
            {giturl && (
              <a
                href={giturl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            className={`${
              title === 'Bookology'
                ? 'w-full md:w-1/3 h-48 my-0 mx-auto'
                : title === 'CodeReview GPT'
                  ? 'w-full h-48 blur-md'
                  : 'w-full h-48'
            } object-cover rounded-md`}
          />
        </CardContent>
      </Card>
    </div>
  )
}
