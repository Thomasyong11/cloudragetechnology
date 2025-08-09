export default function Logo() {
  return (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* House */}
        <path
          d="M85 120 L85 80 L115 50 L145 80 L145 120 L130 120 L130 105 L100 105 L100 120 Z"
          fill="#D4A574"
        />
        <path
          d="M75 120 L115 65 L155 120"
          fill="none"
          stroke="#8B4513"
          strokeWidth="3"
        />
        <rect x="105" y="90" width="8" height="8" fill="#4A90A4" />
        <rect x="117" y="90" width="8" height="8" fill="#4A90A4" />
        <rect x="110" y="105" width="10" height="15" fill="#654321" />

        {/* Smartphone */}
        <rect x="125" y="85" width="35" height="55" rx="5" fill="#2C3E50" />
        <rect x="128" y="88" width="29" height="49" rx="2" fill="#34495E" />
        
        {/* App Icons on Phone */}
        <rect x="130" y="95" width="8" height="8" rx="1" fill="#E74C3C" />
        <rect x="140" y="95" width="8" height="8" rx="1" fill="#F39C12" />
        <rect x="150" y="95" width="8" height="8" rx="1" fill="#27AE60" />
        <rect x="130" y="107" width="8" height="8" rx="1" fill="#3498DB" />
        <rect x="140" y="107" width="8" height="8" rx="1" fill="#9B59B6" />
        <rect x="150" y="107" width="8" height="8" rx="1" fill="#E67E22" />

        {/* Floating Icons */}
        {/* Light Bulb - Top Left */}
        <circle cx="70" cy="65" r="12" fill="#4A90A4" />
        <circle cx="70" cy="65" r="5" fill="white" />
        
        {/* Clock - Top Center */}
        <circle cx="100" cy="50" r="12" fill="#4A90A4" />
        <circle cx="100" cy="50" r="8" fill="white" />
        <line x1="100" y1="50" x2="100" y2="45" stroke="#4A90A4" strokeWidth="1" />
        <line x1="100" y1="50" x2="103" y2="50" stroke="#4A90A4" strokeWidth="1" />
        
        {/* Security Lock - Top Right */}
        <circle cx="130" cy="65" r="12" fill="#4A90A4" />
        <rect x="126" y="63" width="8" height="6" rx="1" fill="white" />
        <rect x="127" y="61" width="6" height="3" rx="3" fill="none" stroke="white" strokeWidth="1" />
        
        {/* Water Drop - Right */}
        <circle cx="155" cy="80" r="12" fill="#4A90A4" />
        <path d="M155 75 Q155 72 152 75 Q155 78 155 75 Q158 72 155 75 Q155 78 155 81 Q152 84 155 81 Q158 84 155 81 Z" fill="white" />
        
        {/* WiFi - Bottom Right */}
        <circle cx="175" cy="95" r="12" fill="#4A90A4" />
        <path d="M175 98 Q172 95 175 95 Q178 95 175 98" fill="none" stroke="white" strokeWidth="1" />
        <path d="M175 100 Q170 93 175 93 Q180 93 175 100" fill="none" stroke="white" strokeWidth="0.8" />
        <circle cx="175" cy="100" r="1" fill="white" />
      </svg>
    </div>
  );
}
