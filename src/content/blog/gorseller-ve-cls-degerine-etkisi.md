---
title: "Görseller ve CLS Değerine Etkisi"
description: "Web sayfalarında görsellerin nasıl verimli kullanılacağını keşfedin"
---

Günümüzde görsel iletişimin en büyük parçası olan resimler ve videoların, söz konusu web sitesi olduğunda doğru kullanımı hem kullanıcı deneyimini artırıyor hem de performansa ciddi katkıda bulunuyor.

Görselleri ve performansı birlikte düşündüğümüzde en önemli ölçer CLS değeri oluyor.

Açılımı Cumulative Layout Shift olan CLS, web sayfasının yüklenme sırasında html elemanlarının kendi alanlarının dışına taştığında oluşan bir sorun. Bunun ölçümünü ise tarayıcı yapıyor.

Örneğin web sayfanıza aşağıdaki gibi bir görsel eklediniz.

```html
<img src="https://placehold.co/600x400" alt="örnek görsel" />
```

Tarayıcı böyle eklenmiş bir görselin, sayfada ne kadarlık bir alan kaplayacağını görsel tam yüklenmeden bilemez ve sayfada kaymaya neden olur. Bu kayma da CLS değerini artırır ve sitenizin performans skorunu olumsuz etkiler.
Bunu önlemek için *width* ve *height* attribute'lerini kullanmanız yeterli.

```html
<img src="https://placehold.co/600x400" alt="örnek görsel" width="600" height="400" />
```
