---
title: "MJML ile E-mail Template Oluşturma"
description: "Sıfırdan E-mail Template oluşturmanın kolay yolunu öğrenin"
---

E-mail template oluşturmak, herhalde çoğu Frontend Developer'ın karın ağrısıdır. Neyse ki Mailjet ekibinin çıkardığı bu ürün ile e-mail template oluşturmak artık çocuk oyuncağı.

## Başlarken

MJML, Mailjet ekibinin oluşturduğu bir işaretleme dilidir. 

<a href="https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml" target="_blank" rel="nofollow">Visual Studio Code eklentisi</a> olarak ya da direkt tarayıcıda çalışan <a href="https://mjml.io/try-it-live" target="_blank" rel="nofollow">online editörleri</a> mevcut.
İşe başlamadan önce ister eklentiyi kurun, isterseniz online olarak deneyin.

## Sayfa Yapısının Oluşturulması

E-mail templatemizin ana yapısı aşağıdaki gibidir.

```html
<mjml>
  <mj-head></mj-head>
  <mj-body></mj-body>
</mjml>
```

Tıpkı HTML'de olduğu gibi head ve body'den oluşan ana yapımızı yazdıktan sonra, tasarıma göre ihtiyaçlarımızı karşılayacak diğer etiketleri inceleyip uygulayabiliriz.

## mj-head

mj-head etiketi, MJML dahilindeki head bileşenlerini barından etikettir. Bunlar;

### mj-attributes
MJML etiketlerinin varsayılan değerlerini barındıran etiketleri kapsar. Bu etiket altında yazılan etiketlere verilen değerler, o etiketler için varsayılan değer olarak kullanılır.

### mj-breakpoint

Mobil görünüme geçilecek genişlik değerinin tanımlandığı etikettir.

### mj-font

Bu etiket ile kullanacağınız yazı tipini yükleyebilirsiniz.

### mj-style

özel css kurallarınızı tanımlamanıza ve barındırmanıza yardımcı olur.

### mj-title

Sayfanın başlığını içeren etikettir.

Çok kullanılmasa da var olan diğer head bileşenleri;

- mj-html-attributes
- mj-preview

Sayfa içeriğinizi oluşturmanızı sağlayacak etiketler;

## mj-body

E-mailinizin başlangıç noktası, burada yazdığınız tüm içerikler e-mail template'inizde görüntülenir. Tıpkı HTML'de body etiketinin sayfa elementlerini kapsadığı gibi, mj-body de tüm e-mail template'inizdeki içerikleri kapsar.

### mj-wrapper

Bu etiket, bir ya da birden fazla section'ın kapsayıcısıdır. Sayfa içeriğinizin kenar boşluklarını ve bu alanla verebilirsiniz.

### mj-section

E-mail template'inizde birbirinden bağımsız bölümler yer alır. Bunların her birini bir section içerisinde barındırabilirsiniz.

### mj-column

MJML'in kolaylığını hissedeceğiniz etiket olan mj-column ile tasarımdaki sütunlarınızı oluşturabilirsiniz. Bir section (mj-section) içerisine birden fazla mj-column ekleyerek satır boyunca istediğiniz kadar sütun ekleyebilirsiniz. Ancak dikkat etmeniz gereken bir konu var: Mobilde, section içerisine yazılmış ne kadar mj-column olsa da mobil genişliğe geçildiği an tek sütuna düşecek, yan yana sütunlarınız alt alta görüntülenecektir.

### mj-group

Mobilde alt alta düşmemesini istediğiniz sütunlarınızı (mj-column)  mj-group ile kapsayıp, mobilde de sütunların yan yana görüntülenmesini sağlayabilirsiniz. mj-group içerisindeki sütunlarınız yüzdelik değer almalıdır.



