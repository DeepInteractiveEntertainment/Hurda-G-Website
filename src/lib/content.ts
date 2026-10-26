import type { L } from "./i18n";

/* ───────────────────────── Genel ───────────────────────── */

export const tagline: L = {
  tr: "Şirket seni hurdadan yaptı. Şimdi hurda toplayacaksın.",
  en: "The Company built you out of scrap. Now go collect some.",
};

export const pitch: L = {
  tr: "HURDA-G, 1–4 kişilik co-op bir korku-komedi extraction oyunu. Paslı bir feribotla hurda denizine açıl, VHS kasetinden doğan lanetli adalara çık, mahzenlerden hurda kaçır ve kaset bitmeden gemiye dön. Kota tutmazsa Scrap Master seni bekliyor.",
  en: "HURDA-G is a 1–4 player co-op horror-comedy extraction game. Sail a rusty ferry into the scrap sea, land on cursed islands born from a VHS tape, drag scrap out of the cellars and get back aboard before the tape runs out. Miss the quota and Scrap Master will be waiting.",
};

export const acronym: L = {
  tr: "Highly Unwanted Rudimentary Duty Android — Model G",
  en: "Highly Unwanted Rudimentary Duty Android — Model G",
};

export const facts: { k: L; v: L }[] = [
  { k: { tr: "Tür", en: "Genre" }, v: { tr: "Co-op extraction · korku-komedi", en: "Co-op extraction · horror-comedy" } },
  { k: { tr: "Oyuncu", en: "Players" }, v: { tr: "1–4 (tek kişi ya da host/katıl)", en: "1–4 (solo or host/join)" } },
  { k: { tr: "Kamera", en: "Camera" }, v: { tr: "Birinci şahıs, fizik tabanlı", en: "First person, physics driven" } },
  { k: { tr: "Platform", en: "Platforms" }, v: { tr: "PC · macOS · iOS · Android", en: "PC · macOS · iOS · Android" } },
  { k: { tr: "Dil", en: "Languages" }, v: { tr: "18 dil", en: "18 languages" } },
  { k: { tr: "Stüdyo", en: "Studio" }, v: { tr: "Deep Interactive Entertainment", en: "Deep Interactive Entertainment" } },
];

/* ───────────────────────── Oyun döngüsü ───────────────────────── */

export const loop: { n: string; title: L; text: L; osd: string }[] = [
  {
    n: "01", osd: "FAX ▸ IN",
    title: { tr: "Faks gelir", en: "The fax arrives" },
    text: {
      tr: "Şirket'in haftalık kotası faks makinesinden çıkar. Tek cümle, sıfır nezaket: “Gecikmeye faiz işler.”",
      en: "The Company's weekly quota crawls out of the fax machine. One sentence, zero manners: “Late delivery accrues interest.”",
    },
  },
  {
    n: "02", osd: "HUB ▸ SHOP",
    title: { tr: "Hub'da hazırlan", en: "Gear up at the hub" },
    text: {
      tr: "Hub güneşli ve güvenli. Scrap Master'ın tezgâhından silah, alet, ilaç ve ekipman sipariş et; masasına teslim edilir. Kozmetiklerini seç, çantanı kuşan.",
      en: "The hub is sunny and safe. Order weapons, tools, meds and gear from Scrap Master's workbench — it's delivered to his table. Pick your cosmetics, strap on your backpack.",
    },
  },
  {
    n: "03", osd: "▶ SAIL",
    title: { tr: "Feribotla açıl", en: "Set sail on the ferry" },
    text: {
      tr: "Hurda feribotun kaptan köşküne geç: gaz kolu ileri, iticilerle yerinde dön, pruva rampasını kapat. Tır güvertede, ekip balkonda, balıklar güverteye zıplıyor.",
      en: "Take the wheelhouse of the scrap ferry: throttle forward, spin in place with the thrusters, raise the bow ramp. The truck rides on deck, the crew hangs on the balcony, fish leap onto the deck.",
    },
  },
  {
    n: "04", osd: "▶ PLAY 18:42",
    title: { tr: "Kaset oynar, ada doğar", en: "The tape plays, an island rises" },
    text: {
      tr: "Ufukta bir silüet belirir. Ada gerçek değil: 1987'de kaydedilmiş lanetli bir yerin VHS kasetten denize yansıması. Ada ilk görüldüğü an kaset dönmeye başlar, sayaç herkes için aynıdır.",
      en: "A silhouette breaks the horizon. The island isn't real — it's a cursed place recorded on VHS in 1987, projected onto the sea. The tape starts rolling the moment it's sighted; every player sees the same clock.",
    },
  },
  {
    n: "05", osd: "REC ● CELLAR",
    title: { tr: "Kıyı, yüzey, mahzen", en: "Shore, surface, cellar" },
    text: {
      tr: "Kıyıya çık, tırman, hurda yığınlarını ara. Asıl ganimet aşağıda: kapıdan inilen mahzenler. Ne kadar derine inersen kayıt o kadar bozuk — hurda değerli, düşman tehlikeli.",
      en: "Hit the shore, climb, dig through scrap piles. The real loot is below: cellars down through the hatch. The deeper you go, the more corrupted the recording — richer scrap, nastier things.",
    },
  },
  {
    n: "06", osd: "■ STOP 00:42",
    title: { tr: "Kaset bitmeden gemiye", en: "Back aboard before the tape ends" },
    text: {
      tr: "Hurdayı ambara taşı. Son dakikada köşede kırmızı “KASET BİTİYOR” yanıp söner. Süre dolunca ekran kararır, karıncalanma basar ve ada puf olur — üstündeki herkes denizde uyanır, mahzende kalan… kasette kalır.",
      en: "Haul the scrap into the hold. In the final minute a red “TAPE ENDING” flashes in the corner. When it hits zero the screen cuts to static and the island goes poof — everyone on it wakes up in the sea, and whoever was in the cellar… stays on the tape.",
    },
  },
  {
    n: "07", osd: "≈ VORTEX",
    title: { tr: "Girdapla eve dön", en: "Ride the vortex home" },
    text: {
      tr: "TAB terminalinin BOT sekmesinde HUB'A DÖN'e iki kez bas; geminin önünde dev bir girdap açılır, feribotu döndürerek hub'a çeker. Denizde ya da adada kalan herkes güverteye ışınlanır.",
      en: "Press RETURN TO HUB twice in the TAB terminal's BOT tab; a huge vortex opens ahead of the ship and spins the ferry back to the hub. Anyone left in the sea or on an island is pulled onto the deck.",
    },
  },
  {
    n: "08", osd: "$ PAYOUT",
    title: { tr: "Tart, sat, yüksel", en: "Weigh, sell, level up" },
    text: {
      tr: "Hurda tartılır ve hesaba yazılır. Başarılı her sefer ekibin seviyesini +1 artırır: sonraki seferde adalar daha zengin, düşmanlar daha sert. Kota tutmadıysa… arenaya.",
      en: "Scrap gets weighed and credited. Every successful voyage raises the crew level by +1: richer islands, tougher enemies next time. Missed the quota? To the arena.",
    },
  },
];

