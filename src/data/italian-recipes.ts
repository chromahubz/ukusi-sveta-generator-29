import { Recipe } from './recipes';

export const italianRecipes: Record<string, Recipe> = {
  "Pizza Margherita": {
    name: "Pizza Margarita",
    description: "Klasična i jednostavna pizza sa paradajz sosom, mocarelom i bosiljkom.",
    ingredients: [
      "Testo za pizzu:",
      "500g brašna tip 00",
      "325ml tople vode",
      "1 kašičica suvog kvasca",
      "1 kašičica soli",
      "1 kašika maslinovog ulja",
      "Sos od paradajza:",
      "400g pelata paradajza",
      "1 češanj belog luka, sitno iseckan",
      "1 kašika maslinovog ulja",
      "1/2 kašičice origana",
      "So i biber po ukusu",
      "Nadev:",
      "250g mocarele, isečene na kriške",
      "Sveži bosiljak, za dekoraciju",
      "Maslinovo ulje, za prelivanje"
    ],
    instructions: [
      "Priprema testa: U velikoj posudi pomešati brašno i so. U manjoj posudi rastvoriti kvasac u toploj vodi i ostaviti 5 minuta da se aktivira.",
      "Dodati aktivirani kvasac i maslinovo ulje u brašno i zamesiti testo. Mesiti 5-7 minuta dok ne postane glatko i elastično.",
      "Oblikovati testo u kuglu, premazati maslinovim uljem i staviti u posudu. Pokriti krpom i ostaviti da naraste na toplom mestu oko 1-1.5 sat, ili dok se ne udvostruči.",
      "Priprema sosa: U tiganju zagrejati maslinovo ulje. Dodati beli luk i pržiti dok ne zamiriše.",
      "Dodati pelat paradajza, origano, so i biber. Kuvati na laganoj vatri oko 15 minuta, povremeno mešajući, dok se sos ne zgusne.",
      "Sklapanje pizze: Zagrejati rernu na 250°C (500°F) sa kamenom za pizzu (ako ga imate).",
      "Podeliti testo na 4 dela. Svaki deo razvući u krug debljine oko 3-5mm.",
      "Premazati testo sosom od paradajza, ostavljajući mali rub.",
      "Rasporediti kriške mocarele preko sosa.",
      "Prebaciti pizzu na vreo kamen za pizzu (ili pleh obložen papirom za pečenje).",
      "Peći 12-15 minuta, ili dok testo ne postane zlatno smeđe a sir se rastopi i blago porumeni.",
      "Izvaditi pizzu iz rerne, posuti svežim bosiljkom i preliti sa malo maslinovog ulja.",
      "Iseći na komade i odmah poslužiti."
    ],
    prepTime: "20 minuta",
    cookTime: "12-15 minuta",
    servings: 4
  },

  "Spaghetti Carbonara": {
    name: "Špagete karbonara",
    description: "Klasično italijansko jelo od testenine, jaja, slanine (guanciale ili pancete), parmezana i bibera. Brzo, jednostavno i ukusno.",
    ingredients: [
      "350g špageta",
      "150g guancialea ili pancete, isečene na kockice",
      "3 velika jaja",
      "50g parmezana, sveže narendanog, plus dodatno za serviranje",
      "Crni biber, sveže mleveni",
      "So (za vodu za testeninu)"
    ],
    instructions: [
      "Stavite veliki lonac sa vodom na vatru. Kada voda provri, posolite je.",
      "Dodajte špagete u ključalu vodu i kuvajte prema uputstvima na pakovanju dok ne budu al dente.",
      "Dok se testenina kuva, u velikom tiganju na srednjoj vatri propržite guanciale ili pancetu dok ne postane hrskava. Izvadite je iz tiganja i ostavite sa strane, ostavljajući mast u tiganju.",
      "U velikoj činiji umutite jaja i narendani parmezan. Dobro pobiberite.",
      "Kada je testenina skuvana, izvadite je direktno iz lonca u tiganj sa masnoćom od slanine. Dodajte malo vode u kojoj se kuvala testenina (oko 1/2 šolje) da bi se stvorila kremasta emulzija.",
      "Sklonite tiganj sa vatre. Odmah dodajte smesu od jaja i parmezana, brzo mešajući da se jaja ne zgrušaju. Mešajte dok se sos ne zgusne i postane kremast.",
      "Dodajte hrskavu slaninu u testeninu i promešajte.",
      "Poslužite odmah, posuto dodatnim parmezanom i sveže mlevenim crnim biberom."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Lasagna": {
    name: "Lazanje",
    description: "Klasično italijansko jelo od slojeva testenine, sosa od mesa, bešamela i sira.",
    ingredients: [
      "1 kašika maslinovog ulja",
      "500g mlevene junetine",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 šargarepa, sitno iseckana",
      "1 stabljika celera, sitno iseckana",
      "700ml pasiranog paradajza",
      "2 kašike paradajz pirea",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "So i biber po ukusu",
      "500g suve lazanje kore",
      "50g putera",
      "50g brašna",
      "800ml mleka",
      "Prstohvat muskatnog oraščića",
      "150g parmezana, izrendanog",
      "250g mocarele, izrendane"
    ],
    instructions: [
      "Zagrejte rernu na 180°C.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte mlevenu junetinu i kuvajte dok ne porumeni, razbijajući grudvice viljuškom. Ocedite višak masnoće.",
      "Dodajte crni luk, beli luk, šargarepu i celer u tiganj. Kuvajte dok povrće ne omekša, oko 5-7 minuta.",
      "Umešajte pasirani paradajz, paradajz pire, origano, bosiljak, so i biber. Pustite da provri, zatim smanjite vatru i krčkajte najmanje 30 minuta, povremeno mešajući.",
      "Dok se sos krčka, pripremite bešamel sos. U šerpi otopite puter na srednjoj vatri. Umešajte brašno i kuvajte 1-2 minuta, stalno mešajući.",
      "Postepeno dodajte mleko, neprestano mešajući da ne bude grudvica. Nastavite da kuvate dok se sos ne zgusne, oko 5-7 minuta.",
      "Sklonite sa vatre i umešajte muskatni oraščić, so i biber po ukusu.",
      "U posudu za pečenje na dno sipajte tanki sloj sosa od mesa. Prekrijte slojem lazanje kora. Preko kora rasporedite sloj sosa od mesa, zatim sloj bešamela i pospite parmezanom i mocarelom.",
      "Ponavljajte slojeve dok ne potrošite sve sastojke, završavajući slojem bešamela i sirom.",
      "Pecite u zagrejanoj rerni 40-50 minuta, ili dok lazanje ne porumene i sir se rastopi i lagano porumeni.",
      "Izvadite iz rerne i ostavite da se ohladi 10-15 minuta pre sečenja i serviranja."
    ],
    prepTime: "45 minuta",
    cookTime: "50 minuta",
    servings: 8
  },

  "Risotto": {
    name: "Ržoto",
    description: "Kremasto i ukusno jelo od pirinča, savršeno kao glavno jelo ili prilog.",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 manji crni luk, sitno iseckan",
      "300g arborio pirinča",
      "125ml suvog belog vina (opciono)",
      "1 litar vrele pileće ili povrtne supe",
      "50g putera",
      "50g parmezana, izrendanog",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikom tiganju ili šerpi zagrejte maslinovo ulje na srednjoj vatri. Dodajte iseckani luk i dinstajte dok ne omekša, oko 5 minuta.",
      "Dodajte pirinač u tiganj i mešajte dok se pirinač ne obloži uljem i postane blago providan, oko 2 minuta.",
      "Ako koristite vino, sipajte ga u tiganj i mešajte dok se tečnost ne upije.",
      "Započnite dodavanje vrele supe, kutlaču po kutlaču, mešajući neprestano dok pirinač ne upije svaku kutlaču pre nego što dodate sledeću. Nastavite sa ovim procesom dok pirinač ne bude al dente, oko 20-25 minuta.",
      "Skinite tiganj sa vatre. Umešajte puter i parmezan. Začinite solju i biberom po ukusu.",
      "Promešajte dobro i odmah poslužite."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Osso Buco": {
    name: "Oso buko",
    description: "Tradicionalno italijansko jelo od telećih kolenica, sporo kuvano u vinu i povrću.",
    ingredients: [
      "4 teleće kolenice (oko 3-4 cm debljine)",
      "1/2 šolje brašna",
      "So i biber",
      "4 kašike maslinovog ulja",
      "1 veliki crni luk, sitno iseckan",
      "2 šargarepe, sitno iseckane",
      "2 stabljike celera, sitno iseckane",
      "2 čena belog luka, sitno iseckana",
      "1 šolja suvog belog vina",
      "2 šolje pileće ili goveđe supe",
      "1 konzerva (400g) seckanog paradajza",
      "1 lovorov list",
      "1 kašičica sušenog timijana",
      "Rendana kora 1 limuna",
      "2 kašike iseckanog svežeg peršuna"
    ],
    instructions: [
      "Teleće kolenice posušiti papirnim ubrusima.",
      "Pomešati brašno, so i biber u plitkom tanjiru. Svaku kolenicu uvaljati u brašno, otresti višak.",
      "U velikom tiganju ili šerpi sa debelim dnom zagrejati maslinovo ulje na srednje jakoj vatri.",
      "Kolenice pržiti u serijama dok ne porumene sa svih strana. Izvaditi ih iz šerpe i ostaviti sa strane.",
      "U istu šerpu dodati luk, šargarepu i celer. Dinstati dok povrće ne omekša, oko 5-7 minuta.",
      "Dodati beli luk i dinstati još 1 minut.",
      "U šerpu uliti belo vino, ostružite dno šerpe da se oslobode svi zalepljeni komadići. Kuvati dok se vino malo ne redukuje, oko 2-3 minuta.",
      "Vratiti kolenice u šerpu. Dodati pileću supu, seckani paradajz, lovorov list i timijan. Tečnost treba skoro da prekrije kolenice.",
      "Smanjiti vatru, poklopiti šerpu i kuvati na laganoj vatri 2-2.5 sata, ili dok meso ne bude mekano i lako se odvaja od kosti. Povremeno proveravati nivo tečnosti i dodati još supe ako je potrebno.",
      "Pred kraj kuvanja, dodati rendanu koru limuna i peršun.",
      "Ukloniti lovorov list.",
      "Servirati osso buco toplo, sa sosom iz šerpe. Tradicionalno se servira sa rižotom alla Milanese ili pire krompirom."
    ],
    prepTime: "20 minuta",
    cookTime: "150 minuta",
    servings: 4
  },

  "Tiramisu": {
    name: "Tiramisu",
    description: "Tradicionalni italijanski desert sa piškotama, kafom, maskarponeom i kakaom.",
    ingredients: [
      "500g maskarpone sira",
      "175ml jake, ohlađene kafe",
      "100g šećera u prahu",
      "3 velika jaja, odvojena",
      "200g piškota (savoiardi)",
      "2-3 kašike kakao praha, za posipanje",
      "2 kašike Amaretta ili ruma (opciono)"
    ],
    instructions: [
      "U velikoj posudi umutite žumanca sa šećerom u prahu dok ne postanu bleda i kremasta.",
      "Dodajte maskarpone sir u smesu sa žumancima i nežno sjedinite dok ne dobijete glatku kremu.",
      "U čistoj posudi, umutite belanca u čvrst sneg.",
      "Nežno umešajte umućena belanca u smesu sa maskarponeom, pazeći da ne izgubite volumen.",
      "U plitkoj posudi pomešajte ohlađenu kafu sa Amarettom ili rumom (ako koristite).",
      "Umočite piškote kratko u kafu, pazeći da se ne natopi previše.",
      "Poređajte sloj umočenih piškota na dno posude za serviranje.",
      "Preko piškota nanesite sloj kreme od maskarponea.",
      "Ponovite slojeve piškota i kreme, završavajući slojem kreme.",
      "Pokrijte posudu i stavite u frižider da se hladi najmanje 4 sata, ili idealno preko noći.",
      "Neposredno pre serviranja, pospite kakao prahom."
    ],
    prepTime: "20 minuta",
    cookTime: "240 minuta",
    servings: 7
  },

  "Gelato": {
    name: "Gelato",
    description: "Kremasti italijanski sladoled, savršen za vrele dane.",
    ingredients: [
      "500 ml punomasnog mleka",
      "150 ml slatke pavlake (35% masti ili više)",
      "150 g šećera",
      "50 g obranog mleka u prahu (opciono, za dodatnu kremastost)",
      "1 kašičica ekstrakta vanile (ili aroma po želji)",
      "Prstohvat soli"
    ],
    instructions: [
      "U šerpi srednje veličine pomešajte mleko, pavlaku, šećer, mleko u prahu (ako koristite) i so.",
      "Stavite šerpu na srednju vatru i neprestano mešajte dok se šećer ne rastopi i smesa ne počne da se pari (oko 80-85°C). Nemojte dozvoliti da proključa.",
      "Skinite šerpu sa vatre i umešajte ekstrakt vanile (ili željenu aromu).",
      "Prebacite smesu u činiju, pokrijte je plastičnom folijom (foliju prislonite direktno na površinu smese da biste sprečili stvaranje korice) i ostavite da se potpuno ohladi u frižideru, najmanje 4 sata ili preko noći.",
      "Sipajte ohlađenu smesu u aparat za sladoled i zamrznite prema uputstvima proizvođača.",
      "Kada je gelato gotov, prebacite ga u posudu koja se može zamrznuti i stavite u zamrzivač na najmanje 2 sata da se dodatno stegne.",
      "Poslužite i uživajte!"
    ],
    prepTime: "15 minuta",
    cookTime: "260 minuta",
    servings: 7
  },

  "Minestrone": {
    name: "Minestrone",
    description: "Tradicionalna italijanska supa od povrća, savršena kao lagani ručak ili večera.",
    ingredients: [
      "2 kašike maslinovog ulja",
      "1 veliki crni luk, iseckan",
      "2 šargarepe, iseckane",
      "2 štapa celera, iseckana",
      "2 čena belog luka, iseckana",
      "1 konzerva (400g) seckanog paradajza",
      "1.5 l bujona od povrća",
      "150g testenine (ditalini ili slično)",
      "1 konzerva (400g) pasulja, oceđenog i ispranog",
      "100g boranije, iseckane",
      "100g spanaća, grubo iseckanog",
      "So i biber po ukusu",
      "Parmezan, za serviranje (opciono)",
      "Sveži peršun, iseckan (za dekoraciju)"
    ],
    instructions: [
      "U velikoj šerpi zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte crni luk, šargarepu i celer i dinstajte dok povrće ne omekša, oko 5-7 minuta.",
      "Dodajte beli luk i dinstajte još 1 minut, dok ne zamiriše.",
      "U šerpu dodajte seckani paradajz i bujon od povrća. Pustite da provri, a zatim smanjite vatru i kuvajte 15 minuta.",
      "Dodajte testeninu i kuvajte prema uputstvu na pakovanju, oko 8-10 minuta.",
      "Dodajte pasulj, boraniju i spanać. Kuvajte još 5 minuta, dok spanać ne uvene i boranija ne omekša.",
      "Začinite solju i biberom po ukusu.",
      "Servirajte toplo, posuto parmezanom i svežim peršunom (ako koristite)."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 6
  },

  "Bruschetta": {
    name: "Brusketa",
    description: "Hrskavi komadi hleba premazani belim lukom, preliveni svežim paradajzom, bosiljkom i maslinovim uljem. Savršeno predjelo ili lagani obrok.",
    ingredients: [
      "1 baget, isečen na kriške debljine 1.5cm",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, presečena na pola",
      "4 zrela paradajza, iseckana na kockice",
      "1/4 šolje svežeg bosiljka, iseckanog",
      "1 kašika balzamiko sirćeta (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Poređajte kriške bageta na pleh za pečenje.",
      "Premažite kriške bageta sa maslinovim uljem.",
      "Pecite u rerni 5-7 minuta, ili dok ne postanu zlatno smeđe i hrskave.",
      "Izvadite iz rerne i istrljajte svaku krišku sa presečenim čenom belog luka.",
      "U činiji pomešajte iseckani paradajz, bosiljak, balzamiko sirće (ako koristite), so i biber.",
      "Kašikom nanesite smesu od paradajza na svaku krišku hleba.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 6
  },

  "Antipasto": {
    name: "Antipasti",
    description: "Brzi i jednostavan italijanski predjelo savršeno za druženje. Raznovrsna kombinacija ukusa i tekstura.",
    ingredients: [
      "100g suhomesnatog proizvoda (pršuta, salami, kulen)",
      "100g različitih sireva (mocarela, provolone, parmezan)",
      "1 tegla mariniranih artičoka (oko 200g), oceđene",
      "1 tegla mariniranih paprika (oko 200g), oceđene i isečene",
      "100g maslina (crne i zelene)",
      "1 krastavac, isečen na kolutove",
      "100g čeri paradajza, prepolovljeni",
      "Sveži bosiljak, za ukrašavanje",
      "Ekstra devičansko maslinovo ulje, za prelivanje",
      "Balzamiko sirće, za prelivanje (opciono)",
      "Krekeri ili hleb, za serviranje"
    ],
    instructions: [
      "Pripremite veliku dasku za serviranje ili tanjir.",
      "Poređajte suhomesnate proizvode na dasku. Savijte kriške pršute u obliku ruža ili ih jednostavno složite.",
      "Isecite sireve na kockice, kriške ili štapiće. Poređajte ih pored suhomesnatih proizvoda.",
      "Dodajte marinirane artičoke i paprike.",
      "Ubacite masline, kolutove krastavca i prepolovljeni čeri paradajz.",
      "Ukrasite svežim bosiljkom.",
      "Prelijte sa malo ekstra devičanskog maslinovog ulja i opciono sa balzamiko sirćetom.",
      "Servirajte odmah uz krekere ili hleb."
    ],
    prepTime: "20 minuta",
    cookTime: "0 minuta",
    servings: 6
  },

  "Gnocchi": {
    name: "Njoki",
    description: "Krompir testo oblikovano u male knedle, obično servirane sa sosom.",
    ingredients: [
      "1 kg krompira (najbolje brašnasti)",
      "300g brašna tip 00",
      "1 jaje",
      "1/2 kašičice soli",
      "Prstohvat muskatnog oraščića (opciono)"
    ],
    instructions: [
      "Krompir dobro operite i skuvajte sa korom dok ne omekša.",
      "Ocedite krompir i ostavite da se malo ohladi.",
      "Oljuštite krompir dok je još topao i odmah ga propasirajte kroz presu za krompir ili ga dobro izgnječite.",
      "Na radnu površinu stavite pasiran krompir. Dodajte brašno, jaje, so i muskatni oraščić (ako koristite).",
      "Brzo zamesite testo. Nemojte preterano mesiti, samo dok se sastojci ne sjedine. Testo treba da bude mekano i blago lepljivo.",
      "Podelite testo na nekoliko delova.",
      "Svaki deo razvaljajte u dugačak valjak debljine oko 2 cm.",
      "Isecite valjak na komade dužine oko 2 cm.",
      "Opciono: Preko svakog njoka pređite viljuškom da napravite šaru.",
      "U velikom loncu prokuvajte vodu sa solju.",
      "Ubacite njoke u vrelu vodu u manjim serijama.",
      "Kada njoke isplivaju na površinu, kuvajte ih još 1-2 minuta.",
      "Izvadite njoke šupljikavom kašikom i stavite ih u posudu sa sosom po izboru.",
      "Odmah poslužite."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Prosciutto": {
    name: "Prošuta",
    description: "Suhomesnati proizvod od svinjskog buta, sušen na vazduhu.",
    ingredients: [
      "1 svinjski but (oko 6-8 kg), sa kožom i kostima",
      "Morska so (gruba) - količina zavisi od veličine buta, obično oko 2-3 kg",
      "Biber u zrnu (opciono) - 1 kašika, grubo mleven",
      "Beli luk u prahu (opciono) - 1 kašika",
      "Ruzmarin (opciono) - 1 kašika, sušeni",
      "Žalfija (opciono) - 1 kašika, sušena"
    ],
    instructions: [
      "Priprema buta: Pažljivo proverite svinjski but i uklonite sve krvne ugruške. Možete ga isprati hladnom vodom i dobro osušiti papirnim ubrusima.",
      "Prvo soljenje: U velikoj posudi ili na plehu, stavite sloj morske soli. Položite svinjski but preko soli. Pomešajte opciona bilja i začine sa preostalom soli. Prekrijte ceo but obilnim slojem soli, pazeći da svi delovi budu prekriveni, uključujući i unutrašnjost zgloba.",
      "Vreme soljenja: Stavite but u hladnjak ili hladnu prostoriju (0-4°C). Vreme soljenja zavisi od težine buta. Računajte 1 dan soljenja po kilogramu težine buta.",
      "Drugo soljenje: Nakon prvog soljenja, izvadite but, isperite ga hladnom vodom i dobro osušite. Ponovite proces soljenja sa svežom morskom solju. Ponovo stavite u hladnjak/hladnu prostoriju na upola kraće vreme od prvog soljenja.",
      "Ispiranje i sušenje: Nakon drugog soljenja, izvadite but, isperite ga hladnom vodom i dobro osušite. Možete ga ostaviti da se ocedi preko noći na hladnom mestu.",
      "Sušenje: Obesite but na hladnom, provetrenom mestu (idealno 10-15°C sa vlažnošću vazduha od oko 70%) najmanje 9-12 meseci, ili duže, u zavisnosti od željene čvrstoće i ukusa.",
      "Provera: Tokom procesa sušenja, but će gubiti vlagu i postati čvršći. Možete povremeno proveriti konzistenciju pritiskom prstima.",
      "Spremanje: Kada je prosciutto dovoljno suv i čvrst, spreman je za sečenje i konzumiranje."
    ],
    prepTime: "15 minuta",
    cookTime: "8760 sati",
    servings: 10
  },

  "Mozzarella": {
    name: "Mocarela",
    description: "Sveža, domaća mocarela je delikates koji možete lako napraviti kod kuće. Ovaj recept daje kremastu i ukusnu mocarelu.",
    ingredients: [
      "4 litre punomasnog mleka (nepasterizovanog, ako je moguće)",
      "1/2 tablete sirila (renet) rastvorene u 1/4 šolje hladne vode",
      "1 1/2 kašičice limunske kiseline rastvorene u 1/4 šolje hladne vode",
      "1 kašičica morske soli",
      "Voda"
    ],
    instructions: [
      "U velikom loncu, pomešajte mleko i rastvor limunske kiseline. Dobro promešajte.",
      "Zagrevajte mleko na niskoj temperaturi, uz često mešanje, dok ne dostigne 32°C.",
      "Sklonite lonac sa vatre i dodajte rastvor sirila. Mešajte nežno 30 sekundi.",
      "Poklopite lonac i ostavite da odstoji 5-10 minuta, dok se ne formira čvrsta skuta.",
      "Nožem isecite skutu na kockice veličine oko 2.5 cm.",
      "Vratite lonac na nisku vatru i zagrevajte skutu, uz nežno mešanje, do 38-40°C. Ovo će trajati oko 30-45 minuta. Skuta će se skupiti i odvojiti od surutke.",
      "Sklonite lonac sa vatre i ostavite da odstoji 5 minuta.",
      "Procedite skutu kroz gazu ili sito, odvajajući je od surutke. Sačuvajte surutku.",
      "Zagrejte surutku (ili čistu vodu) u drugom loncu na 80-85°C.",
      "Stavite malo skute u vruću surutku/vodu i počnite da je razvlačite i savijate pomoću drvene kašike ili rukavica (budite pažljivi, vrelo je!).",
      "Dodajte so u surutku/vodu.",
      "Kada se skuta razvuče i postane glatka i sjajna, formirajte je u željeni oblik (loptice, pletenice).",
      "Stavite oblikovanu mocarelu u posudu sa hladnom, slanom vodom da se ohladi i zadrži oblik.",
      "Mocarelu držite u frižideru u surutki ili slanoj vodi."
    ],
    prepTime: "30 minuta",
    cookTime: "60 minuta",
    servings: 8
  },

  "Parmigiana": {
    name: "Parmidžana",
    description: "Klasično italijansko jelo od patlidžana, paradajza i parmezana.",
    ingredients: [
      "2 velika patlidžana",
      "So",
      "Maslinovo ulje",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "800g pelata paradajza",
      "1 kašičica sušenog origana",
      "1/2 kašičice šećera",
      "250g mocarele, isečene na kriške",
      "100g rendanog parmezana",
      "Sveži bosiljak, za ukras"
    ],
    instructions: [
      "Patlidžane isecite na tanke kolutove. Stavite ih u cediljku, posolite i ostavite da odstoje 30 minuta da puste gorčinu.",
      "Za to vreme, pripremite sos. U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte luk i dinstajte dok ne omekša, oko 5 minuta. Dodajte beli luk i dinstajte još 1 minut.",
      "Dodajte pelat paradajza, origano, šećer i so po ukusu. Pustite da provri, zatim smanjite vatru i krčkajte oko 30 minuta, povremeno mešajući, dok se sos ne zgusne.",
      "Zagrejte rernu na 180°C.",
      "Obrišite patlidžane papirnim ubrusima da ih osušite.",
      "U tiganju zagrejte maslinovo ulje. Pržite patlidžane u serijama, dok ne porumene sa obe strane. Izvadite ih i stavite na papirni ubrus da se ocede od viška ulja.",
      "U vatrostalnu posudu stavite tanak sloj sosa od paradajza. Preko sosa poslažite sloj patlidžana, zatim sloj mocarele i pospite parmezanom. Ponovite slojeve dok ne potrošite sve sastojke, završavajući sa sosom i parmezanom.",
      "Pecite u rerni 30-40 minuta, ili dok ne porumeni i sir se ne rastopi.",
      "Izvadite iz rerne i ostavite da se malo ohladi pre serviranja. Ukrasite svežim bosiljkom."
    ],
    prepTime: "30 minuta",
    cookTime: "90 minuta",
    servings: 6
  },

  "Cannoli": {
    name: "Kanoli",
    description: "Hrskavi, slatki cilindri punjeni bogatim, kremastim filom od rikote. Klasična italijanska poslastica!",
    ingredients: [
      "Za testo:",
      "225g brašna",
      "25g šećera",
      "1/2 kašičice cimeta",
      "1/4 kašičice soli",
      "30g putera, hladnog i isečenog na kockice",
      "60ml marsala vina ili suvog belog vina",
      "Ulje za prženje (suncokretovo ili biljno)",
      "Za fil:",
      "500g rikote, oceđene preko noći",
      "150g šećera u prahu",
      "1 kašičica ekstrakta vanile",
      "50g čokoladnih mrvica ili seckane čokolade",
      "Rendana kora jedne pomorandže (opciono)",
      "Za dekoraciju:",
      "Šećer u prahu",
      "Seckani pistaći (opciono)",
      "Kandirana trešnja (opciono)"
    ],
    instructions: [
      "Napravite testo: U velikoj činiji pomešajte brašno, šećer, cimet i so. Dodajte hladan puter i utrljajte prstima dok ne dobijete mrvičastu smesu.",
      "Postepeno dodajte vino, mešajući dok se testo ne sjedini. Mesite testo na blago pobrašnjenoj površini 5-7 minuta, dok ne postane glatko i elastično.",
      "Oblikujte testo u disk, umotajte u plastičnu foliju i ostavite u frižideru najmanje 30 minuta.",
      "Pripremite fil: U činiji pomešajte oceđenu rikotu, šećer u prahu i ekstrakt vanile. Dobro umutite dok ne dobijete glatku smesu.",
      "Umešajte čokoladne mrvice (ili seckanu čokoladu) i rendanu koru pomorandže, ako koristite. Pokrijte i stavite u frižider dok ne budete spremni za punjenje.",
      "Oblikujte i pržite kanole: Izvadite testo iz frižidera i tanko ga razvaljajte na blago pobrašnjenoj površini (oko 1-2 mm debljine).",
      "Isecite testo na krugove prečnika oko 10 cm.",
      "Umotajte svaki krug testa oko metalne ili drvene forme za kanole, preklapajući ivice i premazujući ih umućenim belancetom ili vodom da se zalepe.",
      "U dubljem tiganju ili fritezi zagrejte ulje na 180°C.",
      "Pažljivo spuštajte kanole u vrelo ulje i pržite ih 2-3 minuta sa svake strane, dok ne dobiju zlatno braon boju.",
      "Izvadite kanole iz ulja i stavite ih na papirni ubrus da se ocede.",
      "Ostavite da se potpuno ohlade pre nego što uklonite forme.",
      "Napunite i dekorišite kanole: Napunite ohlađene kanole filom od rikote pomoću špric kese ili kašike.",
      "Pospite šećerom u prahu i dekorišite seckanim pistaćima i/ili kandiranim trešnjama, ako želite.",
      "Služite odmah."
    ],
    prepTime: "45 minuta",
    cookTime: "20 minuta",
    servings: 12
  },

  "Focaccia": {
    name: "Fokača",
    description: "Fokača je italijanski hleb, sličan pici, idealan kao prilog ili osnova za sendviče.",
    ingredients: [
      "500g brašna (tip 00 ili jače brašno)",
      "350ml mlake vode",
      "7g suvog kvasca (ili 21g svežeg kvasca)",
      "1 kašičica meda ili šećera",
      "10g soli",
      "50ml maslinovog ulja + dodatno za premazivanje"
    ],
    instructions: [
      "U velikoj posudi pomešajte mlaku vodu, kvasac i med/šećer. Ostavite 5-10 minuta da se kvasac aktivira i zapeni.",
      "Dodajte brašno i so u posudu sa kvascem. Mešajte dok se ne formira testo.",
      "Dodajte 30ml maslinovog ulja u testo i nastavite da mesite rukama ili mikserom sa kukom za testo 8-10 minuta, dok testo ne postane glatko i elastično.",
      "Formirajte testo u kuglu, stavite ga u nauljenu posudu, okrenite da se premaže uljem, pokrijte plastičnom folijom i ostavite na toplom mestu da naraste 1-1.5 sat, ili dok se ne udvostruči.",
      "Nakon što je testo naraslo, premažite veliki pleh za pečenje (oko 30x40cm) sa maslinovim uljem.",
      "Izručite testo na pleh i nežno ga razvucite prstima da pokrije celu površinu pleha. Ako se testo skuplja, ostavite ga da se odmori 5 minuta pa nastavite.",
      "Prstima napravite udubljenja po celoj površini testa.",
      "Prelijte sa preostalih 20ml maslinovog ulja i pospite sa malo krupne soli (po želji).",
      "Ostavite fokaču da naraste još 30 minuta.",
      "Zagrejte rernu na 220°C.",
      "Pecite fokaču 20-25 minuta, ili dok ne dobije zlatno-braon boju.",
      "Izvadite fokaču iz rerne i ostavite da se malo prohladi pre sečenja i serviranja."
    ],
    prepTime: "140 minuta",
    cookTime: "25 minuta",
    servings: 9
  },

  "Ravioli": {
    name: "Ravioli",
    description: "Sveža pasta punjena ukusnim nadevom, prelivena jednostavnim sosom.",
    ingredients: [
      "Sastojci za testo:",
      "300g brašna tip \"00\"",
      "3 jaja",
      "1 kašika maslinovog ulja",
      "Prstohvat soli",
      "Sastojci za nadev (ricotta i spanać):",
      "250g ricotta sira",
      "200g svežeg spanaća",
      "50g parmezana, izrendanog",
      "1 jaje",
      "Muskatni oraščić, po ukusu",
      "So i biber, po ukusu",
      "Sastojci za sos (puter i žalfija):",
      "100g putera",
      "10-12 listova sveže žalfije",
      "Parmezan, za posipanje"
    ],
    instructions: [
      "Priprema testa: Na radnoj površini napravite brdo od brašna i udubljenje u sredini. U udubljenje dodajte jaja, ulje i so.",
      "Viljuškom lagano umutite jaja, a zatim postepeno sjedinjujte brašno sa jajima, dok se ne formira gruba masa.",
      "Mesite testo rukama 10-15 minuta, dok ne postane glatko i elastično. Ako je testo previše suvo, dodajte malo vode. Ako je previše lepljivo, dodajte malo brašna.",
      "Umotajte testo u plastičnu foliju i ostavite da odstoji u frižideru najmanje 30 minuta.",
      "Priprema nadeva: Operite i kratko blanširajte spanać. Iscedite svu vodu i sitno ga iseckajte.",
      "U činiji pomešajte ricotta sir, spanać, parmezan, jaje, muskatni oraščić, so i biber. Dobro promešajte.",
      "Formiranje raviola: Podelite testo na dva dela. Razvaljajte jedan deo testa tanko, na pobrašnjenoj površini, u pravougaonik.",
      "Na razvaljano testo, na jednakim razmacima, stavljajte kašičicom male gomilice nadeva.",
      "Razvaljajte i drugi deo testa. Prekrijte njime testo sa nadevom.",
      "Pažljivo pritisnite testo oko svakog nadeva kako biste izbacili vazduh.",
      "Nožem ili rezačem za testo isecite raviole, pazeći da budu dobro zatvoreni sa svih strana.",
      "Kuvanje raviola: U velikom loncu zakuvajte posoljenu vodu.",
      "Lagano ubacite raviole u vrelu vodu. Kuvajte ih 3-5 minuta, ili dok ne isplivaju na površinu.",
      "Priprema sosa: Dok se ravioli kuvaju, u tiganju otopite puter na srednjoj vatri.",
      "Dodajte listove žalfije i pržite ih dok ne postanu hrskavi.",
      "Serviranje: Izvadite raviole šupljikavom kašikom i prebacite ih direktno u tiganj sa sosom od putera i žalfije. Lagano ih promešajte da se oblože sosom.",
      "Servirajte odmah, posuto sa parmezanom."
    ],
    prepTime: "60 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Pesto": {
    name: "Pesto",
    description: "Tradicionalni italijanski sos od bosiljka, pinjola, belog luka, parmezana i maslinovog ulja. Odlican uz testeninu, meso ili kao namaz.",
    ingredients: [
      "2 solje svezeg bosiljka, listovi",
      "1/4 solje pinjola",
      "2-3 cena belog luka",
      "1/2 solje rendanog parmezana",
      "1/4 - 1/2 solje ekstra devicanskog maslinovog ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "Stavite bosiljak, pinjole i beli luk u procesor za hranu.",
      "Blendajte dok se sastojci grubo ne usitne.",
      "Dodajte parmezan i nastavite da blendate.",
      "Postepeno dodajte maslinovo ulje dok procesor radi, dok ne dobijete glatku smesu.",
      "Zacinite solju i biberom po ukusu.",
      "Probajte i dodajte jos parmezana, belog luka, ili maslinovog ulja po zelji."
    ],
    prepTime: "10 minuta",
    cookTime: "0 minuta",
    servings: 8
  },

  "Caprese Salad": {
    name: "Kaprese salata",
    description: "Osvežavajuća i jednostavna salata idealna kao predjelo ili lagani obrok.",
    ingredients: [
      "400g zrelih paradajza",
      "250g sveže mocarele (idealno bivolja)",
      "Svež bosiljak (oko 1/4 šolje listova)",
      "2 kašike ekstra devičanskog maslinovog ulja",
      "Balzamiko glazura (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Paradajz operite i isecite na kriške debljine oko 0.5cm.",
      "Mocarelu isecite na kriške iste debljine kao i paradajz.",
      "Na tanjir poređajte naizmenično kriške paradajza i mocarele, preklapajući ih.",
      "Između kriški stavite listove svežeg bosiljka.",
      "Prelijte salatu maslinovim uljem.",
      "Začinite solju i biberom po ukusu.",
      "Po želji, prelijte balzamiko glazurom.",
      "Odmah poslužite."
    ],
    prepTime: "10 minuta",
    cookTime: "0 minuta",
    servings: 2
  },

  "Espresso": {
    name: "Espreso",
    description: "Kratak, koncentrisani napitak od kafe, napravljen propuštanjem vruće vode pod visokim pritiskom kroz fino mlevenu kafu.",
    ingredients: [
      "7-9 grama fino mlevene kafe za espresso",
      "30 ml filtrirane vode"
    ],
    instructions: [
      "Ugrejte espresso mašinu.",
      "Samleti kafu neposredno pre upotrebe.",
      "Ravnomerno napunite portafilter mlevenom kafom.",
      "Upotrebite tamper da kompresujete kafu u portafilteru sa pritiskom od oko 15 kg.",
      "Očistite ivice portafiltera od viška kafe.",
      "Ubacite portafilter u espresso mašinu.",
      "Stavite šolju ispod izliva portafiltera.",
      "Pokrenite espresso mašinu i pustite da se espresso ekstrahuje 25-30 sekundi.",
      "Zaustavite ekstrakciju kada dobijete oko 30 ml espressa.",
      "Poslužite odmah."
    ],
    prepTime: "2 minuta",
    cookTime: "1 minuta",
    servings: 1
  }
};