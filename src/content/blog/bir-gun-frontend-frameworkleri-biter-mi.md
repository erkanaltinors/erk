---
title: "Bir Gün Frontend Frameworkleri Biter Mi?"
description: "Frontend Frameworklerinin geleceği hakkında öngörülerim"
---

Her geçen gün yeni bir framework çıkıyor. Yeni bir araç. Yeni bir kütüphane. "O kötü abi bu iyi", "Yok canım o dediğin sandığın kadar iyi değil, bu iyi", "Abi react mı öğreneyim Angular mı?", "NextJS yapalım herkes yapıyor" ve buna benzer insanı düşündüren bazen de bezdiren sorular ve sorunlarla karşılaştığımız yıllardan geçiyoruz.

Her bir aracın kıymetli olduğunu peşinen belirteyim. Projeleri başka bir teknoloji seçimine göre daha hızlı bitirmemize yardımcı oldukları da bir gerçek. Madalyonun öteki tarafı ise biraz sancılı. Araç tercihlerimiz bazen isterleri karşılamaya yetmiyor. Bazen de isterleri karşılamak için yolu uzatmak zorunda kalıyoruz. 

İyisiyle kötüsüyle deneyimlemiş olduğum framework ve kütüphanelerin geleceği hakkında öngörülerim şöyle:


## React

Çoğumuzun ilk göz ağrısı olan frontend kütüphanesi React, ilk versiyonundan bu yana üzerine katarak geldi ve eski sürümlerle uyumluluğunu uzun süre devam ettirdi - ki bu da eski versiyonda kalmış projeleri güncellemeye yardımcı oldu.

React'ı diğer kütüphane/framework'lerden ayıran en önemli özelliği bence şu: yeni yapılan ve yakın dönemde yapılmış neredeyse tüm frameworkler sözdizimi olarak React'ten etkilendi. Yeni çıkan çoğu araç, React'a aşina yazılımcıları kolay kazanmak için bu yola geçmiş olabilir.

Kolay yolları olsa da react kullanılan bir projede performans geliştirmeleri ve refaktör işlemleri yorucu olabiliyor. Özellikle react versiyonu eksik kalmış ve içinde sayıca çok fazla kütüphane yer alan projelerde bakım gerçekten maliyetli oluyor.

### React'ın geleceği var mı?

Bence React kolay kolay ölmeyecek, ancak ileride çoğunlukla web siteleri yerine SPA web uygulamalarında yaşayacak. Projenin adını koyarken web uygulaması olması kesinse React çoğu zaman ilk seçenek olacak.

## Angular

Kütüphane olarak çıkıp sonradan framework olan Angular, Google'ın geliştirme desteğini çekmesinden sonra eski güzel günlerini arıyor. Hala aktif olarak güncellenen Angular, Google desteğini kaybettikten sonra topluluğundan da kayıplar yaşadı.

Angular maalesef React kadar kolay bir sözdizimine sahip değil. State yaklaşımı React kadar kolay kavranan yapıda değil. Yine ne yazık ki dokümantasyonu React'ın dokümantasyonu kadar güzel değil. React kadar esnek değil. Çoğu şeyi sadece Angular'ın istediği şekilde yapmak zorunda kalıyorsunuz.

Her ne kadar Angular'ın istediği şekilde yapınızı kurmanız gerekse de bir açıdan bu iyi. Özellikle kurumsal projelerde bu zorunluluk proje sağlığı için olumlu. Avrupa'daki çoğu firma bu katı yapısından dolayı Angular kullanmaya devam ediyor.


### Angular'ın geleceği var mı?

Angular'ın sadece eski projeleri yaşatacak kadar var olacağını düşünüyorum. Küçük bir topluluk olarak kalacağını ve büyümesinin imkansız olduğunu düşünüyorum. React'ın dominasyonunu ezip geçebilecek yapısı bence yok.


## Vue

Geliştirici deneyimini çıktığı zamana göre düşününce en üst düzeyde sunan Vue, yine devam ettirdiği geliştirici deneyiminin ekmeğini kesinlikle yiyecek. Niş projelerde yaşayacak ve çok az sayıda firmanın yazmayı isteyeceği Vue küçük bir payda kalsa da yaşamaya devam edecek. Devrimsel nitelikte yeniliklerin gelmemesi durumunda maalesef ömrü çok uzun olmayacak.

## Meta Frameworkler

### Next

Next, meta framework'ü çoğu yeni frontend geliştiriciye tanıtan bir meta framework oldu. Özellikle 12. versiyona kadar üstüne katarak ve topluluğunu artırarak çok iyi geldi. Ancak 13. versiyonda React'ın **server component** kavramını tanıtmasıyla kafa karışıkları da ortaya çıktı. Özellikle nispeten kolay olmayan proje güncellemesi, pages router'ın yanına gelen app router 12. versiyondan 13. versiyona geçişleri zorlaştırdı.


### Next'in geleceği var mı?

Next, React ile geliştirilecek siteler için başlangıç kiti oldu. Ancak her yeni versiyonda proje güncellemesinin kolay olmaması ve kendi ortamları dışında projeyi barındırınca her özelliğini kullanamamak Next'in ömrünü olumsuz etkileyecektir. Next'in gelecekte tamamen Vercel'e bağlı bir ürün haline geleceğini düşünüyorum. Bu da şu anda yayında olan projelerin büyük çoğunluğunun ya güncellenmeyeceğini, ya da başka bir framework ile yapılacağı anlamına geliyor.


### Astro

Favorim Astro, bence sağlam adımlarla geliyor. Tabi bu şekilde devam etmezlerse sadece ajansların kullandığı bir araçtan ibaret kalır. Geliştirici deneyimini Vue gibi üst düzeyde sunan Astro, hızlı başlangıçlar ve baş ağrısından uzak kalmak için güzel bir seçenek. Ömrünün React ile paralel gideceğini düşünüyorum - tabi şimdiki gibi geliştirmelere devam ettikleri sürece.


## Sonuç

Kullanacağınız herhangi bir framework belki bir gün ömrünü tamamlamış olacak. Şu an adını bile bilmediğiniz, ya da duysanız da onu herhangi bir projenizde kullanmadığınız frameworkler oldu ve gelecekte de olacak. Ne kullanırsanız kullanın, proje ihtiyaçları üç aşağı beş yukarı aynı kalacak. Tercihlerinizi yaparken projenizin ömrünü de düşünerek seçimler yapmanızı tavsiye ederim.


### Bonus: jQuery 

Javascript yazmayı inanılmaz kolaylaştıran jQuery, yakın zamanda çıkan [4. beta sürümü](https://blog.jquery.com/2024/02/06/jquery-4-0-0-beta/) ile "Ölmedim, ben buradayım" diyor. Aktif olarak dünyadaki web sitelerinin büyük çoğunluğunda yaşayan jQuery, yakın gelecekte de yaşamaya devam edecek. İronik olarak jQuery'nin ömrünü Javascript kısaltacak.
