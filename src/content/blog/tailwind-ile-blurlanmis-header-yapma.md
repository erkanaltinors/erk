---
title: "Tailwind ile Blurlanmış Header Yapma"
description: "Tailwind classlarını kullanarak header'ınızı camsı bir görünüme kavuşturun."
---

Glassmorphic background olarak da geçen, camsı bir görünüm yaratmak için CSS'te background filter kullanılıyor.
Bu görünümü elde etmek için tailwind class'larını kullanabilirsiniz.

```html
<header class="bg-opacity-50 backdrop-blur-sm backdrop-filter">
 <nav class="flex">
  <a href="#">Home</a>
 </nav>
</header>
```

Blur efektini isteğinize göre `backdrop-blur` class'ını değiştirerek elde edebilirsiniz.
Efektin görünmesi için `opacity` değerinin kaldırılmaması gerekiyor.
