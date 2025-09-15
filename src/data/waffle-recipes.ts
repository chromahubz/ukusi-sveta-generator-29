import { Recipe } from './recipes';

export const waffleRecipes: Record<string, Recipe> = {
  "Belgian Waffles": {
    name: "Belgijski Vafli",
    description: "Hrustljave i vazdušaste belgijske vafle, savršene za doručak ili desert.",
    ingredients: [
      "2 šolje brašna",
      "4 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "2 kašike šećera",
      "2 velika jaja, razdvojena",
      "1 3/4 šolje mleka",
      "1/2 šolje rastopljenog putera",
      "1 kašičica ekstrakta vanile"
    ],
    instructions: [
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "U velikoj činiji pomešajte brašno, prašak za pecivo, so i šećer.",
      "U drugoj činiji umutite žumanca, mleko, rastopljeni puter i ekstrakt vanile.",
      "Dodajte mokre sastojke suvim sastojcima i mešajte dok se ne sjedine (nemojte preterano mešati).",
      "U posebnoj, čistoj činiji, umutite belanca dok se ne formiraju čvrsti vrhovi.",
      "Nežno umešajte umućena belanca u smesu za vafle.",
      "Sipajte smesu na zagrejani aparat za vafle i pecite dok ne postanu zlatno smeđe i hrskave, prema uputstvima proizvođača.",
      "Poslužite toplo sa omiljenim prelivima."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 8,
    notes: [
      "Za bogatiji ukus, dodajte 1/4 šolje kisele pavlake u smesu.",
      "Možete koristiti i bezglutensko brašno.",
      "Vafle se mogu zamrznuti. Ostavite ih da se ohlade pre zamrzavanja."
    ],
    nutrition: {
      calories: "250-300 per vafle (bez preliva)",
      fat: "15-20g",
      carbohydrates: "25-30g",
      protein: "5-7g"
    }
  },

  "American Waffles": {
    name: "Američki Vafli", 
    description: "Klasični američki vafli, savršeni za doručak ili desert. Hrumkavi spolja, mekani iznutra.",
    ingredients: [
      "2 šolje brašna",
      "4 kašičice praška za pecivo", 
      "2 kašike šećera",
      "1/2 kašičice soli",
      "1 3/4 šolje mleka",
      "1/2 šolje rastopljenog putera",
      "2 velika jaja",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "U velikoj činiji, pomešajte brašno, prašak za pecivo, šećer i so.",
      "U drugoj činiji, umutite mleko, rastopljeni puter, jaja i ekstrakt vanile (ako koristite).",
      "Sipajte mokre sastojke u suve sastojke i mešajte dok se ne sjedine. Nemojte previše mešati; testo treba da bude malo grudvičasto.",
      "Sipajte testo na zagrejani aparat za vafle prema uputstvima proizvođača (obično oko 1/2 šolje testa po vafli).",
      "Pecite vafle dok ne postanu zlatno smeđi i hrumkavi, obično 3-5 minuta po vafli.",
      "Poslužite odmah sa omiljenim dodacima (puter, sirup, voće, šlag)."
    ],
    prepTime: "10 minuta",
    cookTime: "15-20 minuta",
    servings: 8,
    notes: [
      "Za pahuljastije vafle, odvojite belanca od žumanaca. Umutite belanca u čvrst sneg, a zatim nežno umešajte u testo.",
      "Možete dodati različite začine u testo, kao što su cimet, muskatni oraščić ili kakao prah.",
      "Testo se može napraviti unapred i čuvati u frižideru do 24 sata."
    ],
    nutrition: {
      calories: "200-250 kcal",
      fat: "10-15g",
      carbohydrates: "25-35g", 
      protein: "5-7g"
    }
  },

  "Chicken and Waffles": {
    name: "Piletina i Vafli",
    description: "Ovo je klasična kombinacija slatkog i slanog, hrskave piletine i mekanih vafla. Savršeno za brunch ili večeru!",
    ingredients: [
      "Za piletinu:",
      "1 kg pilećih bataka ili krilaca",
      "1 šolja buttermilk-a",
      "1 kašičica ljutog sosa (opciono)",
      "1 šolja brašna",
      "1/2 šolje kukuruznog brašna",
      "2 kašičice soli",
      "1 kašičica bibera",
      "1 kašičica belog luka u prahu",
      "1 kašičica paprike",
      "Ulje za prženje",
      "Za vafle:",
      "2 šolje brašna",
      "4 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "2 kašike šećera",
      "2 jajeta",
      "1 3/4 šolje mleka",
      "1/2 šolje istopljenog putera",
      "Za serviranje:",
      "Javorov sirup",
      "Puter"
    ],
    instructions: [
      "Pripremite piletinu: U velikoj posudi pomešajte buttermilk i ljuti sos (ako koristite). Dodajte piletinu, pokrijte i ostavite u frižideru najmanje 30 minuta (ili preko noći).",
      "Pripremite smesu za piletinu: U drugoj posudi pomešajte brašno, kukuruzno brašno, so, biber, beli luk u prahu i papriku.",
      "Pržite piletinu: Izvadite piletinu iz buttermilk-a, ocedite višak tečnosti, i uvaljajte u smesu od brašna, obezbeđujući da je piletina potpuno prekrivena.",
      "U velikom tiganju ili dubokom loncu zagrejte ulje na srednje jakoj vatri. Pažljivo stavite piletinu u vrelo ulje i pržite dok ne postane zlatno smeđa i pečena (oko 15-20 minuta). Okrenite piletinu povremeno kako bi se ravnomerno ispržila.",
      "Izvadite piletinu iz ulja i stavite na papirni ubrus da se ocedi višak masnoće.",
      "Pripremite vafle: U velikoj posudi pomešajte brašno, prašak za pecivo, so i šećer.",
      "U drugoj posudi umutite jaja, mleko i istopljeni puter. Dodajte mokre sastojke u suve i mešajte dok se smesa ne sjedini (nemojte preterano mešati).",
      "Zagrejte aparat za vafle i nauljite ga. Sipajte smesu za vafle u aparat i pecite prema uputstvima proizvođača.",
      "Serviranje: Stavite vafle na tanjir, dodajte prženu piletinu i prelijte javorovim sirupom i komadićem putera."
    ],
    prepTime: "30 minuta",
    cookTime: "30 minuta",
    servings: 4,
    notes: [
      "Možete koristiti i druge delove piletine, kao što su pileći fileti.",
      "Za začinjeniju piletinu, dodajte više ljutog sosa ili kajenske paprike u smesu od brašna.",
      "Vafli se mogu držati toplim u rerni na niskoj temperaturi dok se piletina prži.",
      "Piletina se može pripremiti i u fritezi na vazduh za zdraviju verziju."
    ],
    nutrition: {
      calories: "800-1000",
      protein: "40-50g",
      fat: "40-50g",
      carbohydrates: "80-100g"
    }
  },

  "Strawberry Waffles": {
    name: "Jagoda Vafli",
    description: "Hrskavi vafli preliveni svežim jagodama i šlagom. Savršen doručak ili desert.",
    ingredients: [
      "2 šolje brašna",
      "2 kašičice praška za pecivo",
      "1/2 kašičice sode bikarbone",
      "1/4 kašičice soli",
      "2 kašike šećera",
      "2 velika jaja",
      "1 3/4 šolje mleka",
      "1/2 šolje rastopljenog putera",
      "1 kašičica ekstrakta vanile",
      "1 šolja svežih jagoda, isečenih",
      "Šlag (opciono)",
      "Javorov sirup (opciono)"
    ],
    instructions: [
      "U velikoj činiji, pomešajte brašno, prašak za pecivo, sodu bikarbonu, so i šećer.",
      "U drugoj činiji, umutite jaja, mleko, rastopljeni puter i ekstrakt vanile.",
      "Sjedinite suve i mokre sastojke, mešajte dok se ne sjedine. Nemojte preterano mešati.",
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "Nanesite sprej za kuvanje na aparat za vafle.",
      "Sipajte testo na zagrejan aparat za vafle (količina zavisi od veličine vašeg aparata).",
      "Pecite dok vafli ne postanu zlatno smeđi i hrskavi, oko 3-5 minuta.",
      "Ponovite sa preostalim testom.",
      "Poslužite vafle odmah, preliveni isečenim jagodama, šlagom i javorovim sirupom (ako koristite)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4,
    notes: [
      "Za dodatni ukus, možete dodati 1/2 kašičice cimeta u suve sastojke.",
      "Možete koristiti zamrznute jagode ako nemate sveže.",
      "Vafli su najbolji kada se jedu odmah, ali se mogu čuvati u frižideru do 2 dana. Zagrejati u tosteru ili rerni pre služenja."
    ],
    nutrition: {
      calories: "350",
      fat: "20g",
      saturatedFat: "12g",
      cholesterol: "100mg",
      sodium: "400mg",
      carbohydrates: "40g",
      sugar: "15g",
      protein: "8g"
    }
  },

  "Chocolate Waffles": {
    name: "Čokolada Vafli",
    description: "Ukusne i čokoladne waffles savršene za doručak ili desert.",
    ingredients: [
      "1 1/2 šolje brašna",
      "1/2 šolje kakao praha",
      "1/4 šolje šećera",
      "2 kašičice praška za pecivo",
      "1/4 kašičice soli",
      "1 1/2 šolje mleka",
      "1/3 šolje otopljenog putera",
      "2 velika jaja",
      "1 kašičica ekstrakta vanile",
      "Čokoladne kapljice (opciono)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte brašno, kakao prah, šećer, prašak za pecivo i so.",
      "U drugoj posudi, umutite mleko, otopljeni puter, jaja i ekstrakt vanile.",
      "Sipajte mokre sastojke u suve sastojke i mešajte dok se ne sjedine. Nemojte premešati.",
      "Ako želite, umešajte čokoladne kapljice.",
      "Zagrejte aparat za waffles.",
      "Nanesite malo ulja ili spreja za kuvanje na aparat.",
      "Sipajte odgovarajuću količinu testa na vreli aparat za waffles.",
      "Pecite dok waffles ne postanu zlatno smeđi i hrskavi (oko 2-3 minuta).",
      "Poslužite toplo sa omiljenim dodacima."
    ],
    prepTime: "10 minuta",
    cookTime: "2-3 minuta po waffle-u",
    servings: 8,
    notes: [
      "Za bogatiji ukus, dodajte malo espressa u testo.",
      "Poslužite sa šlagom, svežim voćem, sirupom od čokolade ili sladoledom.",
      "Testo se može čuvati u frižideru do 24 sata."
    ],
    nutrition: {
      calories: "250-300",
      fat: "12-15g",
      carbohydrates: "30-35g",
      protein: "6-8g"
    }
  },

  "Blueberry Waffles": {
    name: "Borovnica Vafli",
    description: "Ukusan i jednostavan recept za vazdušaste vafle sa borovnicama. Savršen doručak ili desert!",
    ingredients: [
      "2 šolje brašna",
      "4 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "2 kašike šećera",
      "2 velika jaja",
      "1 3/4 šolje mleka",
      "1/2 šolje istopljenog putera",
      "1 kašičica ekstrakta vanile",
      "1 šolja svežih ili zamrznutih borovnica"
    ],
    instructions: [
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "U velikoj posudi pomešajte brašno, prašak za pecivo, so i šećer.",
      "U drugoj posudi umutite jaja, mleko, istopljeni puter i ekstrakt vanile.",
      "Dodajte mokre sastojke u suve sastojke i mešajte dok se smesa ne sjedini (nemojte previše mešati).",
      "Nežno umešajte borovnice.",
      "Sipajte smesu u zagrejani aparat za vafle prema uputstvima proizvođača.",
      "Pecite vafle dok ne postanu zlatno smeđe i hrskave (obično 3-5 minuta).",
      "Poslužite odmah sa omiljenim prelivima (javorov sirup, voće, šlag)."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 8,
    notes: [
      "Za dodatni ukus, možete dodati malo limunove korice u smesu.",
      "Ako koristite zamrznute borovnice, nemojte ih odmrznuti pre dodavanja u smesu.",
      "Vafle se mogu zamrznuti. Ostavite ih da se ohlade, a zatim ih stavite u zamrzivač u jednom sloju. Nakon što se zamrznu, prebacite ih u kesu za zamrzavanje. Zagrejte ih u tosteru ili rerni."
    ],
    nutrition: {
      calories: "250-300",
      fat: "12-15g",
      carbohydrates: "30-40g",
      protein: "5-7g"
    }
  },

  "Banana Waffles": {
    name: "Banana Vafli",
    description: "Ukusne i mekane waffles sa aromom banane, idealne za doručak ili desert.",
    ingredients: [
      "1 1/2 šolje brašna",
      "2 kašičice praška za pecivo",
      "1/2 kašičice sode bikarbone",
      "1/4 kašičice soli",
      "1 kašika šećera",
      "1 jaje",
      "1 1/4 šolje mleka",
      "1/4 šolje otopljenog putera",
      "1 zrela banana, izgnječena",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "U velikoj činiji, pomešajte brašno, prašak za pecivo, sodu bikarbonu, so i šećer.",
      "U drugoj činiji, umutite jaje, mleko i otopljeni puter.",
      "Dodajte izgnječenu bananu i ekstrakt vanile (ako koristite) u tečne sastojke.",
      "Sipajte tečne sastojke u suve sastojke i mešajte dok se ne sjedine. Nemojte previše mešati.",
      "Zagrejte aparat za waffles.",
      "Sipajte kutlaču testa na zagrejani aparat i pecite dok waffles ne postanu zlatno-braon, oko 3-5 minuta.",
      "Ponovite sa preostalim testom.",
      "Poslužite toplo sa omiljenim prelivima."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 6,
    notes: [
      "Možete dodati orahe, čokoladne mrvice ili cimet u testo za dodatni ukus.",
      "Waffles se mogu zamrznuti i ponovo zagrejati u tosteru.",
      "Za tanje waffles, dodajte još malo mleka u testo."
    ],
    nutrition: {
      calories: "200-250",
      fat: "8-12g",
      carbohydrates: "25-35g",
      protein: "4-6g"
    }
  },

  "Pecan Waffles": {
    name: "Pekan Vafli",
    description: "Hrskave i ukusne vafle sa pekan orasima, savršene za doručak ili brunch.",
    ingredients: [
      "1 1/2 šolje brašna",
      "2 kašičice praška za pecivo",
      "1/2 kašičice sode bikarbone",
      "1/4 kašičice soli",
      "2 kašike šećera",
      "1 1/4 šolje mleka",
      "1/4 šolje rastopljenog putera",
      "1 veliko jaje",
      "1 kašičica ekstrakta vanile",
      "1/2 šolje seckanih pekan oraha"
    ],
    instructions: [
      "U velikoj posudi, pomešajte brašno, prašak za pecivo, sodu bikarbonu, so i šećer.",
      "U drugoj posudi, umutite mleko, rastopljeni puter, jaje i ekstrakt vanile.",
      "Ulijte mokre sastojke u suve sastojke i mešajte dok se samo ne sjedine. Nemojte previše mešati.",
      "Umešajte seckane pekan orahe.",
      "Zagrejte aparat za vafle.",
      "Namazite aparat za vafle uljem ili sprejom za pečenje.",
      "Sipajte testo na zagrejani aparat za vafle, prema uputstvima proizvođača.",
      "Pecite vafle dok ne postanu zlatno smeđe i hrskave.",
      "Poslužite odmah sa omiljenim dodacima."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 6,
    notes: [
      "Za dodatni ukus, možete dodati malo cimeta ili muskatnog oraščića u testo.",
      "Vafle se mogu držati tople u rerni na niskoj temperaturi dok se sve ne ispeku.",
      "Poslužite sa javorovim sirupom, voćem, šlagom ili sladoledom."
    ],
    nutrition: {
      calories: "250",
      fat: "15g",
      saturatedFat: "7g",
      cholesterol: "50mg",
      sodium: "300mg",
      carbohydrates: "25g",
      sugar: "8g",
      protein: "5g"
    }
  },

  "Cinnamon Waffles": {
    name: "Cimet Vafli",
    description: "Hrskave waffle sa ukusom cimeta, idealne za doručak ili desert.",
    ingredients: [
      "2 šolje brašna",
      "4 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "2 kašičice cimeta",
      "2 kašike šećera",
      "2 velika jaja",
      "1 3/4 šolje mleka",
      "1/2 šolje rastopljenog putera",
      "1 kašičica ekstrakta vanile"
    ],
    instructions: [
      "Zagrejte aparat za waffle.",
      "U velikoj posudi pomešajte brašno, prašak za pecivo, so, cimet i šećer.",
      "U drugoj posudi umutite jaja, mleko, rastopljeni puter i ekstrakt vanile.",
      "Sipajte mokre sastojke u suve sastojke i mešajte dok se sve ne sjedini. Nemojte previše mešati.",
      "Sipajte testo na zagrejani aparat za waffle i pecite dok ne dobiju zlatno-smeđu boju, obično 3-5 minuta.",
      "Poslužite toplo sa omiljenim prelivima."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 6,
    notes: [
      "Za dodatni ukus, dodajte 1/4 šolje seckanih oraha u testo.",
      "Waffle se mogu zamrznuti. Ostavite ih da se ohlade pre zamrzavanja."
    ],
    nutrition: {
      calories: "250",
      fat: "15g",
      carbohydrates: "25g",
      protein: "5g"
    }
  },

  "Protein Waffles": {
    name: "Protein Vafli",
    description: "Ukusne i hranljive waffle bogate proteinima, savršene za doručak ili užinu.",
    ingredients: [
      "1 šolja ovsenih pahuljica",
      "1 merica proteina u prahu (ukus vanile ili po izboru)",
      "1 kašičica praška za pecivo",
      "1/2 kašičice cimeta",
      "1 jaje",
      "1 šolja mleka (običnog ili bademovog)",
      "1 kašika kokosovog ulja (rastopljenog)",
      "Opciono: zaslađivač (stevija, javorov sirup) po ukusu"
    ],
    instructions: [
      "U blenderu, sameljite ovsene pahuljice u fino brašno.",
      "U velikoj činiji, pomešajte ovseno brašno, protein u prahu, prašak za pecivo i cimet.",
      "U drugoj činiji, umutite jaje, mleko i rastopljeno kokosovo ulje.",
      "Dodajte mokre sastojke u suve sastojke i dobro promešajte dok se ne sjedine.",
      "Po potrebi dodajte zaslađivač po ukusu.",
      "Zagrejte aparat za waffle.",
      "Sipajte smesu u zagrejani aparat za waffle (količina zavisi od veličine aparata).",
      "Pecite waffle 2-3 minuta ili dok ne postanu zlatno smeđe i hrskave.",
      "Poslužite toplo sa omiljenim dodacima (voće, jogurt, orašasti plodovi, med)."
    ],
    prepTime: "5 minuta",
    cookTime: "10-12 minuta",
    servings: 4,
    notes: [
      "Za dodatnu aromu, možete dodati ekstrakt vanile ili limunovu koricu u smesu.",
      "Ako vam je smesa pregusta, dodajte još malo mleka.",
      "Možete koristiti biljno ulje umesto kokosovog ulja."
    ],
    nutrition: {
      calories: "200-250 kcal",
      protein: "15-20g",
      carbohydrates: "20-25g",
      fat: "8-12g"
    }
  },

  "Gluten-Free Waffles": {
    name: "Vafli bez Glutena",
    description: "Savršene hrskave vafle bez glutena, idealne za doručak ili dezert.",
    ingredients: [
      "1 1/2 šolje gluten-free brašna za sve namene",
      "2 kašičice praška za pecivo",
      "1/2 kašičice sode bikarbone",
      "1/4 kašičice soli",
      "2 kašike šećera",
      "1 3/4 šolje mleka (ili mleka bez laktoze)",
      "1/3 šolje otopljenog putera (ili ulja)",
      "2 velika jajeta",
      "1 kašičica ekstrakta vanile"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, prašak za pecivo, sodu bikarbonu, so i šećer.",
      "U drugoj posudi umutiti mleko, otopljeni puter, jaja i vanilu.",
      "Sipati mokre sastojke u suve sastojke i mešati dok se ne sjedine. Ne preterujte sa mešanjem.",
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "Sprej za vafle aparat sa sprejom za kuvanje.",
      "Sipajte testo na zagrejani aparat za vafle (obično oko 1/2 šolje testa po vaflu, ali pratite uputstva aparata).",
      "Pecite dok vafli ne postanu zlatno smeđi i hrskavi (obično 3-5 minuta).",
      "Izvadite vafle i poslužite ih tople sa željenim dodacima."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 8,
    notes: [
      "Za slađe vafle, dodajte još šećera u testo.",
      "Dodajte cimet ili druge začine u testo za dodatni ukus.",
      "Vafle možete držati tople u rerni na niskoj temperaturi dok ne budete spremni da ih poslužite.",
      "Poslužite sa svežim voćem, šlagom, sirupom ili čokoladnim prelivom."
    ],
    nutrition: {
      calories: "200-250",
      protein: "5-7g",
      fat: "10-12g",
      carbohydrates: "25-30g"
    }
  },

  "Vegan Waffles": {
    name: "Veganski Vafli",
    description: "Ukusne i hrskave veganske vafle, savršene za doručak ili desert. Lako se prave i mogu se kombinovati sa različitim dodacima.",
    ingredients: [
      "200g brašna",
      "2 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "1 kašika šećera",
      "300ml biljnog mleka (bademovo, sojino, ovseno)",
      "60ml ulja (biljno, kokosovo otopljeno)",
      "1 kašičica ekstrakta vanile"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, prašak za pecivo, so i šećer.",
      "U drugoj posudi umutiti biljno mleko, ulje i ekstrakt vanile.",
      "Sjediniti suve i mokre sastojke, mešajući dok se ne dobije glatka smesa (pazite da ne preterate sa mešanjem).",
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "Nanesite smesu na zagrejan aparat za vafle (količina zavisi od veličine aparata).",
      "Pecite vafle dok ne postanu zlatno smeđe i hrskave (obično 3-5 minuta).",
      "Poslužite odmah sa omiljenim dodacima."
    ],
    prepTime: "10 minuta",
    cookTime: "15-20 minuta",
    servings: 8,
    notes: [
      "Možete dodati začine kao što su cimet ili muskatni oraščić za dodatni ukus.",
      "Za čokoladne vafle, dodajte 2 kašike kakao praha u suve sastojke.",
      "Vafle se mogu čuvati u frižideru do 3 dana. Podgrejte ih u tosteru ili rerni pre posluživanja."
    ],
    nutrition: {
      calories: "200-250",
      fat: "10-15g",
      carbohydrates: "25-30g",
      protein: "3-5g"
    }
  },

  "Ice Cream Waffles": {
    name: "Sladoled Vafli",
    description: "Hrskave waffle, tople i savršeno uparene sa hladnim sladoledom. Idealan desert za svaku priliku.",
    ingredients: [
      "1 šolja brašna",
      "1 kašika šećera",
      "2 kašičice praška za pecivo",
      "1/4 kašičice soli",
      "1 jaje",
      "1 šolja mleka",
      "4 kašike rastopljenog putera",
      "1 kašičica ekstrakta vanile",
      "Sladoled po izboru",
      "Preliv po izboru (čokoladni, karamel)",
      "Voće (jagode, banane, borovnice) - opciono"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, šećer, prašak za pecivo i so.",
      "U drugoj posudi umutiti jaje, mleko, rastopljeni puter i ekstrakt vanile.",
      "Sjediniti mokre i suve sastojke. Mešati dok se ne dobije glatka smesa.",
      "Zagrejte aparat za waffle.",
      "Sipajte smesu u aparat i pecite waffle dok ne postanu zlatno smeđe i hrskave (oko 3-5 minuta, zavisno od aparata).",
      "Izvadite waffle i odmah ih poslužite sa kuglama sladoleda, prelivom i voćem po želji."
    ],
    prepTime: "10 minuta",
    cookTime: "5-7 minuta",
    servings: 4,
    notes: [
      "Za bogatiji ukus, dodajte malo cimeta ili muškatnog oraščića u smesu.",
      "Waffle možete poslužiti i sa šlagom.",
      "Ako nemate aparat za waffle, možete koristiti smesu za palačinke i ispeći ih na tiganju."
    ],
    nutrition: {
      calories: "350-450 kcal",
      carbohydrates: "40-50g",
      protein: "8-10g",
      fat: "15-25g"
    }
  },

  "Savory Waffles": {
    name: "Slani Vafli",
    description: "Hrskave i ukusne slane vafle, savršene za doručak, ručak ili večeru. Odlične su uz prženo jaje, avokado ili omiljeni namaz.",
    ingredients: [
      "1 1/2 šolje brašna",
      "1 kašika praška za pecivo",
      "1/2 kašičice sode bikarbone",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "1 šolja mleka",
      "1/4 šolje rastopljenog putera",
      "1 veliko jaje",
      "1/2 šolje rendanog sira (čedar, gauda ili po izboru)",
      "2 kašike sitno seckanog vlašca ili zelenog luka (opciono)"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno, prašak za pecivo, sodu bikarbonu, so i biber.",
      "U drugoj posudi umutite mleko, rastopljeni puter i jaje.",
      "Sipajte mokre sastojke u suve sastojke i mešajte dok se sve ne sjedini. Nemojte previše mešati.",
      "Umešajte rendani sir i vlašac (ako koristite).",
      "Zagrejte aparat za vafle.",
      "Premažite aparat za vafle uljem ili sprejom za pečenje.",
      "Sipajte oko 1/2 šolje testa na zagrejani aparat za vafle za svaku vaflu.",
      "Pecite vafle 3-5 minuta, ili dok ne postanu zlatno smeđe i hrskave.",
      "Poslužite odmah sa omiljenim dodacima."
    ],
    prepTime: "10 minuta",
    cookTime: "15-20 minuta",
    servings: 4,
    notes: [
      "Za dodatni ukus, možete dodati seckanu slaninu, šunku ili sunčane sušene paradajze u testo.",
      "Vafle možete držati tople u rerni na niskoj temperaturi (100°C) dok pripremate ostale."
    ],
    nutrition: {
      calories: "250-300",
      protein: "10-12g",
      fat: "15-20g",
      carbohydrates: "20-25g"
    }
  },

  "Mini Waffles": {
    name: "Mini Vafli",
    description: "Mali, hrskavi waffles, savršeni za doručak, desert ili užinu.",
    ingredients: [
      "1 šolja brašna",
      "1 kašika šećera",
      "2 kašičice praška za pecivo",
      "1/4 kašičice soli",
      "1 jaje",
      "3/4 šolje mleka",
      "4 kašike otopljenog putera",
      "1/2 kašičice ekstrakta vanile"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, šećer, prašak za pecivo i so.",
      "U drugoj posudi umutiti jaje, mleko, otopljeni puter i ekstrakt vanile.",
      "Sipati mokre sastojke u suve sastojke i mešati dok se ne sjedini. Nemojte preterivati sa mešanjem.",
      "Zagrejte mini aparat za waffles.",
      "Sipajte oko 1-2 kašike testa na vruć aparat za waffles za svaki waffle.",
      "Pecite 2-3 minuta, ili dok ne postanu zlatno-smeđe boje.",
      "Ponovite sa preostalim testom."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 20,
    notes: [
      "Za dodatni ukus, dodajte cimet, čokoladne komadiće ili voće u testo.",
      "Poslužite sa omiljenim prelivima kao što su javorov sirup, voće, šlag ili nutella.",
      "Waffles se mogu zamrznuti. Ostavite ih da se ohlade, a zatim ih stavite u kesu za zamrzavanje. Zagrejati u tosteru ili rerni pre posluživanja."
    ],
    nutrition: {
      calories: "50",
      fat: "3g",
      carbohydrates: "5g",
      protein: "1g"
    }
  },

  "Waffle Sundae": {
    name: "Vafl Sunde",
    description: "Ovaj desert je savršena kombinacija toplih vafla i hladnog sladoleda, prelivena ukusnim dodacima. Idealno za deljenje ili za pojedinačno uživanje.",
    ingredients: [
      "2 sveže pečena vafla (ili gotovi vafli)",
      "2 kugle sladoleda po izboru (vanila, čokolada, jagoda...)",
      "2 kašike čokoladnog preliva",
      "2 kašike karamel preliva",
      "2 kašike šlaga (opciono)",
      "2 kašike seckanih oraha ili lešnika (opciono)",
      "Višnje ili sveže voće za dekoraciju (opciono)"
    ],
    instructions: [
      "Ako koristite gotove vafle, zagrejte ih u tosteru ili rerni dok ne budu topli.",
      "Stavite po jedan vafel na svaki tanjir.",
      "Na svaki vafel stavite po jednu kuglu sladoleda.",
      "Prelijte sladoled čokoladnim i karamel prelivom.",
      "Dodajte šlag, seckane orahe ili lešnike, ako želite.",
      "Ukrasite višnjama ili svežim voćem.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "5-10 minuta",
    servings: 2,
    notes: [
      "Možete koristiti različite vrste sladoleda, preliva i dodataka po vašem ukusu.",
      "Za dodatni ukus, možete dodati malo cimeta ili šećera u prahu na vafle pre serviranja.",
      "Vafle možete pripremiti sami prema vašem omiljenom receptu."
    ],
    nutrition: {
      calories: "500-700 (zavisno od sastojaka)",
      fat: "20-40g",
      carbohydrates: "60-80g",
      protein: "10-15g"
    }
  },

  "Maple Syrup Waffles": {
    name: "Javorov Sirup Vafli",
    description: "Hrskavi vafli preliveni slatkim javorovim sirupom, savršeni za doručak ili brunch.",
    ingredients: [
      "1 ¾ šolje (220g) brašna",
      "1 kašika praška za pecivo",
      "¼ kašičice sode bikarbone",
      "¼ kašičice soli",
      "2 kašike šećera",
      "1 ¾ šolje (420ml) mleka",
      "½ šolje (120ml) rastopljenog putera",
      "2 velika jajeta",
      "1 kašičica ekstrakta vanile",
      "Maple syrup (javorov sirup) za preliv"
    ],
    instructions: [
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "U velikoj posudi pomešajte brašno, prašak za pecivo, sodu bikarbonu, so i šećer.",
      "U drugoj posudi umutite mleko, rastopljeni puter, jaja i ekstrakt vanile.",
      "Dodajte mokre sastojke suvim sastojcima i mešajte dok se smesa ne sjedini. Nemojte preterano mešati; male grudvice su u redu.",
      "Namažite aparat za vafle uljem ili sprejem za kuvanje.",
      "Sipajte odgovarajuću količinu testa na aparat za vafle (obično ½ - ¾ šolje po vaflu), prema uputstvima proizvođača.",
      "Pecite vafle dok ne postanu zlatno smeđi i hrskavi, obično 3-5 minuta.",
      "Izvadite vafle iz aparata i odmah poslužite sa javorovim sirupom."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 6,
    notes: [
      "Za dodatni ukus, u testo možete dodati cimet ili muskatni oraščić.",
      "Vafle možete čuvati u frižideru do 3 dana i podgrejati u tosteru ili rerni.",
      "Umesto javorovog sirupa, možete koristiti sveže voće, šlag, čokoladni sirup ili druge omiljene prelive."
    ],
    nutrition: {
      calories: "300",
      fat: "15g",
      saturatedFat: "9g",
      cholesterol: "75mg",
      sodium: "300mg",
      carbohydrates: "35g",
      sugar: "10g",
      protein: "6g"
    }
  },

  "Butter Waffles": {
    name: "Puter Vafli",
    description: "Hrskave i ukusne waffle sa bogatim ukusom putera, idealne za doručak ili desert.",
    ingredients: [
      "2 šolje brašna",
      "2 kašičice praška za pecivo",
      "1/4 kašičice soli",
      "2 kašike šećera",
      "2 jaja",
      "1 3/4 šolje mleka",
      "1/2 šolje istopljenog putera, plus dodatno za premazivanje waffle pekača",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte brašno, prašak za pecivo, so i šećer.",
      "U drugoj posudi, umutite jaja, mleko, istopljeni puter i vanilu (ako koristite).",
      "Sjedinite suve i mokre sastojke, mešajući dok se smesa ne sjedini. Nemojte preterano mešati.",
      "Zagrejte waffle pekač i premažite ga istopljenim puterom.",
      "Sipajte odgovarajuću količinu smese na vreli waffle pekač (pratite uputstvo za vaš aparat).",
      "Pecite waffle dok ne postanu zlatno smeđe i hrskave, obično oko 3-5 minuta po strani.",
      "Ponovite postupak sa preostalom smesom.",
      "Poslužite tople waffle sa omiljenim prelivima, kao što su voće, šlag, sirup ili puter."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 6,
    notes: [
      "Za dodatnu aromu, dodajte cimet ili muskatni oraščić u suve sastojke.",
      "Smesa se može pripremiti unapred i čuvati u frižideru do 24 sata.",
      "Ako želite tanje waffle, dodajte još malo mleka u smesu."
    ],
    nutrition: {
      calories: "250-300",
      fat: "15-20g",
      carbohydrates: "25-30g",
      protein: "5-7g"
    }
  },

  "Cream Waffles": {
    name: "Krem Vafli",
    description: "Brzi i jednostavni vafli, mekši i bogatiji zahvaljujući dodatku kisele pavlake. Savršeni za doručak ili desert.",
    ingredients: [
      "2 šolje brašna",
      "4 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "2 kašike šećera",
      "2 jaja",
      "1 3/4 šolje mleka",
      "1/2 šolje kisele pavlake",
      "1/4 šolje otopljenog putera",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "Zagrejte aparat za vafle prema uputstvu proizvođača.",
      "U velikoj posudi pomešajte brašno, prašak za pecivo, so i šećer.",
      "U drugoj posudi umutite jaja, mleko, kiselu pavlaku, otopljeni puter i ekstrakt vanile (ako koristite).",
      "Suve sastojke dodajte mokrim sastojcima i mešajte dok se sve ne sjedini. Nemojte preterivati sa mešanjem; nekoliko grudvica je u redu.",
      "Sipajte odgovarajuću količinu smese na zagrejani aparat za vafle (pratite uputstvo aparata).",
      "Pecite vafle dok ne postanu zlatno smeđi i hrskavi, obično 3-5 minuta po vaflu.",
      "Servirajte toplo sa omiljenim prelivima (voće, javorov sirup, šlag, itd.)."
    ],
    prepTime: "5 minuta",
    cookTime: "15-20 minuta",
    servings: 8,
    notes: [
      "Za lakše sipanje smese, koristite kutlaču ili mernu šolju.",
      "Vafle možete držati toplim u rerni na niskoj temperaturi (oko 90°C) dok pripremate ostatak.",
      "Ako želite slađe vafle, dodajte još malo šećera u smesu."
    ],
    nutrition: {
      calories: "200-250",
      fat: "8-12g",
      carbohydrates: "25-35g",
      protein: "5-7g"
    }
  },

  "Fruit Waffles": {
    name: "Voćni Vafli",
    description: "Osvežavajuće vafle prelivene svežim voćem. Idealne za doručak ili dezert.",
    ingredients: [
      "1 ½ šolja brašna",
      "2 kašičice praška za pecivo",
      "¼ kašičice soli",
      "2 kašike šećera",
      "1 ¼ šolje mleka",
      "1 jaje",
      "4 kašike otopljenog putera",
      "1 kašičica ekstrakta vanile",
      "Mešano sveže voće (jagode, borovnice, banane, maline) za serviranje",
      "Javorov sirup ili šlag (opciono)"
    ],
    instructions: [
      "U velikoj činiji pomešati brašno, prašak za pecivo, so i šećer.",
      "U drugoj činiji umutiti mleko, jaje, otopljeni puter i ekstrakt vanile.",
      "Sjediniti suve i mokre sastojke, mešajući samo dok se ne sjedine (ne preterivati).",
      "Zagrejte aparat za vafle.",
      "Sipati testo u aparat za vafle prema uputstvima proizvođača.",
      "Peći dok vafle ne budu zlatno braon i hrskave.",
      "Servirati tople vafle sa mešanim svežim voćem i po želji sa javorovim sirupom ili šlagom."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4,
    notes: [
      "Za dodatni ukus, u testo možete dodati rendanu koru limuna ili pomorandže.",
      "Vafle se mogu čuvati u frižideru do 2 dana i podgrejati u tosteru."
    ],
    nutrition: {
      calories: "250",
      fat: "12g",
      carbohydrates: "30g",
      protein: "6g"
    }
  }
};