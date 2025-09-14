import { glutenFreeRecipes } from './gluten-free-recipes';
import { greekRecipes } from './greek-recipes';
import { halalRecipes } from './halal-recipes';
import { healthyRecipes } from './healthy-recipes';
import { italianRecipes } from './italian-recipes';
import { serbianRecipes } from './serbian-recipes';
import { lunchRecipes } from './lunch-recipes';
import { mediterraneanRecipes } from './mediterranean-recipes';
import { veganRecipes } from './vegan-recipes';
import { waffleRecipes } from './waffle-recipes';

export interface Recipe {
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  nutrition?: any;
  notes?: string[];
}

export const recipes: Record<string, Recipe> = {
  ...glutenFreeRecipes,
  ...greekRecipes,
  ...halalRecipes,
  ...healthyRecipes,
  ...italianRecipes,
  ...serbianRecipes,
  ...lunchRecipes,
  ...mediterraneanRecipes,
  ...veganRecipes,
  ...waffleRecipes,
  // African
  "Durban": {
    name: "Durban",
    ingredients: ["4 pileća bataka bez kostiju", "300g kozica", "2 šolje pirinča", "1 crni luk", "2 paprike", "začini", "kokosovo mleko", "đumbir"],
    instructions: ["Začini pileće batake", "Grilluj batake do zlatne boje", "Očisti kozice", "Pripremi pirinač sa začinima", "Sjedini sve sastojke", "Poslužiti toplo"],
    prepTime: "25 min",
    cookTime: "35 min",
    servings: 4
  },
  "Espetada": {
    name: "Espetada",
    ingredients: ["600g pilećeg mesa", "2 kašike maslinovog ulja", "3 čena belog luka", "lovorov list", "so i biber", "limun", "drveni ražnjevi"],
    instructions: ["Iseci piletinu na kockice", "Mariniraj sa uljem i začinima", "Nareži na ražnjeve", "Grilluj 15-20 minuta", "Okreći često", "Služi sa limunom"],
    prepTime: "20 min",
    cookTime: "20 min",
    servings: 4
  },
  "Batak obrok": {
    name: "Batak obrok",
    ingredients: ["4 pileća bataka", "1/2 glavice kupusa", "2 šargarepe", "hleb", "majonez", "sirće", "so", "začini za roštilj"],
    instructions: ["Začini batake", "Grilluj batake 25-30 minuta", "Napravi salatu od kupusa", "Iseci hleb", "Složi obrok", "Poslužiti sa salatom"],
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4
  },
  "Piletina i pirinač": {
    name: "Piletina i pirinač", 
    ingredients: ["500g pilećeg fileta", "2 šolje O'porto pirinča", "1 crni luk", "2 paprike", "paradajz", "začini", "maslinovo ulje"],
    instructions: ["Začini i grilluj pileći file", "Skuvaj O'porto pirinač", "Dinštaj povrće", "Iseci piletinu", "Složi sa pirinčem", "Ukrasi povrćem"],
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 4
  },
  "Piletina i povrće": {
    name: "Piletina i povrće",
    ingredients: ["500g pilećeg fileta", "2 šolje O'porto pirinča", "brokoli", "šargarepa", "tikvice", "paprika", "začini", "maslinovo ulje"],
    instructions: ["Grilluj pileći file", "Skuvaj O'porto pirinač", "Iseci povrće", "Dinštaj povrće", "Složi sve na tanjiru", "Začini i poslužiti"],
    prepTime: "25 min",
    cookTime: "30 min",
    servings: 4
  },
  "Galibowl": {
    name: "Galibowl",
    ingredients: ["300g spanaća", "1 šolja čili pasulja", "400g grilovane piletine", "1.5 šolje pirinča", "avokado", "limun", "začini", "maslinovo ulje"],
    instructions: ["Skuvaj pirinač", "Grilluj piletinu", "Pripremi čili pasulj", "Očisti spanać", "Složi sve u činiju", "Dodaj avokado i limun"],
    prepTime: "30 min",
    cookTime: "35 min",
    servings: 4
  },
  "Pileća džigerica i pirinač": {
    name: "Pileća džigerica i pirinač",
    ingredients: ["500g pileće džigerice", "2 šolje O'porto pirinča", "šišebo sos", "crni luk", "beli luk", "đumbir", "soja sos", "maslinovo ulje"],
    instructions: ["Očisti džigericu", "Mariniraj u šišebo sosu", "Prži džigericu", "Skuvaj O'porto pirinač", "Dodaj začine", "Složi i poslužiti"],
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 4
  },
  "Combotada": {
    name: "Combotada",
    ingredients: ["500g mešanog mesa", "pirinač", "različito povrće", "salata", "hleb", "različiti sosovi", "začini", "prilozi po izboru"],
    instructions: ["Pripremi različite vrste mesa", "Skuvaj pirinač", "Pripremi salate", "Napravi sosove", "Složi veliko kombinovano jelo", "Poslužiti porodično"],
    prepTime: "45 min",
    cookTime: "60 min",
    servings: 8
  },

  // American
  "Mac and Cheese": {
    name: "Makaroni sa sirom",
    ingredients: ["450g makarona", "6 kašika putera", "6 kašika brašna", "3 šolje mleka", "1/2 kašičice soli", "1/4 kašičice bibera", "1/4 kašičice mlevene slačice", "450g narendanog čedar sira"],
    instructions: ["Zagrejte rernu na 175°C", "Skuvajte makarone prema uputstvu", "Otopite puter u šerpi", "Dodajte brašno i mešajte dok se ne formira pasta", "Postepeno dodajte mleko, neprestano mešajući", "Kuvajte dok se sos ne zgusne", "Dodajte začine i sir", "Pomešajte sa makaronama", "Sipajte u posudu za pečenje", "Pecite 20 minuta"],
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 5
  },
  "BBQ Ribs": {
    name: "BBQ rebra",
    ingredients: ["2 kg svinjskih rebara", "2 kašike maslinovog ulja", "2 kašike slatke aleve paprike", "1 kašika belog luka u prahu", "1 kašika luka u prahu", "1 kašika dimljene paprike", "1 kašika braon šećera", "1 kašičica soli", "1/2 kašičice crnog bibera", "500 ml BBQ sosa", "100 ml jabukovog sirćeta"],
    instructions: ["Uklonite opnu sa rebara", "Pomešajte sve začine", "Premažite rebra uljem i začinima", "Pripremite roštilj na 120-135°C", "Pecite rebra 2-3 sata", "Poslednjih 30 minuta premažite BBQ sosom", "Ostavite da odstoje 10 minuta", "Isecite i poslužite"],
    prepTime: "20 min",
    cookTime: "180 min",
    servings: 5
  },
  
  // Chicken Recipes
  "Pileći file": {
    name: "Pileći file",
    ingredients: [
      "2 pileća filea (oko 300g)",
      "2 kašike maslinovog ulja",
      "1/2 kašičice mlevene paprike (slatke ili ljute, po ukusu)",
      "1/4 kašičice belog luka u prahu",
      "So po ukusu",
      "Biber po ukusu",
      "Sveži peršun (za posipanje, opciono)"
    ],
    instructions: [
      "Pileće filee operite i osušite papirnim ubrusom.",
      "U manjoj posudi pomešajte maslinovo ulje, mlevenu papriku, beli luk u prahu, so i biber.",
      "Premažite pileće filee sa svih strana pripremljenom smesom.",
      "Zagrejte tiganj na srednjoj vatri.",
      "Stavite pileće filee u zagrejan tiganj i pecite oko 6-8 minuta sa svake strane, ili dok ne budu potpuno pečeni i zlatno braon boje. Proverite da li je unutrašnjost pečena.",
      "Izvadite filee iz tiganja i ostavite da odstoje nekoliko minuta pre sečenja.",
      "Isecite filee na kriške (opciono).",
      "Poslužite toplo, posuto svežim peršunom (opciono)."
    ],
    prepTime: "5 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Pileće batake": {
    name: "Pileće batake",
    ingredients: [
      "4 pileća bataka",
      "2 kašike maslinovog ulja",
      "1 kašičica mlevene paprike",
      "1/2 kašičice belog luka u prahu",
      "1/2 kašičice crnog luka u prahu",
      "1/2 kašičice sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U manjoj posudi pomešajte maslinovo ulje, mlevenu papriku, beli luk u prahu, crni luk u prahu, origano, so i biber.",
      "Pileće batake dobro osušite papirnim ubrusima.",
      "Premazati batake sa svih strana pripremljenom smesom.",
      "Stavite batake u vatrostalnu posudu ili na pleh obložen papirom za pečenje.",
      "Pecite u zagrejanoj rerni 45 minuta ili dok bataci ne budu pečeni, a sokovi koji izlaze budu bistri.",
      "Izvadite iz rerne i ostavite da odstoje nekoliko minuta pre serviranja."
    ],
    prepTime: "10 minuta",
    cookTime: "45 minuta",
    servings: 4
  },

  "Pileće krile": {
    name: "Pileće krile",
    ingredients: [
      "1 kg pilećih krilca",
      "2 kašike maslinovog ulja",
      "1 kašičica belog luka u prahu",
      "1 kašičica slatke mlevene paprike",
      "1/2 kašičice ljute mlevene paprike (opciono)",
      "1 kašičica origana",
      "1/2 kašičice bibera",
      "1 kašičica soli"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U velikoj posudi pomešajte maslinovo ulje, beli luk u prahu, slatku papriku, ljutu papriku (ako koristite), origano, biber i so.",
      "Dodajte pileća krilca u posudu i dobro ih promešajte da budu obložena začinima.",
      "Poređajte krilca u jednom sloju na pleh obložen papirom za pečenje.",
      "Pecite u zagrejanoj rerni 30 minuta, ili dok ne porumene i budu pečena. Okrenite krilca na pola pečenja.",
      "Izvadite iz rerne i poslužite toplo."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "Pileći šnicl": {
    name: "Pileći šnicl",
    ingredients: [
      "4 pileća prsa, bez kostiju i kože",
      "1/2 šolje brašna",
      "2 jaja, umućena",
      "1 šolja prezli",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "1/4 šolje biljnog ulja za prženje"
    ],
    instructions: [
      "Pileća prsa istanjiti između dva sloja plastične folije pomoću bat-a za meso, da budu debljine oko 1 cm.",
      "U tri odvojene posude staviti brašno, umućena jaja i prezle.",
      "U brašno dodati so i biber i izmešati.",
      "Svaki šnicl prvo uvaljati u brašno, zatim u jaja, a na kraju u prezle, pazeći da su ravnomerno prekriveni.",
      "U velikom tiganju zagrejati ulje na srednjoj vatri.",
      "Pržiti šnicle 4-5 minuta sa svake strane, dok ne postanu zlatno smeđe i dok se ne ispeku u potpunosti.",
      "Izvaditi šnicle iz tiganja i staviti na papirni ubrus da se ocede od viška ulja.",
      "Poslužiti toplo uz prilog po želji."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Chicken Tikka": {
    name: "Pileći Tikka",
    ingredients: [
      "500g pilećeg filea, isečenog na kockice veličine zalogaja",
      "170g običnog jogurta",
      "2 kašike limunovog soka",
      "2 kašike paste od đumbira i belog luka",
      "1 kašičica garam masale",
      "1 kašičica kurkume",
      "1 kašičica mlevenog korijandera",
      "1/2 kašičice mlevenog kumina",
      "1/2 kašičice čilija u prahu (ili više, po ukusu)",
      "1/2 kašičice crnog bibera",
      "1 kašičica soli",
      "2 kašike biljnog ulja",
      "Sveži korijander, za ukrašavanje (opciono)",
      "Kriške limuna, za serviranje (opciono)"
    ],
    instructions: [
      "U velikoj posudi pomešajte jogurt, limunov sok, pastu od đumbira i belog luka, garam masalu, kurkumu, korijander, kumin, čili u prahu, biber i so.",
      "Dodajte komade piletine u marinadu i dobro promešajte da se meso obloži.",
      "Pokrijte posudu i stavite u frižider da se marinira najmanje 2 sata, a idealno preko noći.",
      "Zagrejte rernu na 220°C (425°F).",
      "Nanižite komade piletine na metalne ili drvene ražnjiće (ako koristite drvene, potopite ih u vodu 30 minuta pre toga).",
      "Premažite piletinu biljnim uljem.",
      "Pecite u rerni 20-25 minuta, ili dok piletina ne bude pečena i blago pougljena na ivicama. Možete i da grilujete, okrećući ražnjiće s vremena na vreme.",
      "Poslužite toplo, ukrašeno svežim korijanderom i sa kriškama limuna (opciono)."
    ],
    prepTime: "30 minuta",
    cookTime: "20-25 minuta",
    servings: 4
  },

  "Buffalo Wings Premium": {
    name: "Buffalo krilca",
    ingredients: [
      "1.5 kg pilećih krilca",
      "1 kašika soli",
      "1/2 kašičice crnog bibera",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice kajenskog bibera (opciono, za dodatnu ljutinu)",
      "120 ml ljutog sosa (npr. Frank's RedHot)",
      "60 g neslanog putera, istopljenog",
      "1 kašika belog vinskog sirćeta",
      "1/2 kašičice Vorčester sos",
      "1/4 kašičice belog luka u prahu (dodatno, za sos)",
      "Sos od plavog sira ili ranč dresing za serviranje (opciono)",
      "Celer i šargarepa štapići za serviranje (opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C (400°F). Pripremite pleh za pečenje obložen papirom za pečenje.",
      "Operite i osušite pileća krilca. Ako želite, odsecite vrhove krila i bacite ih ili sačuvajte za pripremu supe.",
      "U velikoj činiji, pomešajte krilca sa solju, biberom, belim lukom u prahu i kajenskim biberom (ako koristite). Dobro promešajte da se krilca ravnomerno oblože začinima.",
      "Rasporedite krilca u jednom sloju na pripremljeni pleh.",
      "Pecite u zagrejanoj rerni 25-30 minuta, ili dok krilca ne budu zlatno smeđa i pečena. Preokrenite krilca na pola pečenja da se ravnomerno ispeku.",
      "Dok se krilca peku, pripremite sos. U maloj činiji pomešajte ljuti sos, istopljeni puter, belo vinsko sirće, Vorčester sos i beli luk u prahu. Dobro promešajte.",
      "Kada su krilca gotova, izvadite ih iz rerne i stavite u veliku činiju.",
      "Prelijte krilca pripremljenim sosom i dobro promešajte da se krilca ravnomerno oblože sosom.",
      "Servirajte odmah sa sosom od plavog sira ili ranč dresingom, celerom i šargarepom (opciono)."
    ],
    prepTime: "15 minuta",
    cookTime: "25-30 minuta",
    servings: 4
  },

  "Chicken Teriyaki": {
    name: "Pileći Teriyaki",
    ingredients: [
      "600g pilećeg filea, isečenog na kockice",
      "2 kašike ulja (suncokretovo ili biljno)",
      "1/2 šolje soja sosa",
      "1/4 šolje mirina (ili slatkog vina)",
      "2 kašike šećera (beli ili braon)",
      "1 kašika meda",
      "1 kašičica mlevenog đumbira",
      "1 čen belog luka, izgnječen",
      "1 kašika kukuruznog skroba",
      "2 kašike vode",
      "Susam za posipanje (opciono)",
      "Mladi luk, iseckan za posipanje (opciono)"
    ],
    instructions: [
      "U maloj posudi pomešajte soja sos, mirin, šećer, med, đumbir i beli luk. Dobro promešajte dok se šećer ne rastopi.",
      "U drugoj maloj posudi pomešajte kukuruzni skrob i vodu dok ne dobijete glatku smesu.",
      "Zagrejte ulje u velikom tiganju ili voku na srednje jakoj vatri.",
      "Dodajte piletinu u tiganj i pržite dok ne porumeni sa svih strana i bude skroz kuvana, oko 5-7 minuta.",
      "Smanjite vatru na nisku.",
      "Dodajte sos od soja sosa u tiganj sa piletinom. Promešajte da se piletina obloži sosom.",
      "Dodajte smesu kukuruznog skroba i vode u tiganj. Promešajte i kuvajte dok se sos ne zgusne, oko 2-3 minuta.",
      "Sklonite sa vatre.",
      "Poslužite toplo preko pirinča.",
      "Pospite susamom i mladim lukom (ako koristite)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Chicken Alfredo": {
    name: "Pileći Alfredo",
    ingredients: [
      "400g pilecih grudi, isecenih na kockice",
      "400g fettuccine ili drugih testenina po zelji",
      "2 kasike maslinovog ulja",
      "2 cena belog luka, sitno iseckana",
      "1 casa pavlake za kuvanje (36% m.m.)",
      "1/2 case rendanog parmezana",
      "1/4 case putera",
      "So i biber po ukusu",
      "Svezi persun, iseckan (za dekoraciju)"
    ],
    instructions: [
      "Skuvati testeninu prema uputstvima na pakovanju. Procediti i ostaviti sa strane.",
      "U velikom tiganju, zagrejati maslinovo ulje na srednjoj vatri.",
      "Dodati komadice piletine i prziti dok ne porumene i budu peceni (oko 7-10 minuta). Zaciniti sa soli i biberom.",
      "Izvaditi piletinu iz tiganja i ostaviti sa strane.",
      "U isti tiganj, dodati puter i istopiti ga.",
      "Dodati sitno iseckani beli luk i prziti ga oko 1 minut, dok ne zamirise.",
      "Smanjiti vatru i uliti pavlaku za kuvanje. Pustiti da se krcka, ali ne da provri.",
      "Dodati rendani parmezan i mesati dok se sos ne zgusne i sir ne otopi.",
      "Vratiti pecenu piletinu u tiganj sa sosom.",
      "Dodati skuvanu testeninu u tiganj i dobro promesati da se testenina oblozi sosom.",
      "Servirati odmah, posuti sa sveze iseckanim persunom."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Kung Pao Chicken Premium": {
    name: "Kung Pao piletina",
    ingredients: [
      "500g pilećeg filea, isečenog na kockice",
      "2 kašike soja sosa",
      "1 kašika kukuruznog skroba",
      "1 kašika pirinčanog vina (ili suvog šerija)",
      "1 kašičica belog luka u prahu",
      "1/2 kašičice mlevenog đumbira",
      "2 kašike ulja od kikirikija (ili biljnog ulja)",
      "1 šolja kikirikija, pečenog i neslanog",
      "1/2 šolje suvih čili papričica, isečenih na komade (po ukusu)",
      "3 zelena luka, iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 komad đumbira (oko 2cm), sitno iseckan"
    ],
    instructions: [
      "U činiji pomešajte piletinu sa 2 kašike soja sosa, kukuruznim skrobom, pirinčanim vinom, belim lukom u prahu i mlevenim đumbirom. Ostavite da se marinira 15 minuta.",
      "U maloj činiji pomešajte sve sastojke za sos i ostavite sa strane.",
      "Zagrejte ulje u voku ili velikom tiganju na visokoj temperaturi.",
      "Dodajte mariniranu piletinu i pržite dok ne dobije zlatnu boju i bude kuvana (oko 5-7 minuta). Izvadite piletinu iz tiganja i ostavite sa strane.",
      "U isti tiganj dodajte suve čili papričice i pržite nekoliko sekundi dok ne zamirišu (pazite da ne izgore).",
      "Dodajte beli luk i đumbir, i pržite 30 sekundi.",
      "U tiganj vratite piletinu.",
      "Sipajte sos i mešajte dok se sos ne zgusne (oko 1-2 minuta).",
      "Dodajte kikiriki i zeleni luk. Promešajte i sklonite sa vatre.",
      "Poslužite toplo uz kuvani pirinač."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Fried Chicken Premium": {
    name: "Pržena piletina",
    ingredients: [
      "1.5 kg pilećeg mesa (bataci, karabataci, krilca, pileća prsa isečena na komade)",
      "2 šolje brašna",
      "2 kašičice soli",
      "1 kašičica bibera",
      "1 kašičica belog luka u prahu",
      "1 kašičica aleve paprike",
      "1/2 kašičice kajenske paprike (opciono)",
      "2 velika jaja",
      "1 šolja mleka",
      "Biljno ulje, za prženje"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, so, biber, beli luk u prahu, alevu papriku i kajensku papriku (ako se koristi).",
      "U drugoj posudi umutiti jaja sa mlekom.",
      "Svaki komad piletine umočiti u smesu sa jajima i mlekom, a zatim ga uvaljati u smesu sa brašnom, pazeći da bude potpuno prekriven.",
      "U velikom tiganju ili fritezi zagrejati biljno ulje na srednje jakoj vatri (oko 175°C). Ulje treba da bude dovoljno duboko da prekrije piletinu.",
      "Pažljivo stavljati komade piletine u vrelo ulje, pazeći da se ne pretrpava tiganj.",
      "Pržiti piletinu 6-8 minuta sa svake strane, ili dok ne dobije zlatno smeđu boju i dok unutrašnjost ne bude potpuno kuvana (unutrašnja temperatura treba da bude 74°C).",
      "Izvaditi piletinu iz tiganja i staviti je na tanjir obložen papirnim ubrusima da se ocedi višak ulja.",
      "Poslužiti toplo."
    ],
    prepTime: "20 minuta",
    cookTime: "20-25 minuta",
    servings: 4
  },

  "Chicken Parmesan": {
    name: "Chicken Parmesan",
    ingredients: [
      "4 pileća prsa, bez kostiju i kože",
      "1/2 šolje brašna",
      "2 velika jaja, umućena",
      "1 šolja prezli",
      "1/2 šolje rendanog parmezana",
      "1 kašičica italijanskog začina",
      "1/2 kašičice belog luka u prahu",
      "So i biber po ukusu",
      "1/4 šolje maslinovog ulja",
      "700g pasiranog paradajza",
      "1 kašičica šećera",
      "1/2 kašičice suvog origana",
      "200g mocarele, isečene na kriške",
      "Svež bosiljak, za ukrašavanje (opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 190°C.",
      "Pripremite tri tanjira: jedan sa brašnom, jedan sa umućenim jajima, i jedan sa prezlama, parmezanom, italijanskim začinom, belim lukom u prahu, soli i biberom.",
      "Pileća prsa istanjite na debljinu od oko 1 cm.",
      "Svako pileće prso prvo uvaljajte u brašno, zatim u jaje, a potom u smesu sa prezlama, osiguravajući da bude potpuno prekriveno.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Pecite pileća prsa 3-4 minuta sa svake strane, dok ne dobiju zlatno smeđu boju.",
      "U posudu za pečenje sipajte malo pasiranog paradajza.",
      "Poređajte pečena pileća prsa preko paradajza.",
      "Prelijte svako prso preostalim pasiranin paradajzom. Dodajte šećer i origano u sos.",
      "Pokrijte svako prso kriškama mocarele.",
      "Pecite u rerni 15-20 minuta, ili dok se mocarela ne istopi i blago ne porumeni.",
      "Ukrasite svežim bosiljkom (opciono)."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "Chicken Fajitas": {
    name: "Chicken Fajitas",
    ingredients: [
      "600g pilećeg filea, isečenog na trake",
      "1 veliki crni luk, isečen na trake",
      "2 paprike (različitih boja), isečene na trake",
      "2 kašike maslinovog ulja",
      "1 kesica začina za fajitas (ili kombinacija: čili u prahu, kumin, paprika, beli luk u prahu, origano, so, biber)",
      "1 limeta, sok",
      "Tortilje",
      "Omiljeni dodaci: salsa, pavlaka, guacamole, rendani sir"
    ],
    instructions: [
      "U velikoj posudi, pomešajte pileće trake sa začinom za fajitas i sokom od limete. Dobro promešajte i ostavite da se marinira najmanje 15 minuta.",
      "U velikom tiganju ili voku, zagrejte maslinovo ulje na srednje jakoj vatri.",
      "Dodajte luk i paprike u tiganj i dinstajte ih dok ne omekšaju, oko 5-7 minuta.",
      "Izvadite luk i paprike iz tiganja i stavite ih na stranu.",
      "U isti tiganj dodajte marinirane pileće trake. Kuvajte ih dok ne porumene i budu skroz pečene, oko 8-10 minuta.",
      "Vratite luk i paprike u tiganj sa piletinom i promešajte. Kuvajte još 2-3 minuta da se sve sjedini.",
      "Zagrejte tortilje prema uputstvu na pakovanju.",
      "Poslužite pileće fajitas sa toplim tortiljama i omiljenim dodacima."
    ],
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Grilled Chicken Premium": {
    name: "Grilled Chicken",
    ingredients: [
      "4 komada pilećeg filea (oko 150g svaki)",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "1 kašičica belog luka u prahu",
      "1 kašičica slatke paprike",
      "½ kašičice sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "U maloj činiji, pomešati maslinovo ulje, limunov sok, beli luk u prahu, slatku papriku, origano, so i biber.",
      "Pileće filee staviti u kesu sa zip zatvaračem ili posudu. Preliti marinadom, osiguravajući da su svi komadi dobro premazani.",
      "Ostaviti da se marinira najmanje 15 minuta, ili do 2 sata u frižideru.",
      "Zagrejte roštilj na srednju temperaturu (oko 180-200°C).",
      "Izvadite piletinu iz marinade i obrišite višak marinade.",
      "Stavite pileće filee na roštilj.",
      "Pecite 6-8 minuta sa svake strane, ili dok unutrašnja temperatura ne dostigne 74°C (165°F).",
      "Izvadite piletinu sa roštilja i ostavite da odstoji 5 minuta pre serviranja."
    ],
    prepTime: "15 minuta",
    cookTime: "20-25 minuta",
    servings: 4
  },

  "Chicken Curry Premium": {
    name: "Chicken Curry",
    ingredients: [
      "500g pilećeg filea, isečenog na kockice",
      "1 veliki luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 komad đumbira (oko 2cm), sitno izrendan",
      "2 kašike biljnog ulja",
      "1 kašika kari praha",
      "1/2 kašičice kurkume",
      "1/4 kašičice čili praha (opciono)",
      "400g seckanog paradajza iz konzerve",
      "200ml kokosovog mleka",
      "100ml pilećeg bujona",
      "So i biber po ukusu",
      "Sveži korijander, za ukrašavanje (opciono)",
      "Pirinač, za serviranje"
    ],
    instructions: [
      "U velikom tiganju ili šerpi zagrejte biljno ulje na srednjoj vatri.",
      "Dodajte luk i pržite dok ne postane staklast, oko 5 minuta.",
      "Dodajte beli luk i đumbir, i pržite još 1 minut, dok ne zamiriše.",
      "Dodajte kari prah, kurkumu i čili prah (ako koristite), i pržite još 30 sekundi, neprestano mešajući.",
      "Dodajte komade piletine i pržite dok ne porumene sa svih strana.",
      "Dodajte seckani paradajz, kokosovo mleko i pileći bujon.",
      "Promešajte, posolite i pobiberite po ukusu.",
      "Smanjite vatru, poklopite i kuvajte 25-30 minuta, ili dok piletina ne bude potpuno kuvana i sos se zgusne.",
      "Probajte i po potrebi dodajte još soli ili začina.",
      "Poslužite toplo uz kuvani pirinač i ukrasite svežim korijanderom (ako koristite)."
    ],
    prepTime: "15 minuta",
    cookTime: "35 minuta",
    servings: 4
  },

  "Chicken Marsala": {
    name: "Chicken Marsala",
    ingredients: [
      "4 pileća fileta (oko 150g svaki)",
      "1/2 šolje brašna",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "4 kašike maslinovog ulja",
      "225g pečuraka (šampinjoni, iseckane)",
      "2 čena belog luka (sitno iseckana)",
      "3/4 šolje Marsala vina",
      "1/2 šolje pileće supe",
      "2 kašike putera",
      "2 kašike svežeg peršuna (iseckanog)"
    ],
    instructions: [
      "Pomešajte brašno, so i biber u plitkoj posudi.",
      "Uvaljajte pileće filete u brašno, otresite višak.",
      "Zagrejte 2 kašike maslinovog ulja u velikom tiganju na srednjoj vatri.",
      "Pržite pileće filete 3-4 minuta sa svake strane, dok ne porumene i budu skroz pečeni. Izvadite iz tiganja i stavite na tanjir.",
      "Dodajte preostale 2 kašike maslinovog ulja u tiganj. Dodajte iseckane pečurke i beli luk. Kuvajte dok pečurke ne omekšaju i porumene, oko 5-7 minuta.",
      "Sipajte Marsala vino u tiganj i pustite da provri, skidajući sve ostatke sa dna tiganja.",
      "Dodajte pileću supu i pustite da se sos krčka 5 minuta, dok se malo ne zgusne.",
      "Umešajte puter u sos dok se ne otopi.",
      "Vratite pileće filete u tiganj i prelijte ih sosom.",
      "Kuvajte još 2-3 minuta, dok se piletina ne zagreje.",
      "Pospite iseckanim peršunom i poslužite toplo."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Chicken Kiev": {
    name: "Chicken Kiev",
    ingredients: [
      "2 pileća filea (oko 150g svaki)",
      "100g neslanog putera, omekšalog",
      "2 čena belog luka, sitno iseckana",
      "2 kašike svežeg peršuna, sitno iseckanog",
      "1 kašika svežeg vlašca, sitno iseckanog (opciono)",
      "So i biber po ukusu",
      "1/2 šolje brašna",
      "1 jaje, umućeno",
      "1 šolja prezli",
      "Ulje za prženje"
    ],
    instructions: [
      "Pripremite puter: U činiji pomešajte omekšali puter, beli luk, peršun i vlašac (ako koristite). Začinite solju i biberom. Oblikujte puter u dva valjka i stavite u zamrzivač na najmanje 15 minuta.",
      "Pripremite piletinu: Stavite pileći file između dva sloja plastične folije i istanjite ga tučkom za meso dok ne bude debljine oko 5mm. Pazite da ne pocepate meso. Posolite i pobiberite filee.",
      "Napunite piletinu: Izvadite smrznuti puter iz zamrzivača. Stavite jedan valjak putera na sredinu svakog filea. Urolajte file oko putera, pa krajeve dobro zatvorite da puter ne iscuri tokom prženja.",
      "Pohujte piletinu: Pripremite tri posude: jednu sa brašnom, jednu sa umućenim jajetom i jednu sa prezlama. Uvaljajte svaki rolat piletine prvo u brašno, zatim u jaje, pa u prezle. Pobrinite se da je piletina potpuno prekrivena pohom.",
      "Pržite piletinu: Zagrejte ulje u dubokoj šerpi ili tiganju na srednje jakoj vatri. Pržite pileće kijevske rolnice dok ne budu zlatno smeđe i pečene iznutra, oko 5-7 minuta sa svake strane.",
      "Servirajte: Izvadite piletinu iz ulja i stavite na papirni ubrus da se ocedi višak masnoće. Poslužite odmah, dok je puter još uvek tečan unutra."
    ],
    prepTime: "30 minuta",
    cookTime: "25 minuta",
    servings: 2
  },

  "Chicken Cordon Bleu": {
    name: "Chicken Cordon Bleu",
    ingredients: [
      "4 pileća prsa, bez kostiju i kože",
      "4 kriške šunke",
      "4 kriške švajcarskog sira (ili Gruyere)",
      "1/2 šolje brašna",
      "1 jaje, umućeno",
      "1 šolja prezli",
      "1/4 kašičice soli",
      "1/4 kašičice bibera",
      "2 kašike ulja",
      "Po želji, malo senfa za premazivanje piletine"
    ],
    instructions: [
      "Zagrejte rernu na 190°C (375°F).",
      "Stavite pileća prsa između dva lista plastične folije i istanjite ih na debljinu od oko 1 cm.",
      "Ako želite, premažite unutrašnjost pilećih prsa tankim slojem senfa.",
      "Na svako pileće prsa stavite krišku šunke i krišku sira.",
      "Preklopite piletinu da pokrijete nadev i pričvrstite čačkalicama ako je potrebno.",
      "U tri odvojene posude pripremite brašno, umućeno jaje i prezle pomešane sa solju i biberom.",
      "Uvaljajte svako pileće prsa prvo u brašno, zatim u jaje, a na kraju u prezle, osiguravajući da su potpuno obložena.",
      "Zagrejte ulje u tiganju na srednjoj vatri.",
      "Kratko propržite piletinu sa svake strane dok ne porumeni (oko 2-3 minuta po strani).",
      "Stavite piletinu u vatrostalnu posudu.",
      "Pecite u zagrejanoj rerni 20-25 minuta, ili dok piletina ne bude gotova i sir se ne istopi.",
      "Uklonite čačkalice pre služenja."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "BBQ Chicken Premium": {
    name: "BBQ Chicken",
    ingredients: [
      "4 pileća bataka sa karabatakom",
      "1 kašika maslinovog ulja",
      "1 kašičica mlevene paprike",
      "1/2 kašičice belog luka u prahu",
      "1/2 kašičice crnog luka u prahu",
      "1/4 kašičice kajenske paprike (opciono)",
      "So i biber po ukusu",
      "1 šolja BBQ sosa (kupovni ili domaći)"
    ],
    instructions: [
      "Priprema piletine: Piletinu operite i osušite papirnim ubrusom.",
      "Mariniranje: U maloj posudi pomešajte maslinovo ulje, mlevenu papriku, beli luk u prahu, crni luk u prahu, kajensku papriku (ako koristite), so i biber.",
      "Namazati piletinu: Dobijenom smesom premažite piletinu sa svih strana.",
      "Priprema roštilja: Zagrejte roštilj na srednju temperaturu.",
      "Pečenje piletine: Stavite piletinu na roštilj i pecite 25-30 minuta, ili dok unutrašnja temperatura ne dostigne 74°C (165°F). Okrećite piletinu svakih 5-7 minuta kako bi se ravnomerno ispekla.",
      "Premazivanje BBQ sosom: Poslednjih 10 minuta pečenja, premažite piletinu BBQ sosom sa svih strana. Nastavite sa pečenjem, redovno premazujući sos.",
      "Serviranje: Sklonite piletinu sa roštilja i ostavite da se odmori nekoliko minuta pre serviranja."
    ],
    prepTime: "15 minuta",
    cookTime: "25-30 minuta",
    servings: 4
  },

  "Chicken Salad Premium": {
    name: "Chicken Salad",
    ingredients: [
      "2 pileća prsa (oko 450g), bez kože i kostiju",
      "1/2 šolje majoneza",
      "1/4 šolje iseckanog celera",
      "1/4 šolje iseckanog crvenog luka",
      "2 kašike iseckanog svežeg peršuna",
      "1 kašika senfa (Dijon ili obični)",
      "1 kašičica limunovog soka",
      "So i biber po ukusu"
    ],
    instructions: [
      "Skuvajte pileća prsa: Stavite pileća prsa u šerpu i prelijte vodom. Kuvajte dok se piletina ne skuva (oko 15-20 minuta).",
      "Ohladite i iseckajte: Izvadite piletinu iz vode i ostavite da se ohladi. Zatim je iseckajte na male komade ili je razdvojite viljuškom.",
      "Pripremite sos: U velikoj posudi pomešajte majonez, celer, crveni luk, peršun, senf i limunov sok.",
      "Spojite sastojke: Dodajte iseckanu piletinu u posudu sa sosom i dobro promešajte dok se sve ne sjedini.",
      "Začinite: Začinite solju i biberom po ukusu.",
      "Ohladite: Pokrijte posudu i stavite je u frižider na najmanje 30 minuta da se ohladi i da se ukusi sjedine.",
      "Servirajte: Servirajte salatu od piletine na krekerima, u sendviču, na zelenoj salati ili kako god želite."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Chicken Soup Premium": {
    name: "Chicken Soup",
    ingredients: [
      "1 celo pile (oko 1.5 kg)",
      "2 litra vode",
      "2 šargarepe, oljuštene i isečene",
      "2 stabljike celera, isečene",
      "1 veliki crni luk, oljušten i isečen na četvrtine",
      "2 čena belog luka, zgnječena",
      "1 kašičica soli",
      "1/2 kašičice bibera",
      "1 lovorov list",
      "Svež peršun, iseckan (za serviranje)",
      "Testenina za supu (opciono)"
    ],
    instructions: [
      "U velikom loncu stavite pile, vodu, šargarepu, celer, crni luk, beli luk, so, biber i lovorov list.",
      "Pustite da provri, zatim smanjite vatru i krčkajte poklopljeno 60 minuta, ili dok se pile ne skuva i meso se lako odvaja od kostiju.",
      "Izvadite pile iz lonca i ostavite da se malo ohladi.",
      "Procedite supu kroz sito u drugi lonac ili činiju, bacite povrće i lovorov list.",
      "Kad se pile dovoljno ohladi, skinite meso sa kostiju i isecite ga na komade.",
      "Vratite supu u lonac. Dodajte iseckano pileće meso i testeninu (ako koristite).",
      "Kuvajte dok se testenina ne skuva, oko 8-10 minuta.",
      "Servirajte vruću supu, posutu svežim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "60 minuta",
    servings: 6
  },

  "Meatloaf": {
    name: "Meatloaf",
    ingredients: ["900g mlevene junetine", "1 srednja glavica crnog luka", "2 čena belog luka", "1 šolja prezli", "1/2 šolje mleka", "1 jaje", "2 kašike kečapa", "1 kašika vorčester sosa", "1 kašičica suvog origana", "1/2 kašičice soli", "1/4 kašičice bibera", "1/4 šolje kečapa", "1 kašika smeđeg šećera", "1 kašičica sirćeta"],
    instructions: ["Zagrejte rernu na 180°C", "Pomešajte mlevenu junetinu sa lukom, belim lukom, prezlama, mlekom, jajetom i začinima", "Oblikujte štrucu u nauljenu posudu", "Pomešajte kečap, šećer i sirće za preliv", "Prelijte mesnu štrucu", "Pecite 60-75 minuta", "Ostavite da se ohladi 10 minuta"],
    prepTime: "20 min",
    cookTime: "75 min",
    servings: 7
  },
  "Cheeseburger": {
    name: "Cheeseburger",
    ingredients: ["120g mlevenog junećeg mesa", "1 zemička za burger", "1 kriška cheddar sira", "1 kiseli krastavac", "1/4 glavice crnog luka", "1 kašika kečapa", "1 kašičica senfa", "so", "biber", "1 kašika ulja"],
    instructions: ["Pomešajte mleveno meso sa solju i biberom", "Formirajte pljeskavicu", "Zagrejte ulje u tiganju", "Pecite pljeskavicu 5-7 minuta sa svake strane", "Dodajte sir u poslednjem minutu", "Tostirajte zemičku", "Nanesite kečap i senf", "Složi burger sa povrćem i pljeskavicom"],
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 1
  },
  "Hot Dogs": {
    name: "Hot Dogs",
    ingredients: ["4 viršle", "4 hot dog zemičke", "senf", "kečap", "kiseli krastavčići", "crni luk"],
    instructions: ["Stavite viršle u šerpu sa ključalom vodom", "Kuvajte 5-7 minuta", "Zagrejte zemičke", "Izvadite viršle i ocedite", "Stavite viršle u zemičke", "Dodajte priloge po ukusu"],
    prepTime: "5 min",
    cookTime: "10 min",
    servings: 4
  },
  "Apple Pie": {
    name: "Apple Pie",
    ingredients: ["2 1/2 cups brašna", "1 teaspoon soli", "1 cup hladnog putera", "1/2 cup hladne biljne masti", "6-8 tablespoons ledene vode", "6-7 srednjih jabuka", "3/4 cup šećera", "1/4 cup brašna", "1 teaspoon cimeta", "1/4 teaspoon muskatnog oraščića", "2 tablespoons putera", "1 tablespoon limunovog soka"],
    instructions: ["Pomešajte brašno i so, dodajte puter i mast", "Dodajte ledenu vodu postepeno", "Podelite testo na dva dela i ohladite", "Pomešajte jabuke sa šećerom, brašnom i začinima", "Razvaljajte testo i stavite u posudu", "Dodajte fil od jabuka", "Prekrijte drugim testom ili napravite rešetku", "Pecite na 200°C 15 min, zatim 175°C 35-40 min"],
    prepTime: "30 min",
    cookTime: "50 min",
    servings: 8
  },
  "Philly Cheesesteak": {
    name: "Philly Cheesesteak",
    ingredients: ["450g tanko isečene govedine", "1 veliki luk", "1 zelena paprika", "200g provolone sira", "2 kašike biljnog ulja", "2 dugačke lepinje", "so i biber"],
    instructions: ["Zagrejte ulje u velikom tiganju", "Dodajte luk i paprike, pržite 10-15 minuta", "Povećajte vatru i dodajte govedinu", "Pržite meso 5-7 minuta", "Dodajte prženi luk preko mesa", "Rasporedite sir preko smese", "Poklopite dok se sir ne otopi", "Podelite na dva dela", "Stavite lepinje preko smese i okrenite"],
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 2
  },
  "Jambalaya": {
    name: "Jambalaya",
    ingredients: ["1 kg pilećih bataka", "250 g andouille kobasice", "1 veliki crni luk", "1 zelena paprika", "2 štapa celera", "4 čena belog luka", "400 g seckanog paradajza", "2 šolje pilećeg bujona", "1 šolja pirinča", "2 kašike Cajun začina", "1 kašičica majčine dušice", "1/2 kašičice kajenske paprike", "1/4 šolje peršuna", "ulje"],
    instructions: ["Propržite piletinu do rumene boje", "Propržite kobasicu", "Dinštajte luk, papriku i celer", "Dodajte beli luk", "Umešajte paradajz, bujon, pirinač i začine", "Vratite meso", "Pustite da provri, smanjite vatru", "Kuvajte poklopljeno 20-25 minuta", "Odstoji 5 minuta", "Ukrasi peršunom"],
    prepTime: "20 min",
    cookTime: "45 min",
    servings: 7
  },
  "Gumbo": {
    name: "Gumbo",
    ingredients: ["1 kg pilećih bataka", "250 g dimljene kobasice", "500 g škampa", "1 šolja brašna", "3/4 šolje ulja", "1 veliki crni luk", "1 zelena paprika", "3 štapića celera", "4 čena belog luka", "1 kašičica kajenske paprike", "1 kašičica timijana", "1/2 kašičice origana", "1 lovorov list", "1.5 l pilećeg bujona", "400 g seckanog paradajza", "peršun"],
    instructions: ["Napravite tamno braon roux od brašna i ulja (20-30 min)", "Dodajte luk, papriku i celer", "Postepeno ulivajte bujon", "Dodajte piletinu, kobasicu i začine", "Kuvajte 1.5-2 sata", "Dodajte paradajz, kuvajte 30 min", "Dodajte škampe poslednih 15 minuta", "Izvadite lovorov list", "Poslužite preko pirinča sa peršunom"],
    prepTime: "30 min",
    cookTime: "180 min",
    servings: 7
  },
  "Cornbread": {
    name: "Cornbread",
    ingredients: ["1 šolja kukuruznog brašna", "1 šolja višenamenskog brašna", "1/4 šolje šećera", "1 kašičica praška za pecivo", "1/2 kašičice sode bikarbone", "1/2 kašičice soli", "1 jaje", "1 šolja mlaćenice", "1/4 šolje rastopljenog putera"],
    instructions: ["Zagrejte rernu na 200°C", "Podmažite kalup 20x20cm", "Pomešajte suhe sastojke", "Umutite jaje, mlaćenicu i puter", "Spojite mokre i suve sastojke", "Sipajte u kalup", "Pecite 20-25 minuta"],
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 8
  },
  "Coleslaw": {
    name: "Coleslaw",
    ingredients: ["1/2 glavice srednjeg kupusa", "2 srednje šargarepe", "1/4 glavice crvenog luka", "1/2 šolje majoneza", "2 kašike vinskog sirćeta", "1 kašika šećera", "1 kašičica senfa", "so i biber"],
    instructions: ["Sitno isecite kupus", "Narendajte šargarepe", "Isecite crveni luk", "Pomešajte povrće", "Umutite majonez, sirće, šećer i senf", "Prelijte preliv preko povrća", "Začinite solju i biberom", "Ostavite u frižideru 30 minuta", "Promešajte pre služenja"],
    prepTime: "15 min",
    cookTime: "0 min",
    servings: 6
  },
  "Pulled Pork": {
    name: "Pulled Pork",
    ingredients: ["2-2.5 kg svinjske plećke", "2 kašike mlevene paprike", "1 kašika belog luka u prahu", "1 kašika crnog luka u prahu", "1 kašika dimljene paprike", "1 kašika smeđeg šećera", "1 kašičica mlevenog kima", "1 kašičica mlevenog korijandera", "1/2 kašičice kajenske paprike", "so i biber", "1 šolja pilećeg bujona", "BBQ sos"],
    instructions: ["Izvadite meso 30 minuta pre pripreme", "Pomešajte sve začine", "Utrljajte začine po mesu", "Stavite u spori šporet", "Sipajte bujon preko mesa", "Kuvajte na niskoj temperaturi 8-10 sati", "Razdvojite meso viljuškama", "Promešajte sa BBQ sosom"],
    prepTime: "20 min",
    cookTime: "600 min",
    servings: 9
  },
  "Biscuits and Gravy": {
    name: "Biscuits and Gravy",
    ingredients: ["2 šolje brašna", "1 kašika praška za pecivo", "1 kašičica soli", "1/2 šolje hladnog putera", "3/4 šolje mleka", "450g mlevene kobasice", "1/4 šolje brašna", "3 šolje mleka", "1/2 kašičice soli", "1/4 kašičice bibera"],
    instructions: ["Zagrejte rernu na 220°C", "Pomešajte brašno, prašak za pecivo i so", "Utrljajte puter", "Dodajte mleko", "Razvaljajte testo i isecite biskvite", "Pecite 12-15 minuta", "Skuvajte kobasicu", "Dodajte brašno u kobasicu", "Postepeno dodajte mleko", "Kuvajte dok se ne zgusne", "Prelijte biskvite sosom"],
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 6
  },
  "Chicken and Waffles": {
    name: "Chicken and Waffles",
    ingredients: ["4 pileća bataka", "1 šolja mlaćenice", "1 kašičica ljutog sosa", "1.5 šolje brašna", "2 kašičice soli", "1 kašičica bibera", "1 kašičica belog luka u prahu", "ulje za prženje", "1.5 šolje brašna", "2 kašičice praška za pecivo", "1/4 kašičice sode", "1/4 kašičice soli", "1 kašika šećera", "1.5 šolje mlaćenice", "1 jaje", "4 kašike otopljenog putera", "javorov sirup"],
    instructions: ["Mariniraj piletinu u mlaćenici 30 minuta", "Pohuj piletinu u začinskom brašnu", "Prži piletinu u ulju 6-8 minuta po strani", "Pomešaj suhe sastojke za vafle", "Umuti mlaćenicu, jaje i puter", "Sjedini mokre i suve sastojke", "Peci vafle u aparatu", "Posluži piletinu preko vafla sa javorovim sirupom"],
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 4
  },
  "Key Lime Pie": {
    name: "Key Lime Pie",
    ingredients: ["250g mlevenog integralnog keksa", "100g rastopljenog putera", "50g šećera", "1 konzerva kondenzovanog mleka", "120ml soka limete", "1 kašičica narendane korice limete", "4 žumanca", "šlag za dekoraciju"],
    instructions: ["Pomešajte mleveni keks, puter i šećer", "Pritisnite smesu na dno kalupa", "Pecite koru 15 minuta na 180°C", "Umutite kondenzovano mleko, sok limete, koricu i žumanca", "Prelijte fil preko kore", "Pecite 15-20 minuta na 160°C", "Ohladite potpuno", "Ukrasite šlagom i kriškama limete"],
    prepTime: "20 min",
    cookTime: "35 min",
    servings: 8
  },

  // Breakfast/Doručak
  "Jaja na oko": {
    name: "Jaja na oko",
    ingredients: [
      "1 šolja kuvane kinoe",
      "1/2 avokada, isečen na kockice",
      "1/4 krastavca, isečen na kockice",
      "1/4 crvene paprike, isečene na kockice",
      "1/4 šolje edamamea, oljuštenog",
      "1 jaje",
      "1 kašika susamovog ulja",
      "1/2 kašike soja sosa",
      "Susam za posipanje",
      "So i biber po ukusu"
    ],
    instructions: [
      "Skuvajte kinou prema uputstvima na pakovanju.",
      "Dok se kinoa kuva, pripremite povrće: iseckajte avokado, krastavac i papriku.",
      "Edamame blanširajte u kipućoj vodi 2-3 minuta, zatim ocedite i oljuštite.",
      "Zagrejati susamovo ulje u tiganju na srednjoj vatri.",
      "Razbijte jaje u tiganj i pržite ga \"na oko\" dok belance ne bude potpuno kuvano, a žumance još tečno.",
      "U činiju stavite kuvanu kinou, avokado, krastavac, papriku i edamame.",
      "Preko povrća stavite prženo jaje.",
      "Prelijte soja sosom i pospite susamom.",
      "Začinite solju i biberom po ukusu.",
      "Odmah poslužite."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },
  "Kajgana": {
    name: "Kajgana",
    ingredients: [
      "2 velika jaja",
      "1 supena kašika mleka ili pavlake za kuvanje",
      "1 supena kašika putera ili ulja",
      "So po ukusu",
      "Biber po ukusu (opciono)"
    ],
    instructions: [
      "U maloj posudi umutite jaja sa mlekom ili pavlakom. Dodajte so i biber po ukusu.",
      "U tiganju na srednjoj vatri otopite puter ili zagrejte ulje.",
      "Kada je puter otopljen i tiganj zagrejan, sipajte smesu od jaja.",
      "Smanjite vatru na nisku. Pustite da se jaja polako peku, povremeno ih lagano mešajući špatulom.",
      "Kada su jaja pečena, ali još uvek blago vlažna, sklonite ih sa vatre.",
      "Poslužite odmah."
    ],
    prepTime: "2 minuta",
    cookTime: "3-5 minuta",
    servings: 1
  },
  "Omlet": {
    name: "Omlet",
    ingredients: [
      "2 velika jaja",
      "1 kašika mleka ili vode",
      "1 kašika putera ili ulja",
      "So i biber po ukusu",
      "(Opciono) Nadev: sir, šunka, povrće (pečurke, paprika, luk, paradajz)"
    ],
    instructions: [
      "Razbijte jaja u činiju.",
      "Dodajte mleko ili vodu, so i biber. Umutite viljuškom dok se sastojci ne sjedine.",
      "Zagrejte puter ili ulje u tiganju na srednjoj vatri.",
      "Sipajte smesu od jaja u tiganj.",
      "Smanjite vatru na nisku. Pustite da se omlet peče dok se ivice ne stvrdnu.",
      "Ako koristite nadev, dodajte ga na jednu polovinu omleta.",
      "Kada je omlet skoro pečen, preklopite ga na pola.",
      "Kuvajte još minut-dva, dok se nadev ne zagreje i omlet ne dobije zlatnu boju.",
      "Servirajte odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "5-7 minuta",
    servings: 1
  },
  "French Toast": {
    name: "French Toast",
    ingredients: [
      "4 kriške hleba (bajate, deblje isečene)",
      "2 velika jaja",
      "120 ml mleka",
      "1 kašičica ekstrakta vanile",
      "1/2 kašičice cimeta u prahu",
      "1 prstohvat soli",
      "2 kašike putera",
      "Javorov sirup, voće, prah šećer (za serviranje)"
    ],
    instructions: [
      "U široj posudi umutite jaja, mleko, ekstrakt vanile, cimet i so dok se dobro ne sjedine.",
      "Umočite svaku krišku hleba u smesu od jaja, osiguravajući da je hleb sa obe strane natopljen. Ne preterujte, hleb ne sme biti previše natopljen.",
      "U tiganju, na srednjoj vatri, rastopite puter.",
      "Stavite natopljene kriške hleba u tiganj i pecite ih oko 2-3 minuta sa svake strane, ili dok ne postanu zlatno smeđe boje.",
      "Izvadite \"French Toast\" iz tiganja i poslužite toplo sa javorovim sirupom, voćem ili prah šećerom."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 2
  },
  "Granola": {
    name: "Granola",
    ingredients: [
      "3 šolje ovsenih pahuljica (rolled oats)",
      "1 šolja seckanih oraha (ili drugih orašastih plodova po želji)",
      "1/2 šolje semenki (suncokret, bundeva, lan)",
      "1/2 šolje kokosovog brašna (opciono)",
      "1/4 šolje meda (ili javorovog sirupa)",
      "1/4 šolje biljnog ulja (kokosovo ili suncokretovo ulje)",
      "1 kašičica cimeta",
      "1/2 kašičice soli",
      "1/2 šolje suvog voća (brusnice, suvo grožđe, seckane kajsije) - dodati nakon pečenja"
    ],
    instructions: [
      "Zagrejte rernu na 160°C (320°F).",
      "U velikoj posudi pomešajte ovsene pahuljice, orahe, semenke, kokosovo brašno (ako koristite), cimet i so.",
      "U manjoj posudi pomešajte med (ili javorov sirup) i ulje.",
      "Prelijte suve sastojke tečnim sastojcima i dobro promešajte dok se sve ne sjedini.",
      "Rasporedite smesu u tankom sloju na pleh obložen papirom za pečenje.",
      "Pecite u zagrejanoj rerni 25-30 minuta, ili dok ne dobije zlatno smeđu boju. Promesajte na svakih 10 minuta da se granola ravnomerno ispeče.",
      "Izvadite iz rerne i ostavite da se potpuno ohladi na plehu.",
      "Kada se ohladi, umešajte suvo voće.",
      "Čuvajte granolu u hermetički zatvorenoj posudi na sobnoj temperaturi."
    ],
    prepTime: "10 minuta",
    cookTime: "25-30 minuta",
    servings: 8
  },
  "Müsli": {
    name: "Müsli",
    ingredients: [
      "50g ovsenih pahuljica",
      "125ml mleka (kravljeg, bademovog, sojinog...)",
      "1 jabuka (izrendana)",
      "1 kašika suvog grožđa",
      "1 kašika seckanih oraha ili badema",
      "1 kašičica meda ili javorovog sirupa (opciono)",
      "Prstohvat cimeta (opciono)"
    ],
    instructions: [
      "U činiju stavite ovsene pahuljice.",
      "Prelijte pahuljice mlekom.",
      "Dodajte izrendanu jabuku, suvo grožđe i seckane orahe (ili bademe).",
      "Ako želite slađi müsli, dodajte med ili javorov sirup.",
      "Pospite sa malo cimeta (po želji).",
      "Dobro promešajte i odmah poslužite. Možete ostaviti i 10 minuta da se pahuljice natope mlekom."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },
  "Jogurt sa voćem": {
    name: "Jogurt sa voćem",
    ingredients: [
      "200g gustog jogurta (grčki jogurt ili slično)",
      "1/2 šolje mešanog voća (npr. jagode, borovnice, maline, banane)",
      "1 kašika meda (opciono)",
      "1 kašika granole ili muslija (opciono)",
      "Nekoliko listića mente (opciono, za dekoraciju)"
    ],
    instructions: [
      "U činiju sipajte jogurt.",
      "Operite i iseckajte voće na manje komade (ako je potrebno).",
      "Preko jogurta rasporedite iseckano voće.",
      "Ako želite, dodajte kašiku meda za slađi ukus.",
      "Pospite granolom ili muslijem za hrskavost.",
      "Ukrasite listićima mente (opciono).",
      "Odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },
  "Ovsene pahuljice": {
    name: "Ovsene pahuljice",
    ingredients: [
      "1/2 šolje ovsenih pahuljica",
      "1 šolja mleka (kravlje, bademovo, sojino, itd.)",
      "1 kašičica meda ili javorovog sirupa (po ukusu)",
      "1/4 šolje voća (sveže ili smrznuto, npr. bobičasto voće, banana)",
      "Prstohvat cimeta (opciono)",
      "Orašasti plodovi ili semenke (opciono, za posipanje)"
    ],
    instructions: [
      "U šerpicu sipajte ovsene pahuljice i mleko.",
      "Stavite šerpicu na srednju vatru i zagrejte do ključanja, uz stalno mešanje.",
      "Smanjite vatru i kuvajte 3-5 minuta, dok se ovsene pahuljice ne zgusnu do željene gustine. Mešajte povremeno.",
      "Sklonite šerpicu sa vatre.",
      "Dodajte med ili javorov sirup po ukusu i promešajte.",
      "Prebacite ovsene pahuljice u činiju za serviranje.",
      "Dodajte voće i pospite cimetom, orašastim plodovima ili semenkama (po želji).",
      "Poslužite toplo."
    ],
    prepTime: "2 minuta",
    cookTime: "5 minuta",
    servings: 1
  },
  "Tost sa avokado": {
    name: "Tost sa avokado",
    ingredients: [
      "1 kriška hleba (po izboru)",
      "1/2 avokada",
      "1/4 limuna ili limete",
      "So po ukusu",
      "Biber po ukusu",
      "Malo maslinovog ulja (opciono)",
      "Crvena paprika u prahu (opciono)",
      "Jaje (opciono)"
    ],
    instructions: [
      "Ispecite krišku hleba u tosteru dok ne postane zlatno smeđa.",
      "U međuvremenu, izgnječite polovinu avokada u činiji viljuškom.",
      "Dodajte sok od limuna ili limete, so i biber u izgnječeni avokado. Promešajte.",
      "Namažite avokado smesu preko tosta.",
      "Pokapajte sa malo maslinovog ulja i pospite crvenom paprikom (ako koristite)."
    ],
    prepTime: "5 minuta",
    cookTime: "2 minuta",
    servings: 1
  },
  "Smuthi": {
    name: "Smuthi",
    ingredients: [
      "1 zrela banana",
      "150g smrznutih jagoda",
      "120ml mleka (kravljeg, bademovog ili sojinog)",
      "1 kašika meda (ili javorovog sirupa, po ukusu)",
      "1/2 kašičice chia semenki (opciono)"
    ],
    instructions: [
      "Bananu oljuštite i isecite na komade.",
      "U blender stavite bananu, smrznute jagode, mleko i med.",
      "Blendajte dok ne dobijete glatku smesu.",
      "Dodajte chia semenke (ako koristite) i kratko blendajte da se sjedine.",
      "Sipajte smuti u čašu i odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },
  "Palačinke": {
    name: "Palačinke",
    ingredients: [
      "2 jaja",
      "250ml mleka",
      "125g brašna",
      "Prstohvat soli",
      "1 kašika šećera (opciono, za slatke palačinke)",
      "2 kašike otopljenog putera ili ulja (plus dodatno za podmazivanje tiganja)"
    ],
    instructions: [
      "U velikoj činiji umutite jaja sa mlekom.",
      "Dodajte brašno i so, i mutite dok ne dobijete glatku smesu bez grudvica.",
      "Ako pravite slatke palačinke, dodajte i šećer.",
      "Umešajte otopljeni puter ili ulje u smesu.",
      "Zagrejte tiganj na srednjoj vatri. Lagano ga podmažite puterom ili uljem.",
      "Sipajte kutlačom smesu na vreo tiganj, naginjući tiganj tako da se smesa ravnomerno rasporedi.",
      "Pecite palačinku oko 1-2 minuta sa jedne strane, dok ne porumeni i ivice počnu da se odvajaju.",
      "Okrenite palačinku i pecite je još 1 minut sa druge strane.",
      "Ponovite postupak sa preostalom smesom, podmazujući tiganj po potrebi.",
      "Filujte palačinke po želji i poslužite tople."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 10
  },
  "Vafli (varijanta)": {
    name: "Vafli (varijanta)",
    ingredients: [
      "1 i 1/2 šolje brašna",
      "2 kašičice praška za pecivo",
      "1/4 kašičice soli",
      "2 kašike šećera",
      "1 i 1/4 šolje mleka",
      "1/4 šolje otopljenog putera",
      "1 jaje",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "U velikoj činiji pomešati brašno, prašak za pecivo, so i šećer.",
      "U drugoj činiji umutiti mleko, otopljeni puter, jaje i ekstrakt vanile (ako se koristi).",
      "Suve sastojke dodati mokrim sastojcima i mešati dok se smesa ne sjedini. Pazite da ne premešate.",
      "Zagrejte aparat za vafle prema uputstvima proizvođača.",
      "Podmazati aparat za vafle uljem ili sprejom za pečenje.",
      "Sipajte odgovarajuću količinu smese u aparat za vafle (obično oko 1/2 šolje po vaflu).",
      "Pecite vafle dok ne postanu zlatno-smeđi i hrskavi, oko 3-5 minuta po strani, u zavisnosti od aparata.",
      "Poslužite odmah sa omiljenim dodacima (voće, šlag, sirup, džem, itd.)."
    ],
    prepTime: "10 minuta",
    cookTime: "15-20 minuta",
    servings: 6
  },
  "Croissant": {
    name: "Croissant",
    ingredients: [
      "500g brašna (tip 500 ili specijalno brašno za peciva)",
      "10g suvog kvasca ili 25g svežeg kvasca",
      "60g šećera",
      "10g soli",
      "250ml mlakog mleka",
      "50g otopljenog putera",
      "300g hladnog putera (za laminiranje)",
      "1 jaje (za premazivanje)",
      "Malo mleka (za premazivanje, opciono)"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno, suvi kvasac (ako koristite sveži, rastvorite ga u malo mlakog mleka sa kašičicom šećera i ostavite da nadođe), šećer i so.",
      "Dodajte mlako mleko i otopljeni puter. Umesite testo dok ne postane glatko i elastično.",
      "Formirajte testo u kuglu, lagano ga premažite uljem, stavite u posudu, pokrijte plastičnom folijom i ostavite da se diže na toplom mestu oko 2 sata, ili dok se ne udvostruči.",
      "Razvaljajte testo u pravougaonik debljine oko 1 cm. Umotajte ga u plastičnu foliju i stavite u frižider na najmanje 2 sata (ili preko noći).",
      "Izvadite hladni puter (300g) i stavite ga između dva lista pek papira. Razvaljajte ga u pravougaonik dimenzija otprilike pola veličine testa. Puter mora biti hladan, ali savitljiv.",
      "Izvadite testo iz frižidera. Stavite razvaljani puter na jednu polovinu testa, a drugu polovinu preklopite preko putera. Dobro zatvorite ivice.",
      "Razvaljajte testo u pravougaonik, opet debljine oko 1 cm. Pažljivo uklonite višak brašna četkicom.",
      "Presavijte testo u tri dela (kao pismo). Ovo je prvi preklop. Umotajte u foliju i vratite u frižider na 30 minuta.",
      "Ponovite postupak razvaljivanja i preklapanja još dva puta, sa pauzama od 30 minuta u frižideru između svakog preklopa.",
      "Nakon trećeg preklopa, razvaljajte testo u veliki pravougaonik debljine oko 3-4 mm.",
      "Isecite testo na dugačke trouglove.",
      "Lagano razvucite svaki trougao i urolajte ga od šireg kraja prema užem. Savijte krajeve kroasana prema unutra da dobijete oblik polumeseca.",
      "Stavite kroasane na pleh obložen pek papirom, ostavljajući dovoljno prostora između njih.",
      "Pokrijte kroasane i ostavite da se dižu na toplom mestu oko 1-2 sata, ili dok se ne udvostruče.",
      "Zagrejte rernu na 180°C.",
      "Umutite jaje sa malo mleka i pažljivo premažite kroasane.",
      "Pecite kroasane u zagrejanoj rerni 20-25 minuta, ili dok ne dobiju zlatno-smeđu boju.",
      "Ostavite da se malo ohlade pre služenja."
    ],
    prepTime: "30 minuta + vreme za odmaranje testa (min. 4 sata)",
    cookTime: "20-25 minuta",
    servings: 12
  },
  "Bagel": {
    name: "Bagel",
    ingredients: [
      "500g brašna (jako brašno, tip 00 ili brašno za hleb)",
      "300ml mlake vode",
      "7g suvog kvasca",
      "1 kašičica šećera",
      "1.5 kašičice soli",
      "1 kašika meda (za kuvanje bagela)",
      "2 litra vode (za kuvanje bagela)",
      "Susam, mak, kim ili druge semenke (za posipanje)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte mlaku vodu, kvasac i šećer. Ostavite da odstoji 5-10 minuta, dok se kvasac ne zapeni.",
      "Dodajte brašno i so u posudu sa kvascem. Zamesite testo dok ne postane glatko i elastično (oko 8-10 minuta ručno ili 5-7 minuta u mikseru sa kukom).",
      "Prebacite testo u nauljenu posudu, okrenite ga da se obloži uljem, pokrijte i ostavite da se diže na toplom mestu 1.5-2 sata, ili dok se ne udvostruči.",
      "Izvadite testo na blago pobrašnjenu površinu. Podelite testo na 6 jednakih delova.",
      "Oblikujte svaki deo u kuglu. Zatim, prstom napravite rupu u sredini svake kugle i razvucite je da napravite oblik bagela.",
      "Pokrijte oblikovane bagele i ostavite ih da se dižu još 15-20 minuta.",
      "U velikoj šerpi, prokuvajte vodu i dodajte med.",
      "Spuštajte bagele u kipuću vodu, jedan po jedan (ili dva po dva, zavisno od veličine šerpe), i kuvajte ih 1 minut sa svake strane.",
      "Izvadite bagele iz vode šupljikavom kašikom i stavite ih na pleh obložen papirom za pečenje.",
      "Dok su bageli još mokri, pospite ih susamom, makom, kimom ili drugim semenkama po želji.",
      "Pecite u zagrejanoj rerni na 200°C (390°F) 20-25 minuta, ili dok ne dobiju zlatno-braon boju.",
      "Izvadite iz rerne i ostavite da se ohlade na rešetki pre služenja."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 6
  },
  "Slanina i jaja": {
    name: "Slanina i jaja",
    ingredients: [
      "2 kriške slanine",
      "2 jaja",
      "So po ukusu",
      "Biber po ukusu",
      "Ulje ili mast za prženje (opciono)"
    ],
    instructions: [
      "U tiganj stavite slaninu.",
      "Pržite slaninu na srednjoj vatri dok ne postane hrskava, otprilike 3-5 minuta, okrećući je s vremena na vreme.",
      "Izvadite slaninu iz tiganja i ostavite je na kuhinjskom papiru da se ocedi od masnoće.",
      "Ako je potrebno, dodajte malo ulja ili masti u tiganj.",
      "Razbijte jaja u tiganj.",
      "Pržite jaja na slaboj vatri dok belance ne bude pečeno, a žumance ostane tečno, otprilike 2-3 minuta. Za tvrdo pečena jaja, pržite duže.",
      "Posolite i pobiberite po ukusu.",
      "Poslužite jaja uz hrskavu slaninu."
    ],
    prepTime: "2 minuta",
    cookTime: "5-7 minuta",
    servings: 1
  },
  "Hash Browns": {
    name: "Hash Browns",
    ingredients: [
      "4 velika krompira (oko 700g), oljuštena",
      "2 kašike biljnog ulja",
      "1/2 srednje glavice crnog luka, sitno iseckanog (opciono)",
      "So po ukusu",
      "Biber po ukusu"
    ],
    instructions: [
      "Krompir izrendajte na krupno rende.",
      "Izrendani krompir stavite u čistu krpu ili gazu i iscedite višak tečnosti. Ovo je ključno za hrskavost.",
      "U velikom tiganju zagrejte ulje na srednjoj vatri.",
      "Dodajte seckani luk (ako koristite) i pržite dok ne postane staklast, oko 3-4 minuta.",
      "Dodajte isceđeni krompir u tiganj. Ravnomerno ga rasporedite.",
      "Začinite solju i biberom.",
      "Pecite oko 10 minuta sa jedne strane, dok ne postane zlatno braon i hrskavo.",
      "Pažljivo okrenite hash browns i pecite još 5-10 minuta sa druge strane, dok ne postane zlatno braon i hrskavo.",
      "Izvadite hash browns iz tiganja i stavite ih na papirni ubrus da se ocede od viška ulja.",
      "Poslužite odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Muffins": {
    name: "Muffins",
    ingredients: [
      "2 šolje brašna",
      "1 šolja šećera",
      "3 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "1 šolja mleka",
      "1/2 šolje otopljenog putera",
      "2 velika jaja",
      "1 kašičica ekstrakta vanile"
    ],
    instructions: [
      "Zagrejte rernu na 200°C. Pripremite kalup za muffine postavljanjem papirnih korpica ili nauljite kalup.",
      "U velikoj posudi pomešajte brašno, šećer, prašak za pecivo i so.",
      "U drugoj posudi umutite mleko, otopljeni puter, jaja i ekstrakt vanile.",
      "Suve sastojke dodajte mokrim sastojcima i mešajte dok se sve ne sjedini. Nemojte previše mešati.",
      "Sipajte testo u pripremljeni kalup za muffine, punite oko 2/3 svake korpice.",
      "Pecite u zagrejanoj rerni 20-25 minuta, ili dok čačkalica zabodena u centar ne izađe čista.",
      "Izvadite iz rerne i ostavite da se ohlade u kalupu nekoliko minuta pre nego što ih izvadite i potpuno ohladite na rešetki."
    ],
    prepTime: "15 minuta",
    cookTime: "20-25 minuta",
    servings: 12
  },
  "Scones": {
    name: "Scones",
    ingredients: [
      "225g brašna (plus dodatno za posipanje)",
      "1 kašičica praška za pecivo",
      "1/2 kašičice soli",
      "50g hladnog putera, isečenog na kockice",
      "120ml mleka",
      "1 kašika šećera (opciono)",
      "Malo mleka ili razmućenog jajeta za premazivanje"
    ],
    instructions: [
      "Zagrejte rernu na 220°C (200°C sa ventilatorom). Obložite pleh papirom za pečenje.",
      "U velikoj posudi pomešajte brašno, prašak za pecivo, so i šećer (ako koristite).",
      "Dodajte hladan puter i utrljajte ga prstima u brašno dok ne dobijete smesu koja podseća na prezle.",
      "Postepeno dodajte mleko, mešajući dok se testo ne sjedini. Nemojte premesiti.",
      "Na blago pobrašnjenoj površini, razvaljajte testo na debljinu oko 2-3 cm.",
      "Koristite okrugli kalup za kekse ili nož da isečete scones.",
      "Poređajte scones na pripremljeni pleh.",
      "Premažite vrhove scones sa malo mleka ili razmućenog jajeta.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok ne postanu zlatno smeđi.",
      "Ostavite da se malo prohlade pre serviranja."
    ],
    prepTime: "15 minuta",
    cookTime: "15-20 minuta",
    servings: 8
  },
  "Chia Pudding": {
    name: "Chia Pudding",
    ingredients: [
      "3 kašike chia semenki",
      "1 šolja mleka (kravljeg, bademovog, kokosovog, itd.)",
      "1 kašika meda, javorovog sirupa ili drugog zaslađivača (po ukusu)",
      "1/2 kašičice ekstrakta vanile (opciono)",
      "Sveže voće, orašasti plodovi, kokosove pahuljice (za ukrašavanje)"
    ],
    instructions: [
      "U činiji pomešajte chia semenke, mleko, zaslađivač i ekstrakt vanile (ako koristite).",
      "Dobro promešajte da se svi sastojci sjedine.",
      "Ostavite da odstoji 5 minuta, a zatim ponovo promešajte da se razbiju sve grudvice chia semenki.",
      "Pokrijte činiju i stavite u frižider najmanje 2 sata, ili najbolje preko noći.",
      "Pre serviranja promešajte chia pudding. Ako je previše gust, dodajte još malo mleka da biste postigli željenu konzistenciju.",
      "Prebacite u činiju za serviranje i ukrasite svežim voćem, orašastim plodovima ili kokosovim pahuljicama.",
      "Poslužite hladno."
    ],
    prepTime: "5 minuta",
    cookTime: "2 sata (za hlađenje)",
    servings: 1
  },
  "Protein Bowl": {
    name: "Protein Bowl",
    ingredients: [
      "1 šolja kuvane kinoe",
      "1/2 šolje crnog pasulja, oceđenog i ispranog",
      "1/2 avokada, iseckanog",
      "2 jaja",
      "1/4 šolje salsa sosa",
      "1 kašika seckanog korijandera",
      "So i biber po ukusu",
      "1 kašika maslinovog ulja"
    ],
    instructions: [
      "U malom tiganju, zagrejte maslinovo ulje na srednjoj temperaturi.",
      "Umutite jaja u činiji sa soli i biberom.",
      "Sipajte jaja u zagrejan tiganj i ispržite ih kao kajganu ili omlet, po želji.",
      "U činiju stavite kuvanu kinou.",
      "Dodajte crni pasulj i avokado preko kinoe.",
      "Stavite pripremljena jaja preko pasulja i avokada.",
      "Prelijte salsa sosom i pospite seckanim korijanderom.",
      "Začinite sa još soli i bibera po ukusu.",
      "Poslužite odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  // BBQ/Roštilj
  "Ćevapi": {
    name: "Ćevapi",
    ingredients: [
      "500g mlevene junetine",
      "250g mlevene teletine ili jagnjetine (po želji)",
      "1 glavica crnog luka, sitno iseckana",
      "2-3 čena belog luka, sitno iseckana ili izgnječena",
      "1 kašičica soli",
      "1/2 kašičice bibera",
      "1/2 kašičice sode bikarbone",
      "100ml hladne vode ili mineralne vode"
    ],
    instructions: [
      "U velikoj posudi pomešati mleveno meso, crni luk, beli luk, so, biber i sodu bikarbonu.",
      "Dodati hladnu vodu ili mineralnu vodu i dobro umesiti smesu rukama. Mesiti najmanje 10 minuta da se svi sastojci dobro sjedine i da meso postane kompaktno.",
      "Pokriti posudu sa mesom i ostaviti u frižideru najmanje 2 sata, a idealno preko noći.",
      "Pre pečenja, izvaditi meso iz frižidera i oblikovati ćevape rukama. Veličina ćevapa je po želji, ali obično su dugi oko 5-7 cm i debljine prsta.",
      "Ćevape peći na roštilju na srednjoj vatri, okrećući ih povremeno, dok ne dobiju zlatno-smeđu boju i budu pečeni iznutra (oko 15-20 minuta).",
      "Alternativno, ćevapi se mogu peći u tiganju na malo ulja, na srednjoj vatri.",
      "Poslužiti tople ćevape sa lepinjom, seckanim crnim lukom, kajmakom, ajvarom ili urnebesom."
    ],
    prepTime: "15 minuta",
    cookTime: "15-20 minuta",
    servings: 10
  },
  "Pljeskavica": {
    name: "Pljeskavica",
    ingredients: [
      "800g mlevene junetine (najbolje kombinacija sa malo masnoće)",
      "1 velika glavica crnog luka, sitno iseckana",
      "4 čena belog luka, sitno iseckana ili izgnječena",
      "1 kašičica mlevene slatke paprike",
      "1/2 kašičice mlevene ljute paprike (opciono)",
      "1/2 kašičice bibera",
      "2 kašičice soli",
      "1 kašičica sode bikarbone (opciono, za sočnost)",
      "100 ml gazirane vode (opciono, za sočnost)",
      "Ulje ili mast, za premazivanje roštilja"
    ],
    instructions: [
      "U velikoj posudi, pomešajte mleveno meso, crni luk, beli luk, slatku papriku, ljutu papriku (ako koristite), biber, so i sodu bikarbonu (ako koristite).",
      "Dobro izmešajte rukama, gnječeći smesu dok se svi sastojci ravnomerno ne sjedine. Dodajte gaziranu vodu (ako koristite) i nastavite da mesite nekoliko minuta.",
      "Pokrijte posudu i ostavite u frižideru najmanje 30 minuta (ili do 2 sata) da se ukusi sjedine.",
      "Podelite smesu na 4 jednaka dela.",
      "Na vlažnim rukama, formirajte svaki deo u loptu, a zatim ga spljoštite u tanak, okrugao odrezak, prečnika oko 15 cm i debljine oko 1 cm.",
      "Dobro zagrejte roštilj. Premažite ga uljem ili mašću kako se pljeskavice ne bi zalepile.",
      "Pecite pljeskavice na roštilju 7-10 minuta sa svake strane, ili dok ne budu pečene i dobiju lepu boju.",
      "Poslužite tople, u lepinji sa kajmakom, ajvarom, lukom i drugim dodacima po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "15-20 minuta",
    servings: 4
  },
  "Kobasice": {
    name: "Kobasice",
    ingredients: [
      "1 kg mlevenog svinjskog mesa (plećka ili vrat)",
      "200 g mlevene slanine",
      "20 g soli",
      "5 g mlevenog crnog bibera",
      "5 g mlevene slatke paprike",
      "2 g mlevene ljute paprike (opciono)",
      "2 čena belog luka, sitno iseckana ili izgnječena",
      "100 ml hladne vode ili supe",
      "Svinjska creva (prethodno oprana i potopljena u toploj vodi)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte mleveno meso, mlevenu slaninu, so, crni biber, slatku papriku, ljutu papriku (ako koristite), i beli luk.",
      "Dobro promešajte rukama dok se svi sastojci ne sjedine.",
      "Postepeno dodajte hladnu vodu ili supu, neprestano mešajući dok smesa ne postane glatka i ujednačena.",
      "Probajte smesu i po potrebi dodajte još začina.",
      "Pripremite svinjska creva. Nataknite jedan kraj creva na nastavak za punjenje kobasica.",
      "Pažljivo punite creva smesom od mesa, pazeći da ne budu previše puna kako ne bi pukla. Ostavite malo prostora na krajevima za vezivanje.",
      "Kada je crevo napunjeno, uvrnite ga na svakih 10-15 cm da biste formirali pojedinačne kobasice. Možete koristiti kanap za vezivanje ako je potrebno.",
      "Izbockajte kobasice iglom na nekoliko mesta da biste izbegli pucanje tokom kuvanja.",
      "Kobasice možete peći na roštilju, u rerni ili pržiti u tiganju.",
      "Za pečenje u rerni, zagrejte rernu na 180°C. Stavite kobasice na pleh obložen papirom za pečenje i pecite 30-40 minuta, ili dok ne dobiju zlatno-braon boju i budu pečene u potpunosti.",
      "Za roštilj, pecite kobasice na umerenoj vatri, okrećući ih povremeno, dok ne budu pečene.",
      "Za prženje, pržite kobasice u tiganju na umerenoj vatri sa malo ulja, dok ne budu pečene i dobiju zlatno-braon boju."
    ],
    prepTime: "30 minuta",
    cookTime: "30-40 minuta",
    servings: 10
  },
  "Vešalica": {
    name: "Vešalica",
    ingredients: [
      "800g svinjske vratine, isečene na šnicle debljine oko 1 cm",
      "4 kašike ulja",
      "2 kašike senfa",
      "2 kašike mlevene crvene paprike (slatke ili ljute, po ukusu)",
      "1 kašika suvog biljnog začina (vegeta)",
      "1 kašičica belog luka u prahu",
      "1/2 kašičice bibera",
      "So po ukusu"
    ],
    instructions: [
      "U velikoj posudi pomešajte ulje, senf, mlevenu papriku, suvi biljni začin, beli luk u prahu, biber i so. Dobro promešajte dok se svi sastojci ne sjedine.",
      "Šnicle vratine stavite u marinadu i dobro ih utrljajte, pazeći da su sve strane ravnomerno prekrivene.",
      "Pokrijte posudu i ostavite da se meso marinira u frižideru najmanje 2 sata, a idealno preko noći.",
      "Zagrejte roštilj ili tiganj na srednje jakoj vatri.",
      "Pecite vešalice na roštilju ili u tiganju 7-10 minuta sa svake strane, ili dok ne budu pečene i blago pougljene.",
      "Poslužite toplo uz prilog po izboru (krompir, salata, ajvar, itd.)."
    ],
    prepTime: "20 minuta + mariniranje (minimum 2 sata, idealno preko noći)",
    cookTime: "15-20 minuta",
    servings: 4
  },
  "Ražnjići": {
    name: "Ražnjići",
    ingredients: [
      "1 kg svinjskog ili pilećeg mesa (od buta ili karea), isečenog na kockice veličine 2-3 cm",
      "1 velika glavica crnog luka, iseckana",
      "3 čena belog luka, sitno iseckana",
      "100 ml ulja",
      "50 ml crvenog vinskog sirćeta",
      "1 kašika mlevene crvene paprike (slatke)",
      "1 kašičica mlevene crvene paprike (ljute, opciono)",
      "1 kašičica suvog biljnog začina (vegeta)",
      "1/2 kašičice bibera",
      "1 kašičica soli (ili po ukusu)",
      "Drveni štapići za ražnjiće (prethodno potopljeni u vodu na 30 minuta)",
      "Povrće po izboru (paprika, tikvice, crveni luk), isečeno na komade slične veličine kao meso (opciono)"
    ],
    instructions: [
      "U velikoj posudi pomešajte iseckani crni i beli luk, ulje, sirće, slatku i ljutu papriku (ako koristite), suvi biljni začin, biber i so.",
      "Dodajte kockice mesa u marinadu i dobro promešajte da se meso ravnomerno obloži.",
      "Pokrijte posudu i ostavite u frižideru najmanje 2 sata, ili idealno preko noći.",
      "Pre nego što počnete sa pečenjem, izvadite štapiće iz vode.",
      "Nanižite meso na štapiće, ostavljajući malo prostora između komada. Ako koristite povrće, naizmenično nižite meso i povrće.",
      "Zagrejte roštilj na srednju temperaturu.",
      "Pecite ražnjiće oko 15-20 minuta, okrećući ih često, dok meso ne bude pečeno i lepo porumeni. Pazite da se ne prepeku.",
      "Poslužite toplo sa prilozima po želji (pomfrit, salata, ajvar)."
    ],
    prepTime: "30 minuta (+ najmanje 2 sata mariniranja)",
    cookTime: "15-20 minuta",
    servings: 6
  },
  "Karađorđeva šnicla": {
    name: "Karađorđeva šnicla",
    ingredients: [
      "4 svinjske ili teleće šnicle (oko 150g svaka)",
      "150g kajmaka",
      "100g šunke, isečene na tanke listove",
      "3 jaja",
      "100g brašna",
      "150g prezli",
      "So",
      "Biber",
      "Ulje za prženje"
    ],
    instructions: [
      "Šnicle istanjiti tučkom za meso između dva sloja plastične folije. Posoliti i pobiberiti.",
      "Na svaku šniclu staviti sloj kajmaka, a preko kajmaka poređati listove šunke.",
      "Šnicle pažljivo urolati i učvrstiti čačkalicama.",
      "U tri odvojena tanjira pripremiti: brašno, umućena jaja i prezle.",
      "Svaku rolnicu uvaljati prvo u brašno, zatim u jaja, pa na kraju u prezle.",
      "U dubljem tiganju zagrejati ulje.",
      "Pržiti šnicle na umerenoj vatri dok ne porumene sa svih strana (oko 5-7 minuta sa svake strane).",
      "Izvaditi šnicle iz tiganja i staviti ih na papirni ubrus da se ocede od viška masnoće.",
      "Ukloniti čačkalice pre serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Dimljena rebra": {
    name: "Dimljena rebra",
    ingredients: [
      "1.5 - 2 kg svinjskih rebara (baby back ili spare ribs)",
      "2 kašike mlevene paprike",
      "1 kašika belog luka u prahu",
      "1 kašika crnog luka u prahu",
      "1 kašika braon šećera",
      "1 kašičica mlevenog bibera",
      "1 kašičica soli",
      "1/2 kašičice kajenske paprike (opciono)",
      "2 šolje tečnosti za dimljenje (jabukovača, sok od jabuke, pivo, voda)",
      "Omiljeni BBQ sos (opciono)"
    ],
    instructions: [
      "Priprema rebara: Uklonite tanku membranu sa unutrašnje strane rebara. Osušite rebra papirnim ubrusima.",
      "Priprema začina: U maloj posudi pomešajte mlevenu papriku, beli luk u prahu, crni luk u prahu, braon šećer, biber, so i kajensku papriku (ako koristite).",
      "Začinjavanje rebara: Ravnomerno nanesite smesu začina na obe strane rebara, utrljavajući začine u meso.",
      "Pušač: Zagrejte pušač na 110-120°C. Stavite rebra u pušač i kuvajte 4-6 sati, prskajući ih tečnošću za dimljenje svakih sat vremena kako biste ih održavali vlažnim.",
      "Rerna: Zagrejte rernu na 150°C. Stavite rebra na rešetku iznad pleha (sa tečnošću za dimljenje na dnu pleha). Pokrijte rebra folijom i pecite 3-4 sata. Skinite foliju i pecite još 1-2 sata.",
      "Glaziranje (opciono): Poslednjih 30 minuta kuvanja, namažite rebra omiljenim BBQ sosom.",
      "Odmor: Izvadite rebra iz pušača/rerne i ostavite ih da odmore 10-15 minuta pre sečenja i serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "4-6 sati (zavisno od metode)",
    servings: 6
  },
  "Roštilj meso": {
    name: "Roštilj meso",
    ingredients: [
      "1 kg svinjskog vrata, isečenog na šnicle",
      "500g pilećeg belog mesa, isečenog na kockice",
      "500g ćevapa",
      "200g slanine, isečene na tanke listove",
      "1 glavica crnog luka, sitno iseckana",
      "4 čena belog luka, sitno iseckana ili izgnječena",
      "2 kašike senfa",
      "2 kašike mlevene paprike (slatke)",
      "1 kašika suvog biljnog začina (vegeta)",
      "1 kašičica bibera",
      "1/2 kašičice čili papričice (opciono)",
      "100 ml ulja",
      "So po ukusu",
      "Limun za serviranje (opciono)"
    ],
    instructions: [
      "Priprema marinade: U velikoj posudi pomešati crni i beli luk, senf, mlevenu papriku, suvi biljni začin, biber, čili papričicu (ako se koristi), ulje i so. Dobro promešati.",
      "Mariniranje mesa: Svinjski vrat i piletinu staviti u posudu sa marinadom. Rukama dobro utrljati marinadu u meso, tako da bude ravnomerno prekriveno. Pokriti posudu i ostaviti u frižideru najmanje 2 sata, idealno preko noći.",
      "Priprema roštilja: Zapaliti roštilj i sačekati da se stvori žar. Podmazati rešetku roštilja sa malo ulja.",
      "Svinjski vrat peći na umerenoj vatri oko 10-15 minuta sa svake strane, ili dok ne bude potpuno pečen.",
      "Piletinu peći na umerenoj vatri oko 8-10 minuta sa svake strane, ili dok ne bude potpuno pečena. Piletinu možete peći i na ražnjićima naizmenično sa povrćem.",
      "Ćevape peći na umerenoj vatri oko 5-7 minuta sa svake strane, dok ne dobiju lepu boju i budu pečeni.",
      "Slaninu peći na roštilju dok ne postane hrskava.",
      "Serviranje: Meso servirati toplo, uz priloge po želji (pomfrit, krompir salatu, ajvar, luk). Po želji, meso posuti sokom od limuna."
    ],
    prepTime: "30 minuta + mariniranje (minimum 2 sata, idealno preko noći)",
    cookTime: "20-30 minuta (zavisno od mesa i temperature)",
    servings: 6
  },
  "Hamburger": {
    name: "Hamburger",
    ingredients: [
      "150g mlevene junetine",
      "1 hamburger zemička",
      "1 list zelene salate",
      "1 kriška paradajza",
      "1 kriška crvenog luka",
      "2 kriške kiselih krastavčića",
      "1 kašika majoneza",
      "1 kašika kečapa",
      "1 kašičica senfa",
      "So",
      "Biber",
      "Ulje za prženje (opciono)"
    ],
    instructions: [
      "Mleveno meso oblikujte u pljeskavicu debljine oko 1.5cm. Začinite solju i biberom po ukusu.",
      "Zagrejte tiganj na srednjoj vatri. Ako koristite ulje, dodajte malu količinu u tiganj.",
      "Pecite pljeskavicu 5-7 minuta sa svake strane, ili dok ne dobije željenu pečenost.",
      "Dok se pljeskavica peče, prepolovite zemičku i možete je kratko zagrejati u tiganju ili rerni.",
      "Kada je pljeskavica gotova, sklonite je sa vatre.",
      "Sastavite hamburger: Na donju polovinu zemičke nanesite majonez, zatim stavite list zelene salate, krišku paradajza, krišku crvenog luka i krastavčiće.",
      "Stavite pljeskavicu preko povrća.",
      "Na pljeskavicu nanesite kečap i senf.",
      "Poklopite gornjom polovinom zemičke i poslužite odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },
  "Hotdog": {
    name: "Hotdog",
    ingredients: [
      "1 viršla",
      "1 pecivo za hotdog",
      "Senf",
      "Kečap",
      "Kiseli krastavčići (opciono), iseckani"
    ],
    instructions: [
      "Skuvajte viršlu. Možete je kuvati u vodi na šporetu, u mikrotalasnoj pećnici ili na roštilju. Ukoliko je kuvate u vodi, neka vri oko 3-5 minuta. Ako koristite mikrotalasnu, stavite je u posudu sa malo vode i kuvajte na visokoj temperaturi 30-60 sekundi.",
      "Dok se viršla kuva, pripremite pecivo. Možete ga zagrejati u rerni, na tosteru ili u tiganju.",
      "Izvadite viršlu iz vode ili mikrotalasne.",
      "Stavite viršlu u pecivo.",
      "Dodajte senf i kečap po ukusu.",
      "Ako želite, dodajte iseckane kisele krastavčiće.",
      "Poslužite odmah."
    ],
    prepTime: "2 minuta",
    cookTime: "5 minuta",
    servings: 1
  },
  "Pečene paprike": {
    name: "Pečene paprike",
    ingredients: [
      "1 kg crvene paprike (babure ili šilje)",
      "3-4 čena belog luka, sitno iseckana",
      "50 ml ulja (suncokretovo ili maslinovo)",
      "30 ml sirćeta (vinsko ili jabukovo)",
      "So po ukusu",
      "Biber po ukusu",
      "Sveži peršun, sitno iseckan (opciono)"
    ],
    instructions: [
      "Rernu zagrejati na 200°C.",
      "Paprike oprati i osušiti.",
      "Paprike poređati na pleh obložen papirom za pečenje.",
      "Peći u zagrejanoj rerni 30-40 minuta, ili dok koža paprike ne pocrni i ne počne da se odvaja. Paprike povremeno okretati da se ravnomerno ispeku.",
      "Pečene paprike izvaditi iz rerne i staviti u veliku posudu sa poklopcem ili u plastičnu kesu. Zatvoriti i ostaviti da se ohlade 15-20 minuta (parenje će olakšati ljuštenje).",
      "Kada su se paprike dovoljno ohladile da se mogu rukovati, oljuštiti im kožu, ukloniti semenke i peteljke.",
      "Oljuštene paprike iseći na trake ili komade po želji.",
      "U činiji pomešati iseckan beli luk, ulje, sirće, so i biber.",
      "Preliti paprike pripremljenom smesom i dobro promešati.",
      "Posuti iseckanim peršunom (opciono).",
      "Paprike služiti tople ili hladne."
    ],
    prepTime: "15 minuta",
    cookTime: "45 minuta",
    servings: 6
  },
  "Roštilj povrće": {
    name: "Roštilj povrće",
    ingredients: [
      "1 crvena paprika",
      "1 žuta paprika",
      "1 tikvica",
      "1 patlidžan",
      "1 crveni luk",
      "200g šampinjona",
      "2 čena belog luka, sitno iseckana",
      "4 kašike maslinovog ulja",
      "1 kašika balzamiko sirćeta",
      "1 kašičica sušenog origana",
      "So po ukusu",
      "Biber po ukusu"
    ],
    instructions: [
      "Pripremite povrće: Operite i osušite paprike, tikvice, patlidžan i luk.",
      "Isecite povrće: Paprike isecite na četvrtine, tikvice i patlidžan na kolutove debljine oko 1 cm, a crveni luk na kriške. Šampinjone ostavite cele ili ih prepolovite ako su veći.",
      "Pripremite marinadu: U činiji pomešajte maslinovo ulje, balzamiko sirće, iseckan beli luk, origano, so i biber.",
      "Marinarajte povrće: Stavite isečeno povrće u činiju sa marinadom i dobro promešajte da se svo povrće ravnomerno obloži. Ostavite da odstoji najmanje 15 minuta.",
      "Zagrejte roštilj: Zagrejte roštilj na srednju temperaturu.",
      "Grilujte povrće: Stavite povrće na roštilj i grilujte ga sa svake strane dok ne omekša i dobije lepe tragove od roštilja (oko 5-7 minuta po strani).",
      "Poslužite: Sklonite povrće sa roštilja i poslužite toplo kao prilog ili glavno jelo."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Roštilje sa sirom": {
    name: "Roštilje sa sirom",
    ingredients: [
      "500g mlevenog mesa (junećeg ili mešanog)",
      "1 glavica crnog luka, sitno iseckana",
      "2 čena belog luka, izgnječena",
      "1 jaje",
      "50g prezli",
      "1 kašičica mlevene paprike",
      "1/2 kašičice bibera",
      "1 kašičica soli",
      "150g tvrdog sira (gauda, edamer ili kačkavalj), isečenog na kockice",
      "2 kašike ulja za prženje"
    ],
    instructions: [
      "U velikoj posudi pomešajte mleveno meso, crni luk, beli luk, jaje i prezle.",
      "Dodajte mlevenu papriku, biber i so. Dobro promešajte dok se svi sastojci ne sjedine.",
      "Uzimajte manje količine smese i oblikujte u pljeskavice.",
      "U sredinu svake pljeskavice stavite nekoliko kockica sira.",
      "Pažljivo zatvorite pljeskavicu kako sir ne bi iscurio tokom pečenja.",
      "Zagrejte ulje u tiganju na srednjoj vatri.",
      "Pecite pljeskavice oko 5-7 minuta sa svake strane, dok ne porumene i budu pečene iznutra.",
      "Poslužite toplo uz prilog po želji (pomfrit, salata, lepinje)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Dimljena pršuta": {
    name: "Dimljena pršuta",
    ingredients: [
      "1 svinjski but (oko 6-8 kg)",
      "Morska so (oko 5-7% težine buta)",
      "Beli luk (5-6 čenova, izgnječen)",
      "Crni biber (2 kašike, mleveni)",
      "Lovorov list (5-6 komada, izmrvljen)",
      "Ruzmarin (2 kašike, sveži ili suvi)",
      "Žalfija (2 kašike, sveža ili suva)",
      "Kleka bobice (1 kašika, izmrvljene)",
      "Crveno vino (1 šolja)"
    ],
    instructions: [
      "Priprema mesa: Očistite svinjski but od viška masnoće i opne.",
      "Soljenje: U velikoj posudi ili kadi, pomešajte morsku so, izgnječeni beli luk, biber, lovorov list, ruzmarin, žalfiju i kleka bobice.",
      "Mariniranje: Utrljajte smesu soli i začina u meso, pazeći da ravnomerno prekrijete celu površinu. Sipajte crveno vino preko mesa.",
      "Skladištenje: Stavite meso u veliku, čistu posudu, pritisnite ga teškim predmetom (npr. kamenom ili ciglom umotanom u foliju) i ostavite u hladnoj prostoriji (4-8°C) 7-10 dana. Svaki dan okrenite meso.",
      "Ispiranje: Nakon soljenja, isperite meso hladnom vodom kako biste uklonili višak soli.",
      "Sušenje: Osušite meso papirnim ubrusima i okačite ga na hladnom, provetrenom mestu 1-2 dana da se površina prosuši.",
      "Dimljenje: Dimite meso hladnim dimom (temperatura ispod 25°C) 3-6 meseci. Koristite suvo drvo bukve, hrasta ili voćaka. Dimite 2-3 puta nedeljno po nekoliko sati.",
      "Sušenje i sazrevanje: Nakon dimljenja, pršutu okačite na hladnom, tamnom i provetrenom mestu da se suši i sazreva 3-6 meseci."
    ],
    prepTime: "7-10 dana (soljenje i mariniranje)",
    cookTime: "3-6 meseci (dimljenje i sušenje)",
    servings: 15
  },
  "Ražnjevići": {
    name: "Ražnjevići",
    ingredients: [
      "500g svinjskog mesa (od buta ili vrata), isečenog na kockice 2-3cm",
      "300g junećeg mesa (od buta), isečenog na kockice 2-3cm",
      "200g dimljene slanine, isečene na kockice 2-3cm",
      "1 velika glavica crnog luka, isečena na četvrtine",
      "1-2 crvene ili zelene paprike, isečene na komade 2-3cm",
      "2 kašike ulja",
      "1 kašičica mlevene paprike",
      "1/2 kašičice bibera",
      "1 kašičica suvog biljnog začina (vegete)",
      "So po ukusu",
      "Drveni štapići za ražnjiće (potopljeni u vodu najmanje 30 minuta)"
    ],
    instructions: [
      "Pripremite meso, slaninu, luk i papriku.",
      "U posudi pomešajte ulje, mlevenu papriku, biber, suvi biljni začin i so.",
      "Dodajte meso u marinadu i dobro promešajte. Ostavite da odstoji najmanje 30 minuta u frižideru, a idealno i duže (do nekoliko sati).",
      "Na drvene štapiće naizmenično nižite meso (svinjetinu, junetinu), slaninu, luk i papriku.",
      "Zagrejte roštilj ili tiganj na srednjoj vatri.",
      "Pecite ražnjiće oko 20-25 minuta, okrećući ih povremeno, dok meso ne bude pečeno i blago karamelizovano.",
      "Služite toplo sa prilogom po želji (pomfrit, ajvar, luk)."
    ],
    prepTime: "30 minuta",
    cookTime: "20-25 minuta",
    servings: 4
  },
  "Pašticada": {
    name: "Pašticada",
    ingredients: [
      "1.5 kg goveđeg buta (ili frikando)",
      "150 g suve slanine, iseckane na kockice",
      "2 velike glavice crnog luka, sitno iseckane",
      "3 šargarepe, iseckane na kolutove",
      "2 korena celera, iseckana na kockice",
      "4 čena belog luka, sitno iseckana",
      "200 ml suvog crnog vina",
      "500 ml goveđeg bujona",
      "2 kašike koncentrata paradajza",
      "1 kašika senfa",
      "1 kašičica suvog ruzmarina",
      "1 kašičica suve majčine dušice",
      "5-6 zrna bibera",
      "2-3 lista lovora",
      "5-6 suvih šljiva, bez koštica",
      "50 ml maslinovog ulja",
      "So i biber po ukusu",
      "Brašno za uvaljati meso"
    ],
    instructions: [
      "Goveđi but očistiti od žilica i opni. Posoliti i pobiberiti.",
      "Meso uvaljati u brašno.",
      "U velikom loncu ili dubljoj šerpi zagrejati maslinovo ulje. Zapeći meso sa svih strana dok ne dobije lepu braon boju. Izvaditi meso iz lonca i ostaviti sa strane.",
      "U isti lonac dodati iseckanu slaninu i pržiti dok ne postane hrskava.",
      "Dodati iseckani crni luk, šargarepu i celer. Dinstati dok povrće ne omekša, oko 10 minuta.",
      "Dodati sitno iseckani beli luk, koncentrat paradajza, senf, ruzmarin, majčinu dušicu, biber i lovorov list. Kratko propržiti, oko 1 minut.",
      "Vratiti meso u lonac.",
      "Dodati crno vino i pustiti da proključa, pa kuvati nekoliko minuta da alkohol ispari.",
      "Uliti goveđi bujon tako da prekrije meso. Dodati suve šljive.",
      "Poklopiti i kuvati na niskoj temperaturi 4-5 sati, ili dok meso ne postane veoma mekano i lako se raspada viljuškom. Povremeno proveravati i po potrebi dodati još bujona ili vode.",
      "Kada je meso kuvano, izvaditi ga iz lonca i ostaviti da se malo prohladi.",
      "Sos procediti kroz sito, uklanjajući čvrste komade povrća i začina.",
      "Vratiti sos u lonac i kuvati ga još nekoliko minuta da se malo zgusne, po potrebi.",
      "Meso iseći na tanje komade ili šnite.",
      "Servirati meso preliveno sosom. Kao prilog poslužiti pire krompir, njoke ili testeninu."
    ],
    prepTime: "30 minuta",
    cookTime: "4-5 sati",
    servings: 8
  },
  "Teleća pečenja": {
    name: "Teleća pečenja",
    ingredients: [
      "1.5 kg telećeg mesa (but ili plećka)",
      "2 glavice crnog luka",
      "4 čena belog luka",
      "2 šargarepe",
      "200 ml belog vina",
      "500 ml goveđe supe ili vode",
      "2 kašike ulja",
      "1 kašičica suvog biljnog začina",
      "1/2 kašičice mlevenog bibera",
      "1 kašičica soli",
      "Sveži peršun (za dekoraciju)"
    ],
    instructions: [
      "Zagrejte rernu na 180°C.",
      "Meso operite i osušite papirnim ubrusom.",
      "Utrljajte so, biber i suvi biljni začin u meso.",
      "U velikoj šerpi ili posudi za pečenje, zagrejte ulje na srednjoj vatri.",
      "Zapečite meso sa svih strana dok ne dobije lepu boju. Izvadite meso iz šerpe i ostavite sa strane.",
      "U istoj šerpi, dodajte seckani crni luk, beli luk i šargarepu. Pržite dok povrće ne omekša i dobije blagu boju, oko 5-7 minuta.",
      "Vratite meso u šerpu preko povrća.",
      "Prelijte belim vinom i ostavite da provri, stružući dno šerpe da biste oslobodili sve ukusne komadiće.",
      "Dodajte goveđu supu ili vodu, tako da meso bude delimično potopljeno.",
      "Poklopite šerpu (ili je prekrijte aluminijumskom folijom ako koristite posudu za pečenje).",
      "Pecite u zagrejanoj rerni 2-2.5 sata, ili dok meso ne omekša i bude lako za sečenje viljuškom. Proveravajte nivo tečnosti tokom pečenja i po potrebi dodajte još supe ili vode.",
      "Izvadite meso iz šerpe i ostavite da se odmori 10-15 minuta pre sečenja.",
      "Sos procedite i vratite u šerpu. Kuvajte na srednjoj vatri dok se sos ne zgusne.",
      "Isecite meso na kriške i prelijte sosom. Ukrasite svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "2-2.5 sata",
    servings: 8
  },
  "Jagnjetina": {
    name: "Jagnjetina",
    ingredients: [
      "2-2.5 kg jagnjetine (plećka ili but)",
      "2 glavice crnog luka, krupno iseckane",
      "4-5 čena belog luka, izgnječena",
      "2 kašike suvog biljnog začina (vegeta)",
      "1 kašičica crnog bibera",
      "1 kašičica mlevene crvene paprike (slatka ili ljuta po ukusu)",
      "200 ml ulja",
      "500 ml vode ili juneće supe",
      "So po ukusu",
      "Sveža majčina dušica ili ruzmarin (opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Pripremite jagnjetinu: Operite i osušite meso papirnim ubrusima. Ukoliko ima viška masnoće, uklonite je.",
      "Utrljajte začine: U manjoj posudi pomešajte suvi biljni začin, biber, mlevenu papriku i so. Dobro utrljajte smesu začina u meso sa svih strana.",
      "Pripremite povrće: U dublji pleh za pečenje stavite iseckani crni i beli luk.",
      "Stavite meso u pleh: Položite jagnjetinu preko luka u pleh. Prelijte uljem.",
      "Dodajte tečnost: Sipajte vodu ili juneću supu u pleh, tako da tečnost bude oko 1-2 cm dubine.",
      "Pecite: Pokrijte pleh aluminijumskom folijom i pecite u zagrejanoj rerni 2 sata.",
      "Smanjite temperaturu: Smanjite temperaturu na 160°C, uklonite foliju i nastavite da pečete još 1-2 sata, ili dok meso ne postane mekano i lako se odvaja od kosti. Povremeno prelivajte meso sokovima iz pleha.",
      "Odmaranje: Izvadite pečenu jagnjetinu iz rerne i ostavite da se odmori 15-20 minuta pre sečenja."
    ],
    prepTime: "30 minuta",
    cookTime: "3-4 sata",
    servings: 8
  },
  "Prasetina": {
    name: "Prasetina",
    ingredients: [
      "3-4 kg prasetine (sa kožom)",
      "2 kašike soli",
      "1 kašičica bibera",
      "1 kašičica aleve paprike (opciono)",
      "Voda"
    ],
    instructions: [
      "Zagrejte rernu na 200°C (392°F).",
      "Prasetinu dobro operite i osušite papirnim ubrusima.",
      "Nožem zasecite kožu prasetine na kockice ili rombove, pazeći da ne zasečete meso ispod.",
      "Pomešajte so, biber i alevu papriku (ako koristite).",
      "Utrljajte smesu začina ravnomerno po celoj prasetini, posebno u zarezima na koži.",
      "Stavite prasetinu u veliki pleh za pečenje.",
      "Ulijte oko 2-3 cm vode na dno pleha.",
      "Pokrijte pleh aluminijumskom folijom.",
      "Pecite u zagrejanoj rerni 2 sata.",
      "Nakon 2 sata, skinite foliju.",
      "Smanjite temperaturu rerne na 160°C (320°F).",
      "Nastavite da pečete prasetinu još 2-3 sata, ili dok koža ne postane hrskava i zlatno-smeđa, a meso mekano. Povremeno prelijte prasetinu sokom iz pleha.",
      "Ako koža počne prebrzo da gori, ponovo je prekrijte folijom na kraće vreme.",
      "Izvadite prasetinu iz rerne i ostavite da odstoji 15-20 minuta pre sečenja."
    ],
    prepTime: "20 minuta",
    cookTime: "4-5 sati",
    servings: 8
  },
  "Govedina": {
    name: "Govedina",
    ingredients: [
      "1.5-2 kg goveđeg mesa (rostbif ili but)",
      "2 glavice crnog luka, krupno iseckane",
      "4 čena belog luka, izgnječena",
      "2 šargarepe, iseckane na kolutove",
      "2 kašike suvog biljnog začina (vegeta)",
      "1 kašičica crnog bibera",
      "1 kašičica dimljene paprike",
      "200 ml crvenog vina",
      "400 ml goveđeg bujona",
      "3 kašike maslinovog ulja",
      "1 grančica ruzmarina",
      "2 lovorova lista",
      "So po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Pripremite govedinu: Operite i osušite meso papirnim ubrusima.",
      "Utrljajte začine: Pomešajte suvi biljni začin, biber, dimljenu papriku i so. Dobro utrljajte smesu začina u meso sa svih strana.",
      "U velikoj šerpi zagrejte maslinovo ulje na visokoj vatri.",
      "Zapečite meso sa svih strana dok ne dobije lepu zlatno-braon boju (oko 3-4 minuta po strani).",
      "Izvadite meso iz šerpe i ostavite sa strane.",
      "U istoj šerpi dinštajte luk, beli luk i šargarepu oko 5 minuta.",
      "Dodajte crveno vino i kuvajte 2-3 minuta da alkohol ispari.",
      "Vratite meso u šerpu, dodajte bujon, ruzmarin i lovorov list.",
      "Pokrijte šerpu poklopcem ili aluminijumskom folijom.",
      "Pecite u rerni 1.5-2 sata, ili dok meso ne postane mekano.",
      "Povremeno proveravajte i po potrebi dodajte više bujona.",
      "Izvadite meso i ostavite da odmori 10-15 minuta pre sečenja.",
      "Sos možete procediti i poslužiti uz meso."
    ],
    prepTime: "20 minuta",
    cookTime: "2-2.5 sata",
    servings: 7
  },

  // Arabic
  "Hummus": {
    name: "Hummus",
    ingredients: [
      "250g suve leblebije ili 1 konzerva (400g) oceđenih leblebija",
      "1/4 šolje tahinija",
      "1/4 šolje sveže ceđenog soka od limuna",
      "2-3 čena belog luka, sitno iseckana",
      "1/4 šolje hladne vode (po potrebi)",
      "2 kašike maslinovog ulja, plus za serviranje",
      "1/2 kašičice soli",
      "1/4 kašičice mlevenog kumina",
      "mlevena crvena paprika i peršun za dekoraciju"
    ],
    instructions: [
      "(Ako koristite suve) Potopite leblebije preko noći, zatim kuvajte ~30 min do mekoće i sačuvajte malo tečnosti",
      "U blender stavite leblebije, tahini, limunov sok, beli luk, so i kumin",
      "Blendajte i dodajte hladnu vodu (ili tečnost od kuvanja) do kremaste teksture",
      "Dodajte maslinovo ulje i još kratko blendajte",
      "Prebacite u činiju, prelijte uljem, pospite paprikom i peršunom"
    ],
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 7
  },
  "Tabbouleh": {
    name: "Tabbouleh",
    ingredients: [
      "1 šolja sitnog bulgura",
      "2 šolje ključale vode",
      "1 krastavac, sitno iseckan",
      "1 manji crveni luk, sitno iseckan",
      "1 velika veza peršuna, sitno iseckan",
      "1 veza nane, sitno iseckana",
      "3 paradajza, sitno iseckana",
      "1/4 šolje svežeg soka od limuna",
      "1/4 šolje maslinovog ulja",
      "so i biber"
    ],
    instructions: [
      "Prelijte bulgur ključalom vodom, poklopite i ostavite ~15 min, po potrebi ocedite",
      "Iseckajte krastavac, luk, peršun, nanu i paradajz",
      "Pomešajte bulgur i povrće",
      "Dodajte limunov sok, maslinovo ulje, so i biber i promešajte",
      "Ohladite 30 min pre serviranja"
    ],
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 5
  },
  "Falafel": {
    name: "Falafel",
    ingredients: [
      "250g suve leblebije (obavezno suve, ne konzervirane)",
      "1 mala glavica crnog luka, grubo iseckana",
      "2-3 čena belog luka",
      "1/2 veze svežeg peršuna, iseckan",
      "1/4 veze svežeg korijandera (opciono)",
      "1 kašičica mlevenog kumina",
      "1 kašičica mlevenog korijandera",
      "1/2 kašičice kajenskog bibera (opciono)",
      "1 kašičica soli",
      "1/2 kašičice bibera",
      "1 kašika brašna",
      "1 kašičica praška za pecivo",
      "ulje za prženje"
    ],
    instructions: [
      "Namočite leblebije 12-24h, isperite i ocedite",
      "U procesoru usitnite leblebije sa lukom, belim lukom i biljem (grublja smesa)",
      "Umešajte začine, brašno i prašak za pecivo; ohladite 30 min",
      "Oblikujte kuglice i pržite u ulju na ~180°C 3-4 min do zlatne boje",
      "Ocedite i poslužite uz pita hleb, humus i tahini"
    ],
    prepTime: "20 min",
    cookTime: "20 min",
    servings: 6
  },
  "Shawarma": {
    name: "Shawarma",
    ingredients: [
      "600g pilećeg ili junećeg buta, tanko isečenog",
      "1/4 šolje maslinovog ulja",
      "1/4 šolje limunovog soka",
      "2 kašike jogurta",
      "2 čena belog luka, izgnječen",
      "1 kašičica mlevenog kumina",
      "1 kašičica mlevenog korijandera",
      "1/2 kašičice aleve paprike",
      "1/2 kašičice kurkume",
      "1/4 kašičice cimeta",
      "so i biber",
      "4 lepinje (pita)",
      "povrće i umaci po izboru"
    ],
    instructions: [
      "Pomešajte sastojke marinade i ubacite meso; marinirajte min. 2h (idealno preko noći)",
      "Rasporedite meso na pleh i pecite na 220°C 20-25 min do karamelizacije",
      "Isecite na manje komade, zagrejte lepinje",
      "Napunite lepinje mesom, povrćem i umakom"
    ],
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 4
  },
  "Mansaf": {
    name: "Mansaf",
    ingredients: [
      "2 kg jagnjetine sa kostima, na komade",
      "2 kašike maslinovog ulja",
      "1 veliki crni luk, sitno iseckan",
      "4 čena belog luka, sitno iseckana",
      "1 kašičica kurkume",
      "1/2 kašičice kardamoma",
      "1/4 kašičice cimeta",
      "1/4 kašičice belog bibera",
      "2 lovorova lista",
      "2 kg jameed (potopljen preko noći)",
      "3 šolje pirinča dugog zrna",
      "6 šolja vode/bujona",
      "1/2 šolje pečenih badema ili pinjola",
      "peršun, tanki hleb"
    ],
    instructions: [
      "Zapečite jagnjetinu na ulju; izvadite i odložite",
      "Prodinstajte luk i beli luk; vratite meso i dodajte začine i lovor",
      "Prelijte vodom od jameeda (po potrebi dodajte vodu) i krčkajte 3-4h do mekoće",
      "Skuvajte pirinač; procedite sos od jameeda i zagrejte",
      "Servirajte: hleb, pirinač, meso; prelijte sosom i ukrasite orašastim plodovima i peršunom"
    ],
    prepTime: "30 min",
    cookTime: "240 min",
    servings: 7
  },
  "Kibbeh": {
    name: "Kibbeh",
    ingredients: [
      "500g finog bulgura",
      "500g nemasne mlevene jagnjetine/govedine",
      "1 veliki crni luk, sitno iseckan",
      "1/2 šolje sveže nane, sitno iseckane",
      "1/2 šolje svežeg peršuna, sitno iseckanog",
      "1 kašičica mlevenog cimeta",
      "1/2 kašičice aleve paprike (bahar)",
      "so i biber",
      "ulje za prženje"
    ],
    instructions: [
      "Namočite bulgur u hladnoj vodi 30 min, dobro ocedite",
      "Pomešajte bulgur, meso, luk, bilje i začine; umesite do kompaktne mase",
      "Oblikujte kuglice/ovalne oblike; po želji punite",
      "Pržite u ulju 5-7 min po strani do zlatne boje",
      "Ocedite i poslužite uz jogurt ili tahini"
    ],
    prepTime: "45 min",
    cookTime: "20 min",
    servings: 7
  },
  "Baklava": {
    name: "Baklava",
    ingredients: [
      "500g tankih kora",
      "500g mlevenih oraha",
      "200g otopljenog putera",
      "1 kašičica cimeta (opciono)",
      "500g šećera",
      "400ml vode",
      "1 limun (kriške)",
      "1 kašika meda (opciono)"
    ],
    instructions: [
      "Pomešajte orahe sa cimetom; premažite pleh puterom",
      "Slažite kore u slojevima, svaku premazujte puterom i posipajte orasima",
      "Isecite na rombove/kvadrate pre pečenja",
      "Pecite na 180°C oko 45 min do zlatne boje",
      "Skuvajte sirup (šećer+voda+limun), zgusnite, po želji dodajte med i ohladite",
      "Vruću baklavu prelijte hladnim sirupom i ohladite do upijanja"
    ],
    prepTime: "45 min",
    cookTime: "45 min",
    servings: 24
  },
  "Dolma": {
    name: "Dolma",
    ingredients: [
      "1 kg paprika babura",
      "2 glavice crnog luka, sitno iseckane",
      "500g mlevenog mesa (junetina ili mešano)",
      "1 šolja pirinča (200g)",
      "1 šolja seckanog peršuna",
      "2 kašike suvog biljnog začina",
      "1 kašičica mlevene crvene paprike",
      "1/2 kašičice bibera",
      "so",
      "2 kašike ulja",
      "500 ml kuvanog paradajza ili soka",
      "200 ml vode"
    ],
    instructions: [
      "Odsecite vrhove paprika i očistite semenke",
      "Prodinstajte luk, dodajte meso i dinstajte do promene boje",
      "Dodajte pirinač, peršun i začine; kratko prodinstajte i sklonite",
      "Napuni paprike (ostavite prostor), poklopite vrhovima",
      "Poređajte uspravno, prelijte paradajzom i dodajte vode po potrebi",
      "Kuvajte lagano 60-90 min do mekoće"
    ],
    prepTime: "45 min",
    cookTime: "90 min",
    servings: 7
  },
  "Mujaddara": {
    name: "Mujaddara",
    ingredients: [
      "1 šolja zelene/braon sočiva",
      "1 šolja pirinča dugog zrna",
      "2 velika luka, tanko isečena",
      "4 kašike maslinovog ulja",
      "1 kašičica kumina u prahu",
      "1/2 kašičice cimeta (opciono)",
      "so i biber",
      "voda ili povrtni bujon",
      "peršun za dekor"
    ],
    instructions: [
      "Skuvajte sočivo u 3 šolje vode ~20 min do al dente; sačuvajte tečnost",
      "Karamelizujte luk na ulju 20-25 min; polovinu odložite",
      "Dodajte pirinač i začine uz luk i kratko propržite",
      "Nalijte 2 šolje tečnosti od sočiva (dodajte po potrebi), začinite i kuvajte 15-20 min",
      "Umešajte sočivo, poslužite sa preostalim lukom i peršunom"
    ],
    prepTime: "15 min",
    cookTime: "45 min",
    servings: 4
  },
  "Fattouche": {
    name: "Fattouche",
    ingredients: [
      "2 pita hleba (na kockice)",
      "1/2 glavice zelene salate, iscepkane",
      "1 krastavac, na kockice",
      "2 paradajza, na kockice",
      "1/2 zelene paprike, na kockice",
      "1/2 crvenog luka, sitno",
      "1/4 šolje sveže nane, seckane",
      "1/4 šolje peršuna, seckanog",
      "1/4 šolje rotkvica, tanke kolutove",
      "1/4 šolje maslinovog ulja",
      "3 kašike limunovog soka",
      "1 kašika sumaka",
      "1 čen belog luka, izgnječen",
      "so i biber"
    ],
    instructions: [
      "Pecite kockice pite na 200°C 5-10 min do hrskavosti i ohladite",
      "Pomešajte sveže sastojke u činiji",
      "Umutite ulje, limun, sumak, beli luk, so i biber",
      "Prelijte salatu dresingom i ubacite hrskavi pita hleb pred serviranje"
    ],
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 4
  },
  "Labneh": {
    name: "Labneh",
    ingredients: [
      "500g punomasnog grčkog jogurta",
      "1/2 kašičice soli",
      "maslinovo ulje za preliv",
      "začini po želji (za'atar, aleppo, sušena menta)"
    ],
    instructions: [
      "Pomešajte jogurt i so",
      "Sipajte u gazu preko cediljke i ostavite u frižideru 24-48h da se ocedi",
      "Prebacite u posudu, prelijte uljem i pospite začinima"
    ],
    prepTime: "5 min",
    cookTime: "24-48 h",
    servings: 8
  },
  "Za'atar": {
    name: "Za'atar",
    ingredients: [
      "2 kašike susama (tostiranog)",
      "2 kašike sumaka",
      "1 kašika sušenog origana",
      "1 kašika sušenog majorana",
      "1 kašičica sušene majčine dušice",
      "1/2 kašičice morske soli"
    ],
    instructions: [
      "(Opciono) Tostirajte susam do zlatne boje i ohladite",
      "Pomešajte sve začine sa susamom i uskladištite u teglicu"
    ],
    prepTime: "5 min",
    cookTime: "5 min",
    servings: 10
  },
  "Manakish": {
    name: "Manakish",
    ingredients: [
      "1 šolja tople vode",
      "1 kašičica šećera",
      "2 kašičice suvog kvasca",
      "2 1/2 šolje brašna (+ za posip)",
      "1 kašičica soli",
      "2 kašike maslinovog ulja (+ za premaz)",
      "1/2 šolje za'atara",
      "1/4 šolje maslinovog ulja (za premaz)"
    ],
    instructions: [
      "Aktivirajte kvasac sa toplom vodom i šećerom 5-10 min",
      "Zamesite testo sa brašnom, solju i uljem; dignite ~1h",
      "Podelite na 6, razvucite krugove",
      "Pomešajte za'atar sa uljem i premažite krugove",
      "Pecite na 220°C 15-20 min do zlatnog"
    ],
    prepTime: "20 min",
    cookTime: "20 min",
    servings: 6
  },
  "Kofta": {
    name: "Kofta",
    ingredients: [
      "500g mlevene junetine ili jagnjetine",
      "1 srednji crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1/4 šolje peršuna, sitno iseckanog",
      "1/4 šolje nane, sitno iseckane",
      "1 jaje",
      "1/4 šolje prezli",
      "1 kašičica mlevenog kumina",
      "1 kašičica mlevenog korijandera",
      "1/2 kašičice aleve paprike (opciono)",
      "so i biber",
      "2 kašike maslinovog ulja"
    ],
    instructions: [
      "Pomešajte sve sastojke i dobro umesite",
      "Oblikujte duguljaste okruglice",
      "Pržite na ulju uz okretanje 20-25 min do pečenog",
      "Poslužite uz pirinač, salatu ili pita hleb"
    ],
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 4
  },
  "Kabsa": {
    name: "Kabsa",
    ingredients: [
      "1.5 kg jagnjetine ili piletine, na komade",
      "3 šolje basmati pirinča (opranog)",
      "2 velika luka, sitno",
      "4 čena belog luka, sitno",
      "2 paradajza, iseckana",
      "2 crvene paprike, iseckane",
      "1/2 šolje paradajz pirea",
      "4 šolje supe",
      "1/4 šolje biljnog ulja",
      "2 kašike začina za kabsu (mešavina)",
      "1 kašičica šafrana (opciono)",
      "so i biber",
      "peršun i prženi bademi/pinjoli za dekor"
    ],
    instructions: [
      "Prodinstajte luk do zlatnog; dodajte beli luk, paradajz i papriku",
      "Dodajte meso, zapečite, umešajte paradajz pire i začine",
      "Nalijte supu i krčkajte ~1.5h do mekoće mesa",
      "Izvadite meso, procedite supu; dodajte opran pirinač i šafran i kuvajte 15-20 min",
      "Vratite meso preko pirinča, kratko uparite i poslužite sa dekoracijom"
    ],
    prepTime: "30 min",
    cookTime: "120 min",
    servings: 7
  },
  "Ouzi": {
    name: "Ouzi",
    ingredients: [
      "2 kg jagnjetine (plećka/but sa kostima)",
      "2 šolje pirinča dugog zrna",
      "4 šolje bujona",
      "2 velika luka, sitno",
      "4 čena belog luka, sitno",
      "1/2 šolje pinjola",
      "1/2 šolje badema, blanširanih i sečenih",
      "1/4 šolje suvog grožđa",
      "2 kašike začina za ouzi (ili cimet, aleva, kurkuma, biber)",
      "2 lovorova lista",
      "2 kašike maslinovog ulja",
      "so i biber",
      "peršun i jogurt (opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 160°C; začinite i zapečite jagnjetinu, pa izvadite",
      "Prodinstajte luk i beli luk, dodajte začine i lovor",
      "Vratite meso i nalijte bujonom; poklopite i pecite 3-4h do mekoće",
      "Izvadite meso, procedite tečnost (oko 3 šolje)",
      "Tostirajte pinjole i bademe; skuvajte pirinač u procedjenoj tečnosti",
      "Umešajte suvo grožđe; servirajte pirinač sa komadima jagnjetine i pospite jezgrima"
    ],
    prepTime: "45 min",
    cookTime: "240 min",
    servings: 7
  },
  "Maqluba": {
    name: "Maqluba",
    ingredients: [
      "1 kg jagnjetine ili piletine, na komade",
      "2 šolje basmati pirinča",
      "2 patlidžana (kolutovi, posoljeni i osušeni)",
      "2 šargarepe, krupnije",
      "2 krompira, krupnije",
      "1 veliki luk, sitno",
      "4 čena belog luka, sitno",
      "1 šolja graška",
      "4 šolje supe",
      "2 kašike ulja",
      "1 kašičica kurkume",
      "1 kašičica cimeta",
      "1/2 kašičice aleve paprike",
      "1/2 kašičice kardamoma",
      "2 lovorova lista",
      "so i biber",
      "peršun, pinjoli/bademi za dekor"
    ],
    instructions: [
      "Zapečite meso; izvadite. Prodinstajte luk i beli luk, dodajte začine",
      "Vratite meso, dodajte šargarepu i krompir; nalijte supom i krčkajte 45-60 min",
      "Isperite pirinač do bistre vode",
      "Složite u loncu: patlidžan, meso i povrće, grašak, pa pirinač",
      "Kuvajte na tihoj vatri 10-15 min da se ukusi sjedine; odmorite 5-10 min",
      "Okrenite lonac na tanjir i ukrasite"
    ],
    prepTime: "30 min",
    cookTime: "120 min",
    servings: 7
  },
  "Knafeh": {
    name: "Knafeh",
    ingredients: [
      "500g kadaif rezanaca",
      "250g neslanog sira (Akkawi/Mozzarella ili mešavina)",
      "150g putera, otopljenog",
      "1/2 šolje seckanih pistacija",
      "(opciono) narandžasta prehrambena boja",
      "2 šolje šećera",
      "1 šolja vode",
      "1 kašika soka od limuna",
      "1 kašičica ružine vodice ili vode od pomorandže (opciono)"
    ],
    instructions: [
      "Skuvajte sirup (šećer+voda), dodajte limun i arome; krčkajte 10-15 min i ohladite",
      "Razdvojte kadaif i pomešajte sa otopljenim puterom (po želji obojite)",
      "Sir po potrebi odsolite i narendajte",
      "U pleh (~25cm) utisnite polovinu kadaifa, rasporedite sir, prekrijte ostatkom i blago pritisnite",
      "Pecite na 180°C 30-40 min do zlatnog, prelijte hladnim sirupom i pospite pistacijama"
    ],
    prepTime: "20 min",
    cookTime: "45 min",
    servings: 8
  },
  "Qatayef": {
    name: "Qatayef",
    ingredients: [
      "250g brašna",
      "1 kašika šećera",
      "2 kašičice praška za pecivo",
      "1/2 kašičice suvog kvasca",
      "prstohvat soli",
      "400ml mlake vode",
      "1 kašika griza",
      "200g mlevenih oraha",
      "2 kašike šećera (za punjenje)",
      "1 kašičica cimeta",
      "1-2 kašike ružine vodice (punjenje, po ukusu)",
      "200g šećera (sirup)",
      "100ml vode (sirup)",
      "1 kašika limunovog soka (sirup)",
      "1 kašika ružine vodice (sirup)",
      "ulje za prženje ili sprej za pečenje"
    ],
    instructions: [
      "Umutite testo za palačinke (brašno, šećer, prašak, kvasac, so, voda, griz) i ostavite 30 min",
      "Ispecite male palačinke samo sa jedne strane (mehurići na površini)",
      "Pomešajte orahe, šećer, cimet i ružinu vodicu za punjenje",
      "Punite i zatvorite na polumesec",
      "Pržite do zlatnog ili pecite na 180°C 10-15 min; prelijte hladnim sirupom"
    ],
    prepTime: "30 min",
    cookTime: "20 min",
    servings: 20
  },
  "Mahshi": {
    name: "Mahshi",
    ingredients: [
      "1 kg malih tikvica (izdubljenih)",
      "250 g mlevene jagnjetine/govedine",
      "1 šolja pirinča kratkog zrna, oprana",
      "1 veliki luk, sitno",
      "2 čena belog luka, sitno",
      "1 svežanj peršuna, sitno",
      "1 svežanj mirođije, sitno",
      "1 kašičica aleve paprike",
      "1/2 kašičice kumina",
      "1/2 kašičice cimeta",
      "so i biber",
      "4 kašike maslinovog ulja",
      "500 ml pileće supe ili vode",
      "sok od 1 limuna"
    ],
    instructions: [
      "Izdubite tikvice",
      "Pomešajte meso, pirinač, luk, beli luk, bilje i začine",
      "Pažljivo napunite tikvice (ostavite malo prostora)",
      "Poređajte u lonac, dodajte ulje, supu/vodu do pola i limunov sok",
      "Kuvajte poklopljeno ~90 min do mekoće pirinča i tikvica"
    ],
    prepTime: "45 min",
    cookTime: "90 min",
    servings: 7
  },

  // Asian
  "Pad Thai": {
    name: "Pad Thai",
    description: "Autentičan ukus Tajlanda u vašoj kuhinji. Ukusno jelo sa pirinčanim rezancima, tofuom, škampima i karakterističnim Pad Thai sosom.",
    ingredients: [
      "200g širokih pirinčanih rezanaca",
      "150g škampa, očišćenih i bez ljuske",
      "150g čvrstog tofua, isečenog na kockice",
      "2 jaja",
      "2 šake klica pasulja",
      "2 mlada luka, iseckana",
      "2 kašike seckanog pečenog kikirikija",
      "1 limeta, isečena na kriške",
      "2 kašike biljnog ulja",
      "3 kašike ribljeg sosa",
      "2 kašike soka tamarinda",
      "2 kašike palminog šećera (može i smeđi šećer)",
      "1 kašika pirinčanog sirćeta",
      "1/2 kašičice čili pahuljica (po ukusu)"
    ],
    instructions: [
      "Pirinačne rezance potopiti u vruću vodu 15-20 minuta, dok ne omekšaju. Ocediti i ostaviti sa strane.",
      "U činiji pomešati sastojke za Pad Thai sos. Dobro promešati dok se šećer ne rastopi.",
      "U voku ili velikom tiganju zagrejati biljno ulje na srednje jakoj vatri.",
      "Dodati tofu i pržiti dok ne porumeni sa svih strana. Izvaditi tofu iz voka i ostaviti sa strane.",
      "U isti vok dodati škampe i pržiti dok ne postanu ružičasti i skuvani, oko 2-3 minuta. Izvaditi škampe iz voka i ostaviti sa strane.",
      "U vok dodati malo ulja, razbiti jaja i ispržiti ih, mešajući ih da se razbiju u komade.",
      "Dodati oceđene rezance u vok sa jajima.",
      "Preliti rezance Pad Thai sosom i dobro promešati da se sos ravnomerno rasporedi.",
      "Dodati tofu i škampe nazad u vok.",
      "Dodati klice pasulja i mladi luk. Pržiti još minut, neprestano mešajući, dok se klice pasulja malo ne omekšaju.",
      "Skinuti sa vatre i poslužiti odmah.",
      "Posuti seckanim kikirikijem i poslužiti sa kriškom limete sa strane."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 2
  },
  "Sushi": {
    name: "Sushi",
    description: "Osnovni recept za pripremu sushi rolata (maki).",
    ingredients: [
      "200g sushi pirinač",
      "250ml voda",
      "3 kašike pirinčanog sirćeta",
      "2 kašike šećera",
      "1 kašičica soli",
      "4 lista nori alge",
      "1 krastavac, isečen na štapiće",
      "1 avokado, isečen na kriške",
      "100g dimljeni losos (ili tuna, surimi štapići), isečen na trake",
      "Wasabi (po ukusu)",
      "Soy sos (za serviranje)",
      "Ukiseljeni đumbir (za serviranje)"
    ],
    instructions: [
      "Pirinač isperite nekoliko puta dok voda ne postane bistra.",
      "Stavite pirinač i vodu u šerpu. Poklopite i pustite da provri.",
      "Smanjite vatru na nisku i kuvajte 15 minuta, dok pirinač ne upije svu vodu.",
      "Sklonite sa vatre i ostavite poklopljeno 10 minuta.",
      "U manjoj posudi pomešajte pirinčano sirće, šećer i so. Mešajte dok se šećer ne rastopi.",
      "Pirinač prebacite u veliku činiju. Prelijte ga smesom od sirćeta i pažljivo promešajte drvenom kašikom ili lopaticom, vodeći računa da ne gnječite pirinač. Ostavite da se ohladi do sobne temperature.",
      "Stavite list nori alge na bambusov podmetač za sushi (makisu).",
      "Ravnomerno rasporedite tanak sloj pirinča preko nori alge, ostavljajući oko 1 cm praznog prostora na gornjoj ivici.",
      "Na sredinu pirinča stavite željeni fil (krastavac, avokado, losos/tuna/surimi).",
      "Koristeći bambusov podmetač, čvrsto urolajte sushi rolat.",
      "Vlažnim nožem isecite rolat na 6-8 komada.",
      "Ponovite postupak sa preostalim sastojcima.",
      "Servirajte sushi sa wasabijem, soy sosom i ukiseljenim đumbirom."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 3
  },
  // Noodles



  "Lo Mein": {
    name: "Lo Mein",
    description: "Klasičan recept za Lo Mein, jednostavan i brz za pripremu. Savršen za brzi ručak ili večeru.",
    ingredients: [
      "450g Lo Mein nudli (ili špagete)",
      "2 kašike biljnog ulja",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica svežeg đumbira, izrendana",
      "200g pilećeg mesa, isečenog na tanke trake (ili tofu, škampi, ili povrće)",
      "1 šolja isečenog brokolija",
      "1/2 šolje isečene šargarepe",
      "1/2 šolje isečenog luka",
      "1/4 šolje soja sosa",
      "2 kašike oyster sosa (opciono)",
      "1 kašika meda ili smeđeg šećera",
      "1 kašičica susamovog ulja",
      "Susam za posipanje (opciono)",
      "Zeleni luk, isečen (za dekoraciju)"
    ],
    instructions: [
      "Skuvajte nudle prema uputstvima na pakovanju. Ocedite i isperite hladnom vodom. Ostavite sa strane.",
      "Zagrejte biljno ulje u velikom tiganju ili voku na srednjoj vatri.",
      "Dodajte beli luk i đumbir i pržite oko 30 sekundi, dok ne zamirišu.",
      "Dodajte piletinu (ili tofu/škampi/povrće) i pržite dok ne bude gotovo, oko 5-7 minuta.",
      "Dodajte brokoli, šargarepu i luk i pržite još 3-5 minuta, dok povrće ne omekša.",
      "U maloj posudi, pomešajte soja sos, oyster sos (ako koristite), med ili šećer i susamovo ulje.",
      "Dodajte sos u tiganj sa piletinom i povrćem. Promešajte da se sjedini.",
      "Dodajte kuvane nudle u tiganj i promešajte da se sve dobro obloži sosom.",
      "Poslužite toplo, posuto susamom i zelenim lukom (po želji)."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Chow Mein": {
    name: "Chow Mein",
    description: "Klasičan recept za Chow Mein, kinesko jelo sa rezancima, povrćem i proteinima po izboru. Brzo se sprema i lako prilagođava vašim ukusima.",
    ingredients: [
      "450g jaja rezanaca za Chow Mein (ili špagete)",
      "2 kašike biljnog ulja",
      "250g piletine, govedine, svinjetine ili tofua, iseckanog na tanke komade",
      "1 šolja iseckanog kupusa",
      "1 šolja iseckane šargarepe",
      "1 šolja iseckanog brokolija",
      "1/2 šolje iseckanog luka",
      "2 čena belog luka, sitno iseckana",
      "1 kašika svežeg djumbira, izrendana",
      "1/4 šolje soja sosa",
      "2 kašike oyster sosa (opciono, može se zemeniti sa još soja sosa)",
      "1 kašika susamovog ulja",
      "1 kašičica šećera",
      "1/4 kašičice belog bibera",
      "Susam za posipanje (opciono)",
      "Zeleni luk, iseckan, za dekoraciju (opciono)"
    ],
    instructions: [
      "Skuvajte rezance prema uputstvima na pakovanju. Procedite i ostavite sa strane.",
      "U velikom voku ili tiganju zagrejte biljno ulje na visokoj temperaturi.",
      "Dodajte meso ili tofu i pržite dok ne porumeni i bude skroz skuvano. Izvadite iz voka i ostavite sa strane.",
      "U isti vok dodajte luk, beli luk i djumbir. Pržite dok ne zamiriše, oko 1 minut.",
      "Dodajte kupus, šargarepu i brokoli. Pržite dok povrće ne omekša, oko 5-7 minuta.",
      "U voku pomešajte soja sos, oyster sos (ako koristite), susamovo ulje, šećer i beli biber.",
      "Vratite meso ili tofu u vok.",
      "Dodajte skuvane rezance u vok i dobro promešajte da se svi sastojci sjedine.",
      "Pržite još 2-3 minuta, povremeno mešajući, dok se rezanci ne zagreju.",
      "Poslužite toplo. Posipajte susamom i zelenim lukom, ako želite."
    ],
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Udon": {
    name: "Udon",
    description: "Udon su guste pšenične rezance popularne u japanskoj kuhinji. Mogu se poslužiti tople u čorbi ili hladne sa umakom.",
    ingredients: [
      "200g suvih udon rezanaca",
      "4 šolje dašija (japanska supa od morskih algi i ribe) ili pileće supe",
      "2 kašike soja sosa",
      "1 kašika mirina (slatko pirinčano vino)",
      "1 mladi luk, sitno iseckan",
      "1 komad naribanog đumbira (oko 1 kašičice)",
      "Dodatni preljevi po izboru: tempura, tofu, poširana jaja, alge nori"
    ],
    instructions: [
      "Skuvajte udon rezance prema uputstvima na pakovanju. Obično je potrebno oko 8-10 minuta.",
      "Dok se rezanci kuvaju, u šerpi zagrejte daši ili pileću supu.",
      "Dodajte soja sos i mirin u supu i promešajte. Probajte i prilagodite ukus po želji.",
      "Kada su rezanci skuvani, ocedite ih i isperite hladnom vodom da biste zaustavili kuvanje.",
      "Podelite rezance u dve činije.",
      "Prelijte rezance vrelom supom.",
      "Ukrasite seckanim mladim lukom i naribanim đumbirom.",
      "Dodajte željene preljeve.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Soba": {
    name: "Soba",
    description: "Brzo i jednostavno jelo sa soba rezancima i povrćem.",
    ingredients: [
      "200g soba rezanaca",
      "1 kašika maslinovog ulja",
      "1 čen belog luka, sitno iseckan",
      "1 crvena paprika, iseckana na tanke trake",
      "1 šargarepa, iseckana na tanke trake",
      "100g brokule, iseckane na cvetiće",
      "2 kašike soja sosa",
      "1 kašika meda ili javorovog sirupa",
      "1 kašičica susamovog ulja (opciono)",
      "Susam za posipanje (opciono)",
      "Zeleni luk, sitno iseckan (opciono)"
    ],
    instructions: [
      "Skuvajte soba rezance prema uputstvima na pakovanju. Ocedite ih i isperite hladnom vodom. Ostavite ih sa strane.",
      "U velikom tiganju ili voku zagrejte maslinovo ulje na srednje jakoj vatri. Dodajte beli luk i pržite dok ne zamiriše (oko 30 sekundi).",
      "Dodajte papriku i šargarepu i pržite 3-5 minuta, dok povrće malo ne omekša.",
      "Dodajte brokulu i pržite još 2-3 minuta.",
      "U tiganj dodajte soba rezance, soja sos, i med (ili javorov sirup). Dobro promešajte da se svi sastojci sjedine.",
      "Dodajte susamovo ulje (ako koristite) i promešajte.",
      "Kuvajte još 1-2 minuta, dok se rezanci ne zagreju.",
      "Poslužite toplo, posuto susamom i zelenim lukom (ako koristite)."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Rice Noodles": {
    name: "Rice Noodles",
    description: "Jednostavan recept za ukusne pirinčane rezance, savršene kao prilog ili osnova za glavno jelo.",
    ingredients: [
      "250g pirinčanih rezanaca",
      "2 kašike ulja (biljnog ili susamovog)",
      "2 čena belog luka, sitno iseckana",
      "1 komad đumbira (oko 2cm), sitno iseckan",
      "1 šargarepa, isečena na tanke štapiće",
      "1 paprika (crvena ili žuta), isečena na tanke trake",
      "100g brokolija, isečenog na cvetiće",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja (opciono)",
      "1 kašičica meda ili javorovog sirupa (opciono)",
      "Sveži vlašac ili mladi luk, iseckan za posipanje"
    ],
    instructions: [
      "Pripremite rezance prema uputstvima na pakovanju. Obično se potapaju u vrelu vodu dok ne omekšaju. Ocedite i isperite hladnom vodom.",
      "U velikom tiganju ili voku zagrejte ulje na srednjoj vatri.",
      "Dodajte beli luk i đumbir i pržite dok ne zamirišu, oko 30 sekundi.",
      "Dodajte šargarepu, papriku i brokoli. Pržite dok povrće ne omekša, ali ostane hrskavo, oko 5 minuta.",
      "Dodajte oceđene pirinčane rezance u tiganj.",
      "Ulijte soja sos, susamovo ulje (ako ga koristite) i med/javorov sirup (ako ga koristite). Dobro promešajte da se svi sastojci sjedine.",
      "Kuvajte još 2-3 minuta, dok se rezanci zagreju i upiju sos.",
      "Poslužite odmah, posuto svežim vlašcem ili mladim lukom."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 4
  },

  "Egg Noodles": {
    name: "Egg Noodles",
    description: "Domaca testenina od jaja, savrsena kao prilog ili osnova za razna jela.",
    ingredients: [
      "200g brasna, tip 00 ili glatko",
      "2 velika jajeta",
      "Prstohvat soli",
      "1-2 kasike vode (po potrebi)"
    ],
    instructions: [
      "Na cistu radnu povrsinu prosijte brasno i napravite udubljenje u sredini.",
      "U udubljenje dodajte jaja i so.",
      "Viljuskom polako umutite jaja, postepeno uvlaceci brasno sa unutrasnje strane udubljenja.",
      "Nastavite da mesate dok se ne formira gruba smesa.",
      "Rukama umesite testo dok ne postane glatko i elasticno, otprilike 8-10 minuta. Ako je testo suvo, dodajte kasiku vode. Ako je previse lepljivo, dodajte malo brasna.",
      "Formirajte testo u kuglu, umotajte u plasticnu foliju i ostavite da odstoji 30 minuta na sobnoj temperaturi.",
      "Podelite testo na dva dela.",
      "Razvijte jedan deo testa na pobrasnjenoj povrsini sto tanje mozete. Idealno bi bilo koristiti masinu za testeninu.",
      "Ostavite razvijeno testo da se malo prosusi, oko 10-15 minuta.",
      "Zarolajte testo i isecite na zeljenu sirinu rezanaca.",
      "Odmotajte rezance i pospite ih brasnom da se ne zalepe.",
      "Ponovite korake 8-11 sa preostalim testom.",
      "U velikoj serpi prokuvajte vodu sa malo soli.",
      "Dodajte rezance u kljucalu vodu i kuvajte 5-7 minuta, ili dok ne isplivaju na povrsinu i ne budu al dente.",
      "Procedite rezance i odmah ih posluzite sa zeljnim sosom ili kao prilog."
    ],
    prepTime: "20 minuta",
    cookTime: "5-7 minuta",
    servings: 4
  },

  "Instant Noodles": {
    name: "Instant Noodles",
    description: "Brz i jednostavan obrok, idealan za studente ili kada vam se žuri.",
    ingredients: [
      "1 pakovanje instant nudli (bilo koji ukus)",
      "300 ml vode",
      "Začin iz pakovanja",
      "(Opciono) 1 jaje",
      "(Opciono) Povrće po želji (npr. smrznuta mešavina, mladi luk)"
    ],
    instructions: [
      "U šerpu sipajte vodu i stavite je da proključa.",
      "Kada voda proključa, dodajte instant nudle.",
      "Kuvajte 2-3 minuta, ili dok nudle ne omekšaju.",
      "Uklonite šerpu sa vatre.",
      "Dodajte začin iz pakovanja i dobro promešajte.",
      "(Opciono) Razbijte jaje u nudle i promešajte dok se jaje ne skuva.",
      "(Opciono) Dodajte povrće po želji.",
      "Sipajte nudle u činiju i odmah poslužite."
    ],
    prepTime: "2 minuta",
    cookTime: "3 minuta",
    servings: 1
  },

  "Dan Dan Noodles": {
    name: "Dan Dan Noodles",
    description: "Brzi i ukusni rezanci u pikantnom sosu od susama i čilija.",
    ingredients: [
      "200g sušenih rezanaca (noodles) za jaja",
      "2 kašike susamove paste (tahini)",
      "2 kašike soja sosa",
      "1 kašika crnog sirćeta (Chinkiang vinegar ili pirinčano sirće)",
      "1 kašika susamovog ulja",
      "1 kašičica šećera",
      "1-2 kašičice čili ulja (u zavisnosti od toga koliko ljuto želite)",
      "1 režanj belog luka, sitno iseckan",
      "2 kašike mlevenog kikirikija",
      "100g mlevenog svinjskog mesa ili piletine",
      "2 mlada luka, sitno iseckana",
      "1 kašičica sečuanskog bibera (opciono), lagano tostiranog i samlevenog"
    ],
    instructions: [
      "Skuvajte rezance prema uputstvima na pakovanju. Kada su gotovi, iscedite ih i ostavite sa strane.",
      "U činiji pomešajte susamovu pastu, soja sos, crno sirće, susamovo ulje, šećer, čili ulje i beli luk. Dobro promešajte dok se ne sjedini.",
      "U tiganju na srednjoj vatri propržite mleveno meso dok ne porumeni. Izvadite meso iz tiganja i ostavite sa strane.",
      "U istu činiju sa sosom dodajte kuvane rezance i prženo mleveno meso. Dobro promešajte da se rezanci ravnomerno oblože sosom.",
      "Podelite rezance u dve činije.",
      "Pospite mlevenim kikirikijem, seckanim mladim lukom i, ako koristite, mlevenim sečuanskim biberom.",
      "Odmah poslužite."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Laksa": {
    name: "Laksa",
    description: "Laksa je pikantna supa sa rezancima popularna u jugoistočnoj Aziji. Ovaj recept je za brzu i ukusnu verziju.",
    ingredients: [
      "1 kašika biljnog ulja",
      "1 veliki luk, sitno iseckan",
      "2 režnja belog luka, sitno iseckana",
      "1 crvena čili papričica, sitno iseckana (po ukusu)",
      "2 kašike paste od laksze",
      "1 kašičica mlevenog đumbira",
      "1 kašičica kurkume",
      "1 l pilećeg ili povrtnog bujona",
      "400ml kokosovog mleka",
      "200g škampi, očišćenih i odmrznutih",
      "200g tofu, isečen na kockice",
      "200g pirinčanih rezanaca",
      "1 šargarepa, isečena na tanke štapiće",
      "100g pasulja, isečenog na pola",
      "Sok od 1 limete",
      "Sveži korijander, za dekoraciju"
    ],
    instructions: [
      "U velikom loncu zagrejte ulje na srednjoj vatri. Dodajte luk, beli luk i čili i pržite dok ne omekšaju, oko 5 minuta.",
      "Dodajte pastu od laksze, đumbir i kurkumu i pržite još 1 minut, dok ne zamiriše.",
      "Ulijte bujon i kokosovo mleko. Pustite da provri, a zatim smanjite vatru i dinstajte 10 minuta.",
      "Dodajte škampe i tofu i kuvajte dok se škampi ne skuvaju, oko 3-5 minuta.",
      "U međuvremenu, skuvajte pirinčane rezance prema uputstvima na pakovanju. Ocedite ih i podelite u činije.",
      "Dodajte šargarepu i pasulj u supu i kuvajte 2 minuta dok ne omekšaju.",
      "Umešajte sok od limete.",
      "Prelijte rezance supom.",
      "Ukrasite svežim korijanderom i poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "Beef Noodle Soup": {
    name: "Beef Noodle Soup",
    description: "Ova supa je bogata i ukusna, savršena za hladne dane. Sadrži sočnu govedinu, rezance i povrće u bogatom bujonu.",
    ingredients: [
      "1 kg goveđeg mesa (npr. juneća kolenica ili grudi)",
      "2 kašike maslinovog ulja",
      "1 veliki crni luk, iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "4 čena belog luka, sitno iseckana",
      "2.5 l goveđe supe (ili vode + 2 kocke za supu)",
      "1 lovorov list",
      "1 kašičica sušenog timijana",
      "So i biber po ukusu",
      "200 g rezanaca za supu (jaja rezanci ili špageti)",
      "Sveži peršun, iseckan (za serviranje)"
    ],
    instructions: [
      "Govedinu isecite na kocke veličine zalogaja.",
      "U velikom loncu ili šerpi zagrejte maslinovo ulje na srednjoj vatri. Dodajte govedinu i pržite dok ne porumeni sa svih strana.",
      "Dodajte iseckani crni luk, šargarepu i celer u lonac. Dinstajte povrće oko 5-7 minuta, dok ne omekša.",
      "Dodajte iseckani beli luk i dinstajte još minut, dok ne zamiriše.",
      "U lonac sipajte goveđu supu (ili vodu sa kockama za supu). Dodajte lovorov list i timijan. Posolite i pobiberite po ukusu.",
      "Pustite da proključa, a zatim smanjite vatru na nisku i poklopite lonac. Krčkajte supu najmanje 2 sata, ili dok govedina ne bude veoma mekana.",
      "Nakon 2 sata, izvadite govedinu iz supe i isecite je na manje komade ili je razdvojite viljuškom. Vratite meso u lonac.",
      "Dodajte rezance u supu i kuvajte ih prema uputstvima na pakovanju, obično oko 8-10 minuta, dok ne omekšaju.",
      "Uklonite lovorov list pre serviranja.",
      "Sipajte supu u činije i pospite svežim iseckanim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "2 sata 30 minuta",
    servings: 6
  },

  "Chicken Noodle Soup": {
    name: "Chicken Noodle Soup",
    description: "Klasična i utešna supa sa piletinom i rezancima, savršena za hladne dane ili kada se osećate bolesno.",
    ingredients: [
      "1.5 kg celo pile ili pileći komadi (bataci, karabaci)",
      "2 litre pilećeg bujona ili vode",
      "1 veliki crni luk, iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog timijana",
      "1/2 kašičice sušenog ruzmarina",
      "250g rezanaca za supu (tanki ili deblji, po želji)",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za serviranje)"
    ],
    instructions: [
      "U velikom loncu ili šerpi stavite pile, pileći bujon (ili vodu), crni luk, šargarepu, celer, beli luk, timijan i ruzmarin.",
      "Pustite da provri, a zatim smanjite temperaturu i kuvajte poklopljeno 30-40 minuta, ili dok piletina ne bude potpuno kuvana.",
      "Izvadite piletinu iz lonca i ostavite da se malo ohladi.  Kad se ohladi dovoljno da se može rukovati, iskidajte meso sa kostiju i vratite ga u lonac.",
      "U lonac dodajte rezance i kuvajte prema uputstvima na pakovanju, obično oko 8-10 minuta, ili dok ne omekšaju.",
      "Začinite solju i biberom po ukusu.",
      "Servirajte toplo, posuto svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 6
  },

  "Spicy Noodles": {
    name: "Spicy Noodles",
    description: "Brzi i ukusni noodles sa pikantnim sosom. Idealni za brzi ručak ili večeru.",
    ingredients: [
      "200g noodles (jaja, pšenice ili rižini)",
      "2 kašike ulja (suncokretovo ili sezamovo)",
      "2 čena belog luka, sitno iseckana",
      "1 mala crvena paprika, sitno iseckana",
      "1 komad svežeg đumbira (oko 2cm), izrendan",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica šećera",
      "1/2 - 1 kašičica čili pahuljica (ili po ukusu)",
      "1/4 šolje vode ili bujona",
      "Zeleni luk, iseckan (za dekoraciju)",
      "Susam, tostiran (za dekoraciju)"
    ],
    instructions: [
      "Skuvajte noodles prema uputstvima na pakovanju. Ocedite i isperite hladnom vodom. Ostavite sa strane.",
      "U voku ili velikom tiganju zagrejte ulje na srednjoj vatri.",
      "Dodajte beli luk, papriku i đumbir. Pržite oko 1-2 minuta, dok ne zamiriše.",
      "U činiji pomešajte soja sos, susamovo ulje, pirinčano sirće, šećer i čili pahuljice.",
      "Dodajte sos u vok i promešajte. Dodajte vodu ili bujon i pustite da provri.",
      "Smanjite vatru i kuvajte sos oko 2-3 minuta, dok se malo ne zgusne.",
      "Dodajte skuvane noodles u sos i dobro promešajte da se noodles oblože sosom.",
      "Poslužite vruće, posuto zelenim lukom i susamom."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Cold Noodles": {
    name: "Cold Noodles",
    description: "Osvježavajuće jelo sa hladnim rezancima, savršeno za tople dane.",
    ingredients: [
      "200g sušenih rezanaca (udon, ramen ili soba)",
      "1 krastavac",
      "1 šargarepa",
      "1/2 crvene paprike",
      "2 mlada luka",
      "1/4 šolje soja sosa",
      "2 kašike pirinčanog sirćeta",
      "1 kašika susamovog ulja",
      "1 kašičica meda ili javorovog sirupa",
      "1/2 kašičice mlevenog đumbira",
      "1/4 kašičice belog luka u prahu",
      "Susam za posipanje (opciono)"
    ],
    instructions: [
      "Skuvajte rezance prema uputstvima na pakovanju.",
      "Procedite rezance i odmah ih isperite hladnom vodom da zaustavite kuvanje. Dobro ocedite.",
      "Krastavac, šargarepu i papriku isecite na tanke štapiće (julienne). Mladi luk sitno iseckajte.",
      "U činiji pomešajte soja sos, pirinčano sirće, susamovo ulje, med (ili javorov sirup), đumbir i beli luk u prahu. Dobro promešajte.",
      "U velikoj činiji pomešajte hladne rezance, iseckano povrće i prelijte pripremljenim sosom. Dobro promešajte da se sve sjedini.",
      "Podelite rezance u činije i pospite susamom (ako koristite).",
      "Servirajte odmah ili rashladite pre služenja."
    ],
    prepTime: "20 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Stir Fried Noodles": {
    name: "Stir Fried Noodles",
    description: "Brzi i ukusni stir-fry rezanci sa povrćem i opcijom proteina.",
    ingredients: [
      "200g sušenih rezanaca (jaja ili pšenice)",
      "1 kašika ulja od kikirikija ili biljnog ulja",
      "1 mali crveni luk, tanko isečen",
      "2 češnja belog luka, sitno iseckana",
      "1 šargarepa, isečena na tanke štapiće",
      "1/2 crvene paprike, isečena na tanke trake",
      "100g brokule, isečene na manje cvetove",
      "50g graška šećerca",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašičica meda ili javorovog sirupa (opciono)",
      "1/2 kašičice đumbira u prahu ili sveže narendanog",
      "Susam za posipanje (opciono)",
      "Čili pahuljice (opciono)"
    ],
    instructions: [
      "Skuvajte rezance prema uputstvima na pakovanju. Ocedite ih i isperite hladnom vodom da se ne zalepe. Ostavite sa strane.",
      "U velikom voku ili tiganju zagrejte ulje od kikirikija na srednje jakoj vatri.",
      "Dodajte crveni luk i beli luk i pržite dok ne omekšaju i postanu mirisni, oko 2-3 minuta.",
      "Dodajte šargarepu i papriku i pržite 3-4 minuta, dok ne omekšaju.",
      "Dodajte brokoli i grašak šećerac i pržite još 2-3 minuta.",
      "U tiganj dodajte kuvane rezance, soja sos, susamovo ulje, med (ako koristite) i đumbir.",
      "Dobro promešajte da se svi sastojci sjedine i da se rezanci ravnomerno prekriju sosom.",
      "Pržite 2-3 minuta, dok se rezanci ne zagreju i sos se malo zgusne.",
      "Poslužite odmah, posuto susamom i čili pahuljicama, po želji."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Noodle Salad": {
    name: "Noodle Salad",
    description: "Osvežavajuća i ukusna salata sa rezancima, idealna za tople dane.",
    ingredients: [
      "300g rezanaca (spaghetti, linguine ili udon)",
      "1 crvena paprika, iseckana na trake",
      "1 žuta paprika, iseckana na trake",
      "1 krastavac, iseckan na kockice",
      "1 šargarepa, narendana",
      "1/2 šolje edamame (oljušten)",
      "1/4 šolje seckanog mladog luka",
      "1/4 šolje seckanog korijandera (opciono)",
      "3 kašike susamovog ulja",
      "2 kašike soja sosa",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica meda ili javorovog sirupa",
      "1/2 kašičice rendanog đumbira",
      "1 čen belog luka, izgnječen",
      "1/4 kašičice ljute papričice u prahu (opciono)",
      "Susam za posipanje (opciono)"
    ],
    instructions: [
      "Skuvajte rezance prema uputstvima na pakovanju. Ocedite i isperite hladnom vodom. Dobro ocedite.",
      "U velikoj činiji pomešajte skuvane rezance, iseckanu papriku (crvenu i žutu), krastavac, narendanu šargarepu, edamame, mladi luk i korijander (ako koristite).",
      "U manjoj činiji pomešajte susamovo ulje, soja sos, pirinčano sirće, med (ili javorov sirup), đumbir, beli luk i ljutu papričicu (ako koristite). Dobro promešajte.",
      "Prelijte salatu dresingom i dobro promešajte da se svi sastojci sjedine.",
      "Poslužite odmah ili ohladite u frižideru pre posluživanja.",
      "Posipajte susamom pre serviranja (opciono)."
    ],
    prepTime: "20 minuta",
    cookTime: "10 minuta",
    servings: 4
  },

  "Curry Noodles": {
    name: "Curry Noodles",
    description: "Brzi i ukusni noodles sa aromatičnim karijem i povrćem. Idealni za ručak ili večeru.",
    ingredients: [
      "200g noodles (jaja ili pšenični)",
      "1 kašika ulja (biljno ili susamovo)",
      "1 mali crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 komad đumbira (oko 2cm), izrendan",
      "1 crvena paprika, iseckana na trake",
      "1 šargarepa, iseckana na štapiće",
      "100g brokule, iseckane na cvetiće",
      "2 kašike kari praha",
      "1 kašika soja sosa",
      "1 kašičica meda ili javorovog sirupa (opciono)",
      "250ml povrtnog ili pilećeg bujona",
      "So i biber po ukusu",
      "Sveži korijander ili peršun za posipanje (opciono)"
    ],
    instructions: [
      "Skuvajte noodles prema uputstvima na pakovanju. Procedite i ostavite sa strane.",
      "U velikom tiganju ili voku zagrejte ulje na srednjoj vatri.",
      "Dodajte crni luk i pržite dok ne postane staklast, oko 3 minuta.",
      "Dodajte beli luk i đumbir i pržite još 1 minut, dok ne zamirišu.",
      "Dodajte crvenu papriku, šargarepu i brokulu. Pržite 5-7 minuta, dok povrće malo ne omekša.",
      "Umešajte kari prah i pržite 1 minut.",
      "Dodajte soja sos, med (ako koristite) i bujon. Pustite da provri, a zatim smanjite vatru i kuvajte 2-3 minuta, dok se sos malo ne zgusne.",
      "Dodajte skuvane noodles u tiganj i dobro promešajte da se sjedine sa sosom.",
      "Začinite solju i biberom po ukusu.",
      "Servirajte toplo, posuto svežim korijanderom ili peršunom (ako koristite)."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Sesame Noodles": {
    name: "Sesame Noodles",
    description: "Brzi i ukusni rezanci u sosu od susama, savršeni za lagani ručak ili večeru.",
    ingredients: [
      "200g sušenih rezanaca (npr. špagete, udon ili ramen)",
      "2 kašike susamovog ulja",
      "3 kašike soja sosa",
      "2 kašike pirinčanog sirćeta",
      "1 kašika putera od kikirikija",
      "1 kašika meda ili javorovog sirupa",
      "1 kašičica rendanog đumbira",
      "1 čen belog luka, izgnječen",
      "1/2 kašičice ljute papričice (opciono)",
      "2 kašike vode",
      "1 kašika susama, za posipanje",
      "Sveži mladi luk, iseckan (za posipanje)"
    ],
    instructions: [
      "Skuvati rezance prema uputstvima na pakovanju. Ocediti i isprati hladnom vodom. Ostaviti sa strane.",
      "U velikoj posudi, pomešati susamovo ulje, soja sos, pirinčano sirće, puter od kikirikija, med, đumbir, beli luk, ljutu papričicu (ako se koristi) i vodu. Dobro promešati dok se svi sastojci ne sjedine u gladak sos.",
      "Dodati skuvane rezance u sos i dobro promešati da se rezanci ravnomerno oblože sosom.",
      "Podeliti rezance u činije.",
      "Posuti susamom i iseckanim mladim lukom.",
      "Poslužiti odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "10 minuta",
    servings: 2
  },
  "Dim Sum": {
    name: "Dim Sum",
    ingredients: [
      "250g mlevene svinjetine",
      "100g sirovih škampa, očišćenih i iseckanih",
      "50g kineskog kupusa (napa), sitno iseckanog",
      "2 mlada luka, sitno iseckana",
      "1 kašika rendanog đumbira",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašičica kukuruznog skroba",
      "1/2 kašičice belog bibera",
      "30 gotovih omotača za wonton ili gyoza",
      "Iseckana šargarepa za dekoraciju (opciono)",
      "Zeleni grašak za dekoraciju (opciono)"
    ],
    instructions: [
      "Priprema fila: U velikoj posudi pomešajte mlevenu svinjetinu, seckane škampe, kineski kupus, mladi luk, đumbir, soja sos, susamovo ulje, kukuruzni skrob i beli biber. Dobro promešajte dok se svi sastojci ne sjedine.",
      "Punjenje omotača: Stavite malu količinu fila (otprilike 1 kašičicu) u centar svakog omotača. Navlažite ivice omotača sa malo vode da bi se bolje zalepili. Presavijte omotač na pola, formirajući polumesec ili trougao. Možete praviti i druge oblike, po želji.",
      "Kuvanje Dim Sum - Kuvanje na pari: Stavite dim sum u korpu za paru obloženu papirom za pečenje. Kuvanje na pari traje 15-20 minuta, ili dok fil ne bude potpuno skuvan.",
      "Kuvanje Dim Sum - Prženje: Zagrejte malo ulja u tiganju. Pržite dim sum dok ne porumene sa svih strana (oko 5-7 minuta). Dodajte malo vode u tiganj i poklopite da se dinstaju nekoliko minuta, dok se fil ne skuva.",
      "Kuvanje Dim Sum - Kuvanje u supi: Dodajte dim sum u supu pri kraju kuvanja. Kuvajte dok ne isplivaju na površinu i dok fil ne bude skuvan.",
      "Serviranje: Servirajte dim sum toplo uz soja sos, čili sos ili drugi omiljeni sos za umakanje. Ukrasite seckanom šargarepom ili zelenim graškom, ako želite."
    ],
    prepTime: "60 min",
    cookTime: "30 min",
    servings: 10
  },
  "Bibimbap": {
    name: "Bibimbap",
    ingredients: [
      "400g govedjeg filea (ili mlevenog mesa)",
      "2 šolje kuvanog pirinča",
      "1 šargarepa, isečena na tanke štapiće",
      "1 krastavac, isečen na tanke štapiće",
      "200g spanaća",
      "200g šampinjona, isečenih na listiće",
      "4 jaja",
      "2 kašike gochujang paste (korejska pasta od čilija)",
      "2 kašike susamovog ulja",
      "2 kašike soja sosa",
      "1 kašika meda ili šećera",
      "1 kašičica mlevenog belog luka",
      "Susam za posipanje",
      "Biljno ulje za prženje",
      "So i biber po ukusu"
    ],
    instructions: [
      "Meso iseći na tanke trake (ako koristite file) i marinirati u soja sosu, belom luku, susamovom ulju, medu (ili šećeru), soli i biberu.",
      "Šargarepu i krastavac posoliti i ostaviti 10 minuta da puste vodu. Nakon toga ih iscediti.",
      "Spanać blanširati u vreloj vodi na kratko (oko 30 sekundi). Procediti i iscediti višak vode. Začiniti susamovim uljem, solju i biberom.",
      "Šampinjone propržiti na malo ulja dok ne omekšaju. Začiniti solju i biberom.",
      "Meso propržiti na malo ulja dok ne bude gotovo.",
      "Ispeći jaja 'na oko'.",
      "Pripremiti činije sa pirinčem kao osnovom.",
      "Posložiti povrće (šargarepu, krastavac, spanać, šampinjone) oko pirinča.",
      "Dodati meso preko povrća.",
      "Staviti jedno jaje 'na oko' na vrh.",
      "Preliti sa gochujang pastom po ukusu i posuti susamom.",
      "Servirati odmah."
    ],
    prepTime: "45 min",
    cookTime: "30 min",
    servings: 4
  },
  "Tom Yum": {
    name: "Tom Yum",
    description: "Kremasta i ljuta tajlandska supa sa aromatičnim biljem, plodovima mora i pečurkama.",
    ingredients: [
      "1.5 litra pileće ili povrtne supe",
      "2 stabljike limunove trave, zgnječene i isečene na komade od 5 cm",
      "5-6 listova limete kaffir (kaffir lime leaves), blago pocepani",
      "5-6 komada galange (ili đumbira), narezane na tanke kriške",
      "4-6 tajlandskih čilija, izdrobljeni (prilagodite količinu po ukusu)",
      "200g šampinjona ili shitake pečuraka, narezane",
      "200g škampa, očišćeni i bez repa",
      "150g lignja, narezane na kolutiće",
      "2-3 kašike ribljeg sosa (fish sauce), po ukusu",
      "2-3 kašike soka od limete, po ukusu",
      "1-2 kašičice šećera, po ukusu",
      "1/4 šolje svežeg korijandera, grubo iseckanog",
      "2 kašike čili paste (optional)",
      "1/4 šolje kokosovog mleka (optional)"
    ],
    instructions: [
      "U velikom loncu, pomešajte supu, limunovu travu, listove limete kaffir, galangal i čili.",
      "Prokuhajte, zatim smanjite vatru i kuvajte 10 minuta, da se arome oslobode.",
      "Dodajte pečurke i kuvajte još 5 minuta, dok ne omekšaju.",
      "Dodajte škampe i lignje. Kuvajte 2-3 minuta, dok plodovi mora ne postanu ružičasti i ne budu kuvani.",
      "Umešajte riblji sos, sok od limete i šećer. Probajte i prilagodite ukus po potrebi. Dodajte čili pastu ako koristite.",
      "Ako želite, umešajte kokosovo mleko za kremastiju verziju.",
      "Uklonite limunovu travu, listove limete kaffir i galangal pre serviranja (nije obavezno, ali poboljšava teksturu).",
      "Poslužite toplo, ukrašeno svežim korijanderom."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },
  "Dumplings": {
    name: "Dumplings",
    ingredients: [
      "250g brašna",
      "1 kašičica praška za pecivo",
      "1/2 kašičice soli",
      "25g margarina ili putera, isečenog na kockice",
      "150ml mleka (ili vode)",
      "Voda ili supa za kuvanje"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, prašak za pecivo i so.",
      "Dodati margarin/puter i prstima utrljati u brašno dok smesa ne postane slična prezlama.",
      "Postepeno dodavati mleko (ili vodu) i mešati dok se ne formira mekano testo.",
      "Na pobrašnjenoj površini, kratko premesiti testo i oblikovati ga u dugačku kobasicu.",
      "Iseći kobasicu na male komade (oko 2-3 cm debljine).",
      "U šerpi zagrejati vodu ili supu do ključanja.",
      "Pažljivo ubaciti dumplings u ključalu vodu ili supu.",
      "Smanjiti vatru i kuvati poklopljeno 15 minuta, ili dok dumplings ne budu kuvani i nabubreli.",
      "Izvaditi dumplings iz vode ili supe rešetkastom kašikom i poslužiti odmah."
    ],
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4
  },
  "Spring Rolls": {
    name: "Spring Rolls",
    ingredients: [
      "12 listova pirinčanog papira",
      "100g pirinčanih nudli",
      "1 šargarepa, isečena na tanke štapiće",
      "1 krastavac, isečen na tanke štapiće",
      "1 paprika (crvena ili žuta), isečena na tanke štapiće",
      "1 avokado, isečen na tanke kriške (opciono)",
      "1 šolja svežeg bosiljka, mente ili korijandera",
      "100g kuvanih škampa, piletine ili tofua (opciono)",
      "Sos od kikirikija ili slatki čili sos za serviranje"
    ],
    instructions: [
      "Pripremite nudle: Skuvajte pirinčane nudle prema uputstvima na pakovanju. Ocedite i isperite hladnom vodom.",
      "Pripremite povrće: Operite i isecite svo povrće na tanke štapiće ili kriške.",
      "Navlažite pirinčani papir: Napunite veliku posudu toplom vodom. Umočite jedan po jedan list pirinčanog papira u vodu na nekoliko sekundi, dok ne omekša, ali ne previše.",
      "Napunite rolnice: Položite omekšali list pirinčanog papira na ravnu površinu. Na sredinu lista stavite malo nudli, šargarepu, krastavac, papriku, avokado (ako koristite), i sveže začinsko bilje. Ako koristite meso, piletinu ili tofu, dodajte i to.",
      "Urolajte rolnice: Presavijte ivice papira preko fila, a zatim čvrsto urolajte od sebe.",
      "Ponovite: Ponovite postupak sa preostalim listovima pirinčanog papira i filom.",
      "Poslužite: Poslužite odmah uz sos od kikirikija ili slatki čili sos za umakanje."
    ],
    prepTime: "30 min",
    cookTime: "0 min",
    servings: 4
  },
  "Bao Buns": {
    name: "Bao Buns",
    ingredients: [
      "300g brašna za hleb",
      "150ml tople vode",
      "2 kašičice suvog kvasca",
      "30g šećera",
      "1/2 kašičice soli",
      "1 kašika ulja",
      "1 kašičica praška za pecivo"
    ],
    instructions: [
      "U toploj vodi rastvorite kvasac i kašičicu šećera. Ostavite da odstoji 5-10 minuta dok se ne zapeni.",
      "U velikoj činiji pomešajte brašno, preostali šećer, so i prašak za pecivo.",
      "Dodajte smesu sa kvascem i ulje u suve sastojke. Mesite dok ne dobijete glatko testo.",
      "Prebacite testo na blago pobrašnjenu površinu i mesite 5-7 minuta dok ne postane elastično.",
      "Stavite testo u nauljenu činiju, okrenite da se premaže uljem, pokrijte krpom i ostavite da narasta na toplom mestu oko 1 sat, ili dok se ne udvostruči.",
      "Nakon što je testo naraslo, premesite ga kratko da izbacite vazduh.",
      "Podelite testo na 12 jednakih delova.",
      "Svaki deo razvaljajte u ovalni oblik, debljine oko 5mm.",
      "Premažite površinu ovala uljem i preklopite ga na pola da formirate polukrug.",
      "Stavite svaki bun na mali komad papira za pečenje.",
      "Poređajte buns u paročistač (ili improvizovani paročistač iznad šerpe sa ključalom vodom).",
      "Pokrijte paročistač i kuvajte na pari 15-20 minuta, dok buns ne budu mekani i pahuljasti.",
      "Isključite vatru i ostavite buns da odstoje u paročistaču još 5 minuta pre nego što ih izvadite."
    ],
    prepTime: "30 min",
    cookTime: "20 min",
    servings: 12
  },
  "Teriyaki": {
    name: "Teriyaki",
    description: "Tradicionalni japanski sos idealan za mariniranje mesa, ribe ili povrća. Ovaj recept nudi jednostavnu verziju koju možete lako napraviti kod kuće.",
    ingredients: [
      "1/2 šolje soja sosa",
      "1/4 šolje mirina (ili suvo šeri)",
      "2 kašike šećera (beli ili braon)",
      "1 kašika sakea (opciono)",
      "1 kašičica mlevenog đumbira",
      "1/2 kašičice belog luka u prahu ili 1 sitno iseckan čen belog luka",
      "1 kašičica kukuruznog skroba (rastvorena u 1 kašičici hladne vode)"
    ],
    instructions: [
      "U maloj šerpi, pomešajte soja sos, mirin (ili šeri), šećer, sake (ako koristite), đumbir i beli luk.",
      "Zagrejte na srednjoj vatri i dovedite do ključanja.",
      "Smanjite vatru i kuvajte oko 10-12 minuta, povremeno mešajući, dok se sos malo ne zgusne.",
      "U manjoj posudi, pomešajte kukuruzni skrob sa hladnom vodom da se rastvori.",
      "Polako dodajte rastvor kukuruznog skroba u šerpu sa sosom, neprekidno mešajući.",
      "Kuvajte još 1-2 minuta, dok se sos ne zgusne do željene gustine.",
      "Sklonite sa vatre i ostavite da se ohladi.",
      "Koristite kao marinadu ili preliv."
    ],
    prepTime: "5 minuta",
    cookTime: "15 minuta",
    servings: 8
  },

  // Serbian homemade
  "Sarma": {
    name: "Sarma",
    ingredients: ["1kg kiselim kupusom", "500g mešanog mesa", "1 šolja pirinča", "1 crni luk", "začini", "slanina"],
    instructions: ["Prži luk i meso", "Dodaj pirinač", "Namotaj u listove kupusa", "Poklopi slaninom", "Krčkaj 2 sata"],
    prepTime: "45 min",
    cookTime: "120 min",
    servings: 8
  },
  "Musaka": {
    name: "Musaka",
    ingredients: ["1kg krompira", "500g mešanog mesa", "2 jajeta", "pavlaka", "sir", "crni luk", "začini"],
    instructions: ["Iseci krompir", "Prži meso sa lukom", "Poredaj u slojeve", "Prelij sa jajima i pavlakom", "Peci 45 minuta"],
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 6
  },

  // Italian  
  "Pica Margherita": {
    name: "Pica Margherita",
    ingredients: ["testo za picu", "300g mozzarella", "400g pelata", "svež bosiljak", "maslinovo ulje", "so"],
    instructions: ["Razvij testo", "Premaži pelatama", "Dodaj sir", "Peci na 250°C", "Dodaj bosiljak"],
    prepTime: "20 min",
    cookTime: "12 min",
    servings: 2
  },
  "Špagete Karbonara": {
    name: "Špagete Karbonara",
    ingredients: ["400g špageta", "150g guanciale", "4 žumanca", "100g parmezana", "crni biber", "so"],
    instructions: ["Skuvaj špagete", "Prži guanciale", "Izmešaj žumanca sa sirom", "Sjedini sve bez kuvanja", "Začini biberom"],
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4
  },

  
  // Burgers
  "Classic Burger": {
    name: "Classic Burger",
    ingredients: [
      "600g mlevene junetine (80/20 odnos mesa i masti)",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "4 kajzerice za hamburgere",
      "4 lista zelene salate",
      "1 paradajz, isečen na kriške",
      "1 crveni luk, isečen na kolutove",
      "4 kriške cheddar sira (opciono)",
      "Majonez, senf, kečap (po ukusu)"
    ],
    instructions: [
      "U velikoj posudi pomešati mlevenu junetinu, so i biber. Ne premesiti previše.",
      "Podeliti meso na 4 jednaka dela.",
      "Formirati burgere, blago ih spljoštiti i napraviti malu udubinu u sredini svakog burgera.",
      "Zagrejte roštilj ili tiganj na srednje jakoj vatri.",
      "Pecite burgere 5-7 minuta sa svake strane, ili dok ne dostignu željenu pečenost.",
      "Ako koristite sir, stavite krišku sira na svaki burger u poslednjih minut pečenja da se otopi.",
      "Prepecite kajzerice.",
      "Sastavite burgere: donja kajzerica, majonez/senf/kečap (po ukusu), zelena salata, paradajz, luk, burger sa sirom (ako koristite), i gornja kajzerica.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "10-15 minuta",
    servings: 4
  },

  "Cheeseburger Premium": {
    name: "Cheeseburger",
    ingredients: [
      "150g mlevene junetine",
      "1 burger zemička",
      "1 kriška cheddar sira",
      "1 kiseli krastavac, isečen na kolutove",
      "1/4 glavice crnog luka, tanko isečenog",
      "1 kašika kečapa",
      "1 kašika senfa",
      "So po ukusu",
      "Biber po ukusu",
      "1 kašika ulja"
    ],
    instructions: [
      "Mleveno meso oblikovati u pljeskavicu. Posoliti i pobiberiti po ukusu.",
      "Zagrejati ulje u tiganju na srednjoj vatri.",
      "Peći pljeskavicu 5-7 minuta sa svake strane, ili dok ne bude pečena po želji. Minut pre kraja pečenja, staviti krišku sira preko pljeskavice da se istopi.",
      "Zemičku preseći na pola i kratko je tostirati.",
      "Na donju polovinu zemičke staviti kečap i senf.",
      "Dodati luk, krastavce i pečenu pljeskavicu sa sirom.",
      "Poklopiti gornjom polovinom zemičke.",
      "Poslužiti odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  "Bacon Burger": {
    name: "Bacon Burger",
    ingredients: [
      "150g mlevene junetine",
      "1 burger zemička",
      "2-3 kriške slanine",
      "1 kriška čedar sira",
      "1/4 glavice zelene salate, iseckane",
      "1/4 paradajza, isečen na kriške",
      "1 kiseli krastavac, isečen na kolutove",
      "1 kašika majoneza",
      "1 kašičica senfa",
      "So",
      "Biber",
      "Ulje za prženje"
    ],
    instructions: [
      "Mleveno meso oblikovati u pljeskavicu. Posoliti i pobiberiti po ukusu.",
      "Slaninu ispržiti u tiganju dok ne postane hrskava. Izvaditi slaninu i ostaviti sa strane na papirnom ubrusu da se ocedi višak masnoće.",
      "U tiganju sa malo ulja ispržiti pljeskavicu na srednjoj vatri, oko 5-7 minuta sa svake strane, dok ne bude pečena po želji. Minut pre kraja pečenja, staviti krišku čedar sira na pljeskavicu da se istopi.",
      "Zemičku preseći na pola i kratko je zagrejati u tiganju ili tosteru.",
      "Donju polovinu zemičke premazati majonezom i senfom.",
      "Na zemičku staviti iseckanu zelenu salatu, kriške paradajza i kolutove krastavca.",
      "Preko povrća staviti pljeskavicu sa sirom.",
      "Na kraju dodati hrskavu slaninu.",
      "Poklopiti gornjom polovinom zemičke."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  "Veggie Burger": {
    name: "Veggie Burger",
    ingredients: [
      "1 šolja kuvane leblebije (iz konzerve ili kuvane)",
      "1 šolja kuvane crne pasulje (iz konzerve ili kuvane)",
      "1/2 šolje seckanog luka",
      "1/2 šolje seckane paprike (crvena ili žuta)",
      "1/2 šolje rendane šargarepe",
      "1/4 šolje seckanog peršuna",
      "1/4 šolje ovsenih pahuljica (sitnih)",
      "1 jaje (ili laneno jaje za vegane: 1 kašika mlevenog lana + 3 kašike vode)",
      "1 kašika soja sosa",
      "1 kašičica dimljene paprike",
      "1/2 kašičice belog luka u prahu",
      "So i biber po ukusu",
      "2 kašike ulja (za prženje)",
      "4 zemičke za burgere",
      "Dodaci po želji: zelena salata, paradajz, krastavac, avokado, sos"
    ],
    instructions: [
      "U velikoj činiji, izgnječite leblebije i crni pasulj viljuškom, ostavljajući neke komade za teksturu.",
      "Dodajte luk, papriku, šargarepu, peršun, ovsene pahuljice, jaje (ili laneno jaje), soja sos, dimljenu papriku, beli luk u prahu, so i biber.",
      "Dobro promešajte sve sastojke dok se ne sjedine.",
      "Oblikujte smesu u 4 jednaka burgera.",
      "U velikom tiganju zagrejte ulje na srednjoj vatri.",
      "Pržite burgere oko 5-7 minuta sa svake strane, dok ne postanu zlatno smeđi i čvrsti.",
      "Poslužite na zemičkama sa dodacima po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Fish Burger": {
    name: "Fish Burger",
    ingredients: [
      "2 fileta bele ribe (npr. oslić, bakalar), oko 150g svaki",
      "2 zemičke za burger",
      "1/4 glavice zelene salate, iseckane",
      "1/2 paradajza, isečen na kolutove",
      "1/4 crvenog luka, tanko isečenog",
      "2 kašike majoneza",
      "1 kašičica senfa",
      "1/2 limuna, sok",
      "2 kašike maslinovog ulja",
      "So",
      "Biber"
    ],
    instructions: [
      "Filete ribe posušite papirnim ubrusom. Posolite i pobiberite po ukusu. Poprskajte limunovim sokom.",
      "U tiganju zagrejte maslinovo ulje na srednjoj vatri. Pecite ribu 4-5 minuta sa svake strane, ili dok ne postane zlatno braon i lako se raspada viljuškom.",
      "U maloj posudi pomešajte majonez i senf.",
      "Zemičke presecite na pola. Možete ih kratko prepeći u tiganju ili tosteru.",
      "Donju polovinu zemičke premažite sosom.",
      "Preko sosa stavite iseckanu zelenu salatu, kolutove paradajza i crveni luk.",
      "Stavite pečeni filet ribe preko povrća.",
      "Prekrijte gornjom polovinom zemičke."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Double Burger": {
    name: "Double Burger",
    ingredients: [
      "1 burger zemička, presečena na pola",
      "220g mlevene govedine (80% meso, 20% mast)",
      "1 kašičica Worcestershire sosa",
      "So i biber po ukusu",
      "2 kriške cheddar sira",
      "1/4 crnog luka, tanko isečenog",
      "2 kisela krastavčića, isečena na kolutiće",
      "1 kašika senfa",
      "1 kašika kečapa",
      "1 kašika majoneza",
      "List zelene salate (po izboru)",
      "1 kašika ulja za prženje"
    ],
    instructions: [
      "U činiji pomešajte mlevenu govedinu, Worcestershire sos, so i biber. Dobro promešajte i podelite smesu na dva jednaka dela. Oblikujte dva tanka burgera.",
      "U tiganju zagrejte ulje na srednje jakoj vatri.",
      "Pecite burgere 5-7 minuta sa svake strane, ili dok ne budu gotovi do željene pečenosti. U poslednjem minutu pečenja, stavite po krišku cheddar sira na svaki burger da se otopi.",
      "Zemičku premažite majonezom sa jedne strane, a senfom i kečapom sa druge.",
      "Na donju polovinu zemičke stavite list zelene salate (po izboru).",
      "Stavite jedan burger sa sirom preko salate.",
      "Preko prvog burgera stavite isečen crni luk i kisele krastavčiće.",
      "Stavite drugi burger sa sirom preko krastavčića i luka.",
      "Poklopite gornjom polovinom zemičke."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  "BBQ Burger": {
    name: "BBQ Burger",
    ingredients: [
      "800g mlevene junetine",
      "2 kašike BBQ sosa",
      "1 kašičica dimljene paprike",
      "1/2 kašičice belog luka u prahu",
      "1/2 kašičice crnog luka u prahu",
      "So i biber po ukusu",
      "4 brioš zemičke za burger",
      "4 kriške čedar sira",
      "BBQ sos za premazivanje",
      "1 glavica crvenog luka, isečena na kolutove",
      "1 paradajz, isečen na kriške",
      "Zelena salata po želji",
      "Kiseli krastavčići (opciono)"
    ],
    instructions: [
      "U velikoj činiji pomešati mlevenu junetinu, 2 kašike BBQ sosa, dimljenu papriku, beli luk u prahu, crni luk u prahu, so i biber. Dobro izmešati rukama, ali ne previše, da meso ne postane žilavo.",
      "Podeliti smesu na 4 jednaka dela i oblikovati u burgere debljine oko 2 cm. Napraviti mali udubljenje u sredini svakog burgera kako bi se sprečilo da se naduvaju tokom pečenja.",
      "Zagrejati roštilj ili gril tiganj na srednje jakoj vatri.",
      "Burgere peći 5-7 minuta sa svake strane, ili dok ne postignu željeni nivo pečenosti. Pred kraj pečenja, staviti krišku čedar sira na svaki burger da se otopi.",
      "Za to vreme, blago tostirati zemičke za burger.",
      "Donju polovinu zemičke premazati BBQ sosom. Na to staviti zelenu salatu, paradajz i crveni luk.",
      "Staviti burger sa sirom preko povrća.",
      "Dodati kiseli krastavčić (ako se koristi).",
      "Prekriti gornjom polovinom zemičke."
    ],
    prepTime: "20 minuta",
    cookTime: "15-20 minuta",
    servings: 4
  },


  // Chinese
  "Slatko kiselo meso": {
    name: "Slatko kiselo meso",
    ingredients: ["500g svinjetine", "1 ananas", "1 paprika", "brašno", "jaja", "sirće", "kečap", "šećer"],
    instructions: ["Popanije meso u testu", "Prži do zlatno", "Pravi sweet&sour sos", "Prži povrće", "Sjedini sve"],
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4
  },
  "Kung Pao piletina": {
    name: "Kung Pao piletina",
    ingredients: ["500g pilećeg mesa", "kikiriki", "susam čili", "crni luk", "soja sos", "sirće", "šećer"],
    instructions: ["Iseci piletinu", "Prži sa kikirikijima", "Dodaj povrće", "Začini sa sosom", "Služi sa pirinčem"],
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 4
  },

  // European
  "Šnicl": {
    name: "Šnicl",
    ingredients: ["4 teleća šnicla", "2 jajeta", "brašno", "prezle", "ulje", "limun", "so, biber"],
    instructions: ["Istucaj meso", "Popanije u brašno, jaje, prezle", "Prži u vrućem ulju", "Osciči na salvetu", "Služi sa limunom"],
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 4
  },
  "Riba sa pomfritom": {
    name: "Riba sa pomfritom",
    ingredients: ["4 fileta bele ribe", "1kg krompira", "brašno", "pivo", "ulje za prženje", "so, sirće"],
    instructions: ["Napravi testo od brašna i piva", "Popanije ribu", "Prži ribu i krompir", "Osciči", "Služi sa sirćetom"],
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4
  },

  "Mushroom Swiss Burger": {
    name: "Mushroom Swiss Burger",
    ingredients: [
      "150g mlevene govedine",
      "1 burger zemička",
      "50g švajcarskog sira, isečenog na kriške",
      "100g pečuraka, očišćenih i isečenih na listiće",
      "1 kašika putera",
      "1 mala glavica crnog luka, sitno iseckana",
      "1 kašika soja sosa",
      "So i biber po ukusu",
      "1 kašika ulja",
      "Opciono: zelena salata, paradajz, majonez"
    ],
    instructions: [
      "U maloj posudi, pomešajte mlevenu govedinu sa solju i biberom. Oblikujte u pljeskavicu.",
      "U tiganju na srednjoj vatri, zagrejte ulje. Pecite pljeskavicu oko 5-7 minuta sa svake strane, ili dok ne bude pečena do željene temperature.",
      "U drugom tiganju, otopite puter na srednjoj vatri. Dodajte iseckani crni luk i dinstajte dok ne omekša, oko 3-5 minuta.",
      "Dodajte iseckane pečurke u tiganj sa lukom. Kuvajte dok pečurke ne omekšaju i puste tečnost, oko 5-7 minuta. Umešajte soja sos i dinstajte još minut.",
      "Pred kraj pečenja pljeskavice, stavite kriške švajcarskog sira na vrh pljeskavice i ostavite da se sir otopi.",
      "Prepecite zemičku za burger.",
      "Na donju polovinu zemičke stavite opciono zelenu salatu i paradajz (ako koristite).",
      "Stavite pljeskavicu sa otopljenim sirom na zelenu salatu i paradajz.",
      "Preko pljeskavice rasporedite dinstane pečurke sa lukom.",
      "Prekrijte gornjom polovinom zemičke."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  "Turkey Burger": {
    name: "Turkey Burger",
    ingredients: [
      "500g mlevenog ćurećeg mesa",
      "1/2 glavice crnog luka, sitno iseckanog",
      "2 čena belog luka, sitno iseckana",
      "1 jaje",
      "2 kašike prezli",
      "1 kašičica senfa",
      "1 kašičica worcestershire sosa (opciono)",
      "1/2 kašičice mlevene paprike",
      "1/4 kašičice bibera",
      "So po ukusu",
      "4 zemičke za burgere",
      "Dodaci po želji: zelena salata, paradajz, krastavčići, sir, majonez, kečap, senf"
    ],
    instructions: [
      "U velikoj činiji pomešajte mleveno ćureće meso, crni luk, beli luk, jaje, prezle, senf, worcestershire sos (ako koristite), mlevenu papriku, biber i so.",
      "Dobro izmešajte sve sastojke dok se ne sjedine. Pazite da ne premesite smesu.",
      "Podelite smesu na 4 jednaka dela.",
      "Oblikujte svaki deo u pljeskavicu debljine oko 1-1.5 cm.",
      "Zagrejte roštilj ili tiganj na srednje jakoj vatri.",
      "Pecite pljeskavice 7-10 minuta po strani, ili dok ne budu pečene i sokovi postanu bistri.",
      "Za poslednji minut pečenja, možete staviti krišku sira na svaku pljeskavicu da se otopi.",
      "Tostirajte zemičke za burgere (opciono).",
      "Sastavite burgere: stavite pljeskavicu na donju polovinu zemičke, dodajte željene dodatke i poklopite gornjom polovinom zemičke."
    ],
    prepTime: "15 minuta",
    cookTime: "15-20 minuta",
    servings: 4
  },

  "Black Bean Burger": {
    name: "Black Bean Burger",
    ingredients: [
      "1 konzerva (400g) crnog pasulja, ispranog i ocedjenog",
      "1/2 crnog luka, sitno iseckanog",
      "2 čena belog luka, sitno iseckana",
      "1/2 crvene paprike, sitno iseckane",
      "1/4 šolje svežeg korijandera, sitno iseckanog",
      "1 kašičica čilija u prahu",
      "1/2 kašičice kima",
      "1/4 kašičice dimljene paprike",
      "1/2 šolje prezli",
      "1 jaje (opciono, za vezivanje)",
      "2 kašike maslinovog ulja",
      "So i biber po ukusu",
      "4 zemičke za burgere",
      "Dodaci po zelji: zelena salata, paradajz, avokado, umaci"
    ],
    instructions: [
      "U velikoj posudi, izgnječite crni pasulj viljuškom. Ostavite malo celih zrna za teksturu.",
      "U tiganju zagrejte 1 kašiku maslinovog ulja na srednjoj vatri. Dodajte crni luk i papriku, dinstajte dok ne omekšaju, oko 5 minuta. Dodajte beli luk i dinstajte jos 1 minut.",
      "Prebacite dinstano povrće u posudu sa izgnječenim pasuljem. Dodajte korijander, čili u prahu, kim, dimljenu papriku, prezle, jaje (ako koristite), so i biber. Dobro promešajte da se svi sastojci sjedine.",
      "Formirajte smesu u 4 pljeskavice.",
      "U tiganju zagrejte preostalu 1 kašiku maslinovog ulja na srednjoj vatri. Pecite pljeskavice oko 5-7 minuta sa svake strane, dok ne postanu zlatno smeđe i čvrste.",
      "Poslužite burgere u zemičkama sa dodacima po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Lamb Burger": {
    name: "Lamb Burger",
    ingredients: [
      "600g mlevene jagnjetine",
      "1 mali crveni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "2 kašike sveže nane, iseckane",
      "2 kašike svežeg peršuna, iseckanog",
      "1 kašičica mlevenog kumina",
      "1/2 kašičice mlevenog korijandera",
      "1/4 kašičice čilija u prahu (opciono)",
      "1 jaje",
      "2 kašike prezli",
      "So i biber, po ukusu",
      "4 burger zemičke",
      "Prilozi po želji (zelena salata, paradajz, luk, tzatziki sos, feta sir)",
      "Maslinovo ulje ili biljno ulje za pečenje"
    ],
    instructions: [
      "U velikoj posudi pomešajte mlevenu jagnjetinu, crveni luk, beli luk, nanu, peršun, kumin, korijander i čili u prahu (ako koristite).",
      "Dodajte jaje i prezle. Dobro začinite solju i biberom.",
      "Rukama dobro izmešajte sve sastojke dok se ne sjedine.",
      "Podelite smesu na 4 jednaka dela i formirajte pljeskavice debljine oko 2 cm.",
      "Zagrejte ulje u tiganju na srednje jakoj vatri ili pripremite roštilj.",
      "Pecite pljeskavice oko 6-7 minuta sa svake strane, ili dok ne budu pečene po želji.",
      "Tokom poslednjeg minuta pečenja, stavite zemičke da se zagreju na roštilju ili u tiganju.",
      "Namažite zemičke prilozima po želji.",
      "Stavite pečenu pljeskavicu na donju zemičku i prekrijte je gornjom zemičkom."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Salmon Burger": {
    name: "Salmon Burger",
    ingredients: [
      "500g fileta lososa, bez kože i kostiju",
      "1/4 crvenog luka, sitno iseckanog",
      "1 jaje",
      "2 kašike prezli",
      "1 kašika svežeg peršuna, sitno iseckanog",
      "1 kašičica limunovog soka",
      "1/2 kašičice dimljene paprike",
      "So i biber po ukusu",
      "2 kašike maslinovog ulja",
      "4 zemičke za burger",
      "Omiljeni dodaci (zelena salata, paradajz, avokado, majonez, tartar sos, itd.)"
    ],
    instructions: [
      "Losos iseckajte na sitne komade ili ga kratko pulsirajte u procesoru za hranu (ne previše, treba da ostanu komadići).",
      "U velikoj činiji pomešajte iseckan losos, crveni luk, jaje, prezle, peršun, limunov sok, dimljenu papriku, so i biber. Dobro promešajte.",
      "Podelite smesu na 4 jednaka dela i formirajte burgere.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Pecite burgere 5-6 minuta sa svake strane, ili dok ne dobiju zlatno-braon boju i dok se ne ispeku u potpunosti.",
      "Zemičke za burger lagano prepecite.",
      "Složite burgere sa omiljenim dodacima i poslužite toplo."
    ],
    prepTime: "15 minuta",
    cookTime: "10-12 minuta",
    servings: 4
  },

  "Portobello Burger": {
    name: "Portobello Burger",
    ingredients: [
      "4 velika portobello pečurke",
      "4 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "4 zemičke za burger",
      "1 avokado, isečen na kriške",
      "1 paradajz, isečen na kriške",
      "1/2 crvenog luka, tanko isečenog",
      "4 lista zelene salate",
      "Omiljeni sos (npr. majonez, pesto, ljutenica)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Očistite portobello pečurke vlažnom krpom. Uklonite peteljke.",
      "U maloj posudi pomešajte maslinovo ulje, beli luk, origano, so i biber.",
      "Premažite pečurke sa obe strane mešavinom ulja.",
      "Pecite pečurke u rerni 15-20 minuta, ili dok ne omekšaju i postanu sočne.",
      "Za vreme pečenja pečuraka, pripremite ostale sastojke.",
      "Isecite zemičke na pola i blago ih tostirajte.",
      "Namažite obe polovine zemičke omiljenim sosom.",
      "Na donju polovinu zemičke stavite list zelene salate, zatim pečurku, kriške avokada, paradajza i crvenog luka.",
      "Poklopite drugom polovinom zemičke."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Pulled Pork Burger": {
    name: "Pulled Pork Burger",
    ingredients: [
      "1 kg svinjske plećke, bez kostiju",
      "2 kašičice mlevene paprike",
      "1 kašičica belog luka u prahu",
      "1 kašičica crnog luka u prahu",
      "1 kašičica dimljene paprike",
      "1/2 kašičice kajenske paprike (opciono)",
      "2 kašičice soli",
      "1 kašičica mlevenog bibera",
      "250 ml pilećeg bujona",
      "250 ml BBQ sosa (omiljenog ukusa)",
      "4 zemičke za burger",
      "Coleslaw salata (opciono, za posluživanje)",
      "Kiseli krastavčići (opciono, za posluživanje)"
    ],
    instructions: [
      "Pomešajte mlevenu papriku, beli luk u prahu, crni luk u prahu, dimljenu papriku, kajensku papriku (ako koristite), so i biber u maloj činiji.",
      "Svinjsku plećku dobro utrljajte sa svih strana mešavinom začina.",
      "Stavite svinjsku plećku u spori šporet (slow cooker).",
      "Ulijte pileći bujon u spori šporet.",
      "Kuvajte na niskoj temperaturi 6-8 sati, ili dok meso ne postane veoma mekano i lako se raspada viljuškom.",
      "Izvadite meso iz sporog šporeta i stavite ga u veliku činiju.",
      "Koristeći dve viljuške, iskidajte meso na tanke komade.",
      "U činiji pomešajte iskidanu svinjetinu sa BBQ sosom.",
      "Presecite zemičke na pola i zagrejte ih na roštilju ili u rerni.",
      "Na donju polovinu svake zemičke stavite iskidanu svinjetinu sa BBQ sosom.",
      "Dodajte coleslaw salatu i kisele krastavčiće (ako koristite).",
      "Poklopite gornjom polovinom zemičke i poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "6-8 sati",
    servings: 4
  },

  "Breakfast Burger": {
    name: "Breakfast Burger",
    ingredients: [
      "1 hamburger zemička, presečena na pola",
      "150g mlevene junetine",
      "1 jaje",
      "1 kriška čedar sira",
      "2 trake slanine, ispržene",
      "1/4 avokada, narezanog",
      "1 kašika majoneza",
      "1/2 kašičice senfa",
      "So i biber po ukusu",
      "Ulje za prženje"
    ],
    instructions: [
      "Mleveno meso oblikujte u pljeskavicu i začinite solju i biberom.",
      "Zagrejte malo ulja u tiganju na srednjoj vatri.",
      "Ispržite pljeskavicu oko 4-5 minuta sa svake strane, ili dok ne bude pečena po vašoj želji. Minut pred kraj, stavite krišku sira na pljeskavicu da se otopi.",
      "U drugom tiganju ili istom tiganju posle pljeskavice, ispržite jaje na oko.",
      "Zemičku premažite majonezom i senfom.",
      "Na donju polovinu zemičke stavite pljeskavicu sa sirom.",
      "Dodajte isprženu slaninu, narezani avokado i jaje na oko.",
      "Poklopite drugom polovinom zemičke."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 1
  },

  "Spicy Burger": {
    name: "Spicy Burger",
    ingredients: [
      "150g mlevene junetine",
      "1 kašičica ljute paprike (ili više, po ukusu)",
      "1/2 kašičice mlevenog kima",
      "1/4 kašičice belog luka u prahu",
      "So i biber po ukusu",
      "1 zemička za burger",
      "1 kašika majoneza",
      "1 kašičica sriracha sosa (ili drugog ljutog sosa)",
      "1 list zelene salate",
      "2 koluta paradajza",
      "4 koluta crvenog luka",
      "2 kriške cheddar sira"
    ],
    instructions: [
      "U činiji pomešajte mlevenu junetinu, ljutu papriku, kim, beli luk u prahu, so i biber. Dobro sjedinite.",
      "Oblikujte meso u pljeskavicu debljine oko 2 cm.",
      "Zagrejte tiganj na srednje jakoj vatri.",
      "Pecite pljeskavicu 5-7 minuta sa svake strane, ili dok ne bude gotova do željenog stepena pečenosti.",
      "U poslednjem minutu pečenja, stavite kriške sira preko pljeskavice da se istope.",
      "Prepolovite zemičku i premažite obe strane majonezom i sriracha sosom.",
      "Na donju polovinu zemičke stavite list zelene salate, kolutove paradajza i crvenog luka.",
      "Preko povrća stavite pljeskavicu sa sirom.",
      "Poklopite drugom polovinom zemičke."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  "Blue Cheese Burger": {
    name: "Blue Cheese Burger",
    ingredients: [
      "400g mlevene junetine",
      "1 kašičica Worcestershire sosa",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice crnog bibera",
      "So po ukusu",
      "100g plavog sira, izmrvljenog",
      "2 burger zemičke",
      "2 lista zelene salate",
      "1/4 crvenog luka, tanko isečenog",
      "2 kašike majoneza",
      "1 kašika maslinovog ulja"
    ],
    instructions: [
      "U velikoj činiji, pomešajte mlevenu junetinu, Worcestershire sos, beli luk u prahu, crni biber i so. Dobro izmešajte rukama, ali nemojte previše mesiti.",
      "Podelite smesu na dva jednaka dela i oblikujte u burgere debljine oko 2 cm.",
      "U sredini svakog burgera napravite malu udubinu prstom (ovo sprečava da se burger naduje tokom pečenja).",
      "Zagrejte maslinovo ulje u tiganju na srednje jakoj vatri.",
      "Pecite burgere 5-7 minuta sa svake strane, ili dok ne budu pečeni po vašem ukusu.",
      "Minut pre kraja pečenja, pospite izmrvljeni plavi sir preko svakog burgera da se otopi.",
      "Tostirajte zemičke.",
      "Namažite majonez na obe strane zemičke.",
      "Na donju zemičku stavite list zelene salate, zatim burger sa plavim sirom, crveni luk i poklopite gornjom zemičkom."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Avocado Burger": {
    name: "Avocado Burger",
    ingredients: [
      "1 juneća pljeskavica (oko 150g)",
      "1 burger zemička",
      "1/2 avokada, zreo",
      "1 kriška paradajza",
      "1/4 crvenog luka, tanko isečenog",
      "List zelene salate",
      "1 kašika majoneza",
      "1/2 kašičice soka od limuna",
      "So i biber po ukusu",
      "1 kašika ulja (za prženje)"
    ],
    instructions: [
      "U činiji, viljuškom izgnječite avokado. Pomešajte ga sa sokom od limuna, solju i biberom.",
      "Zagrejati ulje u tiganju na srednjoj vatri.",
      "Dodati juneću pljeskavicu i pržiti oko 4-5 minuta sa svake strane, ili dok ne bude gotova po želji. Začinite solju i biberom tokom prženja.",
      "Zemičku preseći na pola i blago je tostirati, ako želite.",
      "Donju polovinu zemičke premazati majonezom.",
      "Staviti list zelene salate na majonez.",
      "Preko salate staviti ispečenu juneću pljeskavicu.",
      "Na pljeskavicu staviti izgnječen avokado.",
      "Dodati krišku paradajza i crveni luk.",
      "Preklopiti sa gornjom polovinom zemičke."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 1
  },

  "Quinoa Burger": {
    name: "Quinoa Burger",
    ingredients: [
      "1 šolja kinoe",
      "2 šolje vode ili povrtnog bujona",
      "1/2 glavice crnog luka, sitno iseckanog",
      "1 paprika, sitno iseckana (crvena ili žuta)",
      "2 čena belog luka, sitno iseckana",
      "1 jaje",
      "1/2 šolje prezli (mogu i ovsene pahuljice)",
      "1/4 šolje svežeg peršuna, sitno iseckanog",
      "1 kašičica mlevene paprike",
      "1/2 kašičice kumina",
      "So i biber po ukusu",
      "2 kašike maslinovog ulja",
      "Zemičke za burger",
      "Dodaci po želji: zelena salata, paradajz, luk, avokado, sos"
    ],
    instructions: [
      "Kinuu isperite pod hladnom vodom.",
      "U šerpi pomešajte kinuu i vodu (ili bujon). Pustite da provri, zatim smanjite vatru, poklopite i kuvajte 15 minuta, ili dok se tečnost ne upije i kinoa ne omekša.",
      "Sklonite sa vatre i ostavite da se malo prohladi.",
      "U velikoj posudi pomešajte kuvanu kinuu, crni luk, papriku, beli luk, jaje, prezle, peršun, mlevenu papriku, kumin, so i biber. Dobro promešajte.",
      "Oblikujte smesu u 4 burgera.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Pecite burgere 5-7 minuta sa svake strane, ili dok ne postanu zlatno smeđi i čvrsti.",
      "Poslužite na zemičkama za burger sa dodacima po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  // Greek
  "Grčka musaka": {
    name: "Grčka musaka",
    ingredients: ["2 patlidžana", "500g jagnjetine", "2 paradajza", "bešamel sos", "sir", "maslinovo ulje"],
    instructions: ["Ispeci patlidžan", "Prži meso", "Poredaj u slojeve", "Prelij bešamelom", "Peci 45 minuta"],
    prepTime: "30 min",
    cookTime: "60 min",
    servings: 6
  },
  "Grčka salata": {
    name: "Grčka salata",
    ingredients: ["3 paradajza", "1 krastavac", "1 crni luk", "200g feta sira", "masline", "maslinovo ulje", "origano"],
    instructions: ["Iseci povrće", "Dodaj sir u kockice", "Začini solju i origanom", "Prelij uljem", "Pomešaj nežno"],
    prepTime: "10 min",
    cookTime: "0 min",
    servings: 4
  },

  // Indian
  "Butter Chicken": {
    name: "Butter Chicken",
    description: "Bogato i kremasto indijsko jelo od piletine kuvane u sosu od paradajza, putera i začina.",
    ingredients: [
      "1 kg pilećih grudi, isečenih na kockice",
      "1/2 šolje jogurta", 
      "1 kašika đumbir-beli luk paste",
      "1 kašičica kurkume",
      "1 kašičica čilija u prahu",
      "1 kašičica garam masale",
      "2 kašike ulja",
      "50 g putera",
      "1 veliki luk, sitno iseckan",
      "400g seckanog paradajza iz konzerve",
      "1/2 šolje pavlake za kuvanje"
    ],
    instructions: [
      "Marinirajte piletinu sa jogurtom i začinima 30 minuta",
      "Ispržite piletinu dok ne porumeni",
      "Napravite sos od luka, paradajza i putera",
      "Dodajte pavlaku i vratite piletinu",
      "Kuvajte 10 minuta dok se ukusi ne sjedine"
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta", 
    servings: 6
  },
  "Biryani": {
    name: "Biryani",
    description: "Aromatično jelo od pirinča sa mesom i začinima",
    ingredients: [
      "500g basmati pirinča",
      "1 kg piletine", 
      "2 luka",
      "jogurt",
      "garam masala",
      "šafran",
      "ghee"
    ],
    instructions: [
      "Marinirajte meso sa jogurtom i začinima",
      "Skuvajte pirinač 70%",
      "Ispržite meso sa lukom",
      "Složite u slojeve sa pirinčem",
      "Pecite 1 sat na niskoj temperaturi"
    ],
    prepTime: "45 minuta",
    cookTime: "1 sat 30 minuta",
    servings: 8
  },

  // Bakery (Pekara)
  "Burek sa mesom": {
    name: "Burek sa mesom",
    ingredients: [
      "500g tankih kora za pitu",
      "500g mlevenog mesa (junetina ili mešano)",
      "1 glavica crnog luka, sitno iseckana",
      "So, biber, vegeta po ukusu",
      "Ulje ili mast za premazivanje kora",
      "1 šolja mineralne vode",
      "1/2 šolje ulja"
    ],
    instructions: [
      "U posudi pomešajte mleveno meso, iseckani luk, so, biber i vegetu. Dobro izmešajte da se svi sastojci sjedine.",
      "Podmažite pleh (okrugli ili četvrtasti) uljem ili mašću.",
      "Uzmite jednu koru i premažite je uljem. Stavite je u pleh tako da deo kore prelazi preko ivice pleha.",
      "Ponavljajte postupak sa još 3-4 kore, premazujući svaku uljem i postavljajući ih tako da pokriju dno i ivice pleha.",
      "Stavite polovinu fila od mesa preko kora.",
      "Uzmite sledeću koru, premažite je uljem i stavite preko fila. Ponavljajte postupak sa još 2-3 kore, premazujući svaku uljem.",
      "Stavite preostali fil od mesa preko kora.",
      "Prekrijte fil sa preostalim korama, premazujući svaku uljem. Poslednju koru takođe premažite uljem.",
      "Savijte krajeve kora koje su prelazile preko ivice pleha prema unutra, da zatvorite burek.",
      "Isecite burek na parčiće pre pečenja.",
      "Pomešajte mineralnu vodu i ulje. Prelijte preko isečenog bureka.",
      "Pecite u zagrejanoj rerni na 200°C (390°F) oko 40-50 minuta, dok burek ne dobije zlatno-smeđu boju.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre služenja."
    ],
    prepTime: "30 min",
    cookTime: "50 min",
    servings: 8
  },
  "Burek sa sirom": {
    name: "Burek sa sirom",
    ingredients: [
      "500g tankih kora za pitu",
      "500g sitnog sira (npr. feta, švapski sir)",
      "2 jaja",
      "150ml jogurta",
      "100ml ulja",
      "So po ukusu",
      "Ulje za premazivanje tepsije"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Podmažite okruglu tepsiju prečnika oko 28-30 cm uljem.",
      "U velikoj posudi, pomešajte sitan sir, jaja, jogurt i malo soli. Dobro sjedinite.",
      "Uzmite jednu koru i položite je na dno tepsije, tako da krajevi vire preko ivice tepsije. Poprskajte je uljem.",
      "Ponovite postupak sa još dve kore, poprskajući svaku uljem.",
      "Nanesite ravnomerno deo smese sa sirom preko kora u tepsiji.",
      "Nastavite sa slaganjem kora, poprskajući svaku uljem, pa nanesite smesu sa sirom. Ponavljajte dok ne potrošite sav sir i kore.",
      "Poslednju koru preklopite preko nadeva i premažite je uljem. Savijte krajeve prve tri kore koje su virile preko ivice tepsije ka unutra, formirajući obod. Premažite obod uljem.",
      "Isecite burek na kocke ili trouglove pre pečenja.",
      "Pecite u zagrejanoj rerni 45-50 minuta, ili dok ne dobije zlatno-braon boju.",
      "Izvadite burek iz rerne i ostavite ga da se malo prohladi pre služenja."
    ],
    prepTime: "30 min",
    cookTime: "50 min",
    servings: 8
  },
  "Burek sa spinatom": {
    name: "Burek sa spinatom",
    ingredients: [
      "500g tankih kora za pitu (gotove)",
      "1kg svežeg spanaća",
      "500g sitnog sira (npr. ricotta ili feta)",
      "2 jaja",
      "150ml jogurta",
      "100ml ulja",
      "1 glavica crnog luka",
      "2 čena belog luka (opciono)",
      "So po ukusu",
      "Biber po ukusu",
      "Susam za posipanje (opciono)"
    ],
    instructions: [
      "Spanać dobro operite i obarite kratko (blanširajte) dok ne omekša. Procedite i dobro iscedite od viška vode. Iseckajte sitno.",
      "U velikoj posudi pomešajte iseckani spanać, sitan sir, jaja, jogurt, so i biber. Po želji dodajte i izgnječen beli luk.",
      "Crni luk sitno iseckajte i propržite na malo ulja dok ne postane staklast. Dodajte u smesu sa spanaćem i sirom.",
      "Rernu zagrejte na 200°C.",
      "Na dno okruglog pleha (prečnika oko 28cm) stavite malo ulja.",
      "Ređajte kore u pleh tako da svaka kora bude premazana uljem. Na dno stavite 2-3 kore.",
      "Preko kora rasporedite polovinu smese sa spanaćem i sirom.",
      "Prekrijte sa 2-3 kore premazane uljem.",
      "Rasporedite ostatak smese sa spanaćem i sirom.",
      "Prekrijte sa preostalim korama, takođe premazanim uljem.",
      "Gornju koru premažite uljem.",
      "Isecite burek na kocke ili trouglove pre pečenja.",
      "Po želji pospite susamom.",
      "Pecite u zagrejanoj rerni 40-45 minuta, dok ne porumeni.",
      "Ostavite da se malo prohladi pre služenja."
    ],
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 8
  },
  "Gibanica": {
    name: "Gibanica",
    ingredients: [
      "500g kore za pitu",
      "500g feta sir",
      "500g mladi sir (ili urda)",
      "4 jaja",
      "200ml kisela pavlaka",
      "200ml mineralna voda (ili obično mleko)",
      "100ml ulje",
      "1 kašičica so (po ukusu, zavisno od slanosti sira)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U velikoj činiji izgnječite feta sir i mladi sir.",
      "Dodajte jaja i dobro promešajte.",
      "U smesu sa sirom dodajte kiselu pavlaku, mineralnu vodu i ulje. Promešajte dok se sve lepo ne sjedini. Dodajte so po ukusu.",
      "Podmažite pleh uljem (veličine otprilike 30x20 cm).",
      "Uzmite jednu koru i stavite je na dno pleha. Poprskajte je uljem.",
      "Uzmite drugu koru, zgužvajte je i umočite u fil od sira. Stavite je preko prve kore.",
      "Ponovite postupak sa gužvanjem i umakanjem kora u fil sve dok ne potrošite sve kore i fil.",
      "Poslednju koru raširite preko fila i poprskajte je uljem.",
      "Isecite gibanicu na kocke ili rombove pre pečenja.",
      "Pecite u zagrejanoj rerni 45-50 minuta, ili dok ne dobije zlatno-braon boju.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre služenja."
    ],
    prepTime: "20 min",
    cookTime: "50 min",
    servings: 10
  },
  "Kifla": {
    name: "Kifla",
    ingredients: [
      "500g brašna",
      "250ml mleka",
      "7g suvog kvasca (ili 25g svežeg)",
      "1 kašičica šećera",
      "1 kašičica soli",
      "100ml ulja",
      "1 jaje (za premazivanje)",
      "Susam, kim ili mak (za posipanje - opciono)"
    ],
    instructions: [
      "Ugrejati mleko da bude mlako (ne vrelo). Rastvoriti kvasac u mleku sa šećerom. Ostaviti da odstoji 5-10 minuta dok se ne zapeni.",
      "U velikoj posudi pomešati brašno i so.",
      "Dodati nadošli kvasac i ulje u brašno. Zamesiti testo.",
      "Testo mesiti 5-7 minuta dok ne postane glatko i elastično. Po potrebi dodati još brašna ako je testo previše lepljivo.",
      "Formirati testo u loptu, prekriti krpom i ostaviti na toplom mestu da naraste, oko 1 sat, ili dok se ne udvostruči.",
      "Nakon što je testo naraslo, podeliti ga na dva dela.",
      "Svaki deo razvući u krug debljine oko 3mm.",
      "Iseći krug na 12 trouglova.",
      "Uvijati svaki trougao od šire strane prema užoj, formirajući kiflu.",
      "Poređati kiflice na pleh obložen papirom za pečenje.",
      "Umutiti jaje i premazati kiflice.",
      "Posuti susamom, kimom ili makom po želji.",
      "Peći u prethodno zagrejanoj rerni na 180°C (350°F) 15-20 minuta, ili dok ne porumene."
    ],
    prepTime: "30 min",
    cookTime: "20 min",
    servings: 24
  },
  "Hleb": {
    name: "Hleb",
    ingredients: [
      "500g brašna (tip 400 ili 500)",
      "7g suvog kvasca (ili 25g svežeg kvasca)",
      "10g soli",
      "350ml mlake vode",
      "1 kašičica šećera (opciono, za aktiviranje kvasca)",
      "2 kašike ulja (maslinovo ili suncokretovo)"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno i so.",
      "Ako koristite sveži kvasac, rastvoriti ga u malo mlake vode sa šećerom i ostaviti 5-10 minuta da se aktivira. Ako koristite suvi kvasac, pomešati ga direktno sa brašnom.",
      "Dodati mlaku vodu i ulje u brašno.",
      "Umesiti testo, rukama ili mikserom sa nastavkom za testo, dok ne postane glatko i elastično (oko 10 minuta).",
      "Prekriti posudu krpom i ostaviti testo na toplom mestu da naraste dok se ne udvostruči (oko 1-1.5 sata).",
      "Zagrejte rernu na 220°C.",
      "Premešati testo i oblikovati ga u veknu.",
      "Staviti veknu u pleh obložen papirom za pečenje.",
      "Zarezati površinu vekne nožem.",
      "Peći u zagrejanoj rerni 30-35 minuta, ili dok hleb ne dobije zlatno-braon boju i šuplji zvuk kada se kucne po dnu.",
      "Izvaditi hleb iz rerne i ostaviti da se ohladi na rešetki pre sečenja."
    ],
    prepTime: "20 min",
    cookTime: "35 min",
    servings: 1
  },
  "Pogačice": {
    name: "Pogačice",
    ingredients: [
      "500g brašna",
      "1 kesica suvog kvasca (7g) ili 20g svežeg kvasca",
      "1 kašičica šećera",
      "1 kašičica soli",
      "250ml mlakog mleka",
      "100ml ulja",
      "1 jaje (za premazivanje)",
      "Susam ili kim (za posipanje)"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, suvi kvasac (ako koristite sveži, rastopiti ga u malo mlakog mleka sa šećerom i ostaviti da nadođe), šećer i so.",
      "Dodati mlako mleko i ulje. Zamesiti glatko testo.",
      "Testo prekriti krpom i ostaviti na toplom mestu da naraste, oko 1 sat, ili dok se ne udvostruči.",
      "Nadošlo testo premesiti kratko na pobrašnjenoj površini.",
      "Testo razvući na debljinu oko 1 cm.",
      "Okruglom modlom ili čašom vaditi pogačice.",
      "Pogačice redjati u pleh obložen papirom za pečenje.",
      "Pogačice premazati umućenim jajetom i posuti susamom ili kimom.",
      "Peći u zagrejanoj rerni na 200°C, 20-25 minuta, ili dok ne porumene.",
      "Ohladiti pre serviranja."
    ],
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 20
  },
  "Krafne": {
    name: "Krafne",
    ingredients: [
      "500g brašna (tip 400 ili 500)",
      "250ml mleka",
      "40g svežeg kvasca",
      "80g šećera",
      "1 kesica vanilin šećera",
      "Prstohvat soli",
      "2 žumanca",
      "50g otopljenog putera",
      "1l ulja za prženje",
      "Džem po želji za punjenje",
      "Šećer u prahu za posipanje"
    ],
    instructions: [
      "U mlakom mleku rastvoriti kvasac sa kašičicom šećera i kašičicom brašna. Ostaviti da nadođe 10 minuta.",
      "U velikoj posudi pomešati brašno, preostali šećer, vanilin šećer i so.",
      "Dodati nadošli kvasac, žumanca i otopljeni puter u suve sastojke.",
      "Zamesiti glatko testo. Ako je testo previše lepljivo, dodati još malo brašna.",
      "Testo prekriti krpom i ostaviti da naraste na toplom mestu oko 1 sat, ili dok se ne udvostruči.",
      "Naraslo testo premesiti na pobrašnjenoj površini i razvaljati na debljinu od oko 1 cm.",
      "Čašom ili modlom vaditi krugove.",
      "Krugove testa prekriti krpom i ostaviti da odstoje još 15 minuta.",
      "U dubljem tiganju zagrejati ulje na srednjoj temperaturi.",
      "Pažljivo spuštati krafne u vrelo ulje i pržiti ih sa svake strane dok ne dobiju zlatno-smeđu boju (oko 2-3 minuta po strani).",
      "Pržene krafne vaditi rešetkastom kašikom i stavljati na papirni ubrus da se ocede od viška ulja.",
      "Kada se krafne malo prohlade, napuniti ih džemom po želji pomoću šprica za kolače ili nožem.",
      "Posuti šećerom u prahu pre serviranja."
    ],
    prepTime: "30 min",
    cookTime: "15 min",
    servings: 12
  },
  "Kroasan": {
    name: "Kroasan",
    ingredients: [
      "500g brašna, tip 500",
      "10g suvog kvasca (ili 25g svežeg)",
      "50g šećera",
      "10g soli",
      "250ml mlakog mleka",
      "50g otopljenog putera",
      "250g hladnog putera, za laminiranje",
      "1 jaje, umućeno (za premazivanje)"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, suvi kvasac (ako koristite sveži, rastvoriti ga u malo mlakog mleka sa šećerom i ostaviti da naraste), šećer i so.",
      "Dodati mlako mleko i otopljeni puter. Mesiti dok se ne dobije glatko testo.",
      "Oblikovati testo u kuglu, prekriti i ostaviti da naraste na toplom mestu oko 1 sat, ili dok se ne udvostruči.",
      "Izvaditi testo na blago pobrašnjenu površinu i razvaljati ga u pravougaonik debljine oko 1 cm.",
      "Hladan puter iseći na tanke listiće i rasporediti ga preko 2/3 testa.",
      "Preklopiti praznu trećinu testa preko srednje trećine sa puterom. Zatim preklopiti i drugu trećinu testa preko toga, tako da dobijete tri sloja.",
      "Uviti testo u providnu foliju i staviti u frižider na 30 minuta.",
      "Ponovo razvaljati testo u pravougaonik, ponoviti postupak sa preklapanjem (bez dodatnog putera), umotati u foliju i vratiti u frižider na još 30 minuta.",
      "Ponoviti razvlačenje, preklapanje i hlađenje još jednom. Ovo je ukupno 3 ture preklapanja.",
      "Nakon poslednjeg hlađenja, razvaljati testo u veliki pravougaonik debljine oko 3-4 mm.",
      "Iseći testo na trouglove.",
      "Svaki trougao lagano rastegnuti od osnove prema vrhu, a zatim ga uviti od osnove prema vrhu, formirajući oblik kroasana.",
      "Kroasane poređati na pleh obložen papirom za pečenje, prekriti i ostaviti da narastu oko 30 minuta.",
      "Zagrejati rernu na 180°C.",
      "Premazati kroasane umućenim jajetom.",
      "Peći 20-25 minuta, ili dok ne dobiju zlatno-smeđu boju."
    ],
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 12
  },
  "Pita sa jabukom": {
    name: "Pita sa jabukom",
    ingredients: [
      "500g lisnatog testa",
      "1 kg jabuka (npr. zlatni delišes, greni smit)",
      "100g šećera",
      "1 kašičica cimeta",
      "50g putera, isečenog na kockice",
      "1 jaje, umućeno (za premazivanje)",
      "Šećer u prahu (za posipanje, opcionalno)"
    ],
    instructions: [
      "Zagrejte rernu na 180°C (350°F).",
      "Jabuke oljuštite, izvadite im koštice i isecite na tanke kriške.",
      "U velikoj činiji pomešajte jabuke, šećer i cimet.",
      "Razvucite lisnato testo na pobrašnjenoj površini. Podelite ga na dva dela.",
      "Jedan deo testa stavite u pleh za pitu (prečnika oko 23cm).",
      "Preko testa ravnomerno rasporedite smesu sa jabukama.",
      "Preko jabuka rasporedite kockice putera.",
      "Drugi deo testa razvucite i stavite preko jabuka. Možete napraviti proreze na vrhu testa kako bi para mogla da izlazi.",
      "Ivice testa pritisnite viljuškom kako biste ih spojili.",
      "Premažite pitu umućenim jajetom.",
      "Pecite u zagrejanoj rerni 45 minuta, ili dok pita ne dobije zlatno-braon boju.",
      "Ostavite da se malo prohladi pre sečenja i serviranja."
    ],
    prepTime: "20 min",
    cookTime: "45 min",
    servings: 8
  },
  "Banica": {
    name: "Banica",
    ingredients: [
      "500g gotovih kora za pitu",
      "500g sira (feta ili sličan slani sir)",
      "4 jaja",
      "400g jogurta (grčki ili obični)",
      "100ml ulja",
      "1 kašičica sode bikarbone",
      "So (po ukusu, pazite na slanost sira)",
      "Susam (za posipanje, opciono)"
    ],
    instructions: [
      "U velikoj posudi izmrvite sir.",
      "Dodajte jaja u posudu sa sirom i dobro promešajte.",
      "U manjoj posudi pomešajte jogurt i sodu bikarbonu. Ostavite da odstoji par minuta dok ne zapeni.",
      "Dodajte jogurt sa sodom u smesu sa sirom i jajima. Dobro promešajte dok se svi sastojci ne sjedini.",
      "Zagrejte rernu na 180°C.",
      "Podmažite pleh za pečenje uljem.",
      "Uzmite jednu koru i stavite je u pleh tako da krajevi vise preko ivica pleha. Poprskajte koru sa malo ulja.",
      "Uzmite sledeću koru, zgužvajte je i umočite u fil. Stavite je preko prve kore u plehu.",
      "Ponavljajte postupak sa ostalim korama, gužvajući ih i umačući u fil, sve dok ne potrošite sav fil i kore (osim prve).",
      "Preklopite krajeve prve kore preko fila. Poprskajte sa malo ulja.",
      "Isecite banicu na kocke ili rombove.",
      "Po želji, pospite susamom.",
      "Pecite u zagrejanoj rerni 40-45 minuta, ili dok ne dobije zlatno-smeđu boju.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre služenja."
    ],
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 8
  },
  "Palačinke (varijanta)": {
    name: "Palačinke (varijanta)",
    ingredients: [
      "2 jaja",
      "250ml mleka",
      "125g brašna",
      "Prstohvat soli",
      "1 kašika šećera (opciono, za slatke palačinke)",
      "2 kašike otopljenog putera ili ulja (plus dodatno za podmazivanje tiganja)"
    ],
    instructions: [
      "U velikoj činiji umutite jaja sa mlekom.",
      "Dodajte brašno i so, i mutite dok ne dobijete glatku smesu bez grudvica.",
      "Ako pravite slatke palačinke, dodajte i šećer.",
      "Umešajte otopljeni puter ili ulje u smesu.",
      "Zagrejte tiganj na srednjoj vatri. Lagano ga podmažite puterom ili uljem.",
      "Sipajte kutlačom smesu na vreo tiganj, naginjući tiganj tako da se smesa ravnomerno rasporedi.",
      "Pecite palačinku oko 1-2 minuta sa jedne strane, dok ne porumeni i ivice počnu da se odvajaju.",
      "Okrenite palačinku i pecite je još 1 minut sa druge strane.",
      "Ponovite postupak sa preostalom smesom, podmazujući tiganj po potrebi.",
      "Filujte palačinke po želji i poslužite tople."
    ],
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 10
  },
  "Štrudla": {
    name: "Štrudla",
    ingredients: [
      "500g tankih kora za pitu",
      "150g mlevenih oraha",
      "150g prezli",
      "150g šećera",
      "1 kesica vanilin šećera",
      "100g suvog grožđa (opciono)",
      "100ml ulja",
      "100ml kisele vode",
      "Malo cimeta (opciono)"
    ],
    instructions: [
      "Rernu zagrejati na 180°C.",
      "U činiji pomešati mlevene orahe, prezle, šećer, vanilin šećer, suvo grožđe (ako se koristi) i cimet (ako se koristi).",
      "U manjoj posudi pomešati ulje i kiselu vodu.",
      "Raširiti jednu koru na radnu površinu. Poprskati je mešavinom ulja i kisele vode.",
      "Preko prve kore staviti drugu koru i ponoviti postupak prskanja uljem i kiselom vodom.",
      "Ponavljati postupak dok se ne iskoriste 3-4 kore.",
      "Na kraj kora rasporediti trećinu pripremljene smese od oraha, prezli i šećera.",
      "Uviti kore u rolat.",
      "Ponoviti postupak sa preostalim korama i nadevom, praveći ukupno 2-3 rolata.",
      "Rolate staviti u podmazan pleh ili obložen papirom za pečenje.",
      "Pre pečenja, rolate premazati preostalom mešavinom ulja i kisele vode.",
      "Peći u zagrejanoj rerni 45-60 minuta, ili dok ne porumeni.",
      "Izvaditi iz rerne i ostaviti da se malo prohladi pre sečenja i serviranja."
    ],
    prepTime: "45 min",
    cookTime: "60 min",
    servings: 10
  },
  "Pecivo sa makom": {
    name: "Pecivo sa makom",
    ingredients: [
      "500g brašna",
      "7g suvog kvasca (ili 25g svežeg kvasca)",
      "80g šećera",
      "1 kesica vanilin šećera",
      "250ml mleka",
      "80g otopljenog putera",
      "1 jaje",
      "Prstohvat soli",
      "200g mlevenog maka",
      "100g šećera",
      "100ml mleka",
      "50g otopljenog putera",
      "1 kašičica ekstrakta vanile (opciono)",
      "1 jaje",
      "Malo mleka"
    ],
    instructions: [
      "U mlakom mleku rastvoriti kvasac sa kašičicom šećera i ostaviti da nadođe 5-10 minuta.",
      "U posudi pomešati brašno, šećer, vanilin šećer i so.",
      "Dodati nadošli kvasac, otopljeni puter i jaje.",
      "Postepeno dodavati toplo mleko i mesiti dok se ne dobije glatko i elastično testo.",
      "Testo prekriti krpom i ostaviti na toplom mestu da naraste oko 1 sat, ili dok se ne udvostruči.",
      "Priprema fila: U šerpi pomešati mleveni mak, šećer, mleko i otopljeni puter. Kuvati na tihoj vatri, mešajući dok se smesa ne zgusne. Dodati ekstrakt vanile, ako se koristi. Ostaviti da se ohladi.",
      "Naraslo testo premesiti i podeliti na 12 jednakih delova.",
      "Svaki deo razvući u ovalni oblik.",
      "Na sredinu svakog ovala staviti fil od maka.",
      "Preklopiti testo preko fila i dobro zatvoriti krajeve.",
      "Peciva poređati na pleh obložen papirom za pečenje.",
      "Umutiti jaje sa malo mleka i premazati peciva.",
      "Peći u prethodno zagrejanoj rerni na 180°C oko 20-25 minuta, ili dok ne porumene.",
      "Ostaviti da se malo ohlade pre služenja."
    ],
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 12
  },
  "Pecivo sa orasima": {
    name: "Pecivo sa orasima",
    ingredients: [
      "500g brašna",
      "7g suvog kvasca ili 25g svežeg kvasca",
      "100g šećera",
      "250ml mleka",
      "100ml ulja",
      "1 jaje",
      "1 kašičica ekstrakta vanile",
      "Prstohvat soli",
      "200g mlevenih oraha",
      "100g šećera",
      "50ml mleka",
      "1 kašičica ruma (opciono)",
      "1 jaje",
      "Malo mleka"
    ],
    instructions: [
      "U mlakom mleku rastvoriti kvasac sa kašičicom šećera i malo brašna. Ostaviti da naraste 10 minuta.",
      "U većoj posudi pomešati brašno, preostali šećer i so.",
      "Dodati nadošli kvasac, ulje, jaje i ekstrakt vanile. Zamesiti mekano testo.",
      "Prekriti testo krpom i ostaviti na toplom mestu da naraste oko 1 sat, ili dok se ne udvostruči.",
      "Za fil: Pomešati mlevene orahe, šećer, mleko i rum (ako se koristi).",
      "Naraslo testo podeliti na dva dela.",
      "Razvući prvi deo testa u pravougaonik. Premazati polovinom fila od oraha.",
      "Urolati testo i iseći na 6 komada. Ponavljati postupak sa drugim delom testa.",
      "Poređati peciva na pleh obložen papirom za pečenje.",
      "Umutiti jaje sa malo mleka i premazati peciva.",
      "Peći u zagrejanoj rerni na 180°C oko 25 minuta, ili dok ne porumene.",
      "Ostaviti da se ohlade pre služenja."
    ],
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 12
  },
  "Somun": {
    name: "Somun",
    ingredients: [
      "500g brašna (tip 500 ili 550)",
      "320ml mlake vode",
      "1 kesica suvog kvasca (7g) ili 25g svežeg kvasca",
      "1 kašičica šećera",
      "1.5 kašičice soli",
      "2 kašike maslinovog ulja (plus malo za premazivanje)"
    ],
    instructions: [
      "U većoj posudi pomešajte brašno, so i šećer.",
      "Ako koristite sveži kvasac, rastvorite ga u malo mlake vode sa šećerom i ostavite da se aktivira 5-10 minuta.",
      "Dodajte aktivirani kvasac (ili suvi kvasac) u brašno.",
      "Postepeno dodajte mlaku vodu, mešajući dok se ne formira testo.",
      "Dodajte maslinovo ulje i mesite testo na pobrašnjenoj površini 8-10 minuta, dok ne postane glatko i elastično.",
      "Formirajte testo u loptu, premažite ga sa malo maslinovog ulja, stavite u posudu, pokrijte krpom i ostavite na toplom mestu da naraste oko 1 sat.",
      "Zagrejte rernu na 250°C (480°F) sa plehom unutra.",
      "Nakon što je testo naraslo, podelite ga na 4 jednaka dela.",
      "Svaki deo oblikujte u loptu, a zatim ga razvaljajte u ovalni oblik, debljine oko 1-1.5 cm.",
      "Prebacite somune na papir za pečenje.",
      "Pomoću prstiju napravite udubljenja po površini somuna.",
      "Premažite somune sa malo maslinovog ulja.",
      "Pažljivo izvadite vreli pleh iz rerne i prebacite somune (sa papirom za pečenje) na njega.",
      "Pecite 20-25 minuta, ili dok ne dobiju zlatno-braon boju.",
      "Izvadite somune iz rerne i ostavite ih da se malo prohlade pre serviranja."
    ],
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 4
  },
  "Lepinja": {
    name: "Lepinja",
    ingredients: [
      "500g brašna",
      "300ml mlake vode",
      "7g suvog kvasca (ili 20g svežeg kvasca)",
      "1 kašičica šećera",
      "1 kašičica soli",
      "2 kašike ulja (za testo)",
      "Ulje ili mast (za premazivanje)"
    ],
    instructions: [
      "U mlakoj vodi rastvoriti kvasac i šećer. Ostaviti da odstoji 5-10 minuta dok se ne zapeni.",
      "U velikoj posudi pomešati brašno i so. Dodati aktivirani kvasac i ulje.",
      "Zamesiti testo. Ako je potrebno, dodati još malo brašna ili vode dok se ne dobije glatko i elastično testo.",
      "Testo prekriti krpom i ostaviti na toplom mestu da naraste, oko 1 sat, ili dok se ne udvostruči.",
      "Nakon što je testo naraslo, podeliti ga na 6 jednakih delova.",
      "Svaki deo oblikovati u lopticu, a zatim ga rastanjiti u okruglu lepinju debljine oko 1 cm.",
      "Lepinje prekriti krpom i ostaviti da odmaraju 15-20 minuta.",
      "U međuvremenu, zagrejati rernu na 220°C.",
      "Pre pečenja, lepinje blago premazati uljem ili mašću i izbockati viljuškom.",
      "Peći u zagrejanoj rerni 15-20 minuta, ili dok ne dobiju zlatno-braon boju.",
      "Pečene lepinje izvaditi iz rerne i prekriti krpom da ostanu mekane."
    ],
    prepTime: "20 min",
    cookTime: "20 min",
    servings: 6
  },
  "Proja": {
    name: "Proja",
    ingredients: [
      "500g kukuruznog brašna (belo ili žuto)",
      "1 kesica praška za pecivo",
      "1 kašičica soli",
      "1/2 kašičice sode bikarbone",
      "4 jajeta",
      "400ml jogurta ili kiselog mleka",
      "200ml ulja",
      "200g sira (feta, mladi sir, ili kajmak) - opciono"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U velikoj činiji pomešajte kukuruzno brašno, prašak za pecivo, so i sodu bikarbonu.",
      "U drugoj činiji umutite jaja, dodajte jogurt/kiselo mleko i ulje.",
      "Tečne sastojke sipajte u suve sastojke i dobro promešajte dok se sve ne sjedini.",
      "Ako koristite sir, izmrvite ga i dodajte u smesu.",
      "Podmažite pleh uljem ili obložite papirom za pečenje.",
      "Sipajte smesu u pleh.",
      "Pecite u zagrejanoj rerni 30-40 minuta, ili dok proja ne dobije zlatno-braon boju i čačkalica ubodena u sredinu ne izađe čista.",
      "Ostavite da se malo prohladi pre sečenja i služenja."
    ],
    prepTime: "15 min",
    cookTime: "40 min",
    servings: 8
  },
  "Palačinke sa orasima": {
    name: "Palačinke sa orasima",
    ingredients: [
      "250g brašna",
      "500ml mleka",
      "2 jaja",
      "1 kašika ulja",
      "Prstohvat soli",
      "Ulje za pečenje",
      "200g mlevenih oraha",
      "100g šećera",
      "100ml mleka",
      "1 kašičica ekstrakta vanile (opciono)",
      "Rendana kora limuna (opciono)"
    ],
    instructions: [
      "U velikoj činiji pomešajte brašno i so. Dodajte jaja i ulje, pa postepeno ulivajte mleko, mešajući dok ne dobijete glatku smesu bez grudvica.",
      "Zagrejte tiganj za palačinke na srednjoj vatri. Podmažite ga sa malo ulja. Sipajte kutlaču smese na vreli tiganj i rasporedite je ravnomerno po celoj površini. Pecite palačinku oko 1-2 minuta sa svake strane, dok ne porumeni.",
      "U šerpi pomešajte mlevene orahe, šećer i mleko. Kuvajte na tihoj vatri, mešajući dok se šećer ne rastopi i smesa se zgusne. Dodajte ekstrakt vanile i rendanu koru limuna (ako koristite).",
      "Stavite kašiku fila od oraha na svaku palačinku. Preklopite palačinku na pola, pa još jednom na pola da dobijete trougao.",
      "Poslužite palačinke tople. Možete ih posuti šećerom u prahu ili preliti dodatnim medom ili džemom."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 12
  },
  "Palačinke sa sirom": {
    name: "Palačinke sa sirom",
    ingredients: [
      "2 jaja",
      "250 ml mleka",
      "125 g brašna",
      "1 kašika ulja",
      "Prstohvat soli",
      "500 g svežeg kravljeg sira",
      "1 jaje",
      "2-3 kašike šećera (po ukusu)",
      "1 vanilin šećer (opciono)",
      "Rendana kora jednog limuna (opciono)"
    ],
    instructions: [
      "U velikoj posudi umutite jaja, mleko, ulje i so. Postepeno dodajte brašno i mutite dok ne dobijete glatku smesu bez grudvica. Ostavite testo da odstoji 15-20 minuta.",
      "U drugoj posudi pomešajte sir, jaje, šećer, vanilin šećer (ako koristite) i rendanu koru limuna (ako koristite). Dobro promešajte dok se svi sastojci ne sjedine.",
      "Zagrejte tiganj za palačinke na srednjoj vatri. Lagano ga premažite uljem ili puterom. Sipajte kutlaču testa u tiganj i ravnomerno rasporedite po celoj površini. Pecite palačinku oko 1-2 minuta sa svake strane, dok ne dobije zlatno-braon boju.",
      "Stavite pečenu palačinku na tanjir. Preko polovine palačinke rasporedite 2-3 kašike fila. Preklopite palačinku na pola, a zatim ponovo na pola, da dobijete trougao.",
      "Možete ih odmah poslužiti ili ih možete zapeći u rerni. Posložite punjene palačinke u vatrostalnu posudu, premažite ih sa malo putera i pecite u zagrejanoj rerni na 180°C oko 10-15 minuta, dok ne dobiju blago zlatnu boju.",
      "Poslužite tople palačinke posute šećerom u prahu, voćem ili džemom po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 8
  },
  "Palačinke sa šlagom": {
    name: "Palačinke sa šlagom",
    ingredients: [
      "125g brašna",
      "250ml mleka", 
      "1 jaje",
      "1 kašika šećera",
      "1/2 kašičice soli",
      "2 kašike otopljenog putera ili ulja, plus još za podmazivanje tiganja",
      "250ml slatke pavlake za šlag",
      "2 kašike šećera u prahu (za šlag)",
      "Po želji: sveže voće (jagode, maline, borovnice)"
    ],
    instructions: [
      "U velikoj činiji, pomešajte brašno, šećer i so.",
      "U drugoj činiji, umutite jaje i mleko.",
      "Polako dodajte mokre sastojke suvim sastojcima, mešajući dok se ne dobije glatka smesa. Izbegavajte grudvice.",
      "Umešajte otopljeni puter ili ulje u smesu.",
      "Zagrejte tiganj na srednjoj vatri. Lagano ga podmažite puterom ili uljem.",
      "Sipajte kutlaču smese u vreli tiganj. Razlijte smesu kružnim pokretima da prekrije dno tiganja.",
      "Pecite palačinku oko 2-3 minuta sa svake strane, ili dok ne postane zlatno-braon.",
      "Ponovite postupak sa preostalom smesom.",
      "Pripremite šlag: u hladnoj činiji umutite slatku pavlaku sa šećerom u prahu dok se ne formiraju čvrsti vrhovi.",
      "Servirajte palačinke tople, premazane šlagom. Po želji dodajte sveže voće."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 6
  },
  "Palačinke sa voćem": {
    name: "Palačinke sa voćem",
    ingredients: [
      "125g brašna",
      "1 jaje",
      "250ml mleka",
      "Prstohvat soli",
      "1 kašika šećera",
      "1 kašika otopljenog putera ili ulja + za podmazivanje tiganja",
      "200g mešanog voća (jagode, maline, borovnice, banane)",
      "Med, javorov sirup ili nutela (po ukusu)",
      "Šećer u prahu (opciono)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte brašno i so.",
      "U drugoj posudi, umutite jaje, mleko, šećer i otopljeni puter.",
      "Postepeno dodajte tečne sastojke suvim sastojcima, muteći dok ne dobijete glatku smesu bez grudvica.",
      "Zagrejte tiganj na srednjoj vatri i podmažite ga sa malo putera ili ulja.",
      "Sipajte kutlaču smese na vruć tiganj i razlijte je ravnomerno.",
      "Pecite palačinku oko 2-3 minuta sa jedne strane, dok se ne pojave mehurići, a zatim okrenite i pecite još 1-2 minuta sa druge strane, dok ne porumeni.",
      "Ponovite postupak sa preostalom smesom, podmazujući tiganj po potrebi.",
      "Rasporedite palačinke na tanjire.",
      "Preko palačinki rasporedite iseckano voće.",
      "Prelijte medom, javorovim sirupom ili nutelom.",
      "Po želji pospite šećerom u prahu."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Palačinke sa čokoladom": {
    name: "Palačinke sa čokoladom",
    ingredients: [
      "125g brašna",
      "1 jaje", 
      "250ml mleka",
      "Prstohvat soli",
      "1 kašika ulja, plus još za prženje",
      "100g tamne čokolade (minimum 70% kakao)",
      "100ml slatke pavlake za kuvanje",
      "1 kašika putera",
      "1 kašika šećera u prahu (opciono)"
    ],
    instructions: [
      "U velikoj činiji, umutite brašno i so.",
      "U zasebnoj činiji, umutite jaje i mleko.", 
      "Postepeno dodajte tečne sastojke u suve sastojke, neprestano mešajući dok ne dobijete glatku smesu bez grudvica.",
      "Umešajte 1 kašiku ulja u smesu.",
      "Zagrejte tiganj za palačinke na srednjoj vatri. Lagano ga podmažite uljem.",
      "Sipajte kutlaču smese u tiganj i kružnim pokretima rasporedite da prekrije dno tiganja.",
      "Pecite palačinku 1-2 minuta sa jedne strane, dok se ne pojave mehurići, a zatim je okrenite i pecite još 1 minut sa druge strane, dok ne porumeni.",
      "Ponavljajte postupak dok ne potrošite svu smesu. Držite pečene palačinke na toplom.",
      "Za čokoladni sos, u maloj šerpi na laganoj vatri, zagrejte slatku pavlaku.",
      "Dodajte izlomljenu čokoladu i puter. Mešajte dok se čokolada ne otopi i sos ne postane gladak i sjajan.",
      "Dodajte šećer u prahu (ako koristite) i promešajte.",
      "Prelijte pečene palačinke čokoladnim sosom i poslužite odmah."
    ],
    prepTime: "10 minuta", 
    cookTime: "20 minuta",
    servings: 6
  },
  "Palačinke sa marmeladom": {
    name: "Palačinke sa marmeladom",
    ingredients: [
      "125g brašna",
      "250ml mleka",
      "1 jaje",
      "1 kašika ulja",
      "Prstohvat soli",
      "Ulje za prženje",
      "Marmelada po izboru"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno i so.",
      "U drugoj posudi umutiti jaje, mleko i ulje.",
      "Postepeno dodavati tečne sastojke u suve sastojke, neprestano mešajući dok se ne dobije glatka smesa bez grudvica.",
      "Ugrejati tiganj na srednjoj vatri i premazati ga tankim slojem ulja.",
      "Sipati kutlaču smese na vreli tiganj i ravnomerno je rasporediti.",
      "Pržiti palačinku 1-2 minuta sa svake strane, dok ne dobije zlatno-braon boju.",
      "Ponoviti postupak sa preostalom smesom.",
      "Svaku palačinku premazati marmeladom i saviti je na četvrtine ili u rolnicu.",
      "Poslužiti toplo."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 8
  },
  "Palačinke sa kremom": {
    name: "Palačinke sa kremom",
    ingredients: [
      "2 jaja",
      "250 ml mleka",
      "125 g brašna",
      "1 kašika šećera", 
      "1/2 kašičice soli",
      "2 kašike otopljenog putera ili ulja",
      "Dodatno ulje za pečenje",
      "500 ml mleka",
      "1 kesica pudinga od vanile (40g)",
      "3 kašike šećera",
      "125 g putera, sobne temperature",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "U velikoj činiji umutite jaja, mleko, šećer i so.",
      "Postepeno dodajte brašno, muteći dok ne dobijete glatku smesu bez grudvica.",
      "Umešajte otopljeni puter ili ulje.",
      "Ostavite testo da odstoji 15-20 minuta.",
      "U šerpi pomešajte 400 ml mleka sa šećerom i stavite da se zagreva na srednjoj vatri.",
      "U preostalih 100 ml mleka razmutite puding od vanile.",
      "Kada mleko u šerpi provri, sklonite sa vatre i umešajte razmućeni puding.",
      "Vratite na vatru i kuvajte uz stalno mešanje dok se krem ne zgusne.",
      "Sklonite sa vatre i ostavite da se ohladi.",
      "Kada se krem potpuno ohladi, umutite puter sobne temperature dok ne postane penast.",
      "Postepeno dodajte ohlađeni puding u umućeni puter i mutite dok se sve dobro ne sjedini. Dodajte ekstrakt vanile (opciono).",
      "Zagrejte tiganj na srednjoj vatri i premažite ga tankim slojem ulja.",
      "Sipajte kutlaču testa u tiganj i rotirajte ga da se testo ravnomerno rasporedi.",
      "Pecite palačinku oko 2-3 minuta sa svake strane, dok ne porumeni.",
      "Ponovite postupak sa preostalim testom.",
      "Svaku palačinku premažite tankim slojem krema i savijte je u trougao ili rolat.",
      "Poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 8
  },
  "Slane palačinke": {
    name: "Slane palačinke",
    ingredients: [
      "200g brašna",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "2 jajeta",
      "300ml mleka",
      "50ml mineralne vode",
      "2 kašike ulja (za testo) + dodatno za prženje",
      "Punjenje po želji (sir, šunka, povrće, pavlaka, itd.)"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno, so i biber.",
      "U drugoj posudi umutite jaja sa mlekom i mineralnom vodom.",
      "Postepeno dodajte tečne sastojke u suve, neprestano mešajući dok ne dobijete glatku smesu bez grudvica.",
      "Umešajte 2 kašike ulja u smesu.",
      "Zagrejte tiganj na srednjoj vatri i premažite ga tankim slojem ulja.",
      "Sipajte kutlaču smese u zagrejani tiganj i razlijte je po celoj površini tiganja.",
      "Pecite palačinku oko 2-3 minuta sa svake strane, ili dok ne porumeni.",
      "Ponovite postupak sa preostalom smesom, dodajući ulje po potrebi.",
      "Napunite palačinke željenim punjenjem i poslužite tople."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 8
  },
  "Palačinke sa šunkom": {
    name: "Palačinke sa šunkom",
    ingredients: [
      "2 jaja",
      "250g brašna",
      "500ml mleka",
      "Prstohvat soli",
      "2 kašike ulja",
      "200g šunke, seckane",
      "200g sira (gauda, edamer), rendanog",
      "100g krem sira",
      "1 jaje",
      "So i biber po ukusu",
      "200ml pavlake za kuvanje",
      "50g rendanog sira (parmezan)"
    ],
    instructions: [
      "U velikoj činiji umutiti jaja, so, ulje i polovinu mleka. Postepeno dodavati brašno, muteći da se ne stvore grudvice. Dodati ostatak mleka i umutiti da se dobije glatka smesa.",
      "Zagrejati tiganj za palačinke na srednjoj vatri. Premazati ga sa malo ulja. Sipati kutlaču smese i peći palačinke sa obe strane dok ne porumene. Ponavljati postupak dok se ne potroši smesa.",
      "U činiji pomešati seckanu šunku, rendani sir, krem sir i jaje. Posoliti i pobiberiti po ukusu.",
      "Uzeti jednu palačinku i rasporediti fil po celoj površini. Urolati palačinku i staviti je u vatrostalnu posudu koju ste prethodno premazali uljem. Ponavljati postupak dok ne iskoristite sve palačinke i fil.",
      "Preliti palačinke pavlakom za kuvanje i posuti rendanim parmezanom.",
      "Zagrejte rernu na 180°C. Pecite palačinke u rerni oko 20-25 minuta, ili dok ne dobiju zlatno-braon boju i dok se sir ne otopi.",
      "Izvadite iz rerne i ostavite da se malo prohlade pre služenja."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },
  "Kačamak": {
    name: "Kačamak",
    ingredients: [
      "1 litar vode",
      "1 kašičica soli",
      "250g kukuruznog brašna (žuto ili belo, po ukusu)",
      "50g putera ili kajmaka (za serviranje)",
      "Sir, slanina ili kiselo mleko (opciono, za serviranje)"
    ],
    instructions: [
      "U dubljoj šerpi zagrejte vodu do ključanja.",
      "Dodajte so u vodu.",
      "Smanjite vatru na srednju.",
      "Postepeno sipajte kukuruzno brašno u ključalu vodu, neprestano mešajući žicom ili varjačom. Važno je da se ne stvore grudvice.",
      "Nastavite da kuvate kačamak, uz stalno mešanje, oko 15-20 minuta, ili dok se ne zgusne i počne da se odvaja od zidova šerpe.",
      "Kada je kačamak gotov, sklonite ga sa vatre.",
      "Podelite kačamak u tanjire.",
      "Na svaki tanjir stavite komadić putera ili kajmaka.",
      "Poslužite toplo uz sir, slaninu ili kiselo mleko, po želji."
    ],
    prepTime: "5 min",
    cookTime: "20 min",
    servings: 4
  },
  "Uštipci": {
    name: "Uštipci",
    ingredients: [
      "500g brašna",
      "1 kesica praška za pecivo",
      "1 kašičica soli",
      "300ml mlake vode",
      "1 jaje",
      "Ulje za prženje"
    ],
    instructions: [
      "U većoj posudi pomešati brašno, prašak za pecivo i so.",
      "U drugoj posudi umutiti jaje sa vodom.",
      "Tečne sastojke postepeno dodavati u suve sastojke, mešajući dok se ne dobije glatko testo bez grudvica. Testo treba da bude malo gušće od testa za palačinke.",
      "U dubljem tiganju ili šerpi zagrejati ulje na srednjoj vatri.",
      "Kašičicom vaditi testo i pažljivo spuštati u vrelo ulje.",
      "Pržiti uštipke sa obe strane dok ne dobiju zlatno-smeđu boju.",
      "Izvaditi uštipke na papirni ubrus da se ocede od viška ulja.",
      "Poslužiti tople."
    ],
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 20
  },

  // Mexican
  "Tacos": {
    name: "Tacos",
    description: "Ovo su jednostavni i ukusni tacos, savršeni za brzi obrok ili druženje sa prijateljima.",
    ingredients: [
      "500g mlevene junetine",
      "1 luk, sitno iseckan",
      "1 paprika, sitno iseckana (zelena ili crvena)",
      "1 kesica začina za tacos (oko 30g)",
      "200ml vode",
      "12 kukuruznih tortilja (oko 15cm prečnika)",
      "200g rendanog čedar sira",
      "1 glavica zelene salate, iseckana",
      "1 paradajz, iseckan",
      "1 avokado, iseckan (opciono)",
      "Kisela pavlaka (opciono)",
      "Ljuti sos (opciono)",
      "Biljno ulje"
    ],
    instructions: [
      "Zagrejte malo biljnog ulja u velikom tiganju na srednjoj vatri.",
      "Dodajte mlevenu junetinu i pržite, razbijajući grudvice, dok ne porumeni.",
      "Iscedite višak masnoće iz tiganja.",
      "Dodajte iseckani luk i papriku u tiganj i pržite dok povrće ne omekša, oko 5 minuta.",
      "U tiganj dodajte začin za tacos i vodu. Dobro promešajte.",
      "Smanjite vatru i kuvajte smesu oko 10-15 minuta, ili dok se sos ne zgusne. Povremeno promešajte.",
      "Dok se meso kuva, zagrejte tortilje. Možete ih zagrejati u rerni, na suvom tiganju ili u mikrotalasnoj pećnici.",
      "Pripremite ostale dodatke: iseckajte zelenu salatu i paradajz, narendajte sir i isecite avokado (ako koristite).",
      "Napunite svaku tortilju sa smesom od mesa, sirom, zelenom salatom, paradajzom i avokadom (ako koristite).",
      "Poslužite tacos odmah sa kiselom pavlakom i ljutim sosom (ako koristite)."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 6
  },

  "Burritos": {
    name: "Burritos",
    description: "Ukusno i lako jelo, savršeno za brzi ručak ili večeru.",
    ingredients: [
      "1 kg mlevene govedine",
      "1 veliki crni luk, sitno iseckan",
      "1 zelena paprika, sitno iseckana",
      "1 crvena paprika, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica čili praha",
      "1/2 kašičice kumina",
      "1/4 kašičice origana",
      "1/4 kašičice dimljene paprike",
      "So i biber, po ukusu",
      "1 konzerva (400g) seckanog paradajza",
      "1 konzerva (400g) crnog pasulja, oceđena i isprana",
      "1 konzerva (280g) kukuruza šećerca, oceđena",
      "200g rendanog čedar sira",
      "6 velikih tortilja",
      "Kisela pavlaka, za serviranje (opciono)",
      "Guacamole, za serviranje (opciono)",
      "Salsa, za serviranje (opciono)"
    ],
    instructions: [
      "U velikom tiganju na srednjoj vatri propržite mlevenu govedinu dok ne porumeni. Ocedite višak masnoće.",
      "Dodajte crni luk, zelenu i crvenu papriku, i beli luk u tiganj. Kuvajte dok povrće ne omekša, oko 5 minuta.",
      "Dodajte čili prah, kumin, origano, dimljenu papriku, so i biber. Dobro promešajte.",
      "Umešajte seckani paradajz, crni pasulj i kukuruz. Smanjite vatru i dinstajte 15 minuta, povremeno mešajući, da se ukusi sjedine.",
      "Zagrejte tortilje prema uputstvu na pakovanju (na suvom tiganju ili u mikrotalasnoj).",
      "Stavite oko 1/6 smese od mesa na sredinu svake tortilje.",
      "Pospite sa malo rendanog čedar sira.",
      "Preklopite strane tortilje prema unutra, a zatim urolajte od dna prema gore.",
      "Burrito servirajte odmah, sa kiselom pavlakom, guacamole-om i salsom, po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 6
  },

  "Quesadillas": {
    name: "Quesadillas",
    description: "Jednostavno i brzo jelo, idealno za ručak, večeru ili užinu. Podesivo po ukusu.",
    ingredients: [
      "8 tortilja (oko 20cm prečnika)",
      "200g rendanog sira (čedar, mocarela, gauda, ili kombinacija)",
      "1 paprika (crvena ili žuta), iseckana",
      "1 manji crni luk, iseckan",
      "100g kuvane piletine (ili mlevenog mesa), iseckane",
      "2 kašike maslinovog ulja",
      "So i biber po ukusu (opciono)",
      "Kisela pavlaka ili salsa za serviranje (opciono)"
    ],
    instructions: [
      "U velikoj tiganj, zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte iseckani luk i papriku. Dinstajte dok ne omekšaju, oko 5 minuta.",
      "Dodajte iseckanu piletinu (ili mleveno meso) u tiganj. Kuvajte dok se ne zagreje, oko 2-3 minuta. Začinite solju i biberom po ukusu, ako koristite.",
      "Sklonite smesu sa vatre.",
      "Na pola svake tortilje rasporedite polovinu rendanog sira.",
      "Preko sira stavite malo smese sa piletinom, lukom i paprikom.",
      "Preko smese stavite ostatak sira.",
      "Preklopite tortilju na pola, formirajući polukrug.",
      "Vratite tiganj na srednju vatru.",
      "Pažljivo stavite quesadille u tiganj.",
      "Pecite quesadille 2-3 minuta sa svake strane, dok tortilja ne postane zlatno-smeđa i sir se ne otopi.",
      "Izvadite quesadille iz tiganja i stavite ih na dasku za sečenje.",
      "Isecite svaku quesadillu na trouglove.",
      "Poslužite tople, sa kiselom pavlakom ili salsom po želji."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 4
  },

  "Nachos": {
    name: "Nachos",
    description: "Hrskavi čips preliven topljenim sirom, pikantnim mesom i drugim ukusnim dodacima. Savršeno kao predjelo ili brzi obrok.",
    ingredients: [
      "200g tortilla čipsa",
      "250g mlevenog junećeg mesa",
      "1 kašičica ulja",
      "1 kesica začina za taco",
      "100ml vode",
      "200g rendanog čedar sira",
      "100g kisela pavlaka",
      "100g salsa sosa",
      "50g isečenog jalapeño papričica (opciono)",
      "50g iseckanog mladog luka"
    ],
    instructions: [
      "U velikom tiganju, zagrejte ulje na srednjoj vatri.",
      "Dodajte mleveno juneće meso i pržite dok ne porumeni, razbijajući grudvice.",
      "Ocedite višak masnoće.",
      "Dodajte začin za taco i vodu. Promešajte i kuvajte 5 minuta, dok se sos ne zgusne.",
      "Na veliki tanjir ili pleh za pečenje rasporedite tortilla čips.",
      "Preko čipsa ravnomerno rasporedite pripremljeno mleveno meso.",
      "Pospite rendanim čedar sirom.",
      "Pecite u prethodno zagrejanoj rerni na 180°C (350°F) 5-10 minuta, ili dok se sir ne otopi i blago porumeni.",
      "Izvadite iz rerne i ukrasite kiselom pavlakom, salsa sosom, jalapeño papričicama (ako koristite) i iseckanim mladim lukom.",
      "Odmah poslužite."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 4
  },

  "Guacamole": {
    name: "Guacamole",
    description: "Osvežavajući i kremasti dip od avokada, idealan kao prilog ili užina.",
    ingredients: [
      "3 zrela avokada",
      "1/2 crvenog luka, sitno iseckanog",
      "2 paradajza, bez semenki i sitno iseckana",
      "1-2 ljute papričice (jalapeno ili serrano), sitno iseckane (opciono)",
      "2 kašike svežeg soka od limete",
      "1/4 šolje svežeg korijandera, iseckanog",
      "So po ukusu",
      "Biber po ukusu"
    ],
    instructions: [
      "Presecite avokado na pola, izvadite koštice i izdubite meso u činiju.",
      "Viljuškom izgnječite avokado dok ne dobijete željenu konzistenciju (može biti glatko ili sa komadićima).",
      "Dodajte crveni luk, paradajz, ljutu papričicu (ako koristite), sok od limete i korijander.",
      "Dobro promešajte da se svi sastojci sjedine.",
      "Začinite solju i biberom po ukusu.",
      "Probajte i po potrebi dodajte još soka od limete, soli ili ljute papričice.",
      "Poslužite odmah ili pokrijte plastičnom folijom (direktno na guacamole) da sprečite oksidaciju i čuvajte u frižideru do serviranja."
    ],
    prepTime: "10 minuta",
    cookTime: "0 minuta",
    servings: 4
  },

  "Enchiladas": {
    name: "Enchiladas",
    description: "Klasično meksičko jelo sa tortiljama punjenim mesom i prelivene sosom od paradajza i sirom.",
    ingredients: [
      "1 kašika maslinovog ulja",
      "500g mlevene govedine (ili piletine, ćuretine)",
      "1 crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica mlevenog kima",
      "1 kašičica čili praha",
      "1/2 kašičice sušenog origana",
      "1/4 kašičice kajenske paprike (opciono)",
      "400g paradajz pirea",
      "200ml goveđe supe",
      "1 konzerva (400g) seckanog paradajza, oceđena",
      "So i biber po ukusu",
      "12 kukuruznih tortilja",
      "300g rendanog čedar sira (ili Monterey Jack)",
      "Kisela pavlaka, guacamole, iseckani luk, svež korijander (za serviranje - opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 175°C.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte mleveno meso i kuvajte dok ne porumeni, razbijajući ga varjačom.",
      "Dodajte luk i beli luk i kuvajte dok luk ne omekša, oko 5 minuta.",
      "Umešajte kim, čili prah, origano i kajensku papriku (ako koristite). Kuvajte 1 minut.",
      "Dodajte paradajz pire, goveđu supu i seckani paradajz. Promešajte i pustite da provri. Smanjite vatru i kuvajte 15 minuta, dok se sos ne zgusne. Začinite solju i biberom po ukusu.",
      "Uzmite jednu tortilju i napunite je sa oko 2-3 kašike smese od mesa. Urolajte tortilju i stavite je u vatrostalnu posudu. Ponavljajte sa preostalim tortiljama i punjenjem.",
      "Prelijte enchiladas preostalim sosom i pospite rendanim sirom.",
      "Pecite u zagrejanoj rerni 20-25 minuta, ili dok se sir ne rastopi i ne porumeni.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre serviranja.",
      "Poslužite sa kiselom pavlakom, guacamoleom, iseckanim lukom i svežim korijanderom (opciono)."
    ],
    prepTime: "30 minuta",
    cookTime: "30 minuta",
    servings: 6
  },

  "Fajitas": {
    name: "Fajitas",
    description: "Ukusno i jednostavno jelo meksičke kuhinje, idealno za deljenje.",
    ingredients: [
      "500g pilećeg filea (ili junećeg filea)",
      "1 velika paprika (crvena, zelena ili žuta), iseckana na trake",
      "1 veliki crni luk, iseckan na trake",
      "2 kašike maslinovog ulja",
      "1 kesica začina za fajitas (ili mešavina začina: čili u prahu, kumin, paprika, beli luk u prahu, origano, so, biber)",
      "8 tortilja",
      "Po želji: kisela pavlaka, guacamole, salsa, rendani sir, seckani korijander, limeta"
    ],
    instructions: [
      "Pileći file iseći na tanke trake.",
      "U velikoj posudi pomešati isečenu piletinu sa maslinovim uljem i začinom za fajitas. Dobro promešati da se meso ravnomerno obloži.",
      "U velikom tiganju ili voku zagrejati malo maslinovog ulja na srednje jakoj vatri.",
      "Dodati piletinu u tiganj i pržiti dok ne dobije zlatno smeđu boju i dok ne bude potpuno kuvana (oko 8-10 minuta). Izvaditi piletinu iz tiganja i ostaviti na stranu.",
      "U isti tiganj dodati seckanu papriku i crni luk. Dinstati dok ne omekšaju (oko 5-7 minuta).",
      "Vratiti piletinu u tiganj sa paprikom i lukom. Prokuvati zajedno još 2-3 minuta.",
      "Zagrejte tortilje u tiganju, rerni ili mikrotalasnoj pećnici.",
      "Poslužite fajitas sa zagrejanim tortiljama i željenim dodacima kao što su kisela pavlaka, guacamole, salsa, rendani sir, seckani korijander i limeta."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Churros": {
    name: "Churros",
    description: "Hrustljave pržene poslastice posute šećerom i cimetom, idealne za doručak ili desert.",
    ingredients: [
      "1 šolja vode",
      "1/2 šolje putera",
      "1/4 kašičice soli",
      "1 kašika šećera",
      "1 šolja brašna",
      "2 velika jaja",
      "Ulje za prženje",
      "1/2 šolje šećera (za posipanje)",
      "1 kašičica cimeta (za posipanje)"
    ],
    instructions: [
      "U šerpi srednje veličine pomešajte vodu, puter, so i 1 kašiku šećera. Stavite na srednju vatru i zagrevajte dok se puter ne otopi i smesa ne provri.",
      "Sklonite šerpu sa vatre i odmah dodajte brašno. Snažno mešajte drvenom kašikom dok se smesa ne sjedini i formira kuglu koja se odvaja od stranica šerpe.",
      "Ostavite smesu da se ohladi nekoliko minuta.",
      "Dodajte jaja, jedno po jedno, i mešajte dok se potpuno ne sjedine sa smesom. Smesa treba da bude glatka i sjajna.",
      "Sipajte smesu u poslastičarsku kesu sa zvezdastim nastavkom.",
      "Zagrejte ulje u dubljoj šerpi na srednjoj vatri (oko 180°C).",
      "Iscedite trake testa direktno u vrelo ulje, dužine oko 10 cm. Pržite ih 2-3 minuta sa svake strane, dok ne postanu zlatno smeđe i hrskave.",
      "Izvadite churrose iz ulja i stavite ih na papirni ubrus da se ocede od viška ulja.",
      "Pomešajte 1/2 šolje šećera i cimet u plitkoj posudi. Uvaljajte tople churrose u smesu šećera i cimeta, tako da budu ravnomerno prekriveni.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 20
  },

  "Tamales": {
    name: "Tamales",
    description: "Tradicionalno meksičko jelo od kukuruznog testa punjenog raznim nadevima, kuvanog na pari u ljusci od kukuruzovine ili listu banane.",
    ingredients: [
      "8 šolja suve kukuruzne ljuske (hojas de maíz)",
      "4 šolje masa harina (brašno za tamale)",
      "2 kašičice praška za pecivo",
      "2 kašičice soli",
      "1 šolja svinjske masti, omekšale",
      "3 šolje pileće ili povrtne supe",
      "Nadev po izboru (npr. dinstana piletina, svinjetina, sir i čili)"
    ],
    instructions: [
      "Potopiti kukuruznu ljusku u toplu vodu najmanje 30 minuta da omekša.",
      "U velikoj posudi pomešati masa harina, prašak za pecivo i so.",
      "U drugoj posudi, umutiti svinjsku mast dok ne postane penasta.",
      "Postepeno dodavati smesu od masa harina u svinjsku mast, naizmenično sa supom, muteći dok se ne sjedini. Testo treba da bude mekano i vlažno.",
      "Ocediti kukuruznu ljusku i osušiti je papirnim ubrusom.",
      "Raširiti jednu ljusku i staviti oko 2-3 kašike testa na nju.",
      "Napraviti udubljenje u sredini testa i staviti željeni nadev.",
      "Preklopiti ljusku oko nadeva, formirajući cilindar.",
      "Saviti donji kraj ljuske prema gore.",
      "Ponavljati korake 6-9 dok se ne potroše testo i nadev.",
      "U veliki lonac za kuvanje na pari staviti rešetku.",
      "Sipati vodu u lonac, pazeći da ne dodiruje rešetku.",
      "Uspravno poređati tamales na rešetku, sa otvorenim krajem prema gore.",
      "Pokriti tamales dodatnom kukuruznom ljuskom.",
      "Poklopiti lonac i kuvati na pari 1.5 - 2 sata, ili dok se testo lako ne odvoji od ljuske.",
      "Dodavati vodu po potrebi tokom kuvanja.",
      "Ostaviti tamales da se ohlade nekoliko minuta pre serviranja."
    ],
    prepTime: "2 sata",
    cookTime: "1.5 - 2 sata",
    servings: 24
  },

  "Salsa": {
    name: "Salsa",
    description: "Sveža, pikantna salsa, savršena kao umak, dodatak jelima ili kao dip sa tortilja čipsom.",
    ingredients: [
      "4 velika zrela paradajza, iseckana",
      "1 mali crveni luk, sitno iseckan",
      "1-2 jalapeno papričice, očišćene od semenki i sitno iseckane (prilagoditi ukusu)",
      "1/2 svežnja korijandera, sitno iseckanog",
      "2 čena belog luka, sitno iseckana ili izgnječena",
      "Sok od 1 limete",
      "1/2 kašičice mlevenog kima",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj činiji pomešati iseckani paradajz, crveni luk, jalapeno papričice, korijander i beli luk.",
      "Dodati sok od limete i mleveni kim.",
      "Začiniti solju i biberom po ukusu.",
      "Dobro promešati da se svi sastojci sjedine.",
      "Probati i po potrebi dodati još soli, bibera, limete ili jalapena.",
      "Salsu pokriti i ostaviti u frižideru najmanje 30 minuta pre služenja, kako bi se ukusi sjedinili."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 8
  },

  "Chiles Rellenos": {
    name: "Chiles Rellenos",
    description: "Punjeni čili paprike, tradicionalno meksičko jelo.",
    ingredients: [
      "4 velike poblano čili paprike",
      "150g queso Oaxaca (ili mozzarella)",
      "1/2 šolje brašna",
      "3 jaja, razdvojena",
      "1/4 kašičice soli",
      "1/4 kašičice bibera",
      "Ulje za prženje",
      "1 kašika maslinovog ulja",
      "1/2 glavice crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "400g seckanog paradajza iz konzerve",
      "1/2 kašičice origana",
      "So i biber po ukusu",
      "1/4 šolje pilećeg bujona (opciono)"
    ],
    instructions: [
      "Pecite paprike direktno na plamenu šporeta ili ispod brojlera, okrećući ih dok koža ne pocrni sa svih strana.",
      "Stavite pečene paprike u posudu i pokrijte folijom. Ostavite da se ohlade 10-15 minuta.",
      "Ostružite pocrnelu kožu sa paprika. Napravite mali rez po dužini svake paprike i pažljivo izvadite semenke.",
      "Napunite svaku papriku komadima sira.",
      "U plitkoj posudi, sipajte brašno. Uvaljajte svaku papriku u brašno, otresite višak.",
      "Odvojite belanca od žumanaca. U posudi umutite belanca sa solju i biberom dok ne dobijete čvrst sneg. U drugoj posudi lagano umutite žumanca.",
      "Nežno umešajte žumanca u sneg od belanaca.",
      "Zagrejte ulje u velikom tiganju na srednjoj vatri.",
      "Umočite svaku papriku u smesu od jaja, pazeći da je dobro obložena.",
      "Pržite paprike u vrelom ulju oko 3-4 minuta sa svake strane, dok ne postanu zlatno-smeđe.",
      "Izvadite pržene paprike i stavite ih na papirni ubrus da se ocede od viška ulja.",
      "U šerpi zagrejte maslinovo ulje. Dodajte crni luk i beli luk, i pržite dok ne omekšaju.",
      "Dodajte seckani paradajz, origano, so i biber. Krčkajte sos oko 15-20 minuta, povremeno mešajući. Ako je sos pregust, dodajte malo pilećeg bujona.",
      "Poslužite chiles rellenos prelivene sosom."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 4
  },

  "Pozole": {
    name: "Pozole",
    description: "Tradicionalna meksička supa sa svinjetinom ili piletinom i hominy-jem, obično garnirana sa kupusom, rotkvicama, lukom, limetom i čili papričicama.",
    ingredients: [
      "2 kg svinjetine (but, plećka ili vrat), isečene na kocke od 5 cm",
      "1 veliki beli luk, prepolovljen",
      "4 lista lovora",
      "1 kašičica origana",
      "2 kašičice soli",
      "1 kašičica crnog bibera",
      "3 litra vode",
      "3 konzerve (po 794g) hominy-ja, oceđenog i ispranog",
      "Seckani kupus ili zelena salata",
      "Seckane rotkvice",
      "Seckani luk",
      "Sušeni origano",
      "Čili u prahu ili tucana paprika",
      "Kriške limete",
      "Tortilla chips"
    ],
    instructions: [
      "U velikoj šerpi ili loncu pomešajte svinjetinu, beli luk, lovorov list, origano, so, biber i vodu.",
      "Pustite da provri, zatim smanjite vatru na nisku, poklopite i kuvajte 3-4 sata, ili dok svinjetina ne omekša i lako se raspada viljuškom.",
      "Izvadite svinjetinu iz šerpe i isecite je na manje komade ili je rastrgnite viljuškom.",
      "Vratite svinjetinu u lonac.",
      "Dodajte hominy u lonac i kuvajte još 30 minuta, ili dok se hominy ne zagreje.",
      "Uklonite lovorov list pre serviranja.",
      "Poslužite vruće, uz dodatak seckanog kupusa/zelene salate, rotkvica, luka, origana, čilija i kriški limete."
    ],
    prepTime: "30 minuta",
    cookTime: "3-4 sata",
    servings: 6
  },

  "Mole": {
    name: "Mole",
    description: "Mole je složen meksički sos, poznat po bogatom ukusu koji se postiže kombinacijom čilija, začina i često, čokolade. Ova verzija je jednostavnija za pripremu kod kuće.",
    ingredients: [
      "4 sušene ancho čili papričice",
      "2 sušene pasilla čili papričice",
      "2 sušene guajillo čili papričice",
      "2 kašike maslinovog ulja",
      "1 veliki luk, iseckan",
      "4 čena belog luka, iseckana",
      "1/2 kašičice mlevenog cimeta",
      "1/4 kašičice mlevenog karanfilića",
      "1/2 kašičice mlevenog kima",
      "1/4 kašičice mlevenog korijandera",
      "1/4 šolje badema",
      "1/4 šolje grožđica",
      "1 konzerva (400g) seckanog paradajza",
      "2 šolje pileće supe ili vode",
      "1 kašika šećera (ili po ukusu)",
      "1 kašika jabukovog sirćeta",
      "2 kašike tamne čokolade (min. 70% kakaa), iseckane",
      "So po ukusu"
    ],
    instructions: [
      "Uklonite peteljke i semenke sa čili papričica. Potopite papričice u vruću vodu na 20 minuta, dok ne omekšaju.",
      "Zagrejte maslinovo ulje u velikoj šerpi na srednjoj vatri. Dodajte luk i dinstajte dok ne omekša, oko 5 minuta.",
      "Dodajte beli luk, cimet, karanfilić, kim i korijander. Kuvajte još 1 minut, dok se mirisi ne oslobode.",
      "Ocedite čili papričice i dodajte ih u šerpu sa lukom i začinima. Dodajte bademe i grožđice.",
      "Dodajte seckani paradajz i pileću supu (ili vodu). Pustite da provri, zatim smanjite vatru i krčkajte 30 minuta, povremeno mešajući.",
      "Skinite šerpu sa vatre i ostavite da se malo prohladi. Prebacite smesu u blender i blendirajte dok ne dobijete glatku smesu.",
      "Vratite smesu u šerpu. Dodajte šećer, jabukovo sirće i čokoladu. Krčkajte na niskoj vatri 15 minuta, povremeno mešajući, dok se čokolada ne otopi i sos se zgusne.",
      "Začinite solju po ukusu.",
      "Poslužite mole sos preko piletine, ćuretine, povrća ili enchilada."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 6
  },

  "Carnitas": {
    name: "Carnitas",
    description: "Tradicionalno meksičko jelo od sporo kuvane svinjetine dok ne postane mekana i hrskava. Odlično za takose, buritose ili jednostavno sa prilogom.",
    ingredients: [
      "2 kg svinjske plećke, isečene na krupnije komade (oko 5 cm)",
      "1 velika pomorandža, presečena na pola",
      "1 limun, presečen na pola",
      "1 luk, isečen na četvrtine",
      "4 čena belog luka, zgnječena",
      "2 kašičice soli",
      "1 kašičica bibera",
      "1 kašičica origana",
      "1/2 kašičice kima",
      "1 lovorov list",
      "1 šolja vode ili pilećeg bujona",
      "Ulje za prženje (opciono)"
    ],
    instructions: [
      "U velikoj šerpi ili holandskoj pećnici pomešajte svinjetinu, sok od pomorandže i limuna, luk, beli luk, so, biber, origano, kim i lovorov list. Dodajte vodu ili bujon.",
      "Pustite da provri, a zatim smanjite vatru, poklopite i krčkajte 3-4 sata, ili dok svinjetina ne postane izuzetno mekana i lako se raspada viljuškom. Povremeno promešajte.",
      "Izvadite svinjetinu iz šerpe i ostavite da se malo ohladi. Isecite svinjetinu na manje komade ili je razdvojite viljuškom.",
      "U velikom tiganju zagrejte malo ulja (opciono). Dodajte iseckanu svinjetinu u tiganj i pržite dok ne postane hrskava sa svih strana. Ovo je opciono, ali dodaje teksturu i ukus. Ako ne koristite ulje, možete rasporediti meso na pleh obložen papirom za pečenje i zapeći u rerni na 200°C dok ne postane hrskavo.",
      "Poslužite sa tortiljama, salsom, guacamoleom, seckanim lukom, korijanderom i limetama."
    ],
    prepTime: "20 minuta",
    cookTime: "3-4 sata",
    servings: 6
  },

  "Al Pastor": {
    name: "Al Pastor",
    description: "Marinirana svinjetina pečena na vatri, obično poslužena u tacosima.",
    ingredients: [
      "1.5 kg svinjskog vrata ili filea, tanko isečenog (debljine oko 3-5 mm)",
      "4-5 sušenih ancho čili papričica, očišćenih od semenki i peteljki",
      "2-3 sušenih guajillo čili papričica, očišćenih od semenki i peteljki",
      "1/2 šolje soka od ananasa",
      "1/4 šolje belog sirćeta",
      "3 čena belog luka, grubo iseckana",
      "1/4 glavice crnog luka, grubo iseckana",
      "1 kašičica mlevenog kima",
      "1 kašičica sušenog origana",
      "1/2 kašičice mlevenog karanfilića",
      "1/4 kašičice mlevenog cimeta",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "2 kašike achiote paste (opciono, za boju i ukus)",
      "1/2 svežeg ananasa, isečenog na tanke kriške (za pečenje)",
      "Tortilje od kukuruza ili brašna, za serviranje",
      "Sveži korijander, sitno iseckan, za serviranje",
      "Crni luk, sitno iseckan, za serviranje",
      "Limete, isečene na kriške, za serviranje",
      "Ljuti sos, za serviranje (opciono)"
    ],
    instructions: [
      "Stavite sušene čili papričice u šerpu i prelijte ih vrelom vodom. Ostavite ih da se namaču 20-30 minuta, dok ne omekšaju.",
      "Iscedite čili papričice i stavite ih u blender ili multipraktik. Dodajte sok od ananasa, belo sirće, beli luk, crni luk, kim, origano, karanfilić, cimet, so, biber i achiote pastu (ako koristite). Blendajte dok ne dobijete glatku smesu.",
      "Stavite isečenu svinjetinu u veliku činiju ili kesu za zamrzavanje. Prelijte je marinadom i dobro promešajte da se meso ravnomerno obloži. Pokrijte ili zatvorite i stavite u frižider da se marinira najmanje 4 sata, idealno preko noći.",
      "Zagrejte rernu na 200°C ili pripremite roštilj na srednjoj vatri.",
      "Poređajte kriške ananasa na dno tepsije. Preko ananasa složite mariniranu svinjetinu, pokušavajući da formirate 'kupolu'. Pecite u rerni 45-60 minuta, ili dok svinjetina ne bude potpuno pečena i dobije blagu boju.",
      "Ako koristite roštilj, stavite svinjetinu na nauljeni roštilj. Pecite, okrećući je često, 45-60 minuta, ili dok ne bude potpuno pečena. Pazite da ne izgori.",
      "Izvadite svinjetinu iz rerne ili sa roštilja i ostavite je da se odmori 5-10 minuta pre sečenja. Tanko nasecite meso. Zagrejte tortilje.",
      "Stavite isečenu svinjetinu na tortilje. Dodajte sveži korijander, crni luk, kriške limete i ljuti sos po želji. Poslužite odmah."
    ],
    prepTime: "30 minuta + mariniranje (minimalno 4 sata)",
    cookTime: "45-60 minuta",
    servings: 6
  },

  "Tres Leches Cake": {
    name: "Tres Leches Cake",
    description: "Sočni i kremasti kolač natopljen u tri vrste mleka, savršen za svaku priliku.",
    ingredients: [
      "1 ½ šolje brašna",
      "1 ½ kašičice praška za pecivo",
      "¼ kašičice soli",
      "5 jaja, razdvojenih",
      "1 šolja šećera",
      "⅓ šolje mleka",
      "1 kašičica ekstrakta vanile",
      "1 konzerva (397g) kondenzovanog mleka",
      "1 konzerva (360ml) isparenog mleka",
      "1 šolja punomasnog mleka",
      "2 šolje slatke pavlake za šlag",
      "¼ šolje šećera u prahu",
      "½ kašičice ekstrakta vanile"
    ],
    instructions: [
      "Zagrejte rernu na 175°C. Podmažite i pobrašnite pravougaoni pleh dimenzija 23x33 cm.",
      "U činiji pomešajte brašno, prašak za pecivo i so.",
      "U drugoj činiji umutite žumanca sa šećerom dok ne postanu svetla i penasta. Dodajte mleko i ekstrakt vanile.",
      "Postepeno dodajte suve sastojke u mokre sastojke, muteći dok se ne sjedine.",
      "U posebnoj činiji umutite belanca u čvrst sneg.",
      "Nežno umešajte belanca u smesu za kolač, u dva navrata.",
      "Sipajte smesu u pripremljeni pleh i pecite 30-35 minuta, ili dok čačkalica zabodena u sredinu ne izađe čista.",
      "Izvadite kolač iz rerne i ostavite da se ohladi u plehu 15 minuta.",
      "Viljuškom izbockajte kolač po celoj površini.",
      "U činiji pomešajte kondenzovano mleko, ispareno mleko i punomasno mleko.",
      "Polako prelijte mlečni preliv preko kolača, pazeći da se ravnomerno rasporedi. Ostavite da se kolač natapa najmanje 2 sata, ili idealno preko noći, u frižideru.",
      "U činiji umutite slatku pavlaku za šlag dok ne postane gusta. Dodajte šećer u prahu i ekstrakt vanile, i nastavite da mutite dok se ne formiraju čvrsti vrhovi.",
      "Premažite kolač šlagom.",
      "Po želji, pospite kolač cimetom ili narendajte čokoladu.",
      "Secite na kocke i poslužite."
    ],
    prepTime: "30 minuta",
    cookTime: "30 minuta",
    servings: 12
  },

  "Margaritas": {
    name: "Margaritas",
    description: "Osvežavajuće i klasično piće, idealno za tople dane.",
    ingredients: [
      "60 ml tekile (blanca ili reposado)",
      "30 ml sveže ceđenog soka limete",
      "30 ml triple sec (Cointreau ili Grand Marnier)",
      "Led",
      "So (za ivicu čaše)",
      "Kriška limete (za ukras)"
    ],
    instructions: [
      "Pripremite čašu za margaritu. Pređite kriškom limete preko ivice čaše, zatim je umočite u so kako bi se so zalepila na ivicu.",
      "U šejker za koktele stavite led.",
      "Dodajte tekilu, sok limete i triple sec u šejker.",
      "Dobro promućkajte šejker dok se ne ohladi, oko 15-20 sekundi.",
      "Napunite čašu za margaritu ledom.",
      "Procedite sadržaj šejkera u pripremljenu čašu.",
      "Ukrasite kriškom limete."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Elote": {
    name: "Elote",
    description: "Tradicionalni meksički kukuruz na štapiću, premazan majonezom, sirom, čilijem i limetom.",
    ingredients: [
      "4 klipa kukuruza, sa komušinom uklonjenom",
      "1/2 šolje majoneza",
      "1/4 šolje izmrvljenog meksičkog queso fresco sira (ili feta sir)",
      "1 kašika čili praha (ili po ukusu)",
      "1 limeta, isečena na četvrtine",
      "So po ukusu"
    ],
    instructions: [
      "Kuvajte kukuruz u ključaloj vodi 15-20 minuta, dok ne omekša. Možete ga peći na roštilju dok ne dobije boju.",
      "Izvadite kukuruz iz vode i ostavite da se malo ohladi.",
      "Svaki klip kukuruza premažite majonezom.",
      "Pospite izmrvljenim sirom.",
      "Pospite čili prahom po ukusu.",
      "Poslužite sa kriškom limete za ceđenje."
    ],
    prepTime: "10 minuta",
    cookTime: "15-20 minuta",
    servings: 4
  },

  "Chimichangas": {
    name: "Chimichangas",
    description: "Hrskave tortilje punjene sočnim mesom i sirom, pržene do zlatne boje.",
    ingredients: [
      "500g mlevene govedine",
      "1 veliki crni luk, sitno iseckan",
      "1 zelena paprika, sitno iseckana",
      "1 crvena paprika, sitno iseckana",
      "1 kesica (30g) mešavine začina za tacos",
      "1 konzerva (400g) seckanog paradajza",
      "200g rendanog čedar sira",
      "4 velike tortilje od brašna",
      "Ulje za prženje",
      "Pavlaka, salsa, guacamole za serviranje (opciono)"
    ],
    instructions: [
      "U velikom tiganju, pržite mlevenu govedinu na srednjoj vatri dok ne porumeni. Ocedite višak masnoće.",
      "Dodajte iseckani crni luk, zelenu i crvenu papriku u tiganj i kuvajte dok povrće ne omekša, oko 5 minuta.",
      "Umešajte mešavinu začina za tacos i seckani paradajz. Pustite da provri, zatim smanjite vatru i kuvajte, nepokriveno, oko 10 minuta, povremeno mešajući, dok se sos ne zgusne.",
      "Skinite sa vatre i umešajte pola količine rendanog čedar sira.",
      "Zagrejte tortilje u mikrotalasnoj ili na suvom tiganju kako bi bile savitljivije.",
      "Na svaku tortilju stavite četvrtinu mesne smese u sredinu.",
      "Presavijte bočne strane tortilje prema unutra, a zatim čvrsto urolajte tortilju kao burito.",
      "Zagrejte oko 1-2 cm ulja u velikom tiganju na srednjoj vatri.",
      "Pažljivo stavite chimichange u vrelo ulje, sa šavom okrenutim nadole, i pržite ih dok ne postanu zlatno smeđe i hrskave sa svih strana, oko 2-3 minuta po strani.",
      "Izvadite chimichange iz tiganja i stavite ih na papirni ubrus da se ocede od viška ulja.",
      "Pospite preostalim rendanim čedar sirom preko vrućih chimichanga."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Tostadas": {
    name: "Tostadas",
    description: "Hrskava i ukusna meksička poslastica, savršena za ručak, večeru ili kao predjelo.",
    ingredients: [
      "8 kukuruznih tortilja",
      "1 kašika maslinovog ulja",
      "500g mlevene govedine ili piletine",
      "1 luk, sitno iseckan",
      "1 paprika (crvena ili zelena), sitno iseckana",
      "1 kesica taco začina",
      "1/2 šolje vode",
      "1 konzerva (400g) pasulja, ispranog i oceđenog",
      "1 avokado, izgnječen",
      "1/2 šolje salsa sosa",
      "1/4 šolje iseckanog korijandera",
      "Rendani sir cheddar ili monterey jack",
      "Kisela pavlaka (opciono)",
      "Iseckana zelena salata (opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 180°C.",
      "Premažite tortilje maslinovim uljem sa obe strane.",
      "Stavite tortilje na pleh i pecite u rerni 8-10 minuta, ili dok ne postanu hrskave i zlatno smeđe. Izvadite ih i ostavite sa strane.",
      "U velikom tiganju, propržite mleveno meso na srednjoj vatri dok ne porumeni. Ocedite višak masnoće.",
      "Dodajte luk i papriku u tiganj sa mesom i kuvajte dok povrće ne omekša, oko 5 minuta.",
      "Umešajte taco začin i vodu. Pustite da provri, a zatim smanjite vatru i krčkajte 5 minuta, ili dok se sos ne zgusne.",
      "Premažite svaku tostadu slojem pasulja.",
      "Dodajte smesu od mesa na vrh pasulja.",
      "Posipajte rendanim sirom.",
      "Vratite tostade u rernu na 2-3 minuta, ili dok se sir ne otopi.",
      "Pre serviranja, ukrasite tostade izgnječenim avokadom, salsa sosom i korijanderom. Dodajte kiselu pavlaku i iseckanu zelenu salatu po želji.",
      "Poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  // Pancakes
  "Palačinke sa džemom": {
    name: "Palačinke sa džemom",
    ingredients: [
      "2 jaja",
      "250 ml mleka", 
      "125 g brašna",
      "1 kašika šećera",
      "Prstohvat soli",
      "1 kašika ulja + dodatno za prženje",
      "Džem po izboru (npr. od kajsija, jagoda, šljiva)"
    ],
    instructions: [
      "U velikoj činiji, umutite jaja, mleko, šećer i so.",
      "Postepeno dodajte brašno, muteći neprekidno da se ne stvore grudvice.",
      "Umešajte 1 kašiku ulja u smesu.",
      "Zagrejte tiganj na srednjoj vatri i premažite ga tankim slojem ulja.",
      "Sipajte kutlačom smesu u tiganj i ravnomerno je rasporedite po dnu.",
      "Pecite palačinku oko 2-3 minuta sa svake strane, dok ne dobije zlatno-braon boju.",
      "Ponovite postupak sa preostalom smesom, dodajući ulje po potrebi.",
      "Namažite svaku palačinku džemom po želji i savijte je na četvrtine ili u rolnu.",
      "Poslužite toplo."
    ],
    prepTime: "10 minuta",
    cookTime: "20-25 minuta",
    servings: 10
  },
  "Palačinke sa eurokremom": {
    name: "Palačinke sa eurokremom", 
    ingredients: [
      "2 jaja",
      "250 ml mleka",
      "125 ml gazirane vode",
      "150 g brašna",
      "1 kašika šećera",
      "Prstohvat soli",
      "Ulje za prženje",
      "Eurokrem za punjenje"
    ],
    instructions: [
      "U velikoj činiji umutiti jaja, mleko i gaziranu vodu.",
      "Dodati brašno, šećer i so i dobro umutiti žicom ili mikserom dok se ne dobije glatka smesa bez grudvica.",
      "Ostaviti smesu da odstoji 15 minuta.",
      "Zagrejte tiganj za palačinke na srednjoj vatri i premažite ga tankim slojem ulja.",
      "Sipajte kutlačom smesu u tiganj i kružnim pokretima ga nagnite da se smesa ravnomerno rasporedi po celom tiganju.",
      "Pecite palačinku oko 2-3 minuta sa svake strane, dok ne porumeni.",
      "Ponovite postupak sa preostalom smesom, dodajući ulje po potrebi.",
      "Svaku palačinku premažite eurokremom i savijte na četvrtine ili u rolnu.",
      "Poslužite tople."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 10
  },
  "Palačinke sa medom": {
    name: "Palačinke sa medom",
    ingredients: [
      "1 šolja brašna",
      "1 jaje",
      "1 šolja mleka",
      "2 kašike otopljenog putera ili ulja",
      "1 kašičica šećera",
      "1/2 kašičice soli",
      "Ulje ili puter za prženje",
      "Med, za posluživanje"
    ],
    instructions: [
      "U velikoj činiji, pomešajte brašno, šećer i so.",
      "U drugoj činiji, umutite jaje, mleko i otopljeni puter (ili ulje).",
      "Postepeno dodajte mokre sastojke u suve sastojke, mešajući dok se ne sjedine. Izbegavajte grudvice.",
      "Zagrejte tiganj za palačinke na srednjoj vatri i premažite ga sa malo ulja ili putera.",
      "Sipajte kutlaču smese na zagrejani tiganj.",
      "Pecite palačinke oko 2-3 minuta sa svake strane, ili dok ne porumene.",
      "Ponovite postupak dok ne potrošite svu smesu.",
      "Poslužite palačinke tople, preliveni medom."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  // Turkish
  "Kebab": {
    name: "Kebab",
    description: "Tradicionalno jelo sa roštilja, meso na ražnjiću.",
    ingredients: [
      "500g jagnjetine ili govedine, isečene na kockice veličine 2-3 cm",
      "1 velika glavica crnog luka, iseckana na sitno",
      "2 čena belog luka, izgnječena",
      "2 kašike maslinovog ulja",
      "1 kašičica mlevene paprike (slatka ili ljuta, po ukusu)",
      "1/2 kašičice kumina",
      "1/2 kašičice mlevenog korijandera",
      "1/4 kašičice cimeta",
      "So i biber, po ukusu",
      "Drveni štapići za ražnjiće, potopljeni u vodi najmanje 30 minuta"
    ],
    instructions: [
      "U velikoj činiji pomešati meso, crni luk, beli luk, maslinovo ulje, mlevenu papriku, kumin, korijander, cimet, so i biber; dobro utrljati začine u meso.",
      "Pokriti i marinirati u frižideru najmanje 2 sata (idealno preko noći).",
      "Meso izvaditi 30 minuta pre pečenja da dođe na sobnu temperaturu.",
      "Nanižite meso na pripremljene štapiće.",
      "Zagrejte roštilj na srednju vatru.",
      "Pecite 15-20 minuta, povremeno okrećući, do željenog stepena pečenja.",
      "Ostaviti par minuta da odmori pre serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "15-20 minuta",
    servings: 4
  },

  "Doner": {
    name: "Doner",
    description: "Doner, popularno jelo brze hrane od tanko narezanog mesa sa povrćem i sosom.",
    ingredients: [
      "1 kg jagnjetine ili govedine (tanko narezane)",
      "1 veliki luk, sitno iseckan",
      "3 čena belog luka, sitno iseckana",
      "2 kašike maslinovog ulja",
      "1 kašičica origana",
      "1 kašičica timijana",
      "1 kašičica mlevene paprike",
      "1/2 kašičice kumina",
      "1/2 kašičice crnog bibera",
      "1 kašičica soli",
      "4 lepinje ili tortilje",
      "Zelena salata, paradajz, krastavac, crveni luk (po ukusu)",
      "Sos po izboru (beli sos, ljuti sos, humus)"
    ],
    instructions: [
      "U posudi pomešati luk, beli luk, ulje i sve začine.",
      "Dodati meso, dobro promešati i marinirati najmanje 2 sata (idealno preko noći).",
      "Zagrejan rernu na 200°C.",
      "Rasporediti meso na pleh (ili peći na vertikalnom roštilju) i peći 45-60 minuta, okrenuti na pola.",
      "Ostaviti par minuta da odmori, pa tanko narezati.",
      "Zagrejati lepinje/tortilje, napuniti mesom, povrćem i sosom; poslužiti odmah."
    ],
    prepTime: "30 minuta",
    cookTime: "45-60 minuta",
    servings: 4
  },

  "Lahmacun": {
    name: "Lahmacun",
    description: "Tanka turska pizza sa pikantnim nadevom od mlevenog mesa i povrća.",
    ingredients: [
      "Za testo:",
      "300g brašna",
      "1 kesica suvog kvasca (7g)",
      "1 kašičica šećera",
      "1 kašičica soli",
      "200ml mlake vode",
      "2 kašike maslinovog ulja",
      "Za nadev:",
      "300g mlevene junetine ili jagnjetine",
      "1 veliki crni luk, sitno iseckan",
      "2 zelene paprike, sitno iseckane",
      "2 paradajza, oguljena i sitno iseckana",
      "2 čena belog luka, izgnječena",
      "1/2 veze peršuna, sitno iseckanog",
      "1 kašičica aleve paprike",
      "1/2 kašičice kima",
      "1/4 kašičice čilija u prahu (opciono)",
      "2 kašike paradajz pirea",
      "2 kašike maslinovog ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "Testo: pomešati suve sastojke, dodati vodu i ulje, umesiti glatko testo; ostaviti da naraste ~1h.",
      "Nadev: pomešati sve sastojke do ujednačene smese.",
      "Rernu sa kamenom/plehom zagrejati na 250°C.",
      "Testo podeliti na 6, tanko razvući (2-3 mm), premazati nadevom.",
      "Peći 15-20 minuta do zlatnog.",
      "Poslužiti vruće uz limun i peršun."
    ],
    prepTime: "30 minuta",
    cookTime: "15-20 minuta",
    servings: 6
  },

  "Pide": {
    name: "Pide",
    description: "Turski hleb u obliku čamca punjen mesom, sirom ili povrćem.",
    ingredients: [
      "Za testo:",
      "500g brašna",
      "1 kesica suvog kvasca (7g)",
      "1 kašičica šećera",
      "1 kašičica soli",
      "300ml mlake vode",
      "2 kašike maslinovog ulja",
      "Za punjenje (mesno):",
      "300g mlevenog mesa (junetina/jagnjetina)",
      "1 glavica crnog luka, sitno iseckana",
      "2 zelene paprike, sitno iseckane",
      "2 paradajza, oljuštena i sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica tucane paprike",
      "1/2 kašičice kima",
      "1/2 kašičice origana",
      "So i biber po ukusu",
      "2 kašike maslinovog ulja",
      "1 jaje, umućeno (za premazivanje)"
    ],
    instructions: [
      "Umesiti testo i ostaviti da naraste ~1h.",
      "Pripremiti punjenje: izdinstati luk, dodati meso i povrće, začiniti i kratko krčkati.",
      "Rernu zagrejati na 220°C.",
      "Testo podeliti na 4, oblikovati čamac, napuniti, saviti ivice i premazati jajetom.",
      "Peći 20-25 minuta do zlatne boje."
    ],
    prepTime: "30 minuta",
    cookTime: "20-25 minuta",
    servings: 4
  },

  "Meze": {
    name: "Meze",
    description: "Raznovrstan izbor malih zalogaja, idealan za deljenje.",
    ingredients: [
      "150g feta sira",
      "100g maslina (zelene i crne)",
      "100g sušenog paradajza u ulju",
      "100g dimljenog sira",
      "100g kulena ili suvog vrata",
      "1 krastavac",
      "1 paprika",
      "1 šargarepa",
      "1 limun",
      "200g humusa",
      "100g ajvara",
      "Svežanj peršuna",
      "Maslinovo ulje",
      "Tortilja čips, krekeri ili baget"
    ],
    instructions: [
      "Isceckati i pripremiti sve sastojke.",
      "Aranžirati na velikoj dasci/tanjiru uz činije za humus i ajvar.",
      "Fetu preliti maslinovim uljem i posuti peršunom; povrće pokapati limunom.",
      "Poslužiti uz hleb/čips/krekere."
    ],
    prepTime: "30 minuta",
    cookTime: "15 minuta",
    servings: 6
  },

  "Turkish Coffee": {
    name: "Turkish Coffee",
    description: "Tradicionalna, jaka i aromatična turska kafa.",
    ingredients: [
      "1 šolja hladne vode (~85ml)",
      "1-2 kašičice fino mlevene turske kafe",
      "Šećer po ukusu (opciono)"
    ],
    instructions: [
      "U džezvu sipati vodu i dodati kafu (i šećer po želji).",
      "Zagrevati na tihoj vatri bez mešanja dok se pena ne podigne.",
      "Skloniti, pa ponoviti 1-2 puta za bogatiju penu.",
      "Sipati pažljivo u šolju i ostaviti talog da se slegne."
    ],
    prepTime: "2 minuta",
    cookTime: "3-5 minuta",
    servings: 1
  },

  "Börek": {
    name: "Börek",
    description: "Pita od tankih kora punjena sirom.",
    ingredients: [
      "500g tankih kora za pitu",
      "500g sira (feta ili sveži kravlji)",
      "2 jaja",
      "100ml kiselog mleka (ili jogurta)",
      "100ml ulja",
      "So po ukusu",
      "Susam za posipanje (opciono)"
    ],
    instructions: [
      "Rernu zagrejati na 180°C.",
      "Pomešati sir, jaja, kiselo mleko i deo ulja; posoliti.",
      "Nauljiti tepsiju, slagati 2-3 kore premazane uljem, pa deo fila; ponoviti slojeve.",
      "Završiti korama premazanim uljem, iseći i posuti susamom.",
      "Peći 30-40 minuta do zlatne boje."
    ],
    prepTime: "30 minuta",
    cookTime: "30-40 minuta",
    servings: 8
  },

  "Köfte": {
    name: "Köfte",
    description: "Sočne ćuftice sa blagim začinima.",
    ingredients: [
      "500g mlevenog junećeg mesa",
      "1 manja glavica crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 jaje",
      "50g prezli",
      "1 kašičica mlevene paprike",
      "1/2 kašičice kima",
      "1/4 kašičice bibera",
      "1 kašičica soli",
      "2 kašike svežeg peršuna, sitno iseckanog",
      "2 kašike maslinovog ulja"
    ],
    instructions: [
      "Sve sastojke dobro umesiti.",
      "Oblikovati male ovalne ćufte.",
      "Pržiti u ulju 20-25 minuta uz povremeno okretanje.",
      "Poslužiti uz prilog po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Iskender": {
    name: "Iskender",
    description: "Narezano meso preko komadića pide, sos od paradajza i jogurt.",
    ingredients: [
      "600g jagnjetine, tanko narezane",
      "2 kašike maslinovog ulja",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 konzerva (400g) seckanog paradajza",
      "1 kašika paradajz pirea",
      "1/2 kašičice origana",
      "1/4 kašičice čilija u prahu (opciono)",
      "So i biber",
      "4 pide, isečene na komade",
      "200g putera",
      "250ml jogurta",
      "Sveži peršun, iseckan"
    ],
    instructions: [
      "Pripremiti sos: izdinstati luk, dodati beli luk, paradajz i začine; krčkati 20 min.",
      "U drugom tiganju otopiti puter.",
      "Na trećem tiganju ispeći jagnjetinu do rumene boje.",
      "Na tanjire rasporediti pide, preliti puterom, dodati meso i sos, servirati sa jogurtom i peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 4
  },

  "Simit": {
    name: "Simit",
    description: "Hrskavo pecivo posuto susamom.",
    ingredients: [
      "500g brašna",
      "300ml tople vode",
      "10g suvog kvasca",
      "1 kašičica šećera",
      "1 kašičica soli",
      "3 kašike maslinovog ulja",
      "100ml melase + 100ml vode (za premaz)",
      "200g susama"
    ],
    instructions: [
      "Aktivirati kvasac sa vodom i šećerom; zamesiti sa brašnom, solju i uljem.",
      "Ostaviti da naraste ~60 minuta.",
      "Podeliti na 6, oblikovati pletenice u prsten.",
      "Umočiti u mešavinu melase i vode, zatim u susam.",
      "Peći na 200°C oko 20 minuta do zlatne boje."
    ],
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    servings: 6
  },

  "Ayran": {
    name: "Ayran",
    description: "Osvežavajući napitak od jogurta, vode i soli.",
    ingredients: [
      "200ml jogurta",
      "100ml hladne vode",
      "Prstohvat soli"
    ],
    instructions: [
      "Umutiti jogurt sa vodom i solju do penaste teksture.",
      "Po želji dodati led; poslužiti odmah."
    ],
    prepTime: "2 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Raki": {
    name: "Raki",
    description: "Jednostavan recept za pripremu domaće rakije (informativno).",
    ingredients: [
      "5 kg zrelog voća (po izboru)",
      "100 g šećera (opciono)",
      "Voda (po potrebi)",
      "Kvasci za vino/rakiju (opciono)"
    ],
    instructions: [
      "Očistiti i usitniti voće u kašu.",
      "Fermentisati 2-4 nedelje u posudi sa vodenim zatvaračem.",
      "Destilisati prvi put (prepek), zatim drugi put; odbaciti prvenac, sačuvati srce.",
      "Po želji odležavati za bolji ukus."
    ],
    prepTime: "30 minuta",
    cookTime: "Više dana + nekoliko sati",
    servings: 10
  },

  "Turkish Breakfast": {
    name: "Turkish Breakfast",
    description: "Bogati doručak sa sirevima, maslinama, jajima, medom, džemom i svežim hlebom.",
    ingredients: [
      "Razni sirevi (feta, kačkavalj, beli sir)",
      "Masline (crne i zelene)",
      "Paradajz i krastavci",
      "Jaja",
      "Puter",
      "Med i džem",
      "Svež hleb",
      "Peršun, alevu papriku (opciono)",
      "Čaj"
    ],
    instructions: [
      "Pripremiti i aranžirati sastojke.",
      "Skuvati/pržiti jaja po želji (npr. kajgana na puteru).",
      "Poslužiti sve zajedno uz topao hleb i čaj."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 4
  },

  "Menemen": {
    name: "Menemen",
    description: "Jaja sa paradajzom, paprikom i začinima.",
    ingredients: [
      "2 kašike maslinovog ulja",
      "1 mali crni luk, sitno iseckan",
      "1 zelena paprika, sitno iseckana",
      "2 zrela paradajza, oljuštena i iseckana (ili 1 konzerva)",
      "1 čen belog luka, sitno iseckan",
      "1/2 kašičice tucane ljute paprike (pul biber)",
      "1/4 kašičice kima (opciono)",
      "So i biber",
      "4 jaja",
      "Sveži peršun, za posipanje"
    ],
    instructions: [
      "Zagrejati ulje; izdinstati luk i papriku 5 minuta.",
      "Dodati beli luk, zatim paradajz i začine; krčkati ~10 minuta.",
      "Napraviti 4 udubljenja, razbiti po jaje; poklopiti i kuvati 5-7 minuta.",
      "Posuti peršunom i poslužiti."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Cacik": {
    name: "Cacik",
    description: "Jogurt sa krastavcima, belim lukom i začinima.",
    ingredients: [
      "500g grčkog jogurta",
      "2 srednja krastavca (rendana i oceđena)",
      "2 čena belog luka",
      "2 kašike sveže mente, sitno seckane",
      "1 kašika maslinovog ulja",
      "1 kašika soka od limuna (opciono)",
      "So i biber"
    ],
    instructions: [
      "Pomešati jogurt, krastavce, beli luk i mentu.",
      "Dodati ulje i limun; začiniti solju i biberom.",
      "Ohladiti 30 minuta pre serviranja."
    ],
    prepTime: "10 minuta",
    cookTime: "0 minuta",
    servings: 4
  },

  "Patlican Salata": {
    name: "Patlican Salata",
    description: "Salata od pečenog patlidžana sa belim lukom, limunom i peršunom.",
    ingredients: [
      "2 velika patlidžana",
      "2-3 čena belog luka, sitno iseckana",
      "2 kašike limunovog soka",
      "3 kašike maslinovog ulja",
      "2 kašike seckanog peršuna",
      "So i biber",
      "1/2 kašičice aleve paprike (opciono)"
    ],
    instructions: [
      "Peći cele patlidžane na 200°C ~45 minuta do omekšanja.",
      "Ohladiti, izvaditi meso i ocediti višak tečnosti.",
      "Sitno iseckati ili izgnječiti; pomešati sa belim lukom, limunom, uljem, peršunom i začinima.",
      "Ohladiti 30 minuta i poslužiti."
    ],
    prepTime: "15 minuta",
    cookTime: "45 minuta",
    servings: 4
  },

  "Turkish Delight": {
    name: "Turkish Delight",
    description: "Tradicionalna mekana i aromatična poslastica.",
    ingredients: [
      "500g kristal šećera",
      "450ml vode (250ml + 200ml)",
      "120g kukuruznog skroba",
      "1 kašičica limunske kiseline (ili sok od pola limuna)",
      "1-2 kašičice ružine vodice (ili druga aroma)",
      "Prehrambena boja (opciono)",
      "Šećer u prahu i kukuruzni skrob za posipanje"
    ],
    instructions: [
      "U manjoj šerpi razmutiti skrob sa 250ml vode.",
      "U većoj šerpi kuvati šećer sa 200ml vode do ~115°C (soft ball).",
      "Polako uliti skrobnu smesu uz stalno mešanje; kuvati na niskoj vatri 60-90 minuta do guste smese.",
      "Pred kraj dodati limunsku kiselinu, ružinu vodicu i boju.",
      "Uliti u pleh (20x20cm) posut mešavinom šećera u prahu i skroba; poravnati i ostaviti preko noći.",
      "Iseći na kocke i uvaljati u mešavinu šećera u prahu i skroba."
    ],
    prepTime: "30 minuta",
    cookTime: "1 sat 30 minuta",
    servings: 50
  },

  "Kunefe": {
    name: "Kunefe",
    description: "Desert od tankih rezanaca testa, sira i sirupa.",
    ingredients: [
      "250g kataifi rezanaca",
      "150g neslanog sira (npr. mocarela/urda)",
      "100g rastopljenog putera",
      "1/2 šolje neslanih pistaća (za ukras)",
      "Sirup: 2 šolje šećera, 1 šolja vode, 1 kašičica limunovog soka, 1 kašičica ružine vodice (opciono)"
    ],
    instructions: [
      "Skuvati sirup (šećer+voda), krčkati 10 min, dodati limun (i ružinu vodicu); ohladiti.",
      "Kataifi iseći i izmešati sa puterom.",
      "U kalupe rasporediti polovinu kataifija, dodati sir, pa pokriti ostatkom.",
      "Peći na 180°C 25-30 minuta do zlatne boje.",
      "Vruće preliti hladnim sirupom, ukrasiti pistaćima i poslužiti."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 6
  },

  // Bowls/Činije
  "Buddha Bowl": {
    name: "Buddha Bowl",
    ingredients: [
      "300g junećeg bifteka, isečenog na kockice",
      "1 kašika maslinovog ulja",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice bibera",
      "1 šolja kuvane kinoe",
      "1 šolja brokolija, isečenog na cvetiće",
      "1 šargarepa, narendana",
      "1/2 crvenog kupusa, tanko narezanog",
      "1 avokado, isečen na kriške",
      "2 kašike semenki susama",
      "2 kašike soja sosa (sa smanjenim sadržajem natrijuma)",
      "1 kašika limunovog soka",
      "1 kašičica meda (opciono)"
    ],
    instructions: [
      "Zagrejte maslinovo ulje u velikom tiganju na srednjoj vatri.",
      "Dodajte juneće kockice i začinite belim lukom u prahu i biberom. Pržite 5-7 minuta dok ne porumene i budu pečene.",
      "Brokoli blanširajte 3-4 minuta u kipućoj vodi i ocedite.",
      "Podelite kuvanu kinou u dve činije.",
      "Rasporedite junetinu, brokoli, šargarepu, crveni kupus i avokado preko kinoe.",
      "Pomešajte soja sos, limunov sok i med (ako koristite).",
      "Prelijte činije prelivom i pospite semenkama susama."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 2
  },

  "Quinoa Bowl": {
    name: "Quinoa Bowl",
    ingredients: [
      "1 šolja kinoe",
      "2 šolje vode ili povrtnog bujona",
      "1 kašika maslinovog ulja",
      "1/2 crvenog luka, sitno iseckanog",
      "1 paprika (crvena ili žuta), iseckana",
      "1 šolja brokolija, na cvetiće",
      "1/2 šolje kukuruza šećerca",
      "1/4 šolje svežeg peršuna, iseckanog",
      "So i biber po ukusu",
      "Preliv po izboru (tahini, limun, balsamiko)"
    ],
    instructions: [
      "Isperite kinou pod hladnom vodom.",
      "Pomešajte kinou i vodu/bujon, kuvajte poklopljeno 15 minuta. Sklonite sa vatre i ostavite 5 minuta, zatim rastresite viljuškom.",
      "Zagrejte ulje, propržite luk i papriku ~5 minuta.",
      "Dodajte brokoli i kukuruz i pržite još 3-5 minuta.",
      "Rasporedite kinou u činije, dodajte povrće, pospite peršunom, začinite i prelijte dresingom."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Rice Bowl": {
    name: "Rice Bowl",
    ingredients: [
      "1/2 šolje pirinča (nekuvani)",
      "1 šolja vode",
      "1 kašika soja sosa",
      "1 kašičica susamovog ulja",
      "100g proteina po izboru (piletina, tofu, škampi)",
      "1/2 šolje brokule (cvetići)",
      "1/4 šolje šargarepe (kolutići)",
      "1/4 avokada (kriške)",
      "1 jaje",
      "Susam (opciono)",
      "Ljut sos (opciono)"
    ],
    instructions: [
      "Skuvajte pirinač 15-20 minuta dok ne upije svu vodu.",
      "Iseckani protein ispržite do gotovosti; dodajte pola soja sosa i susamovo ulje pri kraju.",
      "Brokulu i šargarepu skuvajte na pari ili kratko propržite.",
      "Ispržite jaje na oko ili pripremite po želji.",
      "Složite činiju: pirinač, protein, povrće, avokado, jaje.",
      "Prelijte preostalim soja sosom i susamovim uljem, pospite susamom i dodajte ljut sos."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 1
  },

  "Poke Bowl": {
    name: "Poke Bowl",
    ingredients: [
      "200g sveže tune (sushi kvalitet), na kockice",
      "1 šolja kuvanog pirinča (sushi pirinač)",
      "1 avokado, na kockice",
      "1/2 krastavca, na kockice",
      "1/4 crvenog luka, tanko narezan",
      "1/2 šargarepe, izrendane",
      "2 rotkvice, tanko narezane",
      "2 kašike susama",
      "2 mlada luka, tanko narezana",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašičica sriracha sosa",
      "Sok 1/2 limete",
      "Nori alge (opciono)",
      "Edamame (opciono)"
    ],
    instructions: [
      "Skuvajte pirinač i ohladite ga.",
      "Pomešajte soja sos, susamovo ulje, srirachu i sok limete; marinirajte tunu 10-15 minuta.",
      "U činije rasporedite pirinač, pa dodajte tunu i povrće.",
      "Pospite susamom i mladim lukom; dodajte nori i edamame po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 2
  },

  "Smoothie Bowl": {
    name: "Smoothie Bowl",
    ingredients: [
      "1 smrznuta banana, narezana",
      "1/2 šolje smrznutog bobičastog voća",
      "1/4 šolje bademovog mleka",
      "1 kašika putera od kikirikija ili badema (opciono)",
      "1 kašičica chia semenki (opciono)",
      "Dodaci: granola, sveže voće, kokos, orašasti plodovi, semenke, med"
    ],
    instructions: [
      "Izblendajte bananu, bobičasto voće, mleko i puter/semenke do glatke guste smese.",
      "Sipajte u činiju i dodajte željene dodatke.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Grain Bowl": {
    name: "Grain Bowl",
    ingredients: [
      "1/2 šolje kuvane kinoe (ili druge žitarice)",
      "1/4 šolje humusa",
      "1/2 krastavca, kockice",
      "1/2 paradajza, kockice",
      "1/4 crvenog luka, tanko isečen",
      "1/2 avokada, kockice",
      "50g feta sira, izmrvljen",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "So i biber",
      "Protein po izboru (piletina, tofu, leblebije) - opciono"
    ],
    instructions: [
      "Složite činiju: žitarica kao baza, preko humus.",
      "Dodajte povrće i pospite fetom.",
      "Ako koristite, dodajte protein.",
      "Prelijte maslinovim uljem i limunom, začinite."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 1
  },

  // Brunch
  "Eggs Benedict": {
    name: "Eggs Benedict",
    ingredients: [
      "2 engleska muffina, rasečena na pola",
      "4 kriške kanadske šunke ili dimljene šunke", 
      "4 velika jaja",
      "1 kašika belog sirćeta",
      "1/2 šolje putera, istopljenog",
      "3 žumanca",
      "1 kašika limunovog soka",
      "Prstohvat kajenske paprike",
      "So i biber po ukusu"
    ],
    instructions: [
      "Pripremite holandez sos: U blenderu ili ručno umutite žumanca sa limunovim sokom i prstohvatom soli.",
      "Polako, kap po kap, dodajte istopljeni puter, neprekidno muteći dok se sos ne zgusne i emulguje.",
      "Začinite solju, biberom i kajenskom paprikom po ukusu. Ostavite na toplom mestu.",
      "Pripremite jaja: U dubokom tiganju zakuvajte vodu sa belim sirćetom. Smanjite vatru na nisku.",
      "Napravite vrtlog u vodi i pažljivo ubacite jedno jaje. Ponovite sa preostala tri jaja.",
      "Kuvajte jaja 3-4 minuta za tečno žumance. Izvadite ih šupljikavom kašikom i stavite na papirni ubrus da se ocede.",
      "U međuvremenu, tostirajte engleske muffine.",
      "Na svaku polovinu muffina stavite po dve kriške šunke.",
      "Stavite poširano jaje na svaku gomilu šunke.",
      "Prelijte obilno holandez sosom.",
      "Poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Avocado Toast Brunch": {
    name: "Avocado Toast",
    ingredients: [
      "1 kriška hleba (po izboru)",
      "1/2 avokada",
      "1/4 limuna ili limete",
      "Prstohvat soli",
      "Prstohvat bibera",
      "Opciono: ljuta paprika u prahu, crveni luk, paradajz, jaje"
    ],
    instructions: [
      "Ispecite krišku hleba u tosteru ili tiganju dok ne postane zlatno smeđa i hrskava.",
      "U međuvremenu, prepolovite avokado i uklonite košticu.",
      "Izvadite meso avokada kašikom i stavite ga u malu činiju.",
      "Viljuškom izgnječite avokado dok ne dobijete željenu konzistenciju.",
      "Iscedite sok od limuna ili limete preko izgnječenog avokada.",
      "Dodajte so i biber po ukusu.",
      "Namažite izgnječeni avokado preko ispečenog hleba.",
      "Opciono: Pospite ljutu papriku u prahu, dodajte tanke kriške crvenog luka, paradajza ili prženo jaje na vrh.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "2 minuta", 
    servings: 1
  },

  "Shakshuka": {
    name: "Shakshuka",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 mali crni luk, sitno iseckan",
      "1 crvena paprika, iseckana na kockice",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica mlevenog kumina",
      "1/2 kašičice aleve paprike",
      "1/4 kašičice ljute paprike (opciono)",
      "1 konzerva (400g) seckanog paradajza",
      "1 kašika paradajz pirea",
      "1/2 kašičice šećera",
      "So i biber po ukusu",
      "4 jaja",
      "Sveži peršun ili korijander, sitno iseckan, za posipanje",
      "Feta sir, izmrvljen (opciono)"
    ],
    instructions: [
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte crni luk i papriku i pržite dok ne omekšaju, oko 5 minuta.",
      "Dodajte beli luk, kumin, alevu papriku i ljutu papriku (ako koristite) i pržite još minut, dok ne zamiriše.",
      "Dodajte seckani paradajz, paradajz pire i šećer. Promešajte i začinite solju i biberom.",
      "Smanjite vatru i ostavite da se sos krčka oko 10 minuta, dok se malo ne zgusne. Povremeno promešajte.",
      "Kašikom napravite 4 udubljenja u sosu. Razbijte po jedno jaje u svako udubljenje.",
      "Poklopite tiganj i kuvajte jaja dok belanca ne budu stegnuta, a žumanca i dalje tečna, oko 5-7 minuta.",
      "Posipajte svežim peršunom ili korijanderom i izmrvljenim feta sirom (ako koristite).",
      "Poslužite odmah sa svežim hlebom."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta", 
    servings: 2
  },

  "Pancakes Brunch": {
    name: "Pancakes",
    ingredients: [
      "1 šolja brašna",
      "2 kašike šećera",
      "2 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "1 jaje",
      "1 šolja mleka",
      "2 kašike rastopljenog putera ili ulja",
      "Ulje ili puter za prženje"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, šećer, prašak za pecivo i so.",
      "U drugoj posudi umutiti jaje, mleko i rastopljeni puter ili ulje.",
      "Suve sastojke dodati u vlažne sastojke i mešati dok se smesa ne sjedini. Nemojte preterano mešati; malo grudvica je u redu.",
      "Zagrejte tiganj na srednjoj vatri i premažite ga sa malo ulja ili putera.",
      "Sipajte oko 1/4 šolje testa za svaku palačinku u zagrejani tiganj.",
      "Pecite 2-3 minuta sa svake strane, ili dok ne postanu zlatno smeđe.",
      "Poslužite toplo sa omiljenim prelivima."
    ],
    prepTime: "5 minuta",
    cookTime: "20 minuta",
    servings: 10
  },

  "French Toast Brunch": {
    name: "French Toast",
    ingredients: [
      "4 kriške hleba (bajate, deblje isečene)",
      "2 velika jaja",
      "120 ml mleka",
      "1 kašičica ekstrakta vanile",
      "1/2 kašičice cimeta u prahu",
      "1 prstohvat soli",
      "2 kašike putera",
      "Javorov sirup, voće, prah šećer (za serviranje)"
    ],
    instructions: [
      "U široj posudi umutite jaja, mleko, ekstrakt vanile, cimet i so dok se dobro ne sjedine.",
      "Umočite svaku krišku hleba u smesu od jaja, osiguravajući da je hleb sa obe strane natopljen. Ne preterujte, hleb ne sme biti previše natopljen.",
      "U tiganju, na srednjoj vatri, rastopite puter.",
      "Stavite natopljene kriške hleba u tiganj i pecite ih oko 2-3 minuta sa svake strane, ili dok ne postanu zlatno smeđe boje.",
      "Izvadite French Toast iz tiganja i poslužite toplo sa javorovim sirupom, voćem ili prah šećerom."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Granola Bowl": {
    name: "Granola Bowl",
    ingredients: [
      "1/2 šolje grčkog jogurta (ili drugog jogurta po izboru)",
      "1/4 šolje granole (domaća ili kupovna)", 
      "1/2 šolje svežeg voća (npr. jagode, borovnice, banane, maline)",
      "1 kašika meda ili javorovog sirupa (opciono)",
      "1 kašičica semenki chia ili lanenog semena (opciono)",
      "Malo rendane kokosove pahuljice (opciono)"
    ],
    instructions: [
      "Sipajte jogurt u činiju.",
      "Pospite granolu preko jogurta.",
      "Dodajte sveže voće preko granole.",
      "Po želji, prelijte medom ili javorovim sirupom.",
      "Pospite semenkama chia ili lanenog semena i rendanom kokosovom pahuljicom (opciono).",
      "Odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Smoked Salmon Bagel": {
    name: "Smoked Salmon Bagel",
    ingredients: [
      "1 bagel (po izboru)",
      "2 kašike krem sira",
      "50g dimljenog lososa",
      "1/4 crvenog luka, tanko isečenog",
      "1 kašika kapara",
      "Malo svežeg kopra, seckanog",
      "Sveže mleveni crni biber (po ukusu)",
      "Limunov sok (po ukusu, opciono)"
    ],
    instructions: [
      "Presecite bagel na pola horizontalno.",
      "Ako želite, prepecite obe polovine bagela u tosteru ili na tiganju dok ne postanu blago zlatne.",
      "Ravnomerno namažite krem sir preko obe polovine bagela.",
      "Na donju polovinu bagela složite dimljeni losos.",
      "Pospite iseckanim crvenim lukom i kaparima preko lososa.",
      "Pospite seckanim koprom i sveže mlevenim crnim biberom.",
      "Ako želite, nakapajte nekoliko kapi limunovog soka.",
      "Poklopite sa gornjom polovinom bagela i odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "2 minuta",
    servings: 1
  },

  "Breakfast Burrito": {
    name: "Breakfast Burrito",
    ingredients: [
      "2 velike tortilje",
      "4 jaja",
      "1/4 šolje mleka ili pavlake za kuvanje",
      "1 kašika putera ili ulja",
      "1/2 šolje narendanog čedar sira",
      "1/4 šolje seckane paprike (po izboru crvena, zelena, žuta)",
      "1/4 šolje seckanog luka",
      "1/4 šolje seckane slanine ili kobasice (kuvana)",
      "So i biber po ukusu",
      "Ljuti sos (opciono)",
      "Kisela pavlaka (opciono)",
      "Avokado (opciono)"
    ],
    instructions: [
      "Umutiti jaja sa mlekom ili pavlakom, solju i biberom.",
      "U tiganju otopiti puter ili zagrejati ulje na srednjoj vatri.",
      "Dodati seckanu papriku i luk i dinstati dok ne omekšaju, oko 3-5 minuta.",
      "Dodati seckanu slaninu ili kobasicu i kratko propržiti.",
      "Smanjiti vatru i sipati umućena jaja u tiganj.",
      "Mešati dok se jaja ne ispeku, ali da ostanu malo vlažna.",
      "Zagrejte tortilje u tiganju ili mikrotalasnoj pećnici.",
      "Na svaku tortilju rasporediti polovinu smese od jaja.",
      "Posuti narendanim sirom.",
      "Preklopiti stranice tortilje prema unutra, a zatim je čvrsto urolati.",
      "Vratiti burrito u tiganj i peći sa svake strane oko 1-2 minuta, dok ne porumeni.",
      "Iseći na pola i poslužiti."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Quiche": {
    name: "Quiche",
    ingredients: [
      "250g brašna",
      "125g hladnog putera, iseckanog na kockice",
      "50ml hladne vode",
      "Prstohvat soli",
      "200g slanine, iseckane",
      "1 luk, sitno iseckan",
      "4 jaja",
      "200ml mleka",
      "100ml pavlake za kuvanje",
      "150g rendanog sira (npr. gauda, ementaler)",
      "So",
      "Biber",
      "Muskatni oraščić (prstohvat)"
    ],
    instructions: [
      "Priprema testa: U velikoj posudi pomešajte brašno i so. Dodajte hladan puter i utrljajte ga u brašno prstima dok ne dobijete mrvičastu smesu.",
      "Dodajte hladnu vodu, malo po malo, i mešajte dok se testo ne sjedini. Ne premesite testo.",
      "Formirajte disk od testa, umotajte ga u plastičnu foliju i stavite u frižider na najmanje 30 minuta.",
      "Priprema fila: Dok se testo hladi, u tiganju propržite slaninu dok ne postane hrskava. Izvadite slaninu iz tiganja i ostavite je sa strane.",
      "U istoj masnoći propržite luk dok ne omekša.",
      "U velikoj posudi umutite jaja, mleko i pavlaku. Dodajte rendani sir, so, biber i muskatni oraščić. Dobro promešajte.",
      "Razvaljajte testo na pobrašnjenoj površini i stavite ga u kalup za pitu prečnika 23-25 cm. Izbockajte dno testa viljuškom.",
      "Preko testa rasporedite proprženu slaninu i luk.",
      "Prelijte smesom od jaja i sira.",
      "Pecite u prethodno zagrejanoj rerni na 180°C (350°F) 45-55 minuta, ili dok fil ne postane čvrst i zlatno smeđe boje.",
      "Ostavite quiche da se malo ohladi pre nego što ga isečete i poslužite."
    ],
    prepTime: "30 minuta",
    cookTime: "55 minuta",
    servings: 8
  },

  "Frittata": {
    name: "Frittata",
    ingredients: [
      "6 velikih jaja",
      "1/4 šolje mleka ili pavlake za kuvanje",
      "1/4 šolje rendanog parmezana",
      "1/2 šolje seckanog luka",
      "1 šolja seckane paprike (različite boje)",
      "1 šolja seckanih šampinjona",
      "1/2 šolje seckanog spanaća",
      "2 čena belog luka, sitno iseckana",
      "2 kašike maslinovog ulja",
      "So i biber po ukusu",
      "Opciono: seckana šunka ili slanina"
    ],
    instructions: [
      "Zagrejte rernu na 180°C.",
      "U velikoj posudi umutite jaja, mleko ili pavlaku, parmezan, so i biber. Dobro sjedinite.",
      "U tiganju koji može da se koristi u rerni (prečnika oko 25 cm), zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte luk i papriku, i pržite dok ne omekšaju, oko 5 minuta.",
      "Dodajte šampinjone i beli luk, i nastavite da pržite još 3-5 minuta, dok šampinjoni ne puste vodu i omekšaju.",
      "Dodajte spanać i pržite dok ne uvene, oko 1-2 minuta.",
      "Ako koristite šunku ili slaninu, dodajte je u tiganj i kratko propržite.",
      "Smanjite vatru na nisku temperaturu.",
      "Prelijte povrće i meso smesom od jaja. Ravnomerno rasporedite sastojke.",
      "Kuvajte na niskoj vatri oko 5 minuta, dok se ivice ne stegnu, ali sredina ostane malo tečna.",
      "Stavite tiganj u zagrejanu rernu i pecite 15-20 minuta, ili dok frittata ne dobije zlatno braon boju i ne stegne se u potpunosti.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre nego što je isečete i poslužite."
    ],
    prepTime: "15 minuta", 
    cookTime: "25 minuta",
    servings: 6
  },

  "Chia Pudding Brunch": {
    name: "Chia Pudding Brunch",
    ingredients: [
      "3 kašike chia semenki",
      "1 šolja mleka (kravljeg, bademovog, kokosovog, itd.)",
      "1 kašika meda, javorovog sirupa ili drugog zaslađivača (po ukusu)",
      "1/2 kašičice ekstrakta vanile (opciono)",
      "Sveže voće, orašasti plodovi, kokosove pahuljice (za ukrašavanje)"
    ],
    instructions: [
      "U činiji pomešajte chia semenke, mleko, zaslađivač i ekstrakt vanile (ako koristite).",
      "Dobro promešajte da se svi sastojci sjedine.",
      "Ostavite da odstoji 5 minuta, a zatim ponovo promešajte da se razbiju sve grudvice chia semenki.",
      "Pokrijte činiju i stavite u frižider najmanje 2 sata, ili najbolje preko noći.",
      "Pre serviranja promešajte chia pudding. Ako je previše gust, dodajte još malo mleka da biste postigli željenu konzistenciju.",
      "Prebacite u činiju za serviranje i ukrasite svežim voćem, orašastim plodovima ili kokosovim pahuljicama.",
      "Poslužite hladno."
    ],
    prepTime: "5 minuta",
    cookTime: "2 sata (za hlađenje)",
    servings: 1
  },

  "Acai Bowl": {
    name: "Acai Bowl",
    ingredients: [
      "100g zamrznutog acai pirea (bez dodatnog šećera)",
      "1/2 smrznute banane",
      "1/4 šolje zamrznutih borovnica",
      "1/4 šolje bademovog mleka (ili drugog mleka po izboru)",
      "1 kašika putera od kikirikija (ili drugog orašastog putera)",
      "1/4 šolje granola",
      "1/4 iseckane sveže jagode",
      "1/4 iseckane sveže banane",
      "1 kašika kokosovog brašna",
      "1 kašičica chia semenki",
      "Malo meda ili javorovog sirupa (opciono)"
    ],
    instructions: [
      "U blenderu kombinujte zamrznuti acai pire, polovinu smrznute banane, smrznute borovnice, bademovo mleko i puter od kikirikija.",
      "Blendajte dok ne dobijete glatku i gustu smesu, po potrebi dodajući još malo bademovog mleka. Važno je da smesa bude gusta, poput sladoleda.",
      "Smesu prebacite u činiju.",
      "Poređajte preliv preko acai bowl-a: granola, jagode, banana, kokosovo brašno, chia semenke i med (ako koristite).",
      "Odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Breakfast Sandwich": {
    name: "Breakfast Sandwich",
    ingredients: [
      "2 parceta hleba",
      "1 jaje",
      "1 kriska sira (cheddar, gauda, ili po izboru)",
      "1 kriska sunke ili slanine",
      "1 kasicica putera ili ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "U tiganju, na srednjoj vatri, otopiti puter ili ulje.",
      "Umutiti jaje u ciniji sa malo soli i bibera.",
      "Sipati jaje u tiganj i prziti dok se ne ispece. Mozete ga izmesati za kajganu ili ostaviti celo.",
      "Ako koristite slaninu, isprzite je u tiganju dok ne postane hrskava.",
      "Tostirajte hleb, ako zelite.",
      "Stavite krisku sira na jedno parce hleba.",
      "Preko sira stavite peceno jaje.",
      "Dodajte sunku ili slaninu preko jajeta.",
      "Poklopite drugim parčetom hleba.",
      "Secite sendvic na pola i posluzite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "5 minuta",
    servings: 1
  },

  "Hash Browns Brunch": {
    name: "Hash Browns Brunch",
    ingredients: [
      "4 velika krompira (oko 700g), oljuštena",
      "2 kašike biljnog ulja",
      "1/2 srednje glavice crnog luka, sitno iseckanog (opciono)",
      "So po ukusu",
      "Biber po ukusu"
    ],
    instructions: [
      "Krompir izrendajte na krupno rende.",
      "Izrendani krompir stavite u čistu krpu ili gazu i iscedite višak tečnosti. Ovo je ključno za hrskavost.",
      "U velikom tiganju zagrejte ulje na srednjoj vatri.",
      "Dodajte seckani luk (ako koristite) i pržite dok ne postane staklast, oko 3-4 minuta.",
      "Dodajte isceđeni krompir u tiganj. Ravnomerno ga rasporedite.",
      "Začinite solju i biberom.",
      "Pecite oko 10 minuta sa jedne strane, dok ne postane zlatno braon i hrskavo.",
      "Pažljivo okrenite hash browns i pecite još 5-10 minuta sa druge strane, dok ne postane zlatno braon i hrskavo.",
      "Izvadite hash browns iz tiganja i stavite ih na papirni ubrus da se ocede od viška ulja.",
      "Poslužite odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Waffles Brunch": {
    name: "Waffles",
    ingredients: [
      "2 šolje brašna",
      "4 kašičice praška za pecivo",
      "1/2 kašičice soli",
      "2 kašike šećera",
      "2 jaja",
      "1 3/4 šolje mleka",
      "1/2 šolje otopljenog putera",
      "1 kašičica ekstrakta vanile"
    ],
    instructions: [
      "U velikoj posudi, pomešati brašno, prašak za pecivo, so i šećer.",
      "U drugoj posudi, umutiti jaja, mleko, otopljeni puter i ekstrakt vanile.",
      "Sipati mokre sastojke u suve sastojke i mešati dok se ne sjedini. Ne preterivati sa mešanjem.",
      "Zagrejte aparat za waffles.",
      "Sipajte smesu na zagrejani aparat za waffles i pecite prema uputstvima proizvođača, dok ne postanu zlatno smeđi.",
      "Poslužite odmah sa vašim omiljenim dodacima."
    ],
    prepTime: "10 minuta", 
    cookTime: "20 minuta",
    servings: 8
  },

  "Croque Monsieur": {
    name: "Croque Monsieur",
    ingredients: [
      "2 kriške belog hleba",
      "2 kašike putera, omekšalog",
      "2 kriške šunke",
      "50g Gruyère sira, narendanog",
      "1 kašika brašna",
      "125ml mleka",
      "prstohvat muškatnog oraščića",
      "so i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Namažite obe kriške hleba puterom.",
      "Na jednu krišku hleba stavite šunku, a zatim pospite polovinom narendanog Gruyère sira.",
      "Preklopite drugom kriškom hleba, puterom nagore.",
      "U maloj šerpi, otopite 1 kašiku putera na srednjoj vatri.",
      "Dodajte brašno i mešajte dok se ne formira glatka pasta (roux).",
      "Postepeno dodajte mleko, neprestano mešajući, dok se sos ne zgusne.",
      "Sklonite sa vatre i umešajte muškatni oraščić, so i biber.",
      "Prelijte bešamel sos preko sendviča.",
      "Pospite preostalim Gruyère sirom preko bešamela.",
      "Pecite u rerni 10-15 minuta, ili dok sir ne postane zlatno-braon i mehurast.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre serviranja."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  "Breakfast Pizza": {
    name: "Breakfast Pizza",
    ingredients: [
      "2 velike tortilje (25-30 cm prečnika)",
      "4 jaja",
      "2 kašike mleka",
      "So i biber po ukusu",
      "50g rendanog čedar sira",
      "50g seckane slanine (ili šunke)",
      "1/4 crvene paprike, iseckane",
      "1/4 crnog luka, iseckanog",
      "1 zeleni luk, iseckan (za dekoraciju)",
      "1 kašika maslinovog ulja"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U činiji umutite jaja sa mlekom, solju i biberom.",
      "U tiganju, na srednjoj vatri, zagrejte maslinovo ulje. Sipajte smesu sa jajima i mešajte dok se jaja ne skuvaju, ali ostanu mekana i vlažna.",
      "Stavite tortilje na pleh obložen papirom za pečenje.",
      "Ravnomerno rasporedite kajganu preko tortilja.",
      "Posipajte rendanim čedar sirom, seckanom slaninom (ili šunkom), crvenom paprikom i crnim lukom.",
      "Pecite u zagrejanoj rerni 10-15 minuta, ili dok tortilja ne postane hrskava, a sir se istopi i blago porumeni.",
      "Izvadite iz rerne i pospite seckanim zelenim lukom pre serviranja.",
      "Isecite na komade i poslužite toplo."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Overnight Oats": {
    name: "Overnight Oats",
    ingredients: [
      "1/2 šolje ovsenih pahuljica (instant ili valjane)",
      "1 šolja mleka (kravlje, bademovo, sojino, itd.)",
      "1 kašika chia semenki (opciono)",
      "1 kašika javorovog sirupa ili meda (ili drugi zaslađivač po ukusu)",
      "1/4 kašičice ekstrakta vanile (opciono)",
      "Voće po izboru (sveže ili smrznuto), za serviranje",
      "Orašasti plodovi ili semenke, za serviranje (opciono)"
    ],
    instructions: [
      "U tegli ili posudi sa poklopcem pomešajte ovsene pahuljice, mleko, chia semenke (ako koristite), javorov sirup ili med i ekstrakt vanile (ako koristite).",
      "Dobro promešajte da se svi sastojci sjedine.",
      "Zatvorite teglu ili posudu i stavite u frižider preko noći (ili najmanje 4 sata).",
      "Ujutru izvadite iz frižidera. Ako je kaša previše gusta, dodajte još malo mleka da biste dobili željenu konzistenciju.",
      "Pre serviranja, dodajte voće, orašaste plodove ili semenke po izboru."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta (plus hlađenje preko noći)",
    servings: 1
  },

  "Smoothie Bowl Brunch": {
    name: "Smoothie Bowl",
    ingredients: [
      "1 smrznuta banana, narezana",
      "1/2 šolje smrznutog bobičastog voća (jagode, borovnice, maline)",
      "1/4 šolje bademovog mleka (ili bilo kojeg drugog mleka)",
      "1 kašika putera od kikirikija ili badema (opciono)",
      "1 kašičica chia semenki (opciono)",
      "Dodaci po želji: granola, sveže voće, kokosove pahuljice, orašasti plodovi, semenke, med ili javorov sirup"
    ],
    instructions: [
      "U blender stavite smrznutu bananu, smrznuto bobičasto voće, bademovo mleko, puter od kikirikija (ako koristite) i chia semenke (ako koristite).",
      "Blendajte dok ne dobijete glatku, gustu smesu. Možda ćete morati da zaustavite blender i ostružete stranice nekoliko puta.",
      "Dodajte još malo tečnosti ako je potrebno da biste postigli željenu konzistenciju.",
      "Sipajte smesu u činiju.",
      "Dodajte željene dodatke preko smoothie bowla.",
      "Odmah poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Huevos Rancheros": {
    name: "Huevos Rancheros",
    ingredients: [
      "4 velika jaja",
      "1 kašika maslinovog ulja",
      "1/2 crnog luka, sitno iseckanog",
      "1 čen belog luka, sitno iseckanog",
      "400g seckanog paradajza iz konzerve",
      "1 mala ljuta papričica (chili), sitno iseckana (opciono)",
      "1/2 kašičice kima u prahu",
      "1/4 kašičice čilija u prahu",
      "So i biber po ukusu",
      "4 tortilje",
      "Avokado, isečen (za serviranje)",
      "Kisela pavlaka (za serviranje)",
      "Sveži korijander, iseckan (za serviranje)",
      "Sir, izrendan (za serviranje)"
    ],
    instructions: [
      "Zagrejte maslinovo ulje u tiganju na srednjoj vatri.",
      "Dodajte crni luk i pržite dok ne omekša, oko 5 minuta.",
      "Dodajte beli luk i ljutu papričicu (ako koristite) i pržite još 1 minut.",
      "Dodajte seckani paradajz, kim, čili u prahu, so i biber. Pustite da provri, zatim smanjite vatru i krčkajte 10 minuta, povremeno mešajući.",
      "U međuvremenu, zagrejte tortilje u suvom tiganju ili mikrotalasnoj pećnici.",
      "Napravite 4 udubljenja u sosu od paradajza. Razbijte po jedno jaje u svako udubljenje.",
      "Poklopite tiganj i kuvajte jaja dok ne budu gotova po vašoj želji (oko 3-5 minuta za rovita jaja).",
      "Poslužite jaja na zagrejanim tortiljama.",
      "Prelijte avokadom, kiselom pavlakom, korijanderom i sirom."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Veggie Bowl": {
    name: "Veggie Bowl",
    ingredients: [
      "1 šolja brokolija, iseckana",
      "1/2 šolje karfiola, iseckana",
      "1/2 šolje šargarepe, iseckana",
      "1/2 crvene paprike, iseckana",
      "1/4 crnog luka, iseckan",
      "1 čen belog luka, sitno iseckan",
      "1 kašika maslinovog ulja",
      "1/4 šolje kinoe",
      "1/2 šolje vode ili povrtnog bujona",
      "So i biber",
      "1 kašika limunovog soka",
      "1 kašika susama (opciono)",
      "Avokado (opciono)"
    ],
    instructions: [
      "Skuvajte kinou (15 minuta), ostavite da odstoji i rastresite viljuškom.",
      "Na ulju propržite luk i beli luk 3-5 minuta.",
      "Dodajte brokoli, karfiol i šargarepu; pržite 10-12 minuta.",
      "Dodajte papriku i pržite još 3-5 minuta. Začinite, dodajte limun.",
      "Složite činiju: kinoa, povrće; pospite susamom i dodajte avokado."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 1
  },

  "Mexican Bowl": {
    name: "Mexican Bowl",
    ingredients: [
      "1 šolja kuvanog pirinča",
      "1 konzerva crnog pasulja, oceđen",
      "1 avokado, kockice",
      "1/2 šolje kukuruza",
      "1/4 crvenog luka, sitno iseckan",
      "1 paradajz, kockice",
      "1 zelena paprika, kockice",
      "100g mlevenog mesa (po izboru)",
      "1 kašika maslinovog ulja",
      "Začin za takos",
      "Sok od 1 limete",
      "Korijander (opciono)",
      "Kisela pavlaka ili grčki jogurt (opciono)",
      "Ljuti sos (opciono)"
    ],
    instructions: [
      "Ispržite mleveno meso na ulju do braon boje, dodajte začin za takos i kratko prodinstajte.",
      "Ako koristite zamrznuti kukuruz, skuvajte/ubacite ga pred kraj.",
      "U činije podelite pirinač pa dodajte pasulj, meso, kukuruz, luk, paradajz i papriku.",
      "Dodajte avokado, sok limete, korijander i priloge po želji."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Mediterranean Bowl": {
    name: "Mediterranean Bowl",
    ingredients: [
      "1 šalica kvinoje",
      "2 šalice vode",
      "1/2 čajne žličice soli",
      "1 krastavac, kockice",
      "1 paprika (crvena ili žuta), kockice",
      "1/2 crvenog luka, tanko narezan",
      "1 šalica cherry rajčica, prepolovljenih",
      "1/2 šalica maslina, prepolovljenih",
      "1/4 šalica feta sira, izmrvljenog",
      "1/4 šalica svježeg peršina, nasjeckanog"
    ],
    instructions: [
      "Isperite kvinoju i skuvajte je 15 minuta u slanoj vodi, ostavite 5 minuta i rastresite.",
      "Pomešajte povrće u velikoj zdeli.",
      "Umutite dresing od maslinovog ulja, limuna, belog luka i origana; posolite i pobiberite.",
      "Dodajte kinou u povrće, prelijte dresingom i podelite u činije.",
      "Pospite fetom i peršinom."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  // Asian-inspired
  "Thai Bowl": {
    name: "Thai Bowl",
    ingredients: [
      "150g pirinčanih nudli",
      "2 kašike susamovog ulja",
      "200g pilećeg filea, kockice",
      "1 crvena paprika, trake",
      "1 šargarepa, štapići",
      "1 glavica brokolija, cvetovi",
      "50g edamame, oljušten",
      "2 mlada luka, iseckana",
      "Sveži korijander"
    ],
    instructions: [
      "Skuvajte nudle i ocedite.",
      "Na susamovom ulju ispržite piletinu 5-7 minuta.",
      "Dodajte papriku, šargarepu i brokoli, pržite ~5 minuta, potom dodajte edamame.",
      "Umutite sos (soja, pirinčano sirće, med/javor, đumbir, beli luk, susamovo ulje, čili).",
      "Dodajte sos i nudle, kratko sjedinite. Podelite u činije, pospite mladim lukom i korijanderom."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Korean Bowl": {
    name: "Korean Bowl",
    ingredients: [
      "200g junećeg mlevenog mesa",
      "1 kašika susamovog ulja",
      "2 čena belog luka, sitno iseckana",
      "Mali komad đumbira, izrendan",
      "2 kašike soja sosa",
      "1 kašika gochujang paste",
      "1 kašičica smeđeg šećera",
      "1/2 kašičice susama",
      "1 šolja kuvanog pirinča",
      "1 šargarepa, narendana",
      "1 krastavac, tanke kriške",
      "1/2 avokada, iseckan",
      "2 mlada luka, iseckana",
      "Kimchi (opciono)"
    ],
    instructions: [
      "Zagrejte susamovo ulje, ispržite mleveno meso do rumene boje.",
      "Dodajte beli luk i đumbir 1 minut.",
      "Umešajte soja sos, gochujang i šećer i krčkajte 5-7 minuta; dodajte susam.",
      "Služite preko pirinča sa povrćem, kimchijem i mladim lukom."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Breakfast Bowl": {
    name: "Breakfast Bowl",
    ingredients: [
      "1/2 šolje kuvane kinoe",
      "1/4 avokada, iseckan",
      "2 jajeta",
      "1 kašika maslinovog ulja",
      "1/4 šolje čeri paradajza, prepolovljen",
      "2 kašike feta sira, izmrvljen",
      "So i biber",
      "Mlevena paprika (opciono)"
    ],
    instructions: [
      "Zagrejte ulje i ispržite jaja po želji.",
      "U činiju stavite kinou, preko avokado i paradajz.",
      "Dodajte jaja, pospite fetom i začinite."
    ],
    prepTime: "5 minuta",
    cookTime: "5 minuta",
    servings: 1
  },

  "Salad Bowl": {
    name: "Salad Bowl",
    ingredients: [
      "100g mešane zelene salate",
      "1/2 krastavca, kolutići",
      "1 paradajz, kockice",
      "1/2 crvene paprike, trake",
      "1/4 crvenog luka, tanko isečen",
      "50g feta sira, izmrvljen",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "So i biber"
    ],
    instructions: [
      "Pomešajte sve sastojke salate u velikoj činiji.",
      "Umutite maslinovo ulje, limun, so i biber i prelijte.",
      "Lagano promešajte i pospite fetom. Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 2
  },

  "Noodle Bowl": {
    name: "Noodle Bowl",
    ingredients: [
      "200g rezanaca (po izboru)",
      "1 šargarepa, tanke štapiće",
      "1 crvena paprika, trake",
      "1/2 glavice brokolija, cvetići",
      "2 mlada luka, kolutići",
      "1 čen belog luka, sitno",
      "1 cm đumbira, izrendan",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašika meda ili javorovog sirupa",
      "1/2 kašičice čili pahuljica (opciono)",
      "2 kašike susama",
      "Biljno ulje"
    ],
    instructions: [
      "Skuvajte rezance i ocedite.",
      "Na malo ulja pržite šargarepu, papriku i brokoli 5-7 minuta.",
      "Dodajte beli luk i đumbir 1 minut.",
      "Dodajte rezance, soja sos, susamovo ulje, med/javor i čili, promešajte i kratko zagrejte.",
      "Podelite u činije i pospite mladim lukom i susamom."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Curry Bowl": {
    name: "Curry Bowl",
    ingredients: [
      "1 kašika kokosovog ulja",
      "1 mali crni luk, sitno",
      "2 čena belog luka, sitno",
      "1 kašika rendanog đumbira",
      "1 crvena paprika, trake",
      "1 šargarepa, kolutovi",
      "1 konzerva leblebija, oceđena",
      "1 konzerva seckanog paradajza",
      "2 kašike crvenog curry paste",
      "400 ml kokosovog mleka",
      "100 g baby spanaća",
      "Sok 1/2 limete",
      "So i biber",
      "150 g kuvanog integralnog pirinča ili kinoe",
      "Sveži korijander (opciono)"
    ],
    instructions: [
      "Zagrejte kokosovo ulje; dinstajte luk 5 minuta.",
      "Dodajte beli luk i đumbir 1 minut.",
      "Dodajte papriku i šargarepu 5 minuta.",
      "Umešajte leblebije, paradajz i curry pastu, zatim dolijte kokosovo mleko i krčkajte 15 minuta.",
      "Dodajte spanać da uvene, umešajte sok limete, začinite i poslužite preko žitarice; ukrasite korijanderom."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 2
  },

  "Burrito Bowl": {
    name: "Burrito Bowl",
    ingredients: [
      "1 šolja pirinča",
      "2 šolje vode",
      "1 kašičica soli",
      "1 kašika maslinovog ulja",
      "1 crveni luk, sitno",
      "1 crvena paprika, sitno",
      "1 žuta paprika, sitno",
      "1 konzerva crnog pasulja, oceđen",
      "1 konzerva kukuruza, oceđen",
      "500g mlevenog mesa (po izboru)",
      "1 kesica začina za takos/buritos",
      "1 avokado, kockice",
      "150g čeri paradajza, polovine",
      "Sok 1 limete",
      "Korijander (opciono)",
      "Kisela pavlaka ili grčki jogurt (opciono)",
      "Ljuti sos (opciono)"
    ],
    instructions: [
      "Skuvajte pirinač (18-20 minuta), ostavite 5 minuta i rastresite.",
      "Na ulju propržite luk i paprike 5-7 minuta.",
      "Dodajte mleveno meso i pržite do braon boje; ocedite višak masnoće.",
      "Dodajte začin, pasulj i kukuruz i kuvajte još 5 minuta.",
      "Složite u činije sa pirinčem kao bazom i dodacima; pokapajte limetom."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },
  "Palačinke sa sirom i spanaćem": {
    name: "Palačinke sa sirom i spanaćem",
    ingredients: [
      "2 jaja",
      "250ml mleka",
      "125g brašna",
      "Prstohvat soli",
      "1 kašika ulja (za pečenje)",
      "450g smrznutog spanaća (ili 300g svežeg)",
      "250g krem sira", 
      "100g feta sira (izdrobljenog)",
      "1 čen belog luka (sitno iseckan)",
      "So i biber po ukusu",
      "Malo muskatnog oraščića (po želji)",
      "50g rendanog kačkavalja (za posipanje)"
    ],
    instructions: [
      "U posudi umutiti jaja, mleko i so. Postepeno dodavati brašno i mešati dok se ne dobije glatka smesa bez grudvica.",
      "Zagrejte tiganj za palačinke na srednjoj vatri. Dodajte malo ulja.",
      "Sipajte kutlačom smesu u tiganj i pecite palačinke oko 2-3 minuta sa svake strane, dok ne porumene. Ponovite postupak sa ostatkom smese. Ostavite palačinke sa strane.",
      "Ako koristite smrznuti spanać, odmrznite ga i dobro iscedite višak vode. Sveži spanać operite, kratko blanširajte (oko 2 minuta), pa takođe iscedite.",
      "U činiji pomešajte krem sir, feta sir, beli luk, so, biber i muskatni oraščić (ako ga koristite).",
      "Dodajte isceđeni spanać u smesu sa sirom i dobro promešajte.",
      "Uzmite jednu palačinku i stavite 2-3 kašike fila na sredinu. Preklopite palačinku na pola, pa ponovo na pola, formirajući trougao.",
      "Poređajte punjene palačinke u vatrostalnu posudu ili pleh koji ste prethodno blago nauljili.",
      "Pospite palačinke rendanim kačkavaljem.",
      "Pecite u prethodno zagrejanoj rerni na 180°C oko 15-20 minuta, dok se kačkavalj ne otopi i porumeni.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre serviranja."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta", 
    servings: 6
  },
  "Suzette palačinke": {
    name: "Suzette palačinke", 
    ingredients: [
      "125g brašna",
      "250ml mleka",
      "2 jajeta",
      "25g rastopljenog putera",
      "Prstohvat soli",
      "1 kašika šećera",
      "Korica 1 pomorandže",
      "100g šećera",
      "60g putera", 
      "Sok 2 pomorandže",
      "Korica 1 pomorandže",
      "50ml Grand Marnier ili Cointreau (liker od pomorandže)",
      "Malo putera za tiganj"
    ],
    instructions: [
      "U velikoj činiji pomešati brašno i so.",
      "U drugoj činiji umutiti mleko, jaja, rastopljeni puter, šećer i koricu pomorandže.",
      "Postepeno dodavati tečne sastojke u suve, muteći dok se ne dobije glatka smesa bez grudvica. Ostaviti da odstoji 15 minuta.",
      "Zagrejte blago nauljen tiganj na srednjoj vatri.",
      "Sipajte kutlaču smese za palačinke u tiganj i ravnomerno rasporedite po dnu.",
      "Pecite 2-3 minuta sa svake strane, dok ne porumeni.",
      "Ponovite postupak sa ostatkom smese. Držite palačinke na toplom dok pripremate sos.",
      "U velikom tiganju, na srednjoj vatri, istopite šećer dok se ne karamelizuje. Pazite da ne zagori.",
      "Dodajte puter u karamelizovani šećer i mešajte dok se ne istopi i sjedini.",
      "Pažljivo ulijte sok od pomorandže i dodajte koricu. Kuvajte dok se sos malo ne zgusne, oko 5 minuta.",
      "Presavijte svaku palačinku na četvrtinu i stavite u sos.",
      "Kada su sve palačinke u sosu, zagrejte Grand Marnier ili Cointreau u maloj šerpici.",
      "Sklonite tiganj sa vatre, ulijte zagrejani liker u tiganj i pažljivo flambirajte (upalite vatru). Budite oprezni!",
      "Kada se plamen ugasi, odmah servirajte palačinke."
    ],
    prepTime: "20 minuta", 
    cookTime: "30 minuta",
    servings: 4
  },
  "Američke palačinke": {
    name: "Američke palačinke",
    ingredients: [
      "1 1/2 šolje brašna",
      "3 1/2 kašičice praška za pecivo", 
      "1 kašičica soli",
      "1 kašika šećera",
      "1 1/4 šolje mleka",
      "1 jaje",
      "3 kašike otopljenog putera (ili ulja)",
      "Ekstra puter ili ulje za podmazivanje tiganja"
    ],
    instructions: [
      "U velikoj činiji pomešajte brašno, prašak za pecivo, so i šećer.",
      "U drugoj činiji umutite mleko, jaje i otopljeni puter.",
      "Mokre sastojke sipajte u suve sastojke i mešajte dok se smesa ne sjedini. Nemojte previše mešati; malo grudvica je u redu.",
      "Zagrejte tiganj ili rešetku na srednjoj vatri i premažite ga puterom ili uljem.",
      "Sipajte ¼ šolje smese za svaku palačinku na zagrejan tiganj.",
      "Pecite dok se ne pojave mehurići na površini, a ivice počnu da se suše, oko 2-3 minuta.",
      "Okrenite i pecite još 2-3 minuta, ili dok ne porumene sa obe strane.",
      "Poslužite toplo sa omiljenim dodacima."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta", 
    servings: 6
  },
  "Krep palačinke": {
    name: "Krep palačinke",
    ingredients: [
      "125g brašna",
      "2 jajeta",
      "250ml mleka",
      "50ml vode",
      "2 kašike otopljenog putera ili ulja, plus malo za podmazivanje tiganja",
      "1/2 kašičice soli",
      "1 kašika šećera (opciono, za slatke palačinke)"
    ],
    instructions: [
      "U velikoj posudi umutiti brašno i so (i šećer, ako se koristi).", 
      "U drugoj posudi umutiti jaja, mleko, vodu i otopljeni puter.",
      "Postepeno dodavati mokre sastojke suvim sastojcima, muteći dok se ne dobije glatka smesa bez grudvica.",
      "Ostaviti smesu da odstoji najmanje 15 minuta (ili do 1 sat) na sobnoj temperaturi.",
      "Zagrejte tiganj za palačinke ili običan tiganj na srednjoj vatri.",
      "Lagano podmazati tiganj sa malo putera ili ulja.",
      "Sipajte oko 1/4 šolje smese na vreli tiganj i brzo ga nagnite da se smesa ravnomerno rasporedi po celoj površini.",
      "Pecite palačinku oko 1-2 minuta sa jedne strane, dok ne porumeni i pojave se mehurići.",
      "Okrenite palačinku i pecite još oko 1 minut sa druge strane, dok ne bude zlatno braon.",
      "Ponovite postupak sa preostalom smesom, slažući gotove palačinke na tanjir."
    ],
    prepTime: "10 minuta",
    cookTime: "20-30 minuta",
    servings: 10
  },

  "Acai Bowl Bowl": {
    name: "Acai Bowl",
    ingredients: [
      "100g zamrznutog acai pirea",
      "1/2 smrznute banane",
      "1/4 šolje zamrznutih borovnica",
      "1/4 šolje bademovog mleka",
      "1 kašika putera od kikirikija",
      "Preliv: 1/4 šolje granole, iseckane jagode i banana, 1 kašika kokosa, 1 kašičica chia, med (opciono)"
    ],
    instructions: [
      "Izblendajte acai, bananu, borovnice, mleko i puter do guste smese.",
      "Sipajte u činiju i dodajte preliv (granola, voće, kokos, chia, med)."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },

  "Power Bowl": {
    name: "Power Bowl",
    ingredients: [
      "1/2 šolje kinoe",
      "1 šolja vode",
      "1 kašika maslinovog ulja",
      "1/2 šolje leblebija, oceđenih",
      "1/4 kašičice kurkume",
      "1/4 kašičice dimljene paprike",
      "So i biber",
      "1 šaka baby spanaća",
      "1/4 avokada, kriške",
      "1/4 šolje pečenog batata, kockice",
      "1 jaje",
      "1 kašika semenki suncokreta"
    ],
    instructions: [
      "Skuvajte kinou (15 minuta), ostavite 5 minuta.",
      "Na ulju propržite začinjene leblebije 5-7 minuta do hrskavosti.",
      "Skuvajte jaje po želji.",
      "Složite činiju sa spanaćem, kinom, batatom, leblebijama, avokadom i jajem; pospite semenkama."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 1
  },

  "Zen Bowl": {
    name: "Zen Bowl",
    ingredients: [
      "1 šolja kuvanog smeđeg pirinča",
      "150g tofu-a (čvrsti), kockice",
      "1 šolja edamame (oljušten), baren 3-4 min",
      "1 šolja baby spanaća (blanširan ili svež)",
      "1/2 avokada, kriške",
      "1/2 šargarepe, julienne",
      "1/2 krastavca, tanke trake",
      "Kiseli đumbir (opciono)",
      "2 kašike susama",
      "Dresing: 1 kašika tahinija, 1 kašika miso paste, 1 kašika soja sosa, sok 1/2 limuna, 1 kašičica meda ili javorovog sirupa, 1-2 kašike vode"
    ],
    instructions: [
      "Ispržite tofu na malo ulja do zlatne boje (5-7 minuta) ili pecite u rerni na 200°C ~15 minuta.",
      "Umutite dresing (tahini, miso, soja, limun, med/javor, voda) do kremaste konzistencije.",
      "Složite činiju: pirinač kao bazu, pa tofu, edamame, spanać, avokado, šargarepa i krastavac.",
      "Prelijte dresingom, pospite susamom i dodajte kiseli đumbir po želji. Udahnite, uživajte."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  // Desserts
  "Tiramisu": {
    name: "Tiramisu",
    ingredients: [
      "500g mascarpone sira",
      "4 velika jaja, razdvojena",
      "100g šećera",
      "300ml jake, ohlađene kafe",
      "2-3 kašike likera od kafe ili ruma (opciono)",
      "250g piškota (savoiardi)",
      "Kakao prah, za posipanje"
    ],
    instructions: [
      "Umutiti žumanca sa šećerom do blede i penaste smese.",
      "Dodati mascarpone i umutiti do glatke kreme.",
      "Belanca umutiti u čvrst sneg.",
      "Pažljivo umešati sneg od belanaca u krem sa mascarponeom.",
      "Pomešati ohlađenu kafu sa likerom (ako se koristi).",
      "Kratko umakati piškote u kafu i poređati prvi sloj u posudi.",
      "Naneti polovinu kreme, zatim ponoviti sloj piškota i završiti ostatkom kreme.",
      "Prekriti i hladiti najmanje 4 sata (idealno preko noći).",
      "Pred serviranje posuti kakaom."
    ],
    prepTime: "30 minuta (+ min 4h hlađenje)",
    cookTime: "0 minuta",
    servings: 10
  },
  "Cheesecake": {
    name: "Cheesecake",
    ingredients: [
      "1 1/2 šolje mrvljenog graham krekera",
      "1/3 šolje otopljenog putera",
      "1/4 šolje šećera",
      "900g krem sira, sobne temperature",
      "1 1/2 šolje šećera",
      "1 kašičica ekstrakta vanile",
      "1/4 kašičice soli",
      "4 velika jaja, sobne temperature",
      "1/2 šolje pavlake"
    ],
    instructions: [
      "Rernu zagrejati na 160°C.",
      "Pomešati krekere, puter i šećer; utisnuti u kalup 23cm i peći 10 min. Ohladiti.",
      "Umutiti krem sir do glatkog; postepeno dodati šećer, vanilu i so.",
      "Dodavati jaja jedno po jedno na niskoj brzini, ne previše mutiti.",
      "Umešati pavlaku. Sipati preko kore.",
      "Peći u vodenoj kupki 50-60 min dok ivice ne očvrsnu a centar blago mek.",
      "Isključiti rernu, ostaviti 1h sa odškrinutim vratima.",
      "Ohladiti potpuno, pa hladiti 4h (idealno preko noći)."
    ],
    prepTime: "20 minuta",
    cookTime: "50-60 minuta (+ hlađenje)",
    servings: 8
  },
  "Chocolate Cake": {
    name: "Chocolate Cake",
    ingredients: [
      "200g brašna",
      "200g šećera",
      "50g kakao praha",
      "1 kašičica praška za pecivo",
      "1/2 kašičice sode bikarbone",
      "1/4 kašičice soli",
      "240ml mleka",
      "120ml ulja",
      "2 velika jaja",
      "2 kašičice ekstrakta vanile",
      "240ml vruće vode"
    ],
    instructions: [
      "Zagrejati rernu na 180°C; podmazati i pobrašniti kalup 20cm.",
      "Pomešati suve sastojke.",
      "U drugoj činiji umutiti mleko, ulje, jaja i vanilu.",
      "Dodati suve u mokre, pa postepeno umešati vruću vodu do glatke smese.",
      "Sipati u kalup i peći 30-35 min (čačkalica suva).",
      "Ohladiti u kalupu 10 min, zatim na rešetki potpuno."
    ],
    prepTime: "20 minuta",
    cookTime: "30-35 minuta",
    servings: 8
  },
  "Vanilla Ice Cream": {
    name: "Vanilla Ice Cream",
    ingredients: [
      "500 ml slatke pavlake za kuvanje (35% masti ili više)",
      "250 ml punomasnog mleka",
      "150 g šećera",
      "1 mahuna vanile ili 1 kašičica ekstrakta vanile",
      "Prstohvat soli"
    ],
    instructions: [
      "Isecite mahunu vanile po dužini i izgrebite semenke. Stavite semenke i samu mahunu u šerpu. Ako koristite ekstrakt vanile, dodajte ga kasnije.",
      "U šerpu dodajte slatku pavlaku, mleko, šećer i so.",
      "Na srednjoj vatri, zagrejte smesu uz stalno mešanje dok se šećer ne rastopi. Ne dozvolite da provri.",
      "Kada se šećer rastopi, sklonite sa vatre. Ako ste koristili mahunu vanile, izvadite je. Ako koristite ekstrakt vanile, dodajte ga sada.",
      "Prebacite smesu u činiju, pokrijte plastičnom folijom i ohladite u frižideru najmanje 4 sata, idealno preko noći.",
      "Sipajte ohlađenu smesu u aparat za pravljenje sladoleda i pratite uputstva proizvođača aparata.",
      "Kada je sladoled gotov, prebacite ga u posudu za zamrzavanje i zamrznite najmanje 2 sata da se potpuno stegne."
    ],
    prepTime: "10 minuta",
    cookTime: "30 minuta + hlađenje",
    servings: 6
  },
  "Chocolate Ice Cream": {
    name: "Chocolate Ice Cream",
    ingredients: [
      "2 šolje punomasnog mleka",
      "1 šolja slatke pavlake za kuvanje (35% masnoće ili više)",
      "¾ šolje šećera",
      "½ šolje nezaslađenog kakao praha",
      "¼ kašičice soli",
      "1 kašičica ekstrakta vanile"
    ],
    instructions: [
      "U srednjoj šerpi, pomešajte mleko, pavlaku, šećer, kakao prah i so.",
      "Zagrevajte na srednjoj vatri, stalno mešajući, dok se šećer i kakao ne rastvore i smesa ne postane topla, ali ne i da provri.",
      "Sklonite sa vatre i umešajte ekstrakt vanile.",
      "Sipajte smesu u posudu, pokrijte plastičnom folijom i ostavite da se potpuno ohladi u frižideru najmanje 4 sata, ili najbolje preko noći.",
      "Nakon što se smesa ohladila, sipajte je u aparat za sladoled i pratite uputstva proizvođača. Obično traje oko 20-25 minuta.",
      "Nakon što je sladoled gotov, prebacite ga u posudu i zamrznite na najmanje 2 sata da se stvrdne."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta (hlajenje) + 20-25 minuta (u aparatu za sladoled)",
    servings: 6
  },
  "Strawberry Ice Cream": {
    name: "Strawberry Ice Cream",
    ingredients: [
      "500g svežih jagoda, očišćenih i isečenih",
      "150g šećera",
      "250ml punomasnog mleka",
      "250ml slatke pavlake (35% m.m.)",
      "1 kašičica ekstrakta vanile",
      "1 kašika limunovog soka (opciono)"
    ],
    instructions: [
      "U blenderu ili procesoru hrane, izmiksajte jagode i šećer dok ne dobijete glatku smesu (pire).",
      "U šerpi srednje veličine, pomešajte mleko i pavlaku. Zagrejte na srednjoj vatri, ali ne dozvolite da provri.",
      "Skinite šerpu sa vatre i umešajte pire od jagoda i ekstrakt vanile. Ako želite, dodajte i limunov sok.",
      "Pokrijte smesu i ostavite da se ohladi u frižideru najmanje 4 sata, ili još bolje, preko noći.",
      "Sipajte ohlađenu smesu u aparat za sladoled i pratite uputstva proizvođača.",
      "Nakon što je sladoled gotov, prebacite ga u hermetički zatvorenu posudu i zamrznite najmanje 2 sata da se stegne."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta (hlađenje i mešanje)",
    servings: 6
  },
  "Mint Chocolate Chip": {
    name: "Mint Chocolate Chip",
    ingredients: [
      "1 šolja indijskih oraha (sirovih)",
      "1/2 šolje urmi (Medjool, bez koštica)",
      "1/4 šolje kakao praha",
      "1/4 šolje listova sveže mente",
      "1 kašika kokosovog ulja (otopljenog)",
      "1/4 kašičice ekstrakta mente",
      "Prstohvat soli",
      "1/4 šolje čokoladnih komadića (tamna čokolada, iseckana)"
    ],
    instructions: [
      "Indijske orahe staviti u blender ili secko i blendati dok se ne dobije grubo brašno.",
      "Dodati urme, kakao prah, mentu, kokosovo ulje, ekstrakt mente i so. Blendati dok se smesa ne sjedini i postane lepljiva.",
      "U smesu umešati čokoladne komadiće.",
      "Kašikom vaditi smesu i oblikovati kuglice veličine zalogaja.",
      "Kuglice staviti u frižider na najmanje 30 minuta da se stegnu."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 20
  },
  "Cookies and Cream": {
    name: "Cookies and Cream",
    ingredients: [
      "1 šolja (225g) neslanog maslaca, omekšalog",
      "¾ šolje (150g) šećera",
      "¾ šolje (165g) smeđeg šećera",
      "2 velika jaja",
      "1 kašičica ekstrakta vanile",
      "2 ¼ šolje (280g) višenamenskog brašna",
      "1 kašičica sode bikarbone",
      "1 kašičica soli",
      "1 ½ šolje (otprilike 24 keksa) izdrobljenih Oreo keksa"
    ],
    instructions: [
      "Zagrejte rernu na 190°C. Obložite dva pleha za pečenje papirom za pečenje.",
      "U velikoj posudi, mikserom umutite omekšali maslac, šećer i smeđi šećer dok smesa ne postane lagana i vazdušasta.",
      "Umutite jaja jedno po jedno, zatim dodajte ekstrakt vanile.",
      "U zasebnoj posudi, pomešajte brašno, sodu bikarbonu i so.",
      "Postepeno dodajte suve sastojke u vlažne sastojke, mešajući dok se ne sjedine.",
      "Umešajte izdrobljene Oreo kekse.",
      "Koristeći kašiku za sladoled ili dve kašike, stavljajte testo na pripremljene plehove za pečenje, ostavljajući malo prostora između svakog keksa.",
      "Pecite 10-12 minuta, ili dok ivice ne postanu zlatno smeđe.",
      "Ostavite kekse da se ohlade na plehovima nekoliko minuta pre nego što ih prebacite na žičanu rešetku da se potpuno ohlade."
    ],
    prepTime: "15 minuta",
    cookTime: "10-12 minuta",
    servings: 24
  },
  "Rocky Road": {
    name: "Rocky Road",
    ingredients: [
      "400g mlečne ili crne čokolade, izlomljene na kockice",
      "100g mini marshmallowa",
      "100g oraha, grubo iseckanih",
      "50g suvog grožđa (opciono)",
      "2 kašike putera"
    ],
    instructions: [
      "Obložite kvadratnu posudu (oko 20x20cm) papirom za pečenje.",
      "U velikoj posudi, rastopite čokoladu i puter na pari ili u mikrotalasnoj (u intervalima od 30 sekundi, mešajući između svakog).",
      "Skinite sa vatre i ostavite da se malo prohladi.",
      "Dodajte marshmallow, orahe i suvo grožđe (ako koristite) u rastopljenu čokoladu. Nežno izmešajte da se svi sastojci sjedine.",
      "Smesu prebacite u pripremljenu posudu i ravnomerno je rasporedite.",
      "Blago pritisnite smesu da se zbije.",
      "Ostavite u frižideru najmanje 2 sata da se stegne.",
      "Izvadite iz frižidera i isecite na kocke."
    ],
    prepTime: "15 minuta",
    cookTime: "5 minuta (vreme hlađenja: 2 sata)",
    servings: 16
  },
  "Neapolitan": {
    name: "Neapolitan",
    ingredients: [
      "1 konzerva (800g) seckanog paradajza",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1 mala glavica crnog luka, sitno iseckana",
      "1 kašičica suvog origana",
      "1/2 kašičice suvog bosiljka",
      "1/4 kašičice crvene paprike (po želji)",
      "So i biber, po ukusu",
      "Sveži bosiljak, za serviranje (opciono)",
      "Parmezan, za serviranje (opciono)"
    ],
    instructions: [
      "U velikom tiganju, zagrejte maslinovo ulje na srednjoj temperaturi.",
      "Dodajte crni luk i beli luk i pržite dok ne omekšaju, oko 5 minuta. Pripazite da beli luk ne zagori.",
      "Dodajte seckani paradajz, origano, bosiljak i crvenu papriku (ako koristite).",
      "Promešajte, smanjite vatru i ostavite da se krčka 15 minuta, povremeno mešajući.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite preko kuvane testenine. Ukrasite svežim bosiljkom i parmezanom, ako želite."
    ],
    prepTime: "5 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Pistachio": {
    name: "Pistachio",
    ingredients: [
      "6 jaja",
      "150g šećera",
      "150g brašna",
      "1 kašičica praška za pecivo",
      "Prstohvat soli",
      "250g neslanih pistacija",
      "250ml slatke pavlake",
      "150g šećera u prahu",
      "100g mascarpone sira",
      "100g bele čokolade",
      "50g seckanih pistacija"
    ],
    instructions: [
      "Zagrejte rernu na 180°C. Umutite jaja sa šećerom dok ne postanu penasta i svetla. Dodajte brašno pomešano sa praškom za pecivo i solju. Pažljivo sjedinite.",
      "Izlijte smesu u okrugli kalup za torte obložen papirom za pečenje. Pecite 30-35 minuta, ili dok čačkalica zabodena u sredinu ne izađe čista. Ostavite da se ohladi.",
      "Pistacije blanširajte i oljuštite. Sameljite ih u fini prah. Umutite slatku pavlaku sa šećerom u prahu. Dodajte mascarpone i mlevene pistacije. Dobro sjedinite.",
      "Otopite belu čokoladu na pari ili u mikrotalasnoj. Umešajte seckane pistacije.",
      "Presecite ohlađeni biskvit na dva ili tri dela. Nanesite polovinu krema od pistacija na prvi sloj biskvita. Preko kreme rasporedite hrskavi sloj.",
      "Preklopite drugim slojem biskvita i ponovite postupak sa preostalim kremom i hrskavim slojem.",
      "Ukrasite tortu preostalim mlevenim pistacijama ili celim pistacijama.",
      "Ostavite tortu u frižideru najmanje 2 sata pre služenja."
    ],
    prepTime: "45 minuta",
    cookTime: "35 minuta",
    servings: 8
  },
  "Rum Raisin": {
    name: "Rum Raisin",
    ingredients: [
      "1 šolja suvih grožđica",
      "1/2 šolje ruma (tamnog ili svetlog)",
      "2 šolje punomasnog mleka",
      "1 šolja slatke pavlake (sa najmanje 35% mlečne masti)",
      "3/4 šolje šećera",
      "1/4 kašičice soli",
      "1 mahuna vanile, rasečena po dužini i izgrebana",
      "6 velikih žumanaca"
    ],
    instructions: [
      "Potopite grožđice u rum. Stavite grožđice u malu posudu i prelijte ih rumom. Ostavite ih da se namaču najmanje 2 sata, ili idealno preko noći.",
      "U srednjoj šerpi, pomešajte mleko, pavlaku, šećer, so i izgrebane semenke vanile (zajedno sa mahunom). Zagrevajte na srednjoj vatri, mešajući dok se šećer ne rastopi.",
      "U zasebnoj posudi, lagano umutite žumanca. Polako sipajte vrelu smesu mleka u žumanca, neprestano muteći.",
      "Vratite smesu u šerpu. Kuvajte na niskoj temperaturi, mešajući, dok se smesa malo ne zgusne.",
      "Procedite smesu kroz finu cediljku u čistu posudu. Pokrijte plastičnom folijom i ohladite u frižideru najmanje 4 sata.",
      "Uklonite grožđice iz ruma (sačuvajte rum). Sipajte bazu u aparat za sladoled i pratite uputstva proizvođača.",
      "Pred kraj procesa, dodajte grožđice namočene u rum u aparat za sladoled.",
      "Prebacite sladoled u hermetički zatvorenu posudu i zamrznite najmanje 2 sata da se stvrdne."
    ],
    prepTime: "20 minuta (plus vreme za potapanje grožđica)",
    cookTime: "30 minuta",
    servings: 6
  },
  "Coffee Ice Cream": {
    name: "Coffee Ice Cream",
    ingredients: [
      "2 šolje guste pavlake (minimum 35% mlečne masti)",
      "1 šolja punomasnog mleka",
      "¾ šolje šećera",
      "¼ kašičice soli",
      "½ šolje sveže skuvane jake kafe, ohlađene",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "U srednjoj šerpi, pomešajte gustu pavlaku, mleko, šećer i so.",
      "Zagrevajte smesu na srednjoj vatri, mešajući neprekidno, dok se šećer potpuno ne rastvori. Pazite da ne provri.",
      "Skinite sa vatre i umešajte ohlađenu kafu i ekstrakt vanile (ako koristite).",
      "Smesu prebacite u posudu, pokrijte je prozirnom folijom tako da dodiruje površinu smese i stavite u frižider da se dobro ohladi, najmanje 4 sata.",
      "Nakon hlađenja, sipajte smesu u aparat za pravljenje sladoleda i pratite uputstva proizvođača.",
      "Gotov sladoled prebacite u posudu pogodnu za zamrzavanje i zamrznite najmanje 2 sata pre služenja."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 6
  },
  "Caramel Ice Cream": {
    name: "Caramel Ice Cream",
    ingredients: [
      "1 šolja (200g) šećera",
      "1/4 šolje (60ml) vode",
      "1 1/2 šolje (360ml) pavlake za kuvanje (35% m.m. ili više)",
      "1 1/2 šolje (360ml) punomasnog mleka",
      "1/4 kašičice soli",
      "1 kašičica ekstrakta vanile (opciono)"
    ],
    instructions: [
      "U srednjoj šerpi, pomešajte šećer i vodu. Kuvajte na srednjoj vatri, povremeno mešajući, dok se šećer ne rastvori.",
      "Prestanite sa mešanjem i pustite da se šećer karamelizuje. Kuvajte dok ne dobije duboku, amber boju.",
      "Sklonite sa vatre i polako ulijte pavlaku za kuvanje. Budite oprezni, jer će smesa zapeniti. Mešajte dok se karamela i pavlaka potpuno ne sjedine.",
      "Dodajte mleko i so. Vratite na tihu vatru i kuvajte, mešajući, dok se smesa ne zagreje (ne sme da provri).",
      "Sklonite sa vatre i dodajte ekstrakt vanile (ako koristite).",
      "Prebacite smesu u posudu, pokrijte plastičnom folijom i ostavite da se potpuno ohladi u frižideru (najmanje 4 sata).",
      "Kada se smesa ohladi, sipajte je u aparat za pravljenje sladoleda i pratite uputstva proizvođača.",
      "Prebacite gotov sladoled u posudu i zamrznite najmanje 2 sata pre serviranja, da se stegne."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta (plus vreme hlađenja i zamrzavanja)",
    servings: 6
  },
  "Banana Split": {
    name: "Banana Split",
    ingredients: [
      "1 banana, oljuštena i prepolovljena po dužini",
      "3 kugle sladoleda (vanila, čokolada, jagoda)",
      "2 kašike čokoladnog preliva",
      "2 kašike preliva od jagode",
      "2 kašike ananasa iz konzerve, oceđenog i isečenog na komadiće",
      "Šlag (po želji)",
      "Seckani orasi (po želji)",
      "Maraskino trešnja (3 komada)"
    ],
    instructions: [
      "Prepolovljene banane stavite na dugački tanjir ili posudu za banana split, tako da su zakrivljene strane okrenute jedna prema drugoj.",
      "Stavite tri kugle sladoleda između banana. Jedna kugla vanile, jedna čokolade i jedna jagode.",
      "Prelijte kuglu sladoleda od vanile prelivom od jagode.",
      "Prelijte kuglu sladoleda od čokolade čokoladnim prelivom.",
      "Dodajte komadiće ananasa preko celog deserta.",
      "Ako želite, dodajte šlag preko sladoleda.",
      "Pospite seckanim orasima.",
      "Stavite po jednu maraskino trešnju na svaku kuglu sladoleda.",
      "Poslužite odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "10 minuta",
    servings: 1
  },
  "Sundae": {
    name: "Sundae",
    ingredients: [
      "2 kugle sladoleda (po izboru)",
      "2 kašike čokoladnog preliva",
      "1 kašika šlaga (opciono)",
      "1 kašika seckanih oraha (opciono)",
      "1 višnja (za dekoraciju, opciono)"
    ],
    instructions: [
      "Stavite dve kugle sladoleda u desertnu činiju.",
      "Prelijte sladoled čokoladnim prelivom.",
      "Po želji, dodajte šlag.",
      "Posipajte seckanim orasima, ako želite.",
      "Ukrasite višnjom na vrhu.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 1
  },
  "Milkshake": {
    name: "Milkshake",
    ingredients: [
      "2 kugle sladoleda (vanila, čokolada ili po izboru)",
      "120 ml mleka",
      "Šlag (opciono, za dekoraciju)",
      "Čokoladni sirup ili voćni preliv (opciono, za dekoraciju)"
    ],
    instructions: [
      "U blender stavite sladoled i mleko.",
      "Blendirajte dok ne dobijete glatku smesu. Ako je milkshake previše gust, dodajte još malo mleka.",
      "Sipajte milkshake u čašu.",
      "Po želji, ukrasite šlagom i čokoladnim sirupom ili voćnim prelivom."
    ],
    prepTime: "2 minuta",
    cookTime: "0 minuta",
    servings: 1
  },
  "Ice Cream Sandwich": {
    name: "Ice Cream Sandwich",
    ingredients: [
      "12 komada omiljenih keksa (npr. čokoladni, vanila)",
      "500ml omiljenog sladoleda (omekšanog)"
    ],
    instructions: [
      "Izvadite sladoled iz zamrzivača i ostavite ga da omekša na sobnoj temperaturi oko 5-10 minuta.",
      "Pripremite kekse. Položite 6 keksa na radnu površinu, licem prema gore.",
      "Kašikom ili nožem za maslac, nanesite ravnomerni sloj omekšanog sladoleda na svaki od 6 keksa.",
      "Prekrijte svaki keks sa sladoledom drugim keksom, formirajući sendvič. Lagano pritisnite da se sladoled ravnomerno rasporedi.",
      "Umotajte svaki Ice Cream Sandwich pojedinačno u plastičnu foliju ili stavite u hermetički zatvorenu posudu.",
      "Vratite Ice Cream Sandwich-e u zamrzivač na najmanje 30 minuta, ili dok se sladoled ponovo ne stegne.",
      "Izvadite iz zamrzivača nekoliko minuta pre serviranja."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta (osim ako se keksi peku)",
    servings: 6
  },
  "Gelato": {
    name: "Gelato",
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
      "Prebacite smesu u činiju, pokrijte je plastičnom folijom i ostavite da se potpuno ohladi u frižideru, najmanje 4 sata ili preko noći.",
      "Sipajte ohlađenu smesu u aparat za sladoled i zamrznite prema uputstvima proizvođača.",
      "Kada je gelato gotov, prebacite ga u posudu koja se može zamrznuti i stavite u zamrzivač na najmanje 2 sata da se dodatno stegne."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta (plus vreme hlađenja)",
    servings: 6
  },
  "Sorbet": {
    name: "Sorbet",
    ingredients: [
      "1 kg voća (npr. maline, jagode, limun, mango)",
      "200g šećera",
      "250 ml vode",
      "1 kašika limunovog soka (opciono, zavisi od voća)"
    ],
    instructions: [
      "U šerpu sipati vodu i šećer. Zagrevati na srednjoj vatri, mešajući dok se šećer potpuno ne rastvori.",
      "Kuvati sirup 5 minuta, a zatim skloniti sa vatre i ostaviti da se ohladi.",
      "Oprati i očistiti voće. Iseckati ga na manje komade.",
      "Staviti voće u blender ili procesor za hranu i izblendirati dok se ne dobije glatka smesa.",
      "Procediti smesu od voća kroz sito kako bi se uklonile semenke ili grubi delovi.",
      "Pomešati ohlađeni sirup sa ispasiranim voćem. Dodati limunov sok ukoliko je potrebno.",
      "Sipati smesu u posudu pogodnu za zamrzavanje.",
      "Zamrzavati najmanje 4 sata, ili dok se sorbet ne stegne.",
      "Na svakih sat vremena, izvaditi sorbet iz zamrzivača i promešati viljuškom kako bi se sprečilo stvaranje velikih kristala leda.",
      "Pre serviranja, ostaviti sorbet da odstoji par minuta na sobnoj temperaturi kako bi se lakše servirao."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta + vreme za zamrzavanje (najmanje 4 sata)",
    servings: 6
  },
  "Frozen Yogurt": {
    name: "Frozen Yogurt",
    ingredients: [
      "500g grčkog jogurta (sa visokim procentom masti)",
      "100g meda ili javorovog sirupa",
      "1 kašičica ekstrakta vanile",
      "100g svežeg ili zamrznutog voća (jagode, borovnice, maline – po izboru)"
    ],
    instructions: [
      "U velikoj posudi pomešajte grčki jogurt, med (ili javorov sirup) i ekstrakt vanile. Mešajte dok se sastojci dobro ne sjedine.",
      "Ako koristite sveže voće, isecite ga na manje komade. Zamrznuto voće možete koristiti direktno iz zamrzivača.",
      "Nežno umešajte voće u smesu sa jogurtom.",
      "Smesu sipajte u posudu za zamrzavanje (po mogućstvu metalnu jer se brže zamrzava).",
      "Pokrijte posudu poklopcem ili plastičnom folijom.",
      "Stavite u zamrzivač na najmanje 2 sata, ili dok se smesa ne stegne do željene konzistencije.",
      "Na svakih 30-45 minuta, izvadite posudu iz zamrzivača i promešajte viljuškom kako biste razbili kristale leda i dobili glatku teksturu. Ponovite ovo 2-3 puta tokom zamrzavanja.",
      "Pre serviranja, ostavite frozen yogurt da odstoji nekoliko minuta na sobnoj temperaturi kako bi se malo omekšao."
    ],
    prepTime: "5 minuta",
    cookTime: "2-4 sata (zamrzavanje)",
    servings: 4
  },
  "Ice Cream Cake": {
    name: "Ice Cream Cake",
    ingredients: [
      "200g čokoladnih keksa (npr. Oreo)",
      "75g otopljenog putera",
      "1 litar sladoleda (ukus po želji, omekšao)",
      "100g čokolade za kuvanje (opciono)",
      "50ml slatke pavlake (opciono)"
    ],
    instructions: [
      "Izmrvite kekse u blenderu ili ih stavite u kesu i izmrvite oklagijom.",
      "Pomešajte izmrvljene kekse sa otopljenim puterom.",
      "Utisnite smesu od keksa u dno okruglog kalupa za torte (prečnika oko 20cm) obloženog papirom za pečenje.",
      "Ravnomerno rasporedite omekšali sladoled preko podloge od keksa.",
      "Pokrijte i zamrznite najmanje 4 sata, ili dok se ne stegne.",
      "(Opciono) Istopite čokoladu sa slatkom pavlakom na pari ili u mikrotalasnoj.",
      "Pre služenja, izvadite kolač iz zamrzivača 10-15 minuta.",
      "Prelijte istopljenom čokoladom (opciono) i isecite na kriške."
    ],
    prepTime: "20 minuta",
    cookTime: "najmanje 4 sata",
    servings: 8
  },
  "Affogato": {
    name: "Affogato",
    ingredients: [
      "1 kugla sladoleda od vanile (oko 75g)",
      "1 espresso (oko 30ml)"
    ],
    instructions: [
      "Stavite kuglu sladoleda od vanile u malu činiju ili šolju.",
      "Odmah prelijte vrelim espressom preko sladoleda.",
      "Poslužite odmah."
    ],
    prepTime: "2 minuta",
    cookTime: "0 minuta",
    servings: 1
  },
  "Pavlova": {
    name: "Pavlova",
    ingredients: [
      "4 belanca",
      "200g šećera",
      "1 kašičica vinskog sirćeta ili limunovog soka",
      "1 kašičica kukuruznog skroba",
      "1/2 kašičice vanile",
      "250ml slatke pavlake",
      "500g svežeg voća (jagode, maline, borovnice, kivi...)"
    ],
    instructions: [
      "Rernu zagrejati na 120°C; pleh obložiti papirom.",
      "Umutiti belanca do mekih vrhova; postepeno dodati šećer do sjajnih čvrstih vrhova.",
      "Umešati sirće/limun, skrob i vanilu; oblikovati krug 20-23cm.",
      "Smanjiti na 100°C i peći 1h15; ostaviti da se ohladi u rerni.",
      "Umutiti šlag, premazati i ukrasiti voćem neposredno pre serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "75 minuta (+ hlađenje)",
    servings: 10
  },
  "Trifle": {
    name: "Trifle",
    ingredients: [
      "500g voća (mešano)",
      "250g piškota/biskvita",
      "100ml slatkog vina ili voćnog likera",
      "Krema: 500ml mleka, 4 žumanca, 100g šećera, 40g gustina, 1 kašičica vanile",
      "500ml slatke pavlake + 50g šećera u prahu (za šlag)",
      "Menta za dekor (opciono)"
    ],
    instructions: [
      "Pripremiti krem: kuvati mleko sa žumancima, šećerom i gustinom do zgušnjavanja; dodati vanilu i prohladiti.",
      "Izdrobiti piškote, nakvasiti vinom/likerom.",
      "Složiti slojeve: voće, piškote, krem – ponoviti; završiti kremom.",
      "Umutiti šlag i premazati; hladiti min 2h (bolje preko noći)."
    ],
    prepTime: "30 minuta",
    cookTime: "15 minuta (+ hlađenje)",
    servings: 8
  },
  "Mousse": {
    name: "Mousse",
    ingredients: [
      "200g tamne čokolade (≥70%)",
      "4 jaja",
      "50g šećera",
      "1 kašika ruma (opciono)",
      "Prstohvat soli",
      "125ml slatke pavlake"
    ],
    instructions: [
      "Otopiti čokoladu na pari; prohladiti.",
      "Umutiti žumanca sa šećerom do penastog; dodati čokoladu i rum.",
      "Belanca umutiti u čvrst sneg sa prstohvatom soli.",
      "Posebno umutiti pavlaku u čvrst šlag.",
      "Umešati prvo šlag, zatim sneg u čokoladnu smesu (lagano).",
      "Rasporediti u čaše i hladiti min 2h."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta (+ hlađenje)",
    servings: 4
  },
  "Flan": {
    name: "Flan",
    ingredients: [
      "Karamel: 200g šećera + 60ml vode",
      "5 velikih jaja",
      "1 konzerva (397g) zaslađenog kondenzovanog mleka",
      "360ml punomasnog mleka",
      "1 kašičica vanile"
    ],
    instructions: [
      "Skuvati karamel do zlatne boje i izliti u kalup (20cm).",
      "Umutiti jaja, kondenzovano i obično mleko i vanilu do glatkog.",
      "Uliti preko karamela.",
      "Peći u vodenoj kupki na 160°C 50-60 min dok se stegne.",
      "Ohladiti potpuno, hladiti 4h+, istresti pre serviranja."
    ],
    prepTime: "20 minuta",
    cookTime: "50-60 minuta (+ hlađenje)",
    servings: 8
  },
  "Cannoli": {
    name: "Cannoli",
    ingredients: [
      "Testo: 250g brašna 00, 15g šećera, 1/2 kašičice cimeta, 1/4 kašičice soli, 30g putera, 60ml suvog crvenog vina, 1 jaje, ulje za prženje",
      "Fil: 500g rikote (oceđene), 150g šećera u prahu, 50g kandiranog voća, 50g čokoladnih kapljica, 1 kašičica vanile, korica 1 pomorandže",
      "Dekor: šećer u prahu, seckani pistaći, kandirane trešnje (opciono)"
    ],
    instructions: [
      "Zamesiti testo (suvi sastojci + puter, zatim vino i jaje); hladiti 30 min.",
      "Razvući tanko, iseći krugove 10cm i umotati oko kalupa; zalepiti krajeve jajetom.",
      "Pržiti u ulju 170-180°C 1-2 min po strani; ohladiti i skinuti kalupe.",
      "Promešati sastojke za fil i puniti korpice pred serviranje.",
      "Posuti šećerom u prahu; ukrasiti pistaćima/trešnjama."
    ],
    prepTime: "45 minuta",
    cookTime: "15-20 minuta",
    servings: 12
  },
  "Profiteroles": {
    name: "Profiteroles",
    ingredients: [
      "Testo: 125ml voda, 50g putera, prstohvat soli, 75g brašna, 2 jaja",
      "Krem: 500ml mleka, 100g šećera, 40g gustina, 4 žumanca, 1 kašičica vanile, 200ml slatke pavlake (umućene)",
      "Glazura: 100g čokolade, 50ml slatke pavlake"
    ],
    instructions: [
      "Zakuvati vodu sa puterom i solju; dodati brašno i mešati do glatke lopte; kratko sušiti na vatri.",
      "Prohladiti, dodati jaja jedno po jedno do sjajnog testa.",
      "Istiskivati kupice na pleh i peći 200°C 10 min, zatim 180°C 20-25 min; osušiti u isključenoj rerni.",
      "Skuvati krem, ohladiti i umešati umućeni šlag; napuniti profiterole.",
      "Napraviti glazuru i umočiti vrhove ili preliti."
    ],
    prepTime: "30 minuta",
    cookTime: "30-35 minuta",
    servings: 20
  },
  "Éclair": {
    name: "Éclair",
    ingredients: [
      "Testo: 125ml vode, 125ml mleka, 115g putera, 1 kašičica šećera, 1/4 kašičice soli, 150g brašna, 4 jaja",
      "Krem: 500ml mleka, 100g šećera, 40g gustina, 4 žumanca, 1 kašičica vanile, 50g putera",
      "Glazura: 150g tamne čokolade, 50ml pavlake"
    ],
    instructions: [
      "Skuvati testo (kao za princes krofne); dodati jaja i istiskivati trake 10cm; peći 200°C 15 min pa 180°C 20-25 min.",
      "Skuvati krem, dodati vanilu i puter; ohladiti (pokriti folijom površinu).",
      "Napuniti ohlađene eklere kremom; vrh umočiti u glazuru (čokolada + vruća pavlaka)."
    ],
    prepTime: "30 minuta",
    cookTime: "35-40 minuta",
    servings: 12
  },

  // European recipes
  "Schnitzel": {
    name: "Schnitzel",
    ingredients: [
      "4 teleća šnicle (oko 150g svaka), tanko isečene",
      "100g brašna",
      "2 jaja",
      "150g prezli",
      "So",
      "Biber",
      "Biljno ulje, za prženje",
      "Limun, za serviranje (opciono)"
    ],
    instructions: [
      "Šnicle stavite između dva sloja prozirne folije i istucite ih batom za meso na debljinu od oko 5mm. Pazite da ih ne istučete previše da ne puknu.",
      "Posolite i pobiberite šnicle sa obe strane.",
      "Pripremite tri plitka tanjira. U jedan stavite brašno, u drugi umućena jaja, a u treći prezle.",
      "Svaku šniclu prvo uvaljajte u brašno, dobro je otresite od viška brašna.",
      "Zatim je umočite u umućena jaja, pazeći da je potpuno prekrivena.",
      "Na kraju, šniclu uvaljajte u prezle, pritiskajući ih lagano da se dobro zalepe.",
      "U velikom tiganju zagrejte dovoljno biljnog ulja da šnicle mogu da plivaju. Ulje treba da bude vruće, ali ne previše da ne izgore.",
      "Pržite šnicle oko 3-4 minuta sa svake strane, dok ne postanu zlatno-smeđe i hrskave.",
      "Izvadite šnicle iz tiganja i stavite ih na papirni ubrus da se ocede od viška masnoće.",
      "Poslužite toplo, uz krišku limuna (opciono), pire krompir ili salatu."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },
  "Pasta Carbonara": {
    name: "Pasta Carbonara",
    ingredients: [
      "350g špageta",
      "150g pančete ili guanciale, isečene na kockice",
      "3 velika jaja",
      "50g rendanog Pecorino Romano sira",
      "50g rendanog parmezana",
      "Crni biber, sveže samleven, po ukusu",
      "So, po ukusu",
      "1-2 kašike maslinovog ulja (opciono)"
    ],
    instructions: [
      "Skuvajte špagete u posoljenoj vodi prema uputstvima na pakovanju dok ne budu al dente. Sačuvajte oko 1 šolje vode u kojoj se kuvala pasta pre nego što je procedite.",
      "Dok se pasta kuva, u velikom tiganju propržite pančetu ili guanciale na srednjoj vatri dok ne postane hrskava. Izvadite pančetu iz tiganja i ostavite je sa strane, ostavljajući masnoću u tiganju. Ako nema dovoljno masnoće, dodajte malo maslinovog ulja.",
      "U činiji umutite jaja, Pecorino Romano, parmezan i obilnu količinu sveže samlevenog crnog bibera.",
      "Procedite pastu i odmah je dodajte u tiganj sa masnoćom od pančete. Dobro promešajte da se pasta obloži masnoćom.",
      "Skinite tiganj sa vatre i odmah sipajte smesu od jaja i sira preko vruće paste. Brzo mešajte dok se smesa ne zgusne i formira kremasti sos. Dodajte malo sačuvane vode od kuvanja paste ako je potrebno da se sos razredi do željene konzistencije.",
      "Dodajte hrskavu pančetu nazad u tiganj i promešajte.",
      "Poslužite odmah, posuto sa još rendanog Pecorino Romano sira i sveže samlevenog crnog bibera."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Paella": {
    name: "Paella",
    ingredients: [
      "400g pirinča za paellu (npr. bomba rice)",
      "500g pilećeg mesa, isečenog na komade",
      "250g svežih gambora, očišćenih",
      "250g dagnji, očišćenih i bez brade",
      "1 crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, iseckana",
      "1 zelena paprika, iseckana",
      "2 paradajza, izrendana",
      "100g graška",
      "100ml maslinovog ulja",
      "1 l pilećeg bujona",
      "1 kesica šafrana",
      "1 kašičica dimljene paprike",
      "1 limun, isečen na kriške (za serviranje)",
      "Sveži peršun, iseckan (za serviranje)",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj paella tiganju (ili širokom tiganju sa ravnim dnom), zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte piletinu i pržite dok ne porumeni sa svih strana. Izvadite piletinu iz tiganja i ostavite na stranu.",
      "U isti tiganj dodajte crni luk i beli luk i pržite dok ne omekšaju.",
      "Dodajte paprike i pržite još nekoliko minuta.",
      "Dodajte izrendani paradajz, dimljenu papriku, so i biber. Kuvajte dok se sos malo ne zgusne.",
      "Dodajte pirinač i mešajte dok se pirinač ne obloži sosom.",
      "Ulijte vreli pileći bujon i dodajte šafran. Promešajte.",
      "Vratite piletinu u tiganj.",
      "Ravnomerno rasporedite pirinač i piletinu po tiganju. Smanjite vatru na nisku.",
      "Kuvajte bez mešanja oko 15 minuta, dok pirinač ne upije većinu tečnosti.",
      "Dodajte gambore, dagnje i grašak preko pirinča. Kuvajte dok se gambori ne skuvaju, a dagnje ne otvore (oko 5-10 minuta). Bacite dagnje koje se nisu otvorile.",
      "Sklonite paellu sa vatre i ostavite da odstoji 5 minuta pre serviranja.",
      "Ukrasite svežim peršunom i servirajte sa kriškama limuna."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 6
  },
  "Ratatouille": {
    name: "Ratatouille",
    ingredients: [
      "1 veći crni luk",
      "2 čena belog luka",
      "1 crvena paprika",
      "1 žuta paprika",
      "1 veći patlidžan",
      "2 tikvice",
      "400g pelata paradajza (konzerva)",
      "200ml paradajz pirea",
      "2 kašike maslinovog ulja",
      "1 kašičica suvog origana",
      "1/2 kašičice suvog bosiljka",
      "So i biber po ukusu",
      "Sveži peršun (za dekoraciju, opciono)"
    ],
    instructions: [
      "Crni luk iseckajte na sitno. Beli luk izgnječite ili sitno iseckajte. Paprike očistite od semenki i isecite na kockice. Patlidžan i tikvice isecite na kockice slične veličine.",
      "U velikom tiganju ili šerpi zagrejte maslinovo ulje na srednjoj vatri. Dodajte crni luk i pržite dok ne postane staklast, oko 5 minuta.",
      "Dodajte beli luk i pržite još minut, pazeći da ne zagori.",
      "Dodajte paprike i dinstajte još 5 minuta, dok malo ne omekšaju.",
      "Dodajte patlidžan i tikvice i nastavite da dinstate još 10 minuta, povremeno mešajući, dok povrće ne počne da omekšava.",
      "Dodajte pelat paradajza (iseckan ili izgnječen), paradajz pire, origano, bosiljak, so i biber. Dobro promešajte.",
      "Smanjite vatru na nisku, poklopite i ostavite da se krčka oko 30 minuta, ili dok svo povrće ne bude potpuno mekano i sos se zgusne. Povremeno promešajte.",
      "Probajte i po potrebi dodajte još soli i bibera.",
      "Poslužite toplo, ukrašeno svežim peršunom, ako želite."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 4
  },
  // Fish recipes
  "Grilled Salmon": {
    name: "Grilled Salmon",
    ingredients: [
      "2 komada fileta lososa (oko 150g svaki), sa kožom ili bez",
      "2 kašike maslinovog ulja",
      "1 kašika limunovog soka",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice dimljene paprike",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za dekoraciju, opcionalno)",
      "Limun, isečen na kriške (za serviranje, opcionalno)"
    ],
    instructions: [
      "Zagrejte roštilj na srednje jaku vatru.",
      "U maloj posudi, pomešajte maslinovo ulje, limunov sok, beli luk u prahu i dimljenu papriku.",
      "Osušite filete lososa papirnim ubrusom.",
      "Premažite filete lososa sa obe strane pripremljenom marinadom. Začinite solju i biberom po ukusu.",
      "Ako koristite filete sa kožom, stavite lososa na roštilj sa kožom na dole.",
      "Pecite lososa 4-6 minuta sa svake strane, ili dok ne bude pečen. Vreme pečenja zavisi od debljine fileta. Losos je gotov kada se lako odvaja viljuškom.",
      "Pažljivo skinite lososa sa roštilja.",
      "Ukrasite svežim peršunom (opcionalno).",
      "Poslužite odmah sa kriškama limuna."
    ],
    prepTime: "10 minuta",
    cookTime: "12 minuta",
    servings: 2
  },
  "Fish and Chips": {
    name: "Fish and Chips",
    ingredients: [
      "400g fileta bele ribe (bakalar, oslić)",
      "150g brašna",
      "1 kašičica praška za pecivo",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "240ml hladnog piva ili gazirane vode",
      "4 velika krompira",
      "Ulje za prženje",
      "Limun, za serviranje",
      "So i biber, po ukusu"
    ],
    instructions: [
      "Krompir oguliti i iseći na štapiće debljine oko 1 cm. Isprati ih u hladnoj vodi i dobro osušiti papirnim ubrusima.",
      "U dubokom tiganju ili fritezi zagrejati ulje na 160°C.",
      "Pržiti krompir u serijama dok ne omekša, oko 5-7 minuta. Izvaditi iz ulja i staviti na papirni ubrus da se ocedi.",
      "U većoj posudi pomešati brašno, prašak za pecivo, so i biber.",
      "Postepeno dodavati hladno pivo ili gaziranu vodu, mešajući dok ne dobijete glatku smesu bez grudvica.",
      "Riblje filete osušiti papirnim ubrusima i iseći na komade željene veličine.",
      "Zagrejte ulje na 180°C.",
      "Svaki komad ribe umočiti u smesu za pohovanje, pazeći da bude potpuno prekriven.",
      "Pržiti ribu u vrelom ulju dok ne dobije zlatno-smeđu boju, oko 3-5 minuta sa svake strane.",
      "Izvaditi ribu iz ulja i staviti na papirni ubrus da se ocedi.",
      "Povećati temperaturu ulja na 190°C i drugi put ispržiti krompir dok ne postane zlatno-braon i hrskav. Začiniti solju i biberom.",
      "Poslužiti 'Fish and Chips' toplo, uz krišku limuna."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 2
  },
  "Tuna Steak": {
    name: "Tuna Steak",
    ingredients: [
      "2 tuna steak-a (oko 200g svaki)",
      "2 kašike maslinovog ulja",
      "1 limun (sok i kora)",
      "1 čen belog luka, sitno iseckan",
      "1 kašičica sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "Izvadite tuna steak-ove iz frižidera 15 minuta pre kuvanja da se zagreju na sobnoj temperaturi.",
      "U maloj posudi pomešajte maslinovo ulje, sok od limuna, izrendanu koru limuna, iseckani beli luk, origano, so i biber.",
      "Marinirajte tuna steak-ove u pripremljenoj marinadi 10 minuta.",
      "Zagrejte gril tiganj ili običan tiganj na srednje jakoj vatri.",
      "Izvadite tuna steak-ove iz marinade i stavite ih u zagrejan tiganj.",
      "Pecite 3-4 minuta sa svake strane za srednje pečeno (medium rare). Vreme pečenja zavisi od debljine steak-a i željenog nivoa pečenosti. Za potpuno pečeno, pecite duže.",
      "Izvadite tuna steak-ove iz tiganja i ostavite da odstoje par minuta pre serviranja.",
      "Poslužite odmah sa prilogom po želji (salata, povrće sa roštilja, pire krompir)."
    ],
    prepTime: "5 minuta",
    cookTime: "8 minuta",
    servings: 2
  },
  "Cod Fillet": {
    name: "Cod Fillet",
    ingredients: [
      "2 fileta bakalara (oko 150g svaki)",
      "1 kašika maslinovog ulja",
      "1/2 limuna (sok i rendana korica)",
      "1 čen belog luka, sitno iseckan",
      "1/4 kašičice sušenog origana",
      "So i biber po ukusu",
      "Sveži peršun za dekoraciju (opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Obložite pleh papirom za pečenje.",
      "U manjoj posudi pomešajte maslinovo ulje, sok i koricu limuna, iseckani beli luk, origano, so i biber.",
      "Filete bakalara stavite na pripremljeni pleh.",
      "Prelijte filete pripremljenom marinadom, ravnomerno rasporedite.",
      "Pecite u zagrejanoj rerni 12-15 minuta, ili dok riba ne postane lako rastresita viljuškom.",
      "Ukrasite svežim peršunom (opciono).",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "15 minuta",
    servings: 2
  },
  "Sea Bass": {
    name: "Sea Bass",
    ingredients: [
      "2 fileta brancina (oko 150g svaki)",
      "2 kašike maslinovog ulja",
      "1 limun, isečen na kriške",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica suvog origana",
      "So i biber, po ukusu",
      "Sveži peršun, seckani (za dekoraciju)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Obložite pleh papirom za pečenje.",
      "U manjoj činiji, pomešajte maslinovo ulje, beli luk, origano, so i biber.",
      "Premažite filete brancina smesom sa obe strane.",
      "Stavite filete brancina na pleh.",
      "Rasporedite kriške limuna preko fileta.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok riba ne bude gotova i lako se raspada viljuškom.",
      "Izvadite iz rerne i pospite seckanim peršunom."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 2
  },
  "Mackerel": {
    name: "Mackerel",
    ingredients: [
      "2 skuše (oko 200g svaka), očišćene",
      "2 kašike maslinovog ulja",
      "1 limun, isečen na kriške",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Obložite pleh papirom za pečenje.",
      "Skuše isperite i osušite papirnim ubrusima.",
      "Napravite 2-3 reza na svakoj strani skuše.",
      "Unutrašnjost svake skuše napunite kriškama limuna i belim lukom.",
      "Premažite skuše maslinovim uljem i pospite origanom, solju i biberom.",
      "Stavite skuše na pripremljeni pleh.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok riba ne bude pečena i lako se odvaja od kostiju.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "20 minuta",
    servings: 2
  },
  "Sardines": {
    name: "Sardines",
    ingredients: [
      "1 konzerva sardina u ulju (100g)",
      "1 limun",
      "1 cesanj belog luka (sitno iseckan)",
      "2 kašike maslinovog ulja",
      "Malo svežeg peršuna (iseckanog)",
      "Crni biber (sveže samleven)",
      "Hleb po izboru (za serviranje)"
    ],
    instructions: [
      "Ocedite sardine od ulja (ostavite malo).",
      "U tiganju zagrejte maslinovo ulje i dodajte sitno iseckan beli luk. Kratko propržite (oko 30 sekundi), pazeći da beli luk ne izgori.",
      "Dodajte oceđene sardine u tiganj.",
      "Kuvajte na tihoj vatri oko 5 minuta, nežno ih okrecući da se zagreju.",
      "Iscedite sok od pola limuna preko sardina.",
      "Pospite svežim peršunom i sveže samlevenim crnim biberom.",
      "Servirajte toplo uz kriške hleba i preostalu polovinu limuna."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 1
  },
  "Trout": {
    name: "Trout",
    ingredients: [
      "2 cele pastrmke, ociscene",
      "1 limun, isecen na kolutove",
      "2 cena belog luka, sitno iseckana",
      "2 kasike svezeg persuna, sitno iseckanog",
      "2 kasike maslinovog ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Pastrmke operite i osusite papirnim ubrusom.",
      "Isecite pastrmke sa obe strane na par mesta.",
      "U posudi pomesajte maslinovo ulje, beli luk, persun, so i biber.",
      "Premazite pastrmke iznutra i spolja pripremljenom smesom.",
      "Stavite nekoliko kolutova limuna unutar svake pastrmke.",
      "Stavite pastrmke u pleh oblozen papirom za pecenje.",
      "Preostale kolutove limuna rasporedite preko pastrmki.",
      "Pecite u zagrejanoj rerni 20-25 minuta, ili dok pastrmke ne budu pecene i lako se odvajaju od kostiju.",
      "Servirajte toplo."
    ],
    prepTime: "10 minuta",
    cookTime: "25 minuta",
    servings: 2
  },
  "Halibut": {
    name: "Halibut",
    ingredients: [
      "2 fileta halibuta (oko 150-200g svaki)",
      "2 kašike maslinovog ulja",
      "1 limun, sok i korica",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice sušenog origana",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za dekoraciju)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Obložite pleh za pečenje papirom za pečenje.",
      "U maloj posudi pomešajte maslinovo ulje, limunov sok, koricu limuna, beli luk u prahu, origano, so i biber.",
      "Stavite filete halibuta na pripremljeni pleh.",
      "Prelijte ribu mešavinom ulja i začina.",
      "Pecite u zagrejanoj rerni 12-15 minuta, ili dok riba ne bude lako rastavljiva viljuškom.",
      "Ukrasite svežim peršunom pre serviranja."
    ],
    prepTime: "5 minuta",
    cookTime: "15 minuta",
    servings: 2
  },
  "Swordfish": {
    name: "Swordfish",
    ingredients: [
      "2 odreska sabljarke (oko 150g svaki)",
      "2 kašike maslinovog ulja",
      "1 limun (sok i izrendana korica)",
      "1 čen belog luka, sitno iseckan",
      "1 kašika svežeg peršuna, sitno iseckanog",
      "So i biber po ukusu"
    ],
    instructions: [
      "Odreske isperite i osušite papirnim ubrusom.",
      "U maloj posudi pomešajte maslinovo ulje, sok od limuna, izrendanu koricu limuna, iseckani beli luk, peršun, so i biber.",
      "Prelijte odreske sabljarke marinadom i ostavite da odstoje najmanje 15 minuta (ili do 30 minuta u frižideru).",
      "Zagrejte roštilj ili tiganj na srednje jakoj vatri.",
      "Stavite odreske na roštilj ili u tiganj i pecite 4-5 minuta sa svake strane, ili dok riba ne postane neprozirna i lako se raspada viljuškom.",
      "Poslužite odmah, preliveno preostalom marinadom (ako je ima) i ukrašeno dodatnim peršunom i kriškom limuna."
    ],
    prepTime: "10 minuta",
    cookTime: "10 minuta",
    servings: 2
  },
  "Fish Tacos": {
    name: "Fish Tacos",
    ingredients: [
      "400g fileta bele ribe (bakalar, tilapija ili oslić), isečenog na komade veličine zalogaja",
      "1 kašika maslinovog ulja",
      "1 kašičica čili praha",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice kumina",
      "So i biber po ukusu",
      "8 malih tortilja od kukuruza ili brašna",
      "2 šolje iseckanog kupusa",
      "1/2 crvenog luka, tanko isečenog",
      "1/4 šolje svežeg korijandera, iseckanog",
      "1 avokado, isečen na kriške",
      "Limeta, isečena na kriške, za serviranje",
      "1/2 šolje grčkog jogurta ili pavlake",
      "2 kašike majoneza",
      "1 kašika soka od limete",
      "1/4 kašičice belog luka u prahu",
      "Prstohvat čili praha"
    ],
    instructions: [
      "U činiji pomešajte maslinovo ulje, čili prah, beli luk u prahu, kumin, so i biber. Ubacite komade ribe i dobro promešajte da se riba obloži začinima.",
      "Zagrejte tiganj na srednjoj vatri. Pecite ribu 3-4 minuta sa svake strane, dok ne postane zlatno smeđa i lako se raspada viljuškom.",
      "U maloj činiji pomešajte grčki jogurt (ili pavlaku), majonez, sok od limete, beli luk u prahu, čili prah, so i biber.",
      "Ugrejte tortilje na suvom tiganju ili u mikrotalasnoj pećnici.",
      "Na svaku tortilju stavite iseckan kupus, crveni luk, komade pečene ribe, kašiku sosa, avokado i korijander.",
      "Poslužite takose odmah sa kriškama limete sa strane."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },
  "Fish Curry": {
    name: "Fish Curry",
    ingredients: [
      "500g fileta bele ribe (npr. bakalar, oslić), isečenog na komade",
      "2 kašike biljnog ulja",
      "1 veliki luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 komadić đumbira (oko 2cm), izrendan",
      "1-2 zelene čili papričice, sitno iseckane (po ukusu)",
      "2 kašičice kari praha",
      "1 kašičica kurkume",
      "1/2 kašičice mlevenog kumina",
      "400ml kokosovog mleka",
      "400g seckanog paradajza iz konzerve",
      "1 kašičica šećera",
      "Sok od pola limuna",
      "Sveži korijander, iseckan (za posipanje)",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikom tiganju ili šerpi zagrejte ulje na srednjoj vatri.",
      "Dodajte luk i pržite dok ne omekša i postane staklast, oko 5 minuta.",
      "Dodajte beli luk, đumbir i čili papričice i pržite još 1 minut, dok ne zamiriše.",
      "Umešajte kari prah, kurkumu i kumin i pržite još 1 minut, mešajući konstantno.",
      "Dodajte kokosovo mleko, seckani paradajz, šećer, so i biber. Promešajte i dovedite do ključanja.",
      "Smanjite vatru i ostavite da se krčka 10 minuta, povremeno mešajući.",
      "Dodajte komade ribe u sos. Pažljivo ih rasporedite i kuvajte dok riba ne bude skroz kuvana i lako se raspada viljuškom, oko 5-7 minuta.",
      "Umešajte sok od limuna.",
      "Poslužite toplo, posuto svežim korijanderom. Uz kari možete poslužiti kuvani pirinač ili naan hleb."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4
  },
  "Baked Fish": {
    name: "Baked Fish",
    ingredients: [
      "4 fileta bele ribe (npr. bakalar, oslić, list)",
      "1 limun",
      "2 kašike maslinovog ulja",
      "1 čen belog luka, sitno iseckan",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog timijana",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za dekoraciju, opciono)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Pripremite pleh za pečenje i blago ga nauljite maslinovim uljem.",
      "Filete ribe osušite papirnim ubrusom i stavite ih u pleh.",
      "U maloj posudi pomešajte maslinovo ulje, iseckani beli luk, origano, timijan, so i biber.",
      "Ovom smesom premažite filete ribe.",
      "Limun isecite na tanke kriške i stavite ih preko ribe.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok riba ne postane neprozirna i lako se odvaja viljuškom.",
      "Ukrasite svežim peršunom pre služenja (opciono)."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Smoked Salmon": {
    name: "Smoked Salmon",
    ingredients: [
      "200g dimljenog lososa, tanko narezanog",
      "1 limun, isečen na kriške",
      "1 kašika svežeg kopra, sitno iseckanog (opciono)",
      "Crni biber, sveže mleveni (po ukusu)"
    ],
    instructions: [
      "Izvadite dimljeni losos iz pakovanja.",
      "Rasporedite narezani losos na tanjir za serviranje.",
      "Ukrasite tanjir kriškama limuna.",
      "Pospite iseckanim koprom (ako koristite).",
      "Sveže sameljite crni biber po lososu po ukusu.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: 4
  },
  "Fish Cakes": {
    name: "Fish Cakes",
    ingredients: [
      "500g fileta bele ribe (npr. bakalar, oslić)",
      "1 srednji krompir, kuvan i izgnječen",
      "1/4 šolje seckanog svežeg peršuna",
      "2 kašike majoneza",
      "1 jaje, umućeno",
      "1/2 šolje prezli",
      "1 kašičica limunovog soka",
      "So i biber, po ukusu",
      "Ulje za prženje"
    ],
    instructions: [
      "Ribu skuvati (kuvanje na pari ili u vodi) dok ne bude skroz gotova. Ocediti i ostaviti da se ohladi.",
      "Ohlađenu ribu izmrviti viljuškom u većoj posudi.",
      "Dodati izgnječeni krompir, peršun, majonez, jaje, limunov sok, so i biber. Dobro izmešati.",
      "Umešati 1/4 šolje prezli u smesu od ribe.",
      "Oblikovati smesu u 4 pljeskavice.",
      "Uvaljati pljeskavice u preostale prezle, tako da budu potpuno prekrivene.",
      "U velikom tiganju zagrejati ulje na srednjoj vatri.",
      "Pržiti pljeskavice oko 5-7 minuta sa svake strane, dok ne postanu zlatno smeđe i hrskave.",
      "Ocediti višak ulja na papirnom ubrusu.",
      "Poslužiti toplo uz omiljeni sos ili prilog."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },
  "Ceviche": {
    name: "Ceviche",
    ingredients: [
      "500g sveže bele ribe (brancin, orada, list), isečene na kockice veličine 1cm",
      "1 crveni luk, tanko isečen",
      "1 crvena paprika, očišćena od semena i sitno iseckana",
      "1 zelena paprika, očišćena od semena i sitno iseckana",
      "1 sveži ljuti čili, sitno iseckan (po ukusu)",
      "1 šaka svežeg korijandera, grubo iseckan",
      "Sok od 8 limeta",
      "Sok od 2 pomorandže",
      "2 kašike maslinovog ulja",
      "So po ukusu",
      "Biber po ukusu",
      "Avokado (za serviranje, opciono)",
      "Tortilja čips (za serviranje, opciono)"
    ],
    instructions: [
      "U staklenoj posudi pomešajte iseckanu ribu, crveni luk, crvenu i zelenu papriku, i čili (ako koristite).",
      "Dodajte sok od limete i pomorandže. Uverite se da sok potpuno prekriva ribu.",
      "Dodajte maslinovo ulje, so i biber. Dobro promešajte.",
      "Pokrijte posudu i stavite u frižider da se marinira najmanje 15 minuta, ili do 30 minuta, dok riba ne postane neprozirna.",
      "Neposredno pre serviranja, dodajte iseckani korijander i promešajte.",
      "Servirajte odmah, uz kriške avokada i tortilja čips, po želji."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta (vreme mariniranja)",
    servings: 4
  },
  "Sashimi": {
    name: "Sashimi",
    description: "Sashimi je japansko jelo koje se sastoji od tanko narezanih sirovih komada ribe ili morskih plodova.",
    ingredients: [
      "200g svežeg fileta tune (sushi kvaliteta)",
      "100g svežeg fileta lososa (sushi kvaliteta)",
      "50 ml soja sosa",
      "1 kašičica vasabija u prahu",
      "1 kašičica vode (za vasabi)",
      "50g rendane daikon rotkve (opciono)",
      "List peršuna ili shiso listovi (za dekoraciju)"
    ],
    instructions: [
      "Proverite da li je riba izuzetno sveža i 'sushi kvaliteta'. Ako niste sigurni, kupite je u prodavnici koja je specijalizovana za prodaju sushi ribe.",
      "Nožem oštrim kao žilet, uklonite kožu i sve kosti sa fileta ribe.",
      "Ribu narežite na tanke kriške, debljine oko 5 mm. Krenite pod uglom od 45 stepeni.",
      "U maloj posudi pomešajte vasabi u prahu sa vodom dok ne dobijete pastu.",
      "Na tanjir poređajte kriške tune i lososa.",
      "Servirajte sashimi sa soja sosom, vasabijem i rendanom rotkvom. Ukrasite listovima peršuna ili shiso listovima."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 2
  },
  "Fish Stew": {
    name: "Fish Stew",
    ingredients: [
      "1 kg mešane ribe (oslić, som, šaran, itd.), očišćene i isečene na komade",
      "2 glavice crnog luka, sitno iseckane",
      "2 šargarepe, isečene na kolutove",
      "2 krompira, oljuštena i isečena na kockice",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, iseckana na kockice",
      "1 ljuta paprika (opciono), sitno iseckana",
      "2 paradajza, oljuštena i iseckana",
      "1 kašika aleve paprike",
      "1 kašičica mlevenog bibera",
      "1/2 kašičice kumina",
      "So po ukusu",
      "2 kašike ulja",
      "2 litra ribljeg bujona (ili voda)",
      "Sveži peršun, iseckan (za dekoraciju)"
    ],
    instructions: [
      "U velikoj šerpi zagrejte ulje na srednjoj vatri.",
      "Dodajte crni luk i dinstajte dok ne postane staklast, oko 5 minuta.",
      "Dodajte šargarepu, krompir, beli luk i papriku. Dinstajte još 5 minuta.",
      "Dodajte paradajz, alevu papriku, biber, kumin i so. Dobro promešajte.",
      "Ulijte riblji bujon (ili vodu) i pustite da provri.",
      "Smanjite vatru i kuvajte poklopljeno 20 minuta, ili dok povrće ne omekša.",
      "Dodajte komade ribe i kuvajte još 15-20 minuta, ili dok riba ne bude gotova.",
      "Probajte i po potrebi dodajte još soli ili bibera.",
      "Poslužite toplo, ukrašeno svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 4
  },
  "Grilled Tuna": {
    name: "Grilled Tuna",
    ingredients: [
      "2 tuna steaks (oko 200g svaki)",
      "2 kašike maslinovog ulja",
      "1 limun (sok i rendana korica)",
      "1 kašičica mlevene crvene paprike",
      "1/2 kašičice belog luka u prahu",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za garniranje)"
    ],
    instructions: [
      "U maloj posudi pomešajte maslinovo ulje, sok i koricu limuna, mlevenu crvenu papriku, beli luk u prahu, so i biber.",
      "Stavite tuna steaks u plitku posudu i prelijte marinadom. Utrljajte marinadu u ribu. Ostavite da se marinira 10-15 minuta.",
      "Zagrejte roštilj na srednje jaku temperaturu.",
      "Izvadite tuna steaks iz marinade i stavite ih na vreli roštilj.",
      "Pecite 3-4 minuta sa svake strane, ili dok tuna ne bude pečena po vašem ukusu (sredina bi trebala da ostane blago roza).",
      "Skinite tuna steaks sa roštilja i ostavite da odstoje nekoliko minuta pre serviranja.",
      "Poslužite toplo, posuto svežim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "8 minuta",
    servings: 2
  },

  "Shepherd's Pie": {
    name: "Shepherd's Pie",
    ingredients: [
      "1 kg mlevene jagnjetine (ili govedine)",
      "1 veliki luk, sitno iseckan",
      "2 šargarepe, iseckane na kockice",
      "2 stabljike celera, iseckane na kockice",
      "2 čena belog luka, sitno iseckana",
      "2 kašike paradajz pirea",
      "500 ml goveđe supe",
      "1 kašičica sušenog ruzmarina",
      "1 kašičica sušenog timijana",
      "150 g smrznutog graška",
      "1 kg krompira",
      "100 g putera",
      "150 ml mleka ili pavlake",
      "So i biber po ukusu",
      "Malo rendanog čedar sira (opciono)",
      "2 kašike maslinovog ulja"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U velikom tiganju, na srednjoj vatri, zagrejte maslinovo ulje. Dodajte mleveno meso i pržite dok ne porumeni, razbijajući ga viljuškom. Iscedite višak masnoće.",
      "Dodajte luk, šargarepu i celer u tiganj i dinstajte dok povrće ne omekša, oko 5-7 minuta.",
      "Dodajte beli luk i dinstajte još 1 minut.",
      "Umešajte paradajz pire, ruzmarin i timijan.",
      "Ulijte goveđu supu i pustite da provri. Smanjite vatru i kuvajte na tihoj vatri 20 minuta, dok se sos ne zgusne.",
      "Umešajte smrznuti grašak. Posolite i pobiberite po ukusu.",
      "Dok se meso kuva, pripremite pire od krompira. Oljuštite krompir i isecite ga na kockice. Stavite u lonac sa hladnom vodom, posolite i pustite da provri. Kuvajte dok krompir ne omekša, oko 15-20 minuta.",
      "Procedite krompir i vratite ga u lonac. Dodajte puter i mleko/pavlaku i izgnječite dok ne dobijete gladak pire. Posolite i pobiberite po ukusu.",
      "Prebacite smesu od mesa u posudu za pečenje.",
      "Preko mesa ravnomerno rasporedite pire od krompira.",
      "Ako želite, pospite rendanim čedar sirom.",
      "Pecite u zagrejanoj rerni 20-25 minuta, dok pire ne porumeni.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "60 minuta",
    servings: 6
  },
  "Goulash": {
    name: "Goulash",
    ingredients: [
      "1.5 kg junećeg mesa (plećka ili vrat), isečenog na kockice od 2-3 cm",
      "2 velike glavice crnog luka, sitno iseckane",
      "2 kašike aleve paprike (slatka)",
      "1 kašika aleve paprike (ljuta, opciono)",
      "1 kašičica mlevenog kima",
      "1 kašičica majorana",
      "1 kašičica mlevenog korijandera",
      "2 čena belog luka, sitno iseckana",
      "500g paradajza iz konzerve (pelat ili pasirani paradajz)",
      "500ml juneće supe (ili voda)",
      "2 crvene paprike, isečene na kockice",
      "2 žute paprike, isečene na kockice",
      "4 srednja krompira, oljuštena i isečena na kockice",
      "2 kašike ulja ili svinjske masti",
      "So i biber po ukusu",
      "Kisela pavlaka ili grčki jogurt za serviranje (opciono)",
      "Sveži peršun, iseckan, za serviranje (opciono)"
    ],
    instructions: [
      "U velikom loncu ili šerpi sa debljim dnom zagrejte ulje ili mast na srednje jakoj vatri.",
      "Dodajte iseckano meso u lonac i propržite ga sa svih strana dok ne dobije lepu boju. Izvadite meso iz lonca i ostavite ga na stranu.",
      "U isti lonac dodajte iseckani crni luk i dinstajte ga dok ne omekša i postane staklast, oko 5-7 minuta.",
      "Dodajte aleve paprike (slatku i ljutu), kim, majoran, korijander i beli luk u lonac i dinstajte još 1 minut, dok ne zamiriše.",
      "Vratite meso u lonac. Dodajte paradajz iz konzerve i juneću supu (ili vodu).",
      "Promešajte, dovedite do ključanja, a zatim smanjite vatru, poklopite i kuvajte na laganoj vatri 2 sata ili dok meso ne postane veoma mekano.",
      "Nakon 2 sata, dodajte iseckane paprike i krompir u lonac. Promešajte.",
      "Nastavite da kuvate još 30-45 minuta, ili dok krompir i paprike ne omekšaju.",
      "Posolite i pobiberite po ukusu.",
      "Servirajte goulash toplo, ukrašeno kiselom pavlakom ili grčkim jogurtom i svežim peršunom, po želji."
    ],
    prepTime: "30 minuta",
    cookTime: "180 minuta",
    servings: 6
  },
  "Pierogi": {
    name: "Pierogi",
    ingredients: [
      "2 šolje brašna (plus za posipanje)",
      "1 jaje",
      "1/2 šolje tople vode",
      "1/4 šolje kisele pavlake",
      "1 kašičica soli",
      "2 kašike rastopljenog putera (opciono)",
      "500g krompira",
      "200g svežeg sira (neslanog)",
      "1 glavica crnog luka",
      "2 kašike putera ili ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno i so.",
      "Napraviti udubljenje u sredini i dodati jaje, vodu i pavlaku.",
      "Postepeno umešavati brašno dok se ne formira testo.",
      "Prebaciti testo na pobrašnjenu površinu i mesiti 5-7 minuta dok ne postane glatko i elastično.",
      "Uviti testo u plastičnu foliju i ostaviti da odstoji 30 minuta.",
      "Krompir skuvati dok ne omekša. Ocediti i izgnječiti.",
      "U tiganju otopiti puter ili zagrejati ulje, pa propržiti sitno iseckan crni luk dok ne postane staklast.",
      "Pomešati izgnječeni krompir, sir i proprženi luk. Začiniti solju i biberom po ukusu. Dobro promešati.",
      "Razvaljati testo na pobrašnjenoj površini na debljinu oko 3mm.",
      "Uzeti okruglu modlu ili čašu (prečnika oko 7-8 cm) i seći krugove od testa.",
      "Na svaki krug staviti kašičicu nadeva.",
      "Presaviti testo na pola i čvrsto pritisnuti ivice da se zatvore.",
      "Prokuvati veliku šerpu posoljene vode.",
      "Spuštati pieroge u vrelu vodu, u turama, pazeći da se ne pretrpaju.",
      "Kuvati dok ne isplivaju na površinu, a zatim još 2-3 minuta.",
      "Izvaditi pieroge rešetkastom kašikom i prebaciti u činiju."
    ],
    prepTime: "45 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Sauerkraut": {
    name: "Sauerkraut",
    ingredients: [
      "1 veliki glavica kupusa (oko 1.5-2 kg)",
      "2-3 kašike morske soli (bez joda)",
      "Opciono: seme kima, bobice kleke, lovorov list"
    ],
    instructions: [
      "Uklonite spoljašnje listove kupusa ako su oštećeni. Operite glavicu kupusa.",
      "Isecite kupus na četvrtine, uklonite tvrdi koren. Tanko narendajte ili isecite kupus.",
      "Stavite narendani kupus u veliku posudu. Posolite kupus sa morskom soli.",
      "Masirajte kupus rukama 5-10 minuta. Kupus će početi da ispušta tečnost.",
      "Dodajte seme kima, bobice kleke i/ili lovorov list (opciono).",
      "Prebacite kupus u čistu staklenu teglu. Dobro pritisnite kupus da se oslobodi vazduh i da se kupus prekrije tečnošću koju je pustio. Ako tečnost nije dovoljna, dodajte rastvor od 1 kašičice soli na 1 šolju vode (prokuvane i ohlađene).",
      "Stavite manji teg ili čistu kesu napunjenu vodom preko kupusa da ga drži ispod tečnosti.",
      "Pokrijte teglu krpom ili poklopcem koji nije hermetički zatvoren. Ostavite teglu na sobnoj temperaturi (18-24°C) 1-4 nedelje.",
      "Svakodnevno proveravajte kupus. Ako se pojavi pena, uklonite je. Kupus treba da bude uvek prekriven tečnošću.",
      "Nakon 1 nedelje probajte kupus. Nastavite fermentaciju dok ne postigne željeni ukus.",
      "Kada je kupus fermentiran po vašem ukusu, prebacite ga u frižider. Čuva se u frižideru nekoliko meseci."
    ],
    prepTime: "30 minuta",
    cookTime: "0 minuta (fermentacija 1-4 nedelje)",
    servings: 10
  },
  "Bratwurst": {
    name: "Bratwurst",
    ingredients: [
      "4 Bratwurst kobasice",
      "1 kašika maslinovog ulja",
      "1/2 glavice crnog luka, iseckane",
      "1/2 šolje piva ili pileće supe",
      "Zemičke za hot dog (opciono)",
      "Senf (opciono)",
      "Kiseli kupus (opciono)"
    ],
    instructions: [
      "Zagrejte maslinovo ulje u tiganju na srednjoj vatri.",
      "Dodajte iseckani crni luk i pržite dok ne postane staklast, oko 5 minuta.",
      "Dodajte Bratwurst kobasice u tiganj.",
      "Pržite kobasice, povremeno ih okrećući, dok ne porumene sa svih strana, oko 10 minuta.",
      "Smanjite vatru, sipajte pivo ili pileću supu u tiganj.",
      "Poklopite i ostavite da se krčka 5 minuta, dok tečnost skoro potpuno ne ispari.",
      "Poslužite Bratwurst u zemičkama za hot dog sa senfom i kiselim kupusom, po želji."
    ],
    prepTime: "5 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Coq au Vin": {
    name: "Coq au Vin",
    ingredients: [
      "1.5 kg pileta, isečenog na komade (bataci, karabatak, krilca, prsa)",
      "150 g dimljene slanine, isečene na kockice",
      "2 glavice crnog luka, iseckane",
      "2 šargarepe, isečene na kolutove",
      "250 g šampinjona, isečenih na četvrtine",
      "2 čena belog luka, sitno iseckana",
      "2 kašike brašna",
      "750 ml suvog crvenog vina (Burgundac je tradicionalan)",
      "500 ml pilećeg bujona",
      "1 lovorov list",
      "1 kašičica sušenog timijana",
      "1 kašika paradajz pirea",
      "2 kašike konjaka (opciono)",
      "So i biber po ukusu",
      "2 kašike ulja ili putera"
    ],
    instructions: [
      "Piletinu osušite papirnim ubrusima i obilno začinite solju i biberom.",
      "U velikom dubokom tiganju ili šerpi sa debelim dnom, zagrejte ulje ili puter na srednje jakoj vatri. Dodajte slaninu i pržite dok ne postane hrskava. Izvadite slaninu iz tiganja i ostavite sa strane.",
      "U tiganj dodajte piletinu u serijama (ne pretrpavajte) i pržite dok ne porumeni sa svih strana. Izvadite piletinu i ostavite sa strane.",
      "U tiganj dodajte luk i šargarepu i dinstajte dok ne omekšaju, oko 5-7 minuta. Dodajte beli luk i šampinjone i dinstajte još 3-5 minuta, dok šampinjoni ne puste tečnost i omekšaju.",
      "Pospite brašnom preko povrća i kuvajte, mešajući, 1 minut. Postepeno sipajte crveno vino, mešajući da razbijete sve grudvice. Dodajte pileći bujon, lovorov list, timijan i paradajz pire.",
      "Vratite piletinu i slaninu u tiganj. Tečnost treba da skoro pokrije piletinu. Ako nije, dodajte još bujona. Pustite da provri, a zatim smanjite vatru, poklopite i dinstajte 2-2.5 sata, ili dok piletina ne postane veoma mekana i lako se odvaja od kostiju.",
      "(Opciono) Neposredno pre serviranja, zagrejte konjak u maloj šerpi. Zapalite konjak (budite oprezni!) i sipajte ga preko piletine u tiganju. Sačekajte da plamen prestane.",
      "Uklonite lovorov list pre serviranja. Poslužite vruće sa pire krompirom, širokim rezancima ili hrskavim hlebom."
    ],
    prepTime: "30 minuta",
    cookTime: "150 minuta",
    servings: 6
  },
  "Bouillabaisse": {
    name: "Bouillabaisse",
    ingredients: [
      "2 kg različite bele ribe (npr. grdobina, list, škarpina), očišćene i isečene na komade",
      "500 g školjki (dagnje, vongole), očišćene",
      "250 g gambora ili škampa, očišćeni",
      "2 velika luka, sitno iseckana",
      "4 čena belog luka, sitno iseckana",
      "2 praziluka, samo beli deo, sitno iseckan",
      "4 paradajza, oljuštena i iseckana",
      "1 crvena paprika, očišćena i iseckana",
      "1 šargarepa, iseckana",
      "1 krompir, oljušten i iseckan na kocke",
      "1 l ribljeg temeljca",
      "200 ml suvog belog vina",
      "100 ml maslinovog ulja",
      "1 kašičica šafrana",
      "1 kašičica aleve paprike",
      "1 kašičica sušenog timijana",
      "1 lovorov list",
      "Svež peršun, iseckan",
      "So i biber po ukusu",
      "Baget, za serviranje"
    ],
    instructions: [
      "U velikom loncu ili šerpi zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte luk, beli luk i praziluk i dinstajte dok ne omekšaju, oko 5-7 minuta.",
      "Dodajte papriku, šargarepu i krompir. Nastavite sa dinstanjem još 5 minuta.",
      "Dodajte paradajz, alevu papriku, timijan i lovorov list. Kuvajte 10 minuta.",
      "Ulijte belo vino i pustite da prokuva, pa kuvajte dok se vino malo ne redukuje, oko 5 minuta.",
      "Ulijte riblji temeljac i dodajte šafran. Pustite da provri, a zatim smanjite vatru i kuvajte 30 minuta.",
      "Dodajte komade ribe u čorbu i kuvajte dok riba ne bude gotova, oko 5-7 minuta.",
      "Dodajte školjke i gambore. Kuvajte dok se školjke ne otvore, a gambori ne postanu roze, oko 5 minuta.",
      "Izvadite lovorov list.",
      "Posolite i pobiberite po ukusu.",
      "Poslužite vruću čorbu posutu sa svežim peršunom, uz kriške bageta."
    ],
    prepTime: "45 minuta",
    cookTime: "90 minuta",
    servings: 6
  },
  "Wiener Schnitzel": {
    name: "Wiener Schnitzel",
    ingredients: [
      "4 teleća šnicla (oko 150g svaki), debljine oko 5mm",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "1/2 šolje brašna",
      "2 velika jajeta, umućena",
      "1 1/2 šolje prezli (hlebnih mrvica), najbolje Panko",
      "1/2 šolje rastopljenog putera ili ulja za prženje",
      "Kriške limuna, za serviranje",
      "Sveži peršun, seckani (opciono)"
    ],
    instructions: [
      "Šnicle stavite između dva sloja plastične folije i istucite ih čekićem za meso dok ne budu tanke, oko 3-4mm debljine. Pazite da ih ne pocepate.",
      "Začinite šnicle solju i biberom sa obe strane.",
      "Pripremite tri tanjira: jedan sa brašnom, drugi sa umućenim jajima, a treći sa prezlama.",
      "Svaku šniclu prvo uvaljajte u brašno, obavezno uklonite višak brašna.",
      "Zatim, umočite šniclu u umućena jaja, tako da bude potpuno prekrivena.",
      "Na kraju, šniclu uvaljajte u prezle, pritiskajući ih da se dobro zalepe.",
      "U velikom tiganju, zagrejte puter ili ulje za prženje na srednje jakoj vatri. Ulje treba da bude dovoljno duboko da prekrije dno tiganja.",
      "Pržite šnicle 3-4 minuta sa svake strane, ili dok ne budu zlatno smeđe i hrskave. Pazite da ulje ne bude prevruće da šnicle ne izgore.",
      "Izvadite šnicle iz tiganja i stavite ih na papirni ubrus da se ocedi višak masnoće.",
      "Servirajte odmah sa kriškama limuna i opciono sa seckanim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },
  "Fondue": {
    name: "Fondue",
    ingredients: [
      "400g Gruyère sir, narendan",
      "400g Emmentaler sir, narendan",
      "1 čen belog luka, prepolovljen",
      "200 ml suvog belog vina",
      "2 kašičice kukuruznog skroba (gustina)",
      "2 kašike Kirsch (rakije od trešnje) ili sok od limuna",
      "Prstohvat muskatnog oraščića",
      "Crni biber, sveže mleveni, po ukusu",
      "Hleb, isečen na kockice",
      "Kuvano povrće (brokoli, karfiol, šargarepa)"
    ],
    instructions: [
      "Protrljati unutrašnjost posude za fondue (caquelon) prepolovljenim čenom belog luka.",
      "U posudu za fondue sipati belo vino i zagrejati na srednjoj vatri.",
      "Pomešati narendane sireve i postepeno ih dodavati u vino, mešajući neprekidno u obliku osmice (ili broj 8) da se sir ravnomerno topi.",
      "U maloj posudi pomešati kukuruzni skrob sa Kirschom (ili sokom od limuna) dok se ne dobije glatka smesa.",
      "Dodati smesu sa kukuruznim skrobom u topljeni sir i nastaviti sa mešanjem dok se fondue ne zgusne i postane gladak.",
      "Začiniti sa muskatnim oraščićem i crnim biberom po ukusu.",
      "Prebaciti posudu za fondue na gorionik (rešo) i podesiti temperaturu da fondue bude topao, ali ne da vri.",
      "Umakati kockice hleba ili kuvano povrće u fondue i uživati."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },
  "Risotto": {
    name: "Risotto",
    ingredients: [
      "300g arborio pirinča",
      "1 luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "120ml suvog belog vina",
      "1.2l vrele pileće ili povrtne supe",
      "60g putera",
      "60g parmezana, izrendanog",
      "2 kašike maslinovog ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj šerpi zagrejte maslinovo ulje na srednjoj vatri. Dodajte luk i beli luk, i pržite dok ne omekšaju, oko 5 minuta.",
      "Dodajte pirinač i mešajte 1-2 minuta, dok se pirinač ne obloži uljem.",
      "Ulijte belo vino i mešajte dok se vino ne upije.",
      "Dodajte kutlaču vrele supe u pirinač, mešajući stalno dok se supa ne upije. Nastavite da dodajete supu kutlaču po kutlaču, mešajući dok se svaka kutlača ne upije pre nego što dodate sledeću. Ovo će trajati oko 20 minuta.",
      "Kada je pirinač al dente (skuvan, ali još uvek čvrst), sklonite šerpu sa vatre.",
      "Umešajte puter i parmezan. Mešajte dok se puter ne otopi i sir ne sjedini sa rižotom.",
      "Začinite solju i biberom po ukusu."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4
  },
  "Osso Buco": {
    name: "Osso Buco",
    ingredients: [
      "4 komada teleće kolenice (osso buco), debljine oko 5cm",
      "2 kašike brašna",
      "So i biber",
      "4 kašike maslinovog ulja",
      "1 veliki crni luk, sitno iseckan",
      "2 šargarepe, sitno iseckane",
      "2 stabljike celera, sitno iseckane",
      "2 čena belog luka, sitno iseckana",
      "1 konzerva (400g) seckanog paradajza",
      "1 šolja suvog belog vina",
      "2 šolje goveđe supe ili bujona",
      "1 lovorov list",
      "Sveži peršun, sitno iseckan (za gremolatu)",
      "Limunova korica, narendana (za gremolatu)",
      "1 čen belog luka, sitno iseckan (za gremolatu)"
    ],
    instructions: [
      "U plitkom tanjiru pomešati brašno, so i biber. Uvaljati teleće kolenice u brašno, otresajući višak.",
      "U velikoj šerpi sa debelim dnom (ili Dutch oven) zagrejati maslinovo ulje na srednjoj vatri. Ispržiti teleće kolenice sa svih strana dok ne porumene. Izvaditi meso iz šerpe i ostaviti sa strane.",
      "U istu šerpu dodati iseckani crni luk, šargarepu i celer. Dinstati na srednjoj vatri dok povrće ne omekša, oko 5-7 minuta. Dodati iseckani beli luk i dinstati još minut.",
      "Vratiti teleće kolenice u šerpu. Dodati seckani paradajz, belo vino, goveđu supu i lovorov list. Pustiti da provri, zatim smanjiti vatru, poklopiti i dinstati na laganoj vatri 2.5-3 sata, ili dok meso ne postane veoma mekano i počne da se odvaja od kosti. Povremeno okretati kolenice tokom kuvanja.",
      "Dok se meso dinsta, pripremiti gremolatu. U maloj činiji pomešati sitno iseckani peršun, narendanu limunovu koricu i sitno iseckani beli luk.",
      "Kada je osso buco gotovo, izvaditi meso iz šerpe i ostaviti sa strane. Ukloniti lovorov list iz sosa. Sos možete ostaviti takav kakav je ili ga procediti i zgusnuti po želji.",
      "Poslužiti osso buco toplo, preliveno sosom i posuto gremolatom. Tradicionalno se servira sa rižotom alla milanese."
    ],
    prepTime: "20 minuta",
    cookTime: "180 minuta",
    servings: 4
  },
  "Cassoulet": {
    name: "Cassoulet",
    ingredients: [
      "500g suvog belog pasulja (najbolje sorta 'Tarbes' ili 'Lingot')",
      "250g suve slanine, iseckane",
      "2 glavice crnog luka, iseckane",
      "4 čena belog luka, izgnječena",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "400g paradajz pelata, iz konzerve",
      "1 kašika paradajz pirea",
      "250ml suve pileće supe",
      "250ml suve pileće supe ili vode",
      "200g svinjske masti ili maslinovog ulja",
      "600g svinjske plećke, isečene na kocke od 5cm",
      "400g dimljenih svinjskih kobasica (Toulouse kobasice su idealne), isečene na komade od 5cm",
      "400g pačjih konfita (opciono, ili zamena sa pilećim batacima)",
      "1 lovorov list",
      "1 kašičica sušenog timijana",
      "So i biber po ukusu",
      "Sveže iseckani peršun, za posluživanje"
    ],
    instructions: [
      "Pasulj potopiti u hladnu vodu preko noći. Sutradan ga ocediti i isprati.",
      "U velikom loncu ili šerpi, propržiti slaninu dok ne postane hrskava. Izvaditi slaninu i ostaviti sa strane, a mast ostaviti u loncu.",
      "U loncu sa mašću od slanine, dinstati crni luk, šargarepu i celer dok ne omekšaju, oko 10 minuta. Dodati beli luk i dinstati još minut.",
      "Dodati paradajz pelat, paradajz pire, lovorov list i timijan. Kuvati 5 minuta.",
      "Dodati pasulj i pileću supu. Pustiti da provri, zatim smanjiti vatru, poklopiti i kuvati 1.5-2 sata, ili dok pasulj ne omekša, ali da se ne raspadne. Povremeno promešati i dodati još tečnosti ako je potrebno.",
      "U tiganju, na svinjskoj masti ili maslinovom ulju, propržiti svinjsku plećku dok ne porumeni sa svih strana. Začiniti solju i biberom. Izvaditi meso iz tiganja i ostaviti sa strane.",
      "U istom tiganju propržiti kobasice dok ne porumene. Izvaditi ih iz tiganja i ostaviti sa strane.",
      "Ako koristite pačje konfite, zagrejati ih u rerni na 180°C (350°F) dok se koža ne zagreje i postane hrskava.",
      "Izvaditi lovorov list iz pasulja. U veliki zemljani lonac ili posudu za pečenje, staviti sloj pasulja, zatim sloj mesa (svinjetina, kobasice, pačji konfit), i na kraju pokriti ostatkom pasulja. Posuti sa hrskavom slaninom.",
      "Peći u rerni zagrejanoj na 150°C (300°F) 1.5-2 sata, ili dok vrh ne porumeni i postane hrskav. Ako vrh prebrzo potamni, pokriti folijom.",
      "Izvaditi iz rerne i ostaviti da se ohladi 10-15 minuta pre služenja. Posuti svežim peršunom."
    ],
    prepTime: "45 minuta",
    cookTime: "240 minuta",
    servings: 6
  },
  "Beef Bourguignon": {
    name: "Beef Bourguignon",
    ingredients: [
      "1.5 kg goveđe plećke, isečene na kocke veličine 3-4 cm",
      "2 kašike maslinovog ulja",
      "170 g slanine, isečene na kockice",
      "1 veliki crni luk, iseckan",
      "2 šargarepe, isečene na kolutove",
      "2 čena belog luka, sitno iseckana",
      "2 kašike brašna",
      "750 ml suvog crvenog vina (burgundac je idealan)",
      "500 ml goveđe supe",
      "1 kašika paradajz pirea",
      "1 lovorov list",
      "1/2 kašičice sušenog timijana",
      "250 g šampinjona, prepolovljenih ili isečenih na četvrtine",
      "20 g putera",
      "Peršun, seckan, za dekoraciju",
      "So i biber, po ukusu"
    ],
    instructions: [
      "Zagrejte maslinovo ulje u velikoj šerpi ili Dutch oven-u na srednjoj vatri.",
      "Posolite i pobiberite govedinu, pa je u serijama propržite dok ne porumeni sa svih strana. Izvadite meso i ostavite sa strane.",
      "U istoj šerpi propržite slaninu dok ne postane hrskava. Izvadite slaninu i ostavite sa strane.",
      "Dodajte crni luk i šargarepu u šerpu i dinstajte dok ne omekšaju, oko 5-7 minuta. Dodajte beli luk i dinstajte još 1 minut.",
      "Pospite povrće brašnom i kuvajte 1 minut, mešajući.",
      "Postepeno ulijte crveno vino, stružući dno šerpe kako biste uklonili sve zalepljene komadiće. Dodajte goveđu supu, paradajz pire, lovorov list i timijan.",
      "Vratite meso i slaninu u šerpu. Pustite da provri, zatim smanjite vatru, poklopite i dinstajte 3-3.5 sata, ili dok meso ne postane mekano.",
      "U međuvremenu, dok se meso dinsta, rastopite puter u tiganju na srednjoj vatri. Dodajte šampinjone i pržite ih dok ne porumene i omekšaju, oko 5-7 minuta.",
      "U poslednjih 30 minuta kuvanja, dodajte pržene šampinjone u šerpu sa govedinom.",
      "Izvadite lovorov list pre serviranja.",
      "Poslužite toplo, posuto seckanim peršunom. Idealno se služi uz pire krompir, testeninu ili hleb."
    ],
    prepTime: "30 minuta",
    cookTime: "210 minuta",
    servings: 6
  },
  "Bangers and Mash": {
    name: "Bangers and Mash",
    ingredients: [
      "4 engleske kobasice (svinjske ili goveđe)",
      "500g krompira, oljuštenog i isečenog na kockice",
      "50ml mleka",
      "25g putera",
      "1 veliki luk, isečen na tanke kolutove",
      "1 kašika ulja",
      "2 kašike brašna",
      "300ml goveđe supe",
      "So i biber po ukusu",
      "Sveži peršun (opciono, za dekoraciju)"
    ],
    instructions: [
      "Stavite krompir u veliki lonac i prelijte hladnom vodom. Pustite da provri, a zatim smanjite vatru i kuvajte 15-20 minuta, ili dok krompir ne omekša.",
      "Dok se krompir kuva, zagrejte tiganj na srednjoj vatri. Dodajte kobasice i pecite 15-20 minuta, okrećući ih s vremena na vreme, dok ne dobiju zlatno-smeđu boju i budu potpuno pečene.",
      "U drugom tiganju, zagrejte ulje na srednjoj vatri. Dodajte luk i pržite 5-7 minuta, dok ne omekša i dobije zlatnu boju. Pospite brašnom i promešajte. Kuvajte 1 minut. Postepeno dodajte goveđu supu, mešajući neprestano, da biste izbegli grudvice. Pustite da provri, a zatim smanjite vatru i kuvajte 5 minuta, ili dok se sos ne zgusne. Začinite solju i biberom po ukusu.",
      "Kada je krompir skuvan, ocedite ga i vratite u lonac. Dodajte mleko i puter. Izgnječite krompir dok ne dobijete glatku smesu. Začinite solju i biberom po ukusu.",
      "Podelite pire krompir u dva tanjira. Preko pirea stavite po dve kobasice. Prelijte sosom od luka. Ukrasite svežim peršunom (ako koristite)."
    ],
    prepTime: "10 minuta",
    cookTime: "25 minuta",
    servings: 2
  },
  "Haggis": {
    name: "Haggis",
    ingredients: [
      "1 ovčiji želudac, očišćen",
      "500g ovčijih pluća i srca",
      "250g ovčije masti (loj), sitno iseckane",
      "2 velika luka, sitno iseckana",
      "250g ovsene kaše (grubo mlevena)",
      "1 kašičica soli",
      "1 kašičica crnog bibera",
      "1/2 kašičice aleve paprike",
      "1/2 kašičice suvog majorana",
      "500ml ovčije čorbe (ili vode)"
    ],
    instructions: [
      "Dobro operite ovčiji želudac u hladnoj vodi, okrenite ga i ponovo operite. Potopite ga u slanu vodu preko noći.",
      "Stavite pluća i srce u veliki lonac sa hladnom vodom. Prokuvajte, a zatim smanjite vatru i kuvajte 2 sata, ili dok ne omekšaju.",
      "Izvadite pluća i srce iz vode i ostavite da se ohlade. Sačuvajte tečnost u kojoj su se kuvali (ovčija čorba).",
      "Kada su se pluća i srce ohladili, sameljite ih (može i ručno seckanjem na veoma sitne komadiće).",
      "U velikoj posudi pomešajte mlevena pluća i srce, loj, luk, ovsenu kašu, so, biber, alevu papriku i majoran.",
      "Dodajte dovoljno ovčije čorbe da se dobije vlažna, ali ne i tečna smesa.",
      "Napunite ovčiji želudac smesom, ostavljajući dovoljno prostora za širenje (oko trećine prazno). Čvrsto zašijte otvor.",
      "Stavite napunjeni želudac u veliki lonac sa kipućom vodom.",
      "Smanjite vatru i kuvajte 3-4 sata, pazeći da voda uvek prekriva haggis. Možda ćete morati da dodate još vode tokom kuvanja.",
      "Pažljivo izvadite haggis iz vode."
    ],
    prepTime: "30 minuta",
    cookTime: "240 minuta",
    servings: 6
  },

  // Japan (Japanska kuhinja) - additional recipes


  "Tonkatsu": {
    name: "Tonkatsu",
    description: "Hrskavi pohovani svinjski kotleti, japanski klasik.",
    ingredients: [
      "4 svinjska kotleta (oko 150g svaki)",
      "1/2 kašičice soli",
      "1/4 kašičice crnog bibera",
      "1/2 šolje brašna",
      "1 jaje, umućeno",
      "1 šolja panko mrvica",
      "Ulje za prženje"
    ],
    instructions: [
      "Svinjske kotlete istanjiti čekićem za meso na debljinu oko 1 cm.",
      "Začiniti kotlete sa soli i biberom.",
      "Pripremiti tri posude: jednu sa brašnom, drugu sa umućenim jajetom, i treću sa panko mrvicama.",
      "Uvaljati svaki kotlet prvo u brašno, zatim u umućeno jaje, i na kraju u panko mrvice, pazeći da budu potpuno prekriveni.",
      "U dubljem tiganju zagrejati ulje na srednjoj temperaturi (oko 175°C).",
      "Pažljivo spuštati kotlete u vruće ulje, jedan po jedan, izbegavajući prenatrpavanje tiganja.",
      "Pržiti kotlete 3-4 minuta sa svake strane, ili dok ne dobiju zlatno-smeđu boju i budu pečeni iznutra.",
      "Izvaditi kotlete iz ulja i staviti ih na papirni ubrus da se ocede od viška masnoće.",
      "Služiti odmah, sa seckanim kupusom, pirinčem i tonkatsu sosom."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Bento": {
    name: "Bento",
    description: "Ručak u kutiji, savršen za poneti. Fleksibilan recept sa raznim mogućnostima.",
    ingredients: [
      "1 šolja kuvanog pirinča",
      "100g pilećeg filea, isečenog na kockice",
      "1/2 šargarepe, isečene na tanke štapiće",
      "1/4 brokolija, isečenog na cvetiće",
      "1 jaje",
      "1 kašika soja sosa",
      "1 kašičica meda",
      "1 kašičica susamovog ulja",
      "So i biber po ukusu",
      "Susam za posipanje (opciono)"
    ],
    instructions: [
      "Skuvati pirinač prema uputstvima na pakovanju. Ostaviti sa strane.",
      "U činiji pomešati soja sos, med i susamovo ulje.",
      "Pileće kockice preliti polovinom smese soja sosa i ostaviti da se mariniraju 10 minuta.",
      "U tiganju zagrejati malo ulja i propržiti piletinu dok ne porumeni i bude pečena. Izvaditi iz tiganja i ostaviti sa strane.",
      "U istom tiganju kratko propržiti šargarepu i brokoli dok ne omekšaju, ali da ostanu hrskave.",
      "Umutiti jaje sa malo soli i bibera. Ispeći omlet u tankom sloju i iseći na trakice.",
      "U bento kutiju staviti pirinač kao osnovu.",
      "Dodati piletinu, šargarepu, brokoli i trakice omleta.",
      "Preliti preostalom smesom soja sosa.",
      "Posuti susamom (opciono)."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 1
  },

  "Onigiri": {
    name: "Onigiri",
    description: "Japanski pirinač u obliku trougla ili diska, često sa slanim punjenjem.",
    ingredients: [
      "2 šolje japanskog pirinča (sushi pirinač)",
      "2 1/2 šolje vode",
      "1 kašika pirinčanog sirćeta",
      "1/2 kašičice šećera",
      "1/4 kašičice soli",
      "6 nori listova (alga)",
      "Punjenje po izboru (npr. umeboshi šljive, tunjevina sa majonezom, losos)"
    ],
    instructions: [
      "Dobro isperite pirinač pod hladnom vodom dok voda ne postane bistra.",
      "U šerpu stavite pirinač i vodu. Pustite da proključa, zatim smanjite vatru na minimum, poklopite i kuvajte 20 minuta.",
      "Skinite sa vatre i ostavite poklopljeno 10 minuta.",
      "U maloj posudi pomešajte pirinčano sirće, šećer i so.",
      "Prebacite pirinač u veliku posudu i dodajte smesu sa sirćetom. Nežno promešajte da se sjedini.",
      "Navlažite ruke hladnom vodom. Uzmite oko 1/3 šolje pirinča i stavite na dlan.",
      "Napravite udubljenje u sredini pirinča i stavite malo punjenja po izboru.",
      "Oblikujte pirinač u trougao ili disk, čvrsto ga stežući da se ne raspadne.",
      "Isecite nori listove na trake širine oko 2 cm.",
      "Umotajte donji deo onigirija sa nori trakom.",
      "Ponavljajte korake 6-10 dok ne potrošite sav pirinač."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 6
  },

  "Takoyaki": {
    name: "Takoyaki",
    description: "Ukusan japanski zalogaj, loptice od testa punjene komadićima hobotnice.",
    ingredients: [
      "1 šolja brašna (glatko)",
      "1 kašičica praška za pecivo",
      "1/2 kašičice soli",
      "2 jaja",
      "2 1/2 šolje dashi bujona (ili pilećeg bujona)",
      "1 kašika soja sosa",
      "1 kašika mirina (opciono)",
      "150g kuvane hobotnice, isečene na kockice veličine 1cm",
      "1/4 šolje kiseli crveni đumbir (beni shoga), iseckan",
      "1/4 šolje zelenog luka, iseckan",
      "1/4 šolje tenkasu (mrvice od tempure, opciono)",
      "Biljno ulje, za podmazivanje takoyaki tiganja",
      "Takoyaki sos",
      "Japanski majonez (Kewpie)",
      "Aonori (sušene alge u prahu)",
      "Katsuobushi (listići sušenog tunja)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte brašno, prašak za pecivo i so.",
      "U drugoj posudi, umutite jaja, dashi bujon, soja sos i mirin (ako koristite).",
      "Polako ulijte mokre sastojke u suve, mešajući dok se sve dobro ne sjedini. Pazite da ne premesite.",
      "Zagrejte takoyaki tiganj na srednjoj vatri. Dobro ga premažite biljnim uljem.",
      "U svaki otvor tiganja ulijte testo do vrha.",
      "U svaki otvor stavite nekoliko komadića hobotnice, kiseli đumbir, zeleni luk i tenkasu (ako koristite).",
      "Kada se donja strana počne peći (oko 2-3 minuta), koristite štapiće ili mali ražnjić da okrenete takoyaki za 90 stepeni.",
      "Nastavite da ih okrećete dok ne dobiju okrugao oblik i zlatno-smeđu boju sa svih strana (ukupno oko 15-20 minuta).",
      "Izvadite takoyaki iz tiganja i stavite ih na tanjir.",
      "Prelijte ih takoyaki sosom, japanskim majonezom, pospite aonori i katsuobushi.",
      "Poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Okonomiyaki": {
    name: "Okonomiyaki",
    description: "Japanska slana palacinka sa kupusom i raznim prelivima.",
    ingredients: [
      "150g brasna",
      "1/2 kasicice praska za pecivo",
      "1/4 kasicice soli",
      "180ml dashi bujona (ili vode)",
      "2 jajeta",
      "300g kupusa, tanko naseckanog",
      "100g svinjske slanine, tanko isecene (ili tofu za vegetarijansku verziju)",
      "2 mlada luka, tanko isecena",
      "Biljno ulje za przenje",
      "Okonomiyaki sos (ili Worchestershire sos)",
      "Japanski majonez (Kewpie)",
      "Aonori (susene alge u prahu)",
      "Katsuobushi (suseni listici tune)",
      "Ukiseljeni djumbir (beni shoga), opciono"
    ],
    instructions: [
      "U velikoj posudi pomesajte brasno, prasak za pecivo i so.",
      "Dodajte dashi bujon i jaja. Umutite dok ne dobijete glatku smesu.",
      "U smesu dodajte naseckani kupus i mladi luk. Dobro promesajte da se sve sjedini.",
      "Zagrejte malo biljnog ulja u velikom tiganju ili na resetki za rostilj (ako je imate).",
      "Izlijte polovinu smese u tiganj i rasporedite je u krug debljine oko 1 cm.",
      "Preko smese stavite polovinu tanko isecene slanine (ili tofu).",
      "Pecite 5-7 minuta sa jedne strane, dok ne postane zlatno braon i dok se smesa ne stegne.",
      "Pazljivo okrenite okonomiyaki i pecite jos 5-7 minuta sa druge strane, dok slanina ne postane hrskava i dok je palacinka pecena.",
      "Ponovite postupak sa ostatkom smese i slanine.",
      "Prebacite okonomiyaki na tanjir.",
      "Prelijte okonomiyaki sosom, japanskim majonezom, pospite aonorijem i katsuobushijem. Dodajte ukiseljeni djumbir, po zelji.",
      "Posluzite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Katsu Curry": {
    name: "Katsu Curry",
    description: "Hrskava pohovana svinjetina ili piletina u kremastom kari sosu.",
    ingredients: [
      "4 svinjska šnicle ili pileća prsa (oko 150g svaka)",
      "1 šolja brašna",
      "2 jajeta, umućena",
      "2 šolje panko prezli",
      "So i biber po ukusu",
      "Ulje za prženje",
      "2 kašike ulja",
      "1 srednji luk, iseckan",
      "2 šargarepe, iseckane",
      "2 krompira, iseckana na kockice",
      "2 čena belog luka, sitno iseckana",
      "1 kašika rendanog đumbira",
      "4 šolje pilećeg ili povrtnog bujona",
      "2 kašike soja sosa",
      "1 kašika meda ili šećera",
      "1-2 kašike kari praha (u zavisnosti od jačine)",
      "1 jabuka, izrendana",
      "2 kašike brašna (za zgusnjavanje)",
      "4 šolje kuvanog pirinča"
    ],
    instructions: [
      "Šnicle ili pileća prsa istanjiti na debljinu od oko 1cm. Posoliti i pobiberiti.",
      "Priprema za pohovanje: Pripremiti tri tanjira. U jedan staviti brašno, u drugi umućena jaja, a u treći panko prezle.",
      "Svaku šniclu ili pileće prso uvaljati prvo u brašno, zatim u umućena jaja, pa na kraju u panko prezle, pazeći da budu potpuno prekrivene.",
      "U dubokom tiganju ili fritezi zagrejati ulje na srednjoj temperaturi. Pržiti pohovane šnicle ili pileća prsa dok ne dobiju zlatno-braon boju i budu pečeni iznutra (oko 4-5 minuta sa svake strane).",
      "Ocediti na papirnom ubrusu.",
      "U velikom loncu zagrejati ulje na srednjoj vatri. Dodati luk, šargarepu i krompir i dinstati dok povrće ne omekša (oko 5-7 minuta).",
      "Dodati beli luk i đumbir i dinstati još minut.",
      "Dodati pileći ili povrtni bujon, soja sos, med/šećer, kari prah i izrendanu jabuku. Promešati i pustiti da provri.",
      "Smanjiti vatru i kuvati na tihoj vatri dok povrće ne omekša (oko 15-20 minuta).",
      "U manjoj posudi pomešati brašno sa malo hladne vode dok ne dobijete glatku smesu. Polako dodavati smesu brašna u sos, uz stalno mešanje, dok se sos ne zgusne do željene gustine.",
      "Posoliti i pobiberiti po ukusu.",
      "Servirati pirinač u činiji. Preko pirinča preliti kari sos.",
      "Iseći katsu na trake i poređati preko kari sosa."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 4
  },

  "Chirashi": {
    name: "Chirashi",
    description: "Razigrani tanjir pirinča sa ukusnom i šarenolikom mešavinom sirove ribe, povrća i jaja.",
    ingredients: [
      "1 šolja suši pirinča",
      "1 1/4 šolje vode",
      "3 kašike pirinčanog sirćeta",
      "2 kašike šećera",
      "1 kašičica soli",
      "100g svežeg lososa, isečenog na kockice",
      "100g sveže tune, isečene na kockice",
      "2 jaja",
      "1 kašika soja sosa",
      "1 kašičica mirina (ili šećera)",
      "1/2 krastavca, tanko isečenog",
      "2 rotkvice, tanko isečene",
      "2 mlada luka, tanko isečena",
      "2 lista nori alge, isečena na tanke trake",
      "Susam za posipanje",
      "Wasabi (po želji)"
    ],
    instructions: [
      "Dobro isperite suši pirinač dok voda ne postane bistra.",
      "Stavite pirinač i vodu u šerpu i pustite da provri.",
      "Smanjite vatru, poklopite i kuvajte 15 minuta, ili dok se sva voda ne upije.",
      "Sklonite sa vatre i ostavite da odstoji poklopljeno 10 minuta.",
      "U maloj posudi pomešajte pirinčano sirće, šećer i so. Mešajte dok se šećer i so ne rastvore.",
      "Prebacite pirinač u veliku činiju. Sipajte smesu sa sirćetom preko pirinča i nežno promešajte da se sjedini. Ostavite da se ohladi.",
      "Umutite jaja sa soja sosom i mirinom (ili šećerom).",
      "Zagrejte malu tiganj na srednjoj vatri.",
      "Sipajte jaja i kuvajte, povremeno mešajući, dok ne dobijete mekana kajgana (tamago). Isecite na tanke trake.",
      "Podelite pirinač u dve činije.",
      "Rasporedite losos, tunu, krastavac, rotkvice, mladi luk i tamago preko pirinča.",
      "Ukrasite nori algama i susamom.",
      "Poslužite sa wasabijem (po želji)."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 2
  },

  "Gyoza": {
    name: "Gyoza",
    description: "Male ukusne japanske knedle punjene mesom i povrćem.",
    ingredients: [
      "250g mlevene svinjetine",
      "1 šolja sitno iseckanog kupusa",
      "1/2 šolje sitno iseckanog mladog luka",
      "1 kašika rendanog đumbira",
      "2 čena belog luka, sitno iseckana",
      "1 kašika soja sosa",
      "1 kašika susamovog ulja",
      "1 kašičica šećera",
      "1/2 kašičice bele paprike",
      "So po ukusu",
      "200g brašna",
      "120ml tople vode",
      "2 kašike biljnog ulja",
      "1/2 šolje vode",
      "Soja sos",
      "Pirinćano sirće",
      "Ljuta ulja (opciono)"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno i toplu vodu. Mesite dok ne dobijete glatko testo. Formirajte loptu, prekrijte krpom i ostavite da odstoji 30 minuta.",
      "U velikoj posudi pomešajte mlevenu svinjetinu, kupus, mladi luk, đumbir, beli luk, soja sos, susamovo ulje, šećer, belu papriku i so. Dobro promešajte.",
      "Razvaljajte testo na tanko i isecite na male krugove (oko 7-8cm prečnika). Stavite kašičicu nadeva u sredinu svakog kruga. Navlažite ivice vodom. Preklopite testo na pola i čvrsto pritisnite ivice da se zatvore. Možete napraviti nabore na jednoj strani za dekorativni izgled.",
      "Zagrejte biljno ulje u velikom tiganju na srednjoj vatri. Poređajte gyoze u tiganj. Pecite ih dok ne porumene sa donje strane (oko 2-3 minuta). Dodajte vodu u tiganj, brzo poklopite i smanjite vatru. Kuvajte ih na pari dok voda ne ispari i gyoze ne budu skroz kuvane (oko 7-10 minuta).",
      "Poslužite gyoze tople sa umakom od soja sosa, pirinčanog sirćeta i ljutog ulja (ako koristite)."
    ],
    prepTime: "45 minuta",
    cookTime: "15 minuta",
    servings: 6
  },

  "Mochi": {
    name: "Mochi",
    description: "Japanska poslastica od slatkog pirinčanog brašna, mekana i žvakava.",
    ingredients: [
      "1 šolja slatkog pirinčanog brašna (glutinous rice flour)",
      "1 šolja vode",
      "1/2 šolje šećera",
      "Skrob od krompira ili kukuruzni skrob za posipanje"
    ],
    instructions: [
      "U velikoj posudi pomešajte slatko pirinčano brašno, vodu i šećer.",
      "Dobro promešajte dok se ne dobije glatka smesa bez grudvica.",
      "Pokrijte posudu plastičnom folijom i napravite nekoliko rupica da para može da izlazi.",
      "Kuvajte smesu u mikrotalasnoj pećnici na visokoj temperaturi 2 minuta.",
      "Izvadite posudu, promešajte smesu i vratite u mikrotalasnu na još 1-2 minuta, ili dok smesa ne postane providna i lepljiva.",
      "Obilno pospite radnu površinu skrobom od krompira ili kukuruznim skrobom.",
      "Izručite vrelu smesu mochi na radnu površinu posutu skrobom.",
      "Posipajte i vrh mochi smese skrobom.",
      "Ostavite da se malo ohladi, dovoljno da možete da rukujete.",
      "Podelite mochi na 12 jednakih delova.",
      "Oblikujte svaki deo u lopticu.",
      "Uvaljajte svaku lopticu u skrob kako se ne bi lepila.",
      "Poslužite odmah ili čuvajte u hermetički zatvorenoj posudi."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 12
  },

  "Dango": {
    name: "Dango",
    description: "Japanske knedle od pirinčanog brašna, često servirane na ražnjićima i prelivene slatkim sosom.",
    ingredients: [
      "1 šolja glutinoznog pirinčanog brašna (mochiko)",
      "1/4 šolje običnog pirinčanog brašna (ili još glutinoznog)",
      "1/2 šolje tople vode (ili više, po potrebi)",
      "1/2 šolje soja sosa",
      "1/2 šolje šećera",
      "2 kašike kukuruznog skroba",
      "1/2 šolje vode"
    ],
    instructions: [
      "U velikoj posudi, pomešajte glutinozno i obično pirinčano brašno.",
      "Postepeno dodajte toplu vodu, mešajući dok ne dobijete glatko testo. Testo treba da bude mekano i savitljivo, ali ne lepljivo. Dodajte još vode, po kašiku, ako je potrebno.",
      "Podelite testo na male komade (oko 1-2 cm u prečniku). Rukama oblikujte u male loptice.",
      "Prokuhajte vodu u šerpi.",
      "Lagano ubacite loptice u ključalu vodu. Kada isplivaju na površinu, kuvajte ih još 2-3 minuta.",
      "Izvadite loptice šupljikavom kašikom i odmah ih potopite u ledenu vodu da zaustavite kuvanje i da ostanu čvrste.",
      "Ostavite da se ohlade nekoliko minuta.",
      "Za sos: U maloj šerpi pomešajte soja sos, šećer, kukuruzni skrob i vodu.",
      "Kuvajte na srednjoj vatri, neprestano mešajući, dok se sos ne zgusne (oko 5 minuta).",
      "Izvadite dango iz ledene vode i osušite ih. Nanižite 3-4 loptice na ražnjić.",
      "Prelijte dango sosom i servirajte."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 6
  },

  "Matcha": {
    name: "Matcha",
    description: "Jednostavan recept za pripremu napitka od matche.",
    ingredients: [
      "1/2 - 1 kašičica matcha praha",
      "60 ml vruće vode (ne ključale, oko 80°C)",
      "240 ml mleka (kravljeg, bademovog, sojinog, itd.) ili vode, po želji",
      "Zaslađivač (med, agava, javorov sirup) po ukusu (opciono)"
    ],
    instructions: [
      "Prosejati matcha prah u šolju ili činiju kako bi se uklonile grudvice.",
      "Dodati vrelu vodu u matcha prah.",
      "Koristiti bambusovu metlicu (chasen) ili malu žicu za mućenje da se meša matcha i voda dok se ne formira glatka pasta bez grudvica. Mešati brzim pokretima u obliku slova 'W' ili 'M'.",
      "Ako se pravi latte, zagrejati mleko po želji (na ringli ili u mikrotalasnoj).",
      "Sipati umućenu matcha pastu u šolju ili čašu.",
      "Dodati zagrejano mleko (ili vodu) u šolju sa matchom.",
      "Zasladiti po ukusu, ako želite.",
      "Uživati!"
    ],
    prepTime: "2 minuta",
    cookTime: "1 minut",
    servings: 1
  },

  // International (Internacionalno)


  "International Pizza": {
    name: "Pizza",
    description: "Jednostavna i ukusna domaća pizza sa vašim omiljenim dodacima.",
    ingredients: [
      "350g brašna (tip 00 ili obično)",
      "7g suvog kvasca",
      "250ml tople vode",
      "1 kašičica šećera",
      "1 kašičica soli",
      "2 kašike maslinovog ulja",
      "400g pelata paradajza",
      "1 kašičica origana",
      "1/2 kašičice belog luka u prahu",
      "So i biber po ukusu",
      "1 kašika maslinovog ulja",
      "200g rendanog mocarela sira",
      "Dodaci po želji: šunka, pečurke, masline, paprika, feferoni"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno, suvi kvasac, šećer i so.",
      "Dodajte toplu vodu i maslinovo ulje. Mešajte dok se ne formira testo.",
      "Prebacite testo na pobrašnjenu površinu i mesite ga 5-7 minuta dok ne postane glatko i elastično.",
      "Stavite testo u nauljenu posudu, prekrijte krpom i ostavite da naraste na toplom mestu oko 1 sat, ili dok se ne udvostruči.",
      "U posudi pomešajte pelat paradajza, origano, beli luk u prahu, so, biber i maslinovo ulje. Dobro promešajte.",
      "Zagrejte rernu na 220°C.",
      "Izvadite testo iz posude i razvucite ga oklagijom ili rukama u željeni oblik (krug ili pravougaonik).",
      "Premažite testo sosom od paradajza, ostavljajući malu ivicu bez sosa.",
      "Posipajte rendani mocarela sir preko sosa, a zatim dodajte željene dodatke.",
      "Stavite pizzu u zagrejanu rernu i pecite 20-25 minuta, ili dok testo ne postane zlatno braon, a sir se otopi i blago porumeni.",
      "Izvadite pizzu iz rerne, isecite na komade i odmah poslužite."
    ],
    prepTime: "30 minuta",
    cookTime: "25 minuta",
    servings: 6
  },

  // PASTA Category
  "Spaghetti Bolognese": {
    name: "Spaghetti Bolognese",
    description: "Klasično i omiljeno italijansko jelo, bogat sos od mesa serviran preko špageta.",
    ingredients: [
      "500g špageta",
      "500g mlevene junetine",
      "1 velika glavica crnog luka, sitno iseckana",
      "2 šargarepe, sitno iseckane",
      "2 stabljike celera, sitno iseckane",
      "2 čena belog luka, sitno iseckana",
      "400g pelata (konzerviranog paradajza), izgnječenog",
      "200ml suvog crvenog vina (opciono)",
      "2 kašike paradajz pirea",
      "2 kašičice sušenog origana",
      "1 kašičica sušenog bosiljka",
      "1 lovorov list",
      "Maslinovo ulje",
      "So",
      "Biber",
      "Sveži peršun, sitno iseckan (za serviranje)",
      "Parmezan, izrendan (za serviranje)"
    ],
    instructions: [
      "U velikoj šerpi zagrejte maslinovo ulje na srednjoj vatri. Dodajte crni luk, šargarepu i celer. Dinstajte dok povrće ne omekša, oko 5-7 minuta.",
      "Dodajte mleveni beli luk i nastavite da dinstate još 1 minut.",
      "Dodajte mlevenu junetinu i kuvajte je, razbijajući je varjačom, dok ne porumeni. Ocedite višak masnoće.",
      "Ako koristite crveno vino, ulijte ga u šerpu i kuvajte dok se tečnost skoro ne redukuje, oko 5 minuta.",
      "Dodajte pelat, paradajz pire, origano, bosiljak, lovorov list, so i biber. Dobro promešajte.",
      "Smanjite vatru na nisku, poklopite i kuvajte sos najmanje 1.5-2 sata, povremeno mešajući, da se ukusi sjedine. Što duže se kuva, sos će biti ukusniji.",
      "U međuvremenu, skuvajte špagete prema uputstvima na pakovanju u posoljenoj vodi. Ocedite ih, ali sačuvajte oko 1 šolje vode u kojoj su se kuvale špagete.",
      "Izvadite lovorov list iz sosa.",
      "Dodajte skuvane špagete u sos i promešajte. Ako je sos previše gust, dodajte malo vode u kojoj su se kuvale špagete da ga razredite.",
      "Servirajte toplo posuto svežim peršunom i rendanim parmezanom."
    ],
    prepTime: "20 minuta",
    cookTime: "2 sata",
    servings: 6
  },

  "Fettuccine Alfredo": {
    name: "Fettuccine Alfredo",
    description: "Klasičan, bogat i kremast italijanski recept za testeninu.",
    ingredients: [
      "450g fettuccine testenine",
      "1 šolja (225g) nesoljenog putera",
      "1 1/2 šolje (150g) sveže narendanog parmezana, plus dodatno za serviranje",
      "1/2 šolje (120ml) tečnosti od kuvanja testenine",
      "So i sveže mleveni crni biber, po ukusu"
    ],
    instructions: [
      "Skuvajte fettuccine testeninu u velikom loncu sa posoljenom vodom, prateći uputstva na pakovanju, dok ne bude al dente. Sačuvajte oko 1/2 šolje vode od kuvanja pre nego što ocedite testeninu.",
      "Dok se testenina kuva, u velikom tiganju na srednjoj vatri otopite puter.",
      "Smanjite vatru na nisku. Dodajte narendani parmezan u otopljeni puter, neprestano mešajući žicom dok se sir ne otopi i sos ne postane gladak.",
      "Dodajte oceđenu testeninu direktno u tiganj sa sosom. Dobro promešajte da se testenina ravnomerno obloži sosom.",
      "Ako je sos pregust, dodajte malo tečnosti od kuvanja testenine, po jednu kašiku, dok se ne postigne željena konzistencija.",
      "Začinite solju i sveže mlevenim crnim biberom po ukusu.",
      "Poslužite odmah, posuto dodatnim parmezanom."
    ],
    prepTime: "5 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Carbonara": {
    name: "Carbonara",
    description: "Klasično italijansko jelo od paste sa jajima, pancetom, sirom i biberom.",
    ingredients: [
      "400g špageta",
      "150g pancete, iseckane na kockice",
      "3 velika jajeta",
      "50g žumanca (od otprilike 3 velika jajeta)",
      "100g Grana Padano ili Pecorino Romano, fino narendanog",
      "Crni biber, sveže samleven",
      "So, po ukusu",
      "2 kašike maslinovog ulja (opciono)"
    ],
    instructions: [
      "Stavite veliki lonac sa slanom vodom da provri. Dodajte špagete i kuvajte prema uputstvima sa pakovanja, dok ne budu al dente.",
      "Dok se pasta kuva, pripremite sos. U velikoj činiji, umutite jaja i žumanca. Dodajte narendani sir i obilno samlevenog crnog bibera. Dobro promešajte.",
      "U tiganju, na srednjoj vatri, ispržite pancetu dok ne postane hrskava. Izvadite pancetu iz tiganja i ostavite je na stranu, ostavljajući masnoću u tiganju. Ako je potrebno, dodajte malo maslinovog ulja.",
      "Kad je pasta kuvana, sačuvajte oko 1 šolje vode od kuvanja paste. Ocedite pastu i brzo je prebacite u tiganj sa masnoćom od pancete.",
      "Sklonite tiganj sa vatre. Odmah prelijte pastu smesom od jaja i sira. Brzo mešajte pastu kako bi se sos ravnomerno rasporedio i kako se jaja ne bi zgrušala. Ako je sos previše gust, dodajte malo vode od kuvanja paste da ga razredite.",
      "Dodajte hrskavu pancetu u pastu i promešajte.",
      "Poslužite odmah, posuto sa još narendanog sira i sveže samlevenog crnog bibera."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Penne Arrabbiata": {
    name: "Penne Arrabbiata",
    description: "Jednostavno i ukusno jelo od testenine sa pikantnim sosom od paradajza.",
    ingredients: [
      "400g penne testenine",
      "400g konzervisane seckane rajčice",
      "2-3 režnja belog luka, sitno iseckana",
      "1-2 crvene čili papričice, sitno iseckane (ili 1/2-1 kašičica čili pahuljica)",
      "4 kašike maslinovog ulja",
      "1/4 šolje svežeg peršuna, sitno iseckanog",
      "So i biber po ukusu",
      "Parmezan za posipanje (opciono)"
    ],
    instructions: [
      "U velikom loncu posolite vodu i pustite da provri. Dodajte penne testeninu i kuvajte prema uputstvima na pakovanju dok ne bude al dente.",
      "Dok se testenina kuva, pripremite sos. U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte beli luk i čili papričice (ili čili pahuljice) i pržite oko 1 minut, pazeći da beli luk ne zagori.",
      "Dodajte seckane rajčice u tiganj. Smanjite vatru i kuvajte sos oko 15 minuta, povremeno mešajući, dok se malo ne zgusne.",
      "Začinite sos solju i biberom po ukusu.",
      "Kada je testenina gotova, sačuvajte oko 1 šolju vode u kojoj se kuvala. Ocedite testeninu.",
      "Dodajte testeninu u tiganj sa sosom. Dobro promešajte da se testenina obloži sosom.",
      "Ako je potrebno, dodajte malo sačuvane vode od kuvanja testenine da biste razredili sos i postigli željenu konzistenciju.",
      "Umešajte sveži peršun u testeninu.",
      "Poslužite penne arrabbiata odmah, posuto parmezanom (opciono)."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Lasagna": {
    name: "Lasagna",
    description: "Klasično italijansko jelo od slojeva testenine, sosa od mesa, bešamela i sira.",
    ingredients: [
      "1 kg mlevenog mesa (govedina ili mešano)",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "800g pelata paradajza (konzerva)",
      "2 kašike paradajz pirea",
      "1 kašičica suvog origana",
      "1/2 kašičice suvog bosiljka",
      "So i biber po ukusu",
      "Maslinovo ulje",
      "250g testenine za lazanje (suve kore)",
      "50g parmezana, izrendanog",
      "50g mozzarella sira, izrendanog",
      "75g putera",
      "75g brašna",
      "1 litar mleka",
      "Prstohvat muskatnog oraščića"
    ],
    instructions: [
      "Priprema sosa od mesa: U velikom tiganju ili šerpi zagrejte malo maslinovog ulja na srednjoj vatri. Dodajte iseckani crni luk i dinstajte dok ne postane mekan, oko 5 minuta. Dodajte beli luk i dinstajte još minut.",
      "Dodajte mleveno meso i pržite dok ne porumeni, razbijajući grudvice. Ocedite višak masnoće.",
      "Umešajte pelat paradajza, paradajz pire, origano, bosiljak, so i biber. Smanjite vatru na nisku, poklopite i kuvajte najmanje 30 minuta, povremeno mešajući.",
      "Priprema bešamel sosa: U šerpi otopite puter na srednjoj vatri. Dodajte brašno i mešajte žustro 1-2 minuta da napravite svetlu zapršku (roux).",
      "Postepeno dodajte mleko, mešajući neprestano žicom da ne bi bilo grudvica. Kuvajte dok se sos ne zgusne, oko 5-7 minuta.",
      "Začinite muskatnim oraščićem, solju i biberom. Sklonite sa vatre.",
      "Slaganje lazanje: Zagrejte rernu na 180°C.",
      "Na dno vatrostalne posude (oko 20x30 cm) sipajte tanak sloj sosa od mesa.",
      "Preko sosa poređajte kore za lazanje tako da prekriju dno. Ako je potrebno, lomite kore da popunite praznine.",
      "Preko kora prelijte sloj bešamel sosa, a zatim pospite sa malo parmezana i mozzarelle.",
      "Ponovite slojeve (sos od mesa, kore, bešamel, sir) dok ne potrošite sve sastojke. Završite slojem bešamel sosa i pospite preostalim parmezanom i mozzarellom.",
      "Pecite u zagrejanoj rerni 35-45 minuta, ili dok lazanje ne porumene i sir se otopi.",
      "Ostavite da se lazanje ohlade 10-15 minuta pre sečenja i serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 8
  },

  "Ravioli": {
    name: "Ravioli",
    description: "Domaca pasta punjena ukusnim nadevima. Klasicno italijansko jelo.",
    ingredients: [
      "300g brasna tip '00'",
      "3 velika jaja",
      "1 kasika maslinovog ulja",
      "Prstohvat soli",
      "250g svezeg spanaca",
      "250g rikote",
      "50g parmezana, izrendanog",
      "1 jaje",
      "Muskatni orascic (po ukusu)",
      "50g putera",
      "Sveze zalfije (nekoliko listova)"
    ],
    instructions: [
      "Priprema testa: Na radnoj povrsini napravite bunar od brasna. Dodajte jaja, maslinovo ulje i so u sredinu. Viljuskom lagano umutite jaja, zatim postepeno umesajte brasno dok ne dobijete grubo testo.",
      "Rukama umesite testo dok ne postane glatko i elasticno, oko 10 minuta. Uviti testo u plasticnu foliju i ostaviti da odstoji u frizideru najmanje 30 minuta.",
      "Priprema nadeva: Oprati spanac i kratko ga prokuvati dok ne uvene. Iscediti ga dobro i sitno iseckati.",
      "U ciniji pomesati iseckani spanac, rikotu, parmezan, jaje, muskatni orascic, so i biber. Dobro promesati.",
      "Formiranje raviola: Izvaditi testo iz frizidera. Podeliti ga na dva dela. Razviti jedan deo testa na tanko pomocu masine za testeninu ili oklagije.",
      "Na razvijeno testo rasporedite male gomilice nadeva, na razmaku od oko 3-4 cm.",
      "Premazati testo oko nadeva sa malo vode ili umucenog jajeta.",
      "Razviti drugi deo testa i prekriti prvi sloj testa sa nadevom.",
      "Pazljivo pritisnuti testo oko nadeva da se istisne vazduh. Iseci raviole nozem ili tockicem za testo.",
      "Kuvanje raviola: U velikom loncu prokuvati posoljenu vodu.",
      "Dodati raviole i kuvati dok ne isplivaju na povrsinu, oko 3-5 minuta.",
      "Priprema sosa (opciono): Dok se raviole kuvaju, otopiti puter u tiganju na srednjoj vatri. Dodati listove zalfije i prziti dok puter ne postane blago braon.",
      "Serviranje: Izvaditi raviole iz vode i ocediti ih. Preliti ih sosom od zalfije i putera (ako koristite) i posuti parmezanom."
    ],
    prepTime: "45 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Gnocchi": {
    name: "Gnocchi",
    description: "Gnjocchi su italijanski klasik od krompira, brašna i jaja. Brzi su i jednostavni za pripremu, a mogu se poslužiti sa raznim sosovima.",
    ingredients: [
      "1 kg krompira (najbolje brašnastog tipa)",
      "300 g glatkog brašna (plus dodatno za posipanje)",
      "1 veliko jaje",
      "1/2 kašičice soli",
      "Prstohvat muškatnog oraščića (opciono)"
    ],
    instructions: [
      "Krompir operite i skuvajte u ljusci dok ne omekša. Ovo traje oko 20-30 minuta.",
      "Ocedite krompir i ostavite da se malo prohladi, dok ne bude dovoljno hladan za rukovanje.",
      "Ogulite krompir dok je još topao. Važno je raditi to dok je krompir vruć jer će se teže formirati gnjocchi ako se krompir ohladi.",
      "Protisnite krompir kroz presu za krompir (pire krompir) ili ga izrendajte na najsitnije rende.",
      "Na radnoj površini formirajte hrpicu od pire krompira.",
      "Napravite udubljenje u sredini hrpice i dodajte brašno, jaje, so i (ako koristite) muškatni oraščić.",
      "Lagano umesite testo rukama. Važno je ne premesiti testo, jer će gnjocchi biti žilavi. Mesite samo dok se sastojci ne sjedine u glatko, ali ne lepljivo testo.",
      "Posipajte radnu površinu brašnom.",
      "Podelite testo na nekoliko delova.",
      "Svaki deo testa razvaljajte u dugačku 'kobasicu' debljine oko 2 cm.",
      "Isecite 'kobasicu' na komade dužine oko 2 cm.",
      "Opciono: Pređite svaki gnjocchi preko viljuške kako biste napravili teksturu. To će im pomoći da bolje upiju sos.",
      "Stavite gnjocchi na poslužavnik posut brašnom da se ne zalepe.",
      "U velikoj šerpi zakuvajte posoljenu vodu.",
      "Ubacite gnjocchi u kipuću vodu u manjim količinama.",
      "Kada gnjocchi isplivaju na površinu, kuvani su. Izvadite ih rešetkastom kašikom.",
      "Poslužite odmah sa sosom po želji."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Pesto Pasta": {
    name: "Pesto Pasta",
    description: "Jednostavan i ukusan recept za testeninu sa pesto sosom, idealan za brzi ručak ili večeru.",
    ingredients: [
      "200g testenine (špagete, penne, fusilli)",
      "1/2 šolje pesto sosa (kupovni ili domaći)",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1/4 šolje parmezana, izrendanog (plus dodatno za serviranje)",
      "So i biber po ukusu",
      "Pinjoli (opciono, za dekoraciju)",
      "Čeri paradajz (opciono, za dekoraciju)"
    ],
    instructions: [
      "Skuvajte testeninu prema uputstvu sa pakovanja u posoljenoj vodi.",
      "Dok se testenina kuva, zagrejte maslinovo ulje u tiganju na srednjoj vatri.",
      "Dodajte sitno iseckani beli luk i pržite dok ne zamiriše (oko 1 minut). Pazite da ne izgori.",
      "Ocedite skuvanu testeninu, ostavljajući malo vode u kojoj se kuvala.",
      "Dodajte oceđenu testeninu u tiganj sa belim lukom i uljem.",
      "Umešajte pesto sos i malo vode od kuvanja testenine (po potrebi, da sos bude kremast).",
      "Dodajte izrendani parmezan i promešajte da se sjedini.",
      "Posolite i pobiberite po ukusu.",
      "Servirajte toplo, posuto sa još parmezana i opciono pinjolima i čeri paradajzom."
    ],
    prepTime: "5 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Cacio e Pepe": {
    name: "Cacio e Pepe",
    description: "Jednostavno i ukusno italijansko jelo sa sirom i biberom.",
    ingredients: [
      "200g špageta",
      "100g Pecorino Romano, sitno narendanog",
      "2 kašičice sveže mlevenog crnog bibera",
      "2 kašike vode od kuvanja paste",
      "So po ukusu (pazite, sir je slan!)"
    ],
    instructions: [
      "Stavite veliku šerpu vode da provri. Posolite vodu.",
      "Dodajte špagete u ključalu vodu i kuvajte prema uputstvima na pakovanju, dok ne budu al dente.",
      "Dok se pasta kuva, pripremite sos. U velikoj posudi, pomešajte narendani Pecorino Romano sir i sveže mleveni crni biber.",
      "Pre nego što ocedite pastu, sačuvajte oko 2 šolje vode od kuvanja.",
      "Ocedite pastu, ali je nemojte ispirati. Odmah je prebacite u posudu sa sirom i biberom.",
      "Dodajte 2 kašike tople vode od kuvanja paste u posudu. Brzo mešajte da se sir otopi i napravi kremasti sos. Po potrebi dodajte još vode od paste, po kašiku, da se postigne željena gustina.",
      "Poslužite odmah, posuto sa još malo narendanog Pecorino Romano sira i sveže mlevenog crnog bibera."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 2
  },

  "Amatriciana": {
    name: "Amatriciana",
    description: "Klasičan italijanski sos od guancialea (slanina od svinjskog obraza), paradajza i pekorino sira. Savršen za pastu.",
    ingredients: [
      "150g guanciale (ili pancete), isečene na kockice",
      "1 kašika maslinovog ulja (ako je potrebno)",
      "1/2 kašičice crvene paprike u prahu (peperoncino)",
      "400g pelata, isecane ili izgnječene",
      "100g pekorino romano sira, narendanog",
      "So po ukusu",
      "Crni biber po ukusu",
      "400g pasta (bucatini, spaghetti ili rigatoni)"
    ],
    instructions: [
      "U velikom tiganju na srednjoj vatri, pržite guanciale dok ne postane hrskav i pusti masnoću. Ako guanciale nije dovoljno mastan, dodajte kašiku maslinovog ulja.",
      "Izvadite guanciale iz tiganja i ostavite sa strane, zadržavajući masnoću u tiganju.",
      "U masnoću od guancialea dodajte crvenu papriku i kratko je propržite (pazite da ne zagori).",
      "Dodajte pelat, so i biber. Promešajte i smanjite vatru na nisku.",
      "Kuvajte sos 15 minuta, povremeno mešajući.",
      "U međuvremenu, skuvajte pastu prema uputstvima na pakovanju, dok ne bude al dente.",
      "Rezervišite šolju vode od kuvanja paste pre nego što je ocedite.",
      "Dodajte ocedjenu pastu u tiganj sa sosom.",
      "Vratite guanciale u tiganj.",
      "Dodajte polovinu narendanog pekorino sira.",
      "Promešajte pastu i sos, dodajući malo vode od kuvanja paste ako je potrebno da se sos zgusne i obloži pastu.",
      "Poslužite odmah, posuto preostalim pekorino sirom."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Aglio e Olio": {
    name: "Aglio e Olio",
    description: "Jednostavno i ukusno italijansko jelo od spageta sa belim lukom, maslinovim uljem i ljutom paprikom.",
    ingredients: [
      "200g špageta",
      "60ml maslinovog ulja",
      "4 čena belog luka, tanko iseckana",
      "1/2 kašičice suve čili papričice (ili po ukusu)",
      "So po ukusu",
      "Sveže mleveni crni biber po ukusu",
      "Sveži peršun, iseckan (za posipanje)"
    ],
    instructions: [
      "Skuvajte špagete u velikoj šerpi sa posoljenom vodom prema uputstvima na pakovanju. Sačuvajte oko 1 šolje vode od kuvanja pre nego što procedite pastu.",
      "Dok se pasta kuva, u velikom tiganju zagrejte maslinovo ulje na srednje niskoj temperaturi.",
      "Dodajte iseckani beli luk i čili papričicu u tiganj. Kuvajte, često mešajući, dok beli luk ne postane blago zlatno braon i aromatičan (oko 2-3 minuta). Pazite da beli luk ne zagori.",
      "Procedite špagete, ostavljajući malo vode za kuvanje.",
      "Dodajte procedjene špagete u tiganj sa belim lukom i uljem.",
      "Dodajte malo vode od kuvanja paste (počnite sa 1/4 šolje) i mešajte da se sos emulguje i obloži pastu. Dodajte još vode od kuvanja po potrebi da biste postigli željenu konzistenciju sosa.",
      "Začinite solju i biberom po ukusu.",
      "Servirajte odmah, posuto iseckanim svežim peršunom."
    ],
    prepTime: "5 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Puttanesca": {
    name: "Puttanesca",
    description: "Brz, ukusan i jednostavan recept za klasični talijanski umak Puttanesca, savršen za tjesteninu.",
    ingredients: [
      "500g špageta",
      "60ml maslinovog ulja",
      "4 češnja češnjaka, sitno nasjeckana",
      "1/2 čajne žličice pahuljica čilija",
      "50g fileta inćuna u ulju, ocijeđenih i nasjeckanih",
      "800g pelata rajčice, usitnjenih",
      "100g crnih maslina, bez koštica i prepolovljenih",
      "2 žlice kapara, ocijeđenih",
      "1/4 šalice svježeg peršina, nasjeckanog",
      "Sol i svježe mljeveni crni papar po ukusu"
    ],
    instructions: [
      "Skuhajte špagete prema uputama na pakiranju.",
      "Dok se tjestenina kuha, zagrijte maslinovo ulje u velikoj tavi na srednjoj vatri.",
      "Dodajte češnjak i pahuljice čilija te pržite 1 minutu, pazeći da češnjak ne zagori.",
      "Dodajte nasjeckane inćune i kuhajte dok se ne otope, oko 2 minute.",
      "Umiješajte pelate rajčice, masline i kapare.",
      "Smanjite vatru na nisku i pustite da se umak krčka 15 minuta, povremeno miješajući.",
      "Kušajte i po potrebi dodajte sol i papar. Budite oprezni sa soli zbog slanosti inćuna i maslina.",
      "Ocijedite tjesteninu, ostavljajući malo vode od kuhanja.",
      "Dodajte tjesteninu u tavu s umakom i dobro promiješajte da se sve sjedini. Ako je potrebno, dodajte malo vode od kuhanja kako bi se umak razrijedio.",
      "Umiješajte nasjeckani peršin.",
      "Poslužite odmah."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Marinara": {
    name: "Marinara",
    description: "Jednostavan i ukusan sos od paradajza, idealan za testeninu, pizzu ili umakanje.",
    ingredients: [
      "1/4 šolje maslinovog ulja",
      "4 čena belog luka, sitno iseckana",
      "1 konzerva (800g) pelata, izgnječenih",
      "1 kašičica suvog origana",
      "1/2 kašičice suvog bosiljka",
      "1/4 kašičice crvene paprike (opciono)",
      "1/2 kašičice šećera",
      "So i biber po ukusu",
      "Sveži bosiljak, za ukrašavanje (opciono)"
    ],
    instructions: [
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte beli luk i pržite 1 minut, dok ne zamiriše, ali pazite da ne zagori.",
      "Dodajte izgnječeni pelat, origano, bosiljak, crvenu papriku (ako koristite), šećer, so i biber.",
      "Promešajte i pustite da provri.",
      "Smanjite vatru na nisku, poklopite i kuvajte 30 minuta, povremeno mešajući.",
      "Uklonite sa vatre i po potrebi izmiksajte štapnim mikserom za glatku teksturu (opciono).",
      "Poslužite preko testenine, pizze ili koristite kao sos za umakanje. Ukrasite svežim bosiljkom, ako želite."
    ],
    prepTime: "10 minuta",
    cookTime: "30 minuta",
    servings: 6
  },

  "Mac and Cheese Premium": {
    name: "Mac and Cheese",
    description: "Klasična američka verzija jela od makarona i sira, savršena za ručak ili večeru.",
    ingredients: [
      "350g makarona (laktova)",
      "50g putera",
      "50g brašna",
      "600ml mleka",
      "250g čedar sira, izrendanog",
      "50g parmezana, izrendanog (opciono)",
      "1/2 kašičice belog luka u prahu (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 180°C.",
      "Skuvajte makarone prema uputstvu sa pakovanja. Ocedite i ostavite sa strane.",
      "U šerpi otopite puter na srednjoj vatri.",
      "Dodajte brašno i mešajte dok ne dobijete glatku smesu (oko 1 minute).",
      "Postepeno dodajte mleko, neprestano mešajući da biste izbegli grudvice.",
      "Kuvajte dok se sos ne zgusne, oko 5-7 minuta.",
      "Uklonite šerpu sa vatre i umešajte čedar sir (i parmezan ako koristite) dok se sir ne otopi i sos postane gladak.",
      "Dodajte beli luk u prahu, so i biber po ukusu.",
      "Umešajte kuvane makarone u sos od sira dok se dobro ne sjedine.",
      "Sipajte smesu u vatrostalnu posudu.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok ne dobije zlatno braon boju i mehuriće.",
      "Ostavite da se malo ohladi pre serviranja."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Pasta Primavera": {
    name: "Pasta Primavera",
    description: "Osvežavajuće i šareno jelo sa testeninom i prolećnim povrćem u laganom sosu.",
    ingredients: [
      "450g testenine (penne, farfalle ili fusilli)",
      "1 kašika maslinovog ulja",
      "1 čen belog luka, sitno iseckan",
      "1 šolja brokolija, iseckana na cvetiće",
      "1 šolja špargli, iseckana na komade od 2.5cm",
      "1 šolja graška (svežeg ili zamrznutog)",
      "1 šolja šargarepe, iseckana na tanke kolutiće",
      "1/2 šolje pavlake za kuvanje (ili grčkog jogurta za lakšu verziju)",
      "1/4 šolje parmezana, izrendanog",
      "2 kašike svežeg peršuna, iseckanog",
      "So i biber po ukusu"
    ],
    instructions: [
      "Skuvajte testeninu prema uputstvima na pakovanju dok ne bude al dente. Sačuvajte 1/2 šolje vode od kuvanja testenine. Ocedite testeninu i ostavite sa strane.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte beli luk i pržite dok ne zamiriše, oko 30 sekundi. Pazite da ne zagori.",
      "Dodajte brokoli, špargle i šargarepu u tiganj. Pržite 5-7 minuta, dok povrće ne omekša, ali i dalje bude hrskavo.",
      "Dodajte grašak i pržite još 2 minuta.",
      "Smanjite vatru na nisku. U tiganj dodajte pavlaku za kuvanje (ili grčki jogurt) i parmezan. Mešajte dok se sir ne istopi i sos ne postane gladak.",
      "Dodajte skuvanu testeninu u tiganj sa sosom i povrćem. Dobro promešajte da se sve sjedini. Ako je potrebno, dodajte malo vode od kuvanja testenine da biste razredili sos.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite odmah, posuto svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Linguine": {
    name: "Linguine",
    description: "Ovaj recept je za jednostavnu i ukusnu linguine pastu sa belim lukom, maslinovim uljem i peršunom.",
    ingredients: [
      "400g linguine paste",
      "1/2 šolje ekstra devičanskog maslinovog ulja",
      "4 čena belog luka, sitno iseckana",
      "1/4 šolje svežeg peršuna, sitno iseckanog",
      "So po ukusu",
      "Crni biber po ukusu",
      "Rendani parmezan (opciono, za serviranje)"
    ],
    instructions: [
      "U velikom loncu posolite vodu i dovedite do ključanja. Dodajte linguine pastu i kuvajte prema uputstvu na pakovanju dok ne bude al dente. Sačuvajte 1 šolju vode od kuvanja paste pre nego što je procedite.",
      "Dok se pasta kuva, u velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte sitno iseckani beli luk i dinstajte dok ne postane mirisan, oko 1-2 minuta. Pazite da beli luk ne zagori.",
      "Sklonite tiganj sa vatre i dodajte iseckani peršun. Promešajte.",
      "Procedite pastu i dodajte je u tiganj sa sosom od belog luka i peršuna.",
      "Dodajte malo sačuvane vode od kuvanja paste, jednu po jednu kašiku, dok ne dobijete željenu konzistenciju sosa. Promešajte da se sve sjedini.",
      "Posolite i pobiberite po ukusu.",
      "Poslužite odmah, posuto rendanim parmezanom (opciono)."
    ],
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Tortellini": {
    name: "Tortellini",
    description: "Klasičan recept za domaću testeninu punjenu sirom i spanaćem, savršena za pripremu sa kremastim sosom ili bistrom supom.",
    ingredients: [
      "300g brašna (tip '00' idealno)",
      "3 velika jaja",
      "1 kašika maslinovog ulja",
      "Prstohvat soli",
      "250g ricotta sira",
      "150g smrznutog ili svežeg spanaća, obarenog i isceđenog",
      "50g parmezana, izrendanog",
      "1 jaje",
      "Malo muškatnog oraščića"
    ],
    instructions: [
      "Priprema testa: Na radnoj površini napravite humku od brašna, napravite udubljenje u sredini i dodajte jaja, maslinovo ulje i so.",
      "Polako viljuškom umutite jaja, postepeno uvlačeći brašno sa strane.",
      "Kada se smesa sjedini, počnite da mesite testo rukama dok ne postane glatko i elastično (oko 10 minuta).",
      "Formirajte testo u kuglu, umotajte u plastičnu foliju i ostavite da odstoji u frižideru najmanje 30 minuta.",
      "Priprema punjenja: U činiji pomešajte ricottu, obareni i isceđeni spanać, parmezan, jaje, muškatni oraščić, so i biber. Dobro promešajte.",
      "Formiranje tortellina: Razvucite testo na tanko (možete koristiti mašinu za testeninu).",
      "Isecite testo na kvadrate (oko 3x3 cm).",
      "Stavite malu količinu punjenja (oko 1/2 kašičice) na sredinu svakog kvadrata.",
      "Preklopite kvadrat dijagonalno da formirate trougao, pritisnite ivice da se zatvore.",
      "Spojite dva kraja trougla oko prsta i pritisnite da se zalepe, formirajući tortellino.",
      "Kuvanje tortellina: Kuvajte tortelline u posoljenoj ključaloj vodi dok ne isplivaju na površinu (oko 2-3 minuta).",
      "Serviranje: Poslužite sa vašim omiljenim sosom (kremasti sos, sos od paradajza ili jednostavno sa istopljenim puterom i žalfijom)."
    ],
    prepTime: "45 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Rigatoni": {
    name: "Rigatoni",
    description: "Ovaj jednostavan recept za rigatone donosi ukusno i zasitno jelo za celu porodicu. Pasta se kombinuje sa bogatim sosom od paradajza i kremastim sirom.",
    ingredients: [
      "400g rigatoni paste",
      "1 glavica crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "400g konzerva seckanog paradajza",
      "2 kašike paradajz pirea",
      "1 kašičica suvog origana",
      "1/2 kašičice šećera",
      "2 kašike maslinovog ulja",
      "150g mocarela sira, iseckanog na kockice",
      "50g parmezana, izrendanog",
      "So i biber po ukusu",
      "Sveži bosiljak za dekoraciju (opciono)"
    ],
    instructions: [
      "U velikoj šerpi, skuvajte rigatone prema uputstvu na pakovanju dok ne bude al dente. Ocedite, ostavite malo vode od kuvanja paste sa strane.",
      "U velikom tiganju, zagrejte maslinovo ulje na srednjoj vatri. Dodajte crni luk i dinstajte dok ne omekša, oko 5 minuta.",
      "Dodajte beli luk i dinstajte još 1 minut, dok ne zamiriše.",
      "Dodajte seckani paradajz, paradajz pire, origano i šećer. Začinite solju i biberom po ukusu. Pustite da provri, a zatim smanjite vatru i krčkajte 15 minuta, povremeno mešajući.",
      "Umešajte skuvanu pastu u sos. Ako je potrebno, dodajte malo vode od kuvanja paste da se sos zgusne.",
      "Umešajte polovinu mocarele sira i polovinu parmezana.",
      "Sipajte pastu u vatrostalnu posudu.",
      "Pospite preostalom mocarelom i parmezanom.",
      "Pecite u zagrejanoj rerni na 180°C (350°F) oko 10 minuta, ili dok se sir ne otopi i blago porumeni.",
      "Ukrasite svežim bosiljkom (opciono) i poslužite toplo."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4
  },

  "Farfalle": {
    name: "Farfalle",
    description: "Brza i ukusna pasta sa sosom od paradajza i bosiljka.",
    ingredients: [
      "400g farfalle paste",
      "400g pelata paradajza, iz konzerve ili svežih",
      "2 čena belog luka, sitno iseckana",
      "2 kašike maslinovog ulja",
      "1/2 kašičice sušenog origana",
      "1/4 kašičice crvene paprike (opciono)",
      "Sveži bosiljak, sitno iseckan (oko 1/4 šolje)",
      "So i biber po ukusu",
      "Parmezan, za serviranje (opciono)"
    ],
    instructions: [
      "Skuvajte pastu prema uputstvima na pakovanju, dok ne bude al dente. Sačuvajte oko 1 šolje vode od kuvanja paste pre nego što je procedite.",
      "Dok se pasta kuva, zagrejte maslinovo ulje u velikom tiganju na srednjoj vatri.",
      "Dodajte beli luk i pržite oko 1 minut, dok ne zamiriše, pazeći da ne izgori.",
      "Dodajte pelat paradajza (ako koristite svež, prethodno ga oljuštite i iseckajte), origano i crvenu papriku (ako koristite).",
      "Posolite i pobiberite po ukusu.",
      "Smanjite vatru na nisku i ostavite da se sos krčka oko 15 minuta, povremeno mešajući.",
      "Umešajte sitno iseckan bosiljak u sos.",
      "Dodajte oceđenu pastu u sos i dobro promešajte da se pasta obloži sosom. Ako je sos pregust, dodajte malo sačuvane vode od kuvanja paste da ga razredite do željene konzistencije.",
      "Poslužite odmah, posuto parmezanom (opciono)."
    ],
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Orecchiette": {
    name: "Orecchiette",
    description: "Pasta u obliku 'malih ušiju' sa jednostavnim sosom od brokolija i belog luka.",
    ingredients: [
      "400g orecchiette pasta",
      "1 veća glavica brokolija, isečena na cvetove",
      "4 čena belog luka, sitno iseckana",
      "60ml maslinovog ulja",
      "50g parmezana, izrendanog",
      "So po ukusu",
      "Biber po ukusu",
      "Ljuta paprika u prahu (opciono)"
    ],
    instructions: [
      "U velikom loncu posolite vodu i stavite da provri.",
      "Dodajte orecchiette pastu i kuvajte prema uputstvima na pakovanju (obično oko 10-12 minuta), dok ne bude al dente.",
      "2 minuta pre nego što je pasta gotova, dodajte brokoli u isti lonac i kuvajte zajedno sa pastom.",
      "Dok se pasta i brokoli kuvaju, u velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte beli luk i pržite dok ne zamiriše, oko 1 minut. Pazite da ne izgori.",
      "Ocedite pastu i brokoli, ostavljajući sa strane oko 1 šolju vode u kojoj se kuvala pasta.",
      "Dodajte ocedjenu pastu i brokoli u tiganj sa belim lukom.",
      "Dodajte malo vode u kojoj se kuvala pasta (oko 1/2 šolje) da biste napravili sos.",
      "Mešajte dok se sos ne zgusne i obloži pastu i brokoli.",
      "Sklonite sa vatre i umešajte izrendani parmezan.",
      "Posolite i pobiberite po ukusu. Ako želite, dodajte malo ljute paprike u prahu.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Pasta": {
    name: "Pasta",
    description: "Osnovni recept za pripremu sveže paste kod kuće.",
    ingredients: [
      "400g brašna tip '00'",
      "4 velika jaja",
      "1 kašičica soli",
      "2 kašike maslinovog ulja (opciono)"
    ],
    instructions: [
      "Na radnu površinu prosuti brašno i napraviti bunar u sredini.",
      "U bunar staviti jaja i so.",
      "Viljuškom lagano umutiti jaja, postepeno uvlačeći brašno iz unutrašnjosti bunara.",
      "Nastaviti sa mešanjem dok se smesa ne zgusne i postane gruba.",
      "Rukama umesiti testo, dodajući malo brašna ako je potrebno, dok ne postane glatko i elastično. Ovo može trajati 8-10 minuta.",
      "Umotati testo u plastičnu foliju i ostaviti da odstoji najmanje 30 minuta na sobnoj temperaturi.",
      "Razvaljati testo oklagijom ili mašinom za testeninu na željenu debljinu i oblik.",
      "Kuvati pastu u slanoj ključaloj vodi 2-5 minuta, ili dok ne ispliva na površinu i postane 'al dente'.",
      "Ocediti pastu i odmah poslužiti sa omiljenim sosom."
    ],
    prepTime: "20 minuta",
    cookTime: "5 minuta",
    servings: 4
  },

  "International Burger": {
    name: "Burger",
    description: "Savršen recept za sočan i ukusan domaći burger.",
    ingredients: [
      "600g mlevene junetine",
      "1 glavica crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 jaje",
      "2 kašike prezli",
      "1 kašičica senfa",
      "1 kašičica worcestershire sosa",
      "So i biber po ukusu",
      "4 burger zemičke",
      "Listovi zelene salate",
      "Paradajz, isečen na kolutove",
      "Crveni luk, isečen na kolutove",
      "Kiseli krastavčići, isečeni na kolutove",
      "Sir (cheddar, gauda, ili po izboru)",
      "Kečap",
      "Majonez",
      "Senf"
    ],
    instructions: [
      "U velikoj posudi pomešajte mlevenu junetinu, iseckani crni luk, beli luk, jaje, prezle, senf, worcestershire sos, so i biber. Dobro promešajte dok se svi sastojci ne sjedine.",
      "Podelite smesu na 4 jednaka dela i oblikujte burgere.",
      "Zagrejte roštilj ili tiganj na srednje jakoj vatri.",
      "Pecite burgere 6-8 minuta sa svake strane, ili dok ne budu pečeni po vašem ukusu. Pred kraj pečenja, stavite krišku sira na svaki burger da se otopi.",
      "Presecite zemičke na pola i blago ih prepecite na roštilju ili u tiganju.",
      "Na donju polovinu zemičke stavite list zelene salate, paradajz, crveni luk, kiseli krastavčić i pečeni burger sa sirom.",
      "Prelijte kečapom, majonezom i senfom po ukusu.",
      "Poklopite gornjom polovinom zemičke i odmah poslužite."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Pad Thai Authentic": {
    name: "Pad Thai Authentic",
    description: "Ukusno tajlandsko jelo sa rezancima, tofuom, jajima, klicama i kikirikijem, preliveneo slatkastim i kiselim sosom.",
    ingredients: [
      "200g pirinčanih rezanaca (širine oko 5mm)",
      "2 kašike biljnog ulja",
      "2 jaja, blago umućena",
      "150g tofu, isečen na kockice",
      "2 čena belog luka, sitno iseckana",
      "1 šaka škampa (oko 100g), očišćeni (opciono)",
      "1 šolja klica pasulja",
      "2 zelena luka, iseckana",
      "1/4 šolje pečenog kikirikija, grubo iseckanog",
      "1/4 šolje svežeg korijandera, iseckanog",
      "1 limeta, isečena na kriške",
      "3 kašike ribljeg sosa",
      "3 kašike soka od tamarinda (ili limunovog soka)",
      "2 kašike palminog šećera (ili smeđeg šećera)",
      "1 kašika pirinčanog sirćeta",
      "1/2 kašičice čili praha (ili po ukusu)"
    ],
    instructions: [
      "Potopite pirinčane rezance u toplu vodu prema uputstvima na pakovanju, dok ne omekšaju. Ocedite i ostavite sa strane.",
      "U maloj posudi pomešajte riblji sos, sok od tamarinda (ili limunov sok), palmin šećer (ili smeđi šećer), pirinčano sirće i čili prah. Dobro promešajte dok se šećer ne rastvori.",
      "U velikom voku ili tiganju zagrejte 1 kašiku ulja na srednjoj vatri. Dodajte umućena jaja i pržite dok se ne skuvaju, zatim ih razdvojite na manje komade i izvadite iz voka. Dodajte preostalu kašiku ulja u vok. Dodajte tofu i pržite dok ne dobije zlatno smeđu boju. Izvadite iz voka i ostavite sa strane.",
      "U isti vok dodajte beli luk i pržite dok ne zamiriše (oko 30 sekundi). Ako koristite škampe, dodajte ih u vok i pržite dok ne postanu ružičasti i skuvani.",
      "Dodajte pripremljene rezance u vok sa belim lukom i škampima (ili samo belim lukom). Prelijte sosom i dobro promešajte da se rezanci oblože.",
      "Dodajte prženi tofu i jaja u vok. Promešajte. Dodajte klice pasulja i zeleni luk i kratko promešajte (oko 1 minut), samo dok se klice malo ne smekšaju.",
      "Prebacite Pad Thai na tanjire. Pospite seckanim kikirikijem i korijanderom. Poslužite sa kriškama limete."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Ramen Traditional": {
    name: "Ramen Traditional",
    description: "Ramen je popularno japansko jelo sa rezancima u bogatoj supi, često sa dodatkom mesa, povrća i jajeta.",
    ingredients: [
      "1.5 l pilećeg bujona (ili povrtnog za vegetarijansku verziju)",
      "1 komad đumbira (oko 5cm), iseckan",
      "2 čena belog luka, iseckana",
      "4 kašike soja sosa",
      "2 kašike mirina (ili suvog šerija)",
      "1 kašika susamovog ulja",
      "200g ramen rezanaca",
      "200g svinjskog buta (ili tofu za vegetarijansku verziju), tanko isečen",
      "2 jajeta",
      "2 mlada luka, iseckana",
      "1 šolja šitake pečuraka, isečenih",
      "Nori alga (za dekoraciju), isečena na trake",
      "Susam (za dekoraciju)",
      "Čili ulje (opciono, za pikantnost)"
    ],
    instructions: [
      "U šerpu stavite pileći bujon, đumbir i beli luk. Pustite da provri, a zatim smanjite temperaturu i kuvajte oko 1 sat. Procedite bujon i vratite ga u šerpu.",
      "U manjoj posudi pomešajte 2 kašike soja sosa i 1 kašiku mirina. Marinirajte svinjetinu (ili tofu) u ovoj smesi najmanje 15 minuta.",
      "Stavite jaja u šerpu sa hladnom vodom. Pustite da provri, a zatim isključite ringlu i ostavite jaja u vrućoj vodi 6-7 minuta za meko kuvana jaja, ili 10 minuta za tvrdo kuvana jaja. Ohladite jaja u hladnoj vodi, oljuštite ih i presecite na pola.",
      "U tiganju zagrejte susamovo ulje. Propržite svinjetinu (ili tofu) dok ne porumeni. Dodajte šitake pečurke i dinstajte dok ne omekšaju.",
      "Skuvajte ramen rezance prema uputstvu na pakovanju. Obično se kuvaju vrlo brzo, oko 2-3 minuta. Procedite ih.",
      "U dve činije rasporedite rezance. Prelijte ih vrelim bujonom. Dodajte mariniranu svinjetinu (ili tofu) i šitake pečurke. Stavite po polovinu jajeta u svaku činiju. Posipajte sa mladim lukom, nori algama i susamom. Dodajte čili ulje po ukusu.",
      "Poslužite odmah."
    ],
    prepTime: "30 minuta",
    cookTime: "90 minuta",
    servings: 2
  },

  "Paella Valenciana": {
    name: "Paella Valenciana",
    description: "Paella je špansko jelo od riže koje se tradicionalno kuva u velikoj, plitkoj tavi. Ova verzija je sa plodovima mora i piletinom.",
    ingredients: [
      "4 kašike maslinovog ulja",
      "6 pilećih bataka i karabataka, sa kožom",
      "1 veliki luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, iseckana",
      "1 zelena paprika, iseckana",
      "200g chorizo kobasice, iseckane na kolutove",
      "1 kašičica dimljene slatke paprike (pimenton)",
      "1/2 kašičice šafrana",
      "400g pirinča za paellu (bomba ili calasparra)",
      "1l pilećeg bujona, vreo",
      "200g smrznutog graška",
      "500g dagnji, očišćenih",
      "500g gambora, neočišćenih, ali bez brkova",
      "1 limun, isečen na kriške",
      "Sveži peršun, iseckan, za ukras",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj tavi za paellu ili velikom tiganju sa ravnim dnom, zagrejte 2 kašike maslinovog ulja na srednjoj vatri.",
      "Začinite piletinu solju i biberom. Pržite piletinu dok ne porumeni sa svih strana. Izvadite piletinu iz tave i ostavite sa strane.",
      "U istu tavu dodajte preostale 2 kašike maslinovog ulja. Dodajte luk, beli luk, crvenu i zelenu papriku i dinstajte dok ne omekšaju, oko 5-7 minuta.",
      "Dodajte chorizo kobasicu i dimljenu papriku. Kuvajte još 2-3 minuta.",
      "Dodajte pirinač i promešajte da se obloži uljem i začinima.",
      "Dodajte šafran i vreo pileći bujon. Promešajte i vratite piletinu u tavu.",
      "Smanjite vatru na nisku, poklopite i kuvajte 15 minuta.",
      "Dodajte grašak, dagnje i gambore. Poklopite i kuvajte još 10-15 minuta, ili dok se dagnje ne otvore i gambori ne postanu ružičasti, a pirinač ne upije tečnost.",
      "Bacite sve dagnje koje se nisu otvorile.",
      "Sklonite tavu sa vatre i ostavite da odstoji 5 minuta pre serviranja.",
      "Ukrasite svežim peršunom i poslužite sa kriškama limuna."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 6
  },

  "Couscous": {
    name: "Couscous",
    description: "Brzi i ukusni prilog ili glavno jelo, idealno za vegetarijance i vegane.",
    ingredients: [
      "1 šolja kus-kusa",
      "1 ½ šolje povrtne ili pileće supe (ili vode)",
      "1 kašika maslinovog ulja",
      "½ kašičice soli",
      "¼ kašičice crnog bibera",
      "Po želji: sušeno voće (brusnice, grožđice), orašasti plodovi (bademi, orasi), sveže začinsko bilje (peršun, menta), povrće (tikvice, paprika)"
    ],
    instructions: [
      "U šerpi pomešajte supu (ili vodu), maslinovo ulje, so i biber. Stavite na ringlu i pustite da provri.",
      "Sklonite šerpu sa ringle.",
      "Dodajte kus-kus u šerpu i promešajte.",
      "Poklopite šerpu i ostavite da stoji 5 minuta, ili dok kus-kus ne upije svu tečnost.",
      "Skinite poklopac i viljuškom rastresite kus-kus.",
      "Po želji dodajte sušeno voće, orašaste plodove, sveže začinsko bilje ili povrće.",
      "Poslužite toplo."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 4
  },

  "Falafel Traditional": {
    name: "Falafel Traditional",
    description: "Hrskavi spolja, mekani iznutra - savršen zalogaj bliskoistočne kuhinje.",
    ingredients: [
      "250g suve leblebije",
      "1 manji crni luk, grubo iseckan",
      "3 čena belog luka, grubo iseckana",
      "1/2 šolje svežeg peršuna, grubo iseckanog",
      "1/4 šolje svežeg korijandera, grubo iseckanog (opciono)",
      "2 kašike brašna (ili brašna od leblebija za bezglutensku varijantu)",
      "1 kašičica mlevenog kumina",
      "1/2 kašičice mlevenog korijandera",
      "1/4 kašičice kajenske paprike (opciono)",
      "1 kašičica soli",
      "1/2 kašičice sode bikarbone",
      "Ulje za prženje"
    ],
    instructions: [
      "Leblebije stavite u veliku posudu i prelijte hladnom vodom. Ostavite da se namaču najmanje 24 sata. Voda treba da ih prekrije za najmanje 5cm, jer će nabubriti.",
      "Nakon 24 sata, procedite leblebije i dobro ih isperite.",
      "U procesoru za hranu (food processor) stavite leblebije, crni luk, beli luk, peršun i korijander (ako koristite).",
      "Miksajte dok smesa ne postane gruba, ali i dalje dobro usitnjena. Nemojte previše miksati da se ne pretvori u pire.",
      "Prebacite smesu u posudu.",
      "Dodajte brašno, kumin, korijander u prahu, kajensku papriku (ako koristite), so i sodu bikarbonu. Dobro promešajte.",
      "Pokrijte posudu i ostavite u frižideru najmanje 30 minuta, a idealno 1 sat.",
      "Zagrejte ulje u dubokoj šerpi ili fritezi na 180°C.",
      "Kašikom ili rukama oblikujte smesu u male kuglice (oko 2.5 cm u prečniku).",
      "Pažljivo spuštajte falafel kuglice u vruće ulje u serijama, pazeći da ne prenatrpate šerpu.",
      "Pržite 3-4 minuta, ili dok ne postanu zlatno-braon i hrskave.",
      "Izvadite falafel kuglice iz ulja i stavite ih na papirni ubrus da se ocede od viška masnoće.",
      "Poslužite toplo sa pita hlebom, humusom, tahini sosom, salatom i povrćem."
    ],
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    servings: 7
  },

  "Hummus Classic": {
    name: "Hummus Classic",
    description: "Hummus je popularan namaz ili dip sa Bliskog istoka, napravljen od leblebija, tahinija, limunovog soka i začina. Odličan je kao prilog, namaz za sendviče ili dip za povrće.",
    ingredients: [
      "1 šolja suvih leblebija (ili 1 konzerva (400g) leblebija, oceđenih i ispranih)",
      "1/4 šolje tahinija",
      "1/4 šolje limunovog soka (od oko 2 limuna)",
      "2-3 čena belog luka, grubo iseckana",
      "1/4 šolje ledene vode",
      "2 kašike maslinovog ulja, plus malo za serviranje",
      "1/2 kašičice mlevenog kumina",
      "1/4 kašičice soli, ili po ukusu",
      "Prstohvat aleve paprike, za serviranje (opciono)"
    ],
    instructions: [
      "Ako koristite suve leblebije: Potopite leblebije u vodi preko noći (najmanje 8 sati). Ocedite ih i stavite u šerpu sa svežom vodom. Kuvajte ih dok ne omekšaju, oko 30-45 minuta. Ocedite leblebije, sačuvajte malo vode u kojoj su se kuvale.",
      "Ako koristite konzervirane leblebije: Dobro ih isperite pod hladnom vodom.",
      "U blender ili procesor za hranu, stavite tahini i limunov sok. Blendajte dok se ne sjedini, oko 1 minut.",
      "Dodajte beli luk, kumin i so. Blendajte dok se ne sjedini.",
      "Dodajte leblebije. Blendajte dok ne postane glatko. Ako je smesa pregusta, postepeno dodajte ledenu vodu ili sačuvanu vodu od kuvanja leblebija, dok ne dobijete željenu konzistenciju.",
      "Dodajte 2 kašike maslinovog ulja. Blendajte još kratko da se sjedini.",
      "Prebacite hummus u činiju za serviranje. Pokapajte sa malo maslinovog ulja i pospite alevom paprikom (ako koristite).",
      "Poslužite sa toplim pita hlebom, povrćem ili kao prilog uz jela sa roštilja."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 6
  },

  "Pho Vietnamese": {
    name: "Pho Vietnamese",
    description: "Bogata i aromatična vijetnamska supa sa rezancima.",
    ingredients: [
      "2 kg goveđih kostiju (butne kosti, zglobovi)",
      "1.5 kg govedine (grudi ili flank steak)",
      "3 litra vode",
      "1 velika glavica crnog luka",
      "5 cm đumbira",
      "1 kašika korijandera u zrnu",
      "1 kašičica zrna komorača",
      "5 celih karanfilića",
      "1 štapić cimeta",
      "2 kašike ribljeg sosa",
      "1 kašičica soli, ili po ukusu",
      "200g pho rezanaca (pirinčani rezanci)",
      "Ukrasi: sveži mungo klice, listovi korijandera, listovi bosiljka, limeta (isečena na kriške), tanko isečen crveni luk, ljuti sos (Sriracha ili čili pasta), hoisin sos"
    ],
    instructions: [
      "Goveđe kosti stavite u veliki lonac, prelijte hladnom vodom i prokuvajte. Kuvajte 10 minuta, zatim iscedite vodu i dobro isperite kosti. Ovo uklanja nečistoće.",
      "Govedinu (grudi ili flank steak) stavite u frižider.",
      "Crni luk i đumbir pecite na suvom tiganju ili direktno na plamenu dok ne pocrne sa svih strana. To pojačava aromu. Ostružite pougljene delove.",
      "U veliki lonac stavite oprane kosti, pečeni crni luk i đumbir. Dodajte korijander u zrnu, zrna komorača, karanfilić i štapić cimeta. Prelijte sa 3 litra vode. Pustite da provri, zatim smanjite vatru i kuvajte na laganoj vatri 3-4 sata. Povremeno skidajte penu koja se stvara na površini.",
      "Nakon 2 sata kuvanja supe, izvadite govedinu iz frižidera.",
      "Izvadite kosti i začine iz supe. Procedite supu kroz gustu cediljku. Vratite procedjenu supu u lonac. Dodajte riblji sos i so po ukusu. Pustite da provri.",
      "Dok se supa kuva, pripremite rezance prema uputstvima na pakovanju. Obično se prelivaju vrelom vodom dok ne omekšaju.",
      "Tanko isecite kuvanu govedinu (grudi ili flank steak). U duboku činiju stavite rezance, preko rezanaca stavite nekoliko komada govedine. Prelijte vrelom supom. Ukrasite sa mungo klicama, korijanderom, bosiljkom, crvenim lukom i kriškama limete. Poslužite sa ljutim sosom i hoisin sosom sa strane."
    ],
    prepTime: "30 minuta",
    cookTime: "240 minuta",
    servings: 6
  },

  "Kimchi Korean": {
    name: "Kimchi Korean",
    description: "Fermentisani ljuti kupus, osnovni deo korejske kuhinje.",
    ingredients: [
      "1.5 kg kineskog kupusa (Napa kupus)",
      "1/2 šolje krupne morske soli",
      "6 šolje vode",
      "1 šolja gochugaru (korejske ljuspice čilija)",
      "1/4 šolje ribljeg sosa (ili veganski riblji sos)",
      "1/4 šolje slatkog pirinčanog brašna (ili običnog brašna)",
      "1 šolja vode za kašu od brašna",
      "1 velika glavica belog luka, izgnječena",
      "1 komad đumbira (oko 5 cm), oljušten i izrendan",
      "1/2 šolje iseckanog mladog luka",
      "1/2 šolje iseckane rotkve daikon (ili obične rotkve)",
      "1/4 šolje iseckane šargarepe"
    ],
    instructions: [
      "Kupus iseći po dužini na četvrtine. Zatim svaku četvrtinu iseći na komade od oko 5 cm.",
      "U velikoj posudi pomešati kupus sa solju i 6 šolja vode. Dobro promešati da se so rastvori. Ostaviti da stoji 2 sata, povremeno mešajući.",
      "Dok se kupus soli, pripremiti kašu od brašna. U šerpi pomešati pirinčano brašno i 1 šolju vode. Kuvati na srednjoj vatri, uz stalno mešanje, dok se ne zgusne, oko 5 minuta. Ostaviti da se ohladi.",
      "Isprati kupus pod hladnom vodom tri puta da se ukloni so. Dobro ocediti.",
      "U velikoj posudi pomešati ohlađenu kašu od brašna, gochugaru, riblji sos, beli luk, đumbir, mladi luk, rotkvu i šargarepu. Dobro promešati.",
      "Dodati oceđeni kupus u smesu sa začinima i dobro promešati, pazeći da se svaki list kupusa obloži.",
      "Kimchi prebaciti u čistu teglu. Pritisnuti da se ukloni vazduh. Ostaviti malo prostora na vrhu.",
      "Pokriti teglu i ostaviti na sobnoj temperaturi da fermentira 3-7 dana. Svakodnevno proveravati i pritiskati kimchi da se oslobodi ugljen-dioksid.",
      "Kada kimchi postigne željenu kiselost, prebaciti u frižider da se zaustavi fermentacija."
    ],
    prepTime: "120 minuta",
    cookTime: "168 sati",
    servings: 10
  },

  "Dim Sum Steamed": {
    name: "Dim Sum Steamed",
    description: "Tradicionalni kineski zalogaji, savršeni za deljenje.",
    ingredients: [
      "250g brašna",
      "120ml vrele vode",
      "1 kašika ulja",
      "250g mlevenog svinjskog mesa",
      "100g očišćenih škampa, sitno iseckanih",
      "2 mlada luka, sitno iseckana",
      "1 kašika rendanog đumbira",
      "2 kašike soja sosa",
      "1 kašika susamovog ulja",
      "1 kašičica šećera",
      "1/2 kašičice belog bibera",
      "1 kašika kukuruznog skroba",
      "Soja sos",
      "Čili ulje (opciono)"
    ],
    instructions: [
      "U posudi pomešati brašno i ulje. Sipati vrelu vodu i mešati dok se ne formira testo.",
      "Izvaditi testo na pobrašnjenu površinu i mesiti 5-7 minuta dok ne postane glatko.",
      "Umotati testo u plastičnu foliju i ostaviti da odstoji 30 minuta.",
      "U velikoj posudi pomešati mleveno svinjsko meso, iseckane škampe, mladi luk, đumbir, soja sos, susamovo ulje, šećer, beli biber i kukuruzni skrob. Dobro promešati dok se svi sastojci ne sjedine.",
      "Podeliti testo na dva dela. Jedan deo vratiti pod foliju. Razviti testo na tanko, oko 2-3mm.",
      "Čašom ili kalupom prečnika 7-8cm izrezati krugove.",
      "Na svaki krug staviti po kašičicu fila.",
      "Sastaviti ivice testa i formirati male 'kesice'.",
      "Dim Sum kuvati na pari u bambusovim korpama ili na pari u šerpi, obloženoj gazom, oko 15-20 minuta ili dok testo ne postane providno i fil skuvan.",
      "Poslužiti toplo uz soja sos i čili ulje (opciono)."
    ],
    prepTime: "60 minuta",
    cookTime: "30 minuta",
    servings: 15
  },

  "Pierogi Polish": {
    name: "Pierogi Polish",
    description: "Tradicionalno poljsko jelo od testa punjenog raznim nadevima, kuvano i obično preprženo.",
    ingredients: [
      "2 šolje višenamenskog brašna",
      "1 jaje",
      "1/2 šolje tople vode",
      "2 kašike kisele pavlake",
      "1/2 kašičice soli",
      "1 kašika rastopljenog putera (opciono)",
      "500g krompira",
      "200g svežeg sira",
      "1 veliki luk",
      "2 kašike putera ili ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "Ogulite i skuvajte krompir dok ne omekša. Iscedite i izgnječite.",
      "U međuvremenu, sitno iseckajte luk i propržite ga na puteru ili ulju dok ne postane zlatan.",
      "U velikoj posudi pomešajte izgnječeni krompir, sveži sir i proprženi luk. Začinite solju i biberom po ukusu. Dobro promešajte i ostavite da se ohladi.",
      "U velikoj posudi pomešajte brašno i so.",
      "U posebnoj posudi umutite jaje, toplu vodu i kiselu pavlaku.",
      "Dodajte tečne sastojke suvim sastojcima i zamesite glatko testo. Ako je testo previše lepljivo, dodajte još malo brašna. Ako je previše suvo, dodajte malo vode.",
      "Umotajte testo u plastičnu foliju i ostavite da odstoji 30 minuta.",
      "Na pobrašnjenoj površini razvucite testo tanko (oko 3mm).",
      "Koristeći okruglu modlu ili čašu prečnika oko 7-8 cm, isecite krugove od testa.",
      "Na svaki krug stavite kašičicu nadeva od krompira i sira.",
      "Preklopite testo preko nadeva i pažljivo pritisnite ivice da se zatvore. Možete koristiti viljušku za zatvaranje ivica radi lepšeg izgleda.",
      "U velikom loncu zagrejte posoljanu vodu do ključanja.",
      "U vodu pažljivo ubacite pieroge (u serijama, da ne pretrpate lonac).",
      "Kada pierogi isplivaju na površinu, kuvajte ih još 2-3 minuta.",
      "Izvadite pieroge šupljikavom kašikom i stavite ih na tanjir.",
      "Rastopite malo putera ili ulja u tiganju. Pržite pieroge dok ne postanu zlatno-braon sa obe strane.",
      "Poslužite toplo sa kiselom pavlakom, proprženim lukom ili slaninom."
    ],
    prepTime: "60 minuta",
    cookTime: "30 minuta",
    servings: 12
  },

  "Goulash Hungarian": {
    name: "Goulash Hungarian",
    description: "Gusta, zasitna čorba od govedine, povrća i začina. Savršeno jelo za hladne dane.",
    ingredients: [
      "1.5 kg goveđeg mesa (npr. vrat ili plećka), isečenog na kockice od 2.5 cm",
      "2 kašike ulja",
      "2 velika crna luka, iseckana",
      "4 čena belog luka, iseckana",
      "2 kašike slatke aleve paprike",
      "1 kašika ljute aleve paprike (opciono)",
      "1 kašičica kima u prahu",
      "1 kašičica majorana",
      "1 lovorov list",
      "500 ml goveđeg bujona",
      "500 ml paradajz pirea",
      "500 g krompira, oljuštenog i isečenog na kockice",
      "2 crvene paprike, očišćene i iseckane",
      "1 žuta paprika, očišćene i iseckane",
      "So i biber po ukusu",
      "Kisela pavlaka ili jogurt za serviranje (opciono)",
      "Sveži peršun, iseckan (za serviranje)"
    ],
    instructions: [
      "U velikom loncu ili šerpi sa debelim dnom, zagrejte ulje na srednjoj vatri.",
      "Dodajte goveđe meso u serijama i pržite dok ne porumeni sa svih strana. Izvadite meso i ostavite sa strane.",
      "U isti lonac dodajte iseckani crni luk i pržite dok ne omekša i postane providan, oko 5-7 minuta. Dodajte iseckani beli luk i pržite još 1 minut.",
      "Vratite meso u lonac. Dodajte slatku i ljutu alevu papriku, kim, majoran i lovorov list. Dobro promešajte da se meso obloži začinima.",
      "Ulijte goveđi bujon i paradajz pire. Promešajte, dovedite do ključanja, a zatim smanjite vatru, poklopite i ostavite da se krčka najmanje 2 sata, ili dok meso ne postane mekano.",
      "Nakon 2 sata, dodajte krompir, crvenu i žutu papriku. Promešajte i nastavite da krčkate još 30-45 minuta, ili dok krompir i paprika ne omekšaju.",
      "Začinite solju i biberom po ukusu.",
      "Uklonite lovorov list pre serviranja.",
      "Poslužite vruće, sa kašikom kisele pavlake ili jogurta i posuto svežim iseckanim peršunom, ako želite."
    ],
    prepTime: "30 minuta",
    cookTime: "180 minuta",
    servings: 7
  },

  "Schnitzel Wiener": {
    name: "Schnitzel Wiener",
    description: "Tradicionalno jelo od tanko istučenog mesa, pohovanog i prženog do zlatno smeđe boje.",
    ingredients: [
      "4 svinjska ili teleća šnicla (oko 150g svaka)",
      "1/2 šolje brašna",
      "2 velika jaja",
      "1 šolja prezli",
      "So i biber po ukusu",
      "Ulje za prženje (suncokretovo ili repičino)",
      "Limun, kriške (za serviranje, opciono)"
    ],
    instructions: [
      "Šnicle stavite između dva sloja providne folije ili u kesu za zamrzavanje. Istružite ih tučkom za meso dok ne budu tanke, oko 5-6 mm debljine.",
      "Posolite i pobiberite šnicle sa obe strane.",
      "Pripremite tri duboka tanjira. U prvi tanjir stavite brašno. U drugi tanjir umutite jaja viljuškom. U treći tanjir stavite prezle.",
      "Svaku šniclu prvo uvaljajte u brašno, pazeći da je ravnomerno prekrivena.",
      "Zatim šniclu umočite u umućena jaja, pazeći da je skroz prekrivena.",
      "Na kraju, šniclu uvaljajte u prezle, pritiskajući da se prezle dobro zalepe.",
      "U velikom tiganju zagrejte ulje na srednjoj vatri. Ulja treba da bude dovoljno da šnicle mogu slobodno da plivaju.",
      "Pažljivo stavite šnicle u vrelo ulje i pržite ih oko 3-4 minuta sa svake strane, ili dok ne postanu zlatno smeđe i hrskave.",
      "Izvadite šnicle iz tiganja i stavite ih na papirni ubrus da se ocedi višak ulja.",
      "Poslužite šnicle odmah, tople. Uz njih možete poslužiti kriške limuna, pire krompir, pomfrit ili salatu."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Fish and Chips British": {
    name: "Fish and Chips British",
    description: "Klasično britansko jelo, hrskava riba u pivskom testu poslužena s prženim krompirićima.",
    ingredients: [
      "2 fileta bele ribe (bakalar, oslić, ili som), oko 150g svaki",
      "250g krompira, oljuštenog i isečenog na štapiće",
      "150g brašna, plus dodatno za posipanje",
      "1/2 kašičice praška za pecivo",
      "1/4 kašičice soli",
      "150ml hladnog svetlog piva",
      "Biljno ulje, za prženje",
      "So i biber, po ukusu",
      "Limun, za serviranje (opciono)"
    ],
    instructions: [
      "Potopite isečeni krompir u hladnu vodu najmanje 15 minuta. Osušite ih papirnim ubrusom.",
      "U velikoj činiji pomešajte brašno, prašak za pecivo i so. Postepeno dodajte hladno pivo i mešajte dok ne dobijete glatko testo. Ne mešajte previše.",
      "U dubokom loncu ili fritezi zagrejte ulje na 180°C.",
      "Pržite krompir u dva navrata. Prvo pržite na 160°C oko 5-7 minuta, dok ne omekšaju. Izvadite ih iz ulja i ostavite da se ocede. Povećajte temperaturu ulja na 180°C. Zatim ih pržite ponovo 2-3 minuta, dok ne postanu zlatno smeđi i hrskavi. Izvadite ih iz ulja i posolite.",
      "Posušite filete ribe papirnim ubrusom. Posolite i pobiberite.",
      "Posipajte ribu brašnom sa svih strana. Umočite svaki filet u pripremljeno testo, tako da bude potpuno prekriven.",
      "Pažljivo spustite ribu u zagrejano ulje i pržite 4-5 minuta sa svake strane, dok ne postane zlatno smeđa i hrskava.",
      "Izvadite ribu iz ulja i ostavite da se ocedi na papirnom ubrusu.",
      "Poslužite odmah: Poslužite ribu sa prženim krompirićima, limunom i tartar sosom (opciono)."
    ],
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    servings: 2
  },

  "Croissant Buttery": {
    name: "Croissant Buttery",
    description: "Hrskavi, lisnati kroasani, savršeni za doručak ili užinu.",
    ingredients: [
      "500g brašna (tip 500 ili 550)",
      "10g suvog kvasca (ili 25g svežeg kvasca)",
      "50g šećera",
      "10g soli",
      "250ml mlakog mleka",
      "50g otopljenog putera",
      "250g hladnog putera (za laminiranje)",
      "1 jaje (za premazivanje)",
      "malo mleka (za premazivanje)"
    ],
    instructions: [
      "U velikoj posudi pomešati brašno, kvasac, šećer i so.",
      "Dodati mlako mleko i otopljeni puter. Zamesiti testo dok ne postane glatko i elastično.",
      "Formirati testo u loptu, prekriti i ostaviti da odstoji 15 minuta.",
      "Na blago pobrašnjenoj površini razvaljati testo u pravougaonik debljine oko 1 cm.",
      "Hladan puter staviti između dva lista papira za pečenje i razvaljati u pravougaonik veličine otprilike polovine površine testa.",
      "Staviti puter na polovinu testa, preklopiti drugom polovinom testa preko putera. Dobro zatvoriti ivice.",
      "Uviti testo u plastičnu foliju i staviti u frižider na 1 sat.",
      "Na blago pobrašnjenoj površini razvaljati testo u pravougaonik. Presaviti testo na tri dela (kao pismo).",
      "Uviti testo u plastičnu foliju i staviti u frižider na još 1 sat.",
      "Ponoviti korake 8 i 9 još dva puta (razvaljati, presaviti, hladiti). Ukupno 4 preklapanja sa hlađenjem između.",
      "Nakon poslednjeg hlađenja, razvaljati testo u pravougaonik debljine oko 3 mm.",
      "Iseći testo na trouglove.",
      "Svaki trougao lagano razvući i urolati od šireg kraja prema užem.",
      "Staviti kroasane na pleh obložen papirom za pečenje.",
      "Pokriti kroasane i ostaviti da narastu na toplom mestu oko 1-1.5 sata.",
      "Zagrejati rernu na 180°C.",
      "Umutiti jaje sa malo mleka i premazati kroasane.",
      "Peći 18-22 minuta, ili dok ne porumene."
    ],
    prepTime: "30 minuta",
    cookTime: "22 minuta",
    servings: 12
  },

  "Baklava Traditional": {
    name: "Baklava Traditional",
    description: "Baklava je slatka poslastica od tankih kora, oraha i sirupa.",
    ingredients: [
      "500g tankih kora za baklavu",
      "250g mlevenih oraha",
      "100g seckanih oraha (za posipanje)",
      "200g otopljenog putera",
      "1 kašičica cimeta (opciono)",
      "500g šećera",
      "300ml vode",
      "1 limun (sok i kora)",
      "1 kesica vanilin šećera"
    ],
    instructions: [
      "U šerpu stavite šećer, vodu, sok i koru limuna. Kuvajte na umerenoj vatri dok se šećer ne rastopi, a zatim smanjite vatru i kuvajte još 15 minuta. Uklonite sa vatre i dodajte vanilin šećer. Ostavite da se ohladi.",
      "Zagrejte rernu na 180°C.",
      "Podmažite pleh (oko 30x20 cm) otopljenim puterom.",
      "Stavite jednu koru na dno pleha i premažite je otopljenim puterom. Ponavljajte postupak sa 5-6 kora.",
      "Pomešajte mlevene orahe sa cimetom (ako koristite). Ravnomerno rasporedite polovinu smese od oraha preko kora.",
      "Stavite ponovo 3-4 kore, svaku premazujući puterom.",
      "Preko kora rasporedite preostalu smesu od oraha.",
      "Pokrijte sa preostalim korama (5-6 kora), svaku premazujući puterom. Gornja kora treba da bude dobro premazana puterom.",
      "Oštrim nožem isecite baklavu na rombove ili kvadrate pre pečenja.",
      "Pecite u zagrejanoj rerni 40-45 minuta, ili dok ne porumeni.",
      "Vrelu baklavu prelijte hladnim sirupom.",
      "Pospite seckanim orasima.",
      "Ostavite baklavu da se ohladi i upije sirup najmanje 4 sata pre služenja."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 22
  },

  // Soup recipes (updated)
  "Chicken Soup": {
    name: "Chicken Soup",
    description: "Tradicionalna supa od piletine, savršena za hladne dane.",
    ingredients: [
      "1 celo pile (oko 1.5 kg)",
      "2 litra vode",
      "2 šargarepe, iseckane",
      "1 paškanat, iseckan",
      "1 glavica crnog luka, iseckana",
      "2 stabljike celera, iseckane",
      "1 kašičica suvog začina (vegete)",
      "So i biber po ukusu",
      "Svež peršun, iseckan (za serviranje)",
      "Rezanci za supu (po želji)"
    ],
    instructions: [
      "Pile stavite u veliki lonac.",
      "Dodajte vodu, šargarepu, paškanat, crni luk i celer.",
      "Stavite lonac na jaku vatru da provri.",
      "Kada provri, smanjite vatru na nisku, poklopite i kuvajte 1 sat, ili dok pile ne bude potpuno kuvano.",
      "Izvadite pile iz lonca i ostavite da se malo ohladi.",
      "Procedite supu kroz cediljku da biste uklonili povrće. Vratite proceđenu supu u lonac.",
      "Kada se pile dovoljno ohladi, skinite kožu i kosti, a meso iskidajte na komade.",
      "Vratite komade piletine u supu.",
      "Dodajte suvi začin, so i biber po ukusu.",
      "Ako koristite rezance za supu, dodajte ih u ovom trenutku i kuvajte prema uputstvima na pakovanju.",
      "Servirajte supu toplu, posutu svežim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "60 minuta",
    servings: 6,
    notes: [
      "Za bogatiji ukus, možete dodati i koren peršuna u supu.",
      "Umesto suvog začina, možete koristiti domaći bujon.",
      "U supu možete dodati i drugo povrće, kao što su grašak, boranija ili krompir."
    ],
    nutrition: { calories: "200", protein: "25g", fat: "8g", carbohydrates: "5g" }
  },
  "Tomato Soup": {
    name: "Tomato Soup",
    description: "Jednostavna i ukusna supa od paradajza, idealna za ručak ili večeru.",
    ingredients: [
      "1 kg zrelog paradajza",
      "1 veliki luk",
      "2 češnja belog luka",
      "2 kašike maslinovog ulja",
      "500 ml povrtnog ili pilećeg bujona",
      "1 kašičica šećera",
      "1/2 kašičice suvog bosiljka",
      "So i biber po ukusu",
      "Sveži bosiljak za dekoraciju (opciono)",
      "Pavlaka za kuvanje (opciono)"
    ],
    instructions: [
      "Paradajz operite i isecite na četvrtine. Luk i beli luk sitno iseckajte.",
      "U velikom loncu zagrejte maslinovo ulje na srednjoj vatri. Dodajte luk i pržite dok ne postane mekan i providan, oko 5 minuta.",
      "Dodajte beli luk i pržite još 1 minut, dok ne zamiriše.",
      "Dodajte paradajz, šećer, bosiljak, so i biber. Dobro promešajte.",
      "Ulijte bujon. Pustite da provri, zatim smanjite vatru, poklopite i kuvajte 20 minuta, ili dok paradajz ne omekša.",
      "Sklonite sa vatre i pažljivo izblendajte supu štapnim mikserom dok ne postane glatka.",
      "Vratite supu u lonac i zagrejte na niskoj vatri. Proverite ukus i po potrebi dodajte još soli i bibera.",
      "Poslužite toplo, ukrašeno svežim bosiljkom i/ili pavlakom za kuvanje (opciono)."
    ],
    prepTime: "10 minuta",
    cookTime: "30 minuta",
    servings: 4,
    notes: [
      "Za bogatiji ukus, paradajz možete peći u rerni pre kuvanja supe.",
      "Ako nemate sveži bosiljak, možete koristiti suvi.",
      "Supu možete držati u frižideru do 3 dana."
    ],
    nutrition: { calories: "150 kcal", protein: "4g", fat: "8g", carbohydrates: "15g" }
  },
  "Vegetable Soup": {
    name: "Vegetable Soup",
    description: "Osvežavajuća i hranljiva supa puna povrća.",
    ingredients: [
      "2 kašike maslinovog ulja",
      "1 veliki luk, sitno iseckan",
      "2 šargarepe, iseckane na kolutiće",
      "2 štapića celera, iseckana",
      "4 čena belog luka, sitno iseckana",
      "8 šolje povrtnog bujona",
      "1 konzerva (400g) seckanog paradajza",
      "1 šolja iseckanog kupusa",
      "1 šolja iseckanog brokolija",
      "1 šolja iseckanog karfiola",
      "1/2 šolje smrznutog graška",
      "1/2 šolje smrznutog kukuruza",
      "1 kašičica sušenog origana",
      "1 kašičica sušenog bosiljka",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za serviranje)"
    ],
    instructions: [
      "U velikom loncu zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte luk, šargarepu i celer. Dinstajte dok povrće ne omekša, oko 5-7 minuta.",
      "Dodajte beli luk i nastavite da dinstajte još 1 minut.",
      "Ulijte povrtni bujon i dodajte seckani paradajz. Pustite da provri.",
      "Dodajte kupus, brokoli i karfiol. Smanjite vatru, poklopite i kuvajte 15 minuta.",
      "Dodajte grašak, kukuruz, origano i bosiljak.",
      "Kuvajte još 5 minuta, dok povrće ne bude mekano.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite toplo, posuto svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 6,
    notes: [
      "Možete dodati bilo koje drugo povrće koje volite, kao što su tikvice, boranija ili spanać.",
      "Za bogatiji ukus, dodajte parmezanovu koru u supu dok se kuva. Izvadite koru pre serviranja."
    ],
    nutrition: { calories: "150", protein: "5g", fat: "5g", carbohydrates: "20g", fiber: "7g" }
  },
  "Mushroom Soup": {
    name: "Mushroom Soup",
    description: "Kremasta i ukusna supa od pečuraka, savršena kao predjelo ili lagani obrok.",
    ingredients: [
      "500g svežih pečuraka (šampinjoni, vrganji, ili mešavina)",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "4 kašike putera",
      "4 kašike brašna",
      "1.5l pilećeg ili povrtnog bujona",
      "250ml pavlake za kuvanje",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za dekoraciju)",
      "1 kašika maslinovog ulja"
    ],
    instructions: [
      "Očistite i isecite pečurke na tanke listiće.",
      "U velikoj šerpi ili loncu rastopite puter na srednjoj vatri. Dodajte iseckani crni luk i dinstajte dok ne postane staklast, oko 5 minuta.",
      "Dodajte iseckani beli luk i dinstajte još minut, pazeći da ne zagori.",
      "Dodajte iseckane pečurke u šerpu i dinstajte dok ne omekšaju i puste vodu, oko 10 minuta. Povremeno promešajte.",
      "Pospite brašno preko pečuraka i luka, i mešajte 1-2 minuta dok se brašno ne sjedini sa ostalim sastojcima.",
      "Postepeno ulijte pileći ili povrtni bujon, neprestano mešajući da se ne stvore grudvice.",
      "Pustite da supa provri, a zatim smanjite vatru i kuvajte 15 minuta, povremeno mešajući.",
      "Sklonite supu sa vatre i pažljivo je izmiksajte štapnim mikserom dok ne postane glatka i kremasta. Ako nemate štapni mikser, možete koristiti blender, ali budite oprezni pri prebacivanju vruće supe u blender.",
      "Vratite supu u šerpu i dodajte pavlaku za kuvanje. Mešajte dok se sve ne sjedini.",
      "Zagrejte supu na niskoj vatri, ali je ne dozvolite da provri.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite supu toplu, ukrašenu iseckanim svežim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4,
    notes: [
      "Za intenzivniji ukus pečuraka, možete koristiti sušene vrganje. Potopite ih u vrelu vodu 30 minuta, a zatim ih isecite i dodajte u supu zajedno sa svežim pečurkama.",
      "Možete dodati malo suvog belog vina (oko 100ml) u supu nakon što su pečurke omekšale, da biste poboljšali ukus. Pustite da vino ispari pre nego što dodate brašno.",
      "Za vegetarijansku verziju, koristite povrtni bujon."
    ],
    nutrition: { calories: "250-300", protein: "8-10g", fat: "18-22g", carbohydrates: "15-20g" }
  },
  "Onion Soup": {
    name: "Onion Soup",
    description: "Klasična francuska supa od luka, bogata i aromatična, savršena za hladne dane.",
    ingredients: [
      "1 kg crnog luka",
      "50 g putera",
      "2 kašike maslinovog ulja",
      "1 kašičica šećera",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "2 čena belog luka, sitno iseckana",
      "150 ml suvog belog vina (opciono)",
      "1.5 l goveđe supe",
      "1 lovorov list",
      "Baget, isečen na kriške",
      "150 g rendanog Gruyère sira (ili nekog drugog topljivog sira)"
    ],
    instructions: [
      "Oljuštiti i tanko iseći crni luk.",
      "U velikoj šerpi otopiti puter na srednjoj vatri, dodati maslinovo ulje.",
      "Dodati crni luk, šećer, so i biber. Kuvati na laganoj vatri, uz često mešanje, oko 45 minuta dok luk ne postane karamelizovan i zlatno smeđe boje.",
      "Dodati beli luk i kuvati još 2 minuta.",
      "Ako koristite vino, dodati ga u šerpu i kuvati dok se tečnost ne smanji za pola, oko 5 minuta.",
      "Dodati goveđu supu i lovorov list. Pustiti da provri, zatim smanjiti vatru i kuvati 15 minuta.",
      "Zagrejte rernu na 180°C.",
      "Napuniti vatrostalne činije za supu supom.",
      "Prekriti svaku činiju kriškama bageta.",
      "Posuti baget sa rendanim sirom.",
      "Peći u rerni 5-10 minuta, ili dok se sir ne otopi i blago ne porumeni.",
      "Poslužiti odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "60 minuta",
    servings: 4,
    notes: [
      "Za jači ukus, možete dodati malo Worcestershire sosa u supu.",
      "Možete koristiti i pileću supu umesto goveđe.",
      "Ako nemate vatrostalne činije, poslužite supu u običnim činijama i zapečeni hleb sa sirom odvojeno."
    ],
    nutrition: { calories: "450-550", protein: "20-25g", fat: "25-35g", carbohydrates: "30-40g" }
  },
  "Minestrone": {
    name: "Minestrone",
    description: "Italijanska supa od povrća, savršena kao lagani ručak ili večera.",
    ingredients: [
      "2 kašike maslinovog ulja",
      "1 veliki luk, iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "1 konzerva (400g) seckanog paradajza",
      "1.5 litara povrtnog bujona",
      "1 konzerva (400g) pasulja, ispranog i oceđenog",
      "100g testenine (ditalini ili makarone)",
      "1 tikvica, iseckana na kockice",
      "100g kelja ili spanaća, grubo iseckanog",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za serviranje)",
      "Rendani parmezan (opciono, za serviranje)"
    ],
    instructions: [
      "U velikoj šerpi zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte luk, šargarepu i celer i dinstajte dok povrće ne omekša, oko 5-7 minuta.",
      "Dodajte beli luk, origano i bosiljak i kuvajte još minut, dok ne zamiriše.",
      "Umešajte seckani paradajz i povrtni bujon. Pustite da provri, a zatim smanjite vatru i ostavite da se krčka 15 minuta.",
      "Dodajte pasulj i testeninu i kuvajte dok testenina ne bude al dente, oko 8-10 minuta.",
      "Dodajte tikvice i kelj (ili spanać) i kuvajte dok povrće ne omekša, oko 5 minuta.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite vruće, posuto svežim peršunom i rendanim parmezanom, ako želite."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 6,
    notes: [
      "Možete koristiti bilo koje povrće koje imate pri ruci, kao što su krompir, boranija ili karfiol.",
      "Za bogatiji ukus, možete dodati malo pesta na kraju kuvanja.",
      "Supa se može čuvati u frižideru do 3 dana."
    ],
    nutrition: { calories: "250-300", protein: "12g", fat: "8g", carbohydrates: "40g", fiber: "10g" }
  },
  "Lentil Soup": {
    name: "Lentil Soup",
    description: "Supa od leće, savršena za hladne dane. Hranljiva i zasitna.",
    ingredients: [
      "1 šolja (200g) suve zelene ili braon leće",
      "2 kašike maslinovog ulja",
      "1 veliki luk, sitno iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "4 čena belog luka, sitno iseckana",
      "8 šolja (2 litra) povrtnog ili pilećeg bujona",
      "1 konzerva (400g) seckanog paradajza",
      "1 kašičica sušenog timijana",
      "1/2 kašičice sušenog origana",
      "1 lovorov list",
      "So i biber po ukusu",
      "Svež peršun, seckan (za serviranje)"
    ],
    instructions: [
      "Leću isperite pod hladnom vodom.",
      "U velikom loncu zagrejte maslinovo ulje na srednjoj vatri. Dodajte luk, šargarepu i celer i dinstajte dok ne omekšaju, oko 5-7 minuta.",
      "Dodajte beli luk i dinstajte još 1 minut, dok ne zamiriše.",
      "Dodajte leću, bujon, seckani paradajz, timijan, origano i lovorov list. Promešajte i dovedite do ključanja.",
      "Smanjite vatru, poklopite i ostavite da se krčka 30-40 minuta, ili dok leća ne omekša.",
      "Izvadite lovorov list. Probajte i dodajte so i biber po ukusu.",
      "Ako želite glatku supu, možete deo supe izblendati štapnim mikserom ili u blenderu (pažljivo, jer je vruće).",
      "Poslužite toplo, posuto svežim peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "45 minuta",
    servings: 6,
    notes: [
      "Možete dodati i drugo povrće po želji, kao što su krompir, tikvice ili spanać.",
      "Za bogatiji ukus, dodajte dimljenu slaninu ili kobasicu iseckanu na kockice na početku kuvanja, pre povrća.",
      "Supa se može čuvati u frižideru do 3 dana."
    ],
    nutrition: { calories: "250-300", protein: "15-20g", carbohydrates: "40-45g", fat: "5-10g", fiber: "10-15g" }
  },
  "Split Pea Soup": {
    name: "Split Pea Soup",
    description: "Bogata i ukusna supa od graška, savršena za hladne dane.",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 veliki luk, iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "2 čena belog luka, mlevena",
      "250g suvog zelenog graška, ispranog",
      "2 litra pileće ili povrtne supe",
      "1 lovorov list",
      "1 dimljena šunka ili dimljeno meso (oko 200g), opciono",
      "So i biber po ukusu",
      "Sveži peršun, za ukras (opciono)"
    ],
    instructions: [
      "U velikom loncu zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte luk, šargarepu i celer i dinstajte dok ne omekšaju, oko 5-7 minuta.",
      "Dodajte beli luk i dinstajte još 1 minut, dok ne zamiriše.",
      "Dodajte suvi grašak, pileću ili povrtnu supu, lovorov list i dimljenu šunku (ako koristite).",
      "Pustite da provri, zatim smanjite vatru, poklopite i kuvajte na laganoj vatri 1 sat i 15 minuta, ili dok grašak ne omekša.",
      "Izvadite dimljenu šunku (ako ste je koristili) i iseckajte je na kockice. Vratite iseckanu šunku u supu.",
      "Izvadite lovorov list.",
      "Koristeći potapajući blender ili običan blender, izmiksajte supu dok ne postane glatka. Pažljivo radite sa toplom tečnošću.",
      "Vratite supu u lonac i zagrejte. Začinite solju i biberom po ukusu.",
      "Servirajte toplo, ukrašeno svežim peršunom (opciono)."
    ],
    prepTime: "15 minuta",
    cookTime: "1 sat 30 minuta",
    servings: 6,
    notes: [
      "Za vegetarijansku verziju, izostavite šunku i koristite povrtnu supu.",
      "Za gušću supu, izmiksajte veću količinu graška.",
      "Supa se može čuvati u frižideru do 3 dana."
    ],
    nutrition: { calories: "250-350", protein: "15-25g", fat: "5-15g", carbohydrates: "30-40g" }
  },
  "Clam Chowder": {
    name: "Clam Chowder",
    description: "Kremasta i ukusna čorba od školjki, savršena za hladne dane.",
    ingredients: [
      "1 kg svežih školjki (ili 500g konzerviranih, oceđenih)",
      "120g slanine, iseckane",
      "1 veliki luk, iseckan",
      "2 stabljike celera, iseckane",
      "2 čena belog luka, sitno iseckana",
      "500g krompira, oljuštenog i isečenog na kockice",
      "500ml pileće supe (ili voda + kocka za supu)",
      "250ml pavlake za kuvanje (ili mleka)",
      "2 kašike brašna",
      "2 kašike putera",
      "So i biber po ukusu",
      "Sveži peršun, seckani (za posluživanje)"
    ],
    instructions: [
      "Ako koristite sveže školjke, dobro ih operite, skuvajte da se otvore i sačuvajte tečnost (procedite). Iseckajte meso školjki.",
      "U masnoći od pržene slanine dinstajte luk i celer dok ne omekšaju. Dodajte beli luk i kuvajte još minut.",
      "Ubacite krompir i prelijte pilećom supom i tečnošću od školjki (ako je imate). Kuvajte dok krompir ne omekša (oko 15-20 minuta).",
      "Napravite zapršku od putera i brašna i umešajte u čorbu da se zgusne.",
      "Smanjite vatru i dodajte pavlaku, seckane školjke i prženu slaninu. Začinite.",
      "Kuvajte na niskoj vatri još 5-10 minuta, bez ključanja. Poslužite toplo."
    ],
    prepTime: "20 minuta",
    cookTime: "45 minuta",
    servings: 6,
    notes: [
      "Za bogatiji ukus, možete dodati malo dimljene paprike ili majčine dušice.",
      "Ako ne volite komadiće krompira, deo čorbe možete izblendirati pre dodavanja školjki i pavlake.",
      "Čorba se može čuvati u frižideru do 3 dana."
    ],
    nutrition: { calories: "350-400", fat: "25-30g", protein: "20-25g", carbohydrates: "20-25g" }
  },
  "Gazpacho": {
    name: "Gazpacho",
    description: "Hladna supa od sirovog povrća, savršena za vrele letnje dane. Osvežavajuća i puna vitamina.",
    ingredients: [
      "1 kg zrelog paradajza",
      "1 krastavac srednje veličine",
      "1 zelena paprika",
      "1 crveni luk srednje veličine",
      "2 čena belog luka",
      "50 ml ekstra devičanskog maslinovog ulja",
      "30 ml vinskog sirćeta (ili limunovog soka)",
      "100 ml hladne vode (po potrebi)",
      "So po ukusu",
      "Biber po ukusu",
      "Malo svežeg peršuna ili korijandera (za dekoraciju)"
    ],
    instructions: [
      "Pripremite i iseckajte svo povrće.",
      "U blenderu pomešajte paradajz, krastavac, papriku, crveni luk, beli luk, maslinovo ulje i sirće i blendajte do glatke smese.",
      "Začinite solju i biberom, razredite vodom po potrebi.",
      "Ohladite najmanje 2 sata (idealno preko noći).",
      "Poslužite hladno, ukrašeno svežim začinskim biljem."
    ],
    prepTime: "20 minuta",
    cookTime: "2 sata hlađenja",
    servings: 4,
    notes: [
      "Za intenzivniji ukus paradajza, možete ga blanširati i oljuštiti.",
      "Gazpačo možete poslužiti uz kockice hleba, seckani krastavac, papriku ili luk.",
      "Za kremastiju teksturu, dodajte komadić starog hleba natopljenog u vodi."
    ],
    nutrition: { calories: "150-200 kcal", fat: "10-15 g", carbohydrates: "10-15 g", protein: "3-5 g" }
  },
  "Borscht": {
    name: "Borscht",
    description: "Tradicionalna supa od cvekle, bogata ukusima i savršena za hladne dane.",
    ingredients: [
      "500g goveđe kosti ili komadi mesa (npr. rebra)",
      "2 litre vode",
      "1 veliki luk, sitno iseckan",
      "2 srednje šargarepe, iseckane ili narendane",
      "2-3 srednje cvekle, oljuštene i iseckane na štapiće ili narendane",
      "2-3 krompira, oljuštena i iseckana na kockice",
      "1/2 glavice kupusa, tanko iseckanog",
      "2 kašike paradajz pirea",
      "1 kašika sirćeta (ili limunovog soka)",
      "2 čena belog luka, sitno iseckana",
      "1 lovorov list",
      "4-5 zrna bibera",
      "So i biber po ukusu",
      "Sveži peršun ili mirođija, sitno iseckana (za posluživanje)",
      "Pavlaka (za posluživanje, opciono)"
    ],
    instructions: [
      "Skuvajte bujon sa kostima/mesom, uklonite penu.",
      "Dodajte luk, šargarepu, lovor i biber u zrnu i kuvajte oko 1 sat.",
      "Izvadite meso, iseckajte i vratite u lonac.",
      "Dodajte cveklu sa sirćetom i kuvajte 15-20 minuta.",
      "Dodajte krompir i kupus, kuvajte 15 minuta.",
      "Umešajte paradajz pire i beli luk, kuvajte još 5 minuta.",
      "Začinite i poslužite uz sveže bilje i pavlaku po želji."
    ],
    prepTime: "30 minuta",
    cookTime: "1.5-2 sata",
    servings: 6,
    notes: [
      "Za bogatiji ukus, možete dodati malo šećera uz sirće/limunov sok.",
      "Borscht se može čuvati u frižideru do 3 dana.",
      "Možete koristiti i pileći ili povrtni bujon umesto goveđeg."
    ],
    nutrition: { calories: "250-350", protein: "15-20g", fat: "10-15g", carbohydrates: "30-40g" }
  },
  "Miso Soup": {
    name: "Miso Soup",
    description: "Miso supa je jednostavna i ukusna japanska supa, idealna kao predjelo ili lagani obrok.",
    ingredients: [
      "4 šolje dashi bujona (ili pileća/povrtna supa)",
      "2 kašike miso paste (beli ili crveni miso)",
      "1/4 šolje tofu sira, isečenog na kockice",
      "1/4 šolje wakame alge, suve",
      "1 zeleni luk, isečen na tanke kolutiće"
    ],
    instructions: [
      "Rehidrirajte wakame alge u toploj vodi 5 minuta.",
      "Zagrejte dashi bujon, ne dozvolite da provri.",
      "Rastvorite miso pastu u malo tople supe, zatim vratite u šerpu.",
      "Dodajte alge i tofu, kuvajte još 2-3 minuta bez ključanja.",
      "Sipajte u činije i pospite zelenim lukom."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 2,
    notes: [
      "Za intenzivniji ukus dodajte malo đumbira ili beli luk.",
      "Dodajte pečurke (shitake, enoki), nori ili šargarepu po želji.",
      "Ne kuvajte nakon dodavanja miso paste."
    ],
    nutrition: { calories: "70-100", protein: "5-7g", fat: "3-5g", carbohydrates: "5-8g" }
  },
  "Pho": {
    name: "Pho",
    description: "Vijetnamska supa sa rezancima, aromatičnim bujonom i mesom.",
    ingredients: [
      "2 kg goveđih kostiju (kolenice, rebra)",
      "2 litra vode",
      "500g govedine (flank steak, brisket, ili slično)",
      "1 veliki crni luk",
      "5 cm đumbira",
      "1 štapić cimeta",
      "5 karanfilića",
      "1 kašičica semena korijandera",
      "2 zvezdana anisa",
      "1 kašika ribljeg sosa",
      "1 kašičica šećera",
      "So po ukusu",
      "300g Pho rezanaca",
      "Sveži bosiljak",
      "Sveži mungo klice",
      "Zeleni luk, iseckan",
      "Čili papričice (opciono)",
      "Limeta, isečena na kriške",
      "Sriracha sos (opciono)",
      "Hoisin sos (opciono)"
    ],
    instructions: [
      "Blanširajte kosti i isperite.",
      "Vratite kosti sa svežom vodom, dodajte pečeni luk i đumbir, začine i krčkajte 3-4 sata (ili 45 minuta u ekspres loncu).",
      "Procedite bujon, začinite ribljim sosom, šećerom i solju.",
      "Isecite govedinu na tanke kriške.",
      "Skuvajte rezance prema uputstvu.",
      "Složite rezance i govedinu u činije i prelijte vrelim bujonom.",
      "Ukrasite bosiljkom, klicama, zelenim lukom i čilijem; poslužite sa limetom, srirachom i hoisinom."
    ],
    prepTime: "30 minuta",
    cookTime: "3-4 sata (45 min u ekspres loncu)",
    servings: 5,
    notes: [
      "Koristite kombinaciju različitih kostiju za dublji ukus.",
      "Bujon se može pripremiti unapred i čuvati ili zamrznuti."
    ],
    nutrition: { calories: "400-500", protein: "30-40g", fat: "15-25g", carbohydrates: "40-50g" }
  },
  "Ramen": {
    name: "Ramen",
    description: "Bogata supa sa rezancima, povrćem i mesom (opciono).",
    ingredients: [
      "200g ramen rezanaca",
      "1.5 l pilećeg ili povrtnog bujona",
      "2 kašike soja sosa",
      "1 kašika mirina (opciono)",
      "1 čen belog luka, sitno iseckan",
      "1 komad đumbira (oko 2cm), izrendan",
      "100g mesa, tanko isečenog (opciono)",
      "1 jaje",
      "1 mladi luk, iseckan",
      "1 šargarepa, iseckana na tanke štapiće",
      "100g pečuraka, iseckanih",
      "Susamovo ulje, po ukusu",
      "Susam, za posipanje",
      "Nori alga, isečena na trake (opciono)"
    ],
    instructions: [
      "Skrutite jaje po želji, oljuštite i prepolovite.",
      "Zagrejte bujon sa soja sosom, mirinom, belim lukom i đumbirom.",
      "Ako koristite meso, skuvajte ga u bujonu 5-7 minuta.",
      "Dodajte šargarepu i pečurke i kuvajte 3-5 minuta.",
      "Suvremeno skuvajte rezance, ocedite.",
      "Rasporedite rezance u činije, prelijte supom i dodajte dodatke.",
      "Pokapajte susamovim uljem i pospite susamom."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 2,
    notes: [
      "Za pikantniji ukus dodajte čili ili srirachu.",
      "Umesto mesa koristite tofu ili morske plodove."
    ],
    nutrition: { calories: "450-600", protein: "25-35g", fat: "15-25g", carbohydrates: "50-70g" }
  },
  "Hot and Sour Soup": {
    name: "Hot and Sour Soup",
    description: "Pikantna i kisela supa, veoma ukusna.",
    ingredients: [
      "8 šolji pilećeg bujona",
      "1/4 šolje sušenih kineskih gljiva (black fungus), potopljenih i iseckanih",
      "1/2 šolje bambusovih izdanaka, iseckanih",
      "1/2 šolje tofu sira, iseckanog na kockice",
      "1/4 šolje šargarepe, iseckane na tanke trake",
      "2 zelena luka, iseckana",
      "2 kašike pirinčanog sirćeta",
      "1-2 kašike soja sosa",
      "1 kašičica susamovog ulja",
      "1 kašičica belog bibera",
      "1/2 kašičice šećera",
      "1/4 kašičice mlevene ljute paprike",
      "2 kašike kukuruznog skroba",
      "2 kašike vode",
      "1 jaje, blago umućeno",
      "Sveži korijander (opciono)"
    ],
    instructions: [
      "Zagrejte bujon do ključanja.",
      "Dodajte gljive, bambus, tofu, šargarepu i zeleni luk; kuvajte 10 minuta.",
      "Dodajte mešavinu pirinčanog sirćeta, soja sosa, susamovog ulja, belog bibera, šećera i čilija.",
      "Zgusnite supu kašom od kukuruznog skroba i vode.",
      "Polako sipajte umućeno jaje uz mešanje da se formiraju niti jaja.",
      "Kuvajte još 1-2 minuta i poslužite, ukrašeno korijanderom."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4,
    notes: [
      "Prilagodite ljutinu po ukusu.",
      "Koristite kvalitetan bujon za najbolji ukus."
    ],
    nutrition: { calories: "150-200", fat: "5-10g", carbohydrates: "10-15g", protein: "10-15g" }
  },
  "Cream of Broccoli": {
    name: "Cream of Broccoli",
    description: "Kremasta i ukusna supa od brokolija, savršena kao predjelo ili lagani obrok.",
    ingredients: [
      "1 glavica brokolija, isečena na cvetiće",
      "1 veliki luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "4 šolje pileće ili povrtne supe",
      "1/2 šolje pavlake za kuvanje",
      "2 kašike maslinovog ulja",
      "So i biber po ukusu",
      "Rendani parmezan (opciono)"
    ],
    instructions: [
      "Zagrejte maslinovo ulje, dinstajte luk do staklastog.",
      "Dodajte beli luk na 1 minut.",
      "Dodajte brokoli i supu; kuvajte 15-20 minuta dok ne omekša.",
      "Izblendajte do glatkog, vratite u lonac i dodajte pavlaku; zagrejte bez ključanja.",
      "Začinite i poslužite uz parmezan (opciono)."
    ],
    prepTime: "15 minuta",
    cookTime: "25 minuta",
    servings: 4,
    notes: [
      "Za bogatiji ukus dodajte kašiku putera.",
      "Za gušću supu dodajte malo kukuruznog skroba razmućenog u vodi."
    ],
    nutrition: { calories: "150-200", fat: "10-15g", carbohydrates: "10-15g", protein: "5-8g" }
  },
  "Beef Stew": {
    name: "Beef Stew",
    description: "Tradicionalni gulaš od govedine, savršen za hladne dane.",
    ingredients: [
      "1 kg govedine, isečena na kocke",
      "2 kašike maslinovog ulja",
      "1 veliki luk, iseckan",
      "2 šargarepe, kolutići",
      "2 stabljike celera, iseckane",
      "3 čena belog luka, iseckana",
      "2 kašike brašna",
      "500 ml goveđe supe",
      "500 ml crvenog vina (opciono)",
      "2 kašike paradajz pirea",
      "1 kašičica suvog timijana",
      "1 kašičica suvog ruzmarina",
      "2 lovorova lista",
      "500 g krompira, kockice",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za serviranje)"
    ],
    instructions: [
      "Začinite i propržite govedinu do rumene; izvadite.",
      "Dinstajte luk, šargarepu i celer; dodajte beli luk.",
      "Pospite brašnom i promešajte, pa postepeno dodajte supu (i vino ako koristite).",
      "Dodajte paradajz pire i začine; vratite govedinu i krčkajte 2 sata.",
      "Dodajte krompir i kuvajte 30-45 minuta dok ne omekša.",
      "Uklonite lovor, poslužite posuto peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "2-3 sata",
    servings: 7,
    notes: [
      "Za bogatiji ukus koristite goveđu kost u supi.",
      "Možete dodati pečurke ili repu."
    ],
    nutrition: { calories: "450-550", protein: "30-40g", fat: "20-30g", carbohydrates: "30-40g" }
  },
  "Fish Soup": {
    name: "Fish Soup",
    description: "Tradicionalna riblja čorba, bogata ukusom i savršena za hladne dane.",
    ingredients: [
      "1 kg raznovrsne ribe (šaran, som, smuđ...)",
      "2 glavice crnog luka, sitno iseckane",
      "2 šargarepe, iseckane na kolutiće",
      "1 koren peršuna, iseckan",
      "1 komad celera, iseckan",
      "2 kašike ulja",
      "2 kašičice mlevene crvene paprike",
      "1 kašičica ljute mlevene paprike (opciono)",
      "1 lovorov list",
      "1/2 kašičice bibera u zrnu",
      "So po ukusu",
      "Peršunov list, sitno iseckan (za posluživanje)",
      "Limun, kriške (za posluživanje)"
    ],
    instructions: [
      "Pripremite ribu; kosti sačuvajte za bujon.",
      "Dinstajte luk, zatim dodajte povrće.",
      "Dodajte papriku, kratko propržite.",
      "Dodajte kosti i vodu; kuvajte 30 minuta sa lovorom i biberom u zrnu.",
      "Procedite, vratite supu u lonac i dodajte komade ribe; kuvajte 15-20 minuta.",
      "Posolite i poslužite sa peršunom i limunom."
    ],
    prepTime: "20 minuta",
    cookTime: "60 minuta",
    servings: 6,
    notes: [
      "Dodajte malo belog vina tokom kuvanja za bogatiji ukus.",
      "Intenzitet ljutine prilagodite ukusu."
    ],
    nutrition: { calories: "250-350", protein: "30-40g", fat: "10-20g", carbohydrates: "5-10g" }
  },
  "Corn Chowder": {
    name: "Corn Chowder",
    description: "Bogata i kremasta čorba od kukuruza, savršena za hladne dane.",
    ingredients: [
      "1 kašika maslinovog ulja",
      "1 srednji crni luk, sitno iseckan",
      "2 štapića celera, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog timijana",
      "4 šolje pilećeg bujona",
      "4 šolje kukuruza (smrznutog ili svežeg)",
      "1 veliki krompir, kockice",
      "1 šolja mleka ili pavlake za kuvanje",
      "So i biber po ukusu",
      "Sveži vlašac ili peršun, iseckan"
    ],
    instructions: [
      "Dinstajte luk i celer na ulju dok ne omekšaju; dodajte beli luk i timijan.",
      "Dodajte bujon, kukuruz i krompir; kuvajte 15-20 minuta.",
      "Delimično izblendajte deo čorbe i vratite u lonac.",
      "Dodajte mleko/pavlaku i zagrejte bez ključanja; začinite i poslužite.",
      "Ukrasite svežim vlašcem ili peršunom."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 6,
    notes: [
      "Dodajte hrskavu slaninu kao dekoraciju za bogatiji ukus.",
      "Malo čilija u prahu za blagu ljutinu."
    ],
    nutrition: { calories: "250", protein: "8g", fat: "8g", carbohydrates: "40g" }
  },
  "Potato Soup": {
    name: "Potato Soup",
    description: "Kremasta i ukusna supa od krompira, savršena za hladne dane.",
    ingredients: [
      "1 kg krompira, oljušten i isečen na kockice",
      "1 veliki crni luk, iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "4 čena belog luka, sitno iseckana",
      "1.5 l povrtnog ili pilećeg bujona",
      "250 ml mleka ili pavlake za kuvanje",
      "2 kašike putera",
      "2 kašike maslinovog ulja",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za ukras)",
      "Krutoni (opciono)"
    ],
    instructions: [
      "Otopite puter sa uljem; dinstajte luk, šargarepu i celer 5-7 minuta.",
      "Dodajte beli luk na 1 minut.",
      "Dodajte krompir, promešajte, sipajte bujon i kuvajte 15-20 minuta.",
      "Izblendajte do kremaste teksture, vratite u lonac i dodajte mleko/pavlaku.",
      "Začinite, poslužite uz peršun i krutone."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 6,
    notes: [
      "Dodajte dimljenu slaninu ili šunku za bogatiji ukus.",
      "Ukrasite kašikom kisele pavlake ili jogurta."
    ],
    nutrition: { calories: "250-300", fat: "10-15g", carbohydrates: "35-40g", protein: "5-7g" }
  },

  // Steak recipes (updated)
  "Ribeye Steak": {
    name: "Ribeye Steak",
    description: "Sočan i ukusan odrezak, savršen za posebne prilike ili brzi obrok.",
    ingredients: [
      "1 ribeye odrezak (debljine oko 2.5 cm, oko 300g)",
      "1 kašika maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "1 čen belog luka (izgnječen)",
      "1 grančica ruzmarina (opciono)",
      "1 kašika putera (opciono)"
    ],
    instructions: [
      "Izvadite odrezak iz frižidera 30 minuta pre kuvanja da dostigne sobnu temperaturu.",
      "Zagrejte tiganj od livenog gvožđa ili debelo dno na jakoj vatri.",
      "Obrišite odrezak papirnim ubrusom i premažite ga maslinovim uljem.",
      "Pomešajte so i biber, pa ih ravnomerno pospite po obe strane odreska.",
      "Kada se tiganj dobro zagreje, pažljivo stavite odrezak u tiganj.",
      "Pecite 3-4 minuta sa jedne strane za medium-rare.",
      "Okrenite odrezak i pecite još 3-4 minuta za medium-rare (produžite za jače pečen).",
      "Dodajte beli luk i ruzmarin (opciono).",
      "Dodajte puter (opciono) i kašikom prelivajte odrezak topljenim puterom.",
      "Izvadite odrezak i odmorite 5-10 minuta.",
      "Secite preko vlakana i poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "8-12 minuta",
    servings: 1,
    notes: [
      "Rare: 52-54°C; Medium-Rare: 54-57°C; Medium: 60-63°C; Medium-Well: 65-68°C; Well-Done: 71°C+",
      "Vreme pečenja zavisi od debljine i jačine vatre."
    ],
    nutrition: { calories: "700-900", protein: "50-60g", fat: "50-70g" }
  },
  "Filet Mignon": {
    name: "Filet Mignon",
    description: "Nežan i sočan komad mesa, idealan za posebne prilike.",
    ingredients: [
      "2 komada file mignon (oko 200g svaki)",
      "2 kašike maslinovog ulja",
      "2 kašike putera",
      "2 čena belog luka, zgnječena",
      "1 grančica ruzmarina",
      "So i biber po ukusu"
    ],
    instructions: [
      "Izvadite meso 30 minuta pre kuvanja.",
      "Začinite solju i biberom.",
      "Zagrejte ulje u tiganju na jakoj vatri.",
      "Pecite 3-4 minuta sa svake strane (prilagodite pečenost).",
      "Smanjite vatru, dodajte puter, beli luk i ruzmarin i prelivajte 1-2 minuta.",
      "Odmorite 5-10 minuta pre serviranja."
    ],
    prepTime: "10 minuta",
    cookTime: "15-20 minuta",
    servings: 2,
    notes: [
      "Za srednje-retko pecite 2-3 minuta po strani; za dobro pečeno 5-6 minuta.",
      "Može se dovršiti u rerni na 200°C 5-7 minuta."
    ],
    nutrition: { calories: "400-500", protein: "40-50g", fat: "25-35g", carbohydrates: "0g" }
  },
  "New York Strip": {
    name: "New York Strip",
    description: "Savršeno pečeni strip odrezak, sočan i pun ukusa.",
    ingredients: [
      "1 New York Strip odrezak (oko 300g, debljine 2.5cm)",
      "1 kašika maslinovog ulja",
      "1/2 kašičice soli",
      "1/4 kašičice sveže mlevenog bibera",
      "1 čen belog luka, izgnječen (opciono)",
      "1 grančica ruzmarina ili majčine dušice (opciono)",
      "1 kašika putera (opciono)"
    ],
    instructions: [
      "Odmorite steak 30 minuta van frižidera i osušite.",
      "Utrljajte ulje, so i biber.",
      "Zagrejte teški tiganj do dimljenja.",
      "Pecite 3-4 minuta po strani (prilagodite).",
      "Dodajte beli luk i začinsko bilje poslednja 2 minuta i prelivajte puterom (ako koristite).",
      "Odmorite 5-10 minuta pod folijom; secite popreko na vlakna."
    ],
    prepTime: "5 minuta",
    cookTime: "10-15 minuta",
    servings: 1,
    notes: [
      "Za intenzivniji ukus koristite suvu salamuru dan ranije."
    ],
    nutrition: { calories: "600-800", protein: "50-60g", fat: "40-60g", carbohydrates: "0g" }
  },
  "T-Bone Steak": {
    name: "T-Bone Steak",
    description: "Savršeno pripremljen T-Bone steak, sočan i ukusan.",
    ingredients: [
      "1 T-Bone steak (oko 400g, debljine 2.5cm)",
      "1 kašika maslinovog ulja",
      "1 kašičica krupne morske soli",
      "1/2 kašičice sveže mlevenog crnog bibera",
      "1 češanj belog luka, zgnječen (opciono)",
      "1 grančica ruzmarina (opciono)",
      "1 kašika putera (opciono)"
    ],
    instructions: [
      "Odmorite 30 minuta; osušite steak.",
      "Premažite uljem i začinite.",
      "Zagrejte liveni tiganj/roštilj na jako.",
      "Pecite 3-4 minuta po strani za medium-rare (duže po želji).",
      "Pred kraj dodajte puter, beli luk i ruzmarin i prelivajte.",
      "Odmorite 5-10 minuta i secite uz kost."
    ],
    prepTime: "5 minuta",
    cookTime: "10-15 minuta",
    servings: 1,
    notes: [
      "Koristite termometar: 52-54°C MR, 57-60°C M."
    ],
    nutrition: { calories: "700-900", protein: "50-60g", fat: "50-70g", carbohydrates: "0g" }
  },
  "Porterhouse": {
    name: "Porterhouse",
    description: "Kralj odrezaka: kombinacija filea i striploina, bogat ukus.",
    ingredients: [
      "1 Porterhouse (500g, 2.5-3 cm)",
      "1 kašika maslinovog ulja",
      "1 kašičica krupne morske soli",
      "1/2 kašičice sveže mlevenog crnog bibera",
      "1 češanj belog luka (opciono)",
      "1 grančica ruzmarina ili timijana (opciono)",
      "2 kašike putera (opciono)"
    ],
    instructions: [
      "Odmorite 30-60 minuta; premažite uljem i začinite.",
      "Zapečite 4-6 minuta po strani, zatim dovršite do željene pečenosti.",
      "Pred kraj dodajte beli luk/bilje i puter i prelivajte.",
      "Odmorite 5-10 minuta; secite od kosti."
    ],
    prepTime: "5 minuta",
    cookTime: "8-12 minuta",
    servings: 1,
    notes: [
      "Rare 52-54°C; MR 54-57°C; M 60-63°C; MW 65-68°C; WD 71°C+."
    ],
    nutrition: { calories: "800-1000", protein: "70-80g", fat: "50-70g", carbohydrates: "0g" }
  },
  "Sirloin Steak": {
    name: "Sirloin Steak",
    description: "Odličan odrezak koji se lako priprema.",
    ingredients: [
      "2 sirloin odreska (oko 200g svaki)",
      "2 kašike maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice bibera",
      "1 češanj belog luka, zgnječen (opciono)",
      "1 grančica ruzmarina ili timijana (opciono)",
      "2 kašike putera (opciono)"
    ],
    instructions: [
      "Odmorite 30 minuta; osušite.",
      "Začinite solju i biberom.",
      "Zagrejte tiganj do dimljenja i pecite 3-5 minuta po strani (MR) ili duže.",
      "Dodajte arome/puter poslednja 2 minuta i prelivajte.",
      "Odmorite 5-10 minuta i secite popreko na vlakna."
    ],
    prepTime: "5 minuta",
    cookTime: "10-15 minuta",
    servings: 2,
    notes: [
      "MR 52-57°C, M 57-63°C, MW 63-68°C, WD 68°C+."
    ],
    nutrition: { calories: "400-500", protein: "40-50g", fat: "25-35g", carbohydrates: "0g" }
  },
  "Flank Steak": {
    name: "Flank Steak",
    description: "Mariniran i pečen na roštilju ili u tiganju, ukusan i sočan.",
    ingredients: [
      "600g flank steak",
      "1/4 šolje maslinovog ulja",
      "1/4 šolje soja sosa",
      "2 kašike balzamiko sirćeta",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica dijon senfa",
      "1/2 kašičice mlevenog crnog bibera",
      "1/4 kašičice čili pahuljica (opciono)",
      "1 kašičica sušenog origana",
      "So po ukusu"
    ],
    instructions: [
      "Pomešajte sastojke za marinadu i premažite meso; marinirajte najmanje 2h (idealo preko noći).",
      "Odmorite na sobnoj temperaturi 30 minuta.",
      "Pecite 4-6 minuta po strani za MR (ili duže).",
      "Odmorite 10 minuta; secite tanko popreko na vlakna."
    ],
    prepTime: "15 minuta + mariniranje",
    cookTime: "10-15 minuta",
    servings: 4,
    notes: [
      "Ne prepecite da ostane sočan."
    ],
    nutrition: { calories: "400-450", protein: "40-45g", fat: "25-30g", carbohydrates: "5-10g" }
  },
  "Skirt Steak": {
    name: "Skirt Steak",
    description: "Ukusan i sočan skirt steak na roštilju ili u tiganju.",
    ingredients: [
      "500g skirt steak",
      "2 kašike maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice dimljene paprike (opciono)"
    ],
    instructions: [
      "Odmorite 30 minuta; osušite.",
      "Pomešajte ulje i začine i utrljajte.",
      "Pecite 3-4 minuta po strani za MR (duže po želji).",
      "Odmorite 5-10 minuta; secite pod uglom, popreko na vlakna."
    ],
    prepTime: "15 minuta",
    cookTime: "6-8 minuta",
    servings: 2,
    notes: [
      "Mariniranje 30+ min poboljšava ukus; najbolje MR-M."
    ],
    nutrition: { calories: "450", protein: "50g", fat: "25g", carbohydrates: "2g" }
  },
  "Hanger Steak": {
    name: "Hanger Steak",
    description: "Ukusan i sočan komad mesa, brz za pripremu.",
    ingredients: [
      "500g hanger steak",
      "2 kašike maslinovog ulja",
      "1 kašičica mlevenog crnog bibera",
      "1 kašičica soli",
      "2 čena belog luka, izgnječena",
      "1 kašika svežeg timijana, iseckanog (ili 1 kašičica sušenog)"
    ],
    instructions: [
      "Odmorite 30 minuta; premažite uljem i začinima.",
      "Zagrejte liveni tiganj i pecite 3-5 minuta po strani za MR (prilagodite debljini).",
      "Odmorite 5-10 minuta; secite popreko na vlakna."
    ],
    prepTime: "15 minuta",
    cookTime: "10-15 minuta",
    servings: 2,
    notes: [
      "Koristite termometar: MR 54-57°C, M 60-63°C."
    ],
    nutrition: { calories: "400-500", protein: "40-50g", fat: "25-35g", carbohydrates: "2-5g" }
  },
  "Flat Iron Steak": {
    name: "Flat Iron Steak",
    description: "Ukusan i sočan, brzo se priprema.",
    ingredients: [
      "2 flat iron odreska (oko 200g svaki)",
      "2 kašike maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "1 češanj belog luka, izgnječen (opciono)",
      "1 grančica ruzmarina ili timijana (opciono)"
    ],
    instructions: [
      "Odmorite 30 minuta; osušite.",
      "Začinite i pecite 3-4 minuta po strani za MR (duže po želji).",
      "Dodajte aromatike poslednjih minuta; odmorite 5-10 minuta i secite popreko."
    ],
    prepTime: "10 minuta",
    cookTime: "8-12 minuta",
    servings: 2,
    notes: [
      "Idealna unutrašnja temperatura za MR 54-57°C."
    ],
    nutrition: { calories: "350-400", protein: "40-45g", fat: "20-25g", carbohydrates: "0g" }
  },
  "Prime Rib": {
    name: "Prime Rib",
    description: "Svečano pečenje od goveđeg rebra, idealno za posebne prilike.",
    ingredients: [
      "3-4 kg goveđe rebro (prime rib)",
      "2 kašike maslinovog ulja",
      "2 kašike soli",
      "1 kašika sveže mlevenog crnog bibera",
      "1 kašika belog luka u prahu",
      "1 kašika luka u prahu",
      "1 kašičica sušenog ruzmarina",
      "1 kašičica sušenog timijana",
      "1 šolja goveđe supe (ili vode)"
    ],
    instructions: [
      "Odmorite 2-3 sata van frižidera.",
      "Zagrejte rernu na 230°C i zapečite 15 minuta, zatim smanjite na 160°C.",
      "Začinite i pecite 15-25 min/kg do željene temperature (52-63°C zavisno od pečenosti).",
      "Dodajte supu u tepsiju, odmorite 20-30 minuta, secite i poslužite."
    ],
    prepTime: "30 minuta",
    cookTime: "2-4 sata",
    servings: 7,
    notes: [
      "Dodajte povrće u tepsiju za sos bogatog ukusa."
    ],
    nutrition: { calories: "600-800", protein: "50-70g", fat: "40-60g", carbohydrates: "0-5g" }
  },
  "Tomahawk Steak": {
    name: "Tomahawk Steak",
    description: "Impresivan odrezak sa dugom kosti, pečen do savršenstva.",
    ingredients: [
      "1 Tomahawk steak (1-1.5 kg, 5 cm debljine)",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, izgnječena",
      "2 grančice ruzmarina",
      "1 kašičica krupne morske soli",
      "1/2 kašičice sveže mlevenog crnog bibera",
      "50g putera (opciono)"
    ],
    instructions: [
      "Odmorite 1 sat; rerna na 200°C.",
      "Zapečite 2-3 minuta po strani, zatim u rerni 10-15 minuta (MR 52-54°C).",
      "Odmorite 10 minuta; secite na tanke kriške."
    ],
    prepTime: "15 minuta",
    cookTime: "20-30 minuta",
    servings: 3,
    notes: [
      "Odmor je ključan za sočnost; koristite velik tiganj."
    ],
    nutrition: { calories: "800-1200", protein: "60-80g", fat: "60-100g" }
  },
  "Denver Steak": {
    name: "Denver Steak",
    description: "Sočan i ukusan, za roštilj ili tiganj.",
    ingredients: [
      "2 Denver steaka (oko 200g svaki)",
      "2 kašike maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "1 čen belog luka, izgnječen",
      "1 grančica ruzmarina (opciono)",
      "1 kašika putera (opciono)"
    ],
    instructions: [
      "Odmorite 30 minuta; osušite.",
      "Premažite uljem i začinite.",
      "Pecite 4-6 minuta po strani za MR (ili duže), prelivajte puterom.",
      "Odmorite 5-10 minuta; secite popreko."
    ],
    prepTime: "10 minuta",
    cookTime: "8-12 minuta",
    servings: 2,
    notes: [
      "MR 52-54°C; M 57-60°C."
    ],
    nutrition: { calories: "350-450", protein: "40-50g", fat: "20-30g", carbohydrates: "1-2g" }
  },
  "Tri-Tip": {
    name: "Tri-Tip",
    description: "Sočno i ukusno pečenje, idealno za roštilj ili rernu.",
    ingredients: [
      "1 Tri-Tip (1.5 - 2 kg)",
      "2 kašike maslinovog ulja",
      "2 kašike krupne soli",
      "1 kašika crnog bibera",
      "1 kašika granuliranog belog luka",
      "1 kašičica dimljene paprike",
      "1/2 kašičice čilija u prahu (opciono)"
    ],
    instructions: [
      "Odmorite 30+ minuta; premažite uljem i utrljajte začine.",
      "Roštilj 4-5 min/strana za koricu pa indirektno dok ne dostigne željenu temperaturu; ili u rerni 20-40 min na 200°C.",
      "Preporučene temperature: MR 54-57°C, M 60-63°C.",
      "Odmorite 10-15 minuta; secite popreko na vlakna."
    ],
    prepTime: "15 minuta",
    cookTime: "25-45 minuta",
    servings: 7,
    notes: [
      "Mariniranje preko noći poboljšava ukus."
    ],
    nutrition: { calories: "350-450", protein: "40-50g", fat: "20-30g", carbohydrates: "1-2g" }
  },
  "Round Steak": {
    name: "Round Steak",
    description: "Sočan i ukusan, savršen za brzi obrok.",
    ingredients: [
      "2 round steak odreska (150-200g svaki)",
      "2 kašike maslinovog ulja",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "1 čen belog luka, izgnječen (opciono)",
      "1 kašika putera (opciono)",
      "Sveži peršun (za ukras)"
    ],
    instructions: [
      "Odmorite 30 minuta; osušite.",
      "Začinite solju i biberom.",
      "Pecite 3-5 minuta po strani (MR) ili duže; opciono dodajte beli luk i puter pred kraj i prelivajte.",
      "Odmorite 5 minuta; secite popreko i poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "10-15 minuta",
    servings: 2,
    notes: [
      "Marinirajte za jači ukus; moguće i na roštilju."
    ],
    nutrition: { calories: "300-400", protein: "30-40g", fat: "15-25g", carbohydrates: "0g" }
  },
  "Chuck Steak": {
    name: "Chuck Steak",
    description: "Sočan i ukusan, idealan za roštilj ili tiganj.",
    ingredients: [
      "2 chuck steak odreska (2.5cm debljine)",
      "2 kašike maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "1/2 kašičice belog luka u prahu (opciono)",
      "Sveži ruzmarin ili timijan (opciono)"
    ],
    instructions: [
      "Odmorite 30 minuta; osušite.",
      "Utrljajte ulje i začine.",
      "Pecite 3-5 minuta po strani za MR (ili duže); dodajte bilje pred kraj.",
      "Odmorite 5-10 minuta pre sečenja."
    ],
    prepTime: "10 minuta",
    cookTime: "10-15 minuta",
    servings: 2,
    notes: [
      "Deblji odresci zahtevaju duže pečenje; koristite termometar."
    ],
    nutrition: { calories: "350-400", protein: "30-35g", fat: "25-30g", carbohydrates: "0-2g" }
  },
  "Blade Steak": {
    name: "Blade Steak",
    description: "Sočan odrezak, brz za pripremu.",
    ingredients: [
      "2 blade steak odreska (oko 200g svaki)",
      "2 kašike maslinovog ulja",
      "1 kašičica mlevenog belog luka",
      "1/2 kašičice sušenog ruzmarina",
      "So i biber po ukusu"
    ],
    instructions: [
      "Odmorite 30 minuta; premažite uljem i začinima.",
      "Zagrejte tiganj na jakoj vatri i pecite 3-4 minuta po strani (ili duže).",
      "Smanjite vatru i dovršite 2-3 minuta po strani za M.",
      "Odmorite 5 minuta i poslužite."
    ],
    prepTime: "5 minuta",
    cookTime: "10-15 minuta",
    servings: 2,
    notes: [
      "Marinirajte 30 minuta za intenzivniji ukus."
    ],
    nutrition: { calories: "400", protein: "40g", fat: "25g", carbohydrates: "2g" }
  },
  "Top Round": {
    name: "Top Round",
    description: "Pečena govedina, savršena za sendviče ili glavni obrok.",
    ingredients: [
      "1.5 kg Top Round",
      "2 kašike maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "1 kašičica sušenog ruzmarina",
      "1/2 kašičice belog luka u prahu",
      "1/2 šolje goveđe supe"
    ],
    instructions: [
      "Zagrejte rernu na 220°C; začinite meso i pecite 15 min, zatim na 160°C još 45-60 min (MR ~55°C).",
      "Prelijte goveđom supom, pokrijte i odmorite 15 min; secite tanko."
    ],
    prepTime: "15 minuta",
    cookTime: "60-75 minuta",
    servings: 7,
    notes: [
      "Služite uz sos od rena ili sos od pečenja."
    ],
    nutrition: { calories: "350", protein: "45g", fat: "18g" }
  },
  "Bottom Round": {
    name: "Bottom Round",
    description: "Jeftin i ukusan komad govedine, sporo pečen do mekoće.",
    ingredients: [
      "1.5 - 2 kg Bottom Round",
      "2 kašike maslinovog ulja",
      "1 veliki crni luk, krupnije",
      "3 čena belog luka, sitno",
      "2 šargarepe, kolutići",
      "2 stabljike celera, komadi",
      "500 ml goveđe supe",
      "250 ml crnog vina (opciono)",
      "1 kašika sušenog timijana",
      "1 kašika sušenog ruzmarina",
      "So i biber po ukusu",
      "2 kašike brašna (za sos, opciono)"
    ],
    instructions: [
      "Rerna 150°C; zapečite meso, izdvojte.",
      "Dinstajte povrće, vratite meso, dodajte tečnost i začine; poklopite i pecite 3-4h do mekoće.",
      "Odvojte meso, procedite tečnost i zgusnite po želji; secite i poslužite."
    ],
    prepTime: "15 minuta",
    cookTime: "3-4 sata",
    servings: 7,
    notes: [
      "Moguće u slow cooker-u: low 8-10h / high 4-6h."
    ],
    nutrition: { calories: "350-450", protein: "40-50g", fat: "15-25g", carbohydrates: "5-10g" }
  },
  "Eye of Round": {
    name: "Eye of Round",
    description: "Jednostavno pečenje, idealno za sendviče ili hladno predjelo.",
    ingredients: [
      "1.5 kg Eye of Round",
      "2 kašike maslinovog ulja",
      "1 kašičica soli",
      "1/2 kašičice crnog bibera",
      "1 kašičica sušenog ruzmarina",
      "1/2 kašičice belog luka u prahu",
      "1 šolja goveđe supe ili vode"
    ],
    instructions: [
      "Rerna 160°C; začinite i zapečite u tiganju sa svih strana.",
      "Prebacite u posudu za pečenje sa tečnošću; pecite 1.5-2h (MR 54-57°C, M 60-63°C).",
      "Odmorite 15-20 minuta; secite tanke kriške."
    ],
    prepTime: "15 minuta",
    cookTime: "1.5-2 sata",
    servings: 7,
    notes: [
      "Marinirajte preko noći za jači ukus; poslužite sa salatom ili krompirom."
    ],
    nutrition: { calories: "250-300", protein: "30-35g", fat: "10-15g", carbohydrates: "0g" }
  },

  // Default recipe for items without specific recipes
  "Default Recipe": {
    name: "Tradicionalni recept",
    ingredients: ["Glavni sastojci", "Povrće", "Začini", "Ulje ili puter"],
    instructions: ["Pripremi sastojke", "Kuva po tradicionalnom receptu", "Začini po ukusu", "Služi toplo"],
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4
  }
};

// Function to get recipe for a food item, with fallback to default
export const getRecipe = (foodName: string): Recipe => {
  // Handle translated recipe names
  const recipeMap: Record<string, string> = {
    "Makaroni sa sirom": "Mac and Cheese",
    "BBQ rebra": "BBQ Ribs",
    "Pad Tai": "Pad Thai Authentic",
    "Suši": "Sushi",
    "Sashimi": "Sashimi",
    "Ramen": "Ramen",
    "Tempura": "Tempura",
    "Yakitori": "Yakitori",
    "Miso Soup": "Miso Soup",
    "Udon": "Udon",
    "Soba": "Soba",
    "Tonkatsu": "Tonkatsu",
    "Teriyaki": "Teriyaki",
    "Bento": "Bento",
    "Onigiri": "Onigiri",
    "Takoyaki": "Takoyaki",
    "Okonomiyaki": "Okonomiyaki",
    "Katsu Curry": "Katsu Curry",
    "Chirashi": "Chirashi",
    "Gyoza": "Gyoza",
    "Mochi": "Mochi",
    "Dango": "Dango",
    "Matcha": "Matcha",
    "Pica Margherita": "Pizza Margherita",
    "Špagete Karbonara": "Spaghetti Carbonara",
    "Lazanja": "Lasagna",
    "Risoto": "Risotto",
    "Osko buko": "Osso Buco",
    "Tiramisu": "Tiramisu",
    "Gelato": "Gelato",
    "Minestrone": "Minestrone",
    "Brusketa": "Bruschetta",
    "Antipasto": "Antipasto",
    "Njoki": "Gnocchi",
    "Prošuto": "Prosciutto",
    "Mocarela": "Mozzarella",
    "Parmidžana": "Parmigiana",
    "Kanoli": "Cannoli",
    "Fokača": "Focaccia",
    "Ravioli": "Ravioli",
    "Pesto": "Pesto",
    "Kaprese salata": "Caprese Salad",
    "Espreso": "Espresso",
    "Klasičan burger": "Burger",
    "Čizburger": "Cheeseburger",
    "Slatko kiselo meso": "Sweet and Sour Pork",
    "Kung Pao piletina": "Kung Pao Chicken",
    "Šnicl": "Schnitzel Wiener",
    "Riba sa pomfritom": "Fish and Chips British",
    "Grčka musaka": "Moussaka",
    "Grčka salata": "Greek Salad",
    "Butter chicken": "Butter Chicken",
    "Birijani": "Biryani",
    "Takosi": "Tacos",
    "Gvakomole": "Guacamole",
    "Palačinke sa džemom": "Palačinke sa džemom",
    "Palačinke sa eurokremom": "Palačinke sa eurokremom",
    "Pica": "Pizza",
    "Pasta": "Pasta",
    "Ramen Traditional": "Ramen Traditional",
    "Paela": "Paella Valenciana",
    "Kus kus": "Couscous",
    "Falafel": "Falafel Traditional",
    "Humus": "Hummus Classic",
    "Fo": "Pho Vietnamese",
    "Kimči": "Kimchi Korean",
    "Dim sam": "Dim Sum Steamed",
    "Pierogi": "Pierogi Polish",
    "Gulaš": "Goulash Hungarian",
    "Kroasan": "Croissant Buttery",
    "Baklava": "Baklava Traditional",
    "Kimchi": "Kimchi",
    "Bulgogi": "Bulgogi", 
    "Bibimbap": "Bibimbap",
    "Korean BBQ": "Korean BBQ",
    "Japchae": "Japchae",
    "Tteokbokki": "Tteokbokki",
    "Kimchi Jjigae": "Kimchi Jjigae",
    "Galbi": "Galbi",
    "Samgyeopsal": "Samgyeopsal",
    "Banchan": "Banchan",
    "Korean Fried Chicken": "Korean Fried Chicken",
    "Hotteok": "Hotteok",
    "Naengmyeon": "Naengmyeon",
    "Sundae": "Sundae",
    "Pajeon": "Pajeon",
    "Gimbap": "Gimbap", 
    "Mandu": "Mandu",
    "Bossam": "Bossam",
    "Jajangmyeon": "Jajangmyeon",
    "Korean Corn Dogs": "Korean Corn Dogs"
  };

  const mappedName = recipeMap[foodName] || foodName;
  
  return recipes[mappedName] || {
    name: foodName,
    ingredients: ["Glavni sastojci za " + foodName, "Povrće po ukusu", "Začini", "Ulje ili puter"],
    instructions: ["Pripremi sve sastojke", "Kuva po tradicionalnom receptu", "Začini po ukusu", "Služi toplo"],
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4
  };
};