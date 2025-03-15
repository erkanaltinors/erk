---
title: "Creating CTA Button with Border Radius in MS Outlook Desktop Application"
description: "Learn how to create buttons with border radius for old, creepy Outlook"
---

Building e-mail templates for old school Microsoft Outlook is challenging. There is no support for border-radius in CSS. You should use VML (Vector Markup Language) - which is used in Microsoft Word too - to draw a button with border radius. Keep in mind that your button's width will have fix width even if you add another text inside of it. Let's see the example and learn it.

````html
<div><!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" rel="noopener" target="_blank" href="http://" style="height:50px;v-text-anchor:middle;width:170px;" arcsize="10%" stroke="f" fillcolor="#1F7F4C">
<w:anchorlock/>
<center>
<![endif]-->
<a rel="noopener" target="_blank" href="https://erkanaltinors.com" style="background-color:#1F7F4C;border-radius:5px;color:#ffffff;display:inline-block;font-size: 18px; font-family: Helvetica, Arial, sans-serif;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:170px;-webkit-text-size-adjust:none;">I am a button &rarr;</a>
<!--[if mso]>
</center>
</v:roundrect>
<![endif]--></div>
````

## if mso condition
This condition runs only old desktop MS Outlook desktop applications. You can see this conditions as comment to handle compability with other email clients.
## v:roundrect
This tag draws rectangle.
## arcsize attribute
This attribute smooths each corner with percentage.
## center tag
This tag centers text horizontally.

You can see the **a** tag without any mso condition. This **a** tag already has radius, which is compatible with another e-mail clients and **if mso** conditions will only work for old outlook applications. So that you can have a cta button with smooth corners. Happy coding!