import Image from 'next/image'
import SkillCardProps from '../typings/SkillCardProps'

const SkillCard = ({name, src}: SkillCardProps): JSX.Element => {
  return (
    <>
      <div className="grid">
        {name}
        <Image src={src} width="200" height="200" />
      </div>
    </>
  )
}

const skills: Record<string, SkillCardProps> = {
  typescript: {
    name: 'TypeScript',
    src: '/img/typescript.png'
  },
  reactjs: {
    name: 'React.js',
    src: '/img/reactjs.png'
  },
  nextjs: {
    name: 'Next.js',
    src: '/img/nextjs.png'
  },
  nodejs: {
    name: 'Node.js',
    src: '/img/nodejs.svg'
  },
  golang: {
    name: 'Go',
    src: '/img/golang.png'
  }
}

export {
  SkillCard,
  skills
}
