import { Recipe } from './recipes';

export const veganRecipes: Record<string, Recipe> = {
  "Quinoa Bowl": {
    name: "Quinoa Bowl",
    description: "Ovo je jednostavan i hranljiv obrok, idealan za ručak ili večeru. Brzo se priprema i može se prilagoditi vašem ukusu.",
    ingredients: [
      "1/2 šolje quinoa",
      "1 šolja vode",
      "1 kašika maslinovog ulja",
      "1/4 crvenog luka, sitno iseckanog",
      "1/2 crvene paprike, iseckane",
      "1/4 šolje kukuruza šećerca (može i zamrznut)",
      "1/4 šolje crnog pasulja (iz konzerve, ispranog)",
      "1/4 avokada, iseckanog",
      "Sok od 1/2 limete",
      "So i biber po ukusu",
      "Sveži cilantro (korijander) za dekoraciju (opciono)"
    ],
    instructions: [
      "Isperite quinoa u sitnom situ pod hladnom vodom.",
      "U šerpi pomešajte quinoa i vodu. Pustite da provri, zatim smanjite temperaturu, poklopite i kuvajte 15 minuta, ili dok quinoa ne upije svu vodu.",
      "Dok se quinoa kuva, zagrejte maslinovo ulje u tiganju na srednjoj vatri.",
      "Dodajte crveni luk i papriku i dinstajte dok ne omekšaju, oko 5 minuta.",
      "Dodajte kukuruz i crni pasulj i kuvajte još 2-3 minuta.",
      "Sklonite quinoa sa vatre i ostavite da odstoji 5 minuta.",
      "Prebacite kuvanu quinoa u činiju.",
      "Dodajte smesu sa lukom i paprikom, avokado i prelijte sokom od limete.",
      "Posolite i pobiberite po ukusu.",
      "Dekorišite sa svežim cilantrom (opciono)."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1,
    nutrition: {
      calories: 400,
      protein: "15g",
      fat: "20g",
      carbohydrates: "50g",
      fiber: "10g"
    },
    notes: [
      "Možete dodati druge povrće po želji, kao što su brokoli, spanać ili paradajz.",
      "Umesto limete, možete koristiti sok od limuna.",
      "Za proteinski obrok, dodajte piletinu, tofu ili jaja.",
      "Možete napraviti vecu kolicinu quinoe unapred i koristiti je tokom nedelje."
    ]
  },

  "Tofu Stir Fry": {
    name: "Tofu Stir Fry",
    description: "Brzo i ukusno jelo sa tofuom, povrćem i soja sosom. Idealno za ručak ili večeru.",
    ingredients: [
      "250g čvrstog tofua",
      "1 kašika kukuruznog skroba",
      "2 kašike biljnog ulja",
      "1 crvena paprika, iseckana",
      "1 zelena paprika, iseckana",
      "1 glavica crnog luka, iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 šolja brokule, iseckana na cvetiće",
      "1/2 šolje šargarepe, iseckane na štapiće",
      "3 kašike soja sosa",
      "1 kašika meda ili javorovog sirupa",
      "1 kašičica susamovog ulja",
      "Susam za posipanje (opciono)",
      "Mladi luk za posipanje (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Tofu ocedite od viška vode i isecite na kockice.",
      "U činiji pomešajte tofu sa kukuruznim skrobom, solju i biberom. Dobro promešajte da se tofu ravnomerno obloži.",
      "U velikom tiganju ili woku zagrejte biljno ulje na srednje jakoj vatri.",
      "Dodajte tofu i pržite dok ne postane zlatno braon i hrskav, oko 8-10 minuta. Izvadite tofu iz tiganja i stavite na stranu.",
      "U isti tiganj dodajte crveni luk, beli luk, crvenu i zelenu papriku, šargarepu i brokule. Pržite dok povrće ne omekša, oko 5-7 minuta.",
      "U činijici pomešajte soja sos, med (ili javorov sirup) i susamovo ulje.",
      "Vratite tofu u tiganj sa povrćem.",
      "Prelijte sos preko tofua i povrća i kuvajte, mešajući, dok se sos ne zgusne, oko 2-3 minuta.",
      "Poslužite toplo, posuto susamom i mladim lukom (opciono)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2,
    nutrition: {
      calories: "350-400",
      protein: "25-30g",
      fat: "20-25g",
      carbohydrates: "20-25g"
    },
    notes: [
      "Možete dodati i druge vrste povrća po želji, kao što su grašak, pečurke ili tikvice.",
      "Za pikantniji ukus, dodajte malo čili sosa ili ljute papričice.",
      "Poslužite uz pirinač ili nudle."
    ]
  },

  "Veggie Burger": {
    name: "Veggie Burger",
    description: "Vegetarijanski burger pun ukusa, savršen za ručak ili večeru.",
    ingredients: [
      "1 šolja kuvanog smeđeg pirinča",
      "1 šolja kuvanog crnog pasulja, oceđenog i ispranog",
      "1/2 šolje sitno iseckane šargarepe",
      "1/2 šolje sitno iseckanog crnog luka",
      "1/4 šolje sitno iseckane paprike (bilo koje boje)",
      "1/4 šolje seckanih oraha ili badema",
      "2 kašike brašna (ili brašna od leblebija za verziju bez glutena)",
      "1 kašika soja sosa",
      "1 kašičica dimljene paprike",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice crnog bibera",
      "So po ukusu",
      "2 kašike ulja (za prženje)",
      "4 zemičke za burgere",
      "Prilozi po izboru (zelena salata, paradajz, luk, avokado, sos)"
    ],
    instructions: [
      "U velikoj posudi, izgnječite crni pasulj viljuškom. Ne treba ga potpuno usitniti, ostavite malo teksture.",
      "Dodajte pirinač, šargarepu, luk, papriku i orahe (ili bademe) u posudu sa pasuljem.",
      "U posebnoj manjoj posudi, pomešajte brašno, soja sos, dimljenu papriku, beli luk u prahu, biber i so.",
      "Dodajte suve sastojke u posudu sa ostalim sastojcima i dobro promešajte dok se sve ne sjedini.",
      "Rukama formirajte 4 jednaka burgera.",
      "Zagrejte ulje u velikom tiganju na srednjoj vatri.",
      "Pažljivo stavite burgere u tiganj i pržite ih oko 5-7 minuta sa svake strane, dok ne postanu zlatno smeđi i čvrsti na dodir.",
      "Poslužite burgere u zemičkama sa prilozima po izboru."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4,
    nutrition: {
      calories: "300-350",
      protein: "12-15g",
      fat: "10-15g",
      carbohydrates: "40-45g"
    },
    notes: [
      "Za dodatni ukus, možete dodati malo ljute papričice u smesu za burgere.",
      "Burgere možete peći i u rerni. Pecite ih na 200°C oko 20 minuta, okrećući ih na pola pečenja.",
      "Ako je smesa previše vlažna, dodajte još malo brašna. Ako je previše suva, dodajte malo vode ili soja sosa.",
      "Burgere možete pripremiti unapred i čuvati u frižideru do 2 dana."
    ]
  },

  "Lentil Curry": {
    name: "Lentil Curry",
    description: "Brz i ukusan kari od sočiva, idealan za ručak ili večeru. Veganski i pun proteina.",
    ingredients: [
      "1 šolja crvenog sočiva",
      "1 luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 komad đumbira (oko 2 cm), izrendan",
      "1 crvena paprika, sitno iseckana",
      "1 konzerva (400g) seckanog paradajza",
      "1 konzerva (400ml) kokosovog mleka",
      "2 kašike kari praha",
      "1 kašičica kurkume",
      "1/2 kašičice čilija u prahu (opciono)",
      "2 kašike biljnog ulja",
      "So i biber po ukusu",
      "Sveži korijander za ukras"
    ],
    instructions: [
      "Sočivo isperite pod mlazom hladne vode.",
      "U većoj šerpi zagrejte ulje na srednjoj vatri. Dodajte luk i pržite dok ne postane staklast, oko 5 minuta.",
      "Dodajte beli luk i đumbir i pržite još minut dok ne zamiriše.",
      "Dodajte crvenu papriku i pržite 3 minuta.",
      "Umešajte kari prah, kurkumu i čili u prahu (ako koristite) i pržite minut dok se arome ne oslobode.",
      "Dodajte seckani paradajz i sočivo. Dobro promešajte.",
      "Ulijte kokosovo mleko i dodajte so i biber po ukusu.",
      "Pustite da provri, zatim smanjite vatru, poklopite i krčkajte 20-25 minuta, ili dok sočivo ne omekša. Povremeno promešajte.",
      "Probajte i po potrebi dodajte još začina.",
      "Poslužite toplo, ukrašeno svežim korijanderom. Može se poslužiti uz pirinač ili naan hleb."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4,
    nutrition: {
      calories: "350-400",
      protein: "20g",
      carbohydrates: "50g",
      fat: "15g"
    },
    notes: [
      "Za bogatiji ukus, možete dodati kašiku paradajz pirea zajedno sa seckanim paradajzom.",
      "Ukoliko želite gušći kari, izgnječite deo sočiva varjačom pred kraj kuvanja.",
      "Možete koristiti i druge vrste povrća, kao što su spanać, grašak ili šargarepa."
    ]
  },

  "Chickpea Salad": {
    name: "Chickpea Salad",
    description: "Osvežavajuća i hranljiva salata od leblebija, idealna kao lagani ručak ili prilog.",
    ingredients: [
      "1 konzerva (400g) leblebija, oceđena i isprana",
      "1/2 crvenog luka, sitno iseckanog",
      "1/2 krastavca, sitno iseckanog",
      "1 crvena paprika, sitno iseckana",
      "1/4 šolje svežeg peršuna, iseckanog",
      "Sok od 1 limuna",
      "2 kašike maslinovog ulja",
      "1 kašičica senfa",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj činiji pomešajte oceđene leblebije, crveni luk, krastavac i crvenu papriku.",
      "Dodajte iseckani peršun.",
      "U manjoj činiji umutite limunov sok, maslinovo ulje i senf.",
      "Začinite so i biberom po ukusu.",
      "Prelijte salatu dresingom i dobro promešajte.",
      "Ostavite da odstoji 10-15 minuta pre služenja, da se ukusi sjedine."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 4,
    nutrition: {
      calories: 250,
      protein: "10g",
      fat: "12g",
      carbohydrates: "30g"
    },
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su feta sir, masline ili avokado.",
      "Za pikantniji ukus, dodajte malo ljute papričice.",
      "Salata se može čuvati u frižideru do 3 dana."
    ]
  },

  "Vegan Pizza": {
    name: "Vegan Pizza",
    description: "Veganska pizza sa omiljenim povrćem i domaćim testom.",
    ingredients: [
      "300g brašna (tip 00 ili glatko)",
      "200ml tople vode",
      "7g suvog kvasca (ili 20g svežeg)",
      "1 kašičica šećera",
      "1/2 kašičice soli",
      "2 kašike maslinovog ulja",
      "200g pelata paradajza (ili paradajz sos)",
      "1 kašičica sušenog origana",
      "1/2 kašičice belog luka u prahu",
      "So i biber po ukusu",
      "1 crveni luk, tanko isečen",
      "1 paprika, isečena na trake",
      "100g šampinjona, iseckanih",
      "50g crnih maslina, bez koštice i isečenih",
      "Vegan sir (oko 200g), nariban",
      "Svež bosiljak za dekoraciju (opciono)",
      "Maslinovo ulje za prelivanje"
    ],
    instructions: [
      "**Priprema testa:** U velikoj posudi pomešati toplu vodu, kvasac i šećer. Ostaviti 5-10 minuta da se kvasac aktivira i zapeni.",
      "Dodati brašno, so i maslinovo ulje. Umesiti testo dok ne postane glatko i elastično (oko 5-7 minuta). Ako je testo previše lepljivo, dodati još malo brašna.",
      "Testo prekriti krpom i ostaviti na toplom mestu da naraste oko 1 sat, ili dok se ne udvostruči.",
      "**Priprema nadeva:** U posudi pomešati pelat paradajza, origano, beli luk u prahu, so i biber.",
      "Zagrejti rernu na 220°C.",
      "**Oblikovanje pizze:** Naraslo testo podeliti na 4 dela. Svaki deo razvaljati u krug (ili željeni oblik) debljine oko 5 mm.",
      "Testo preneti na pleh obložen papirom za pečenje.",
      "Premazati testo paradajz sosom.",
      "Poređati crveni luk, papriku, šampinjone i masline.",
      "Posuti vegan sirom.",
      "Preliti sa malo maslinovog ulja.",
      "**Pečenje:** Peći u zagrejanoj rerni 20-25 minuta, ili dok testo ne porumeni i sir se ne otopi i dobije boju.",
      "**Posluživanje:** Gotovu pizzu izvaditi iz rerne, ukrasiti svežim bosiljkom (ako se koristi) i iseći na komade."
    ],
    prepTime: "30 minuta",
    cookTime: "25 minuta",
    servings: 4,
    nutrition: {
      calories: "450-550",
      fat: "15-20g",
      carbohydrates: "60-70g",
      protein: "15-20g"
    },
    notes: [
      "Testo se može pripremiti i dan ranije i držati u frižideru.",
      "Nadev se može prilagoditi vašem ukusu i preferencijama. Dodajte ili oduzmite povrće po želji.",
      "Umesto kupovnog vegan sira, možete koristiti domaći sos od indijskih oraščića."
    ]
  },

  "Smoothie Bowl": {
    name: "Smoothie Bowl",
    description: "Osvežavajući i hranljiv doručak ili užina.",
    ingredients: [
      "1 smrznuta banana, isečena",
      "1/2 šolje smrznutog bobičastog voća (jagode, borovnice, maline)",
      "1/4 šolje mleka (kravljeg, bademovog, kokosovog)",
      "1 kašika putera od kikirikija ili badema",
      "1 kašičica chia semenki (opciono)",
      "Topping po želji (granola, sveže voće, kokosove pahuljice, semenke)"
    ],
    instructions: [
      "U blender stavite smrznutu bananu, smrznuto bobičasto voće, mleko, puter od kikirikija i chia semenke (ako koristite).",
      "Blendajte dok ne dobijete glatku smesu. Možda ćete morati da zaustavite blender i sastružite strane posude nekoliko puta.",
      "Prebacite smesu u činiju.",
      "Ukrasite toppingom po želji.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1,
    nutrition: {
      calories: "350-450",
      fat: "15-25g",
      carbohydrates: "40-50g",
      protein: "10-15g"
    },
    notes: [
      "Ako je smesa previše gusta, dodajte još malo mleka.",
      "Možete koristiti bilo koje smrznuto voće po vašem izboru.",
      "Za dodatnu slatkoću, dodajte malo meda ili javorovog sirupa."
    ]
  },

  "Chia Pudding": {
    name: "Chia Pudding",
    description: "Jednostavan i zdrav desert ili doručak, bogat vlaknima i omega-3 masnim kiselinama.",
    ingredients: [
      "3 kašike chia semenki",
      "1 šolja mleka (bademovo, kokosovo, obično)",
      "1 kašika meda, javorovog sirupa ili drugog zaslađivača (po ukusu)",
      "1/2 kašičice ekstrakta vanile (opciono)",
      "Voće (bobičasto voće, banane, mango) za preliv",
      "Oraščasti plodovi, semenke ili kokos za preliv (opciono)"
    ],
    instructions: [
      "U posudi srednje veličine, pomešajte chia semenke i mleko.",
      "Dodajte zaslađivač i ekstrakt vanile (ako koristite).",
      "Dobro promešajte da se chia semenke ne zgrudvaju.",
      "Pokrijte posudu i stavite u frižider na najmanje 2 sata, idealno preko noći.",
      "Pre posluživanja, promešajte chia pudding.",
      "Ukrasite voćem, orašastim plodovima, semenkama ili kokosom po želji.",
      "Poslužite hladno."
    ],
    prepTime: "5 minuta",
    cookTime: "Minimum 2 sata (ili preko noći)",
    servings: 1,
    nutrition: {
      calories: "250-350",
      protein: "10-15g",
      fat: "15-25g",
      carbohydrates: "20-30g",
      fiber: "10-15g"
    },
    notes: [
      "Za gušću konzistenciju, koristite manje mleka. Za ređu konzistenciju, dodajte više mleka.",
      "Chia pudding se može čuvati u frižideru do 5 dana.",
      "Možete dodati kakao u prahu, začine (cimet, muskatni oraščić) ili druge arome po ukusu.",
      "Eksperimentišite sa različitim vrstama mleka i zaslađivača."
    ]
  },

  "Avocado Toast": {
    name: "Avocado Toast",
    description: "Brz i jednostavan doručak ili užina, savršen za ljubitelje avokada.",
    ingredients: [
      "1 kriška hleba (integralni, kiselo testo, ili po izboru)",
      "1/2 zrelog avokada",
      "1/4 limuna ili limete (sok)",
      "Prstohvat soli",
      "Prstohvat bibera",
      "Opciono: crvena paprika u prahu, susam, ljute pahuljice, jaje na oko"
    ],
    instructions: [
      "Hleb ispecite u tosteru ili u tiganju dok ne postane zlatno smeđi i hrskav.",
      "U maloj posudi, izgnječite avokado viljuškom.",
      "Dodajte limunov ili limetin sok, so i biber. Promešajte da se sjedini.",
      "Namažite smesu od avokada na tostirani hleb.",
      "Pospite sa crvenom paprikom u prahu, susamom, ljutim pahuljicama, ili drugim željenim dodacima.",
      "Opciono: Dodajte jaje na oko preko avokada.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "2 minuta",
    servings: 1,
    nutrition: {
      calories: "200-300",
      fat: "15-25g",
      carbohydrates: "15-25g",
      protein: "5-10g"
    },
    notes: [
      "Za dodatni ukus, pre mazanja avokada, možete trljati tost sa režnjem belog luka.",
      "Za bogatiju teksturu, dodajte malo izmrvljenog feta sira ili kozjeg sira preko avokada.",
      "Čuvajte avokado u frižideru sa košticom i malo limunovog soka da ne bi potamneo."
    ]
  },

  "Buddha Bowl": {
    name: "Buddha Bowl",
    description: "Ovo je zdrav, zasitan i prilagodljiv obrok prepun hranljivih sastojaka. Savršen za ručak ili večeru.",
    ingredients: [
      "1/2 šolje kinoe",
      "1 šolja vode",
      "1 kašika maslinovog ulja",
      "1/2 šolje brokolija, iseckanog",
      "1/2 šolje slatkog krompira, iseckanog na kockice",
      "1/4 šolje crnog pasulja, konzerviranog, ispranog i oceđenog",
      "1/4 šolje kukuruza, konzerviranog ili svežeg",
      "1/4 avokada, isečenog na kriške",
      "1 jaje",
      "Sok od 1/2 limete",
      "So i biber po ukusu",
      "Opcije za preliv: susam, ljute pahuljice, tahini dresing"
    ],
    instructions: [
      "Kinuu isperite u sitnom situ.",
      "U šerpi pomešajte ispranu kinuu i vodu. Pustite da provri, zatim smanjite vatru na nisku, poklopite i kuvajte 15 minuta, ili dok se tečnost ne upije i kinoa ne omekša.",
      "Zagrejte maslinovo ulje u tiganju na srednjoj vatri. Dodajte brokoli i slatki krompir i pržite 15-20 minuta, ili dok ne omekšaju i blago porumene. Posolite i pobiberite po ukusu.",
      "Dok se povrće prži, skuvajte jaje po želji (kuvano, poširano ili pečeno).",
      "U činiji, rasporedite kuvanu kinuu kao osnovu.",
      "Dodajte prženi brokoli i slatki krompir, crni pasulj i kukuruz.",
      "Stavite kriške avokada i kuvano jaje preko povrća.",
      "Prelijte sokom od limete.",
      "Za dodatni ukus, pospite susamom, ljutim pahuljicama ili dodajte tahini dresing."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 1,
    nutrition: {
      calories: "450-550",
      protein: "20-25g",
      fat: "20-25g",
      carbohydrates: "50-60g",
      fiber: "15-20g"
    },
    notes: [
      "Slobodno zamenite povrće onim što imate pri ruci ili onim što vam se najviše sviđa. Na primer, kelj, šargarepa, karfiol, ili spanać bi dobro funkcionisali.",
      "Možete koristiti i druge vrste pasulja ili sočiva umesto crnog pasulja.",
      "Za proteinski dodatak, dodajte tofu ili piletinu na žaru.",
      "Pripremite kinuu i povrće unapred da biste ubrzali proces."
    ]
  },

  "Vegan Pasta": {
    name: "Vegan Pasta",
    description: "Brzo i ukusno jelo od testenine sa povrćem, idealno za ručak ili večeru.",
    ingredients: [
      "400g testenine (fusili, penne, ili po izboru)",
      "1 veliki crveni luk, iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, iseckana",
      "1 žuta paprika, iseckana",
      "200g cherry paradajza, prepolovljenih",
      "1 konzerva (400g) seckanog paradajza",
      "100g spanaća, svežeg ili zamrznutog",
      "2 kašike maslinovog ulja",
      "1 kašičica italijanske mešavine začina",
      "So i biber po ukusu",
      "Sveži bosiljak za ukras (opciono)",
      "Veganski parmezan (opciono)"
    ],
    instructions: [
      "Skuvajte testeninu prema uputstvima na pakovanju. Procedite i ostavite sa strane.",
      "U velikom tiganju ili šerpi zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte iseckani crveni luk i pržite dok ne omekša, oko 5 minuta.",
      "Dodajte sitno iseckani beli luk i pržite još 1 minut, dok ne zamiriše.",
      "Dodajte iseckanu crvenu i žutu papriku, pa pržite dok ne omekšaju, oko 5 minuta.",
      "Dodajte prepolovljeni cherry paradajz i seckani paradajz iz konzerve. Promešajte i ostavite da se krčka 10 minuta.",
      "Dodajte spanać i italijansku mešavinu začina. Kuvajte dok spanać ne uvene (oko 2-3 minuta).",
      "Posolite i pobiberite po ukusu.",
      "Dodajte kuvanu testeninu u sos od povrća i dobro promešajte.",
      "Kuvajte još 2-3 minuta, dok se testenina ne zagreje i sjedini sa sosom.",
      "Servirajte toplo. Ukrasite svežim bosiljkom i pospite veganskim parmezanom (opciono)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4,
    nutrition: {
      calories: "450-550",
      protein: "15-20g",
      carbohydrates: "70-80g",
      fat: "10-15g"
    },
    notes: [
      "Možete dodati i druge vrste povrća po želji, kao što su tikvice, šampinjoni ili brokoli.",
      "Za pikantniji ukus, dodajte malo čili pahuljica."
    ]
  },

  "Veggie Wrap": {
    name: "Veggie Wrap",
    description: "Lagani i ukusni wrap pun svežeg povrća, savršen za brz ručak ili večeru.",
    ingredients: [
      "2 velike tortilje",
      "1/2 krastavca, isečen na tanke kolutove",
      "1/2 crvene paprike, iseckane na trakice",
      "1/2 šargarepe, narendane",
      "1 šaka baby spanaća",
      "50g humus",
      "50g feta sir, izmrvljen",
      "1 kašika maslinovog ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "Pripremite povrće: Operite i isecite krastavac, papriku i šargarepu.",
      "Zagrejte tortilje: Na suvom tiganju zagrejte tortilje sa obe strane po 30 sekundi.",
      "Namažite humus: Ravnomerno namažite humus preko svake tortilje.",
      "Složite povrće: Preko humusa složite spanać, krastavac, papriku i šargarepu.",
      "Dodajte feta sir: Pospite izmrvljeni feta sir preko povrća.",
      "Začinite: Poprskajte maslinovim uljem, posolite i pobiberite po ukusu.",
      "Uvijte wrapove: Čvrsto uvijte tortilje.",
      "Servirajte: Isecite wrapove na pola i odmah servirajte."
    ],
    prepTime: "15 minuta",
    cookTime: "5 minuta",
    servings: 2,
    nutrition: {
      calories: 350,
      protein: "15g",
      fat: "20g",
      carbohydrates: "30g"
    },
    notes: [
      "Možete dodati i drugo povrće po želji, kao što su avokado, paradajz ili klice.",
      "Umesto humusa, možete koristiti neki drugi namaz, kao što je pesto ili krem sir.",
      "Za pikantniji ukus, dodajte malo ljutog sosa."
    ]
  },

  "Plant-Based Protein": {
    name: "Plant-Based Protein",
    description: "Ukusan i hranljiv obrok bogat biljnim proteinima, savršen za vegetarijance, vegane i sve koji žele da smanje unos mesa.",
    ingredients: [
      "1 šolja kinoe",
      "2 šolje povrtnog bujona",
      "1 kašika maslinovog ulja",
      "1 luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, iseckana",
      "1 konzerva (400g) leblebija, oceđena i isprana",
      "1 konzerva (400g) seckanog paradajza",
      "1 kašičica dimljene paprike",
      "1/2 kašičice kumina",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za dekoraciju)",
      "Sok od limuna (po želji)"
    ],
    instructions: [
      "Kinoa: U šerpu stavite kinou i povrtni bujon. Pustite da provri, zatim smanjite vatru, poklopite i kuvajte 15 minuta, ili dok kinoa ne upije svu tečnost i postane mekana. Sklonite sa vatre i ostavite poklopljeno 5 minuta.",
      "Povrće: U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte luk i dinstajte dok ne omekša, oko 5 minuta. Dodajte beli luk i papriku i kuvajte još 3 minuta.",
      "Kombinovanje: U tiganj dodajte leblebije, seckani paradajz, dimljenu papriku i kumin. Posolite i pobiberite po ukusu. Pustite da provri, zatim smanjite vatru i kuvajte 10 minuta, povremeno mešajući.",
      "Serviranje: Umešajte kuvanu kinou u tiganj sa povrćem. Dobro promešajte da se sjedini. Servirajte toplo, posuto svežim peršunom i sokom od limuna, po želji."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 2,
    nutrition: {
      calories: 450,
      protein: "20g",
      fat: "15g",
      carbohydrates: "65g",
      fiber: "15g"
    },
    notes: [
      "Možete koristiti bilo koje povrće koje volite, kao što su tikvice, brokoli ili spanać.",
      "Za pikantniji ukus, dodajte malo čilija u prahu.",
      "Ovaj obrok se može čuvati u frižideru do 3 dana."
    ]
  },

  "Coconut Curry": {
    name: "Coconut Curry",
    description: "Brz i jednostavan kari sa kokosovim mlekom, savršen za zauzete večeri. Može se praviti sa piletinom, tofuom ili povrćem.",
    ingredients: [
      "1 kašika kokosovog ulja",
      "1 srednji crni luk, iseckan",
      "2 čena belog luka, izgnječena",
      "1 kašičica svežeg đumbira, izrendanog",
      "1 crvena paprika, iseckana",
      "1 zelena paprika, iseckana",
      "250g čvrstog tofua iseckanog na kockice ili 400g mešanog povrća po izboru",
      "2 kašike crvene kari paste",
      "400ml kokosovog mleka",
      "200g seckanog paradajza iz konzerve",
      "1 kašičica smeđeg šećera",
      "1/2 kašičice soli, po ukusu",
      "1/4 kašičice bibera, po ukusu",
      "Sveži korijander, za ukras (opciono)",
      "Pirinač, za serviranje"
    ],
    instructions: [
      "Zagrejte kokosovo ulje u velikoj šerpi ili voku na srednjoj vatri.",
      "Dodajte crni luk i pržite dok ne postane staklast, oko 5 minuta.",
      "Dodajte beli luk i đumbir i pržite još minut, dok ne zamiriše.",
      "Dodajte crvenu i zelenu papriku i pržite 5 minuta dok ne omekšaju.",
      "Dodajte tofu ili povrće i pržite dok ne porumeni sa svih strana.",
      "Umešajte kari pastu i pržite još minut, dok se mirisi ne sjedine.",
      "Sipajte kokosovo mleko i seckani paradajz. Dodajte šećer, so i biber.",
      "Pustite da provri, zatim smanjite vatru i krčkajte 15 minuta, ili dok se tofu ili povrće ne skuva.",
      "Poslužite toplo preko pirinča, ukrašeno svežim korijanderom, ako želite."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4,
    nutrition: {
      calories: 450,
      fat: "30g",
      protein: "15g",
      carbohydrates: "20g"
    },
    notes: [
      "Za ljutiji kari, dodajte više kari paste ili malo čili pahuljica.",
      "Možete dodati i drugo povrće po želji, kao što su brokoli, karfiol ili grašak.",
      "Kari se može čuvati u frižideru do 3 dana."
    ]
  },

  "Vegan Sushi": {
    name: "Vegan Sushi",
    description: "Veganski sushi, ukusno i zdravo jelo bez ribe. Savršeno za ručak, večeru ili kao predjelo.",
    ingredients: [
      "1 šolja sushi pirinča",
      "1 šolja vode",
      "2 kašike pirinčanog sirćeta",
      "1 kašika šećera",
      "1/2 kašičice soli",
      "4 lista nori alge",
      "1 avokado, isečen na trake",
      "1 krastavac, isečen na trake",
      "1 šargarepa, isečena na trake",
      "Kiseli đumbir (gari) za serviranje (opciono)",
      "Wasabi za serviranje (opciono)",
      "Sos od soje za serviranje"
    ],
    instructions: [
      "Pirinač dobro isperite pod hladnom vodom dok voda ne postane bistra.",
      "Stavite pirinač i vodu u šerpu. Pustite da provri, zatim smanjite vatru i kuvajte poklopljeno 15 minuta, ili dok pirinač ne upije svu vodu.",
      "Sklonite pirinač sa vatre i ostavite da odstoji poklopljeno 10 minuta.",
      "U maloj činiji pomešajte pirinčano sirće, šećer i so. Zagrejati u mikrotalasnoj rerni 15-20 sekundi i mešajte dok se šećer ne rastvori.",
      "Prelijte pirinač mešavinom sa sirćetom i lagano promešajte drvenom kašikom da se svi sastojci sjedine. Ostavite da se pirinač ohladi na sobnoj temperaturi.",
      "Postavite list nori alge na bambusovu podlogu za sushi (makisu).",
      "Ravnomerno rasporedite tanak sloj pirinča preko nori alge, ostavljajući oko 2 cm slobodnog prostora na vrhu.",
      "Poređajte trake avokada, krastavca i šargarepe preko pirinča.",
      "Koristeći bambusovu podlogu, čvrsto urolajte sushi od dna prema gore.",
      "Navlažite slobodan deo nori alge vodom i zalepite ga za rolnu.",
      "Isecite rolnu na 6-8 komada oštrim nožem.",
      "Ponovite postupak sa preostalim sastojcima.",
      "Poslužite sushi sa kiselim đumbirom, wasabijem i sosom od soje."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 2,
    nutrition: {
      calories: 350,
      fat: "10g",
      carbohydrates: "60g",
      protein: "5g"
    },
    notes: [
      "Možete koristiti i drugo povrće po želji, kao što su paprika, tikvice ili rotkvice.",
      "Za dodatan ukus, možete dodati susam na sushi.",
      "Bambusova podloga se može omotati providnom folijom radi lakšeg čišćenja."
    ]
  },

  "Raw Salad": {
    name: "Raw Salad",
    description: "Osvežavajuća i jednostavna salata od sirovog povrća.",
    ingredients: [
      "1 krastavac, isječen na kolutove",
      "1 crvena paprika, isjeckana",
      "1 žuta paprika, isjeckana",
      "1 šargarepa, narendana",
      "1/2 glavice crvenog luka, tanko isečenog",
      "1/4 šolje svežeg peršuna, iseckanog",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj činiji pomešajte krastavac, crvenu papriku, žutu papriku, šargarepu i crveni luk.",
      "Dodajte iseckani peršun.",
      "U maloj činiji umutite maslinovo ulje, limunov sok, so i biber.",
      "Prelijte salatu dresingom i dobro promešajte.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 4,
    nutrition: {
      calories: 120,
      fat: "9g",
      carbohydrates: "8g",
      protein: "2g"
    },
    notes: [
      "Možete dodati i drugo sirovo povrće po želji, kao što su paradajz, brokoli ili celer.",
      "Salata je najbolja sveže pripremljena, ali se može čuvati u frižideru do 24 sata.",
      "Za bogatiji ukus, dodajte malo avokada."
    ]
  },

  "Fruit Bowl": {
    name: "Fruit Bowl",
    description: "Osvežavajuća i jednostavna voćna salata, savršena kao desert ili užina.",
    ingredients: [
      "1 jabuka, iseckana na kockice",
      "1 kruška, iseckana na kockice",
      "1 banana, iseckana na kolutove",
      "1 šolja jagoda, prepolovljene ili iseckane",
      "1/2 šolje borovnica",
      "1/2 šolje grožđa, prepolovljeno",
      "1 pomorandža, oljuštena i podeljena na kriške",
      "2 kašike meda (opciono)",
      "Sok od 1/2 limuna"
    ],
    instructions: [
      "Operite i osušite sve voće.",
      "Isecite jabuku, krušku, bananu, jagode i grožđe na odgovarajuće komade.",
      "Oljuštite pomorandžu i podelite je na kriške.",
      "U velikoj činiji, pomešajte iseckano voće, borovnice i kriške pomorandže.",
      "Prelijte voće sokom od limuna. Ovo će sprečiti da voće potamni i dodati će svež ukus.",
      "(Opciono) Dodajte med i nežno promešajte da se sjedini.",
      "Servirajte odmah ili rashladite u frižideru pre posluživanja."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 4,
    nutrition: {
      calories: "120-150",
      carbohydrates: "30-40g",
      protein: "1-2g",
      fat: "0-1g"
    },
    notes: [
      "Možete koristiti bilo koje sezonsko voće koje volite.",
      "Za dodatni ukus, možete dodati malo rendane limunove kore ili listiće mente.",
      "Voćnu salatu možete preliti i sa malo jogurta ili grčkog jogurta."
    ]
  },

  "Vegetable Soup": {
    name: "Vegetable Soup",
    description: "Ova supa je zdrava, hranljiva i puna ukusa. Odlična je kao lagani ručak ili večera, ili kao prilog uz glavno jelo.",
    ingredients: [
      "2 kašike maslinovog ulja",
      "1 veliki luk, sitno iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "3 čena belog luka, sitno iseckana",
      "8 šolja povrtnog bujona",
      "1 konzerva (400g) seckanog paradajza",
      "1 krompir, oljušten i iseckan na kockice",
      "1 tikvica, iseckana na kockice",
      "1 šolja seckanog zelenog pasulja",
      "1 šolja kukuruza (svež ili zamrznut)",
      "1 šolja graška (svež ili zamrznut)",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za ukras)"
    ],
    instructions: [
      "U velikom loncu zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte luk, šargarepu i celer i dinstajte dok ne omekšaju, oko 5-7 minuta.",
      "Dodajte beli luk i kuvajte još 1 minut, dok ne zamiriše.",
      "U lonac sipajte povrtni bujon i seckani paradajz.",
      "Dodajte krompir, tikvice, zeleni pasulj, kukuruz i grašak.",
      "Umešajte origano i bosiljak.",
      "Pustite da provri, zatim smanjite vatru i kuvajte poklopljeno dok povrće ne omekša, oko 20 minuta.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite vruće, ukrašeno seckanim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 6,
    nutrition: {
      calories: 150,
      fat: "5g",
      carbohydrates: "20g",
      protein: "5g",
      fiber: "5g"
    },
    notes: [
      "Možete dodati i druge vrste povrća po želji, kao što su karfiol, brokoli ili spanać.",
      "Za bogatiji ukus, možete koristiti domaći povrtni bujon.",
      "Supa se može čuvati u frižideru do 3 dana.",
      "Možete dodati testeninu pri kraju kuvanja."
    ]
  },

  "Vegan Dessert": {
    name: "Vegan Dessert",
    description: "Kremast i osvežavajući veganski desert savršen za svaku priliku.",
    ingredients: [
      "1 konzerva (400ml) kokosovog mleka (puna mast, ohlađeno preko noći)",
      "1/4 šolje javorovog sirupa",
      "1 kašičica ekstrakta vanile",
      "1/4 šolje sirovih indijskih oraha (natopljenih u toploj vodi najmanje 2 sata)",
      "1/4 šolje svežih bobica (jagode, maline, borovnice) za dekoraciju (opciono)",
      "2 kašike kakao praha (za čokoladnu verziju, opciono)"
    ],
    instructions: [
      "Izvadite gusti krem sa vrha konzerve kokosovog mleka, pazeći da ne uzmete providnu tečnost ispod. Stavite krem u blender.",
      "Dodajte javorov sirup, ekstrakt vanile i natopljene indijske orahe (prethodno iscedite vodu).",
      "Blendajte dok ne dobijete glatku i kremastu smesu.",
      "Ako pravite čokoladnu verziju, dodajte kakao prah i blendajte dok se dobro ne sjedini.",
      "Rasporedite smesu u 4 čaše ili posude.",
      "Ukrasite svežim bobicama (opciono).",
      "Hladite u frižideru najmanje 2 sata pre služenja."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta (hlađenje 2 sata)",
    servings: 4,
    nutrition: {
      calories: "250-300",
      fat: "20-25g",
      carbohydrates: "15-20g",
      protein: "3-5g"
    },
    notes: [
      "Za intenzivniji ukus kokosa, koristite kokosovu kremu umesto kokosovog mleka.",
      "Možete dodati i drugo voće po želji, poput manga ili banana.",
      "Za drugačiju teksturu, pospite komadićima tamne čokolade pre služenja.",
      "Umesto javorovog sirupa, možete koristiti agava sirup ili drugi zaslađivač po ukusu."
    ]
  },

  "Plant Milk": {
    name: "Plant Milk",
    description: "Jednostavan recept za pripremu biljnog mleka kod kuće. Pogodno za vegane i one koji su intolerantni na laktozu.",
    ingredients: [
      "1 šolja sirovih badema (ili drugih orašastih plodova/semenki po izboru: indijski orah, ovas, suncokretove semenke)",
      "4 šolje filtrirane vode",
      "1-2 kašičice zaslađivača (opciono: javorov sirup, agavin sirup, datule)",
      "Prstohvat soli (opciono)",
      "1/2 kašičice ekstrakta vanile (opciono)"
    ],
    instructions: [
      "Bademe stavite u posudu i prelijte vodom. Ostavite ih da se namaču najmanje 4 sata, ili idealno preko noći, u frižideru.",
      "Nakon namakanja, procedite bademe i dobro ih isperite.",
      "Stavite natopljene bademe i 4 šolje filtrirane vode u blender.",
      "Blendajte na najjačoj brzini dok ne dobijete glatku smesu, oko 1-2 minuta.",
      "Postavite gazu ili platnenu vreću za mleko preko velike posude.",
      "Sipajte smesu iz blendera u gazu/platnenu vreću i procedite mleko. Iscedite svu tečnost iz pulpe.",
      "Dodajte zaslađivač, so i ekstrakt vanile (ako koristite) u mleko i promešajte.",
      "Sipajte mleko u staklenu bocu ili teglu i čuvajte u frižideru."
    ],
    prepTime: "5 minuta",
    cookTime: "Nema kuvanja (osim ako se koristi voda koja je prethodno prokuvana)",
    servings: 8,
    nutrition: {
      calories: "40-70",
      fat: "3-6g",
      carbohydrates: "1-3g",
      protein: "1-2g"
    },
    notes: [
      "Biljno mleko se može čuvati u frižideru do 5 dana.",
      "Pulpa koja ostane nakon ceđenja se može koristiti u receptima za kolače, krekere ili kao dodatak ovsenoj kaši.",
      "Za gušće mleko koristite manje vode. Za ređe mleko koristite više vode.",
      "Možete koristiti bilo koje orašaste plodove ili semenke po izboru. Vreme namakanja može varirati (npr. indijski orah zahteva kraće namakanje).",
      "Za mleko od ovsa, koristite valjane ovsene pahuljice i nemojte ih namakati pre blendanja."
    ]
  }
};