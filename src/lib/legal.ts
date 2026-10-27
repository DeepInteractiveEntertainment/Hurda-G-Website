import type { L } from "./i18n";

/* Hizmet Koşulları ve Gizlilik Politikası — HURDA-G oyunu, hurda-g.com ve HURDA-G Discord uygulaması.
   Discord Geliştirici Portalı'ndaki "Hizmet Koşulları URL'si" ve "Gizlilik Politikası URL'si" bu sayfalara işaret eder. */

export const LEGAL_UPDATED = "2026-10-27";
export const LEGAL_EMAIL = "deepinteractiveentertainment@gmail.com";

export type LegalSection = { title: L; body: L[] };

export const terms: { title: L; intro: L; sections: LegalSection[] } = {
  title: { tr: "Hizmet Koşulları", en: "Terms of Service" },
  intro: {
    tr: "Bu koşullar; HURDA-G oyununu, hurda-g.com web sitesini ve HURDA-G Discord uygulamasını (birlikte \"Hizmetler\") kullanımını düzenler. Hizmetleri kullanarak bu koşulları kabul etmiş olursun. Hizmetleri Deep Interactive Entertainment (İstanbul, Türkiye) sunar.",
    en: "These terms govern your use of the HURDA-G game, the hurda-g.com website and the HURDA-G Discord application (together, the \"Services\"). By using the Services you agree to these terms. The Services are provided by Deep Interactive Entertainment (Istanbul, Türkiye).",
  },
  sections: [
    {
      title: { tr: "1. Hesaplar ve platformlar", en: "1. Accounts and platforms" },
      body: [
        {
          tr: "Oyuna Steam, Epic Online Services, Apple ile Giriş veya Google Play Oyunlar gibi platform hesaplarıyla girersin. Bu hesapların kullanımı ilgili platformun kendi koşullarına da tabidir. Hesabının güvenliğinden sen sorumlusun.",
          en: "You sign in to the game with platform accounts such as Steam, Epic Online Services, Sign in with Apple or Google Play Games. Use of those accounts is also subject to each platform's own terms. You are responsible for keeping your account secure.",
        },
      ],
    },
    {
      title: { tr: "2. Lisans", en: "2. Licence" },
      body: [
        {
          tr: "Sana HURDA-G'yi kişisel ve ticari olmayan amaçlarla oynaman için kişiye özel, devredilemez, münhasır olmayan ve geri alınabilir bir lisans veriyoruz. Oyunun, modellerin, seslerin, kodun ve markanın tüm hakları Deep Interactive Entertainment'a ya da lisans verenlerine aittir.",
          en: "We grant you a personal, non-transferable, non-exclusive, revocable licence to play HURDA-G for personal, non-commercial purposes. All rights in the game, models, audio, code and brand belong to Deep Interactive Entertainment or its licensors.",
        },
        {
          tr: "Oyundan video, yayın ve ekran görüntüsü paylaşabilirsin; bunlardan para kazanmana da izin veriyoruz, yeter ki içerik oyunu yanlış tanıtmasın ve oyun dosyalarını dağıtmasın.",
          en: "You may share videos, streams and screenshots of the game and monetise them, as long as the content does not misrepresent the game or distribute game files.",
        },
      ],
    },
    {
      title: { tr: "3. Davranış kuralları", en: "3. Code of conduct" },
      body: [
        {
          tr: "Hile, açık kötüye kullanımı, başka oyuncuların deneyimini bozacak yazılımlar, taciz, nefret söylemi ve yasa dışı içerik yasaktır. Oyundaki kaba mizah kurgusaldır; gerçek kişilere yönelik hakaret kabul edilmez. Yakın sesli sohbette ve Discord'da da aynı kurallar geçerlidir.",
          en: "Cheating, exploit abuse, software that ruins other players' experience, harassment, hate speech and illegal content are not allowed. The game's crude humour is fiction; abuse aimed at real people is not. The same rules apply in proximity voice chat and on Discord.",
        },
        {
          tr: "Kuralları ihlal eden hesapları uyarmak, geçici ya da kalıcı olarak engellemek hakkımız saklıdır.",
          en: "We may warn, temporarily suspend or permanently ban accounts that break these rules.",
        },
      ],
    },
    {
      title: { tr: "4. Oyun içi satın alımlar", en: "4. In-game purchases" },
      body: [
        {
          tr: "Mobil sürümde uygulama içi satın alımlar App Store veya Google Play üzerinden yapılır ve ödeme ile iadeler o mağazanın kurallarına tabidir. Oyun içi para (hurda) ve eşyaların gerçek parayla karşılığı yoktur, devredilemez ve satılamaz.",
          en: "On mobile, in-app purchases are processed by the App Store or Google Play, and payments and refunds follow that store's rules. In-game currency (scrap) and items have no real-money value and cannot be transferred or sold.",
        },
      ],
    },
    {
      title: { tr: "5. Discord uygulaması", en: "5. Discord application" },
      body: [
        {
          tr: "HURDA-G Discord uygulaması yalnızca oyun açıkken Discord profilinde \"HURDA-G oynuyor\" gibi oyun durumunu (Rich Presence) göstermek için kullanılır. Bunu Discord'un Etkinlik Gizliliği ayarlarından istediğin zaman kapatabilirsin. Discord'un kendi Hizmet Koşulları da geçerlidir.",
          en: "The HURDA-G Discord application is used only to show your game status on your Discord profile (Rich Presence), such as \"Playing HURDA-G\", while the game is running. You can turn this off at any time in Discord's Activity Privacy settings. Discord's own Terms of Service also apply.",
        },
      ],
    },
    {
      title: { tr: "6. Geliştirme aşaması ve değişiklikler", en: "6. Development and changes" },
      body: [
        {
          tr: "HURDA-G geliştirme aşamasındadır. Özellikler, dengeler ve içerik önceden haber verilmeden değişebilir; test sürümlerinde kayıtlar sıfırlanabilir. Bu koşulları güncelleyebiliriz; güncel tarih sayfanın başında yazar.",
          en: "HURDA-G is in development. Features, balance and content may change without notice, and saves may be reset in test builds. We may update these terms; the current date is shown at the top of this page.",
        },
      ],
    },
    {
      title: { tr: "7. Sorumluluk", en: "7. Liability" },
      body: [
        {
          tr: "Hizmetler \"olduğu gibi\" sunulur. Yürürlükteki hukukun izin verdiği ölçüde, hizmetlerin kesintisiz veya hatasız olacağını garanti etmeyiz ve dolaylı zararlardan sorumlu değiliz. Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir; tüketici olarak sahip olduğun zorunlu haklar saklıdır.",
          en: "The Services are provided \"as is\". To the extent permitted by law, we do not guarantee that they will be uninterrupted or error-free and are not liable for indirect damages. These terms are governed by the laws of the Republic of Türkiye; your mandatory consumer rights are not affected.",
        },
      ],
    },
  ],
};

