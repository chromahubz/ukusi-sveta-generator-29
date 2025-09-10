import { Recipe } from './recipes';

export const mediterraneanRecipes: Record<string, Recipe> = {
  "Greek Salad": {
    name: "Greek Salad",
    description: "Osvežavajuća i jednostavna salata, savršena za tople letnje dane.",
    ingredients: [
      "1 krastavac, oljušten i isečen na kockice",
      "2 paradajza, isečena na kockice", 
      "1 zelena paprika, isečena na kockice",
      "1 crveni luk, tanko isečen",
      "150g feta sira, isečen na kockice",
      "1/2 šolje Kalamata maslina, bez koštica",
      "2 kašike ekstra devičanskog maslinovog ulja",
      "1 kašika crvenog vinskog sirćeta",
      "1/2 kašičice sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj činiji pomešajte krastavac, paradajz, papriku i crveni luk.",
      "Dodajte feta sir i masline.",
      "U maloj činiji umutite maslinovo ulje, sirće, origano, so i biber.",
      "Prelijte salatu dresingom i nežno promešajte.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "Nema kuvanja",
    servings: 4,
    nutrition: {
      calories: 250,
      fat: "20g",
      protein: "8g", 
      carbs: "10g"
    },
    notes: [
      "Salatu možete obogatiti kaparima.",
      "Ako volite jači ukus luka, možete ga potopiti u hladnu vodu na 10 minuta pre dodavanja u salatu."
    ]
  },

  "Hummus": {
    name: "Hummus", 
    description: "Kremasti namaz od leblebija, savršen kao predjelo, prilog ili namaz za sendviče.",
    ingredients: [
      "1 šolja suvih leblebija (ili 1 konzerva od 400g, ocedjena i isprana)",
      "1/4 šolje tahinija",
      "1/4 šolje sveže ceđenog limunovog soka",
      "2 čena belog luka, izgnječena",
      "1/4 šolje ledene vode",
      "2 kašike maslinovog ulja, plus malo za serviranje",
      "1/2 kašičice soli, ili po ukusu",
      "1/4 kašičice mlevenog kumina",
      "Malo paprike (za dekoraciju)",
      "Sveži peršun, seckani (za dekoraciju)"
    ],
    instructions: [
      "Ako koristite suve leblebije: Potopite ih u vodu preko noći (najmanje 8 sati).",
      "Sutradan ocedite i isperite leblebije. Kuvajte ih u svežoj vodi oko 30 minuta, ili dok ne omekšaju (trebalo bi da budu veoma mekane).",
      "Ako koristite leblebije iz konzerve: Dobro ih ocedite i isperite.",
      "U blenderu ili procesoru za hranu, kombinujte tahini i limunov sok. Blendajte dok se ne dobije glatka smesa.",
      "Dodajte beli luk, led i kumin. Blendajte dok se ne sjedini.",
      "Dodajte leblebije i so. Blendajte dok se ne dobije veoma glatka i kremasta smesa. Ako je potrebno, dodajte još malo ledene vode (po jednu kašiku) da biste postigli željenu konzistenciju.",
      "Sipajte hummus u činiju. Prelijte maslinovim uljem, pospite paprikom i seckanim peršunom.",
      "Poslužite sa pita hlebom, povrćem ili krekerima."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 6,
    nutrition: {
      calories: 250,
      protein: "10g",
      fat: "15g",
      carbs: "20g",
      fiber: "5g"
    },
    notes: [
      "Za bogatiji ukus, pre prženja tahinija u rerni na 180C tokom 5-7 minuta, dok ne dobije zlatnu boju.",
      "Možete dodati i druge začine, poput čilija ili dimljene paprike.",
      "Hummus se može čuvati u frižideru do 5 dana."
    ]
  },

  "Tabbouleh": {
    name: "Tabbouleh",
    description: "Osvežavajuća i zdrava salata od peršuna, bulgura, paradajza, mente i limuna.",
    ingredients: [
      "1 šolja sitnog bulgura",
      "1 i 1/2 šolje ključale vode",
      "1 veliki vez svežeg peršuna, sitno iseckan",
      "1/2 vez sveže mente, sitno iseckana",
      "2 srednja paradajza, sitno iseckana",
      "1/2 crvenog luka, sitno iseckan",
      "1/4 šolje svežeg soka od limuna",
      "1/4 šolje maslinovog ulja",
      "So po ukusu",
      "Biber po ukusu"
    ],
    instructions: [
      "Bulgur stavite u posudu i prelijte ključalom vodom. Promešajte, poklopite i ostavite da odstoji 15 minuta, dok bulgur ne upije svu vodu i omekša.",
      "U velikoj činiji pomešajte sitno iseckan peršun, mentu, paradajz i crveni luk.",
      "Kada je bulgur omekšao, viljuškom ga razdvojite i dodajte u činiju sa povrćem.",
      "U maloj posudi pomešajte sok od limuna, maslinovo ulje, so i biber.",
      "Prelijte salatu dresingom i dobro promešajte.",
      "Ostavite da odstoji u frižideru najmanje 30 minuta pre serviranja, da se ukusi sjedine."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4,
    nutrition: {
      calories: 250,
      fat: "15g",
      carbs: "25g",
      protein: "5g"
    },
    notes: [
      "Možete dodati i krastavac, iseckan na sitne kockice.",
      "Za jači ukus limuna, dodajte i malo rendane limunove korice.",
      "Tabbouleh je najbolji kada se servira hladan."
    ]
  },

  "Grilled Fish": {
    name: "Grilled Fish",
    description: "Jednostavno i ukusno jelo od ribe sa roštilja. Savršeno za letnje dane.",
    ingredients: [
      "2 riblja fileta (oko 150g svaki), na primer, brancin ili losos",
      "2 kašike maslinovog ulja",
      "1 limun, isecen na kriške",
      "1 češanj belog luka, sitno iseckan",
      "1 kašičica suvog origana",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za ukras)"
    ],
    instructions: [
      "Ribu isperite i osušite papirnim ubrusom.",
      "U maloj posudi pomešajte maslinovo ulje, iseckani beli luk, origano, so i biber.",
      "Premažite ribu sa obe strane pripremljenom smesom.",
      "Zagrejte roštilj na srednju temperaturu.",
      "Stavite ribu na roštilj.",
      "Pecite 5-7 minuta po strani, ili dok riba ne bude gotova i lako se ljušti viljuškom.",
      "Poslužite ribu sa kriškama limuna i pospite svežim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "10-15 minuta",
    servings: 2,
    nutrition: {
      calories: "300-400",
      protein: "30-40g",
      fat: "20-30g",
      carbs: "2-3g"
    },
    notes: [
      "Ribu možete marinirati u frižideru 30 minuta pre pečenja za intenzivniji ukus.",
      "Možete koristiti i druge začine po želji, kao što su ruzmarin, timijan ili čili u prahu.",
      "Poslužite uz grilovano povrće ili salatu."
    ]
  },

  "Olive Oil": {
    name: "Olive Oil",
    description: "Osnovni sastojak mediteranske kuhinje, idealan za kuvanje, pečenje i salate.",
    ingredients: [
      "500ml ekstra devičanskog maslinovog ulja"
    ],
    instructions: [
      "Sipati maslinovo ulje u čistu, suvu bocu ili posudu.",
      "Čuvati na hladnom, tamnom mestu."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1,
    nutrition: {
      calories: 120,
      fat: "14g",
      saturatedFat: "2g",
      monounsaturatedFat: "10g",
      polyunsaturatedFat: "1.5g",
      cholesterol: "0mg",
      sodium: "0mg",
      carbs: "0g",
      protein: "0g"
    },
    notes: [
      "Za najbolji ukus, koristite kvalitetno ekstra devičansko maslinovo ulje.",
      "Maslinovo ulje se može koristiti za dinstanje, prženje, pečenje i kao preliv za salate.",
      "Izbegavajte izlaganje maslinovog ulja visokim temperaturama tokom dužeg vremenskog perioda."
    ]
  },

  "Feta Cheese": {
    name: "Feta Cheese",
    description: "Brzi i jednostavan način za pravljenje domaće \"feta\" sira.",
    ingredients: [
      "1 litar punomasnog mleka (ne UHT)",
      "1/4 kašičice mezofilne kulture sira (ili 1/8 kašičice direktnog startnog inokulanta)",
      "1/4 tečnog sirila razblaženog u 1/4 šolje hladne vode",
      "1-2 kašičice morske soli (za salamuru)",
      "1 litar prokuvane i ohlađene vode (za salamuru)"
    ],
    instructions: [
      "Mleko zagrejte u šerpi do 30°C (86°F). Koristite termometar za preciznost.",
      "Sklonite mleko sa vatre. Dodajte mezofilnu kulturu ili startni inokulant i lagano mešajte 1 minut.",
      "Pokrijte šerpu i ostavite da odstoji 1 sat, kako bi se kultura aktivirala. Temperatura treba da se održi oko 30°C (86°F).",
      "Dodajte razblaženo sirilo u mleko. Mešajte polako i nežno 1 minut.",
      "Pokrijte i ostavite da odstoji 1-1.5 sati, ili dok se ne formira čvrst zgrušak (clean break). Proverite tako što ćete nožem napraviti rez u zgrušku. Ako se čisto razdvaja i surutka je bistra, spreman je.",
      "Isecite zgrušak na kocke veličine 2.5 cm.",
      "Ostavite da odstoji 10 minuta.",
      "Nežno mešajte zgrušak 20 minuta.",
      "Obložite cediljku ili posudu za sir muslin krpom.",
      "Pažljivo prebacite zgrušak u obloženu posudu.",
      "Vežite krajeve muslina i okačite da se cedi iznad posude ili ostavite u cediljci, opterećeno tanjirom i teškim predmetom, 12-24 sata u frižideru. Što se duže cedi, to će sir biti suvlji.",
      "Pripremite salamuru: Rastvorite 1-2 kašičice soli u 1 litru prokuvane i ohlađene vode.",
      "Isecite sir na kocke ili željene oblike.",
      "Stavite sir u teglu ili posudu i prelijte salamurom. Sir mora biti potpuno potopljen.",
      "Čuvajte u frižideru najmanje 24 sata pre konzumiranja.",
      "Sir u salamuri može da se čuva u frižideru do 2 nedelje."
    ],
    prepTime: "15 minuta",
    cookTime: "24-48 sati",
    servings: 8,
    nutrition: {
      calories: 75,
      fat: "6g",
      protein: "4g",
      carbs: "1g",
      sodium: "200mg"
    },
    notes: [
      "Kvalitet mleka je važan za ukus sira. Koristite sveže, nepasterizovano ili pasterizovano mleko bez aditiva. UHT mleko nije preporučljivo.",
      "Intenzitet slanoće prilagodite svom ukusu."
    ]
  },

  "Olives": {
    name: "Olives",
    description: "Jednostavan način za pripremu mariniranih maslina.",
    ingredients: [
      "500g maslina (različite vrste, sa ili bez koštice)",
      "1/4 šolje maslinovog ulja",
      "4 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušene majčine dušice",
      "1/4 kašičice crvene paprike (ili po ukusu)",
      "Kora od 1 limuna (samo žuti deo)",
      "Sok od 1/2 limuna",
      "So i biber po ukusu",
      "Sveža peršun, sitno iseckana (za garniranje)"
    ],
    instructions: [
      "U šerpi, zagrejte maslinovo ulje na srednjoj temperaturi.",
      "Dodajte beli luk i dinstajte oko 1 minut, dok ne zamiriše, pazeći da ne zagori.",
      "Dodajte origano, majčinu dušicu i crvenu papriku. Kuvajte još 30 sekundi.",
      "Dodajte masline, koru od limuna i sok od limuna.",
      "Dobro promešajte da se masline oblože začinima.",
      "Kuvajte na laganoj vatri 10-15 minuta, povremeno mešajući.",
      "Uklonite sa vatre i ostavite da se malo ohladi.",
      "Posolite i pobiberite po ukusu.",
      "Prebacite masline u posudu za serviranje i pospite seckanim peršunom.",
      "Poslužite toplo ili na sobnoj temperaturi."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 6,
    nutrition: {
      calories: "250-300",
      fat: "20-25g",
      carbs: "5-10g",
      protein: "2-3g"
    },
    notes: [
      "Možete dodati i druge začine po ukusu, kao što su ruzmarin, timijan ili kim.",
      "Za pikantniju verziju, dodajte iseckanu ljutu papričicu.",
      "Masline se mogu čuvati u frižideru do nedelju dana."
    ]
  },

  "Pita Bread": {
    name: "Pita Bread",
    description: "Mekani i vazdušasti hleb, savršen za punjenje ili umakanje.",
    ingredients: [
      "300g brašna (tip 400 ili 500)",
      "7g suvog kvasca",
      "1 kašičica šećera",
      "1 kašičica soli",
      "240ml tople vode",
      "2 kašike maslinovog ulja"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, suvi kvasac, šećer i so.",
      "Dodati toplu vodu i maslinovo ulje. Mešati dok se ne formira testo.",
      "Prebaciti testo na pobrašnjenu površinu i mesiti 5-7 minuta, dok ne postane glatko i elastično.",
      "Vratiti testo u posudu, prekriti krpom i ostaviti da naraste na toplom mestu oko 1 sat, ili dok se ne udvostruči.",
      "Zagrejati rernu na 250°C (ili najvišu temperaturu). Staviti kamen za pizzu ili pleh u rernu da se zagreje.",
      "Izvaditi naraslo testo i podeliti ga na 6 jednakih delova.",
      "Svaki deo razvaljati u krug debljine oko 5mm.",
      "Pažljivo prebaciti razvaljani hleb na zagrejani kamen za pizzu ili pleh.",
      "Peći 3-5 minuta, dok se hleb ne naduva i dobije zlatno-braon boju.",
      "Izvaditi iz rerne i prekriti krpom da se ohladi."
    ],
    prepTime: "20 minuta",
    cookTime: "10 minuta",
    servings: 6,
    nutrition: {
      calories: 200,
      fat: "4g",
      carbs: "35g",
      protein: "6g"
    },
    notes: [
      "Za bolji ukus, testo možete ostaviti da se diže i u frižideru preko noći.",
      "Možete koristiti i sveži kvasac (oko 20g), koji treba rastvoriti u toploj vodi pre dodavanja u brašno.",
      "Ako nemate kamen za pizzu, možete koristiti pleh preokrenut naopako."
    ]
  },

  "Tzatziki": {
    name: "Tzatziki",
    description: "Osvežavajući grčki umak od jogurta, krastavaca i belog luka, savršen kao prilog, umak ili namaz.",
    ingredients: [
      "1 veliki krastavac",
      "500g grčkog jogurta (gustog)",
      "2-3 čena belog luka, izgnječena",
      "1-2 kašike belog vinskog sirćeta ili limunovog soka",
      "1 kašika maslinovog ulja",
      "1 kašičica sveže mente, sitno iseckana (opciono)",
      "So i biber, po ukusu"
    ],
    instructions: [
      "Krastavac oljuštiti, izrendati i ocediti višak tečnosti. Može se ocediti pritiskom kroz čistu gazu ili kuhinjsku krpu.",
      "U posudi pomešati grčki jogurt, izgnječeni beli luk, sirće ili limunov sok i maslinovo ulje.",
      "Dodati oceđeni krastavac i iseckanu mentu (ako se koristi).",
      "Posoliti i pobiberiti po ukusu.",
      "Dobro promešati sve sastojke.",
      "Pokriti i ostaviti u frižideru najmanje 30 minuta pre serviranja kako bi se ukusi sjedinili."
    ],
    prepTime: "10 minuta",
    cookTime: "Nema kuvanja",
    servings: 4,
    nutrition: {
      calories: "80-100",
      fat: "5-7g",
      protein: "5-7g",
      carbs: "3-5g"
    },
    notes: [
      "Za blaži ukus belog luka, koristite manje čena ili uklonite klicu iz sredine svakog čena.",
      "Tzatziki se najbolje služi hladan.",
      "Može se čuvati u frižideru do 3 dana."
    ]
  },

  "Dolmades": {
    name: "Dolmades",
    description: "Tradicionalno grčko jelo od listova vinove loze punjenih pirinčem, začinima i ponekad mlevenim mesom. Ovo je vegetarijanska verzija.",
    ingredients: [
      "50-60 listova vinove loze, svežih ili konzerviranih u salamuri",
      "1 šolja pirinča dugog zrna",
      "1 veliki crni luk, sitno iseckan",
      "1/2 šolje svežeg peršuna, sitno iseckanog",
      "1/4 šolje sveže nane, sitno iseckane",
      "1/4 šolje svežeg kopra, sitno iseckanog",
      "1/4 šolje suvog grožđa",
      "1/4 šolje pinjola",
      "1/4 šolje maslinovog ulja",
      "Sok od 1 limuna",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "2 šolje vode ili povrtnog bujona",
      "Dodatno maslinovo ulje za prelivanje"
    ],
    instructions: [
      "Ako koristite konzervirane listove vinove loze, isperite ih pod hladnom vodom i potopite u hladnu vodu na 30 minuta da se ukloni višak soli. Ako koristite sveže listove vinove loze, blanširajte ih u kipućoj vodi 2-3 minuta da omekšaju. Ocedite i ostavite sa strane.",
      "U velikoj posudi pomešajte pirinač, crni luk, peršun, nanu, kopar, suvo grožđe, pinjole, maslinovo ulje, sok od limuna, so i biber. Dobro promešajte.",
      "Na dno velikog lonca stavite nekoliko listova vinove loze da zaštite dolmades od lepljenja.",
      "Na radnu površinu raširite jedan list vinove loze sa grubom stranom prema gore i peteljkom prema vama.",
      "Stavite oko 1-2 kašičice smese od pirinča na dno lista, blizu peteljke.",
      "Savijte donji deo lista preko nadeva, zatim savijte stranice prema unutra i čvrsto urolajte prema vrhu lista.",
      "Ponavljajte postupak dok ne potrošite sve listove i nadev.",
      "Pažljivo poređajte umotane dolmades jedan pored drugog u lonac, u nekoliko slojeva.",
      "Prelijte dolmades vodom ili povrtnim bujonom. Pritisnite tanjirom preko dolmades da ih držite na mestu tokom kuvanja.",
      "Pustite da provri, zatim smanjite vatru na nisku temperaturu, poklopite i kuvajte 60 minuta, ili dok pirinač ne bude kuvan.",
      "Skinite lonac sa vatre i ostavite da se dolmades ohlade u loncu oko 30 minuta.",
      "Pre serviranja prelijte sa malo maslinovog ulja i dodatnog limunovog soka, po želji."
    ],
    prepTime: "45 minuta",
    cookTime: "60 minuta",
    servings: 8,
    nutrition: {
      calories: "200-250",
      fat: "10-15g",
      carbs: "25-30g",
      protein: "5-7g"
    },
    notes: [
      "Možete dodati i druge začine po ukusu, kao što su cimet, aleva paprika ili menta.",
      "Za intenzivniji ukus, dolmades možete kuvati u pilećem bujonu umesto u vodi.",
      "Dolmades su ukusniji kada se serviraju hladni ili na sobnoj temperaturi.",
      "Čuvajte u frižideru do 3 dana."
    ]
  },

  "Ratatouille": {
    name: "Ratatouille",
    description: "Jednostavno i ukusno povrtno jelo iz Provanse. Odličan prilog ili samostalno jelo.",
    ingredients: [
      "1 veći patlidžan",
      "2 tikvice",
      "1 crveni luk",
      "2 crvene paprike",
      "4 paradajza",
      "3 češnja belog luka",
      "2 kašike maslinovog ulja",
      "1 kašičica suvog origana",
      "1/2 kašičice suvog bosiljka",
      "So i biber po ukusu",
      "Sveži peršun za dekoraciju (opciono)"
    ],
    instructions: [
      "Patlidžan, tikvice, paprike i paradajz operite i isecite na kockice veličine oko 1 cm. Luk isecite na sitno. Beli luk sitno iseckajte ili izgnječite.",
      "U velikoj šerpi ili tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte luk i pržite dok ne postane staklast, oko 5 minuta.",
      "Dodajte beli luk i pržite još 1 minut, pazeći da ne zagori.",
      "Dodajte paprike i patlidžan, pa dinstajte 10 minuta, povremeno mešajući.",
      "Dodajte tikvice i paradajz, origano, bosiljak, so i biber. Dobro promešajte.",
      "Smanjite vatru na nisku, poklopite i kuvajte 30 minuta, ili dok povrće ne omekša. Povremeno promešajte da se ne zalepi za dno.",
      "Probajte i po potrebi dodajte još soli i bibera.",
      "Pre serviranja pospite svežim peršunom (opciono)."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 6,
    nutrition: {
      calories: "150-200",
      fat: "8-12g",
      carbs: "15-20g",
      protein: "3-5g"
    },
    notes: [
      "Za bogatiji ukus, možete dodati i malo paradajz pirea.",
      "Ratatouille je još ukusniji dan nakon pripreme, jer se ukusi bolje sjedine.",
      "Može se poslužiti toplo ili hladno."
    ]
  },

  "Paella": {
    name: "Paella",
    description: "Tradicionalno špansko jelo od pirinča, šafrana, morskih plodova i mesa.",
    ingredients: [
      "3 kašike maslinovog ulja",
      "500g pilećeg mesa, isečenog na komade",
      "200g chorizo kobasice, isečene na kolutove",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, iseckana",
      "1 zelena paprika, iseckana",
      "400g paradajza iz konzerve, iseckanog",
      "1 kašičica dimljene paprike (pimentón)",
      "1/2 kašičice šafrana",
      "500g pirinča za paelju (Bomba ili Calasparra)",
      "1.5l pileće supe",
      "250g školjki (dagnje ili vongole)",
      "250g gambora ili škampa, očišćenih",
      "100g graška",
      "Sveži peršun, iseckan (za dekoraciju)",
      "Limun, isečen na kriške (za serviranje)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte maslinovo ulje u velikom tiganju za paelju (paellera) na srednjoj vatri.",
      "Dodajte piletinu i chorizo kobasicu i pržite dok ne porumene sa svih strana. Izvadite iz tiganja i ostavite sa strane.",
      "U isti tiganj dodajte crni luk, beli luk, crvenu i zelenu papriku. Dinstajte dok povrće ne omekša, oko 5-7 minuta.",
      "Dodajte paradajz iz konzerve, dimljenu papriku i šafran. Kuvajte još 5 minuta.",
      "Dodajte pirinač i dobro promešajte da se sjedini sa povrćem.",
      "Vratite piletinu i chorizo kobasicu u tiganj.",
      "Sipajte pileću supu. Promešajte, začinite solju i biberom po ukusu.",
      "Smanjite vatru na nisku i kuvajte, bez mešanja, oko 20 minuta, ili dok pirinač ne upije većinu tečnosti.",
      "Rasporedite školjke i gambore/škampe po pirinču. Dodajte grašak. Kuvajte još 5-10 minuta, ili dok se školjke ne otvore i gambori/škampi ne budu kuvani. (Bacite školjke koje se nisu otvorile.)",
      "Skinite tiganj sa vatre i ostavite da odstoji 5 minuta pre serviranja.",
      "Ukrasite svežim peršunom i poslužite sa kriškama limuna."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 6,
    nutrition: {
      calories: "550-650",
      protein: "40-50g",
      fat: "20-30g",
      carbs: "50-60g"
    },
    notes: [
      "Možete koristiti različite vrste morskih plodova i mesa po vašem ukusu.",
      "Važno je ne mešati pirinač tokom kuvanja kako bi se formirala hrskava korica na dnu tiganja (socarrat).",
      "Količina tečnosti može varirati u zavisnosti od vrste pirinča.",
      "Ukoliko nemate paellera tiganj, možete koristiti veliki široki tiganj."
    ]
  },

  "Gazpacho": {
    name: "Gazpacho",
    description: "Osvežavajuća hladna supa od sirovog povrća, savršena za tople letnje dane.",
    ingredients: [
      "1 kg zrelog paradajza",
      "1 krastavac srednje veličine",
      "1 zelena paprika",
      "1 crveni luk srednje veličine",
      "2 čena belog luka",
      "50 ml maslinovog ulja",
      "30 ml vinskog sirćeta (crveno ili belo)",
      "200 ml soka od paradajza ili vode (po potrebi)",
      "So po ukusu",
      "Biber po ukusu",
      "Tabasko sos (opciono, za ljutinu)",
      "Sveži peršun ili korijander (za ukrašavanje)"
    ],
    instructions: [
      "Operite svo povrće.",
      "Paradajz grubo iseckajte.",
      "Krastavac oljuštite (ostavite malo korice ako želite) i iseckajte.",
      "Papriku očistite od semenki i iseckajte.",
      "Crveni luk i beli luk sitno iseckajte.",
      "U blender ili multipraktik stavite paradajz, krastavac, papriku, crveni luk i beli luk.",
      "Dodajte maslinovo ulje, vinsko sirće, so i biber.",
      "Blendajte dok ne dobijete glatku smesu.",
      "Ako je supa previše gusta, dodajte sok od paradajza ili vodu dok ne postignete željenu konzistenciju.",
      "Probajte i dodajte so, biber ili tabasko po ukusu.",
      "Stavite u frižider na najmanje 2 sata da se dobro ohladi.",
      "Servirajte hladno, ukrašeno seckanim peršunom ili korijanderom."
    ],
    prepTime: "20 minuta",
    cookTime: "0 minuta",
    servings: 6,
    nutrition: {
      calories: "150-200",
      fat: "10-15g",
      carbs: "10-15g",
      protein: "3-5g"
    },
    notes: [
      "Za bogatiji ukus, možete dodati malo prezle natopljene u sirćetu.",
      "Možete iseći malo povrća na sitne kockice i dodati u supu pre serviranja za dodatnu teksturu.",
      "Gazpacho se može čuvati u frižideru do 3 dana."
    ]
  },

  "Bruschetta": {
    name: "Bruschetta",
    description: "Klasično italijansko predjelo, savršeno za brzi zalogaj ili kao deo većeg obroka. Hrskavi hleb preliven svežim paradajzom, belim lukom i bosiljkom.",
    ingredients: [
      "1 baget, isečen na kriške debljine 1 cm",
      "4 kašike maslinovog ulja, plus dodatno za prelivanje",
      "2 čena belog luka, prepolovljena",
      "500g zrelog paradajza, iseckanog na kockice",
      "1/4 šolje svežeg bosiljka, iseckanog",
      "1 kašika balzamiko sirćeta (opciono)",
      "So i sveže mleveni biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C (400°F).",
      "Poređajte kriške bageta na pleh za pečenje.",
      "Premažite svaku krišku maslinovim uljem.",
      "Pecite u rerni 8-10 minuta, ili dok ne postanu zlatno smeđe i hrskave.",
      "Izvadite hleb iz rerne i odmah ga istrljajte prepolovljenim čenovima belog luka.",
      "U činiji pomešajte iseckan paradajz, bosiljak i balzamiko sirće (ako koristite). Začinite solju i biberom po ukusu.",
      "Kašikom nanesite smesu od paradajza na svaku krišku prepečenog hleba.",
      "Prelijte dodatno maslinovim uljem.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 6,
    nutrition: {
      calories: "150-200",
      fat: "8-12g",
      carbs: "15-20g",
      protein: "3-5g"
    },
    notes: [
      "Za jači ukus belog luka, možete ga sitno iseckati i pomešati sa paradajzom.",
      "Dodajte malo parmezana ili mozzarella sira pre posluživanja za bogatiji ukus.",
      "Bruschetta se najbolje služi odmah, dok je hleb još hrskav."
    ]
  },

  "Caprese": {
    name: "Caprese",
    description: "Klasična italijanska salata sa svežim paradajzom, mocarelom i bosiljkom. Jednostavna, brza i ukusna.",
    ingredients: [
      "400g zrelog paradajza",
      "250g sveže mocarele (u lopti ili kriškama)",
      "1/4 šolje svežeg bosiljka",
      "2 kašike ekstra devičanskog maslinovog ulja",
      "1 kašika balzamiko sirćeta (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Paradajz operite i isecite na kriške debljine oko 0.5 cm.",
      "Mocarelu isecite na kriške debljine oko 0.5 cm (ukoliko već nije u kriškama).",
      "Na tanjir aranžirajte kriške paradajza i mocarele naizmenično, preklapajući ih blago.",
      "Pospite svežim listovima bosiljka preko paradajza i mocarele.",
      "Prelijte maslinovim uljem i, po želji, balzamikom.",
      "Začinite solju i biberom po ukusu."
    ],
    prepTime: "10 minuta",
    cookTime: "Nema kuvanja",
    servings: 2,
    nutrition: {
      calories: 350,
      fat: "25g",
      protein: "20g",
      carbs: "10g"
    },
    notes: [
      "Za intenzivniji ukus, ostavite salatu da odstoji 10-15 minuta pre serviranja.",
      "Koristite najkvalitetnije sastojke za najbolji ukus.",
      "Možete dodati malo belog luka u maslinovo ulje za dodatnu aromu."
    ]
  },

  "Moussaka": {
    name: "Moussaka",
    description: "Tradicionalno grčko jelo sa slojevima patlidžana, mlevenog mesa i bešamel sosa.",
    ingredients: [
      "2 velika patlidžana",
      "So",
      "Maslinovo ulje",
      "500g mlevene junetine ili jagnjetine",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 konzerva (400g) pelata, iseckanih",
      "1 kašičica suvog origana",
      "1/2 kašičice cimeta",
      "1/4 kašičice mlevenog karanfilića",
      "1 lovorov list",
      "1/2 šolje crvenog vina (opciono)",
      "So i biber po ukusu",
      "50g putera",
      "50g brašna",
      "750ml mleka",
      "Prstohvat muskatnog oraščića",
      "100g rendanog parmezana ili kefalotiri sira",
      "2 jaja, umućena"
    ],
    instructions: [
      "Patlidžane iseći na kriške debljine oko 1 cm. Posoliti ih i ostaviti da odstoje 30 minuta kako bi se uklonila gorčina.",
      "Zagrejati rernu na 180°C.",
      "Isprati patlidžane i osušiti ih papirnim ubrusima.",
      "Premazati patlidžane maslinovim uljem i peći u rerni oko 20 minuta, ili dok ne omekšaju i blago porumene. Može i pržiti na tiganju na malo ulja, dok ne omekšaju i porumene.",
      "U velikom tiganju zagrejati malo maslinovog ulja. Dodati mleveno meso i pržiti dok ne porumeni.",
      "Dodati luk i beli luk i pržiti dok ne omekšaju.",
      "Dodati pelat, origano, cimet, karanfilić, lovorov list, crveno vino (ako se koristi), so i biber. Smanjiti vatru i kuvati 30 minuta, ili dok se sos ne zgusne. Izvaditi lovorov list.",
      "Dok se sos kuva, pripremiti bešamel sos. U šerpi otopiti puter na srednjoj vatri.",
      "Dodati brašno i mešati dok se ne formira glatka pasta (roux).",
      "Postepeno dodavati mleko, neprestano mešajući, dok se sos ne zgusne i postane gladak.",
      "Skloniti sa vatre i dodati muskatni oraščić, so, biber i 50g rendanog sira. Ostaviti da se malo prohladi, pa umešati umućena jaja.",
      "Na dno vatrostalne posude rasporediti polovinu pečenog patlidžana.",
      "Preko patlidžana rasporediti sav sos od mesa.",
      "Preko mesa rasporediti preostali patlidžan.",
      "Preliti bešamel sosom.",
      "Posuti preostalim rendanim sirom.",
      "Peći u rerni 30-40 minuta, ili dok ne porumeni.",
      "Ostaviti da se prohladi 10-15 minuta pre služenja."
    ],
    prepTime: "45 minuta",
    cookTime: "60 minuta",
    servings: 8,
    nutrition: {
      calories: "450-550",
      protein: "30-40g",
      fat: "25-35g",
      carbs: "20-30g"
    },
    notes: [
      "Za bogatiji ukus, možete dodati narendani krompir u sloj sa patlidžanom.",
      "Možete koristiti i kombinaciju junetine i jagnjetine.",
      "Bešamel sos možete obogatiti dodavanjem malo pavlake za kuvanje."
    ]
  },

  "Souvlaki": {
    name: "Souvlaki",
    description: "Mali komadi mariniranog mesa na ražnjiću, popularna grčka ulična hrana.",
    ingredients: [
      "600g svinjskog ili pilećeg mesa (isečenog na kockice 2-3 cm)",
      "1/4 šolje maslinovog ulja",
      "1/4 šolje limunovog soka",
      "2 čena belog luka, sitno iseckana",
      "1 kašika sušenog origana",
      "1/2 kašičice sušenog ruzmarina (opciono)",
      "So i biber, po ukusu",
      "4 drvena ili metalna ražnjića",
      "(Opciono) povrće za ražnjiće: paprika (crvena, žuta, zelena), crveni luk, tikvice - isečeno na komade veličine mesa."
    ],
    instructions: [
      "U velikoj činiji pomešajte maslinovo ulje, limunov sok, beli luk, origano, ruzmarin (ako se koristi), so i biber.",
      "Dodajte meso u marinadu i dobro promešajte da se svi komadi mesa oblože.",
      "Pokrijte činiju i stavite u frižider da se marinira najmanje 2 sata, a idealno preko noći.",
      "Ako koristite drvene ražnjiće, potopite ih u vodu najmanje 30 minuta pre upotrebe kako ne bi izgoreli na roštilju.",
      "Izvadite meso iz marinade. Ako koristite povrće, naizmenično nanižite meso i povrće na ražnjiće. Ako ne koristite povrće, samo nanižite meso na ražnjiće.",
      "Zagrejte roštilj ili grill tiganj na srednje jaku vatru.",
      "Pecite ražnjiće 15-20 minuta, okrećući ih povremeno, dok meso ne bude pečeno i dobije lepu boju sa svih strana. Koristite termometar za meso da biste proverili da li je meso dostiglo sigurnu temperaturu (71°C za svinjetinu, 74°C za piletinu).",
      "Poslužite toplo, sa pita hlebom, tzatziki sosom, salatom ili pomfritom."
    ],
    prepTime: "20 minuta",
    cookTime: "15-20 minuta",
    servings: 4,
    nutrition: {
      calories: "350-450",
      protein: "35-45g",
      fat: "20-30g",
      carbs: "5-10g"
    },
    notes: [
      "Za intenzivniji ukus, možete dodati malo grčkog jogurta u marinadu.",
      "Ražnjići se mogu peći i u rerni. Zagrejte rernu na 200°C i pecite ih oko 20-25 minuta, okrećući ih na pola pečenja.",
      "Ukoliko koristite piletinu, pazite da je ne prepečete, jer može postati suva."
    ]
  },

  "Pasta Puttanesca": {
    name: "Pasta Puttanesca",
    description: "Klasično italijansko jelo od testenine sa bogatim, slanim sosom od paradajza, maslina, kapara i inćuna.",
    ingredients: [
      "400g špageta",
      "60ml maslinovog ulja",
      "4 čena belog luka, sitno iseckana",
      "50g inćuna u ulju, oceđeni i iseckani",
      "1 kašičica pahuljica čilija (ili po ukusu)",
      "800g seckanog paradajza iz konzerve",
      "100g crnih maslina, bez koštica i prepolovljenih",
      "2 kašike kapara, oceđenih",
      "2 kašike iseckanog svežeg peršuna",
      "So i sveže mleveni crni biber po ukusu"
    ],
    instructions: [
      "Stavite veliki lonac sa posoljenom vodom da provri. Dodajte špagete i kuvajte prema uputstvima na pakovanju dok ne budu al dente.",
      "Dok se testenina kuva, zagrejte maslinovo ulje u velikom tiganju na srednjoj vatri. Dodajte beli luk i inćune i kuvajte, mešajući, dok se inćuni ne rastope, oko 2-3 minuta.",
      "Dodajte pahuljice čilija i kuvajte još 30 sekundi.",
      "Ubacite seckani paradajz, masline i kapare. Pustite da provri, a zatim smanjite vatru i dinstajte sos 10-15 minuta, ili dok se malo ne zgusne.",
      "Začinite sos solju i biberom po ukusu.",
      "Kada je testenina gotova, sačuvajte oko 1 šolju vode od kuvanja testenine. Procedite testeninu i dodajte je u tiganj sa sosom.",
      "Dobro promešajte da se testenina obloži sosom. Ako je sos previše gust, dodajte malo vode od kuvanja testenine da ga razredite.",
      "Poslužite odmah, posuto svežim peršunom."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4,
    nutrition: {
      calories: "600-700",
      fat: "25-35g",
      protein: "20-25g",
      carbs: "70-80g"
    },
    notes: [
      "Za intenzivniji ukus, možete dodati 1-2 kašike paradajz pirea u sos.",
      "Ako ne volite ljuto, smanjite količinu čilija ili ga izostavite.",
      "Možete koristiti i druge vrste testenine, kao što su penne ili linguine."
    ]
  },

  "Seafood Risotto": {
    name: "Seafood Risotto",
    description: "Bogato i kremasto jelo od pirinča sa raznim morskim plodovima. Savršeno za posebne prilike ili kao ukusan obrok.",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 manja glavica crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "350g Arborio pirinča",
      "125ml suvog belog vina",
      "1 l riblje supe (ili pileće supe), tople",
      "200g očišćenih repova gambora",
      "200g očišćenih dagnji",
      "200g očišćenih školjki (Vongole ili slično)",
      "100g lignji, isečenih na kolutove",
      "2 kašike putera",
      "50g rendanog parmezana",
      "Sveži peršun, sitno iseckan",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj šerpi ili dubokom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte crni luk i dinstajte dok ne postane staklast, oko 5 minuta. Dodajte beli luk i dinstajte još minut.",
      "Dodajte pirinač i mešajte ga dok ne postane providan, oko 2 minuta.",
      "Ulijte belo vino i kuvajte dok se skoro potpuno ne upije, uz stalno mešanje.",
      "Postepeno dodajte toplu supu, jednu kutlaču po kutlaču, uz stalno mešanje. Sačekajte da pirinač upije tečnost pre nego što dodate sledeću kutlaču. Nastavite da dodajete supu dok pirinač ne postane kremast i skuvan al dente, oko 20-25 minuta.",
      "U odvojenom tiganju, na jakoj vatri, brzo propržite gambore, dagnje, školjke i lignje dok ne budu skuvani. Ovo traje samo nekoliko minuta. Izvadite ih iz tiganja i ostavite na stranu.",
      "Kada je pirinač skuvan, umešajte puter i parmezan. Dodajte pripremljene morske plodove i promešajte.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite odmah, posuto svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 4,
    nutrition: {
      calories: "550-650",
      protein: "30-40g",
      fat: "20-30g",
      carbs: "70-80g"
    },
    notes: [
      "Uvek koristite toplu supu da biste održali temperaturu pirinča i osigurali ravnomerno kuvanje.",
      "Važno je stalno mešati rižoto kako bi se oslobodio skrob iz pirinča i dobila kremasta tekstura.",
      "Morske plodove možete prilagoditi svom ukusu i dostupnosti."
    ]
  },

  "Baklava": {
    name: "Baklava",
    description: "Tradicionalni desert sa orasima i sirupom.",
    ingredients: [
      "500g tankih kora za pitu",
      "250g mlevenih oraha",
      "100g seckanih oraha",
      "150g putera, otopljenog",
      "1 kašičica cimeta (opciono)",
      // Za sirup:
      "500g šećera",
      "400ml vode",
      "1 limun, isečen na kolutove",
      "1 kašika meda (opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 180°C.",
      "Pomešajte mlevene i seckane orahe sa cimetom (ako koristite).",
      "Podmažite tepsiju (otprilike 30x20 cm) otopljenim puterom.",
      "Stavite jednu koru na dno tepsije i premažite je otopljenim puterom. Ponavljajte postupak sa 5-6 kora.",
      "Posipajte ravnomerno trećinu smese od oraha preko kora.",
      "Stavite 2-3 kore preko oraha, svaku premazujući puterom.",
      "Ponovite postupak sa još jednom trećinom oraha.",
      "Stavite još 2-3 kore, premazujući svaku puterom.",
      "Posipajte preostalom smesom od oraha.",
      "Prekrijte sa preostalim korama, svaku premazujući puterom. Gornja kora treba biti dobro premazana puterom.",
      "Oštrim nožem isecite baklavu na rombove ili kvadrate pre pečenja.",
      "Pecite u zagrejanoj rerni 40-45 minuta, dok ne postane zlatno-braon.",
      "Dok se baklava peče, pripremite sirup: u šerpi pomešajte šećer, vodu i kolutove limuna. Kuvajte na srednjoj vatri dok se šećer ne rastopi.",
      "Smanjite vatru i kuvajte sirup 15-20 minuta, dok se malo ne zgusne. Dodajte med (ako koristite) pred kraj kuvanja.",
      "Kada je baklava pečena, izvadite je iz rerne i odmah prelijte vrućim sirupom. Prelijte ravnomerno po celoj površini.",
      "Ostavite baklavu da se ohladi i upije sirup najmanje 4 sata, ili idealno preko noći, pre služenja."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 24,
    nutrition: {
      calories: "250-300",
      fat: "15-20g",
      carbs: "25-35g",
      protein: "3-5g"
    },
    notes: [
      "Za intenzivniji ukus oraha, orahe možete blago ispeći u rerni pre mlevenja.",
      "Količinu šećera u sirupu možete prilagoditi svom ukusu.",
      "Baklavu čuvajte u hermetički zatvorenoj posudi na sobnoj temperaturi."
    ]
  }
};