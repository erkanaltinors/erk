---
title: "Semantik HTML Nedir?"
description: "Semantik HTML'i ve faydalarını keşfedin."
---

Sıfırdan HTML sayfa oluşturma, bir front-end geliştiricinin projede genellikle başlangıç noktasıdır. 

İş yetiştirmek için bazen HTML sayfalarını hızlı hızlı yazar, ileriye dönük olarak okunurluğunu zorlaştıran tercihlerde bulunabiliyoruz. Bunun en tipik örneği ise **div** etiketinin neredeyse her yerde kullanılması - gerçekten neredeyse her yerde.

Semantik HTML, bir HTML sayfa oluşturma yaklaşımıdır. Bizi her yazdığımız sayfada, anlaşılması ve okunması zor HTML sayfa yaratmaktan kurtarıyor. Üstelik bunu yaparken de tarayıcının da rahatlıkla anlayabileceği HTML sayfa çıkarmamıza yardımcı oluyor. Özellikle ekran okuyucular için anlamlı ayrımlar yapmasını ve anlaşılabilir metin çıktılarını elde etmede önemli rol oynuyor.

Özellikle debug yaparken doğru HTML kod bloğunu kolay bulmamız, yapmamız gereken işi daha hızlı bitirmemize yardımcı olur. Tıpkı Dünya haritasında ülkeleri nasıl rahat seçebiliyorsak, semantik yazılmış bir HTML sayfada da HTML kod bloklarını rahatlıkla bulabiliriz. Aşağıdaki küçük bir HTML bloğunu semantik ve semantik olmayan versiyonlarda inceleyelim:

İlk örneğimiz:

```html
//Semantik HTML Yazımına Uygun HTML Kod Bloğu
<header>
  <nav>
    <ul>
      <li><a href="/iletisim">İletişim<a><li>
    </ul>
    </nav>
</header>
<main>
  <section>
    <p>İlk Paragraf</p>
  </section>
</main>
<footer>
  <p>Firma Adı</p>
</footer>
```
ve İkinci örneğimiz:

```html
/* Semantik HTML Yazımına Uygun Olmayan HTML Kod Bloğu */
<div>
  <div>
    <div>
      <div><a href="/iletisim">İletişim<a><div>
    </div>
    </div>
</div>
<div>
  <div>
    <p>İlk Paragraf</p>
  </div>
</div>
<div>
  <p>Firma Adı</p>
</div>
```

Dünya haritası örneğine tekrar dönelim. Semantik HTML örneğinde görüldüğü gibi her bir html bloğunun nereye ait olduğu, nasıl bir çıktı verebileceğini az çok tahmin edebiliyoruz. Birbirlerinin sınırlarını kesin belirten niteliğiyle semantik HTML yazımı geliştirici deneyimine olumlu katkısını sunuyor.

## Semantik HTML Yazmazsak Ne Olur?

HTML, bir işaretleme dili olduğu için tarayıcınızda veya editörünüzde (özel bir eklenti ve benzer araçlar yok ise) bir hatayla karşılaşmanız mümkün değil.
Tarayıcı, semantik yazmasanız dahi sayfanızın çıktısını gösterecektir.