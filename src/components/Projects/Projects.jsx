import React from 'react';
import { motion } from 'framer-motion';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';
// import { welcomeAnim } from '../Welcome/Welcome.anim';
import { game, web } from './Projects.constants';
import { projectsAnim } from './Projects.anim';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';


export default function Projects({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<>
		
		{/* <h1>Updating soon....</h1> */}
		<motion.section className='projects' variants={projectsAnim} initial='init' animate='anim' exit='end'>
			<ProjectsSlider category='WEB DEV' data={web} />
			
			<ProjectsSlider category='Updating soon....' data={game} />
			
			{/* <ProjectsSlider category='DESIGN' data={design} /> */}
			
			
		</motion.section>
		</>
	);
}
