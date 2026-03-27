import { useEffect, useState } from 'react';

// 개별 앱 아이콘 컴포넌트
const AppIcon = ({ name, color, isDock = false, initials }) => (
  <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
    <div 
      className={`${color} w-14 h-14 sm:w-16 sm:h-16 rounded-[1.25rem] shadow-sm flex items-center justify-center text-white text-xl font-bold transition-all duration-200 group-active:scale-90 group-hover:scale-105`}
    >
      {initials || name[0]}
    </div>
    {/* 독(Dock)에 있는 앱은 이름을 표시하지 않음 */}
    {!isDock && (
      <span className="text-white text-xs font-medium drop-shadow-md truncate w-16 text-center">
        {name}
      </span>
    )}
  </div>
);

export default function IPhoneHome() {
  const [time, setTime] = useState("9:41");

	// 현재 시간
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(`${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 바탕화면 앱 리스트
  const apps = [
    { name: "Wake Up", color: "bg-blue-500", initials: "WU" },
    { name: "Shizuka", color: "bg-emerald-500", initials: "SZ" },
    { name: "Photos", color: "bg-gradient-to-tr from-yellow-400 via-red-400 to-purple-500", initials: "📷" },
    { name: "Camera", color: "bg-gray-400", initials: "📸" },
    { name: "Weather", color: "bg-blue-400", initials: "⛅" },
    { name: "Clock", color: "bg-black", initials: "⏱" },
    { name: "Maps", color: "bg-green-500", initials: "🗺" },
    { name: "Notes", color: "bg-yellow-100 text-black", initials: "📝" },
  ];

  // 하단 독(Dock) 앱 리스트
  const dockApps = [
    { name: "Phone", color: "bg-green-400", initials: "📞" },
    { name: "Messages", color: "bg-green-500", initials: "💬" },
    { name: "Safari", color: "bg-blue-400", initials: "🌐" },
    { name: "Music", color: "bg-rose-500", initials: "🎵" },
  ];

  return (
    // 데스크탑/태블릿에서는 회색 배경 중앙에 폰이 위치하고, 모바일에서는 폰이 전체화면이 됩니다.
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center sm:p-8">
      
      {/* 아이폰 컨테이너 */}
      <div className="relative w-full h-[100dvh] sm:w-[400px] sm:h-[850px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 sm:rounded-[3.5rem] shadow-2xl overflow-hidden sm:border-[8px] sm:border-black flex flex-col">
        
        {/* 상단 상태 표시줄 (Status Bar) */}
        <div className="w-full px-6 pt-3 pb-2 flex justify-between items-center z-20 shrink-0">
          <span className="text-white text-sm font-semibold pl-2">{time}</span>
          
          {/* 다이내믹 아일랜드 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-7 bg-black rounded-full shadow-md z-30 flex items-center justify-between px-2">
            <div className="w-2.5 h-2.5 bg-gray-800 rounded-full opacity-50"></div>
          </div>
          
          {/* 우측 아이콘 (통신사, 와이파이, 배터리 모사) */}
          <div className="flex gap-1.5 items-center pr-1">
            <div className="w-4 h-3 flex items-end gap-[1px]">
              <div className="w-1 h-1 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-3 bg-white rounded-sm"></div>
            </div>
            {/* 배터리 아이콘 */}
            <div className="w-6 h-3 border border-white/60 rounded-sm relative flex items-center p-[1px]">
              <div className="w-[80%] h-full bg-white rounded-sm"></div>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1.5 bg-white/60 rounded-r-sm"></div>
            </div>
          </div>
        </div>

        {/* 앱 그리드 (4xN) */}
        <div className="flex-1 px-6 pt-8 pb-32 overflow-y-auto no-scrollbar grid grid-cols-4 gap-x-4 gap-y-6 content-start z-10">
          {apps.map(app => (
            <AppIcon key={app.name} {...app} />
          ))}
        </div>

        {/* 하단 독 (Dock) */}
        <div className="absolute bottom-8 left-4 right-4 h-24 bg-white/25 backdrop-blur-xl rounded-[2.25rem] px-4 flex items-center justify-between shadow-lg border border-white/10 z-20">
          {dockApps.map(app => (
            <AppIcon key={app.name} {...app} isDock={true} />
          ))}
        </div>

        {/* 하단 홈 인디케이터 (Home Indicator) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white rounded-full opacity-80 z-30"></div>
      </div>
    </div>
  );
}