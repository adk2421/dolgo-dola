import React, { useEffect, useState } from 'react';

// 예시 데이터
const heroSlides = [
	{
		id: 1,
		bgImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
		title: "THE ART OF AUTUMN",
		category: "COLLECTION 24/25",
		accentColor: "text-orange-500"
	},
	{
		id: 2,
		bgImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1600&auto=format&fit=crop",
		title: "URBAN SIMPLICITY",
		category: "NEW ARRIVALS",
		accentColor: "text-blue-600"
	}
];

const products = [
	{ id: 1, name: "Oversized Wool Coat", price: "₩389,000", img1: "https://images.unsplash.com/photo-1539109136881-3be0610aca52?q=80&w=400&auto=format&fit=crop", img2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop" },
	{ id: 2, name: "Raw Denim Jeans", price: "₩129,000", img1: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&auto=format&fit=crop", img2: "https://images.unsplash.com/photo-1582562124811-c0914df16897?q=80&w=400&auto=format&fit=crop" },
	{ id: 3, name: "Classic White Sneakers", price: "₩159,000", img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop", img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop" },
	{ id: 4, name: "Leather Crossbody Bag", price: "₩259,000", img1: "https://images.unsplash.com/photo-1548036239-1172606d894e?q=80&w=400&auto=format&fit=crop", img2: "https://images.unsplash.com/photo-1581605405669-fbfc813db5a9?q=80&w=400&auto=format&fit=crop" },
];

const Sample_2 = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// 캐러셀 자동 전환 (5초)
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="min-h-screen bg-neutral-50 text-neutral-950 font-sans antialiased">
			{/* 1. Header: 투명, 스크롤 시 배경 생김 (트렌드) */}
			<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-neutral-50/90 backdrop-blur-sm border-b border-neutral-100">
				<nav className="max-w-[1920px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
					<div className="flex items-center gap-12">
						<a href="#" className="text-3xl font-black tracking-tighter text-neutral-950">
							URBN<span className="text-neutral-400">.</span>
						</a>
						<ul className="hidden lg:flex space-x-10 text-xs font-bold uppercase tracking-widest text-neutral-700">
							<li><a href="#" className="hover:text-black transition">Shop All</a></li>
							<li><a href="#" className="hover:text-black transition">New</a></li>
							<li><a href="#" className="hover:text-black transition">Brands</a></li>
							<li><a href="#" className="hover:text-black transition text-red-600">Sale</a></li>
						</ul>
					</div>
					<div className="flex items-center gap-6 text-sm font-medium">
						<button className="hidden md:block hover:underline">Search</button>
						<button className="hover:underline">Account</button>
						<button className="relative group flex items-center gap-2 bg-neutral-950 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
							Cart
							<span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
						</button>
					</div>
				</nav>
			</header>

			{/* 2. Content */}
			<main className="pt-20">
				{/* Hero Section: Editorial Split Layout & Carousel */}
				<section className="relative h-[calc(100vh-80px)] overflow-hidden bg-neutral-100">
					{heroSlides.map((slide, index) => (
						<div
							key={slide.id}
							className={`absolute inset-0 transition-all duration-1000 ease-in-out grid grid-cols-1 md:grid-cols-[1fr,minmax(auto,600px)] ${
								index === currentSlide ? 'opacity-100' : 'opacity-0 scale-105'
							}`}
						>
							{/* Image Area */}
							<div className="relative overflow-hidden h-full">
								<img 
									src={slide.bgImage} 
									alt={slide.title} 
									className="w-full h-full object-cover object-center transition-transform duration-[10s] ease-linear scale-110 group-hover:scale-100" 
									style={{transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'}}
								/>
								<div className="absolute inset-0 bg-neutral-950/10"></div>
							</div>
							
							{/* Text Area (Editorial Style) */}
							<div className="bg-white p-12 lg:p-20 flex flex-col justify-between items-start border-l border-neutral-100">
								<div className="w-full">
									<div className="flex justify-between items-center mb-16">
										<p className={`text-sm font-bold uppercase tracking-widest ${slide.accentColor}`}>{slide.category}</p>
										<span className="text-sm font-mono text-neutral-400">0{index + 1} / 0{heroSlides.length}</span>
									</div>
									<h2 className="text-6xl xl:text-8xl font-black tracking-tighter leading-[0.85] text-neutral-950 mb-10 break-words">
										{slide.title.split(' ').map((word, i) => (
											<React.Fragment key={i}>{word}<br /></React.Fragment>
										))}
									</h2>
								</div>
								<button className="group flex items-center gap-4 text-lg font-bold border-b-2 border-neutral-950 pb-2 hover:border-red-500 transition-colors">
									Explore Now
									<span className="group-hover:translate-x-2 transition-transform">→</span>
								</button>
							</div>
						</div>
					))}
				</section>

				{/* Marquee Section (Scrolling Text Trend) */}
				<div className="bg-neutral-950 text-white py-4 overflow-hidden whitespace-nowrap border-y border-neutral-800">
					<div className="animate-marquee flex gap-12 text-xs font-bold uppercase tracking-widest">
						{Array(5).fill("Free Shipping on Orders Over ₩100,000 • New Drops Every Friday • Sign Up for 10% Off •").map((text, i) => (
							<span key={i}>{text}</span>
						))}
					</div>
				</div>

				{/* Product Section: Minimum grid with hover effect */}
				<section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-24 md:py-32">
					<div className="flex items-center justify-between mb-16 md:mb-20">
						<h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-neutral-950">New Departs</h3>
						<a href="#" className="text-sm font-semibold hover:text-red-600 transition underline underline-offset-4">Shop All</a>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
						{products.map((product) => (
							<div key={product.id} className="group relative">
								{/* Image Container with Second Image Hover Effect */}
								<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-5 rounded-sm">
									<img 
										src={product.img1} 
										alt={product.name} 
										className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
									/>
									<img 
										src={product.img2} 
										alt={`${product.name} detail`} 
										className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
									/>
									{/* Quick Add Button on Hover */}
									<div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
										<button className="w-full bg-neutral-950/90 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm hover:bg-black transition">
											+ Add to Cart
										</button>
									</div>
								</div>
								
								{/* Product Info: Minimal & Tight */}
								<div className="flex justify-between items-start gap-2 px-1">
									<div>
										<h4 className="font-semibold text-neutral-900 text-sm md:text-base leading-snug group-hover:underline">{product.name}</h4>
										<p className="text-neutral-500 text-xs mt-1">Outerwear</p>
									</div>
									<p className="font-bold text-sm md:text-base whitespace-nowrap text-neutral-950">{product.price}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			{/* 3. Footer: 극도의 미니멀리즘 (Dark Mode) */}
			<footer className="bg-neutral-950 text-neutral-300 py-20 mt-20">
				<div className="max-w-[1920px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
						<a href="#" className="text-4xl font-black tracking-tighter text-white">URBN<span className="text-neutral-600">.</span></a>
						<p className="text-sm text-neutral-400 mt-6 max-w-md leading-relaxed">
							Curated minimal essentials for the modern urban dweller. Quality over quantity, always.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-8 text-sm">
						<div className="flex flex-col space-y-3">
							<h5 className="font-bold text-white mb-2 text-xs uppercase tracking-widest">Info</h5>
							<a href="#" className="hover:text-white transition">About Us</a>
							<a href="#" className="hover:text-white transition">Careers</a>
							<a href="#" className="hover:text-white transition">Legal</a>
						</div>
						<div className="flex flex-col space-y-3">
							<h5 className="font-bold text-white mb-2 text-xs uppercase tracking-widest">Connect</h5>
							<a href="#" className="hover:text-white transition">Instagram</a>
							<a href="#" className="hover:text-white transition">Contact</a>
							<a href="#" className="hover:text-white transition">FAQ</a>
						</div>
					</div>
				</div>
				<div className="max-w-[1920px] mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-neutral-800 text-center text-xs text-neutral-600 font-mono">
					© 2025 URBN LTD. UNCOMPROMISING QUALITY.
				</div>
			</footer>

			{/* Tailwind CSS Marquee Animation Keyframes (Need to be added to tailwind.config.js or global CSS) */}
			<style>{`
				@keyframes marquee {
					0% { transform: translateX(0%); }
					100% { transform: translateX(-100%); }
				}
				.animate-marquee {
					display: flex;
					animation: marquee 30s linear infinite;
				}
			`}</style>
		</div>
	);
};

export default Sample_2;