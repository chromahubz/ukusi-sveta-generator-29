import { Recipe } from './recipes';

export const healthyRecipes: Record<string, Recipe> = {
  "Quinoa Bowl": {
    name: "Quinoa Bowl",
    ingredients: [
      "1 šolja quinoa",
      "2 šolje vode ili bujona",
      "1 kašika maslinovog ulja",
      "1/2 crvenog luka, sitno iseckanog",
      "1 čen belog luka, sitno iseckanog",
      "1 crvena paprika, iseckana",
      "1/2 šolje crnog pasulja, kuvanog ili iz konzerve, ispranog",
      "1/2 šolje kukuruza, svežeg ili smrznutog",
      "1 avokado, iseckan",
      "Sok od 1/2 limete",
      "So i biber po ukusu",
      "Opcionalno: ljuti sos, cilantro, kisela pavlaka"
    ],
    instructions: [
      "Quinou dobro isperite pod hladnom vodom.",
      "U šerpi pomešajte qunou i vodu ili bujon. Pustite da provri, zatim smanjite vatru, poklopite i kuvajte 15-20 minuta, ili dok quinoa ne upije svu tečnost i ne postane mekana.",
      "U međuvremenu, u velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte crveni luk i pržite dok ne omekša, oko 5 minuta.",
      "Dodajte beli luk i pržite još 1 minut.",
      "Dodajte crvenu papriku, crni pasulj i kukuruz. Kuvajte 5 minuta, dok se povrće ne zagreje.",
      "U dve činije rasporedite kuvanu quinou.",
      "Preko quinoe stavite povrće iz tiganja.",
      "Dodajte iseckani avokado.",
      "Poprskajte sokom od limete.",
      "Začinite solju i biberom po ukusu.",
      "Po želji, dodajte ljuti sos, cilantro i kiselu pavlaku."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Kale Salad": {
    name: "Kale Salad",
    ingredients: [
      "1 glavica kelja (oko 250g), uklonjene stabljike i tanko iseckan",
      "1/2 šolje iseckanih oraha ili badema",
      "1/4 šolje suvog grožđa ili brusnica",
      "1/4 šolje rendanog parmezana (opciono)",
      "1 pomorandža, isceđena (sok)",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "1 kašičica meda ili javorovog sirupa",
      "1/2 kašičice dijon senfa",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj činiji, umasirajte kelj sa maslinovim uljem oko 2-3 minuta. Ovo će omekšati kelj.",
      "U maloj posudi, pomešajte sok od pomorandže, limunov sok, med (ili javorov sirup), dijon senf, so i biber. Dobro promešajte.",
      "Prelijte kelj dresingom i dobro promešajte.",
      "Dodajte orahe (ili bademe), suvo grožđe (ili brusnice) i parmezan (ako koristite).",
      "Proverite ukus i dodajte još soli, bibera ili dresinga po potrebi.",
      "Poslužite odmah ili ohladite pre serviranja."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 4
  },

  "Acai Bowl": {
    name: "Acai Bowl",
    ingredients: [
      "100g zamrznutog acai pirea (nesladjenog)",
      "1/2 smrznute banane",
      "1/4 šolje zamrznutih bobica (jagode, borovnice, maline)",
      "1/4 šolje bademovog mleka (ili drugo mleko po izboru)",
      "1 kašika putera od kikirikija (ili bademovog putera)",
      "1/4 šolje svežeg voća (banana, jagode, borovnice, kivi)",
      "1 kašika granole",
      "1 kašičica chia semenki",
      "1 kašičica kokosovih listića (neobavezno)",
      "1 kašičica meda ili javorovog sirupa (neobavezno)"
    ],
    instructions: [
      "U blender stavite zamrznuti acai pire, smrznutu bananu, zamrznuto bobičasto voće, bademovo mleko i puter od kikirikija.",
      "Blendirajte dok ne dobijete glatku, gustu smesu. Ako je potrebno, dodajte još malo bademovog mleka kako biste postigli željenu konzistenciju.",
      "Smesu prelijte u činiju.",
      "Preko smese poređajte sveže voće, granolu, chia semenke i kokosove listiće (ako koristite).",
      "Po želji, prelijte sa malo meda ili javorovog sirupa.",
      "Odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Chia Pudding": {
    name: "Chia Pudding",
    ingredients: [
      "3 supene kašike chia semenki",
      "1 šolja mleka (kravljeg, bademovog, kokosovog ili drugog)",
      "1/2 kašičice ekstrakta vanile",
      "1 kašika meda, javorovog sirupa ili drugog zaslađivača (po ukusu)",
      "Voće (bobičasto voće, banana, mango itd.) za serviranje (opciono)",
      "Oraščasti plodovi ili semenke (bademi, orasi, suncokretove semenke itd.) za serviranje (opciono)"
    ],
    instructions: [
      "U posudi ili tegli, pomešajte chia semenke, mleko, ekstrakt vanile i zaslađivač.",
      "Dobro promešajte da se semenke ne zgrudvaju.",
      "Ostavite da odstoji 5 minuta, a zatim ponovo promešajte.",
      "Pokrijte posudu ili zatvorite teglu i stavite u frižider najmanje 2 sata, ili najbolje preko noći.",
      "Pre serviranja, promešajte puding. Ako je pregust, dodajte malo mleka da dobijete željenu konzistenciju.",
      "Servirajte hladno, sa omiljenim voćem i orašastim plodovima ili semenkama (opciono)."
    ],
    prepTime: "5 minuta",
    cookTime: "2 sata (hlađenje)",
    servings: 1
  },

  "Green Smoothie": {
    name: "Green Smoothie",
    ingredients: [
      "1 šolja spanaća, opranog",
      "1/2 zelene jabuke, isečene na komade",
      "1/2 banane",
      "1/2 šolje vode ili bademovog mleka",
      "1 kašika chia semenki (opciono)",
      "1/4 limuna, isceđen sok"
    ],
    instructions: [
      "Sve sastojke stavite u blender.",
      "Blendajte dok ne dobijete glatku smesu.",
      "Po potrebi dodajte još tečnosti (vode ili bademovog mleka) da postignete željenu gustinu.",
      "Odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

    "Avocado Toast": {
    name: "Avocado Toast",
    ingredients: [
      "1 kriška hleba (po izboru)",
      "1/2 avokada",
      "1/4 limuna ili limete",
      "So, po ukusu",
      "Biber, po ukusu",
      "Crvena paprika u prahu (opciono)",
      "Susam (opciono)",
      "Jaje (kuvano ili prženo, opciono)"
    ],
    instructions: [
      "Tostirajte krišku hleba dok ne postane zlatno braon.",
      "Za to vreme, prepolovite avokado, uklonite košticu i izvadite meso u činiju.",
      "Viljuškom izgnječite avokado dok ne dobijete željenu teksturu.",
      "Iscedite sok od limuna ili limete preko avokada.",
      "Dodajte so i biber po ukusu.",
      "Namažite smesu od avokada preko tostiranog hleba.",
      "Pospite crvenom paprikom u prahu i susamom, ako želite.",
      "Dodajte jaje (kuvano ili prženo) na vrh, ako želite.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "2 minuta",
    servings: 1
  },
  "Grilled Vegetables": {
    name: "Grilled Vegetables",
    ingredients: [
      "1 srednji patlidžan, isečen na kriške debljine 1 cm",
      "1 crvena paprika, očišćena od semenki i isečena na četvrtine",
      "1 žuta paprika, očišćena od semenki i isečena na četvrtine",
      "1 crveni luk, isečen na kriške debljine 1 cm",
      "1 tikvica, isečena na kriške debljine 1 cm",
      "200g čeri paradajza",
      "4 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejati roštilj na srednje jaku vatru.",
      "U velikoj posudi, pomešati isečeni patlidžan, paprike, crveni luk, tikvice i čeri paradajz.",
      "Dodati maslinovo ulje, iseckani beli luk, origano, so i biber. Dobro promešati da se povrće ravnomerno obloži.",
      "Rasporedite povrće u jednom sloju na zagrejani roštilj.",
      "Pecite povrće 5-7 minuta sa svake strane, ili dok ne omekša i dobije lepe tragove od roštilja.",
      "Skinite povrće sa roštilja i poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Salmon Fillet": {
    name: "Salmon Fillet",
    ingredients: [
      "2 komada fileta lososa (oko 150g svaki)",
      "2 kašike maslinovog ulja",
      "1 limun (sok i korica)",
      "1 kašičica belog luka u prahu",
      "1/2 kašičice sušenog origana",
      "So i biber po ukusu",
      "Sveži peršun za dekoraciju (opciono)"
    ],
    instructions: [
      "Zagrejati rernu na 200°C.",
      "Obložite pleh papirom za pečenje.",
      "U maloj posudi pomešajte maslinovo ulje, sok od limuna, koricu limuna, beli luk u prahu, origano, so i biber.",
      "Filete lososa stavite na pleh obložen papirom za pečenje.",
      "Premažite losos pripremljenom mešavinom.",
      "Pecite u zagrejanoj rerni 12-15 minuta, ili dok losos ne bude pečen i lako se raspada viljuškom.",
      "Ukrasite svežim peršunom (opciono) pre serviranja."
    ],
    prepTime: "5 minuta",
    cookTime: "12-15 minuta",
    servings: 2
  },
  "Sweet Potato": {
    name: "Sweet Potato",
    ingredients: [
      "2 velika slatka krompira (oko 700g)",
      "2 kašike maslinovog ulja",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "Po želji: cimet, dimljena paprika, beli luk u prahu"
    ],
    instructions: [
      "Zagrejati rernu na 200°C (400°F).",
      "Operite i osušite slatki krompir.",
      "Isecite slatki krompir na kocke veličine 2-3 cm.",
      "U velikoj činiji, pomešajte slatki krompir, maslinovo ulje, so, biber i druge začine po želji.",
      "Rasporedite krompir u jednom sloju na pleh obložen papirom za pečenje.",
      "Pecite u zagrejanoj rerni 45-60 minuta, ili dok ne omekša i blago porumeni, povremeno mešajući.",
      "Poslužite toplo."
    ],
    prepTime: "5 minuta",
    cookTime: "45-60 minuta",
    servings: 4
  },
  "Brown Rice": {
    name: "Brown Rice",
    ingredients: [
      "1 šolja integralnog pirinča",
      "2 šolje vode ili bujona",
      "1/2 kašičice soli",
      "1 kašika putera ili maslinovog ulja (opciono)"
    ],
    instructions: [
      "Dobro isperite pirinač pod hladnom vodom. Ovo će pomoći da se ukloni višak skroba.",
      "U šerpu srednje veličine sipajte pirinač, vodu ili bujon i so.",
      "Ako želite, dodajte puter ili maslinovo ulje.",
      "Pustite da provri na jakoj vatri.",
      "Smanjite vatru na nisku, poklopite i kuvajte 45-50 minuta, ili dok pirinač ne upije svu tečnost i ne omekša.",
      "Sklonite sa vatre i ostavite poklopljeno da odstoji 10 minuta.",
      "Rastresite viljuškom pre serviranja."
    ],
    prepTime: "5 minuta",
    cookTime: "45-50 minuta",
    servings: 4
  },
  "Lentil Soup": {
    name: "Lentil Soup",
    ingredients: [
      "2 kašike maslinovog ulja",
      "1 veliki luk, iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "3 čena belog luka, mlevena",
      "1 kašičica sušenog timijana",
      "1/2 kašičice sušenog ruzmarina",
      "1 lovorov list",
      "1 šolja zelene ili braon leće, isprana",
      "6 šolja povrtnog ili pilećeg bujona",
      "1 konzerva (400g) seckanog paradajza",
      "So i biber po ukusu",
      "Sok od 1/2 limuna (opciono)",
      "Sveži peršun, iseckan (za serviranje)"
    ],
    instructions: [
      "U velikoj šerpi zagrejati maslinovo ulje na srednjoj vatri.",
      "Dodati luk, šargarepu i celer. Kuvati dok povrće ne omekša, oko 5-7 minuta.",
      "Dodati beli luk, timijan i ruzmarin. Kuvati još 1 minut, dok ne zamiriše.",
      "Dodati leću, bujon, seckani paradajz i lovorov list. Promešati.",
      "Pustiti da proključa, zatim smanjiti vatru, poklopiti i ostaviti da se krčka 30-40 minuta, ili dok leća ne omekša.",
      "Izvaditi lovorov list.",
      "Probati i začiniti solju i biberom po ukusu.",
      "(Opciono) Dodati sok od limuna za dodatnu svežinu.",
      "Servirati toplo, posuto svežim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "45 minuta",
    servings: 6
  },
  "Greek Yogurt": {
    name: "Greek Yogurt",
    ingredients: [
      "4 šolje punomasnog mleka",
      "2 kašike običnog jogurta (sa živim kulturama)"
    ],
    instructions: [
      "U šerpi zagrejte mleko na umerenoj vatri. Pazite da ne provri. Trebalo bi da bude oko 82°C. Ako nemate termometar, zagrejte dok se na ivicama šerpe ne počnu stvarati mehurići.",
      "Sklonite mleko sa vatre i ostavite da se ohladi na oko 43-46°C. Ovo može potrajati oko 1-2 sata. Koristite termometar da proverite temperaturu.",
      "U maloj posudi pomešajte obični jogurt sa malo ohlađenog mleka. Mešajte dok se jogurt potpuno ne rastvori.",
      "Sipajte smesu jogurta u ohlađeno mleko i dobro promešajte.",
      "Sipajte smesu u staklenu teglu ili posudu. Pokrijte poklopcem ili plastičnom folijom.",
      "Umotajte teglu/posudu u peškir ili je stavite u rernu (isključenu) ili u instant pot sa funkcijom jogurta. Trebalo bi da ostane na toplom.",
      "Ostavite da fermentira 6-12 sati, ili dok jogurt ne postane gust. Što duže fermentira, to će biti kiseliji.",
      "Pripremite cediljku obloženu gazom.",
      "Sipajte jogurt u cediljku.",
      "Stavite cediljku preko posude da se surutka ocedi.",
      "Ostavite u frižideru 2-24 sata, u zavisnosti od željene gustine. Što duže se cedi, jogurt će biti gušći.",
      "Kada jogurt postigne željenu gustinu, prebacite ga u čistu posudu i čuvajte u frižideru."
    ],
    prepTime: "5 minuta",
    cookTime: "2-24 sata (vreme ocedjivanja)",
    servings: 4
  },
  "Nuts and Seeds": {
    name: "Nuts and Seeds",
    ingredients: [
      "1 šolja sirovih badema",
      "1 šolja sirovih oraha",
      "1/2 šolje sirovih semenki suncokreta",
      "1/2 šolje sirovih semenki bundeve (golica)",
      "2 kašike chia semenki",
      "1 kašika maslinovog ulja (opciono)",
      "1/2 kašičice morske soli (ili po ukusu)",
      "1/4 kašičice cimeta (opciono)"
    ],
    instructions: [
      "Zagrejati rernu na 175°C (350°F).",
      "U velikoj posudi pomešajte bademe, orahe, semenke suncokreta, semenke bundeve i chia semenke.",
      "Ako koristite, dodajte maslinovo ulje i dobro promešajte da se svi sastojci ravnomerno oblože.",
      "Pospite morskom solju i cimetom (ako koristite) i ponovo promešajte.",
      "Rasporedite smesu u jednom sloju na pleh obložen papirom za pečenje.",
      "Pecite 10-15 minuta, ili dok orašasti plodovi i semenke ne dobiju zlatno smeđu boju. Pazite da ne izgore, povremeno promešajte.",
      "Izvadite iz rerne i ostavite da se potpuno ohladi na plehu.",
      "Prebacite u hermetički zatvorenu posudu i čuvajte na sobnoj temperaturi."
    ],
    prepTime: "5 minuta",
    cookTime: "10-15 minuta",
    servings: 4
  },
  "Fresh Fruit": {
    name: "Fresh Fruit",
    ingredients: [
      "1 šolja jagoda, iseckanih",
      "1 šolja borovnica",
      "1 šolja malina",
      "1 banana, isečena na kolutove",
      "1 pomorandža, oljuštena i isečena na kriške",
      "1/2 šolje zelenog grožđa, prepolovljenog",
      "2 kašike sveže isceđenog soka od limuna",
      "1 kašika meda (opciono)",
      "Listići mente za dekoraciju (opciono)"
    ],
    instructions: [
      "Operite svo voće temeljno.",
      "Isecite veće komade voća na manje, približno iste veličine.",
      "U velikoj činiji, nežno pomešajte iseckane jagode, borovnice, maline, banane, kriške pomorandže i grožđe.",
      "U manjoj posudi, pomešajte sok od limuna i med (ako koristite).",
      "Prelijte preliv preko voćne salate i nežno promešajte da se sve sjedini.",
      "Ostavite salatu da se ohladi u frižideru najmanje 10 minuta pre serviranja.",
      "Ukrasite listićima mente pre serviranja (opciono)."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 4
  },
  "Vegetable Juice": {
    name: "Vegetable Juice",
    ingredients: [
      "2 šargarepe, srednje veličine",
      "1 krastavac, srednje veličine",
      "1 stabljika celera",
      "1 paradajz, srednje veličine",
      "1/2 limuna, sok",
      "1/4 kašičice soli",
      "1/8 kašičice bibera (po ukusu)",
      "Nekoliko listova peršuna (opciono)"
    ],
    instructions: [
      "Operite svo povrće temeljno.",
      "Isecite šargarepu, krastavac, celer i paradajz na komade koji odgovaraju vašem sokovniku.",
      "Provucite povrće kroz sokovnik.",
      "Dodajte sok od limuna, so i biber.",
      "Dobro promešajte.",
      "Ukrasite sa peršunom (opciono).",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 2
  },
    "Protein Smoothie": {
    name: "Protein Smoothie",
    ingredients: [
      "1 banana",
      "1 merica proteinskog praha (oko 30g)",
      "1/2 šolje smrznutog bobičastog voća (jagode, borovnice, maline)",
      "1/2 šolje mleka (kravlje, bademovo, sojino)",
      "1/4 šolje grčkog jogurta (opciono)",
      "1 kašika putera od kikirikija (opciono)",
      "Led (po želji)"
    ],
    instructions: [
      "U blender stavite bananu, proteinski prah, smrznuto bobičasto voće, mleko i grčki jogurt (ako koristite).",
      "Dodajte puter od kikirikija (ako koristite).",
      "Ubacite nekoliko kockica leda, ako želite gušći smoothie.",
      "Blendajte sve sastojke dok ne dobijete glatku smesu.",
      "Sipajte u čašu i odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },
  "Buddha Bowl": {
    name: "Buddha Bowl",
    ingredients: [
      "1/2 šolje kinoe",
      "1 šolja vode",
      "1/2 avokada, isečenog na kockice",
      "1/2 šolje brokolija, isečenog na cvetiće",
      "1/2 šolje slatkoh krompira, isečenog na kockice",
      "1/4 šolje crnog pasulja, kuvanog ili iz konzerve, oceđenog i ispranog",
      "1/4 šolje edamamea (soje u mahuni), oljuštenog",
      "2 kašike tahini dresinga (tahini, limunov sok, voda, beli luk, so)",
      "1 kašičica susama",
      "So i biber po ukusu",
      "1 kašika maslinovog ulja"
    ],
    instructions: [
      "Isperite kinou u hladnoj vodi.",
      "U šerpi pomešajte kinou i vodu. Pustite da provri, zatim smanjite vatru, poklopite i kuvajte 15 minuta, ili dok kinoa ne upije svu vodu. Sklonite sa vatre i ostavite da odstoji 5 minuta.",
      "Zagrejati rernu na 200°C.",
      "Pomešajte slatki krompir i brokoli sa maslinovim uljem, solju i biberom. Rasporedite na pleh obložen papirom za pečenje. Pecite 20-25 minuta, ili dok povrće ne omekša i ne dobije blago zlatnu boju.",
      "U velikoj činiji, rasporedite kuvanu kinou, pečeni slatki krompir i brokoli, crni pasulj, edamame i avokado.",
      "Prelijte sa tahini dresingom i pospite susamom.",
      "Poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 1
  },
  "Steamed Broccoli": {
    name: "Steamed Broccoli",
    ingredients: [
      "1 glavica brokolija (oko 500g), isečena na cvetiće",
      "1/2 šolje vode",
      "1 kašičica maslinovog ulja (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Brokoli dobro operite i isecite na cvetiće.",
      "U šerpu sipajte vodu i stavite korpu za kuvanje na pari. Voda ne sme da dodiruje korpu.",
      "Stavite brokoli u korpu za kuvanje na pari.",
      "Poklopite šerpu i pustite da se kuva na pari 5-7 minuta, ili dok brokoli ne omekša, ali ostane hrskav.",
      "Pažljivo izvadite brokoli iz korpe za kuvanje na pari.",
      "Prebacite u činiju i prelijte maslinovim uljem (opciono).",
      "Začinite solju i biberom po ukusu.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "5-7 minuta",
    servings: 4
  },
  "Quinoa Salad": {
    name: "Quinoa Salad",
    ingredients: [
      "1 šolja kinoe",
      "2 šolje vode ili supe od povrća",
      "1 krastavac, isečen na kockice",
      "1 paprika (crvena ili žuta), isečena na kockice",
      "1/2 crvenog luka, sitno iseckanog",
      "1 šolja čeri paradajza, prepolovljenog",
      "1/4 šolje svežeg peršuna, iseckanog",
      "1/4 šolje sveže nane, iseckane",
      "2 kašike maslinovog ulja",
      "2 kašike limunovog soka",
      "So i biber po ukusu"
    ],
    instructions: [
      "Kinoa se ispere pod mlazom hladne vode.",
      "U šerpu se sipa kinoa i voda (ili supa od povrća).",
      "Pustiti da provri, zatim smanjiti vatru, poklopiti i kuvati 15 minuta, ili dok kinoa ne upije svu tečnost i postane mekana.",
      "Skinuti sa vatre i ostaviti da se ohladi.",
      "U velikoj činiji pomešati ohlađenu kinou, krastavac, papriku, crveni luk, čeri paradajz, peršun i nanu.",
      "U manjoj činiji umutiti maslinovo ulje, limunov sok, so i biber.",
      "Preliti preliv preko salate i dobro promešati.",
      "Servirati odmah ili ohladiti u frižideru pre serviranja."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Tofu Stir Fry": {
    name: "Tofu Stir Fry",
    ingredients: [
      "250g čvrstog tofua, isceđenog i isečenog na kockice",
      "1 kašika kukuruznog skroba",
      "2 kašike biljnog ulja",
      "1 glavica crnog luka, iseckana",
      "1 šargarepa, isečena na kolutiće",
      "1 paprika (crvena ili žuta), isečena na trake",
      "1 brokolija, razdvojena na cvetove",
      "2 čena belog luka, sitno iseckana",
      "2 cm korena đumbira, sitno narendanog",
      "3 kašike soja sosa",
      "1 kašika meda ili javorovog sirupa",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica susamovog ulja (opciono)",
      "Susam za posipanje (opciono)",
      "Kuvani pirinač za serviranje"
    ],
    instructions: [
      "U činiji pomešajte tofu kockice sa kukuruznim skrobom, pazeći da budu ravnomerno obložene.",
      "Zagrejte biljno ulje u velikom tiganju ili voku na srednje jakoj vatri.",
      "Dodajte tofu i pržite dok ne postane zlatno braon i hrskav sa svih strana. Izvadite tofu iz tiganja i ostavite sa strane.",
      "U isti tiganj dodajte crni luk, šargarepu i papriku. Pržite 5-7 minuta, dok povrće ne omekša.",
      "Dodajte brokoli, beli luk i đumbir. Pržite još 2-3 minuta, dok beli luk ne zamiriše.",
      "U maloj činiji pomešajte soja sos, med (ili javorov sirup) i pirinčano sirće.",
      "Vratite tofu u tiganj sa povrćem. Prelijte sosom i promešajte da se svi sastojci dobro sjedine.",
      "Kuvajte još 2-3 minuta, dok se sos ne zgusne i obloži tofu i povrće.",
      "Umešajte susamovo ulje (ako koristite).",
      "Servirajte toplo preko kuvanog pirinča. Pospite susamom pre serviranja (ako koristite)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  }
};
