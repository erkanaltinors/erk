---
title: "Geliştirici Deneyimi"
description: "Yepyeni bir kavram sayılabilecek geliştirici deneyimine ve uygulamalarına genel bir bakış"
---

Bugüne kadar en çok duyulan kavram olan kullanıcı deneyimi (nam-ı diğer "user experience") için neler yapılmadı neler. Kullanıcı deneyimine yapılan büyük küçük tüm yatırımlar, günümüzde kullanıcı kılavuzuna dahi ihtiyaç duymadan ürünleri ve uygulamaları kullanmamıza olanak sağladı.

Peki, işin çekirdeğinde olan geliştiriciler için geliştirme deneyimi? O da yine zamanla aşılan ve hala iyileştirilen bir alan.

Öncelikle geliştirme deneyimi nedir ve neyi kapsar onu inceleyelim.

Yeni şirkette ilk gününüz. Çalışacağınız bilgisayar ve kullanıcı hesap bilgilerinizi teslim aldınız. Sizinle proje de paylaşıldı ve artık "karanlık dehlizlere" - üstelik dokümantasyon da yoksa - dalma vakti...

Projeyi incelerken belli standartların takip edildiğini ancak bazı dosyalarda bu standartlara uyulmadan kurgulanmış kod blokları gördünüz. İşte bu büyük bir sıkıntı. Böyle bir kod bloğunu gördüğünüz an bilin ki ya projenin planlamasında bir hata var, ya geliştirici standartları takip etmeye istekli değil. Planlama, proje genelinde geliştiricinin %100 dahil olduğu alan değil ancak standartları takip etmek yazılımcının öncelikli sorumluluğudur.

Tabi gerçek hayatta her şey "ideal" değil. Standartlara uyulmayan kurguların önüne geçmek için de geliştirme ortamımızda "linter" ve "formatter" olarak ifade edilen araçlardan faydalanıyoruz.

Linter araçları genel olarak, geliştirme yaparken eksik ya da hatalı yazımların önüne geçmeye, yayına alınmaması gereken bazı kod bloklarını kaldırmamız için (örneğin konsola yazdırılan yazılar) uyarı verir. Geliştirme deneyiminde en önemli ayağı oluşturur. Linter'ları "erken uyarı sistemi" olarak görebilirsiniz. İleriye dönük olarak hatayla karşılaşmamak için kurallarınızı iyi kurgulamanız gerekir. Linter'lar için dikkat edilmesi gereken bir nokta: Kurallar ne kadar katı olursa hatayla karşılaşmanız o kadar az olur ancak fazla kurallar geliştiricinin hızını kesebilir.

Linter olarak frontend tarafında ESLint gerçekten bir nimet. Topluluk tarafından desteklenen, neredeyse her projenin içerisinde kendine yer bulan bir araç. Plugin ile genişletme imkanıyla ihtiyacınıza göre ESLint kurallarınızı tanımlayabilirsiniz.

Formatter, kod bloklarınızı belli bir formatta yazmanıza olanak sağlar. Formatter'ların asıl amacı kod okunurluğunu artırmaktır. Bu sayede geliştiriciler, kendilerinden istenen geliştirme taleplerini gerçekleştirirken, takım arkadaşları da bu yeni kurguları daha rahat okuyacağı için geliştirme için harcanan süre kısalmış olur. Formatter'ların diğer önemli özelliği ise, belirtilen kurallara göre syntax hatalarını düzeltmesidir. Örneğin satır bitimine " ; " koymayı unutsanız dahi sorun olmaz. Formatter, doğru ayarlandığı takdirde bunun gibi birçok eksiği ya da yanlışı düzeltecektir.

Formatter olarak frontend tarafında Prettier en sık kullanılan formatter olarak uzun bir süredir yerini koruyor. ESLint ile uyumlu çalışması formatter olarak Prettier'ı ön plana çıkarıyor. ESLint'te olduğu gibi Prettier'da da pluginler ile genişletme imkanı mümkün.

## Yepyeni Alternatif: Biome

Biome aracını projenize dahil ederek linter ve formatter ihtiyacınızı karşılayabilirsiniz.

Buraya kadarki kısımda geliştirici olarak çalışma ortamımızdaki geliştirici deneyiminden bahsettik. Peki sadece çalışma ortamımız yani IDE'mizde kullandığımız bu araçların geliştirici deneyiminin tamamını kapsadığını söyleyebilir miyiz? Kesinlikle hayır.

Kullandığınız bilgisayar, IDE, hatta daha detaylı düşünürsek oturduğunuz sandalye dahi geliştirme deneyiminize katkı sağlar. Geliştirme deneyimine önem verilen her ortam ve projede geliştiricilerin verimli çalışmaması imkansıza yakın. Deneyim yükseldikçe takım içi iletişim ve takım üyelerinin katkı için isteği muhakkak artacaktır.
