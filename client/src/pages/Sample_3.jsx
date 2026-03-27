import { useState } from 'react';

// 예시 데이터
const mainBanner = {
  image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop",
  title: "SUMMER END SALE",
  subtitle: "최대 70% 파격 할인, 이번 시즌 마지막 기회",
  tag: "BIG EVENT"
};

const subBanners = [
  { id: 1, title: "신규 가입 혜택", desc: "지금 가입하고 1만원 쿠폰 받기", icon: "🎁", bgColor: "bg-indigo-50" },
  { id: 2, title: "오늘만 이 가격", desc: "24시간 한정 타임딜 특가", icon: "⏰", bgColor: "bg-red-50" },
  { id: 3, title: "베스트 셀러", desc: "가장 사랑받는 아이템 Top 100", icon: "🔥", bgColor: "bg-amber-50" },
];

const categories = [
  "전체", "아우터", "상의", "하의", "신발", "액세서리", "뷰티", "잡화"
];

const commerceProducts = [
  { id: 1, name: "프리미엄 린넨 셔츠 (10 color)", price: 89000, discount: 15, rating: 4.8, reviews: 1250, img: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "데일리 스탠다드 데님 팬츠", price: 65000, discount: 0, rating: 4.5, reviews: 890, img: "https://images.unsplash.com/photo-1542272862-300621464ecf?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "어반 레더 스니커즈 (White)", price: 158000, discount: 20, rating: 4.9, reviews: 2100, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "경량 볼륨 백팩 (30L)", price: 112000, discount: 10, rating: 4.7, reviews: 560, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "클래식 실버 메탈 워치", price: 299000, discount: 25, rating: 4.6, reviews: 340, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "소프트 코튼 폰 케이스", price: 25000, discount: 0, rating: 4.9, reviews: 3100, img: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "시그니처 로고 후드티 (M~XXL)", price: 79000, discount: 15, rating: 4.7, reviews: 980, img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "오버핏 베이직 티셔츠 (5-Pack)", price: 49000, discount: 5, rating: 4.8, reviews: 4500, img: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=600&auto=format&fit=crop" },
];

const Sample_3 = () => {
  const [activeCategory, setActiveCategory] = useState("전체");

  // 가격 포맷 함수
  const formatPrice = (price) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-950 font-sans">
      {/* 1. Header: 촘촘한 커머스 내비게이션 */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-5 flex items-center h-20 justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="text-3xl font-extrabold tracking-tighter text-gray-950">SHOP<span className="text-indigo-600">.</span>CORE</a>
            <nav className="hidden lg:flex items-center gap-7 text-base font-semibold text-gray-800">
              {["Best", "New", "Sale", "기획전", "브랜드"].map(item => (
                <a key={item} href="#" className="hover:text-indigo-600">{item}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative w-72">
              <input type="text" placeholder="찾으시는 상품이 있나요?" className="w-full bg-gray-100 px-5 py-2.5 rounded-full text-sm outline-none focus:ring-2 focus:ring-indigo-200" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</button>
            </div>
            <div className="flex items-center gap-3 text-2xl text-gray-600">
              <button className="hover:text-indigo-600 relative">
                🛒
                <span className="absolute -top-1.5 -right-2 bg-indigo-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">5</span>
              </button>
              <button className="hover:text-indigo-600">👤</button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Content */}
      <main className="pt-20">
        {/* Main Banner: 판매 유도형 */}
        <section className="relative bg-gray-900 text-white h-[480px] overflow-hidden">
          <img src={mainBanner.image} alt={mainBanner.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative max-w-[1440px] mx-auto px-5 h-full flex flex-col justify-center items-start">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{mainBanner.tag}</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight break-keep">
              {mainBanner.title}
            </h1>
            <p className="text-xl text-gray-100 mb-8 opacity-90">{mainBanner.subtitle}</p>
            <button className="px-6 py-2 bg-white text-gray-950 mb-6 font-bold text-lg rounded-md hover:bg-gray-100 transition shadow-lg">
              지금 혜택 받기
            </button>
          </div>
        </section>

        {/* Sub Banners (Quick Links) */}
        <section className="max-w-[1440px] mx-auto px-5 py-10 -mt-16 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {subBanners.map(banner => (
            <div key={banner.id} className={`${banner.bgColor} p-8 rounded-xl shadow-md flex items-center gap-6 border border-gray-100 cursor-pointer hover:shadow-lg transition`}>
              <div className="text-5xl">{banner.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-gray-950">{banner.title}</h4>
                <p className="text-gray-700 mt-1">{banner.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Product Grid: 4~5열로 촘촘하게 */}
        <section className="max-w-[1440px] mx-auto px-5 pt-8 pb-16">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-3xl font-bold text-gray-950">오늘의 추천 상품</h3>
            <button className="text-sm font-semibold text-indigo-600 flex items-center gap-1">전체보기 <span>→</span></button>
          </div>

					{/* Category Tab */}
					<div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                  activeCategory === cat 
                  ? "bg-indigo-600 text-white shadow-md" 
                  : "bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
            {commerceProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg p-3 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Image & Discount */}
                <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-md mb-3">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  {product.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}
                  {/* Hover Quick View Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button className="w-full bg-white text-gray-950 py-2.5 rounded text-sm font-bold shadow-lg">장바구니 담기</button>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-indigo-700 transition">{product.name}</h4>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                    <span className="text-amber-500 text-sm">★</span>
                    <span className="font-semibold text-gray-700">{product.rating.toFixed(1)}</span>
                    <span className="text-gray-300">|</span>
                    <span>리뷰 {product.reviews.toLocaleString()}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <p className="font-extrabold text-lg text-gray-950">
                      {formatPrice(product.price * (1 - product.discount / 100))}
                    </p>
                    {product.discount > 0 && (
                      <p className="text-sm text-gray-400 line-through">
                        {formatPrice(product.price)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Footer: 실용적인 정보 배치 */}
      <footer className="bg-gray-100 text-gray-700 py-16 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm leading-relaxed">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-black tracking-tighter text-gray-900 mb-6 block">SHOP.CORE</a>
            <p>(주) 샵코어컴퍼니 | 대표 홍길동<br />서울 특별시 중구 한강대로 416<br />사업자등록번호: 220-88-12345</p>
          </div>
          <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
            <div>
              <h5 className="font-bold text-gray-950 mb-4">고객센터</h5>
              <p className="text-xl font-extrabold text-indigo-600 mb-2">1544-0000</p>
              <p>평일 09:00 - 18:00 (토/일/공휴일 휴무)<br />점심시간 12:30 - 13:30</p>
            </div>
            <div>
              <h5 className="font-bold text-gray-950 mb-4">ABOUT</h5>
              <a href="#" className="block hover:underline mb-1.5">회사소개</a>
              <a href="#" className="block hover:underline mb-1.5">이용약관</a>
              <a href="#" className="block hover:underline mb-1.5">개인정보처리방침</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-5 mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          Copyright © 2026 SHOP.CORE Co., Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Sample_3;