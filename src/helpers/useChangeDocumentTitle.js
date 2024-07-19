import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Nitin Sharma | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
