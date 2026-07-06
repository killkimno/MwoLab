const SUPPORTED_LANGUAGES = new Set(["kr", "en"]);
const DEFAULT_LANGUAGE = "kr";

function normalizeLanguage(value) {
  const language = String(value || "").trim().toLowerCase();
  if (language === "kr" || language === "ko" || language === "ko-kr") return "kr";
  if (language === "en" || language.startsWith("en-")) return "en";
  return "";
}

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = normalizeLanguage(params.get("lang"));
  if (SUPPORTED_LANGUAGES.has(queryLanguage)) return queryLanguage;

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of browserLanguages) {
    const normalized = normalizeLanguage(language);
    if (SUPPORTED_LANGUAGES.has(normalized)) return normalized;
  }
  return DEFAULT_LANGUAGE;
}

const activeLanguage = detectLanguage();

const TEXT = {
  kr: {
    "common.unknown": "알 수 없음",
    "common.item": "항목",
    "common.value": "수치",
    "common.target": "대상",
    "common.ok": "OK",
    "common.check": "확인 필요",
    "common.chassis": "기종",
    "common.variants": "변형",
    "common.models": "모델",
    "common.slots": "슬롯",
    "common.tons": "톤",
    "common.armor": "아머",
    "common.engine": "엔진",
    "common.status": "상태",
    "common.heat": "발열",
    "common.ammo": "탄약",
    "common.alpha": "알파",
    "common.add": "추가",
    "common.remove": "제거",
    "common.empty": "비어 있음",
    "common.baseline": "기준",
    "common.info": "정보",
    "common.rank": "순위",
    "common.average": "평균",
    "common.max": "최대치",
    "common.min": "최소치",
    "language.switcher": "언어 선택",
    "language.kr": "한국어",
    "language.en": "English",
    "status.loadingData": "로컬 데이터 로딩 중...",
    "status.loadedData": "{count}개 멕을 로컬 게임 데이터에서 불러왔습니다",
    "status.fileProtocol": "file://에서는 로컬 데이터를 불러올 수 없습니다. 로컬 프리뷰는 public 폴더를 http://로 서빙하세요.",
    "status.loadPathFailed": "{path} 파일을 불러올 수 없습니다",
    "status.buildSaved": "빌드를 로컬에 저장했습니다",
    "tabs.mechlab": "현재 멕랩",
    "tabs.info": "정보",
    "tabs.compare": "비교하기",
    "tabs.stats": "통계",
    "donate.label": "후원하기",
    "donate.aria": "Ko-fi 후원 페이지 열기",
    "search.mechPlaceholder": "기종 또는 변형 검색",
    "search.itemPlaceholder": "장비 검색",
    "list.smallView": "작은 리스트 보기",
    "list.largeView": "큰 리스트 보기",
    "list.noMechs": "현재 필터와 일치하는 멕이 없습니다.",
    "list.chassisVariants": "{chassis} 기종 / {variants} 변형",
    "list.variantCount": "{count} 변형",
    "filters.allFactions": "모든 진영",
    "filters.allWeightClasses": "모든 체급",
    "filters.allEquipment": "모든 장비",
    "filters.weapons": "무기",
    "filters.ammo": "탄약",
    "filters.engines": "엔진",
    "filters.equipment": "장비",
    "filters.jumpjets": "점프젯",
    "filters.masc": "MASC",
    "filters.weaponMods": "무기 모드",
    "sort.default": "기본 정렬",
    "sort.tons": "톤수 정렬",
    "weight.light": "라이트",
    "weight.medium": "미디엄",
    "weight.heavy": "헤비",
    "weight.assault": "어썰트",
    "faction.Clan": "클랜",
    "faction.InnerSphere": "이너스피어",
    "component.head": "머리",
    "component.leftArm": "왼쪽 팔",
    "component.leftTorso": "왼쪽 어깨",
    "component.centerTorso": "몸통",
    "component.rightTorso": "오른쪽 어깨",
    "component.rightArm": "오른쪽 팔",
    "component.leftLeg": "왼쪽 다리",
    "component.rightLeg": "오른쪽 다리",
    "info.selectMech": "멕을 선택하세요",
    "info.selectMechHint": "왼쪽 목록에서 카테고리를 펼친 뒤 멕을 선택하세요.",
    "info.applyQuirks": "쿼크 적용",
    "info.quirkSummary": "쿼크 서머리",
    "info.noSpecialQuirks": "특수 쿼크 없음",
    "info.specialQuirks": "특수 쿼크",
    "info.cooldown": "쿨 다운",
    "info.durability": "내구도",
    "info.range": "사거리",
    "info.velocity": "탄속",
    "info.combinedDurability": "종합 내구",
    "info.durabilitySummary": "내구도 요약",
    "info.mobility": "기동성",
    "info.structureInfo": "스트럭쳐 정보",
    "info.armorInfo": "아머 정보",
    "info.engine": "엔진",
    "info.part": "부위",
    "info.stat": "항목",
    "info.armorStructureTotal": "아머 + 스트럭쳐 총합",
    "info.maxSpeed": "최대 속도",
    "info.acceleration": "가속도",
    "info.deceleration": "감속도",
    "info.turnSpeed": "선회 속도",
    "info.angleX": "회전각 X",
    "info.angleY": "회전각 Y",
    "info.torsoSpeed": "몸통 회전속도",
    "info.structureTotal": "스트럭쳐 총합",
    "info.maxArmorTotal": "최대 아머 포인트 총합",
    "info.minEngine": "최소 엔진",
    "info.maxEngine": "최대 엔진",
    "info.noQuirks": "쿼크가 없습니다",
    "info.noQuirksForMech": "이 멕에 표시할 쿼크가 없습니다.",
    "info.quirksPrompt": "멕을 선택하면 쿼크가 표시됩니다.",
    "info.componentsPrompt": "멕을 선택하면 구성 부품이 표시됩니다.",
    "compare.title": "멕 비교",
    "compare.clear": "비교 리스트 모두 지우기",
    "compare.showDeltas": "차이 표시",
    "compare.empty": "왼쪽 리스트에서 비교할 멕을 선택하세요.",
    "compare.selected": "{count}/{max} 선택됨",
    "compare.removeAria": "{name} 비교에서 제거",
    "compare.setBaseline": "기준으로 설정",
    "compare.maxSelected": "비교는 최대 {max}개까지 선택할 수 있습니다.",
    "stats.kind": "통계 종류",
    "stats.collapse": "통계 하위 메뉴 접기",
    "stats.expand": "통계 하위 메뉴 펼치기",
    "stats.rankMode": "순위 표시 방식",
    "stats.individual": "개별",
    "stats.chassis": "기종별",
    "stats.aggregateMode": "기종별 집계 방식",
    "stats.category": "통계 카테고리",
    "stats.scope": "내구도 범위",
    "stats.mode": "순위 비교 방식",
    "stats.workspace": "통계",
    "stats.filterAxis": "필터 기준",
    "stats.weightSelect": "체급 선택",
    "stats.tonsSelect": "톤수 선택",
    "stats.detail": "통계 상세",
    "stats.total": "총합",
    "stats.structure": "스트럭쳐",
    "stats.all": "전체",
    "stats.torsoShoulders": "어깨+몸통",
    "stats.torso": "몸통",
    "stats.shoulders": "어깨",
    "stats.allList": "전체 목록",
    "stats.filter": "필터",
    "stats.faction": "진영",
    "stats.compareBy": "비교 기준",
    "stats.weight": "체급",
    "stats.tons": "톤수",
    "stats.noSelection": "왼쪽 목록에서 멕을 선택하세요.",
    "stats.noRows": "표시할 멕이 없습니다.",
    "stats.noHardpoints": "하드포인트 없음",
    "stats.specCompare": "기종별 스펙 비교",
    "stats.chassisInfo": "기본 정보",
    "stats.modelCount": "모델 수",
    "stats.hardpoints": "하드포인트",
    "stats.quirkSelect": "쿼크 선택",
    "equipment.noItem": "장비가 선택되지 않았습니다",
    "build.noEngine": "엔진 없음",
    "build.engineOutside": "엔진 {rating}이 허용 범위 {min}-{max} 밖입니다",
    "build.missingItem": "누락된 장비 {id}",
    "build.missing": "{id} 누락",
    "quirk.cooldownSummary": "쿨 다운 서머리",
    "quirk.heatSummary": "발열 서머리",
    "quirk.velocitySummary": "탄속 서머리",
    "quirk.rangeSummary": "사거리 서머리",
    "quirk.durationSummary": "듀레이션/ROF 서머리",
    "quirk.spreadSummary": "탄퍼짐 서머리",
    "quirk.durabilitySummary": "내구도 서머리",
    "quirk.maxCooldown": "MAX 쿨 다운",
    "quirk.energyCooldown": "ENERGY 쿨 다운",
    "quirk.missileCooldown": "MISSILE 쿨 다운",
    "quirk.ballisticCooldown": "BALLISTIC 쿨 다운",
    "quirk.maxHeatReduction": "MAX 발열 감소",
    "quirk.energyHeat": "ENERGY 발열",
    "quirk.missileHeat": "MISSILE 발열",
    "quirk.ballisticHeat": "BALLISTIC 발열",
    "quirk.heatDissipation": "HEAT DISSIPATION",
    "quirk.maxVelocity": "MAX 탄속",
    "quirk.energyVelocity": "ENERGY 탄속",
    "quirk.missileVelocity": "MISSILE 탄속",
    "quirk.ballisticVelocity": "BALLISTIC 탄속",
    "quirk.maxRange": "MAX 사거리",
    "quirk.energyRange": "ENERGY 사거리",
    "quirk.missileRange": "MISSILE 사거리",
    "quirk.ballisticRange": "BALLISTIC 사거리",
    "quirk.maxDuration": "MAX 듀레이션/ROF",
    "quirk.energyDuration": "ENERGY 듀레이션",
    "quirk.mgRof": "MG ROF",
    "quirk.racRof": "RAC ROF",
    "quirk.amsRof": "AMS ROF",
    "quirk.maxSpread": "MAX 탄퍼짐",
    "quirk.missileSpread": "MISSILE 탄퍼짐",
    "quirk.ballisticSpread": "BALLISTIC 탄퍼짐",
    "quirk.maxDurability": "MAX 내구도",
    "quirk.armor": "아머",
    "quirk.structure": "스트럭쳐",
    "quirk.critPrevent": "크리 방지",
    "special.jumpjets": "점프젯",
    "special.narcDuration": "NARC 지속시간"
  },
  en: {
    "common.unknown": "Unknown",
    "common.item": "Item",
    "common.value": "Value",
    "common.target": "Target",
    "common.ok": "OK",
    "common.check": "Check",
    "common.chassis": "chassis",
    "common.variants": "variants",
    "common.models": "models",
    "common.slots": "slots",
    "common.tons": "tons",
    "common.armor": "Armor",
    "common.engine": "Engine",
    "common.status": "Status",
    "common.heat": "Heat",
    "common.ammo": "Ammo",
    "common.alpha": "Alpha",
    "common.add": "Add",
    "common.remove": "Remove",
    "common.empty": "Empty",
    "common.baseline": "Baseline",
    "common.info": "Info",
    "common.rank": "Rank",
    "common.average": "Average",
    "common.max": "Max",
    "common.min": "Min",
    "language.switcher": "Language",
    "language.kr": "한국어",
    "language.en": "English",
    "status.loadingData": "Loading local data...",
    "status.loadedData": "{count} mechs loaded from local game data",
    "status.fileProtocol": "Local data cannot be loaded from file://. Serve the public folder over http:// for local preview.",
    "status.loadPathFailed": "Could not load {path}",
    "status.buildSaved": "Build saved locally",
    "tabs.mechlab": "Current MechLab",
    "tabs.info": "Info",
    "tabs.compare": "Compare",
    "tabs.stats": "Stats",
    "donate.label": "Donate",
    "donate.aria": "Open Ko-fi support page",
    "search.mechPlaceholder": "Search chassis or variant",
    "search.itemPlaceholder": "Search equipment",
    "list.smallView": "Small list view",
    "list.largeView": "Large list view",
    "list.noMechs": "No mechs match the current filters.",
    "list.chassisVariants": "{chassis} chassis / {variants} variants",
    "list.variantCount": "{count} variants",
    "filters.allFactions": "All factions",
    "filters.allWeightClasses": "All weight classes",
    "filters.allEquipment": "All equipment",
    "filters.weapons": "Weapons",
    "filters.ammo": "Ammo",
    "filters.engines": "Engines",
    "filters.equipment": "Equipment",
    "filters.jumpjets": "Jump jets",
    "filters.masc": "MASC",
    "filters.weaponMods": "Weapon mods",
    "sort.default": "Default sort",
    "sort.tons": "Sort by tonnage",
    "weight.light": "Light",
    "weight.medium": "Medium",
    "weight.heavy": "Heavy",
    "weight.assault": "Assault",
    "faction.Clan": "Clan",
    "faction.InnerSphere": "Inner Sphere",
    "component.head": "Head",
    "component.leftArm": "Left Arm",
    "component.leftTorso": "Left Torso",
    "component.centerTorso": "Center Torso",
    "component.rightTorso": "Right Torso",
    "component.rightArm": "Right Arm",
    "component.leftLeg": "Left Leg",
    "component.rightLeg": "Right Leg",
    "info.selectMech": "Select a mech",
    "info.selectMechHint": "Expand a category in the left list, then choose a mech.",
    "info.applyQuirks": "Apply quirks",
    "info.quirkSummary": "Quirk Summary",
    "info.noSpecialQuirks": "No special quirks",
    "info.specialQuirks": "Special quirks",
    "info.cooldown": "Cooldown",
    "info.durability": "Durability",
    "info.range": "Range",
    "info.velocity": "Velocity",
    "info.combinedDurability": "Combined Durability",
    "info.durabilitySummary": "Durability Summary",
    "info.mobility": "Mobility",
    "info.structureInfo": "Structure Info",
    "info.armorInfo": "Armor Info",
    "info.engine": "Engine",
    "info.part": "Part",
    "info.stat": "Stat",
    "info.armorStructureTotal": "Armor + Structure Total",
    "info.maxSpeed": "Max Speed",
    "info.acceleration": "Acceleration",
    "info.deceleration": "Deceleration",
    "info.turnSpeed": "Turn Speed",
    "info.angleX": "Angle X",
    "info.angleY": "Angle Y",
    "info.torsoSpeed": "Torso Turn Speed",
    "info.structureTotal": "Structure Total",
    "info.maxArmorTotal": "Max Armor Point Total",
    "info.minEngine": "Min Engine",
    "info.maxEngine": "Max Engine",
    "info.noQuirks": "No quirks",
    "info.noQuirksForMech": "No quirks found for this mech.",
    "info.quirksPrompt": "Select a mech to show quirks.",
    "info.componentsPrompt": "Select a mech to show components.",
    "compare.title": "Mech Compare",
    "compare.clear": "Clear compare list",
    "compare.showDeltas": "Show deltas",
    "compare.empty": "Select mechs to compare from the left list.",
    "compare.selected": "{count}/{max} selected",
    "compare.removeAria": "Remove {name} from compare",
    "compare.setBaseline": "Set as baseline",
    "compare.maxSelected": "You can compare up to {max} mechs.",
    "stats.kind": "Stats type",
    "stats.collapse": "Collapse stats submenus",
    "stats.expand": "Expand stats submenus",
    "stats.rankMode": "Ranking mode",
    "stats.individual": "Individual",
    "stats.chassis": "By chassis",
    "stats.aggregateMode": "Chassis aggregate mode",
    "stats.category": "Stats category",
    "stats.scope": "Durability scope",
    "stats.mode": "Ranking comparison mode",
    "stats.workspace": "Stats",
    "stats.filterAxis": "Filter axis",
    "stats.weightSelect": "Select weight class",
    "stats.tonsSelect": "Select tonnage",
    "stats.detail": "Stats detail",
    "stats.total": "Total",
    "stats.structure": "Structure",
    "stats.all": "All",
    "stats.torsoShoulders": "Torso + shoulders",
    "stats.torso": "Torso",
    "stats.shoulders": "Shoulders",
    "stats.allList": "Full list",
    "stats.filter": "Filter",
    "stats.faction": "Faction",
    "stats.compareBy": "Compare by",
    "stats.weight": "Weight",
    "stats.tons": "Tons",
    "stats.noSelection": "Select a mech from the left list.",
    "stats.noRows": "No mechs to display.",
    "stats.noHardpoints": "No hardpoints",
    "stats.specCompare": "Chassis Spec Compare",
    "stats.chassisInfo": "Basic Info",
    "stats.modelCount": "Model Count",
    "stats.hardpoints": "Hardpoints",
    "stats.quirkSelect": "Select quirk",
    "equipment.noItem": "No item selected",
    "build.noEngine": "No engine",
    "build.engineOutside": "Engine {rating} outside {min}-{max}",
    "build.missingItem": "Missing item {id}",
    "build.missing": "Missing {id}",
    "quirk.cooldownSummary": "Cooldown Summary",
    "quirk.heatSummary": "Heat Summary",
    "quirk.velocitySummary": "Velocity Summary",
    "quirk.rangeSummary": "Range Summary",
    "quirk.durationSummary": "Duration/ROF Summary",
    "quirk.spreadSummary": "Spread Summary",
    "quirk.durabilitySummary": "Durability Summary",
    "quirk.maxCooldown": "MAX Cooldown",
    "quirk.energyCooldown": "Energy Cooldown",
    "quirk.missileCooldown": "Missile Cooldown",
    "quirk.ballisticCooldown": "Ballistic Cooldown",
    "quirk.maxHeatReduction": "MAX Heat Red.",
    "quirk.energyHeat": "Energy Heat",
    "quirk.missileHeat": "Missile Heat",
    "quirk.ballisticHeat": "Ballistic Heat",
    "quirk.heatDissipation": "Heat Dissipation",
    "quirk.maxVelocity": "MAX Velocity",
    "quirk.energyVelocity": "Energy Velocity",
    "quirk.missileVelocity": "Missile Velocity",
    "quirk.ballisticVelocity": "Ballistic Velocity",
    "quirk.maxRange": "MAX Range",
    "quirk.energyRange": "Energy Range",
    "quirk.missileRange": "Missile Range",
    "quirk.ballisticRange": "Ballistic Range",
    "quirk.maxDuration": "MAX Duration/ROF",
    "quirk.energyDuration": "Energy Duration",
    "quirk.mgRof": "MG ROF",
    "quirk.racRof": "RAC ROF",
    "quirk.amsRof": "AMS ROF",
    "quirk.maxSpread": "MAX Spread",
    "quirk.missileSpread": "Missile Spread",
    "quirk.ballisticSpread": "Ballistic Spread",
    "quirk.maxDurability": "MAX Durability",
    "quirk.armor": "Armor",
    "quirk.structure": "Structure",
    "quirk.critPrevent": "Crit Prevent",
    "special.jumpjets": "Jump jets",
    "special.narcDuration": "NARC duration"
  },
};

