import { Link, useOutletContext } from 'react-router-dom';

const Login = () => {
  const { siteInfo } = useOutletContext();
  
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white text-neutral-950 font-sans antialiased flex flex-col justify-center items-center">
      <div className="w-full flex items-center justify-center p-8 md:p-24">
        <div className="w-full max-w-sm">
          <div className="mb-12">
            <h3 className="text-4xl font-black mb-2">{/*SIGN IN*/}로그인</h3>
            <p className="text-neutral-500 text-sm">{/* Access your curated collection. */}로그인하고 더 많은 서비스와 혜택을 누리세요.</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="border-b border-neutral-200 focus-within:border-black transition-colors">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 block">{/* Email */}이메일</label>
              <input type="email" className="w-full py-3 outline-none text-sm" placeholder="your@email.com" />
            </div>
            <div className="border-b border-neutral-200 focus-within:border-black transition-colors">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">패스워드</label>
                <button className="text-xs text-neutral-400 hover:text-black underline">비밀번호를 잊으셨나요?</button>
              </div>
              <input type="password" className="w-full py-3 outline-none text-sm" placeholder="••••••••" />
            </div>
            <button className="w-full bg-neutral-950 text-white py-4 md:py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-700 transition-all shadow-xl">
              {/* Sign In */} 로그인
            </button>
          </form>

          {/* OAuth Section */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="flex-grow border-t border-neutral-200"></div>
              <span className="flex-shrink mx-4 text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em]">{/* or continue with */}또는</span>
              <div className="flex-grow border-t border-neutral-200"></div>
            </div>

            <div className="flex items-center justify-center gap-4">
              {/* Google */}
              <Link to="http://localhost:8080/oauth2/authorization/google"
                aria-label="Google 계정으로 로그인"
                className="w-[50px] h-[50px] flex items-center justify-center border border-neutral-200 rounded-lg hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </Link>

              {/* Kakao */}
              <button 
                aria-label="카카오 로그인"
                className="w-[50px] h-[50px] flex items-center justify-center bg-[#FEE500] rounded-lg hover:bg-[#efd000] transition-colors shadow-sm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.8 4.313 6.111l-.882 3.244c-.04.148.046.302.19.348.048.016.099.018.148.006l3.824-2.541c.46.062.93.095 1.407.095 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
                </svg>
              </button>

              {/* Naver */}
              <button 
                aria-label="네이버 로그인"
                className="w-[50px] h-[50px] flex items-center justify-center bg-[#03C75A] rounded-lg hover:bg-[#009241] transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-[0.8em]">
              {/* New to {siteInfo.title.split('-')[0]}?  */}
              처음오셨나요?
              <button className="ml-3 font-bold text-neutral-950 uppercase tracking-widest hover:underline">{/* Create Account */}회원가입</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;