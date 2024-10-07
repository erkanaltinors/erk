---
title: "Düzenli İfadeler İçin Düzenli Düşünceler"
description: "Regex yazmayı kolaylaştıracak yaklaşımlar ve pratikleri"
---

Regex ile ilk tanıştığında gözü korkmayan geliştirici yok denecek kadar azdır.

Javascript ile Regex (düzenli ifade) yazmak bazen gerçekten çile olabiliyor. Hatta yeri geliyor chatgpt ile de istediğimiz gibi bir düzenli ifade yazdıramadığımız da oluyor. Birkaç yaklaşımdan faydalanarak Javascript ile regex yazmayı kolay hale getirebiliriz. Aşağıda paylaştığım yaklaşımlar sayesinde sıfırdan regex yazmak nispeten size de kolay gelecektir.

> İster net değilse çıktı da net olmaz.

## İhtiyacı doğru belirleyin

Düzenli ifadeleri çoğunlukla son kullanıcıdan belli formatta veri almakta ve bu alınan verilerin doğru formatta olup olmadığını kontrol etmekte kullanırız. Genel olarak düzenli ifade kullanmaktaki amacımız, kullanıcı deneyimini üst düzeyde tutmak ve sağlıklı veri toplamaktır. Pratikte düzenli ifadeleri en çok form validasyonlarında inputlar için kullanırız.

İsterleri iş analisti kadar iyi bilemeyebiliriz. Ancak bu doğru kurgu ile hazırlanmış bir düzenli ifade oluşturmamıza engel değildir. İsteri tam anlayamadığınızda ve ya eksik olduğunu düşündüğünüz noktada birkaç soru ile isteri netleştirebilirsiniz. 

Örneğin bir ad soyad inputu için düzenli ifade yazmanız gerekiyor. İş analisti, sadece harf ve boşluk kullanılmasını belirtti. Burada birkaç eksik sezdiniz ve ardından iş analistine bununla ilgili ekstra bilgi almak için danışmanız gerektiğini farkettiniz. İş analisti, ilettiği isterlerin dışında da isterlerde bulunabilir. Bunu, iş bitiminden sonra almak yerine aşağıdaki gibi birkaç soru ile genişletebiliriz.

- Ad soyad inputu için maksimum karakter ve minimum karakter sayısı nedir?
- Ad soyad boşluk ve ya tire ile bitebilir mi?
- Ad ve soyada denk gelecek şekilde en az ve en fazla kaç kelime yazılabilir?
- Soyadın tamamı büyük harf ile yazılsın mı?
- Boşluk karakteri birden fazla kez kullanılabilir mi?

Görünürde basit olan bir düzenli ifade için dahi, düşünüldüğünde ne kadar çok soru türetilebildiğini görebilirsiniz. Daha kompleks yapıda isterler olduğunda bu soru sayısı da muhtemelen daha fazla olacaktır. Ancak bu gözünüzü korkutmasın. Çünkü soru sayısı ne kadar fazla ise, doğruya en yakın düzenli ifade oluşturma ihtimaliniz bir o kadar artıyor.

## Pozitif düşünün

Düzenli ifadeler için isterlere baktığınızda olumsuz ifadeler ile karşılaşabilirsiniz, ancak bu kesinlikle olumsuz çıktı arayan bir regex yazmanızı gerektirmez.

Javascript ile regex yazarken olumsuz olarak karakterler grubu, yani;

***" a, b, c karakterleri olmasın "*** diye bir regex yazmak kolay iken,

***" 5 karakterli ve sonu a olmayan kelimeler olmasın"*** yazmak zorlayıcı olabilir. Bu yüzden, isterleri öğrendiğiniz anda onu regex tarafında pozitif anlamda karşılıklarını yazacak şekilde kurgulayabiliyor musunuz diye denemenizde fayda var.

## Minik gruplar oluşturun

İsterleri aldıktan sonra bütünü oluşturacak parçaları belirleyin. 

Örneğin harf ile başlayıp harf ile bitecek kelimelerden oluşan ve kelimeler arasında 1 adet boşluk kalacak şekilde en az 2 en fazla 5 kelimeyi kabul edecek düzenli ifade belirlendi. Bu durumda 2 kelimenin zorunlu, diğer 3 kelimenin de opsiyonel olduğunu anlıyoruz. Düzenli ifade başından sonuna kabul edecek şekilde ( exact match ) yazacağımız için en fazla 5 kelimede çalışacaktır.

Şimdi adım adım düzenli ifademizi yazalım ve isteri karşılayalım:

```js
const nameRegex = /^$/
```
Düzenli ifadeler / ile başlar ve / ile biter. ^ ve $ arasında yazacağımız ifade, başından sonuna kabul edecek şekilde bir "kesin" tanım olduğunu belirtir.  

```js
const nameRegex = /^[a-z]{1,}\s[a-z]{1,}$/ 
```
Örneği basitleştirmek için sadece küçük İngilizce harflerin geçerli olduğunu varsayalım. Yukarıdaki yazımda, minimum 1 adet İngilizcedeki tüm küçük harflerle başlayan ve ardından bir boşluk ile devam edip yine minimum 1 adet İngilizce harfle biten bir düzenli ifade oluşturduk.

Ancak bu, bizim sadece minimum 2 kelime ihtiyacımızı karşılıyor. Opsiyonel olarak 3 kelimeyi daha alan bir düzenli ifade oluşturmaya devam edelim (opsiyonel kelimesine dikkat).

```js
const nameRegex = /^[a-z]{1,}\s[a-z]{1,}((\s[a-z]{1,}){1,3})?$/
```
İşte şimdi gruplamayı gördük. Gruplama parantez işaretleri arasında kalan ifadeleri kendi içindekini sanki tek bir ifadeymiş gibi görmemize yardımcı olur.
Soru işareti, kendinden önceki ifadeyi opsiyonel olarak görür. Soru işareti, kendisinden önce gruba denk geldiği için grubu opsiyonel olarak görür. İçerideki grupta ise minimum 1 maksimum 3 kez olacak şekilde boşluk ve ardından minimum 1 karakterli harf bloğunu kabul eden düzenli ifade grubu yer almaktadır.

## Sonuç

Yukarıdaki açıklamalarda sırayla ifade ettiğim gibi regex yazmaya başlamanın en önemli noktası isterin ta kendisidir. İsteri doğru aldığınız müddetçe, bakış açınızı anlattığım maddelerdeki gibi oluşturduğunuzda yazamayacağınız regex yok. Düzenli ifadeleri yazabilen geliştiricilerin her zaman bir adım önde olacağını aklınızdan çıkarmayın.