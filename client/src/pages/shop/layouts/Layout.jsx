import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ siteInfo }) => {
	const [lang, setLang] = useState('ko');

	return (
		<div className="min-h-screen bg-neutral-50 text-neutral-950 font-sans antialiased">
			<Header
				siteInfo={siteInfo}
				currentLang={lang}
				onLangChange={setLang}
			/>

			<main className="pt-20 w-full overflow-x-hidden">
				<Outlet context={{ siteInfo, lang }} />
			</main>

			<Footer siteInfo={siteInfo} />
		</div>
	);
};

export default Layout;