export const pillars: { title: L; text: L }[] = [
  { title: { tr: "Extraction gerilimi", en: "Extraction tension" }, text: { tr: "Çıkarabildiğin senindir. Bir kutu daha mı, yoksa kaçalım mı?", en: "If you can get it out, it's yours. One more crate, or run?" } },
  { title: { tr: "Oyuncudan doğan komedi", en: "Player-made comedy" }, text: { tr: "Ragdoll fizik, yakın sesli sohbet, küfürbaz robotlar, uçurumdan düşen arkadaşlar.", en: "Ragdoll physics, proximity voice, foul-mouthed robots, friends falling off cliffs." } },
  { title: { tr: "Birlikte ya da hiç", en: "Together or not at all" }, text: { tr: "İki elle taşı, ipi kes, arkadaşını dirilt, birbirinize bağlanın.", en: "Two-hand carry, cut the rope, revive a friend, get chained together." } },
  { title: { tr: "Her sefer başka", en: "Every voyage is different" }, text: { tr: "Seed'den üretilen ada, 30 hava durumu, gelişen sefer seviyesi.", en: "Seed-generated islands, 30 weather states, a rising voyage level." } },
];

export const tapeRules: { title: L; text: L }[] = [
  { title: { tr: "Kaset süresi = adanın ömrü", en: "Tape length = island lifetime" }, text: { tr: "Sunucu sayar, herkes aynı sayacı görür. Köşedeki OSD: ▶ PLAY 18:42.", en: "The server keeps time, everyone shares the clock. Corner OSD: ▶ PLAY 18:42." } },
  { title: { tr: "Hurda gerçektir — kaset dönerken", en: "Scrap is real — while the tape rolls" }, text: { tr: "Kaset bitmeden gemiye taşınan her şey gerçek dünyada kalır.", en: "Anything carried aboard before the tape ends stays in the real world." } },
  { title: { tr: "Puf anı", en: "The poof" }, text: { tr: "Ekran kararır, karıncalanma, ada yok olur, adadakiler denize düşer. Gemi kasetin parçası değildir.", en: "Screen cuts out, static, the island vanishes, everyone on it drops into the sea. The ship is not part of the tape." } },
  { title: { tr: "Mahzen = bandın alt katmanı", en: "Cellar = the tape's lower layer" }, text: { tr: "Derinlik arttıkça kayıt bozulur: daha değerli hurda, daha tehlikeli şeyler.", en: "The deeper, the more corrupted: more valuable scrap, more dangerous things." } },
];

/* ───────────────────────── Dünya ───────────────────────── */

export const story: { title: L; text: L }[] = [
  {
    title: { tr: "1987. Kayıt Vericisi.", en: "1987. The Recording Transmitter." },
    text: {
      tr: "Balkan'ın en açgözlü sanayi patronlarının holdingi Şirket, bir Doğu Bloku fuarından dev bir video kayıt cihazı alır. Cihaz terk edilmiş fabrikaları, köyleri, ormanları VHS kasete kaydeder. Kaset oynatılınca kaydedilen yer, denizin ortasında gerçek bir ada olarak belirir.",
      en: "The Company — a holding run by the greediest industrial bosses in the Balkans — buys a giant video recorder at an Eastern Bloc trade fair. It records abandoned factories, villages and forests onto VHS. Play the tape and the recorded place rises as a real island in the middle of the sea.",
    },
  },
  {
    title: { tr: "Scrap Master", en: "Scrap Master" },
    text: {
      tr: "Sanayinin en iyi hurdacısı ve tamircisi. Şirket'e borçlu: dükkânı, iskelesi, gemisi hep senetle alınmış. İlk kasete kendisi girdi, içeride yirmi dakika sandı, dışarıda üç gün geçmişti. O günden beri kasete adım atmıyor; onun yerine dükkândaki hurdalardan robot yapıyor.",
      en: "The best scrap dealer and mechanic in the industrial zone, and deep in debt to the Company — shop, pier and ship all bought on promissory notes. He went into the first tape himself: twenty minutes inside, three days outside. He never set foot in a tape again. Instead, he builds robots out of his shop's junk.",
    },
  },
  {
    title: { tr: "Model G", en: "Model G" },
    text: {
      tr: "A patladı, B kaçtı, C sadece küfür ediyor, D çayı fazla seviyor, E kendini buzdolabı sanıyor, F'nin kafası şimdi G'nin gövdesinde. G çalışan ilk model — çoğunlukla. Oyuncular o robotlar.",
      en: "A exploded, B ran away, C only swears, D loves tea too much, E thinks it's a fridge, and F's head is now on G's body. G is the first model that works — mostly. The players are those robots.",
    },
  },
  {
    title: { tr: "Kayıttakiler", en: "The Recorded" },
    text: {
      tr: "Kaydedilen yerlerde ne varsa kasete o da girdi. Canavarlar kasetin kendileri için bir hapishane olduğunu anladılar ve robotların içeri girip geri çıkabildiğini fark ettiler.",
      en: "Whatever lived in the recorded places got taped too. The creatures realised the tape is their prison — and noticed that the robots can go in and come back out.",
    },
  },
];

export const rings: { ring: string; dist: string; island: L; cellar: L; sea: L }[] = [
  { ring: "1", dist: "0.8–1.5 km", island: { tr: "Küçük", en: "Small" }, cellar: { tr: "3–5 oda", en: "3–5 rooms" }, sea: { tr: "Yüzen hurda, balık sürüleri", en: "Floating scrap, fish schools" } },
  { ring: "2", dist: "1.5–2.5 km", island: { tr: "Orta", en: "Medium" }, cellar: { tr: "6–9 oda", en: "6–9 rooms" }, sea: { tr: "Köpekbalıkları, korsanlar", en: "Sharks, raiders" } },
  { ring: "3", dist: "2.5–3.5 km", island: { tr: "Büyük", en: "Large" }, cellar: { tr: "10+ oda + boss", en: "10+ rooms + boss" }, sea: { tr: "Dev ahtapot, tsunami", en: "Giant octopus, tsunami" } },
];

