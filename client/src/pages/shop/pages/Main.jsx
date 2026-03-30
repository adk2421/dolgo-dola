import React, { useEffect, useState } from 'react';
import "../assets/css/main.css";

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

const Main = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// 캐러셀 자동 전환
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			{/* Content */}
				{/* Hero Section */}
				<section className="relative h-[calc(100vh-80px)] overflow-hidden bg-neutral-900">
					{heroSlides.map((slide, index) => (
						<div
							key={slide.id}
							className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 scale-105'
								}`}
						>
							{/* Background Image Layer */}
							<div
								className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear"
								style={{
									backgroundImage: `url(${slide.bgImage})`,
									transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
								}}
							>
								<div className="absolute inset-0 bg-black/50 md:bg-black/30"></div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
							</div>

							{/* Content Layer */}
							<div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col justify-between items-center md:items-start text-center md:text-left text-white">

								{/* Category & Index */}
								<div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
									<p className={`text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] ${slide.accentColor || 'text-white'}`}>
										{slide.category}
									</p>
									<span className="text-xs md:text-sm font-mono text-neutral-400">
										0{index + 1} / 0{heroSlides.length}
									</span>
								</div>

								{/* Main Title & CTA */}
								<div className="flex flex-col items-center md:items-start w-full">
									<h2
										className="text-4xl sm:text-5xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-[1.1] md:leading-[0.85] mb-8 md:mb-12 break-words"
										style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
									>
										{slide.title.split(' ').map((word, i) => (
											<React.Fragment key={i}>
												{word}
												<br className="hidden md:block" />
												<span className="md:hidden"> </span>
											</React.Fragment>
										))}
									</h2>

									<button className="group flex items-center gap-3 text-sm md:text-lg font-bold bg-white text-neutral-950 px-7 py-3.5 md:px-10 md:py-5 rounded-full hover:bg-neutral-200 transition-all shadow-2xl">
										Explore Now
										<span className="group-hover:translate-x-2 transition-transform">→</span>
									</button>
								</div>

								{/* Progress Indicator */}
								<div className="w-full flex justify-center md:justify-end">
									<div className="h-[2px] w-12 md:w-24 bg-white/20 relative overflow-hidden">
										<div
											className="absolute inset-0 bg-white transition-all duration-[5000ms] ease-linear"
											style={{ width: index === currentSlide ? '100%' : '0%' }}
										></div>
									</div>
								</div>
							</div>
						</div>
					))}
				</section>

				{/* Marquee Section */}
				<div className="bg-neutral-950 text-white py-4 overflow-hidden whitespace-nowrap border-y border-neutral-800">
					<div className="animate-marquee flex gap-12 text-xs font-bold uppercase tracking-widest">
						{Array(5).fill("Free Shipping on Orders Over ₩100,000 • New Drops Every Friday • Sign Up for 10% Off •").map((text, i) => (
							<span key={i}>{text}</span>
						))}
					</div>
				</div>

				{/* Product Section */}
				<section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12 md:py-24">
					<div className="flex items-center justify-between mb-16 md:mb-20">
						<h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-neutral-950">New Departs</h3>
						<a href="#" className="text-sm font-semibold hover:text-red-600 transition underline underline-offset-4">Shop All</a>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
						{products.map((product) => (
							<div key={product.id} className="group relative">
								{/* Image Container */}
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
									{/* Quick Button */}
									<div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
										<button className="w-full bg-neutral-950/90 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm hover:bg-black transition">
											+ Add to Cart
										</button>
									</div>
								</div>

								{/* Product Info */}
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
		</>
	);
};

export default Main;