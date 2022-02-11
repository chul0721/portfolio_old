import React from 'react'
import ProjectCardProps from '../typings/ProjectCardProps'

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <>
      <span className="tape bg-white h-12 w-36 absolute opacity-60 mt-0 -ml-12 border-gray border-2"></span>
      <div className="rounded m-2 w-auto h-auto p-8 bg-memo">
        <div>{props.name}</div>
        <div>{props.description}</div>
      </div>
    </>
  )
}

const projects: Record<string, ProjectCardProps> = {
  beal: {
    name: 'Beal',
    src: 'https://beal.to',
    description: '웹 전문 외주 사업체입니다.'
  },
  blindvest: {
    name: 'BlindVest',
    src: 'https://github.com/BlindVest',
    description: '시각장애인을 위해 설계된 서비스입니다. 한국 코드페어 출전작입니다.'
  },
  schoolCommunity: {
    name: 'School Community',
    src: 'https://github.com/intboard',
    description:
      '진행 중인 프로젝트로 한국에 있는 중/고등학생들의 친목을 도모하는데 도움을 주는 서비스입니다.'
  }
}

export { ProjectCard, projects }
