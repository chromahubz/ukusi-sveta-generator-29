import type { Recipe } from './recipes';

export const lunchRecipes: Record<string, Recipe> = {
  "Club Sandwich": {
    name: "Club Sandwich",
    ingredients: [
      "6 kriški tosta",
      "100g pilećeg filea, pečenog ili grilovanog i isečenog",
      "4 kriške slanine, pržene",
      "2 lista zelene salate",
      "1 paradajz, isečen na kriške",
      "4 kriške sira (cheddar, gauda ili ementaler)",
      "2 kašike majoneza",
      "1 kašika senfa (opciono)",
      "Malo putera za tostiranje"
    ],
    instructions: [
      "Tostirajte kriške tosta do zlatno smeđe boje (po želji premažite tankim slojem putera).",
      "Dve kriške tosta premažite majonezom (i senfom po želji).",
      "Na jednu krišku stavite salatu, paradajz, 2 kriške sira i polovinu piletine.",
      "Preko piletine stavite dve kriške pržene slanine.",
      "Na drugu namazanu krišku stavite preostalu piletinu, 2 kriške sira i list salate.",
      "Stavite drugu krišku tosta preko slanine.",
      "Prekrijte trećom kriškom tosta (po želji premažite).",
      "Ponovite postupak za drugi sendvič.",
      "Fiksirajte čačkalicama i isecite na polovine ili četvrtine.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Caesar Salad": {
    name: "Caesar Salad",
    ingredients: [
      "1 glavica rimske salate, oprana i iseckana",
      "1/2 šolje krutona",
      "1/4 šolje rendanog parmezana",
      "2 žumanca",
      "2 čena belog luka, sitno iseckana",
      "1 kašika Dijon senfa",
      "2 kašike limunovog soka",
      "1/4 šolje maslinovog ulja",
      "2 kašike rendanog parmezana (za dresing)",
      "So i biber po ukusu",
      "1 kašičica Worcestershire sosa (opciono)",
      "2 inćuna, sitno iseckana (opciono)"
    ],
    instructions: [
      "Dresing: U činiji sjedinite žumanca, beli luk, senf i limunov sok.",
      "Postepeno dodajte maslinovo ulje, neprekidno mešajući do emulzije.",
      "Umešajte parmezan, so, biber, Worcestershire i inćune (ako koristite).",
      "Salata: Pomešajte rimsku salatu, krutone i parmezan.",
      "Prelijte dresingom, promešajte i poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "5 minuta",
    servings: 2
  },

  "Soup and Sandwich": {
    name: "Soup and Sandwich",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 srednja glavica crnog luka, iseckana",
      "2 čena belog luka, izgnječena",
      "500g paradajza iz konzerve, iseckanog",
      "500ml povrtnog bujona",
      "1/2 kašičice suvog bosiljka",
      "So i biber po ukusu",
      "Sveži bosiljak (opciono)",
      "4 kriške hleba",
      "2 kašike putera",
      "100g sira (gauda, cheddar ili mocarela), narendanog",
      "50g šunke, iseckane (opciono)"
    ],
    instructions: [
      "Supa: U loncu zagrejte ulje, dinstajte luk 5 min, dodajte beli luk 1 min.",
      "Dodajte paradajz, bujon i bosiljak; kuvajte 15 min, izmiksajte i začinite.",
      "Sendvič: Hleb premažite puterom spolja, napunite sirom (i šunkom).",
      "Pecite u tiganju 3-4 min sa svake strane do zlatne boje i topljenog sira.",
      "Poslužite sendvič uz toplu supu."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Grilled Chicken": {
    name: "Grilled Chicken",
    ingredients: [
      "4 pileća prsa (oko 150g svako)",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "1 kašičica belog luka u prahu",
      "1 kašičica mlevene paprike",
      "1/2 kašičice sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "Pomešajte ulje, limun, beli luk u prahu, papriku, origano, so i biber.",
      "Piletinu premažite i marinirajte 30 min (idealno 2-4 sata).",
      "Zagrejte roštilj na srednju temperaturu.",
      "Pecite 6-8 min po strani do 74°C unutrašnje temperature.",
      "Odmorite 5 min, isecite i poslužite."
    ],
    prepTime: "15 minuta",
    cookTime: "20-25 minuta",
    servings: 4
  },

  "Pasta Salad": {
    name: "Pasta Salad",
    ingredients: [
      "500g testenine (penne, fusilli, farfalle)",
      "1 crvena paprika, iseckana",
      "1 zelena paprika, iseckana",
      "1 krastavac, iseckan",
      "1/2 crvenog luka, sitno iseckanog",
      "1 šolja čeri paradajza, prepolovljenog",
      "1/2 šolje crnih maslina, iseckanih",
      "100g feta sira, izmrvljenog (opciono)",
      "1/4 šolje svežeg peršuna, iseckanog",
      "1/4 šolje maslinovog ulja",
      "3 kašike belog vinskog sirćeta",
      "1 kašičica senfa",
      "1/2 kašičice belog luka u prahu",
      "So i biber po ukusu"
    ],
    instructions: [
      "Skuvajte testeninu, ocedite, isperite hladnom vodom i ohladite.",
      "U činiji sjedinite testeninu, povrće i masline.",
      "Umutite ulje, sirće, senf, beli luk u prahu, so i biber.",
      "Prelijte, promešajte, dodajte fetu i peršun i kratko ohladite.",
      "Poslužite rashlađeno."
    ],
    prepTime: "20 minuta",
    cookTime: "12 minuta",
    servings: 6
  },

  "Wrap": {
    name: "Wrap",
    ingredients: [
      "1 velika tortilja",
      "50g pilećeg filea, pečenog ili grilovanog, na trake",
      "1/4 avokada, kriške",
      "1/4 crvene paprike, trake",
      "1 šaka baby spanaća",
      "2 kašike humusa ili dresinga"
    ],
    instructions: [
      "Zagrejte tortilju kratko.",
      "Namažite humus/dresing, rasporedite spanać.",
      "Dodajte piletinu, avokado i papriku.",
      "Urolajte savijajući krajeve i presecite na pola."
    ],
    prepTime: "5 minuta",
    cookTime: "5 minuta",
    servings: 1
  },

  "Quiche": {
    name: "Quiche",
    ingredients: [
      "250g brašna",
      "125g hladnog putera, kockice",
      "50ml hladne vode",
      "Prstohvat soli",
      "200g slanine, kockice",
      "1 srednji luk, sitno iseckan",
      "4 velika jaja",
      "200ml pavlake za kuvanje",
      "100ml mleka",
      "100g rendanog sira",
      "So, biber, muškatni oraščić (opciono)"
    ],
    instructions: [
      "Testo: Utrljajte puter u brašno sa solju do mrvica, dodajte vodu i kratko zamesite.",
      "Ohladite 30 min, razvaljajte i stavite u kalup, izbockajte dno.",
      "Fil: Propržite slaninu do hrskavog, dodajte luk da omekša.",
      "Umutite jaja, pavlaku i mleko, začinite.",
      "Na dno stavite deo sira, rasporedite slaninu i luk, prelijte smesom.",
      "Pospite preostalim sirom i pecite na 180°C 45-55 min do zlatnog."
    ],
    prepTime: "30 minuta",
    cookTime: "45-55 minuta",
    servings: 6
  },

  "Stir Fry": {
    name: "Stir Fry",
    ingredients: [
      "500g pilećeg filea, kockice",
      "1 crvena paprika, trake",
      "1 zelena paprika, trake",
      "1 šargarepa, štapići",
      "1 brokoli, cvetići",
      "1 luk, iseckan",
      "2 čena belog luka, sitno",
      "2 cm đumbira, sitno",
      "3 kašike soja sosa",
      "1 kašika meda",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica susamovog ulja",
      "2 kašike biljnog ulja",
      "Susam (opciono)",
      "Kuvani pirinač za serviranje"
    ],
    instructions: [
      "Pomešajte soja sos, med, sirće i susamovo ulje (sos).",
      "Zagrejte biljno ulje, ispržite piletinu 5-7 min, izvadite.",
      "Dinstajte luk, beli luk, đumbir 2 min, dodajte povrće 5 min.",
      "Vratite piletinu, prelijte sosom i kuvajte 2-3 min do zgušnjavanja.",
      "Servirajte preko pirinča, pospite susamom."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Rice Bowl": {
    name: "Rice Bowl",
    ingredients: [
      "1 šolja pirinča",
      "2 šolje vode",
      "1 kašičica soli",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašičica meda",
      "1/2 kašičice rendanog đumbira",
      "2 čena belog luka, sitno",
      "200g pilećeg filea (ili tofu), kockice",
      "1 kašika biljnog ulja",
      "1 šargarepa, štapići",
      "1 krastavac, štapići",
      "1 avokado, kriške (opciono)",
      "Susam i zeleni luk za posipanje"
    ],
    instructions: [
      "Skuvajte pirinač sa vodom i solju; odmorite 5 min.",
      "Pomešajte soja sos, susamovo ulje, med, đumbir i beli luk.",
      "Ispržite piletinu/tofu do rumenog, dodajte sos i krčkajte 2-3 min.",
      "Servirajte u činijama sa pirinčem i povrćem; pospite susamom i lukom."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Grain Bowl": {
    name: "Grain Bowl",
    ingredients: [
      "1/2 šolje kuvane kinoe (ili druge žitarice)",
      "1 šolja lisnatog zelenila",
      "1/2 šolje pečenog batata, kockice",
      "1/4 šolje leblebija, oceđenih",
      "1/4 avokada, kriške",
      "2 kašike semenki suncokreta",
      "2 kašike preliva po izboru",
      "So i biber"
    ],
    instructions: [
      "Ako nije kuvano, skuvajte žitarice.",
      "Složite žitarice u činiju, dodajte zelenilo, batat, leblebije i avokado.",
      "Pospite semenkama i prelijte dresingom; začinite po ukusu."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 1
  },

  "Panini": {
    name: "Panini",
    ingredients: [
      "2 ciabatta zemičke",
      "4 kriške pršute (ili šunke)",
      "4 kriške sira (gauda, cheddar, mozzarella)",
      "2 kašike pesto sosa (opciono)",
      "1 kašika maslinovog ulja",
      "Rukola (po želji)"
    ],
    instructions: [
      "Presecite zemičke, premažite pesto (ako koristite).",
      "Dodajte pršutu i sir, zatvorite i premažite spolja uljem.",
      "Pecite u panini roštilju ili tiganju 5-7 min do zlatnog i topljenog sira.",
      "Dodajte rukolu, isecite i poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "5-7 minuta",
    servings: 2
  },

  "Burrito": {
    name: "Burrito",
    ingredients: [
      "500g mlevenog mesa",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica čili praha",
      "1/2 kašičice kima",
      "1/4 kašičice origana",
      "So i biber",
      "1 šolja kuvanog pirinča",
      "1 konzerva (400g) crnog pasulja, isprana",
      "1 šolja rendanog čedar sira",
      "4 velike tortilje",
      "Ulje za prženje",
      "Kisela pavlaka, salsa, avokado (opciono)"
    ],
    instructions: [
      "Pržite luk 5 min, dodajte beli luk 1 min.",
      "Dodajte meso i pržite do rumenog; ocedite višak masnoće.",
      "Začinite čilijem, kimom, origanom, solju i biberom; kratko propržite.",
      "Zagrejte tortilje, rasporedite pirinač, pasulj, meso i sir.",
      "Urolajte burrito, zapečite u tiganju 2-3 min po strani i poslužite uz priloge."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "Poke Bowl": {
    name: "Poke Bowl",
    ingredients: [
      "200g svežeg lososa ili tune (sushi kvalitet)",
      "2 šolje kuvanog pirinča za sushi (ili jasmin)",
      "1/4 šolje soja sosa",
      "2 kašike susamovog ulja",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica rendanog đumbira",
      "1 čen belog luka, sitno",
      "1/2 avokada, kockice",
      "1/2 krastavca, kockice",
      "1/4 crvenog luka, tanko isečen",
      "2 rotkvice, tanko isečene",
      "1/4 šolje edamame",
      "2 kašike susama",
      "Nori trake (opciono)",
      "Sriracha majonez (opciono)",
      "Mladi luk za posipanje"
    ],
    instructions: [
      "Isecite ribu na kockice; pomešajte soja sos, susamovo ulje, sirće, đumbir i beli luk.",
      "Marinirajte ribu 15 min u frižideru.",
      "U činije rasporedite pirinač i dodajte mariniranu ribu i povrće.",
      "Pospite susamom i mladim lukom; dodajte nori i sriracha majonez po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Buddha Bowl": {
    name: "Buddha Bowl",
    ingredients: [
      "1/2 šolje kinoe",
      "1 šolja vode",
      "1/2 šolje brokolija, cvetići",
      "1/2 šolje batata, kockice",
      "1/4 crvenog luka, tanko narezan",
      "1/4 šolje crnog pasulja, oceđen",
      "1/4 avokada, kriške",
      "1 jaje",
      "1 kašika maslinovog ulja",
      "1 kašičica mlevene paprike",
      "So i biber",
      "1 kašika tahini dresinga",
      "Susam (opciono)"
    ],
    instructions: [
      "Skuvajte kinou (15 min) i odmorite.",
      "Ispecite batat i brokoli na 200°C 20-25 min sa uljem, paprikom, solju i biberom.",
      "Skuvajte jaje po želji.",
      "Složite kinou, povrće, pasulj, avokado i jaje; prelijte dresingom i pospite susamom."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 1
  },

  "Salad Bowl": {
    name: "Salad Bowl",
    ingredients: [
      "150g mešane zelene salate",
      "1/2 krastavca, iseckan",
      "1/2 crvene paprike, iseckane",
      "1/4 crvenog luka, tanko iseckan",
      "1/2 šolje čeri paradajza, prepolovljenog",
      "1/2 avokada, iseckan",
      "100g grilovanih pilećih prsa (ili tofu)",
      "2 tvrdo kuvana jaja (opciono)",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "So i biber"
    ],
    instructions: [
      "Pomešajte povrće, dodajte avokado i piletinu/tofu.",
      "Ako koristite, dodajte kuvana jaja.",
      "Umutite ulje i limunov sok, začinite i prelijte salatu, nežno promešajte."
    ],
    prepTime: "15 minuta",
    cookTime: "5 minuta",
    servings: 2
  },

  "Soup": {
    name: "Soup",
    ingredients: [
      "1 glavica crnog luka, sitno iseckana",
      "2 šargarepe, kolutovi",
      "2 stabljike celera, iseckane",
      "2 čena belog luka, sitno",
      "1 l pileće ili povrtne supe",
      "400g seckanog paradajza iz konzerve",
      "1 konzerva (400g) pasulja, oceđena",
      "100g testenine (makarone, školjkice)",
      "2 kašike maslinovog ulja",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "So i biber",
      "Sveži peršun za serviranje"
    ],
    instructions: [
      "Zagrejte ulje, dinstajte luk, šargarepu i celer 5-7 min.",
      "Dodajte beli luk 1 min; ulijte supu, paradajz, pasulj i začine; krčkajte 20 min.",
      "Dodajte testeninu i kuvajte 8-10 min do al dente.",
      "Začinite po ukusu i poslužite posuto peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "45 minuta",
    servings: 6
  },

  "Flatbread": {
    name: "Flatbread",
    ingredients: [
      "250g brašna",
      "1 kašičica soli",
      "1 kašičica praška za pecivo",
      "250ml mlake vode",
      "2 kašike maslinovog ulja (+ za premaz)"
    ],
    instructions: [
      "Pomešajte suve sastojke, dodajte vodu i ulje i zamesite testo.",
      "Podelite na 6 delova, razvucite tanke krugove.",
      "Pecite na vrelom tiganju 2-3 min po strani; premažite uljem i poslužite."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 6
  },

  "Risotto": {
    name: "Risotto",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 mali crni luk, sitno iseckan",
      "300g Arborio pirinča",
      "120ml suvog belog vina (opciono)",
      "1 litar vruće supe",
      "50g parmezana, izrendanog",
      "2 kašike putera",
      "So i biber"
    ],
    instructions: [
      "Zagrejte ulje, dinstajte luk 5 min.",
      "Dodajte pirinač i mešajte 1-2 min; po želji dodajte vino i isparite.",
      "Dodajte supu po kutlaču uz stalno mešanje 20-25 min do kremasto.",
      "Umešajte parmezan i puter, začinite i poslužite."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Curry": {
    name: "Curry",
    ingredients: [
      "500g piletine ili 500g mešanog povrća",
      "1 veliki luk, sitno iseckan",
      "2 čena belog luka, sitno",
      "1 kašika izrendanog đumbira",
      "2 kašike curry praha",
      "1 kašičica kurkume",
      "1/2 kašičice čilija u prahu (opciono)",
      "400ml kokosovog mleka",
      "200ml supe",
      "2 kašike ulja",
      "So i biber",
      "Sveži korijander",
      "Pirinac za serviranje"
    ],
    instructions: [
      "Zagrejte ulje, propržite luk 5 min, dodajte beli luk i đumbir 1 min.",
      "Dodajte začine i kratko propržite.",
      "Dodajte piletinu/povrće i pržite 5-7 min.",
      "Ulijte kokosovo mleko i supu, krčkajte 20 min, začinite i poslužite uz pirinač."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "Noodle Soup": {
    name: "Noodle Soup",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 srednja glavica luka, sitno",
      "2 šargarepe, kolutići",
      "2 stabljike celera, iseckane",
      "8 šolja pilećeg ili povrtnog bujona",
      "1 šolja rezanaca (jajčani ili bezglutenski)",
      "1 šolja kuvane piletine (opciono)",
      "1/2 šolje iseckanog peršuna",
      "So i biber"
    ],
    instructions: [
      "Zagrejte ulje, dinstajte povrće 5-7 min.",
      "Ulijte bujon i provrite.",
      "Dodajte rezance i kuvajte 8-10 min; dodajte piletinu (ako koristite) i peršun.",
      "Začinite i poslužite toplo."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4
  }
};