export const weathers: { tr: string; en: string; hazard?: boolean }[] = [
  { tr: "Açık", en: "Clear" }, { tr: "Güneşli", en: "Sunny" }, { tr: "Parçalı bulutlu", en: "Cloudy" }, { tr: "Kapalı", en: "Overcast" },
  { tr: "Sis", en: "Fog" }, { tr: "Pus", en: "Mist" }, { tr: "Çiseleme", en: "Drizzle" }, { tr: "Yağmur", en: "Rain" },
  { tr: "Fırtına", en: "Thunderstorm", hazard: true }, { tr: "Kar", en: "Snow" }, { tr: "Tipi", en: "Blizzard", hazard: true }, { tr: "Kum fırtınası", en: "Sandstorm", hazard: true },
  { tr: "Toz fırtınası", en: "Dust storm" }, { tr: "Asit yağmuru", en: "Acid rain", hazard: true }, { tr: "Rüzgârlı", en: "Windy" }, { tr: "Bora", en: "Gale", hazard: true },
  { tr: "Sıcak dalgası", en: "Heatwave", hazard: true }, { tr: "Dolu", en: "Hail", hazard: true }, { tr: "Karla karışık", en: "Sleet" }, { tr: "Dondurucu yağmur", en: "Freezing rain", hazard: true },
  { tr: "Hortum", en: "Tornado", hazard: true }, { tr: "Kül yağışı", en: "Ashfall", hazard: true }, { tr: "Duman", en: "Smog" }, { tr: "Kutup ışıkları", en: "Aurora" },
  { tr: "Gökkuşağı", en: "Rainbow" }, { tr: "Meteor yağmuru", en: "Meteor shower", hazard: true }, { tr: "Tutulma", en: "Eclipse" }, { tr: "Gece", en: "Night" },
  { tr: "Karartma", en: "Blackout", hazard: true },
];

export const weatherNotes: { title: L; text: L }[] = [
  { title: { tr: "Barınak", en: "Shelter" }, text: { tr: "Kafanın üstünde kaya, ağaç ya da çatı varsa yağış ve asit sana işlemez. Rüzgârın tersindeki duvar seni korur.", en: "Rock, canopy or roof over your head stops rain and acid. A wall upwind blocks the gale." } },
  { title: { tr: "Hortum", en: "Tornado" }, text: { tr: "Adada dolaşan, seni merkezine çeken bir huni. Sadece kapalı mekân ya da ağır kaya arkası kurtarır.", en: "A roaming funnel that drags you to its core. Only an enclosed room or a heavy boulder saves you." } },
  { title: { tr: "Karartma", en: "Blackout" }, text: { tr: "Ay yok. Tek ışık kaynağı elindeki fener. En gerilimli gece.", en: "No moon. Your flashlight is the only light. The tensest night there is." } },
];

/* ───────────────────────── Modeller ───────────────────────── */

export type ModelEntry = {
  id: string;
  name: L;
  role: L;
  text: L;
  /** true: mağaza lisanslı hazır model — 3B dosyası yayınlanmaz, render gösterilir */
  third?: boolean;
  stats?: { k: L; v: L | string }[];
  tags?: L[];
};

export const crew: ModelEntry[] = [
  {
    id: "robot-hurda-g",
    name: { tr: "HURDA-G (Model G)", en: "HURDA-G (Model G)" },
    role: { tr: "Oyuncu robotu", en: "Player robot" },
    text: {
      tr: "Scrap Master'ın dükkân hurdalarından yaptığı, kafasında kurma anahtarı olan küçük yeşil robot. Kaba, beceriksiz ve ölümüne sadık değil. Tırmanır, iki elle taşır, fırlatır, dans eder, küfür eder.",
      en: "A small green robot with a wind-up key on its head, built by Scrap Master from his shop's junk. Rude, clumsy and not loyal to the death. It climbs, carries with both hands, throws, dances and swears.",
    },
    stats: [
      { k: { tr: "Can", en: "Health" }, v: "100" },
      { k: { tr: "Ölüm", en: "Death" }, v: { tr: "Önce yere düşer, sonra ölür", en: "Downed first, then dead" } },
      { k: { tr: "Kafa", en: "Head" }, v: { tr: "Yuvarlak kafa ya da TV kafa", en: "Round head or TV head" } },
    ],
    tags: [
      { tr: "Duvar / merdiven / sarmaşık tırmanışı", en: "Wall / ladder / vine climbing" },
      { tr: "Fizik tabanlı tutma", en: "Physics grab" },
      { tr: "Aktif ragdoll", en: "Active ragdoll" },
      { tr: "Emote & dans", en: "Emotes & dance" },
      { tr: "Yakın sesli sohbet", en: "Proximity voice" },
      { tr: "Sırt çantası", en: "Backpack" },
    ],
  },
  {
    id: "scrap-master",
    name: { tr: "Scrap Master", en: "Scrap Master" },
    role: { tr: "Patron · dükkân · arena", en: "Boss · shop · arena" },
    text: {
      tr: "Hub'ın sahibi. Siparişleri hazırlar ve masasına teslim eder; telsizden nasihat, menüde not bırakır. Kota tutmazsa herkes altıgen arenada uyanır ve Scrap Master teker teker ilgilenir: ateş topu, kasırga tekmesi, uçan tekme. Arenaya her girişte saldırı tarzını bir kez seçer.",
      en: "Owner of the hub. He prepares orders and leaves them on his table; gives advice over the radio and leaves notes in the menu. Miss the quota and everyone wakes up in the hexagon arena, where Scrap Master deals with you one by one: fireball, hurricane kick, flying kick. He picks his attack style once per arena.",
    },
    stats: [
      { k: { tr: "Saldırılar", en: "Attacks" }, v: { tr: "Ateş topu · Kasırga tekmesi · Pontera", en: "Fireball · Hurricane Kick · Pontera" } },
      { k: { tr: "Menüdeki notu", en: "Menu note" }, v: { tr: "“Motor rölantide.”", en: "“Engine idling.”" } },
    ],
  },
  {
    id: "civata-k9",
    name: { tr: "Cıvata / K9", en: "Cıvata / K9" },
    role: { tr: "Yol dostu · hurda köpek", en: "Companion · scrap dog" },
    text: {
      tr: "Sırtında sepet taşıyan dört bacaklı hurda köpek. Yük alır, boşaltır, sahibine yetişir, kedi kovalar, düşer kalkar — ve her durum için konuşur: 100 replik, aynı cümleyi bitirmeden tekrar etmez. Dükkândan alınır.",
      en: "A four-legged scrap dog with a basket on its back. It loads, unloads, catches up with its owner, chases cats, falls and gets up — and has something to say about all of it: 100 lines, never repeating one before the set runs out. Bought from the shop.",
    },
    stats: [
      { k: { tr: "Fiyat", en: "Price" }, v: "2.500" },
      { k: { tr: "Replik", en: "Lines" }, v: "100" },
    ],
  },
  {
    id: "hamal",
    name: { tr: "HAMAL / 01", en: "HAMAL / 01" },
    role: { tr: "Uçan hurda taşıyıcı", en: "Hover scrap carrier" },
    text: {
      tr: "Dört rotorlu, açık hazneli uçan taşıyıcı. Kırmızı kulpundan çekilir, arka ekranında yükün değerini gösterir. Konuşur, sitem eder, ekiple dertleşir.",
      en: "A four-rotor hover carrier with an open hopper. Pull it by the red handle; the rear display shows the value of the load. It talks, complains and bonds with the crew.",
    },
    stats: [
      { k: { tr: "Hazne", en: "Hopper" }, v: "1.22 × 1.51 m" },
      { k: { tr: "Rotor", en: "Rotors" }, v: "4" },
    ],
  },
];

