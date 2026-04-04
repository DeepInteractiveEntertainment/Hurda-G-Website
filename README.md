# HURDA-G — Proje Dosya Yapısı

## Klasör Yapısı
```
HurdaG/
├── index.html
├── README.md
└── assets/
    ├── video/
    │   └── gameplay.mp4          ← SCROLL-DRIVEN VIDEO
    ├── models/
    │   ├── uzunkol.glb           ← BAY UZUNKOL X
    │   ├── kapkac.glb            ← KAPKAÇ ADAM
    │   ├── orumcek.glb           ← ÖRÜMCEK X
    │   ├── hassas.glb            ← HASSAS KULAKLI ABLA
    │   ├── dron.glb              ← DRON POLİS X
    │   ├── balcik.glb            ← BALÇIK FIRLATAN X
    │   ├── koca.glb              ← KOCA ELEMAN (BOSS)
    │   ├── horoz.glb             ← LO SİENTO HOROZ X
    │   ├── kimlik.glb            ← KİMLİK HIRSIZI X
    │   ├── vakum.glb             ← VAKUMCU X
    │   ├── kablo.glb             ← AKILLI KABLO CANAVARI
    │   └── hizli.glb             ← HIZLI UCUBE
    └── images/
        └── hurda-g-og.jpg        ← OG/SOSYAL MEDYA KAPAĞI (1200x630px)
```

---

## 📱 Video — assets/video/gameplay.mp4
- Format: MP4 (H.264)
- Çözünürlük: 1920x1080, 30fps önerilir
- Scroll ile video ilerler — sayfa aşağı = video ilerler
- Video yoksa arka plan grid devreye girer (hata yok)

## 🕷 3D Modeller — assets/models/*.glb
- Format: GLB (Binary GLTF)
- Animasyon varsa otomatik oynatılır
- Model yoksa kırmızı placeholder gösterilir (hata yok)
- Ücretsiz kaynak: sketchfab.com | quaternius.com | mixamo.com

## 🖼 OG Görseli — assets/images/hurda-g-og.jpg
- Boyut: 1200×630 piksel (zorunlu)
- Facebook, Discord, Twitter/X, WhatsApp önizlemesi için
- Oyun başlığını ve atmosferini yansıtan bir görsel olmalı

## 📧 EmailJS — MainWebsite ile aynı hesap
- Public Key : XYEbpF6hgs9H2XyD4
- Service ID : service_j9slh1f
- Template ID: template_va2gljr

---

## 🔍 SEO Özeti
- Title, description, keywords → Türkçe + İngilizce keyword'ler
- Open Graph → Facebook, LinkedIn, Discord, WhatsApp
- Twitter Card → summary_large_image
- Schema.org JSON-LD → VideoGame, Organization, FAQPage, BreadcrumbList
- Canonical URL → deepinteractiveentertainment.com/hurda-g/
- Platform meta → PC, iOS, Android, PlayStation, Xbox
- Preconnect → Google Fonts, CDN hız optimizasyonu

## 🌐 Canonical URL Notu
index.html'deki canonical şu an:
  https://deepinteractiveentertainment.com/hurda-g/
Eğer ana domain'e (deepinteractiveentertainment.com) koyacaksan:
  https://deepinteractiveentertainment.com/
olarak değiştir.
