import { Link } from "react-router-dom";
import { headerConfig } from "../data/pageConfig";

const Header = ({ siteInfo, currentLang, onLangChange }) => (
	<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-neutral-50/90 backdrop-blur-sm border-b border-neutral-200">
		<nav className="max-w-[1920px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
			<div className="flex items-center gap-12">
				<Link to="/shop" className="hidden md:block text-3xl font-black tracking-tighter text-neutral-950">
					{siteInfo.title}
				</Link>
				<Link to="/shop" className="md:hidden text-xl md:text-3xl font-black tracking-tighter text-neutral-950">
					<p className="text-left">{siteInfo.title.split("-")[0]}</p>
					<p className="text-left">{siteInfo.title.split("-")[1]}</p>
				</Link>


				<ul className="hidden lg:flex space-x-10 text-xs font-bold uppercase tracking-widest text-neutral-700">
					{headerConfig.nav.menu.map((menu) => {
						return (
							<li key={menu[currentLang]}><a href="#" className={`hover:text-black transition ${menu.style}`}>{menu[currentLang]}</a></li>
					)})}
				</ul>
			</div>

			{/* <div className="flex items-center gap-4 text-sm font-medium px-2 py-1.5 rounded-full bg-gray-200"> */}
			<div className="flex items-center gap-2 text-sm font-medium">
				{/* <div className="flex gap-2 text-xs px-5">
					<button onClick={() => onLangChange('ko')} className={currentLang === 'ko' ? 'font-bold' : ''}>{currentLang === 'ko' ? '한글' : 'KO'}</button>
					<span className="text-neutral-300">|</span>
					<button onClick={() => onLangChange('en')} className={currentLang === 'en' ? 'font-bold' : ''}>{currentLang === 'en' ? 'EN' : '영어'}</button>
				</div> */}
				<button className="hidden md:block px-4 py-2.5 rounded-full active:bg-gray-300 hover:bg-gray-300">
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#1f1f1f"><path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
					</span>
				</button>
				<Link to="/shop/login" className="px-4 py-2.5 rounded-full active:bg-gray-300 hover:bg-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#1f1f1f"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg>
				</Link>
				<button className="relative group flex items-center gap-2 bg-neutral-950 hover:bg-neutral-500 text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8e8e8"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z"/></svg>
					<span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
				</button>
			</div>
		</nav>
	</header>
);

export default Header;