export const enemies: (ModelEntry & { tier: 1 | 2 | 3; telegraph: L; threat: L; counter: L })[] = [
  {
    id: "enemy-bloommaw", third: true, tier: 3,
    name: { tr: "Bloommaw", en: "Bloommaw" }, role: { tr: "Pusu · atılan", en: "Ambush · lunger" },
    text: { tr: "Pelerin kanatlı dev bir ağız. Köşelere ve tavanlara tüner.", en: "A giant mouth with cloak-like wings. Perches in corners and on ceilings." },
    telegraph: { tr: "Yaklaşınca ya da yanında hurda alınca kanatlarını açar.", en: "Spreads its wings when you get close or grab loot near it." },
    threat: { tr: "Dev ısırık hamlesi.", en: "A massive bite lunge." },
    counter: { tr: "Kanat açıldığı an yana kaç, mesafeni koru.", en: "Sidestep the moment the wings open; keep your distance." },
  },
  {
    id: "enemy-carrionfly", third: true, tier: 2,
    name: { tr: "Carrion Fly", en: "Carrion Fly" }, role: { tr: "Leş sineği · alan reddi", en: "Rot feeder · area denial" },
    text: { tr: "Dev bir leş sineği. Cesetlere ve yere düşmüş oyunculara üşüşür.", en: "A giant carrion fly. Swarms corpses and downed players." },
    telegraph: { tr: "Zikzak uçar, vurması zordur.", en: "Flies in zig-zags — hard to hit." },
    threat: { tr: "Üstüne yavaşlatan leş bulutu kusar.", en: "Vomits a slowing rot cloud on you." },
    counter: { tr: "Cesetten uzaklaş, dumandan çık.", en: "Move away from the body, get out of the cloud." },
  },
  {
    id: "enemy-fleshwing-maw", third: true, tier: 2,
    name: { tr: "Fleshwing Maw", en: "Fleshwing Maw" }, role: { tr: "Havadan dalış", en: "Aerial dive striker" },
    text: { tr: "Dili dışarıda, et kanatlı uçan bir ağız. Havada tur atar.", en: "A flying mouth with flesh wings and a lolling tongue. Circles overhead." },
    telegraph: { tr: "Hedefi görünce dalışa geçer.", en: "Locks on and starts a dive." },
    threat: { tr: "Dalış vuruşu; kaçırırsa kovalayıp ısırır.", en: "Dive strike; if it misses, it chases and bites." },
    counter: { tr: "Dalış hattından çekil, örtüye gir.", en: "Get off the dive line, take cover." },
  },
  {
    id: "enemy-gusareth", third: true, tier: 3,
    name: { tr: "Gusareth", en: "Gusareth" }, role: { tr: "Bakış avcısı", en: "Gaze stalker" },
    text: { tr: "Kambur bir gölge yaratık. Arkandan sokulur.", en: "A hunched shadow creature that creeps up behind you." },
    telegraph: { tr: "Dönüp bakınca donar ve geri çekilir.", en: "Freezes and backs off when you turn to look." },
    threat: { tr: "Yakalarsa ağır hasar.", en: "Heavy damage if it reaches you." },
    counter: { tr: "Ara sıra arkana bak — ya da biri arkayı kollasın.", en: "Check behind you — or have someone watch your back." },
  },
  {
    id: "enemy-mandiblade", third: true, tier: 2,
    name: { tr: "Mandiblade", en: "Mandiblade" }, role: { tr: "Bıçak çeneli böcek", en: "Blade-jawed bug" },
    text: { tr: "Bıçak çeneli, hızlı bir karınca-böcek.", en: "A fast ant-like bug with blade jaws." },
    telegraph: { tr: "Düz bir hatta atılmadan önce hizalanır.", en: "Lines up before dashing in a straight line." },
    threat: { tr: "Geçerken çenesini savurur.", en: "Slashes with its jaws as it passes." },
    counter: { tr: "Dash hattından yana sıçra.", en: "Jump sideways out of the dash line." },
  },
  {
    id: "enemy-necrothread", third: true, tier: 3,
    name: { tr: "Necrothread", en: "Necrothread" }, role: { tr: "Yakala · sabitle", en: "Grab · immobilize" },
    text: { tr: "Çürüyen etten iplik ören bir örümcek.", en: "A spider weaving thread out of rotting flesh." },
    telegraph: { tr: "Yapışkan ipliğini fırlatır.", en: "Spits its sticky thread." },
    threat: { tr: "Seni yere sabitleyip yavaşça kendine çeker.", en: "Pins you down and slowly reels you in." },
    counter: { tr: "Arkadaşın ipi kesip seni kurtarır.", en: "A teammate cuts the thread to free you." },
  },
  {
    id: "enemy-oculith-weaver", third: true, tier: 2,
    name: { tr: "Oculith Weaver", en: "Oculith Weaver" }, role: { tr: "Gözlü tavan örümceği", en: "Eyed ceiling weaver" },
    text: { tr: "Dev tek gözlü, dokunaçlı bir tavan yaratığı.", en: "A ceiling creature with one giant eye and tentacles." },
    telegraph: { tr: "Ona bakılırken donuk ve zararsızdır.", en: "Inert and harmless while someone looks at it." },
    threat: { tr: "Gözünü kaçırınca üstüne düşer, ağ atar.", en: "Look away and it drops on you and webs you." },
    counter: { tr: "Biri ona baksın; sen yandan geç.", en: "Someone keeps eye contact; you slip past." },
  },
  {
    id: "enemy-thalorak", third: true, tier: 3,
    name: { tr: "Thalorak", en: "Thalorak" }, role: { tr: "Su / kara avcısı", en: "Amphibious hunter" },
    text: { tr: "Dikenli sırtlı bir derinlik canavarı. Suda da karada da peşindedir.", en: "A spine-backed abyssal beast. It hunts you in water and on land." },
    telegraph: { tr: "Suda serbestçe yüzerek yaklaşır.", en: "Closes in by swimming freely through water." },
    threat: { tr: "Karaya çıkınca koşarak kovalar ve parçalar.", en: "On land it runs you down and mauls you." },
    counter: { tr: "Sudan hızla çık, yüksek zemine tırman.", en: "Get out of the water fast, climb to high ground." },
  },
  {
    id: "enemy-vexscar", third: true, tier: 2,
    name: { tr: "Vexscar", en: "Vexscar" }, role: { tr: "Zehirli akrep", en: "Venom scorpion" },
    text: { tr: "Alçakta saklanan dev bir akrep.", en: "A giant scorpion lurking low." },
    telegraph: { tr: "Kuyruğunu kaldırıp germe hamlesi.", en: "Raises and cocks its tail." },
    threat: { tr: "Sokma zehirler, can zamanla erir.", en: "The sting poisons you over time." },
    counter: { tr: "Sokmadan sonraki pencerede vur ya da kaç; arındırıcı taşı.", en: "Hit or run in the window after a sting; carry a purifier." },
  },
  {
    id: "enemy-vyrkael-dragon", third: true, tier: 3,
    name: { tr: "Vyrkael", en: "Vyrkael" }, role: { tr: "Mini boss · ejderha", en: "Mini-boss · dragon" },
    text: { tr: "Et yiyen uçan ejderha. Tepede tur atar.", en: "A flesh-eating dragon circling overhead." },
    telegraph: { tr: "Dalışa geçmeden önce alçalır.", en: "Drops altitude before a dive." },
    threat: { tr: "Bir oyuncuyu kapıp yükseğe bırakır; kısa ateş konisi.", en: "Snatches a player and drops them from height; short fire cone." },
    counter: { tr: "Menzilli vur, örtüye gir, düşerken jet bot kullan.", en: "Shoot from range, take cover, use jet boots on the way down." },
  },
  {
    id: "enemy-wyrm-ashvoid", third: true, tier: 3,
    name: { tr: "Kül Boşluğu Solucanı", en: "Wyrm of the Ash Void" }, role: { tr: "Yeraltı pususu", en: "Burrowing ambush" },
    text: { tr: "Yerin altında süzülen kanatlı bir kül yılanı.", en: "A winged ash serpent gliding beneath the ground." },
    telegraph: { tr: "Yerden gümbürtü gelir.", en: "The ground rumbles." },
    threat: { tr: "Bir oyuncunun altından fışkırır, sonra yeniden dalar.", en: "Bursts up under a player, then dives again." },
    counter: { tr: "Gümbürtü anında yer değiştir.", en: "Move the moment you feel the rumble." },
  },
  {
    id: "eq-twinleech", tier: 1,
    name: { tr: "Bağlayıcı Solucan", en: "Binder Worm" }, role: { tr: "İki uçlu bağlayıcı", en: "Two-headed binder" },
    text: { tr: "İki ucu da ağız olan bir solucan. Adada ve tır adasında hafif kademe düşman olarak çıkar.", en: "A worm with a mouth at both ends. Shows up as a light-tier enemy on islands." },
    telegraph: { tr: "Yere sürünerek bir oyuncuya yapışır.", en: "Crawls over and latches onto a player." },
    threat: { tr: "Seni en yakın ikinci oyuncuya bağlar — birbirinizden uzaklaşamazsınız.", en: "Chains you to the nearest second player — you can't move apart." },
    counter: { tr: "Şok çubuğu solucanı düşürür, bağı koparır.", en: "A shock baton knocks it off and breaks the bond." },
  },
];

