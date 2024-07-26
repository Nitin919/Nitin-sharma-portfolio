import reactIcon from '../../Assets/images/skills/react.png';
import htmlIcon from '../../Assets/images/skills/html.png';
import cssIcon from '../../Assets/images/skills/css.png';
import bootstrapIcon from '../../Assets/images/skills/bootstrap.png';

import jsIcon from '../../Assets/images/skills/js.png';
import csharpIcon from '../../Assets/images/skills/csharp.png';


import nodeIcon from '../../Assets/images/skills/node.png';

import xamarinIcon from '../../Assets/images/skills/xamarin.png';

import vscodeIcon from '../../Assets/images/skills/vscode.png';
import githubIcon from '../../Assets/images/skills/github.png';


export const skillCat = {
	web: {
		categoryName: 'Web Development',
		percentage: 60,
		skillList: [
			{ name: 'HTML', xp: '1 YRS', icon: htmlIcon },
			{ name: 'CSS', xp: '1 YRS', icon: cssIcon },
			{ name: 'Javascript', xp: '1 YRS', icon: jsIcon },
			{ name: 'Bootstrap', xp: '1 YRS', icon: bootstrapIcon },
			{ name: 'C#', xp: '1 YRS', icon: csharpIcon },
			{ name: 'React js', xp: '1 YRS', icon: reactIcon },
			
			
			{ name: 'Node js', xp: '1 YRS', icon: nodeIcon },
			
		],
	},
	mobile: {
		categoryName: 'Mobile Development',
		percentage: 20,
		skillList: [
			{ name: 'Xamarin', xp: '3 Months', icon: xamarinIcon },
			
		],
	},
	tools: {
		categoryName: 'Soft-Dev Tools',
		percentage: 20,
		skillList: [
			{ name: 'VS 2022 & VS Code Code', xp: '1 YRS', icon: vscodeIcon },
			{ name: 'Github', xp: '1 YRS', icon: githubIcon },
			
			
		],
	},
	soft: {
		categoryName: ['Creative', 'Perseverant', 'Patient', 'Enthusiastic', 'Hardworking', 'Amusing'],
		percentage: 100,
	},
};
