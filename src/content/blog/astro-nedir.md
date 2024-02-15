---
title: "Astro Nedir?"
description: "Frontend Frameworklerinin arasında aykırı bir çocuk"
---

Her geçen gün yeni bir teknolojinin türediği frontend dünyasına çok farklı bir bakış açısıyla giriş yapan [Astro](https://astro.build/) framework'ü, rakiplerine göre çok farklı özellikler barındırıyor.

## Ada Mimarisi (Island Architecture)

Astroyu diğer frameworklerden ayıran en önemli özellik olan ada mimarisi, komponent bazlı geliştirme yaklaşımına oldukça benzer ancak daha fazlasını sunuyor. Tarayıcıda çalışacak bileşenler stratejik olarak, tıpkı herhangi bir html etiketine attribute ekler gibi `client` direktifini kullanarak eklenebiliyor. İster hemen, ister ekrana geldiğinde, ya da tüm sayfa yüklendikten sonra bileşeni yükleme seçeneklerini client direktifi içerisinde belirtmeniz yeterli.

## MPA (Multi Page Application)

Single Page Application (SPA) framework'lerinin birbiriyle yarıştığı günümüzde, uzun zamandır kenara ayırdığımız Multi Page Application yaklaşımını benimseyen Astro framework'ü; sayfa dahilinde kullanılmadığı takdirde sayfaya 0 (evet sıfır) kilobayt javascript getiriyor. Multi Page Application yaklaşımı sayesinde, sayfada 'sadece ne kullanılırsa onu' getiriyor. Bu da Astro ile yapılan projelerde performans skorunun üzerine çok düşünmeden uygulama çıkartmamızı sağlıyor.

## Dosya Bazlı Yönlendirme (File based routing)

Özellikle NextJS ile uygulama geliştirdiyseniz aşina olduğunuz dosya bazlı yönlendirme, Astro framework'ünde hazır olarak geliyor. Daha önce NextJS ile proje geliştirdiyseniz, aynı şekilde sayfalarınızı oluşturabilirsiniz.

## Server Side Rendering (SSR) desteği

Astro framework'ünde SSR, adaptörler aracılığıyla sağlanıyor. Projeyi barındırdığınız bilinen (cloudflare, vercel gibi) hosting ortamlarında ilgili adaptörü eklemeniz yeterli.

## Geniş UI Kütüphane desteği

Astro projenizde react, vue, svelte, solidjs, lit gibi birçok ui kütüphanesi desteklenmektedir. Entegrasyon olarak eklediğiniz her kütüphaneyi kullanabilirsiniz. Aynı proje içerisinde hem react, hem vue kullanabilirsiniz. Bu entegrasyonlar sayesinde react projelerinizi rahatlıkla Astro'ya geçirebilirsiniz.

## JSX benzeri sözdizimi

Özellikle React ile proje geliştiren yazılımcıların severek kullandığı JSX sözdizimini Astro sayfalarınızda da kullanabilir, koşullu render işlemlerinizi ekstra bir sözdizimi öğrenmenize gerek kalmadan gerçekleştirebilirsiniz.

## Markdown desteği

Astro ile pages dizini altında yer alan `.md` ve `.mdx` dosyalarınız varsayılan olarak html sayfalara dönüştürülür. Üstelik bu sayfalarda bulunan kod bloklarınıza herhangi bir ayar yapmanıza gerek kalmadan syntax highlighting'i uygular. Syntax highlight örneğini aşağıda görebilirsiniz.

```js
console.log("test");
```

## Detaylı Dokümantasyon ve Topluluk Desteği

Yeni bir teknoloji söz konusu olduğunda detaylı dokümantasyon ve topluluk desteği, o teknolojiyi çabuk öğrenmemizde önemli bir etken.

Astro'da her ikisi de var. Dokümantasyonunu takip ederek baştan sona projenizi yazabilir, projelerinizde takıldığınız noktalarda hızlıca faydalanabilirsiniz. Discord kanalında aktif olarak topluluk yer almakta ve dokümantasyonda bulamadığınız, takıldığınız konularda kolaylıkla destek isteyebilirsiniz. Tabi destek için İngilizce şart.