export const bosses: { id: string; name: L; text: L; stat: L }[] = [
  {
    id: "wild-vinc-ahtapot",
    name: { tr: "Vinç Ahtapot", en: "Crane Octopus" },
    text: {
      tr: "Denizin dev boss'u. Gemiyi kollarıyla yakalar, güverteye uzanır, oyuncuları iter. Ortak boss can barı herkesin ekranında görünür. Oltanla şanssız bir an da onu çağırabilir.",
      en: "The sea's giant boss. It grabs the ship with its arms, reaches over the deck and shoves players around. A shared boss health bar shows on every screen. An unlucky moment with your fishing rod can summon it too.",
    },
    stat: { tr: "2.600 can · 14 m/sn takip", en: "2,600 HP · 14 m/s pursuit" },
  },
  {
    id: "scrap-master",
    name: { tr: "Scrap Master (arena)", en: "Scrap Master (arena)" },
    text: {
      tr: "Kota tutmazsa altıgen arenada uyanırsınız. Süre dolana ya da herkes düşene kadar dövüş sürer; son kalan ustanın gözüne girer.",
      en: "Miss the quota and you wake up in the hexagon arena. The fight lasts until the timer ends or everyone drops; the last one standing earns his respect.",
    },
    stat: { tr: "Ateş topu · kasırga tekmesi · pontera", en: "Fireball · hurricane kick · pontera" },
  },
];

