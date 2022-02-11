import Image from 'next/image'
import SkillCardProps from '../typings/SkillCardProps'

const SkillCard = ({ name, src }: SkillCardProps): JSX.Element => {
  return (
    <>
      <div className="grid">
        <Image src={src} width="100%" height="100%" alt="skills" />
      </div>
    </>
  )
}

const langs: Record<string, SkillCardProps> = {
  python: {
    name: 'Python',
    src: '/img/python.png'
  },
  typescript: {
    name: 'TypeScript',
    src: '/img/typescript.png'
  },
  golang: {
    name: 'Go',
    src: '/img/golang.png'
  }
}

const frameworks: Record<string, SkillCardProps> = {
  reactjs: {
    name: 'React.js',
    src: '/img/reactjs.png'
  },
  nextjs: {
    name: 'Next.js',
    src: '/img/nextjs.png'
  },
  expressjs: {
    name: 'Express.js',
    src: '/img/expressjs.png'
  },
  prisma: {
    name: 'Prisma',
    src: '/img/prisma.png'
  },
  graphql: {
    name: 'GraphQL',
    src: '/img/graphql.png'
  },
  expo: {
    name: 'Expo',
    src: '/img/expo.png'
  }
}

export { SkillCard, langs, frameworks }
