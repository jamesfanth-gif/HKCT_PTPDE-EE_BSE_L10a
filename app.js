function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L10a: 'L10a Lifts & Escalators'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Electric Traction Passenger Lift Anatomy',
    titleZh: '電動曳引式客梯構造、井道部件與安全機構',
    diagram: `<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="20" width="700" height="270" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Electric Traction Lift Layout &amp; Safety Apparatus (CIBSE Guide D 曳引電梯解剖)</text>
      <!-- Machine Room (Top) -->
      <g transform="translate(180, 35)">
        <rect x="0" y="0" width="380" height="50" fill="#1a252f" stroke="#3498db" stroke-width="1.5" rx="4"/>
        <text x="50" y="20" font-size="10" fill="#3498db" font-weight="bold">Machine Room</text>
        <circle cx="120" cy="25" r="16" fill="#f39c12"/>
        <text x="120" y="29" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Motor</text>
        <circle cx="170" cy="25" r="20" fill="#e74c3c"/>
        <text x="170" y="29" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Sheave</text>
        <circle cx="230" cy="25" r="10" fill="#f1c40f"/>
        <text x="230" y="28" text-anchor="middle" font-size="7" fill="#111">Gov</text>
        <rect x="280" y="10" width="80" height="30" fill="#2c3e50" stroke="#1abc9c"/>
        <text x="320" y="29" text-anchor="middle" font-size="8.5" fill="#fff">Controller</text>
      </g>
      <!-- Lift Well / Shaft -->
      <g transform="translate(260, 85)">
        <rect x="0" y="0" width="220" height="195" fill="#111" stroke="#7f8c8d" stroke-width="1.5"/>
        <line x1="55" y1="0" x2="55" y2="195" stroke="#7f8c8d" stroke-width="1" stroke-dasharray="4 2"/>
        <line x1="165" y1="0" x2="165" y2="195" stroke="#7f8c8d" stroke-width="1" stroke-dasharray="4 2"/>
        <!-- Suspension Rope -->
        <path d="M 55 0 L 55 40 M 165 0 L 165 110" stroke="#f1c40f" stroke-width="3" class="flow-cable"/>
        <!-- Lift Car (Animated) -->
        <g class="anim-lift-car" transform="translate(20, 30)">
          <rect x="0" y="0" width="70" height="55" fill="#1b4f72" stroke="#3498db" stroke-width="2" rx="3"/>
          <text x="35" y="32" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Car</text>
          <rect x="-4" y="45" width="78" height="6" fill="#e74c3c"/>
          <text x="35" y="62" text-anchor="middle" font-size="7" fill="#f5b7b1">Safety Gear</text>
        </g>
        <!-- Counterweight (Animated inverse) -->
        <g class="anim-counterweight" transform="translate(145, 90)">
          <rect x="0" y="0" width="40" height="50" fill="#78281f" stroke="#e74c3c" stroke-width="1.5" rx="2"/>
          <text x="20" y="28" text-anchor="middle" font-size="8" fill="#fff">CWT</text>
        </g>
        <!-- Pit Buffers -->
        <rect x="45" y="180" width="20" height="15" fill="#f39c12"/>
        <rect x="155" y="180" width="20" height="15" fill="#f39c12"/>
        <text x="110" y="190" text-anchor="middle" font-size="7.5" fill="#bdc3c7">Pit Buffers</text>
      </g>
      <!-- Annotations -->
      <g transform="translate(40, 95)">
        <rect x="0" y="0" width="190" height="175" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="95" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#5dade2">Key Safety Subsystems:</text>
        <text x="10" y="42" font-size="9" fill="#fff">• <strong>Overspeed Governor</strong>: Tripped by cable</text>
        <text x="10" y="60" font-size="9" fill="#fff">• <strong>Safety Gear</strong>: Wedges car to guide rails</text>
        <text x="10" y="78" font-size="9" fill="#fff">• <strong>Limit Switches</strong>: Prevents over-travel</text>
        <text x="10" y="96" font-size="9" fill="#fff">• <strong>Buffers</strong>: Oil/spring impact stop in pit</text>
        <text x="10" y="114" font-size="9" fill="#fff">• <strong>Counterweight (CWT)</strong>: Balances car</text>
        <text x="10" y="130" font-size="8.5" fill="#f1c40f">  (Balances Car Weight + 40-50% Load)</text>
        <text x="10" y="148" font-size="9" fill="#fff">• <strong>Travelling Cables</strong>: Power &amp; control feed</text>
        <text x="10" y="165" font-size="8.5" fill="#abebc6">Drive directly above lift well (or MRL)</text>
      </g>
      <g transform="translate(510, 95)">
        <rect x="0" y="0" width="190" height="175" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="95" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#2ecc71">Hoistway Specifications:</text>
        <text x="10" y="42" font-size="9" fill="#fff">• Top Machine Room: Houses drive motor</text>
        <text x="10" y="60" font-size="9" fill="#fff">• Guide Rails: Rigid T-section steel</text>
        <text x="10" y="78" font-size="9" fill="#fff">• Apron (Toe Guard): Smooth vertical plate</text>
        <text x="10" y="96" font-size="9" fill="#fff">• Landing Doors: Interlocked with car</text>
        <text x="10" y="114" font-size="9" fill="#fff">• MRL Option: Machine Room-Less</text>
        <text x="10" y="130" font-size="8.5" fill="#bdc3c7">  saves valuable penthouse roof space</text>
        <text x="10" y="150" font-size="9" fill="#f1c40f">Best for mid/high-rise long travel</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Electric traction lift components: Machine room drive, overspeed governor, safety gear, counterweight, and pit buffers',
    sections: [
      {
        title: 'Traction Lift Anatomy & Key Components / 曳引式客梯機械組件',
        zh: '<p><strong>電動曳引式升降機 (Electric traction passenger lift)</strong> 是高層建築中最廣泛應用的垂直運輸工具[cite: 11]：</p><ul><li><strong>機房 (Machine Room)</strong>：傳統設於井道正上方（或採用無機房 MRL 設計），內設驅動電機 (Drive motor)、制動器 (Brake)、曳引輪 (Drive sheave)、限速器 (Overspeed governor) 及微電腦控制櫃 (Controller)[cite: 11]；</li><li><strong>井道 (Lift well / Hoistway)</strong>：垂直鋼筋混凝土結構，安裝轎廂導軌 (Car guide rails)、對重導軌、極限開關 (Limit switches) 及隨行電纜 (Travelling cables)[cite: 11]；</li><li><strong>轎廂與對重 (Car &amp; Counterweight)</strong>：由鋼絲繩懸掛跨過曳引輪，對重通常平衡「轎廂自重 + 40%–50% 額定載重」，大幅節省電機提升功率[cite: 11]；</li><li><strong>安全聯鎖機構</strong>：限速器在超速時卡死鋼絲繩，觸發轎廂底部的<strong>安全鉗 (Safety gear)</strong> 機械夾緊導軌緊急制動；底坑設有油壓/彈簧<strong>緩衝器 (Buffers)</strong> 與護腳板 (Apron)[cite: 11]。</li></ul>',
        en: '<p>An <strong>electric traction passenger lift</strong> consists of mechanical and safety subsystems[cite: 11]:</p><ul><li><strong>Machine Room</strong>: Positioned directly above the shaft (or MRL), housing the drive motor, brake, drive sheave, overspeed governor, and controller[cite: 11];</li><li><strong>Lift Well</strong>: Encloses rigid steel car/counterweight guide rails, limit switches, and travelling cables[cite: 11];</li><li><strong>Car &amp; Counterweight (CWT)</strong>: Suspended by wire ropes across the drive sheave; CWT balances car mass plus 40%–50% rated contract payload[cite: 11];</li><li><strong>Safety Gear</strong>: Overspeed governor trips the mechanical safety gear under the car floor, wedging it onto guide rails to arrest free-fall; pit houses car and CWT buffers[cite: 11].</li></ul>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Hydraulic Lift Mechanics & Elevator Power Flow',
    titleZh: '液壓升降機原理與電梯功率傳遞平衡方程',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Hydraulic Lift Schematic -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Hydraulic Lift System (液壓式升降機)</text>
        <g transform="translate(20, 45)">
          <rect x="0" y="0" width="130" height="65" fill="#1a252f" stroke="#e74c3c" rx="4"/>
          <text x="65" y="20" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#f5b7b1">Power Unit (最低層機房)</text>
          <text x="65" y="38" text-anchor="middle" font-size="8.5" fill="#fff">Oil Tank + Pump</text>
          <text x="65" y="52" text-anchor="middle" font-size="8" fill="#f1c40f">Valve block control</text>
          <!-- Hydraulic line -->
          <path d="M 130 35 L 180 35 L 180 130 L 220 130" fill="none" stroke="#e74c3c" stroke-width="3" class="flow-hydraulic"/>
        </g>
        <!-- Cylinder & Ram in Borehole -->
        <g transform="translate(230, 70)">
          <rect x="0" y="0" width="80" height="55" fill="#1b4f72" stroke="#3498db" rx="3"/>
          <text x="40" y="32" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Car</text>
          <rect x="35" y="55" width="10" height="85" fill="#bdc3c7"/>
          <text x="50" y="100" font-size="7.5" fill="#ecf0f1">Piston Ram</text>
          <rect x="30" y="140" width="20" height="45" fill="#34495e" stroke="#7f8c8d"/>
          <text x="40" y="165" text-anchor="middle" font-size="7.5" fill="#bdc3c7">Cylinder</text>
        </g>
        <rect x="15" y="180" width="310" height="70" fill="#111" stroke="#3498db" rx="4"/>
        <text x="160" y="200" text-anchor="middle" font-size="10" fill="#5dade2" font-weight="bold">Key Hydraulic Features (Slide 6 &amp; 26):</text>
        <text x="160" y="218" text-anchor="middle" font-size="8.5" fill="#ecf0f1">• Machine room ideally situated at the lowest floor level</text>
        <text x="160" y="235" text-anchor="middle" font-size="8.5" fill="#bdc3c7">• Low travel height (2–6 storeys), heavy lifting, high power</text>
      </g>
      <!-- Right: Elevator Power Flow Diagram -->
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#f1c40f" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f1c40f">Elevator Power Flow &amp; Net Work (功率平衡)</text>
        <g transform="translate(20, 45)">
          <rect x="0" y="0" width="85" height="50" fill="#1a252f" stroke="#3498db" rx="3"/>
          <text x="42" y="22" text-anchor="middle" font-size="8.5" fill="#5dade2">Electric Input</text>
          <text x="42" y="38" text-anchor="middle" font-size="8" fill="#fff">AC Power (kW)</text>
          <path d="M 85 25 L 105 25" stroke="#f1c40f" stroke-width="2"/>
          <rect x="105" y="0" width="85" height="50" fill="#1a252f" stroke="#f39c12" rx="3"/>
          <text x="147" y="22" text-anchor="middle" font-size="8.5" fill="#f1c40f">Motor &amp; Gears</text>
          <text x="147" y="38" text-anchor="middle" font-size="8" fill="#fff">P = T · ω</text>
          <path d="M 190 25 L 210 25" stroke="#f1c40f" stroke-width="2"/>
          <rect x="210" y="0" width="85" height="50" fill="#1a252f" stroke="#2ecc71" rx="3"/>
          <text x="252" y="22" text-anchor="middle" font-size="8.5" fill="#2ecc71">Net Output</text>
          <text x="252" y="38" text-anchor="middle" font-size="8" fill="#fff">Lift Work</text>
        </g>
        <rect x="15" y="110" width="310" height="140" fill="#111" stroke="#f1c40f" rx="4"/>
        <text x="160" y="132" text-anchor="middle" font-size="11" fill="#f1c40f" font-weight="bold">Net Mechanical Output Equation (Slide 7):</text>
        <text x="160" y="158" text-anchor="middle" font-size="12" fill="#fff" font-family="Consolas" font-weight="bold">P = [ (Welevator - Wcounter) · Velocity ] / 2</text>
        <text x="160" y="185" text-anchor="middle" font-size="9" fill="#ecf0f1">Typical overall electro-mechanical efficiency: <strong>η ≈ 60%</strong></text>
        <text x="160" y="205" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Counterweight significantly offsets gross motor power requirement.</text>
        <text x="160" y="225" text-anchor="middle" font-size="8.5" fill="#abebc6">Motor torque T and angular velocity ω: P_mech = T · ω.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Hydraulic elevator configuration (lowest level pump/tank unit, borehole piston) and elevator power flow equations (electromechanical efficiency η ≈ 60%)',
    sections: [
      {
        title: 'Hydraulic Lift Mechanics / 液壓升降機結構特性',
        zh: '<p><strong>液壓升降機 (Hydraulic lift)</strong> 靠液壓油泵將油箱中的高壓油注入井道底部的油缸 (Cylinder in borehole)，推動柱塞活塞 (Piston ram) 頂升轎廂；下降時靠自重開啟電磁閥洩油回油箱[cite: 11]：</p><ul><li><strong>機房位置靈活</strong>：泵站機房<strong>最理想設置於建築最低層（甚至地下室）</strong>，無需承受頂部重載，無須頂部機房[cite: 11]；</li><li><strong>適用工況</strong>：行程短（2–6 層）、載重大、運行平穩、速度較慢，但能耗較高[cite: 11]。</li></ul>',
        en: '<p>A <strong>hydraulic lift</strong> operates via an electrically driven pump pressurizing fluid from a tank through valve blocks into a cylinder, extending the piston ram to lift the car[cite: 11]:</p><ul><li><strong>Machine Room Position</strong>: Ideally located at the <strong>lowest floor level</strong> (basement), avoiding heavy roof structural loading[cite: 11];</li><li><strong>Application</strong>: Low-rise buildings (2–6 floors), heavy freight, smooth travel, but higher specific power consumption[cite: 11].</li></ul>'
      },
      {
        title: 'Elevator Power Flow Equations / 電梯功率傳遞平衡方程',
        zh: '<p>從電網輸入交流電到最終提升轎廂的能量流動歷程如下[cite: 11]：</p><div class="formula-block">\text{Input: AC Power} \xrightarrow{\eta \approx 60\%} P_{\text{mech}} = T \cdot \omega \xrightarrow{} P_{\text{out}} = \frac{(W_{\text{elevator}} - W_{\text{counter}}) \cdot \text{Velocity}}{2}</div><p>其中 $T$ 為電機轉矩，$\omega$ 為角速度，對重平衡使常規提升淨功大幅折減[cite: 11]。</p>',
        en: '<p>The power conversion pathway from electrical mains to vertical payload lift[cite: 11]:</p><div class="formula-block">P_{\text{mech}} = T \cdot \omega, \quad P_{\text{out}} = \frac{(W_{\text{elevator}} - W_{\text{counter}}) \cdot \text{Velocity}}{2}</div><p>Overall electromechanical efficiency averages $\eta \approx 60\%$[cite: 11].</p>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Escalator Anatomy & Drive Mechanism',
    titleZh: '自動扶梯內部構造：驅動機、梯級鏈與扶手帶',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Escalator Internal Drive Chain &amp; Mechanical Subsystems (自動扶梯內部機械構造)</text>
        <!-- Truss Profile -->
        <path d="M 50 190 L 180 190 L 480 80 L 650 80" fill="none" stroke="#7f8c8d" stroke-width="8"/>
        <!-- Handrail Loop -->
        <path d="M 60 155 L 180 155 L 480 45 L 640 45 Q 660 45 660 65 Q 660 85 640 85 L 480 85 L 180 195 L 60 195 Q 40 195 40 175 Q 40 155 60 155 Z" fill="none" stroke="#e74c3c" stroke-width="4"/>
        <text x="330" y="95" font-size="9" fill="#f5b7b1" transform="rotate(-20 330 95)" font-weight="bold">Moving Handrail (扶手帶同步運行)</text>
        <!-- Top Drive Machine -->
        <g transform="translate(520, 85)">
          <rect x="0" y="0" width="80" height="40" fill="#1a252f" stroke="#f1c40f" rx="3"/>
          <circle cx="20" cy="20" r="10" fill="#f39c12"/>
          <circle cx="60" cy="20" r="12" fill="#16a085"/>
          <text x="40" y="15" text-anchor="middle" font-size="7.5" fill="#fff">Motor &amp; Gears</text>
          <text x="40" y="32" text-anchor="middle" font-size="7" fill="#f1c40f">Drive Sheave</text>
        </g>
        <!-- Steps Chain -->
        <g stroke="#3498db" stroke-width="3">
          <line x1="200" y1="180" x2="220" y2="173"/>
          <line x1="230" y1="170" x2="250" y2="163"/>
          <line x1="260" y1="160" x2="280" y2="153"/>
          <line x1="290" y1="150" x2="310" y2="143"/>
          <line x1="320" y1="140" x2="340" y2="133"/>
          <line x1="350" y1="130" x2="370" y2="123"/>
          <line x1="380" y1="120" x2="400" y2="113"/>
          <line x1="410" y1="110" x2="430" y2="103"/>
        </g>
        <!-- Bottom Return Wheel -->
        <circle cx="100" cy="210" r="16" fill="#34495e" stroke="#3498db"/>
        <text x="100" y="214" text-anchor="middle" font-size="7.5" fill="#fff">Return Wheel</text>
        <!-- Spec Card -->
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="220" height="90" fill="#111" stroke="#1abc9c" rx="4"/>
          <text x="110" y="20" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1abc9c">Step &amp; Speed Specs (Slide 20):</text>
          <text x="10" y="38" font-size="8.5" fill="#fff">• Speeds: <strong>0.5 &amp; 0.65 m/s</strong> (up to 0.9-1.0 in subways)</text>
          <text x="10" y="54" font-size="8.5" fill="#fff">• Step Widths: <strong>600, 800 &amp; 1000 mm</strong></text>
          <text x="10" y="70" font-size="8.5" fill="#fff">• Min Step Tread Length: <strong>400 mm</strong></text>
          <text x="10" y="84" font-size="8" fill="#f1c40f">• Flat Steps at Landing: 1.33 to 2.33 steps</text>
        </g>
        <rect x="25" y="235" width="650" height="20" fill="#111" rx="2"/>
        <text x="350" y="249" text-anchor="middle" font-size="9" fill="#bdc3c7">First escalator designed by Jesse Reno in 1892. Ocean Park features the longest outdoor escalator (220 m total length).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Escalator mechanics: Upper drive gear motor, continuous step chain, inner track guide, handrail drive, and return idler wheel',
    sections: [
      {
        title: 'Escalator Origin & Components / 自動扶梯起源與驅動構造',
        zh: '<p>「Escalator（自動扶梯）」詞源為「Elevator」加上拉丁文「Scala（梯級）」[cite: 11]。1892 年由 Jesse Reno 設計發明首部自動扶梯[cite: 11]。香港海洋公園擁有全長 220 米的著名戶外扶梯系統[cite: 11]。</p><p>核心驅動機構包括：主驅動電機 (Electric motor)、驅動齒輪 (Drive gear)、梯級輪與導軌 (Step &amp; Inner rail)、梯級驅動鏈 (Step chain)、轉向輪 (Return wheel) 及扶手帶驅動裝置 (Handrail drive)[cite: 11]。</p>',
        en: '<p>The term <strong>"Escalator"</strong> blends "Elevator" and "Scala" (steps)[cite: 11]. First invented by Jesse Reno in 1892[cite: 11]. Ocean Park houses a world-renowned 220 m outdoor system[cite: 11].</p><p>Mechanical anatomy comprises the drive motor, drive gear, steps, step rollers and guide tracks, step chains, return idler wheels, and handrail synchronized drives[cite: 11].</p>'
      },
      {
        title: 'Step Dimensions & Speed Standards / 梯級尺寸與速度規範',
        zh: '<ul><li><strong>梯級寬度 (Step widths)</strong>：標準分為 <strong>600 mm</strong>（單人）、<strong>800 mm</strong> 及 <strong>1000 mm</strong>（雙人）[cite: 11]；</li><li><strong>梯級踏板長度</strong>：最小不得小於 <strong>400 mm</strong>[cite: 11]；</li><li><strong>運行速度</strong>：商場標準為 <strong>0.5 m/s 與 0.65 m/s</strong>；深埋地鐵車站等高吞吐量場所可提升至 <strong>0.9–1.0 m/s</strong>[cite: 11]；</li><li><strong>水平過渡段</strong>：出入口平台需維持 <strong>1.33 至 2.33 個水平梯級 (flat steps)</strong> 以供乘客安全踏入及著陸[cite: 11]。</li></ul>',
        en: '<ul><li><strong>Step widths</strong>: Standard sizes are <strong>600, 800, and 1000 mm</strong>; minimum tread length is <strong>400 mm</strong>[cite: 11];</li><li><strong>Rated speeds</strong>: Commonly <strong>0.5 and 0.65 m/s</strong>; up to <strong>0.9–1.0 m/s</strong> in deep mass-transit railway stations[cite: 11];</li><li><strong>Boarding and alighting</strong>: Requires <strong>1.33 to 2.33 flat steps</strong> for safe transition onto comb plates[cite: 11].</li></ul>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Escalator Incline Angles & Handling Capacity',
    titleZh: '扶梯傾角標準（30° vs 35°）與輸送能力計算公式',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Inclination Limits (扶梯傾斜角度標準)</text>
        <!-- Triangle illustrating angles -->
        <polygon points="50,160 270,160 270,60" fill="#1a252f" stroke="#7f8c8d"/>
        <line x1="50" y1="160" x2="270" y2="60" stroke="#f1c40f" stroke-width="3"/>
        <text x="120" y="150" font-size="11" fill="#f1c40f" font-weight="bold">θ = 30° (Standard)</text>
        <rect x="20" y="170" width="300" height="80" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="190" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Statutory Incline Rules (Slide 20):</text>
        <text x="170" y="210" text-anchor="middle" font-size="9" fill="#ecf0f1">• Standard Incline: <strong>30°</strong> (safest comfort angle)</text>
        <text x="170" y="230" text-anchor="middle" font-size="9" fill="#f1c40f">• Steeper <strong>35°</strong> permitted ONLY IF: Rise &lt; 6 m &amp; Speed ≤ 0.5 m/s</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#f39c12" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Handling Capacity Formulations (輸送能力)</text>
        <rect x="15" y="45" width="310" height="60" fill="#1a252f" stroke="#f1c40f" rx="3"/>
        <text x="170" y="68" text-anchor="middle" font-size="13" fill="#f1c40f" font-family="Consolas" font-weight="bold">N = ( 3600 · P · V · cos θ ) / L</text>
        <text x="170" y="90" text-anchor="middle" font-size="8.5" fill="#bdc3c7">N = persons/hr | P = persons/step | V = m/s | L = step length</text>
        <rect x="15" y="115" width="310" height="60" fill="#1a252f" stroke="#2ecc71" rx="3"/>
        <text x="170" y="138" text-anchor="middle" font-size="13" fill="#2ecc71" font-family="Consolas" font-weight="bold">Ce = 60 · V · k · s</text>
        <text x="170" y="160" text-anchor="middle" font-size="8.5" fill="#abebc6">Ce = persons/min | k = density (p/step) | s = steps per metre</text>
        <rect x="15" y="185" width="310" height="65" fill="#111" stroke="#3498db" rx="3"/>
        <text x="170" y="205" text-anchor="middle" font-size="9" fill="#ecf0f1">Arrangements: Parallel, Multiple Parallel, Criss-cross, Walkaround.</text>
        <text x="170" y="225" text-anchor="middle" font-size="8.5" fill="#f5b7b1">Most effective for continuous high-density crowd flow across 1–3 storeys.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Escalator engineering constraints: 30° standard incline (35° max for rise < 6m and speed < 0.5m/s) alongside theoretical handling capacity equations',
    sections: [
      {
        title: 'Inclination Angle Constraints / 扶梯傾角法定限制',
        zh: '<p>自動扶梯傾角 $\theta$ 取決於人體重心理論與安全防跌要求[cite: 11]：</p><ul><li><strong>標準傾角</strong>：國際及香港標準通常規定為 <strong>30°</strong>，舒適度與安全性最高[cite: 11]；</li><li><strong>最大極限傾角 35°</strong>：<strong>只有在同時滿足「垂直提升高度 Rise &lt; 6 m」且「運行速度 &le; 0.5 m/s」時，才容許採用 35°</strong>，以縮減商業零售建築的水平佔地空間[cite: 11]。</li></ul>',
        en: '<p>The inclination angle $\theta$ is legally bounded[cite: 11]:</p><ul><li><strong>Standard angle</strong>: Typically <strong>30°</strong>, providing optimum ergonomic balance and passenger security[cite: 11];</li><li><strong>35° Steep angle</strong>: Permitted <strong>ONLY IF vertical rise is &lt; 6 m AND rated speed does not exceed 0.5 m/s</strong>, primarily to save commercial retail floor space[cite: 11].</li></ul>'
      },
      {
        title: 'Theoretical Handling Capacity Equations / 輸送能力計算公式',
        zh: '<p>扶梯輸送能力可由以下兩式計算[cite: 11]：</p><div class="formula-block">N = \frac{3600 \cdot P \cdot V \cdot \cos\theta}{L} \quad (\text{人/小時}) \quad \text{或} \quad C_e = 60 \cdot V \cdot k \cdot s \quad (\text{人/分鐘})</div><p>其中 $P$ 為每級梯級人數；$V$ 為梯級沿傾斜方向速度 ($m/s$)；$L$ 為梯級長度 ($m$)；$\theta$ 為傾角；$k$ 為平均密度 (人/梯級)；$s$ 為每米長度的梯級數量[cite: 11]。</p>',
        en: '<p>Theoretical handling capacity is formulated as[cite: 11]:</p><div class="formula-block">N = \frac{3600 \cdot P \cdot V \cdot \cos\theta}{L} \quad (\text{persons/hour}) \quad \text{or} \quad C_e = 60 \cdot V \cdot k \cdot s \quad (\text{persons/minute})</div><p>where $P$ is persons per step, $V$ is rated speed, $L$ is step length, and $\theta$ is incline angle[cite: 11].</p>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Passenger Conveyors & Barrier-Free Facilities',
    titleZh: '自動人行道（動態步道）與無障礙通道設計',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Passenger Conveyor / Travelator (自動人行道)</text>
        <path d="M 40 100 L 300 100" stroke="#f1c40f" stroke-width="8" class="flow-cable"/>
        <circle cx="50" cy="100" r="10" fill="#34495e"/>
        <circle cx="290" cy="100" r="10" fill="#34495e"/>
        <text x="170" y="90" text-anchor="middle" font-size="10" fill="#f1c40f" font-weight="bold">Horizontal or Sloped Belt</text>
        <rect x="20" y="125" width="300" height="120" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="148" text-anchor="middle" font-size="10.5" fill="#abebc6" font-weight="bold">Design Thresholds (Slide 29):</text>
        <text x="25" y="170" font-size="9" fill="#ecf0f1">• Practical distance limit: <strong>approx. 300 m</strong></text>
        <text x="25" y="190" font-size="9" fill="#ecf0f1">• Maximum incline angle: <strong>up to 15°</strong></text>
        <text x="25" y="210" font-size="9" fill="#ecf0f1">• Speed: <strong>0.6 to 1.3 m/s</strong> (combined walking pace ~2.5 m/s)</text>
        <text x="25" y="230" font-size="8.5" fill="#bdc3c7">• Materials: Reinforced rubber belts or interlocking grooved metal pallets</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Barrier-Free Accessible Access (無障礙設計)</text>
        <rect x="40" y="45" width="260" height="60" fill="#1a252f" stroke="#3498db" rx="4"/>
        <circle cx="80" cy="75" r="14" fill="#16a085"/>
        <text x="80" y="79" text-anchor="middle" font-size="11" fill="#fff">♿</text>
        <text x="180" y="70" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Wheelchair &amp; Disabled</text>
        <text x="180" y="88" text-anchor="middle" font-size="8.5" fill="#5dade2">Access Requirements</text>
        <rect x="20" y="125" width="300" height="120" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="148" text-anchor="middle" font-size="10.5" fill="#5dade2" font-weight="bold">Statutory Accessibility Features (Slide 25):</text>
        <text x="25" y="170" font-size="9" fill="#ecf0f1">• Stairs: High-contrast nosing at step edges</text>
        <text x="25" y="190" font-size="9" fill="#ecf0f1">• Ramps: Maximum gradient &amp; min clearance width</text>
        <text x="25" y="210" font-size="9" fill="#ecf0f1">• Lifts: 1500 mm turning circle for wheelchair</text>
        <text x="25" y="230" font-size="8.5" fill="#f1c40f">• Stair lifts / inclined platform lifts for train stations</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Passenger conveyors (travelators: ≤300 m, ≤15°, 0.6–1.3 m/s) and barrier-free universal accessibility provisions',
    sections: [
      {
        title: 'Passenger Conveyor (Travelator) Engineering / 自動人行道技術參數',
        zh: '<p><strong>自動人行道 (Passenger conveyor / Travelator / Moving walkway)</strong> 用於大型機場航站樓或長途行人隧道[cite: 11]：</p><ul><li><strong>極限長度</strong>：實用單段長度上限約為 <strong>300 米 (approx. 300 m)</strong>[cite: 11]；</li><li><strong>最大傾角</strong>：可水平佈置，或最大傾斜達 <strong>15°</strong>[cite: 11]；</li><li><strong>輸送速度</strong>：皮帶速度在 <strong>0.6 至 1.3 m/s</strong> 之間；乘客在扶梯上行走時，合成前進速度可達 <strong>2.5 m/s</strong>[cite: 11]；</li><li><strong>踏面材質</strong>：採用高強度夾鋼橡膠帶或互鎖溝槽金屬踏板[cite: 11]。</li></ul>',
        en: '<p><strong>Passenger conveyors (travelators)</strong> serve high-throughput horizontal/sloped transit corridors[cite: 11]:</p><ul><li><strong>Practical length</strong>: Limited to approximately <strong>300 m per segment</strong>[cite: 11];</li><li><strong>Maximum inclination</strong>: Horizontal or sloped up to <strong>15°</strong>[cite: 11];</li><li><strong>Speed</strong>: Belt speeds range from <strong>0.6 to 1.3 m/s</strong> (delivering a combined walking pace of ~<strong>2.5 m/s</strong>)[cite: 11];</li><li><strong>Materials</strong>: Reinforced vulcanized rubber belts or grooved aluminum/steel pallets[cite: 11].</li></ul>'
      },
      {
        title: 'Barrier-Free Design / 無障礙通行設施',
        zh: '<p>建築物必須提供無障礙通道 (Barrier-free access)：樓梯踏步邊緣設防滑鮮明色彩對比、坡道設最大坡度與防護欄杆、升降機內部預留輪椅迴轉空間與低位盲文按鈕，以及在港鐵等站點增設輪椅升降台 (Stair lifts)[cite: 11]。</p>',
        en: '<p>Universal accessibility mandates color contrast on stair nosings, regulated ramp gradients, wheelchair maneuvering envelopes inside lift cars, and platform stair lifts[cite: 11].</p>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Human Factors: Occupancy Ellipse & Crowd Density',
    titleZh: '人體人體工學：佔位橢圓、緩衝區與擁擠度分級',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <!-- Left: Occupancy Ellipse -->
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">Occupancy Ellipse &amp; Buffer Zones (人體佔位橢圓)</text>
        <!-- Ellipse Drawing -->
        <ellipse cx="170" cy="90" rx="90" ry="50" fill="#1a252f" stroke="#f1c40f" stroke-width="2.5"/>
        <text x="170" y="85" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Male Subject Ellipse</text>
        <text x="170" y="103" text-anchor="middle" font-size="10" fill="#f1c40f" font-family="Consolas">600 mm × 450 mm = 0.21 m²</text>
        <!-- Dimension lines -->
        <line x1="80" y1="145" x2="260" y2="145" stroke="#ecf0f1" stroke-width="1.5"/>
        <text x="170" y="157" text-anchor="middle" font-size="8.5" fill="#ecf0f1">Shoulder Width: 600 mm</text>
        <line x1="275" y1="40" x2="275" y2="140" stroke="#ecf0f1" stroke-width="1.5"/>
        <text x="305" y="95" font-size="8.5" fill="#ecf0f1">Depth: 450 mm</text>
        <rect x="15" y="165" width="310" height="85" fill="#111" stroke="#3498db" rx="4"/>
        <text x="160" y="185" text-anchor="middle" font-size="9.5" fill="#5dade2" font-weight="bold">Personal Space Buffer Zone (Slide 12):</text>
        <text x="25" y="205" font-size="9" fill="#ecf0f1">• Female buffer: <strong>0.5 m²</strong> (0.8 m diameter circle)</text>
        <text x="25" y="225" font-size="9" fill="#ecf0f1">• Male buffer: <strong>0.8 m²</strong> (1.0 m diameter circle)</text>
        <text x="25" y="240" font-size="8" fill="#bdc3c7">Analogous to the defensive protective envelope of an open umbrella.</text>
      </g>
      <!-- Right: Density of Occupation & Interpersonal Distances -->
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#f39c12" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Density &amp; Interpersonal Distances (密度與人際距離)</text>
        <g transform="translate(15, 45)">
          <rect x="0" y="0" width="310" height="95" fill="#111" stroke="#2ecc71" rx="3"/>
          <text x="155" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#2ecc71">Density of Occupation (Slide 13):</text>
          <text x="15" y="36" font-size="8.5" fill="#fff">• Desirable: <strong>0.4 person/m²</strong> (comfortable spacing)</text>
          <text x="15" y="52" font-size="8.5" fill="#fff">• Comfortable: <strong>1.0 person/m²</strong> | Dense: <strong>2.0 person/m²</strong></text>
          <text x="15" y="68" font-size="8.5" fill="#f1c40f">• 'Crowding': <strong>3.0 person/m²</strong></text>
          <text x="15" y="84" font-size="8.5" fill="#e74c3c">• Severely Crowded: <strong>4.0 person/m²</strong> (Crush limit)</text>
        </g>
        <g transform="translate(15, 150)">
          <rect x="0" y="0" width="310" height="95" fill="#111" stroke="#f39c12" rx="3"/>
          <text x="155" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#f39c12">Hall's Interpersonal Distances (Slide 14):</text>
          <text x="15" y="36" font-size="8.5" fill="#ecf0f1">• Public distance: &gt; 7.5 m (far); 3.6 – 7.5 m (near)</text>
          <text x="15" y="52" font-size="8.5" fill="#ecf0f1">• Social distance: 2.1 – 3.6 m (far); 1.2 – 2.1 m (near)</text>
          <text x="15" y="68" font-size="8.5" fill="#ecf0f1">• Personal distance: 0.75 – 1.2 m (far); 0.45 – 0.75 m (near)</text>
          <text x="15" y="84" font-size="8.5" fill="#f5b7b1">• Intimate distance: &lt; 0.45 m (lift car squeeze condition)</text>
        </g>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: Human ergonomics: Occupancy ellipse (600×450 mm = 0.21 m²), density thresholds (0.4–4.0 p/m²), and interpersonal distance zones',
    sections: [
      {
        title: 'Occupancy Ellipse & Buffer Zones / 人體佔位橢圓與心理緩衝區',
        zh: '<p>客梯轎廂容積與人流通道寬度計算基於人體體積幾何學[cite: 11]：</p><ul><li><strong>男性佔位橢圓 (Occupancy ellipse)</strong>：肩寬 <strong>600 mm</strong>，身厚 <strong>450 mm</strong>，佔地投影面積為 <strong>0.21 m²</strong>[cite: 11]；</li><li><strong>個人心理緩衝空間 (Personal space buffer)</strong>：女性平均需要 <strong>0.5 m²</strong>（約 0.8 m 直徑圓）；男性平均需要 <strong>0.8 m²</strong>（約 1.0 m 直徑圓，相當於一把雨傘撐開的防衛半徑）[cite: 11]。</li></ul>',
        en: '<p>Lift car capacity planning uses standardized human spatial metrics[cite: 11]:</p><ul><li><strong>Occupancy ellipse</strong>: Dimensions of <strong>600 mm width by 450 mm depth</strong>, yielding an area of <strong>0.21 m²</strong> per person[cite: 11];</li><li><strong>Personal space buffer zone</strong>: Females require ~<strong>0.5 m²</strong> (0.8 m diameter envelope); males require ~<strong>0.8 m²</strong> (1.0 m diameter envelope)[cite: 11].</li></ul>'
      },
      {
        title: 'Density & Interpersonal Distances / 人員密度與霍爾人際距離',
        zh: '<ul><li><strong>佔用密度分級</strong>：理想期望值 $0.4\text{ 人/m}^2$；舒適值 $1.0\text{ 人/m}^2$；密集值 $2.0\text{ 人/m}^2$；擁擠 $3.0\text{ 人/m}^2$；極端擁擠 $4.0\text{ 人/m}^2$[cite: 11]；</li><li><strong>霍爾人際距離 (Hall's distances)</strong>：公眾距離 ($>3.6\text{ m}$)、社交距離 ($1.2\text{–}3.6\text{ m}$)、個人距離 ($0.45\text{–}1.2\text{ m}$)、親密距離 ($<0.45\text{ m}$)[cite: 11]。電梯滿載（80%–100%）時強迫乘客進入親密距離，需藉助心理迴避（抬頭看樓層指示）緩解壓迫感[cite: 11]。</li></ul>',
        en: '<ul><li><strong>Density scale</strong>: Desirable ($0.4\text{ p/m}^2$), Comfortable ($1.0\text{ p/m}^2$), Dense ($2.0\text{ p/m}^2$), Crowding ($3.0\text{ p/m}^2$), and Crowded ($4.0\text{ p/m}^2$)[cite: 11];</li><li><strong>Hall\'s distances</strong>: Public ($>3.6\text{ m}$), Social ($1.2\text{–}3.6\text{ m}$), Personal ($0.45\text{–}1.2\text{ m}$), and Intimate ($<0.45\text{ m}$, experienced inside crowded lifts)[cite: 11].</li></ul>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Firefighting Lifts & Protected Smoke-Free Lobbies',
    titleZh: '消防升降機、1 小時防火門與專用防煙前廳',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Protected Firefighting Lift Lobby Architecture (CIBSE Guide D 消防電梯專用前廳)</text>
        <g transform="translate(60, 45)">
          <!-- Protected Lobby Envelope -->
          <rect x="0" y="0" width="360" height="135" fill="#1a252f" stroke="#e74c3c" stroke-width="2.5" rx="4"/>
          <text x="180" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#f5b7b1">Firefighting Lift Lobby (消防電梯專用前廳)</text>
          <text x="180" y="52" text-anchor="middle" font-size="9" fill="#f1c40f">SHALL BE KEPT ENTIRELY FREE OF SMOKE!</text>
          <!-- Passenger lifts & Firefighting lift -->
          <rect x="20" y="70" width="70" height="55" fill="#1b4f72" stroke="#3498db"/>
          <text x="55" y="100" text-anchor="middle" font-size="8" fill="#fff">Passenger</text>
          <rect x="100" y="70" width="70" height="55" fill="#1b4f72" stroke="#3498db"/>
          <text x="135" y="100" text-anchor="middle" font-size="8" fill="#fff">Passenger</text>
          <rect x="190" y="70" width="80" height="55" fill="#78281f" stroke="#e74c3c" stroke-width="2"/>
          <text x="230" y="95" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Firefighting</text>
          <text x="230" y="108" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Lift Car</text>
          <!-- Protected Staircase -->
          <rect x="290" y="70" width="60" height="55" fill="#2c3e50" stroke="#2ecc71"/>
          <text x="320" y="95" text-anchor="middle" font-size="7.5" fill="#2ecc71">Escape</text>
          <text x="320" y="108" text-anchor="middle" font-size="7.5" fill="#2ecc71">Staircase</text>
          <!-- Self-closing 1-hour fire doors -->
          <line x1="30" y1="0" x2="70" y2="0" stroke="#e74c3c" stroke-width="4"/>
          <text x="50" y="-8" text-anchor="middle" font-size="8" fill="#e74c3c">1-Hour Fire Door</text>
          <line x1="280" y1="0" x2="320" y2="0" stroke="#e74c3c" stroke-width="4"/>
          <text x="300" y="-8" text-anchor="middle" font-size="8" fill="#e74c3c">Self-Closing Door</text>
        </g>
        <!-- Regulatory Specifications Card -->
        <g transform="translate(440, 45)">
          <rect x="0" y="0" width="235" height="135" fill="#111" stroke="#e74c3c" rx="4"/>
          <text x="117" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#f5b7b1">Statutory Safety Requirements:</text>
          <text x="12" y="42" font-size="8.5" fill="#fff">• <strong>1-hour fire rated</strong> self-closing doors</text>
          <text x="12" y="60" font-size="8.5" fill="#fff">• Positive pressure smoke-free lobby</text>
          <text x="12" y="78" font-size="8.5" fill="#fff">• Direct access to protected escape stair</text>
          <text x="12" y="96" font-size="8.5" fill="#fff">• Emergency backup power supply</text>
          <text x="12" y="114" font-size="8.5" fill="#f1c40f">• Dual-switch firemen control override</text>
          <text x="12" y="128" font-size="8" fill="#bdc3c7">Dedicated for rescue &amp; firefighting ops.</text>
        </g>
        <rect x="35" y="195" width="630" height="50" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="10.5" fill="#fff">Firefighting lifts must deliver firefighters directly to fire floors without contamination by smoke or flame.</text>
        <text x="350" y="235" text-anchor="middle" font-size="9.5" fill="#f1c40f">Building Ordinance strictly segregates passenger circulation from emergency firefighting egress routes.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Architectural plan of a protected firefighting lift lobby: Smoke-free enclosure, 1-hour rated self-closing fire doors, dedicated firefighting elevator, and direct escape staircase access',
    sections: [
      {
        title: 'Firefighting Lift Lobby Architecture / 消防升降機專用前廳設計',
        zh: '<p>根據香港及國際消防條例（CIBSE Guide D），高層建築必須設有<strong>受保護的消防升降機專用前廳 (Firefighting lift lobby)</strong>[cite: 11]：</p><ol><li><strong>前廳防煙要求</strong>：前廳必須保持<strong>完全無煙環境 (shall be free of smoke)</strong>，通常由機械加壓防煙系統提供正壓[cite: 11]；</li><li><strong>防火門標準</strong>：前廳所有連通通道均需安裝<strong>至少 1 小時耐火等級 (one-hour rated) 的自動閉門器防火門 (Self-closing fire doors)</strong>[cite: 11]；</li><li><strong>逃生樓梯整合</strong>：消防前廳必須直接緊鄰<strong>防煙逃生樓梯間 (Escape staircase)</strong>，供消防員部署水帶展開滅火搜救[cite: 11]。</li></ol>',
        en: '<p>High-rise buildings mandate a <strong>protected firefighting lift lobby</strong>[cite: 11]:</p><ol><li><strong>Smoke control</strong>: The lobby <strong>must be maintained completely free of smoke</strong>, usually via mechanical pressurization[cite: 11];</li><li><strong>Fire resistance</strong>: Protected by <strong>one-hour fire rated, self-closing doors</strong>[cite: 11];</li><li><strong>Escape stair integration</strong>: Must provide direct connection to a protected escape staircase for firefighting operations[cite: 11].</li></ol>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Commercial Office Traffic Patterns: 4 Daily Peaks',
    titleZh: '商業寫字樓四大客流模式與交通特徵',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Typical 24-Hour Office Building Lift Traffic Profiles (CIBSE Guide D 寫字樓客流模式)</text>
        <!-- Time Axis 08:00 to 18:00 -->
        <line x1="70" y1="130" x2="650" y2="130" stroke="#ecf0f1" stroke-width="2"/>
        <text x="655" y="135" font-size="9" fill="#ecf0f1">Time</text>
        <text x="90" y="145" font-size="8" fill="#bdc3c7">08:00</text>
        <text x="210" y="145" font-size="8" fill="#bdc3c7">10:00</text>
        <text x="330" y="145" font-size="8" fill="#bdc3c7">12:00</text>
        <text x="450" y="145" font-size="8" fill="#bdc3c7">14:00</text>
        <text x="570" y="145" font-size="8" fill="#bdc3c7">17:00</text>
        <text x="630" y="145" font-size="8" fill="#bdc3c7">18:00</text>
        <!-- UP Traffic (Top Half) -->
        <path d="M 90 130 Q 110 40 120 40 Q 130 40 150 130 T 250 115 T 350 130 T 380 75 T 410 130 T 570 130 T 630 130" fill="none" stroke="#2ecc71" stroke-width="3"/>
        <text x="120" y="32" text-anchor="middle" font-size="9.5" fill="#2ecc71" font-weight="bold">Morning Up Peak (08:30–09:00, ~15%)</text>
        <text x="380" y="65" font-size="8.5" fill="#2ecc71">Lunch In (13:00)</text>
        <text x="40" y="80" font-size="9" fill="#2ecc71" font-weight="bold">UP (%)</text>
        <!-- DOWN Traffic (Bottom Half) -->
        <path d="M 90 130 T 250 130 T 320 185 T 350 130 T 570 130 Q 590 225 600 225 Q 610 225 630 130" fill="none" stroke="#e74c3c" stroke-width="3"/>
        <text x="600" y="240" text-anchor="middle" font-size="9.5" fill="#e74c3c" font-weight="bold">Evening Down Peak (17:30–18:30, ~25%)</text>
        <text x="320" y="200" font-size="8.5" fill="#e74c3c">Lunch Out (12:00)</text>
        <text x="40" y="180" font-size="9" fill="#e74c3c" font-weight="bold">DOWN (%)</text>
        <!-- Callout box -->
        <rect x="230" y="160" width="240" height="40" fill="#111" stroke="#f1c40f" rx="3"/>
        <text x="350" y="178" text-anchor="middle" font-size="9" fill="#f1c40f" font-weight="bold">Lunch Time: Two-Way Traffic Peak</text>
        <text x="350" y="192" text-anchor="middle" font-size="8" fill="#ecf0f1">Simultaneous up, down &amp; interfloor circulation</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Daily lift passenger flow patterns in a commercial office: Sharp Morning UP Peak (sizing benchmark), Two-way Lunch flow, and intense Evening DOWN Peak',
    sections: [
      {
        title: 'Four Core Daily Traffic Patterns / 四大典型客流模式',
        zh: '<p>商業辦公樓的電梯人流隨作息時間呈現四大鮮明特徵[cite: 11]：</p><ol><li><strong>早晨上行高峰 (Morning UP Peak)</strong>：早上 8:30–9:00 大量員工進樓，人流由大堂單向湧向各樓層（傳統工程計算以此最惡劣 5 分鐘為設計基準）[cite: 11]；</li><li><strong>晚上下行高峰 (Evening DOWN Peak)</strong>：下午 5:30–6:30 集中下班，人流由各樓層單向湧向地面大堂，人流峰值往往高於早高峰[cite: 11]；</li><li><strong>午餐雙向高峰 (Two-Way Traffic / Lunch periods)</strong>：中午 12:00–14:00 外出用餐與返回，同時存在劇烈的上行與下行客流[cite: 11]；</li><li><strong>層間交通 (Interfloor traffic)</strong>：會議或辦公跨樓層走動，全天平緩分佈[cite: 11]。彈性工時 (Flexitime) 可削平高峰銳度[cite: 11]。</li></ol>',
        en: '<p>Commercial office passenger dynamics exhibit four daily profiles[cite: 11]:</p><ol><li><strong>Morning UP peak</strong>: Monodirectional traffic from main lobby upward to tenant floors (governing classical sizing design basis)[cite: 11];</li><li><strong>Evening DOWN peak</strong>: Monodirectional surge from floors downward to ground exit lobby[cite: 11];</li><li><strong>Lunch periods (Two-way)</strong>: Simultaneous heavy upward and downward movements[cite: 11];</li><li><strong>Interfloor traffic</strong>: Movements between floors distributed across business hours[cite: 11].</li></ol>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Building Population Estimation & Up-Peak Criteria',
    titleZh: '建築人口密度估算（CIBSE Guide D）與高峰到達率',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Population Density Benchmarks &amp; Arrival Rates (CIBSE Guide D 建築人口與到達率)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="310" height="115" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="155" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#5dade2">Population Density Norms (Slide 33):</text>
          <text x="15" y="38" font-size="8.5" fill="#fff">• Hotel: <strong>1.5 – 1.9 persons / room</strong></text>
          <text x="15" y="54" font-size="8.5" fill="#fff">• Residential Flats: <strong>1.5 – 1.9 persons / bedroom</strong></text>
          <text x="15" y="70" font-size="8.5" fill="#fff">• Hospital: <strong>3.0 persons / bedspace</strong> (excl. patients)</text>
          <text x="15" y="86" font-size="8.5" fill="#fff">• Multi-Tenant Office (Regular): <strong>10 – 12 m² net / person</strong></text>
          <text x="15" y="102" font-size="8.5" fill="#fff">• Multi-Tenant Office (Prestige): <strong>15 – 18 m² net / person</strong></text>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="115" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <text x="155" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#abebc6">5-min Up-Peak Arrival Rates &amp; Intervals:</text>
          <text x="15" y="38" font-size="8.5" fill="#fff">• Hotel: Arrival <strong>10–15%</strong> | Interval <strong>30–50 s</strong></text>
          <text x="15" y="54" font-size="8.5" fill="#fff">• Flats: Arrival <strong>5–7%</strong> | Interval <strong>40–90 s</strong></text>
          <text x="15" y="70" font-size="8.5" fill="#fff">• School: Arrival <strong>15–25%</strong> | Interval <strong>30–50 s</strong></text>
          <text x="15" y="86" font-size="8.5" fill="#f1c40f">• Office (Regular): Arrival <strong>11–15%</strong> | Interval <strong>25–30 s</strong></text>
          <text x="15" y="102" font-size="8.5" fill="#2ecc71">• Office (Prestige): Arrival <strong>15–17%</strong> | Interval <strong>20–25 s</strong></text>
        </g>
        <rect x="30" y="170" width="640" height="75" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="350" y="192" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Hong Kong High-Density Factor (Slide 33 註解):</text>
        <text x="350" y="212" text-anchor="middle" font-size="10" fill="#f1c40f">Buildings in Hong Kong often possess higher population density. Design population must be increased by 10% to 20%!</text>
        <text x="350" y="230" text-anchor="middle" font-size="9" fill="#bdc3c7">5-minute handling capacity UPPHC must strictly match or exceed total 5-minute passenger arrival demand.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: CIBSE Guide D population density metrics, 5-minute up-peak arrival rates, target intervals, and the Hong Kong +10% to 20% population density uplift',
    sections: [
      {
        title: 'Building Population Benchmarks / 建築物人口估算標準',
        zh: '<p>電梯交通設計首要確定建築設計人口[cite: 11]：</p><ul><li><strong>酒店 (Hotel)</strong>：每客房 <strong>1.5–1.9 人</strong>[cite: 11]；</li><li><strong>住宅 (Flats)</strong>：每睡房 <strong>1.5–1.9 人</strong>[cite: 11]；</li><li><strong>醫院 (Hospital)</strong>：每床位 <strong>3.0 人</strong>（不包含住院病人本身）[cite: 11]；</li><li><strong>出租寫字樓 (Multi-tenancy office)</strong>：普通級別 <strong>10–12 m²/人</strong>；甲級超豪寫字樓 <strong>15–18 m²/人</strong>[cite: 11]；</li><li><strong>單一業主寫字樓 (Single tenancy)</strong>：普通 8–10 m²/人；超豪 12–20 m²/人[cite: 11]。</li></ul><div class="key-point"><strong>香港高密度修正因數（Slide 33）：</strong> 香港物業人口密度通常遠高於歐美，<strong>計算人口時必須在此基礎上額外上調 10% 至 20% (increase by 10–20%)</strong>[cite: 11]！</div>',
        en: '<p>CIBSE population planning standards[cite: 11]:</p><ul><li><strong>Hotels / Residential</strong>: 1.5–1.9 persons per room/bedroom[cite: 11];</li><li><strong>Hospitals</strong>: 3.0 persons per bedspace (excluding patients)[cite: 11];</li><li><strong>Multi-tenant offices</strong>: Regular 10–12 m²/person; Prestige 15–18 m²/person[cite: 11].</li></ul><div class="key-point"><strong>Hong Kong Density Factor (Slide 33):</strong> Buildings in Hong Kong have higher population density; <strong>design population must be scaled up by 10% to 20%</strong>[cite: 11]!</div>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Classical Up-Peak Round Trip Time (RTT) Model',
    titleZh: '經典上行高峰往返時間（RTT）公式與特快跳層',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Classical Up-Peak Round Trip Time (RTT) Mathematical Breakdown (往返時間 RTT 方程)</text>
        <rect x="30" y="48" width="640" height="55" fill="#1a252f" stroke="#f1c40f" rx="4"/>
        <text x="350" y="82" text-anchor="middle" font-size="16" fill="#f1c40f" font-family="Consolas" font-weight="bold">RTT = 2 · H · tv + (S + 1) · ts + 2 · P · tp + [ 2 · He · tv ]</text>
        <g transform="translate(30, 115)">
          <rect x="0" y="0" width="205" height="120" fill="#111" stroke="#3498db" rx="4"/>
          <text x="102" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#5dade2">1. Kinematic Flight Time</text>
          <text x="12" y="40" font-size="9" fill="#fff">• <strong>2 · H · tv</strong>: Express transit</text>
          <text x="12" y="58" font-size="9" fill="#fff">• H = Highest reversal floor</text>
          <text x="12" y="76" font-size="9" fill="#fff">• tv = df / v (floor transit time)</text>
          <text x="12" y="94" font-size="9" fill="#fff">• df = floor height (m)</text>
          <text x="12" y="110" font-size="8.5" fill="#f1c40f">• v = rated speed (m/s)</text>

          <rect x="215" y="0" width="210" height="120" fill="#111" stroke="#2ecc71" rx="4"/>
          <text x="105" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#abebc6">2. Stopping Time Penalty</text>
          <text x="12" y="40" font-size="9" fill="#fff">• <strong>(S + 1) · ts</strong>: Stop loss time</text>
          <text x="12" y="58" font-size="9" fill="#fff">• S = Expected stops count</text>
          <text x="12" y="76" font-size="9" fill="#fff">• +1 represents terminal stop</text>
          <text x="12" y="94" font-size="8.5" fill="#ecf0f1">• ts = T - tv = tf(1)+tc+to - tv</text>
          <text x="12" y="110" font-size="8.5" fill="#abebc6">• T = floor cycle time (9-10s)</text>

          <rect x="435" y="0" width="205" height="120" fill="#111" stroke="#e74c3c" rx="4"/>
          <text x="102" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#f5b7b1">3. Passenger Transfer</text>
          <text x="12" y="40" font-size="9" fill="#fff">• <strong>2 · P · tp</strong>: Board &amp; alight</text>
          <text x="12" y="58" font-size="9" fill="#fff">• P = 0.8 × Rated Capacity</text>
          <text x="12" y="76" font-size="9" fill="#fff">• tp = transfer time (~1.2s)</text>
          <text x="12" y="94" font-size="8.5" fill="#f1c40f">• <strong>[2 · He · tv]</strong>: Express jump</text>
          <text x="12" y="110" font-size="8" fill="#bdc3c7">He = non-stop floors passed</text>
        </g>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Classical up-peak Round Trip Time (RTT) mathematical formulation showing kinematic flight time, stopping penalties, passenger boarding, and express zone jumps',
    sections: [
      {
        title: 'Classical Up-Peak RTT Formulation / 往返時間基本方程',
        zh: '<p><strong>往返時間 (Round Trip Time, RTT)</strong> 係單台升降機完成一個完整循環所需的時間總和[cite: 11]：</p><div class="formula-block">RTT = 2 H t_v + (S + 1) t_s + 2 P t_p + [ 2 H_e t_v ]</div><ul><li><strong>$2 H t_v$</strong>：轎廂全速往返至最高呼梯反向樓層 $H$ 的純運動時間[cite: 11]；</li><li><strong>$(S + 1) t_s$</strong>：停站損失時間，包括 $S$ 次樓層停站與 1 次大堂基準停站[cite: 11]；</li><li><strong>$2 P t_p$</strong>：$P$ 名乘客在大堂進梯與在各樓層出梯的總傳送耗時[cite: 11]；</li><li><strong>$[2 H_e t_v]$</strong>：服務高區時直通穿過低區不設站盲區（$H_e$ 層）的特快跳層耗時[cite: 11]。</li></ul>',
        en: '<p><strong>Round Trip Time (RTT)</strong> for a single lift during the worst 5-minute up-peak[cite: 11]:</p><div class="formula-block">RTT = 2 H t_v + (S + 1) t_s + 2 P t_p + [ 2 H_e t_v ]</div><p>Sum of full-speed kinematic transit ($2 H t_v$), acceleration/deceleration/door stopping losses ($(S+1) t_s$), passenger transfer ($2 P t_p$), and express zone jump ($2 H_e t_v$)[cite: 11].</p>'
      },
      {
        title: 'Interval (UPPINT) & Handling Capacity (UPPHC) / 間隔與輸送能力',
        zh: '<div class="formula-block">UPPINT = \frac{RTT}{L} \quad (\text{秒}) \quad \Big| \quad UPPHC = \frac{300 \cdot L \cdot P}{RTT} \quad (\text{5分鐘輸送人數})</div><p>其中 $L$ 為同組電梯數量；$P$ 為平均載客數（取 <strong>$0.8 \times$ 額定額定載重量</strong>）[cite: 11]。</p>',
        en: '<div class="formula-block">UPPINT = \frac{RTT}{L} \quad (\text{seconds}) \quad \Big| \quad UPPHC = \frac{300 \cdot L \cdot P}{RTT} \quad (\text{passengers in 5 min})</div><p>where $L$ is lift count, and $P = 0.8 \times \text{rated capacity}$[cite: 11].</p>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Statistical Probability of Stops (S) & Reversal (H)',
    titleZh: '預期停站數（S）與最高反向樓層（H）概率方程',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Probabilistic Formulas for Expected Stops S &amp; Highest Reversal H (CIBSE 統計停站與反向層)</text>
        <!-- Formula S -->
        <g transform="translate(30, 48)">
          <rect x="0" y="0" width="310" height="95" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Average Number of Stops (S)</text>
          <text x="155" y="55" text-anchor="middle" font-size="15" fill="#f1c40f" font-family="Consolas" font-weight="bold">S = N · [ 1 - (1 - 1/N)^P ]</text>
          <text x="155" y="80" text-anchor="middle" font-size="9" fill="#ecf0f1">N = Number of served floors above terminal</text>
        </g>
        <!-- Formula H -->
        <g transform="translate(360, 48)">
          <rect x="0" y="0" width="310" height="95" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">Highest Call Reversal Floor (H)</text>
          <text x="155" y="55" text-anchor="middle" font-size="15" fill="#f1c40f" font-family="Consolas" font-weight="bold">H = N - Σ (i / N)^P</text>
          <text x="155" y="80" text-anchor="middle" font-size="9" fill="#ecf0f1">Summation of (i/N)^P from i=1 to N-1</text>
        </g>
        <!-- Underlying Assumptions -->
        <rect x="30" y="155" width="640" height="90" fill="#111" stroke="#f39c12" rx="4"/>
        <text x="350" y="175" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Six Classical Mathematical Assumptions (Slide 44):</text>
        <text x="40" y="195" font-size="9" fill="#ecf0f1">1. Passenger arrivals are completely uniform in time.</text>
        <text x="40" y="210" font-size="9" fill="#ecf0f1">2. All upper floors are equally populated with equal destination probability.</text>
        <text x="40" y="225" font-size="9" fill="#2ecc71">3. All cars load to exactly 80% contract capacity (P = 0.8 · rated capacity).</text>
        <text x="40" y="238" font-size="8.5" fill="#bdc3c7">4. Interfloor heights are equal; rated speed v is reached in a single floor jump; ideal controller.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Probabilistic equations for expected stops S and highest reversal floor H, alongside the six classical CIBSE up-peak traffic assumptions',
    sections: [
      {
        title: 'Probabilistic Formulas for S and H / 預期停站與反向樓層概率推導',
        zh: '<p>在給定服務樓層數 $N$ 及平均載客人數 $P$ 的條件下，假定各樓層人口均勻分佈[cite: 11]：</p><ul><li><strong>預期停站數 (Average stops, $S$)</strong>：單個乘客不前往某特定樓層的概率為 $(1 - 1/N)$；$P$ 名乘客均不前往該層的概率為 $(1 - 1/N)^P$；故該層有乘客停靠的概率為 $1 - (1 - 1/N)^P$[cite: 11]。乘以總樓層數得：<div class="formula-block">S = N \left[ 1 - \left( 1 - \frac{1}{N} \right)^P \right]</div>[cite: 11]</li><li><strong>最高反向樓層 (Highest reversal, $H$)</strong>：<div class="formula-block">H = N - \sum_{i=1}^{N-1} \left( \frac{i}{N} \right)^P</div>[cite: 11]</li></ul>',
        en: '<p>Assuming uniform destination distribution among $N$ served floors and $P$ passengers[cite: 11]:</p><div class="formula-block">S = N \left[ 1 - \left( 1 - \frac{1}{N} \right)^P \right], \quad H = N - \sum_{i=1}^{N-1} \left( \frac{i}{N} \right)^P</div>'
      },
      {
        title: 'Six Classical Assumptions / 經典分析六大理論假設',
        zh: '<ol><li>乘客在地面大堂均勻到達[cite: 11]；</li><li>所有樓層人口完全相等[cite: 11]；</li><li><strong>所有轎廂統一裝載至 80% 額定容量 ($P = 0.8 \times \text{Capacity}$)</strong>[cite: 11]；</li><li>單層跳躍即可加速至額定合約速度 $v$[cite: 11]；</li><li>忽略開門滯留時間 (dwell time)[cite: 11]；</li><li>群控調度器為理想狀態[cite: 11]。</li></ol>',
        en: '<ol><li>Passengers arrive uniformly in time[cite: 11];</li><li>All upper floors are equally populated[cite: 11];</li><li><strong>Cars load to 80% contract capacity ($P = 0.8 \times \text{rated}$)</strong>[cite: 11];</li><li>Rated contract speed is reached in a single floor jump[cite: 11];</li><li>Dwell time is ignored[cite: 11];</li><li>The traffic controller is "ideal"[cite: 11].</li></ol>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Floor Cycle Time, Service Quality & Simulation Tools',
    titleZh: '樓層循環時間（T）、等候間隔評級與電腦模擬',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Floor Cycle Time T &amp; Service Quality Benchmarks (樓層循環時間與服務品質評級)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="310" height="105" fill="#1a252f" stroke="#f1c40f" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#f1c40f">Floor Cycle Time T &amp; Stop Loss ts</text>
          <text x="155" y="48" text-anchor="middle" font-size="13" fill="#f1c40f" font-family="Consolas">ts = T - tv = tf(1) + tc + to - tv</text>
          <text x="15" y="70" font-size="8.5" fill="#ecf0f1">• T = Floor-to-floor cycle time (<strong>T = 9 to 10 s</strong> for good system)</text>
          <text x="15" y="86" font-size="8.5" fill="#ecf0f1">• tf(1) = single floor flight time | tc = door close | to = door open</text>
          <text x="15" y="100" font-size="8" fill="#5dade2">Floor cycle time T has the single greatest sensitivity effect on RTT!</text>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="105" fill="#111" stroke="#2ecc71" rx="4"/>
          <text x="155" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#2ecc71">Up-Peak Interval Quality Scale (Slide 36):</text>
          <text x="20" y="38" font-size="8.5" fill="#fff">• ≤ 20 seconds : <strong>Excellent (卓越)</strong></text>
          <text x="20" y="54" font-size="8.5" fill="#abebc6">• 25 seconds : <strong>Very Good (優良)</strong></text>
          <text x="20" y="70" font-size="8.5" fill="#f1c40f">• 30 seconds : <strong>Good (良好基準)</strong></text>
          <text x="20" y="86" font-size="8.5" fill="#e67e22">• 40 seconds : <strong>Poor (欠佳)</strong></text>
          <text x="20" y="100" font-size="8.5" fill="#e74c3c">• ≥ 50 seconds : <strong>Unsatisfactory (不可接受)</strong></text>
        </g>
        <rect x="30" y="160" width="640" height="85" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="350" y="180" text-anchor="middle" font-size="10.5" fill="#fff"><strong>Average Waiting Time (AWT):</strong> Time from passenger arrival until car arrival. <strong>AWT ≈ 85% of Interval</strong> (at 80% car load).</text>
        <text x="350" y="200" text-anchor="middle" font-size="9.5" fill="#2ecc71">Modern Simulation Software: Dr. Gina Barney's SIMPLE suite (iterative balance method) &amp; Peters Research ELEVATE.</text>
        <text x="350" y="218" text-anchor="middle" font-size="9" fill="#bdc3c7">Simulation is mandatory for complex traffic: evening down-peak, two-way lunch peaks, and destination control (DCS).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Floor-to-floor cycle time T (9–10s), CIBSE interval grading scale (≤20s to ≥50s), AWT relationship (~85% of interval), and discrete simulation software',
    sections: [
      {
        title: 'Floor Cycle Time (T) & Stopping Loss / 樓層循環時間與停站損失',
        zh: '<p>樓層停站損失時間 $t_s$ 是影響 RTT 最顯著的敏感因素[cite: 11]：</p><div class="formula-block">t_s = T - t_v = t_f(1) + t_c + t_o - t_v</div><p>其中 $T$ 為樓層循環時間 (Floor-to-floor cycle time)，包含單層飛行時間 $t_f(1)$、關門時間 $t_c$ 及開門時間 $t_o$[cite: 11]。<strong>對於優質電梯系統，標準取 $T = 9\text{ 至 } 10\text{ 秒}$</strong>[cite: 11]。</p>',
        en: '<p>The <strong>floor-to-floor cycle time ($T$)</strong> has the most profound impact on RTT[cite: 11]:</p><div class="formula-block">t_s = T - t_v = t_f(1) + t_c + t_o - t_v</div><p>incorporating single floor flight time $t_f(1)$, door closing $t_c$, and door opening $t_o$[cite: 11]. <strong>For high-performance systems, $T = 9\text{ to } 10\text{ seconds}$</strong>[cite: 11].</p>'
      },
      {
        title: 'Service Quality Benchmarks & Software Simulation / 服務品質評級與電腦模擬',
        zh: '<ul><li><strong>主候梯間隔 (UPPINT) 評級</strong>：$\le 20\text{ s}$（卓越）；$25\text{ s}$（優良）；$30\text{ s}$（良好/普通寫字樓基準）；$40\text{ s}$（欠佳）；$\ge 50\text{ s}$（不可接受）[cite: 11]；</li><li><strong>平均候梯時間 (Average Waiting Time, AWT)</strong>：乘客從到達大堂至進入轎廂的實際等待時間，在 80% 額定裝載率假定下，<strong>$AWT \approx 85\% \times \text{UPPINT}$</strong>[cite: 11]；</li><li><strong>電腦模擬軟件</strong>：複雜非高峰工況（雙向下班高峰、午餐流動）必須藉助離散事件仿真軟件：如 Gina Barney 博士的 <strong>SIMPLE</strong> 軟件套件及 Peters Research 的 <strong>ELEVATE</strong> 軟件[cite: 11]。</li></ul>',
        en: '<ul><li><strong>Interval Quality Scale</strong>: $\le 20\text{ s}$ (Excellent), $25\text{ s}$ (Very Good), $30\text{ s}$ (Good), $40\text{ s}$ (Poor), $\ge 50\text{ s}$ (Unsatisfactory)[cite: 11];</li><li><strong>Average Waiting Time (AWT)</strong>: $AWT \approx 85\% \times \text{UPPINT}$ under standard 80% car loading[cite: 11];</li><li><strong>Simulation Tools</strong>: Down-peak and lunch traffic analysis rely on software suites like Dr. Gina Barney\'s <strong>SIMPLE</strong> and Peters Research <strong>ELEVATE</strong>[cite: 11].</li></ul>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L10a)
// ==========================================
const mcData = [
  {
    question: "What are the standard dimensions and projected area of the MALE occupancy ellipse used in lift car sizing?",
    options: [
      "400 mm by 300 mm (0.12 m²)",
      "600 mm by 450 mm (0.21 m²)",
      "800 mm by 600 mm (0.48 m²)",
      "1000 mm by 800 mm (0.80 m²)"
    ],
    answer: 1,
    explanation: "Slide 12: Physical dimensions of the male occupancy ellipse are 600 mm width by 450 mm depth, giving an area of 0.21 m².",
    lesson: "L10a"
  },
  {
    question: "Under standard escalator design, what is the TYPICAL inclination angle (θ) and the specific condition allowing a steeper 35° angle?",
    options: [
      "Typical angle 45°; 35° allowed if rise > 10 m",
      "Typical angle 30°; 35° allowed only if vertical rise < 6 m and speed ≤ 0.5 m/s",
      "Typical angle 15°; 35° allowed on all subway systems",
      "Typical angle 20°; 35° allowed only with double-width steps"
    ],
    answer: 1,
    explanation: "Slide 20: Escalator inclination is usually 30°. An angle of 35° is permitted only if the rise is less than 6 m and the speed is less than 0.5 m/s.",
    lesson: "L10a"
  },
  {
    question: "What is the PRACTICAL LENGTH LIMIT for a single segment of a passenger conveyor (travelator / moving walkway)?",
    options: ["50 m", "100 m", "300 m", "1000 m"],
    answer: 2,
    explanation: "Slide 29: The practical distance limit for passenger conveyors (travelators) is approximately 300 m.",
    lesson: "L10a"
  },
  {
    question: "In classical lift traffic analysis, the average number of passengers (P) carried per car trip during up-peak is assumed to be:",
    options: [
      "50% of rated car capacity",
      "80% of rated car capacity (P = 0.8 · capacity)",
      "100% of maximum car payload",
      "Exactly 16 passengers in all buildings"
    ],
    answer: 1,
    explanation: "Slide 40 & 44: The average number of passengers P is standardized as 0.8 × rated capacity of the lift car (80% loading).",
    lesson: "L10a"
  },
  {
    question: "According to CIBSE Guide D, why must building population estimates for developments in HONG KONG be adjusted?",
    options: [
      "Hong Kong buildings are restricted to a maximum of 10 storeys",
      "Buildings in Hong Kong often have higher population density; population should be increased by 10% to 20%",
      "Hong Kong fire regulations require counting passengers twice",
      "Hong Kong lifts only operate during the morning up-peak"
    ],
    answer: 1,
    explanation: "Slide 33: Buildings in Hong Kong often have higher population density; the number of people should be increased by 10% to 20%.",
    lesson: "L10a"
  },
  {
    question: "What is the CIBSE quality of service rating for an up-peak interval of 25 SECONDS in an office building?",
    options: ["Excellent", "Very Good", "Good", "Unsatisfactory"],
    answer: 1,
    explanation: "Slide 36: An interval of ≤ 20 s is Excellent, 25 s is Very Good, 30 s is Good, 40 s is Poor, and ≥ 50 s is Unsatisfactory.",
    lesson: "L10a"
  },
  {
    question: "How is the Average Waiting Time (AWT) related to the Up-Peak Interval (UPPINT) assuming 80% car loading?",
    options: [
      "AWT is exactly equal to UPPINT",
      "AWT ≈ 85% of the interval (AWT ≈ 0.85 · UPPINT)",
      "AWT is 10% of the interval",
      "AWT is twice the interval"
    ],
    answer: 1,
    explanation: "Slide 35: AWT is approximately 85% of the interval (assuming an 80% car loading distribution).",
    lesson: "L10a"
  },
  {
    question: "What is the typical FLOOR-TO-FLOOR CYCLE TIME (T) for a high-performance, well-designed lift system?",
    options: ["2 to 3 seconds", "5 to 6 seconds", "9 to 10 seconds", "20 to 25 seconds"],
    answer: 2,
    explanation: "Slide 42: For a good system, the floor-to-floor cycle time T is typically 9 to 10 seconds (ts = T - tv).",
    lesson: "L10a"
  },
  {
    question: "Where is the machine room IDEALLY located in an electric traction lift vs a hydraulic lift?",
    options: [
      "Traction: lowest level; Hydraulic: directly above the lift well",
      "Traction: directly above the lift well; Hydraulic: ideally at the lowest level",
      "Both must be installed in a borehole underneath the car",
      "Both must be installed inside the passenger lobby"
    ],
    answer: 1,
    explanation: "Slide 26: Machine room for electric traction lifts is directly above the lift well (unless MRL); for hydraulic lifts it is ideally at the lowest level.",
    lesson: "L10a"
  },
  {
    question: "What fire protection requirement is mandated for the doors of a PROTECTED FIREFIGHTING LIFT LOBBY (Slide 17)?",
    options: [
      "Unshielded hollow glass sliding panels",
      "One-hour fire rated, self-closing fire doors",
      "Chain-operated revolving portals",
      "Open arches with no doors permitted"
    ],
    answer: 1,
    explanation: "Slide 17: A protected firefighting lift lobby must be fitted with one-hour fire rated self-closing doors and be kept free of smoke.",
    lesson: "L10a"
  },
  {
    question: "What is the typical overall electromechanical efficiency (η) of a counterweighted electric elevator power system?",
    options: ["10%", "30%", "60%", "98%"],
    answer: 2,
    explanation: "Slide 7: Power flow through a typical elevator yields an overall electromechanical efficiency of approximately 60% (η = 60%).",
    lesson: "L10a"
  },
  {
    question: "What step widths are standardized for commercial escalators according to Lecture 10a?",
    options: [
      "300, 400 & 500 mm",
      "600, 800 & 1000 mm",
      "1200, 1500 & 1800 mm",
      "2000, 2200 & 2400 mm"
    ],
    answer: 1,
    explanation: "Slide 20: Standard escalator step widths are 600, 800, and 1000 mm (minimum tread length is 400 mm).",
    lesson: "L10a"
  },
  {
    question: "How many flat steps must be provided at the boarding and alighting transition zones of an escalator for passenger safety?",
    options: ["0.5 flat steps", "1.33 to 2.33 flat steps", "5 to 6 flat steps", "10 flat steps"],
    answer: 1,
    explanation: "Slide 20: Safe boarding and alighting requires 1.33 to 2.33 flat steps at entry and exit comb plates.",
    lesson: "L10a"
  },
  {
    question: "In the escalator handling capacity formula N = (3600 · P · V · cos θ) / L, what does 'L' represent?",
    options: [
      "Total vertical rise of the escalator (m)",
      "Length of the escalator step tread (m)",
      "Width of the handrail belt (mm)",
      "Motor gearbox gear ratio"
    ],
    answer: 1,
    explanation: "Slide 23: In N = (3600 · P · V · cos θ) / L, L represents the length of the step tread in metres.",
    lesson: "L10a"
  },
  {
    question: "What is the MAXIMUM permissible inclination angle for a passenger conveyor (travelator)?",
    options: ["5°", "15°", "30°", "45°"],
    answer: 1,
    explanation: "Slide 29: Passenger conveyors (travelators) may be inclined up to about 15° (speed 0.6 to 1.3 m/s).",
    lesson: "L10a"
  },
  {
    question: "What is the PERSONAL SPACE buffer zone envelope for females vs males respectively?",
    options: [
      "0.1 m² (female) vs 0.2 m² (male)",
      "0.5 m² (0.8 m dia. circle) for females vs 0.8 m² (1.0 m dia. circle) for males",
      "2.0 m² for females vs 4.0 m² for males",
      "Both are strictly 0.21 m²"
    ],
    answer: 1,
    explanation: "Slide 12: Personal space buffer zone is 0.5 m² (0.8 m dia.) for females and 0.8 m² (1.0 m dia.) for males.",
    lesson: "L10a"
  },
  {
    question: "In human factors engineering, an occupation density of 4.0 PERSONS/M² is categorized as:",
    options: ["Desirable", "Comfortable", "Dense", "Crowded (Crush condition)"],
    answer: 3,
    explanation: "Slide 13: 0.4 is Desirable, 1.0 is Comfortable, 2.0 is Dense, 3.0 is 'Crowding', and 4.0 person/m² is Crowded.",
    lesson: "L10a"
  },
  {
    question: "Under Hall's interpersonal distances, what distance defines the INTIMATE DISTANCE zone?",
    options: ["< 0.45 m", "0.45 to 0.75 m", "1.2 to 2.1 m", "> 7.5 m"],
    answer: 0,
    explanation: "Slide 14: Intimate distance is < 0.45 m (experienced inside crowded elevator cars).",
    lesson: "L10a"
  },
  {
    question: "What type of elevator is characterized by a glazed or partially glazed car travelling in an atrium or external facade?",
    options: ["Paternoster", "Observation / Panoramic / Bubble lift", "Dumbwaiter", "Scissor hoist"],
    answer: 1,
    explanation: "Slide 27: An observation lift (also called scenic, glass, panoramic, bubble, or wallclimber) has a glazed car operating within a glazed or open well.",
    lesson: "L10a"
  },
  {
    question: "What small service lifting device is commonly used in restaurants and libraries to transport food and books between floors?",
    options: ["Vaneaxial fan", "Dumbwaiter", "Stair lift", "Travelator"],
    answer: 1,
    explanation: "Slide 28: A dumbwaiter is a small goods/service lift used for carrying food, dishes, or books in restaurants and libraries.",
    lesson: "L10a"
  },
  {
    question: "In office buildings, which traffic period traditionally governs classical up-peak lift sizing calculations?",
    options: [
      "The steady late-night security patrol traffic",
      "The worst 5-minute period during the morning up peak (08:30–09:00)",
      "The mid-afternoon interfloor movement",
      "The cleaning staff evening traffic"
    ],
    answer: 1,
    explanation: "Slide 37: Classical traffic design formulae evaluate the worst 5-minute period during the morning up peak.",
    lesson: "L10a"
  },
  {
    question: "In the RTT equation RTT = 2 H tv + (S + 1) ts + 2 P tp + [2 He tv], what does the term [2 He tv] account for?",
    options: [
      "The time lost due to passenger luggage loading",
      "The express zone jump (extra time to travel non-stop through lower floors to the express sky-lobby/zone)",
      "The electrical motor preheating cycle",
      "The door dwell time at the ground floor"
    ],
    answer: 1,
    explanation: "Slide 41: For lifts serving an upper zone, [2 He tv] represents the extra round-trip flight time to jump through the unserved express zone floors (He).",
    lesson: "L10a"
  },
  {
    question: "How is the expected number of stops (S) calculated from served floors N and passengers P in classical up-peak theory?",
    options: [
      "S = N · P",
      "S = N · [ 1 - (1 - 1/N)^P ]",
      "S = N - (P / N)",
      "S = (N + 1) / 2"
    ],
    answer: 1,
    explanation: "Slide 40: The average number of stops S is calculated as S = N · [1 - (1 - 1/N)^P].",
    lesson: "L10a"
  },
  {
    question: "Which computer software suite developed by Dr. Gina Barney uses the iterative balance method for lift design (Slide 46–47)?",
    options: ["ELEVATE", "SIMPLE", "AUTOCAD", "REVIT"],
    answer: 1,
    explanation: "Slide 46-47: The software suite developed by Dr. Gina Barney utilizing the iterative balance method is named SIMPLE.",
    lesson: "L10a"
  },
  {
    question: "For non-up-peak conditions such as lunch two-way traffic or complex down-peak passenger flows, what analysis method is recommended?",
    options: [
      "Applying the simple 10% speed rule",
      "Discrete digital computer simulation (e.g. ELEVATE or SIMPLE)",
      "Measuring air velocity using a pitot-static tube",
      "Assuming the highest call reversal floor H is always zero"
    ],
    answer: 1,
    explanation: "Slide 37 & 45-48: Traffic patterns like down-peak, two-way, and interfloor flows require discrete digital computer simulation.",
    lesson: "L10a"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L10a)
// ==========================================
const shortData = [
  {
    type: "trace",
    lesson: "L10a",
    question: "An office building has N = 12 floors above the main entrance lobby with an interfloor height of df = 3.6 m. A group of L = 4 passenger lifts is proposed, each with a rated speed of v = 2.5 m/s and a contract capacity of 16 persons (assume 80% car load factor). Single-floor cycle time is T = 9.5 s, and single-passenger transfer time is tp = 1.2 s. Statistical calculations yield S = 7.8 stops and H = 11.2 floors. (a) Calculate single floor transit time tv and stop loss time ts. (b) Calculate the Up-Peak Round Trip Time (RTT). (c) Calculate the Up-Peak Interval (UPPINT) and evaluate its service quality. (d) Calculate the 5-minute Up-Peak Handling Capacity (UPPHC).",
    modelAnswer: "Given parameters:\n• N = 12 floors, df = 3.6 m, v = 2.5 m/s, L = 4 lifts\n• Contract capacity = 16 persons ➔ P = 0.8 · 16 = 12.8 passengers[cite: 11]\n• T = 9.5 s, tp = 1.2 s, S = 7.8, H = 11.2[cite: 11]\n\nStep 1: Calculate tv and ts (Slide 41–42):\n• tv = df / v = 3.6 m / 2.5 m/s = 1.44 s[cite: 11]\n• ts = T - tv = 9.5 s - 1.44 s = 8.06 s[cite: 11]\n\nStep 2: Calculate Round Trip Time (RTT) (Slide 39):\nFormula: RTT = 2 · H · tv + (S + 1) · ts + 2 · P · tp[cite: 11]\n• Kinematic transit: 2 · 11.2 · 1.44 s = 32.256 s\n• Stopping losses: (7.8 + 1) · 8.06 s = 8.8 · 8.06 s = 70.928 s\n• Passenger transfer: 2 · 12.8 · 1.2 s = 30.720 s\n• Total RTT = 32.256 + 70.928 + 30.720 = 133.90 s (approx. 134 s)[cite: 11]\n\nStep 3: Calculate Up-Peak Interval (UPPINT) & Evaluate Quality (Slide 36, 39):\n• UPPINT = RTT / L = 133.90 s / 4 = 33.48 s[cite: 11]\n• Evaluation: From Slide 36, 30 s is 'Good' and 40 s is 'Poor'. At 33.5 s, the quality of service is considered Fair to Good (acceptable for regular commercial office)[cite: 11].\n\nStep 4: Calculate 5-minute Up-Peak Handling Capacity (UPPHC) (Slide 39):\n• UPPHC = (300 · L · P) / RTT[cite: 11]\n• UPPHC = (300 · 4 · 12.8) / 133.90 = 15,360 / 133.90 = 114.7 passengers in 5 minutes[cite: 11].",
    tips: "Show P = 0.8 · 16 = 12.8, tv = 1.44s, ts = 8.06s, RTT ≈ 134s, UPPINT ≈ 33.5s, and UPPHC ≈ 115 passengers[cite: 11]."
  },
  {
    type: "compare",
    lesson: "L10a",
    question: "Compare ELECTRIC TRACTION lifts, HYDRAULIC lifts, and ESCALATORS regarding: (a) optimal vertical travel height and number of storeys served, (b) continuous passenger throughput capacity, (c) machine room location, and (d) specific energy consumption / operating efficiency.",
    modelAnswer: "(a) Vertical Travel Height & Storeys:\n• Traction Lifts: Unrestricted height; ideal for medium to ultra-high-rise buildings (6 storeys to 100+ storeys)[cite: 11].\n• Hydraulic Lifts: Limited travel; strictly restricted to low-rise buildings (typically 2 to 6 floors) due to cylinder ram length constraints[cite: 11].\n• Escalators: Short vertical rise per flight (typically 1 to 3 storeys, vertical rise usually < 6 m per escalator)[cite: 11].\n\n(b) Passenger Throughput Capacity:\n• Traction Lifts: Batch / Intermittent flow (carries a batch of 8–24 passengers per trip with waiting intervals)[cite: 11].\n• Hydraulic Lifts: Low batch throughput; slow speeds (0.5–1.0 m/s) with long cycle times[cite: 11].\n• Escalators: Continuous passenger flow; massively superior handling capacity (delivers 4,000 to 10,000+ persons/hour with zero passenger waiting time)[cite: 11].\n\n(c) Machine Room Placement:\n• Traction Lifts: Traditionally directly above the lift shaft at the top roof level (or Machine-Room-Less MRL inside hoistway)[cite: 11].\n• Hydraulic Lifts: Flexible; ideally placed at the LOWEST building level (basement) adjacent to the shaft pit[cite: 11].\n• Escalators: Self-contained within the structural steel truss at upper and lower landings; requires no separate machine room[cite: 11].\n\n(d) Energy Efficiency:\n• Traction Lifts: High efficiency (η ≈ 60%); counterweight balances car and partial payload, recovering energy[cite: 11].\n• Hydraulic Lifts: Low efficiency; pump must lift entire un-counterweighted car mass; generates significant oil heat[cite: 11].\n• Escalators: High steady-state mechanical efficiency, but runs continuously even when lightly loaded[cite: 11].",
    tips: "Structure across the 4 axes: Travel height, throughput (batch vs continuous), machine room location (top vs basement vs truss), and energy efficiency[cite: 11]."
  },
  {
    type: "concept",
    lesson: "L10a",
    question: "Explain the kinematics and design rules of automatic escalators. (a) Derive the theoretical hourly handling capacity formula N = (3600 · P · V · cos θ) / L, defining every term. (b) Contrast standard 30° inclination with the steep 35° option, stating the two statutory restrictions for using 35°. (c) Explain the safety function of comb plates and horizontal flat steps at landings.",
    modelAnswer: "(a) Derivation of Handling Capacity N (Slide 23):\n• Number of seconds in an hour = 3600 s/hr[cite: 11].\n• Escalator rated speed along the incline = V (m/s)[cite: 11].\n• Horizontal velocity component = V · cos θ[cite: 11].\n• Step tread length = L (m)[cite: 11].\n• Number of steps passing any point per second = (V · cos θ) / L[cite: 11].\n• If each step accommodates P passengers, hourly capacity is:\n  N = 3600 · P · [ (V · cos θ) / L ] = (3600 · P · V · cos θ) / L (persons/hour)[cite: 11].\n\n(b) 30° vs 35° Incline Angle Standards (Slide 20):\n• 30° Incline: The universal international standard providing maximum passenger balance, physiological comfort, and lowest falling risk[cite: 11].\n• 35° Incline: Permitted to minimize escalator horizontal footprint, but ONLY IF TWO CONDITIONS ARE MET:\n  1. The vertical rise is less than 6 metres (Rise < 6 m)[cite: 11];\n  2. The rated speed does not exceed 0.5 m/s (Speed ≤ 0.5 m/s)[cite: 11].\n\n(c) Comb Plates and Flat Steps Safety (Slide 4, 20):\n• Comb Plates: Stationary teeth meshing into the grooved step treads at entry/exit to ensure smooth transfer and prevent shoes, clothing, or fingers from being drawn into the mechanism[cite: 11].\n• Flat Steps (1.33 to 2.33 steps): At boarding and alighting landings, steps must travel horizontally flat before forming/breaking steps to give passengers a stable footing to step on and off without losing balance[cite: 11].",
    tips: "Explain horizontal velocity V·cosθ, write N = (3600PVcosθ)/L, state 35° rules (Rise < 6m and Speed ≤ 0.5m/s), and describe comb plates and 1.33-2.33 flat steps[cite: 11]."
  },
  {
    type: "scenario",
    lesson: "L10a",
    question: "You are the building services consultant designing vertical transportation for a new high-rise office tower in Hong Kong. (a) Detail the mandatory architectural and fire protection requirements for the dedicated Firefighting Lift and its lobby (Slide 17). (b) Explain how the Hong Kong high-density factor affects population estimation. (c) Outline THREE barrier-free accessibility features required for disabled users.",
    modelAnswer: "(a) Firefighting Lift & Protected Lobby Requirements (Slide 17):\n1. Dedicated Firefighting Lift: Serves all floors with independent firemen switch override and emergency power supply[cite: 11].\n2. Smoke-Free Protected Lobby: The firefighting lift lobby must be completely enclosed and maintained free of smoke via positive pressure mechanical ventilation[cite: 11].\n3. Fire Doors: All access portals into the firefighting lobby must be protected by self-closing fire doors with at least a 1-hour fire resistance rating[cite: 11].\n4. Egress Integration: The lobby must have direct, unimpeded access to an enclosed escape staircase[cite: 11].\n\n(b) Hong Kong High-Density Factor (Slide 33):\n• CIBSE Guide D standard office densities are 10–12 m²/person (regular) or 15–18 m²/person (prestige)[cite: 11].\n• Due to Hong Kong's compact commercial land use and intensive office layouts, actual occupant populations are substantially higher[cite: 11].\n• Engineers must apply a mandatory uplift of +10% to +20% to baseline population figures to prevent severe elevator under-sizing and prolonged morning queueing[cite: 11].\n\n(c) Barrier-Free Universal Accessibility Features (Slide 25):\n1. Wheelchair Turning Envelope: Minimum 1500 mm clear turning diameter inside lift car and lobby[cite: 11].\n2. Low-Level Control Buttons: Braille and raised tactile buttons positioned at 900–1200 mm height reachable from a wheelchair[cite: 11].\n3. High-Contrast Visual & Audio Aids: Voice floor synthesizers, audible chimes, and high-contrast color step nosing on stairways[cite: 11].",
    tips: "Cover 1-hour self-closing fire doors, smoke-free lobby, direct escape stair access, HK +10% to 20% population increase, and wheelchair/Braille accessibility[cite: 11]."
  },
  {
    type: "explain",
    lesson: "L10a",
    question: "Human spatial and behavioral factors directly govern elevator car capacity and waiting satisfaction. (a) Define the male 'Occupancy Ellipse' and personal space 'Buffer Zone' (Slide 12). (b) Explain why elevator travel forces passengers into Hall's 'Intimate Distance' zone and how occupants psychologically cope. (c) Explain the difference between Up-Peak Interval (UPPINT) and Average Waiting Time (AWT), and state the target interval for prestige office buildings.",
    modelAnswer: "(a) Occupancy Ellipse & Personal Buffer Zone (Slide 12):\n• Occupancy Ellipse: The geometric footprint of a male human body viewed from above, standardized as an ellipse of 600 mm shoulder width by 450 mm chest depth (area = 0.21 m²)[cite: 11].\n• Personal Buffer Zone: The psychological boundary envelope individuals maintain around themselves (0.5 m² / 0.8 m dia. for females; 0.8 m² / 1.0 m dia. for males, resembling an open umbrella)[cite: 11].\n\n(b) Intimate Distance & Psychological Coping in Lift Cars (Slide 13–14):\n• Hall's Spatial Taxonomy: Defines intimate distance as < 0.45 m, personal distance as 0.45–1.2 m, and social distance as 1.2–3.6 m[cite: 11].\n• In a crowded lift car (density reaching 3.0 to 4.0 persons/m²), strangers are forced into physical contact within the 'intimate zone' (< 0.45 m)[cite: 11].\n• Psychological Defense: Occupants cope by avoiding eye contact, maintaining silent posture, folding arms, and fixing their gaze upward at ceiling indicator displays or smartphone screens to defend psychological boundaries[cite: 11].\n\n(c) UPPINT vs AWT & Prestige Target (Slide 34–36):\n• Up-Peak Interval (UPPINT): The average time between consecutive elevator car departures from the main ground terminal lobby (UPPINT = RTT / L)[cite: 11].\n• Average Waiting Time (AWT): The actual time an individual passenger waits on the landing after pressing the call button before entering the car[cite: 11]. At 80% car loading, AWT ≈ 85% of UPPINT[cite: 11].\n• Prestige Office Target: UPPINT must be maintained between 20 and 25 seconds (rated 'Excellent' to 'Very Good')[cite: 11].",
    tips: "Explain 600×450 mm ellipse (0.21 m²), 0.5-0.8 m² buffer zone, intimate distance <0.45 m, UPPINT vs AWT (AWT ≈ 85% of interval), and prestige target 20-25 s[cite: 11]."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態機械原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your calculations or transportation analysis here / 喺度輸入你的計算或交通分析答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握垂直運輸、扶梯工程與 CIBSE Guide D 交通流量分析的核心精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細分析與計算題解。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫 RTT 方程、扶梯傾角限值與人體人體工學佔位標準。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習相應主題後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