export const wildlife: (ModelEntry & { kind: "jumper" | "breacher" | "swooper" | "ambient" | "boss" | "land" })[] = [
  { id: "wild-somun-sardalya", kind: "jumper", name: { tr: "Somun Sardalya", en: "Nut Sardine" }, role: { tr: "Sürü balığı", en: "Schooling fish" }, text: { tr: "Somun gövdeli küçük balıklar. Sürü halinde sudan gemiye zıplar, güvertede çırpınır. Öldürülünce hurda bırakır.", en: "Little nut-bodied fish. They leap from the sea onto the deck in schools and flop around. Drop scrap when killed." } },
  { id: "wild-testere-piranha", kind: "jumper", name: { tr: "Testere Piranha", en: "Saw Piranha" }, role: { tr: "Isıran zıplayıcı", en: "Biting jumper" }, text: { tr: "Testere dişli piranha. Gemiye zıplar ve ısırır.", en: "A saw-toothed piranha. Jumps aboard and bites." } },
  { id: "wild-fener-baligi", kind: "jumper", name: { tr: "Fener Balığı", en: "Lantern Fish" }, role: { tr: "Fenerli derin balık", en: "Lantern deep-sea fish" }, text: { tr: "Kafasında lamba sallanan şişman bir fener balığı. Nadiren çıkar.", en: "A chunky anglerfish with a lamp dangling from its head. Rare." } },
  { id: "wild-civata-ahtapot", kind: "jumper", name: { tr: "Cıvata Ahtapot", en: "Bolt Octopus" }, role: { tr: "Yakalayan küçük ahtapot", en: "Grabbing octopus" }, text: { tr: "Sekiz kollu küçük ahtapot. Gemiye çıkar, uzanır, yakalar ve bırakır.", en: "A small eight-armed octopus. Climbs aboard, reaches, grabs and lets go." } },
  { id: "wild-zirhli-kopekbaligi", kind: "breacher", name: { tr: "Zırhlı Köpekbalığı", en: "Armored Shark" }, role: { tr: "Bordadan sıçrar", en: "Breaches the hull side" }, text: { tr: "5,7 metrelik zırhlı köpekbalığı. Bordanın yanından sudan sıçrar, ısırır.", en: "A 5.7 m armored shark. Breaches beside the hull and bites." } },
  { id: "wild-miknatis-vatoz", kind: "breacher", name: { tr: "Mıknatıs Vatoz", en: "Magnet Ray" }, role: { tr: "Bordadan sıçrar", en: "Breaches the hull side" }, text: { tr: "Kablo kuyruklu, mıknatıs kanatlı vatoz.", en: "A ray with magnet wings and a cable tail." } },
  { id: "wild-iskele-leylegi", kind: "swooper", name: { tr: "İskele Leyleği", en: "Pier Stork" }, role: { tr: "Kaldıran kuş", en: "The lifter" }, text: { tr: "Oyuncuyu ayaklarından kapıp yükselir, götürür ve bırakır. Gagalar. Vurulunca bırakıp kaçar.", en: "Grabs a player by the feet, lifts off, carries them away and drops them. Pecks. Lets go and flees when shot." } },
  { id: "wild-teneke-marti", kind: "swooper", name: { tr: "Teneke Martı", en: "Tin Gull" }, role: { tr: "Eşya hırsızı", en: "Item thief" }, text: { tr: "Yerdeki eşyayı dalıp kapar, uzaklaşır ve havadan bırakır — eşya düşüp hasar alır.", en: "Dives for items on the ground, flies off and drops them from the air — they take damage on impact." } },
  { id: "wild-geveze-papagan", kind: "swooper", name: { tr: "Geveze Papağan", en: "Chatty Parrot" }, role: { tr: "Alaycı", en: "The heckler" }, text: { tr: "Konuşur, alay eder: “Bir eşyayı bile toplayamıyorsunuz!” Yerdeki eşyayı gagalayıp değerini düşürür. Telsiz bozulursa onu suçlamayın.", en: "Talks and mocks you: “You can't even pick up one item!” Pecks loot on the ground and lowers its value. Don't blame it when the radio breaks." } },
  { id: "wild-kazan-balina", kind: "ambient", name: { tr: "Kazan Balina", en: "Boiler Whale" }, role: { tr: "Uzaktaki dev", en: "Distant giant" }, text: { tr: "12 metrelik kazan gövdeli balina. Yüzeye çıkar, sırtındaki valften buhar püskürtür, dalar.", en: "A 12 m whale with a boiler body. Surfaces, blows steam from its back valve and dives." } },
  { id: "wild-vinc-ahtapot", kind: "boss", name: { tr: "Vinç Ahtapot", en: "Crane Octopus" }, role: { tr: "Deniz boss'u", en: "Sea boss" }, text: { tr: "Gemiye saldıran dev ahtapot. Kollarını güverteye uzatır.", en: "The giant octopus that attacks the ship, reaching over the deck." } },
  {
    id: "scrap-goat", kind: "land", name: { tr: "Hurda Keçi", en: "Scrap Goat" }, role: { tr: "Tos atan keçi", en: "The headbutter" },
    text: {
      tr: "Boynuzlu, dört bacaklı hurda keçi. Kendi alanında dolaşır; 9 metre içinde seni görürse bağırır, bir an hedef alır ve hücum eder. Tosu yiyen ragdoll olup 4,5 saniye yerde kalır.",
      en: "A horned, four-legged scrap goat. It wanders its patch; spot you within 9 m and it screams, takes aim for a beat and charges. Whoever eats the headbutt ragdolls for 4.5 seconds.",
    },
    stats: [
      { k: { tr: "Fark etme", en: "Notice" }, v: "9 m" },
      { k: { tr: "Savurma", en: "Knockback" }, v: "13" },
      { k: { tr: "Yerde", en: "Down" }, v: "4.5 sn" },
    ],
  },
];

export const wildRoles: Record<string, L> = {
  jumper: { tr: "Zıplayan", en: "Jumper" },
  breacher: { tr: "Sıçrayan", en: "Breacher" },
  swooper: { tr: "Dalan kuş", en: "Swooper" },
  ambient: { tr: "Ortam", en: "Ambient" },
  boss: { tr: "Boss", en: "Boss" },
  land: { tr: "Kara", en: "Land" },
};

/* ───────────────────────── Gemi ───────────────────────── */

export const ship: ModelEntry[] = [
  {
    id: "hurda-ferry",
    name: { tr: "Hurda Feribot", en: "Scrap Ferry" },
    role: { tr: "Ekibin evi", en: "The crew's home" },
    text: {
      tr: "Yelken yok, çapa yok: iki uçta 360° dönen iticiler. Gaz kolu makine telgrafı gibi bıraktığın yerde kalır, A/D ile gemi dururken bile yerinde döner. Pruva rampası iner, tır güverteye çıkar. Kaptan köşkü, balkon, kanepe ve televizyon — evet, televizyon.",
      en: "No sails, no anchor: thrusters at both ends that turn 360°. The throttle stays where you leave it like an engine telegraph, and A/D spins the ship in place even at a standstill. The bow ramp drops, the truck drives on deck. Wheelhouse, balcony, sofa and a TV — yes, a TV.",
    },
    stats: [
      { k: { tr: "Azami hız", en: "Top speed" }, v: { tr: "10 m/sn (~19 knot)", en: "10 m/s (~19 knots)" } },
      { k: { tr: "Geri", en: "Reverse" }, v: "4.5 m/s" },
      { k: { tr: "Yerinde dönüş", en: "Turn in place" }, v: "22°/s" },
    ],
  },
  {
    id: "truck-carrier",
    name: { tr: "Tır taşıyıcı", en: "Truck Carrier" },
    role: { tr: "Güvertedeki tır", en: "The truck on deck" },
    text: {
      tr: "Scrap Master'ın tırı rampadan güverteye çıkar, dört tekeri basınca gemiye kilitlenir ve sıfır kaymayla gider. Tır adasında iner, yükünü toplar, geri biner.",
      en: "Scrap Master's truck drives up the ramp; once four wheels are on deck it locks to the ship and rides without slipping. It rolls off on truck islands, loads up and drives back on.",
    },
  },
  {
    id: "scrap-raider",
    name: { tr: "Hurda Korsan Botu", en: "Scrap Raider" },
    role: { tr: "Deniz baskını", en: "Sea raid" },
    text: {
      tr: "Uzaktan motor sesi, sonra yaklaşan küçük bir hurda bot. Yanına açı alır, silahlı hurda robotlar kısa seriler sıkar, güvertede su fışkırtan çatlaklar açılır. Ateş edenleri indir, çatlakları çekiçle yamala.",
      en: "An engine whine on the horizon, then a small scrap boat closing in. It pulls alongside, armed scrap robots fire short bursts and leaks start spraying on deck. Take out the shooters, hammer the leaks shut.",
    },
    stats: [{ k: { tr: "Boy", en: "Length" }, v: "6.37 m" }],
  },
  {
    id: "hurda-press",
    name: { tr: "Hurda presi", en: "Scrap Press" },
    role: { tr: "Hub", en: "Hub" },
    text: { tr: "Hub'daki pres; hurda burada ezilir, tartılır ve hesaba yazılır.", en: "The press at the hub: scrap gets crushed, weighed and credited here." },
  },
  {
    id: "hurda-cart",
    name: { tr: "Hurda arabası", en: "Scrap Cart" },
    role: { tr: "Taşıma", en: "Hauling" },
    text: { tr: "Küçük, orta ve büyük boyda el arabası. Tek elle taşınmayanı buna yükle.", en: "Small, medium and large carts. Whatever won't fit in your hands goes in here." },
  },
];

