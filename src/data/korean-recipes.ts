export interface Recipe {
  name: string;
  description: string;
  servings: string;
  prepTime: string;
  cookTime?: string;
  fermentationTime?: string;
  ingredients: string[];
  instructions: string[];
  notes?: string[];
  nutrition?: {
    calories: string;
    protein?: string;
    carbs?: string;
    fat?: string;
    sodium?: string;
  };
}

export const koreanRecipes: Recipe[] = [
  {
    name: "Kimchi",
    description: "Tradicionalno korejsko fermentisano jelo od povrća, najčešće kupusa i rotkvice, sa ljutim začinima.",
    servings: "1 velika tegla (oko 1 kg)",
    prepTime: "1 sat",
    fermentationTime: "3-7 dana (ili duže u frižideru)",
    ingredients: [
      "1.5 kg kineskog kupusa (Napa kupus)",
      "1/2 šolje krupne morske soli",
      "6 šolje vode (za salamuru)",
      "1 šolja vode (za kašu)",
      "1/4 šolje pirinčanog brašna (ili brašna od pirinča)",
      "1/4 šolje šećera",
      "1/2 šolje korejske čili paprike u prahu (Gochugaru) - prilagoditi po ukusu",
      "1/4 šolje ribljeg sosa (ili veganske alternative)",
      "2 kašike mlevenog đumbira",
      "2 kašike mlevenog belog luka",
      "1 šolja iseckanog daikona rotkvice",
      "1/2 šolje iseckanog zelenog luka"
    ],
    instructions: [
      "Kupus iseći po dužini na četvrtine. Svaku četvrtinu iseći na komade veličine zalogaja.",
      "U velikoj posudi pomešati vodu i so. Dodati kupus i mešati da se prekrije. Ostaviti da stoji 2 sata, okrećući ga svakih 30 minuta.",
      "Dok se kupus soli, pripremiti kašu: u šerpi pomešati 1 šolju vode i pirinčano brašno. Kuvati na srednjoj vatri, mešajući stalno, dok se ne zgusne u kašu. Umešati šećer i ostaviti da se ohladi.",
      "Isprati kupus u hladnoj vodi najmanje tri puta da se ukloni višak soli. Dobro ocediti.",
      "U velikoj posudi pomešati ohlađenu kašu, čili papriku, riblji sos, đumbir, beli luk, rotkvicu i zeleni luk.",
      "Dodati oceđeni kupus u smesu sa začinima i dobro promešati da se svi komadi kupusa prekriju.",
      "Staviti kimchi u teglu, pritiskajući da se ukloni višak vazduha. Ostaviti malo prostora na vrhu tegle.",
      "Zatvoriti teglu i ostaviti je na sobnoj temperaturi (18-24°C) 3-7 dana da fermentira. Svakodnevno proveravati i otvarati teglu da se oslobodi pritisak.",
      "Kada kimchi dobije željeni nivo kiselosti, prebaciti ga u frižider da zaustavi proces fermentacije."
    ],
    notes: [
      "Vreme fermentacije zavisi od temperature i željenog ukusa. Što duže fermentira, to će kimchi biti kiseliji.",
      "Koristite čiste tegle i pribor da izbegnete kontaminaciju.",
      "Ukoliko se pojavi buđ, bacite ceo sadržaj tegle."
    ],
    nutrition: {
      calories: "30-50 kcal",
      carbs: "5-8g",
      protein: "1-2g",
      fat: "0-1g",
      sodium: "Značajan (zavisno od količine soli i ribljeg sosa)"
    }
  },
  {
    name: "Bulgogi",
    description: "Tanki rezanci marinirane govedine, klasik korejske kuhinje. Savršeno za roštilj ili prženje u tiganju.",
    servings: "4 porcije",
    prepTime: "20 minuta + minimalno 30 minuta mariniranja",
    cookTime: "10-15 minuta",
    ingredients: [
      "500g tanko isečene govedine (ramstek, rozbratna ili flank steak)",
      "1/2 kruške, oljuštena i izrendana",
      "4 čena belog luka, izgnječena",
      "1 mali komad đumbira (oko 2cm), izrendan",
      "4 kašike soja sosa",
      "2 kašike smeđeg šećera",
      "1 kašika susamovog ulja",
      "1 kašika pirinčanog sirćeta (ili jabukovog)",
      "1 kašičica bibera",
      "1 mladi luk, sitno iseckan (za dekoraciju)",
      "Susam, za posipanje (opciono)",
      "Biljno ulje, za prženje"
    ],
    instructions: [
      "U velikoj posudi, pomešajte izrendanu krušku, beli luk, đumbir, soja sos, smeđi šećer, susamovo ulje, pirinčano sirće i biber. Dobro promešajte.",
      "Dodajte tanko isečenu govedinu u marinadu. Uverite se da je meso ravnomerno obloženo.",
      "Pokrijte posudu i ostavite da se marinira u frižideru najmanje 30 minuta. Za najbolji ukus, marinirajte meso nekoliko sati ili preko noći.",
      "Zagrejte malo biljnog ulja u velikom tiganju ili na roštilju na srednje jakoj vatri.",
      "Izvadite meso iz marinade i pržite ga u serijama, pazeći da ne pretrpate tiganj.",
      "Pržite meso dok ne porumeni i bude skroz kuvano, oko 2-3 minuta po strani.",
      "Servirajte bulgogi toplo, posuto iseckanim mladim lukom i susamom (opciono). Poslužite sa pirinčem i omiljenim korejskim prilozima (banchan)."
    ],
    notes: [
      "Za intenzivniji ukus, dodajte malo gochujang (korejska pasta od čilija) u marinadu.",
      "Ako koristite deblje komade govedine, možete ih malo istući da budu tanji i mekši.",
      "Marinadu možete iskoristiti i za piletinu ili svinjetinu.",
      "Bulgogi se može servirati i u lepinji kao sendvič."
    ],
    nutrition: {
      calories: "350-400 kcal",
      protein: "35-40g",
      fat: "15-20g",
      carbs: "15-20g"
    }
  },
  {
    name: "Bibimbap",
    description: "Korejsko jelo od pirinča sa povrćem, mesom i jajetom, prelivno ljutim sosom. Ukusno i zdravo!",
    servings: "2 porcije",
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "1 šolja pirinča (za suši ili jasmin)",
      "200g mlevene junetine (ili tofu za vegetarijansku verziju)",
      "1 šargarepa, isečena na tanke štapiće",
      "1 krastavac, isečen na tanke štapiće",
      "100g spanaća",
      "100g šampinjona, isečenih na listiće",
      "2 jaja",
      "2 kašike susamovog ulja",
      "2 kašike soja sosa",
      "1 kašika gochujang paste (korejska ljuta pasta od paprike)",
      "1 kašičica šećera",
      "1/2 kašičice belog luka u prahu",
      "Susam za posipanje",
      "Ulje za prženje"
    ],
    instructions: [
      "Skuvajte pirinač prema uputstvu na pakovanju.",
      "Pripremite meso: U tiganju zagrejte malo ulja. Dodajte mlevenu junetinu i pržite dok ne porumeni. Dodajte 1 kašiku soja sosa, 1 kašičicu šećera i beli luk u prahu. Promešajte i sklonite sa vatre.",
      "Blanširajte spanać: Stavite spanać u kipuću vodu na 1 minut, a zatim ga odmah prebacite u ledenu vodu da zaustavite kuvanje. Ocedite i iscedite višak vode. Pomešajte spanać sa 1 kašičicom susamovog ulja i malo soli.",
      "Pržite šampinjone: U tiganju zagrejte malo ulja i propržite šampinjone dok ne omekšaju. Posolite po ukusu.",
      "Napravite pržena jaja: Ispržite dva jaja na oko.",
      "Pripremite sos: U maloj posudi pomešajte gochujang pastu, 1 kašiku soja sosa i 1 kašičicu susamovog ulja. Dodajte malo vode ako je sos pregust.",
      "Složite bibimbap: U dve činije rasporedite pirinač. Preko pirinča složite meso, šargarepu, krastavac, spanać i šampinjone. Na vrh stavite prženo jaje.",
      "Prelijte sosom po ukusu i pospite susamom.",
      "Poslužite odmah."
    ],
    notes: [
      "Povrće možete prilagoditi svom ukusu i dostupnosti. Možete dodati klice pasulja, tikvice ili bilo koje drugo povrće koje volite.",
      "Ukoliko ne volite ljuto, smanjite količinu gochujang paste.",
      "Za vegetarijansku verziju, zamenite mlevenu junetinu tofuom.",
      "Možete dodati i malo kimči (fermentisani kupus) za dodatni ukus."
    ],
    nutrition: {
      calories: "600-700",
      protein: "30-40g",
      fat: "25-35g",
      carbs: "60-70g"
    }
  },
  {
    name: "Korean BBQ",
    description: "Jednostavna verzija Korean BBQ-a, savršena za pripremu kod kuće. Ukusna marinada daje mesu bogat i autentičan ukus.",
    servings: "4 porcije",
    prepTime: "20 minuta + mariniranje (minimum 30 minuta, idealno preko noći)",
    cookTime: "10-15 minuta",
    ingredients: [
      "500g tanko isečenog junećeg mesa (ribeye, skirt steak ili slično)",
      "1/4 šolje soja sosa",
      "2 kašike smeđeg šećera",
      "1 kašika meda",
      "1 kašika susamovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1 mala glavica luka, sitno iseckana",
      "1 kašičica rendanog đumbira",
      "1/2 kašičice crnog bibera",
      "1/4 kašičice pahuljica crvene paprike (opciono)",
      "Zeleni luk, iseckan (za posipanje)",
      "Susam, za posipanje"
    ],
    instructions: [
      "U velikoj posudi, pomešajte soja sos, smeđi šećer, med, susamovo ulje, beli luk, luk, đumbir, crni biber i pahuljice crvene paprike (ako koristite).",
      "Dodajte tanko isečeno meso u marinadu i dobro promešajte da se meso obloži.",
      "Pokrijte posudu i marinirajte u frižideru najmanje 30 minuta, a idealno preko noći.",
      "Zagrejte roštilj ili tiganj na srednje jakoj vatri.",
      "Izvadite meso iz marinade i pecite na roštilju ili u tiganju 2-3 minuta sa svake strane, ili dok ne bude pečeno po želji.",
      "Sklonite meso sa vatre i pospite iseckanim zelenim lukom i susamom.",
      "Poslužite odmah sa pirinčem i različitim prilozima (kimchi, povrće, itd.)."
    ],
    notes: [
      "Za intenzivniji ukus, možete dodati malo korejskog gochujang paste u marinadu.",
      "Možete koristiti i svinjsko ili pileće meso umesto junećeg.",
      "Servirajte sa listovima zelene salate da napravite Ssam (korejski wrap)."
    ],
    nutrition: {
      calories: "350-400",
      protein: "30-35g",
      fat: "20-25g",
      carbs: "10-15g"
    }
  },
  {
    name: "Japchae",
    description: "Popularno korejsko jelo od staklenih rezanaca, povrća i mesa, marinirano u soja sosu i šećeru. Slatko, slano i izuzetno ukusno!",
    servings: "4 porcije",
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "200g staklenih rezanaca (dangmyeon)",
      "200g goveđeg filea, isečenog na tanke trake",
      "1 šargarepa, isečena na tanke trake",
      "1/2 crnog luka, isečenog na tanke trake",
      "1 zelena paprika, isečena na tanke trake",
      "100g šampinjona, isečenih na listiće",
      "2 mlada luka, isečena na komade dužine 5 cm",
      "2 čena belog luka, sitno iseckana",
      "2 kašike susamovog ulja",
      "1 kašika biljnog ulja",
      "Susam za posipanje"
    ],
    instructions: [
      "Pripremite marinadu za govedinu: u činiji pomešajte 2 kašike soja sosa, 1 kašiku šećera, 1 kašiku susamovog ulja i 1/2 kašičice mlevenog crnog bibera. Dodajte govedinu i dobro promešajte. Ostavite da se marinira najmanje 15 minuta.",
      "Pripremite sos: u činiji pomešajte 6 kašika soja sosa, 3 kašike šećera, 2 kašike susamovog ulja, 1 kašiku iseckanog belog luka i 1 kašičicu mlevenog crnog bibera. Dobro promešajte.",
      "Skuvajte rezance prema uputstvima na pakovanju. Ocedite i isperite hladnom vodom. Isecite ih makazama na manje komade.",
      "U velikom tiganju ili voku zagrejte biljno ulje na srednjoj vatri. Dodajte mariniranu govedinu i pržite dok ne porumeni. Izvadite govedinu iz tiganja i ostavite sa strane.",
      "U isti tiganj dodajte šargarepu, crni luk i zelenu papriku. Pržite dok povrće ne omekša, oko 5 minuta. Dodajte šampinjone i mladi luk i pržite još 2-3 minuta.",
      "Dodajte kuvane rezance u tiganj sa povrćem. Prelijte sosom i dobro promešajte da se rezanci i povrće sjedine.",
      "Vratite prženu govedinu u tiganj. Promešajte i kuvajte još 2-3 minuta, ili dok se sve dobro ne zagreje.",
      "Pre serviranja pospite susamom."
    ],
    notes: [
      "Možete koristiti i drugo povrće po želji, poput spanaća, tikvica ili crvene paprike.",
      "Ako nemate staklene rezance, možete koristiti pirinčane rezance, ali će ukus biti malo drugačiji.",
      "Za vegetarijansku verziju, izostavite govedinu i dodajte tofu ili više povrća."
    ],
    nutrition: {
      calories: "450",
      fat: "20g",
      carbs: "55g",
      protein: "15g"
    }
  },
  {
    name: "Tteokbokki",
    description: "Tradicionalno korejsko jelo od pirinčanih kolačića u ljutom sosu.",
    servings: "2-3 porcije",
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "500g tteok (korejski pirinčani kolačići, cilindričnog oblika)",
      "100g eomuk (korejski riblji kolači)",
      "1/2 glavice luka, isečena na tanke kriške",
      "2 mlada luka, iseckana",
      "2 kuvana jaja (opciono), prepolovljena",
      "2 šolje vode",
      "1 kašika biljnog ulja"
    ],
    instructions: [
      "Pripremite sos: U činiji pomešajte 2 kašike gochujang (korejska pasta od čilija), 1 kašiku gochugaru (korejski čili u prahu), 1 kašiku soja sosa, 1 kašiku šećera, 1/2 kašike mlevenog belog luka i 1/4 kašike mlevenog đumbira (opciono). Dobro promešajte i ostavite sa strane.",
      "Pripremite sastojke: Isecite eomuk na komade veličine zalogaja. Ako su pirinčani kolačići zamrznuti, potopite ih u hladnu vodu nekoliko minuta da omekšaju.",
      "Kuvanje: U dubokom tiganju ili šerpi zagrejte biljno ulje na srednjoj vatri. Dodajte luk i pržite dok ne postane providan, oko 2-3 minuta.",
      "Dodajte vodu i sos: U šerpu dodajte vodu i pripremljeni sos. Promešajte da se sos rastvori u vodi.",
      "Dodajte pirinčane kolačiće i riblje kolače: Dodajte tteok i eomuk u šerpu. Pustite da provri, zatim smanjite vatru na srednje nisku.",
      "Kuvajte dok se sos ne zgusne: Kuvajte, povremeno mešajući, oko 15-20 minuta, ili dok se sos ne zgusne i pirinčani kolačići ne postanu mekani.",
      "Dodajte mladi luk i jaja: Dodajte iseckani mladi luk u tteokbokki i promešajte. Ako koristite, dodajte prepolovljena kuvana jaja u šerpu.",
      "Poslužite: Poslužite tteokbokki vruć."
    ],
    notes: [
      "Nivo ljutine se može prilagoditi količinom gochugaru.",
      "Možete dodati i druge sastojke kao što su povrće (kupus, šargarepa), ramen rezanci ili sireve.",
      "Za bogatiji ukus, koristite pileći ili povrtni bujon umesto vode."
    ],
    nutrition: {
      calories: "400-500",
      carbs: "70-80g",
      protein: "15-20g",
      fat: "5-10g"
    }
  },
  {
    name: "Kimchi Jjigae",
    description: "Ljuto i ukusno korejsko varivo, savršeno za hladne dane. Sprema se brzo i jednostavno, a glavna zvezda je fermentisani kimchi.",
    servings: "2-3 porcije",
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "200g starijeg, kiselog kimchija, iseckanog",
      "100g svinjskog stomaka (ili tofu za vegetarijansku verziju), isečenog na tanke komade",
      "1/2 srednjeg luka, iseckanog",
      "1 čen belog luka, izgnječen",
      "1 kašika gochujang (korejska pasta od ljute paprike)",
      "1 kašičica gochugaru (korejski čili u prahu)",
      "1 kašičica soja sosa",
      "500ml pilećeg ili povrtnog bujona (ili vode)",
      "1 pakovanje (200g) tofu, isečenog na kocke (opciono)",
      "1 zeleni mladi luk, iseckan za ukras (opciono)",
      "1/2 kašičice šećera (opciono, ako je kimchi previše kiseo)",
      "Biljno ulje"
    ],
    instructions: [
      "U šerpi ili zemljanom loncu zagrejte malo biljnog ulja na srednjej vatri.",
      "Dodajte svinjetinu (ili tofu) i pržite dok ne porumeni.",
      "Dodajte kimchi, luk i beli luk. Pržite 3-5 minuta, dok kimchi ne omekša.",
      "Dodajte gochujang, gochugaru, soja sos i šećer (ako koristite). Dobro promešajte.",
      "Ulijte bujon (ili vodu) i pustite da provri.",
      "Smanjite vatru i dinstajte 10-15 minuta, ili dok se ukusi ne sjedine.",
      "Dodajte tofu (ako koristite) i kuvajte još 5 minuta da se zagreje.",
      "Poslužite toplo, ukrašeno iseckanim zelenim mladim lukom."
    ],
    notes: [
      "Stariji, kiseliji kimchi daje bolji ukus.",
      "Možete dodati i druge sastojke kao što su pečurke, nudle ili povrće po želji.",
      "Za blažu verziju, smanjite količinu gochujanga i gochugarua.",
      "Poslužite uz kuvan pirinač."
    ],
    nutrition: {
      calories: "350-450",
      protein: "20-30g",
      fat: "20-30g",
      carbs: "15-25g"
    }
  },
  {
    name: "Galbi",
    description: "Popularno korejsko jelo sa roštilja, obično napravljeno od mariniranih goveđih kratkih rebara.",
    servings: "4 porcije",
    prepTime: "30 minuta + 4 sata mariniranja",
    cookTime: "15-20 minuta",
    ingredients: [
      "1 kg goveđih kratkih rebara (isečenih \"LA style\", tanko preko kostiju)",
      "1/2 kruške (narendane)",
      "1/4 šolje soja sosa",
      "2 kašike smeđeg šećera",
      "2 kašike meda",
      "2 kašike susamovog ulja",
      "2 kašike belog luka (sitno iseckanog)",
      "1 kašika đumbira (narendanog)",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica crnog bibera (sveže samlevenog)",
      "1 zeleni luk (iseckan)",
      "Susam za posipanje"
    ],
    instructions: [
      "U velikoj posudi, pomešajte narendanu krušku, soja sos, smeđi šećer, med, susamovo ulje, beli luk, đumbir, pirinčano sirće i crni biber. Dobro promešajte da se svi sastojci sjedine.",
      "Dodajte goveđa rebra u marinadu i dobro ih premažite, osiguravajući da su sva rebra prekrivena marinadom.",
      "Pokrijte posudu i ostavite da se marinira u frižideru najmanje 4 sata, ili idealno preko noći.",
      "Zagrejte roštilj na srednje jaku vatru.",
      "Izvadite rebra iz marinade i stavite ih na roštilj.",
      "Pecite rebra oko 3-4 minuta sa svake strane, ili dok ne budu pečena po želji. Pazite da ne pregore.",
      "Izvadite rebra sa roštilja i prebacite ih na tanjir.",
      "Pospite iseckanim zelenim lukom i susamom.",
      "Poslužite toplo."
    ],
    notes: [
      "Dodajte malo gochujang (korejska pasta od čilija) u marinadu za dodatnu pikantnost.",
      "Poslužite uz pirinač, kimchi i ostale korejske priloge."
    ],
    nutrition: {
      calories: "450-550",
      protein: "35-45g",
      fat: "25-35g",
      carbs: "15-20g"
    }
  },
  {
    name: "Samgyeopsal",
    description: "Popularno korejsko jelo od grilovanog svinjskog stomaka. Služi se uz razne dodatke i umake.",
    servings: "2 osobe",
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "500g svinjski stomak (narezani na tanke trake)",
      "1 glavica zelene salate",
      "1 krastavac (narezani na štapiće)",
      "1 zeleni luk (narezani)",
      "1 crveni luk (narezani na tanke listiće)",
      "1-2 zelene ljute papričice (narezane na kolutove, po želji)",
      "1 čen belog luka (sitno iseckan)",
      "1 kašika susamovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera"
    ],
    instructions: [
      "Pripremite sastojke: Narežite svinjski stomak, povrće i beli luk.",
      "Napravite umak (Ssamjang): U maloj činiji pomešajte 2 kašike doenjang (korejska pasta od fermentisane soje), 1 kašiku gochujang (korejska pasta od čilija), 1 kašičicu susamovog ulja, 1 kašičicu meda ili šećera, 1/2 kašičice iseckanog belog luka i 1/2 kašičice susamovih semenki. Dobro promešajte.",
      "Marinirajte svinjetinu (opcionalno): U činiji pomešajte narezani svinjski stomak sa susamovim uljem, solju i biberom. Ostavite da odstoji 10-15 minuta.",
      "Grilovanje: Zagrejte roštilj ili tiganj na srednje jakoj vatri. Pecite svinjski stomak dok ne postane zlatno smeđi i hrskav. Okrećite meso da se ravnomerno ispeče.",
      "Serviranje: Uzmite list zelene salate. Stavite komad grilovanog svinjskog stomaka na list salate. Dodajte malo umaka (Ssamjang), iseckanog belog luka, luka, krastavca i ljute papričice (po želji). Umotajte i uživajte."
    ],
    notes: [
      "Možete koristiti i druge vrste povrća, kao što su šampinjoni ili kimchi.",
      "Ako nemate doenjang i gochujang, možete ih pronaći u azijskim prodavnicama.",
      "Vreme pečenja zavisi od debljine narezanog svinjskog stomaka."
    ],
    nutrition: {
      calories: "600-800",
      fat: "40-60g",
      protein: "30-40g",
      carbs: "15-20g"
    }
  },
  {
    name: "Banchan",
    description: "Raznovrsni korejski prilozi, idealni za deljenje i upotpunjavanje svakog obroka.",
    servings: "4-6 porcija",
    prepTime: "20 minuta",
    cookTime: "15-20 minuta (zavisno od priloga)",
    ingredients: [
      "200g klica pasulja",
      "300g svežeg spanaća",
      "2 krastavca srednje veličine",
      "2 srednja krompira (opciono)",
      "Susamovo ulje",
      "Mleveni beli luk",
      "Gochugaru (korejska ljuta paprika u prahu)",
      "So",
      "Susam",
      "Soja sos",
      "Pirinčano sirće",
      "Šećer"
    ],
    instructions: [
      "Klice pasulja: U šerpi prokuvajte vodu. Dodajte klice pasulja i kuvajte 3-5 minuta, dok ne omekšaju. Procedite i isperite hladnom vodom. Iscedite višak vode. U činiji pomešajte klice sa susamovim uljem, belim lukom, ljutom paprikom, solju i susamom.",
      "Spinat: U šerpi prokuvajte vodu. Dodajte spanać i kuvajte 1-2 minuta, dok ne uvene. Procedite i isperite hladnom vodom. Iscedite višak vode. U činiji pomešajte spanác sa susamovim uljem, belim lukom, soja sosom, solju i susamom.",
      "Krastavci: Isecite krastavce na tanke kolutove. Posolite i ostavite 10 minuta da se ocede. Iscedite višak vode. U činiji pomešajte krastavce sa pirinčanim sirćetom, šećerom, belim lukom, susamovim uljem, ljutom paprikom i susamom.",
      "(Opciono) Krompir: Oljuštite i isecite krompir na kockice. U tiganju pomešajte krompir, soja sos, šećer, susamovo ulje, beli luk i vodu. Kuvajte na srednjoj vatri, dok krompir ne omekša i sos se zgusne, oko 15-20 minuta. Posipajte susamom.",
      "Poslužite sve priloge ohlađene ili na sobnoj temperaturi."
    ],
    notes: [
      "Količina ljute paprike se može prilagoditi ukusu.",
      "Banchan se može čuvati u frižideru do 3 dana.",
      "Ovo su samo neki od mnogobrojnih banchan priloga. Možete eksperimentisati sa različitim povrćem i začinima."
    ],
    nutrition: {
      calories: "50-100 kcal",
      fat: "3-7g",
      carbs: "5-10g",
      protein: "2-4g"
    }
  },
  {
    name: "Korean Fried Chicken",
    description: "Hrskava i sočna piletina u slatko-ljutoj korejskoj glazuri. Savršena za druženja ili brzi obrok.",
    servings: "4 porcije",
    prepTime: "30 minuta",
    cookTime: "25 minuta",
    ingredients: [
      "1 kg pilećih krilaca ili bataka, isečenih na komade",
      "1 šolja brašna",
      "1/2 šolje kukuruznog skroba (gustina)",
      "1 kašičica praška za pecivo",
      "1/2 kašičice belog luka u prahu",
      "1/2 kašičice đumbira u prahu",
      "1/2 kašičice bibera",
      "1 kašičica soli",
      "Ulje za prženje"
    ],
    instructions: [
      "Pripremite piletinu: Ako koristite cela krilca, isecite ih na zglobovima. Osušite piletinu papirnim ubrusima.",
      "Pripremite smesu za pohovanje: U velikoj posudi pomešajte brašno, kukuruzni skrob, prašak za pecivo, beli luk u prahu, đumbir u prahu, biber i so.",
      "Pohujte piletinu: Uvaljajte svaki komad piletine u smesu za pohovanje, tako da bude ravnomerno prekriven.",
      "Pržite piletinu: U dubljem tiganju ili fritezi zagrejte ulje na 175°C. Pržite piletinu u serijama 8-10 minuta, dok ne postane zlatno smeđa i hrskava. Izvadite piletinu i stavite je na papirne ubruse da se ocedi višak ulja.",
      "Pripremite glazuru: U maloj šerpi pomešajte 3 kašike soja sosa, 3 kašike gochujang paste (korejska pasta od čilija), 2 kašike meda ili javorovog sirupa, 1 kašiku sirćeta (pirinčanog ili jabukovog), 1 kašiku susamovog ulja, 1 kašičicu belog luka (sitno iseckanog) i 1/2 kašičice đumbira (sitno iseckanog). Zagrejte na srednjoj vatri i kuvajte 2-3 minuta, dok se glazura malo ne zgusne.",
      "Glazirajte piletinu: Prebacite prženu piletinu u veliku posudu. Prelijte piletinu sa pripremljenom glazurom i dobro promešajte da se piletina ravnomerno prekrije.",
      "Poslužite: Poslužite Korean Fried Chicken odmah, posuto susamom."
    ],
    notes: [
      "Za ekstra hrskavu piletinu, možete je pržiti dva puta. Prvi put je pržite 5 minuta, izvadite je da se ohladi, a zatim je ponovo pržite 3-5 minuta, dok ne postane zlatno smeđa.",
      "U glazuru možete dodati i malo gochugaru (korejska čili pahuljice) za dodatnu ljutinu.",
      "Poslužite uz kiseli kupus (kimchi) ili pire krompir."
    ],
    nutrition: {
      calories: "650 kcal",
      fat: "40 g",
      carbs: "45 g",
      protein: "35 g"
    }
  },
  {
    name: "Hotteok",
    description: "Korejske slatke palacinke punjene smeđim šećerom i cimetom.",
    servings: "6 palacinki",
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    ingredients: [
      "1 šolja (120g) višenamenskog brašna",
      "1/2 kašičice suvog kvasca",
      "1 kašičica šećera",
      "1/4 kašičice soli",
      "1/2 šolje (120ml) mlake vode",
      "1 kašika biljnog ulja, plus dodatno za prženje",
      "1/4 šolje (50g) smeđeg šećera",
      "1/2 kašičice cimeta u prahu",
      "1 kašika seckanih oraha ili badema (opciono)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte brašno, kvasac, šećer i so.",
      "Dodajte mlaku vodu i ulje. Mešajte dok se ne formira lepljivo testo.",
      "Pokrijte posudu i ostavite da testo naraste na toplom mestu oko 1 sat, ili dok se ne udvostruči.",
      "U manjoj posudi, pomešajte smeđi šećer, cimet i seckane orahe (ako koristite).",
      "Blago nauljite ruke. Uzmite malo testa (veličine loptice za golf) i spljoštite ga u dlanu.",
      "Stavite kašičicu punjenja u sredinu testa.",
      "Pažljivo zatvorite ivice testa da biste formirali lopticu, pazeći da punjenje ne iscuri.",
      "Zagrejte malo ulja u tiganju na srednjoj vatri.",
      "Stavite palacinke u tiganj i pržite ih oko 2-3 minuta sa svake strane, dok ne postanu zlatno smeđe i spljoštene. Možete koristiti lopaticu da ih lagano pritisnete tokom prženja.",
      "Poslužite toplo."
    ],
    notes: [
      "Testo je lepljivo, pa obavezno nauljite ruke pre rada sa njim.",
      "Ako nemate smeđi šećer, možete koristiti beli šećer sa malo melase.",
      "Možete dodati druge sastojke u punjenje, kao što su seckane semenke ili đumbir."
    ],
    nutrition: {
      calories: "200-250 kcal",
      carbs: "30-40g",
      protein: "3-5g",
      fat: "5-8g"
    }
  },
  {
    name: "Naengmyeon",
    description: "Hladna korejska supa sa rezancima od heljde, savršena za tople dane.",
    servings: "2 porcije",
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    ingredients: [
      "200g suvih rezanaca od heljde (Naengmyeon noodles)",
      "4 šolje pilećeg ili goveđeg bujona (ohlađenog)",
      "2 kašike soja sosa",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica šećera",
      "1/2 kašičice korejske čili paste (Gochujang) - po ukusu",
      "1 krastavac, isečen na tanke štapiće",
      "1/2 kruške (azijske kruške ako je dostupno), isečena na tanke štapiće",
      "1 jaje, tvrdo kuvano i isečeno na pola",
      "2 kašike kimčija, iseckanog",
      "Susame, za posipanje",
      "Ledene kocke"
    ],
    instructions: [
      "Skuvajte rezance prema uputstvima na pakovanju. Obično je potrebno oko 3-5 minuta.",
      "Iscedite rezance i odmah ih isperite pod hladnom vodom dok se potpuno ne ohlade. Ocedite i ostavite sa strane.",
      "U velikoj posudi pomešajte bujon, soja sos, pirinčano sirće, šećer i Gochujang (ako koristite). Dobro promešajte dok se šećer ne rastvori. Probajte i po potrebi dodajte još soja sosa, sirćeta ili Gochujanga.",
      "U činije za serviranje stavite ledenu kocku. Sipajte hladni bujon preko leda.",
      "Dodajte polovinu rezanaca u svaku činiju.",
      "Poređajte krastavac, krušku, jaje i kimči preko rezanaca.",
      "Posipajte susamom i poslužite odmah."
    ],
    notes: [
      "Za intenzivniji ukus, možete zamrznuti bujon na sat vremena pre serviranja da bi postao blago kašast.",
      "Možete koristiti i druge dodatke kao što su kuvano meso (govedina ili piletina), rotkvice i sl.",
      "Prilagodite količinu Gochujanga prema vašoj toleranciji na ljuto.",
      "Ako ne możete pronaći rezance od heljde, možete koristiti tanke rezance od pirinča."
    ],
    nutrition: {
      calories: "400-500",
      protein: "20g",
      carbs: "60g",
      fat: "10g"
    }
  },
  {
    name: "Sundae",
    description: "Osnovni recept za pripremu sladolednog kupa. Možete ga prilagoditi po želji dodavanjem različitih preliva, voća ili drugih dodataka.",
    servings: "1 porcija",
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    ingredients: [
      "2 kugle sladoleda (ukus po želji)",
      "2 kašike čokoladnog preliva",
      "1 kašika šlaga",
      "1 kašika seckanih oraha (ili drugih orašastih plodova)",
      "1 višnja (za dekoraciju)"
    ],
    instructions: [
      "Stavite kugle sladoleda u činiju ili čašu za sladoled.",
      "Prelijte sladoled čokoladnim prelivom.",
      "Dodajte šlag preko čokoladnog preliva.",
      "Pospite seckanim orasima preko šlaga.",
      "Ukrasite višnjom na vrhu.",
      "Poslužite odmah."
    ],
    notes: [
      "Za bogatiji ukus, možete dodati i druge prelive kao što su karamel preliv, preliv od jagode ili preliv od maline.",
      "Možete koristiti i sveže voće umesto ili pored višnje, kao što su jagode, banane ili maline.",
      "Eksperimentišite sa različitim vrstama sladoleda i orašastih plodova da biste stvorili svoj savršen sundae.",
      "Ako želite topli sundae, možete kratko zagrejati sladoled u mikrotalasnoj pećnici (samo nekoliko sekundi!) pre dodavanja preliva."
    ],
    nutrition: {
      calories: "350-450 kcal",
      fat: "20-30g",
      carbs: "40-50g",
      protein: "5-7g"
    }
  },
  {
    name: "Pajeon",
    description: "Ukusan korejski palačinka sa zelenim lukom i plodovima mora. Savršen kao predjelo ili lagani obrok.",
    servings: "2-4 osobe",
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "1 šolja višenamenskog brašna",
      "1/2 šolje pirinčanog brašna",
      "1 kašičica praška za pecivo",
      "1/2 kašičice soli",
      "1 1/4 šolje hladne vode",
      "1 jaje, umućeno",
      "2 šolje iseckanog zelenog luka (samo beli i svetlo zeleni deo)",
      "1/2 šolje morskih plodova (škampi, lignje, dagnje - opciono)",
      "1/4 šolje iseckane šargarepe (opciono)",
      "Biljno ulje, za prženje"
    ],
    instructions: [
      "U velikoj posudi pomešajte višenamensko brašno, pirinčano brašno, prašak za pecivo i so.",
      "Dodajte hladnu vodu i umućeno jaje. Mešajte dok ne dobijete glatku smesu.",
      "U smesu dodajte iseckan zeleni luk i morske plodove (ako koristite) i iseckanu šargarepu (ako koristite). Dobro promešajte.",
      "U velikom tiganju zagrejte biljno ulje na srednjoj vatri.",
      "Izlijte pola smese u tiganj i ravnomerno je rasporedite.",
      "Pržite oko 5-7 minuta sa svake strane, ili dok ne postane zlatno smeđe i hrskavo.",
      "Izvadite pajeon iz tiganja i isecite ga na komade.",
      "Ponovite postupak sa preostalom smesom.",
      "Poslužite toplo sa umakom za umakanje (soja sos, sirće, susamovo ulje i ljuta paprika)."
    ],
    notes: [
      "Umesto morskih plodova možete koristiti meso ili povrće po izboru.",
      "Za hrskaviju teksturu, koristite hladnu vodu za pripremu smese.",
      "Možete dodati malo čili papričice u smesu za ljut ukus."
    ],
    nutrition: {
      calories: "250-350",
      fat: "10-15g",
      carbs: "30-40g",
      protein: "10-15g"
    }
  },
  {
    name: "Gimbap",
    description: "Ukusno i praktično korejsko jelo od kuvanog pirinča i raznih sastojaka umotanih u alge (gim). Idealno za piknik ili lagani obrok.",
    servings: "4 porcije",
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "4 lista sušenih algi (gim/nori)",
      "2 šolje kuvanog pirinča za suši (poželjno kratkog zrna)",
      "2 kašike susamovog ulja",
      "1 kašika pirinčanog sirćeta",
      "1/2 kašičice soli",
      "1/4 kašičice šećera",
      "1 krastavac, isečen na tanke štapiće",
      "1 šargarepa, isečena na tanke štapiće i blanširana",
      "4 štapića surimi štapića (imitacija krabovog mesa)",
      "4 jaja, umućena i tanko ispržena kao omlet, pa isečena na trake",
      "Kiseli žuti rotkvica (danmuji), isečen na štapiće (oko 100g)",
      "Susamove semenke, za posipanje"
    ],
    instructions: [
      "Pripremite pirinač: U velikoj posudi pomešajte kuvani pirinač sa susamovim uljem, pirinčanim sirćetom, solju i šećerom. Dobro promešajte da se sjedini.",
      "Pripremite sastojke: Uverite se da su svi sastojci isečeni na tanke trake ili štapiće.",
      "Sastavite gimbap: Stavite list alge (gim) na bambusovu prostirku za suši (makisu).",
      "Ravnomerno rasporedite pirinač po algi, ostavljajući oko 2 cm prazno na gornjoj ivici.",
      "Poređajte trake krastavca, šargarepe, surimi štapića, omleta i kisele rotkvice po sredini pirinča.",
      "Čvrsto umotajte gimbap pomoću bambusove prostirke. Prilikom umotavanja, stegnite prostirku da bi rolat bio kompaktan.",
      "Ponovite postupak sa preostalim sastojcima.",
      "Pre secenja: blago premažite spoljašnjost gimbapa susamovim uljem i pospite susamovim semenkama.",
      "Isecite gimbap na komade debljine oko 2 cm pomoću oštrog noža. Obrišite nož vlažnom krpom između svakog sečenja da biste sprečili lepljenje pirinča.",
      "Poslužite odmah."
    ],
    notes: [
      "Možete dodati i druge sastojke po svom ukusu, kao što su spanać, govedina, tunjevina ili kimchi.",
      "Za vegetarijansku varijantu, izostavite surimi i dodajte više povrća.",
      "Gimbap se može čuvati u frižideru do 24 sata, ali je najbolji kada se jede svež."
    ],
    nutrition: {
      calories: "350-400",
      fat: "15-20g",
      carbs: "40-50g",
      protein: "10-15g"
    }
  },
  {
    name: "Mandu",
    description: "Korejski knedle, tradicionalno punjene mesom i povrćem. Odlično predjelo ili glavno jelo.",
    servings: "Oko 30 knedli",
    prepTime: "45 minuta",
    cookTime: "15-20 minuta",
    ingredients: [
      "1 pakovanje gotovih kora za mandu (oko 50 kora)",
      "250g mlevene svinjetine",
      "150g mlevene govedine",
      "1 šolja iseckanog kupusa",
      "1/2 šolje iseckanog mladog luka",
      "1/4 šolje iseckanog praziluka",
      "1/4 šolje iseckane šargarepe",
      "2 čena belog luka, sitno iseckana",
      "1 kašika rendanog đumbira",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašičica mlevenog crnog bibera",
      "1 jaje, umućeno",
      "Voda (za lepljenje kora)"
    ],
    instructions: [
      "U velikoj činiji pomešati mlevenu svinjetinu i govedinu.",
      "Dodati iseckani kupus, mladi luk, praziluk i šargarepu.",
      "Dodati beli luk, đumbir, soja sos, susamovo ulje i biber. Dobro promešati.",
      "Dodati umućeno jaje u smesu i ponovo promešati dok se svi sastojci ne sjedine.",
      "Na radnu površinu staviti koru za mandu.",
      "Staviti kašičicu fila na sredinu kore.",
      "Navlažiti ivice kore vodom.",
      "Preklopiti koru na pola, formirajući polumesec. Čvrsto pritisnuti ivice da se zalepe.",
      "(Opciono) Ukrasiti knedlu tako što ćete spojiti uglove polumeseca.",
      "Ponavljati postupak dok se ne potroši fil.",
      "Kuvati mandu na pari oko 10-15 minuta, dok ne postanu providne i mekane. Možete ih i pržiti u tiganju sa malo ulja dok ne porumene.",
      "Servirati tople sa soja sosom ili drugim umacima po želji."
    ],
    notes: [
      "Fil možete prilagoditi svom ukusu. Možete dodati tofu, pečurke ili drugo povrće.",
      "Mandu se mogu zamrznuti. Složiti ih na pleh obložen papirom za pečenje i zamrznuti. Zatim ih prebaciti u kesu za zamrzavanje. Kuvati ih zamrznute, produžujući vreme kuvanja za nekoliko minuta.",
      "Za vegetarijansku verziju, zamenite meso sa tofuom ili više povrća."
    ],
    nutrition: {
      calories: "50-70 kcal",
      protein: "3-5g",
      fat: "2-4g",
      carbs: "3-5g"
    }
  },
  {
    name: "Bossam",
    description: "Korejsko jelo koje se sastoji od kuvanog svinjskog stomaka, serviranog sa raznim prilozima.",
    servings: "6-8 porcija",
    prepTime: "30 minuta",
    cookTime: "1-1.5 sati",
    ingredients: [
      "1.5-2 kg svinjskog stomaka (sa kožom ili bez)",
      "12 šolje vode",
      "1 velika glavica luka, četvrtine",
      "6 čena belog luka, zgnječena",
      "1 komad đumbira (oko 5 cm), isečen na kolutove",
      "1 kašika celih zrna crnog bibera",
      "1/4 šolje soja sosa",
      "1/4 šolje pirinčanog vina (mirin ili sake)",
      "1 kašika korejske paste od soje (doenjang)",
      "1 kašičica korejske paste od ljute paprike (gochujang) (opciono)",
      "1 glavica Napa kupusa (kineski kupus), odvojeni listovi",
      "1 krastavac, tanko isečen",
      "2 zelena luka, tanko isečena",
      "1 šolja ssamjang (pasta za umakanje - kupovna ili domaća)",
      "Kimči (kupovni ili domaći)",
      "Beli luk, tanko isečen",
      "Čili papričice, tanko isečene (opciono)"
    ],
    instructions: [
      "Stavite svinjski stomak u veliku šerpu.",
      "Dodajte vodu, luk, beli luk, đumbir, crni biber, soja sos, pirinčano vino, doenjang i gochujang (ako koristite).",
      "Prokuhajte na jakoj vatri, zatim smanjite vatru na srednje nisku, poklopite i kuvajte 1-1.5 sata, ili dok meso ne postane mekano i lako se probode viljuškom. Vreme kuvanja zavisi od debljine mesa.",
      "Kada je meso kuvano, izvadite ga iz tečnosti i ostavite da se malo ohladi.",
      "Nakon što se meso malo ohladilo, isecite ga na tanke kriške.",
      "Servirajte kriške svinjskog stomaka sa listovima Napa kupusa i ostalim prilozima.",
      "Način Serviranja: Uzmite list Napa kupusa, stavite krišku svinjetine, malo ssamjanga, kimči, krastavac, zeleni luk, beli luk i čili (ako koristite). Zamotajte i pojedite."
    ],
    notes: [
      "Vreme kuvanja može varirati u zavisnosti od veličine i debljine svinjskog stomaka.",
      "Možete koristiti instant pot (ekspres lonac) za brže kuvanje. Smanjite vreme kuvanja na oko 45 minuta nakon što lonac dostigne pritisak.",
      "Ssamjang možete kupiti gotov ili napraviti sami."
    ]
  },
  {
    name: "Jajangmyeon",
    description: "Popularno korejsko jelo od rezanaca sa gustim umakom od crnog graha, mesa i povrća.",
    servings: "2 porcije",
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    ingredients: [
      "200g suvih pšeničnih rezanaca (ili svežih rezanaca za Jajangmyeon)",
      "200g svinjskog buta, isečenog na kockice",
      "1 srednji luk, iseckan",
      "1 šolja kineskog kupusa (ili običnog kupusa), iseckanog",
      "1 mala tikvica, iseckana na kockice",
      "1 krompir, iseckan na kockice",
      "2 kašike biljnog ulja",
      "4 kašike Chunjang paste (pasta od crnog fermentisanog graha)",
      "1 kašičica šećera",
      "1 kašičica soja sosa",
      "1 šolja pilećeg ili povrtnog bujona",
      "1 kašika kukuruznog skroba",
      "2 kašike vode",
      "Kiseli žuti rotkvica (Danmuji), za serviranje (opciono)",
      "Krastavac, iseckan na tanke trake, za serviranje (opciono)"
    ],
    instructions: [
      "Pripremite rezance prema uputstvima na pakovanju. Skuvajte ih dok ne budu \"al dente\". Isperite hladnom vodom i ostavite sa strane.",
      "U velikom tiganju ili voku, zagrejte biljno ulje na srednjoj vatri.",
      "Dodajte svinjetinu i pržite dok ne porumeni.",
      "Dodajte luk, kupus, tikvice i krompir. Dinstajte dok povrće ne omekša, oko 5-7 minuta.",
      "Smanjite vatru na nisku. Dodajte Chunjang pastu i pržite, mešajući neprestano, 2-3 minuta da se arome oslobode. Pazite da pasta ne zagori.",
      "Dodajte šećer i soja sos. Promešajte.",
      "Ulijte bujon. Pustite da provri, a zatim smanjite vatru i kuvajte 5-7 minuta, dok se umak malo ne zgusne.",
      "U maloj posudi pomešajte kukuruzni skrob sa vodom dok ne dobijete glatku smesu.",
      "Dodajte smesu kukuruznog skroba u umak i mešajte dok se umak ne zgusne do željene gustine.",
      "Servirajte rezance u činiji i prelijte ih sa obilnom količinom Jajang umaka. Ukrasite kiselim žutim rotkvicama i krastavcem (ako koristite)."
    ],
    notes: [
      "Za vegetarijansku verziju, zamenite svinjetinu tofuom ili pečurkama.",
      "Količinu šećera možete prilagoditi svom ukusu.",
      "Ako vam se umak čini previše gust, dodajte još malo bujona.",
      "Chunjang pastu možete kupiti u azijskim prodavnicama."
    ],
    nutrition: {
      calories: "600-700 kcal",
      carbs: "80-90g",
      protein: "30-40g",
      fat: "20-30g"
    }
  },
  {
    name: "Korean Corn Dogs",
    description: "Hrskavi i ukusni, ovi korejski corn dogovi su savršeni ulični zalogaj.",
    servings: "6 corn dogova",
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    ingredients: [
      "6 viršli (hot dogs)",
      "6 drvenih štapića za ražnjiće",
      "1 šolja pšeničnog brašna",
      "1/2 šolje kukuruznog brašna",
      "1 kašika šećera",
      "1/2 kašičice soli",
      "1 kašičica praška za pecivo",
      "3/4 šolje mleka",
      "1 jaje",
      "1 šolja prezli (panko)",
      "Ulje za prženje",
      "Šećer u prahu, kečap, senf (za serviranje)"
    ],
    instructions: [
      "Viršle prepolovite ili koristite cele. Nanižite viršle na drvene štapiće.",
      "U velikoj posudi, pomešajte pšenično brašno, kukuruzno brašno, šećer, so i prašak za pecivo.",
      "U posebnoj posudi, umutite mleko i jaje.",
      "Sjedinite suve i vlažne sastojke dok ne dobijete glatku smesu.",
      "Sipajte prezle u plitku posudu.",
      "U dubljem tiganju ili fritezi zagrejte ulje na 175°C.",
      "Umočite svaki corn dog u smesu za testo, pazeći da bude potpuno prekriven.",
      "Uvaljajte corn dog u prezle, pritiskajući da se lepo zalepe.",
      "Pažljivo spustite corn dogove u vrelo ulje i pržite ih dok ne postanu zlatno smeđi, oko 2-3 minuta sa svake strane.",
      "Izvadite corn dogove iz ulja i stavite ih na papirni ubrus da se ocede."
    ],
    notes: [
      "Možete koristiti i sir narezan na kockice i nanižete ga između viršli na štapiću.",
      "Za hrskaviju koru, umočite corn dog u prezle dva puta.",
      "Ako nemate kukuruzno brašno, možete koristiti samo pšenično."
    ],
    nutrition: {
      calories: "300-350",
      protein: "10-15g",
      fat: "15-20g",
      carbs: "25-30g"
    }
  }
];