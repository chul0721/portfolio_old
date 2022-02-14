import React from 'react'
import ProjectCardProps from '../typings/ProjectCardProps'
import Link from 'next/link'

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <>
      <span className="tape bg-gray-100 h-12 w-28 absolute opacity-60 mt-2 -ml-8 border-gray-400 border-dotted border-2 border-t-0 border-b-0"></span>
      <Link href={props.src}>
        <a target="_blank">
          <div className="rounded m-4 p-8 bg-memo cursor-pointer rounded-br-3xl shadow-2xl">
            <div className="font-semibold">{props.name}</div>
            <div className="">{props.description}</div>
          </div>
        </a>
      </Link>
    </>
  )
}

const projects: Record<string, ProjectCardProps> = {
  beal: {
    name: '어쩔랭',
    src: 'https://github.com/assertive-lang/asserlang',
    description: '어쩔티비가 프로그래밍 언어가 된다면? 슉슈슉슉'
  },
  blindvest: {
    name: 'BlindVest',
    src: 'https://github.com/BlindVest',
    description: '시각장애인을 위해 설계된 서비스입니다. 한국 코드페어 출전작입니다.'
  },
  schoolCommunity: {
    name: 'Sotongi',
    src: 'https://github.com/intboard',
    description: '한국에 있는 중/고등학생들의 소통을 담당해주는 소통이!'
  }
}

export { ProjectCard, projects }