function t(key, values = {}) {
  const text = TEXT[activeLanguage]?.[key] ?? TEXT[DEFAULT_LANGUAGE][key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function languageUrl(language) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  return `${url.pathname}${url.search}${url.hash}`;
}

function applyStaticTranslations() {
  document.documentElement.lang = activeLanguage === "kr" ? "ko" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-lang-link]").forEach((element) => {
    const language = element.dataset.langLink;
    element.href = languageUrl(language);
    element.classList.toggle("active", language === activeLanguage);
    element.setAttribute("aria-current", language === activeLanguage ? "true" : "false");
  });
}

const COMPONENT_ORDER = [
  "head",
  "left_arm",
  "left_torso",
  "centre_torso",
  "right_torso",
  "right_arm",
  "left_leg",
  "right_leg",
];

const REAR_ARMOR_COMPONENTS = [
  "left_torso_rear",
  "centre_torso_rear",
  "right_torso_rear",
];

const COMPONENT_NAMES = {
  head: t("component.head"),
  left_arm: t("component.leftArm"),
  left_torso: t("component.leftTorso"),
  centre_torso: t("component.centerTorso"),
  right_torso: t("component.rightTorso"),
  right_arm: t("component.rightArm"),
  left_leg: t("component.leftLeg"),
  right_leg: t("component.rightLeg"),
};

const INFO_COMPONENTS = [
  { key: "head", label: t("component.head"), suffix: "hd" },
  { key: "centre_torso", label: t("component.centerTorso"), suffix: "ct", rearSuffix: "ctr" },
  { key: "left_torso", label: t("component.leftTorso"), suffix: "lt", rearSuffix: "ltr" },
  { key: "right_torso", label: t("component.rightTorso"), suffix: "rt", rearSuffix: "rtr" },
  { key: "left_arm", label: t("component.leftArm"), suffix: "la" },
  { key: "right_arm", label: t("component.rightArm"), suffix: "ra" },
  { key: "left_leg", label: t("component.leftLeg"), suffix: "ll" },
  { key: "right_leg", label: t("component.rightLeg"), suffix: "rl" },
];

const WEIGHT_CLASS_ORDER = ["light", "medium", "heavy", "assault"];

const WEIGHT_CLASS_LABELS = {
  light: t("weight.light"),
  medium: t("weight.medium"),
  heavy: t("weight.heavy"),
  assault: t("weight.assault"),
};

const FACTION_LABELS = {
  Clan: t("faction.Clan"),
  InnerSphere: t("faction.InnerSphere"),
};

const STATS_DURABILITY_CATEGORIES = [
  { key: "total", label: t("stats.total"), metaLabel: t("info.durability"), summaryKey: "combinedTotal" },
  { key: "armor", label: t("common.armor"), metaLabel: t("info.armorInfo"), summaryKey: "armorTotal" },
  { key: "structure", label: t("stats.structure"), metaLabel: t("info.structureInfo"), summaryKey: "structureTotal" },
];

const STATS_DURABILITY_SCOPES = [
  { key: "all", label: t("stats.all"), componentKeys: null },
  { key: "shoulders", label: t("stats.shoulders"), componentKeys: ["left_torso", "right_torso"] },
  { key: "torso", label: t("stats.torso"), componentKeys: ["centre_torso"] },
  { key: "torsoShoulders", label: t("stats.torsoShoulders"), componentKeys: ["centre_torso", "left_torso", "right_torso"] },
];

const STATS_MOBILITY_CATEGORIES = [
  { key: "acceleration", label: t("info.acceleration"), metaLabel: t("info.acceleration"), movementKey: "acceleration", digits: 1, unit: " kph/s" },
  { key: "deceleration", label: t("info.deceleration"), metaLabel: t("info.deceleration"), movementKey: "deceleration", digits: 1, unit: " kph/s" },
  { key: "turnSpeed", label: t("info.turnSpeed"), metaLabel: t("info.turnSpeed"), movementKey: "turnSpeed", digits: 2, unit: " deg/s" },
  { key: "torsoSpeedX", label: t("info.torsoSpeed"), metaLabel: t("info.torsoSpeed"), movementKey: "torsoSpeed", digits: 1, unit: " deg/s" },
];

const STATS_QUIRK_CATEGORIES = [
  { key: "cooldown", label: t("info.cooldown"), metaLabel: t("info.cooldown"), summaryKey: "cooldown", digits: 1, scale: 100, unit: "%" },
  { key: "heat", label: t("common.heat"), metaLabel: t("common.heat"), summaryKey: "heat", digits: 1, scale: 100, unit: "%" },
  { key: "durability", label: t("info.durability"), metaLabel: t("info.durability"), summaryKey: "durability", digits: 1 },
  { key: "range", label: t("info.range"), metaLabel: t("info.range"), summaryKey: "range", digits: 1, scale: 100, unit: "%" },
  { key: "velocity", label: t("info.velocity"), metaLabel: t("info.velocity"), summaryKey: "velocity", digits: 1, scale: 100, unit: "%" },
];

const STATS_CHASSIS_AGGREGATE_MODES = [
  { key: "average", label: t("common.average") },
  { key: "max", label: t("common.max") },
  { key: "min", label: t("common.min") },
];

const MAX_COMPARE_MECHS = 15;
const COMPARE_RANK_EPSILON = 0.0001;
const DEFAULT_COLLAPSED_COMPARE_CATEGORIES = [t("info.combinedDurability"), t("info.armorInfo"), t("info.structureInfo"), t("stats.chassisInfo")];
const DIRECT_COOLDOWN_QUIRKS = new Set([
  "all_cooldown_multiplier",
  "energy_cooldown_multiplier",
  "missile_cooldown_multiplier",
  "ballistic_cooldown_multiplier",
]);
const DIRECT_HEAT_QUIRKS = new Set([
  "all_heat_multiplier",
  "energy_heat_multiplier",
  "missile_heat_multiplier",
  "ballistic_heat_multiplier",
]);
const DIRECT_VELOCITY_QUIRKS = new Set([
  "all_velocity_multiplier",
  "energy_velocity_multiplier",
  "missile_velocity_multiplier",
  "ballistic_velocity_multiplier",
]);
const DIRECT_RANGE_QUIRKS = new Set([
  "all_range_multiplier",
  "energy_range_multiplier",
  "missile_range_multiplier",
  "ballistic_range_multiplier",
]);
const DIRECT_DURATION_QUIRKS = new Set([
  "all_duration_multiplier",
  "energy_duration_multiplier",
]);
const DIRECT_SPREAD_QUIRKS = new Set([
  "all_spread_multiplier",
  "missile_spread_multiplier",
  "ballistic_spread_multiplier",
]);

const state = {
  language: activeLanguage,
  index: null,
  mechs: [],
  equipment: null,
  loadouts: {},
  omnipods: {},
  activeMainTab: "info",
  infoApplyQuirks: true,
  compareMode: false,
  compareMechIds: [],
  compareBaselineMechId: null,
  compareShowDeltas: true,
  collapsedCompareCategories: new Set(DEFAULT_COLLAPSED_COMPARE_CATEGORIES),
  activeStatsView: "durability",
  statsRankMode: "individual",
  statsChassisAggregateMode: "average",
  statsDetailMenusExpanded: true,
  statsDurabilityScope: "all",
  statsDurabilityCategory: "total",
  statsMobilityCategory: "acceleration",
  statsQuirkCategory: "cooldown",
  statsDurabilityMode: "all",
  selectedStatsMechId: null,
  statsConditionFaction: "",
  statsConditionAxis: "weight",
  statsConditionWeightClasses: new Set(),
  statsConditionTons: new Set(),
  renderedStatsEntries: [],
  renderedStatsCategory: null,
  renderedStatsValueScale: 1,
  largeMechList: true,
  mechSort: "default",
  mechListSummaryCache: new Map(),
  mechHardpointBadgeCache: new Map(),
  mechHardpointTypeCache: new Map(),
  weaponQuirkTypeCache: null,
  weaponQuirkTargetCache: null,
  selectedMech: null,
  selectedChassis: "",
  expandedChassis: new Set(),
  selectedItemId: null,
  currentBuild: null,
};

const $ = (id) => document.getElementById(id);