export const seaEvents: { title: L; text: L; stat: L }[] = [
  {
    title: { tr: "Tsunami", en: "Tsunami" },
    text: { tr: "Açık denizde rastgele bir yönden dev dalga gelir; gemi tepeye çıkar, sürüklenir, arkadaki çukura iner. Yüzenler de aynı dalgayı yaşar.", en: "A giant wave rolls in from a random direction on open sea; the ship rides the crest, gets dragged along and drops into the trough. Swimmers feel it too." },
    stat: { tr: "9 m · 14 m/sn · 760 m cephe", en: "9 m · 14 m/s · 760 m front" },
  },
  {
    title: { tr: "Girdap", en: "Vortex" },
    text: { tr: "Eve dönüş yolu. 30 m derin bir huni açılır, gemi kendi etrafında 95°/sn'ye kadar döner ve VHS kesmesiyle hub'a varır. Hub'dan 6 km uzaklaşırsan kendiliğinden açılır.", en: "The ride home. A 30 m deep funnel opens, the ship spins up to 95°/s and cuts to the hub through VHS static. Sail 6 km from the hub and it opens on its own." },
    stat: { tr: "6 km sınır · 30 m derinlik", en: "6 km limit · 30 m deep" },
  },
  {
    title: { tr: "Vahşi yaşam dalgaları", en: "Wildlife waves" },
    text: { tr: "Güvenli bölgeden çıkınca balık sürüleri gemiye zıplar, köpekbalıkları bordadan sıçrar, kuşlar tepeden dalar. Oltayla balık tutabilirsin — ama şanssız bir atış boss'u çağırır.", en: "Leave the safe zone and fish schools leap aboard, sharks breach the sides, birds dive from above. You can fish with a rod — but an unlucky cast summons the boss." },
    stat: { tr: "Sürü, dalış, sıçrama", en: "Schools, dives, breaches" },
  },
  {
    title: { tr: "Korsan baskını", en: "Raider attack" },
    text: { tr: "Hurda korsan botu yanaşır, kısa seriler ve su alan çatlaklar. Tamiri ihmal eden gemi ağırlaşır ve yavaşlar.", en: "A scrap raider pulls alongside: short bursts and leaking cracks. Neglect the repairs and the ship gets heavy and slow." },
    stat: { tr: "Çekiç + yama", en: "Hammer + patch" },
  },
];

export const menuShowcase: { title: L; text: L }[] = [
  { title: { tr: "Dümenci", en: "Helmsman" }, text: { tr: "Kaptan koltuğunda, elleri çarkta. Gemi kıvrıldıkça çark kendiliğinden döner.", en: "In the captain's seat, hands on the wheel. The wheel turns as the ship weaves." } },
  { title: { tr: "Sigaracı", en: "Smoker" }, text: { tr: "Üst kattaki balkon koltuğunda. Sigaradan ince duman, arada ağzından üfler.", en: "On the upper balcony seat. Thin smoke from the cigarette, a puff every few seconds." } },
  { title: { tr: "Yağ akıtan", en: "Oil leaker" }, text: { tr: "Güvertede ayakta, kapağını açar ve siyah yağ akıtır; gölcük büyür. Bitince silkelenir, ıslık çalar gibi göğe bakar.", en: "Standing on deck, it pops its hatch and leaks black oil into a growing puddle. Shakes off, then looks at the sky like it's whistling." } },
  { title: { tr: "TV izleyen", en: "TV watcher" }, text: { tr: "Kanepede. Eski televizyon birkaç saniyede bir kanal değiştirir, mavi-sarı CRT ışığı yüzüne vurur.", en: "On the sofa. The old TV flips channels every few seconds, blue-yellow CRT glow on its face." } },
];

/* ───────────────────────── TAB terminali ───────────────────────── */

export const headVariants: ModelEntry[] = [
  {
    id: "robot-hurda-g",
    name: { tr: "Yuvarlak hurda kafa", en: "Round scrap head" },
    role: { tr: "Kafa tipi 1 · dinamik yüz", en: "Head type 1 · dynamic face" },
    text: {
      tr: "Kafatası yüzlü, kurmalı anahtarlı yeşil kafa. Çene sesinle açılıp kapanır, gözler konuşan arkadaşına döner, yüksek seste kısılır.",
      en: "The skull-faced green head with the wind-up key. The jaw flaps with your voice, the eyes turn to whoever is talking and squint when it gets loud.",
    },
  },
  {
    id: "robot-panel-round",
    name: { tr: "Panelli kafa · yuvarlak", en: "Panel head · round" },
    role: { tr: "Kafa tipi 2 · ekran yüz", en: "Head type 2 · screen face" },
    text: {
      tr: "Yuvarlak CRT ekranlı kafa. Yüz 64×64 piksellik ekrana çizilir: kendi yazın ya da sesine göre değişen otomatik ifadeler.",
      en: "A round CRT screen head. The face is drawn on a 64×64 pixel screen: your own text or automatic expressions that follow your voice.",
    },
  },
  {
    id: "robot-panel-square",
    name: { tr: "Panelli kafa · kare", en: "Panel head · square" },
    role: { tr: "Kafa tipi 3 · tüplü TV", en: "Head type 3 · tube TV" },
    text: {
      tr: "Antenli tüplü TV kafa. Aynı ekran yüzü; sigara ve şişe emote'unda eşya ekranın içinde, ağzında sallanır.",
      en: "A tube-TV head with an antenna. Same screen face; with the cigarette and bottle emotes the item dangles from the mouth inside the screen.",
    },
  },
];

