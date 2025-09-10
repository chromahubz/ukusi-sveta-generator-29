import { Recipe } from './recipes';

export const serbianRecipes: Record<string, Recipe> = {
  "Ćevapi": {
    name: "Ćevapi",
    ingredients: [
      "1 kg mlevene junetine",
      "1 glavica crnog luka, sitno iseckana",
      "2-3 čena belog luka, izgnječena",
      "1 kašičica sode bikarbone",
      "1 kašičica soli",
      "1/2 kašičice bibera",
      "1/2 kašičice aleve paprike (opciono)",
      "100 ml gazirane vode"
    ],
    instructions: [
      "U velikoj posudi pomešati mlevenu junetinu, sitno iseckani crni luk i izgnječeni beli luk.",
      "Dodati sodu bikarbonu, so, biber i alevu papriku (ako se koristi).",
      "Dobro izmešati rukama sve sastojke. Postepeno dodavati gaziranu vodu i mesiti dok se masa ne sjedini.",
      "Pokriti posudu i ostaviti u frižideru najmanje 2 sata, a najbolje preko noći.",
      "Pre pečenja, izvaditi smesu iz frižidera i malo je premesiti.",
      "Rukama oblikovati ćevape veličine prsta (oko 5-7 cm dužine).",
      "Ćevape peći na roštilju, grilu ili u tiganju na srednjoj vatri oko 10-15 minuta, povremeno ih okrećući da se ravnomerno ispeku sa svih strana. Treba da budu lepo zapečeni i da imaju koricu.",
      "Servirati toplo uz lepinju, kajmak, luk, ajvar ili druge priloge po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Pljeskavica": {
    name: "Pljeskavica",
    ingredients: [
      "500g mlevene junetine (ili mešavina junetine i svinjetine)",
      "1 glavica crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana ili izgnječena",
      "1 kašičica mlevene slatke paprike",
      "1/2 kašičice mlevene ljute paprike (opciono)",
      "1/2 kašičice bibera",
      "1 kašičica soli",
      "1/2 kašičice sode bikarbone",
      "2-3 kašike ulja ili masti za prženje"
    ],
    instructions: [
      "U velikoj činiji pomešati mleveno meso, sitno iseckan crni luk, beli luk, mlevenu slatku papriku, ljutu papriku (ako koristite), biber, so i sodu bikarbonu.",
      "Dobro umesiti smesu rukama, oko 5-10 minuta, dok se svi sastojci ne sjedine i smesa ne postane kompaktna. Ovo je važno za dobru teksturu pljeskavice.",
      "Pokriti činiju plastičnom folijom i ostaviti u frižideru najmanje 30 minuta, a idealno 1-2 sata. Ovo pomaže da se ukusi sjedine i meso stegne.",
      "Nakon hlađenja, izvaditi smesu iz frižidera. Podeliti smesu na 4 jednaka dela.",
      "Vlažnim rukama oblikovati svaki deo u pljeskavicu. Pljeskavice treba da budu debljine oko 1-1.5 cm i prečnika oko 10-12 cm.",
      "U velikom tiganju zagrejati ulje ili mast na srednje jakoj vatri.",
      "Pažljivo staviti pljeskavice u tiganj, pazeći da ne prenatrpate tiganj.",
      "Pržiti pljeskavice oko 7-10 minuta sa svake strane, ili dok ne dobiju lepu braon boju i budu pečene u sredini.",
      "Izvaditi pljeskavice iz tiganja i staviti na papirni ubrus da se ocedi višak masnoće.",
      "Služiti toplo u lepinji sa kajmakom, lukom, ajvarom, urnebesom ili drugim dodacima po želji."
    ],
    prepTime: "15 minuta",
    cookTime: "15-20 minuta",
    servings: 4
  },

  "Sarma": {
    name: "Sarma",
    ingredients: [
      "1 glavica kiselog kupusa (oko 1.5 kg)",
      "500g mlevene junetine",
      "250g mlevene svinjetine",
      "150g pirinča",
      "1 velika glavica crnog luka",
      "2 čena belog luka",
      "1 kašičica mlevene crvene paprike",
      "1/2 kašičice bibera",
      "So po ukusu",
      "200g suve slanine (opciono)",
      "1 suvo rebro (opciono)",
      "Lovorov list (3-4 komada)",
      "Suncokretovo ulje"
    ],
    instructions: [
      "Priprema kupusa: Odvojite listove kupusa i istanjite zadebljanja pri dnu lista nožem. Isecite ili odbacite tvrdi deo stabljike na svakom listu. Ostatak kupusa iseckajte i ostavite sa strane.",
      "Priprema fila: U velikoj posudi pomešajte mlevenu junetinu, mlevenu svinjetinu, pirinač, sitno seckani crni luk, sitno seckani beli luk, mlevenu crvenu papriku, biber i so. Dobro izmešajte rukama dok se svi sastojci ne sjedine.",
      "Punjenje sarmi: Na svaki list kupusa stavite oko 1-2 kašike fila. Savijte stranice lista prema unutra, a zatim uvijte sarmu od dna prema vrhu.",
      "Ređanje sarmi: Na dno veće šerpe stavite malo iseckanog kupusa. Preko kupusa poređajte suvu slaninu i suvo rebro (ako koristite). Zatim pažljivo poređajte sarme jednu do druge u krug. Između sarmi stavite iseckani kupus. Ubacite lovorov list.",
      "Kuvanje sarmi: Prelijte sarme vodom ili goveđom supom, toliko da ih prekrije. Pritisnite sarme tanjirom ili poklopcem manjeg prečnika da se ne bi raspale tokom kuvanja.",
      "Kuvajte sarme na laganoj vatri 3-4 sata. Povremeno proveravajte nivo tečnosti i dodajte vodu ako je potrebno."
    ],
    prepTime: "60 minuta",
    cookTime: "3-4 sata",
    servings: 8
  },

  "Musaka": {
    name: "Musaka",
    ingredients: [
      "2 velika patlidžana",
      "500g mlevenog junećeg mesa (ili mešanog)",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "400g pelata paradajza (iz konzerve ili svežeg)",
      "1 kašičica suvog origana",
      "1/2 kašičice cimeta",
      "So i biber po ukusu",
      "Maslinovo ulje",
      "50g putera",
      "50g brašna",
      "750ml mleka",
      "Prstohvat muškatnog oraščića",
      "2 jaja",
      "So i biber po ukusu",
      "Rendani parmezan ili kačkavalj (opciono)"
    ],
    instructions: [
      "Patlidžan iseći na tanke kolutove, posoliti i ostaviti da odstoje 30 minuta da puste gorčinu. Isprati i osušiti papirnim ubrusom.",
      "U velikom tiganju zagrejati malo maslinovog ulja. Propržiti patlidžane u serijama dok ne omekšaju i dobiju zlatno braon boju. Ostaviti sa strane. (Alternativno, patlidžan se može peći u rerni na 200°C oko 20-25 minuta).",
      "U istom tiganju, dodati još malo maslinovog ulja i propržiti crni luk dok ne postane staklast. Dodati beli luk i pržiti još minut.",
      "Dodati mleveno meso i pržiti dok ne dobije braon boju, razbijajući grudvice varjačom.",
      "Dodati pelat paradajza, origano, cimet, so i biber. Promešati i kuvati na laganoj vatri 15-20 minuta, dok se sos malo ne zgusne.",
      "Priprema bešamel sosa: U šerpi otopiti puter na srednjoj vatri. Dodati brašno i mešati dok se ne formira gusta pasta (roux). Kuvati roux 1-2 minuta, neprestano mešajući.",
      "Postepeno dodavati mleko, uz neprestano mešanje, kako se ne bi stvorile grudvice. Kuvati dok se sos ne zgusne, oko 5-7 minuta.",
      "Skloniti sa vatre i dodati muškatni oraščić, so i biber. Ostaviti da se malo prohladi.",
      "U posebnoj činiji, umutiti jaja i polako ih uliti u bešamel sos, neprestano mešajući.",
      "Sastavljanje musake: U nauljenu posudu za pečenje (oko 20x30 cm) složiti red patlidžana, zatim red mesa, pa ponovo red patlidžana.",
      "Preliti musaku bešamel sosom, ravnomerno rasporediti.",
      "Posuti rendanim parmezanom ili kačkavaljem (opciono).",
      "Peći u zagrejanoj rerni na 180°C 60-75 minuta, ili dok bešamel sos ne dobije zlatno braon boju.",
      "Ostaviti da se malo prohladi pre sečenja i služenja."
    ],
    prepTime: "30 minuta",
    cookTime: "60-75 minuta",
    servings: 6
  },

  "Karađorđeva šnicla": {
    name: "Karađorđeva šnicla",
    ingredients: [
      "4 svinjska šnicla (od buta ili karea), oko 150g svaka",
      "150g kajmaka",
      "2 jaja",
      "100g brašna",
      "200g prezli",
      "So",
      "Biber",
      "Ulje za prženje"
    ],
    instructions: [
      "Šnicle izlupati čekićem za meso između dva sloja providne folije, da budu tanke i ravne. Posoliti i pobiberiti sa obe strane.",
      "Na svaku šniclu staviti po 35-40g kajmaka, raspoređujući ga ravnomerno.",
      "Urolati šnicle čvrsto, formirajući valjak. Krajeve dobro zatvoriti.",
      "U tri odvojene posude pripremiti: brašno, umućena jaja (sa malo soli) i prezle.",
      "Svaku rolnicu uvaljati prvo u brašno, zatim u jaja, pa u prezle, obezbeđujući da je cela površina ravnomerno obložena.",
      "U dubljem tiganju ili fritezi zagrejati ulje na srednjoj temperaturi.",
      "Pržiti šnicle u vrelom ulju dok ne dobiju zlatno-braon boju, oko 6-8 minuta sa svake strane. Važno je da se isprže ravnomerno.",
      "Izvaditi šnicle na papirni ubrus da se ocede od viška masnoće.",
      "Poslužiti toplo, uz prilog po želji (pomfrit, tartar sos, povrće)."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Pasulj": {
    name: "Pasulj",
    ingredients: [
      "500g pasulja (najbolje tetovac)",
      "2 glavice crnog luka",
      "2 šargarepe",
      "1 parče suve slanine (oko 100g)",
      "1-2 suve paprike (ljute po želji)",
      "1 lovorov list",
      "1 kašičica aleve paprike",
      "1/2 kašičice bibera",
      "So po ukusu",
      "Ulje ili mast za dinstanje",
      "Peršun, seckani (za serviranje)"
    ],
    instructions: [
      "Pasulj potopiti u hladnu vodu preko noći.",
      "Sutradan, prospite vodu u kojoj se pasulj natapao i isperite pasulj.",
      "U velikom loncu, stavite pasulj i prelijte ga sa svežom vodom. Voda treba da bude 2-3 prsta iznad pasulja.",
      "Dodajte lovorov list.",
      "Zagrejte do ključanja, a zatim smanjite vatru i kuvajte na laganoj vatri oko 1 sat, ili dok pasulj ne omekša.",
      "Dok se pasulj kuva, sitno iseckajte crni luk i šargarepu. Isecite slaninu na kockice.",
      "U tiganju zagrejte malo ulja ili masti.",
      "Dinstajte crni luk i šargarepu dok ne omekšaju i postanu staklasti. Dodajte slaninu i nastavite da dinstate dok slanina ne postane hrskava.",
      "Sklonite tiganj sa vatre i dodajte alevu papriku i biber. Dobro promešajte.",
      "Kada je pasulj skoro kuvan, dodajte zapršku (luk, šargarepa, slanina i začini) u lonac sa pasuljem.",
      "Dodajte suve paprike (cele ili iseckane, u zavisnosti od toga koliko želite da bude ljuto).",
      "Posolite po ukusu.",
      "Nastavite da kuvate na laganoj vatri još 1-2 sata, ili dok se svi ukusi ne sjedine, a pasulj ne postane kremast. Povremeno promešajte da se ne zalepi za dno.",
      "Pre serviranja, izvadite lovorov list i suve paprike.",
      "Servirajte toplo, posuto sa seckanim peršunom."
    ],
    prepTime: "30 minuta",
    cookTime: "2-3 sata",
    servings: 6
  },

  "Prebranac": {
    name: "Prebranac",
    ingredients: [
      "500g pasulja (npr. tetovac)",
      "1.5 kg crnog luka",
      "200 ml ulja",
      "1-2 kašičice aleve paprike",
      "1/2 kašičice bibera",
      "1-2 lovorova lista",
      "So po ukusu",
      "Sveža peršun (opciono, za posipanje)"
    ],
    instructions: [
      "Pasulj potopiti u hladnu vodu preko noći (ili barem 4 sata).",
      "Sutradan, procediti pasulj i staviti ga u šerpu. Naliti ga svežom vodom, tako da voda prekrije pasulj za nekoliko centimetara. Dodati lovorov list.",
      "Kuvati pasulj dok ne omekša, ali ne sme da se raspadne (oko 1-1.5 sat). Povremeno skidati penu.",
      "Kada je pasulj kuvan, ocediti ga (sačuvati malo tečnosti u kojoj se kuvao). Izvaditi lovorov list.",
      "Za to vreme, iseckati crni luk na tanke rebarca.",
      "U velikom tiganju, zagrejati ulje na srednjoj vatri.",
      "Dodati iseckani crni luk i pržiti ga dok ne postane mekan i staklast, oko 20-30 minuta. Često mešati da ne zagori. Luk treba da dobije zlatno-braon boju.",
      "Dodati alevu papriku u luk, promešati i pržiti još minut.",
      "U duboku posudu ili pleh, ređati red pasulja, red prženog luka, i tako dok se ne potroše sastojci. Završiti sa slojem luka.",
      "Posoliti i pobiberiti svaki sloj po ukusu.",
      "Preliti sa malo tečnosti u kojoj se pasulj kuvao, samo toliko da prekrije dno posude.",
      "Peći u zagrejanoj rerni na 180°C (350°F) oko 1-1.5 sat, ili dok ne dobije lepu braon boju i dok se tečnost ne upije.",
      "Izvaditi iz rerne i ostaviti da se malo prohladi pre služenja.",
      "Po želji, posuti svežim iseckanim peršunom."
    ],
    prepTime: "30 minuta",
    cookTime: "2-3 sata",
    servings: 6
  },

  "Gibanica": {
    name: "Gibanica",
    ingredients: [
      "500g kore za pitu",
      "500g feta sir",
      "500g mladi sir (ili urda)",
      "4 jaja",
      "200ml jogurt",
      "200ml kisela voda",
      "100ml ulje",
      "1 kašičica so (po ukusu)",
      "1/2 kašičice prašak za pecivo"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U velikoj činiji, izmrvite feta sir i pomešajte ga sa mladim sirom.",
      "U drugoj činiji, umutite jaja, pa dodajte jogurt, kiselu vodu, ulje, so i prašak za pecivo. Dobro promešajte.",
      "Podmažite pleh za pečenje (oko 30x20cm) uljem.",
      "Uzmite jednu koru i stavite je na dno pleha. Poprskajte je sa malo ulja i smese sa jajima.",
      "Uzmite drugu koru, zgužvajte je i rasporedite preko prve kore. Preko nje rasporedite malo smese sa sirom i prelijte smesom sa jajima.",
      "Ponavljajte postupak (gužvajte kore, filujte sirom i prelivajte smesom sa jajima) dok ne potrošite sve kore i sav fil. Zadnja kora treba da bude cela i poprskana sa malo ulja i smese sa jajima.",
      "Isecite gibanicu na kocke pre pečenja.",
      "Pecite u zagrejanoj rerni 45-60 minuta, ili dok ne dobije zlatno-braon boju.",
      "Ostavite da se malo prohladi pre sečenja i služenja."
    ],
    prepTime: "30 minuta",
    cookTime: "45-60 minuta",
    servings: 8
  },

  "Burek": {
    name: "Burek",
    ingredients: [
      "500g tankih kora za pitu (jufke)",
      "500g mlevene junetine ili mešane (junetina i svinjetina)",
      "1 velika glavica crnog luka, sitno iseckana",
      "1 kašičica soli",
      "1/2 kašičice bibera",
      "1/4 kašičice mlevene crvene paprike (slatka ili ljuta, po ukusu)",
      "150ml ulja",
      "200ml mineralne vode ili gazirane vode"
    ],
    instructions: [
      "U velikoj posudi pomešati mleveno meso, sitno iseckani luk, so, biber i mlevenu papriku. Dobro izmešati rukama da se svi sastojci sjedine.",
      "Podmazati veliki okrugli pleh (oko 30 cm prečnika) sa malo ulja.",
      "Uzeti jednu koru i raširiti je. Poprskati je sa malo ulja i mineralne vode.",
      "Preko nje staviti drugu koru, ponovo poprskati uljem i vodom.",
      "Na jednu polovinu kore rasporediti ravnomerno deo smese od mesa.",
      "Preklopiti drugom polovinom kore preko mesa.",
      "Uviti koru u rolat, formirajući spiralu. Staviti je u centar podmazanog pleha.",
      "Ponavljati postupak sa preostalim korama i smesom od mesa, obmotavajući svaku spiralu oko prethodne, formirajući burek u obliku puža.",
      "Pre nego što stavite burek u rernu, prelijte ga preostalim uljem i mineralnom vodom. Izbockati ga viljuškom na nekoliko mesta.",
      "Peći u prethodno zagrejanoj rerni na 200°C oko 40-45 minuta, ili dok ne dobije zlatno-braon boju.",
      "Izvaditi iz rerne i ostaviti da se malo prohladi pre sečenja i serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 8
  },

  "Proja": {
    name: "Proja",
    ingredients: [
      "300g kukuruznog brašna",
      "150g pšeničnog brašna (tip 400 ili 500)",
      "1 kesica praška za pecivo (10g)",
      "1 kašičica soli",
      "1/2 kašičice šećera",
      "500ml kisele vode",
      "100ml ulja",
      "2 jajeta",
      "200g sira (feta, mladi sir ili sir za pitu), izdrobljen"
    ],
    instructions: [
      "U velikoj posudi pomešati kukuruzno brašno, pšenično brašno, prašak za pecivo, so i šećer.",
      "U drugoj posudi umutiti jaja, pa dodati kiselu vodu i ulje.",
      "Tečne sastojke postepeno dodavati u suve sastojke i mešati dok se ne dobije glatka smesa bez grudvica.",
      "Dodati izdrobljeni sir u smesu i lagano promešati.",
      "Pleh (oko 20x30 cm) premazati uljem ili obložiti papirom za pečenje.",
      "Smesu izliti u pleh i ravnomerno rasporediti.",
      "Peći u prethodno zagrejanoj rerni na 200°C (390°F) oko 30-40 minuta, ili dok proja ne dobije zlatno-braon boju i čačkalica zabodena u sredinu ne izađe čista.",
      "Ostaviti da se prohladi pre sečenja i služenja."
    ],
    prepTime: "15 minuta",
    cookTime: "30-40 minuta",
    servings: 6
  },

  "Punjene paprike": {
    name: "Punjene paprike",
    ingredients: [
      "6 velikih paprika babura (raznih boja)",
      "500g mlevenog mesa (junetina ili mešano)",
      "1 šolja pirinča",
      "1 velika glavica crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 šargarepa, sitno iseckana",
      "1 jaje",
      "1 kašičica mlevene crvene paprike",
      "1/2 kašičice suvog biljnog začina",
      "So i biber po ukusu",
      "500ml paradajz soka",
      "200ml vode",
      "2 kašike ulja",
      "Svež peršun, sitno iseckan (za posipanje)"
    ],
    instructions: [
      "Priprema paprika: Paprikama odsecite vrh (sa peteljkom, sacuvajte ih kao 'poklopce'). Izvadite semenke i unutrašnje membrane. Operite paprike i ostavite ih da se ocede.",
      "Priprema fila: U velikoj činiji pomešajte mleveno meso, pirinač, iseckani crni luk, beli luk, šargarepu, jaje, mlevenu crvenu papriku, suvi biljni začin, so i biber. Dobro promešajte sve sastojke dok se ne sjedine.",
      "Punjenje paprika: Svaku papriku napunite smesom od mesa i pirinča, ostavljajući malo prostora na vrhu jer će pirinač nabubriti tokom kuvanja. Vratite 'poklopce' od paprika.",
      "Kuvanje: U velikom loncu zagrejte ulje na srednjoj vatri. Poređajte punjene paprike u lonac, uspravno. Prelijte paprike paradajz sokom i vodom. Tečnost treba da prekrije paprike do pola.",
      "Kuvanje na tihoj vatri: Kada tečnost provri, smanjite vatru na najnižu moguću. Poklopite lonac i kuvajte punjene paprike 1.5 - 2 sata, ili dok pirinač ne bude potpuno kuvan, a paprike mekane. Povremeno proveravajte nivo tečnosti i dodajte još vode ako je potrebno.",
      "Posluživanje: Pažljivo izvadite punjene paprike iz lonca i poslužite tople. Posipajte ih sitno iseckanim svežim peršunom."
    ],
    prepTime: "30 minuta",
    cookTime: "1.5-2 sata",
    servings: 6
  },

  "Podvarak": {
    name: "Podvarak",
    ingredients: [
      "1.5 kg kiseli kupus (ribanac)",
      "500g svinjskog mesa (plećka, vrat ili rebra)",
      "2 velike glavice crnog luka",
      "200g suve slanine (ili dimljene svinjske masti)",
      "2-3 lovorova lista",
      "1 kašičica mlevene slatke paprike",
      "1/2 kašičice mlevenog bibera",
      "Ulje ili mast za podmazivanje",
      "So (po ukusu, ali pažljivo zbog slanosti kupusa i slanine)",
      "200ml supe ili vode"
    ],
    instructions: [
      "Kiseli kupus dobro isperite pod hladnom vodom (ako je previše kiseo). Iscedite višak vode.",
      "Crni luk sitno iseckajte.",
      "Slaninu (ili mast) isecite na kockice. Meso isecite na krupnije komade.",
      "U velikoj šerpi ili dubljem tiganju, zagrejte malo ulja ili masti. Propržite slaninu dok ne postane hrskava. Izvadite slaninu i ostavite sa strane.",
      "U istoj masnoći prodinstajte crni luk dok ne postane staklast.",
      "Dodajte meso i pržite dok ne porumeni sa svih strana.",
      "U šerpu dodajte kiseli kupus, lovorov list, slatku papriku i biber. Dobro promešajte.",
      "Dodajte supu ili vodu.",
      "Poklopite i kuvajte na tihoj vatri oko 1.5 sat, povremeno mešajući i dodajući još tečnosti ako je potrebno.",
      "Uključite rernu na 180°C.",
      "Prebacite smesu u vatrostalnu posudu ili dublji pleh.",
      "Pospite proprženom slaninom preko vrha.",
      "Pecite u rerni 30-60 minuta, ili dok kupus ne dobije lepu zlatnu boju i tečnost ne ispari."
    ],
    prepTime: "30 minuta",
    cookTime: "2-2.5 sata",
    servings: 6
  },

  "Đuveč": {
    name: "Đuveč",
    ingredients: [
      "500g svinjetine (isečene na kockice)",
      "2 glavice crnog luka (iseckane)",
      "2 crvene paprike (iseckane na kockice)",
      "2 zelene paprike (iseckane na kockice)",
      "400g paradajza (pelat, iseckan)",
      "2 šargarepe (iseckane na kolutove)",
      "200g pirinča",
      "200g graška (svež ili zamrznut)",
      "200g boranije (sveža ili zamrznuta, iseckana)",
      "400ml supe od povrća ili vode",
      "100ml ulja",
      "2-3 čena belog luka (iseckana)",
      "1 kašičica aleve paprike",
      "1 kašičica suvog biljnog začina",
      "So i biber po ukusu",
      "Svež peršun (iseckan, za posipanje)",
      "Lovorov list (2 komada)"
    ],
    instructions: [
      "U većoj posudi, na ulju, propržite svinjetinu dok ne porumeni sa svih strana. Izvadite meso i ostavite sa strane.",
      "U istoj posudi, dodajte iseckan crni luk i pržite dok ne postane staklast.",
      "Dodajte iseckanu papriku (crvenu i zelenu) i šargarepu. Pržite još 5-7 minuta.",
      "Dodajte iseckan beli luk i alevu papriku. Kratko promešajte.",
      "Vratite meso u posudu. Dodajte iseckan paradajz, suvi biljni začin, so, biber i lovorov list.",
      "Dodajte pirinač, grašak i boraniju. Dobro promešajte.",
      "Prelijte supom od povrća ili vodom. Tečnost treba da prekrije sve sastojke.",
      "Prebacite sve u vatrostalnu posudu ili đuvečaru.",
      "Poklopite posudu (ili prekrijte aluminijumskom folijom) i pecite u zagrejanoj rerni na 180°C oko 60 minuta.",
      "Nakon 60 minuta, skinite poklopac (ili foliju) i pecite još 30 minuta, dok tečnost ne ispari i pirinač ne bude kuvan.",
      "Pre serviranja, pospite svežim iseckanim peršunom."
    ],
    prepTime: "30 minuta",
    cookTime: "90 minuta",
    servings: 6
  },

  "Sataraš": {
    name: "Sataraš",
    ingredients: [
      "1 kg paradajza",
      "1 kg paprika (raznobojne)",
      "2 glavice crnog luka",
      "4 čena belog luka",
      "50 ml ulja",
      "1 kašičica šećera",
      "1 kašičica mlevene crvene paprike (slatka)",
      "So",
      "Biber",
      "Sveži peršun (za posipanje)"
    ],
    instructions: [
      "Luk iseckati sitno, a beli luk izgnječiti ili sitno iseckati.",
      "Paprike očistiti od semenki i iseći na trake ili kockice.",
      "Paradajz oljuštiti (opciono) i iseći na kockice. Može se koristiti i pelat iz konzerve.",
      "U velikom tiganju ili šerpi zagrejati ulje.",
      "Dodati iseckan luk i pržiti dok ne postane staklast.",
      "Dodati izgnječen beli luk i pržiti još minut.",
      "Dodati iseckane paprike i dinstati oko 10 minuta, dok malo ne omekšaju.",
      "Dodati iseckan paradajz, šećer i mlevenu papriku.",
      "Posoliti i pobiberiti po ukusu.",
      "Smanjiti vatru, poklopiti i kuvati 20 minuta, uz povremeno mešanje, dok se povrće ne sjedini i sos ne zgusne.",
      "Po potrebi dodati još začina po ukusu.",
      "Pre serviranja posuti sa svežim iseckanim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "Turšija": {
    name: "Turšija",
    ingredients: [
      "5 kg mešanog povrća (karfiol, krastavci, zeleni paradajz, paprike babure, šargarepa, ljute papričice)",
      "2 litra vode",
      "200 g soli",
      "100 ml sirćeta (9%)",
      "100 g šećera",
      "1 kesica bibera u zrnu",
      "5-6 listova lovora",
      "Nekoliko čenova belog luka",
      "Po želji: listovi celera, koren rena"
    ],
    instructions: [
      "Povrće dobro operite i očistite. Veće komade isecite na manje.",
      "U veću šerpu sipajte vodu, dodajte so, šećer i sirće. Stavite na vatru i pustite da provri, uz povremeno mešanje.",
      "Skinite sa vatre i ostavite da se ohladi.",
      "U tegle stavite biber u zrnu, lovorov list i čenove belog luka. Po želji dodajte listove celera i koren rena.",
      "Ređajte povrće u tegle, pazeći da bude čvrsto spakovano.",
      "Prelijte tegle hladnom tečnošću, tako da povrće bude potpuno potopljeno.",
      "Pritisnite povrće u teglama, koristeći čiste kamenčiće ili plastične rešetke, kako bi ostalo potopljeno tokom fermentacije.",
      "Zatvorite tegle poklopcima.",
      "Ostavite tegle na sobnoj temperaturi 2-3 nedelje da fermentiraju.",
      "Nakon fermentacije, čuvajte turšiju na hladnom i tamnom mestu."
    ],
    prepTime: "60 minuta",
    cookTime: "15 minuta",
    servings: 20
  }
};