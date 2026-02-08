const Branch = () => {
  return (
    <div className="fixed bottom-0 right-0 z-30 pointer-events-none">
      <svg 
        width="350" 
        height="100vh"
        viewBox="0 0 350 800" 
        className="drop-shadow-2xl"
        preserveAspectRatio="xMaxYMax meet"
      >
        <defs>
          {/* Gradient for trunk depth */}
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25, 45%, 25%)" />
            <stop offset="50%" stopColor="hsl(25, 50%, 32%)" />
            <stop offset="100%" stopColor="hsl(25, 45%, 28%)" />
          </linearGradient>
        </defs>
        
        <g>
          {/* Main trunk - from bottom to top, thick to thin, slightly wavy */}
          <path 
            d="M 320 800 Q 315 700 310 600 Q 308 500 305 400 Q 300 300 297 200 Q 293 100 290 50"
            fill="none" 
            stroke="url(#trunkGradient)" 
            strokeWidth="45"
            strokeLinecap="round"
          />
          
          {/* Trunk highlight for 3D effect */}
          <path 
            d="M 315 800 Q 312 700 307 600 Q 306 500 303 400 Q 298 300 295 200 Q 291 100 288 50"
            fill="none" 
            stroke="hsl(25, 50%, 38%)" 
            strokeWidth="15"
            strokeLinecap="round"
            opacity="0.6"
          />
          
          {/* Bark texture lines - scattered along trunk */}
          <path d="M 305 750 Q 308 748 310 746" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 307 680 Q 310 678 312 676" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 304 620 Q 307 618 309 616" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 303 540 Q 306 538 308 536" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 301 460 Q 304 458 306 456" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 299 380 Q 302 378 304 376" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 297 300 Q 300 298 302 296" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 295 220 Q 298 218 300 216" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 293 140 Q 296 138 298 136" stroke="hsl(25, 40%, 22%)" strokeWidth="2.5" opacity="0.5" />
          <path d="M 291 80 Q 294 78 296 76" stroke="hsl(25, 40%, 22%)" strokeWidth="2" opacity="0.5" />
          
          {/* Branch knots on trunk */}
          <ellipse cx="306" cy="700" rx="7" ry="5" fill="hsl(25, 35%, 28%)" opacity="0.7" />
          <ellipse cx="304" cy="580" rx="6" ry="4" fill="hsl(25, 35%, 28%)" opacity="0.7" />
          <ellipse cx="301" cy="420" rx="6" ry="4" fill="hsl(25, 35%, 28%)" opacity="0.7" />
          <ellipse cx="298" cy="280" rx="5" ry="3.5" fill="hsl(25, 35%, 28%)" opacity="0.7" />
          <ellipse cx="295" cy="160" rx="5" ry="3" fill="hsl(25, 35%, 28%)" opacity="0.7" />
          
          {/* ⭐ MAIN TOP BRANCH - LONG & WAVY for BOTH owls to sit together */}
          <path 
            d="M 290 120 Q 260 115 230 118 Q 200 122 170 118 Q 140 114 110 118 Q 80 123 50 118"
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path 
            d="M 290 120 Q 260 113 230 116 Q 200 120 170 116 Q 140 112 110 116 Q 80 121 50 116"
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="9"
            strokeLinecap="round"
          />
          
          {/* Wavy branch going UP-LEFT */}
          <path 
            d="M 297 200 Q 275 190 255 195 Q 235 200 215 192 Q 195 184 175 188"
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path 
            d="M 297 200 Q 275 188 255 193 Q 235 198 215 190 Q 195 182 175 186"
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* Wavy branch going DOWN-LEFT */}
          <path 
            d="M 300 280 Q 278 288 258 283 Q 238 278 218 285 Q 198 292 178 287"
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path 
            d="M 300 280 Q 278 286 258 281 Q 238 276 218 283 Q 198 290 178 285"
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* Wavy branch going UP-RIGHT then LEFT */}
          <path 
            d="M 295 360 Q 320 352 340 358 M 295 360 Q 275 365 255 360 Q 235 355 215 362"
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path 
            d="M 295 360 Q 318 350 338 356 M 295 360 Q 275 363 255 358 Q 235 353 215 360"
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="5"
            strokeLinecap="round"
          />
          
          {/* Wavy branch going mostly HORIZONTAL with waves */}
          <path 
            d="M 301 450 Q 280 445 260 450 Q 240 455 220 448 Q 200 441 180 446 Q 160 451 140 446"
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path 
            d="M 301 450 Q 280 443 260 448 Q 240 453 220 446 Q 200 439 180 444 Q 160 449 140 444"
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* Wavy branch going DOWN */}
          <path 
            d="M 304 550 Q 295 570 290 590 Q 285 610 280 630"
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path 
            d="M 304 550 Q 295 568 290 588 Q 285 608 280 628"
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="5"
            strokeLinecap="round"
          />
          
          {/* Wavy branch going LEFT with curves */}
          <path 
            d="M 306 620 Q 285 615 265 622 Q 245 629 225 624 Q 205 619 185 625"
            fill="none" 
            stroke="hsl(25, 50%, 28%)" 
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path 
            d="M 306 620 Q 285 613 265 620 Q 245 627 225 622 Q 205 617 185 623"
            fill="none" 
            stroke="hsl(25, 40%, 35%)" 
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* Small decorative twigs on MAIN TOP branch */}
          <path d="M 230 118 L 225 105" stroke="hsl(25, 45%, 32%)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 170 118 L 165 108" stroke="hsl(25, 45%, 32%)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 110 118 L 105 110" stroke="hsl(25, 45%, 32%)" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 60 118 L 52 112" stroke="hsl(25, 45%, 32%)" strokeWidth="3" strokeLinecap="round" />
          
          {/* Twigs on other branches */}
          <path d="M 255 195 L 248 185" stroke="hsl(25, 45%, 32%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 215 192 L 210 183" stroke="hsl(25, 45%, 32%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 258 283 L 255 295" stroke="hsl(25, 45%, 32%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 218 285 L 214 297" stroke="hsl(25, 45%, 32%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 340 358 L 348 352" stroke="hsl(25, 45%, 32%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 255 360 L 250 368" stroke="hsl(25, 45%, 32%)" strokeWidth="3" strokeLinecap="round" />
          
          {/* Leaves on MAIN TOP branch (where both owls sit) */}
          <ellipse cx="60" cy="115" rx="8" ry="4" fill="hsl(140, 40%, 35%)" transform="rotate(-25, 60, 115)" />
          <ellipse cx="110" cy="116" rx="8" ry="4" fill="hsl(140, 40%, 35%)" transform="rotate(18, 110, 116)" />
          <ellipse cx="170" cy="116" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-12, 170, 116)" />
          <ellipse cx="230" cy="116" rx="8" ry="4" fill="hsl(140, 40%, 35%)" transform="rotate(22, 230, 116)" />
          <ellipse cx="260" cy="117" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-8, 260, 117)" />
          <ellipse cx="50" cy="118" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(15, 50, 118)" />
          <ellipse cx="140" cy="115" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-18, 140, 115)" />
          <ellipse cx="200" cy="119" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(10, 200, 119)" />
          
          {/* Leaves scattered on other branches */}
          <ellipse cx="255" cy="193" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-22, 255, 193)" />
          <ellipse cx="215" cy="190" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(16, 215, 190)" />
          <ellipse cx="175" cy="186" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-10, 175, 186)" />
          
          <ellipse cx="258" cy="281" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(20, 258, 281)" />
          <ellipse cx="218" cy="283" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-14, 218, 283)" />
          <ellipse cx="178" cy="285" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(18, 178, 285)" />
          
          <ellipse cx="340" cy="356" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(25, 340, 356)" />
          <ellipse cx="255" cy="358" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-12, 255, 358)" />
          <ellipse cx="215" cy="360" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(8, 215, 360)" />
          
          <ellipse cx="260" cy="448" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-16, 260, 448)" />
          <ellipse cx="220" cy="446" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(20, 220, 446)" />
          <ellipse cx="180" cy="444" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-10, 180, 444)" />
          <ellipse cx="140" cy="444" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(14, 140, 444)" />
          
          <ellipse cx="290" cy="590" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-18, 290, 590)" />
          <ellipse cx="280" cy="628" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(12, 280, 628)" />
          
          <ellipse cx="265" cy="620" rx="7" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(22, 265, 620)" />
          <ellipse cx="225" cy="622" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-15, 225, 622)" />
          <ellipse cx="185" cy="623" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(10, 185, 623)" />
          
          {/* Foliage clusters for fullness */}
          <ellipse cx="150" cy="105" rx="14" ry="8" fill="hsl(140, 35%, 40%)" opacity="0.6" transform="rotate(12, 150, 105)" />
          <ellipse cx="90" cy="108" rx="12" ry="7" fill="hsl(140, 35%, 40%)" opacity="0.6" transform="rotate(-15, 90, 108)" />
          <ellipse cx="230" cy="183" rx="11" ry="6" fill="hsl(140, 35%, 40%)" opacity="0.6" transform="rotate(8, 230, 183)" />
          <ellipse cx="238" cy="275" rx="10" ry="6" fill="hsl(140, 35%, 40%)" opacity="0.6" transform="rotate(-18, 238, 275)" />
          <ellipse cx="270" cy="352" rx="9" ry="5" fill="hsl(140, 35%, 40%)" opacity="0.6" transform="rotate(14, 270, 352)" />
          <ellipse cx="240" cy="438" rx="10" ry="6" fill="hsl(140, 35%, 40%)" opacity="0.6" transform="rotate(-10, 240, 438)" />
          <ellipse cx="245" cy="615" rx="9" ry="5" fill="hsl(140, 35%, 40%)" opacity="0.6" transform="rotate(16, 245, 615)" />
          
          {/* ⭐ NEW ADDITIONAL LEAVES START ⭐ */}
          {/* More leaves on other branches for balance */}
          <ellipse cx="240" cy="188" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(14, 240, 188)" />
          <ellipse cx="195" cy="185" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-25, 195, 185)" />
          <ellipse cx="240" cy="279" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-18, 240, 279)" />
          <ellipse cx="198" cy="287" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(22, 198, 287)" />
          <ellipse cx="240" cy="446" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-14, 240, 446)" />
          <ellipse cx="200" cy="443" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(16, 200, 443)" />
          <ellipse cx="160" cy="448" rx="6" ry="3" fill="hsl(140, 40%, 35%)" transform="rotate(-20, 160, 448)" />
          {/* ⭐ NEW ADDITIONAL LEAVES END ⭐ */}

          {/* ⭐ NEW FLOWERS START ⭐ */}
          {/* Pink flowers on main branch */}
          <g>
            {/* Flower 1 */}
            <circle cx="80" cy="112" r="3" fill="hsl(340, 70%, 75%)" />
            <circle cx="77" cy="110" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="83" cy="110" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="77" cy="114" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="83" cy="114" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="80" cy="112" r="1.5" fill="hsl(45, 100%, 60%)" />
          </g>

          <g>
            {/* Flower 2 */}
            <circle cx="160" cy="110" r="3" fill="hsl(340, 70%, 75%)" />
            <circle cx="157" cy="108" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="163" cy="108" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="157" cy="112" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="163" cy="112" r="2" fill="hsl(340, 80%, 80%)" />
            <circle cx="160" cy="110" r="1.5" fill="hsl(45, 100%, 60%)" />
          </g>

          <g>
            {/* Flower 3 */}
            <circle cx="220" cy="112" r="3" fill="hsl(280, 60%, 70%)" />
            <circle cx="217" cy="110" r="2" fill="hsl(280, 70%, 75%)" />
            <circle cx="223" cy="110" r="2" fill="hsl(280, 70%, 75%)" />
            <circle cx="217" cy="114" r="2" fill="hsl(280, 70%, 75%)" />
            <circle cx="223" cy="114" r="2" fill="hsl(280, 70%, 75%)" />
            <circle cx="220" cy="112" r="1.5" fill="hsl(45, 100%, 60%)" />
          </g>

          {/* White flowers on other branches */}
          <g>
            {/* Flower 4 */}
            <circle cx="235" cy="188" r="2.5" fill="hsl(0, 0%, 95%)" />
            <circle cx="232.5" cy="186.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="237.5" cy="186.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="232.5" cy="189.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="237.5" cy="189.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="235" cy="188" r="1" fill="hsl(45, 100%, 60%)" />
          </g>

          <g>
            {/* Flower 5 */}
            <circle cx="250" cy="281" r="2.5" fill="hsl(340, 70%, 75%)" />
            <circle cx="247.5" cy="279.5" r="1.5" fill="hsl(340, 80%, 80%)" />
            <circle cx="252.5" cy="279.5" r="1.5" fill="hsl(340, 80%, 80%)" />
            <circle cx="247.5" cy="282.5" r="1.5" fill="hsl(340, 80%, 80%)" />
            <circle cx="252.5" cy="282.5" r="1.5" fill="hsl(340, 80%, 80%)" />
            <circle cx="250" cy="281" r="1" fill="hsl(45, 100%, 60%)" />
          </g>

          <g>
            {/* Flower 6 */}
            <circle cx="230" cy="448" r="2.5" fill="hsl(280, 60%, 70%)" />
            <circle cx="227.5" cy="446.5" r="1.5" fill="hsl(280, 70%, 75%)" />
            <circle cx="232.5" cy="446.5" r="1.5" fill="hsl(280, 70%, 75%)" />
            <circle cx="227.5" cy="449.5" r="1.5" fill="hsl(280, 70%, 75%)" />
            <circle cx="232.5" cy="449.5" r="1.5" fill="hsl(280, 70%, 75%)" />
            <circle cx="230" cy="448" r="1" fill="hsl(45, 100%, 60%)" />
          </g>

          <g>
            {/* Flower 7 */}
            <circle cx="205" cy="621" r="2.5" fill="hsl(0, 0%, 95%)" />
            <circle cx="202.5" cy="619.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="207.5" cy="619.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="202.5" cy="622.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="207.5" cy="622.5" r="1.5" fill="hsl(0, 0%, 98%)" />
            <circle cx="205" cy="621" r="1" fill="hsl(45, 100%, 60%)" />
          </g>
          {/* ⭐ NEW FLOWERS END ⭐ */}

          {/* Branch knots for detail */}
          <circle cx="230" cy="116" r="3.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="170" cy="116" r="3" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="110" cy="116" r="2.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="255" cy="193" r="2.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="258" cy="281" r="2.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="260" cy="448" r="2.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
          <circle cx="265" cy="620" r="2.5" fill="hsl(25, 35%, 32%)" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default Branch;