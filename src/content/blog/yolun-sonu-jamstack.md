---
title: "Yolun Sonu Jamstack"
description: "Başladığımız noktaya geri mi dönüyoruz?"
---

Her ne kadar 1989 yılında Tim abimiz (Tim Berners-Lee) tarafından icat edilmiş olsa da ilk web sitesi 1991 yılında yayına ve hayatımıza girdi. Bu ilk web sitesi ile birlikte, insanlarla bilgi paylaşmanın yepyeni bir yolu da doğmuştu.

İlk web sitesi hayatımıza girdikten sonra, bilgisayarlar sadece hesaplama ve ofis aracı olmaktan çıkıp bir iletişim aracı haline geldi. Sadece bununla da kalmadı, aklınıza gelebilecek her uygulamanın yaşayabileceği bir platform oldu.

O günden bugüne web siteleri evrim geçirdi. Dolayısıyla web sitelerinin oluşturulma stratejileri de evrim geçirdi.

İlk web siteleri, bugünkü hızları göz önünde bulundurursak tabiri caizse ışık hızında açılır oldu - çünkü çok küçük statik bir html sayfanın yüklenmesi çok da uzun sürmez. Ancak yapılan son web siteleri, günümüzün ihtiyaçlarını karşılaması için daha fazla veri bekler oldu. Bu da web sitelerinin boyutunu doğal olarak artırdı.

Bu boyut artışları da web sitelerinin oluşturulmasında farklı yaklaşımlar ortaya çıkardı: Rendering. Render işlemleri, işlemin yapıldığı platforma göre isim aldı: server-side ve client-side. Server-side oluşturulan sayfa en güncel veriyi SEO uyumlu olarak sunarken client-side oluşturulan sayfalar da render maliyetini günümüz kullanıcılarının güçlü tarayıcılarına taşıyor. 

Render işlemleri de elbette bir maliyet çıkarıyor ve bu maliyet de istek sayısıyla dramatik bir artış gösterme potansiyelini de beraberinde getiriyor.

Sadece bir tane render metodu diğerlerinden farklı bir çıktı elde etmemizi sağlıyor: pre-rendering yani önceden web sayfasını oluşturma. Sayfayı projenin build aşamasında oluşturduktan sonra, sayfa eğer önceden oluşturulmuş statik bir sayfa ise sunucu sadece isteği yanıtlamak için upload işlemi yapıyor - hepsi bu. Geri kalan işlemler ise tarayıcıda devam ediyor. Cache mekanizması sayesinde de tekrar tekrar sunucudan aynı cihaza veri gönderme işlemine de gerek kalmıyor.

Jamstack de statik sayfaların bu avantajlarından faydalanarak "Neden en başa dönüp hızlı ve güvenilir web siteleri yapmıyoruz?" sorusuna cevap veriyor. Böylece hepimizin yoğun veri yüklü web siteleri rahat bir nefes alır diye düşünüldü.

Hayat eskisinden hızlı, eskisinden çok daha fazla etkileşimli. Projelerin de buna ihtiyacı var. Jamstack ile yapılan projelerin de en büyük sıkıntısı bu: her zaman en günceli sunamayabiliyor. Peki Jamstack buna rağmen kendi popülaritesini nasıl koruyor?

## Güvenilirlik

Ne yaparsak yapalım, güvenli bir web sitesi ya da uygulamasını ortaya koymazsak günün sonunda kaybeden taraf oluruz. Jamstack yaklaşımı ise güvenliği birinci sıraya koyduğu için bu konudaki kaygılarımızı gideriyor.

## Hız

Genelde hız ve güvenlik birbirinin zıttı gibi görünen nitelikler olsa da, Jamstack için bu neredeyse eş anlamlı. Statik sayfaların maliyeti boyutları ile doğru orantılı. Bu yüzden küçük boyutlu olduğu taktirde her sayfanın hızlı yanıt vermesi kaçınılmaz.

## Ölçeklenebilirlik

Sade yaklaşımı sayesinde projenin farklı boyutlara (sayfa sayısı ya da ortalama sayfa boyutu olarak) çıkması çok kolay. Bu, geliştiricilerin en büyük kaygısını çözen bir durum, ancak yine de nispeten büyük bir handikapı da beraberinde getiriyor: Projenin build (oluşturulma) süresi. Sayfa sayısı arttıkça, sayfaların boyutları arttıkça bu süre hep artacak. Buna rağmen yine de Jamstack'in önünün açık olduğu kesin.


## Sonuç
 
Jamstack ile geriye düşünülen tek kaygı build süresi olduğu için, projenin sadece bu tarafında yapılacak stratejilerle - yani sadece tek bir probleme odaklanarak - hızlı, ölçeklenebilir ve güvenli web sitesine sahip olmak mümkün. Üstelik bu yapıda geliştirici deneyimini artıracak yeni çözümlere de daha cesur yaklaşabilirsiniz.

