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
    "loadout.import": "IMPORT",
    "loadout.export": "EXPORT",
    "loadout.close": "로드아웃 코드 창 닫기",
    "loadout.apply": "불러오기",
    "loadout.copy": "코드 복사",
    "loadout.importTitle": "MWO 코드 불러오기",
    "loadout.exportTitle": "MWO 코드 내보내기",
    "loadout.importDescription": "MWO MechLab에서 복사한 로드아웃 코드를 붙여 넣으세요.",
    "loadout.exportDescription": "현재 상태를 MWO MechLab에서 사용할 수 있는 코드로 변환했습니다.",
    "loadout.importPlaceholder": "MWO 로드아웃 코드를 붙여 넣으세요",
    "loadout.imported": "{mech} 로드아웃을 불러왔습니다.",
    "loadout.copied": "코드를 클립보드에 복사했습니다.",
    "loadout.copyFailed": "클립보드 복사에 실패했습니다. 코드를 직접 선택해 복사하세요.",
    "loadout.invalidMech": "코드의 멕 ID {id}를 현재 데이터에서 찾을 수 없습니다.",
    "loadout.invalidItem": "코드에 현재 데이터에 없는 장비 ID가 있습니다: {id}",
    "loadout.invalidOmnipod": "{component}의 옵니포드 ID가 올바르지 않습니다: {id}",
    "loadout.codecUnavailable": "MWO 코드 모듈을 불러오지 못했습니다.",
    "mechlab.showList": "멕 리스트",
    "simulation.open": "시뮬레이션",
    "simulation.title": "DPS 시뮬레이션",
    "simulation.hint": "버튼 또는 숫자 키 1~4를 누르고 있는 동안 해당 그룹을 발사합니다.",
    "simulation.close": "시뮬레이션 닫기",
    "simulation.elapsed": "경과 시간",
    "simulation.damage": "누적 데미지",
    "simulation.heat": "발열",
    "simulation.overheated": "오버히트",
    "simulation.scenario": "시나리오",
    "simulation.scenarioSelect": "시나리오 선택",
    "simulation.scenarioFree": "0. 자유 모드 / 시간제한 없음",
    "simulation.scenarioStationary": "1. 고정 표적",
    "simulation.scenarioBrawl44": "2. 4초 노출 / 2초 엄폐",
    "simulation.scenarioBrawl153": "3. 2초 노출 / 3초 엄폐",
    "simulation.movementState": "이동 상태",
    "simulation.stationary": "정지",
    "simulation.moving": "이동중",
    "simulation.movementHelp": "100% 속력으로 이동할 때 초당 0.3의 발열이 추가됩니다.",
    "simulation.mapTemperature": "맵 온도",
    "simulation.temperatureLow": "낮음",
    "simulation.temperatureNormal": "보통",
    "simulation.temperatureHigh": "높음",
    "simulation.temperatureVeryHigh": "매우 높음",
    "simulation.temperatureHelp": "맵 온도에 따라 초당 냉각량이 낮음 +0.15, 보통 0, 높음 -0.15, 매우 높음 -0.3만큼 보정됩니다.",
    "simulation.targetDistance": "적과의 거리",
    "simulation.distanceHelp": "최소 사거리 미만은 피해가 없고, 최소~적정 사거리는 100%, 적정~최대 사거리는 무기별 규칙에 따라 감소합니다.",
    "simulation.applySplash": "스플래쉬 적용",
    "simulation.endOnOverheat": "오버히트 시 종료",
    "simulation.endOnOverheatHelp": "활성화하면 최대 발열에 도달하는 즉시 발사와 측정을 종료합니다.",
    "simulation.noTimeLimit": "시간제한 없음",
    "simulation.targetVisible": "적 노출",
    "simulation.targetHidden": "적 엄폐 · 데미지 무효",
    "simulation.scenarioComplete": "시나리오 완료",
    "simulation.groups": "무기 그룹 지정",
    "simulation.reset": "측정 초기화",
    "simulation.weapon": "무기",
    "simulation.damageShort": "데미지",
    "simulation.cycle": "주기",
    "simulation.cooldown": "쿨타임",
    "simulation.group": "그룹",
    "simulation.groupStatus": "무기 그룹 상태",
    "simulation.noWeapons": "장착된 무기가 없습니다.",
    "tabs.mechlab": "멕랩",
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
    "filters.omnipods": "옵니포드",
    "filters.equipmentCategory": "장비 카테고리",
    "equipment.section.heatsinks": "HEAT SINKS",
    "equipment.section.targetComputers": "TARGET COMPS · BAP / CAP / ASP",
    "equipment.section.utility": "EQUIPMENT · MASC / ECM / JUMP JETS",
    "equipment.section.engineXl": "XL ENGINES",
    "equipment.section.engineLight": "LIGHT ENGINES",
    "equipment.section.engineStd": "STD ENGINES",
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
    "stats.cooldownScope": "쿨다운 하위 메뉴",
    "stats.quirkDurabilityScope": "내구도 쿼크 하위 메뉴",
    "stats.heatScope": "발열 하위 메뉴",
    "stats.rangeScope": "사거리 하위 메뉴",
    "stats.velocityScope": "탄속 하위 메뉴",
    "stats.scope": "내구도 범위",
    "stats.mode": "순위 비교 방식",
    "stats.workspace": "통계",
    "stats.filterAxis": "필터 기준",
    "stats.weightSelect": "체급 선택",
    "stats.tonsSelect": "톤수 선택",
    "stats.detail": "통계 상세",
    "stats.fit": "핏팅하기",
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
    "stats.noRows": "해당하는 멕 없음",
    "stats.noHardpoints": "하드포인트 없음",
    "stats.hideZeroQuirks": "적용받은 쿼크가 없으면 미표시",
    "stats.specCompare": "기종별 스펙 비교",
    "stats.chassisInfo": "기본 정보",
    "stats.modelCount": "모델 수",
    "stats.hardpoints": "하드포인트",
    "stats.energy": "에너지",
    "stats.missile": "미사일",
    "stats.ballistic": "발리스틱",
    "stats.duration": "듀레이션",
    "stats.rotaryRof": "로터리 ROF",
    "stats.machineGunRof": "머신건 ROF",
    "stats.heatDissipation": "열 방출",
    "stats.additionalSensor": "추가 센서",
    "stats.jamChance": "잼찬스",
    "stats.jamDuration": "잼 듀레이션",
    "stats.quirkSelect": "쿼크 선택",
    "equipment.noItem": "장비가 선택되지 않았습니다",
    "build.noEngine": "엔진 없음",
    "build.engineOutside": "엔진 {rating}이 허용 범위 {min}-{max} 밖입니다",
    "build.engineTorsoOnly": "엔진은 중앙 몸통에만 장착할 수 있습니다",
    "build.engineFixed": "이 옴니멕의 엔진은 고정되어 있습니다",
    "build.engineHeatSinks": "엔진 히트싱크",
    "build.engineHeatSinkOnly": "엔진 내부에는 히트싱크만 장착할 수 있습니다",
    "build.engineHeatSinkFull": "엔진 히트싱크 슬롯이 가득 찼습니다",
    "build.noAutoInstallLocation": "장착 가능한 부위가 없습니다",
    "build.noEngineHeatSinkSlots": "이 엔진에는 추가 히트싱크 슬롯이 없습니다",
    "build.heatSinkMismatch": "{item}은(는) 현재 히트싱크 업그레이드와 호환되지 않습니다",
    "build.artemisRequired": "{item}은(는) 아르테미스 업그레이드가 필요합니다",
    "build.standardGuidanceRequired": "{item}은(는) 스탠다드 유도 장치에서만 사용할 수 있습니다",
    "build.structureSlotsUnavailable": "엔도스틸 슬롯 {count}칸을 배치할 공간이 부족합니다",
    "build.armorSlotsUnavailable": "아머 업그레이드 슬롯 {count}칸을 배치할 공간이 부족합니다",
    "build.upgradeSlotsUnavailable": "업그레이드 슬롯 {count}칸을 배치할 공간이 부족합니다",
    "build.missingItem": "누락된 장비 {id}",
    "build.missing": "{id} 누락",
    "build.factionMismatch": "{item}은(는) {faction} 멕에 장착할 수 없습니다",
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
    "quirk.additionalSensor": "추가 센서",
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
    "loadout.import": "IMPORT",
    "loadout.export": "EXPORT",
    "loadout.close": "Close loadout code dialog",
    "loadout.apply": "Import",
    "loadout.copy": "Copy code",
    "loadout.importTitle": "Import MWO code",
    "loadout.exportTitle": "Export MWO code",
    "loadout.importDescription": "Paste a loadout code copied from the MWO MechLab.",
    "loadout.exportDescription": "The current build has been converted to an MWO-compatible code.",
    "loadout.importPlaceholder": "Paste an MWO loadout code",
    "loadout.imported": "Imported the {mech} loadout.",
    "loadout.copied": "Copied the code to the clipboard.",
    "loadout.copyFailed": "Clipboard access failed. Select and copy the code manually.",
    "loadout.invalidMech": "Mech ID {id} from the code is not present in the current data.",
    "loadout.invalidItem": "The code contains an equipment ID not present in the current data: {id}",
    "loadout.invalidOmnipod": "Invalid omnipod ID for {component}: {id}",
    "loadout.codecUnavailable": "The MWO code module could not be loaded.",
    "mechlab.showList": "Mech List",
    "simulation.open": "Simulation",
    "simulation.title": "DPS Simulation",
    "simulation.hint": "Hold buttons or number keys 1-4 to fire the assigned weapon groups.",
    "simulation.close": "Close simulation",
    "simulation.elapsed": "Elapsed",
    "simulation.damage": "Total damage",
    "simulation.heat": "Heat",
    "simulation.overheated": "OVERHEATED",
    "simulation.scenario": "Scenario",
    "simulation.scenarioSelect": "Select scenario",
    "simulation.scenarioFree": "0. Free mode / No time limit",
    "simulation.scenarioStationary": "1. Stationary target",
    "simulation.scenarioBrawl44": "2. 4s exposed / 2s covered",
    "simulation.scenarioBrawl153": "3. 2s exposed / 3s covered",
    "simulation.movementState": "Movement",
    "simulation.stationary": "Stationary",
    "simulation.moving": "Moving",
    "simulation.movementHelp": "Moving at 100% speed adds 0.3 heat per second.",
    "simulation.mapTemperature": "Map temperature",
    "simulation.temperatureLow": "Low",
    "simulation.temperatureNormal": "Normal",
    "simulation.temperatureHigh": "High",
    "simulation.temperatureVeryHigh": "Very high",
    "simulation.temperatureHelp": "Map temperature modifies cooling per second: Low +0.15, Normal 0, High -0.15, Very high -0.3.",
    "simulation.targetDistance": "Target distance",
    "simulation.distanceHelp": "Damage is zero below minimum range, 100% from minimum through optimal range, then falls by each weapon's rule through maximum range.",
    "simulation.applySplash": "Apply splash",
    "simulation.endOnOverheat": "End on overheat",
    "simulation.endOnOverheatHelp": "When enabled, firing and measurement end immediately upon reaching maximum heat.",
    "simulation.noTimeLimit": "NO TIME LIMIT",
    "simulation.targetVisible": "TARGET EXPOSED",
    "simulation.targetHidden": "TARGET COVERED · DAMAGE BLOCKED",
    "simulation.scenarioComplete": "SCENARIO COMPLETE",
    "simulation.groups": "Weapon groups",
    "simulation.reset": "Reset run",
    "simulation.weapon": "Weapon",
    "simulation.damageShort": "Damage",
    "simulation.cycle": "Cycle",
    "simulation.cooldown": "Cooldown",
    "simulation.group": "Group",
    "simulation.groupStatus": "Weapon group status",
    "simulation.noWeapons": "No weapons are installed.",
    "tabs.mechlab": "MechLab",
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
    "filters.omnipods": "Omnipods",
    "filters.equipmentCategory": "Equipment category",
    "equipment.section.heatsinks": "HEAT SINKS",
    "equipment.section.targetComputers": "TARGET COMPS · BAP / CAP / ASP",
    "equipment.section.utility": "EQUIPMENT · MASC / ECM / JUMP JETS",
    "equipment.section.engineXl": "XL ENGINES",
    "equipment.section.engineLight": "LIGHT ENGINES",
    "equipment.section.engineStd": "STD ENGINES",
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
    "stats.cooldownScope": "Cooldown submenu",
    "stats.quirkDurabilityScope": "Durability quirk submenu",
    "stats.heatScope": "Heat submenu",
    "stats.rangeScope": "Range submenu",
    "stats.velocityScope": "Velocity submenu",
    "stats.scope": "Durability scope",
    "stats.mode": "Ranking comparison mode",
    "stats.workspace": "Stats",
    "stats.filterAxis": "Filter axis",
    "stats.weightSelect": "Select weight class",
    "stats.tonsSelect": "Select tonnage",
    "stats.detail": "Stats detail",
    "stats.fit": "FIT MECH",
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
    "stats.noRows": "No matching mechs.",
    "stats.noHardpoints": "No hardpoints",
    "stats.hideZeroQuirks": "Hide zero quirk values",
    "stats.specCompare": "Chassis Spec Compare",
    "stats.chassisInfo": "Basic Info",
    "stats.modelCount": "Model Count",
    "stats.hardpoints": "Hardpoints",
    "stats.energy": "Energy",
    "stats.missile": "Missile",
    "stats.ballistic": "Ballistic",
    "stats.duration": "Duration",
    "stats.rotaryRof": "Rotary ROF",
    "stats.machineGunRof": "Machine Gun ROF",
    "stats.heatDissipation": "Heat Dissipation",
    "stats.additionalSensor": "Additional Sensor",
    "stats.jamChance": "Jam Chance",
    "stats.jamDuration": "Jam Duration",
    "stats.quirkSelect": "Select quirk",
    "equipment.noItem": "No item selected",
    "build.noEngine": "No engine",
    "build.engineOutside": "Engine {rating} outside {min}-{max}",
    "build.engineTorsoOnly": "Engines can only be installed in the center torso",
    "build.engineFixed": "This OmniMech has a fixed engine",
    "build.engineHeatSinks": "Engine Heat Sinks",
    "build.engineHeatSinkOnly": "Only heat sinks can be installed inside the engine",
    "build.engineHeatSinkFull": "Engine heat sink slots are full",
    "build.noAutoInstallLocation": "No component can install this item",
    "build.noEngineHeatSinkSlots": "This engine has no additional heat sink slots",
    "build.heatSinkMismatch": "{item} is incompatible with the current heat sink upgrade",
    "build.artemisRequired": "{item} requires the Artemis upgrade",
    "build.standardGuidanceRequired": "{item} can only be used with Standard guidance",
    "build.structureSlotsUnavailable": "Not enough room for {count} Endo Steel slots",
    "build.armorSlotsUnavailable": "Not enough room for {count} armor upgrade slots",
    "build.upgradeSlotsUnavailable": "Not enough room for {count} upgrade slots",
    "build.missingItem": "Missing item {id}",
    "build.missing": "Missing {id}",
    "build.factionMismatch": "{item} cannot be installed on a {faction} mech",
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
    "quirk.additionalSensor": "Additional Sensor",
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
  document.querySelectorAll("[data-i18n-tooltip]").forEach((element) => {
    element.dataset.tooltip = t(element.dataset.i18nTooltip);
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

const TORSO_REAR_COMPONENTS = {
  left_torso: "left_torso_rear",
  centre_torso: "centre_torso_rear",
  right_torso: "right_torso_rear",
};

const MWO_EXPORT_COMPONENT_ORDER = [
  "centre_torso",
  "right_torso",
  "left_torso",
  "left_arm",
  "right_arm",
  "left_leg",
  "right_leg",
  "head",
];

const MWO_UPGRADE_IDS = Object.freeze({
  armor: Object.freeze({ 0: 2810, 1: 2811, 2: 2812, 3: 2814, 4: 2815, 5: 2816 }),
  structure: Object.freeze({ 0: 3100, 1: 3101, 2: 3102, 3: 3103 }),
  heatsinks: Object.freeze({ 0: 3003, 1: 3002, 2: 3005, 3: 3006 }),
});

const MWO_UPGRADE_BITS = Object.freeze({
  armor: Object.freeze(Object.fromEntries(Object.entries(MWO_UPGRADE_IDS.armor).map(([bits, id]) => [id, Number(bits)]))),
  structure: Object.freeze(Object.fromEntries(Object.entries(MWO_UPGRADE_IDS.structure).map(([bits, id]) => [id, Number(bits)]))),
  heatsinks: Object.freeze(Object.fromEntries(Object.entries(MWO_UPGRADE_IDS.heatsinks).map(([bits, id]) => [id, Number(bits)]))),
});

const LOWER_ARM_ACTUATOR_ID = 1910;
const HAND_ACTUATOR_ID = 1911;
const MWO_ACTUATOR_BITS = Object.freeze({
  rightHandRemoved: 1,
  rightLowerArmRemoved: 2,
  leftHandRemoved: 4,
  leftLowerArmRemoved: 8,
});

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

const HARDPOINT_ORDER = ["energy", "missile", "ballistic", "ams", "ecm"];
const HARDPOINT_LABELS = {
  energy: "E",
  missile: "M",
  ballistic: "B",
  ams: "AMS",
  ecm: "ECM",
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
const ENGINE_COMPONENTS = new Set(["centre_torso"]);
const ENGINE_SIDE_COMPONENTS = new Set(["left_torso", "right_torso"]);
const FIXED_ARMOR_SLOT_ID = 1912;
const FIXED_STRUCTURE_SLOT_ID = 1913;
const MOVABLE_UPGRADE_SLOT_IDS = new Set([FIXED_ARMOR_SLOT_ID, FIXED_STRUCTURE_SLOT_ID]);
const ARMOR_CONTAINER_SLOT_COUNTS = new Map([
  [2801, 14],
  [2802, 7],
  [2805, 7],
]);
const STRUCTURE_SLOT_ORDER = [
  "right_torso",
  "centre_torso",
  "left_torso",
  "left_arm",
  "right_arm",
  "left_leg",
  "right_leg",
  "head",
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
  { key: "torsoShoulders", label: t("stats.torsoShoulders"), componentKeys: ["centre_torso", "left_torso", "right_torso"] },
  { key: "torso", label: t("stats.torso"), componentKeys: ["centre_torso"] },
  { key: "shoulders", label: t("stats.shoulders"), componentKeys: ["left_torso", "right_torso"] },
  { key: "head", label: t("component.head"), componentKeys: ["head"] },
  { key: "centerTorso", label: t("component.centerTorso"), componentKeys: ["centre_torso"] },
  { key: "leftTorso", label: t("component.leftTorso"), componentKeys: ["left_torso"] },
  { key: "rightTorso", label: t("component.rightTorso"), componentKeys: ["right_torso"] },
  { key: "leftArm", label: t("component.leftArm"), componentKeys: ["left_arm"] },
  { key: "rightArm", label: t("component.rightArm"), componentKeys: ["right_arm"] },
  { key: "leftLeg", label: t("component.leftLeg"), componentKeys: ["left_leg"] },
  { key: "rightLeg", label: t("component.rightLeg"), componentKeys: ["right_leg"] },
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

const STATS_QUIRK_DURABILITY_SCOPES = [
  { key: "max", label: t("stats.all"), summaryKey: "durability", digits: 1 },
  { key: "armor", label: t("quirk.armor"), summaryKey: "durabilityArmor", digits: 1 },
  { key: "structure", label: t("quirk.structure"), summaryKey: "durabilityStructure", digits: 1 },
  { key: "critPrevent", label: t("quirk.critPrevent"), summaryKey: "durabilityCritPrevent", digits: 1, scale: 100, unit: "%" },
];

const STATS_COOLDOWN_SCOPES = [
  { key: "all", label: t("stats.all"), summaryKey: "all", digits: 1, scale: 100, unit: "%" },
  { key: "energy", label: t("quirk.energyCooldown"), summaryKey: "energy", digits: 1, scale: 100, unit: "%" },
  { key: "missile", label: t("quirk.missileCooldown"), summaryKey: "missile", digits: 1, scale: 100, unit: "%" },
  { key: "ballistic", label: t("quirk.ballisticCooldown"), summaryKey: "ballistic", digits: 1, scale: 100, unit: "%" },
  { key: "duration", label: t("quirk.energyDuration"), summaryKey: "duration", digits: 1, scale: 100, unit: "%" },
  { key: "rotaryRof", label: t("quirk.racRof"), summaryKey: "rotaryRof", digits: 1, scale: 100, unit: "%" },
  { key: "machineGunRof", label: t("quirk.mgRof"), summaryKey: "machineGunRof", digits: 1, scale: 100, unit: "%" },
  { key: "jamChance", label: t("stats.jamChance"), summaryKey: "jamChance", digits: 1, scale: 100, unit: "%" },
  { key: "jamDuration", label: t("stats.jamDuration"), summaryKey: "jamDuration", digits: 1, scale: 100, unit: "%" },
];

const STATS_HEAT_SCOPES = [
  { key: "all", label: t("stats.all"), summaryKey: "heatAll", digits: 1, scale: 100, unit: "%" },
  { key: "energy", label: t("quirk.energyHeat"), summaryKey: "heatEnergy", digits: 1, scale: 100, unit: "%" },
  { key: "missile", label: t("quirk.missileHeat"), summaryKey: "heatMissile", digits: 1, scale: 100, unit: "%" },
  { key: "ballistic", label: t("quirk.ballisticHeat"), summaryKey: "heatBallistic", digits: 1, scale: 100, unit: "%" },
  { key: "heatDissipation", label: t("quirk.heatDissipation"), summaryKey: "heatDissipation", digits: 1, scale: 100, unit: "%" },
];

const STATS_RANGE_SCOPES = [
  { key: "all", label: t("stats.all"), summaryKey: "rangeAll", digits: 1, scale: 100, unit: "%" },
  { key: "energy", label: t("quirk.energyRange"), summaryKey: "rangeEnergy", digits: 1, scale: 100, unit: "%" },
  { key: "missile", label: t("quirk.missileRange"), summaryKey: "rangeMissile", digits: 1, scale: 100, unit: "%" },
  { key: "ballistic", label: t("quirk.ballisticRange"), summaryKey: "rangeBallistic", digits: 1, scale: 100, unit: "%" },
  { key: "additionalSensor", label: t("quirk.additionalSensor"), summaryKey: "additionalSensor", digits: 0 },
];

const STATS_VELOCITY_SCOPES = [
  { key: "all", label: t("stats.all"), summaryKey: "velocityAll", digits: 1, scale: 100, unit: "%" },
  { key: "energy", label: t("quirk.energyVelocity"), summaryKey: "velocityEnergy", digits: 1, scale: 100, unit: "%" },
  { key: "missile", label: t("quirk.missileVelocity"), summaryKey: "velocityMissile", digits: 1, scale: 100, unit: "%" },
  { key: "ballistic", label: t("quirk.ballisticVelocity"), summaryKey: "velocityBallistic", digits: 1, scale: 100, unit: "%" },
];

const STATS_CHASSIS_AGGREGATE_MODES = [
  { key: "average", label: t("common.average") },
  { key: "max", label: t("common.max") },
  { key: "min", label: t("common.min") },
];

const MAX_COMPARE_MECHS = 15;
const COMPARE_RANK_EPSILON = 0.0001;
const SIMULATION_TIMED_DURATION_MS = 16_000;
const SIMULATION_GROUP_FIRE_INDICATOR_MS = 250;
const SIMULATION_CONTINUOUS_HIT_EFFECT_INTERVAL_MS = 120;
const SIMULATION_MOVEMENT_HEAT_PER_SECOND = 0.3;
const SIMULATION_MAP_COOLING_MODIFIERS = Object.freeze({
  low: 0.15,
  normal: 0,
  high: -0.15,
  veryHigh: -0.3,
});
const SIMULATION_SCENARIOS = Object.freeze({
  free: Object.freeze({ durationMs: null, visibleMs: Number.POSITIVE_INFINITY, hiddenMs: 0 }),
  stationary: Object.freeze({ durationMs: SIMULATION_TIMED_DURATION_MS, visibleMs: SIMULATION_TIMED_DURATION_MS, hiddenMs: 0 }),
  brawl44: Object.freeze({ durationMs: SIMULATION_TIMED_DURATION_MS, visibleMs: 4_000, hiddenMs: 2_000 }),
  brawl153: Object.freeze({ durationMs: SIMULATION_TIMED_DURATION_MS, visibleMs: 2_000, hiddenMs: 3_000 }),
});
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
  activeMainTab: "mechlab",
  mechlabBrowseMode: true,
  mechlabCompactListOpen: false,
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
  statsQuirkDurabilityScope: "max",
  statsCooldownScope: "all",
  statsHeatScope: "all",
  statsRangeScope: "all",
  statsVelocityScope: "all",
  statsHideZeroQuirks: true,
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
  mechlabQuirkValuesCache: new Map(),
  weaponQuirkTypeCache: null,
  weaponQuirkTargetCache: null,
  ammoHardpointTypeCache: null,
  ecmOmnipodIds: null,
  fixedOmniEngineCache: new Map(),
  selectedMech: null,
  selectedChassis: "",
  expandedChassis: new Set(),
  selectedItemId: null,
  activeEquipmentCategory: "weapons",
  collapsedWarehouseSections: new Set(),
  omnipodDefinitionCache: new Map(),
  currentBuild: null,
  loadoutCodeMode: "import",
  activeDrag: null,
  simulation: {
    open: false,
    weapons: [],
    scenarioId: "free",
    movementState: "moving",
    mapTemperature: "normal",
    targetDistance: 180,
    applySplashDamage: true,
    endOnOverheat: true,
    targetVisible: true,
    finished: false,
    assignments: new Map(),
    heldGroups: new Set(),
    pointerGroups: new Map(),
    nextFireAt: new Map(),
    groupFiringUntil: new Map(),
    lastHitEffectAt: new Map(),
    pendingHitEffectDamage: new Map(),
    activeBurns: new Map(),
    continuousFireAt: new Map(),
    totalDamage: 0,
    currentHeat: 0,
    maxHeat: 30,
    coolingRate: 0,
    heatSinkCount: 0,
    lastHeatUpdateAt: null,
    overheated: false,
    startedAt: null,
    frameId: null,
  },
};

const $ = (id) => document.getElementById(id);

function number(value, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function fmt(value, digits = 1) {
  const numeric = number(value);
  return Number.isInteger(numeric) ? `${numeric}` : numeric.toFixed(digits);
}

function weaponDirectDamage(item) {
  return number(item?.stats?.damage) * number(item?.stats?.numFiring, 1);
}

function weaponSplashDamage(item) {
  return weaponDirectDamage(item) * Math.max(0, number(item?.stats?.splashPercent));
}

function weaponTotalDamage(item, includeSplash = true) {
  const directDamage = weaponDirectDamage(item);
  return directDamage + (includeSplash ? weaponSplashDamage(item) * 2 : 0);
}

function normalizeLookupKey(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function itemById(id) {
  return state.equipment?.items?.[String(id)] || null;
}

function loadoutInstalledEngine(build = state.currentBuild) {
  for (const component of Object.values(build?.components || {})) {
    for (const entry of component.items || []) {
      const item = itemById(entry.item_id);
      if (item?.item_type === "engine") return item;
    }
  }
  return null;
}

function fixedOmniEngine(mech = state.selectedMech) {
  if (!mech || !hasFixedOmnipods(mech)) return null;
  const stats = mech.definition?.stats || {};
  const minRating = number(stats.MinEngineRating);
  const maxRating = number(stats.MaxEngineRating);
  if (!minRating || minRating !== maxRating) return null;

  const cacheKey = String(mech.id);
  if (state.fixedOmniEngineCache.has(cacheKey)) return state.fixedOmniEngineCache.get(cacheKey);
  const explicitEngine = Object.values(mech.definition?.components || {})
    .flatMap((component) => component.fixed || [])
    .map((itemId) => itemById(itemId))
    .find((item) => item?.item_type === "engine");
  if (explicitEngine) {
    state.fixedOmniEngineCache.set(cacheKey, explicitEngine);
    return explicitEngine;
  }
  const faction = normalizeFactionKey(mech.faction);
  const expectedSideSlots = faction === "clan" ? 2 : faction === "innersphere" ? 3 : -1;
  const engine = Object.values(state.equipment?.items || {}).find((item) => (
    item.item_type === "engine"
    && number(item.stats?.rating) === minRating
    && number(item.stats?.sideSlots, -1) === expectedSideSlots
    && String(item.faction || "").split(",").map(normalizeFactionKey).includes(faction)
  )) || null;
  state.fixedOmniEngineCache.set(cacheKey, engine);
  return engine;
}

function installedEngine(build = state.currentBuild, mech = state.selectedMech) {
  return fixedOmniEngine(mech) || loadoutInstalledEngine(build);
}

function engineSideSlots(engine) {
  return Math.max(0, number(engine?.stats?.sideSlots));
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

function isGuidanceWeapon(item) {
  return item?.item_type === "weapon"
    && Boolean(item.stats?.artemisAmmoType)
    && !number(item.stats?.alwaysHasArtemis);
}

function isArtemisWeapon(item) {
  return isGuidanceWeapon(item) && /artemis/i.test(String(item.name || ""));
}

function artemisEquipped(build = state.currentBuild) {
  return Boolean(build?.upgrades?.artemis?.Equipped);
}

function guidanceUpgrade(build = state.currentBuild) {
  return upgradeItems("guidance").find((item) => (
    (number(item.stats?.extraSlots) > 0) === artemisEquipped(build)
  ));
}

function effectiveItemSlots(item, build = state.currentBuild) {
  const extraSlots = isArtemisWeapon(item) && artemisEquipped(build)
    ? number(guidanceUpgrade(build)?.stats?.extraSlots)
    : 0;
  return itemSlots(item) + extraSlots;
}

function guidanceMismatch(item, build = state.currentBuild) {
  if (!isGuidanceWeapon(item)) return "";
  if (isArtemisWeapon(item) && !artemisEquipped(build)) {
    return t("build.artemisRequired", { item: item.display_name || item.name });
  }
  if (!isArtemisWeapon(item) && artemisEquipped(build)) {
    return t("build.standardGuidanceRequired", { item: item.display_name || item.name });
  }
  return "";
}

function structureUpgradeSlots(mech = state.selectedMech, build = state.currentBuild) {
  if (!mech || !build || hasFixedOmnipods(mech)) return 0;
  const upgrade = itemById(build.upgrades?.structure?.ItemID);
  if (!upgrade || number(upgrade.stats?.weightPerTon, 0.1) >= 0.1) return 0;
  return normalizeFactionKey(mech.faction) === "clan" ? 7 : 14;
}

function armorUpgradeSlots(mech = state.selectedMech, build = state.currentBuild) {
  if (!mech || !build || hasFixedOmnipods(mech)) return 0;
  const upgrade = itemById(build.upgrades?.armor?.ItemID);
  if (!upgrade || /stealth/i.test(String(upgrade.name || ""))) return 0;
  return number(ARMOR_CONTAINER_SLOT_COUNTS.get(number(upgrade.stats?.containerId)));
}

function componentBaseSlotUsage(name, definition, build, engine, fixedEngine) {
  const compDef = definition.components?.[name] || {};
  const buildComp = build.components?.[name] || { items: [] };
  const internalSlots = (compDef.internals || []).reduce((sum, itemId) => {
    if (MOVABLE_UPGRADE_SLOT_IDS.has(Number(itemId))) return sum;
    return sum + Math.max(1, itemSlots(itemById(itemId)));
  }, 0);
  const fixedEquipmentSlots = (compDef.fixed || []).reduce((sum, itemId) => {
    const item = itemById(itemId);
    if (!item || item.item_type === "engine") return sum;
    if (name === "centre_torso" && isHeatSink(item)) return sum;
    return sum + Math.max(1, effectiveItemSlots(item, build));
  }, 0);
  const sideEngineSlots = ENGINE_SIDE_COMPONENTS.has(name) ? engineSideSlots(engine) : 0;
  const fixedEngineSlots = name === "centre_torso" && fixedEngine ? Math.max(1, itemSlots(fixedEngine)) : 0;
  const equipmentSlots = (buildComp.items || []).reduce((sum, entry) => {
    const item = itemById(entry.item_id);
    return item ? sum + Math.max(1, effectiveItemSlots(item, build)) : sum;
  }, 0);
  return internalSlots + fixedEquipmentSlots + sideEngineSlots + fixedEngineSlots + equipmentSlots;
}

function allocateUpgradeSlots(requiredSlots, definition, build, engine, fixedEngine, reservedByComponent = {}) {
  const byComponent = {};
  let remaining = requiredSlots;
  for (const name of STRUCTURE_SLOT_ORDER) {
    const slotLimit = number(definition.components?.[name]?.slots);
    const available = Math.max(0, slotLimit
      - componentBaseSlotUsage(name, definition, build, engine, fixedEngine)
      - number(reservedByComponent[name]));
    const allocated = Math.min(available, remaining);
    byComponent[name] = allocated;
    remaining -= allocated;
  }
  return { byComponent, unallocated: remaining };
}

function itemTons(item) {
  return number(item?.stats?.tons ?? item?.stats?.weight);
}

function itemHeat(item) {
  return number(item?.stats?.heat);
}

function engineIncludedHeatSinkCount(engine) {
  return engine ? Math.min(10, number(engine.stats?.heatsinks)) : 0;
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

function heatSinkMatchesUpgrade(item, build = state.currentBuild) {
  if (!item || !isHeatSink(item)) return true;
  const upgrade = itemById(build?.upgrades?.heatsinks?.ItemID);
  const compatibleId = number(upgrade?.stats?.compatibleHeatSink);
  return !compatibleId || Number(item.id) === compatibleId;
}

function engineAdditionalHeatSinkCapacity(engine) {
  return Math.max(0, number(engine?.stats?.heatsinks) - 10);
}

function fixedEngineHeatSinkItems(mech = state.selectedMech, build = state.currentBuild) {
  if (!mech || !build) return [];
  const definition = effectiveDefinition(mech, build);
  return (definition.components?.centre_torso?.fixed || [])
    .map((itemId) => itemById(itemId))
    .filter(isHeatSink);
}

function engineHeatSinkEntries(build = state.currentBuild) {
  if (!build) return [];
  if (!Array.isArray(build.engineHeatSinks)) build.engineHeatSinks = [];
  return build.engineHeatSinks;
}

function engineUserHeatSinkCapacity(
  engine = installedEngine(),
  mech = state.selectedMech,
  build = state.currentBuild,
) {
  return Math.max(
    0,
    engineAdditionalHeatSinkCapacity(engine) - fixedEngineHeatSinkItems(mech, build).length,
  );
}

function normalizeEngineHeatSinks(mech, build, { fillFromCentre = false } = {}) {
  if (!mech || !build) return build;
  build.components ||= {};
  build.components.centre_torso ||= { armor: 0, items: [] };
  const centreItems = build.components.centre_torso.items ||= [];
  const engine = installedEngine(build, mech);
  const capacity = engineUserHeatSinkCapacity(engine, mech, build);
  const internal = [];
  const overflow = [];

  for (const entry of Array.isArray(build.engineHeatSinks) ? build.engineHeatSinks : []) {
    if (isHeatSink(itemById(entry?.item_id))) internal.push({ ...entry });
    else if (entry?.item_id) overflow.push({ ...entry });
  }

  if (fillFromCentre && capacity > internal.length) {
    for (let index = 0; index < centreItems.length && internal.length < capacity;) {
      const entry = centreItems[index];
      if (!isHeatSink(itemById(entry?.item_id))) {
        index += 1;
        continue;
      }
      internal.push(centreItems.splice(index, 1)[0]);
    }
  }

  if (internal.length > capacity) overflow.push(...internal.splice(capacity));
  build.engineHeatSinks = internal;
  centreItems.push(...overflow);
  return build;
}

function isEcm(item) {
  return item?.ctype === "CGECMStats";
}

function equipmentHardpointType(item) {
  if (isEcm(item)) return "ecm";
  if (item?.item_type !== "weapon") return "";
  return String(item.hardpoint_type || item.stats?.type || "").toLowerCase();
}

function ammoHardpointType(item) {
  if (item?.item_type !== "ammo") return "";
  if (!state.ammoHardpointTypeCache) {
    const index = new Map();
    Object.values(state.equipment?.items || {}).forEach((weapon) => {
      if (weapon?.item_type !== "weapon") return;
      const type = equipmentHardpointType(weapon);
      if (!HARDPOINT_ORDER.includes(type)) return;
      [weapon.stats?.ammoType, weapon.stats?.artemisAmmoType].forEach((ammoType) => {
        const key = normalizeLookupKey(ammoType);
        if (key && !index.has(key)) index.set(key, type);
      });
    });
    state.ammoHardpointTypeCache = index;
  }
  return state.ammoHardpointTypeCache.get(
    normalizeLookupKey(item.stats?.type || item.name),
  ) || "";
}

function hardpointSlots(hardpoint) {
  return Math.max(1, number(hardpoint?.weapon_slots, 1));
}

function hardpointType(hardpoint) {
  if (String(hardpoint?.Type) === "4") return "ams";
  return String(hardpoint?.hardpoint_type || "").toLowerCase();
}

function hardpointCountsFromDefinition(definition) {
  const counts = {};
  Object.values(definition?.components || {}).forEach((component) => {
    (component.hardpoints || []).forEach((hp) => {
      const type = hardpointType(hp);
      if (!HARDPOINT_ORDER.includes(type)) return;
      counts[type] = (counts[type] || 0) + hardpointSlots(hp);
    });
  });
  return counts;
}

function hardpointCountsFromHardpoints(hardpoints = []) {
  const counts = {};
  hardpoints.forEach((hp) => {
    const type = hardpointType(hp);
    if (!HARDPOINT_ORDER.includes(type)) return;
    counts[type] = (counts[type] || 0) + hardpointSlots(hp);
  });
  return counts;
}

function renderHardpointBadges(counts, className = "", showZero = false) {
  return HARDPOINT_ORDER
    .filter((type) => Object.hasOwn(counts, type) && (showZero || number(counts[type]) > 0))
    .map((type) => `
      <span class="hardpoint-chip ${type}${className ? ` ${className}` : ""}" title="${type}">
        <span class="hardpoint-icon">${HARDPOINT_LABELS[type] || type[0].toUpperCase()}</span>
        <span class="hardpoint-count">${number(counts[type])}</span>
      </span>
    `)
    .join("");
}

function hardpointBadges(mech, build = buildFromLoadout(mech)) {
  return renderHardpointBadges(hardpointCountsFromDefinition(effectiveDefinition(mech, build)));
}

function hardpointTypes(mech, build = buildFromLoadout(mech)) {
  const definition = effectiveDefinition(mech, build);
  const types = new Set();
  Object.values(definition?.components || {}).forEach((component) => {
    (component.hardpoints || []).forEach((hp) => {
      const type = hardpointType(hp);
      if (HARDPOINT_ORDER.includes(type)) types.add(type);
    });
  });
  return HARDPOINT_ORDER.filter((type) => types.has(type));
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
  return (types || [])
    .map((type) => `
      <span class="hardpoint-chip ${type}" title="${type}">
        <span class="hardpoint-icon">${HARDPOINT_LABELS[type] || type.toUpperCase()}</span>
      </span>
    `)
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

function normalizeFactionKey(faction) {
  return String(faction || "").trim().toLowerCase().replace(/[\s_-]+/g, "");
}

function itemMatchesMechFaction(item, mech = state.selectedMech) {
  if (!item) return false;
  if (!mech) return true;
  const itemFactions = String(item.faction || "")
    .split(",")
    .map(normalizeFactionKey)
    .filter(Boolean);
  if (!itemFactions.length) return true;
  const mechFaction = normalizeFactionKey(mech?.faction);
  return Boolean(mechFaction) && itemFactions.includes(mechFaction);
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

function omnipodId(value) {
  const numeric = Number(value);
  return Number.isSafeInteger(numeric) && numeric > 0 ? numeric : null;
}

function podById(id) {
  const validId = omnipodId(id);
  return validId ? state.omnipods[String(validId)] || null : null;
}

function hasFixedOmnipods(mech) {
  const loadout = loadoutForMech(mech);
  return Object.values(loadout.components || {}).some((component) => omnipodId(component.omnipod));
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
  const migrateEngineHeatSinks = !Array.isArray(build.engineHeatSinks);
  normalizeRearArmor(build, mech, loadout);
  build.actuatorState = Number.isFinite(build.actuatorState)
    ? Math.max(0, build.actuatorState)
    : (hasFixedOmnipods(mech)
      ? MWO_ACTUATOR_BITS.leftLowerArmRemoved | MWO_ACTUATOR_BITS.rightLowerArmRemoved
      : 0);
  build.components ||= {};
  for (const name of COMPONENT_ORDER) {
    build.components[name] ||= { armor: 0, items: [] };
    build.components[name].omnipod = omnipodId(build.components[name].omnipod);
    const stockPodId = omnipodId(loadout.components?.[name]?.omnipod);
    if (stockPodId && !build.components[name].omnipod) build.components[name].omnipod = stockPodId;
  }
  if (fixedOmniEngine(mech)) {
    for (const component of Object.values(build.components)) {
      component.items = (component.items || []).filter((entry) => itemById(entry.item_id)?.item_type !== "engine");
    }
  }
  const centre = build.components.centre_torso;
  if (centre && !centre.omnipod) {
    const setName = dominantOmnipodSet(mech, build);
    const centrePod = findOmnipod(mech?.chassis, setName, "centre_torso");
    if (centrePod?.id) centre.omnipod = centrePod.id;
  }
  return normalizeEngineHeatSinks(mech, build, { fillFromCentre: migrateEngineHeatSinks });
}

function normalizeRearArmor(build, mech, loadout = loadoutForMech(mech)) {
  const current = build?.rearArmor;
  if (current && typeof current === "object" && !Array.isArray(current)) {
    build.rearArmor = Object.fromEntries(
      Object.keys(TORSO_REAR_COMPONENTS).map((name) => [name, Math.max(0, number(current[name]))]),
    );
    return build.rearArmor;
  }

  let remaining = Math.max(0, number(current));
  const rearArmor = {};
  for (const [name, rearName] of Object.entries(TORSO_REAR_COMPONENTS)) {
    const stockValue = Math.max(0, number(loadout?.components?.[rearName]?.armor));
    rearArmor[name] = Math.min(stockValue, remaining);
    remaining -= rearArmor[name];
  }
  if (remaining > 0) rearArmor.centre_torso += remaining;
  build.rearArmor = rearArmor;
  return rearArmor;
}

function buildFromLoadout(mech) {
  const loadout = loadoutForMech(mech);
  const components = {};
  for (const name of COMPONENT_ORDER) {
    const component = loadout.components?.[name] || {};
    components[name] = {
      armor: number(component.armor),
      omnipod: omnipodId(component.omnipod),
      items: (component.items || []).map((entry) => ({ ...entry })),
    };
  }
  const rearArmor = Object.fromEntries(
    Object.entries(TORSO_REAR_COMPONENTS).map(([name, rearName]) => (
      [name, number(loadout.components?.[rearName]?.armor)]
    )),
  );
  return applyFixedOmnipods(mech, {
    mechId: mech.id,
    loadoutName: mech.stock_loadout,
    components,
    rearArmor,
    actuatorState: hasFixedOmnipods(mech)
      ? MWO_ACTUATOR_BITS.leftLowerArmRemoved | MWO_ACTUATOR_BITS.rightLowerArmRemoved
      : 0,
    upgrades: JSON.parse(JSON.stringify(loadout.upgrades || {})),
  });
}

function mwoLoadoutEntryType(item) {
  if (item?.item_type === "weapon") return "weapon";
  if (item?.item_type === "ammo") return "ammo";
  return "module";
}

function mwoUpgradeId(category, bits, mech) {
  const id = MWO_UPGRADE_IDS[category]?.[bits];
  if (id && itemById(id)) return id;
  return number(loadoutForMech(mech).upgrades?.[category]?.ItemID);
}

function mwoUpgradeBits(category, itemId) {
  const bits = MWO_UPGRADE_BITS[category]?.[Number(itemId)];
  if (bits === undefined) {
    throw new Error(`Unsupported ${category} upgrade ID: ${itemId}`);
  }
  return bits;
}

function validateMwoOmnipod(mech, componentName, podId) {
  const pod = podById(podId);
  if (
    !pod
    || String(pod.chassis || "").toLowerCase() !== String(mech.chassis || "").toLowerCase()
    || String(pod.component || "").toLowerCase() !== componentName
  ) {
    throw new Error(t("loadout.invalidOmnipod", {
      component: COMPONENT_NAMES[componentName] || componentName,
      id: podId,
    }));
  }
  return pod;
}

function buildFromMwoCode(decoded, mech) {
  const components = {};
  for (const componentName of COMPONENT_ORDER) {
    const source = decoded.components?.[componentName] || {};
    if (decoded.isOmni && componentName !== "centre_torso") {
      validateMwoOmnipod(mech, componentName, source.omnipod);
    }
    const items = (source.itemIds || []).map((itemId) => {
      const item = itemById(itemId);
      if (!item) throw new Error(t("loadout.invalidItem", { id: itemId }));
      return {
        type: mwoLoadoutEntryType(item),
        item_id: item.id,
        weapon_group: null,
      };
    });
    components[componentName] = {
      armor: Math.max(0, number(source.armor)),
      omnipod: decoded.isOmni && componentName !== "centre_torso"
        ? number(source.omnipod)
        : null,
      items,
    };
  }

  return applyFixedOmnipods(mech, {
    mechId: mech.id,
    loadoutName: mech.stock_loadout,
    components,
    rearArmor: {
      centre_torso: Math.max(0, number(decoded.rearArmor?.centre_torso)),
      left_torso: Math.max(0, number(decoded.rearArmor?.left_torso)),
      right_torso: Math.max(0, number(decoded.rearArmor?.right_torso)),
    },
    actuatorState: decoded.isOmni ? Math.max(0, number(decoded.actuatorState)) : 0,
    upgrades: {
      armor: { ItemID: mwoUpgradeId("armor", decoded.upgrades.armorType, mech) },
      structure: { ItemID: mwoUpgradeId("structure", decoded.upgrades.structureType, mech) },
      heatsinks: { ItemID: mwoUpgradeId("heatsinks", decoded.upgrades.heatSinkType, mech) },
      artemis: { Equipped: decoded.upgrades.artemis ? 1 : 0 },
    },
  });
}

function currentBuildAsMwoLoadout() {
  const mech = state.selectedMech;
  const build = state.currentBuild;
  if (!mech || !build) throw new Error(t("info.selectMech"));
  const isOmni = hasFixedOmnipods(mech);
  const components = Object.fromEntries(MWO_EXPORT_COMPONENT_ORDER.map((componentName) => {
    const component = build.components?.[componentName] || {};
    const engineSinkItemIds = componentName === "centre_torso"
      ? engineHeatSinkEntries(build).map((entry) => Number(entry.item_id))
      : [];
    return [componentName, {
      armor: Math.max(0, number(component.armor)),
      omnipod: component.omnipod || null,
      itemIds: [
        ...(component.items || []).map((entry) => Number(entry.item_id)),
        ...engineSinkItemIds,
      ],
    }];
  }));
  return {
    chassisId: mech.id,
    isOmni,
    actuatorState: isOmni ? Math.max(0, number(build.actuatorState)) : 0,
    upgrades: {
      armorType: mwoUpgradeBits("armor", build.upgrades?.armor?.ItemID),
      structureType: mwoUpgradeBits("structure", build.upgrades?.structure?.ItemID),
      heatSinkType: mwoUpgradeBits("heatsinks", build.upgrades?.heatsinks?.ItemID),
      artemis: Boolean(build.upgrades?.artemis?.Equipped),
    },
    components,
    rearArmor: {
      centre_torso: Math.max(0, number(build.rearArmor?.centre_torso)),
      left_torso: Math.max(0, number(build.rearArmor?.left_torso)),
      right_torso: Math.max(0, number(build.rearArmor?.right_torso)),
    },
  };
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

function omnipodDefinition(pod) {
  if (!pod?.id) return { hardpoints: [], internals: [], fixed: [] };
  const cacheKey = String(pod.id);
  const cached = state.omnipodDefinitionCache.get(cacheKey);
  if (cached) return cached;

  let sourceComponent = null;
  for (const loadout of Object.values(state.loadouts || {})) {
    sourceComponent = Object.values(loadout.components || {}).find((component) => (
      String(component.omnipod || "") === cacheKey
    ));
    if (sourceComponent) break;
  }

  let hardpoints = (pod.hardpoints || []).map((hardpoint) => ({
    ...hardpoint,
    hardpoint_type: hardpointType(hardpoint),
  }));
  if ((sourceComponent?.items || []).some((entry) => isEcm(itemById(entry.item_id)))) {
    hardpoints = addEcmHardpoint(hardpoints);
  }
  const definition = {
    hardpoints,
    internals: pod.internals || [],
    fixed: pod.fixed || [],
  };
  state.omnipodDefinitionCache.set(cacheKey, definition);
  return definition;
}

function ecmCapableOmnipodIds() {
  if (state.ecmOmnipodIds) return state.ecmOmnipodIds;
  const ids = new Set();
  Object.values(state.loadouts || {}).forEach((loadout) => {
    Object.values(loadout.components || {}).forEach((component) => {
      if (!component.omnipod) return;
      const hasEcm = (component.items || []).some((entry) => isEcm(itemById(entry.item_id)));
      if (hasEcm) ids.add(String(component.omnipod));
    });
  });
  state.ecmOmnipodIds = ids;
  return ids;
}

function addEcmHardpoint(hardpoints) {
  if (hardpoints.some((hardpoint) => hardpointType(hardpoint) === "ecm")) return hardpoints;
  return [...hardpoints, {
    ID: "inferred-ecm",
    hardpoint_type: "ecm",
    Type: "ecm",
    Slots: 1,
    inferred: true,
  }];
}

function actuatorIsRemoved(componentName, itemId, build = state.currentBuild) {
  const actuatorState = Math.max(0, number(build?.actuatorState));
  if (componentName === "left_arm") {
    if (Number(itemId) === LOWER_ARM_ACTUATOR_ID) {
      return Boolean(actuatorState & MWO_ACTUATOR_BITS.leftLowerArmRemoved);
    }
    if (Number(itemId) === HAND_ACTUATOR_ID) {
      return Boolean(
        actuatorState
        & (MWO_ACTUATOR_BITS.leftLowerArmRemoved | MWO_ACTUATOR_BITS.leftHandRemoved),
      );
    }
  }
  if (componentName === "right_arm") {
    if (Number(itemId) === LOWER_ARM_ACTUATOR_ID) {
      return Boolean(actuatorState & MWO_ACTUATOR_BITS.rightLowerArmRemoved);
    }
    if (Number(itemId) === HAND_ACTUATOR_ID) {
      return Boolean(
        actuatorState
        & (MWO_ACTUATOR_BITS.rightLowerArmRemoved | MWO_ACTUATOR_BITS.rightHandRemoved),
      );
    }
  }
  return false;
}

function effectiveComponentDefinition(mech = state.selectedMech, build = state.currentBuild, componentName) {
  const base = currentDefinition(mech).components?.[componentName] || {};
  const buildComponent = build?.components?.[componentName] || {};
  const pod = podById(buildComponent.omnipod);
  const podDefinition = pod ? omnipodDefinition(pod) : { hardpoints: [], internals: [], fixed: [] };
  const podHardpoints = podDefinition.hardpoints;
  let hardpoints = pod
    ? podHardpoints.map((hardpoint) => ({
      ...hardpoint,
      hardpoint_type: hardpointType(hardpoint),
    }))
    : (base.hardpoints || []).map((hardpoint) => ({
      ...hardpoint,
      hardpoint_type: hardpointType(hardpoint),
    }));
  if (pod && ecmCapableOmnipodIds().has(String(pod.id))) {
    hardpoints = addEcmHardpoint(hardpoints);
  }
  const internals = [...(base.internals || []), ...podDefinition.internals]
    .filter((itemId, index, values) => values.indexOf(itemId) === index)
    .filter((itemId) => !actuatorIsRemoved(componentName, itemId, build));
  return {
    ...base,
    hardpoints,
    internals,
    fixed: [...(base.fixed || []), ...podDefinition.fixed],
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
  const isCompareTab = tabName === "compare";
  state.activeMainTab = tabName;
  state.compareMode = isCompareTab;
  if (tabName === "mechlab") {
    state.mechlabBrowseMode = !state.selectedMech;
    state.mechlabCompactListOpen = false;
  }
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
  if (tabName === "mechlab" && state.mechlabBrowseMode) $("mech-search").focus();
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

function mechlabQuirkValues(mech = state.selectedMech, build = state.currentBuild) {
  const omnipodKey = COMPONENT_ORDER.map((name) => build?.components?.[name]?.omnipod || "").join(":");
  const key = `${mech?.id || ""}:${omnipodKey}`;
  if (state.mechlabQuirkValuesCache.has(key)) return state.mechlabQuirkValuesCache.get(key);
  const values = effectiveQuirkValues(mech, build);
  state.mechlabQuirkValuesCache.set(key, values);
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
  const additionalSensor = additionalSensorSummaryMax(quirks);
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
    { label: t("quirk.additionalSensor"), className: "quirk-tone-default", value: additionalSensor, format: "number" },
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

function familyCooldownSummaryMax(quirks, type) {
  const allCooldown = quirkReduction(quirks, "all_cooldown_multiplier");
  const familyCooldown = quirkReduction(quirks, `${type}_cooldown_multiplier`);
  const weaponCooldown = type === "energy"
    ? energyWeaponCooldownMax(quirks)
    : weaponStatMax(quirks, cooldownQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), type);
  return allCooldown + familyCooldown + weaponCooldown;
}

function familyHeatSummaryMax(quirks, type) {
  const allHeat = quirkReduction(quirks, "all_heat_multiplier");
  const familyHeat = quirkReduction(quirks, `${type}_heat_multiplier`);
  const weaponHeat = type === "energy"
    ? energyWeaponHeatMax(quirks)
    : weaponStatMax(quirks, heatQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), type);
  return allHeat + familyHeat + weaponHeat;
}

function heatDissipationSummaryMax(quirks) {
  return quirkIncrease(quirks, "heatdissipation_multiplier");
}

function familyRangeSummaryMax(quirks, type) {
  return quirkIncrease(quirks, "all_range_multiplier")
    + quirkIncrease(quirks, `${type}_range_multiplier`)
    + weaponStatMax(quirks, rangeQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), type);
}

function familyVelocitySummaryMax(quirks, type) {
  return quirkIncrease(quirks, "all_velocity_multiplier")
    + quirkIncrease(quirks, `${type}_velocity_multiplier`)
    + weaponStatMax(quirks, velocityQuirkPrefix, (quirk) => Math.max(0, number(quirk.value)), type);
}

function additionalSensorSummaryMax(quirks) {
  return quirks.reduce((sum, quirk) => {
    const name = String(quirk.name || "").toLowerCase();
    return name.includes("sensorrange") && name.endsWith("_additive")
      ? sum + Math.max(0, number(quirk.value))
      : sum;
  }, 0);
}

function durationSummaryMax(quirks) {
  return quirkReduction(quirks, "all_duration_multiplier")
    + quirkReduction(quirks, "energy_duration_multiplier")
    + weaponStatMax(quirks, durationQuirkPrefix, (quirk) => Math.max(0, -number(quirk.value)), "energy");
}

function rotaryRofSummaryMax(quirks) {
  return quirkIncrease(quirks, "rotaryautocannon_rof_multiplier");
}

function machineGunRofSummaryMax(quirks) {
  return quirkIncrease(quirks, "ismachinegun_rof_multiplier") + quirkIncrease(quirks, "clanmachinegun_rof_multiplier");
}

function quirkReductionMax(quirks, predicate) {
  return quirks.reduce((maxValue, quirk) => {
    const name = String(quirk.name || "").toLowerCase();
    return predicate(name) ? Math.max(maxValue, Math.max(0, -number(quirk.value))) : maxValue;
  }, 0);
}

function jamChanceSummaryMax(quirks) {
  return quirkReductionMax(quirks, (name) => name.includes("jamchance") && name.endsWith("_multiplier"));
}

function jamDurationSummaryMax(quirks) {
  return quirkReductionMax(quirks, (name) => name.includes("jam") && name.includes("duration") && name.endsWith("_multiplier"));
}

function durabilityQuirkSummaryValues(quirks) {
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

  return {
    totalArmor,
    totalStructure,
    totalDurability: totalArmor + totalStructure,
    critPrevention: Math.max(0, -number(values.critchance_receiving_multiplier)),
  };
}

function quirkSummaryStats(quirks) {
  const durability = durabilityQuirkSummaryValues(quirks);
  return {
    cooldown: cooldownSummaryMax(quirks),
    heat: heatSummaryMax(quirks),
    durability: durability.totalDurability,
    durabilityArmor: durability.totalArmor,
    durabilityStructure: durability.totalStructure,
    durabilityCritPrevent: durability.critPrevention,
    range: rangeSummaryMax(quirks),
    velocity: velocitySummaryMax(quirks),
    all: cooldownSummaryMax(quirks),
    energy: familyCooldownSummaryMax(quirks, "energy"),
    missile: familyCooldownSummaryMax(quirks, "missile"),
    ballistic: familyCooldownSummaryMax(quirks, "ballistic"),
    heatAll: heatSummaryMax(quirks),
    heatEnergy: familyHeatSummaryMax(quirks, "energy"),
    heatMissile: familyHeatSummaryMax(quirks, "missile"),
    heatBallistic: familyHeatSummaryMax(quirks, "ballistic"),
    heatDissipation: heatDissipationSummaryMax(quirks),
    rangeAll: rangeSummaryMax(quirks),
    rangeEnergy: familyRangeSummaryMax(quirks, "energy"),
    rangeMissile: familyRangeSummaryMax(quirks, "missile"),
    rangeBallistic: familyRangeSummaryMax(quirks, "ballistic"),
    additionalSensor: additionalSensorSummaryMax(quirks),
    velocityAll: velocitySummaryMax(quirks),
    velocityEnergy: familyVelocitySummaryMax(quirks, "energy"),
    velocityMissile: familyVelocitySummaryMax(quirks, "missile"),
    velocityBallistic: familyVelocitySummaryMax(quirks, "ballistic"),
    duration: durationSummaryMax(quirks),
    rotaryRof: rotaryRofSummaryMax(quirks),
    machineGunRof: machineGunRofSummaryMax(quirks),
    jamChance: jamChanceSummaryMax(quirks),
    jamDuration: jamDurationSummaryMax(quirks),
  };
}

function durabilitySummaryTotal(quirks) {
  return durabilityQuirkSummaryValues(quirks).totalDurability;
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
  const { totalArmor, totalStructure, totalDurability, critPrevention } = durabilityQuirkSummaryValues(quirks);

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
    $("fit-info-mech").hidden = true;
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
  $("fit-info-mech").hidden = false;
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
        <div class="stats-detail-heading">
          <div class="stats-detail-summary">
            <div class="stats-detail-title">${omnipodIcon(mech)}<strong>${mech.display_name || variantCode(mech)}</strong></div>
            <div class="stats-detail-meta">${factionLabel(mech.faction)} - ${WEIGHT_CLASS_LABELS[mech.weight_class] || mech.weight_class || t("common.unknown")} - ${stats.MaxTons || "?"}t</div>
          </div>
          <button class="fit-mech-button stats-fit-button" type="button" data-fit-stats-mech="${mech.id}">${t("stats.fit")}</button>
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

function activeStatsQuirkDurabilityScope() {
  return STATS_QUIRK_DURABILITY_SCOPES.find((scope) => scope.key === state.statsQuirkDurabilityScope) || STATS_QUIRK_DURABILITY_SCOPES[0];
}

function activeStatsCooldownScope() {
  return STATS_COOLDOWN_SCOPES.find((scope) => scope.key === state.statsCooldownScope) || STATS_COOLDOWN_SCOPES[0];
}

function activeStatsHeatScope() {
  return STATS_HEAT_SCOPES.find((scope) => scope.key === state.statsHeatScope) || STATS_HEAT_SCOPES[0];
}

function activeStatsRangeScope() {
  return STATS_RANGE_SCOPES.find((scope) => scope.key === state.statsRangeScope) || STATS_RANGE_SCOPES[0];
}

function activeStatsVelocityScope() {
  return STATS_VELOCITY_SCOPES.find((scope) => scope.key === state.statsVelocityScope) || STATS_VELOCITY_SCOPES[0];
}

function activeStatsCategory() {
  if (state.activeStatsView === "mobility") return activeStatsMobilityCategory();
  if (state.activeStatsView === "quirks") {
    const category = activeStatsQuirkCategory();
    const scope = category.key === "cooldown"
      ? activeStatsCooldownScope()
      : category.key === "durability"
        ? activeStatsQuirkDurabilityScope()
        : category.key === "heat"
          ? activeStatsHeatScope()
          : category.key === "range"
            ? activeStatsRangeScope()
            : category.key === "velocity"
              ? activeStatsVelocityScope()
              : null;
    if (!scope) return category;
    return {
      ...category,
      label: `${category.label} / ${scope.label}`,
      metaLabel: `${category.metaLabel} / ${scope.label}`,
      summaryKey: scope.summaryKey,
      digits: scope.digits,
      scale: scope.scale,
      unit: scope.unit,
    };
  }
  const category = activeStatsDurabilityCategory();
  const scope = activeStatsDurabilityScope();
  return {
    ...category,
    label: `${category.label} / ${scope.label}`,
    metaLabel: `${category.metaLabel} / ${scope.label}`,
  };
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
    }))
    .filter((entry) => state.activeStatsView !== "quirks" || !state.statsHideZeroQuirks || Math.abs(entry.total) >= COMPARE_RANK_EPSILON);
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

  const cooldownScopeMenu = $("stats-cooldown-scope-menu");
  if (cooldownScopeMenu) {
    cooldownScopeMenu.hidden = !state.statsDetailMenusExpanded || state.activeStatsView !== "quirks" || activeStatsQuirkCategory().key !== "cooldown";
  }

  const quirkDurabilityScopeMenu = $("stats-quirk-durability-scope-menu");
  if (quirkDurabilityScopeMenu) {
    quirkDurabilityScopeMenu.hidden = !state.statsDetailMenusExpanded || state.activeStatsView !== "quirks" || activeStatsQuirkCategory().key !== "durability";
  }

  const heatScopeMenu = $("stats-heat-scope-menu");
  if (heatScopeMenu) {
    heatScopeMenu.hidden = !state.statsDetailMenusExpanded || state.activeStatsView !== "quirks" || activeStatsQuirkCategory().key !== "heat";
  }

  const rangeScopeMenu = $("stats-range-scope-menu");
  if (rangeScopeMenu) {
    rangeScopeMenu.hidden = !state.statsDetailMenusExpanded || state.activeStatsView !== "quirks" || activeStatsQuirkCategory().key !== "range";
  }

  const velocityScopeMenu = $("stats-velocity-scope-menu");
  if (velocityScopeMenu) {
    velocityScopeMenu.hidden = !state.statsDetailMenusExpanded || state.activeStatsView !== "quirks" || activeStatsQuirkCategory().key !== "velocity";
  }

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

  document.querySelectorAll("[data-stats-cooldown-scope]").forEach((button) => {
    const active = button.dataset.statsCooldownScope === state.statsCooldownScope;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-quirk-durability-scope]").forEach((button) => {
    const active = button.dataset.statsQuirkDurabilityScope === state.statsQuirkDurabilityScope;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-heat-scope]").forEach((button) => {
    const active = button.dataset.statsHeatScope === state.statsHeatScope;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-range-scope]").forEach((button) => {
    const active = button.dataset.statsRangeScope === state.statsRangeScope;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-stats-velocity-scope]").forEach((button) => {
    const active = button.dataset.statsVelocityScope === state.statsVelocityScope;
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
  const hideZeroQuirksToggle = $("stats-hide-zero-quirks-toggle");
  if (hideZeroQuirksToggle) hideZeroQuirksToggle.hidden = state.activeStatsView !== "quirks";
  const hideZeroQuirks = $("stats-hide-zero-quirks");
  if (hideZeroQuirks) hideZeroQuirks.checked = state.statsHideZeroQuirks;
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
  const fixedEngine = fixedOmniEngine(mech);
  let itemTonnage = fixedEngine ? itemTons(fixedEngine) : 0;
  let heat = 0;
  let alpha = 0;
  let ammo = 0;
  let armor = 0;
  const engine = installedEngine();
  const structureUpgrade = itemById(state.currentBuild.upgrades?.structure?.ItemID);
  const selectedGuidanceUpgrade = guidanceUpgrade();
  const guidanceTons = number(selectedGuidanceUpgrade?.stats?.extraTons);
  const requiredStructureSlots = structureUpgradeSlots(mech, state.currentBuild);
  const requiredArmorSlots = armorUpgradeSlots(mech, state.currentBuild);
  const structureAllocation = allocateUpgradeSlots(
    requiredStructureSlots,
    definition,
    state.currentBuild,
    engine,
    fixedEngine,
  );
  const armorAllocation = allocateUpgradeSlots(
    requiredArmorSlots,
    definition,
    state.currentBuild,
    engine,
    fixedEngine,
    structureAllocation.byComponent,
  );
  let installedHeatSinkCount = 0;
  const warnings = [];
  const componentUsage = {};

  for (const name of COMPONENT_ORDER) {
    const compDef = definition.components?.[name] || {};
    const buildComp = state.currentBuild.components[name] || { items: [] };
    const internalSlots = (compDef.internals || []).reduce((sum, itemId) => {
      if (!hasFixedOmnipods(mech) && MOVABLE_UPGRADE_SLOT_IDS.has(Number(itemId))) return sum;
      return sum + Math.max(1, itemSlots(itemById(itemId)));
    }, 0);
    const fixedItems = (compDef.fixed || [])
      .map((itemId) => itemById(itemId))
      .filter((item) => item && item.item_type !== "engine");
    const fixedEquipmentSlots = fixedItems.reduce(
      (sum, item) => sum + (
        name === "centre_torso" && isHeatSink(item)
          ? 0
          : Math.max(1, effectiveItemSlots(item))
      ),
      0,
    );
    const sideEngineSlots = ENGINE_SIDE_COMPONENTS.has(name) ? engineSideSlots(engine) : 0;
    const fixedEngineSlots = name === "centre_torso" && fixedEngine ? Math.max(1, itemSlots(fixedEngine)) : 0;
    const preferredStructureSlots = number(structureAllocation.byComponent[name]);
    const preferredArmorSlots = number(armorAllocation.byComponent[name]);
    const usage = {
      slots: internalSlots + fixedEquipmentSlots + sideEngineSlots + fixedEngineSlots,
      engineSideSlots: sideEngineSlots,
      fixedEngineSlots,
      preferredStructureSlots,
      preferredArmorSlots,
      structureSlots: 0,
      armorSlots: 0,
      occupiedStructureSlots: 0,
      occupiedArmorSlots: 0,
      movableStructureSlots: 0,
      movableArmorSlots: 0,
      occupiedUpgradeSlots: 0,
      movableUpgradeSlots: 0,
      hardpoints: {},
      warnings: [],
    };

    armor += number(buildComp.armor);
    for (const item of fixedItems) {
      itemTonnage += itemTons(item);
      heat += itemHeat(item);
      const mountType = equipmentHardpointType(item);
      if (mountType) usage.hardpoints[mountType] = (usage.hardpoints[mountType] || 0) + 1;
      if (item.item_type === "weapon") {
        alpha += weaponTotalDamage(item);
      }
      if (item.item_type === "ammo") ammo += number(item.stats?.numShots);
      if (isHeatSink(item)) installedHeatSinkCount += 1;
    }
    for (const entry of buildComp.items) {
      const item = itemById(entry.item_id);
      if (!item) {
        usage.warnings.push(t("build.missingItem", { id: entry.item_id }));
        continue;
      }
      if (!itemMatchesMechFaction(item, mech)) {
        usage.warnings.push(t("build.factionMismatch", {
          item: item.display_name || item.name,
          faction: factionLabel(mech.faction),
        }));
      }
      if (item.item_type === "engine" && !ENGINE_COMPONENTS.has(name)) {
        usage.warnings.push(t("build.engineTorsoOnly"));
      }
      const mismatch = guidanceMismatch(item);
      if (mismatch) usage.warnings.push(mismatch);
      const artemisWeapon = isArtemisWeapon(item) && artemisEquipped();
      usage.slots += effectiveItemSlots(item);
      itemTonnage += itemTons(item) + (artemisWeapon ? guidanceTons : 0);
      heat += itemHeat(item);
      const mountType = equipmentHardpointType(item);
      if (mountType) {
        const type = mountType;
        usage.hardpoints[type] = (usage.hardpoints[type] || 0) + 1;
      }
      if (item.item_type === "weapon") {
        alpha += weaponTotalDamage(item);
      }
      if (item.item_type === "ammo") {
        ammo += number(item.stats?.numShots);
      }
      if (isHeatSink(item)) {
        installedHeatSinkCount += 1;
      }
    }

    for (const [type, usedHardpoints] of Object.entries(usage.hardpoints)) {
      const capacity = (compDef.hardpoints || [])
        .filter((hp) => hardpointType(hp) === type)
        .reduce((sum, hp) => sum + hardpointSlots(hp), 0);
      if (usedHardpoints > capacity) usage.warnings.push(`${type} hardpoints ${usedHardpoints}/${capacity}`);
    }

    componentUsage[name] = usage;
  }

  const installedEngineHeatSinks = engineHeatSinkEntries(state.currentBuild);
  for (const entry of installedEngineHeatSinks) {
    const item = itemById(entry.item_id);
    if (!item) {
      warnings.push(t("build.missingItem", { id: entry.item_id }));
      continue;
    }
    itemTonnage += itemTons(item);
    heat += itemHeat(item);
    installedHeatSinkCount += 1;
  }

  const totalSlotCapacity = COMPONENT_ORDER.reduce((sum, name) => {
    return sum + number(definition.components?.[name]?.slots);
  }, 0);
  const baseSlotUsage = Object.values(componentUsage).reduce((sum, usage) => sum + number(usage.slots), 0);
  const requiredUpgradeSlots = requiredStructureSlots + requiredArmorSlots;
  const upgradeCalculationUsage = baseSlotUsage + requiredUpgradeSlots;
  const upgradeFreeSlots = Math.max(0, totalSlotCapacity - upgradeCalculationUsage);
  Object.entries(componentUsage).forEach(([name, usage]) => {
    const slotLimit = number(definition.components?.[name]?.slots);
    const availableSlots = Math.max(0, slotLimit - number(usage.slots));
    usage.structureSlots = number(usage.preferredStructureSlots);
    usage.armorSlots = number(usage.preferredArmorSlots);
    const componentUpgradeSlots = usage.structureSlots + usage.armorSlots;
    usage.occupiedUpgradeSlots = Math.min(
      componentUpgradeSlots,
      Math.max(0, availableSlots - upgradeFreeSlots),
    );
    usage.movableUpgradeSlots = componentUpgradeSlots - usage.occupiedUpgradeSlots;
    usage.occupiedStructureSlots = Math.min(usage.structureSlots, usage.occupiedUpgradeSlots);
    usage.occupiedArmorSlots = usage.occupiedUpgradeSlots - usage.occupiedStructureSlots;
    usage.movableStructureSlots = usage.structureSlots - usage.occupiedStructureSlots;
    usage.movableArmorSlots = usage.armorSlots - usage.occupiedArmorSlots;
    usage.slots += usage.occupiedUpgradeSlots;
    if (slotLimit && usage.slots > slotLimit) {
      usage.warnings.push(`Slots ${usage.slots}/${slotLimit}`);
    }
  });
  // Component slot counts only include upgrade slots that are currently forced
  // into that component. The build-wide count must reserve every movable upgrade
  // slot, including black candidates, because they share the same remaining capacity.
  const displayedSlotUsage = Object.values(componentUsage).reduce((sum, usage) => sum + number(usage.slots), 0);
  const currentSlotUsage = upgradeCalculationUsage;
  const freeSlots = upgradeFreeSlots;

  if (structureAllocation.unallocated) {
    warnings.push(t("build.structureSlotsUnavailable", { count: structureAllocation.unallocated }));
  }
  if (armorAllocation.unallocated) {
    warnings.push(t("build.armorSlotsUnavailable", { count: armorAllocation.unallocated }));
  }

  for (const [name, usage] of Object.entries(componentUsage)) {
    for (const warning of usage.warnings) {
      warnings.push(`${COMPONENT_NAMES[name] || name}: ${warning}`);
    }
  }

  armor += Object.values(state.currentBuild.rearArmor || {}).reduce((sum, value) => sum + number(value), 0);
  const armorUpgradeId = state.currentBuild.upgrades?.armor?.ItemID;
  const armorUpgrade = itemById(armorUpgradeId);
  const armorPerTon = number(armorUpgrade?.stats?.armorPerTon, 32);
  const engineIncludedHeatSinks = engineIncludedHeatSinkCount(engine);
  const fixedEngineHeatSinkCount = fixedEngineHeatSinkItems(mech, state.currentBuild).length;
  const engineHeatSinkCapacity = engineAdditionalHeatSinkCapacity(engine);
  const engineUserHeatSinkSlots = Math.max(0, engineHeatSinkCapacity - fixedEngineHeatSinkCount);
  const totalHeatSinkCount = installedHeatSinkCount + engineIncludedHeatSinks;
  const rawStructureTons = maxTons * number(structureUpgrade?.stats?.weightPerTon, 0.1);
  const structureTons = Math.ceil(rawStructureTons * 2) / 2;
  const totalTons = structureTons + itemTonnage + armor / armorPerTon;
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

  return {
    maxTons,
    totalTons,
    heat,
    alpha,
    ammo,
    armor,
    engine,
    installedHeatSinkCount,
    engineIncludedHeatSinks,
    engineHeatSinkCapacity,
    engineUserHeatSinkSlots,
    engineHeatSinkCount: installedEngineHeatSinks.length,
    fixedEngineHeatSinkCount,
    totalHeatSinkCount,
    totalSlotCapacity,
    baseSlotUsage,
    displayedSlotUsage,
    structureCalculationUsage: upgradeCalculationUsage,
    upgradeCalculationUsage,
    currentSlotUsage,
    freeSlots,
    structureFreeSlots: upgradeFreeSlots,
    upgradeFreeSlots,
    structureSlots: requiredStructureSlots,
    armorSlots: requiredArmorSlots,
    upgradeSlots: requiredUpgradeSlots,
    unallocatedStructureSlots: structureAllocation.unallocated,
    unallocatedArmorSlots: armorAllocation.unallocated,
    warnings,
    componentUsage,
  };
}

function renderSummary(calc = state.selectedMech && state.currentBuild ? calculateBuild() : null) {
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
    [t("common.slots"), `${calc.currentSlotUsage}/${calc.totalSlotCapacity}`],
    [t("common.status"), calc.warnings.length ? t("common.check") : t("common.ok")],
  ]
    .map(([label, value]) => `<div class="pill"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
}

function filteredMechsForCompactList() {
  const search = String($("mechlab-compact-search")?.value || "").trim().toLowerCase();
  return state.mechs.filter((mech) => (
    !search || `${mech.display_name} ${mech.name} ${mech.chassis}`.toLowerCase().includes(search)
  ));
}

function renderMechlabCompactList() {
  const panel = $("mechlab-compact-list-panel");
  const summary = $("mech-summary-panel");
  const showButton = $("show-mech-list");
  if (!panel || !summary || !showButton) return;
  const open = state.activeMainTab === "mechlab"
    && Boolean(state.selectedMech)
    && !state.mechlabBrowseMode
    && state.mechlabCompactListOpen;
  panel.hidden = !open;
  summary.hidden = open;
  showButton.hidden = state.activeMainTab !== "mechlab"
    || !state.selectedMech
    || state.mechlabBrowseMode
    || open;
  if (!open) return;

  const filtered = filteredMechsForCompactList();
  const list = $("mechlab-compact-list");
  if (!filtered.length) {
    list.innerHTML = `<div class="empty">${t("list.noMechs")}</div>`;
    return;
  }
  const grouped = groupMechsForList(filtered);
  const activeChassis = activeChassisForList();
  list.innerHTML = sortedClassNames(grouped)
    .map((weightClass) => {
      const chassisGroups = chassisGroupsForWeight(grouped, weightClass);
      const factionSections = factionSectionsForChassisGroups(chassisGroups);
      return `
        <section class="class-section compact-class-section">
          <div class="class-heading"><strong>${WEIGHT_CLASS_LABELS[weightClass] || formatChassisName(weightClass)}</strong></div>
          ${factionSections.map((section) => renderFactionSection(section, activeChassis, false)).join("")}
        </section>
      `;
    })
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
  const isMechlab = state.activeMainTab === "mechlab";
  const mechlabBrowsing = isMechlab && state.mechlabBrowseMode;
  const mechlabFocused = isMechlab && !state.mechlabBrowseMode;
  const useLargeList = mechlabBrowsing || state.largeMechList;
  layout.classList.toggle("mechlab-browse-layout", mechlabBrowsing);
  layout.classList.toggle("mechlab-focused-layout", mechlabFocused);
  layout.classList.toggle("large-mech-list-layout", state.largeMechList && !isMechlab);
  list.classList.toggle("mech-list-large", useLargeList);
  if (toggle) {
    toggle.hidden = isMechlab;
    toggle.classList.toggle("active", state.largeMechList);
    toggle.setAttribute("aria-pressed", String(state.largeMechList));
    toggle.textContent = state.largeMechList ? "<<" : ">>";
    toggle.title = state.largeMechList ? t("list.smallView") : t("list.largeView");
  }
  renderMechlabCompactList();

  if (!filtered.length) {
    $("mech-list").innerHTML = `<div class="empty">${t("list.noMechs")}</div>`;
    return;
  }

  if (useLargeList) {
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

function renderMechSummary(calc = null) {
  const mech = state.selectedMech;
  $("mech-summary-name").textContent = mech?.display_name || "-";
  $("mech-summary-current-tons").textContent = calc ? fmt(calc.totalTons) : "-";
  $("mech-summary-max-tons").textContent = calc ? fmt(calc.maxTons) : "-";
  $("mech-summary-current-slots").textContent = calc ? fmt(calc.currentSlotUsage, 0) : "-";
  $("mech-summary-max-slots").textContent = calc ? fmt(calc.totalSlotCapacity, 0) : "-";
  $("mech-summary-heat-sinks").textContent = calc ? fmt(calc.totalHeatSinkCount, 0) : "-";
  $("open-simulation").disabled = !mech || !state.currentBuild;
  $("export-loadout-code").disabled = !mech || !state.currentBuild;
}

function simulationItemKeys(item) {
  return new Set([
    item?.name,
    item?.display_name,
    ...String(item?.aliases || "").split(","),
  ].map(normalizeLookupKey).filter(Boolean));
}

function simulationSpecificQuirkTotal(quirks, item, suffix, direction = "reduction") {
  const keys = simulationItemKeys(item);
  return quirks.reduce((sum, quirk) => {
    const name = String(quirk.name || "").toLowerCase();
    if (!name.endsWith(suffix)) return sum;
    if (suffix === "_cooldown_multiplier" && DIRECT_COOLDOWN_QUIRKS.has(name)) return sum;
    if (suffix === "_heat_multiplier" && DIRECT_HEAT_QUIRKS.has(name)) return sum;
    if (suffix === "_duration_multiplier" && DIRECT_DURATION_QUIRKS.has(name)) return sum;
    if (suffix === "_range_multiplier" && DIRECT_RANGE_QUIRKS.has(name)) return sum;
    if (suffix === "_velocity_multiplier" && DIRECT_VELOCITY_QUIRKS.has(name)) return sum;
    if (suffix === "_spread_multiplier" && DIRECT_SPREAD_QUIRKS.has(name)) return sum;
    const prefix = normalizeLookupKey(name.slice(0, -suffix.length));
    if (!prefix || !keys.has(prefix)) return sum;
    const value = number(quirk.value);
    return sum + (direction === "reduction" ? Math.max(0, -value) : Math.max(0, value));
  }, 0);
}

function simulationWeaponTiming(item, quirks) {
  const stats = item?.stats || {};
  const type = equipmentHardpointType(item);
  const rof = number(stats.rof);
  if (rof > 0) {
    const rofBonus = simulationSpecificQuirkTotal(quirks, item, "_rof_multiplier", "increase");
    const cycle = Math.max(0.016, 1 / (rof * (1 + rofBonus)));
    return { duration: 0, cooldown: cycle, cycle };
  }

  const cooldownReduction = quirkReduction(quirks, "all_cooldown_multiplier")
    + quirkReduction(quirks, `${type}_cooldown_multiplier`)
    + simulationSpecificQuirkTotal(quirks, item, "_cooldown_multiplier");
  const durationReduction = quirkReduction(quirks, "all_duration_multiplier")
    + (type === "energy" ? quirkReduction(quirks, "energy_duration_multiplier") : 0)
    + simulationSpecificQuirkTotal(quirks, item, "_duration_multiplier");
  const cooldown = Math.max(0, number(stats.cooldown) * Math.max(0, 1 - cooldownReduction));
  const duration = Math.max(0, number(stats.duration) * Math.max(0, 1 - durationReduction));
  return { duration, cooldown, cycle: Math.max(0.016, cooldown + duration) };
}

function simulationWeaponCycle(item, quirks) {
  return simulationWeaponTiming(item, quirks).cycle;
}

function simulationWeaponHeat(item, quirks) {
  const type = equipmentHardpointType(item);
  const heatReduction = quirkReduction(quirks, "all_heat_multiplier")
    + quirkReduction(quirks, `${type}_heat_multiplier`)
    + simulationSpecificQuirkTotal(quirks, item, "_heat_multiplier");
  return Math.max(0, itemHeat(item) * Math.max(0, 1 - heatReduction));
}

function simulationWeaponRangeBonus(item, quirks) {
  const type = equipmentHardpointType(item);
  return quirkIncrease(quirks, "all_range_multiplier")
    + quirkIncrease(quirks, `${type}_range_multiplier`)
    + simulationSpecificQuirkTotal(quirks, item, "_range_multiplier", "increase");
}

function simulationWeaponRangeProfile(item, rangeBonus = 0) {
  const multiplier = Math.max(0, 1 + number(rangeBonus));
  const ranges = (item?.ranges || [])
    .map((range) => ({
      start: number(range.start) * multiplier,
      modifier: Math.max(0, number(range.damageModifier)),
      interpolation: String(range.interpolationToNextRange || "linear").toLowerCase(),
      exponent: Math.max(0.0001, number(range.exponent, 1)),
    }))
    .sort((left, right) => left.start - right.start);
  if (!ranges.length) return null;
  const maxModifier = Math.max(...ranges.map((range) => range.modifier));
  const fullDamageRanges = ranges.filter((range) => Math.abs(range.modifier - maxModifier) < 0.0001);
  return {
    ranges,
    minimumRange: fullDamageRanges[0]?.start ?? ranges[0].start,
    optimalRange: fullDamageRanges.at(-1)?.start ?? ranges[0].start,
    maximumRange: ranges.at(-1).start,
  };
}

function simulationWeaponDamageMultiplier(weapon, distance = state.simulation.targetDistance) {
  const profile = weapon.rangeProfile;
  if (!profile) return 1;
  const targetDistance = Math.max(0, number(Number(distance), 180));
  if (targetDistance < profile.minimumRange || targetDistance > profile.maximumRange) return 0;
  if (targetDistance <= profile.optimalRange) return 1;

  const ranges = profile.ranges;
  const index = ranges.findIndex((range) => range.start > targetDistance);
  if (index <= 0) return Math.max(0, Math.min(1, ranges.at(-1).modifier));
  const previous = ranges[index - 1];
  const next = ranges[index];
  if (previous.interpolation === "step" || next.start <= previous.start) {
    return Math.max(0, Math.min(1, previous.modifier));
  }
  const progress = Math.max(0, Math.min(1, (targetDistance - previous.start) / (next.start - previous.start)));
  const interpolatedProgress = previous.interpolation === "exponential"
    ? progress ** previous.exponent
    : progress;
  return Math.max(0, Math.min(1, previous.modifier + (next.modifier - previous.modifier) * interpolatedProgress));
}

function simulationWeaponDamage(weapon, shotCount = 1) {
  const damage = state.simulation.applySplashDamage ? weapon.damage : weapon.directDamage;
  return number(damage) * Math.max(0, number(shotCount, 1)) * simulationWeaponDamageMultiplier(weapon);
}

function isSimulationMachineGun(item) {
  return simulationItemKeys(item).has("machinegun")
    || normalizeLookupKey(item?.name).includes("machinegun");
}

function simulationHeatSinkItem(build = state.currentBuild) {
  const upgrade = itemById(build?.upgrades?.heatsinks?.ItemID);
  const compatible = itemById(upgrade?.stats?.compatibleHeatSink);
  if (isHeatSink(compatible)) return compatible;
  for (const component of Object.values(build?.components || {})) {
    const installed = (component.items || [])
      .map((entry) => itemById(entry.item_id))
      .find(isHeatSink);
    if (installed) return installed;
  }
  const internal = engineHeatSinkEntries(build)
    .map((entry) => itemById(entry.item_id))
    .find(isHeatSink);
  if (internal) return internal;
  return null;
}

function simulationHeatSystemFromSink(sink, heatSinkCount, heatDissipation = 0) {
  const engineCapacity = Math.abs(number(sink?.stats?.engineHeatbase));
  const externalCapacity = Math.abs(number(sink?.stats?.heatbase));
  const engineCapacityCount = Math.min(10, heatSinkCount);
  const externalCapacityCount = Math.max(0, heatSinkCount - 10);
  const maxHeat = 30
    + engineCapacityCount * engineCapacity
    + externalCapacityCount * externalCapacity;
  return {
    heatSinkCount,
    maxHeat,
    coolingRate: heatSinkCount * number(sink?.stats?.cooling) * (1 + heatDissipation),
  };
}

function simulationHeatSystem() {
  const sink = simulationHeatSinkItem();
  const heatSinkCount = state.selectedMech && state.currentBuild
    ? calculateBuild().totalHeatSinkCount
    : 0;
  const quirks = effectiveQuirks(state.selectedMech, state.currentBuild);
  return simulationHeatSystemFromSink(
    sink,
    heatSinkCount,
    quirkIncrease(quirks, "heatdissipation_multiplier"),
  );
}

function collectSimulationWeapons() {
  if (!state.selectedMech || !state.currentBuild) return [];
  const definition = effectiveDefinition(state.selectedMech, state.currentBuild);
  const quirks = effectiveQuirks(state.selectedMech, state.currentBuild);
  const weapons = [];

  for (const component of COMPONENT_ORDER) {
    const fixed = definition.components?.[component]?.fixed || [];
    fixed.forEach((itemId, index) => {
      const item = itemById(itemId);
      if (item?.item_type !== "weapon") return;
      const timing = simulationWeaponTiming(item, quirks);
      weapons.push({
        key: `${state.selectedMech.id}:fixed:${component}:${index}:${item.id}`,
        item,
        component,
        directDamage: weaponDirectDamage(item),
        splashDamage: weaponSplashDamage(item),
        damage: weaponTotalDamage(item),
        heat: simulationWeaponHeat(item, quirks),
        continuous: isSimulationMachineGun(item),
        rangeProfile: simulationWeaponRangeProfile(item, simulationWeaponRangeBonus(item, quirks)),
        ...timing,
        entry: null,
      });
    });

    (state.currentBuild.components?.[component]?.items || []).forEach((entry, index) => {
      const item = itemById(entry.item_id);
      if (item?.item_type !== "weapon") return;
      const timing = simulationWeaponTiming(item, quirks);
      weapons.push({
        key: `${state.selectedMech.id}:installed:${component}:${index}:${item.id}`,
        item,
        component,
        directDamage: weaponDirectDamage(item),
        splashDamage: weaponSplashDamage(item),
        damage: weaponTotalDamage(item),
        heat: simulationWeaponHeat(item, quirks),
        continuous: isSimulationMachineGun(item),
        rangeProfile: simulationWeaponRangeProfile(item, simulationWeaponRangeBonus(item, quirks)),
        ...timing,
        entry,
      });
    });
  }
  return weapons;
}

function simulationScenarioDefinition() {
  return SIMULATION_SCENARIOS[state.simulation.scenarioId] || SIMULATION_SCENARIOS.free;
}

function simulationDurationMs() {
  return simulationScenarioDefinition().durationMs;
}

function simulationElapsedMs(now = performance.now()) {
  if (state.simulation.startedAt === null) return 0;
  const elapsedMs = Math.max(0, now - state.simulation.startedAt);
  const durationMs = simulationDurationMs();
  return durationMs === null ? elapsedMs : Math.min(durationMs, elapsedMs);
}

function simulationTargetVisibleAt(now = performance.now()) {
  const simulation = state.simulation;
  if (simulation.startedAt === null) return true;
  const scenario = simulationScenarioDefinition();
  if (scenario.hiddenMs <= 0) return true;
  const cycleMs = scenario.visibleMs + scenario.hiddenMs;
  return simulationElapsedMs(now) % cycleMs < scenario.visibleMs;
}

function renderSimulationScenario(now = performance.now()) {
  const simulation = state.simulation;
  const elapsedMs = simulationElapsedMs(now);
  const durationMs = simulationDurationMs();
  const stage = $("simulation-target-stage");
  stage.classList.toggle("target-visible", simulation.targetVisible);
  stage.classList.toggle("target-hidden", !simulation.targetVisible);
  stage.classList.toggle("scenario-finished", simulation.finished);
  const status = simulation.finished
    ? t("simulation.scenarioComplete")
    : t(simulation.targetVisible ? "simulation.targetVisible" : "simulation.targetHidden");
  $("simulation-scenario-time").textContent = durationMs === null
    ? t("simulation.noTimeLimit")
    : `${(Math.max(0, durationMs - elapsedMs) / 1000).toFixed(1)}s`;
  stage.setAttribute("aria-label", status);
  document.querySelectorAll('input[name="simulation-scenario"]').forEach((input) => {
    const selected = input.value === simulation.scenarioId;
    input.checked = selected;
    input.closest(".simulation-scenario-option")?.classList.toggle("active", selected);
  });
}

function updateSimulationScenario(now = performance.now()) {
  const simulation = state.simulation;
  const elapsedMs = simulationElapsedMs(now);
  const durationMs = simulationDurationMs();
  simulation.finished = durationMs !== null
    && simulation.startedAt !== null
    && elapsedMs >= durationMs;
  simulation.targetVisible = simulationTargetVisibleAt(now);
  renderSimulationScenario(now);
}

function finishSimulationRun() {
  const simulation = state.simulation;
  simulation.finished = true;
  simulation.heldGroups.clear();
  simulation.pointerGroups.clear();
  simulation.continuousFireAt.clear();
  simulation.groupFiringUntil.clear();
  simulation.lastHitEffectAt.clear();
  simulation.pendingHitEffectDamage.clear();
  simulation.activeBurns.clear();
  renderSimulationGroupStatus();
}

function resetSimulationRun() {
  const simulation = state.simulation;
  simulation.heldGroups.clear();
  simulation.pointerGroups.clear();
  simulation.nextFireAt.clear();
  simulation.groupFiringUntil.clear();
  simulation.lastHitEffectAt.clear();
  simulation.pendingHitEffectDamage.clear();
  simulation.activeBurns.clear();
  simulation.continuousFireAt.clear();
  simulation.totalDamage = 0;
  simulation.currentHeat = 0;
  simulation.overheated = false;
  simulation.targetVisible = true;
  simulation.finished = false;
  simulation.lastHeatUpdateAt = null;
  simulation.startedAt = null;
  if (simulation.frameId !== null) cancelAnimationFrame(simulation.frameId);
  simulation.frameId = null;
  document.querySelectorAll(".simulation-hit-effect, .simulation-damage-event").forEach((effect) => effect.remove());
  renderSimulationMetrics();
  renderSimulationScenario();
  renderSimulationGroupStatus();
}

function renderSimulationMetrics(now = performance.now()) {
  const simulation = state.simulation;
  const elapsed = simulationElapsedMs(now) / 1000;
  $("simulation-elapsed").textContent = `${elapsed.toFixed(2)}s`;
  $("simulation-damage").textContent = simulation.totalDamage.toFixed(2);
  $("simulation-dps").textContent = (elapsed > 0 ? simulation.totalDamage / elapsed : 0).toFixed(2);
  renderSimulationCooldowns(now);
  renderSimulationHeat();
  renderSimulationEnemyHud(now);
}

function renderSimulationHeat() {
  const simulation = state.simulation;
  const ratio = simulation.maxHeat > 0 ? Math.max(0, simulation.currentHeat / simulation.maxHeat) : 0;
  const fillRatio = Math.min(1, ratio);
  const percent = ratio * 100;
  const netCoolingRate = simulationNetCoolingRate();
  const heatRateText = netCoolingRate >= 0
    ? `-${fmt(netCoolingRate, 2)}/s`
    : `+${fmt(-netCoolingRate, 2)}/s`;
  $("simulation-heat-label").textContent = simulation.overheated
    ? `${t("simulation.heat")} | ${t("simulation.overheated")}`
    : t("simulation.heat");
  $("simulation-heat-value").textContent = `${simulation.currentHeat.toFixed(1)} / ${fmt(simulation.maxHeat, 1)}`;
  $("simulation-heat-rate").textContent = heatRateText;
  $("simulation-heat-percent").textContent = `${percent.toFixed(1)}%`;
  $("simulation-heat-fill").style.transform = `scaleX(${fillRatio})`;
  $("simulation-heat-gauge").classList.toggle("overheated", simulation.overheated);
  const bar = $("simulation-heat-fill").parentElement;
  bar.setAttribute("aria-valuemax", "100");
  bar.setAttribute("aria-valuenow", String(Math.round(Math.min(100, percent))));
  bar.setAttribute(
    "aria-valuetext",
    `${simulation.currentHeat.toFixed(1)} / ${fmt(simulation.maxHeat, 1)}, ${simulation.overheated ? `${t("simulation.overheated")}, ` : ""}${percent.toFixed(1)}%`,
  );
}

function addSimulationHeat(weapon, shotCount = 1) {
  state.simulation.currentHeat += number(weapon.heat) * shotCount;
}

function simulationNetCoolingRate() {
  const simulation = state.simulation;
  const temperatureModifier = SIMULATION_MAP_COOLING_MODIFIERS[simulation.mapTemperature]
    ?? SIMULATION_MAP_COOLING_MODIFIERS.normal;
  const movementHeat = simulation.movementState === "moving"
    ? SIMULATION_MOVEMENT_HEAT_PER_SECOND
    : 0;
  return simulation.coolingRate + temperatureModifier - movementHeat;
}

function coolSimulationHeat(now) {
  const simulation = state.simulation;
  if (simulation.lastHeatUpdateAt === null) {
    simulation.lastHeatUpdateAt = now;
    return;
  }
  const elapsed = Math.max(0, (now - simulation.lastHeatUpdateAt) / 1000);
  simulation.currentHeat = Math.max(0, simulation.currentHeat - simulationNetCoolingRate() * elapsed);
  if (simulation.overheated && simulation.currentHeat < simulation.maxHeat) simulation.overheated = false;
  simulation.lastHeatUpdateAt = now;
}

function applySimulationOverheat() {
  const simulation = state.simulation;
  if (simulation.overheated || simulation.currentHeat < simulation.maxHeat) return;
  simulation.overheated = true;
  simulation.heldGroups.clear();
  simulation.continuousFireAt.clear();
  if (simulation.endOnOverheat) {
    finishSimulationRun();
    renderSimulationScenario();
  }
  renderSimulationHeat();
  renderSimulationGroupStatus();
}

function renderSimulationCooldowns(now = performance.now()) {
  const weaponsByKey = new Map(state.simulation.weapons.map((weapon) => [weapon.key, weapon]));
  document.querySelectorAll("[data-simulation-cooldown]").forEach((bar) => {
    const weapon = weaponsByKey.get(bar.dataset.simulationCooldown);
    if (!weapon) return;
    const nextFire = state.simulation.nextFireAt.get(weapon.key) || 0;
    const remaining = Math.max(0, nextFire - now);
    const cooldownStart = nextFire - weapon.cooldown * 1000;
    const progress = !nextFire || remaining <= 0
      ? 1
      : weapon.cooldown > 0 && now >= cooldownStart
        ? Math.max(0, Math.min(1, 1 - remaining / (weapon.cooldown * 1000)))
        : 0;
    bar.style.transform = `scaleX(${progress})`;
    bar.parentElement.classList.toggle("ready", progress >= 1);
    bar.parentElement.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  });
}

function renderSimulationEnemyHud(now = performance.now()) {
  const simulation = state.simulation;
  const totalDamage = $("simulation-enemy-total-damage");
  if (totalDamage) totalDamage.textContent = simulation.totalDamage.toFixed(2);

  const heatRatio = simulation.maxHeat > 0
    ? Math.max(0, Math.min(1, simulation.currentHeat / simulation.maxHeat))
    : 0;
  const heatFill = $("simulation-enemy-heat-fill");
  if (heatFill) heatFill.style.transform = `scaleY(${heatRatio})`;
  $("simulation-enemy-heat")?.classList.toggle("overheated", simulation.overheated);

  document.querySelectorAll("[data-simulation-enemy-group]").forEach((row) => {
    const group = Number(row.dataset.simulationEnemyGroup);
    const weapons = simulation.weapons.filter((weapon) => simulationWeaponInGroup(weapon, group));
    let selectedWeapon = null;
    let shortestRemaining = Number.POSITIVE_INFINITY;
    weapons.forEach((weapon) => {
      const remaining = weapon.continuous
        ? 0
        : Math.max(0, (simulation.nextFireAt.get(weapon.key) || 0) - now);
      if (remaining < shortestRemaining) {
        shortestRemaining = remaining;
        selectedWeapon = weapon;
      }
    });
    let progress = 0;
    if (selectedWeapon) {
      if (selectedWeapon.continuous || shortestRemaining <= 0) {
        progress = 1;
      } else {
        const cooldownStart = (simulation.nextFireAt.get(selectedWeapon.key) || 0)
          - selectedWeapon.cooldown * 1000;
        progress = selectedWeapon.cooldown > 0 && now >= cooldownStart
          ? Math.max(0, Math.min(1, 1 - shortestRemaining / (selectedWeapon.cooldown * 1000)))
          : 0;
      }
    }
    row.classList.toggle("ready", Boolean(selectedWeapon) && progress >= 1);
    row.classList.toggle("unassigned", !selectedWeapon);
    const fill = row.querySelector("b i");
    if (fill) fill.style.transform = `scaleX(${progress})`;
  });
}

function normalizeSimulationGroups(value, fallbackGroup = null) {
  const values = value instanceof Set
    ? Array.from(value)
    : Array.isArray(value) ? value : value === null || value === undefined ? [] : [value];
  const groups = new Set(
    values
      .map((group) => Number(group))
      .filter((group) => Number.isInteger(group) && group >= 1 && group <= 4),
  );
  if (!groups.size && fallbackGroup >= 1 && fallbackGroup <= 4) groups.add(fallbackGroup);
  return groups;
}

function simulationGroupsForWeapon(weapon) {
  if (!state.simulation.assignments.has(weapon.key)) return new Set([1]);
  return normalizeSimulationGroups(state.simulation.assignments.get(weapon.key));
}

function simulationWeaponInGroup(weapon, group) {
  return simulationGroupsForWeapon(weapon).has(group);
}

function simulationWeaponIsHeld(weapon) {
  for (const group of simulationGroupsForWeapon(weapon)) {
    if (state.simulation.heldGroups.has(group)) return true;
  }
  return false;
}

function markSimulationWeaponFiring(weapon, firedAt, durationMs = 0) {
  const simulation = state.simulation;
  const firingUntil = firedAt + Math.max(SIMULATION_GROUP_FIRE_INDICATOR_MS, durationMs);
  for (const group of simulationGroupsForWeapon(weapon)) {
    if (!simulation.heldGroups.has(group)) continue;
    simulation.groupFiringUntil.set(
      group,
      Math.max(simulation.groupFiringUntil.get(group) || 0, firingUntil),
    );
  }
}

function simulationGroupVisualState(group, now = performance.now()) {
  const simulation = state.simulation;
  const weapons = simulation.weapons.filter((weapon) => simulationWeaponInGroup(weapon, group));
  const ready = !simulation.finished
    && !simulation.overheated
    && weapons.some((weapon) => (
      weapon.continuous
        ? !simulation.continuousFireAt.has(weapon.key)
        : (simulation.nextFireAt.get(weapon.key) || 0) <= now
    ));
  if (ready) return "ready";
  if ((simulation.groupFiringUntil.get(group) || 0) > now) return "firing";
  if (simulation.heldGroups.has(group)) return "held";
  return "";
}

function updateSimulationGroupStatus(now = performance.now()) {
  document.querySelectorAll("[data-simulation-fire-group]").forEach((button) => {
    const group = Number(button.dataset.simulationFireGroup);
    const visualState = simulationGroupVisualState(group, now);
    button.classList.toggle("ready", visualState === "ready");
    button.classList.toggle("firing", visualState === "firing");
    button.classList.toggle("held", visualState === "held");
    button.setAttribute("aria-pressed", String(state.simulation.heldGroups.has(group)));
  });
}

function renderSimulationGroupStatus(now = performance.now()) {
  $("simulation-group-status").innerHTML = [1, 2, 3, 4].map((group) => {
    const count = state.simulation.weapons.filter((weapon) => simulationWeaponInGroup(weapon, group)).length;
    const visualState = simulationGroupVisualState(group, now);
    const held = state.simulation.heldGroups.has(group);
    return `
      <button
        class="simulation-group-key ${visualState}"
        type="button"
        data-simulation-fire-group="${group}"
        aria-label="${t("simulation.group")} ${group}"
        aria-pressed="${held}"
      ><strong>${group}</strong><span>${count}</span></button>
    `;
  }).join("");
}

function renderSimulationWeaponList() {
  const list = $("simulation-weapon-list");
  if (!state.simulation.weapons.length) {
    list.innerHTML = `<div class="simulation-empty">${t("simulation.noWeapons")}</div>`;
    return;
  }
  list.innerHTML = state.simulation.weapons.map((weapon) => {
    const selectedGroups = simulationGroupsForWeapon(weapon);
    const groupButtons = [1, 2, 3, 4].map((group) => `
      <label class="simulation-group-option ${selectedGroups.has(group) ? "active" : ""}">
        <input type="checkbox" name="simulation-group-${weapon.key}" value="${group}" data-simulation-weapon="${weapon.key}" ${selectedGroups.has(group) ? "checked" : ""}>
        <span>${group}</span>
      </label>
    `).join("");
    return `
      <div class="simulation-weapon-row">
        <div class="simulation-weapon-name ${equipmentHardpointType(weapon.item)}">
          <div class="simulation-weapon-title">
            <strong>${weapon.item.display_name || weapon.item.name}</strong>
            <span>H ${fmt(weapon.heat, 1)}</span>
          </div>
        </div>
        <div class="simulation-cooldown ready" role="progressbar" aria-label="${t("simulation.cooldown")}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
          <i data-simulation-cooldown="${weapon.key}" style="transform:scaleX(1)"></i>
        </div>
        <span>${fmt(state.simulation.applySplashDamage ? weapon.damage : weapon.directDamage, 1)}</span>
        <span>${weapon.cycle.toFixed(2)}s</span>
        <div class="simulation-group-options">${groupButtons}</div>
      </div>
    `;
  }).join("");
}

function openSimulation() {
  if (!state.selectedMech || !state.currentBuild) return;
  const simulation = state.simulation;
  simulation.weapons = collectSimulationWeapons();
  const previousAssignments = new Map(simulation.assignments);
  simulation.assignments.clear();
  simulation.weapons.forEach((weapon) => {
    const savedGroups = Array.isArray(weapon.entry?.weapon_groups)
      ? normalizeSimulationGroups(weapon.entry.weapon_groups)
      : null;
    const savedGroup = Number(weapon.entry?.weapon_group);
    const previousGroups = previousAssignments.has(weapon.key)
      ? normalizeSimulationGroups(previousAssignments.get(weapon.key))
      : null;
    const groups = savedGroups
      ?? (savedGroup >= 1 && savedGroup <= 4
        ? new Set([savedGroup])
        : previousGroups ?? new Set([1]));
    simulation.assignments.set(weapon.key, groups);
  });
  const heatSystem = simulationHeatSystem();
  simulation.maxHeat = heatSystem.maxHeat;
  simulation.coolingRate = heatSystem.coolingRate;
  simulation.heatSinkCount = heatSystem.heatSinkCount;
  simulation.open = true;
  $("simulation-movement-state").value = simulation.movementState;
  $("simulation-map-temperature").value = simulation.mapTemperature;
  $("simulation-target-distance").value = String(simulation.targetDistance);
  $("simulation-apply-splash").checked = simulation.applySplashDamage;
  $("simulation-end-on-overheat").checked = simulation.endOnOverheat;
  resetSimulationRun();
  renderSimulationWeaponList();
  renderSimulationGroupStatus();
  $("simulation-overlay").hidden = false;
  document.body.classList.add("simulation-open");
  $("close-simulation").focus();
}

function closeSimulation() {
  const simulation = state.simulation;
  if (!simulation.open) return;
  simulation.open = false;
  simulation.heldGroups.clear();
  simulation.pointerGroups.clear();
  simulation.continuousFireAt.clear();
  simulation.lastHitEffectAt.clear();
  simulation.pendingHitEffectDamage.clear();
  if (simulation.frameId !== null) cancelAnimationFrame(simulation.frameId);
  simulation.frameId = null;
  $("simulation-overlay").hidden = true;
  document.body.classList.remove("simulation-open");
  $("open-simulation").focus();
}

function showSimulationDamageEvent(damage) {
  if (!(damage > 0)) return;
  const container = $("simulation-enemy-damage-events");
  if (!container) return;
  const event = document.createElement("span");
  event.className = "simulation-damage-event";
  event.textContent = `+${damage.toFixed(2)}`;
  event.style.setProperty("--damage-offset", `${(Math.random() - 0.5) * 2.4}rem`);
  container.append(event);
  event.addEventListener("animationend", () => event.remove(), { once: true });
  window.setTimeout(() => event.remove(), 900);
}

function showSimulationHitEffect(weapon, damage = 0) {
  const figure = document.querySelector(".simulation-enemy-figure");
  if (!figure) return;
  showSimulationDamageEvent(damage);
  const weaponType = equipmentHardpointType(weapon.item);
  const category = ["energy", "ballistic", "missile"].includes(weaponType)
    ? weaponType
    : "other";
  const effect = document.createElement("i");
  effect.className = `simulation-hit-effect ${category}`;
  effect.style.left = `${12 + Math.random() * 76}%`;
  effect.style.top = `${8 + Math.random() * 78}%`;
  figure.append(effect);
  effect.addEventListener("animationend", () => effect.remove(), { once: true });
  window.setTimeout(() => effect.remove(), 600);

  if (
    typeof figure.animate !== "function"
    || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) return;
  const direction = Math.random() < 0.5 ? -1 : 1;
  const distance = 1.5 + Math.random() * 1.5;
  figure.animate([
    { transform: "translate(0, 0) rotate(0deg)" },
    { transform: `translate(${direction * distance}px, -1px) rotate(${direction * 1.2}deg)`, offset: 0.25 },
    { transform: `translate(${-direction * distance * 0.65}px, 0.6px) rotate(${-direction * 0.8}deg)`, offset: 0.55 },
    { transform: "translate(0, 0) rotate(0deg)" },
  ], {
    duration: 150,
    easing: "ease-out",
  });
}

function startSimulationBurn(weapon, startedAt, now = startedAt, damageAllowed = state.simulation.targetVisible) {
  const durationMs = weapon.duration * 1000;
  const totalDamage = simulationWeaponDamage(weapon);
  markSimulationWeaponFiring(weapon, startedAt, durationMs);
  if (durationMs <= 0) {
    if (damageAllowed && totalDamage > 0) {
      state.simulation.totalDamage += totalDamage;
      showSimulationHitEffect(weapon, totalDamage);
    }
    addSimulationHeat(weapon);
    return;
  }
  const endsAt = startedAt + durationMs;
  const progress = Math.max(0, Math.min(1, (now - startedAt) / durationMs));
  const appliedDamage = totalDamage * progress;
  const totalHeat = number(weapon.heat);
  const appliedHeat = totalHeat * progress;
  const impactShown = damageAllowed && appliedDamage > 0;
  if (damageAllowed) {
    state.simulation.totalDamage += appliedDamage;
    if (impactShown) showSimulationHitEffect(weapon, totalDamage);
  }
  state.simulation.currentHeat += appliedHeat;
  if (progress < 1) {
    state.simulation.activeBurns.set(weapon.key, {
      startedAt,
      endsAt,
      appliedDamage,
      appliedHeat,
      totalDamage,
      totalHeat,
      impactShown,
    });
  }
}

function updateSimulationBurnDamage(now, damageAllowed = state.simulation.targetVisible) {
  for (const [weaponKey, burn] of state.simulation.activeBurns) {
    const duration = burn.endsAt - burn.startedAt;
    const progress = duration > 0
      ? Math.max(0, Math.min(1, (now - burn.startedAt) / duration))
      : 1;
    const targetDamage = burn.totalDamage * progress;
    const targetHeat = burn.totalHeat * progress;
    if (damageAllowed) {
      const appliedDamage = Math.max(0, targetDamage - burn.appliedDamage);
      state.simulation.totalDamage += appliedDamage;
      if (appliedDamage > 0 && !burn.impactShown) {
        const weapon = state.simulation.weapons.find((entry) => entry.key === weaponKey);
        if (weapon) showSimulationHitEffect(weapon, burn.totalDamage);
        burn.impactShown = true;
      }
    }
    state.simulation.currentHeat += Math.max(0, targetHeat - burn.appliedHeat);
    burn.appliedDamage = targetDamage;
    burn.appliedHeat = targetHeat;
    if (progress >= 1) state.simulation.activeBurns.delete(weaponKey);
  }
}

function updateSimulationContinuousDamage(now) {
  const simulation = state.simulation;
  for (const [weaponKey, lastUpdatedAt] of simulation.continuousFireAt) {
    const weapon = simulation.weapons.find((entry) => entry.key === weaponKey);
    if (!weapon || !simulationWeaponIsHeld(weapon) || simulation.finished || simulation.overheated) {
      simulation.continuousFireAt.delete(weaponKey);
      simulation.pendingHitEffectDamage.delete(weaponKey);
      continue;
    }
    const elapsed = Math.max(0, (now - lastUpdatedAt) / 1000);
    if (simulation.targetVisible) {
      const dealtDamage = (simulationWeaponDamage(weapon) / weapon.cycle) * elapsed;
      simulation.totalDamage += dealtDamage;
      simulation.pendingHitEffectDamage.set(
        weapon.key,
        (simulation.pendingHitEffectDamage.get(weapon.key) || 0) + dealtDamage,
      );
      const lastImpactAt = simulation.lastHitEffectAt.get(weapon.key) || 0;
      if (elapsed > 0 && now - lastImpactAt >= SIMULATION_CONTINUOUS_HIT_EFFECT_INTERVAL_MS) {
        showSimulationHitEffect(weapon, simulation.pendingHitEffectDamage.get(weapon.key) || 0);
        simulation.pendingHitEffectDamage.set(weapon.key, 0);
        simulation.lastHitEffectAt.set(weapon.key, now);
      }
    }
    simulation.currentHeat += (weapon.heat / weapon.cycle) * elapsed;
    simulation.continuousFireAt.set(weaponKey, now);
  }
}

function syncSimulationContinuousFire(now) {
  const simulation = state.simulation;
  simulation.weapons
    .filter((weapon) => weapon.continuous)
    .forEach((weapon) => {
      const shouldFire = !simulation.finished
        && !simulation.overheated
        && simulationWeaponIsHeld(weapon);
      if (shouldFire) {
        if (!simulation.continuousFireAt.has(weapon.key)) {
          simulation.continuousFireAt.set(weapon.key, now);
        }
        markSimulationWeaponFiring(weapon, now);
      } else {
        simulation.continuousFireAt.delete(weapon.key);
        simulation.pendingHitEffectDamage.delete(weapon.key);
      }
    });
}

function simulationTick(now) {
  const simulation = state.simulation;
  if (!simulation.open || simulation.startedAt === null || simulation.finished) {
    simulation.frameId = null;
    return;
  }
  const durationMs = simulationDurationMs();
  const endsAt = durationMs === null
    ? Number.POSITIVE_INFINITY
    : simulation.startedAt + durationMs;
  const tickNow = Math.min(now, endsAt);
  const targetWasVisible = simulation.targetVisible;
  coolSimulationHeat(tickNow);
  updateSimulationBurnDamage(tickNow, targetWasVisible);
  updateSimulationContinuousDamage(tickNow);
  applySimulationOverheat();
  if (!simulation.finished) updateSimulationScenario(tickNow);
  syncSimulationContinuousFire(tickNow);
  if (!simulation.finished && !simulation.overheated) {
    for (const weapon of simulation.weapons) {
      if (weapon.continuous) continue;
      if (!simulationWeaponIsHeld(weapon)) continue;
      const nextFire = simulation.nextFireAt.get(weapon.key) ?? tickNow;
      if (nextFire > tickNow) continue;
      const shotCount = Math.floor((tickNow - nextFire) / (weapon.cycle * 1000)) + 1;
      if (weapon.duration > 0) {
        if (simulation.targetVisible) {
          const completedDamage = simulationWeaponDamage(weapon, Math.max(0, shotCount - 1));
          simulation.totalDamage += completedDamage;
          if (completedDamage > 0) showSimulationHitEffect(weapon, completedDamage);
        }
        addSimulationHeat(weapon, Math.max(0, shotCount - 1));
        const latestFireAt = nextFire + Math.max(0, shotCount - 1) * weapon.cycle * 1000;
        startSimulationBurn(weapon, latestFireAt, tickNow, simulation.targetVisible);
      } else {
        if (simulation.targetVisible) {
          const dealtDamage = simulationWeaponDamage(weapon, shotCount);
          simulation.totalDamage += dealtDamage;
          if (dealtDamage > 0) showSimulationHitEffect(weapon, dealtDamage);
        }
        addSimulationHeat(weapon, shotCount);
        const latestFireAt = nextFire + Math.max(0, shotCount - 1) * weapon.cycle * 1000;
        markSimulationWeaponFiring(weapon, latestFireAt);
      }
      simulation.nextFireAt.set(weapon.key, nextFire + shotCount * weapon.cycle * 1000);
    }
  }
  applySimulationOverheat();
  if (tickNow >= endsAt) finishSimulationRun();
  renderSimulationMetrics(tickNow);
  renderSimulationScenario(tickNow);
  updateSimulationGroupStatus(tickNow);
  if (simulation.finished) {
    simulation.frameId = null;
  } else {
    simulation.frameId = requestAnimationFrame(simulationTick);
  }
}

function setSimulationGroupHeld(group, held) {
  const simulation = state.simulation;
  if (!simulation.open) return;
  if (simulation.finished) {
    simulation.heldGroups.delete(group);
    simulation.continuousFireAt.clear();
    renderSimulationGroupStatus();
    return;
  }
  if (held && simulation.overheated) return;
  const now = performance.now();
  const durationMs = simulationDurationMs();
  if (
    durationMs !== null
    && simulation.startedAt !== null
    && now >= simulation.startedAt + durationMs
  ) {
    simulationTick(now);
    return;
  }
  if (held) {
    if (simulation.heldGroups.has(group)) return;
    simulation.heldGroups.add(group);
    const groupWeapons = simulation.weapons.filter(
      (weapon) => simulationWeaponInGroup(weapon, group),
    );
    if (groupWeapons.length && simulation.startedAt === null) {
      simulation.startedAt = now;
      updateSimulationScenario(now);
    }
    coolSimulationHeat(now);
    groupWeapons.forEach((weapon) => {
      if (weapon.continuous) return;
      const nextFire = simulation.nextFireAt.get(weapon.key) || 0;
      if (nextFire <= now) {
        startSimulationBurn(weapon, now, now, simulation.targetVisible);
        simulation.nextFireAt.set(weapon.key, now + weapon.cycle * 1000);
      }
    });
    syncSimulationContinuousFire(now);
    applySimulationOverheat();
    renderSimulationMetrics(now);
    renderSimulationScenario(now);
    if (simulation.startedAt !== null && simulation.frameId === null) {
      simulation.frameId = requestAnimationFrame(simulationTick);
    }
  } else {
    coolSimulationHeat(now);
    updateSimulationContinuousDamage(now);
    simulation.heldGroups.delete(group);
    syncSimulationContinuousFire(now);
    applySimulationOverheat();
    renderSimulationMetrics(now);
  }
  renderSimulationGroupStatus();
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

function isTargetComputerEquipment(item) {
  const key = normalizeLookupKey(`${item?.name || ""} ${item?.display_name || ""}`);
  return key.includes("targetingcomp")
    || key.includes("activeprobe")
    || key.includes("advancedsensorpackage")
    || key.includes("beagleprobe");
}

function engineWarehouseSection(item) {
  const name = normalizeLookupKey(item?.name || item?.display_name);
  if (name.includes("light")) return "engine-light";
  if (name.includes("xl")) return "engine-xl";
  return "engine-std";
}

function engineCanBeInstalledOnSelectedMech(item, isOmniMech = hasFixedOmnipods(state.selectedMech)) {
  if (item?.item_type !== "engine" || isOmniMech) return false;
  const stats = state.selectedMech?.definition?.stats || {};
  const rating = number(item.stats?.rating);
  const minRating = number(stats.MinEngineRating);
  const maxRating = number(stats.MaxEngineRating);
  return (!minRating || rating >= minRating) && (!maxRating || rating <= maxRating);
}

function warehouseSectionLabel(section) {
  const labels = {
    heatsinks: t("equipment.section.heatsinks"),
    "target-computers": t("equipment.section.targetComputers"),
    equipment: t("equipment.section.utility"),
    "engine-xl": t("equipment.section.engineXl"),
    "engine-light": t("equipment.section.engineLight"),
    "engine-std": t("equipment.section.engineStd"),
  };
  return labels[section] || section.toUpperCase();
}

function warehouseItemSection(item, category, isOmniMech) {
  if (category !== "equipment") {
    if (item.item_type === "weapon") return HARDPOINT_ORDER.includes(item.hardpoint_type) ? item.hardpoint_type : "other";
    if (item.item_type === "ammo") return ammoHardpointType(item) || "other";
    return null;
  }
  if (isHeatSink(item)) return "heatsinks";
  if (isTargetComputerEquipment(item)) return "target-computers";
  if (isEcm(item) || item.item_type === "masc" || item.item_type === "jumpjet") return "equipment";
  if (engineCanBeInstalledOnSelectedMech(item, isOmniMech)) return engineWarehouseSection(item);
  return null;
}

function sortWarehouseItems(section, a, b) {
  if (section.startsWith("engine-")) {
    return number(a.stats?.rating) - number(b.stats?.rating);
  }
  return String(a.display_name).localeCompare(String(b.display_name), undefined, { numeric: true });
}

function installedWeaponAmmoTypes() {
  const types = new Set();
  if (!state.selectedMech || !state.currentBuild) return types;
  const definition = effectiveDefinition(state.selectedMech, state.currentBuild);
  for (const component of COMPONENT_ORDER) {
    const fixedIds = definition.components?.[component]?.fixed || [];
    const installedIds = (state.currentBuild.components?.[component]?.items || []).map((entry) => entry.item_id);
    [...fixedIds, ...installedIds].forEach((itemId) => {
      const weapon = itemById(itemId);
      if (weapon?.item_type !== "weapon") return;
      const ammoType = normalizeLookupKey(weapon.stats?.ammoType);
      if (ammoType) types.add(ammoType);
    });
  }
  return types;
}

function ammoMatchesInstalledWeapons(item, ammoTypes = installedWeaponAmmoTypes()) {
  return item?.item_type === "ammo" && ammoTypes.has(normalizeLookupKey(item.stats?.type || item.name));
}

function selectedMechEquipmentCapabilities() {
  if (!state.selectedMech || !state.currentBuild) return null;
  const definition = effectiveDefinition(state.selectedMech, state.currentBuild);
  const stats = currentDefinition(state.selectedMech).stats || {};
  return {
    hardpoints: hardpointCountsFromDefinition(definition),
    isOmniMech: hasFixedOmnipods(state.selectedMech),
    tons: number(stats.MaxTons),
    maxJumpJets: number(stats.MaxJumpJets),
    canEquipEcm: number(stats.CanEquipECM) > 0,
    canEquipMasc: number(stats.CanEquipMASC) > 0 || number(stats.CanEquipMasc) > 0,
  };
}

function equipmentMatchesSelectedMechCapabilities(item, capabilities = selectedMechEquipmentCapabilities()) {
  if (!item || !capabilities) return true;
  const hardpointTypeName = equipmentHardpointType(item);
  if (item.item_type === "weapon" && HARDPOINT_ORDER.includes(hardpointTypeName)) {
    return number(capabilities.hardpoints[hardpointTypeName]) > 0;
  }
  if (isEcm(item)) {
    return capabilities.isOmniMech
      ? number(capabilities.hardpoints.ecm) > 0
      : capabilities.canEquipEcm || number(capabilities.hardpoints.ecm) > 0;
  }
  if (item.item_type === "jumpjet") {
    const minTons = number(item.stats?.minTons);
    const maxTons = number(item.stats?.maxTons);
    return capabilities.maxJumpJets > 0
      && (!minTons || capabilities.tons >= minTons)
      && (!maxTons || capabilities.tons <= maxTons);
  }
  if (item.item_type === "masc") {
    const minTons = number(item.stats?.TonsMin);
    const maxTons = number(item.stats?.TonsMax);
    return capabilities.canEquipMasc
      && (!minTons || capabilities.tons >= minTons)
      && (!maxTons || capabilities.tons <= maxTons);
  }
  return true;
}

function renderEquipmentList() {
  hideEquipmentTooltip();
  const isOmniMech = hasFixedOmnipods(state.selectedMech);
  document.querySelector(".equipment-category-tabs")?.classList.toggle("has-omnipods", isOmniMech);
  if (!isOmniMech && state.activeEquipmentCategory === "omnipods") {
    state.activeEquipmentCategory = "weapons";
  }
  document.querySelectorAll("[data-equipment-category]").forEach((button) => {
    const isOmnipodTab = button.dataset.equipmentCategory === "omnipods";
    button.hidden = isOmnipodTab && !isOmniMech;
    const active = button.dataset.equipmentCategory === state.activeEquipmentCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  renderUpgradeControls();

  if (state.activeEquipmentCategory === "omnipods") {
    renderOmnipodList();
    return;
  }

  $("warehouse-columns").classList.remove("omnipod-columns");
  $("warehouse-columns").innerHTML = "<span>Item</span><span>Slots</span><span>Tons</span>";
  const families = state.activeEquipmentCategory === "equipment"
    ? ["equipment", "jumpjets", "masc", ...(isOmniMech ? [] : ["engines"])]
    : [state.activeEquipmentCategory];
  const ids = [...new Set(families.flatMap((family) => state.equipment.families[family] || []))];
  const ammoTypes = state.activeEquipmentCategory === "ammo" ? installedWeaponAmmoTypes() : null;
  const capabilities = selectedMechEquipmentCapabilities();
  const rows = ids
    .map((id) => itemById(id))
    .filter(Boolean)
    .filter((item) => !ammoTypes || ammoMatchesInstalledWeapons(item, ammoTypes))
    .filter((item) => itemMatchesMechFaction(item))
    .filter((item) => equipmentMatchesSelectedMechCapabilities(item, capabilities))
    .filter((item) => heatSinkMatchesUpgrade(item))
    .filter((item) => !guidanceMismatch(item));

  const sectionOrder = state.activeEquipmentCategory === "equipment"
    ? ["heatsinks", "target-computers", "equipment", "engine-xl", "engine-light", "engine-std"]
    : ["energy", "missile", "ballistic", "ams", "ammo", "other"];
  const grouped = new Map();
  rows.forEach((item) => {
    const section = warehouseItemSection(item, state.activeEquipmentCategory, isOmniMech);
    if (!section) return;
    if (!grouped.has(section)) grouped.set(section, []);
    grouped.get(section).push(item);
  });

  $("item-list").innerHTML = sectionOrder
    .filter((section) => grouped.has(section))
    .map((section) => {
      const sectionId = `${state.activeEquipmentCategory}:${section}`;
      const collapsed = state.collapsedWarehouseSections.has(sectionId);
      return `
      <section class="warehouse-section warehouse-${section}${state.activeEquipmentCategory === "ammo" ? " warehouse-ammo-item" : ""}${collapsed ? " collapsed" : ""}">
        <button class="warehouse-section-title warehouse-section-toggle" type="button" data-warehouse-section="${sectionId}" aria-expanded="${!collapsed}">
          <span>${warehouseSectionLabel(section)}</span><span class="warehouse-section-indicator" aria-hidden="true">${collapsed ? "+" : "−"}</span>
        </button>
        ${collapsed ? "" : grouped.get(section)
          .sort((a, b) => sortWarehouseItems(section, a, b))
          .map((item) => {
            const active = String(state.selectedItemId) === String(item.id) ? " active" : "";
            const mountType = item.item_type === "ammo" ? ammoHardpointType(item) : equipmentHardpointType(item);
            const ammoClass = item.item_type === "ammo" ? " ammo" : "";
            return `
              <button class="item-row ${mountType || item.item_type}${ammoClass}${active}" data-item="${item.id}" type="button" draggable="true" aria-label="${escapeHtml(item.display_name)}">
                <span class="item-row-name"><span class="item-type-mark">${HARDPOINT_LABELS[mountType] || String(item.item_type || "?")[0].toUpperCase()}</span><strong>${item.display_name}</strong></span>
                <span>${effectiveItemSlots(item)}</span>
                <span>${fmt(itemTons(item))}</span>
              </button>
            `;
          }).join("")}
      </section>
    `;
    })
    .join("");
}

function upgradeItems(category) {
  const items = (state.equipment?.families?.upgrades || [])
    .map((id) => itemById(id))
    .filter(Boolean)
    .filter((item) => itemMatchesMechFaction(item));
  return items.filter((item) => {
    if (category === "structure") return Object.hasOwn(item.stats || {}, "weightPerTon");
    if (category === "armor") return Object.hasOwn(item.stats || {}, "armorPerTon");
    if (category === "heatsinks") return Object.hasOwn(item.stats || {}, "compatibleHeatSink");
    if (category === "guidance") return Object.hasOwn(item.stats || {}, "extraSlots");
    return false;
  });
}

function upgradeOptionLabel(category, item) {
  const name = String(item?.name || "").toLowerCase();
  if (category === "structure") return name.includes("standard") ? "STANDARD" : "ENDO STEEL";
  if (category === "armor") {
    if (name.includes("lightferro")) return "LIGHT FERRO";
    if (name.includes("stealth")) return "STEALTH";
    if (name.includes("standard")) return "STANDARD";
    return "FERRO-FIBROUS";
  }
  if (category === "heatsinks") return name.includes("double") ? "DOUBLE" : "SINGLE";
  return number(item?.stats?.extraSlots) > 0 ? "ARTEMIS" : "STANDARD";
}

function activeUpgradeValue(category) {
  if (category === "guidance") return state.currentBuild?.upgrades?.artemis?.Equipped ? "1" : "0";
  return String(state.currentBuild?.upgrades?.[category]?.ItemID || "");
}

function renderUpgradeControls() {
  const controls = $("upgrade-controls");
  if (!controls) return;
  $("upgrade-panel").hidden = !state.currentBuild;
  if (!state.currentBuild) {
    controls.innerHTML = "";
    return;
  }
  const categories = [
    { key: "structure", label: "Structure" },
    { key: "armor", label: "Armor" },
    { key: "heatsinks", label: "Heat Sinks" },
    { key: "guidance", label: "Guidance" },
  ];
  const omniLocked = hasFixedOmnipods(state.selectedMech);
  controls.innerHTML = categories.map((category) => {
    const activeValue = activeUpgradeValue(category.key);
    const options = upgradeItems(category.key)
      .map((item) => ({
        item,
        label: upgradeOptionLabel(category.key, item),
        value: category.key === "guidance" ? (number(item.stats?.extraSlots) > 0 ? "1" : "0") : String(item.id),
      }))
      .sort((a, b) => {
        const order = ["STANDARD", "SINGLE", "ENDO STEEL", "FERRO-FIBROUS", "DOUBLE", "LIGHT FERRO", "STEALTH", "ARTEMIS"];
        return order.indexOf(a.label) - order.indexOf(b.label);
      });
    return `
      <div class="upgrade-group">
        <div class="upgrade-group-label">${category.label}</div>
        <div class="upgrade-options">
          ${options.map((option) => {
            const active = option.value === activeValue;
            const fixed = omniLocked && category.key !== "guidance";
            const disabled = !state.currentBuild || fixed;
            return `<button class="upgrade-option${active ? " active" : ""}" type="button" data-upgrade-category="${category.key}" data-upgrade-value="${option.value}" aria-pressed="${active}" ${disabled ? "disabled" : ""} ${fixed ? 'title="Fixed OmniMech upgrade"' : ""}>${option.label}</button>`;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function findEquipmentByName(name) {
  const wanted = String(name || "").toLowerCase();
  return Object.values(state.equipment?.items || {}).find((item) => (
    String(item.name || "").toLowerCase() === wanted && itemMatchesMechFaction(item)
  )) || null;
}

function artemisCounterpart(item, equipped) {
  if (!item || !["weapon", "ammo"].includes(item.item_type)) return null;
  const name = String(item.name || "");
  const isArtemis = /artemis/i.test(name);
  if (equipped === isArtemis) return item;
  let targetName;
  if (equipped) {
    if (item.item_type === "weapon" && !item.stats?.artemisAmmoType) return null;
    targetName = item.item_type === "weapon" ? `${name}_Artemis` : `${name}Artemis`;
  } else {
    targetName = name.replace(/_?Artemis/gi, "");
  }
  return findEquipmentByName(targetName);
}

function applyHeatSinkUpgrade(upgradeItem) {
  const compatibleId = number(upgradeItem?.stats?.compatibleHeatSink);
  if (!compatibleId) return;
  Object.values(state.currentBuild?.components || {}).forEach((component) => {
    (component.items || []).forEach((entry) => {
      if (isHeatSink(itemById(entry.item_id))) entry.item_id = compatibleId;
    });
  });
  engineHeatSinkEntries().forEach((entry) => {
    if (isHeatSink(itemById(entry.item_id))) entry.item_id = compatibleId;
  });
}

function applyArtemisUpgrade(equipped) {
  Object.values(state.currentBuild?.components || {}).forEach((component) => {
    (component.items || []).forEach((entry) => {
      const replacement = artemisCounterpart(itemById(entry.item_id), equipped);
      if (replacement) entry.item_id = replacement.id;
    });
  });
}

function selectUpgrade(category, value) {
  if (!state.currentBuild) return;
  state.currentBuild.upgrades ||= {};
  if (category === "guidance") {
    const equipped = value === "1";
    state.currentBuild.upgrades.artemis ||= {};
    state.currentBuild.upgrades.artemis.Equipped = equipped ? 1 : 0;
    applyArtemisUpgrade(equipped);
  } else {
    if (hasFixedOmnipods(state.selectedMech)) return;
    const item = itemById(value);
    if (!item || !upgradeItems(category).some((option) => String(option.id) === String(value))) return;
    state.currentBuild.upgrades[category] = {
      ...(state.currentBuild.upgrades[category] || {}),
      ItemID: item.id,
    };
    if (category === "heatsinks") applyHeatSinkUpgrade(item);
  }
  const selectedItem = itemById(state.selectedItemId);
  if (guidanceMismatch(selectedItem) || !heatSinkMatchesUpgrade(selectedItem)) state.selectedItemId = null;
  renderEquipmentList();
  renderVariant();
}

function renderOmnipodList() {
  $("warehouse-columns").classList.add("omnipod-columns");
  $("warehouse-columns").innerHTML = `<span>Omnipod</span>${HARDPOINT_ORDER.map((type) => `<span>${HARDPOINT_LABELS[type]}</span>`).join("")}`;
  const chassis = String(state.selectedMech?.chassis || "").toLowerCase();
  const grouped = new Map();
  Object.values(state.omnipods || {})
    .filter((pod) => String(pod.chassis || "").toLowerCase() === chassis)
    .forEach((pod) => {
      if (!grouped.has(pod.component)) grouped.set(pod.component, []);
      grouped.get(pod.component).push(pod);
    });

  const omnipodComponentOrder = ["head", "right_torso", "left_torso", "right_arm", "left_arm", "right_leg", "left_leg"];
  $("item-list").innerHTML = omnipodComponentOrder
    .filter((component) => grouped.has(component))
    .map((component) => {
      const sectionId = `omnipods:${component}`;
      const collapsed = state.collapsedWarehouseSections.has(sectionId);
      return `
      <section class="warehouse-section warehouse-omnipods${collapsed ? " collapsed" : ""}">
        <button class="warehouse-section-title warehouse-section-toggle" type="button" data-warehouse-section="${sectionId}" aria-expanded="${!collapsed}">
          <span>${String(component).replaceAll("_", " ").toUpperCase()}</span><span class="warehouse-section-indicator" aria-hidden="true">${collapsed ? "+" : "−"}</span>
        </button>
        ${collapsed ? "" : grouped.get(component)
          .sort((a, b) => String(a.set).localeCompare(String(b.set), undefined, { numeric: true }))
          .map((pod) => {
            const counts = hardpointCountsFromHardpoints(omnipodDefinition(pod).hardpoints);
            const active = String(state.currentBuild?.components?.[component]?.omnipod || "") === String(pod.id) ? " active" : "";
            return `
              <button class="omnipod-row${active}" data-omnipod="${pod.id}" data-omnipod-component="${component}" type="button" draggable="true" title="${String(pod.set).toUpperCase()} ${String(component).replaceAll("_", " ").toUpperCase()}">
                <strong>${String(pod.set).toUpperCase()} ${String(component).replaceAll("_", " ").toUpperCase()}</strong>
                ${HARDPOINT_ORDER.map((type) => `<span class="omnipod-hardpoint ${type}">${number(counts[type])}</span>`).join("")}
              </button>
            `;
          }).join("")}
      </section>
    `;
    })
    .join("");
}

function componentArmorCapacity(name, componentDefinition) {
  if (name === "head") return 18;
  return Math.max(0, number(componentDefinition?.hp) * 2);
}

function componentDurabilityQuirkValues(name, values) {
  const component = INFO_COMPONENTS.find((entry) => entry.key === name);
  if (!component) return { frontArmor: 0, rearArmor: 0, structure: 0 };
  return {
    frontArmor: quirkAdd(values, "armorresist", component.suffix),
    rearArmor: component.rearSuffix
      ? number(values.armorresist_all_additive) + number(values[`armorresist_${component.rearSuffix}_additive`])
      : 0,
    structure: quirkAdd(values, "internalresist", component.suffix),
  };
}

function renderArmorStepper(
  name,
  side,
  value,
  capacity,
  pairedValue = 0,
  showLabel = true,
  quirkBonus = 0,
  finalMax = capacity,
  maxBoosted = false,
) {
  const available = Math.max(0, capacity - value - pairedValue);
  const label = side === "rear" ? "REAR" : "FRONT";
  const finalValue = value + quirkBonus;
  const quirkOnly = value === 0 && quirkBonus !== 0;
  return `
    <div class="component-armor-row">
      <div class="component-armor-allocation">
        <span class="component-armor-side">${showLabel ? label : ""}</span>
        <strong class="component-armor-value${quirkOnly ? " quirk-tone-armor" : ""}">${fmt(finalValue)}</strong>
        <div class="component-armor-stepper" aria-label="${COMPONENT_NAMES[name] || name} ${side} armor">
          <button type="button" data-armor-component="${name}" data-armor-side="${side}" data-armor-delta="1" ${available <= 0 ? "disabled" : ""} aria-label="Increase ${side} armor">+</button>
          <button type="button" data-armor-component="${name}" data-armor-side="${side}" data-armor-delta="-1" ${value <= 0 ? "disabled" : ""} aria-label="Decrease ${side} armor">-</button>
        </div>
      </div>
      <div class="component-armor-capacity">
        <span class="component-armor-limit-label">${side === "rear" ? "MAX" : "AVL"}</span>
        <strong class="component-armor-limit${side === "rear" && maxBoosted ? " quirk-tone-armor" : ""}">${side === "rear" ? fmt(finalMax) : available}</strong>
      </div>
    </div>
  `;
}

function renderComponent(name, calc, quirkValues) {
  const buildComp = state.currentBuild.components[name] || { items: [] };
  const compDef = effectiveComponentDefinition(state.selectedMech, state.currentBuild, name);
  const usage = calc.componentUsage[name] || { slots: 0, warnings: [] };
  const slotLimit = number(compDef.slots);
  const armorCapacity = componentArmorCapacity(name, compDef);
  const frontArmor = Math.max(0, number(buildComp.armor));
  const rearArmor = Math.max(0, number(state.currentBuild.rearArmor?.[name]));
  const torso = Object.hasOwn(TORSO_REAR_COMPONENTS, name);
  const durabilityQuirks = componentDurabilityQuirkValues(name, quirkValues);
  const totalArmorQuirk = durabilityQuirks.frontArmor + durabilityQuirks.rearArmor;
  const finalArmorMax = armorCapacity + totalArmorQuirk;
  const structure = number(compDef.hp);
  const finalStructure = structure + durabilityQuirks.structure;
  const armorControls = torso
    ? `${renderArmorStepper(name, "front", frontArmor, armorCapacity, rearArmor, true, durabilityQuirks.frontArmor)}${renderArmorStepper(name, "rear", rearArmor, armorCapacity, frontArmor, true, durabilityQuirks.rearArmor, finalArmorMax, totalArmorQuirk !== 0)}`
    : `${renderArmorStepper(name, "front", frontArmor, armorCapacity, 0, false, durabilityQuirks.frontArmor)}
      <div class="component-armor-max-row"><span></span><div><span>MAX</span><strong class="${totalArmorQuirk !== 0 ? "quirk-tone-armor" : ""}">${fmt(finalArmorMax)}</strong></div></div>`;
  const hardpointCapacity = hardpointCountsFromHardpoints(compDef.hardpoints || []);
  const remainingHardpoints = Object.fromEntries(Object.entries(hardpointCapacity).map(([type, capacity]) => [
    type,
    Math.max(0, number(capacity) - number(usage.hardpoints?.[type])),
  ]));
  const hps = renderHardpointBadges(remainingHardpoints, "component-hardpoint", true);
  const internalRows = (compDef.internals || [])
    .filter((itemId) => hasFixedOmnipods(state.selectedMech) || !MOVABLE_UPGRADE_SLOT_IDS.has(Number(itemId)))
    .map((itemId) => renderFixedSlot(itemId))
    .join("");
  const fixedEquipmentRows = (compDef.fixed || [])
    .filter((itemId) => {
      const item = itemById(itemId);
      return item?.item_type !== "engine" && !(name === "centre_torso" && isHeatSink(item));
    })
    .map((itemId) => renderFixedSlot(itemId))
    .join("");
  const fixedEngineRows = usage.fixedEngineSlots
    ? renderFixedEngine(calc.engine, usage.fixedEngineSlots, calc)
    : "";
  const structureRows = usage.structureSlots
    ? renderStructureSlots(usage.structureSlots, usage.occupiedStructureSlots)
    : "";
  const armorRows = usage.armorSlots
    ? renderArmorSlots(usage.armorSlots, usage.occupiedArmorSlots)
    : "";
  const sideEngineRows = usage.engineSideSlots ? renderEngineSideSlots(calc.engine, usage.engineSideSlots) : "";
  const installedEngineIndex = name === "centre_torso" && !usage.fixedEngineSlots
    ? buildComp.items.findIndex((entry) => itemById(entry.item_id)?.item_type === "engine")
    : -1;
  const itemRows = buildComp.items
    .map((entry, index) => renderLoadoutItem(name, entry, index, index === installedEngineIndex ? calc : null))
    .join("");
  const emptySlots = Math.max(0, slotLimit - usage.slots - number(usage.movableUpgradeSlots));
  const emptyRows = Array.from({ length: emptySlots }, () => `<div class="critical-slot empty-slot">-</div>`).join("");
  return `
    <article class="component component-location-${name} ${usage.warnings.length ? "invalid" : ""}" data-component-drop="${name}">
        <div class="component-head">
          <div>
            <div class="component-title">${COMPONENT_NAMES[name] || name}</div>
            <div class="component-stat-title">ARMOR</div>
            <div class="component-armor-controls">${armorControls}</div>
            <div class="component-structure-row">
              <span>STRUCTURE</span>
              <strong class="component-structure-value${durabilityQuirks.structure !== 0 ? " boosted" : ""}">
                <span>${fmt(finalStructure)}</span>${durabilityQuirks.structure !== 0 ? `<span class="component-structure-detail">(<span>${fmt(structure)}</span><span>${durabilityQuirks.structure > 0 ? "+" : "-"}</span><span class="component-structure-bonus">${fmt(Math.abs(durabilityQuirks.structure))}</span>)</span>` : ""}
              </strong>
            </div>
            <div class="hardpoint-line component-hardpoint-line${hps ? "" : " empty"}">${hps}</div>
            ${usage.warnings.length ? `<div class="warnings">${usage.warnings.join(" / ")}</div>` : ""}
          </div>
        </div>
        <div class="component-items">${internalRows}${fixedEngineRows}${fixedEquipmentRows}${itemRows}${structureRows}${armorRows}${emptyRows}${sideEngineRows}</div>
    </article>
  `;
}

function renderComponents(calc = calculateBuild()) {
  const quirkValues = mechlabQuirkValues();
  const rendered = Object.fromEntries(
    COMPONENT_ORDER.map((name) => [name, renderComponent(name, calc, quirkValues)]),
  );
  const columns = [
    { className: "right-arm", components: ["right_arm"] },
    { className: "right-body", components: ["right_torso", "right_leg"] },
    { className: "center-body", components: ["head", "centre_torso"] },
    { className: "left-body", components: ["left_torso", "left_leg"] },
    { className: "left-arm", components: ["left_arm"] },
  ];
  $("components").innerHTML = columns.map((column) => `
    <div class="component-column component-column-${column.className}">
      ${column.components.map((name) => rendered[name]).join("")}
    </div>
  `).join("");
}

function renderFixedSlot(itemId) {
  const item = itemById(itemId);
  const name = item?.display_name || item?.name || "Fixed Structure Slot";
  const slots = Math.max(1, itemSlots(item));
  const tooltipItem = item ? ` data-tooltip-item="${item.id}"` : "";
  return `<div class="critical-slot fixed-slot"${tooltipItem} style="--slot-span:${slots}" aria-label="${escapeHtml(name)} / ${slots} slots">${name}</div>`;
}

function renderEngineSideSlots(engine, slots) {
  const name = engine?.display_name || t("common.engine");
  const tooltipItem = engine ? ` data-tooltip-item="${engine.id}"` : "";
  return `<div class="critical-slot fixed-slot engine-side-slot"${tooltipItem} style="--slot-span:${slots}" aria-label="${escapeHtml(name)} / ${slots} slots">${t("common.engine")} · ${slots}S</div>`;
}

function renderFixedEngine(engine, slots, calc = null) {
  const name = engine?.display_name || t("common.engine");
  const tooltipItem = engine ? ` data-tooltip-item="${engine.id}"` : "";
  return `
    <div class="critical-slot fixed-slot engine-fixed-slot"${tooltipItem} style="--slot-span:${slots}" aria-label="${escapeHtml(name)} / ${slots} slots">
      <strong class="engine-slot-name">${name}</strong>
      <span class="engine-slot-size">${slots}S</span>
      ${renderEngineHeatSinkBay(engine, calc)}
    </div>
  `;
}

function renderStructureSlots(slots, occupiedSlots = 0) {
  return Array.from({ length: slots }, (_, index) => {
    const occupied = index < occupiedSlots;
    const classes = occupied
      ? "critical-slot structure-upgrade-slot structure-upgrade-slot-occupied"
      : "critical-slot empty-slot structure-upgrade-slot";
    return `<div class="${classes}" title="Endo Steel slot">${t("stats.structure")}</div>`;
  }).join("");
}

function renderArmorSlots(slots, occupiedSlots = 0) {
  return Array.from({ length: slots }, (_, index) => {
    const occupied = index < occupiedSlots;
    const classes = occupied
      ? "critical-slot armor-upgrade-slot armor-upgrade-slot-occupied"
      : "critical-slot empty-slot armor-upgrade-slot";
    return `<div class="${classes}" title="Armor upgrade slot">${t("common.armor")}</div>`;
  }).join("");
}

function renderEngineHeatSinkBay(engine, calc) {
  const capacity = Math.min(6, number(calc?.engineHeatSinkCapacity, engineAdditionalHeatSinkCapacity(engine)));
  if (!engine || capacity <= 0) return "";
  const fixedItems = fixedEngineHeatSinkItems();
  const installedEntries = engineHeatSinkEntries();
  const used = fixedItems.length + installedEntries.length;
  const fixedBoxes = fixedItems.slice(0, capacity).map((item) => `
    <span class="engine-heat-sink-box filled fixed-engine-heat-sink" data-tooltip-item="${item.id}" aria-label="${escapeHtml(item.display_name || item.name)}"></span>
  `).join("");
  const installedBoxes = installedEntries.slice(0, Math.max(0, capacity - fixedItems.length)).map((entry, index) => {
    const item = itemById(entry.item_id);
    const name = item?.display_name || item?.name || t("build.missing", { id: entry.item_id });
    return `
      <span class="engine-heat-sink-box filled installed-engine-heat-sink" data-engine-heat-sink-item="${index}" draggable="true" aria-label="${escapeHtml(name)}"></span>
    `;
  }).join("");
  const emptyBoxes = Array.from({ length: Math.max(0, capacity - used) }, () => (
    `<span class="engine-heat-sink-box empty-engine-heat-sink" aria-label="${t("common.empty")}"></span>`
  )).join("");
  return `
    <div class="engine-inline-heat-sinks" data-engine-heat-sink-drop aria-label="${t("build.engineHeatSinks")} ${used}/${capacity}">
      ${fixedBoxes}${installedBoxes}${emptyBoxes}
    </div>
  `;
}

function renderLoadoutItem(component, entry, index, engineBayCalc = null) {
  const item = itemById(entry.item_id);
  if (!item) return `<div class="slot-item missing-item">${t("build.missing", { id: entry.item_id })}</div>`;
  const slots = Math.max(1, effectiveItemSlots(item));
  const mountType = item.item_type === "ammo" ? ammoHardpointType(item) : equipmentHardpointType(item);
  const ammoClass = item.item_type === "ammo" ? " ammo" : "";
  if (item.item_type === "engine" && engineBayCalc) {
    return `
      <div class="slot-item engine engine-main-slot" data-loadout-item="${component}:${index}" draggable="true" style="--slot-span:${slots}" aria-label="${escapeHtml(item.display_name)} / ${slots} slots / ${fmt(itemTons(item))} tons">
        <span class="slot-item-mark">E</span>
        <div class="engine-slot-content">
          <strong>${item.display_name}</strong>
          ${renderEngineHeatSinkBay(item, engineBayCalc)}
        </div>
        <span class="slot-item-slots">${slots}S</span>
      </div>
    `;
  }
  const row = `
    <div class="slot-item ${mountType || item.item_type}${ammoClass}" data-loadout-item="${component}:${index}" draggable="true" style="--slot-span:${slots}" aria-label="${escapeHtml(item.display_name)} / ${slots} slots / ${fmt(itemTons(item))} tons">
      <span class="slot-item-mark">${HARDPOINT_LABELS[mountType] || String(item.item_type || "?")[0].toUpperCase()}</span>
      <strong>${item.display_name}</strong>
      <span class="slot-item-slots">${slots}S</span>
    </div>
  `;
  return row;
}

function renderVariant() {
  const mech = state.selectedMech;
  if (!mech) return;
  const stats = mech.definition?.stats || {};
  $("variant-name").textContent = mech.display_name;
  $("variant-meta").textContent = `${factionLabel(mech.faction)} - ${WEIGHT_CLASS_LABELS[mech.weight_class] || mech.weight_class || t("common.unknown")} - ${stats.MaxTons || "?"} ${t("common.tons")} - ${t("common.engine")} ${stats.MinEngineRating || "?"}-${stats.MaxEngineRating || "?"}`;
  const calc = calculateBuild();
  $("data-status").textContent = calc.warnings.length ? calc.warnings.join(" - ") : t("status.loadedData", { count: state.index.counts.mechs });
  renderSummary(calc);
  renderMechSummary(calc);
  renderComponents(calc);
  if (state.activeEquipmentCategory === "ammo") renderEquipmentList();
}

function renderSelectionPrompt() {
  $("variant-name").textContent = t("info.selectMech");
  $("variant-meta").textContent = t("info.selectMechHint");
  renderSummary();
  renderMechSummary();
  $("components").innerHTML = `<div class="empty">${t("info.componentsPrompt")}</div>`;
}

function renderAll() {
  renderMechList();
  renderEquipmentList();
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
  state.currentBuild = loadBuild(state.selectedMech);
  const selectedItem = itemById(state.selectedItemId);
  if (
    !itemMatchesMechFaction(selectedItem, state.selectedMech)
    || !equipmentMatchesSelectedMechCapabilities(selectedItem)
    || !heatSinkMatchesUpgrade(selectedItem)
  ) {
    state.selectedItemId = null;
  }
  if (state.selectedChassis) state.expandedChassis.add(state.selectedChassis);
  if (state.activeMainTab === "mechlab") {
    state.mechlabBrowseMode = false;
    state.mechlabCompactListOpen = false;
  }
  renderAll();
  if (state.activeMainTab === "mechlab") document.querySelector(".tab-content").scrollTop = 0;
}

function openMechFitting(id) {
  if (!mechById(id)) return;
  selectMech(id);
  setMainTab("mechlab");
}

function setLoadoutCodeStatus(message = "", tone = "") {
  const status = $("loadout-code-status");
  status.textContent = message;
  status.classList.toggle("error", tone === "error");
  status.classList.toggle("success", tone === "success");
}

function openLoadoutCodeDialog(mode) {
  if (!globalThis.MWOCodec) {
    $("data-status").textContent = t("loadout.codecUnavailable");
    return;
  }
  state.loadoutCodeMode = mode;
  const importing = mode === "import";
  const textarea = $("loadout-code-text");
  $("loadout-code-title").textContent = t(importing ? "loadout.importTitle" : "loadout.exportTitle");
  $("loadout-code-description").textContent = t(
    importing ? "loadout.importDescription" : "loadout.exportDescription",
  );
  $("apply-loadout-code").hidden = !importing;
  $("copy-loadout-code").hidden = importing;
  textarea.readOnly = !importing;
  textarea.placeholder = importing ? t("loadout.importPlaceholder") : "";
  setLoadoutCodeStatus();

  if (importing) {
    textarea.value = "";
  } else {
    try {
      textarea.value = MWOCodec.encode(currentBuildAsMwoLoadout());
    } catch (error) {
      textarea.value = "";
      setLoadoutCodeStatus(error.message, "error");
    }
  }

  $("loadout-code-overlay").hidden = false;
  document.body.classList.add("loadout-code-open");
  requestAnimationFrame(() => {
    textarea.focus();
    if (!importing) textarea.select();
  });
}

function closeLoadoutCodeDialog() {
  if ($("loadout-code-overlay").hidden) return;
  $("loadout-code-overlay").hidden = true;
  document.body.classList.remove("loadout-code-open");
  const focusTarget = state.loadoutCodeMode === "export"
    ? $("export-loadout-code")
    : $("import-loadout-code");
  focusTarget?.focus();
}

function applyImportedMwoCode() {
  try {
    if (!globalThis.MWOCodec) throw new Error(t("loadout.codecUnavailable"));
    const decoded = MWOCodec.decode($("loadout-code-text").value);
    const mech = mechById(decoded.chassisId);
    if (!mech) throw new Error(t("loadout.invalidMech", { id: decoded.chassisId }));
    if (decoded.isOmni !== hasFixedOmnipods(mech)) {
      throw new Error(t("loadout.invalidMech", { id: decoded.chassisId }));
    }
    const build = buildFromMwoCode(decoded, mech);
    state.selectedMech = mech;
    state.selectedChassis = mech.chassis || "";
    state.selectedItemId = null;
    if (state.selectedChassis) state.expandedChassis.add(state.selectedChassis);
    state.currentBuild = build;
    state.mechlabBrowseMode = false;
    state.mechlabCompactListOpen = false;
    closeLoadoutCodeDialog();
    renderAll();
    $("data-status").textContent = t("loadout.imported", { mech: mech.display_name });
    document.querySelector(".tab-content").scrollTop = 0;
  } catch (error) {
    setLoadoutCodeStatus(error.message, "error");
  }
}

async function copyExportedMwoCode() {
  const textarea = $("loadout-code-text");
  const code = textarea.value.trim();
  if (!code) return;
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
    await navigator.clipboard.writeText(code);
    setLoadoutCodeStatus(t("loadout.copied"), "success");
  } catch {
    textarea.focus();
    textarea.select();
    const copied = typeof document.execCommand === "function" && document.execCommand("copy");
    setLoadoutCodeStatus(
      t(copied ? "loadout.copied" : "loadout.copyFailed"),
      copied ? "success" : "error",
    );
  }
}

function showMechlabList() {
  if (!state.selectedMech || state.activeMainTab !== "mechlab") return;
  state.mechlabBrowseMode = false;
  state.mechlabCompactListOpen = true;
  if (state.selectedChassis) state.expandedChassis.add(state.selectedChassis);
  renderMechlabCompactList();
  $("mechlab-compact-search").focus();
}

function closeMechlabCompactList() {
  state.mechlabCompactListOpen = false;
  renderMechlabCompactList();
}

function showFullMechlabList() {
  if (state.activeMainTab !== "mechlab") return;
  state.mechlabBrowseMode = true;
  state.mechlabCompactListOpen = false;
  renderMechList();
  renderMechlabCompactList();
  $("mech-search").focus();
}

function openBuildActionsDialog() {
  if (!state.selectedMech || !state.currentBuild) return;
  $("build-actions-overlay").hidden = false;
  document.body.classList.add("build-actions-open");
  requestAnimationFrame(() => {
    $("build-actions-overlay").querySelector("[data-build-action]")?.focus();
  });
}

function closeBuildActionsDialog() {
  if ($("build-actions-overlay").hidden) return;
  $("build-actions-overlay").hidden = true;
  document.body.classList.remove("build-actions-open");
  $("open-build-actions")?.focus();
}

function stripBuildArmor() {
  for (const component of Object.values(state.currentBuild.components || {})) {
    component.armor = 0;
  }
  state.currentBuild.rearArmor = Object.fromEntries(
    Object.keys(TORSO_REAR_COMPONENTS).map((name) => [name, 0]),
  );
}

function stripBuildEquipment() {
  for (const component of Object.values(state.currentBuild.components || {})) {
    component.items = [];
  }
  state.currentBuild.engineHeatSinks = [];
}

function maximizeBuildArmor() {
  state.currentBuild.rearArmor ||= {};
  for (const [name, component] of Object.entries(state.currentBuild.components || {})) {
    const definition = effectiveComponentDefinition(state.selectedMech, state.currentBuild, name);
    const capacity = componentArmorCapacity(name, definition);
    const rear = Object.hasOwn(TORSO_REAR_COMPONENTS, name)
      ? Math.min(capacity, Math.max(0, number(state.currentBuild.rearArmor[name])))
      : 0;
    component.armor = Math.max(0, capacity - rear);
  }
}

function applyBuildAction(action) {
  if (!state.selectedMech || !state.currentBuild) return;
  if (action === "stock-loadout") {
    state.currentBuild = buildFromLoadout(state.selectedMech);
  } else if (action === "strip-armor") {
    stripBuildArmor();
  } else if (action === "strip-equipment") {
    stripBuildEquipment();
  } else if (action === "strip-all") {
    stripBuildArmor();
    stripBuildEquipment();
  } else if (action === "max-armor") {
    maximizeBuildArmor();
  } else {
    return;
  }
  closeBuildActionsDialog();
  renderUpgradeControls();
  renderVariant();
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
  document.querySelectorAll("#item-list [data-item]").forEach((row) => {
    row.classList.toggle("active", String(row.dataset.item) === String(id));
  });
}

let activeEquipmentTooltipTarget = null;

function tooltipNumber(value, digits = 2, unit = "") {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "-";
  return `${formatInfoNumber(numeric, digits)}${unit}`;
}

function tooltipQuirkValue(base, final, digits = 2, unit = "") {
  const baseNumber = Number(base);
  const finalNumber = Number(final);
  if (!Number.isFinite(baseNumber) || !Number.isFinite(finalNumber)) return "-";
  const delta = finalNumber - baseNumber;
  if (Math.abs(delta) < 0.0001) return tooltipNumber(baseNumber, digits, unit);
  return {
    final: tooltipNumber(finalNumber, digits, unit),
    base: formatInfoNumber(baseNumber, digits),
    operator: delta >= 0 ? "+" : "-",
    quirk: formatInfoNumber(Math.abs(delta), digits),
  };
}

function tooltipValueHtml(value) {
  if (!value || typeof value !== "object") return escapeHtml(value);
  if (typeof value.html === "string") return value.html;
  return `<span class="equipment-tooltip-final quirk-applied">${escapeHtml(value.final)}</span><span class="equipment-tooltip-quirk-detail">(<span class="equipment-tooltip-base">${escapeHtml(value.base)}</span> <span class="equipment-tooltip-operator">${escapeHtml(value.operator)}</span> <span class="equipment-tooltip-quirk-value">${escapeHtml(value.quirk)}</span>)</span>`;
}

function isRofDamageWeapon(item) {
  const keys = simulationItemKeys(item);
  return Array.from(keys).some((key) => (
    key.includes("machinegun")
    || key.includes("rotaryautocannon")
    || key.includes("beamlaser")
    || key.includes("flamer")
  ));
}

function weaponDamagePerSecond(item, quirks = []) {
  const directDamage = weaponDirectDamage(item);
  const rof = number(item?.stats?.rof);
  if (!(rof > 0)) return { base: directDamage, final: directDamage };
  const rofBonus = simulationSpecificQuirkTotal(quirks, item, "_rof_multiplier", "increase");
  return {
    base: directDamage * rof,
    final: directDamage * rof * (1 + rofBonus),
  };
}

function weaponDamageTooltipValue(item, quirks = []) {
  if (isRofDamageWeapon(item)) {
    const damagePerSecond = weaponDamagePerSecond(item, quirks);
    return tooltipQuirkValue(damagePerSecond.base, damagePerSecond.final, 1, "/s");
  }
  const directDamage = tooltipNumber(weaponDirectDamage(item), 1);
  const totalSplashDamage = weaponSplashDamage(item) * 2;
  if (!(totalSplashDamage > 0)) return directDamage;
  return {
    html: `${escapeHtml(directDamage)} <span class="equipment-tooltip-splash">+ ${escapeHtml(tooltipNumber(totalSplashDamage, 1))}</span>`,
  };
}

function weaponTooltipRanges(item) {
  const ranges = (item?.ranges || [])
    .map((range) => ({ start: number(range.start), modifier: number(range.damageModifier) }))
    .filter((range) => Number.isFinite(range.start))
    .sort((left, right) => left.start - right.start);
  if (!ranges.length) return {};
  const maxRange = Math.max(...ranges.map((range) => range.start));
  const maxModifier = Math.max(...ranges.map((range) => range.modifier));
  const fullDamageRanges = ranges.filter((range) => Math.abs(range.modifier - maxModifier) < 0.0001);
  const minRange = fullDamageRanges[0]?.start;
  const optimalRange = fullDamageRanges.at(-1)?.start;
  const hasMinimumRange = Number.isFinite(minRange)
    && minRange > ranges[0].start
    && ranges[0].modifier < maxModifier;
  return { maxRange, optimalRange, minRange: hasMinimumRange ? minRange : undefined };
}

function weaponTooltipSpread(item, quirks) {
  const spread = number(item?.stats?.spread);
  if (!(spread > 0)) return null;
  const type = equipmentHardpointType(item);
  const reduction = quirkReduction(quirks, "all_spread_multiplier")
    + quirkReduction(quirks, `${type}_spread_multiplier`)
    + simulationSpecificQuirkTotal(quirks, item, "_spread_multiplier");
  return tooltipQuirkValue(spread, spread * Math.max(0, 1 - reduction), 2);
}

function weaponTooltipCriticalChance(item) {
  const chances = String(item?.stats?.critChanceIncrease ?? "")
    .split(",")
    .map((value) => Number(value));
  if (!chances.some((value) => Number.isFinite(value) && value !== 0)) return null;
  const values = chances.map((chance) => {
    if (!Number.isFinite(chance) || chance === 0) return null;
    if (Math.abs(chance + 1) < 0.0001) {
      return '<span class="equipment-tooltip-negative">X</span>';
    }
    const text = escapeHtml(tooltipNumber(chance * 100, 1, "%"));
    return chance < 0 ? `<span class="equipment-tooltip-negative">${text}</span>` : text;
  });
  while (values.length && values.at(-1) === null) values.pop();
  return {
    html: values.map((value) => value ?? "-").join(" / "),
  };
}

function weaponTooltipCriticalDamage(item) {
  const multiplier = Number(item?.stats?.critDamMult);
  if (!Number.isFinite(multiplier) || Math.abs(multiplier - 1) < 0.0001) return null;
  const value = `${escapeHtml(String(Number(multiplier.toFixed(2))))}x`;
  return multiplier < 1
    ? { html: `<span class="equipment-tooltip-negative">${value}</span>` }
    : value;
}

function weaponTooltipTargetHeat(item) {
  const targetHeat = number(item?.stats?.heatdamage);
  if (!(targetHeat > 0)) return null;
  return tooltipNumber(targetHeat, 2, isRofDamageWeapon(item) ? "/s" : "");
}

function isUltraAutoCannon(item) {
  return Array.from(simulationItemKeys(item)).some((key) => key.includes("ultraautocannon"));
}

function ultraAutoCannonJamStats(item, quirks = []) {
  const baseChance = Math.max(0, number(item?.stats?.JammingChance));
  const baseDuration = Math.max(0, number(item?.stats?.JammedTime));
  const chanceReduction = quirkReduction(quirks, "all_jamchance_multiplier")
    + simulationSpecificQuirkTotal(quirks, item, "_jamchance_multiplier");
  const durationReduction = quirkReduction(quirks, "all_jamduration_multiplier")
    + simulationSpecificQuirkTotal(quirks, item, "_jamduration_multiplier");
  return {
    baseChance,
    chance: Math.max(0, Math.min(1, baseChance * Math.max(0, 1 - chanceReduction))),
    baseDuration,
    duration: Math.max(0, baseDuration * Math.max(0, 1 - durationReduction)),
  };
}

function ultraAutoCannonExpectedDamagePerMinute(item, quirks = []) {
  if (!isUltraAutoCannon(item)) return null;
  const damage = weaponDirectDamage(item);
  const extraShots = Math.max(0, number(item?.stats?.ShotsDuringCooldown));
  const doubleTapDelay = Math.max(0, number(item?.stats?.volleydelay));
  const calculate = (activeQuirks) => {
    const timing = simulationWeaponTiming(item, activeQuirks);
    const jam = ultraAutoCannonJamStats(item, activeQuirks);
    const cooldown = Math.max(0.016, timing.cooldown);
    const expectedDamage = damage * (1 + (1 - jam.chance) * extraShots);
    const jammedCycle = Math.max(cooldown, doubleTapDelay + jam.duration);
    const expectedCycle = (1 - jam.chance) * cooldown + jam.chance * jammedCycle;
    return expectedDamage / Math.max(0.016, expectedCycle) * 60;
  };
  return { base: calculate([]), final: calculate(quirks) };
}

function engineTooltipMaxSpeed(engine) {
  const definition = currentDefinition(state.selectedMech);
  const tons = number(definition?.stats?.MaxTons);
  if (!tons) return 0;
  return number(definition?.movement?.MaxMovementSpeed) * number(engine?.stats?.rating) / tons;
}

function equipmentTooltipGroups(item) {
  const stats = item?.stats || {};
  const quirks = effectiveQuirks(state.selectedMech, state.currentBuild);
  const quirkValues = mechlabQuirkValues();
  const groups = [[
      ["TONS", tooltipNumber(itemTons(item), 2)],
      ["SLOTS", tooltipNumber(effectiveItemSlots(item), 0)],
  ]];

  if (item.item_type === "weapon") {
    const ranges = weaponTooltipRanges(item);
    const type = equipmentHardpointType(item);
    const timing = simulationWeaponTiming(item, quirks);
    const heat = simulationWeaponHeat(item, quirks);
    const rangeBonus = simulationWeaponRangeBonus(item, quirks);
    const velocityBonus = quirkIncrease(quirks, "all_velocity_multiplier")
      + quirkIncrease(quirks, `${type}_velocity_multiplier`)
      + simulationSpecificQuirkTotal(quirks, item, "_velocity_multiplier", "increase");
    groups.push([
      ["DAMAGE", weaponDamageTooltipValue(item, quirks)],
      ["HEAT", tooltipQuirkValue(itemHeat(item), heat, 2)],
      ["COOLDOWN", tooltipQuirkValue(stats.cooldown, timing.cooldown, 2, " s")],
    ]);
    if (number(stats.duration) > 0) groups.push([
      ["DURATION", tooltipQuirkValue(stats.duration, timing.duration, 2, " s")],
    ]);
    const rangeRows = [];
    if (Number.isFinite(ranges.minRange)) rangeRows.push([
      "MIN RANGE",
      tooltipQuirkValue(ranges.minRange, ranges.minRange * (1 + rangeBonus), 0, " m"),
    ]);
    if (Number.isFinite(ranges.optimalRange)) rangeRows.push([
      "OPTIMAL RANGE",
      tooltipQuirkValue(ranges.optimalRange, ranges.optimalRange * (1 + rangeBonus), 0, " m"),
    ]);
    if (Number.isFinite(ranges.maxRange)) rangeRows.push([
      "MAX RANGE",
      tooltipQuirkValue(ranges.maxRange, ranges.maxRange * (1 + rangeBonus), 0, " m"),
    ]);
    if (number(stats.speed) > 0) rangeRows.push([
      "VELOCITY",
      tooltipQuirkValue(stats.speed, number(stats.speed) * (1 + velocityBonus), 1, " m/s"),
    ]);
    groups.push(rangeRows);
    const weaponDetailRows = [];
    const spread = weaponTooltipSpread(item, quirks);
    const criticalChance = weaponTooltipCriticalChance(item);
    const criticalDamage = weaponTooltipCriticalDamage(item);
    const targetHeat = weaponTooltipTargetHeat(item);
    if (spread) weaponDetailRows.push(["SPREAD", spread]);
    if (criticalChance) weaponDetailRows.push(["CRITICAL CHANCE", criticalChance]);
    if (criticalDamage) weaponDetailRows.push(["CRITICAL DAMAGE", criticalDamage]);
    if (targetHeat) weaponDetailRows.push(["TARGET HEAT", targetHeat]);
    if (number(stats.chargeTime) > 0) {
      weaponDetailRows.push(["CHARGE TIME", tooltipNumber(stats.chargeTime, 2, " s")]);
    }
    if (isUltraAutoCannon(item)) {
      const jam = ultraAutoCannonJamStats(item, quirks);
      const expectedDpm = ultraAutoCannonExpectedDamagePerMinute(item, quirks);
      weaponDetailRows.push([
        "JAM DURATION",
        tooltipQuirkValue(jam.baseDuration, jam.duration, 2, " s"),
      ]);
      weaponDetailRows.push([
        "JAM CHANCE",
        tooltipQuirkValue(jam.baseChance * 100, jam.chance * 100, 1, "%"),
      ]);
      if (expectedDpm) weaponDetailRows.push([
        "EXPECTED DPM",
        tooltipQuirkValue(expectedDpm.base, expectedDpm.final, 1, "/min"),
      ]);
    }
    groups.push(weaponDetailRows);
  } else if (isHeatSink(item)) {
    const dissipationBonus = quirkIncrease(quirks, "heatdissipation_multiplier");
    groups.push([
      ["HEAT CAPACITY", tooltipNumber(Math.abs(number(stats.heatbase)), 2)],
      ["HEAT DISSIPATION", tooltipQuirkValue(stats.cooling, number(stats.cooling) * (1 + dissipationBonus), 2, "/s")],
      ["ENGINE CAPACITY", tooltipNumber(Math.abs(number(stats.engineHeatbase)), 2)],
      ["ENGINE DISSIPATION", tooltipQuirkValue(stats.engineCooling, number(stats.engineCooling) * (1 + dissipationBonus), 2, "/s")],
    ]);
  } else if (item.item_type === "engine") {
    const baseSpeed = engineTooltipMaxSpeed(item);
    const finalSpeed = baseSpeed * quirkMultiplier(quirkValues, ["mechtopspeed_multiplier"]);
    groups.push([
      ["ENGINE RATING", tooltipNumber(stats.rating, 0)],
      ["MAX SPEED", tooltipQuirkValue(baseSpeed, finalSpeed, 1, " kph")],
      ["INTERNAL HEAT SINKS", tooltipNumber(engineIncludedHeatSinkCount(item), 0)],
      ["ADDITIONAL HEAT SINKS", tooltipNumber(engineAdditionalHeatSinkCapacity(item), 0)],
    ]);
  } else if (item.item_type === "ammo") {
    groups.push([
      ["AMMO", tooltipNumber(stats.numShots, 0)],
      ["INTERNAL DAMAGE", tooltipNumber(stats.internalDamage, 2)],
    ]);
  } else if (item.item_type === "jumpjet") {
    groups.push([
      ["DURATION", tooltipNumber(stats.duration, 2, " s")],
      ["COOLDOWN", tooltipNumber(stats.cooldown, 2, " s")],
      ["VERTICAL THRUST", tooltipNumber(stats.boost_z, 1)],
      ["FORWARD THRUST", tooltipNumber(stats.boost_fwd, 1)],
    ]);
  } else if (item.item_type === "masc") {
    groups.push([
      ["SPEED BOOST", tooltipNumber(number(stats.BoostSpeed) * 100, 1, "%")],
      ["ACCEL BOOST", tooltipNumber(number(stats.BoostAccel) * 100, 1, "%")],
      ["TURN BOOST", tooltipNumber(number(stats.BoostTurn) * 100, 1, "%")],
    ]);
  } else {
    const detailRows = [];
    if (number(stats.range) > 0) detailRows.push(["RANGE", tooltipNumber(stats.range, 0, " m")]);
    if (number(stats.health) > 0) detailRows.push(["HEALTH", tooltipNumber(stats.health, 1)]);
    if (number(stats.amountAllowed) > 0) detailRows.push(["MAX EQUIPPED", tooltipNumber(stats.amountAllowed, 0)]);
    groups.push(detailRows);
  }
  return groups
    .map((rows) => rows.filter(([, value]) => value !== "-"))
    .filter((rows) => rows.length);
}

function equipmentTooltipTone(item) {
  if (item?.item_type === "weapon") return equipmentHardpointType(item) || "weapon";
  if (item?.item_type === "ammo") return ammoHardpointType(item) || "ammo";
  if (item?.item_type === "engine") return "engine";
  if (isHeatSink(item)) return "heatsink";
  if (isEcm(item)) return "ecm";
  return "equipment";
}

function equipmentTooltipItem(target) {
  if (!target) return null;
  if (target.dataset.tooltipItem) return itemById(target.dataset.tooltipItem);
  if (target.dataset.item) return itemById(target.dataset.item);
  if (target.dataset.engineHeatSinkItem !== undefined) {
    return itemById(engineHeatSinkEntries()[Number(target.dataset.engineHeatSinkItem)]?.item_id);
  }
  if (target.dataset.loadoutItem) {
    const [component, indexText] = target.dataset.loadoutItem.split(":");
    return itemById(state.currentBuild?.components?.[component]?.items?.[Number(indexText)]?.item_id);
  }
  return null;
}

function equipmentTooltipHtml(item) {
  const tone = equipmentTooltipTone(item);
  const groups = equipmentTooltipGroups(item);
  const showDescription = item.item_type !== "weapon"
    && item.item_type !== "ammo"
    && item.item_type !== "engine"
    && !isHeatSink(item);
  const description = showDescription ? String(item?.description || "").trim() : "";
  return `
    <div class="equipment-tooltip-card tooltip-${tone}">
      <div class="equipment-tooltip-title">${escapeHtml(item.display_name || item.name)}</div>
      <div class="equipment-tooltip-stats">
        ${groups.map((rows) => `
          <div class="equipment-tooltip-group">
            ${rows.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${tooltipValueHtml(value)}</strong></div>`).join("")}
          </div>
        `).join("")}
      </div>
      ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    </div>
  `;
}

function positionEquipmentTooltip(target = activeEquipmentTooltipTarget) {
  const tooltip = $("equipment-tooltip");
  if (!tooltip || tooltip.hidden || !target?.isConnected) return;
  const gap = 14;
  const margin = 8;
  const rect = target.getBoundingClientRect();
  tooltip.style.maxWidth = "";
  const naturalWidth = tooltip.offsetWidth;
  const spaceRight = Math.max(0, window.innerWidth - margin - rect.right - gap);
  const spaceLeft = Math.max(0, rect.left - gap - margin);
  const placeRight = spaceRight >= naturalWidth || (spaceLeft < naturalWidth && spaceRight >= spaceLeft);
  const availableWidth = placeRight ? spaceRight : spaceLeft;
  tooltip.style.maxWidth = `${Math.max(1, availableWidth)}px`;

  const left = placeRight
    ? rect.right + gap
    : rect.left - gap - tooltip.offsetWidth;
  tooltip.style.left = `${Math.max(margin, Math.min(left, window.innerWidth - tooltip.offsetWidth - margin))}px`;
  tooltip.style.top = `${rect.top}px`;
}

function showEquipmentTooltip(target) {
  const item = equipmentTooltipItem(target);
  const tooltip = $("equipment-tooltip");
  if (!item || !tooltip) return;
  activeEquipmentTooltipTarget = target;
  tooltip.innerHTML = equipmentTooltipHtml(item);
  tooltip.hidden = false;
  positionEquipmentTooltip(target);
}

function hideEquipmentTooltip() {
  const tooltip = $("equipment-tooltip");
  activeEquipmentTooltipTarget = null;
  if (tooltip) tooltip.hidden = true;
}

function installWarehouseItemInComponent(item, component) {
  const warning = dropValidation(item, component);
  if (warning) return false;
  if (item.item_type === "engine") {
    Object.values(state.currentBuild.components).forEach((buildComponent) => {
      buildComponent.items = (buildComponent.items || [])
        .filter((entry) => itemById(entry.item_id)?.item_type !== "engine");
    });
  }
  state.currentBuild.components[component].items.push(buildEntryForItem(item));
  normalizeEngineHeatSinks(state.selectedMech, state.currentBuild);
  renderVariant();
  return true;
}

function autoInstallWarehouseItem(item) {
  if (!item || !state.currentBuild) return false;
  const warehouseSource = { source: "warehouse", itemId: item.id };
  if (isHeatSink(item) && !engineHeatSinkDropValidation(item, warehouseSource)) {
    engineHeatSinkEntries().push(buildEntryForItem(item));
    renderVariant();
    return true;
  }

  const calc = calculateBuild();
  const candidates = (item.item_type === "engine" ? ["centre_torso"] : COMPONENT_ORDER)
    .filter((component) => !dropValidation(item, component))
    .map((component, order) => {
      const definition = effectiveComponentDefinition(state.selectedMech, state.currentBuild, component);
      const usage = calc.componentUsage[component] || { slots: 0 };
      const freeAfterInstall = number(definition.slots) - number(usage.slots) - effectiveItemSlots(item);
      return { component, order, freeAfterInstall };
    })
    .sort((a, b) => a.freeAfterInstall - b.freeAfterInstall || a.order - b.order);

  if (candidates.length && installWarehouseItemInComponent(item, candidates[0].component)) return true;
  setDropStatus(t("build.noAutoInstallLocation"));
  return false;
}

function removeInstalledItem(component, index) {
  const items = state.currentBuild?.components?.[component]?.items;
  if (!items?.[index]) return false;
  const [removed] = items.splice(index, 1);
  if (itemById(removed.item_id)?.item_type === "engine") {
    normalizeEngineHeatSinks(state.selectedMech, state.currentBuild);
  }
  hideEquipmentTooltip();
  renderVariant();
  return true;
}

function removeInstalledEngineHeatSink(index) {
  const items = engineHeatSinkEntries();
  if (!items[index]) return false;
  items.splice(index, 1);
  hideEquipmentTooltip();
  renderVariant();
  return true;
}

function buildEntryForItem(item) {
  return {
    type: item.item_type === "weapon" ? "weapon" : item.item_type === "ammo" ? "ammo" : "module",
    item_id: item.id,
    weapon_group: null,
  };
}

function engineHeatSinkDropValidation(item, source = null) {
  if (!isHeatSink(item)) return t("build.engineHeatSinkOnly");
  if (!itemMatchesMechFaction(item)) {
    return t("build.factionMismatch", {
      item: item.display_name || item.name,
      faction: factionLabel(state.selectedMech?.faction),
    });
  }
  const engine = installedEngine();
  const capacity = engineUserHeatSinkCapacity(engine);
  if (!engine || capacity <= 0) return t("build.noEngineHeatSinkSlots");
  if (source?.source === "engineHeatSink") return null;
  if (engineHeatSinkEntries().length >= capacity) return t("build.engineHeatSinkFull");
  return null;
}

function dropValidation(item, component, source = null) {
  if (!item || !state.currentBuild?.components?.[component]) return "Invalid drop target";
  if (item.item_type === "engine" && fixedOmniEngine()) return t("build.engineFixed");
  if (item.item_type === "engine" && !ENGINE_COMPONENTS.has(component)) {
    return t("build.engineTorsoOnly");
  }
  if (!itemMatchesMechFaction(item)) {
    return t("build.factionMismatch", {
      item: item.display_name || item.name,
      faction: factionLabel(state.selectedMech?.faction),
    });
  }
  if (!heatSinkMatchesUpgrade(item)) {
    return t("build.heatSinkMismatch", { item: item.display_name || item.name });
  }
  const guidanceWarning = guidanceMismatch(item);
  if (guidanceWarning) return guidanceWarning;
  if (!equipmentMatchesSelectedMechCapabilities(item)) return t("build.noAutoInstallLocation");
  if (source?.component === component) return null;
  const compDef = effectiveComponentDefinition(state.selectedMech, state.currentBuild, component);
  const calc = calculateBuild();
  const usage = calc.componentUsage[component] || { slots: 0 };
  const slotLimit = number(compDef.slots);
  const addedItemSlots = Math.max(1, effectiveItemSlots(item));
  const replacedEngineSlots = item.item_type === "engine" && source?.source !== "component"
    ? Math.max(0, itemSlots(loadoutInstalledEngine()))
    : 0;
  const nextSlots = usage.slots
    - number(usage.occupiedUpgradeSlots)
    - replacedEngineSlots
    + addedItemSlots;
  if (!slotLimit || nextSlots > slotLimit) return `Slots ${nextSlots}/${slotLimit}`;

  if (calc.upgradeSlots) {
    const availableUpgradeCapacity = STRUCTURE_SLOT_ORDER.reduce((sum, name) => {
      const componentLimit = number(effectiveComponentDefinition(state.selectedMech, state.currentBuild, name).slots);
      const componentUsage = calc.componentUsage[name] || { slots: 0, occupiedUpgradeSlots: 0 };
      const baseUsage = componentUsage.slots - number(componentUsage.occupiedUpgradeSlots);
      return sum + Math.max(0, componentLimit - baseUsage);
    }, 0);
    const sourceInUpgradeArea = source?.component && STRUCTURE_SLOT_ORDER.includes(source.component);
    const targetInUpgradeArea = STRUCTURE_SLOT_ORDER.includes(component);
    let nextUpgradeCapacity = availableUpgradeCapacity
      + (sourceInUpgradeArea ? addedItemSlots : 0)
      - (targetInUpgradeArea ? addedItemSlots : 0);
    if (item.item_type === "engine" && !source) {
      nextUpgradeCapacity += replacedEngineSlots;
      nextUpgradeCapacity += engineSideSlots(loadoutInstalledEngine()) * 2;
      nextUpgradeCapacity -= engineSideSlots(item) * 2;
    }
    if (nextUpgradeCapacity < calc.upgradeSlots) {
      return t("build.upgradeSlotsUnavailable", { count: calc.upgradeSlots - nextUpgradeCapacity });
    }
  }

  if (item.item_type === "engine") {
    const proposedSideSlots = engineSideSlots(item);
    for (const side of ENGINE_SIDE_COMPONENTS) {
      const sideDef = effectiveComponentDefinition(state.selectedMech, state.currentBuild, side);
      const sideLimit = number(sideDef.slots);
      const sideUsage = calc.componentUsage[side] || { slots: 0, engineSideSlots: 0 };
      const sideNextSlots = sideUsage.slots
        - number(sideUsage.engineSideSlots)
        - number(sideUsage.occupiedUpgradeSlots)
        + proposedSideSlots;
      if (!sideLimit || sideNextSlots > sideLimit) {
        return `${COMPONENT_NAMES[side] || side}: Slots ${sideNextSlots}/${sideLimit}`;
      }
    }
  }

  const type = equipmentHardpointType(item);
  const standardEcmMount = type === "ecm" && !hasFixedOmnipods(state.selectedMech);
  if (type && !standardEcmMount) {
    const capacity = (compDef.hardpoints || [])
      .filter((hp) => hardpointType(hp) === type)
      .reduce((sum, hp) => sum + hardpointSlots(hp), 0);
    const used = state.currentBuild.components[component].items.reduce((count, entry) => {
      const installed = itemById(entry.item_id);
      return count + (equipmentHardpointType(installed) === type ? 1 : 0);
    }, (compDef.fixed || []).reduce((count, itemId) => (
      count + (equipmentHardpointType(itemById(itemId)) === type ? 1 : 0)
    ), 0));
    if (used + 1 > capacity) return `${type} hardpoints ${used + 1}/${capacity}`;
  }
  return null;
}

function setDropStatus(message) {
  $("data-status").textContent = message;
}

function clearDragState() {
  state.activeDrag = null;
  document.querySelectorAll(".drop-valid, .drop-invalid, .dragging").forEach((element) => {
    element.classList.remove("drop-valid", "drop-invalid", "dragging");
  });
}

function adjustArmorAllocation(button) {
  if (!state.currentBuild) return false;
  const component = button.dataset.armorComponent;
  const side = button.dataset.armorSide;
  const delta = number(Number(button.dataset.armorDelta));
  const buildComponent = state.currentBuild.components?.[component];
  if (!buildComponent || !delta || !["front", "rear"].includes(side)) return false;

  state.currentBuild.rearArmor ||= {};
  const componentDefinition = effectiveComponentDefinition(state.selectedMech, state.currentBuild, component);
  const capacity = componentArmorCapacity(component, componentDefinition);
  const current = side === "rear"
    ? number(state.currentBuild.rearArmor[component])
    : number(buildComponent.armor);
  const pairedValue = side === "rear"
    ? number(buildComponent.armor)
    : number(state.currentBuild.rearArmor[component]);
  const max = Math.max(0, capacity - pairedValue);
  const value = Math.min(max, Math.max(0, current + delta));
  if (value === current) return false;

  if (side === "rear") {
    state.currentBuild.rearArmor[component] = value;
  } else {
    buildComponent.armor = value;
  }
  renderVariant();
  return true;
}

let armorHoldDelay = null;
let armorHoldInterval = null;
let armorClickReset = null;
let suppressArmorClick = false;

function clearArmorHoldTimers() {
  clearTimeout(armorHoldDelay);
  clearInterval(armorHoldInterval);
  armorHoldDelay = null;
  armorHoldInterval = null;
}

function stopArmorHold() {
  clearArmorHoldTimers();
  clearTimeout(armorClickReset);
  armorClickReset = setTimeout(() => {
    suppressArmorClick = false;
  }, 0);
}

function startArmorHold(button) {
  clearArmorHoldTimers();
  clearTimeout(armorClickReset);
  suppressArmorClick = true;
  if (!adjustArmorAllocation(button)) return;
  armorHoldDelay = setTimeout(() => {
    armorHoldInterval = setInterval(() => {
      if (!adjustArmorAllocation(button)) stopArmorHold();
    }, 90);
  }, 350);
}

function installDraggedItem(component) {
  const payload = state.activeDrag;
  if (!payload) return;
  const item = itemById(payload.itemId);
  const warning = dropValidation(item, component, payload.source === "component" ? payload : null);
  if (warning) {
    setDropStatus(warning);
    return;
  }
  if (payload.source === "engineHeatSink") {
    const internal = engineHeatSinkEntries();
    if (!internal[payload.index]) return;
    const [entry] = internal.splice(payload.index, 1);
    state.currentBuild.components[component].items.push(entry);
  } else if (payload.source === "component") {
    if (payload.component === component) return;
    const sourceItems = state.currentBuild.components[payload.component]?.items;
    if (!sourceItems?.[payload.index]) return;
    const [entry] = sourceItems.splice(payload.index, 1);
    state.currentBuild.components[component].items.push(entry);
  } else {
    if (item.item_type === "engine") {
      Object.values(state.currentBuild.components).forEach((buildComponent) => {
        buildComponent.items = (buildComponent.items || [])
          .filter((entry) => itemById(entry.item_id)?.item_type !== "engine");
      });
    }
    state.currentBuild.components[component].items.push(buildEntryForItem(item));
  }
  normalizeEngineHeatSinks(state.selectedMech, state.currentBuild);
  clearDragState();
  renderVariant();
}

function installDraggedEngineHeatSink() {
  const payload = state.activeDrag;
  if (!payload) return;
  const item = itemById(payload.itemId);
  const warning = engineHeatSinkDropValidation(item, payload);
  if (warning) {
    setDropStatus(warning);
    return;
  }
  if (payload.source === "engineHeatSink") {
    clearDragState();
    return;
  }
  let entry;
  if (payload.source === "component") {
    const sourceItems = state.currentBuild.components[payload.component]?.items;
    if (!sourceItems?.[payload.index]) return;
    [entry] = sourceItems.splice(payload.index, 1);
  } else {
    entry = buildEntryForItem(item);
  }
  engineHeatSinkEntries().push(entry);
  clearDragState();
  renderVariant();
}

function removeDraggedItem() {
  const payload = state.activeDrag;
  if (payload?.source === "engineHeatSink") {
    const items = engineHeatSinkEntries();
    if (!items[payload.index]) return;
    items.splice(payload.index, 1);
  } else if (payload?.source === "component") {
    const items = state.currentBuild?.components?.[payload.component]?.items;
    if (!items?.[payload.index]) return;
    const [removed] = items.splice(payload.index, 1);
    if (itemById(removed.item_id)?.item_type === "engine") {
      normalizeEngineHeatSinks(state.selectedMech, state.currentBuild);
    }
  } else {
    return;
  }
  clearDragState();
  renderVariant();
}

function bindEvents() {
  const tooltipSelector = "[data-item], [data-tooltip-item], [data-loadout-item], [data-engine-heat-sink-item]";
  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest(tooltipSelector);
    if (!target || target === activeEquipmentTooltipTarget) return;
    showEquipmentTooltip(target);
  });
  document.addEventListener("pointerout", (event) => {
    if (!activeEquipmentTooltipTarget || activeEquipmentTooltipTarget.contains(event.relatedTarget)) return;
    const nextTarget = event.relatedTarget?.closest?.(tooltipSelector);
    if (nextTarget) showEquipmentTooltip(nextTarget);
    else hideEquipmentTooltip();
  });
  document.addEventListener("focusin", (event) => {
    const target = event.target.closest(tooltipSelector);
    if (target) showEquipmentTooltip(target);
  });
  document.addEventListener("focusout", (event) => {
    if (activeEquipmentTooltipTarget && !activeEquipmentTooltipTarget.contains(event.relatedTarget)) hideEquipmentTooltip();
  });
  document.addEventListener("scroll", () => {
    if (activeEquipmentTooltipTarget) positionEquipmentTooltip();
  }, { capture: true, passive: true });
  window.addEventListener("resize", () => {
    if (activeEquipmentTooltipTarget) positionEquipmentTooltip();
  }, { passive: true });
  $("import-loadout-code").addEventListener("click", () => openLoadoutCodeDialog("import"));
  $("export-loadout-code").addEventListener("click", () => openLoadoutCodeDialog("export"));
  $("close-loadout-code").addEventListener("click", closeLoadoutCodeDialog);
  $("apply-loadout-code").addEventListener("click", applyImportedMwoCode);
  $("copy-loadout-code").addEventListener("click", copyExportedMwoCode);
  $("loadout-code-overlay").addEventListener("mousedown", (event) => {
    if (event.target === $("loadout-code-overlay")) closeLoadoutCodeDialog();
  });
  $("open-simulation").addEventListener("click", openSimulation);
  $("close-simulation").addEventListener("click", closeSimulation);
  $("reset-simulation").addEventListener("click", resetSimulationRun);
  $("simulation-scenario-options").addEventListener("change", (event) => {
    const input = event.target.closest('input[name="simulation-scenario"]');
    if (!input || !SIMULATION_SCENARIOS[input.value]) return;
    state.simulation.scenarioId = input.value;
    resetSimulationRun();
  });
  $("simulation-movement-state").addEventListener("change", (event) => {
    const now = performance.now();
    coolSimulationHeat(now);
    state.simulation.movementState = event.target.value === "moving" ? "moving" : "stationary";
    applySimulationOverheat();
    renderSimulationMetrics(now);
  });
  $("simulation-map-temperature").addEventListener("change", (event) => {
    const temperature = Object.hasOwn(SIMULATION_MAP_COOLING_MODIFIERS, event.target.value)
      ? event.target.value
      : "normal";
    const now = performance.now();
    coolSimulationHeat(now);
    state.simulation.mapTemperature = temperature;
    applySimulationOverheat();
    renderSimulationMetrics(now);
  });
  $("simulation-target-distance").addEventListener("input", (event) => {
    const distance = Number(event.target.value);
    if (Number.isFinite(distance) && distance >= 0) state.simulation.targetDistance = distance;
  });
  $("simulation-target-distance").addEventListener("change", (event) => {
    const distance = Number(event.target.value);
    state.simulation.targetDistance = Number.isFinite(distance) && distance >= 0 ? distance : 180;
    event.target.value = String(state.simulation.targetDistance);
  });
  $("simulation-apply-splash").addEventListener("change", (event) => {
    state.simulation.applySplashDamage = event.target.checked;
    resetSimulationRun();
    renderSimulationWeaponList();
  });
  $("simulation-end-on-overheat").addEventListener("change", (event) => {
    const simulation = state.simulation;
    simulation.endOnOverheat = event.target.checked;
    if (simulation.endOnOverheat && simulation.overheated && !simulation.finished) {
      finishSimulationRun();
      renderSimulationMetrics();
      renderSimulationScenario();
    }
  });
  $("simulation-group-status").addEventListener("pointerdown", (event) => {
    const button = event.target.closest("[data-simulation-fire-group]");
    if (!button || (event.pointerType === "mouse" && event.button !== 0)) return;
    const group = Number(button.dataset.simulationFireGroup);
    if (group < 1 || group > 4) return;
    event.preventDefault();
    if (state.simulation.heldGroups.has(group)) return;
    state.simulation.pointerGroups.set(event.pointerId, group);
    setSimulationGroupHeld(group, true);
  });
  const releaseSimulationPointerGroup = (event) => {
    const group = state.simulation.pointerGroups.get(event.pointerId);
    if (!group) return;
    state.simulation.pointerGroups.delete(event.pointerId);
    setSimulationGroupHeld(group, false);
  };
  document.addEventListener("pointerup", releaseSimulationPointerGroup);
  document.addEventListener("pointercancel", releaseSimulationPointerGroup);
  $("simulation-overlay").addEventListener("mousedown", (event) => {
    if (event.target === $("simulation-overlay")) closeSimulation();
  });
  $("simulation-weapon-list").addEventListener("change", (event) => {
    const input = event.target.closest("[data-simulation-weapon]");
    if (!input) return;
    const group = Number(input.value);
    const weapon = state.simulation.weapons.find((entry) => entry.key === input.dataset.simulationWeapon);
    if (!weapon || group < 1 || group > 4) return;
    const groups = new Set(simulationGroupsForWeapon(weapon));
    if (input.checked) groups.add(group);
    else groups.delete(group);
    state.simulation.assignments.set(weapon.key, groups);
    if (weapon.entry) {
      const savedGroups = Array.from(groups).sort((left, right) => left - right);
      weapon.entry.weapon_groups = savedGroups;
      weapon.entry.weapon_group = savedGroups[0] ?? null;
    }
    resetSimulationRun();
    renderSimulationWeaponList();
    renderSimulationGroupStatus();
  });
  document.addEventListener("keydown", (event) => {
    if (!$("build-actions-overlay").hidden) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeBuildActionsDialog();
      }
      return;
    }
    if (!$("loadout-code-overlay").hidden) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLoadoutCodeDialog();
      } else if (
        state.loadoutCodeMode === "import"
        && event.key === "Enter"
        && (event.ctrlKey || event.metaKey)
      ) {
        event.preventDefault();
        applyImportedMwoCode();
      }
      return;
    }
    if (!state.simulation.open) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeSimulation();
      return;
    }
    if (event.target.matches("input, select, textarea") || event.target.closest(".simulation-option-help")) return;
    const group = Number(event.key);
    if (group < 1 || group > 4) return;
    event.preventDefault();
    setSimulationGroupHeld(group, true);
  });
  document.addEventListener("keyup", (event) => {
    if (!state.simulation.open) return;
    if (event.target.matches("input, select, textarea") || event.target.closest(".simulation-option-help")) return;
    const group = Number(event.key);
    if (group < 1 || group > 4) return;
    event.preventDefault();
    setSimulationGroupHeld(group, false);
  });
  window.addEventListener("blur", () => {
    if (!state.simulation.open) return;
    const now = performance.now();
    const durationMs = simulationDurationMs();
    if (
      durationMs !== null
      && state.simulation.startedAt !== null
      && now >= state.simulation.startedAt + durationMs
    ) {
      simulationTick(now);
      return;
    }
    coolSimulationHeat(now);
    updateSimulationContinuousDamage(now);
    state.simulation.heldGroups.clear();
    state.simulation.pointerGroups.clear();
    state.simulation.continuousFireAt.clear();
    applySimulationOverheat();
    renderSimulationMetrics(now);
    renderSimulationGroupStatus();
  });
  document.querySelectorAll("[data-main-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.mainTab === "mechlab" && state.activeMainTab === "mechlab") {
        showFullMechlabList();
        return;
      }
      setMainTab(button.dataset.mainTab);
    });
  });
  $("mech-search").addEventListener("input", renderMechList);
  $("faction-filter").addEventListener("change", renderMechList);
  $("weight-filter").addEventListener("change", renderMechList);
  $("mech-sort").addEventListener("change", (event) => {
    state.mechSort = event.target.value;
    renderMechList();
  });
  document.querySelectorAll("[data-equipment-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeEquipmentCategory = button.dataset.equipmentCategory;
      renderEquipmentList();
    });
  });
  $("info-apply-quirks").addEventListener("change", (event) => {
    state.infoApplyQuirks = event.target.checked;
    renderMechList();
    renderInfoPanel();
    renderComparePanel();
  });
  $("fit-info-mech").addEventListener("click", () => {
    if (state.selectedMech) openMechFitting(state.selectedMech.id);
  });
  $("mech-list-view-toggle").addEventListener("click", () => {
    state.largeMechList = !state.largeMechList;
    renderMechList();
    updateCompareOverlay();
  });
  $("show-mech-list").addEventListener("click", showMechlabList);
  $("close-mechlab-compact-list").addEventListener("click", closeMechlabCompactList);
  $("mechlab-compact-search").addEventListener("input", renderMechlabCompactList);
  $("open-build-actions").addEventListener("click", openBuildActionsDialog);
  $("close-build-actions-x").addEventListener("click", closeBuildActionsDialog);
  $("close-build-actions").addEventListener("click", closeBuildActionsDialog);
  $("build-actions-overlay").addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-build-action]");
    if (actionButton) {
      applyBuildAction(actionButton.dataset.buildAction);
      return;
    }
    if (event.target === event.currentTarget) closeBuildActionsDialog();
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
  document.querySelectorAll("[data-stats-cooldown-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      state.statsCooldownScope = button.dataset.statsCooldownScope;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-quirk-durability-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      state.statsQuirkDurabilityScope = button.dataset.statsQuirkDurabilityScope;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-heat-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      state.statsHeatScope = button.dataset.statsHeatScope;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-range-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsRangeScope = button.dataset.statsRangeScope;
      renderStatsPanel();
    });
  });
  document.querySelectorAll("[data-stats-velocity-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      state.statsVelocityScope = button.dataset.statsVelocityScope;
      renderStatsPanel();
    });
  });
  $("stats-hide-zero-quirks").addEventListener("change", (event) => {
    state.statsHideZeroQuirks = event.target.checked;
    renderStatsPanel();
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
  $("stats-detail").addEventListener("click", (event) => {
    const button = event.target.closest("[data-fit-stats-mech]");
    if (!button) return;
    openMechFitting(button.dataset.fitStatsMech);
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
  $("mechlab-compact-list").addEventListener("click", (event) => {
    const chassis = event.target.closest("[data-chassis]");
    if (chassis) {
      state.selectedChassis = chassis.dataset.chassis;
      if (state.expandedChassis.has(state.selectedChassis)) state.expandedChassis.delete(state.selectedChassis);
      else state.expandedChassis.add(state.selectedChassis);
      renderMechlabCompactList();
      return;
    }
    const button = event.target.closest("[data-mech]");
    if (button) {
      if (String(state.selectedMech?.id || "") === String(button.dataset.mech)) closeMechlabCompactList();
      else selectMech(button.dataset.mech);
    }
  });
  $("item-list").addEventListener("click", (event) => {
    const sectionToggle = event.target.closest("[data-warehouse-section]");
    if (sectionToggle) {
      const sectionId = sectionToggle.dataset.warehouseSection;
      if (state.collapsedWarehouseSections.has(sectionId)) state.collapsedWarehouseSections.delete(sectionId);
      else state.collapsedWarehouseSections.add(sectionId);
      renderEquipmentList();
      return;
    }
    const button = event.target.closest("[data-item]");
    if (!button) return;
    selectItem(button.dataset.item);
    autoInstallWarehouseItem(itemById(button.dataset.item));
  });
  $("upgrade-controls").addEventListener("click", (event) => {
    const button = event.target.closest("[data-upgrade-category]");
    if (!button || button.disabled) return;
    selectUpgrade(button.dataset.upgradeCategory, button.dataset.upgradeValue);
  });
  $("components").addEventListener("click", (event) => {
    const engineSinkRow = event.target.closest("[data-engine-heat-sink-item]");
    if (engineSinkRow) {
      event.preventDefault();
      removeInstalledEngineHeatSink(Number(engineSinkRow.dataset.engineHeatSinkItem));
      return;
    }
    if (event.target.closest("[data-engine-heat-sink-drop]")) return;
    const installedRow = event.target.closest("[data-loadout-item]");
    if (installedRow) {
      const [component, indexText] = installedRow.dataset.loadoutItem.split(":");
      event.preventDefault();
      removeInstalledItem(component, Number(indexText));
      return;
    }
    const button = event.target.closest("[data-armor-component]");
    if (!button || button.disabled) return;
    if (suppressArmorClick) {
      event.preventDefault();
      return;
    }
    adjustArmorAllocation(button);
  });
  $("components").addEventListener("pointerdown", (event) => {
    const button = event.target.closest("[data-armor-component]");
    if (!button || button.disabled || event.button !== 0) return;
    event.preventDefault();
    startArmorHold(button);
  });
  document.addEventListener("pointerup", stopArmorHold);
  document.addEventListener("pointercancel", stopArmorHold);
  $("item-list").addEventListener("dragstart", (event) => {
    const podRow = event.target.closest("[data-omnipod]");
    if (podRow) {
      state.activeDrag = {
        source: "omnipod",
        podId: podRow.dataset.omnipod,
        component: podRow.dataset.omnipodComponent,
      };
      podRow.classList.add("dragging");
      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("text/plain", `omnipod:${podRow.dataset.omnipod}`);
      return;
    }
    const row = event.target.closest("[data-item]");
    if (!row) return;
    state.activeDrag = { source: "warehouse", itemId: row.dataset.item };
    row.classList.add("dragging");
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("text/plain", `warehouse:${row.dataset.item}`);
  });
  $("components").addEventListener("dragstart", (event) => {
    const engineSinkRow = event.target.closest("[data-engine-heat-sink-item]");
    if (engineSinkRow) {
      const index = Number(engineSinkRow.dataset.engineHeatSinkItem);
      const entry = engineHeatSinkEntries()[index];
      if (!entry) return;
      state.activeDrag = { source: "engineHeatSink", index, itemId: entry.item_id };
      engineSinkRow.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", `engine-heatsink:${index}`);
      return;
    }
    const row = event.target.closest("[data-loadout-item]");
    if (!row) return;
    const [component, indexText] = row.dataset.loadoutItem.split(":");
    const index = Number(indexText);
    const entry = state.currentBuild?.components?.[component]?.items?.[index];
    if (!entry) return;
    state.activeDrag = { source: "component", component, index, itemId: entry.item_id };
    row.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", `component:${component}:${index}`);
  });
  $("components").addEventListener("dragover", (event) => {
    const engineBay = event.target.closest("[data-engine-heat-sink-drop]");
    if (engineBay && state.activeDrag) {
      document.querySelectorAll("[data-component-drop], [data-engine-heat-sink-drop]")
        .forEach((target) => target.classList.remove("drop-valid", "drop-invalid"));
      const item = itemById(state.activeDrag.itemId);
      const warning = engineHeatSinkDropValidation(item, state.activeDrag);
      engineBay.classList.add(warning ? "drop-invalid" : "drop-valid");
      if (!warning) {
        event.preventDefault();
        event.dataTransfer.dropEffect = state.activeDrag.source === "warehouse" ? "copy" : "move";
      }
      return;
    }
    const component = event.target.closest("[data-component-drop]");
    if (!component || !state.activeDrag) return;
    document.querySelectorAll("[data-component-drop]").forEach((target) => target.classList.remove("drop-valid", "drop-invalid"));
    if (state.activeDrag.source === "omnipod") {
      const valid = state.activeDrag.component === component.dataset.componentDrop;
      component.classList.add(valid ? "drop-valid" : "drop-invalid");
      if (valid) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
      }
      return;
    }
    const item = itemById(state.activeDrag.itemId);
    const warning = dropValidation(item, component.dataset.componentDrop, state.activeDrag.source === "component" ? state.activeDrag : null);
    component.classList.add(warning ? "drop-invalid" : "drop-valid");
    if (!warning || state.activeDrag.source === "component") {
      event.preventDefault();
      event.dataTransfer.dropEffect = state.activeDrag.source === "warehouse" ? "copy" : "move";
    }
  });
  $("components").addEventListener("drop", (event) => {
    const engineBay = event.target.closest("[data-engine-heat-sink-drop]");
    if (engineBay) {
      event.preventDefault();
      installDraggedEngineHeatSink();
      return;
    }
    const component = event.target.closest("[data-component-drop]");
    if (!component) return;
    event.preventDefault();
    const payload = state.activeDrag;
    if (payload?.source === "omnipod") {
      if (payload.component === component.dataset.componentDrop) {
        state.currentBuild.components[payload.component].omnipod = Number(payload.podId);
        clearDragState();
        renderVariant();
        renderEquipmentList();
      }
      return;
    }
    const item = itemById(payload?.itemId);
    const warning = dropValidation(item, component.dataset.componentDrop, payload?.source === "component" ? payload : null);
    if (warning && payload?.source === "component") {
      setDropStatus(warning);
      clearDragState();
      return;
    }
    installDraggedItem(component.dataset.componentDrop);
  });
  $("equipment-panel").addEventListener("dragover", (event) => {
    if (!["component", "engineHeatSink"].includes(state.activeDrag?.source)) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    $("equipment-panel").classList.add("drop-valid");
  });
  $("equipment-panel").addEventListener("dragleave", (event) => {
    if (!$("equipment-panel").contains(event.relatedTarget)) $("equipment-panel").classList.remove("drop-valid");
  });
  $("equipment-panel").addEventListener("drop", (event) => {
    event.preventDefault();
    removeDraggedItem();
  });
  document.addEventListener("dragover", (event) => {
    if (!["component", "engineHeatSink"].includes(state.activeDrag?.source)) return;
    if (event.target.closest("[data-component-drop]")) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
  document.addEventListener("drop", (event) => {
    if (!["component", "engineHeatSink"].includes(state.activeDrag?.source)) return;
    if (event.target.closest("[data-component-drop], #equipment-panel")) return;
    event.preventDefault();
    removeDraggedItem();
  });
  document.addEventListener("dragend", clearDragState);
  $("save-build").addEventListener("click", () => {
    if (!state.selectedMech || !state.currentBuild) return;
    localStorage.setItem(savedKey(state.selectedMech), JSON.stringify(state.currentBuild));
    $("data-status").textContent = t("status.buildSaved");
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
