export const business = {
  "name": "РПК «Ресурс»",
  "slug": "rpk-resurs",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Одна вывеска",
      "detail": "Объёмные буквы, лайтбокс или неон. На исходном сайте есть ориентир от 8 000 ₽ для базового исполнения.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Одна вывеска"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Весь фасад",
      "detail": "Согласованный комплект из вывески, витрин и входной группы.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Весь фасад"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Оформление сети",
      "detail": "Единый подход к рекламному оформлению нескольких точек.",
      "group": "Рекламное оформление",
      "photo": "",
      "url": "",
      "imageAlt": "Оформление сети"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Широкоформатная печать",
      "detail": "Носители для оформления интерьеров и информационных материалов.",
      "group": "Широкий формат",
      "photo": "",
      "url": "",
      "imageAlt": "Широкоформатная печать"
    },
    {
      "id": "p5",
      "oldIndex": null,
      "name": "Навигация для посетителей",
      "detail": "Таблички, указатели и информационные стенды. Соберите список помещений и направлений или приложите план объекта.",
      "group": "Навигация",
      "photo": "",
      "url": "https://xn----7sbbagavscye2ftg.xn--p1ai/navigaciya-i-ukazateli/",
      "imageAlt": "Навигация для посетителей"
    },
    {
      "id": "p6",
      "oldIndex": null,
      "name": "Ремонт вывески",
      "detail": "Восстановление подсветки и замена панелей. Для оценки уточните габариты и приложите фото дефекта.",
      "group": "Монтаж и сервис",
      "photo": "",
      "url": "https://xn----7sbbagavscye2ftg.xn--p1ai/remont-vyvesok/",
      "imageAlt": "Ремонт вывески"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p1",
      "productLabel": "Одна вывеска",
      "label": "Базовая конструкция",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 8 000 ₽ за вывеску",
      "rules": "Ориентир по сроку от трёх дней.",
      "url": "https://xn----7sbbagavscye2ftg.xn--p1ai/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p2",
      "productLabel": "Весь фасад",
      "label": "Оформление объекта",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 18 000 ₽ за объект",
      "rules": "Вывеска, вход и витрины в общем оформлении. Ориентир по сроку от пяти дней.",
      "url": "https://xn----7sbbagavscye2ftg.xn--p1ai/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p3",
      "productLabel": "Оформление сети",
      "label": "Одна точка сети",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 15 000 ₽ за магазин",
      "rules": "Стартовый ориентир за один объект. Срок от семи дней.",
      "url": "https://xn----7sbbagavscye2ftg.xn--p1ai/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p5",
      "productLabel": "Навигация для посетителей",
      "label": "Табличка или указатель",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 1 500 ₽ за изделие",
      "rules": "Ориентир по сроку от двух дней.",
      "url": "https://xn----7sbbagavscye2ftg.xn--p1ai/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t5",
      "product": "p6",
      "productLabel": "Ремонт вывески",
      "label": "Одна работа",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 2 500 ₽ за работу",
      "rules": "Состав ремонта определяется после оценки. Ориентир по сроку от одного дня.",
      "url": "https://xn----7sbbagavscye2ftg.xn--p1ai/",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "size",
      "label": "Ширина × высота, см",
      "type": "text",
      "applies": null
    },
    {
      "key": "address",
      "label": "Адрес объекта",
      "type": "text",
      "applies": null
    },
    {
      "key": "locations",
      "label": "Количество точек",
      "type": "number",
      "applies": [
        2
      ]
    },
    {
      "key": "installation",
      "label": "Монтаж",
      "type": "select",
      "options": [
        "Нужен",
        "Своими силами",
        "Нужно обсудить"
      ],
      "applies": [
        0,
        1,
        2
      ]
    },
    {
      "key": "date",
      "label": "Желаемая дата",
      "type": "date",
      "applies": null
    }
  ],
  "fileLabel": "Макет или фото объекта"
};
