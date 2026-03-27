import { useEffect, useState } from 'react';

// 예시 상품 데이터
const products = [
	{
		id: 1,
		name: '에센셜 코튼 블레이저',
		category: 'Outerwear',
		price: '189,000',
		imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop',
		tag: 'New'
	},
	{
		id: 2,
		name: '프리미엄 세라믹 머그 세트',
		category: 'Home & Living',
		price: '45,000',
		imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=500&auto=format&fit=crop',
	},
	{
		id: 3,
		name: '데일리 레더 백팩',
		category: 'Accessories',
		price: '210,000',
		imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop',
		tag: 'Best'
	},
	{
		id: 4,
		name: '아날로그 워치 v4',
		category: 'Watches',
		price: '320,000',
		imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=500&auto=format&fit=crop',
	},
];

function Sample_1({ siteInfo }) {
	const [cartCount, setCartCount] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);

	const heroSlides = [
		{
			tag: "2026 Spring Collection",
			title: <>Define Your<br />Own Style.</>,
			desc: "트렌드를 넘어선 가치, 일상에 특별함을 더하는 미니멀리즘 디자인 큐레이션 쇼핑몰입니다.",
			img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
			label: "Linen Shirts Series",
			price: "89,000₩"
		},
		{
			tag: "Limited Edition",
			title: <>Essential<br />Minimalism.</>,
			desc: "가장 순수한 형태의 아름다움, 스튜디오가 제안하는 이번 시즌 필수 아이템을 만나보세요.",
			img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
			label: "Premium Blazer Line",
			price: "159,000₩"
		}
	];

	// 5초마다 자동 슬라이드
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(timer);
	}, [heroSlides.length]);

	return (
		// 전체 페이지 컨테이너: Minimal palette (Bg: White, Text: Neutral-900)
		<div className="min-h-screen bg-white text-neutral-900 antialiased overflow-x-hidden">

			{/* --- 1. Header (Navbar) --- */}
			<header className="fixed w-full top-0 z-50 bg-white/65 backdrop-blur-sm border-b border-neutral-200">
				<nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					{/* Logo */}
					<div className="text-lg md:text-2xl font-black tracking-tighter text-black">
						{siteInfo.title}.
					</div>

					{/* Menu Items (Desktop) */}
					<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
						{['New', 'Men', 'Women', 'Living', 'Sale'].map(item => (
							<a key={item} href="#" className="hover:text-black transition-colors">{item}</a>
						))}
					</div>

					{/* Icons (Cart, Search) */}
					<div className="flex items-center gap-5">
						<button className="text-neutral-600 hover:text-black">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
							</svg>
						</button>
						<button className="relative text-neutral-600 hover:text-black">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 1.5 1.5-1.5 1.5M18.75 10.5l1.5 1.5-1.5 1.5M12.75 15h.75m.75 0h.75m.75 0h.75m-.75 2.25h.75m.75 0h.75m-.75 0h.75m1.125-14.25h1.125a2.25 2.25 0 0 1 2.25 2.25v12.75a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 3.75 3h11.25m.75 0v-.75A.75.75 0 0 0 15 1.5H9a.75.75 0 0 0-.75.75V3M15 3H9m6 0v2.25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75V3" />
							</svg>
							{cartCount > 0 && (
								<span className="absolute -top-1.5 -right-2 bg-black text-white text-[10px] font-bold size-4 rounded-full flex items-center justify-center">
									{cartCount}
								</span>
							)}
						</button>
					</div>
				</nav>
			</header>

			{/* --- 2. Hero Section --- */}
			<section className="bg-neutral-50 overflow-hidden py-6 md:py-16">
				<div className="max-w-7xl mx-auto px-6 py-16">
					{heroSlides.map((slide, index) => {
						const isActive = index === currentSlide;
						return (
							<div
								key={index}
								className={`grid md:grid-cols-12 gap-8 items-center transition-all duration-700 ease-in-out ${isActive
										? "opacity-100 translate-x-0 z-10"
										: "opacity-0 translate-x-10 z-0 pointer-events-none"
									}`}
							>
								{/* Text Content */}
								<div className="md:col-span-6 space-y-6 flex flex-col justify-center items-center text-center">
									<span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
										{slide.tag}
									</span>
									<h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-black">
										{slide.title}
									</h1>
									<p className="text-sm md:text-lg text-neutral-600 max-w-md">
										{slide.desc}
									</p>
									<div className="flex gap-4">
										<button className="bg-black text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-neutral-800 transition-all shadow-lg shadow-black/10">
											신상품 보러가기
										</button>
										<button className="bg-white text-black px-8 py-3 rounded-xl font-semibold text-sm ring-1 ring-neutral-200 hover:bg-neutral-50 transition-all">
											컬렉션 소개
										</button>
									</div>
								</div>

								{/* Featured Image */}
								<div className="md:col-span-6 relative bg-neutral-200 rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50">
									<img
										src={slide.img}
										alt="Hero featured"
										className="object-cover transform hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl">
										<p className="text-sm font-bold text-black">{slide.label}</p>
										<p className="text-xs text-neutral-600">Starting from {slide.price}</p>
									</div>
								</div>
							</div>
						)
					}
					)}
				</div>

				{/* Slide Indicators (dots) */}
				<div className="absolute md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
					{heroSlides.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrentSlide(i)}
							className={`h-1.5 transition-all duration-300 rounded-full ${i === currentSlide ? "w-8 bg-black" : "w-2 bg-neutral-300"
								}`}
						/>
					))}
				</div>
			</section>

			{/* --- 3. Product Grid Section --- */}
			<main className="max-w-7xl mx-auto px-6 py-20 md:py-28">
				<div className="flex items-center justify-between mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-black">What's Trending Now</h2>
					<a href="#" className="text-sm font-medium text-neutral-600 hover:text-black flex items-center gap-1.5">
						View All
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
						</svg>
					</a>
				</div>

				{/* Product Grid: Responsive Columns (1 -> 2 -> 4) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
					{products.map((product) => (
						<div key={product.id} className="group relative flex flex-col">
							{/* Image Wrapper */}
							<div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 relative">
								<img
									src={product.imageUrl}
									alt={product.name}
									className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
								/>
								{product.tag && (
									<span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${product.tag === 'New' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>
										{product.tag}
									</span>
								)}
								{/* Hover Action (Add to Cart) */}
								<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
									<button
										onClick={() => setCartCount(prev => prev + 1)}
										className="w-full bg-black/80 backdrop-blur-sm text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-black"
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
										</svg>
										Add to Cart
									</button>
								</div>
							</div>

							{/* Product Info */}
							<div className="pt-4 flex flex-col flex-grow">
								<p className="text-xs text-neutral-500 mb-1">{product.category}</p>
								<h3 className="text-sm font-semibold text-neutral-800 mb-1.5 flex-grow">
									<a href="#">
										<span aria-hidden="true" className="absolute inset-0" />
										{product.name}
									</a>
								</h3>
								<p className="text-base font-bold text-black">{product.price}<span className="text-sm font-medium ml-0.5">₩</span></p>
							</div>
						</div>
					))}
				</div>
			</main>

			{/* --- 4. Footer --- */}
			<footer className="bg-neutral-950 text-neutral-400 mt-10">
				<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-12">
					<div className="col-span-2 md:col-span-1 space-y-3">
						<div className="text-2xl font-black tracking-tighter text-white">STUDIO<span className="text-neutral-600">.</span></div>
						<p className="text-xs">© 2026 All rights reserved.</p>
					</div>
					{['Shop', 'Company', 'Support', 'Connect'].map(section => (
						<div key={section} className="space-y-4">
							<h4 className="text-sm font-semibold text-white tracking-wider uppercase">{section}</h4>
							<ul className="space-y-2.5 text-sm">
								{['FAQ', 'Contact', 'About Us', 'Policy'].map(link => (
									<li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
								))}
							</ul>
						</div>
					))}
				</div>
			</footer>
		</div>
	)
}

export default Sample_1