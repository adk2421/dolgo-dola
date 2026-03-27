import { Link } from "react-router-dom";

const Home = ({siteMap}) => {
	return (
		<div className="min-h-screen bg-gray-50 p-16">
			{/* 헤더 섹션 */}
			<header className="max-w-7xl mx-auto mb-12 text-center">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">Pages</h1>
			</header>

			<hr className="w-full text-gray-300"/>

			{/* 타일 그리드 섹션 */}
			<main className="max-w-7xl mx-auto my-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{siteMap.map((site, idx) => (
						<Link to={site.path}>
							<div
								key={idx}
								className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
							>
								{/* 텍스트 영역 */}
								<div className="px-6 py-4">
									<h3 className="my-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
										{site.name}
									</h3>
									<div className="flex items-center text-sm font-medium text-gray-600">
										{site.description}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
};

export default Home;