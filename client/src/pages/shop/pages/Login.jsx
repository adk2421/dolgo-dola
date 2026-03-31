import { Link } from 'react-router-dom';
import { loginConfig } from '../data/pageConfig';

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white text-neutral-950 font-sans antialiased flex flex-col justify-center items-center">
      <div className="w-full flex items-center justify-center p-12 md:p-20">
        <div className="w-full max-w-sm">
          <div className="mb-12">
            <h3 className="text-2xl md:text-4xl font-black mb-2">{/*SIGN IN*/}로그인</h3>
            <p className="text-neutral-500 text-xs md:text-sm">{/* Access your curated collection. */}로그인하고 더 많은 서비스와 혜택을 누리세요.</p>
          </div>

          {/* ID/PW Login Section */}
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

            {/* Icon */}
            <div className="md:hidden flex items-center justify-center gap-4">
              {loginConfig.oauth.map((oauth) => {
                return (
                  <Link
                    key={oauth.link}
                    to={oauth.link}
                    aria-label={oauth.label}
                    className={oauth.type.icon.class}
                  >
                    {oauth.type.icon.html}
                  </Link>
              )})}
            </div>

            {/* Basic */}
            <div className="hidden md:block space-y-3">
              {loginConfig.oauth.map((oauth) => {
                return (
                  <Link
                    key={oauth.link}
                    to={oauth.link}
                    aria-label={oauth.label}
                    className={oauth.type.basic.class}
                  >
                    {oauth.type.basic.html}
                  </Link>
              )})}
            </div>
          </div>

          {/* Sign up Section */}
          <div className="mt-10 text-center">
            <p className="text-neutral-500 text-[0.8em]">
              처음오셨나요?
              <button className="ml-3 font-bold text-neutral-950 uppercase tracking-widest hover:underline">회원가입</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;