export const privacy: { title: L; intro: L; sections: LegalSection[] } = {
  title: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
  intro: {
    tr: "Bu politika; HURDA-G oyununu, hurda-g.com web sitesini ve HURDA-G Discord uygulamasını kullanırken hangi bilgilerin işlendiğini ve neden işlendiğini açıklar. Veri sorumlusu Deep Interactive Entertainment'tır (İstanbul, Türkiye).",
    en: "This policy explains what information is processed, and why, when you use the HURDA-G game, the hurda-g.com website and the HURDA-G Discord application. The data controller is Deep Interactive Entertainment (Istanbul, Türkiye).",
  },
  sections: [
    {
      title: { tr: "1. Oyunda işlenen bilgiler", en: "1. Information processed in the game" },
      body: [
        {
          tr: "Hesap bilgileri: Giriş yaptığın platformdan (Steam, Epic Online Services, Apple, Google Play Oyunlar) gelen hesap kimliği ve görünen ad. Şifreni hiçbir zaman görmeyiz.",
          en: "Account information: the account ID and display name from the platform you sign in with (Steam, Epic Online Services, Apple, Google Play Games). We never see your password.",
        },
        {
          tr: "Oyun verileri: kayıt slotları, ekip seviyesi, hurda bakiyesi, açılan eşyalar, kostüm ve yüz ekranı seçimleri. Bunlar cihazında ve Epic Online Services oyuncu depolamasında tutulur.",
          en: "Game data: save slots, crew level, scrap balance, unlocked items, outfit and face screen choices. These are stored on your device and in Epic Online Services player storage.",
        },
        {
          tr: "Çok oyunculu: lobi ve bağlantı için gereken oturum bilgileri Epic Online Services ve Steam üzerinden aktarılır. Yakın sesli sohbet oyun sırasında oyuncular arasında canlı iletilir; kaydedilmez ve saklanmaz.",
          en: "Multiplayer: session information needed for lobbies and connections is relayed through Epic Online Services and Steam. Proximity voice chat is transmitted live between players during play; it is not recorded or stored.",
        },
        {
          tr: "Oyun içi fotoğraflar (TAB → Galeri) yalnızca kendi cihazında saklanır.",
          en: "In-game photos (TAB → Gallery) are stored only on your own device.",
        },
        {
          tr: "Satın alımlar: mobil ödemeleri App Store veya Google Play işler. Biz yalnızca satın alma makbuzunu doğrularız; kart bilgilerini görmeyiz.",
          en: "Purchases: mobile payments are processed by the App Store or Google Play. We only verify the purchase receipt; we never see card details.",
        },
      ],
    },
    {
      title: { tr: "2. Discord uygulaması", en: "2. Discord application" },
      body: [
        {
          tr: "Oyun açıkken bilgisayarındaki Discord uygulamasına oyun durumunu (ör. oyunun adı, hub'da mı seferde mi olduğun, ekipte kaç kişi olduğu) gönderir; bu bilgi Discord profilinde arkadaşlarına görünür. Bu iletişim senin cihazında, oyun ile Discord uygulaman arasında olur. Discord'dan senin hakkında bilgi almayız, mesajlarını okumayız ve sunucularımızda Discord verisi saklamayız.",
          en: "While the game is running it sends your game status (e.g. the game's name, whether you are at the hub or on a voyage, how many are in your crew) to the Discord app on your computer, and Discord shows it on your profile to your friends. This happens on your device, between the game and your Discord app. We do not receive information about you from Discord, do not read your messages and do not store Discord data on our servers.",
        },
        {
          tr: "Oyun durumunun görünmesini istemiyorsan Discord → Kullanıcı Ayarları → Etkinlik Gizliliği bölümünden kapatabilirsin.",
          en: "If you don't want your game status shown, turn it off in Discord → User Settings → Activity Privacy.",
        },
      ],
    },
    {
      title: { tr: "3. Web sitesi", en: "3. Website" },
      body: [
        {
          tr: "hurda-g.com reklam veya takip çerezi kullanmaz. Dil seçimin yalnızca tarayıcının yerel depolamasında tutulur. YouTube videoları sen tıklayana kadar yüklenmez ve youtube-nocookie.com üzerinden açılır. 3B modeller için gereken sıkıştırma çözücüsü Google'ın sunucusundan indirilir.",
          en: "hurda-g.com uses no advertising or tracking cookies. Your language choice is kept only in your browser's local storage. YouTube videos do not load until you click them and play from youtube-nocookie.com. The decompression decoder for the 3D models is downloaded from Google's servers.",
        },
      ],
    },
    {
      title: { tr: "4. Neden işliyoruz", en: "4. Why we process it" },
      body: [
        {
          tr: "Oyunu sunmak ve çok oyunculu bağlantıyı kurmak (sözleşmenin ifası), ilerlemeni kaydetmek, hileyi ve kötüye kullanımı önlemek (meşru menfaat) ve yasal yükümlülükleri yerine getirmek için. Verilerini satmayız ve reklam amaçlı paylaşmayız.",
          en: "To provide the game and connect multiplayer sessions (performance of contract), to save your progress, to prevent cheating and abuse (legitimate interest), and to meet legal obligations. We do not sell your data or share it for advertising.",
        },
      ],
    },
    {
      title: { tr: "5. Paylaşım ve saklama", en: "5. Sharing and retention" },
      body: [
        {
          tr: "Bilgiler yalnızca hizmeti çalıştıran sağlayıcılarla (Epic Games, Valve, Apple, Google, Discord) ve yasal zorunluluk halinde yetkili makamlarla paylaşılır. Bu sağlayıcılar verileri Türkiye dışında işleyebilir. Hesap verilerini hesabın aktif olduğu sürece, sesli sohbeti hiç saklamayız.",
          en: "Information is shared only with the providers that run the service (Epic Games, Valve, Apple, Google, Discord) and with authorities where legally required. These providers may process data outside Türkiye. We keep account data while your account is active and never store voice chat.",
        },
      ],
    },
    {
      title: { tr: "6. Hakların", en: "6. Your rights" },
      body: [
        {
          tr: "KVKK ve GDPR kapsamında verilerine erişme, düzeltme, silme, işlemeyi kısıtlama ve itiraz etme hakların vardır. Talebini aşağıdaki e-posta adresine gönder; 30 gün içinde yanıtlarız. Hizmetler 13 yaşın altındaki çocuklara yönelik değildir.",
          en: "Under KVKK and GDPR you have the right to access, correct, delete, restrict and object to the processing of your data. Send your request to the email below and we will reply within 30 days. The Services are not directed at children under 13.",
        },
      ],
    },
  ],
};