export const terminalTabs: { key: string; name: L; text: L; points: L[] }[] = [
  {
    key: "map",
    name: { tr: "Harita", en: "Map" },
    text: {
      tr: "Bulunduğun yere göre kendini değiştiren retro harita. Rüzgâr varsa dalgalar onun yönünde akar, köşede pusula döner.",
      en: "A retro map that changes with where you are. Waves drift with the wind, a compass turns in the corner.",
    },
    points: [
      { tr: "AÇIK DENİZ: hub ve girdap, feribot, tır, HAMAL ve ekip işaretleri", en: "OPEN SEA: hub and vortex, ferry, truck, HAMAL and crew markers" },
      { tr: "ADA: adanın tamamı — kıyı, binalar, mahzen girişi", en: "ISLAND: the whole island — shore, buildings, cellar entrance" },
      { tr: "MAHZEN: odalar, merdiven ve çıkış", en: "CELLAR: rooms, stairs and exit" },
      { tr: "Hava cephesi: YAKLAŞIYOR · ZİRVEDE · DİNİYOR · SAKİN", en: "Weather front: APPROACHING · PEAK · EASING · CALM" },
    ],
  },
  {
    key: "character",
    name: { tr: "Karakter", en: "Character" },
    text: {
      tr: "Canlı 3B portre: sürükleyip çevir, tekerlek ya da iki parmakla yakınlaş. Görünüm, kafa tipi, panel şekli, yüz ve kostüm buradan seçilir.",
      en: "A live 3D portrait: drag to turn, wheel or pinch to zoom. Skin, head type, panel shape, face and outfit are all picked here.",
    },
    points: [
      { tr: "Görünüm: YEŞİL HURDA · METALİK GRİ", en: "Skin: GREEN SCRAP · METALLIC GREY" },
      { tr: "Kafa tipi: yuvarlak hurda kafa ya da panelli kafa (yuvarlak / kare panel)", en: "Head type: round scrap head or panel head (round / square panel)" },
      { tr: "Yüz düzenle: kendi yüzüm (4 karakter, 8 hazır yüz, döndür, boyut) ya da otomatik yüz; 7 ekran rengi", en: "Edit face: my own face (4 characters, 8 presets, rotate, size) or auto face; 7 screen colours" },
      { tr: "Kostüm / aksesuar: şapka-baş, gövde-kostüm, omuzluk, eldiven, dizlik, sırt aksesuarı", en: "Outfit / accessories: hat-head, body-costume, shoulders, gloves, knee pads, back accessory" },
    ],
  },
  {
    key: "stats",
    name: { tr: "Özellikler", en: "Stats" },
    text: {
      tr: "Robotun durumu, geliştirmeleri ve havanın sana ne yaptığı.",
      en: "Your robot's condition, its upgrades and what the weather is doing to you.",
    },
    points: [
      { tr: "Özellikler & durum: seviye, hasar çarpanı, can, enerji; karada / suda / devre dışı", en: "Stats & status: level, damage multiplier, health, energy; on land / in water / disabled" },
      { tr: "Geliştirmeler: kalıcı karakter yükseltmeleri", en: "Upgrades: permanent character upgrades" },
      { tr: "Hava rehberi: aktif etkiler, birikim ve çözülme; açık alanda mısın, çatı altında mı, içeride mi", en: "Weather guide: active effects, build-up and thaw; are you outdoors, under a roof or inside" },
    ],
  },
  {
    key: "bot",
    name: { tr: "Bot", en: "Bot" },
    text: {
      tr: "Feribotun otomatik pilotu. Kuzeyi yukarıda bir deniz haritası, en yakın adalar ve planlanan ada yerleri.",
      en: "The ferry's autopilot. A north-up sea chart, the nearest islands and planned island sites.",
    },
    points: [
      { tr: "BOTU ÇAĞIR: feribot sana gelsin", en: "CALL THE BOAT: bring the ferry to you" },
      { tr: "Haritadan nokta seç → NOKTAYA OTOPİLOT · OTOPİLOTU DURDUR", en: "Pick a point on the chart → AUTOPILOT TO POINT · STOP AUTOPILOT" },
      { tr: "Her ada için GİRDAP ya da OTOPİLOT; HUB'A DÖN iki basışla onaylanır", en: "VORTEX or AUTOPILOT per island; RETURN TO HUB confirms with two presses" },
      { tr: "UYARILAR: tsunami, girdap, boss — kaç saniye önce olduğuyla", en: "ALERTS: tsunami, vortex, boss — with how many seconds ago" },
    ],
  },
  {
    key: "gallery",
    name: { tr: "Galeri", en: "Gallery" },
    text: {
      tr: "Saha fotoğrafları. Ön ya da arka kamerayla çek, kişisel galeride önceki/sonraki ile gez.",
      en: "Field photos. Shoot with the front or back camera, flip through your personal gallery.",
    },
    points: [
      { tr: "FOTOĞRAF ÇEK · ÖN KAMERA · ARKA KAMERA", en: "TAKE PHOTO · FRONT CAMERA · BACK CAMERA" },
      { tr: "Kişisel fotoğraf galerisi, yenile, önceki / sonraki", en: "Personal photo gallery, refresh, previous / next" },
    ],
  },
];

/* ───────────────────────── Videolar ───────────────────────── */

export const videos: { id: string; title: L; text: L; tab: string }[] = [
  {
    id: "bbVvlUIwyEk", tab: "world",
    title: { tr: "Ada üretimi testi", en: "Island generation test" },
    text: { tr: "Seed'den üretilen adalar: kıyı, kayalar, yollar ve hurda yığınları.", en: "Seed-generated islands: shoreline, rocks, roads and scrap piles." },
  },
  {
    id: "j-HVt-JWd9c", tab: "enemies",
    title: { tr: "Yeni yapay zekâ takip algoritması", en: "New AI tracking algorithm" },
    text: { tr: "Düşmanların seni bulma ve kovalama biçimi.", en: "How enemies find you and chase you down." },
  },
  {
    id: "Z2LoQtpKA30", tab: "crew",
    title: { tr: "Hareket güncellemesi testi", en: "Locomotion update test" },
    text: { tr: "Robotun yürüme, koşma ve tırmanma güncellemesi.", en: "The robot's updated walking, running and climbing." },
  },
];
