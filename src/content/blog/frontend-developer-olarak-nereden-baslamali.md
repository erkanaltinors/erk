---
title: "Frontend Developer Olarak Nereden Başlamalı?"
description: "Yazılım dünyasında Frontend Developer olmak isteyenler için kişisel notlarım"
---

Frontend Developer ya da güzel Türkçemiz ile "Ön Uç Geliştirici" olmak, gerçekten severseniz zengin bir iş aşkını beraberinde getiriyor. İnternette arattığınızda da karşılaşacağınız Frontend Developer yol haritasına ya da haritalarına paralel olarak  önemli notları aşağıda sizin için sıraladım.

## Her Şeyden Önce

Frontend Developer olmayı istemeniz, aynı zamanda genel kapsamlı olarak bir yazılım geliştiricisi, hatta sadece geliştirici olacağınızın ilk adımıdır. Dolayısıyla, sorunların çözümüne bir geliştirici gibi yaklaşabilmeniz gerekiyor. 

Başta bilginiz az olacağı için çok fazla bilgi bombardımanına maruz kalacaksınız. Hatta bilginizin az olduğu bu dönemlerde her gün başınız ağrıyacak, ki bu çok da kötü bir şey değil. Vücut geliştirmeye başladığınızda da kas yorgunluklarınız ilk zamanlarda yoğun olurken zamanla azalır. Burada da, bilginiz arttıkça, çok fazla projede yer aldıkça ve geliştirme yaptıkça bilgi bombardımanından gelen baş ağrınız azalacak.

Sağlık olmazsa olmazınız. Gece çalışmayı daha verimli bulsanız da özellikle uykunuzun kaliteli geçmesi için gereken ne varsa yapın. Uykusuz olarak yeni bir bilgiyi öğrenmek, uykunuzu aldığınız zamanlara göre daha zor olacaktır.

Beslenmenize dikkat edin. Odaklanmak için çok fazla kafein içeren ürünler tüketmemeye çalışın.

Stres yönetiminiz kariyer yönetiminizdir. Başlangıçta sizden istenen işlerde teslim tarihi istenecektir. Bunu ne zaman bitirebileceğinizi bilmemek çok doğal, endişelenmeyin. Takımda kıdemli meslektaşlarınıza bu konuda danışabilirsiniz. Bazen imposter sendromuna girip hiç bir şeye yetişemeyecek gibi hissedebilirsiniz. Endişelenmeyin. Neredeyse her yazılım geliştirici bu sendroma kapıldı ve atlattı. Kapıldıysanız da önünde sonunda atlatacaksınız.

Mentor bulun. Mentorunuzun Frontend Developer olmasına gerek yok ancak Frontend Developer olursa ve iyi bir mentor ise yarışa 2-0 önde başlayacağınızı rahatlıkla söyleyebilirim. Mentor olan tanıdığınız ya da iş arkadaşınızın genel kapsamlı paylaşımlarını dikkate alın. Unutmayın, sektörde sizin geçeceğiniz yollardan çok önce geçmiş kişiler var. Onların deneyimlerinden faydalanın.

Kendi projenizi yazın. Başta "Pek bir şey bilmiyorum. Ne projesi de yapacağımı bilmiyorum. Biraz daha öğreneyim sonra proje yapmaya başlarım." diye düşünebilirsiniz ama yine de aklınızda bir proje varsa, basit bir proje bile olsa başlayın ve muhakkak bitirin. Eksikleri elbet olacaktır, mühim değil. Bir projeye başlamanın hazzını yaşadığınız gibi, bitirmenin de hazzını yaşayın.

Git kullanmayı öğrenin. Geliştiriciliğin neresinde olursanız olun Git kullanacaksınız. Çalışma mantığını anlamak için CLI komutları ile değişikliklerinizi gönderin, alın yeni branch açın. Adım adım komutları yazdığınız için çalışma mantığını kavrayacaksınız. Kavradıktan sonra kullandığınız IDE (Örneğin Visual Studio Code) arayüzü üzerinden de git kullanabilirsiniz.

Genel konulardan sıyrılıp Frontend Developer için önemli konulara değinmeye başlayabilirim.

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

CSS yazarken aklınızın bir ucunda sürekli olarak tutmanız gereken şey, yazdığınız kuralların başka kural ya da kurallarla geçersiz kılınabileceği. Yazdığınız kurallar çok fazla eziliyorsa kurgunuzu doğru ayarlamanız gerekir. Her ne kadar pure/vanilla CSS yazılmış proje sayısı az olsa da (günümüzde Tailwind CSS'in pure CSS yazmanın yerini aldığını rahatlıkla söyleyebilirim) pure CSS yazmanız gerekecek yerler olacaktır. Bu zorunluluğun olduğu durumda, özellikle sonradan dahil olduğunuz projelerde CSS yazmadan önce var olan kurallarla isterleri karşılamanın mümkün olup olmadığını kontrol edin.

### Önemli konu olarak !important

Projede CSS yazarken muhakkak !important gerekecektir. Ancak çok fazla !important yazarsanız HTML ve CSS kurgunuzu  gözden geçirmenizde fayda var. Özellikle desktop-first, yani masaüstü öncelikli CSS yazmanız; çok fazla !important kullanma ihtiyacını ortaya çıkaran bir unsur.

### Önce küçükler: Mobile-first CSS yazmak

Mobile first CSS yazmanın en büyük avantajını performansta göreceksiniz. Tarayıcı, sayfaya çağırılan CSS'i çizerken önce selector'leri, ardından query'leri okur ve uygular. Desktop-first yazdığımızda mobil için yazacağımız CSS kodları media query içinde kalacağından, bu kodlar sonlarda okunacaktır ve haliyle sayfanın çizilmesini az da olsa geciktirecektir. Mecbur kalmadıkça CSS kurgunuzu desktop-first olacak şekilde kurgulamayın. Desktop-first ve mobile-first yazım farklarını aşağıda paylaşıyorum.

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