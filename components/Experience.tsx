import Link from 'next/link';

import { a11yDate, visibleDate } from '@/utils/date';

const experience = [
  {
    company: 'Betterplace',
    location: 'Bengaluru',
    position: 'SDE-2',
    startDate: 'Sep, 2021',
    endDate: 'present',
    details: (
      <>
        <p>
          Working with one of the biggest SaaS companies for blue-collar employee management.
          Leading front-end development for multiple modules of the product. Mentored couple of
          juniors in picking-up the product development.
        </p>
        <p>
          Tech stack: React, Node.js, TypeScript, SCSS, Webpack, Java, REST APIs, Vert.x. MongoDB
        </p>
      </>
    )
  },
  {
    company: 'GeekyAnts',
    location: 'Bengaluru',
    position: 'Senior Software Engineer',
    startDate: 'Feb, 2020',
    endDate: 'Aug, 2021',
    details: (
      <>
        <p>
          Developed a sophisticated canvas editor for short video ads using React TypeScript,
          Anime.js, and Fabric.js. Implemented multi-JWT based authentication for seamless user
          login and client-switching.
        </p>
        <p>Tech stack: React, TypeScript, AnimeJS, FabricJS</p>
      </>
    )
  },
  {
    company: 'AriveGuru',
    location: 'Bengaluru',
    position: 'Software Engineer',
    startDate: 'June, 2019',
    endDate: 'Jan, 2020',
    details: (
      <>
        <p>
          Played a key role in developing an internal application for a major tech company. Built
          newsletter application, working on both front-end and backend.
        </p>
        <p>Tech stack: React, Redux-Saga, Express, single-spa</p>
      </>
    )
  }
];

export function Experience() {
  return (
    <ul>
      {experience.map(({ company, details, endDate, position, startDate }) => (
        <li
          key={company}
          className="pb-2 pl-0 mb-4 border-b dark:border-warmGray-900 border-warmGray-200 before:contents">
          <section>
            <h3 className="m-0 text-base font-normal">{position}</h3>
            <div>
              <div className="flex justify-between text-sm text-warmGray-600 dark:text-warmGray-400 ">
                <div>{company}</div>
                <div>
                  <time dateTime={a11yDate(startDate)}>{visibleDate(startDate)}</time>
                  {' - '}
                  <time dateTime={a11yDate(endDate)}>{visibleDate(endDate)}</time>
                </div>
              </div>
              <p className="mt-4 text-sm">{details}</p>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