function number(value, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function fmt(value, digits = 1) {
  const numeric = number(value);
  return Number.isInteger(numeric) ? `${numeric}` : numeric.toFixed(digits);
}

function normalizeLookupKey(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function itemById(id) {
  return state.equipment?.items?.[String(id)] || null;
}

function itemName(id) {
  const item = itemById(id);
  return item ? item.display_name || item.name : `Item ${id}`;
}

function mechById(id) {
  return state.mechs.find((mech) => String(mech.id) === String(id)) || null;
}

function itemSlots(item) {
  return number(item?.stats?.slots);
}

function itemTons(item) {
  return number(item?.stats?.tons ?? item?.stats?.weight);
}

function itemHeat(item) {
  return number(item?.stats?.heat);
}

function quirkValueText(name, value) {
  const numeric = number(value, null);
  if (numeric === null) return `${value}`;
  if (name.endsWith("_multiplier")) return `${numeric * 100 > 0 ? "+" : ""}${(numeric * 100).toFixed(1).replace(/\\.0$/, "")}%`;
  if (name.endsWith("_additive")) return `${numeric > 0 ? "+" : ""}${numeric}`;
  return `${numeric > 0 ? "+" : ""}${numeric}`;
}

function isHeatSink(item) {
  return item?.ctype === "CHeatSinkStats" || String(item?.name || "").toLowerCase().includes("heatsink");
}

function hardpointBadges(mech, build = buildFromLoadout(mech)) {
  const definition = effectiveDefinition(mech, build);
  const counts = {};
  Object.values(definition?.components || {}).forEach((component) => {
    (component.hardpoints || []).forEach((hp) => {
      const type = hp.hardpoint_type;
      counts[type] = (counts[type] || 0) + number(hp.Slots, 1);
    });
  });
  return Object.entries(counts)
    .filter(([type]) => ["ballistic", "energy", "missile", "ams", "ecm"].includes(type))
    .map(([type, count]) => `<span class="badge ${type}">${type[0].toUpperCase()} ${count}</span>`)
    .join("");
}

function hardpointTypes(mech, build = buildFromLoadout(mech)) {
  const definition = effectiveDefinition(mech, build);
  const types = new Set();
  Object.values(definition?.components || {}).forEach((component) => {
    (component.hardpoints || []).forEach((hp) => {
      const type = hp.hardpoint_type;
      if (["missile", "energy", "ballistic", "ams", "ecm"].includes(type)) types.add(type);
    });
  });
  const order = ["missile", "energy", "ballistic", "ams", "ecm"];
  return order.filter((type) => types.has(type));
}

function stockHardpointBadges(mech) {
  const key = String(mech?.id || "");
  if (!key) return "";
  const cached = state.mechHardpointBadgeCache.get(key);
  if (cached !== undefined) return cached;
  const badges = hardpointBadges(mech, buildFromLoadout(mech));
  state.mechHardpointBadgeCache.set(key, badges);
  return badges;
}

function stockHardpointTypes(mech) {
  const key = String(mech?.id || "");
  if (!key) return [];
  const cached = state.mechHardpointTypeCache.get(key);
  if (cached) return cached;
  const types = hardpointTypes(mech, buildFromLoadout(mech));
  state.mechHardpointTypeCache.set(key, types);
  return types;
}

function hardpointTypeBadges(types) {
  const labels = {
    missile: "M",
    energy: "E",
    ballistic: "B",
    ams: "AMS",
    ecm: "ECM",
  };
  return (types || [])
    .map((type) => `<span class="badge ${type}">${labels[type] || type.toUpperCase()}</span>`)
    .join("");
}

function mechListQuirkValues(mech, applyQuirks = state.infoApplyQuirks) {
  if (!applyQuirks) return {};
  return effectiveQuirkValues(mech, buildFromLoadout(mech));
}

function durabilityTotalForScope(rows, scope) {
  const componentKeys = scope?.componentKeys;
  if (!componentKeys) {
    return rows.reduce((sum, row) => sum + number(row.total), 0);
  }
  const allowed = new Set(componentKeys);
  return rows.reduce((sum, row, index) => (allowed.has(INFO_COMPONENTS[index]?.key) ? sum + number(row.total) : sum), 0);
}

function durabilityTotalsByScope(armorRows, structureRows, combinedRows) {
  return Object.fromEntries(
    STATS_DURABILITY_SCOPES.map((scope) => [
      scope.key,
      {
        total: durabilityTotalForScope(combinedRows, scope),
        armor: durabilityTotalForScope(armorRows, scope),
        structure: durabilityTotalForScope(structureRows, scope),
      },
    ]),
  );
}

function mechListSummary(mech, applyQuirks = state.infoApplyQuirks) {
  const key = `${mech.id}:${applyQuirks ? 1 : 0}`;
  const cached = state.mechListSummaryCache.get(key);
  if (cached) return cached;

  const values = mechListQuirkValues(mech, applyQuirks);
  const baseArmorRows = armorInfoRows({}, mech);
  const baseStructureRows = structureInfoRows({}, mech);
  const baseCombinedRows = combinedDurabilityRows(baseArmorRows, baseStructureRows);
  const armorRows = armorInfoRows(values, mech);
  const structureRows = structureInfoRows(values, mech);
  const combinedRows = combinedDurabilityRows(armorRows, structureRows);
  const baseMovement = movementInfo({}, mech);
  const build = buildFromLoadout(mech);
  const quirks = effectiveQuirks(mech, build);
  const summary = {
    stats: currentDefinition(mech).stats || {},
    quirks,
    quirkStats: quirkSummaryStats(quirks),
    baseCombinedTotal: baseCombinedRows.reduce((sum, row) => sum + number(row.total), 0),
    armorTotal: armorRows.reduce((sum, row) => sum + number(row.total), 0),
    structureTotal: structureRows.reduce((sum, row) => sum + number(row.total), 0),
    combinedTotal: combinedRows.reduce((sum, row) => sum + number(row.total), 0),
    durabilityByScope: durabilityTotalsByScope(armorRows, structureRows, combinedRows),
    baseMovement,
    movement: movementInfo(values, mech),
  };
  state.mechListSummaryCache.set(key, summary);
  return summary;
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatChassisName(chassis) {
  return String(chassis || t("common.unknown"))
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function variantCode(mech) {
  return mech?.definition?.stats?.Variant || String(mech?.name || "").toUpperCase();
}

function chassisDisplayName(variants) {
  const mech = variants[0];
  if (!mech) return t("common.unknown");
  const display = mech.display_name || formatChassisName(mech.chassis);
  const variant = variantCode(mech);
  const stripped = display.replace(new RegExp(`\\s*${escapeRegex(variant)}\\s*$`, "i"), "").trim();
  return stripped || formatChassisName(mech.chassis);
}

function sortMechsByVariant(a, b) {
  return variantCode(a).localeCompare(variantCode(b), undefined, { numeric: true });
}

function factionRank(faction) {
  if (faction === "Clan") return 0;
  if (faction === "InnerSphere") return 1;
  return 99;
}

function factionLabel(faction) {
  return FACTION_LABELS[faction] || faction || t("common.unknown");
}

function factionClass(faction) {
  return faction === "Clan" ? "faction-clan" : "faction-innersphere";
}

function weightClassClass(weightClass) {
  return `weight-${String(weightClass || "unknown").toLowerCase()}`;
}

function sortChassisGroups(a, b) {
  const tons = Number(a.tons) - Number(b.tons);
  const faction = factionRank(a.faction) - factionRank(b.faction);
  if (state.mechSort === "tons") {
    return tons || faction || a.label.localeCompare(b.label);
  }
  return faction || tons || a.order - b.order;
}

function chassisGroupsForWeight(grouped, weightClass) {
  return Array.from(grouped.get(weightClass).entries())
    .map(([chassis, variants], order) => {
      variants.sort(sortMechsByVariant);
      return {
        chassis,
        variants,
        label: chassisDisplayName(variants),
        tons: variants[0]?.definition?.stats?.MaxTons || "?",
        faction: variants[0]?.faction || t("common.unknown"),
        order,
      };
    })
    .sort(sortChassisGroups);
}

function factionSectionsForChassisGroups(chassisGroups) {
  const sections = [];
  chassisGroups.forEach((group) => {
    const last = sections[sections.length - 1];
    if (!last || last.faction !== group.faction) {
      sections.push({
        faction: group.faction,
        groups: [],
        variantCount: 0,
      });
    }
    const section = sections[sections.length - 1];
    section.groups.push(group);
    section.variantCount += group.variants.length;
  });
  return sections;
}

function sortedClassNames(grouped) {
  return Array.from(grouped.keys()).sort((a, b) => {
    const aIndex = WEIGHT_CLASS_ORDER.indexOf(a);
    const bIndex = WEIGHT_CLASS_ORDER.indexOf(b);
    return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex) || a.localeCompare(b);
  });
}

function groupMechsForList(mechs) {
  const groups = new Map();
  for (const mech of mechs) {
    const weightClass = mech.weight_class || "unknown";
    const chassis = mech.chassis || "unknown";
    if (!groups.has(weightClass)) groups.set(weightClass, new Map());
    const classGroup = groups.get(weightClass);
    if (!classGroup.has(chassis)) classGroup.set(chassis, []);
    classGroup.get(chassis).push(mech);
  }
  return groups;
}

function loadoutForMech(mech) {
  return state.loadouts[mech?.stock_loadout] || {};
}

function podById(id) {
  return id ? state.omnipods[String(id)] || null : null;
}

function hasFixedOmnipods(mech) {
  const loadout = loadoutForMech(mech);
  return Object.values(loadout.components || {}).some((component) => component.omnipod);
}

function omnipodIcon(mech) {
  if (!hasFixedOmnipods(mech)) return "";
  return `
    <span class="omnipod-icon" title="Omnipod" role="img" aria-label="Omnipod">
      <svg viewBox="0 0 32 32" focusable="false" aria-hidden="true">
        <path d="M13 3h6l1 3-2 2h-4l-2-2 1-3Z"></path>
        <path d="M11 9h10l1.5 5-3.5 3h-6l-3.5-3L11 9Z"></path>
        <path d="M5 9h4l-1 9-4 2-1-6 2-5Z"></path>
        <path d="M23 9h4l2 5-1 6-4-2-1-9Z"></path>
        <path d="M11 18h4l-1 11H8l1-7 2-4Z"></path>
        <path d="M17 18h4l2 4 1 7h-6l-1-11Z"></path>
      </svg>
    </span>
  `;
}

function findOmnipod(chassis, setName, componentName) {
  const wantedChassis = String(chassis || "").toLowerCase();
  const wantedSet = String(setName || "").toLowerCase();
  const wantedComponent = String(componentName || "").toLowerCase();
  return Object.values(state.omnipods || {}).find((pod) => (
    String(pod.chassis || "").toLowerCase() === wantedChassis
    && String(pod.set || "").toLowerCase() === wantedSet
    && String(pod.component || "").toLowerCase() === wantedComponent
  )) || null;
}

function dominantOmnipodSet(mech, build) {
  const counts = new Map();
  Object.values(build?.components || {}).forEach((component) => {
    const pod = podById(component.omnipod);
    if (!pod?.set) return;
    counts.set(pod.set, (counts.get(pod.set) || 0) + 1);
  });
  if (!counts.size) return "";
  const loadoutName = String(mech?.stock_loadout || mech?.name || "").toLowerCase();
  return Array.from(counts.entries()).sort((a, b) => {
    const countDiff = b[1] - a[1];
    if (countDiff) return countDiff;
    const aExact = a[0] === loadoutName ? 1 : 0;
    const bExact = b[0] === loadoutName ? 1 : 0;
    return bExact - aExact || a[0].localeCompare(b[0]);
  })[0][0];
}

function applyFixedOmnipods(mech, build) {
  const loadout = loadoutForMech(mech);
  build.components ||= {};
  for (const name of COMPONENT_ORDER) {
    build.components[name] ||= { armor: 0, items: [] };
    const stockPodId = loadout.components?.[name]?.omnipod;
    if (stockPodId) build.components[name].omnipod = stockPodId;
  }
  const centre = build.components.centre_torso;
  if (centre && !centre.omnipod) {
    const setName = dominantOmnipodSet(mech, build);
    const centrePod = findOmnipod(mech?.chassis, setName, "centre_torso");
    if (centrePod?.id) centre.omnipod = centrePod.id;
  }
  return build;
}

function buildFromLoadout(mech) {
  const loadout = loadoutForMech(mech);
  const components = {};
  for (const name of COMPONENT_ORDER) {
    const component = loadout.components?.[name] || {};
    components[name] = {
      armor: number(component.armor),
      omnipod: component.omnipod || null,
      items: (component.items || []).map((entry) => ({ ...entry })),
    };
  }
  const rearArmor = REAR_ARMOR_COMPONENTS.reduce((sum, name) => {
    return sum + number(loadout.components?.[name]?.armor);
  }, 0);
  return applyFixedOmnipods(mech, {
    mechId: mech.id,
    loadoutName: mech.stock_loadout,
    components,
    rearArmor,
    upgrades: JSON.parse(JSON.stringify(loadout.upgrades || {})),
  });
}

function savedKey(mech) {
  return `local-mwo-build:${mech.name}`;
}

function loadBuild(mech) {
  const saved = localStorage.getItem(savedKey(mech));
  if (saved) {
    try {
      return applyFixedOmnipods(mech, JSON.parse(saved));
    } catch {
      localStorage.removeItem(savedKey(mech));
    }
  }
  return buildFromLoadout(mech);
}

function currentDefinition(mech = state.selectedMech) {
  return mech?.definition || {};
}

function hardpointsFromLoadoutItems(buildComponent) {
  const byType = new Map();
  (buildComponent?.items || []).forEach((entry) => {
    const item = itemById(entry.item_id);
    if (item?.item_type !== "weapon") return;
    const type = item.hardpoint_type || String(item.stats?.type || "").toLowerCase();
    if (!type) return;
    byType.set(type, (byType.get(type) || 0) + itemSlots(item));
  });
  return Array.from(byType.entries()).map(([type, slots]) => ({
    hardpoint_type: type,
    Type: type,
    Slots: slots,
    inferred: true,
  }));
}

function effectiveComponentDefinition(mech = state.selectedMech, build = state.currentBuild, componentName) {
  const base = currentDefinition(mech).components?.[componentName] || {};
  const buildComponent = build?.components?.[componentName] || {};
  const pod = podById(buildComponent.omnipod);
  const hardpoints = pod?.hardpoints?.length
    ? pod.hardpoints
    : (base.hardpoints?.length ? base.hardpoints : hardpointsFromLoadoutItems(buildComponent));
  return {
    ...base,
    hardpoints: hardpoints.map((hp) => ({ ...hp })),
  };
}

function effectiveDefinition(mech = state.selectedMech, build = state.currentBuild) {
  const definition = currentDefinition(mech);
  const components = {};
  for (const name of Object.keys(definition.components || {})) {
    components[name] = effectiveComponentDefinition(mech, build, name);
  }
  return {
    ...definition,
    components,
  };
}

function setMainTab(tabName) {
  if (tabName === "mechlab") tabName = "info";
  const isCompareTab = tabName === "compare";
  state.activeMainTab = tabName;
  state.compareMode = isCompareTab;
  if (isCompareTab) {
    state.compareMechIds = [];
    state.compareBaselineMechId = null;
    state.selectedChassis = "";
  } else if (state.selectedMech) {
    state.selectedChassis = state.selectedMech.chassis || "";
  }
  document.querySelectorAll("[data-main-tab]").forEach((button) => {
    const active = button.dataset.mainTab === tabName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const active = panel.id === `tab-${tabName}`;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  $("mech-browser-layout").hidden = tabName === "stats";
  $("summary-strip").hidden = tabName !== "mechlab";
  renderMechList();
  renderInfoPanel();
  renderComparePanel();
  renderStatsPanel();
  updateCompareOverlay();
}

function addQuirk(collector, quirk, source) {
  if (!quirk?.name) return;
  const key = quirk.name;
  if (!collector.has(key)) {
    collector.set(key, {
      name: quirk.name,
      display_name: quirk.display_name || quirk.name,
      value: 0,
      sources: new Set(),
    });
  }
  const entry = collector.get(key);
  entry.value += number(quirk.value);
  if (source) entry.sources.add(source);
}

function effectiveQuirks(mech = state.selectedMech, build = state.currentBuild) {
  const collector = new Map();
  const definition = currentDefinition(mech);
  (definition.quirks || []).forEach((quirk) => addQuirk(collector, quirk, "Variant"));

  const setCounts = {};
  const setBonuses = {};
  for (const [component, buildComponent] of Object.entries(build?.components || {})) {
    const podId = buildComponent.omnipod;
    if (!podId) continue;
    const pod = state.omnipods[String(podId)];
    if (!pod) continue;
    (pod.quirks || []).forEach((quirk) => addQuirk(collector, quirk, COMPONENT_NAMES[component] || "Omnipod"));
    if (pod.set) {
      setCounts[pod.set] = (setCounts[pod.set] || 0) + 1;
      setBonuses[pod.set] = pod.set_bonuses || [];
    }
  }

  for (const [setName, count] of Object.entries(setCounts)) {
    for (const bonus of setBonuses[setName] || []) {
      if (count >= number(bonus.piece_count)) {
        (bonus.quirks || []).forEach((quirk) => addQuirk(collector, quirk, `${setName.toUpperCase()} ${bonus.piece_count}pc`));
      }
    }
  }

  return Array.from(collector.values())
    .map((quirk) => ({
      ...quirk,
      value_text: quirkValueText(quirk.name, quirk.value),
      source_text: Array.from(quirk.sources).join(", "),
    }))
    .sort((a, b) => a.display_name.localeCompare(b.display_name));
}

function effectiveQuirkValues(mech = state.selectedMech, build = state.currentBuild) {
  const values = {};
  effectiveQuirks(mech, build).forEach((quirk) => {
    values[quirk.name.toLowerCase()] = number(quirk.value);
  });
  return values;
}

function quirkAdd(values, prefix, suffix) {
  return number(values[`${prefix}_all_additive`]) + number(values[`${prefix}_${suffix}_additive`]);
}

function quirkMultiplier(values, names) {
  return 1 + names.reduce((sum, name) => sum + number(values[name]), 0);
}

function baseMaxArmor(componentName, mech = state.selectedMech) {
  if (componentName === "head") return 18;
  return number(currentDefinition(mech).components?.[componentName]?.hp) * 2;
}

function armorInfoRows(values, mech = state.selectedMech) {
  return INFO_COMPONENTS.map((component) => {
    const frontBase = baseMaxArmor(component.key, mech);
    const front = frontBase + quirkAdd(values, "armorresist", component.suffix);
    const rearBase = 0;
    const rear = component.rearSuffix
      ? rearBase + number(values.armorresist_all_additive) + number(values[`armorresist_${component.rearSuffix}_additive`])
      : null;
    return {
      label: component.label,
      totalBase: frontBase + (component.rearSuffix ? rearBase : 0),
      total: front + number(rear),
      frontBase,
      front,
      rearBase: component.rearSuffix ? rearBase : null,
      rear,
    };
  });
}

function structureInfoRows(values, mech = state.selectedMech) {
  return INFO_COMPONENTS.map((component) => {
    const base = number(currentDefinition(mech).components?.[component.key]?.hp);
    return {
      label: component.label,
      base,
      total: base + quirkAdd(values, "internalresist", component.suffix),
    };
  });
}

function combinedDurabilityRows(armorRows, structureRows) {
  return armorRows.map((armor, index) => {
    const structure = structureRows[index] || { base: 0, total: 0 };
    const frontBase = armor.frontBase + structure.base;
    const front = armor.front + structure.total;
    const rearBase = armor.rearBase;
    const rear = armor.rear;
    return {
      label: armor.label,
      totalBase: armor.totalBase + structure.base,
      total: armor.total + structure.total,
      frontBase,
      front,
      rearBase,
      rear,
    };
  });
}

function formatInfoNumber(value, digits = 1) {
  if (!Number.isFinite(value)) return "-";
  return fmt(value, digits);
}

function signedInfoNumber(value, digits = 1) {
  if (!Number.isFinite(value)) return "-";
  const text = fmt(Math.abs(value), digits);
  return `${value >= 0 ? "+" : "-"}${text}`;
}

function specValue(base, final, digits = 1, unit = "", applyQuirks = state.infoApplyQuirks) {
  const delta = final - base;
  const baseText = `${formatInfoNumber(base, digits)}${unit}`;
  if (!applyQuirks || Math.abs(delta) < 0.0001) {
    return `
      <span class="spec-value spec-base-only">
        <span class="spec-final spec-final-base">${baseText}</span>
        <span class="spec-detail spec-detail-empty"></span>
      </span>
    `;
  }
  return `
    <span class="spec-value spec-with-quirk">
      <span class="spec-final">${formatInfoNumber(final, digits)}${unit}</span>
      <span class="spec-detail">
        <span class="spec-sep">|</span>
        <span class="spec-base">${baseText}</span>
        <span class="spec-op">+</span>
        <span class="spec-quirk">${signedInfoNumber(delta, digits)}${unit}</span>
      </span>
    </span>
  `;
}

function specValueList(baseValues, finalValues, digits = 1, unit = "", applyQuirks = state.infoApplyQuirks) {
  const hasDelta = finalValues.some((value, index) => Math.abs(value - baseValues[index]) >= 0.0001);
  const baseText = baseValues.map((value) => formatInfoNumber(value, digits)).join(" / ");
  if (!applyQuirks || !hasDelta) {
    return `
      <span class="spec-value spec-base-only">
        <span class="spec-final spec-final-base">${baseText}${unit}</span>
        <span class="spec-detail spec-detail-empty"></span>
      </span>
    `;
  }
  const finalText = finalValues.map((value) => formatInfoNumber(value, digits)).join(" / ");
  const deltaText = finalValues.map((value, index) => signedInfoNumber(value - baseValues[index], digits)).join(" / ");
  return `
    <span class="spec-value spec-with-quirk">
      <span class="spec-final">${finalText}${unit}</span>
      <span class="spec-detail">
        <span class="spec-sep">|</span>
        <span class="spec-base">${baseText}${unit}</span>
        <span class="spec-op">+</span>
        <span class="spec-quirk">${deltaText}${unit}</span>
      </span>
    </span>
  `;
}

function specMobilityText(finalText, hasDelta, applyQuirks = state.infoApplyQuirks) {
  const finalClass = applyQuirks && hasDelta ? "" : " spec-final-base";
  return `
    <span class="spec-value spec-mobility-value">
      <span class="spec-final${finalClass}">${finalText}</span>
      <span class="spec-detail spec-detail-empty"></span>
    </span>
  `;
}

function specMobilityValue(base, final, digits = 1, unit = "", applyQuirks = state.infoApplyQuirks) {
  const hasDelta = Math.abs(final - base) >= 0.0001;
  const value = applyQuirks && hasDelta ? final : base;
  return specMobilityText(`${formatInfoNumber(value, digits)}${unit}`, hasDelta, applyQuirks);
}

function specMobilityList(baseValues, finalValues, digits = 1, unit = "", applyQuirks = state.infoApplyQuirks) {
  const hasDelta = finalValues.some((value, index) => Math.abs(value - baseValues[index]) >= 0.0001);
  const values = applyQuirks && hasDelta ? finalValues : baseValues;
  const finalText = `${values.map((value) => formatInfoNumber(value, digits)).join(" / ")}${unit}`;
  return specMobilityText(finalText, hasDelta, applyQuirks);
}

function specAnglePair(baseTorso, finalTorso, arm, axis, digits = 1, applyQuirks = state.infoApplyQuirks) {
  const torsoChanged = Math.abs(finalTorso - baseTorso) >= 0.0001;
  const torso = applyQuirks && torsoChanged ? finalTorso : baseTorso;
  const torsoClass = applyQuirks && torsoChanged ? "spec-angle-boosted" : "";
  return specMobilityText(`
    <span class="${torsoClass}">${formatInfoNumber(torso, digits)}</span>
    <span class="spec-speed-sep">/</span>
    <span>${formatInfoNumber(arm, digits)}</span>
  `, false, applyQuirks);
}

function speedPairHtml(forward, reverse, forwardChanged, reverseChanged, digits = 1, unit = "") {
  const forwardClass = forwardChanged ? "spec-speed-boosted" : "";
  const reverseClass = reverseChanged ? "spec-speed-boosted" : "";
  return `
    <span class="${forwardClass}">${formatInfoNumber(forward, digits)}</span>
    <span class="spec-speed-sep">-</span>
    <span class="${reverseClass}">${formatInfoNumber(reverse, digits)}${unit}</span>
  `;
}

function specMobilitySpeed(baseForward, baseReverse, finalForward, finalReverse, digits = 1, unit = "", applyQuirks = state.infoApplyQuirks) {
  const forwardChanged = Math.abs(finalForward - baseForward) >= 0.0001;
  const reverseChanged = Math.abs(finalReverse - baseReverse) >= 0.0001;
  const hasDelta = forwardChanged || reverseChanged;
  const forward = applyQuirks && hasDelta ? finalForward : baseForward;
  const reverse = applyQuirks && hasDelta ? finalReverse : baseReverse;
  const finalText = speedPairHtml(
    forward,
    reverse,
    applyQuirks && forwardChanged,
    applyQuirks && reverseChanged,
    digits,
    unit,
  );
  return specMobilityText(finalText, false, applyQuirks);
}

function movementInfo(values, mech = state.selectedMech) {
  const stats = currentDefinition(mech).stats || {};
  const movement = currentDefinition(mech).movement || {};
  const tons = number(stats.MaxTons);
  const maxEngine = number(stats.MaxEngineRating);
  const baseSpeed = tons ? number(movement.MaxMovementSpeed) * maxEngine / tons : 0;
  const reverseMultiplier = number(movement.ReverseSpeedMultiplier);
  const speedMultiplier = quirkMultiplier(values, ["mechtopspeed_multiplier"]);
  const reverseSpeedMultiplier = quirkMultiplier(values, ["reversespeed_multiplier"]);
  const accelMultiplier = quirkMultiplier(values, ["mechacceleration_multiplier", "accellerp_all_multiplier"]);
  const decelMultiplier = quirkMultiplier(values, ["mechdeceleration_multiplier", "decellerp_all_multiplier"]);
  const turnMultiplier = quirkMultiplier(values, ["turnrate_multiplier", "turnlerp_all_multiplier"]);
  const baseAcceleration = number(movement.AccelLerpMidRate);
  const baseDeceleration = tons ? number(movement.DecelLerpMidRate) / tons : 0;
  const baseTurnSpeed = number(movement.TurnLerpMidRate) * 180 / Math.PI;
  const baseTorsoSpeed = number(movement.TorsoTurnSpeedYaw);
  const baseTorsoAngleYaw = number(movement.MaxTorsoAngleYaw);
  const baseTorsoAnglePitch = number(movement.MaxTorsoAnglePitch);
  const baseArmAngleYaw = number(movement.MaxArmRotationYaw);
  const baseArmAnglePitch = number(movement.MaxArmRotationPitch);
  const yawAngle = (number(movement.MaxTorsoAngleYaw) + number(values.torso_yawangle_additive)) * quirkMultiplier(values, ["torso_yawangle_multiplier"]);
  const pitchAngle = number(movement.MaxTorsoAnglePitch) + number(values.torso_pitchangle_additive);

  return {
    baseMaxSpeed: baseSpeed,
    maxSpeed: baseSpeed * speedMultiplier,
    baseReverseSpeed: baseSpeed * reverseMultiplier,
    reverseSpeed: baseSpeed * reverseMultiplier * speedMultiplier * reverseSpeedMultiplier,
    baseAcceleration,
    acceleration: baseAcceleration * accelMultiplier,
    baseDeceleration,
    deceleration: baseDeceleration * decelMultiplier,
    baseAngleX: [baseTorsoAngleYaw, baseArmAngleYaw],
    angleX: [yawAngle, baseArmAngleYaw],
    baseAngleY: [baseTorsoAnglePitch, baseArmAnglePitch],
    angleY: [pitchAngle, baseArmAnglePitch],
    baseTorsoSpeed,
    torsoSpeed: baseTorsoSpeed * quirkMultiplier(values, ["torso_yawspeed_multiplier"]),
    baseTurnSpeed,
    turnSpeed: baseTurnSpeed * turnMultiplier,
  };
}

function renderInfoTable(title, headers, rows, options = {}) {
  const classes = ["info-card", options.compact ? "info-card-compact" : ""].filter(Boolean).join(" ");
  return `
    <section class="${classes}">
      <h3>${title}</h3>
      <div class="info-table">
        <div class="info-row info-head">${headers.map((header, index) => `<span>${index === 0 ? header : specHeader(header)}</span>`).join("")}</div>
        ${rows
          .map((row) => `<div class="info-row">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`)
          .join("")}
      </div>
    </section>
  `;
}

function specHeader(label) {
  return `
    <span class="spec-value spec-header-value">
      <span class="spec-final spec-header-final">${label}</span>
      <span class="spec-detail spec-detail-empty"></span>
    </span>
  `;
}

function quirkSectionTitle(quirk) {
  const match = (quirk.source_text || "").match(/\b(\d+)pc\b/i);
  return match ? `SET OF ${match[1]}` : "QUIRKS";
}

function quirkToneClass(quirk) {
  const text = `${quirk.name || ""} ${quirk.display_name || ""}`.toLowerCase();
  if (text.includes("laser") || text.includes("energy")) return "quirk-tone-energy";
  if (text.includes("missile") || text.includes("lrm") || text.includes("srm") || text.includes("atm") || text.includes("narc")) return "quirk-tone-missile";
  if (text.includes("armor") || text.includes("structure") || text.includes("resist")) return "quirk-tone-armor";
  return "quirk-tone-default";
}

function quirkReduction(quirks, name) {
  const quirk = quirks.find((entry) => entry.name.toLowerCase() === name);
  return Math.max(0, -number(quirk?.value));
}

function quirkIncrease(quirks, name) {
  const quirk = quirks.find((entry) => entry.name.toLowerCase() === name);
  return Math.max(0, number(quirk?.value));
}

function weaponQuirkTargets() {
  if (state.weaponQuirkTargetCache) return state.weaponQuirkTargetCache;

  const aliasTypes = new Map();
  const weapons = [];
  const weaponsByKey = new Map();
  for (const item of Object.values(state.equipment?.items || {})) {
    if (item.item_type !== "weapon" && item.family !== "weapons") continue;
    const type = String(item.hardpoint_type || item.stats?.type || "").toLowerCase();
    if (!["energy", "missile", "ballistic"].includes(type)) continue;

    const keys = new Set([
      item.name,
      item.display_name,
      ...(String(item.aliases || "").split(",")),
    ].map(normalizeLookupKey).filter(Boolean));

    const weapon = { id: weapons.length, type, keys };
    weapons.push(weapon);

    for (const key of keys) {
      if (!aliasTypes.has(key)) aliasTypes.set(key, new Set());
      aliasTypes.get(key).add(type);
      if (!weaponsByKey.has(key)) weaponsByKey.set(key, []);
      weaponsByKey.get(key).push(weapon);
    }
  }

  state.weaponQuirkTargetCache = { aliasTypes, weapons, weaponsByKey };
  return state.weaponQuirkTargetCache;
}

function weaponQuirkTypeLookup() {
  if (state.weaponQuirkTypeCache) return state.weaponQuirkTypeCache;
  state.weaponQuirkTypeCache = weaponQuirkTargets().aliasTypes;
  return state.weaponQuirkTypeCache;
}

function cooldownQuirkPrefix(quirkName) {
  const name = String(quirkName || "").toLowerCase();
  if (!name.endsWith("_cooldown_multiplier") || DIRECT_COOLDOWN_QUIRKS.has(name)) return "";
  return normalizeLookupKey(name.replace(/_cooldown_multiplier$/, ""));
}

function heatQuirkPrefix(quirkName) {
  const name = String(quirkName || "").toLowerCase();
  if (!name.endsWith("_heat_multiplier") || DIRECT_HEAT_QUIRKS.has(name)) return "";
  return normalizeLookupKey(name.replace(/_heat_multiplier$/, ""));
}

function velocityQuirkPrefix(quirkName) {
  const name = String(quirkName || "").toLowerCase();
  if (!name.endsWith("_velocity_multiplier") || DIRECT_VELOCITY_QUIRKS.has(name)) return "";
  return normalizeLookupKey(name.replace(/_velocity_multiplier$/, ""));
}

function rangeQuirkPrefix(quirkName) {
  const name = String(quirkName || "").toLowerCase();
  if (!name.endsWith("_range_multiplier") || DIRECT_RANGE_QUIRKS.has(name)) return "";
  return normalizeLookupKey(name.replace(/_range_multiplier$/, ""));
}

function durationQuirkPrefix(quirkName) {
  const name = String(quirkName || "").toLowerCase();
  if (!name.endsWith("_duration_multiplier") || DIRECT_DURATION_QUIRKS.has(name)) return "";
  return normalizeLookupKey(name.replace(/_duration_multiplier$/, ""));
}

function spreadQuirkPrefix(quirkName) {
  const name = String(quirkName || "").toLowerCase();
  if (!name.endsWith("_spread_multiplier") || DIRECT_SPREAD_QUIRKS.has(name)) return "";
  return normalizeLookupKey(name.replace(/_spread_multiplier$/, ""));
}

function cooldownQuirkWeaponType(quirkName) {
  const prefix = cooldownQuirkPrefix(quirkName);
  if (!prefix) return null;
  const types = weaponQuirkTypeLookup().get(prefix);
  if (!types || types.size !== 1) return null;
  return Array.from(types)[0];
}

function heatQuirkWeaponType(quirkName) {
  const prefix = heatQuirkPrefix(quirkName);
  if (!prefix) return null;
  const types = weaponQuirkTypeLookup().get(prefix);
  if (!types || types.size !== 1) return null;
  return Array.from(types)[0];
}

function weaponStatMax(quirks, prefixForQuirkName, valueForQuirk, type) {
  const activeStats = quirks
    .map((quirk) => ({
      prefix: prefixForQuirkName(quirk.name),
      value: valueForQuirk(quirk),
    }))
    .filter((quirk) => quirk.prefix && quirk.value > 0);

  if (!activeStats.length) return 0;

  const weaponTotals = new Map();
  const { weaponsByKey } = weaponQuirkTargets();
  for (const quirk of activeStats) {
    const weapons = weaponsByKey.get(quirk.prefix) || [];
    for (const weapon of weapons) {
      if (weapon.type !== type) continue;
      weaponTotals.set(weapon.id, (weaponTotals.get(weapon.id) || 0) + quirk.value);
    }
  }

  let maxStat = 0;
  for (const stat of weaponTotals.values()) {
    maxStat = Math.max(maxStat, stat);
  }
  return maxStat;
}

function energyWeaponStatMax(quirks, prefixForQuirkName) {
  return weaponStatMax(quirks, prefixForQuirkName, (quirk) => Math.max(0, -number(quirk.value)), "energy");
}

function energyWeaponCooldownMax(quirks) {
  return energyWeaponStatMax(quirks, cooldownQuirkPrefix);
}

function energyWeaponHeatMax(quirks) {
  return energyWeaponStatMax(quirks, heatQuirkPrefix);
}

function formatQuirkSummaryPercent(value) {
  return value > 0 ? `${fmt(value * 100, 1)}%` : "-";
}

function formatQuirkSummaryNumber(value) {
  return value > 0 ? `+${fmt(value, 1)}` : "-";
}

function renderQuirkSummary(title, toneClass, items) {
  if (!items.some((item) => item.value > 0)) return "";

  return `
    <div class="quirk-summary ${toneClass}">
      <div class="quirk-summary-title">${title}</div>
      <div class="quirk-summary-accent" aria-hidden="true"></div>
      <div class="quirk-summary-grid">
        ${items
          .map((item) => item.empty
            ? `<div class="quirk-summary-item quirk-summary-empty" aria-hidden="true"></div>`
            : `
              <div class="quirk-summary-item ${item.className}">
                <span>${item.label}</span>
                <strong>${item.format === "number" ? formatQuirkSummaryNumber(item.value) : formatQuirkSummaryPercent(item.value)}</strong>
              </div>
            `)
          .join("")}
      </div>
    </div>
  `;
}

function cooldownQuirkSummary(quirks) {
  const allCooldown = quirkReduction(quirks, "all_cooldown_multiplier");
  const weaponCooldownMax = { energy: 0, missile: 0, ballistic: 0 };

  for (const quirk of quirks) {
    const type = cooldownQuirkWeaponType(quirk.name);
    if (!type) continue;
    weaponCooldownMax[type] = Math.max(weaponCooldownMax[type], Math.max(0, -number(quirk.value)));
  }

  const energyCooldown = allCooldown + quirkReduction(quirks, "energy_cooldown_multiplier") + energyWeaponCooldownMax(quirks);
  const groups = [
    {
      label: t("quirk.energyCooldown"),
      className: "quirk-tone-energy",
      value: energyCooldown,
    },
    {
      label: t("quirk.missileCooldown"),
      className: "quirk-tone-missile",
      value: allCooldown + quirkReduction(quirks, "missile_cooldown_multiplier") + weaponCooldownMax.missile,
    },
    {
      label: t("quirk.ballisticCooldown"),
      className: "quirk-tone-default",
      value: allCooldown + quirkReduction(quirks, "ballistic_cooldown_multiplier") + weaponCooldownMax.ballistic,
    },
  ];
  const maxCooldown = Math.max(allCooldown, ...groups.map((group) => group.value));
  return renderQuirkSummary(t("quirk.cooldownSummary"), "quirk-summary-cooldown", [
    { label: t("quirk.maxCooldown"), className: "quirk-summary-max", value: maxCooldown },
    ...groups,
  ]);
}

function heatQuirkSummary(quirks) {
  const allHeat = quirkReduction(quirks, "all_heat_multiplier");
  const weaponHeatMax = { energy: 0, missile: 0, ballistic: 0 };

  for (const quirk of quirks) {
    const type = heatQuirkWeaponType(quirk.name);
    if (!type) continue;
    weaponHeatMax[type] = Math.max(weaponHeatMax[type], Math.max(0, -number(quirk.value)));
  }

  const energyHeat = allHeat + quirkReduction(quirks, "energy_heat_multiplier") + energyWeaponHeatMax(quirks);
  const groups = [
    {
      label: t("quirk.energyHeat"),
      className: "quirk-tone-energy",
      value: energyHeat,
    },
    {
      label: t("quirk.missileHeat"),
      className: "quirk-tone-missile",
      value: allHeat + quirkReduction(quirks, "missile_heat_multiplier") + weaponHeatMax.missile,
    },
    {
      label: t("quirk.ballisticHeat"),
      className: "quirk-tone-default",
      value: allHeat + quirkReduction(quirks, "ballistic_heat_multiplier") + weaponHeatMax.ballistic,
    },
  ];
  const maxHeat = Math.max(allHeat, ...groups.map((group) => group.value));
  const heatDissipation = Math.max(0, number(quirks.find((quirk) => quirk.name.toLowerCase() === "heatdissipation_multiplier")?.value));

  return renderQuirkSummary(t("quirk.heatSummary"), "quirk-summary-heat", [
    { label: t("quirk.maxHeatReduction"), className: "quirk-summary-max", value: maxHeat },
    ...groups,
    { label: t("quirk.heatDissipation"), className: "quirk-tone-default", value: heatDissipation },
  ]);
}

function velocityQuirkSummary(quirks) {
  const allVelocity = quirkIncrease(quirks, "all_velocity_multiplier");
  const groups = [
    {
      label: t("quirk.energyVelocity"),
      className: "quirk-tone-energy",
      value: allVelocity + quirkIncrease(quirks, "energy_velocity_multiplier") + weaponStatMax(quirks, velocityQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "energy"),
    },
    {
      label: t("quirk.missileVelocity"),
      className: "quirk-tone-missile",
      value: allVelocity + quirkIncrease(quirks, "missile_velocity_multiplier") + weaponStatMax(quirks, velocityQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "missile"),
    },
    {
      label: t("quirk.ballisticVelocity"),
      className: "quirk-tone-default",
      value: allVelocity + quirkIncrease(quirks, "ballistic_velocity_multiplier") + weaponStatMax(quirks, velocityQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "ballistic"),
    },
  ];
  const maxVelocity = Math.max(allVelocity, ...groups.map((group) => group.value));
  return renderQuirkSummary(t("quirk.velocitySummary"), "quirk-summary-velocity", [
    { label: t("quirk.maxVelocity"), className: "quirk-summary-max", value: maxVelocity },
    ...groups,
  ]);
}

function rangeQuirkSummary(quirks) {
  const allRange = quirkIncrease(quirks, "all_range_multiplier");
  const groups = [
    {
      label: t("quirk.energyRange"),
      className: "quirk-tone-energy",
      value: allRange + quirkIncrease(quirks, "energy_range_multiplier") + weaponStatMax(quirks, rangeQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "energy"),
    },
    {
      label: t("quirk.missileRange"),
      className: "quirk-tone-missile",
      value: allRange + quirkIncrease(quirks, "missile_range_multiplier") + weaponStatMax(quirks, rangeQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "missile"),
    },
    {
      label: t("quirk.ballisticRange"),
      className: "quirk-tone-default",
      value: allRange + quirkIncrease(quirks, "ballistic_range_multiplier") + weaponStatMax(quirks, rangeQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "ballistic"),
    },
  ];
  const maxRange = Math.max(allRange, ...groups.map((group) => group.value));
  return renderQuirkSummary(t("quirk.rangeSummary"), "quirk-summary-range", [
    { label: t("quirk.maxRange"), className: "quirk-summary-max", value: maxRange },
    ...groups,
  ]);
}

function durationQuirkSummary(quirks) {
  const allDuration = quirkReduction(quirks, "all_duration_multiplier");
  const energyDuration = allDuration + quirkReduction(quirks, "energy_duration_multiplier") + weaponStatMax(quirks, durationQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "energy");
  const machineGunRof = quirkIncrease(quirks, "ismachinegun_rof_multiplier") + quirkIncrease(quirks, "clanmachinegun_rof_multiplier");
  const rotaryAcRof = quirkIncrease(quirks, "rotaryautocannon_rof_multiplier");
  const amsRof = quirkIncrease(quirks, "clanantimissilesystem_rof_multiplier");
  const items = [
    { label: t("quirk.maxDuration"), className: "quirk-summary-max", value: Math.max(energyDuration, machineGunRof, rotaryAcRof, amsRof) },
    { label: t("quirk.energyDuration"), className: "quirk-tone-energy", value: energyDuration },
    { label: t("quirk.mgRof"), className: "quirk-tone-default", value: machineGunRof },
    { label: t("quirk.racRof"), className: "quirk-tone-default", value: rotaryAcRof },
  ];
  if (amsRof > 0) {
    items.push({ label: t("quirk.amsRof"), className: "quirk-tone-default", value: amsRof });
  }
  return renderQuirkSummary(t("quirk.durationSummary"), "quirk-summary-duration", [
    ...items,
  ]);
}

function spreadQuirkSummary(quirks) {
  const allSpread = quirkReduction(quirks, "all_spread_multiplier");
  const missileSpread = allSpread + quirkReduction(quirks, "missile_spread_multiplier") + weaponStatMax(quirks, spreadQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "missile");
  const ballisticSpread = allSpread + quirkReduction(quirks, "ballistic_spread_multiplier") + weaponStatMax(quirks, spreadQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "ballistic");
  const maxSpread = Math.max(allSpread, missileSpread, ballisticSpread);
  return renderQuirkSummary(t("quirk.spreadSummary"), "quirk-summary-spread", [
    { label: t("quirk.maxSpread"), className: "quirk-summary-max", value: maxSpread },
    { empty: true, value: 0 },
    { label: t("quirk.missileSpread"), className: "quirk-tone-missile", value: missileSpread },
    { label: t("quirk.ballisticSpread"), className: "quirk-tone-default", value: ballisticSpread },
  ]);
}

function cooldownSummaryMax(quirks) {
  const allCooldown = quirkReduction(quirks, "all_cooldown_multiplier");
  const energyCooldown = allCooldown + quirkReduction(quirks, "energy_cooldown_multiplier") + energyWeaponCooldownMax(quirks);
  const missileCooldown = allCooldown + quirkReduction(quirks, "missile_cooldown_multiplier") + weaponStatMax(quirks, cooldownQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "missile");
  const ballisticCooldown = allCooldown + quirkReduction(quirks, "ballistic_cooldown_multiplier") + weaponStatMax(quirks, cooldownQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "ballistic");
  return Math.max(allCooldown, energyCooldown, missileCooldown, ballisticCooldown);
}

function heatSummaryMax(quirks) {
  const allHeat = quirkReduction(quirks, "all_heat_multiplier");
  const energyHeat = allHeat + quirkReduction(quirks, "energy_heat_multiplier") + energyWeaponHeatMax(quirks);
  const missileHeat = allHeat + quirkReduction(quirks, "missile_heat_multiplier") + weaponStatMax(quirks, heatQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "missile");
  const ballisticHeat = allHeat + quirkReduction(quirks, "ballistic_heat_multiplier") + weaponStatMax(quirks, heatQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "ballistic");
  return Math.max(allHeat, energyHeat, missileHeat, ballisticHeat);
}

function rangeSummaryMax(quirks) {
  const allRange = quirkIncrease(quirks, "all_range_multiplier");
  const energyRange = allRange + quirkIncrease(quirks, "energy_range_multiplier") + weaponStatMax(quirks, rangeQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "energy");
  const missileRange = allRange + quirkIncrease(quirks, "missile_range_multiplier") + weaponStatMax(quirks, rangeQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "missile");
  const ballisticRange = allRange + quirkIncrease(quirks, "ballistic_range_multiplier") + weaponStatMax(quirks, rangeQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "ballistic");
  return Math.max(allRange, energyRange, missileRange, ballisticRange);
}

function velocitySummaryMax(quirks) {
  const allVelocity = quirkIncrease(quirks, "all_velocity_multiplier");
  const energyVelocity = allVelocity + quirkIncrease(quirks, "energy_velocity_multiplier") + weaponStatMax(quirks, velocityQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "energy");
  const missileVelocity = allVelocity + quirkIncrease(quirks, "missile_velocity_multiplier") + weaponStatMax(quirks, velocityQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "missile");
  const ballisticVelocity = allVelocity + quirkIncrease(quirks, "ballistic_velocity_multiplier") + weaponStatMax(quirks, velocityQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), "ballistic");
  return Math.max(allVelocity, energyVelocity, missileVelocity, ballisticVelocity);
}

function quirkSummaryStats(quirks) {
  return {
    cooldown: cooldownSummaryMax(quirks),
    heat: heatSummaryMax(quirks),
    durability: durabilitySummaryTotal(quirks),
    range: rangeSummaryMax(quirks),
    velocity: velocitySummaryMax(quirks),
  };
}

function durabilitySummaryTotal(quirks) {
  const values = {};
  for (const quirk of quirks) {
    values[quirk.name.toLowerCase()] = number(quirk.value);
  }

  const armorSuffixes = INFO_COMPONENTS.flatMap((component) => [component.suffix, component.rearSuffix].filter(Boolean));
  const totalArmor = armorSuffixes.reduce((sum, suffix) => (
    sum + number(values.armorresist_all_additive) + number(values[`armorresist_${suffix}_additive`])
  ), 0);
  const totalStructure = INFO_COMPONENTS.reduce((sum, component) => (
    sum + number(values.internalresist_all_additive) + number(values[`internalresist_${component.suffix}_additive`])
  ), 0);
  return totalArmor + totalStructure;
}

function specialQuirkCategories(quirks) {
  const texts = quirks.map((quirk) => `${quirk.name || ""} ${quirk.display_name || ""}`.toLowerCase());
  const hasQuirk = (patterns) => texts.some((text) => patterns.some((pattern) => (
    pattern instanceof RegExp ? pattern.test(text) : text.includes(pattern)
  )));

  return [
    hasQuirk(["ecm"]) ? "ECM" : "",
    hasQuirk(["jumpjet", "jump jet"]) ? t("special.jumpjets") : "",
    hasQuirk(["narc_duration_multiplier", "narcbeacon_narcduration_additive", "narc duration"]) ? t("special.narcDuration") : "",
  ].filter(Boolean);
}

function renderQuirkOverviewCard(quirks) {
  const specialCategories = specialQuirkCategories(quirks);
  const rows = [
    [t("info.cooldown"), formatQuirkSummaryPercent(cooldownSummaryMax(quirks))],
    [t("common.heat"), formatQuirkSummaryPercent(heatSummaryMax(quirks))],
    [t("info.durability"), formatQuirkSummaryNumber(durabilitySummaryTotal(quirks))],
    [t("info.range"), formatQuirkSummaryPercent(rangeSummaryMax(quirks))],
    [t("info.velocity"), formatQuirkSummaryPercent(velocitySummaryMax(quirks))],
  ];
  const specialTags = specialCategories.length
    ? specialCategories.map((label) => `<span class="quirk-overview-tag">${label}</span>`).join("")
    : `<span class="quirk-overview-empty-text">${t("info.noSpecialQuirks")}</span>`;

  return `
    <section class="info-card info-quirk-summary-card quirk-overview-card">
      <h3>${t("info.quirkSummary")}</h3>
      <div class="quirk-overview-table">
        <div class="quirk-overview-row quirk-overview-head">
          <span>${t("common.item")}</span>
          <span>${t("common.value")}</span>
        </div>
        ${rows.map((row) => `
          <div class="quirk-overview-row">
            <span>${row[0]}</span>
            <strong>${row[1]}</strong>
          </div>
        `).join("")}
        <div class="quirk-overview-row quirk-overview-special-row">
          <span>${t("info.specialQuirks")}</span>
          <div class="quirk-overview-tags">${specialTags}</div>
        </div>
      </div>
    </section>
  `;
}

function durabilityQuirkSummary(quirks) {
  const values = {};
  for (const quirk of quirks) {
    values[quirk.name.toLowerCase()] = number(quirk.value);
  }

  const armorSuffixes = INFO_COMPONENTS.flatMap((component) => [component.suffix, component.rearSuffix].filter(Boolean));
  const totalArmor = armorSuffixes.reduce((sum, suffix) => (
    sum + number(values.armorresist_all_additive) + number(values[`armorresist_${suffix}_additive`])
  ), 0);
  const totalStructure = INFO_COMPONENTS.reduce((sum, component) => (
    sum + number(values.internalresist_all_additive) + number(values[`internalresist_${component.suffix}_additive`])
  ), 0);
  const totalDurability = totalArmor + totalStructure;
  const critPrevention = Math.max(0, -number(values.critchance_receiving_multiplier));

  return renderQuirkSummary(t("quirk.durabilitySummary"), "quirk-summary-durability", [
    { label: t("quirk.maxDurability"), className: "quirk-summary-max", value: totalDurability, format: "number" },
    { label: t("quirk.armor"), className: "quirk-tone-armor", value: totalArmor, format: "number" },
    { label: t("quirk.structure"), className: "quirk-tone-armor", value: totalStructure, format: "number" },
    { label: t("quirk.critPrevent"), className: "quirk-tone-default", value: critPrevention },
  ]);
}

function attackQuirkSummary(quirks) {
  return `${cooldownQuirkSummary(quirks)}${heatQuirkSummary(quirks)}${rangeQuirkSummary(quirks)}${velocityQuirkSummary(quirks)}${durationQuirkSummary(quirks)}${spreadQuirkSummary(quirks)}${durabilityQuirkSummary(quirks)}`;
}

function renderQuirkList(quirks, emptyText = "No quirks") {
  if (!quirks.length) return `<div class="empty">${emptyText}</div>`;

  const sections = [];
  for (const quirk of quirks) {
    const title = quirkSectionTitle(quirk);
    let section = sections.find((entry) => entry.title === title);
    if (!section) {
      section = { title, quirks: [] };
      sections.push(section);
    }
    section.quirks.push(quirk);
  }

  return `${attackQuirkSummary(quirks)}${sections
    .map((section) => `
      <div class="quirk-section">
        ${section.title === "QUIRKS" ? "" : `<div class="quirk-section-title">${section.title}</div>`}
        <div class="quirk-rows">
          ${section.quirks
            .map((quirk) => {
              const tone = quirkToneClass(quirk);
              return `
                <div class="quirk ${tone}" title="${quirk.source_text || quirk.name}">
                  <span class="quirk-name">${quirk.display_name}</span>
                  <span class="quirk-value">${quirk.value_text}</span>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    `)
    .join("")}`;
}

function renderInfoQuirks(quirks) {
  return `
    <section class="info-card info-quirks-card">
      <div class="section-title-row">
        <h3>QUIRKS</h3>
      </div>
      <div class="quirks">${renderQuirkList(quirks)}</div>
    </section>
  `;
}

function compareMechs() {
  return state.compareMechIds.map((id) => mechById(id)).filter(Boolean);
}

function compareBuildForMech(mech) {
  if (state.selectedMech && String(state.selectedMech.id) === String(mech.id)) {
    return state.currentBuild || loadBuild(mech);
  }
  return loadBuild(mech);
}

function infoDataForMech(mech, applyQuirks = state.infoApplyQuirks) {
  const build = compareBuildForMech(mech);
  const values = applyQuirks ? effectiveQuirkValues(mech, build) : {};
  const armorRows = armorInfoRows(values, mech);
  const structureRows = structureInfoRows(values, mech);
  const combinedRows = combinedDurabilityRows(armorRows, structureRows);
  const stats = currentDefinition(mech).stats || {};

  return {
    mech,
    stats,
    quirks: effectiveQuirks(mech, build),
    armorRows,
    structureRows,
    combinedRows,
    armorTotal: armorRows.reduce((sum, row) => sum + number(row.total), 0),
    armorBaseTotal: armorRows.reduce((sum, row) => sum + number(row.totalBase), 0),
    structureTotal: structureRows.reduce((sum, row) => sum + number(row.total), 0),
    structureBaseTotal: structureRows.reduce((sum, row) => sum + number(row.base), 0),
    combinedTotal: combinedRows.reduce((sum, row) => sum + number(row.total), 0),
    combinedBaseTotal: combinedRows.reduce((sum, row) => sum + number(row.totalBase), 0),
    movement: movementInfo(values, mech),
  };
}

function compareText(value) {
  return { text: value || "-", rank: null, deltaDigits: 1, deltaUnit: "" };
}

function formatCompareNumber(value, digits = 1) {
  if (!Number.isFinite(value)) return "-";
  for (let precision = digits; precision >= 0; precision -= 1) {
    const text = fmt(value, precision);
    if (text.length <= 4) return text;
  }
  return fmt(value, 0);
}

function signedCompareNumber(value, digits = 1) {
  if (!Number.isFinite(value)) return "-";
  return `${value >= 0 ? "+" : "-"}${formatCompareNumber(Math.abs(value), digits)}`;
}

function compareNumber(value, digits = 1, unit = "") {
  return {
    text: `${formatCompareNumber(value, digits)}${unit}`,
    rank: Number.isFinite(value) ? value : null,
    deltaDigits: digits,
    deltaUnit: unit,
  };
}

function comparePercent(value, digits = 1) {
  const percent = Number.isFinite(value) ? value * 100 : NaN;
  return {
    text: percent > 0 ? `${formatCompareNumber(percent, digits)}%` : "-",
    rank: Number.isFinite(percent) ? percent : null,
    deltaDigits: digits,
    deltaUnit: "%",
  };
}

function compareNumberList(values, digits = 1, unit = "") {
  const numericValues = values.filter((value) => Number.isFinite(value));
  return {
    text: `${values.map((value) => formatCompareNumber(value, digits)).join("/")}${unit}`,
    rank: numericValues.length ? numericValues.reduce((sum, value) => sum + value, 0) : null,
    deltaDigits: digits,
    deltaUnit: unit,
  };
}

function sameCompareRank(a, b) {
  return Math.abs(a - b) < COMPARE_RANK_EPSILON;
}

function renderCompareDelta(delta, cell) {
  if (Math.abs(delta) < COMPARE_RANK_EPSILON) return "";
  const direction = delta > 0 ? "up" : "down";
  const icon = delta > 0 ? "▲" : "▼";
  return `
    <span class="compare-delta compare-delta-${direction}">
      <span class="compare-delta-icon" aria-hidden="true">${icon}</span>
      <span>${signedCompareNumber(delta, cell.deltaDigits)}${cell.deltaUnit}</span>
    </span>
  `;
}

function compareDeltaForCell(cell, cells, entry) {
  if (!state.compareShowDeltas) return "";
  if (!Number.isFinite(cell.rank)) return "";
  const rankedCells = cells.filter((item) => Number.isFinite(item.cell.rank));
  if (rankedCells.length < 2) return "";

  if (state.compareBaselineMechId !== null) {
    const baseline = rankedCells.find((item) => String(item.entry.mech.id) === String(state.compareBaselineMechId));
    if (!baseline || String(entry.mech.id) === String(state.compareBaselineMechId)) return "";
    return renderCompareDelta(cell.rank - baseline.cell.rank, cell);
  }

  const ranks = rankedCells.map((item) => item.cell.rank);
  const minRank = Math.min(...ranks);
  const maxRank = Math.max(...ranks);
  if (sameCompareRank(minRank, maxRank)) return "";
  const referenceRank = sameCompareRank(cell.rank, maxRank) ? minRank : maxRank;
  return renderCompareDelta(cell.rank - referenceRank, cell);
}

function compareColorClassForCell(cell, cells, entry) {
  if (!Number.isFinite(cell.rank)) return "";
  const rankedCells = cells.filter((item) => Number.isFinite(item.cell.rank));
  if (rankedCells.length < 2) return "";

  if (state.compareBaselineMechId !== null) {
    const baseline = rankedCells.find((item) => String(item.entry.mech.id) === String(state.compareBaselineMechId));
    if (!baseline || String(entry.mech.id) === String(state.compareBaselineMechId)) return "";
    if (sameCompareRank(cell.rank, baseline.cell.rank)) return "";
    return cell.rank > baseline.cell.rank ? "compare-high" : "compare-low";
  }

  const ranks = rankedCells.map((item) => item.cell.rank);
  const minRank = Math.min(...ranks);
  const maxRank = Math.max(...ranks);
  if (sameCompareRank(minRank, maxRank)) return "";
  if (sameCompareRank(cell.rank, maxRank)) return "compare-high";
  if (sameCompareRank(cell.rank, minRank)) return "compare-low";
  return "";
}

function renderCompareCell(row, data, entry) {
  const cells = data.map((dataEntry) => ({ entry: dataEntry, cell: row.value(dataEntry) }));
  const cell = cells.find((item) => item.entry === entry)?.cell || row.value(entry);
  const isBaseline = String(state.compareBaselineMechId) === String(entry.mech.id);
  const classAttribute = isBaseline ? ` class="compare-baseline-column"` : "";
  const ranks = cells
    .map((item) => item.cell.rank)
    .filter((rank) => Number.isFinite(rank));
  if (data.length < 2 || !Number.isFinite(cell.rank) || ranks.length < 2) {
    return `<td${classAttribute}><span class="compare-cell-value">${cell.text}</span></td>`;
  }

  const className = compareColorClassForCell(cell, cells, entry);
  return `
    <td${classAttribute}>
      <span class="compare-cell-value ${className}">${cell.text}</span>
      ${compareDeltaForCell(cell, cells, entry)}
    </td>
  `;
}

function renderCompareTable(mechs) {
  if (!mechs.length) {
    return `<div class="empty compare-empty">${t("compare.empty")}</div>`;
  }

  const data = mechs.map(infoDataForMech);
  const bodyRows = INFO_COMPONENTS.map((component, index) => ({
    label: component.label,
    combined: (entry) => compareNumber(entry.combinedRows[index].total, 0),
    armor: (entry) => compareNumber(entry.armorRows[index].total, 0),
    structure: (entry) => compareNumber(entry.structureRows[index].total, 0),
  }));
  const rows = [
    { group: t("info.quirkSummary") },
    { label: t("info.cooldown"), value: (entry) => comparePercent(cooldownSummaryMax(entry.quirks)) },
    { label: t("common.heat"), value: (entry) => comparePercent(heatSummaryMax(entry.quirks)) },
    { label: t("info.durability"), value: (entry) => compareNumber(durabilitySummaryTotal(entry.quirks), 1) },
    { label: t("info.range"), value: (entry) => comparePercent(rangeSummaryMax(entry.quirks)) },
    { label: t("info.velocity"), value: (entry) => comparePercent(velocitySummaryMax(entry.quirks)) },
    { label: t("info.specialQuirks"), value: (entry) => compareText(specialQuirkCategories(entry.quirks).join(", ") || "-") },
    { group: t("info.durabilitySummary") },
    { label: t("info.armorStructureTotal"), value: (entry) => compareNumber(entry.combinedTotal, 0) },
    { label: `${t("common.armor")} ${t("stats.total")}`, value: (entry) => compareNumber(entry.armorTotal, 0) },
    { label: t("info.structureTotal"), value: (entry) => compareNumber(entry.structureTotal, 0) },
    { group: t("info.mobility") },
    { label: t("info.maxSpeed"), value: (entry) => compareNumber(entry.movement.maxSpeed, 1) },
    { label: t("info.acceleration"), value: (entry) => compareNumber(entry.movement.acceleration, 1) },
    { label: t("info.deceleration"), value: (entry) => compareNumber(entry.movement.deceleration, 1) },
    { label: t("info.turnSpeed"), value: (entry) => compareNumber(entry.movement.turnSpeed, 2) },
    { label: t("info.angleX"), value: (entry) => compareNumberList(entry.movement.angleX, 1) },
    { label: t("info.angleY"), value: (entry) => compareNumberList(entry.movement.angleY, 1) },
    { label: t("info.torsoSpeed"), value: (entry) => compareNumber(entry.movement.torsoSpeed, 1) },
    { group: t("info.combinedDurability") },
    { label: t("info.armorStructureTotal"), value: (entry) => compareNumber(entry.combinedTotal, 0) },
    ...bodyRows.map((row) => ({ label: row.label, value: row.combined })),
    { group: t("info.armorInfo") },
    { label: t("info.maxArmorTotal"), value: (entry) => compareNumber(entry.armorTotal, 0) },
    ...bodyRows.map((row) => ({ label: row.label, value: row.armor })),
    { group: t("info.structureInfo") },
    { label: t("info.structureTotal"), value: (entry) => compareNumber(entry.structureTotal, 0) },
    ...bodyRows.map((row) => ({ label: row.label, value: row.structure })),
    { group: t("stats.chassisInfo") },
    { label: t("stats.tons"), value: (entry) => compareNumber(number(entry.stats.MaxTons), 0, "t") },
    { label: t("stats.faction"), value: (entry) => compareText(factionLabel(entry.mech.faction)) },
    { label: t("stats.weight"), value: (entry) => compareText(WEIGHT_CLASS_LABELS[entry.mech.weight_class] || entry.mech.weight_class || t("common.unknown")) },
    { label: t("info.minEngine"), value: (entry) => compareNumber(number(entry.stats.MinEngineRating), 0) },
    { label: t("info.maxEngine"), value: (entry) => compareNumber(number(entry.stats.MaxEngineRating), 0) },
  ];

  return `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th scope="col">${t("common.item")}</th>
            ${data
              .map((entry) => {
                const isBaseline = String(state.compareBaselineMechId) === String(entry.mech.id);
                return `
                <th
                  class="${isBaseline ? "compare-baseline-column" : ""}"
                  data-compare-baseline="${entry.mech.id}"
                  scope="col"
                  title="${t("compare.setBaseline")}"
                >
                  <span class="compare-title">
                    <label class="compare-baseline-toggle" data-compare-baseline="${entry.mech.id}" title="${t("common.baseline")}">
                      <input
                        data-compare-baseline="${entry.mech.id}"
                        name="compare-baseline"
                        type="radio"
                        ${String(state.compareBaselineMechId) === String(entry.mech.id) ? "checked" : ""}
                      >
                      <span>${t("common.baseline")}</span>
                    </label>
                    <strong>${variantCode(entry.mech)}</strong>
                    <button class="compare-remove" data-remove-compare="${entry.mech.id}" type="button" aria-label="${t("compare.removeAria", { name: entry.mech.display_name })}">x</button>
                  </span>
                  <span class="compare-meta">${factionLabel(entry.mech.faction)} - ${entry.stats.MaxTons || "?"}t</span>
                </th>
              `;
              })
              .join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .reduce((html, row) => {
              if (row.group) {
                const collapsed = state.collapsedCompareCategories.has(row.group);
                html.currentGroupCollapsed = collapsed;
                html.rows.push(`
                  <tr class="compare-group${collapsed ? " compare-group-collapsed" : ""}">
                    <th scope="row" colspan="${data.length + 1}">
                      <button class="compare-group-toggle" data-compare-category="${row.group}" type="button" aria-expanded="${!collapsed}">
                        <span class="compare-group-icon" aria-hidden="true">${collapsed ? "+" : "-"}</span>
                        <span>${row.group}</span>
                      </button>
                    </th>
                  </tr>
                `);
                return html;
              }
              if (html.currentGroupCollapsed) return html;
              html.rows.push(`
                <tr>
                  <th scope="row">${row.label}</th>
                  ${data.map((entry) => renderCompareCell(row, data, entry)).join("")}
                </tr>
              `);
              return html;
            }, { rows: [], currentGroupCollapsed: false }).rows
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function compareSelectionText(mechs = compareMechs()) {
  return `${t("compare.selected", { count: mechs.length, max: MAX_COMPARE_MECHS })}${mechs.length ? ` - ${mechs.map(variantCode).join(", ")}` : ""}`;
}

function renderCompareOverlayCell(entry) {
  const isBaseline = String(state.compareBaselineMechId) === String(entry.mech.id);
  return `
    <div
      class="compare-header-overlay-cell ${isBaseline ? "compare-baseline-column" : ""}"
      data-compare-baseline="${entry.mech.id}"
      title="${t("compare.setBaseline")}"
    >
      <span class="compare-title">
        <label class="compare-baseline-toggle" data-compare-baseline="${entry.mech.id}" title="${t("common.baseline")}">
          <input
            data-compare-baseline="${entry.mech.id}"
            name="compare-baseline-overlay"
            type="radio"
            ${isBaseline ? "checked" : ""}
          >
          <span>${t("common.baseline")}</span>
        </label>
        <strong>${variantCode(entry.mech)}</strong>
      </span>
      <span class="compare-meta">${factionLabel(entry.mech.faction)} - ${entry.stats.MaxTons || "?"}t</span>
    </div>
  `;
}

function renderCompareOverlayHeader(mechs) {
  return `
    <div class="compare-header-overlay-cell compare-header-overlay-item">${t("common.item")}</div>
    <div class="compare-header-overlay-track">
      ${mechs.map((mech) => renderCompareOverlayCell(infoDataForMech(mech))).join("")}
    </div>
  `;
}

function shouldShowCompareOverlay() {
  if (state.activeMainTab !== "compare") return false;
  const layout = $("mech-browser-layout");
  const table = document.querySelector(".compare-table");
  const tableHead = document.querySelector(".compare-table thead");
  const tabContent = document.querySelector(".tab-content");
  if (!layout || layout.hidden || !table || !tableHead || !tabContent) return false;
  const tableRect = table.getBoundingClientRect();
  const headRect = tableHead.getBoundingClientRect();
  const contentRect = tabContent.getBoundingClientRect();
  return headRect.bottom <= contentRect.top + 6 && tableRect.bottom > contentRect.top + 56;
}

function updateCompareOverlay() {
  const overlay = $("compare-overlay");
  if (!overlay) return;
  const mechs = compareMechs();
  const shouldShow = shouldShowCompareOverlay();
  if (!shouldShow) {
    overlay.hidden = true;
    return;
  }

  const cells = $("compare-overlay-cells");
  if (cells) {
    cells.innerHTML = renderCompareOverlayHeader(mechs);
  }

  const tableWrap = document.querySelector(".compare-table-wrap");
  const tabContent = document.querySelector(".tab-content");
  const tableHead = document.querySelector(".compare-table thead");
  const headerCells = Array.from(document.querySelectorAll(".compare-table thead th"));
  if (!tableWrap || !tabContent) {
    overlay.hidden = true;
    return;
  }

  const wrapRect = tableWrap.getBoundingClientRect();
  const contentRect = tabContent.getBoundingClientRect();
  const left = Math.max(wrapRect.left, contentRect.left);
  const right = Math.min(wrapRect.right, window.innerWidth - 8);
  const top = Math.max(contentRect.top, 0);
  const width = right - left;

  if (width < 80) {
    overlay.hidden = true;
    return;
  }

  const track = cells?.querySelector(".compare-header-overlay-track");
  const overlayCells = cells ? Array.from(cells.querySelectorAll(".compare-header-overlay-cell")) : [];
  overlayCells.forEach((cell, index) => {
    const headerCell = headerCells[index];
    if (!headerCell) return;
    const width = headerCell.getBoundingClientRect().width;
    cell.style.width = `${width}px`;
    cell.style.minWidth = `${width}px`;
  });
  if (track) {
    track.style.transform = `translateX(${-tableWrap.scrollLeft}px)`;
  }

  overlay.style.left = `${left}px`;
  overlay.style.top = `${top}px`;
  overlay.style.width = `${width}px`;
  overlay.style.height = tableHead ? `${tableHead.getBoundingClientRect().height}px` : "";
  overlay.hidden = false;
}

function renderInfoPanel() {
  $("info-apply-quirks").checked = state.infoApplyQuirks;

  updateCompareOverlay();
  $("mech-info").className = "info-grid";
  const mech = state.selectedMech;
  if (!mech) {
    $("info-variant-name").textContent = t("info.selectMech");
    $("info-variant-meta").textContent = t("info.selectMechHint");
    $("mech-info").innerHTML = "";
    updateCompareOverlay();
    return;
  }
  const stats = currentDefinition().stats || {};
  const quirks = effectiveQuirks();
  const values = state.infoApplyQuirks ? effectiveQuirkValues() : {};
  const armorRows = armorInfoRows(values);
  const structureRows = structureInfoRows(values);
  const armorTotal = armorRows.reduce((sum, row) => sum + number(row.total), 0);
  const armorBaseTotal = armorRows.reduce((sum, row) => sum + number(row.totalBase), 0);
  const structureTotal = structureRows.reduce((sum, row) => sum + number(row.total), 0);
  const structureBaseTotal = structureRows.reduce((sum, row) => sum + number(row.base), 0);
  const combinedRows = combinedDurabilityRows(armorRows, structureRows);
  const combinedTotal = combinedRows.reduce((sum, row) => sum + number(row.total), 0);
  const combinedBaseTotal = combinedRows.reduce((sum, row) => sum + number(row.totalBase), 0);
  const movement = movementInfo(values);

  $("info-variant-name").textContent = mech.display_name;
  $("info-variant-meta").textContent = `${factionLabel(mech.faction)} - ${WEIGHT_CLASS_LABELS[mech.weight_class] || mech.weight_class || t("common.unknown")} - ${stats.MaxTons || "?"} ${t("common.tons")}`;
  $("mech-info").innerHTML = [
    renderQuirkOverviewCard(quirks),
    renderInfoTable(t("info.combinedDurability"), [t("info.part"), t("common.value")], [
      [t("info.armorStructureTotal"), specValue(combinedBaseTotal, combinedTotal, 0)],
      ...combinedRows.map((row) => [row.label, specValue(row.totalBase, row.total, 0)]),
    ], { compact: true }),
    renderInfoTable(t("info.mobility"), [t("info.stat"), t("common.value")], [
      [t("info.maxSpeed"), specMobilitySpeed(movement.baseMaxSpeed, movement.baseReverseSpeed, movement.maxSpeed, movement.reverseSpeed, 1, " kph")],
      [t("info.acceleration"), specMobilityValue(movement.baseAcceleration, movement.acceleration, 1, " kph/s")],
      [t("info.deceleration"), specMobilityValue(movement.baseDeceleration, movement.deceleration, 1, " kph/s")],
      [t("info.turnSpeed"), specMobilityValue(movement.baseTurnSpeed, movement.turnSpeed, 2, " deg/s")],
      [t("info.angleX"), specAnglePair(movement.baseAngleX[0], movement.angleX[0], movement.angleX[1], "X", 1)],
      [t("info.angleY"), specAnglePair(movement.baseAngleY[0], movement.angleY[0], movement.angleY[1], "Y", 1)],
      [t("info.torsoSpeed"), specMobilityValue(movement.baseTorsoSpeed, movement.torsoSpeed, 1, " deg/s")],
    ]),
    renderInfoTable(t("info.structureInfo"), [t("info.part"), t("common.value")], [
      [t("info.structureTotal"), specValue(structureBaseTotal, structureTotal, 0)],
      ...structureRows.map((row) => [row.label, specValue(row.base, row.total, 0)]),
    ], { compact: true }),
    renderInfoTable(t("info.armorInfo"), [t("info.part"), t("common.value")], [
      [t("info.maxArmorTotal"), specValue(armorBaseTotal, armorTotal, 0)],
      ...armorRows.map((row) => [row.label, specValue(row.totalBase, row.total, 0)]),
    ], { compact: true }),
    renderInfoTable(t("info.engine"), [t("info.stat"), t("common.value")], [
      [t("info.minEngine"), formatInfoNumber(number(stats.MinEngineRating), 0)],
      [t("info.maxEngine"), formatInfoNumber(number(stats.MaxEngineRating), 0)],
    ]),
    renderInfoQuirks(quirks),
  ].join("");
}

function renderComparePanel() {
  $("compare-deltas").checked = state.compareShowDeltas;
  $("compare-apply-quirks").checked = state.infoApplyQuirks;
  const mechs = compareMechs();
  $("compare-variant-name").textContent = t("compare.title");
  $("compare-variant-meta").textContent = compareSelectionText(mechs);
  $("compare-info").innerHTML = renderCompareTable(mechs);
  document.querySelector(".compare-table-wrap")?.addEventListener("scroll", updateCompareOverlay, { passive: true });
  updateCompareOverlay();
}

function renderStatsInfoDetail(mech) {
  const applyQuirks = true;
  const data = infoDataForMech(mech, applyQuirks);
  const stats = data.stats || {};
  return [
    renderQuirkOverviewCard(data.quirks),
    renderInfoTable(t("info.combinedDurability"), [t("info.part"), t("common.value")], [
      [t("info.armorStructureTotal"), specValue(data.combinedBaseTotal, data.combinedTotal, 0, "", applyQuirks)],
      ...data.combinedRows.map((row) => [row.label, specValue(row.totalBase, row.total, 0, "", applyQuirks)]),
    ], { compact: true }),
    renderInfoTable(t("info.mobility"), [t("info.stat"), t("common.value")], [
      [t("info.maxSpeed"), specMobilitySpeed(data.movement.baseMaxSpeed, data.movement.baseReverseSpeed, data.movement.maxSpeed, data.movement.reverseSpeed, 1, " kph", applyQuirks)],
      [t("info.acceleration"), specMobilityValue(data.movement.baseAcceleration, data.movement.acceleration, 1, " kph/s", applyQuirks)],
      [t("info.deceleration"), specMobilityValue(data.movement.baseDeceleration, data.movement.deceleration, 1, " kph/s", applyQuirks)],
      [t("info.turnSpeed"), specMobilityValue(data.movement.baseTurnSpeed, data.movement.turnSpeed, 2, " deg/s", applyQuirks)],
      [t("info.angleX"), specAnglePair(data.movement.baseAngleX[0], data.movement.angleX[0], data.movement.angleX[1], "X", 1, applyQuirks)],
      [t("info.angleY"), specAnglePair(data.movement.baseAngleY[0], data.movement.angleY[0], data.movement.angleY[1], "Y", 1, applyQuirks)],
      [t("info.torsoSpeed"), specMobilityValue(data.movement.baseTorsoSpeed, data.movement.torsoSpeed, 1, " deg/s", applyQuirks)],
    ]),
    renderInfoTable(t("info.structureInfo"), [t("info.part"), t("common.value")], [
      [t("info.structureTotal"), specValue(data.structureBaseTotal, data.structureTotal, 0, "", applyQuirks)],
      ...data.structureRows.map((row) => [row.label, specValue(row.base, row.total, 0, "", applyQuirks)]),
    ], { compact: true }),
    renderInfoTable(t("info.armorInfo"), [t("info.part"), t("common.value")], [
      [t("info.maxArmorTotal"), specValue(data.armorBaseTotal, data.armorTotal, 0, "", applyQuirks)],
      ...data.armorRows.map((row) => [row.label, specValue(row.totalBase, row.total, 0, "", applyQuirks)]),
    ], { compact: true }),
    renderInfoTable(t("info.engine"), [t("info.stat"), t("common.value")], [
      [t("info.minEngine"), formatInfoNumber(number(stats.MinEngineRating), 0)],
      [t("info.maxEngine"), formatInfoNumber(number(stats.MaxEngineRating), 0)],
    ]),
    renderInfoQuirks(data.quirks),
  ].join("");
}

function renderStatsDetailPanel(entries, category, valueScale) {
  const detail = $("stats-detail");
  if (!detail) return;
  const selected = entries.find((entry) => entry.key === state.selectedStatsMechId);
  if (!selected) {
    detail.innerHTML = `<div class="empty stats-detail-empty">${t("stats.noSelection")}</div>`;
    return;
  }
  const rank = entries.indexOf(selected) + 1;
  if (selected.isChassis) {
    renderStatsChassisDetail(detail, selected, rank, category, valueScale);
    return;
  }
  const mech = selected.mech;
  const stats = mech.definition?.stats || {};
  detail.innerHTML = `
    <section class="stats-detail-rank">
      <h3>${t("common.rank")}</h3>
      <div class="stats-detail-rank-grid">
        <div class="stats-detail-summary">
          <div class="stats-detail-title">${omnipodIcon(mech)}<strong>${mech.display_name || variantCode(mech)}</strong></div>
          <div class="stats-detail-meta">${factionLabel(mech.faction)} - ${WEIGHT_CLASS_LABELS[mech.weight_class] || mech.weight_class || t("common.unknown")} - ${stats.MaxTons || "?"}t</div>
        </div>
        <div class="stats-detail-rank-value">
          <span>${rank}</span>
          <strong>${category.label} ${formatInfoNumber(selected.total * valueScale, category.digits ?? 0)}${category.unit || ""}</strong>
        </div>
      </div>
    </section>
    <div class="stats-detail-section-title">${t("common.info")}</div>
    ${renderStatsInfoDetail(mech)}
  `;
}

function statsAggregateMode() {
  return STATS_CHASSIS_AGGREGATE_MODES.find((mode) => mode.key === state.statsChassisAggregateMode) || STATS_CHASSIS_AGGREGATE_MODES[0];
}

function formatStatsValue(value, category, valueScale) {
  return `${formatInfoNumber(value * valueScale, category.digits ?? 0)}${category.unit || ""}`;
}

function renderStatsChassisDetail(detail, entry, rank, category, valueScale) {
  const bestLabel = entry.maxMech?.display_name || variantCode(entry.maxMech);
  const worstLabel = entry.minMech?.display_name || variantCode(entry.minMech);
  detail.innerHTML = `
    <section class="stats-detail-rank">
      <h3>${t("common.rank")}</h3>
      <div class="stats-detail-rank-grid">
        <div class="stats-detail-summary">
          <div class="stats-detail-title"><strong>${entry.label}</strong></div>
          <div class="stats-detail-meta">${factionLabel(entry.faction)} - ${WEIGHT_CLASS_LABELS[entry.weightClass] || entry.weightClass || t("common.unknown")} - ${entry.tonsLabel} - ${entry.mechs.length} ${t("common.models")}</div>
        </div>
        <div class="stats-detail-rank-value">
          <span>${rank}</span>
          <strong>${category.label} ${formatStatsValue(entry.total, category, valueScale)}</strong>
        </div>
      </div>
    </section>
    <div class="stats-detail-section-title">${t("common.info")}</div>
    ${renderInfoTable(t("stats.specCompare"), [t("common.target"), t("common.value")], [
      [t("common.average"), formatStatsValue(entry.average, category, valueScale)],
      [t("common.max"), `${formatStatsValue(entry.max, category, valueScale)} (${bestLabel})`],
      [t("common.min"), `${formatStatsValue(entry.min, category, valueScale)} (${worstLabel})`],
    ])}
    ${renderInfoTable(t("stats.chassisInfo"), [t("common.item"), t("common.value")], [
      [t("stats.faction"), factionLabel(entry.faction)],
      [t("stats.weight"), WEIGHT_CLASS_LABELS[entry.weightClass] || entry.weightClass || t("common.unknown")],
      [t("stats.tons"), entry.tonsLabel],
      [t("stats.modelCount"), `${entry.mechs.length}`],
      [t("stats.hardpoints"), hardpointTypeBadges(entry.hardpointTypes) || "-"],
    ])}
  `;
}

function statsTonsKey(mech) {
  const tons = number(mech?.definition?.stats?.MaxTons, null);
  return tons === null ? "" : String(tons);
}

function availableStatsFactions() {
  return Array.from(new Set(state.mechs.map((mech) => mech.faction).filter(Boolean))).sort((a, b) => factionRank(a) - factionRank(b) || a.localeCompare(b));
}

function availableStatsTons() {
  return Array.from(new Set(state.mechs.map(statsTonsKey).filter(Boolean))).sort((a, b) => Number(a) - Number(b));
}

function activeStatsDurabilityCategory() {
  return STATS_DURABILITY_CATEGORIES.find((category) => category.key === state.statsDurabilityCategory) || STATS_DURABILITY_CATEGORIES[0];
}

function activeStatsDurabilityScope() {
  return STATS_DURABILITY_SCOPES.find((scope) => scope.key === state.statsDurabilityScope) || STATS_DURABILITY_SCOPES[0];
}

function activeStatsMobilityCategory() {
  return STATS_MOBILITY_CATEGORIES.find((category) => category.key === state.statsMobilityCategory) || STATS_MOBILITY_CATEGORIES[0];
}

function activeStatsQuirkCategory() {
  return STATS_QUIRK_CATEGORIES.find((category) => category.key === state.statsQuirkCategory) || STATS_QUIRK_CATEGORIES[0];
}

function activeStatsCategory() {
  if (state.activeStatsView === "mobility") return activeStatsMobilityCategory();
  if (state.activeStatsView === "quirks") return activeStatsQuirkCategory();
  return activeStatsDurabilityCategory();
}

function statsDurabilityFilterMatches(mech) {
  if (state.statsDurabilityMode !== "condition") return true;
  if (state.statsConditionFaction && mech.faction !== state.statsConditionFaction) return false;
  if (state.statsConditionAxis === "tons") {
    return !state.statsConditionTons.size || state.statsConditionTons.has(statsTonsKey(mech));
  }
  return !state.statsConditionWeightClasses.size || state.statsConditionWeightClasses.has(mech.weight_class);
}

function statsEntryValue(mech, category) {
  const summary = mechListSummary(mech, true);
  if (state.activeStatsView === "mobility") {
    return number(summary.movement?.[category.movementKey]);
  }
  if (state.activeStatsView === "quirks") {
    return number(summary.quirkStats?.[category.summaryKey]);
  }
  const scope = activeStatsDurabilityScope();
  return number(summary.durabilityByScope?.[scope.key]?.[category.key]);
}

function chassisTonsLabel(mechs) {
  const tons = Array.from(new Set(mechs.map(statsTonsKey).filter(Boolean))).sort((a, b) => Number(a) - Number(b));
  if (!tons.length) return "?t";
  if (tons.length === 1) return `${tons[0]}t`;
  return `${tons[0]}-${tons[tons.length - 1]}t`;
}

function statsChassisHardpointTypes(mechs) {
  const found = new Set();
  mechs.forEach((mech) => {
    stockHardpointTypes(mech).forEach((type) => found.add(type));
  });
  return ["missile", "energy", "ballistic", "ams", "ecm"].filter((type) => found.has(type));
}

function statsChassisEntries(entries) {
  const groups = new Map();
  entries.forEach((entry) => {
    const chassis = entry.mech.chassis || "unknown";
    if (!groups.has(chassis)) groups.set(chassis, []);
    groups.get(chassis).push(entry);
  });

  return Array.from(groups.entries()).map(([chassis, groupEntries]) => {
    const mechs = groupEntries.map((entry) => entry.mech).sort(sortMechsByVariant);
    const representative = mechs[0];
    const sortedByValue = [...groupEntries].sort((a, b) => b.total - a.total || sortMechsByVariant(a.mech, b.mech));
    const maxEntry = sortedByValue[0];
    const minEntry = sortedByValue[sortedByValue.length - 1];
    const average = groupEntries.reduce((sum, entry) => sum + entry.total, 0) / groupEntries.length;
    const totals = {
      average,
      max: maxEntry.total,
      min: minEntry.total,
    };
    return {
      key: `chassis:${chassis}`,
      isChassis: true,
      mech: representative,
      mechs,
      label: chassisDisplayName(mechs),
      faction: representative?.faction || t("common.unknown"),
      weightClass: representative?.weight_class || "unknown",
      tonsLabel: chassisTonsLabel(mechs),
      hardpointTypes: statsChassisHardpointTypes(mechs),
      total: totals[statsAggregateMode().key],
      average,
      max: maxEntry.total,
      min: minEntry.total,
      maxMech: maxEntry.mech,
      minMech: minEntry.mech,
    };
  });
}

function statsEntries() {
  const category = activeStatsCategory();
  const entries = state.mechs
    .filter(statsDurabilityFilterMatches)
    .map((mech) => ({
      key: `mech:${mech.id}`,
      isChassis: false,
      mech,
      total: statsEntryValue(mech, category),
    }));
  const rankedEntries = state.statsRankMode === "chassis" ? statsChassisEntries(entries) : entries;
  return rankedEntries.sort((a, b) => b.total - a.total || (a.label || a.mech.display_name || "").localeCompare(b.label || b.mech.display_name || "", undefined, { numeric: true }));
}

function renderStatsRows(entries, category, valueScale) {
  $("stats-list").innerHTML = entries.length
    ? entries
        .map((entry, index) => `
          <div class="stats-row ${factionClass(entry.faction || entry.mech.faction)} ${entry.key === state.selectedStatsMechId ? "active" : ""}" data-stats-entry="${entry.key}" role="button" tabindex="0" aria-pressed="${entry.key === state.selectedStatsMechId}">
            <span class="stats-rank">${index + 1}</span>
            <span class="stats-mech-main">
              <span class="mech-title-main">${entry.isChassis ? "" : omnipodIcon(entry.mech)}<strong>${entry.label || entry.mech.display_name || variantCode(entry.mech)}</strong></span>
              <span class="stats-subline">${entry.isChassis
                ? `${factionLabel(entry.faction)} - ${WEIGHT_CLASS_LABELS[entry.weightClass] || entry.weightClass || t("common.unknown")} - ${entry.tonsLabel} - ${entry.mechs.length} ${t("common.models")}`
                : `${factionLabel(entry.mech.faction)} - ${entry.mech.definition?.stats?.MaxTons || "?"}t`}</span>
            </span>
            <span class="stats-value-block">
              <span>${category.label}</span>
              <strong>${formatStatsValue(entry.total, category, valueScale)}</strong>
            </span>
            <span class="stats-extra ${weightClassClass(entry.weightClass || entry.mech.weight_class)}">
              <span class="badge weight-slot ${weightClassClass(entry.weightClass || entry.mech.weight_class)}">${WEIGHT_CLASS_LABELS[entry.weightClass || entry.mech.weight_class] || entry.weightClass || entry.mech.weight_class || t("common.unknown")}</span>
              <span class="stats-hardpoints">${(entry.isChassis ? hardpointTypeBadges(entry.hardpointTypes) : stockHardpointBadges(entry.mech)) || `<span class="badge">${t("stats.noHardpoints")}</span>`}</span>
            </span>
          </div>
        `)
        .join("")
    : `<div class="empty">${t("stats.noRows")}</div>`;
}

function updateStatsRowSelection() {
  document.querySelectorAll("#stats-list [data-stats-entry]").forEach((row) => {
    const active = row.dataset.statsEntry === state.selectedStatsMechId;
    row.classList.toggle("active", active);
    row.setAttribute("aria-pressed", String(active));
  });
}

function renderCurrentStatsSelection() {
  const category = state.renderedStatsCategory || activeStatsCategory();
  const valueScale = state.renderedStatsValueScale ?? category.scale ?? 1;
  updateStatsRowSelection();
  renderStatsDetailPanel(state.renderedStatsEntries || [], category, valueScale);
}

function renderStatsConditionControls() {
  const detailToggle = $("stats-detail-toggle");
  if (detailToggle) {
    detailToggle.textContent = state.statsDetailMenusExpanded ? "▼" : "▶";
    detailToggle.setAttribute("aria-label", state.statsDetailMenusExpanded ? t("stats.collapse") : t("stats.expand"));
    detailToggle.setAttribute("aria-expanded", String(state.statsDetailMenusExpanded));
  }

  document.querySelectorAll("[data-stats-detail-menu]").forEach((element) => {
    const view = element.dataset.statsViewSection;
    element.hidden = !state.statsDetailMenusExpanded || (view && view !== state.activeStatsView);
  });

  document.querySelectorAll("[data-stats-category-view]").forEach((button) => {
    button.hidden = button.dataset.statsCategoryView !== state.activeStatsView;
  });

  document.querySelectorAll("[data-stats-durability-scope]").forEach((button) => {
    const active = button.dataset.statsDurabilityScope === state.statsDurabilityScope;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-durability-category]").forEach((button) => {
    const active = button.dataset.statsDurabilityCategory === state.statsDurabilityCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-mobility-category]").forEach((button) => {
    const active = button.dataset.statsMobilityCategory === state.statsMobilityCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-quirk-category]").forEach((button) => {
    const active = button.dataset.statsQuirkCategory === state.statsQuirkCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-durability-mode]").forEach((button) => {
    const active = button.dataset.statsDurabilityMode === state.statsDurabilityMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const controls = $("stats-condition-controls");
  if (!controls) return;
  controls.hidden = !state.statsDetailMenusExpanded || state.statsDurabilityMode !== "condition";
  if (controls.hidden) return;

  $("stats-faction-filter").innerHTML = [
    `<option value="">${t("filters.allFactions")}</option>`,
    ...availableStatsFactions().map((faction) => `<option value="${faction}" ${faction === state.statsConditionFaction ? "selected" : ""}>${factionLabel(faction)}</option>`),
  ].join("");

  document.querySelectorAll("[data-stats-condition-axis]").forEach((button) => {
    const active = button.dataset.statsConditionAxis === state.statsConditionAxis;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  $("stats-weight-options").hidden = state.statsConditionAxis !== "weight";
  $("stats-weight-options").innerHTML = WEIGHT_CLASS_ORDER.map((weightClass) => {
    const active = state.statsConditionWeightClasses.has(weightClass);
    return `<button class="stats-option-button ${active ? "active" : ""}" type="button" data-stats-weight="${weightClass}" aria-pressed="${active}">${WEIGHT_CLASS_LABELS[weightClass] || weightClass}</button>`;
  }).join("");

  $("stats-ton-options").hidden = state.statsConditionAxis !== "tons";
  $("stats-ton-options").innerHTML = availableStatsTons()
    .map((tons) => {
      const active = state.statsConditionTons.has(tons);
      return `<button class="stats-option-button ${active ? "active" : ""}" type="button" data-stats-ton="${tons}" aria-pressed="${active}">${tons}t</button>`;
    })
    .join("");
}

function renderStatsPanel() {
  document.querySelectorAll("[data-stats-rank-mode]").forEach((button) => {
    const active = button.dataset.statsRankMode === state.statsRankMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const aggregateToggle = $("stats-chassis-aggregate-toggle");
  if (aggregateToggle) aggregateToggle.hidden = state.statsRankMode !== "chassis";

  document.querySelectorAll("[data-stats-chassis-aggregate]").forEach((button) => {
    const active = button.dataset.statsChassisAggregate === state.statsChassisAggregateMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-view]").forEach((button) => {
    const active = button.dataset.statsView === state.activeStatsView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderStatsConditionControls();

  if (!["durability", "mobility", "quirks"].includes(state.activeStatsView)) {
    state.renderedStatsEntries = [];
    state.renderedStatsCategory = null;
    state.renderedStatsValueScale = 1;
    $("stats-list").innerHTML = "";
    $("stats-detail").innerHTML = "";
    return;
  }

  const entries = statsEntries();
  const category = activeStatsCategory();
  const valueScale = category.scale ?? 1;
  if (entries.length && !entries.some((entry) => entry.key === state.selectedStatsMechId)) {
    state.selectedStatsMechId = null;
  }
  state.renderedStatsEntries = entries;
  state.renderedStatsCategory = category;
  state.renderedStatsValueScale = valueScale;
  renderStatsRows(entries, category, valueScale);
  renderStatsDetailPanel(entries, category, valueScale);
}

function calculateBuild() {
  const mech = state.selectedMech;
  const definition = effectiveDefinition(mech, state.currentBuild);
  const stats = definition.stats || {};
  const maxTons = number(stats.MaxTons);
  const baseTons = number(stats.BaseTons);
  let itemTonnage = 0;
  let heat = 0;
  let alpha = 0;
  let ammo = 0;
  let armor = 0;
  let engine = null;
  let heatSinkTons = 0;
  const warnings = [];
  const componentUsage = {};

  for (const name of COMPONENT_ORDER) {
    const compDef = definition.components?.[name] || {};
    const buildComp = state.currentBuild.components[name] || { items: [] };
    const used = number(compDef.internals?.length);
    const usage = {
      slots: used,
      hardpoints: {},
      warnings: [],
    };

    armor += number(buildComp.armor);
    for (const entry of buildComp.items) {
      const item = itemById(entry.item_id);
      if (!item) {
        usage.warnings.push(t("build.missingItem", { id: entry.item_id }));
        continue;
      }
      const slots = itemSlots(item);
      usage.slots += slots;
      itemTonnage += itemTons(item);
      heat += itemHeat(item);
      if (item.item_type === "weapon") {
        const type = item.hardpoint_type || String(item.stats?.type || "").toLowerCase();
        usage.hardpoints[type] = (usage.hardpoints[type] || 0) + slots;
        alpha += number(item.stats?.damage) * number(item.stats?.numFiring, 1);
      }
      if (item.item_type === "ammo") {
        ammo += number(item.stats?.numShots);
      }
      if (item.item_type === "engine") {
        engine = item;
      }
      if (isHeatSink(item)) {
        heatSinkTons += itemTons(item);
      }
    }

    const slotLimit = number(compDef.slots);
    if (slotLimit && usage.slots > slotLimit) {
      usage.warnings.push(`Slots ${usage.slots}/${slotLimit}`);
    }

    for (const [type, usedSlots] of Object.entries(usage.hardpoints)) {
      const capacity = (compDef.hardpoints || [])
        .filter((hp) => hp.hardpoint_type === type)
        .reduce((sum, hp) => sum + number(hp.Slots, 1), 0);
      if (!capacity) {
        usage.warnings.push(`No ${type} hardpoint`);
      }
    }

    componentUsage[name] = usage;
  }

  for (const [name, usage] of Object.entries(componentUsage)) {
    for (const warning of usage.warnings) {
      warnings.push(`${COMPONENT_NAMES[name] || name}: ${warning}`);
    }
  }

  armor += number(state.currentBuild.rearArmor);
  const armorUpgradeId = state.currentBuild.upgrades?.armor?.ItemID;
  const armorUpgrade = itemById(armorUpgradeId);
  const armorPerTon = number(armorUpgrade?.stats?.armorPerTon, 32);
  const engineIncludedHeatSinks = engine ? number(engine.stats?.heatsinks) : 0;
  const adjustedItemTons = itemTonnage - Math.min(heatSinkTons, engineIncludedHeatSinks);
  const totalTons = baseTons + adjustedItemTons + armor / armorPerTon;
  if (maxTons && totalTons > maxTons + 0.1) {
    warnings.push(`Tonnage ${fmt(totalTons)}/${fmt(maxTons)}`);
  }
  if (engine) {
    const rating = number(engine.stats?.rating);
    const min = number(stats.MinEngineRating);
    const max = number(stats.MaxEngineRating);
    if ((min && rating < min) || (max && rating > max)) {
      warnings.push(t("build.engineOutside", { rating, min, max }));
    }
  } else {
    warnings.push(t("build.noEngine"));
  }

  return { maxTons, totalTons, heat, alpha, ammo, armor, engine, warnings, componentUsage };
}

function renderSummary() {
  const calc = state.selectedMech && state.currentBuild ? calculateBuild() : null;
  if (!calc) {
    $("summary-strip").innerHTML = "";
    return;
  }
  $("summary-strip").innerHTML = [
    [t("common.tons"), `${fmt(calc.totalTons)}/${fmt(calc.maxTons)}`],
    [t("common.alpha"), fmt(calc.alpha)],
    [t("common.heat"), fmt(calc.heat)],
    [t("common.ammo"), fmt(calc.ammo, 0)],
    [t("common.engine"), calc.engine ? number(calc.engine.stats?.rating) : "-"],
    [t("common.status"), calc.warnings.length ? t("common.check") : t("common.ok")],
  ]
    .map(([label, value]) => `<div class="pill"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
}

function renderMechList() {
  const filtered = filteredMechsForList();
  const grouped = groupMechsForList(filtered);
  const activeChassis = activeChassisForList();
  const classNames = sortedClassNames(grouped);

  const layout = $("mech-browser-layout");
  const list = $("mech-list");
  const toggle = $("mech-list-view-toggle");
  layout.classList.toggle("large-mech-list-layout", state.largeMechList);
  list.classList.toggle("mech-list-large", state.largeMechList);
  if (toggle) {
    toggle.classList.toggle("active", state.largeMechList);
    toggle.setAttribute("aria-pressed", String(state.largeMechList));
    toggle.textContent = state.largeMechList ? "<<" : ">>";
    toggle.title = state.largeMechList ? t("list.smallView") : t("list.largeView");
  }

  if (!filtered.length) {
    $("mech-list").innerHTML = `<div class="empty">${t("list.noMechs")}</div>`;
    return;
  }

  if (state.largeMechList) {
    renderLargeMechList(classNames, grouped, activeChassis);
    return;
  }

  $("mech-list").innerHTML = classNames
    .map((weightClass) => {
      const chassisGroups = chassisGroupsForWeight(grouped, weightClass);
      const factionSections = factionSectionsForChassisGroups(chassisGroups);
      const count = chassisGroups.reduce((sum, group) => sum + group.variants.length, 0);
      return `
        <section class="class-section">
          <div class="class-heading">
            <strong>${WEIGHT_CLASS_LABELS[weightClass] || formatChassisName(weightClass)}</strong>
            <span>${t("list.chassisVariants", { chassis: chassisGroups.length, variants: count })}</span>
          </div>
          ${factionSections.map((section) => renderFactionSection(section, activeChassis, false)).join("")}
        </section>
      `;
    })
    .join("");
}

function filteredMechsForList() {
  const search = $("mech-search").value.trim().toLowerCase();
  const factionFilter = $("faction-filter").value;
  const weightFilter = $("weight-filter").value;
  return state.mechs.filter((mech) => {
    const matchesSearch = !search || `${mech.display_name} ${mech.name} ${mech.chassis}`.toLowerCase().includes(search);
    const matchesFaction = !factionFilter || mech.faction === factionFilter;
    const matchesWeight = !weightFilter || mech.weight_class === weightFilter;
    return matchesSearch && matchesFaction && matchesWeight;
  });
}

function activeChassisForList() {
  const firstCompareMech = compareMechs()[0];
  return state.selectedChassis || (state.compareMode ? firstCompareMech?.chassis : state.selectedMech?.chassis) || "";
}

function findChassisGroupForCurrentList(chassis) {
  const grouped = groupMechsForList(filteredMechsForList());
  for (const weightClass of sortedClassNames(grouped)) {
    const group = chassisGroupsForWeight(grouped, weightClass).find((item) => item.chassis === chassis);
    if (group) return group;
  }
  return null;
}

function chassisGroupElement(chassis) {
  return Array.from($("mech-list").querySelectorAll(".chassis-group"))
    .find((element) => element.dataset.chassisGroup === chassis) || null;
}

function syncMechListActiveStates(activeChassis = activeChassisForList()) {
  const selectedMechId = state.selectedMech?.id;
  const compareIds = new Set(state.compareMechIds.map((id) => String(id)));
  $("mech-list").querySelectorAll(".chassis-group").forEach((group) => {
    const active = group.dataset.chassisGroup === activeChassis;
    group.classList.toggle("active", active);
    group.querySelector("[data-chassis]")?.classList.toggle("active", active);
  });
  $("mech-list").querySelectorAll("[data-mech]").forEach((button) => {
    const mech = mechById(button.dataset.mech);
    const selected = state.compareMode
      ? compareIds.has(String(button.dataset.mech))
      : String(selectedMechId || "") === String(button.dataset.mech);
    button.classList.toggle("active", selected);
    if (button.classList.contains("mech-card")) {
      button.classList.toggle("chassis-active", mech?.chassis === activeChassis);
    }
  });
}

function renderChassisGroupInPlace(chassis) {
  const element = chassisGroupElement(chassis);
  const group = findChassisGroupForCurrentList(chassis);
  if (!element || !group) return false;
  const activeChassis = activeChassisForList();
  element.outerHTML = state.largeMechList
    ? renderLargeChassisGroup(group, activeChassis)
    : renderSmallChassisGroup(group, activeChassis);
  syncMechListActiveStates(activeChassis);
  return true;
}

function renderLargeMechList(classNames, grouped, activeChassis) {
  $("mech-list").innerHTML = classNames
    .map((weightClass) => {
      const chassisGroups = chassisGroupsForWeight(grouped, weightClass);
      const factionSections = factionSectionsForChassisGroups(chassisGroups);
      const count = chassisGroups.reduce((sum, group) => sum + group.variants.length, 0);
      return `
        <section class="class-section mech-card-section">
          <div class="class-heading">
            <strong>${WEIGHT_CLASS_LABELS[weightClass] || formatChassisName(weightClass)}</strong>
            <span>${t("list.chassisVariants", { chassis: chassisGroups.length, variants: count })}</span>
          </div>
          ${factionSections.map((section) => renderFactionSection(section, activeChassis, true)).join("")}
        </section>
      `;
    })
    .join("");
}

function renderFactionSection(section, activeChassis, large) {
  const listClass = large ? "chassis-list large-chassis-list" : "chassis-list";
  const groupHtml = section.groups.map((group) => large ? renderLargeChassisGroup(group, activeChassis) : renderSmallChassisGroup(group, activeChassis)).join("");
  return `
    <section class="faction-section ${factionClass(section.faction)}">
      <div class="faction-heading ${factionClass(section.faction)}">
        <strong>${factionLabel(section.faction)}</strong>
        <span>${t("list.chassisVariants", { chassis: section.groups.length, variants: section.variantCount })}</span>
      </div>
      <div class="${listClass}">
        ${groupHtml}
      </div>
    </section>
  `;
}

function renderSmallChassisGroup(group, activeChassis) {
  const active = group.chassis === activeChassis ? " active" : "";
  const expanded = state.expandedChassis.has(group.chassis);
  return `
    <div class="chassis-group${active}${expanded ? " expanded" : ""}" data-chassis-group="${group.chassis}">
      <button class="chassis-row${active}" data-chassis="${group.chassis}" type="button" aria-expanded="${expanded}">
        <span class="row-title">
          <span class="chassis-title"><span class="expand-indicator" aria-hidden="true">${expanded ? "-" : "+"}</span><strong>${group.label}</strong></span>
          <span>${group.tons}t</span>
        </span>
        <span class="badge-line">
          <span class="badge">${t("list.variantCount", { count: group.variants.length })}</span>
        </span>
      </button>
      ${expanded ? `
        <div class="variant-list">
          ${group.variants.map(renderVariantRow).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function renderVariantRow(mech) {
  const isSelected = state.compareMode
    ? state.compareMechIds.some((id) => String(id) === String(mech.id))
    : state.selectedMech?.id === mech.id;
  const selected = isSelected ? " active" : "";
  return `
    <button class="mech-row variant-row${selected}" data-mech="${mech.id}" type="button">
      <span class="row-title">
        <span class="mech-title-main">${omnipodIcon(mech)}<strong>${variantCode(mech)}</strong></span>
        <span>${mech.faction || "unknown"}</span>
      </span>
      <span class="badge-line">${stockHardpointBadges(mech)}</span>
    </button>
  `;
}

function renderLargeChassisGroup(group, activeChassis) {
  const active = group.chassis === activeChassis ? " active" : "";
  const expanded = state.expandedChassis.has(group.chassis);
  return `
    <div class="chassis-group${active}${expanded ? " expanded" : ""}" data-chassis-group="${group.chassis}">
      <button class="chassis-row large-chassis-row${active}" data-chassis="${group.chassis}" type="button" aria-expanded="${expanded}">
        <span class="chassis-title">
          <span class="expand-indicator" aria-hidden="true">${expanded ? "-" : "+"}</span>
          <strong>${group.label}</strong>
        </span>
        <span class="large-chassis-ton">${group.tons}t</span>
        <span class="large-chassis-count">${group.variants.length}</span>
      </button>
      ${expanded ? `
        <div class="mech-card-grid">
          ${group.variants.map((mech) => renderMechCard(mech, activeChassis)).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function renderMechCard(mech, activeChassis) {
  const data = mechListSummary(mech);
  const selected = state.compareMode
    ? state.compareMechIds.some((id) => String(id) === String(mech.id))
    : state.selectedMech?.id === mech.id;
  const active = selected ? " active" : "";
  const chassisActive = mech.chassis === activeChassis ? " chassis-active" : "";
  const durabilityBoosted = state.infoApplyQuirks && Math.abs(data.combinedTotal - data.baseCombinedTotal) >= 0.0001;
  const accelerationBoosted = state.infoApplyQuirks && Math.abs(data.movement.acceleration - data.baseMovement.acceleration) >= 0.0001;
  const decelerationBoosted = state.infoApplyQuirks && Math.abs(data.movement.deceleration - data.baseMovement.deceleration) >= 0.0001;
  const turnBoosted = state.infoApplyQuirks && Math.abs(data.movement.turnSpeed - data.baseMovement.turnSpeed) >= 0.0001;
  return `
    <button class="mech-card${active}${chassisActive}" data-mech="${mech.id}" type="button">
      <span class="mech-card-title">
        <strong>${omnipodIcon(mech)}<span>${mech.display_name || variantCode(mech)}</span></strong>
        <span>${factionLabel(mech.faction)} · ${data.stats.MaxTons || "?"}t</span>
      </span>
      <span class="mech-card-stats">
        <span><span>${t("info.durability")}</span><strong class="${durabilityBoosted ? "boosted" : ""}">${formatInfoNumber(data.combinedTotal, 0)}</strong></span>
        <span><span>${t("info.acceleration")}/${t("info.deceleration")}</span><strong><span class="${accelerationBoosted ? "boosted" : ""}">${formatInfoNumber(data.movement.acceleration, 1)}</span> / <span class="${decelerationBoosted ? "boosted" : ""}">${formatInfoNumber(data.movement.deceleration, 1)}</span></strong></span>
        <span><span>${t("info.turnSpeed")}</span><strong class="${turnBoosted ? "boosted" : ""}">${formatInfoNumber(data.movement.turnSpeed, 2)}</strong></span>
      </span>
      <span class="badge-line">${stockHardpointBadges(mech)}</span>
    </button>
  `;
}

function renderEquipmentList() {
  const search = $("item-search").value.trim().toLowerCase();
  const family = $("item-family").value;
  const ids = family
    ? state.equipment.families[family] || []
    : Object.keys(state.equipment.items).map((id) => Number(id));
  const rows = ids
    .map((id) => itemById(id))
    .filter(Boolean)
    .filter((item) => {
      const text = `${item.display_name} ${item.name} ${item.family}`.toLowerCase();
      return !search || text.includes(search);
    })
    .slice(0, 350);

  $("item-list").innerHTML = rows
    .map((item) => {
      const active = String(state.selectedItemId) === String(item.id) ? " active" : "";
      const icon = `<span class="badge">${item.item_type[0] || "?"}</span>`;
      return `
        <button class="item-row${active}" data-item="${item.id}" type="button">
          ${icon}
          <span>
            <span class="row-title"><strong>${item.display_name}</strong><span>${fmt(itemTons(item))}t</span></span>
            <span class="badge-line">
              <span class="badge">${item.family}</span>
              <span class="badge">${itemSlots(item)} ${t("common.slots")}</span>
              ${item.hardpoint_type ? `<span class="badge ${item.hardpoint_type}">${item.hardpoint_type}</span>` : ""}
            </span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderSelectedItem() {
  const item = itemById(state.selectedItemId);
  $("selected-item").textContent = item
    ? `${item.display_name} · ${fmt(itemTons(item))} ${t("common.tons")} · ${itemSlots(item)} ${t("common.slots")}`
    : t("equipment.noItem");
}

function renderComponents() {
  const calc = calculateBuild();
  $("components").innerHTML = COMPONENT_ORDER.map((name) => {
    const buildComp = state.currentBuild.components[name] || { items: [] };
    const compDef = effectiveComponentDefinition(state.selectedMech, state.currentBuild, name);
    const usage = calc.componentUsage[name] || { slots: 0, warnings: [] };
    const slotLimit = number(compDef.slots);
    const hps = (compDef.hardpoints || [])
      .map((hp) => `<span class="badge ${hp.hardpoint_type}">${hp.hardpoint_type} ${hp.Slots || 1}</span>`)
      .join("");
    const items = buildComp.items.length
      ? buildComp.items.map((entry, index) => renderLoadoutItem(name, entry, index)).join("")
      : `<div class="empty">${t("common.empty")}</div>`;
    return `
      <article class="component ${usage.warnings.length ? "invalid" : ""}">
        <div class="component-head">
          <div>
            <div class="component-title">${COMPONENT_NAMES[name] || name}</div>
            <div class="component-meta muted">${t("common.armor")} ${buildComp.armor || 0} · ${t("common.slots")} ${usage.slots}/${slotLimit || "?"}</div>
            <div class="badge-line">${hps}</div>
            ${usage.warnings.length ? `<div class="warnings">${usage.warnings.join(" · ")}</div>` : ""}
          </div>
          <button data-add-to="${name}" type="button">${t("common.add")}</button>
        </div>
        <div class="component-items">${items}</div>
      </article>
    `;
  }).join("");
}

function renderLoadoutItem(component, entry, index) {
  const item = itemById(entry.item_id);
  if (!item) {
    return `<div class="slot-item"><span></span><span>${t("build.missing", { id: entry.item_id })}</span><button data-remove="${component}:${index}" type="button">${t("common.remove")}</button></div>`;
  }
  const icon = `<span class="badge">${item.item_type[0] || "?"}</span>`;
  return `
    <div class="slot-item">
      ${icon}
      <span>
        <strong>${item.display_name}</strong>
        <span class="badge-line">
          <span class="badge">${fmt(itemTons(item))}t</span>
          <span class="badge">${itemSlots(item)} ${t("common.slots")}</span>
          ${item.hardpoint_type ? `<span class="badge ${item.hardpoint_type}">${item.hardpoint_type}</span>` : ""}
        </span>
      </span>
      <button class="danger" data-remove="${component}:${index}" type="button">${t("common.remove")}</button>
    </div>
  `;
}

function renderQuirks() {
  const quirks = effectiveQuirks();
  $("quirk-count").textContent = "";
  $("quirks").innerHTML = renderQuirkList(quirks, t("info.noQuirksForMech"));
}

function renderVariant() {
  const mech = state.selectedMech;
  if (!mech) return;
  const stats = mech.definition?.stats || {};
  $("variant-name").textContent = mech.display_name;
  $("variant-meta").textContent = `${factionLabel(mech.faction)} - ${WEIGHT_CLASS_LABELS[mech.weight_class] || mech.weight_class || t("common.unknown")} - ${stats.MaxTons || "?"} ${t("common.tons")} - ${t("common.engine")} ${stats.MinEngineRating || "?"}-${stats.MaxEngineRating || "?"}`;
  const calc = calculateBuild();
  $("data-status").textContent = calc.warnings.length ? calc.warnings.join(" - ") : t("status.loadedData", { count: state.index.counts.mechs });
  renderSummary();
  renderQuirks();
  renderComponents();
}

function renderSelectionPrompt() {
  $("variant-name").textContent = t("info.selectMech");
  $("variant-meta").textContent = t("info.selectMechHint");
  renderSummary();
  $("quirk-count").textContent = "";
  $("quirks").innerHTML = `<div class="empty">${t("info.quirksPrompt")}</div>`;
  $("components").innerHTML = `<div class="empty">${t("info.componentsPrompt")}</div>`;
}

function renderAll() {
  renderMechList();
  renderEquipmentList();
  renderSelectedItem();
  renderInfoPanel();
  renderComparePanel();
  renderStatsPanel();
  if (state.selectedMech) {
    renderVariant();
  } else {
    renderSelectionPrompt();
  }
}

function selectMech(id) {
  state.selectedMech = mechById(id) || state.mechs[0];
  state.selectedChassis = state.selectedMech?.chassis || "";
  if (state.selectedChassis) state.expandedChassis.add(state.selectedChassis);
  state.currentBuild = loadBuild(state.selectedMech);
  renderAll();
}

function toggleCompareMech(id) {
  const mech = mechById(id);
  if (!mech) return;
  const index = state.compareMechIds.findIndex((mechId) => String(mechId) === String(id));
  if (index >= 0) {
    state.compareMechIds.splice(index, 1);
    if (String(state.compareBaselineMechId) === String(id)) {
      state.compareBaselineMechId = null;
    }
    if (!state.compareMechIds.length) {
      state.selectedChassis = "";
    }
  } else if (state.compareMechIds.length < MAX_COMPARE_MECHS) {
    state.compareMechIds.push(mech.id);
    state.selectedChassis = mech.chassis || state.selectedChassis;
  } else {
    $("data-status").textContent = t("compare.maxSelected", { max: MAX_COMPARE_MECHS });
    return;
  }
  if (state.selectedChassis) state.expandedChassis.add(state.selectedChassis);
  renderAll();
}

function removeCompareMech(id) {
  const index = state.compareMechIds.findIndex((mechId) => String(mechId) === String(id));
  if (index < 0) return;
  state.compareMechIds.splice(index, 1);
  if (String(state.compareBaselineMechId) === String(id)) {
    state.compareBaselineMechId = null;
  }
  if (!state.compareMechIds.length) {
    state.selectedChassis = "";
  }
  renderAll();
}

function clearCompareMechs() {
  state.compareMechIds = [];
  state.compareBaselineMechId = null;
  if (state.compareMode) {
    state.selectedChassis = "";
  }
  renderAll();
}

function toggleCompareBaseline(id) {
  const exists = state.compareMechIds.some((mechId) => String(mechId) === String(id));
  if (!exists) return;
  state.compareBaselineMechId = String(state.compareBaselineMechId) === String(id) ? null : id;
  renderComparePanel();
}

function toggleCompareCategory(category) {
  if (!category) return;
  if (state.collapsedCompareCategories.has(category)) {
    state.collapsedCompareCategories.delete(category);
  } else {
    state.collapsedCompareCategories.add(category);
  }
  renderComparePanel();
}

function selectItem(id) {
  state.selectedItemId = id;
  renderEquipmentList();
  renderSelectedItem();
}

function addSelectedItem(component) {
  const item = itemById(state.selectedItemId);
  if (!item || !state.currentBuild?.components?.[component]) return;
  state.currentBuild.components[component].items.push({
    type: item.item_type === "weapon" ? "weapon" : item.item_type === "ammo" ? "ammo" : "module",
    item_id: item.id,
    weapon_group: null,
  });
  renderVariant();
}

function removeItem(key) {
  const [component, indexText] = key.split(":");
  const index = Number(indexText);
  const items = state.currentBuild?.components?.[component]?.items;
  if (!items || !Number.isInteger(index)) return;
  items.splice(index, 1);
  renderVariant();
}

function bindEvents() {
  document.querySelectorAll("[data-main-tab]").forEach((button) => {
    button.addEventListener("click", () => setMainTab(button.dataset.mainTab));
  });
  $("mech-search").addEventListener("input", renderMechList);
  $("faction-filter").addEventListener("change", renderMechList);
  $("weight-filter").addEventListener("change", renderMechList);
  $("mech-sort").addEventListener("change", (event) => {
    state.mechSort = event.target.value;
    renderMechList();
  });
  $("item-search").addEventListener("input", renderEquipmentList);
  $("item-family").addEventListener("change", renderEquipmentList);
  $("info-apply-quirks").addEventListener("change", (event) => {
    state.infoApplyQuirks = event.target.checked;
    renderMechList();
    renderInfoPanel();
    renderComparePanel();
  });
  $("mech-list-view-toggle").addEventListener("click", () => {
    state.largeMechList = !state.largeMechList;
    renderMechList();
    updateCompareOverlay();
  });
  $("compare-clear-compare").addEventListener("click", clearCompareMechs);
  $("compare-deltas").addEventListener("change", (event) => {
    state.compareShowDeltas = event.target.checked;
    renderComparePanel();
  });
  $("compare-apply-quirks").addEventListener("change", (event) => {
    state.infoApplyQuirks = event.target.checked;
    renderMechList();
    renderInfoPanel();
    renderComparePanel();
  });
  document.querySelectorAll("[data-stats-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeStatsView = button.dataset.statsView;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-rank-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsRankMode = button.dataset.statsRankMode;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-chassis-aggregate]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsChassisAggregateMode = button.dataset.statsChassisAggregate;
      renderStatsPanel();
    });
  });
  $("stats-detail-toggle").addEventListener("click", () => {
    state.statsDetailMenusExpanded = !state.statsDetailMenusExpanded;
    renderStatsPanel();
  });
  document.querySelectorAll("[data-stats-durability-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsDurabilityScope = button.dataset.statsDurabilityScope;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-durability-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsDurabilityCategory = button.dataset.statsDurabilityCategory;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-mobility-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsMobilityCategory = button.dataset.statsMobilityCategory;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-quirk-category]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      state.statsQuirkCategory = button.dataset.statsQuirkCategory;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-durability-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsDurabilityMode = button.dataset.statsDurabilityMode;
      renderStatsPanel();
    });
  });
  $("stats-faction-filter").addEventListener("change", (event) => {
    state.statsConditionFaction = event.target.value;
    renderStatsPanel();
  });
  $("stats-condition-controls").addEventListener("click", (event) => {
    const axis = event.target.closest("[data-stats-condition-axis]");
    if (axis) {
      state.statsConditionAxis = axis.dataset.statsConditionAxis;
      renderStatsPanel();
      return;
    }
    const weight = event.target.closest("[data-stats-weight]");
    if (weight) {
      state.statsConditionAxis = "weight";
      const weightClass = weight.dataset.statsWeight;
      if (state.statsConditionWeightClasses.has(weightClass)) {
        state.statsConditionWeightClasses.delete(weightClass);
      } else {
        state.statsConditionWeightClasses.add(weightClass);
      }
      renderStatsPanel();
      return;
    }
    const tons = event.target.closest("[data-stats-ton]");
    if (tons) {
      state.statsConditionAxis = "tons";
      const tonsKey = tons.dataset.statsTon;
      if (state.statsConditionTons.has(tonsKey)) {
        state.statsConditionTons.delete(tonsKey);
      } else {
        state.statsConditionTons.add(tonsKey);
      }
      renderStatsPanel();
    }
  });
  $("stats-list").addEventListener("click", (event) => {
    const row = event.target.closest("[data-stats-entry]");
    if (!row) return;
    state.selectedStatsMechId = row.dataset.statsEntry;
    renderCurrentStatsSelection();
  });
  $("stats-list").addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const row = event.target.closest("[data-stats-entry]");
    if (!row) return;
    event.preventDefault();
    state.selectedStatsMechId = row.dataset.statsEntry;
    renderCurrentStatsSelection();
  });
  $("compare-overlay").addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-compare]");
    if (remove) {
      removeCompareMech(remove.dataset.removeCompare);
      return;
    }
    const baseline = event.target.closest("[data-compare-baseline]");
    if (baseline) {
      event.preventDefault();
      toggleCompareBaseline(baseline.dataset.compareBaseline);
    }
  });
  document.querySelector(".tab-content").addEventListener("scroll", updateCompareOverlay, { passive: true });
  window.addEventListener("resize", updateCompareOverlay, { passive: true });
  $("compare-info").addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-compare]");
    if (remove) {
      removeCompareMech(remove.dataset.removeCompare);
      return;
    }
    const category = event.target.closest("[data-compare-category]");
    if (category) {
      event.preventDefault();
      toggleCompareCategory(category.dataset.compareCategory);
      return;
    }
    const baseline = event.target.closest("[data-compare-baseline]");
    if (baseline) {
      event.preventDefault();
      toggleCompareBaseline(baseline.dataset.compareBaseline);
      return;
    }
  });

  $("mech-list").addEventListener("click", (event) => {
    const chassis = event.target.closest("[data-chassis]");
    if (chassis) {
      state.selectedChassis = chassis.dataset.chassis;
      if (state.expandedChassis.has(state.selectedChassis)) {
        state.expandedChassis.delete(state.selectedChassis);
      } else {
        state.expandedChassis.add(state.selectedChassis);
      }
      if (!renderChassisGroupInPlace(state.selectedChassis)) {
        renderMechList();
      }
      updateCompareOverlay();
      return;
    }
    const button = event.target.closest("[data-mech]");
    if (button) {
      if (state.compareMode) {
        toggleCompareMech(button.dataset.mech);
      } else {
        selectMech(button.dataset.mech);
      }
    }
  });
  $("item-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-item]");
    if (button) selectItem(button.dataset.item);
  });
  $("components").addEventListener("click", (event) => {
    const add = event.target.closest("[data-add-to]");
    const remove = event.target.closest("[data-remove]");
    if (add) addSelectedItem(add.dataset.addTo);
    if (remove) removeItem(remove.dataset.remove);
  });
  $("reset-stock").addEventListener("click", () => {
    if (!state.selectedMech) return;
    state.currentBuild = buildFromLoadout(state.selectedMech);
    renderVariant();
  });
  $("save-build").addEventListener("click", () => {
    if (!state.selectedMech || !state.currentBuild) return;
    localStorage.setItem(savedKey(state.selectedMech), JSON.stringify(state.currentBuild));
    $("data-status").textContent = t("status.buildSaved");
  });
  $("clear-build").addEventListener("click", () => {
    if (!state.currentBuild) return;
    for (const component of Object.values(state.currentBuild.components)) {
      component.items = [];
    }
    renderVariant();
  });
}

async function loadJson(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(t("status.loadPathFailed", { path }));
    return response.json();
  } catch (error) {
    if (location.protocol === "file:") {
      throw new Error(t("status.fileProtocol"));
    }
    throw error;
  }
}

async function init() {
  applyStaticTranslations();
  bindEvents();
  setMainTab(state.activeMainTab);
  try {
    state.index = await loadJson("data/index.json");
    const [mechs, equipment, loadouts, omnipods] = await Promise.all([
      loadJson(state.index.files.mechs),
      loadJson(state.index.files.equipment),
      loadJson(state.index.files.loadouts),
      loadJson(state.index.files.omnipods),
    ]);
    state.mechs = mechs.filter((mech) => mech.definition && mech.definition.components);
    state.equipment = equipment;
    state.loadouts = loadouts;
    state.omnipods = omnipods;
    $("data-status").textContent = t("status.loadedData", { count: state.index.counts.mechs });
    renderAll();
  } catch (error) {
    $("data-status").textContent = error.message;
    console.error(error);
  }
}

init();
