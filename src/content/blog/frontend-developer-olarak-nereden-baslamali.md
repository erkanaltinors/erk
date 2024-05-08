---
title: "Frontend Developer Olarak Nereden Başlamalı?"
description: "Yazılım dünyasında Frontend Developer olmak isteyenler için kişisel notlarım"
---

Frontend Developer ya da güzel Türkçemiz ile "Ön Uç Geliştirici" olmak, gerçekten severseniz zengin bir iş aşkını beraberinde getiriyor. İnternette arattığınızda da karşılaşacağınız Frontend Developer yol haritasına ya da haritalarına paralel olarak  önemli notları aşağıda sizin için sıraladım.

## HTML: İşin Başı

Web geliştirici olduğunuz zaman (ister Backend geliştirici olun ister Frontend) HTML olmazsa olmazınız. HTML olmadan yaptığınız hiç bir şeyi sunamazsınız. Bomboş bile olsa en az bir tane HTML sayfa (meşhur index.html) projenizi yaşatmak için var olacak. Frontend developer olarak HTML de sizin başlangıç noktanız. Doğru kurgulanmış bir HTML sayfa ile tertemiz, anlaşılır, erişilebilir web sitesi oluşturmanız mümkün. Üstelik HTML ne kadar "işaretleme dili" olsa da doğru yazım ile gereksiz Javascript yükünüzü azaltır.

### HTML'de sizi öne çıkaracak bilgiler

#### Semantik yazım/kurgu

HTML sayfalarınızda blok eleman olarak sadece "div" etiketini kullanmanıza gerek yok. Üstelik "div" etiketini kullanmanız, sayfanızın erişilebilirliğini olumsuz etkileyen bir stratejidir. Bunun yerine sayfalarınızda doğru etiketleri kullanarak sayfalarınızı kurgulamanız ileride o sayfayı okumanızı da kolaylaştıracaktır. Bir web sayfası oluştururken sayfada görüntülenecek içeriğin yer aldığı "body" etiketi altında aşağıdaki gibi bir HTML kurgusunu kullanabilirsiniz.

```html
<header>
</header>
<main>
  <section>
  </section>
<main>
<footer>
</footer>
```

Bu şekilde, HTML sayfanızı semantik kurgulamaya başlayabilirsiniz.

#### SEO

SEO, HTML kurgusuna dikkat etmezseniz size angarya iş çıkaracak bir alan. SEO uyumlu sayfa çıkarmak için en azından sayfada bir tane "h1" etiketli başlık ve sırasına uygun olarak diğer başlık etiketlerini eklemeye dikkat edin. Aşağıdaki örneklerde doğru ve yanlış kurguyu inceleyebilirsiniz.

Yanlış örnek:

```html
<section>
  <h1>Web Sayfasının Başlığı</h1>
  <p>Bu paragraf, başlıkla ilgili detayları içerir.</p>
  <h3>Web sayfasının alt başlığı</h3>
    <p>Bu paragraf, alt başlıkla ilgili detayları içerir.</p>
  <h2>Web sayfasının alt başlığı</h2>
      <p>Bu paragraf, alt başlıkla ilgili detayları içerir.</p>
  </section>
```
Doğru örnek:

```html
<section>
  <h1>Web Sayfasının Başlığı</h1>
  <p>Bu paragraf, başlıkla ilgili detayları içerir.</p>
    <h2>Web sayfasının alt başlığı</h2>
      <p>Bu paragraf, alt başlıkla ilgili detayları içerir.</p>
  <h3>Web sayfasının alt başlığı</h3>
    <p>Bu paragraf, alt başlıkla ilgili detayları içerir.</p>
  </section>
```

#### HTML Attribute'leri

HTML Attribute'leri çoğu zaman sizin Javascript yazma ihtiyacınızı ortadan kaldıracak. HTML'i ne kadar çok bilirseniz, o kadar az Javascript yazacaksınız. Konu performans olunca, olabildiğince az kod yazmanız gerekeceği için HTML'i HTML yapan en önemli nitelik olarak attribute'leri öğrenmeniz sizi öne çıkarır.


#### Block Level ve Inline Level HTML etiketleri

HTML kurgusunun en önemli ayağını oluşturan block level/inline level etiketleri öğrenmeniz gerekiyor. Bu sayede, HTML kurgunuzu oluşturduğundza sayfanın neresinde hangi elemanların bulunacağını tahmin edebilirsiniz. Hızlı sayfa oluşturmak için bu konuyu iyi çalışmanızı tavsiye ederim.

## CSS: Projenin makyajı

### Önemli konu olarak !important

Projede CSS yazarken muhakkak !important gerekecektir. Ancak çok fazla !important yazarsanız HTML ve CSS kurgunuzu  gözden geçirmenizde fayda var. Özellikle desktop-first, yani masaüstü öncelikli CSS yazmanız; çok fazla !important kullanma ihtiyacını ortaya çıkaran bir unsur.

### Önce küçükler: Mobile-first CSS yazımı

Mobile first yazımın en büyük avantajını performansta göreceksiniz. Tarayıcı, sayfaya çağırılan CSS'i çizerken önce selector'leri, ardından query'leri okur ve uygular. Desktop-first yazdığımızda mobil için yazacağımız CSS kodları media query içinde kalacağından, bu kodlar sonlarda okunacaktır ve haliyle sayfanın çizilmesini az da olsa geciktirecektir. Mecbur kalmadıkça CSS kurgunuzu desktop-first olacak şekilde kurgulamayın. Desktop-first ve mobile-first yazım farklarını aşağıda paylaşıyorum.

```css
Desktop first
.wrapper{
  padding: 10px;
  background-color: #222;
}
/* Mobil için sonradan yazıldığından  sayfanın çizimi mobil cihazlar için gecikecek. */
@media screen and (max-width: 768px){
  .wrapper{
    padding: 5px;
  }
}
```
```css
Mobile first
/*Önce mobil, ardından masaüstü CSS kodlarımız çalışacak. */
.wrapper{
  padding: 5px;
  background-color: #222;
}
@media screen and (min-width: 768px){
  .wrapper{
    padding: 5px;
  }
}
```