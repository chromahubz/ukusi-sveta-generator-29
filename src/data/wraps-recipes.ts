export interface Recipe {
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  notes?: string[];
  nutrition?: {
    calories: string;
    protein: string;
    fat: string;
    carbohydrates: string;
  };
}

export const wrapsRecipes: Recipe[] = [
  {
    name: "Chicken Caesar Wrap",
    description: "Brzi i ukusni wrap punjen piletinom, hrskavom zelenom salatom i kremastim Cezar prelivom. Savršen za ručak ili večeru.",
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: "2 wrapa",
    ingredients: [
      "2 tortilje",
      "200g pilećeg filea",
      "1 kašičica maslinovog ulja",
      "1/4 kašičice belog luka u prahu",
      "1/4 kašičice crnog bibera",
      "1/4 glavice zelene salate, iseckane",
      "50g rendanog parmezana",
      "4 kašike Cezar preliva",
      "Opcija: Krutoni"
    ],
    instructions: [
      "Piletinu isecite na manje komade.",
      "U tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte piletinu, beli luk u prahu i biber. Kuvajte dok piletina ne bude potpuno gotova, oko 7-10 minuta.",
      "Na svaku tortilju ravnomerno rasporedite iseckanu zelenu salatu.",
      "Dodajte kuvanu piletinu preko zelene salate.",
      "Pospite rendanim parmezanom.",
      "Prelijte sa Cezar prelivom.",
      "Opcija: Dodajte krutone za hrskavu teksturu.",
      "Savijte tortilju tako što prvo preklopite strane prema unutra, a zatim je urolajte od dna prema gore.",
      "Servirajte odmah."
    ],
    notes: [
      "Možete koristiti već pečenu piletinu za bržu pripremu.",
      "Za vegetarijansku verziju, zamenite piletinu sa pečenim tofuom ili leblebijama.",
      "Wrap možete zagrejati u tiganju ili na roštilju nekoliko minuta sa svake strane za topli wrap."
    ],
    nutrition: {
      calories: "450-550 kcal",
      protein: "30-40g",
      fat: "20-30g",
      carbohydrates: "30-40g"
    }
  },
  {
    name: "Turkey Wrap",
    description: "Brz i jednostavan obrok, savršen za ručak ili užinu.",
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: "1 porcija",
    ingredients: [
      "1 velika tortilja",
      "85g narezanog ćurećeg mesa (pečenica)",
      "30g krem sira",
      "1/4 krastavca, isečenog na tanke kriške",
      "1/4 šolje rendane šargarepe",
      "Šaka bebi spanaća",
      "So i biber po ukusu (opciono)"
    ],
    instructions: [
      "Raširite tortilju na ravnu površinu.",
      "Ravnomerno namažite krem sir preko cele tortilje.",
      "Preko krem sira rasporedite ćureće meso.",
      "Dodajte krastavac, šargarepu i bebi spanać.",
      "Ako želite, posolite i pobiberite po ukusu.",
      "Pažljivo urolajte tortilju, počevši od jedne strane.",
      "Presecite wrap na pola i poslužite odmah."
    ],
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su avokado, paradajz ili paprika.",
      "Za pikantniji ukus, koristite ljuti krem sir ili dodajte malo ljutog sosa.",
      "Wrap možete umotati u plastičnu foliju i poneti sa sobom za kasnije."
    ],
    nutrition: {
      calories: "350-400",
      protein: "30g",
      fat: "15g",
      carbohydrates: "30g"
    }
  },
  {
    name: "Veggie Wrap",
    description: "Lagani i ukusni wrap pun svežeg povrća, idealan za brzi ručak ili večeru.",
    prepTime: "15 minuta",
    cookTime: "5 minuta",
    servings: "2 porcije",
    ingredients: [
      "2 velike tortilje",
      "1/2 krastavca, isečenog na tanke trake",
      "1/2 crvene paprike, isečene na tanke trake",
      "1/2 šargarepe, narendane",
      "1/4 crvenog luka, tanko isečenog",
      "1/2 avokada, izgnječenog",
      "50g humus-a",
      "50g feta sira, izmrvljenog (opciono)",
      "Sveži listovi spanaća ili rukole",
      "So i biber po ukusu",
      "Maslinovo ulje"
    ],
    instructions: [
      "Pripremite povrće: Operite i iseckajte krastavac, papriku, šargarepu i crveni luk.",
      "Zagrejte tortilje: Tortilje možete zagrejati u tiganju na suvo, ili kratko u mikrotalasnoj. Oko 30 sekundi sa svake strane.",
      "Namažite humus: Na svaku tortilju ravnomerno namažite humus.",
      "Dodajte avokado: Preko humusa namažite izgnječeni avokado.",
      "Rasporedite povrće: Preko avokada rasporedite krastavac, papriku, šargarepu, crveni luk, spanać ili rukolu.",
      "Dodajte feta sir (opciono): Ako koristite feta sir, pospite ga preko povrća.",
      "Začinite: Posolite i pobiberite po ukusu.",
      "Uvijte wrap: Preklopite krajeve tortilje prema unutra, a zatim čvrsto uvijte tortilju od jednog kraja do drugog.",
      "Isecite i poslužite: Isecite wrap na pola i odmah poslužite."
    ],
    notes: [
      "Možete dodati i druge vrste povrća po želji, kao što su paradajz, pečurke ili tikvice.",
      "Za jači ukus, dodajte malo ljutog sosa ili sveže seckane čili papričice.",
      "Wrap možete grilovati kratko sa obe strane nakon uvijanja da se zapeče."
    ],
    nutrition: {
      calories: "400-500 kcal",
      protein: "15-20 g",
      fat: "25-30 g",
      carbohydrates: "30-40 g"
    }
  },
  {
    name: "Buffalo Chicken Wrap",
    description: "Brz i ukusan wrap pun ukusa piletine sa ljutim buffalo sosom, idealan za ručak ili večeru.",
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: "2 wraps",
    ingredients: [
      "2 tortilje",
      "250g pilećeg filea, isečenog na kockice",
      "1 kašika maslinovog ulja",
      "50ml buffalo sosa (gotov ili domaći)",
      "50g rendanog čedar sira",
      "50g iseckane zelene salate",
      "2 kašike ranch dresinga (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Pileći file začinite solju i biberom.",
      "U tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte piletinu i pržite dok ne porumeni i bude potpuno pečena, oko 8-10 minuta.",
      "Sklonite tiganj sa vatre i prelijte piletinu buffalo sosom. Dobro promešajte da se piletina obloži sosom.",
      "Zagrejte tortilje prema uputstvu na pakovanju (u tiganju, mikrotalasnoj ili rerni).",
      "Na svaku tortilju stavite sloj zelene salate.",
      "Preko salate rasporedite buffalo piletinu.",
      "Posipajte rendanim čedar sirom.",
      "Po želji dodajte ranch dresing.",
      "Zamotajte tortilje. Možete ih preklopiti kao burito ili jednostavno saviti sa jedne strane.",
      "Poslužite odmah."
    ],
    notes: [
      "Za blažu varijantu koristite manju količinu buffalo sosa ili ga razblažite sa malo putera.",
      "Možete dodati i druge sastojke po želji, kao što su iseckani paradajz, crveni luk ili avokado.",
      "Za vegetarijansku varijantu, koristite tofu umesto piletine."
    ],
    nutrition: {
      calories: "450-550",
      protein: "30-40g",
      fat: "25-35g",
      carbohydrates: "30-40g"
    }
  },
  {
    name: "Club Wrap",
    description: "Brz i ukusan wrap inspirisan klasičnim club sendvičem. Odličan za ručak, večeru ili užinu.",
    prepTime: "10 minuta",
    cookTime: "5 minuta",
    servings: "2 wrap-a",
    ingredients: [
      "2 velike tortilje",
      "100g pečene piletine (ili ćuretine), tanko isečene",
      "4 kriške slanine, hrskavo ispržene",
      "1/4 glavice zelene salate, iseckane",
      "1/2 paradajza, isečenog na kriške",
      "2 kašike majoneza",
      "1 kašičica senfa",
      "So i biber po ukusu"
    ],
    instructions: [
      "U maloj posudi pomešajte majonez i senf.",
      "Namažite svaku tortilju sa mešavinom majoneza i senfa.",
      "Preko tortilje ravnomerno rasporedite iseckanu zelenu salatu.",
      "Preko salate poslažite kriške paradajza.",
      "Dodajte isečenu piletinu/ćuretinu.",
      "Preko piletine poslažite hrskavu slaninu.",
      "Začinite sa soli i biberom po ukusu.",
      "Čvrsto umotajte svaku tortilju, presavijte krajeve prema unutra da sastojci ne ispadaju.",
      "Po želji, wrap možete kratko zagrejati u tiganju ili na roštilju sa obe strane dok ne dobije blagu boju.",
      "Isecite svaki wrap na pola i poslužite."
    ],
    notes: [
      "Možete dodati avokado, krastavce ili druge sastojke po želji.",
      "Za vegetarijansku verziju, zamenite piletinu i slaninu tofuom ili povrćem sa roštilja."
    ],
    nutrition: {
      calories: "450-550",
      protein: "25-35g",
      fat: "25-35g",
      carbohydrates: "30-40g"
    }
  },
  {
    name: "Tuna Wrap",
    description: "Brz i jednostavan obrok, idealan za poneti ili kao lagani ručak.",
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: "1 wrap",
    ingredients: [
      "1 tortilja (velika)",
      "1 konzerva tunjevine u komadima, oceđena (oko 120g)",
      "2 kašike majoneza",
      "1 kašika sitno seckanog crvenog luka",
      "1 kašika sitno seckanog celera",
      "1/4 kašičice crnog bibera",
      "1/4 kašičice belog luka u prahu (opciono)",
      "Listovi zelene salate",
      "Paradajz, isečen na kriške (opciono)",
      "Krastavac, isečen na štapiće (opciono)"
    ],
    instructions: [
      "U činiji, pomešajte oceđenu tunjevinu, majonez, crveni luk, celer, crni biber i beli luk u prahu (ako koristite). Dobro promešajte dok se svi sastojci ne sjedine.",
      "Položite tortilju na ravnu površinu.",
      "Na tortilju stavite listove zelene salate, ostavljajući oko 2-3 cm slobodno na ivicama.",
      "Preko salate ravnomerno rasporedite smesu sa tunjevinom.",
      "Dodajte kriške paradajza i/ili štapiće krastavca, ako želite.",
      "Pažljivo savijte donju ivicu tortilje prema unutra, a zatim savijte bočne strane ka unutra. Urolajte wrap od donje ivice ka gore, čvrsto ga držeći.",
      "Presecite wrap na pola, ako želite, i odmah poslužite."
    ],
    notes: [
      "Možete koristiti i druge vrste povrća po želji, kao što su paprika, šargarepa ili avokado.",
      "Umesto majoneza možete koristiti grčki jogurt ili pavlaku.",
      "Za pikantniji ukus, dodajte malo ljutog sosa ili čilija u prahu u smesu sa tunjevinom.",
      "Za veganski wrap, koristite \"tunjevinu\" od leblebija ili tofua i veganski majonez."
    ],
    nutrition: {
      calories: "400-500 kcal",
      protein: "25-30g",
      fat: "25-35g",
      carbohydrates: "20-30g"
    }
  },
  {
    name: "Ham and Cheese Wrap",
    description: "Brzi i jednostavan obrok ili užina, idealna za poneti.",
    prepTime: "5 minuta",
    cookTime: "2 minuta (opciono)",
    servings: "1 porcija",
    ingredients: [
      "1 tortilja (velika)",
      "50g šunke (sečene na tanke listove)",
      "30g sira (gauda, edamer, ili cheddar, narendan ili u listovima)",
      "1 kašika krem sira ili majoneza (opciono)",
      "Zelena salata ili rukola (nekoliko listova, opciono)",
      "Paradajz, isečen na kriške (opciono)"
    ],
    instructions: [
      "Položite tortilju na ravnu površinu.",
      "Ako koristite krem sir ili majonez, ravnomerno ga namažite preko tortilje.",
      "Preko krem sira (ili direktno na tortilju ako ga ne koristite), poslažite listove šunke.",
      "Pospite narendani sir preko šunke ili poslažite listove sira.",
      "Ako koristite salatu, rukolu i paradajz, dodajte ih preko sira.",
      "Savijte tortilju. Prvo preklopite levi i desni kraj prema unutra, a zatim čvrsto urolajte od donje ivice prema gore.",
      "(Opciono) Wrap možete zagrejati u tiganju ili tosteru na nekoliko minuta dok se sir ne rastopi."
    ],
    notes: [
      "Za vegetarijansku verziju, zamenite šunku sa grilovanim povrćem ili humusom.",
      "Možete dodati i druge sastojke po želji, kao što su paprika, krastavac ili avokado.",
      "Za dodatni ukus, koristite senf ili neki drugi sos.",
      "Wrap je najbolje pojesti odmah nakon pripreme, ali se može čuvati u frižideru do 24 sata."
    ],
    nutrition: {
      calories: "350-450 kcal",
      protein: "20-25g",
      fat: "15-25g",
      carbohydrates: "30-40g"
    }
  },
  {
    name: "Falafel Wrap",
    description: "Sočan i ukusan falafel umotan u toplu tortilju sa svežim povrćem i prelivom po izboru.",
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: "2 wrapa",
    ingredients: [
      "1 šolja sušenog leblebija",
      "1/2 crnog luka, sitno iseckanog",
      "2 čena belog luka, sitno iseckana",
      "1/4 šolje svežeg peršuna, sitno iseckanog",
      "1/4 šolje svežeg korijandera, sitno iseckanog",
      "1 kašičica kumina",
      "1/2 kašičice korijandera u prahu",
      "1/4 kašičice kajenske paprike (opciono)",
      "1 kašičica soli",
      "1/2 kašičice bibera",
      "2 kašike brašna (po potrebi)",
      "Ulje za prženje",
      "2 tortilje",
      "Humus",
      "Tahini preliv",
      "Iseckana zelena salata",
      "Iseckani paradajz",
      "Iseckani krastavac",
      "Kiseli krastavci (opciono)",
      "Ljuti sos (opciono)"
    ],
    instructions: [
      "Leblebije potopiti u vodi najmanje 12 sati. Ocediti i dobro isprati.",
      "U multipraktiku sjediniti leblebije, luk, beli luk, peršun, korijander, kumin, korijander u prahu, kajensku papriku (ako koristite), so i biber.",
      "Miksati dok se ne dobije gruba smesa. Ako je smesa previše vlažna, dodati kašiku brašna.",
      "Oblikovati smesu u male falafel kuglice ili pljeskavice.",
      "U tiganju zagrejati ulje na srednjoj vatri.",
      "Pržiti falafel dok ne porumeni sa svih strana, oko 3-5 minuta po strani.",
      "Izvaditi falafel na papirni ubrus da se ocedi višak ulja.",
      "Tortilje zagrejati u tiganju ili mikrotalasnoj pećnici.",
      "Premazati tortilju humusom i tahini prelivom.",
      "Dodati falafel, zelenu salatu, paradajz, krastavac i kiseli krastavčiće (ako koristite).",
      "Preliti ljutim sosom (ako koristite).",
      "Urolati tortilju i odmah poslužiti."
    ],
    notes: [
      "Za zdraviju verziju, falafel možete peći u rerni na 200°C oko 20-25 minuta, okrećući na pola pečenja.",
      "U falafel smesu možete dodati i druge začine po ukusu, kao što su susam ili čili u prahu.",
      "Koristite preliv po vašem izboru, kao što je jogurt sos ili ljuti sos."
    ],
    nutrition: {
      calories: "500-600",
      protein: "20-25g",
      fat: "25-35g",
      carbohydrates: "50-60g"
    }
  },
  {
    name: "Greek Wrap",
    description: "Brz i ukusan obrok inspirisan grčkim ukusima, idealan za ručak ili večeru.",
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: "2 porcije",
    ingredients: [
      "2 tortilje",
      "200g pilećeg filea, isečenog na kockice",
      "1 kašika maslinovog ulja",
      "1/2 crvenog luka, tanko isečenog",
      "1/2 krastavca, isečenog na kockice",
      "1 paradajz, isečen na kockice",
      "50g feta sira, izmrvljenog",
      "2 kašike grčkog jogurta",
      "1 kašika limunovog soka",
      "1/2 kašičice sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "U tiganju zagrejati maslinovo ulje na srednjoj vatri.",
      "Dodati piletinu i pržiti dok ne porumeni i bude potpuno kuvana (oko 8-10 minuta). Začiniti solju, biberom i origanom.",
      "U manjoj posudi pomešati grčki jogurt i limunov sok.",
      "Zagrejte tortilje u tiganju ili mikrotalasnoj.",
      "Na svaku tortilju rasporedite piletinu, crveni luk, krastavac, paradajz i feta sir.",
      "Prelijte sa smesom grčkog jogurta.",
      "Urolajte tortilje i odmah poslužite."
    ],
    notes: [
      "Umesto piletine, možete koristiti jagnjetinu ili falafel.",
      "Dodajte masline ili zelenu salatu za dodatni ukus.",
      "Tortilje možete premazati humusom pre dodavanja ostalih sastojaka."
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "35g",
      fat: "25g",
      carbohydrates: "20g"
    }
  },
  {
    name: "Mexican Wrap",
    description: "Brz i ukusan obrok idealan za ručak ili večeru.",
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: "4 porcije",
    ingredients: [
      "4 velike tortilje",
      "500g mlevene junetine",
      "1 veliki crni luk, sitno iseckan",
      "1 paprika (crvena ili zelena), sitno iseckana",
      "1 kesica začina za takos (taco seasoning)",
      "1 konzerva (400g) seckanog paradajza",
      "1 konzerva (400g) crnog pasulja, oceđenog i ispranog",
      "1 konzerva (200g) kukuruza šećerca, oceđenog",
      "150g rendanog čedar sira",
      "Kisela pavlaka (po ukusu)",
      "Guacamole (po ukusu)",
      "Salsa (po ukusu)",
      "Biljno ulje"
    ],
    instructions: [
      "U velikom tiganju zagrejati malo biljnog ulja na srednjoj vatri. Dodati mlevenu junetinu i dinstati dok ne porumeni, razbijajući je viljuškom.",
      "Dodati iseckani crni luk i papriku u tiganj. Dinstati dok povrće ne omekša, oko 5 minuta.",
      "U tiganj dodati začin za takos, seckani paradajz, crni pasulj i kukuruz. Dobro promešati i kuvati još 5 minuta, dok se sos ne zgusne.",
      "Tortilje zagrejati u suvom tiganju ili mikrotalasnoj pećnici dok ne omekšaju.",
      "Na svaku tortilju staviti nekoliko kašika smese sa mesom.",
      "Posuti rendanim sirom.",
      "Dodati kiselu pavlaku, guacamole i salsu po ukusu.",
      "Urolati tortilje i odmah poslužiti."
    ],
    notes: [
      "Za pikantniju verziju, dodajte malo čili papričice u prahu ili seckani jalapeno u smesu sa mesom.",
      "Možete koristiti i druge vrste mesa, kao što su piletina ili ćuretina.",
      "Dodajte zelenu salatu ili iseckani paradajz za dodatnu svežinu."
    ],
    nutrition: {
      calories: "550-650",
      protein: "30-40g",
      fat: "25-35g",
      carbohydrates: "50-60g"
    }
  },
  {
    name: "Asian Wrap",
    description: "Brzi i ukusni obrok inspirisan azijskom kuhinjom, savršen za ručak ili večeru.",
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: "2 wrapa",
    ingredients: [
      "2 tortilje",
      "200g pilećeg filea, isečenog na tanke trake",
      "1 kašika soja sosa",
      "1 kašičica susamovog ulja",
      "1/2 kašičice đumbira, izrendanog",
      "1 čen belog luka, izgnječen",
      "1 šargarepa, isečena na tanke štapiće",
      "1/2 krastavca, isečenog na tanke štapiće",
      "1/2 crvene paprike, isečene na tanke trake",
      "50g kupusa, tanko isečenog",
      "2 mlada luka, iseckana",
      "Susam za posipanje (opciono)",
      "Slatko-kiseli sos ili Sriracha majonez (za serviranje)"
    ],
    instructions: [
      "Piletinu marinirati u soja sosu, susamovom ulju, đumbiru i belom luku najmanje 10 minuta.",
      "U tiganju ili voku zagrejati malo ulja i propržiti piletinu dok ne bude potpuno kuvana i blago karamelizovana. Izvaditi piletinu iz tiganja i ostaviti sa strane.",
      "Na toplu tortilju staviti sloj kupusa, šargarepe, krastavca i paprike.",
      "Preko povrća rasporediti prženu piletinu.",
      "Posuti sa mladim lukom i susamom (ako koristite).",
      "Zarolati tortilju čvrsto, savijajući krajeve prema unutra.",
      "Iseći wrap na pola i poslužiti sa slatko-kiselim sosom ili Sriracha majonezom."
    ],
    notes: [
      "Umesto piletine možete koristiti tofu ili škampe.",
      "Dodajte druge vrste povrća po želji (brokoli, grašak, itd.).",
      "Za pikantniji ukus dodajte malo čili pahuljica u marinadu."
    ],
    nutrition: {
      calories: "400-450",
      protein: "25-30g",
      fat: "15-20g",
      carbohydrates: "40-45g"
    }
  },
  {
    name: "Breakfast Wrap",
    description: "Ukusna i brza opcija za doručak, idealna za poneti.",
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: "1 wrap",
    ingredients: [
      "1 velika tortilja",
      "2 jaja",
      "1 kašika mleka ili pavlake za kuvanje",
      "1/4 kašičice soli",
      "1/8 kašičice bibera",
      "25g rendanog čedar sira (ili drugi sir po želji)",
      "2 trake pržene slanine, iseckane (opciono)",
      "1/4 avokada, iseckan (opciono)",
      "Ljuti sos (opciono)"
    ],
    instructions: [
      "Umutiti jaja, mleko (ili pavlaku), so i biber u činiji.",
      "Zagrejte tiganj na srednjoj temperaturi. Dodajte malo ulja ili putera.",
      "Sipajte umućena jaja u tiganj i kuvajte, mešajući povremeno, dok se jaja ne ispeku, ali ostanu mekana.",
      "Zagrejte tortilju (možete je zagrejati u suvom tiganju na kratko sa obe strane, u mikrotalasnoj pećnici nekoliko sekundi ili je umotati u vlažan papirni ubrus i zagrejati u mikrotalasnoj pećnici 10-15 sekundi).",
      "Stavite tortilju na ravnu površinu.",
      "Na sredinu tortilje rasporedite ispečena jaja.",
      "Pospite rendanim sirom preko jaja.",
      "Dodajte iseckanu slaninu i avokado, ako koristite.",
      "Prelijte sa malo ljutog sosa, ako želite.",
      "Presavijte strane tortilje prema unutra, a zatim čvrsto umotajte wrap počevši od donje strane.",
      "Možete wrap prepeći u tiganju nekoliko minuta sa svake strane da se zagreje i zapečati.",
      "Isecite wrap na pola i poslužite."
    ],
    notes: [
      "Možete dodati i drugo povrće po želji, kao što su iseckana paprika, luk ili spanać.",
      "Za vegetarijansku verziju, izostavite slaninu.",
      "Wrap možete pripremiti unapred i čuvati u frižideru, a zatim ga zagrejati pre posluživanja."
    ],
    nutrition: {
      calories: "350-450",
      protein: "20-25g",
      fat: "20-30g",
      carbohydrates: "25-35g"
    }
  },
  {
    name: "Protein Wrap",
    description: "Brz i jednostavan obrok bogat proteinima, idealan za poneti ili kao lagani ručak.",
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: "1 wrap",
    ingredients: [
      "1 velika tortilla (integralna po mogućnosti)",
      "100g grilovanog pilećeg filea (isečenog na tanke trake)",
      "1/4 avokada (isečen na kriške)",
      "50g humusa",
      "50g baby spanaća",
      "1/4 crvene paprike (iseckane)",
      "Sok od 1/4 limuna",
      "So i biber po ukusu"
    ],
    instructions: [
      "Tortilju stavite na ravnu površinu.",
      "Namažite tortilju humusom, ostavljajući oko 2 cm praznog prostora na rubovima.",
      "Preko humusa rasporedite baby spanać.",
      "Dodajte grilovanu piletinu, kriške avokada i iseckanu crvenu papriku.",
      "Poprskajte sokom od limuna.",
      "Posolite i pobiberite po ukusu.",
      "Pažljivo savijte tortilju. Preklopite krajeve prema unutra, a zatim čvrsto zarolajte.",
      "Presecite wrap na pola i poslužite odmah."
    ],
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su feta sir, krastavci ili paradajz.",
      "Umesto piletine, možete koristiti tofu ili tempeh za vegetarijansku verziju.",
      "Za bolji ukus, wrap možete blago zagrejati u tiganju ili grilu pre služenja."
    ],
    nutrition: {
      calories: "450-500",
      protein: "30-35g",
      fat: "20-25g",
      carbohydrates: "40-45g"
    }
  },
  {
    name: "Salmon Wrap",
    description: "Ovaj jednostavan i ukusan wrap je savršen za brzi ručak ili večeru. Sadrži losos, sveže povrće i kremasti sos, sve umotano u tortilju.",
    prepTime: "10 minuta",
    cookTime: "5 minuta",
    servings: "1 wrap",
    ingredients: [
      "1 tortilja (oko 25 cm prečnika)",
      "120g lososa (kuvanog ili pečenog)",
      "2 kašike krem sira",
      "1/4 krastavca (isečen na tanke štapiće)",
      "1/4 crvenog luka (tanko isečen)",
      "Šaka rukole ili spanaća",
      "1 kašičica soka od limuna",
      "So i biber po ukusu"
    ],
    instructions: [
      "Na tortilju ravnomerno nanesite krem sir, ostavljajući oko 2cm slobodno na rubovima.",
      "Lososa isecite na komade i rasporedite preko krem sira.",
      "Preko lososa rasporedite krastavac, crveni luk i rukolu (ili spanać).",
      "Poprskajte sokom od limuna.",
      "Posolite i pobiberite po ukusu.",
      "Pažljivo savijte tortilju: prvo preklopite donju ivicu prema sredini, zatim savijte bočne strane prema unutra i na kraju urolajte.",
      "Wrap možete poslužiti odmah ili ga nakratko zapeći u tiganju ili tosteru da se zagreje."
    ],
    notes: [
      "Možete koristiti dimljeni losos umesto kuvanog ili pečenog.",
      "Dodajte druge sastojke po želji, kao što su avokado, paradajz ili ljuti sos.",
      "Za vegetarijansku varijantu, losos zamenite grilovanim halumijem ili tofuom."
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "30g",
      fat: "25g",
      carbohydrates: "30g"
    }
  },
  {
    name: "Steak Wrap",
    description: "Hrskavi wrap pun sočnog bifteka, svežeg povrća i pikantnog sosa. Savršeno za brzi ručak ili večeru.",
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: "2 wrap-a",
    ingredients: [
      "2 tanka bifteka (oko 150g svaki)",
      "2 velike tortilje",
      "1 crvena paprika, isečena na tanke trape",
      "1/2 crvenog luka, tanko isečenog",
      "1 šaka rukole ili zelene salate",
      "50g rendanog čedar sira (ili drugog sira po želji)",
      "2 kašike maslinovog ulja",
      "1 kašičica dimljene paprike",
      "1/2 kašičice belog luka u prahu",
      "So i biber po ukusu",
      "Sos po izboru (čili, jogurt sos, majonez)"
    ],
    instructions: [
      "Biftek istucite da bude tanji. Pomešajte dimljenu papriku, beli luk u prahu, so i biber. Utrljajte smesu u biftek.",
      "Zagrejte maslinovo ulje u tiganju na srednje jakoj vatri. Pecite biftek 3-4 minuta sa svake strane, ili dok ne bude pečen po želji. Izvadite iz tiganja i ostavite da se odmori nekoliko minuta, a zatim ga isecite na tanke trake.",
      "U istom tiganju, propržite crvenu papriku i crveni luk dok ne omekšaju, oko 5 minuta.",
      "Zagrejte tortilje u suvom tiganju ili mikrotalasnoj pećnici dok ne postanu savitljive.",
      "Na svaku tortilju stavite rukolu (ili salatu), zatim proprženo povrće, isečeni biftek i rendani sir.",
      "Prelijte sosom po izboru.",
      "Umotajte tortilje. Možete ih kratko zapeći u tiganju da se sir otopi i wrap postane hrskav."
    ],
    notes: [
      "Za jači ukus, marinirajte biftek u mešavini maslinovog ulja, soja sosa i belog luka pre pečenja.",
      "Umesto čedar sira, možete koristiti mocarelu, gaudu ili neki drugi sir po vašem ukusu.",
      "Dodajte ljute papričice za pikantniju varijantu."
    ],
    nutrition: {
      calories: "550-650",
      protein: "35-45g",
      fat: "30-40g",
      carbohydrates: "40-50g"
    }
  },
  {
    name: "Hummus Wrap",
    description: "Brz i jednostavan obrok, idealan za ručak ili užinu. Ukusan, zdrav i lako se prilagođava različitim ukusima.",
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: "1 wrap",
    ingredients: [
      "1 tortilja (velika)",
      "2-3 kašike humusa",
      "1/4 krastavca, isečen na tanke kolutove",
      "1/4 crvene paprike, iseckana na trake",
      "Šaka bebi spanaća ili rukole",
      "5-6 maslina, isečene na kolutove (opciono)",
      "Sok od limuna (par kapi, opciono)",
      "Crni biber (po ukusu)"
    ],
    instructions: [
      "Tortilju položite na ravnu površinu.",
      "Humus ravnomerno rasporedite po tortilji, ostavljajući mali rub bez humusa sa jedne strane.",
      "Preko humusa rasporedite kolutove krastavca, trake paprike, spanać ili rukolu i kolutove maslina (ako koristite).",
      "Poprskajte sa nekoliko kapi limunovog soka (opciono).",
      "Pobiberite po ukusu.",
      "Pažljivo savijte tortilju, prvo preklopite bočne strane prema unutra, a zatim čvrsto zarolajte od donjeg ruba prema gore.",
      "Wrap presecite na pola pre serviranja (opciono)."
    ],
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su avokado, šargarepa, feta sir, pečena piletina ili falafel.",
      "Za pikantniji ukus dodajte malo ljutog sosa ili čili pahuljica.",
      "Wrap se može pripremiti unapred i čuvati u frižideru, ali ga je najbolje pojesti istog dana."
    ],
    nutrition: {
      calories: "300-400",
      protein: "10-15g",
      fat: "15-20g",
      carbohydrates: "30-40g"
    }
  },
  {
    name: "Avocado Wrap",
    description: "Brz i ukusan obrok, idealan za poneti.",
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: "1 wrap",
    ingredients: [
      "1 velika tortilla",
      "1/2 avokada, zgnječenog",
      "1/4 šolje humusa",
      "1/4 šolje iseckanog paradajza",
      "1/4 šolje iseckanog krastavca",
      "1/4 šolje iseckane crvene paprike",
      "1/4 šolje iseckanog crvenog luka (opciono)",
      "Rukola ili spanać",
      "So i biber po ukusu"
    ],
    instructions: [
      "Tortilju položite na ravnu površinu.",
      "Ravnomerno nanesite humus preko cele tortilje.",
      "Preko humusa rasporedite zgnječeni avokado.",
      "Dodajte iseckani paradajz, krastavac, papriku i crveni luk (ako koristite).",
      "Dodajte rukolu ili spanać.",
      "Pospite solju i biberom po ukusu.",
      "Čvrsto umotajte tortilju.",
      "Presecite wrap na pola i poslužite odmah."
    ],
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su feta sir, masline ili pečena piletina.",
      "Za pikantniju verziju, dodajte malo ljutog sosa.",
      "Wrap možete pripremiti unapred i držati u frižideru do serviranja."
    ],
    nutrition: {
      calories: "400-500",
      protein: "15-20g",
      fat: "25-30g",
      carbohydrates: "30-40g"
    }
  },
  {
    name: "Spinach Wrap",
    description: "Brz i jednostavan obrok ili užina punjena svežim spanaćem i povrćem. Idealno za poneti.",
    prepTime: "10 minuta",
    cookTime: "0 minuta",
    servings: "1 wrap",
    ingredients: [
      "1 velika tortilla (pšenična ili integralna)",
      "1/2 šolje svežeg spanaća, opranog i osušenog",
      "1/4 šolje humus",
      "1/4 šolje narendane šargarepe",
      "1/4 šolje iseckanog krastavca",
      "1/4 šolje iseckane paprike (crvena ili žuta)",
      "2 kašike izmrvljenog feta sira (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Tortilju stavite na čistu radnu površinu.",
      "Ravnomerno namažite humus po celoj tortilji, ostavljajući mali prostor na ivicama.",
      "Preko humusa ravnomerno rasporedite spanać.",
      "Poredjajte narendanu šargarepu, iseckani krastavac i iseckanu papriku preko spanaća.",
      "Ako koristite, pospite izmrvljeni feta sir preko povrća.",
      "Začinite sa malo soli i bibera po ukusu.",
      "Pažljivo savijte stranice tortilje prema unutra, a zatim čvrsto urolajte od jednog kraja do drugog.",
      "Wrap možete odmah poslužiti ili ga umotati u papir za pečenje i čuvati u frižideru do posluženja.",
      "Pre posluženja, wrap možete preseći na pola."
    ],
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su avokado, klice, ili kuvana piletina/tofu za dodatan protein.",
      "Za pikantniji ukus, dodajte malo ljutog sosa ili sriracha.",
      "Tortilju možete zagrejati u tiganju ili mikrotalasnoj pećnici pre filovanja."
    ],
    nutrition: {
      calories: "300-400",
      protein: "10-15g",
      fat: "15-20g",
      carbohydrates: "35-45g"
    }
  },
  {
    name: "Chicken Salad Wrap",
    description: "Osvežavajuća i ukusna salata od piletine u tortilji, savršena za brz ručak ili laganu večeru.",
    prepTime: "15 minuta",
    cookTime: "15-20 minuta (za piletinu)",
    servings: "2 wrap-a",
    ingredients: [
      "2 pileća fileta (oko 300g)",
      "1 kašika maslinovog ulja",
      "So i biber po ukusu",
      "1/4 šolje majoneza",
      "2 kašike grčkog jogurta",
      "1/4 šolje seckanog celera",
      "1/4 šolje seckanog crvenog luka",
      "2 kašike seckanog svežeg peršuna",
      "Sok od 1/2 limuna",
      "2 velike tortilje",
      "Zelena salata ili spanać (po želji)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C (ili propržite piletinu na tiganju).",
      "Pileće filete premažite maslinovim uljem, posolite i pobiberite.",
      "Pecite u rerni 15-20 minuta, ili dok piletina ne bude skroz pečena i više nije roza u sredini.",
      "Ostavite piletinu da se ohladi, a zatim je isecite na male kockice ili je iskidajte viljuškom.",
      "U velikoj činiji pomešajte iseckanu piletinu, majonez, grčki jogurt, celer, crveni luk, peršun i limunov sok. Dobro promešajte.",
      "Probajte i dodajte so i biber po ukusu.",
      "Zagrejte tortilje kratko na suvom tiganju ili u mikrotalasnoj pećnici kako bi bile mekše i lakše za savijanje.",
      "Rasporedite zelenu salatu (ili spanać) preko svake tortilje.",
      "Stavite polovinu salate od piletine preko zelene salate.",
      "Savijte tortilju u wrap.",
      "Presecite wrap na pola i odmah poslužite."
    ],
    notes: [
      "Možete dodati i druge sastojke u salatu od piletine, kao što su grožđe, orasi ili kari u prahu.",
      "Umesto grčkog jogurta možete koristiti samo majonez, ali će biti kaloričnije.",
      "Za pikantniju verziju dodajte malo ljute paprike ili sriracha sos."
    ],
    nutrition: {
      calories: "450-550",
      protein: "30-40g",
      fat: "20-30g",
      carbohydrates: "30-40g"
    }
  },
  {
    name: "BLT Wrap",
    description: "Osvežavajući i brz obrok, savršen za poneti ili lagani ručak.",
    prepTime: "10 minuta",
    cookTime: "5 minuta",
    servings: "2 wraps",
    ingredients: [
      "4 kriške slanine",
      "2 velike tortilje",
      "1/2 šolje majoneza",
      "4 lista zelene salate (npr. ajsberg)",
      "1 paradajz, isečen na tanke kriške",
      "So i biber po ukusu"
    ],
    instructions: [
      "Slaninu ispržiti u tiganju dok ne postane hrskava. Izvaditi je iz tiganja i staviti na papirni ubrus da se ocedi višak masnoće. Iseckati na manje komade.",
      "Svaku tortilju premazati sa 1/4 šolje majoneza.",
      "Na svaku tortilju staviti 2 lista zelene salate.",
      "Preko zelene salate rasporediti kriške paradajza.",
      "Dodati iseckanu slaninu.",
      "Začiniti solju i biberom po ukusu.",
      "Uviti tortilje u wrap.",
      "Servirati odmah ili ih umotati u foliju i poneti sa sobom."
    ],
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su avokado, luk ili sir.",
      "Za pikantniji ukus, koristite majonez sa čilijem.",
      "Tortilje možete blago zagrejati u tiganju pre filovanja da bi bile mekše i lakše za uvijanje."
    ],
    nutrition: {
      calories: "450-550",
      protein: "15-20g",
      fat: "30-40g",
      carbohydrates: "25-35g"
    }
  }
];

export const getWrapRecipe = (wrapName: string): Recipe | undefined => {
  return wrapsRecipes.find(recipe => 
    recipe.name.toLowerCase().includes(wrapName.toLowerCase()) ||
    wrapName.toLowerCase().includes(recipe.name.toLowerCase())
  );
};