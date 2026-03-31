export const headerConfig = {
	nav: {
		menu: [
			{ ko: "전체", en: "Shop All" },
			{ ko: "신상품", en: "New" },
			{ ko: "브랜드", en: "Brands" },
			{ ko: "할인", en: "Sale", style: "text-red-600" },
		],
	}
};

export const loginConfig = {
	title: { ko: "로그인", en: "SIGN IN" },
	subTitle: { ko: "로그인하고 더 많은 서비스와 혜택을 누리세요.", en: "Access your curated collection."},
	email: { ko: "이메일", en: "email" },
	password: { ko: "패스워드", en: "password" },
	forgot: { ko: "비밀번호를 잊으셨나요?", en: "forgot" },
	login: { ko: "로그인", en: "Sign In" },
	or: { ko: "또는", en: "or continue with" },
	oauth: [
		{
			link: "http://localhost:8080/oauth2/authorization/google",
			label: "Google 계정으로 로그인",
			type: {
				basic: {
					class: "w-full flex items-center justify-center gap-3 py-3.5 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors",
					html: (
						<>
							<svg className="w-5 h-5" viewBox="0 0 24 24">
								<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
								<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
								<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
								<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
							</svg>
							<span className="text-[13px] font-medium text-neutral-700">Google 계정으로 로그인</span>
						</>
					),
				},
				icon: {
					class: "w-[50px] h-[50px] flex items-center justify-center border border-neutral-200 rounded-lg hover:bg-neutral-200 transition-colors shadow-sm",
					html: (
						<svg className="w-6 h-6" viewBox="0 0 24 24">
							<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
							<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
							<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
							<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
						</svg>
					),
				},
			}
		},
		{
			link: "http://localhost:8080/oauth2/authorization/kakao",
			label: "카카오 로그인",
			type: {
				basic: {
					class: "w-full flex items-center justify-center gap-3 py-3.5 bg-[#FEE500] rounded-lg hover:bg-[#FADA00] transition-colors",
					html: (
						<>
							<svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
								<path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.8 4.313 6.111l-.882 3.244c-.04.148.046.302.19.348.048.016.099.018.148.006l3.824-2.541c.46.062.93.095 1.407.095 4.97 0 9-3.185 9-7.115S16.97 3 12 3z" />
							</svg>
							<span className="text-[13px] font-medium text-black/85">카카오 로그인</span>
						</>
					),
				},
				icon: {
					class: "w-[50px] h-[50px] flex items-center justify-center bg-[#FEE500] rounded-lg hover:bg-[#efd000] transition-colors shadow-sm",
					html: (
						<svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
							<path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.8 4.313 6.111l-.882 3.244c-.04.148.046.302.19.348.048.016.099.018.148.006l3.824-2.541c.46.062.93.095 1.407.095 4.97 0 9-3.185 9-7.115S16.97 3 12 3z" />
						</svg>
					),
				},
			}
		},
		{
			link: "http://localhost:8080/oauth2/authorization/naver",
			label: "네이버 로그인",
			type: {
				basic: {
					class: "w-full flex items-center justify-center gap-3 py-3.5 bg-[#03C75A] rounded-lg hover:bg-[#02b351] transition-colors",
					html: (
						<>
							<svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
								<path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
							</svg>
							<span className="text-[13px] font-medium text-white">네이버 로그인</span>
						</>
					),
				},
				icon: {
					class: "w-[50px] h-[50px] flex items-center justify-center bg-[#03C75A] rounded-lg hover:bg-[#009241] transition-colors shadow-sm",
					html: (
						<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
							<path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
						</svg>
					),
				},
			}
		},
	]
}