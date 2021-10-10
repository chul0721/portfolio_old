import Image from 'next/image'
import SkillCardProps from '../typings/SkillCardProps'

const SkillCard = ({ name, src }: SkillCardProps): JSX.Element => {
  return (
    <>
      <div className="grid">
        {name}
        <Image src={src} width="150" height="150" />
      </div>
    </>
  )
}

const langs: Record<string, SkillCardProps> = {
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
  }
}

const db: Record<string, SkillCardProps> = {
  postgresql: {
    name: 'Postgresql',
    src: '/img/postgresql.png'
  },
  mysql: {
    name: 'Mysql',
    src: '/img/mysql.png'
  },
  mongodb: {
    name: 'MongoDB',
    src: '/img/MongoDB.png'
  }
}

const others: Record<string, SkillCardProps> = {
  docker: {
    name: 'Docker',
    src: '/img/Docker.png'
  }
}

export { SkillCard, langs, frameworks, db, others }
