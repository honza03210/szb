window.STUDY_DATASETS = window.STUDY_DATASETS || [];

window.STUDY_DATASETS.push({
  "id": "pva",
  "name": "Programování a vývoj aplikací",
  "categoryLabels": {
    "Teoretické základy informatiky a matematika": "Teorie a matematika",
    "Programové, výpočetní a informační systémy": "Programové systémy"
  },
  "topics": [
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Lineární algebra",
      "codes": [
        "MB141"
      ],
      "def": "Lineární algebra je oblast matematiky, která studuje vektory, vektorové prostory a lineární zobrazení mezi nimi. Základním objektem je vektor – uspořádaná n-tice čísel, kterou lze geometricky chápat jako bod nebo orientovanou úsečku v n-rozměrném prostoru. Lineární zobrazení (transformace) jsou zobrazení zachovávající součet vektorů a násobení skalárem; každé takové zobrazení lze v dané bázi reprezentovat maticí. Matice tak slouží jednak jako zápis lineárních transformací, jednak jako zápis soustav lineárních rovnic. Centrálními úlohami jsou řešení soustav lineárních rovnic Gaussovou eliminací, výpočet determinantu (který určuje regularitu matice a změnu objemu při transformaci) a hledání vlastních čísel a vektorů, jež popisují „přirozené směry“ transformace. Lineární algebra je základním nástrojem napříč informatikou – v počítačové grafice, strojovém učení, zpracování signálů i v numerických metodách.",
      "scope": [
        {
          "t": "Operace s vektory a maticemi",
          "d": "Vektory lze sčítat po složkách a násobit skalárem; matice navíc můžeme násobit mezi sebou, kde násobení odpovídá skládání lineárních zobrazení. Násobení matic není komutativní (A·B ≠ B·A) a je definováno jen pro kompatibilní rozměry. Transponování matice prohazuje její řádky a sloupce."
        },
        {
          "t": "Vlastnosti lineárních operací a skalární součin",
          "d": "Sčítání vektorů a násobení skalárem splňují axiomy jako asociativita, komutativita sčítání a distributivita. Skalární součin dvou vektorů přiřazuje číslo a měří jejich „podobnost“ – umožňuje definovat délku (normu) vektoru a úhel mezi vektory. Dva vektory jsou kolmé (ortogonální) právě tehdy, když je jejich skalární součin nulový."
        },
        {
          "t": "Gaussova eliminace",
          "d": "Gaussova eliminace je algoritmus pro řešení soustav lineárních rovnic, který pomocí elementárních řádkových úprav převede matici soustavy na schodovitý (trojúhelníkový) tvar. Z tohoto tvaru se řešení dopočítá zpětnou substitucí. Metoda zároveň určí, zda má soustava jediné řešení, nekonečně mnoho řešení, nebo žádné."
        },
        {
          "t": "Determinant",
          "d": "Determinant je číslo přiřazené čtvercové matici, které vyjadřuje, kolikrát daná transformace zvětší objem a zda mění orientaci. Matice je regulární (invertibilní) právě tehdy, když je její determinant nenulový. Počítá se rozvojem podle řádku či sloupce, Gaussovou eliminací, nebo Sarrusovým pravidlem pro matice 3×3."
        },
        {
          "t": "Vlastní čísla a vektory a jejich geometrický význam",
          "d": "Vlastní vektor matice je nenulový vektor, jehož směr se transformací nemění – pouze se škáluje. Příslušné vlastní číslo udává faktor tohoto škálování (platí A·v = λ·v). Geometricky vlastní vektory určují „osy“ transformace; využívají se například při diagonalizaci matic nebo v analýze hlavních komponent (PCA)."
        },
        {
          "t": "Inverzní matice",
          "d": "Inverzní matice A⁻¹ je matice, pro kterou platí A·A⁻¹ = I (jednotková matice). Existuje pouze pro čtvercové regulární matice s nenulovým determinantem. Geometricky reprezentuje opačnou transformaci a umožňuje řešit soustavu A·x = b jako x = A⁻¹·b."
        },
        {
          "t": "Vektorové podprostory",
          "d": "Vektorový podprostor je podmnožina vektorového prostoru, která je sama uzavřená na sčítání vektorů a násobení skalárem a obsahuje nulový vektor. Příkladem je přímka nebo rovina procházející počátkem. Důležitými podprostory matice jsou její jádro a obraz (sloupcový prostor)."
        },
        {
          "t": "Vektorové báze",
          "d": "Báze je množina lineárně nezávislých vektorů, která generuje (rozpíná) celý prostor – každý vektor lze vyjádřit jako jejich jednoznačnou lineární kombinaci. Počet vektorů báze se nazývá dimenze prostoru. Změna báze umožňuje popsat tentýž objekt v jiných souřadnicích."
        },
        {
          "t": "Lineární transformace",
          "d": "Lineární transformace je zobrazení mezi vektorovými prostory, které zachovává sčítání vektorů a násobení skalárem. Příkladem jsou rotace, škálování, projekce či zrcadlení. Po zvolení bází lze každou lineární transformaci jednoznačně reprezentovat maticí a její skládání odpovídá násobení matic."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Základy matematické analýzy",
      "codes": [
        "IB000",
        "MB142"
      ],
      "def": "Matematická analýza je oblast matematiky studující spojité veličiny a jejich změny pomocí limitního přechodu. Zatímco algebra pracuje s konečnými operacemi, analýza zkoumá nekonečné procesy – přibližování, spojitost a okamžitou změnu. Základním objektem je reálná funkce, která přiřazuje vstupní hodnotě hodnotu výstupní. Klíčovým pojmem je limita, jež popisuje, k jaké hodnotě se funkce blíží; na ní jsou postavené pojmy spojitost, derivace i integrál. Derivace měří okamžitou rychlost změny funkce, tedy sklon tečny k jejímu grafu, a tvoří jádro diferenciálního počtu. Integrál naopak vyjadřuje akumulaci a geometricky odpovídá obsahu plochy pod grafem funkce. Diferenciální a integrální počet jsou propojeny základní větou analýzy. Analýza je základem pro modelování spojitých dějů ve fyzice i ekonomii a pro optimalizační algoritmy, například gradientní sestup ve strojovém učení.",
      "scope": [
        {
          "t": "Relace a zobrazení",
          "d": "Relace je množina uspořádaných dvojic, která vyjadřuje vztah mezi prvky množin. Zobrazení (funkce) je speciální relace, jež každému prvku definičního oboru přiřazuje právě jeden prvek oboru hodnot. Zobrazení mohou být injektivní (prostá), surjektivní (na), nebo bijektivní."
        },
        {
          "t": "Vlastnosti reálných funkcí",
          "d": "Reálná funkce přiřazuje reálným číslům reálná čísla. Sledujeme u ní vlastnosti jako definiční obor, monotonie (rostoucí/klesající), omezenost, sudost a lichost, periodicita a existence extrémů. Tyto vlastnosti popisují chování grafu funkce."
        },
        {
          "t": "Polynomy",
          "d": "Polynom je funkce tvaru aₙxⁿ + … + a₁x + a₀. Je definovaný na celém ℝ, je spojitý a hladký (libovolně derivovatelný). Stupeň polynomu omezuje počet jeho kořenů i jeho chování v nekonečnu."
        },
        {
          "t": "Spojité funkce a limity",
          "d": "Limita popisuje, k jaké hodnotě se funkce blíží, když se vstup blíží danému bodu. Funkce je v bodě spojitá, pokud její limita v tomto bodě existuje a rovná se funkční hodnotě – graf se „nepřetrhne“. Spojitá funkce na uzavřeném intervalu nabývá maxima, minima i všech mezilehlých hodnot."
        },
        {
          "t": "Derivace",
          "d": "Derivace funkce v bodě je limita podílu přírůstku funkce a přírůstku argumentu; udává okamžitou rychlost změny a geometricky sklon tečny. Pomocí derivace nacházíme lokální extrémy, intervaly monotonie a inflexní body. Existují pravidla pro derivaci součtu, součinu, podílu a složené funkce."
        },
        {
          "t": "Neurčitý a určitý integrál",
          "d": "Neurčitý integrál je opačná operace k derivaci – hledá primitivní funkci. Určitý integrál je číslo, které vyjadřuje „součet“ hodnot funkce přes interval. Newtonova–Leibnizova (základní) věta tyto dva pojmy spojuje: určitý integrál spočítáme pomocí primitivní funkce."
        },
        {
          "t": "Geometrický význam",
          "d": "Derivace odpovídá sklonu tečny ke grafu funkce v daném bodě. Určitý integrál odpovídá obsahu (orientované) plochy mezi grafem funkce a osou x. Tyto interpretace umožňují řešit úlohy o ploše, objemu, délce křivky i o rychlosti."
        },
        {
          "t": "Diferenciální počet",
          "d": "Diferenciální počet je část analýzy zabývající se derivacemi a jejich aplikacemi. Umožňuje studovat lokální chování funkcí, hledat extrémy (optimalizace) a aproximovat funkce, například Taylorovým polynomem. Je nástrojem pro vyšetřování průběhu funkce."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Popisná statistika",
      "codes": [
        "MB143"
      ],
      "def": "Statistika je věda o sběru, popisu, analýze a interpretaci dat. Popisná (deskriptivní) statistika je její část, která data pouze přehledně shrnuje a popisuje, aniž by z nich vyvozovala obecné závěry. K tomu používá číselné charakteristiky: míry polohy (střední hodnota, medián, modus), které popisují „typickou“ hodnotu, a míry variability (rozptyl, směrodatná odchylka), které popisují rozptýlení dat. Korelace popisuje míru lineárního vztahu mezi dvěma veličinami. Na popisnou statistiku navazuje statistika induktivní (inferenční), která pomocí odhadů usuzuje z výběrového vzorku na vlastnosti celé populace – přičemž je třeba uvádět i spolehlivost těchto odhadů. Náhodné veličiny a jejich pravděpodobnostní rozdělení, popsaná distribuční funkcí, tvoří matematický model, podle kterého data vznikají. Statistika je klíčová pro vyhodnocování experimentů, strojové učení i pro rozhodování za nejistoty.",
      "scope": [
        {
          "t": "Popisná statistika",
          "d": "Popisná statistika přehledně shrnuje a popisuje pozorovaná data pomocí tabulek, grafů a číselných charakteristik. Na rozdíl od induktivní statistiky nevyvozuje závěry o celé populaci, pouze popisuje dostupný vzorek. Slouží jako první krok průzkumové analýzy dat."
        },
        {
          "t": "Střední hodnota",
          "d": "Střední hodnota (aritmetický průměr) je součet hodnot dělený jejich počtem; je nejběžnější mírou polohy. U náhodné veličiny jde o vážený průměr hodnot podle jejich pravděpodobností (očekávaná hodnota). Je citlivá na odlehlé hodnoty (outliery)."
        },
        {
          "t": "Medián",
          "d": "Medián je hodnota, která rozděluje seřazená data na dvě stejně velké poloviny. Je mírou polohy odolnou vůči odlehlým hodnotám, proto je vhodný pro nesymetrická rozdělení (například příjmy). Spolu s kvartily tvoří základ krabicového grafu."
        },
        {
          "t": "Rozptyl",
          "d": "Rozptyl měří variabilitu dat – průměrnou kvadratickou odchylku hodnot od střední hodnoty. Jeho odmocninou je směrodatná odchylka, vyjádřená ve stejných jednotkách jako data. Malý rozptyl znamená, že hodnoty leží blízko průměru."
        },
        {
          "t": "Korelace",
          "d": "Korelace (korelační koeficient) vyjadřuje míru a směr lineárního vztahu mezi dvěma veličinami číslem od −1 do +1. Hodnota blízká ±1 značí silný vztah, hodnota blízká 0 jeho absenci. Důležité je, že korelace sama o sobě neznamená příčinnou souvislost (kauzalitu)."
        },
        {
          "t": "Odhady statistik a jejich spolehlivost",
          "d": "Bodový odhad přiřazuje neznámému parametru populace jedinou hodnotu vypočtenou z výběru. Intervalový odhad (konfidenční interval) udává rozsah, v němž parametr leží s danou pravděpodobností. Spolehlivost odhadu roste s velikostí vzorku a klesá s variabilitou dat."
        },
        {
          "t": "Distribuční funkce",
          "d": "Distribuční funkce náhodné veličiny udává pro každou hodnotu x pravděpodobnost, že veličina nabude hodnoty nejvýše x. Je neklesající, zprava spojitá a roste od 0 do 1. Plně popisuje pravděpodobnostní rozdělení veličiny."
        },
        {
          "t": "Rozdělení náhodných veličin a jejich příklady",
          "d": "Rozdělení popisuje, s jakou pravděpodobností nabývá náhodná veličina jednotlivých hodnot. Mezi diskrétní rozdělení patří například binomické a Poissonovo, mezi spojitá rovnoměrné a normální (Gaussovo). Normální rozdělení má charakteristický tvar zvonu a díky centrální limitní větě se vyskytuje velmi často."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Grafy a jejich prohledávání",
      "codes": [
        "IB000",
        "IB002"
      ],
      "def": "Graf je základní matematická a datová struktura, která modeluje vztahy mezi objekty. Skládá se z vrcholů (uzlů) reprezentujících objekty a hran reprezentujících vztahy mezi nimi. Grafy mohou být neorientované (hrany bez směru) nebo orientované (hrany se směrem), mohou mít hrany ohodnocené vahami a mohou obsahovat speciální podtřídy jako stromy. Grafy popisují obrovské množství reálných situací – silniční sítě, sociální sítě, závislosti úloh, stavové prostory. Aby s grafem mohl počítač pracovat, je třeba jej vhodně reprezentovat, nejčastěji maticí sousednosti nebo seznamy sousedů. Nejzákladnějšími algoritmy nad grafy jsou prohledávání do hloubky (DFS) a do šířky (BFS), která systematicky navštíví všechny dosažitelné vrcholy. Tato prohledávání slouží jako stavební kámen mnoha dalších algoritmů – hledání cest, detekce komponent souvislosti, detekce cyklů či topologického uspořádání.",
      "scope": [
        {
          "t": "Typy grafů",
          "d": "Grafy dělíme na neorientované a orientované, dále na ohodnocené a neohodnocené. Speciálními typy jsou například úplný graf, bipartitní graf, souvislý graf, strom či acyklický graf. Multigraf navíc připouští více hran mezi týmiž vrcholy."
        },
        {
          "t": "Stromy",
          "d": "Strom je souvislý graf bez cyklů; mezi každými dvěma vrcholy v něm vede právě jedna cesta. Strom s n vrcholy má přesně n−1 hran. Zakořeněný strom má vyznačený kořen a hierarchickou strukturu rodič–potomek."
        },
        {
          "t": "Stupně vrcholů",
          "d": "Stupeň vrcholu je počet hran, které z něj vycházejí. U orientovaných grafů rozlišujeme vstupní a výstupní stupeň. Podle principu „podání rukou“ je součet stupňů všech vrcholů roven dvojnásobku počtu hran."
        },
        {
          "t": "Orientované grafy",
          "d": "V orientovaném grafu mají hrany směr – vedou z jednoho vrcholu do druhého. Modelují asymetrické vztahy, například závislosti nebo jednosměrné cesty. Zavádějí pojmy jako orientovaná cesta, orientovaný cyklus a silná souvislost."
        },
        {
          "t": "Reprezentace grafů",
          "d": "Matice sousednosti je čtvercová tabulka, kde prvek udává existenci (či váhu) hrany mezi dvojicí vrcholů – je rychlá na dotaz, ale paměťově náročná. Seznamy sousedů ukládají pro každý vrchol seznam jeho sousedů a jsou úsporné pro řídké grafy. Volba reprezentace ovlivňuje časovou i paměťovou složitost algoritmů."
        },
        {
          "t": "Algoritmy prohledávání do hloubky a do šířky a jejich využití",
          "d": "Prohledávání do hloubky (DFS) postupuje co nejdále jednou cestou, než se vrátí; přirozeně se implementuje rekurzí nebo zásobníkem. Prohledávání do šířky (BFS) navštěvuje vrcholy po vrstvách podle vzdálenosti od startu pomocí fronty a najde nejkratší cestu v neohodnoceném grafu. Obě prohledávání běží v lineárním čase a slouží k detekci cyklů, topologickému uspořádání i hledání komponent."
        },
        {
          "t": "Komponenty souvislosti",
          "d": "Komponenta souvislosti je maximální podmnožina vrcholů, mezi nimiž lze procházet po hranách. Neorientovaný graf je souvislý, má-li jedinou komponentu. U orientovaných grafů rozlišujeme slabou a silnou souvislost; komponenty se hledají pomocí DFS nebo BFS."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Grafové algoritmy",
      "codes": [
        "IB000",
        "IB002"
      ],
      "def": "Tato oblast se zabývá pokročilejšími algoritmy nad grafy, zejména nad grafy ohodnocenými – tedy takovými, kde mají hrany přiřazené číselné váhy (cena, vzdálenost, čas, kapacita). Dvě klasické úlohy zde dominují. První je hledání nejkratší cesty: cesty mezi vrcholy s minimálním součtem vah hran; řeší se podle vlastností grafu Dijkstrovým algoritmem (pro nezáporné váhy) nebo Bellmanovým–Fordovým algoritmem, který zvládá i záporné váhy a detekuje záporné cykly. Druhou úlohou je hledání minimální kostry: podmnožiny hran, která propojí všechny vrcholy souvislého grafu s minimální celkovou cenou a neobsahuje cyklus; řeší se hladovými algoritmy Jarníkovým (Primovým) nebo Kruskalovým. Tyto algoritmy jsou ukázkou návrhových technik – hladového přístupu a relaxace – a mají bezprostřední praktické využití v navigaci, návrhu sítí a logistice.",
      "scope": [
        {
          "t": "Ohodnocené grafy",
          "d": "Ohodnocený (vážený) graf má každé hraně (případně vrcholu) přiřazené číslo – váhu. Váha typicky vyjadřuje vzdálenost, cenu, čas nebo kapacitu. Ohodnocení mění úlohy: nezajímá nás jen existence cesty, ale i její celková cena."
        },
        {
          "t": "Definice nejkratší cesty",
          "d": "Nejkratší cesta mezi dvěma vrcholy je cesta s minimálním součtem vah hran. Může jít o úlohu mezi jednou dvojicí vrcholů, z jednoho vrcholu do všech ostatních, nebo mezi všemi dvojicemi. Pokud graf obsahuje záporný cyklus, nejkratší cesta nemusí být definována."
        },
        {
          "t": "Minimální kostry grafu",
          "d": "Kostra souvislého grafu je podgraf, který je stromem a obsahuje všechny vrcholy. Minimální kostra je kostra s nejmenším součtem vah hran. Propojuje tedy všechny vrcholy s minimální celkovou cenou bez vzniku cyklu."
        },
        {
          "t": "Algoritmy pro hledání nejkratších cest (Dijkstra, Bellman–Ford)",
          "d": "Dijkstrův algoritmus postupně vybírá nejbližší dosud nezpracovaný vrchol a relaxuje jeho hrany; funguje jen pro nezáporné váhy a využívá prioritní frontu. Bellmanův–Fordův algoritmus opakovaně relaxuje všechny hrany; je pomalejší, ale zvládá i záporné váhy a umí detekovat záporný cyklus. Oba jsou založeny na principu relaxace hran."
        },
        {
          "t": "Algoritmy pro hledání minimálních koster",
          "d": "Jarníkův (Primův) algoritmus staví kostru od jednoho vrcholu a postupně přidává nejlevnější hranu vedoucí ven z dosud vytvořeného stromu. Kruskalův algoritmus třídí hrany podle váhy a přidává ty, které nevytvoří cyklus (s využitím struktury union-find). Oba jsou hladové a díky řezovému lemmatu dávají optimální výsledek."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Stromové datové struktury",
      "codes": [
        "IB002"
      ],
      "def": "Stromové datové struktury organizují data do hierarchické struktury vrcholů spojených hranami, kde každý vrchol kromě kořene má jednoho rodiče. Jejich hlavní výhodou je, že při zachování vyváženosti umožňují provádět základní operace – vyhledávání, vkládání a mazání – v logaritmickém čase vzhledem k počtu prvků. Základem je binární vyhledávací strom (BST), v němž platí uspořádání: levý podstrom obsahuje menší klíče, pravý větší. Aby si BST udržel logaritmickou hloubku i v nejhorším případě, používají se samovyvažující varianty jako červeno-černé nebo AVL stromy, které po každé operaci obnoví vyváženost rotacemi. B-stromy jsou vícecestné vyvážené stromy navržené pro ukládání dat na disku (databáze, souborové systémy), kde minimalizují počet diskových přístupů. Halda je strom optimalizovaný pro rychlý přístup k prvku s nejvyšší či nejnižší prioritou a slouží jako základ prioritní fronty a algoritmu heapsort. Volba správné stromové struktury zásadně ovlivňuje efektivitu programů.",
      "scope": [
        {
          "t": "Binární vyhledávací stromy",
          "d": "Binární vyhledávací strom (BST) je binární strom s uspořádáním klíčů: v levém podstromu jsou menší, v pravém větší klíče než v kořeni uzlu. To umožňuje vyhledávání podobné půlení intervalu. V nevyváženém případě však může degenerovat na seznam a operace pak trvají lineární čas."
        },
        {
          "t": "B-stromy",
          "d": "B-strom je vyvážený vícecestný vyhledávací strom, v němž každý uzel obsahuje více klíčů a má více potomků. Je navržen pro práci s daty na disku – jeden uzel odpovídá diskovému bloku, čímž se minimalizuje počet pomalých diskových přístupů. Používá se v databázích a souborových systémech."
        },
        {
          "t": "Červeno-černé stromy",
          "d": "Červeno-černý strom je samovyvažující binární vyhledávací strom, jehož uzly jsou obarveny červeně nebo černě. Sada pravidel o barvách zaručuje, že nejdelší cesta není delší než dvojnásobek nejkratší, takže hloubka zůstává logaritmická. Vyváženost se po vkládání a mazání obnovuje rotacemi a přebarvováním."
        },
        {
          "t": "Haldy",
          "d": "Halda je obvykle binární strom splňující haldovou vlastnost: klíč rodiče je vždy větší nebo roven (max-halda), případně menší nebo roven (min-halda) klíčům potomků. Kořen tak obsahuje prvek s nejvyšší či nejnižší prioritou, dostupný v konstantním čase. Halda se efektivně ukládá do pole a je základem prioritní fronty a řazení heapsort."
        },
        {
          "t": "Související operace a jejich složitost",
          "d": "Mezi základní operace patří vyhledání, vložení, smazání a u haldy nalezení extrému. U vyvážených stromů mají složitost O(log n), u nevyváženého BST až O(n). Volba struktury je kompromisem mezi rychlostí operací, paměťovou náročností a složitostí implementace."
        },
        {
          "t": "Typické implementace a příklady použití",
          "d": "BST a vyvážené stromy se používají pro implementaci množin a slovníků (map), B-stromy pro databázové indexy, haldy pro prioritní fronty (například v Dijkstrově algoritmu). Volba konkrétní struktury závisí na tom, které operace mají být nejrychlejší. Standardní knihovny jazyků je často nabízejí jako hotové kontejnery."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Návrh algoritmů",
      "codes": [
        "IB002",
        "IB015"
      ],
      "def": "Návrh algoritmů se zabývá obecnými metodami a technikami tvorby efektivních algoritmů a porozuměním jejich vlastnostem. Jednou z nejdůležitějších technik je metoda rozděl a panuj (divide and conquer): problém se rozdělí na menší podproblémy téhož typu, ty se vyřeší (typicky rekurzivně) a jejich řešení se sloučí do výsledku. Tato technika přirozeně vede k rekurzi – mechanismu, kdy se funkce volá sama. Rekurze úzce souvisí s matematickou indukcí: rekurzivní algoritmus se dokazuje a chápe stejnou strukturou jako indukční důkaz (báze a indukční krok). Rekurze je elegantní, ale má i nevýhody – režii volání a riziko přetečení zásobníku – proto se někdy převádí na iteraci (odstranění rekurze). Klasickým příkladem jsou rekurzivní řadicí algoritmy mergesort a quicksort, které dělí pole na části, ty seřadí a spojí. Pochopení návrhu algoritmů umožňuje volit vhodné techniky a odhadovat časovou i prostorovou složitost řešení.",
      "scope": [
        {
          "t": "Metoda rozděl a panuj",
          "d": "Rozděl a panuj je návrhová technika o třech krocích: rozdělit problém na menší podproblémy, vyřešit je (obvykle rekurzivně) a sloučit jejich řešení. Funguje dobře, lze-li problém přirozeně dělit a jsou-li podproblémy nezávislé. Příklady: mergesort, quicksort, binární vyhledávání."
        },
        {
          "t": "Výhody a nevýhody použití rekurze",
          "d": "Rekurze umožňuje stručný a čitelný zápis algoritmů odpovídající struktuře problému. Nevýhodou je režie volání funkcí, spotřeba zásobníku (riziko přetečení) a možné opakované počítání týchž podproblémů. Hloubka rekurze je omezena velikostí zásobníku."
        },
        {
          "t": "Odstranění rekurze",
          "d": "Rekurzi lze nahradit iterací – buď použitím explicitního zásobníku, který simuluje volání, nebo u koncové rekurze prostým cyklem. Důvodem je úspora paměti a režie a vyhnutí se přetečení zásobníku. Některé jazyky a kompilátory provádějí optimalizaci koncové rekurze automaticky."
        },
        {
          "t": "Řadicí rekurzivní algoritmy",
          "d": "Mergesort dělí pole na poloviny, ty rekurzivně seřadí a poté slévá; má stabilní složitost O(n log n) a vyžaduje pomocnou paměť. Quicksort volí pivot, rozdělí pole na menší a větší prvky a rekurzivně řadí části; v průměru O(n log n), v nejhorším případě O(n²). Oba jsou ukázkou metody rozděl a panuj."
        },
        {
          "t": "Vztah rekurze a matematické indukce",
          "d": "Rekurze i matematická indukce mají stejnou strukturu: základní (triviální) případ a krok, který řeší problém pomocí menšího případu. Správnost rekurzivního algoritmu se proto dokazuje indukcí – báze odpovídá ukončovací podmínce, indukční krok rekurzivnímu volání. Indukce zároveň zaručuje konečnost výpočtu, pokud se velikost problému stále zmenšuje."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Funkcionální programování",
      "codes": [
        "IB015"
      ],
      "def": "Funkcionální programování je programovací paradigma, v němž je výpočet chápán jako vyhodnocování matematických funkcí a jejich aplikace na argumenty, nikoli jako posloupnost příkazů měnících stav, jak je tomu v imperativním programování. Funkce jsou zde „hodnotami první třídy“ – lze je předávat jako argumenty, vracet z jiných funkcí a ukládat do proměnných. Klíčovou vlastností čistého funkcionálního programování je absence vedlejších efektů a neměnnost dat: funkce pro stejný vstup vždy vrátí stejný výstup (referenční transparentnost), což usnadňuje úvahy o správnosti i paralelizaci. Výpočet probíhá jako postupné přepisování (redukce) výrazů podle definic až k výsledku; pořadí přepisování určuje redukční strategie. Typickými nástroji jsou funkce vyšších řádů a nepojmenované (lambda) funkce. Reprezentativním jazykem je Haskell, který je čistě funkcionální a líně vyhodnocovaný.",
      "scope": [
        {
          "t": "Funkcionální programovací paradigma",
          "d": "Funkcionální paradigma staví výpočet na definicích a aplikaci funkcí místo na příkazech a měnitelném stavu. Zdůrazňuje neměnnost dat, referenční transparentnost a absenci vedlejších efektů. Díky tomu je snazší o programu uvažovat, testovat jej a paralelizovat."
        },
        {
          "t": "Princip výpočtu a redukční krok",
          "d": "Výpočet probíhá jako postupné přepisování výrazů – redukce. Redukční krok nahradí část výrazu (redex) podle definice funkce její pravou stranou. Opakováním kroků se výraz převede do normálního tvaru, který je výsledkem."
        },
        {
          "t": "Redukční strategie a jejich vlastnosti",
          "d": "Redukční strategie určuje, který redex se přepíše jako další. Striktní (aplikační) strategie vyhodnocuje argumenty před voláním funkce, líná (normální) je vyhodnocuje až při potřebě. Líné vyhodnocování umožňuje pracovat s nekonečnými strukturami, ale hůře se u něj odhaduje spotřeba paměti."
        },
        {
          "t": "Funkce vyšších řádů a jejich využití",
          "d": "Funkce vyššího řádu přijímá jiné funkce jako argumenty nebo funkce vrací. Typickými příklady jsou map (aplikuje funkci na všechny prvky), filter (vybere prvky splňující podmínku) a fold (sloučí prvky do jedné hodnoty). Umožňují stručně vyjádřit obecné vzory výpočtu a podporují znovupoužitelnost kódu."
        },
        {
          "t": "Nepojmenované funkce",
          "d": "Nepojmenovaná (anonymní, lambda) funkce je funkce definovaná přímo na místě použití bez přiřazení jména. Hodí se pro krátké, jednorázové funkce předávané funkcím vyšších řádů. Pojmenování pochází z lambda kalkulu, teoretického základu funkcionálního programování."
        },
        {
          "t": "Elementární programování v Haskellu",
          "d": "Haskell je čistě funkcionální, líně vyhodnocovaný jazyk se silným statickým typovým systémem. Funkce se definují rovnicemi, často s využitím vzorů (pattern matching) a rekurze. Typické úlohy zahrnují práci se seznamy, definice rekurzivních funkcí a použití map, filter a fold."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Regulární jazyky",
      "codes": [
        "IB110"
      ],
      "def": "Regulární jazyky tvoří nejjednodušší a nejlépe prozkoumanou třídu formálních jazyků a stojí na nejnižší úrovni (typ 3) Chomského hierarchie. Formální jazyk je libovolná množina řetězců nad nějakou abecedou; regulární jazyky jsou právě ty jazyky, které lze popsat regulárním výrazem, generovat regulární gramatikou, nebo rozpoznat konečným automatem. Konečný automat je nejjednodušší výpočetní model – má konečnou paměť reprezentovanou množinou stavů a žádnou pomocnou paměť navíc, takže neumí například počítat libovolně hluboké vnoření závorek. Existují varianty deterministické (DKA) a nedeterministické (NKA), přičemž obě rozpoznávají právě regulární jazyky a nedeterministický automat lze převést na deterministický determinizací. Regulární jazyky mají dobré uzávěrové vlastnosti – jsou uzavřené na sjednocení, průnik, doplněk i zřetězení. K důkazu, že jazyk regulární není, slouží pumping lemma. Prakticky se uplatňují v lexikální analýze, vyhledávání vzorů a validaci vstupů.",
      "scope": [
        {
          "t": "Chomského hierarchie formálních jazyků",
          "d": "Chomského hierarchie klasifikuje formální jazyky a gramatiky do čtyř úrovní podle síly: typ 0 (rekurzivně spočetné), typ 1 (kontextové), typ 2 (bezkontextové) a typ 3 (regulární). Každá vyšší třída je obecnější a zahrnuje nižší. Každé úrovni odpovídá výpočetní model – od konečného automatu po Turingův stroj."
        },
        {
          "t": "Regulární jazyky, jejich reprezentace a převody",
          "d": "Regulární jazyk lze ekvivalentně popsat regulárním výrazem, regulární (pravolineární) gramatikou, nebo konečným automatem. Mezi těmito reprezentacemi existují algoritmické převody, například z regulárního výrazu na automat Thompsonovou konstrukcí. To, že popisují tutéž třídu jazyků, je jeden ze základních výsledků teorie."
        },
        {
          "t": "Varianty konečných automatů",
          "d": "Konečný automat se skládá ze stavů, abecedy, přechodové funkce, počátečního stavu a množiny přijímajících stavů. Rozlišujeme deterministický (DKA), nedeterministický (NKA) a nedeterministický s ε-přechody. Všechny tyto varianty rozpoznávají právě třídu regulárních jazyků."
        },
        {
          "t": "Nedeterminismus a determinizace automatů",
          "d": "Nedeterministický automat může mít pro daný stav a symbol více možných přechodů a vstup přijímá, existuje-li alespoň jeden přijímající výpočet. Determinizace převede NKA na ekvivalentní DKA podmnožinovou konstrukcí, kde stavy DKA odpovídají množinám stavů NKA. Počet stavů přitom může vzrůst až exponenciálně."
        },
        {
          "t": "Uzávěrové vlastnosti regulárních jazyků",
          "d": "Třída regulárních jazyků je uzavřená na operace sjednocení, průnik, doplněk, zřetězení a iteraci (Kleeneho hvězdu) – výsledkem je opět regulární jazyk. Tyto vlastnosti se dokazují konstrukcemi nad automaty či výrazy. K důkazu, že jazyk regulární není, slouží pumping lemma."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Rozhodnutelnost",
      "codes": [
        "IB110"
      ],
      "def": "Teorie vyčíslitelnosti (rozhodnutelnosti) zkoumá zásadní otázku: které problémy lze vůbec vyřešit algoritmem, bez ohledu na to, kolik času či paměti bychom měli k dispozici. Aby šlo o této otázce přesně uvažovat, je třeba formálně definovat pojem algoritmu; standardním modelem je Turingův stroj. Podle Churchovy–Turingovy teze Turingovy stroje přesně zachycují intuitivní pojem efektivně vyčíslitelného. Rozhodovací problém je rozhodnutelný, existuje-li algoritmus, který pro každý vstup po konečném čase odpoví ANO, nebo NE. Je částečně rozhodnutelný (rekurzivně spočetný), pokud algoritmus odpoví ANO na kladných vstupech, ale na záporných nemusí skončit. Existují však problémy nerozhodnutelné – nejznámější je problém zastavení (zda daný program na daném vstupu skončí). Jeho nerozhodnutelnost se dokazuje diagonalizací. K důkazu nerozhodnutelnosti dalších problémů slouží metoda redukce. Tato teorie vymezuje principiální hranice toho, co počítače dokážou.",
      "scope": [
        {
          "t": "Pojem algoritmického problému a algoritmu",
          "d": "Algoritmický problém je úloha zadaná vztahem mezi vstupy a požadovanými výstupy; rozhodovací problém má odpověď ANO, nebo NE. Algoritmus je konečný, jednoznačný postup, který pro vstup po konečném počtu kroků vydá výstup. Pro přesné úvahy je třeba algoritmus formalizovat výpočetním modelem."
        },
        {
          "t": "Turingův stroj",
          "d": "Turingův stroj je abstraktní výpočetní model s nekonečnou páskou, čtecí a zapisovací hlavou a konečným řízením (množinou stavů). V každém kroku podle stavu a čteného symbolu přepíše symbol, posune hlavu a změní stav. Přes svou jednoduchost je výpočetně univerzální – podle Churchovy–Turingovy teze zachycuje vše, co lze efektivně vypočítat."
        },
        {
          "t": "Problém zastavení",
          "d": "Problém zastavení (halting problem) je úloha rozhodnout, zda daný program na daném vstupu skončí, nebo poběží navždy. Alan Turing dokázal, že tento problém je nerozhodnutelný – neexistuje algoritmus, který by jej řešil pro všechny vstupy. Je to klasický příklad principiálně neřešitelného problému."
        },
        {
          "t": "Rozhodnutelnost a částečná rozhodnutelnost",
          "d": "Problém je rozhodnutelný, existuje-li algoritmus, který pro každý vstup vždy skončí a vydá správné ANO, nebo NE. Je částečně rozhodnutelný (rekurzivně spočetný), pokud algoritmus skončí s ANO na kladných vstupech, ale na záporných se může zacyklit. Problém je rozhodnutelný právě tehdy, když jsou částečně rozhodnutelné on i jeho doplněk."
        },
        {
          "t": "Nerozhodnutelnost",
          "d": "Nerozhodnutelný problém je problém, pro který žádný algoritmus neexistuje. Kromě problému zastavení je nerozhodnutelná řada dalších úloh, například ekvivalence dvou programů. Nerozhodnutelnost vymezuje principiální mez algoritmického řešení."
        },
        {
          "t": "Metoda redukce",
          "d": "Redukce převádí jeden problém na druhý: máme-li algoritmický převod problému A na problém B, pak řešení B dává i řešení A. Je-li A nerozhodnutelný a redukuje se na B, je nerozhodnutelný i B. Redukce je hlavní nástroj pro dokazování nerozhodnutelnosti nových problémů."
        },
        {
          "t": "Diagonalizace",
          "d": "Diagonalizace je důkazová technika, kterou Cantor dokázal nespočetnost reálných čísel a Turing nerozhodnutelnost problému zastavení. Princip spočívá v konstrukci objektu, který se od každého prvku uvažovaného seznamu liší „na úhlopříčce“, a tedy v seznamu být nemůže. Vede ke sporu s předpokladem existence řešícího algoritmu."
        }
      ]
    },
    {
      "cat": "Teoretické základy informatiky a matematika",
      "title": "Složitost",
      "codes": [
        "IB110"
      ],
      "def": "Teorie složitosti navazuje na teorii vyčíslitelnosti: zatímco ta zkoumá, zda problém vůbec lze vyřešit, teorie složitosti zkoumá, kolik prostředků – především času a paměti – řešení nutně vyžaduje. Rozlišujeme složitost algoritmu (kolik prostředků spotřebuje konkrétní algoritmus) a složitost problému (kolik prostředků potřebuje nejlepší možný algoritmus pro daný problém). Problémy se podle náročnosti řadí do složitostních tříd. Třída P obsahuje problémy řešitelné v polynomiálním čase (považované za efektivně řešitelné), třída NP problémy, jejichž řešení lze v polynomiálním čase ověřit, a PSPACE problémy řešitelné v polynomiálním prostoru. Platí P ⊆ NP ⊆ PSPACE, ale zda jsou tyto inkluze ostré, je otevřené – otázka P vs. NP je nejslavnějším otevřeným problémem informatiky. Klíčovým nástrojem je polynomiální redukce, pomocí níž se definuje těžkost a úplnost: NP-úplné problémy jsou ty nejtěžší v NP – pokud by se jediný z nich vyřešil v polynomiálním čase, platilo by P = NP.",
      "scope": [
        {
          "t": "Složitost algoritmu versus složitost problému",
          "d": "Složitost algoritmu udává, kolik času či paměti spotřebuje konkrétní algoritmus v závislosti na velikosti vstupu, obvykle v nejhorším případě a zapsaná pomocí O-notace. Složitost problému je složitost nejlepšího možného algoritmu, který problém řeší. Horní mez složitosti problému dává konkrétní algoritmus, dolní mez se dokazuje obtížněji."
        },
        {
          "t": "Složitostní třídy (P, NP, PSPACE)",
          "d": "Třída P obsahuje rozhodovací problémy řešitelné deterministicky v polynomiálním čase – považují se za prakticky zvládnutelné. Třída NP obsahuje problémy, u nichž lze navržené řešení (certifikát) ověřit v polynomiálním čase. Třída PSPACE zahrnuje problémy řešitelné v polynomiálním prostoru a platí P ⊆ NP ⊆ PSPACE."
        },
        {
          "t": "Vztahy mezi třídami a příklady problémů",
          "d": "Mezi třídami platí inkluze P ⊆ NP ⊆ PSPACE, ostrost těchto inkluzí je však otevřená. Do P patří například třídění nebo hledání nejkratší cesty, do NP problém SAT či barvení grafu, do PSPACE třeba vyhodnocování kvantifikovaných formulí. Otázka, zda P = NP, je nejznámějším otevřeným problémem oboru."
        },
        {
          "t": "Těžkost a úplnost problému",
          "d": "Problém je C-těžký, pokud je na něj možné polynomiálně redukovat každý problém třídy C – je tedy alespoň tak těžký jako kterýkoli problém v C. Je C-úplný, pokud je navíc sám ve třídě C. C-úplné problémy jsou reprezentativní „nejtěžší“ zástupci třídy."
        },
        {
          "t": "Polynomiální redukce problémů",
          "d": "Polynomiální redukce převádí v polynomiálním čase instance jednoho problému na instance druhého se zachováním odpovědi. Slouží k porovnávání obtížnosti problémů a k důkazům úplnosti. Pokud se problém A redukuje na B a B je ve třídě P, je v P i A."
        },
        {
          "t": "NP-úplné úlohy",
          "d": "NP-úplné problémy jsou nejtěžší problémy ve třídě NP – každý problém z NP se na ně dá polynomiálně redukovat. Prvním dokázaným NP-úplným problémem je SAT (Cookova–Levinova věta), dále sem patří například barvení grafu, problém obchodního cestujícího či problém batohu. Pokud by se jediný NP-úplný problém vyřešil v polynomiálním čase, platilo by P = NP."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Strukturování a řízení běhu programu",
      "codes": [
        "PB006"
      ],
      "def": "Tato oblast se zabývá tím, jak organizovat program do přehledných, znovupoužitelných celků a jak řídit tok jeho výpočtu. Základním prostředkem strukturování je podprogram (funkce, metoda, procedura) – pojmenovaný blok kódu, který lze opakovaně volat. S podprogramy souvisí rozsah platnosti jmen (scope), tedy oblast kódu, kde je daná proměnná či identifikátor viditelný, a způsob předávání parametrů – hodnotou, nebo odkazem. Pro řízení běhu při chybových situacích slouží mechanismus výjimek, který odděluje normální tok kódu od ošetření chyb. Zásadním paradigmatem strukturování velkých programů je objektově orientované programování (OOP), které organizuje kód kolem objektů – entit spojujících data a chování. OOP stojí na třech principech: zapouzdření (skrytí vnitřní implementace za rozhraní), dědičnosti (odvozování nových tříd z existujících se sdílením vlastností) a polymorfismu (možnost pracovat s objekty různých typů jednotně přes společné rozhraní). Tyto principy lze realizovat v jazycích jako C#, C++ nebo Java.",
      "scope": [
        {
          "t": "Podprogramy",
          "d": "Podprogram (funkce, metoda, procedura) je pojmenovaný, opakovaně volatelný blok kódu, který řeší dílčí úlohu. Umožňuje rozdělit program na menší části, vyhnout se opakování kódu a zvýšit čitelnost. Po dokončení vrací řízení, a případně hodnotu, na místo volání."
        },
        {
          "t": "Rozsahy jmen",
          "d": "Rozsah platnosti (scope) určuje oblast programu, ve které je identifikátor viditelný a použitelný. Rozlišuje se lokální rozsah (uvnitř funkce nebo bloku) a globální rozsah. Správné rozsahy zabraňují konfliktům jmen a omezují nechtěné závislosti."
        },
        {
          "t": "Předávání hodnot",
          "d": "Parametry lze do podprogramu předávat hodnotou (předá se kopie, změna se nepromítne ven), nebo odkazem (předá se reference, podprogram může měnit původní data). Volba ovlivňuje chování i výkon. Návratová hodnota předává výsledek zpět volajícímu."
        },
        {
          "t": "Výjimky",
          "d": "Výjimka je mechanismus pro ošetření chybových a mimořádných stavů odděleně od běžného toku kódu. Při vzniku chyby se výjimka „vyhodí“ a běh se přenese k nejbližšímu odpovídajícímu obslužnému bloku (try–catch). Zlepšuje čitelnost a robustnost programu."
        },
        {
          "t": "Objektově orientované programování",
          "d": "OOP je paradigma, které strukturuje program kolem objektů – instancí tříd spojujících data (atributy) a chování (metody). Třída je předpis, objekt je jeho konkrétní výskyt. Cílem je modelovat program blíže reálným entitám a usnadnit jeho údržbu a rozšiřitelnost."
        },
        {
          "t": "Zapouzdření",
          "d": "Zapouzdření znamená skrytí vnitřní implementace objektu a zpřístupnění pouze definovaného rozhraní. Data jsou chráněna před přímým a nekontrolovaným přístupem zvenčí (modifikátory jako private a public). Umožňuje měnit implementaci bez dopadu na okolní kód."
        },
        {
          "t": "Dědičnost",
          "d": "Dědičnost umožňuje odvodit novou třídu (potomka) z existující (předka), přičemž potomek přebírá její atributy a metody a může je doplnit či překrýt. Vyjadřuje vztah „je druhem“ a podporuje znovupoužití kódu. Nadměrné či příliš hluboké dědění však může vést k těsným vazbám."
        },
        {
          "t": "Polymorfismus",
          "d": "Polymorfismus umožňuje pracovat s objekty různých tříd jednotně přes společné rozhraní nebo společného předka. Při volání metody se díky dynamické vazbě vybere implementace podle skutečného typu objektu za běhu. Díky tomu lze psát obecný kód nezávislý na konkrétních typech."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Principy nízkoúrovňového programování",
      "codes": [
        "PB071"
      ],
      "def": "Nízkoúrovňové programování je styl programování, který pracuje blízko hardwaru a dává programátorovi přímou kontrolu nad pamětí počítače; typickými jazyky jsou C a C++. Základem je pochopení paměťového modelu programu – jak je paměť běžícího procesu rozdělena na oblasti, zejména zásobník (stack), kam se ukládají lokální proměnné a rámce volání funkcí, a haldu (heap) pro dynamicky alokovaná data. Na rozdíl od jazyků se správcem paměti (garbage collectorem) zde programátor sám explicitně alokuje a uvolňuje paměť na haldě; chyby v tom vedou k únikům paměti, přístupu mimo platná data či dvojímu uvolnění. Klíčovým pojmem je ukazatel (pointer) – proměnná obsahující adresu v paměti – a ukazatelová aritmetika, která umožňuje posouvat se po paměti, zejména při práci s poli. Tato moc je vykoupena rizikem těžko odhalitelných chyb, proto je nedílnou součástí oboru ladění (debugging) – systematické hledání a odstraňování chyb. Nízkoúrovňové programování je nezbytné pro systémový software, vestavěné systémy a výkonově kritické aplikace.",
      "scope": [
        {
          "t": "Paměťový model programu",
          "d": "Paměť běžícího procesu se dělí na oblasti: kód programu, statická a globální data, zásobník (stack) pro lokální proměnné a rámce funkcí a haldu (heap) pro dynamicky alokovaná data. Zásobník roste a zmenšuje se automaticky s voláním funkcí, halda se spravuje explicitně. Znalost tohoto rozdělení je nutná pro správnou práci s pamětí."
        },
        {
          "t": "Správa paměti a dynamická alokace",
          "d": "Dynamická alokace umožňuje za běhu vyžádat paměť na haldě (v C funkcemi malloc a free, v C++ operátory new a delete) podle skutečné potřeby. Programátor odpovídá za její včasné uvolnění – jinak vzniká únik paměti (memory leak). Chybou je i použití již uvolněné paměti nebo dvojí uvolnění."
        },
        {
          "t": "Práce s uživatelskými datovými strukturami",
          "d": "Pomocí dynamické alokace a ukazatelů se vytvářejí datové struktury jako spojové seznamy, stromy nebo grafy. Jejich uzly se alokují na haldě a propojují ukazateli. Programátor musí korektně udržovat propojení a uvolňovat všechny uzly."
        },
        {
          "t": "Nízkoúrovňová práce s pamětí",
          "d": "Nízkoúrovňová práce s pamětí znamená přímý přístup k jednotlivým bajtům a adresám, často s ohledem na zarovnání a velikost datových typů. Umožňuje maximální kontrolu a výkon, ale obchází ochranné mechanismy vyšších jazyků. Chyby, například zápis mimo přidělenou oblast, mohou vést k pádu programu i k bezpečnostní zranitelnosti."
        },
        {
          "t": "Ukazatel",
          "d": "Ukazatel je proměnná, jejíž hodnotou je adresa jiného místa v paměti. Pomocí dereference se přistupuje k hodnotě, na kterou ukazuje. Ukazatele umožňují předávání odkazem, dynamické struktury i efektivní práci s velkými daty, ale jejich nesprávné použití je častým zdrojem chyb."
        },
        {
          "t": "Pole a ukazatelová aritmetika",
          "d": "Pole je souvislý blok prvků stejného typu uložený v paměti za sebou. Jméno pole se chová jako ukazatel na jeho první prvek a indexování odpovídá ukazatelové aritmetice – posunu o násobek velikosti prvku. Jazyk přitom obvykle nehlídá meze pole, takže přístup mimo ně je nebezpečný."
        },
        {
          "t": "Způsoby ladění programu (debugging)",
          "d": "Ladění je proces hledání, lokalizace a odstraňování chyb v programu. Používají se debuggery (krokování, breakpointy, sledování proměnných), výpisy a nástroje typu Valgrind či sanitizéry pro odhalení chyb práce s pamětí. Cílem je zúžit příčinu chyby od jejího projevu ke konkrétnímu místu v kódu."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Architektury",
      "codes": [
        "PB150"
      ],
      "def": "Architektura počítače popisuje, jak je počítač vnitřně uspořádán a jak na úrovni hardwaru zpracovává data. Začíná u reprezentace informace: počítač pracuje ve dvojkové soustavě, proto je třeba rozumět číselným soustavám a převodům mezi nimi i způsobu, jak se v paměti ukládají celá čísla (například v doplňkovém kódu) a jak se s nimi provádí aritmetika. Data se kódují – rozlišujeme vnitřní a vnější kódy a kódy detekční a opravné, které umožňují odhalit nebo opravit chyby. Hardware je postaven z logických obvodů (kombinačních a sekvenčních) a pamětí, jež mají různé parametry a architekturu. Srdcem počítače je procesor, který vykonává instrukce; jeho činnost lze řídit i mikroprogramově. Na úrovni návrhu instrukční sady se rozlišují přístupy RISC (málo jednoduchých instrukcí) a CISC (mnoho složitějších instrukcí). Pro rychlost je klíčová paměťová hierarchie s vyrovnávacími paměťmi (cache), které zmírňují rozdíl mezi rychlostí procesoru a hlavní paměti.",
      "scope": [
        {
          "t": "Číselné soustavy a vztahy mezi nimi",
          "d": "Číselná soustava určuje, jak se čísla zapisují pomocí číslic a základu; počítače používají dvojkovou (binární), pro stručnost též šestnáctkovou (hexadecimální). Mezi soustavami existují algoritmy převodu – postupné dělení základem a rozvoj podle mocnin. Dvojková soustava odpovídá dvěma stavům hardwaru (0 a 1)."
        },
        {
          "t": "Zobrazení celého čísla v počítači a aritmetika",
          "d": "Celá čísla se v počítači ukládají na pevný počet bitů; záporná čísla nejčastěji v doplňkovém kódu, který umožňuje jednotné sčítání kladných i záporných čísel. Omezený počet bitů vede k přetečení (overflow). Aritmetické operace se provádějí ve sčítačkách a dalších obvodech."
        },
        {
          "t": "Kódy (vnitřní, vnější, detekční a opravné)",
          "d": "Kódování přiřazuje informaci posloupnost bitů; vnitřní kódy slouží uvnitř počítače, vnější pro přenos a uchování. Detekční kódy, například paritní bit nebo CRC, umožňují odhalit chybu, opravné kódy jako Hammingův kód ji navíc opravit – za cenu přidané redundance. Používají se při přenosu i ukládání dat."
        },
        {
          "t": "Obvody a paměti (parametry, architektura)",
          "d": "Logické obvody se dělí na kombinační (výstup závisí jen na aktuálních vstupech) a sekvenční (mají vnitřní stav, paměť). Z nich se staví sčítačky, multiplexery, registry i paměti. Paměti se liší parametry jako kapacita, rychlost a energetická závislost (RAM versus ROM)."
        },
        {
          "t": "Procesor, programování, mikroprogramování",
          "d": "Procesor (CPU) cyklicky načítá, dekóduje a vykonává instrukce nad daty v registrech. Programuje se ve své instrukční sadě – strojovém jazyce, respektive assembleru. Řadič procesoru může být realizován pevnou logikou, nebo mikroprogramově, kdy je každá instrukce rozložena na posloupnost mikroinstrukcí."
        },
        {
          "t": "Architektury RISC/CISC a vyrovnávací paměti",
          "d": "RISC používá malou sadu jednoduchých, rychlých instrukcí pevné délky, CISC naopak rozsáhlou sadu složitějších instrukcí. Vyrovnávací paměť (cache) je malá rychlá paměť mezi procesorem a hlavní pamětí, která uchovává nedávno použitá data a využívá lokality přístupů. Tvoří součást paměťové hierarchie zrychlující přístup k datům."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Databáze",
      "codes": [
        "PB154"
      ],
      "def": "Databáze je organizovaná, dlouhodobě uchovávaná kolekce dat, se kterou se pracuje prostřednictvím systému řízení báze dat (SŘBD). Dominantním modelem je relační model, který data organizuje do relací (tabulek) tvořených řádky (záznamy) a sloupci (atributy). Strukturu popisuje relační schéma; jednotlivé řádky se identifikují pomocí klíčů – kandidátní klíč je minimální množina atributů jednoznačně určující řádek, jeden z nich se zvolí jako primární. Cizí klíče propojují relace mezi sebou. Pro práci s daty slouží relační algebra – formální jazyk s operacemi jako selekce, projekce, přejmenování, agregace a různé druhy spojení (join). Klíčovým tématem návrhu databáze je kvalita schématu: pomocí funkčních závislostí mezi atributy a normálních forem (1NF, 2NF, 3NF, BCNF) se schéma normalizuje – rozkládá (dekomponuje) tak, aby se odstranila redundance a aktualizační anomálie, při zachování informace. Dobrý návrh databáze je předpokladem konzistence i efektivity.",
      "scope": [
        {
          "t": "Relační model dat",
          "d": "Relační model reprezentuje data pomocí relací – tabulek s pojmenovanými sloupci (atributy) a řádky (n-ticemi). Je založen na matematickém pojmu relace a teorii množin. Díky jednoduchosti a pevnému teoretickému základu je nejrozšířenějším databázovým modelem."
        },
        {
          "t": "Relační schéma",
          "d": "Relační schéma popisuje strukturu relace – její název, množinu atributů a jejich domény (datové typy). Schéma databáze je souhrn schémat všech relací a integritních omezení. Schéma je neměnný předpis, kdežto data (řádky) se v čase mění."
        },
        {
          "t": "Klíče relačních schémat",
          "d": "Klíč je množina atributů, která jednoznačně identifikuje každý řádek relace. Kandidátní klíč je minimální takovou množinou; jeden se zvolí jako primární klíč. Cizí klíč je atribut odkazující na klíč jiné relace a zajišťuje referenční integritu."
        },
        {
          "t": "Relační algebra (projekce, selekce, agregace, přejmenování)",
          "d": "Relační algebra je formální jazyk dotazů s operacemi nad relacemi. Selekce vybere řádky splňující podmínku, projekce vybere sloupce, přejmenování mění jména atributů a agregace počítá souhrnné hodnoty (součet, průměr). Operace lze skládat a tvoří teoretický základ jazyka SQL."
        },
        {
          "t": "Spojování relací",
          "d": "Spojení (join) kombinuje řádky dvou relací na základě podmínky nad jejich atributy. Přirozené spojení spojuje přes shodné hodnoty společných atributů; existují i vnější spojení zachovávající nespárované řádky. Spojení umožňuje skládat informace rozloženou do více tabulek."
        },
        {
          "t": "Funkční závislosti",
          "d": "Funkční závislost X → Y znamená, že hodnoty atributů X jednoznačně určují hodnoty atributů Y. Popisuje vnitřní vztahy v datech a je východiskem pro odvozování klíčů a pro normalizaci. Z dané množiny závislostí lze pomocí Armstrongových axiomů odvozovat další."
        },
        {
          "t": "Normální formy (1NF, 2NF, 3NF, BCNF)",
          "d": "Normální formy jsou kritéria kvality relačního schématu definovaná pomocí funkčních závislostí. 1NF požaduje atomické hodnoty, 2NF a 3NF odstraňují závislosti na části klíče a tranzitivní závislosti, BCNF je nejpřísnější. Vyšší normální forma znamená menší redundanci a méně anomálií."
        },
        {
          "t": "Vztahy mezi normálními formami",
          "d": "Normální formy tvoří hierarchii: každé schéma v BCNF je i ve 3NF, každé ve 3NF i ve 2NF a každé ve 2NF i v 1NF. Vyšší forma je tedy silnější podmínkou. V praxi se obvykle cílí na 3NF, nebo BCNF."
        },
        {
          "t": "Dekompozice relačních schémat a normalizace",
          "d": "Normalizace je proces převodu schématu do vyšší normální formy rozkladem (dekompozicí) relace na menší relace. Dekompozice by měla být bezeztrátová (spojením se obnoví původní data) a pokud možno zachovávat závislosti. Cílem je odstranit redundanci a aktualizační anomálie."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "SQL, transakce a zpracování dotazů",
      "codes": [
        "PB154"
      ],
      "def": "SQL (Structured Query Language) je standardní deklarativní jazyk pro práci s relačními databázemi – uživatel v něm popisuje, jaká data chce, nikoli jak je získat. Dělí se na části pro definici dat (DDL – tvorba a změna tabulek, integritní omezení), manipulaci s daty (DML – vkládání, aktualizace, mazání a zejména dotazování příkazem SELECT) a řízení přístupu. Dotazy umí filtrovat, spojovat tabulky, seskupovat a počítat agregační funkce. Pokročilé prostředky zahrnují triggery (akce spouštěné automaticky při události) a uložené procedury. Aby databáze zůstala konzistentní i při souběžném přístupu a selháních, sdružuje se posloupnost operací do transakce – logického celku se zaručenými vlastnostmi ACID (atomicita, konzistence, izolace, trvanlivost). Důležitou rolí SŘBD je efektivní vyhodnocování dotazů: optimalizátor odhaduje náklady různých plánů a vybírá nejlevnější, přičemž využívá indexy a hašování pro rychlý přístup k datům místo procházení celé tabulky.",
      "scope": [
        {
          "t": "Syntaxe a sémantika příkazů",
          "d": "SQL příkaz má pevně danou syntaxi (klíčová slova jako SELECT, FROM, WHERE) a sémantiku určující jeho význam a výsledek. SQL je převážně deklarativní – popisuje požadovaný výsledek, nikoli postup. Téhož výsledku lze často dosáhnout různě zapsanými dotazy."
        },
        {
          "t": "Příkazy pro dotazování a aktualizaci dat",
          "d": "Dotazování zajišťuje příkaz SELECT s klauzulemi FROM, WHERE, GROUP BY, HAVING a ORDER BY. Aktualizaci dat provádějí INSERT (vkládání), UPDATE (změna) a DELETE (mazání řádků). Tyto příkazy tvoří jazyk pro manipulaci s daty (DML)."
        },
        {
          "t": "Agregační funkce",
          "d": "Agregační funkce počítají souhrnnou hodnotu z více řádků – patří sem COUNT, SUM, AVG, MIN a MAX. Často se kombinují s klauzulí GROUP BY, která řádky seskupí, a HAVING, jež skupiny filtruje. Umožňují tvořit přehledy a statistiky nad daty."
        },
        {
          "t": "Triggery a uložené procedury",
          "d": "Trigger je procedura automaticky spuštěná databází jako reakce na událost – vložení, změnu nebo smazání řádku; slouží k vynucení pravidel a k auditu. Uložená procedura je pojmenovaný blok kódu uložený a vykonávaný na serveru. Oba přesouvají část logiky do databáze."
        },
        {
          "t": "Definice dat a integritní omezení",
          "d": "Příkazy pro definici dat (DDL), jako CREATE a ALTER TABLE, vytvářejí a mění strukturu databáze. Integritní omezení (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK) hlídají platnost a konzistenci dat. Databáze je sama vynucuje při každé změně."
        },
        {
          "t": "Transakční zpracování a jeho vlastnosti",
          "d": "Transakce je posloupnost operací tvořící jeden logický celek, který se provede buď celý, nebo vůbec. Má vlastnosti ACID: atomicitu, konzistenci, izolaci (souběžné transakce se neovlivní) a trvanlivost (potvrzené změny přečkají selhání). Transakce se zakončí potvrzením (COMMIT), nebo odvoláním (ROLLBACK)."
        },
        {
          "t": "Základní principy vyhodnocování dotazů",
          "d": "SŘBD převede dotaz na plán vykonání a optimalizátor z možných plánů vybere podle odhadu nákladů ten nejlevnější. Pro zrychlení přístupu k datům slouží indexy (často B-stromy) a hašování, které nahrazují pomalé procházení celé tabulky. Cílem je minimalizovat počet diskových operací a dobu odezvy."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Operační systémy",
      "codes": [
        "PB152"
      ],
      "def": "Operační systém je základní systémový software, který spravuje hardwarové prostředky počítače a poskytuje aplikacím jednotné, pohodlné a bezpečné rozhraní k jejich využití. Funguje jako prostředník mezi hardwarem a uživatelskými programy. Jeho ústřední částí je jádro (kernel), které běží v privilegovaném režimu procesoru s plným přístupem k hardwaru, zatímco aplikace běží v omezeném uživatelském režimu a o služby jádra žádají systémovými voláními. Operační systém spravuje paměť: díky virtuální paměti má každý proces vlastní souvislý adresní prostor, který se pomocí stránkových tabulek mapuje na fyzickou paměť, případně i na disk. Spravuje výpočet: proces je běžící program, vlákno je jednotka výpočtu uvnitř procesu a plánovač rozhoduje, které vlákno poběží na procesoru. S tím souvisí souběžnost a její problémy – soupeření o sdílené zdroje, nutnost synchronizace a riziko uváznutí. OS také řídí uživatele a přístupová práva a umožňuje virtualizaci. V systémech POSIX vzniká nový proces voláním fork (s technikou copy-on-write) a program se spouští voláním exec.",
      "scope": [
        {
          "t": "Architektura operačního systému a jádra",
          "d": "Operační systém se skládá z jádra a sady systémových služeb a knihoven. Podle uspořádání jádra rozlišujeme monolitické jádro (vše v jednom celku) a mikrojádro (minimální jádro, služby jako oddělené procesy). Architektura ovlivňuje výkon, spolehlivost i rozšiřitelnost."
        },
        {
          "t": "Základní režimy procesoru",
          "d": "Procesor pracuje nejméně ve dvou režimech: privilegovaném (jaderném), kde je dovoleno vše, a uživatelském, kde je přístup k hardwaru omezen. Toto oddělení chrání systém před chybami a útoky aplikací. Přechod do jádra nastává systémovým voláním nebo přerušením."
        },
        {
          "t": "Programovací rozhraní a knihovny",
          "d": "Operační systém nabízí aplikacím programovací rozhraní (API) tvořené systémovými voláními pro práci se soubory, procesy, pamětí a sítí. Knihovny tato volání zabalují do pohodlnějších funkcí. Aplikace se tak nemusí starat o detaily hardwaru."
        },
        {
          "t": "Uživatel, přístupová práva, virtualizace",
          "d": "Operační systém rozlišuje uživatele a pomocí přístupových práv řídí, kdo smí číst, zapisovat či spouštět dané prostředky. Tím zajišťuje bezpečnost a izolaci. Virtualizace umožňuje provozovat na jednom stroji více izolovaných prostředí, například virtuálních strojů nebo kontejnerů."
        },
        {
          "t": "Virtuální paměť, proces a stránkové tabulky",
          "d": "Virtuální paměť dává každému procesu vlastní souvislý adresní prostor nezávislý na fyzické paměti. Stránkové tabulky překládají virtuální adresy (po stránkách) na fyzické rámce; nepoužívané stránky lze odložit na disk. Tím se procesy navzájem izolují a lze využít více paměti, než je fyzicky k dispozici."
        },
        {
          "t": "Vlákno, plánování vláken a procesů",
          "d": "Proces je běžící program s vlastními prostředky, vlákno je jednotka výpočtu uvnitř procesu a vlákna procesu sdílejí jeho paměť. Plánovač rozhoduje, které vlákno poběží na procesoru a jak dlouho, podle zvolené strategie (například round-robin nebo podle priorit). Cílem je spravedlivé a efektivní využití procesoru."
        },
        {
          "t": "Souběžnost, uváznutí, přidělování zdrojů",
          "d": "Souběžnost znamená, že více vláken postupuje zdánlivě či skutečně současně a soupeří o sdílené zdroje, což vyžaduje synchronizaci (zámky, semafory). Uváznutí (deadlock) nastane, když skupina vláken navzájem čeká na zdroje, které drží ostatní. Předchází se mu vhodným přidělováním zdrojů, nebo se detekuje a řeší."
        },
        {
          "t": "Vznik procesu v POSIX a copy-on-write",
          "d": "V systémech POSIX vzniká nový proces voláním fork, které vytvoří kopii volajícího procesu, a nový program se zavede voláním exec. Technika copy-on-write přitom paměť fyzicky nekopíruje hned – sdílené stránky se zkopírují až při prvním zápisu. Tím se fork stává rychlým a paměťově úsporným."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Souborové systémy",
      "codes": [
        "PB152"
      ],
      "def": "Souborový systém je část operačního systému, která organizuje data na úložném zařízení a zpřístupňuje je jako pojmenované soubory uspořádané do adresářů. Vytváří abstrakci nad blokovým zařízením – diskem či SSD, který poskytuje pouze čtení a zápis pevně velkých bloků. Mezi souborovým systémem a zařízením leží bloková vrstva s I/O plánovačem, jenž řadí a optimalizuje pořadí diskových operací; na úrovni více disků sem patří i RAID (spojení disků pro vyšší výkon či spolehlivost) a šifrování disku. Souborový systém řeší, jak souborům přidělovat volné místo na disku a jak evidovat volné a obsazené bloky; nevhodná alokace vede k fragmentaci, která zpomaluje přístup. Adresářová struktura je obvykle stromová a i ona má svou reprezentaci na disku, například pomocí i-uzlů. Kromě běžného čtení a zápisu umožňuje souborový systém i mapování souboru do paměti, kdy se obsah souboru zpřístupní přímo jako oblast paměti procesu.",
      "scope": [
        {
          "t": "Blokové zařízení",
          "d": "Blokové zařízení (disk, SSD) zpřístupňuje úložný prostor po blocích pevné velikosti, které lze adresovat a samostatně číst či zapisovat. Souborový systém nad ním staví abstrakci souborů a adresářů. Bloková povaha ovlivňuje, jak se data alokují a jak velká je vnitřní fragmentace."
        },
        {
          "t": "Bloková vrstva a I/O plánovač",
          "d": "Bloková vrstva operačního systému zprostředkovává přístup k blokovým zařízením a sjednocuje práci s různým hardwarem. I/O plánovač rozhoduje o pořadí, v jakém se požadavky na čtení a zápis předají zařízení, aby se zvýšila propustnost a snížila latence. U rotačních disků zohledňuje i polohu hlaviček."
        },
        {
          "t": "RAID",
          "d": "RAID spojuje více fyzických disků do jednoho logického svazku za účelem vyššího výkonu, spolehlivosti, nebo obojího. Různé úrovně RAID volí mezi zrcadlením dat (redundance), jejich rozkládáním (striping) pro rychlost, případně paritou pro obnovu po výpadku disku. Zvyšuje odolnost vůči selhání jednotlivých disků."
        },
        {
          "t": "Šifrování disku",
          "d": "Šifrování disku ukládá data na úložiště v zašifrované podobě a dešifruje je až při čtení, a naopak. Chrání důvěrnost dat při krádeži nebo ztrátě zařízení. Může probíhat na úrovni celého oddílu, či disku, nebo jednotlivých souborů."
        },
        {
          "t": "Obyčejné soubory",
          "d": "Obyčejný soubor je pojmenovaná posloupnost bajtů uložená v souborovém systému spolu s metadaty (velikost, práva, časy). Z pohledu uživatele jde o základní jednotku ukládání dat. Souborový systém k němu eviduje, ve kterých blocích na disku je uložen."
        },
        {
          "t": "Alokace volného místa a fragmentace",
          "d": "Souborový systém musí souborům přidělovat volné bloky a evidovat, které bloky jsou volné, například bitmapou. Strategie alokace (souvislá, zřetězená, indexová) ovlivňuje rychlost přístupu. Fragmentace – roztroušení souboru po nesouvislých blocích – přístup zpomaluje, zejména u rotačních disků."
        },
        {
          "t": "Adresářová struktura a její reprezentace na disku",
          "d": "Adresář sdružuje soubory a další adresáře a obvykle tvoří stromovou hierarchii. Na disku je adresář reprezentován jako záznamy mapující jména na identifikátory souborů, například čísla i-uzlů. I-uzel uchovává metadata souboru a odkazy na jeho datové bloky."
        },
        {
          "t": "Vstup a výstup mapovaný do paměti",
          "d": "Mapování souboru do paměti (memory-mapped I/O) zpřístupní obsah souboru přímo jako oblast adresního prostoru procesu. Čtení a zápis pak probíhají běžným přístupem do paměti, o přenos dat z disku se stará systém stránkováním. Zjednodušuje kód a může zvýšit výkon."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Sítě",
      "codes": [
        "PB156"
      ],
      "def": "Počítačová síť propojuje počítače a další zařízení tak, aby spolu mohly komunikovat a sdílet data a prostředky. Protože je komunikace velmi složitá, popisuje se vrstevnatými modely – referenčním ISO/OSI se sedmi vrstvami a prakticky používaným TCP/IP. Princip vrstvení spočívá v tom, že každá vrstva poskytuje určitou službu vrstvě nad sebou a využívá služeb vrstvy pod sebou, přičemž s odpovídající vrstvou protějšku komunikuje vlastním protokolem. Nejnižší fyzická vrstva se stará o přenos jednotlivých bitů jako signálů po médiu a o jejich kódování; spojová vrstva řídí přístup ke sdílenému médiu a adresaci v rámci lokální sítě. Síťová vrstva zajišťuje adresaci napříč sítěmi a směrování – hledání cesty paketu mezi sítěmi propojenými směrovači – a také přepínání a multicast. Transportní vrstva poskytuje komunikaci mezi aplikacemi: protokol TCP zajišťuje spolehlivý, spojově orientovaný přenos s navázáním a ukončením spojení, potvrzováním a řízením toku, zatímco UDP nabízí jednoduchý nespolehlivý přenos.",
      "scope": [
        {
          "t": "Modely vrstev (ISO/OSI, TCP/IP)",
          "d": "Síťová komunikace se popisuje vrstevnatými modely: referenční ISO/OSI má sedm vrstev, prakticky používaný model TCP/IP čtyři. Každá vrstva poskytuje službu vrstvě nad sebou a skrývá detaily nižších vrstev. Tím se složitý problém komunikace rozdělí na zvládnutelné části."
        },
        {
          "t": "Funkcionalita a součinnost vrstev, adresace",
          "d": "Každá vrstva plní konkrétní úkol a se sousedními vrstvami komunikuje přes definované rozhraní, s protějškem pak vlastním protokolem. Data se při sestupu zapouzdřují (přidávají se hlavičky) a při výstupu opět rozbalují. Každá vrstva má svůj druh adresace – například MAC adresu na spojové, IP adresu na síťové a port na transportní vrstvě."
        },
        {
          "t": "Fyzická vrstva, signály a jejich kódování",
          "d": "Fyzická vrstva přenáší jednotlivé bity jako fyzikální signály po přenosovém médiu – kabelu, optickém vláknu či rádiu. Kódování určuje, jak se logické nuly a jedničky převedou na signál (úrovně napětí, jejich změny, modulace). Řeší se zde i přenosová rychlost, šířka pásma a odolnost vůči rušení."
        },
        {
          "t": "Řízení přístupu k médiu",
          "d": "Sdílí-li jedno médium více zařízení, je třeba řídit, kdo a kdy vysílá, aby nedocházelo ke kolizím. Slouží k tomu metody přístupu k médiu (MAC), například CSMA/CD u klasického Ethernetu nebo CSMA/CA u Wi-Fi. Tato funkce patří na spojovou vrstvu."
        },
        {
          "t": "Propojování počítačových sítí",
          "d": "Jednotlivé sítě se propojují aktivními prvky – opakovači, přepínači (switch) a směrovači (router) – do větších celků až po internet. Každý prvek pracuje na jiné vrstvě modelu. Propojování umožňuje komunikaci mezi zařízeními v různých sítích."
        },
        {
          "t": "Síťové protokoly, přepínání a směrování, multicast",
          "d": "Síťová vrstva (protokol IP) zajišťuje adresaci a doručování paketů mezi sítěmi. Směrování je proces hledání cesty paketu sítí pomocí směrovacích tabulek, přepínání předává data v rámci sítě. Multicast doručuje data současně skupině příjemců, na rozdíl od unicastu (jeden příjemce) a broadcastu (všichni)."
        },
        {
          "t": "Zajištěný přenos, sestavení a ukončení spojení",
          "d": "Spolehlivý (zajištěný) přenos zaručuje, že data dorazí celá, ve správném pořadí a bez chyb – pomocí číslování, potvrzování (ACK) a opětovného zasílání ztracených dat. Spojově orientovaný protokol musí spojení nejprve navázat (TCP používá třícestný handshake) a po přenosu korektně ukončit. Součástí je i řízení toku a zahlcení."
        },
        {
          "t": "Transportní protokoly",
          "d": "Transportní vrstva zajišťuje komunikaci mezi konkrétními aplikacemi rozlišenými porty. TCP poskytuje spolehlivý, spojově orientovaný přenos s potvrzováním a řízením toku, UDP nabízí jednoduchý, rychlý, ale nespolehlivý přenos bez spojení. Volba mezi nimi závisí na potřebách aplikace."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Síťové aplikace a bezpečnost",
      "codes": [
        "PB156"
      ],
      "def": "Tato oblast se zabývá nejvyšší, aplikační vrstvou síťové komunikace a zabezpečením přenosu dat. Aplikační vrstva poskytuje protokoly, které přímo používají uživatelské programy: doručování elektronické pošty (SMTP pro odesílání, IMAP a POP3 pro vyzvedávání), přenos souborů (FTP), web (HTTP a HTTPS) a jmennou službu DNS, jež překládá doménová jména na IP adresy. Důležitým tématem je kvalita služby (QoS) – schopnost sítě poskytnout přenosu určité záruky ohledně propustnosti, zpoždění a jeho kolísání (jitteru) a ztrátovosti; to je zásadní zejména pro multimédia (hlas, video) přenášená v reálném čase. Druhým velkým tématem je bezpečnost síťové komunikace: zajištění důvěrnosti pomocí šifrování, integrity dat a autentizace komunikujících stran. Zabezpečení lze zavést na různých vrstvách – například TLS na transportní vrstvě (základ HTTPS) nebo IPsec na síťové vrstvě – přičemž každá úroveň chrání jiný rozsah komunikace.",
      "scope": [
        {
          "t": "Základní aplikační protokoly (pošta, přenos souborů, web, jmenná služba)",
          "d": "Aplikační protokoly slouží přímo programům uživatele: elektronickou poštu obstarává SMTP (odesílání) a IMAP nebo POP3 (příjem), přenos souborů FTP a web HTTP. Jmenná služba DNS překládá doménová jména na IP adresy. Tyto protokoly tvoří nejvyšší vrstvu síťové komunikace."
        },
        {
          "t": "Principy popisu a zajištění kvality služby",
          "d": "Kvalita služby (QoS) vyjadřuje záruky sítě ohledně parametrů přenosu – propustnosti, zpoždění, kolísání zpoždění (jitteru) a ztrátovosti. Zajišťuje se mechanismy jako prioritizace provozu, rezervace prostředků a řízení zahlcení. Bez QoS jsou všechny pakety obsluhovány „jak nejlépe to jde“ (best effort)."
        },
        {
          "t": "Použití pro multimédia",
          "d": "Multimediální přenosy v reálném čase (hlas, video, streamování) jsou citlivé na zpoždění a jeho kolísání, méně už na občasnou ztrátu paketu. Proto často používají protokol UDP a vyžadují podporu QoS. K vyhlazení kolísání slouží vyrovnávací paměti (buffery)."
        },
        {
          "t": "Zabezpečení síťové komunikace, autentizace a šifrování",
          "d": "Zabezpečení komunikace stojí na třech pilířích: důvěrnosti (šifrování brání odposlechu), integritě (ověření, že data nebyla změněna) a autentizaci (ověření identity protistrany). Používá se symetrická i asymetrická kryptografie a kryptografické hašování. Tím se brání odposlechu, podvržení i změně dat."
        },
        {
          "t": "Zabezpečení na jednotlivých protokolových vrstvách",
          "d": "Bezpečnostní mechanismy lze zavést na různých vrstvách: IPsec na síťové vrstvě chrání veškerý IP provoz, TLS na transportní vrstvě zabezpečuje spojení (například HTTPS) a zabezpečení existuje i na aplikační vrstvě. Každá úroveň chrání jiný rozsah komunikace a má jiné výhody. Volba závisí na tom, co a před kým je třeba chránit."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Základy informační bezpečnosti",
      "codes": [
        "PV080"
      ],
      "def": "Informační bezpečnost se zabývá ochranou informací a informačních systémů před hrozbami tak, aby byly zachovány jejich žádoucí vlastnosti. Tradičně se opírá o tři základní cíle, takzvanou triádu CIA: důvěrnost (informaci se dozví jen oprávnění), integrita (informace není neoprávněně změněna) a dostupnost (informace je k dispozici, když je potřeba); doplňuje je nepopiratelnost původu (původce nemůže popřít své jednání). Technickým základem ochrany jsou kryptografická primitiva – stavební bloky jako symetrické a asymetrické šifry, kryptografické hašovací funkce a digitální podpisy – a kryptografické protokoly, které je skládají do bezpečných postupů, například pro ustavení klíče či autentizaci. Bezpečnost ale není jen technika, je to proces. Patří sem řízení rizik (identifikace hrozeb a zranitelností, odhad dopadů a volba protiopatření), audit a bezpečnostní operace (monitorování, reakce na incidenty), dodržování standardů a metodik a hodnocení bezpečnosti, které posuzuje, nakolik systém požadované vlastnosti skutečně splňuje.",
      "scope": [
        {
          "t": "Základní bezpečnostní funkce – důvěrnost, integrita, dostupnost, nepopiratelnost",
          "d": "Důvěrnost zajišťuje, že informaci získají jen oprávnění; integrita, že nebude neoprávněně změněna; dostupnost, že bude k dispozici, když je třeba. Tyto tři tvoří klasickou triádu CIA. Nepopiratelnost původu navíc brání tomu, aby původce své jednání popřel."
        },
        {
          "t": "Kryptografická primitiva",
          "d": "Kryptografická primitiva jsou základní stavební bloky pro zajištění bezpečnosti. Patří k nim symetrické šifry (stejný klíč pro šifrování i dešifrování), asymetrické šifry (veřejný a soukromý klíč), kryptografické hašovací funkce a digitální podpisy. Z nich se skládají složitější bezpečnostní mechanismy."
        },
        {
          "t": "Kryptografické protokoly",
          "d": "Kryptografický protokol je přesně daná posloupnost kroků a zpráv, která pomocí kryptografických primitiv dosáhne bezpečnostního cíle – například ustavení sdíleného klíče, vzájemné autentizace nebo zabezpečeného spojení. Protokol musí být navržen tak, aby odolal i aktivnímu útočníkovi. I drobná chyba v návrhu jej může zcela prolomit."
        },
        {
          "t": "Řízení rizik",
          "d": "Řízení rizik je proces identifikace aktiv, hrozeb a zranitelností, odhadu pravděpodobnosti a dopadu možných incidentů a volby přiměřených protiopatření. Riziko obvykle nelze zcela odstranit – lze je snížit, přenést (například pojištěním), nebo akceptovat. Cílem je vynaložit prostředky tam, kde přinesou největší užitek."
        },
        {
          "t": "Audit, bezpečnostní operace, standardy",
          "d": "Bezpečnostní audit nezávisle ověřuje, zda systém a procesy splňují stanovené požadavky a politiky. Bezpečnostní operace zahrnují průběžné monitorování, detekci a zvládání incidentů. Standardy a metodiky, například řada ISO/IEC 27000, poskytují osvědčený rámec pro řízení bezpečnosti."
        },
        {
          "t": "Hodnocení bezpečnosti",
          "d": "Hodnocení bezpečnosti posuzuje, nakolik systém skutečně splňuje požadované bezpečnostní vlastnosti. Provádí se pomocí standardizovaných kritérií a metod (například Common Criteria), testování a analýzy. Výsledkem je doložená míra důvěry v bezpečnost systému."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Informační bezpečnost",
      "codes": [
        "PV080"
      ],
      "def": "Tato oblast navazuje na základy informační bezpečnosti a soustředí se na konkrétní oblasti praktické ochrany systémů, dat a uživatelů. Patří sem řízení identit a přístupu (IAM): spolehlivé ověření, kdo uživatel je (autentizace), a řízení toho, co smí dělat (autorizace), na principu nejmenších potřebných oprávnění. Samostatným tématem je ochrana soukromí – ochrana osobních údajů a kontrola nad tím, jak jsou shromažďovány a používány; pracuje s koncepty jako minimalizace dat či soukromí už v návrhu. Praktickou hrozbou jsou síťové útoky (odposlech, podvržení, odepření služby, útoky na webové aplikace), proti nimž je třeba budovat obranu. Protože mnoho zranitelností vzniká už při tvorbě softwaru, je klíčové bezpečné programování a bezpečný vývojový proces, který zohledňuje bezpečnost ve všech fázích životního cyklu. Konečně použitelná bezpečnost zdůrazňuje, že bezpečnostní opatření musí být pro lidi srozumitelná a snadno použitelná – jinak je uživatelé obcházejí a opatření selhává; bezpečnost je tedy i otázkou lidského faktoru.",
      "scope": [
        {
          "t": "Řízení identity a přístupu",
          "d": "Řízení identit a přístupu (IAM) zahrnuje správu identit uživatelů, jejich autentizaci (ověření, kdo jsou) a autorizaci (řízení, k čemu mají přístup). Uplatňuje se princip nejmenších oprávnění – uživatel dostane jen práva nutná pro svou roli. Patří sem i metody jako vícefaktorová autentizace a řízení přístupu podle rolí."
        },
        {
          "t": "Ochrana soukromí – koncepty a metody",
          "d": "Ochrana soukromí se zaměřuje na ochranu osobních údajů a na kontrolu jednotlivce nad jejich sběrem a využíváním. Mezi koncepty patří minimalizace dat, účelové omezení, anonymizace a pseudonymizace a princip soukromí už v návrhu (privacy by design). Souvisí i s právní úpravou, například s GDPR."
        },
        {
          "t": "Síťové útoky",
          "d": "Síťové útoky cílí na komunikaci a síťové služby – patří sem odposlech, podvržení identity (spoofing), útok typu man-in-the-middle, odepření služby (DoS a DDoS) i útoky na webové aplikace. Liší se cílem (důvěrnost, integrita, dostupnost) i mírou aktivity útočníka. Obrana kombinuje šifrování, filtrování provozu, detekci průniků a správnou konfiguraci."
        },
        {
          "t": "Bezpečné programování a vývoj SW",
          "d": "Mnoho zranitelností vzniká už chybami v kódu, například přetečením vyrovnávací paměti nebo SQL injection. Bezpečné programování jim předchází validací vstupů, ošetřením chyb a používáním bezpečných postupů a knihoven. Bezpečnost se zohledňuje v celém životním cyklu vývoje – od návrhu přes implementaci po testování."
        },
        {
          "t": "Použitelná bezpečnost",
          "d": "Použitelná bezpečnost (usable security) zkoumá souhru bezpečnosti a lidského faktoru. Vychází z toho, že příliš složitá nebo nesrozumitelná opatření uživatelé obcházejí, čímž bezpečnost selhává. Cílem je navrhovat bezpečnostní mechanismy tak, aby byly srozumitelné a snadno správně použitelné."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Aplikované informační systémy",
      "codes": [
        "PV028"
      ],
      "def": "Aplikovaný informační systém (AIS) je informační systém nasazený v konkrétní organizační doméně, kde podporuje sběr, uchování, zpracování a sdílení dat pro řízení procesů a rozhodování. Nejde jen o software: AIS zahrnuje data, uživatele, procesy, pravidla, infrastrukturu i provozní odpovědnosti. Typické oblasti použití jsou státní správa, výroba, zdravotnictví, sklady a obchod, kde systém propojuje evidenci, workflow, reporting a integrace s okolními systémy. Rozsáhlé IS mívají vícevrstvou nebo servisně orientovanou architekturu, oddělují prezentační, aplikační a datovou vrstvu a řeší bezpečnost, auditovatelnost, škálování a dostupnost. Vývoj a zavádění takových systémů vyžaduje řízení rozsáhlých projektů, práci s požadavky, změnové řízení a plán migrace dat. Po nasazení je klíčové řízení provozu: monitoring, zálohování, správa incidentů, dostupnost, kapacitní plánování a průběžná údržba.",
      "scope": [
        {
          "t": "Definice AIS",
          "d": "AIS je informační systém určený pro konkrétní oblast použití organizace. Zahrnuje aplikace, data, procesy, uživatele, role a technologickou infrastrukturu. Jeho účelem je podporovat provozní činnosti i manažerské rozhodování."
        },
        {
          "t": "Oblasti použití IS: státní správa, výroba, zdravotnictví, sklady a obchod",
          "d": "Ve státní správě IS podporují agendy a evidenci, ve výrobě plánování a sledování zakázek, ve zdravotnictví práci se zdravotnickou dokumentací a ve skladech a obchodu zásoby, objednávky a prodej. Každá doména má vlastní procesy, regulace a integrační potřeby."
        },
        {
          "t": "Architektury rozsáhlých informačních systémů",
          "d": "Rozsáhlé IS se navrhují ve vrstvách nebo službách: prezentační rozhraní, aplikační logika, datová vrstva a integrační rozhraní. Důležitá je modularita, škálovatelnost, dostupnost, bezpečnost, audit a správa rozhraní na jiné systémy."
        },
        {
          "t": "Metody vedení rozsáhlých projektů",
          "d": "Vedení rozsáhlého projektu zahrnuje sběr požadavků, plánování rozsahu, řízení rizik, změnové řízení, koordinaci týmů a akceptační testování. Používají se prediktivní i agilní přístupy, často v kombinaci podle míry nejistoty a regulace."
        },
        {
          "t": "Řízení provozu IS",
          "d": "Řízení provozu řeší dostupnost systému, monitoring, incidenty, zálohy, obnovu po havárii, nasazování změn, kapacitní plánování a podporu uživatelů. Cílem je stabilní služba s předvídatelnou kvalitou a kontrolovanými změnami."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Digitální systémy",
      "codes": [
        "PV170"
      ],
      "def": "Digitální systémy pracují s diskrétní reprezentací informace pomocí bitů, kódů a logických funkcí. Základem je teorie zobrazení dat a kódování informací včetně operací nad binárními reprezentacemi. Logické funkce lze minimalizovat algebraicky, graficky například Karnaughovými mapami nebo algoritmicky metodami typu Quine-McCluskey; cílem může být menší počet hradel, nižší zpoždění nebo lepší testovatelnost. Kombinační obvody nemají vnitřní stav a výstup závisí pouze na aktuálních vstupech; patří sem aritmetické obvody, komparátory, multiplexery, demultiplexery, kodéry a dekodéry. Sekvenční obvody mají paměť, jejich chování závisí na aktuálním vstupu i vnitřním stavu. Návrh sekvenčního obvodu zahrnuje kódování stavů, volbu klopných obvodů, konstrukci registrů, čítačů, řadičů a sekvencérů a posouzení vlivu zpoždění, hazardů a synchronizace.",
      "scope": [
        {
          "t": "Teorie zobrazení dat a kódování informací včetně operací",
          "d": "Data se v digitálních systémech reprezentují binárně pomocí pozičních soustav a kódů. Důležité jsou operace nad bity, doplňkový kód pro znaménková čísla, kódy znaků a detekční či opravné kódy. Reprezentace ovlivňuje rozsah hodnot, aritmetiku i chyby."
        },
        {
          "t": "Algebraické, grafické a algoritmické minimalizační metody",
          "d": "Minimalizace logických funkcí hledá jednodušší ekvivalentní výraz. Algebraické úpravy používají zákony Booleovy algebry, Karnaughovy mapy vizuálně seskupují jedničky a algoritmické metody systematicky hledají primární implikanty."
        },
        {
          "t": "Optimalizace zpoždění, logických prvků a testovatelnosti",
          "d": "Návrh obvodu může optimalizovat počet hradel, hloubku logiky, spotřebu, zpoždění nebo testovatelnost. Tyto cíle se často střetávají: minimální počet hradel nemusí dát nejkratší kritickou cestu ani nejsnáze testovatelný obvod."
        },
        {
          "t": "Kombinační konstrukční prvky digitálních systémů",
          "d": "Kombinační prvky nemají paměť. Aritmetické obvody provádějí sčítání a další operace, komparátory porovnávají hodnoty, multiplexery vybírají vstup podle adresy a kodéry či dekodéry převádějí mezi kódovanými reprezentacemi."
        },
        {
          "t": "Sekvenční obvody a kódování vnitřních stavů",
          "d": "Sekvenční obvod má stav uložený v klopných obvodech nebo registrech. Kódování stavů ovlivňuje složitost přechodové a výstupní logiky, počet potřebných klopných obvodů i možné hazardy."
        },
        {
          "t": "Typy a vlastnosti klopných obvodů",
          "d": "Klopné obvody uchovávají jeden bit. Základní typy jsou SR, D, JK a T; liší se vstupy, přechodovou funkcí a vhodností pro registry nebo čítače. Důležité jsou časové parametry setup, hold a zpoždění."
        },
        {
          "t": "Základní sekvenční konstrukční prvky",
          "d": "Registry uchovávají vícebitová data, čítače postupují posloupností stavů, komparátory porovnávají hodnoty a řadiče či sekvencéry generují řídicí signály v čase. Jsou základními stavebními bloky procesorů a řídicích jednotek."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Paralelní systémy",
      "codes": [
        "IB109"
      ],
      "def": "Paralelní systémy využívají více výpočetních jednotek současně, aby zrychlily výpočet, zpracovaly větší data nebo zvýšily propustnost. Návrh paralelního algoritmu začíná dekompozicí problému na úlohy nebo data, pokračuje mapováním práce na procesory či vlákna a volbou komunikačních primitiv. Výkonnost se hodnotí pomocí zrychlení, efektivity, škálovatelnosti a režie komunikace a synchronizace; praktické limity popisuje například Amdahlův zákon. V prostředí se sdílenou pamětí komunikují vlákna přes společný adresní prostor a používají synchronizaci, kritické sekce a atomické operace; běžné nástroje jsou OpenMP a POSIX Threads. Lock-free přístup se snaží zajistit pokrok bez klasických zámků pomocí atomických instrukcí. V distribuované paměti má každý proces vlastní paměť a komunikuje zprávami, typicky přes MPI. Správný paralelní program musí řešit datové závislosti, závody, uváznutí, vyvážení zátěže a cenu komunikace.",
      "scope": [
        {
          "t": "Dekompozice, mapování a komunikační primitiva",
          "d": "Dekompozice rozdělí problém na menší úlohy nebo části dat. Mapování přiřadí práci výpočetním jednotkám tak, aby byla zátěž vyvážená. Komunikační primitiva zahrnují sdílené proměnné, zámky, bariéry, zprávy, broadcast a redukce."
        },
        {
          "t": "Výkonnostní analýza paralelních algoritmů",
          "d": "Měří se čas běhu, zrychlení, efektivita a škálovatelnost. Režii tvoří komunikace, synchronizace, nevyvážená zátěž a sekvenční části programu. Amdahlův zákon ukazuje, že sekvenční podíl omezuje maximální zrychlení."
        },
        {
          "t": "Paralelní algoritmy se sdílenou pamětí",
          "d": "Ve sdílené paměti vlákna vidí společný adresní prostor. Výhodou je snadné sdílení dat, nevýhodou riziko datových závodů, falešného sdílení a nutnost synchronizace pomocí zámků, atomik nebo bariér."
        },
        {
          "t": "OpenMP standard",
          "d": "OpenMP je rozhraní pro paralelizaci programů ve sdílené paměti pomocí direktiv, běhové knihovny a proměnných prostředí. Umožňuje paralelní cykly, redukce, sekce, plánování iterací a synchronizaci."
        },
        {
          "t": "POSIX Threads",
          "d": "POSIX Threads poskytují nízkoúrovňové API pro vytváření a řízení vláken v C/C++. Programátor explicitně vytváří vlákna, předává jim data a používá mutexy, podmínkové proměnné nebo bariéry pro synchronizaci."
        },
        {
          "t": "Lock-free přístup",
          "d": "Lock-free algoritmy nepoužívají klasické zámky a zajišťují, že systém jako celek dělá pokrok. Opírají se o atomické operace jako compare-and-swap. Jsou odolnější proti uváznutí, ale obtížně se navrhují a ověřují."
        },
        {
          "t": "Paralelní algoritmy s distribuovanou pamětí a MPI",
          "d": "V distribuované paměti má každý proces vlastní adresní prostor a data se předávají zprávami. MPI poskytuje standardní operace send/receive i kolektivní komunikaci jako broadcast, scatter, gather a reduce."
        }
      ]
    },
    {
      "cat": "Programové, výpočetní a informační systémy",
      "title": "Moderní značkovací jazyky",
      "codes": [
        "PB138"
      ],
      "def": "Moderní značkovací jazyky, zejména rodina XML, slouží ke strukturovanému zápisu dokumentů a dat v textové, strojově zpracovatelné podobě. XML definuje syntaxi elementů, atributů, stromovou strukturu dokumentu, jmenné prostory a pravidla dobře utvořeného dokumentu. Používá se pro dokumenty, konfigurační soubory, výměnu dat i doménové formáty. Programy pracují s XML často přes objektový model dokumentu (DOM), který reprezentuje dokument jako strom uzlů, nebo přes proudové zpracování u velkých souborů. Správnost struktury se popisuje schématy, zejména XML Schema, které určuje elementy, atributy, typy a omezení. XPath slouží k navigaci ve stromu XML, XQuery k dotazování nad XML daty a XSLT k transformacím XML dokumentů do jiných XML, HTML nebo textových výstupů. Důležité je rozumět rozdílu mezi syntaktickou správností, validitou vůči schématu a významem dat pro aplikaci.",
      "scope": [
        {
          "t": "Základní standardy rodiny XML",
          "d": "Rodina XML zahrnuje XML syntaxi, jmenné prostory, XML Schema, XPath, XQuery a XSLT. Tyto standardy společně řeší zápis strukturovaných dat, popis povolené struktury, adresaci částí dokumentu, dotazování a transformace."
        },
        {
          "t": "Aplikace XML pro dokumenty a data",
          "d": "XML lze použít pro dokumentově orientovaný obsah i pro datovou výměnu. U dokumentů je důležité pořadí a smíšený obsah, u dat pravidelná struktura a typy. Výhodou je čitelnost a standardní nástroje, nevýhodou větší ukecanost."
        },
        {
          "t": "Objektový model dokumentu (DOM)",
          "d": "DOM reprezentuje XML dokument jako strom uzlů: dokument, elementy, atributy, textové uzly a komentáře. Umožňuje náhodný přístup a úpravy stromu, ale u velkých dokumentů spotřebuje více paměti než proudové zpracování."
        },
        {
          "t": "Jazyky schémat (XML Schema)",
          "d": "XML Schema definuje povolené elementy, atributy, pořadí, výskyty a datové typy. Validace ověřuje, zda dokument odpovídá schématu. Schéma je kontrakt mezi producentem a konzumentem XML dat."
        },
        {
          "t": "Navigace a dotazování v XML datech (XPath, XQuery)",
          "d": "XPath adresuje uzly ve stromu pomocí cest, predikátů a funkcí. XQuery je bohatší dotazovací jazyk nad XML kolekcemi, umožňuje iterace, filtrování, řazení a konstrukci nových XML výsledků."
        },
        {
          "t": "Transformace XML (XSLT)",
          "d": "XSLT je deklarativní jazyk pro transformaci XML pomocí šablon. Šablony se aplikují na uzly vybrané XPath výrazy a generují výstup, například HTML stránku, jiný XML formát nebo text."
        }
      ]
    }
  ],
  "detail": {
    "Lineární algebra": {
      "Operace s vektory a maticemi": {
        "ex": "Pro a=(1,−2,3) a b=(4,0,−1) je a+b=(5,−2,2) a 3a=(3,−6,9); součin matice A typu 2×3 s maticí B typu 3×2 dá matici 2×2, kdežto B·A vyjde 3×3 – už z rozměrů je vidět, proč A·B≠B·A.",
        "cv": "Spočítej 2a−b pro a=(2,1,−1), b=(1,3,0), vynásob A=[[1,2],[0,1]] s B=[[3,1],[2,4]] a ověř, že B·A dává jiný výsledek."
      },
      "Vlastnosti lineárních operací a skalární součin": {
        "ex": "Skalární součin u·v=(1,2,2)·(2,−1,0)=2−2+0=0, takže vektory jsou kolmé; jejich délky jsou |u|=3 a |v|=√5.",
        "cv": "Pro u=(1,0,1) a v=(2,1,−2) spočítej u·v, |u|, |v| a cos φ a rozhodni, zda je úhel ostrý, pravý, nebo tupý."
      },
      "Gaussova eliminace": {
        "ex": "Soustava x+y+z=6, 2x−y+z=3, x+2y−z=2 se řádkovými úpravami převede na schodovitý tvar a zpětnou substitucí vyjde x=1, y=2, z=3.",
        "cv": "Vyřeš soustavu x+y+z=4, 2x−y+z=1, 3x+y−z=9 Gaussovou eliminací a z výsledného tvaru urči hodnost matice a počet řešení."
      },
      "Determinant": {
        "ex": "Pro A=[[2,1],[3,4]] je det(A)=2·4−1·3=5≠0, matice je tedy regulární; geometricky transformace A zvětší obsah pětkrát.",
        "cv": "Spočítej det([[1,2,0],[0,3,4],[2,0,1]]) rozvojem podle prvního sloupce a podle znaménka výsledku rozhodni o regularitě a orientaci."
      },
      "Vlastní čísla a vektory a jejich geometrický význam": {
        "ex": "U A=[[2,0],[0,3]] jsou vlastní čísla 2 a 3 s vlastními vektory (1,0) a (0,1) – transformace pouze natáhne osu x dvakrát a osu y třikrát.",
        "cv": "Pro A=[[2,1],[1,2]] najdi vlastní čísla z rovnice det(A−λI)=0, dopočítej vlastní vektory a ověř je dosazením do A·v=λ·v."
      },
      "Inverzní matice": {
        "ex": "Pro A=[[2,1],[5,3]] je det(A)=1, takže A⁻¹=[[3,−1],[−5,2]]; soustavu A·x=b pak řešíme jako x=A⁻¹·b.",
        "cv": "Najdi A⁻¹ pro A=[[2,1],[5,3]], vyřeš pomocí ní A·x=b s b=(1,4) a výsledek zkontroluj dosazením."
      },
      "Vektorové podprostory": {
        "ex": "Rovina x+y+z=0 v R³ je podprostor: obsahuje nulový vektor a součet i násobek jejích vektorů opět splňuje rovnici; rovina x+y+z=1 podprostorem není.",
        "cv": "Rozhodni, zda M={(x,y,z) | x+y+z=0} je podprostor R³ – ověř všechny tři podmínky – a pokud ano, najdi jeho bázi."
      },
      "Vektorové báze": {
        "ex": "Vektory (1,0,0), (0,1,0), (0,0,1) tvoří kanonickou bázi R³; báze (1,1,0), (0,1,1), (1,0,1) je jiná, dimenze prostoru ale zůstává 3.",
        "cv": "Pro v1=(1,0,1), v2=(0,1,1), v3=(1,1,2) rozhodni o lineární nezávislosti a urči dimenzi prostoru, který generují."
      },
      "Lineární transformace": {
        "ex": "Zobrazení T(x,y)=(2x−y, x+3y) je lineární; jeho matice v kanonické bázi je [[2,−1],[1,3]] a obrazem bázového vektoru (1,0) je (2,1).",
        "cv": "Ověř linearitu T(x,y)=(x+2y, 3x−y), sestav jeho matici v kanonické bázi a spočítej T(2,−1)."
      }
    },
    "Základy matematické analýzy": {
      "Relace a zobrazení": {
        "ex": "Relace „je dělitelem“ na {1,2,3,4} obsahuje dvojice jako (2,4); zobrazení f(x)=x² z R do R není prosté, protože f(−1)=f(1).",
        "cv": "Pro f(x)=2x+1 a g(x)=x² rozhodni u každé, zda je z R do R injektivní, surjektivní, nebo bijektivní, a zdůvodni to."
      },
      "Vlastnosti reálných funkcí": {
        "ex": "Funkce f(x)=x² má definiční obor R, je sudá (f(−x)=f(x)), zdola omezená nulou a na (−∞,0) klesající, na (0,∞) rostoucí.",
        "cv": "U funkce f(x)=1/(x−2) urči definiční obor, monotonii a rozhodni o sudosti, lichosti a omezenosti."
      },
      "Polynomy": {
        "ex": "Polynom p(x)=x³−x má kořeny −1, 0, 1, je definovaný na celém R a v +∞ roste nade všechny meze, protože vedoucí člen má lichý stupeň.",
        "cv": "Pro p(x)=x³−4x najdi všechny reálné kořeny, urči stupeň a popiš chování polynomu v ±∞."
      },
      "Spojité funkce a limity": {
        "ex": "Funkce f(x)=(x²−1)/(x−1) není v bodě 1 definovaná, ale limita pro x→1 je 2; doplněním f(1)=2 vznikne spojitá funkce.",
        "cv": "Spočítej limitu (x²−4)/(x−2) pro x→2 a rozhodni, jakou hodnotou v bodě 2 funkci dodefinovat, aby byla spojitá."
      },
      "Derivace": {
        "ex": "Pro f(x)=x³−3x je f′(x)=3x²−3; z f′(x)=0 plynou body x=±1, kde má funkce lokální extrémy (maximum v −1, minimum v 1).",
        "cv": "Derivuj f(x)=x³−3x, urči intervaly monotonie a najdi a klasifikuj všechny lokální extrémy."
      },
      "Neurčitý a určitý integrál": {
        "ex": "Primitivní funkcí k x² je x³/3, takže podle Newtonovy–Leibnizovy věty je ∫₀² x² dx = [x³/3]₀² = 8/3.",
        "cv": "Spočítej ∫₀² (x²+1) dx tak, že najdeš primitivní funkci a dosadíš meze."
      },
      "Geometrický význam": {
        "ex": "Derivace f′(2) funkce f(x)=x² je 4 – sklon tečny v bodě (2,4); určitý integrál ∫₀¹ x dx = 1/2 je obsah trojúhelníka pod grafem.",
        "cv": "Pro f(x)=x² napiš rovnici tečny v bodě x=1 a spočítej obsah plochy mezi grafem a osou x na intervalu [0,1]."
      },
      "Diferenciální počet": {
        "ex": "Vyšetření f(x)=x³−3x: z první derivace plynou extrémy v ±1, z druhé derivace inflexní bod v 0, Taylorův polynom v bodě 0 začíná −3x.",
        "cv": "Proveď úplné vyšetření průběhu funkce f(x)=x³−3x: definiční obor, monotonie, extrémy, konvexita a inflexní bod."
      }
    },
    "Popisná statistika": {
      "Popisná statistika": {
        "ex": "Z výsledků testu třídy [4,5,5,6,8] popisná statistika udělá přehled: průměr 5,6, rozsah 4–8 a histogram četností, ale neříká nic o jiných třídách.",
        "cv": "Pro vzorek známek [1,2,2,3,3,3,4] sestav tabulku četností a navrhni jeden vhodný graf k jejich zobrazení."
      },
      "Střední hodnota": {
        "ex": "Průměr platů [25,27,30,28,200] (v tisících) je 62, ačkoli většina lidí bere kolem 28 – jediná odlehlá hodnota průměr silně zkreslí.",
        "cv": "Spočítej aritmetický průměr vzorku [5,7,7,9,12] a urči, jak se změní, když k němu přidáš odlehlou hodnotu 100."
      },
      "Medián": {
        "ex": "U platů [25,27,28,30,200] je medián 28 – na rozdíl od průměru 62 dobře vystihuje typickou hodnotu, protože odlehlou hodnotu ignoruje.",
        "cv": "Najdi medián a oba kvartily vzorku [3,5,7,8,10,12,15] a načrtni z nich krabicový graf."
      },
      "Rozptyl": {
        "ex": "Vzorky [5,5,5] a [2,5,8] mají stejný průměr 5, ale první má rozptyl 0 a druhý 6 – druhý je tedy mnohem rozptýlenější.",
        "cv": "Spočítej rozptyl a směrodatnou odchylku vzorku [2,4,4,4,5,5,7,9] a slovně okomentuj, co hodnota vypovídá."
      },
      "Korelace": {
        "ex": "Mezi výškou a hmotností bývá korelace kolem +0,7 (silný kladný vztah), ale korelace prodeje zmrzliny a utonutí je jen zdánlivá – obojí způsobuje horko.",
        "cv": "Pro dvojice (1,2),(2,4),(3,5),(4,9) odhadni, zda je korelace kladná, či záporná, a uveď příklad, kdy korelace neznamená kauzalitu."
      },
      "Odhady statistik a jejich spolehlivost": {
        "ex": "Z výběru 100 voličů odhadneme podporu strany na 40 % s konfidenčním intervalem zhruba 40 % ± 10 %; při 1000 dotázaných se interval zúží.",
        "cv": "Z výběru o velikosti n s průměrem 50 vysvětli, jak se změní šířka 95% konfidenčního intervalu, když n zvětšíš čtyřikrát."
      },
      "Distribuční funkce": {
        "ex": "Pro hod kostkou je distribuční funkce F schodovitá: F(3)=1/2, protože P(X≤3)=3/6, a roste od 0 do 1.",
        "cv": "Náhodná veličina nabývá hodnot 1,2,3 s pravděpodobnostmi 0,2; 0,5; 0,3. Sestav a načrtni její distribuční funkci."
      },
      "Rozdělení náhodných veličin a jejich příklady": {
        "ex": "Počet líců při 10 hodech mincí má binomické rozdělení, počet e-mailů za hodinu Poissonovo a výška lidí přibližně normální (Gaussovo) rozdělení.",
        "cv": "Pro každou situaci urči vhodné rozdělení: hod kostkou 20×, čekací doba na dalšího zákazníka, chyba měření délky."
      }
    },
    "Grafy a jejich prohledávání": {
      "Typy grafů": {
        "ex": "Silniční síť je neorientovaný ohodnocený graf, schéma závislostí úkolů je orientovaný acyklický graf a rodokmen je strom.",
        "cv": "Pro tři situace – přátelství na sociální síti, odkazy mezi webovými stránkami, vodovodní potrubí s průtoky – urči vhodný typ grafu."
      },
      "Stromy": {
        "ex": "Strom s 6 vrcholy má vždy přesně 5 hran a mezi libovolnými dvěma vrcholy vede jediná cesta; přidání jakékoli hrany vytvoří cyklus.",
        "cv": "Nakresli strom se 7 vrcholy, ověř pravidlo o počtu hran a vyznač cestu mezi dvěma listy."
      },
      "Stupně vrcholů": {
        "ex": "V grafu s hranami AB, AC, BC má každý vrchol stupeň 2; součet stupňů 6 je dvojnásobek počtu hran 3 (princip podání rukou).",
        "cv": "Graf má 5 vrcholů se stupni 3,3,2,2,2. Spočítej počet hran a rozhodni, zda takový graf může existovat."
      },
      "Orientované grafy": {
        "ex": "V orientovaném grafu závislostí úloh hrana A→B znamená „A musí být před B“; orientovaný cyklus by znamenal neřešitelnou závislost.",
        "cv": "Pro orientovaný graf s hranami A→B, B→C, C→A urči vstupní a výstupní stupně vrcholů a rozhodni o existenci orientovaného cyklu."
      },
      "Reprezentace grafů": {
        "ex": "Graf se 4 vrcholy a hranami AB, BC se zapíše buď maticí sousednosti 4×4 (16 buněk), nebo seznamy sousedů, které jsou u řídkého grafu úspornější.",
        "cv": "Pro graf s vrcholy 1–4 a hranami 1–2, 2–3, 3–4, 4–1 sestav matici sousednosti i seznamy sousedů a porovnej jejich paměťovou náročnost."
      },
      "Algoritmy prohledávání do hloubky a do šířky a jejich využití": {
        "ex": "BFS z vrcholu A v neohodnoceném grafu najde nejkratší cesty podle počtu hran, DFS naopak slouží k detekci cyklů a topologickému uspořádání.",
        "cv": "Na grafu se 7 vrcholy proveď BFS i DFS od vrcholu A a zapiš pořadí navštívení vrcholů u obou prohledávání."
      },
      "Komponenty souvislosti": {
        "ex": "Graf s hranami AB, CD má dvě komponenty souvislosti {A,B} a {C,D}; opakovaným spuštěním DFS z nenavštívených vrcholů je všechny najdeme.",
        "cv": "V grafu s vrcholy A–F a hranami AB, BC, DE urči počet komponent souvislosti a vypiš, které vrcholy do nich patří."
      }
    },
    "Grafové algoritmy": {
      "Ohodnocené grafy": {
        "ex": "V mapě měst je váhou hrany vzdálenost v km; v takovém grafu nás nezajímá jen, zda cesta existuje, ale i její celková délka.",
        "cv": "Navrhni ohodnocený graf 4 měst se vzdálenostmi a urči, která dvojice měst je spojena nejdražší hranou."
      },
      "Definice nejkratší cesty": {
        "ex": "V grafu s hranami A→B (5), A→C (2), C→B (1) je nejkratší cesta z A do B přes C s délkou 3, ne přímá hrana délky 5.",
        "cv": "V ohodnoceném grafu se 4 vrcholy najdi ručně nejkratší cestu mezi dvěma vrcholy a vysvětli, proč u záporného cyklu cesta nemusí být definována."
      },
      "Minimální kostry grafu": {
        "ex": "U sítě 4 měst, kterou chceme propojit kabelem za co nejmenší cenu, je řešením minimální kostra – strom přes všechny vrcholy s nejmenším součtem vah.",
        "cv": "Pro graf s 5 vrcholy a ohodnocenými hranami najdi minimální kostru a spočítej její celkovou váhu."
      },
      "Algoritmy pro hledání nejkratších cest (Dijkstra, Bellman–Ford)": {
        "ex": "Dijkstrův algoritmus najde nejkratší cesty navigace mezi městy s kladnými vzdálenostmi; kdyby hrany mohly být záporné, je nutný Bellman–Ford.",
        "cv": "Na grafu s 5 vrcholy a kladnými vahami proveď Dijkstrův algoritmus z vrcholu A a zapiš tabulku nejkratších vzdáleností po každém kroku."
      },
      "Algoritmy pro hledání minimálních koster": {
        "ex": "Kruskalův algoritmus seřadí hrany podle váhy a přidává ty, které nevytvoří cyklus; Primův algoritmus naopak nechává kostru růst z jednoho vrcholu.",
        "cv": "Pro zadaný ohodnocený graf najdi minimální kostru Kruskalovým i Primovým algoritmem a ověř, že dají stejnou celkovou váhu."
      }
    },
    "Stromové datové struktury": {
      "Binární vyhledávací stromy": {
        "ex": "Vložením klíčů 5,3,8,1,4 vznikne BST, v němž hledání čísla 4 projde 5→3→4; vložení vzestupné posloupnosti 1,2,3,4,5 ho ale zvrhne na seznam.",
        "cv": "Postupně vlož klíče 7,3,9,1,5,8 do prázdného BST, nakresli výsledný strom a vyznač cestu při hledání klíče 5."
      },
      "B-stromy": {
        "ex": "Databázový index nad milionem záznamů jako B-strom má hloubku jen 3–4, takže k nalezení záznamu stačí 3–4 čtení diskových bloků.",
        "cv": "Vlož klíče 1–10 do B-stromu řádu 3 (nejvýše 2 klíče v uzlu) a ukaž, jak proběhne štěpení uzlu při přetečení."
      },
      "Červeno-černé stromy": {
        "ex": "Po vložení uzlu, které poruší pravidlo dvou červených uzlů za sebou, obnoví červeno-černý strom vyváženost přebarvením a jednou rotací.",
        "cv": "Vysvětli na nakresleném příkladu, proč pravidla o barvách zaručují, že nejdelší cesta od kořene k listu není delší než dvojnásobek nejkratší."
      },
      "Haldy": {
        "ex": "Pole [1,3,2,7,4] splňuje vlastnost min-haldy: kořen 1 je nejmenší prvek dostupný v O(1) a každý rodič je menší než jeho potomci.",
        "cv": "Z pole [9,4,7,1,−2,6,5] vybuduj min-haldu, proveď dvě operace extract-min a po každé zapiš stav haldy."
      },
      "Související operace a jejich složitost": {
        "ex": "Vyhledání ve vyváženém BST trvá O(log n), v BST zvrhlém na seznam ale O(n) – proto se používají samovyvažující stromy.",
        "cv": "Sestav tabulku složitosti operací insert, delete a search pro vyvážený BST, nevyvážený BST a haldu."
      },
      "Typické implementace a příklady použití": {
        "ex": "Vyvážené stromy implementují množiny a slovníky (std::map v C++), B-stromy databázové indexy a haldy prioritní frontu v Dijkstrově algoritmu.",
        "cv": "Pro tři úlohy – slovník, prioritní fronta, databázový index – vyber vhodnou stromovou strukturu a zdůvodni volbu."
      }
    },
    "Návrh algoritmů": {
      "Metoda rozděl a panuj": {
        "ex": "Binární vyhledávání rozdělí seřazené pole na polovinu, zahodí tu, kde hledaný prvek být nemůže, a tím dosáhne složitosti O(log n).",
        "cv": "Popiš mergesort jako metodu rozděl a panuj: urči krok rozdělení, řešení podproblémů a sloučení, a odvoď jeho složitost."
      },
      "Výhody a nevýhody použití rekurze": {
        "ex": "Rekurzivní výpočet Fibonacciho čísel je krátký, ale bez memoizace počítá tytéž hodnoty mnohokrát a má exponenciální složitost.",
        "cv": "Napiš rekurzivní funkci pro faktoriál a vysvětli, při jak hluboké rekurzi hrozí přetečení zásobníku."
      },
      "Odstranění rekurze": {
        "ex": "Koncovou rekurzi výpočtu faktoriálu lze nahradit prostým cyklem; obecnou rekurzi (například průchod stromem) nahradíme explicitním zásobníkem.",
        "cv": "Přepiš rekurzivní výpočet faktoriálu na iterativní verzi s cyklem a vysvětli, co se tím ušetří."
      },
      "Řadicí rekurzivní algoritmy": {
        "ex": "Mergesort má vždy O(n log n), zatímco quicksort se při špatné volbě pivotu (například na již seřazeném poli) zhorší na O(n²).",
        "cv": "Seřaď pole [5,2,8,1,9,3] mergesortem a zapiš stav po každém slévání; pak totéž proveď quicksortem s prvním prvkem jako pivotem."
      },
      "Vztah rekurze a matematické indukce": {
        "ex": "Správnost rekurzivního výpočtu faktoriálu se dokáže indukcí: báze fact(0)=1 odpovídá ukončovací podmínce, indukční krok rekurzivnímu volání.",
        "cv": "Indukcí dokaž, že rekurzivní funkce sum(n)=n+sum(n−1) s sum(0)=0 vrací n(n+1)/2."
      }
    },
    "Funkcionální programování": {
      "Funkcionální programovací paradigma": {
        "ex": "Funkce délka seznamu nepoužívá žádnou měnitelnou proměnnou ani cyklus – výsledek je dán jen vstupem, takže pro stejný seznam vrátí vždy totéž.",
        "cv": "Vysvětli na konkrétním příkladu rozdíl mezi imperativním sčítáním prvků pole cyklem a funkcionálním přístupem přes fold."
      },
      "Princip výpočtu a redukční krok": {
        "ex": "Výraz (λx. x+1) 4 se jedním redukčním krokem přepíše na 4+1 a dalším na 5 – výpočet je řetězec přepisů až do normálního tvaru.",
        "cv": "Postupnými redukčními kroky vyhodnoť výraz double (double 3), kde double x = x+x, a zapiš každý mezikrok."
      },
      "Redukční strategie a jejich vlastnosti": {
        "ex": "U výrazu fst (3, ⊥) líná strategie vrátí 3, kdežto striktní by se pokusila vyhodnotit i nevyhodnotitelnou druhou složku a zacyklila se.",
        "cv": "Pro výraz s nevyhodnotitelnou podčástí ukaž, jak se liší výsledek u striktní a u líné redukční strategie."
      },
      "Funkce vyšších řádů a jejich využití": {
        "ex": "map (*2) [1,2,3] dá [2,4,6], filter even [1..6] dá [2,4,6] a foldr (+) 0 [1,2,3] sečte seznam na 6 – žádný cyklus není potřeba.",
        "cv": "Pomocí map, filter a fold napiš výraz, který z [1..10] vybere sudá čísla, umocní je na druhou a sečte."
      },
      "Nepojmenované funkce": {
        "ex": "Místo pojmenované funkce se ve volání map přímo zapíše lambda – krátká funkce „na místě“ bez jména, například λx → x·x.",
        "cv": "Přepiš pojmenovanou funkci inc x = x+1 na ekvivalentní lambda výraz a použij ji ve volání map nad seznamem [1,2,3]."
      },
      "Elementární programování v Haskellu": {
        "ex": "Funkci délka seznamu lze v Haskellu zapsat dvěma rovnicemi s pattern matchingem: length [] = 0 a length (_:xs) = 1 + length xs.",
        "cv": "Definuj v Haskellu rekurzivní funkci, která sečte prvky seznamu, s využitím pattern matchingu na prázdný a neprázdný seznam."
      }
    },
    "Regulární jazyky": {
      "Chomského hierarchie formálních jazyků": {
        "ex": "Jazyk slov nad {a,b} sudé délky je regulární (typ 3), jazyk aⁿbⁿ je bezkontextový (typ 2) a aⁿbⁿcⁿ už ani bezkontextový není.",
        "cv": "Zařaď do Chomského hierarchie tři jazyky: všechna slova obsahující „ab“, jazyk aⁿbⁿ a jazyk aⁿbⁿcⁿ, a zdůvodni to."
      },
      "Regulární jazyky, jejich reprezentace a převody": {
        "ex": "Jazyk slov končících na „ab“ popíšeme regulárním výrazem (a|b)*ab, ekvivalentní pravolineární gramatikou i konečným automatem.",
        "cv": "Pro regulární výraz (a|b)*ab sestroj odpovídající konečný automat a slovně popiš, který jazyk přijímá."
      },
      "Varianty konečných automatů": {
        "ex": "DKA pro slova se sudým počtem znaků a má dva stavy; tentýž jazyk lze popsat i NKA, případně NKA s ε-přechody.",
        "cv": "Navrhni deterministický konečný automat, který přijímá právě binární řetězce dělitelné třemi (čteno jako číslo)."
      },
      "Nedeterminismus a determinizace automatů": {
        "ex": "NKA pro slova končící na „ab“ má jen 3 stavy; podmnožinová konstrukce z něj udělá DKA, jehož stavy jsou množiny stavů NKA.",
        "cv": "Pro malý NKA se 3 stavy proveď determinizaci podmnožinovou konstrukcí a zapiš přechodovou tabulku výsledného DKA."
      },
      "Uzávěrové vlastnosti regulárních jazyků": {
        "ex": "Jsou-li L1 i L2 regulární, je regulární i jejich průnik, sjednocení a doplněk; že L=aⁿbⁿ regulární není, dokážeme pumping lemmatem.",
        "cv": "Pumping lemmatem dokaž, že jazyk L={aⁿbⁿ | n≥0} není regulární."
      }
    },
    "Rozhodnutelnost": {
      "Pojem algoritmického problému a algoritmu": {
        "ex": "„Je dané číslo prvočíslo?“ je rozhodovací problém s odpovědí ANO/NE; algoritmus zkusmého dělení je konečný jednoznačný postup, který ho řeší.",
        "cv": "Zformuluj problém „obsahuje seznam duplicitní prvek?“ jako rozhodovací problém a popiš algoritmus, který ho řeší."
      },
      "Turingův stroj": {
        "ex": "Turingův stroj pro rozpoznání slov aⁿbⁿ střídavě škrtá a a b na pásce a v konečném řízení si pamatuje jen aktuální stav, ne počty symbolů.",
        "cv": "Navrhni přechody Turingova stroje, který na pásce zdvojnásobí počet symbolů a (z aⁿ udělá a²ⁿ)."
      },
      "Problém zastavení": {
        "ex": "Neexistuje program, který by o libovolném programu a vstupu řekl, zda skončí – předpoklad jeho existence vede sporem k programu, jenž skončí právě tehdy, když neskončí.",
        "cv": "Vlastními slovy popiš důkaz nerozhodnutelnosti problému zastavení a uveď, kde v něm vzniká spor."
      },
      "Rozhodnutelnost a částečná rozhodnutelnost": {
        "ex": "Problém zastavení je částečně rozhodnutelný – program prostě spustíme a u kladných případů skončí – ale rozhodnutelný není, protože u záporných se nezastaví.",
        "cv": "Vysvětli na příkladu problému zastavení rozdíl mezi rozhodnutelností a částečnou rozhodnutelností a uveď větu o doplňku."
      },
      "Nerozhodnutelnost": {
        "ex": "Nerozhodnutelná je i otázka, zda dva programy počítají tutéž funkci – nejde o nedostatek výkonu počítače, ale o principiální mez algoritmického řešení.",
        "cv": "Vyjmenuj tři nerozhodnutelné problémy a vysvětli, proč nerozhodnutelnost nesouvisí s rychlostí počítače."
      },
      "Metoda redukce": {
        "ex": "Nerozhodnutelnost otázky „vypíše program někdy slovo HELLO?“ se dokáže redukcí z problému zastavení – kdyby šla řešit, šel by řešit i halting problem.",
        "cv": "Naznač, jak redukcí z problému zastavení dokázat, že je nerozhodnutelné, zda program na daném vstupu vůbec použije nějakou proměnnou."
      },
      "Diagonalizace": {
        "ex": "Diagonalizací Cantor dokázal, že reálných čísel je „více“ než přirozených: zkonstruoval číslo lišící se od n-tého čísla seznamu na n-té číslici.",
        "cv": "Pomocí diagonalizace dokaž, že množina všech nekonečných posloupností nul a jedniček je nespočetná."
      }
    },
    "Složitost": {
      "Složitost algoritmu versus složitost problému": {
        "ex": "Bublinkové řazení má složitost O(n²), mergesort O(n log n); složitost problému řazení porovnáváním je přitom dokázaných Ω(n log n).",
        "cv": "Pro problém násobení dvou matic n×n uveď složitost naivního algoritmu a vysvětli rozdíl mezi složitostí algoritmu a složitostí problému."
      },
      "Složitostní třídy (P, NP, PSPACE)": {
        "ex": "Hledání nejkratší cesty je v P, ověření řešení Sudoku je v NP (řešení se snadno zkontroluje), vyhodnocení kvantifikované formule je v PSPACE.",
        "cv": "Pro tři problémy – třídění, SAT, hledání nejkratší cesty – urči, do které třídy (P či NP) patří, a zdůvodni to."
      },
      "Vztahy mezi třídami a příklady problémů": {
        "ex": "Platí P⊆NP⊆PSPACE; zda je některá inkluze ostrá, se neví – otázka P vs. NP je nejslavnějším otevřeným problémem informatiky.",
        "cv": "Nakresli diagram inkluzí tříd P, NP, PSPACE a ke každé třídě doplň jeden typický problém."
      },
      "Těžkost a úplnost problému": {
        "ex": "SAT je NP-úplný: leží v NP a zároveň se na něj dá polynomiálně redukovat každý problém z NP, takže je v NP „nejtěžší“.",
        "cv": "Vysvětli rozdíl mezi NP-těžkým a NP-úplným problémem a uveď příklad problému ke každé kategorii."
      },
      "Polynomiální redukce problémů": {
        "ex": "Problém nezávislé množiny se polynomiálně redukuje na problém kliky převedením grafu na jeho doplněk – řešení jednoho dá řešení druhého.",
        "cv": "Popiš alespoň v hrubých rysech polynomiální redukci problému 3-SAT na problém barvení grafu nebo na klikový problém."
      },
      "NP-úplné úlohy": {
        "ex": "Mezi NP-úplné patří SAT, barvení grafu, problém obchodního cestujícího i problém batohu; vyřešení jediného z nich v polynomiálním čase by znamenalo P=NP.",
        "cv": "Vyber tři NP-úplné problémy a u každého popiš jeho vstup, otázku a snadno ověřitelný certifikát řešení."
      }
    },
    "Strukturování a řízení běhu programu": {
      "Podprogramy": {
        "ex": "Místo trojího opakování kódu pro výpočet obsahu obdélníku se napíše jediná funkce obsah(a,b) a třikrát se zavolá s různými argumenty.",
        "cv": "Rozděl delší kód počítající průměr a směrodatnou odchylku pole na dvě funkce a ukaž jejich volání."
      },
      "Rozsahy jmen": {
        "ex": "Lokální proměnná i v jednom cyklu nijak nekoliduje s proměnnou i v jiné funkci – každá existuje jen ve svém bloku.",
        "cv": "Napiš krátký kód, kde stejně pojmenovaná lokální a globální proměnná koexistují, a urči, kterou hodnotu která část kódu vidí."
      },
      "Předávání hodnot": {
        "ex": "Při předání pole odkazem může funkce změnit jeho prvky volajícímu; při předání čísla hodnotou se změna kopie ven nepromítne.",
        "cv": "Napiš funkci, která má prohodit dvě proměnné, a vysvětli, proč funguje jen při předání odkazem, ne hodnotou."
      },
      "Výjimky": {
        "ex": "Dělení nulou nebo otevření neexistujícího souboru vyhodí výjimku, kterou blok try–catch zachytí a ošetří, aniž by program spadl.",
        "cv": "Napiš blok try–catch, který ošetří dělení nulou a chybu při převodu řetězce na číslo, a urči pořadí catch větví."
      },
      "Objektově orientované programování": {
        "ex": "Třída BankovníÚčet sdružuje data (zůstatek) a chování (vložit, vybrat); jednotlivé účty jsou její objekty s vlastním zůstatkem.",
        "cv": "Navrhni třídu Auto s atributy a metodami a vytvoř z ní dvě různé instance s odlišnými hodnotami atributů."
      },
      "Zapouzdření": {
        "ex": "Atribut zůstatek je private a mění se jen metodami vložit a vybrat, které hlídají, aby účet nešel do mínusu – přímý zápis zvenčí není možný.",
        "cv": "Uprav třídu s veřejným atributem na zapouzdřenou verzi se soukromým atributem a getterem a setterem, který kontroluje platnost hodnoty."
      },
      "Dědičnost": {
        "ex": "Třída Student dědí z třídy Osoba jméno a věk a přidává atribut studijní obor – vyjadřuje vztah „student je osoba“.",
        "cv": "Navrhni předka Zaměstnanec a dva potomky (Manažer, Programátor), kteří dědí společné atributy a přidávají vlastní."
      },
      "Polymorfismus": {
        "ex": "Voláme metodu vykresli() na poli tvarů; díky dynamické vazbě se u každého prvku spustí implementace podle skutečného typu – kruh, nebo čtverec.",
        "cv": "Navrhni společné rozhraní Tvar s metodou obvod() a dvě třídy, které ji různě implementují, a zavolej ji jednotně přes seznam tvarů."
      }
    },
    "Principy nízkoúrovňového programování": {
      "Paměťový model programu": {
        "ex": "Lokální proměnná funkce leží na zásobníku a po jejím skončení zaniká, kdežto data alokovaná pomocí malloc leží na haldě a přežijí návrat z funkce.",
        "cv": "Pro krátký program v C urči u každé proměnné, zda leží v zásobníku, na haldě, nebo ve statických datech."
      },
      "Správa paměti a dynamická alokace": {
        "ex": "Po int *p = malloc(100*sizeof(int)) je nutné jednou zavolat free(p); zapomenutý free je únik paměti, dvojí free je chyba.",
        "cv": "Napiš v C kód, který alokuje pole o n prvcích, naplní ho a korektně uvolní, a vyznač místo možného úniku paměti."
      },
      "Práce s uživatelskými datovými strukturami": {
        "ex": "Jednosměrný spojový seznam tvoří uzly alokované na haldě, kde každý drží data a ukazatel na následující uzel; konec značí NULL.",
        "cv": "Implementuj v C jednosměrný spojový seznam s operacemi vlož na začátek a vypiš a nezapomeň na uvolnění všech uzlů."
      },
      "Nízkoúrovňová práce s pamětí": {
        "ex": "Zápis za konec pole o velikosti 10 přepíše cizí paměť – jazyk meze nehlídá, takže chyba se projeví až později nebo jako bezpečnostní díra.",
        "cv": "Najdi v zadaném krátkém kódu v C zápis mimo meze pole a oprav ho; vysvětli, proč je takový přístup nebezpečný."
      },
      "Ukazatel": {
        "ex": "Po int x=5; int *p=&x; obsahuje p adresu x a *p je hodnota 5; zápisem *p=8 změníme přímo proměnnou x.",
        "cv": "Napiš funkci v C, která přes ukazatel zvýší hodnotu předané proměnné o 1, a ukaž její volání pomocí &."
      },
      "Pole a ukazatelová aritmetika": {
        "ex": "Pro int a[5] je a[i] totéž co *(a+i); jméno pole se chová jako ukazatel na první prvek a posun o i znamená i·sizeof(int) bajtů.",
        "cv": "Projdi pole pěti intů pomocí ukazatelové aritmetiky (bez indexování hranatými závorkami) a vypiš jeho prvky."
      },
      "Způsoby ladění programu (debugging)": {
        "ex": "Pád programu se v debuggeru zúží breakpointem a krokováním na konkrétní řádek; nástroj Valgrind navíc odhalí únik paměti či čtení neinicializovaných dat.",
        "cv": "Popiš postup, jak bys pomocí breakpointů a sledování proměnných našel příčinu chybného výsledku v cyklu."
      }
    },
    "Architektury": {
      "Číselné soustavy a vztahy mezi nimi": {
        "ex": "Číslo 13 v desítkové soustavě je 1101 dvojkově a D šestnáctkově; převod do dvojkové soustavy se dělá opakovaným dělením dvěma.",
        "cv": "Převeď číslo 45 z desítkové soustavy do dvojkové a šestnáctkové a výsledek ověř zpětným převodem."
      },
      "Zobrazení celého čísla v počítači a aritmetika": {
        "ex": "Na 8 bitech je −5 v doplňkovém kódu 11111011; jeho sečtení s 00000101 (tedy 5) dá 00000000, což potvrzuje správnost kódu.",
        "cv": "Zapiš číslo −12 v osmibitovém doplňkovém kódu a ukaž, kdy při sčítání dvou kladných čísel nastane přetečení."
      },
      "Kódy (vnitřní, vnější, detekční a opravné)": {
        "ex": "Paritní bit přidaný k bajtu odhalí jednu chybu; Hammingův kód přidá víc redundantních bitů a jednu chybu nejen odhalí, ale i opraví.",
        "cv": "K datovému slovu 1011 doplň sudý paritní bit a vysvětli, kterou chybu paritní bit nedokáže odhalit."
      },
      "Obvody a paměti (parametry, architektura)": {
        "ex": "Sčítačka je kombinační obvod (výstup závisí jen na vstupech), klopný obvod je sekvenční – pamatuje si bit, a je tak základem registru.",
        "cv": "Sestav pravdivostní tabulku a logický obvod poloviční sčítačky dvou bitů (výstupy součet a přenos)."
      },
      "Procesor, programování, mikroprogramování": {
        "ex": "Procesor opakuje cyklus načti–dekóduj–vykonej instrukci; řadič může být pevná logika, nebo mikroprogram, kde je instrukce rozložena na mikroinstrukce.",
        "cv": "Popiš jednotlivé fáze zpracování jedné instrukce procesorem a urči, co se v každé fázi děje s registry."
      },
      "Architektury RISC/CISC a vyrovnávací paměti": {
        "ex": "RISC procesor má málo jednoduchých instrukcí pevné délky, CISC mnoho složitějších; cache mezi CPU a RAM zrychluje přístup k nedávno použitým datům.",
        "cv": "Porovnej RISC a CISC ve třech bodech a vysvětli, proč cache funguje díky lokalitě paměťových přístupů."
      }
    },
    "Databáze": {
      "Relační model dat": {
        "ex": "Tabulka STUDENT(id, jméno, ročník) je relace: každý řádek je n-tice, sloupce jsou atributy a na pořadí řádků nezáleží.",
        "cv": "Navrhni relaci pro evidenci knih v knihovně – urči atributy, jejich domény a vysvětli, proč jde o relaci."
      },
      "Relační schéma": {
        "ex": "Schéma KNIHA(ISBN: text, název: text, rok: číslo) je neměnný předpis, kdežto konkrétní řádky knih se v čase přidávají a mažou.",
        "cv": "Zapiš relační schéma pro tabulku ZAMĚSTNANEC s alespoň pěti atributy a urči jejich datové typy."
      },
      "Klíče relačních schémat": {
        "ex": "V tabulce STUDENT je rodné číslo kandidátní klíč; jako primární klíč se ale zvolí umělé id_studenta a cizí klíč id_oboru odkazuje na tabulku OBOR.",
        "cv": "Pro tabulky OBJEDNÁVKA a ZÁKAZNÍK urči primární klíče a navrhni cizí klíč, který je propojuje."
      },
      "Relační algebra (projekce, selekce, agregace, přejmenování)": {
        "ex": "Selekce σ(ročník=1)(STUDENT) vybere prváky, projekce π(jméno)(STUDENT) vybere jen sloupec jméno a agregace spočítá počet studentů.",
        "cv": "Zapiš v relační algebře dotaz „jména studentů 3. ročníku“ pomocí selekce a projekce nad tabulkou STUDENT."
      },
      "Spojování relací": {
        "ex": "Přirozené spojení tabulek STUDENT a OBOR přes společný atribut id_oboru spojí ke každému studentovi název jeho oboru.",
        "cv": "Pro tabulky ZAMĚSTNANEC(id, jméno, id_odd) a ODDĚLENÍ(id_odd, název) zapiš spojení, které ke každému zaměstnanci přiřadí název oddělení."
      },
      "Funkční závislosti": {
        "ex": "V tabulce s atributy (ISBN, název, autor) platí ISBN → název, autor – ISBN jednoznačně určuje zbytek; opačně to neplatí.",
        "cv": "Pro relaci OBJEDNÁVKA(č_obj, datum, č_zák, jméno_zák) vypiš platné funkční závislosti a urči z nich klíč."
      },
      "Normální formy (1NF, 2NF, 3NF, BCNF)": {
        "ex": "Tabulka, kde jeden sloupec obsahuje seznam telefonů, porušuje 1NF; rozdělením na atomické hodnoty se do 1NF dostane.",
        "cv": "U tabulky STUDENT(č_stud, předmět, jméno_uč, kabinet_uč) urči, kterou normální formu porušuje a proč."
      },
      "Vztahy mezi normálními formami": {
        "ex": "Schéma v BCNF je automaticky i ve 3NF, 2NF a 1NF – normální formy tvoří vnořenou hierarchii a v praxi se cílí na 3NF.",
        "cv": "Seřaď normální formy 1NF–BCNF od nejslabší po nejsilnější a u každé jednou větou uveď, co navíc požaduje."
      },
      "Dekompozice relačních schémat a normalizace": {
        "ex": "Tabulku STUDENT(č_stud, předmět, jméno_uč) rozložíme na ZÁPIS(č_stud, předmět) a VÝUKA(předmět, jméno_uč), čímž odstraníme redundanci.",
        "cv": "Rozlož tabulku porušující 3NF na menší relace, ověř bezeztrátovost spojení a zachování závislostí."
      }
    },
    "SQL, transakce a zpracování dotazů": {
      "Syntaxe a sémantika příkazů": {
        "ex": "Dotaz SELECT jméno FROM Student WHERE ročník=1 je deklarativní – říká, co chceme; tentýž výsledek lze získat i jinak zapsaným dotazem.",
        "cv": "Napiš SQL dotaz, který vrátí jména a e-maily studentů 2. ročníku seřazené podle příjmení."
      },
      "Příkazy pro dotazování a aktualizaci dat": {
        "ex": "SELECT data čte, INSERT přidá řádek, UPDATE … WHERE změní vybrané řádky a DELETE … WHERE je smaže.",
        "cv": "Napiš čtveřici SQL příkazů: vlož nového studenta, zvyš ročník studentovi s daným id, vyber všechny prváky a smaž studenta podle id."
      },
      "Agregační funkce": {
        "ex": "SELECT obor, COUNT(*) FROM Student GROUP BY obor spočítá počet studentů v každém oboru; klauzule HAVING pak ponechá jen velké obory.",
        "cv": "Napiš dotaz, který pro každé oddělení vypíše průměrný plat a vynechá oddělení s méně než pěti zaměstnanci."
      },
      "Triggery a uložené procedury": {
        "ex": "Trigger po INSERT do tabulky Objednávka automaticky sníží počet kusů na skladě – pravidlo se vynutí, aniž by ho aplikace musela volat.",
        "cv": "Navrhni trigger, který při smazání zákazníka zapíše záznam do auditní tabulky se jménem a časem."
      },
      "Definice dat a integritní omezení": {
        "ex": "CREATE TABLE s PRIMARY KEY, FOREIGN KEY a CHECK(věk ≥ 18) zajistí, že databáze sama odmítne nekonzistentní data.",
        "cv": "Napiš CREATE TABLE pro tabulku Zaměstnanec s primárním klíčem, cizím klíčem na Oddělení a omezeními NOT NULL a CHECK."
      },
      "Transakční zpracování a jeho vlastnosti": {
        "ex": "Převod peněz mezi účty je transakce: oba UPDATE proběhnou celé, nebo se při chybě mezi nimi vše vrátí příkazem ROLLBACK – atomicita brání ztrátě peněz.",
        "cv": "Zapiš pseudokódem transakci převodu částky mezi dvěma účty a u každé vlastnosti ACID uveď, který krok ji zajišťuje."
      },
      "Základní principy vyhodnocování dotazů": {
        "ex": "Dotaz hledající studenta podle id projde bez indexu celou tabulku, s indexem (B-stromem) nad id ho najde v čase O(log n).",
        "cv": "Vysvětli, jak by se zrychlil dotaz WHERE příjmení='Novák' přidáním indexu, a uveď cenu, kterou index přináší."
      }
    },
    "Operační systémy": {
      "Architektura operačního systému a jádra": {
        "ex": "Linux má monolitické jádro – ovladače běží uvnitř jádra; mikrojádro většinu služeb vyčleňuje do oddělených procesů, což zvyšuje spolehlivost za cenu výkonu.",
        "cv": "Porovnej monolitické jádro a mikrojádro ve třech bodech: výkon, spolehlivost a snadnost rozšiřování."
      },
      "Základní režimy procesoru": {
        "ex": "Aplikace běží v uživatelském režimu; když chce zapsat do souboru, přejde systémovým voláním do privilegovaného režimu, kde jádro provede skutečný zápis.",
        "cv": "Vysvětli, proč by bylo nebezpečné nechat aplikace běžet rovnou v privilegovaném režimu, a uveď, čím se přechod do jádra spouští."
      },
      "Programovací rozhraní a knihovny": {
        "ex": "Funkce printf z knihovny jazyka C nakonec volá systémové volání write; knihovna programátorovi skryje detaily komunikace s jádrem.",
        "cv": "Vyjmenuj tři typické skupiny systémových volání (soubory, procesy, paměť) a u každé uveď příklad operace."
      },
      "Uživatel, přístupová práva, virtualizace": {
        "ex": "Soubor s právy rw-r--r-- smí vlastník číst i zapisovat, ostatní jen číst; kontejner zase poskytuje izolované prostředí na jednom jádře.",
        "cv": "Vysvětli zápis přístupových práv rwxr-x--- a urči, co s daným souborem smí vlastník, skupina a ostatní."
      },
      "Virtuální paměť, proces a stránkové tabulky": {
        "ex": "Dva procesy mohou oba „vidět“ adresu 0x400000, ale stránková tabulka ji u každého mapuje na jiný fyzický rámec – procesy se tak navzájem izolují.",
        "cv": "Vysvětli, jak stránková tabulka přeloží virtuální adresu na fyzickou a co se stane při přístupu na odloženou stránku (page fault)."
      },
      "Vlákno, plánování vláken a procesů": {
        "ex": "Webový prohlížeč je proces s mnoha vlákny (vykreslování, síť, UI); plánovač jim přiděluje procesor například metodou round-robin po časových kvantech.",
        "cv": "Pro tři úlohy s danými dobami běhu spočítej průměrnou dobu čekání při plánování FCFS a round-robin."
      },
      "Souběžnost, uváznutí, přidělování zdrojů": {
        "ex": "Dvě vlákna, z nichž každé drží jeden zámek a čeká na druhý, uváznou (deadlock); jednotné pořadí získávání zámků tomu zabrání.",
        "cv": "Popiš situaci dvou vláken a dvou zámků, která vede k uváznutí, a navrhni úpravu, jež deadlocku zabrání."
      },
      "Vznik procesu v POSIX a copy-on-write": {
        "ex": "Po volání fork existují dva téměř totožné procesy; díky copy-on-write sdílejí paměťové stránky, dokud do nich některý nezapíše.",
        "cv": "Napiš v C krátký program, který volá fork, a vysvětli, jak podle návratové hodnoty odlišit rodiče a potomka."
      }
    },
    "Souborové systémy": {
      "Blokové zařízení": {
        "ex": "Disk poskytuje čtení a zápis po blocích třeba 4 KiB; uložení souboru o 5 KiB tak zabere dva bloky a v druhém zůstane nevyužité místo (vnitřní fragmentace).",
        "cv": "Spočítej, kolik bloků o 4 KiB zabere soubor velikosti 10 KiB a kolik bajtů v posledním bloku zůstane nevyužitých."
      },
      "Bloková vrstva a I/O plánovač": {
        "ex": "I/O plánovač přeskupí požadavky tak, aby se hlava rotačního disku pohybovala plynule jedním směrem (výtahový algoritmus), a tím zvýší propustnost.",
        "cv": "Pro zadanou frontu požadavků na stopy disku urči pořadí obsluhy podle algoritmu výtahu (SCAN) a spočítej celkový pohyb hlavy."
      },
      "RAID": {
        "ex": "RAID 1 zrcadlí data na dva disky a přežije výpadek jednoho z nich; RAID 0 data rozkládá pro rychlost, ale výpadek disku znamená ztrátu všech dat.",
        "cv": "Porovnej RAID 0, RAID 1 a RAID 5 z hlediska kapacity, rychlosti a odolnosti vůči výpadku disku."
      },
      "Šifrování disku": {
        "ex": "Při šifrování celého disku jsou data na úložišti nečitelná; po krádeži notebooku se k nim útočník bez hesla nedostane.",
        "cv": "Vysvětli rozdíl mezi šifrováním celého disku a šifrováním jednotlivých souborů a uveď, před jakou hrozbou každé chrání."
      },
      "Obyčejné soubory": {
        "ex": "Textový soubor je z pohledu systému jen pojmenovaná posloupnost bajtů s metadaty (velikost, práva, čas změny) – jeho „typ“ je věcí aplikace.",
        "cv": "Vyjmenuj, jaká metadata si souborový systém o obyčejném souboru udržuje, a vysvětli, čím se liší od jeho obsahu."
      },
      "Alokace volného místa a fragmentace": {
        "ex": "Souvislá alokace je rychlá na čtení, ale po mazání souborů vzniká roztříštěné volné místo; indexová alokace přes i-uzel umí soubor uložit i do nesouvislých bloků.",
        "cv": "Porovnej souvislou, zřetězenou a indexovou alokaci bloků z hlediska rychlosti přístupu a náchylnosti k fragmentaci."
      },
      "Adresářová struktura a její reprezentace na disku": {
        "ex": "Adresář je na disku tabulka dvojic jméno → číslo i-uzlu; i-uzel pak drží metadata souboru a odkazy na jeho datové bloky.",
        "cv": "Popiš, jaké kroky souborový systém udělá při otevření souboru zadaného cestou /home/user/data.txt."
      },
      "Vstup a výstup mapovaný do paměti": {
        "ex": "Po namapování souboru do paměti čte program jeho obsah prostým přístupem do pole; o načítání bloků z disku se postará stránkování.",
        "cv": "Vysvětli výhody čtení souboru přes mapování do paměti oproti opakovanému volání read a uveď situaci, kde se hodí."
      }
    },
    "Sítě": {
      "Modely vrstev (ISO/OSI, TCP/IP)": {
        "ex": "Model ISO/OSI má 7 vrstev, praktický model TCP/IP 4; každá vrstva poskytuje službu té nad sebou a skrývá detaily těch pod sebou.",
        "cv": "Přiřaď protokoly HTTP, IP, Ethernet a TCP k vrstvám modelu TCP/IP a u každého urči jeho úlohu."
      },
      "Funkcionalita a součinnost vrstev, adresace": {
        "ex": "Při odesílání dat se na každé vrstvě přidá hlavička (zapouzdření): transportní přidá port, síťová IP adresu, spojová MAC adresu.",
        "cv": "Popiš, jak se z dat aplikace stane rámec procházením vrstev, a urči, jaký druh adresy přidá každá vrstva."
      },
      "Fyzická vrstva, signály a jejich kódování": {
        "ex": "Manchesterovo kódování reprezentuje bit změnou úrovně signálu uprostřed intervalu, čímž zároveň přenáší synchronizaci hodin.",
        "cv": "Pro bitovou posloupnost 1011 načrtni průběh signálu při kódování NRZ a při Manchesterově kódování."
      },
      "Řízení přístupu k médiu": {
        "ex": "Klasický Ethernet používá CSMA/CD – stanice před vysíláním poslouchá médium a při kolizi vysílání přeruší; Wi-Fi se kolizím vyhýbá pomocí CSMA/CA.",
        "cv": "Vysvětli rozdíl mezi CSMA/CD a CSMA/CA a uveď, proč se na bezdrátové síti nepoužívá detekce kolizí."
      },
      "Propojování počítačových sítí": {
        "ex": "Přepínač propojuje zařízení v jedné lokální síti podle MAC adres, směrovač propojuje různé sítě podle IP adres.",
        "cv": "Pro zařízení opakovač, přepínač a směrovač urči, na které vrstvě modelu pracují a co přesně dělají."
      },
      "Síťové protokoly, přepínání a směrování, multicast": {
        "ex": "Směrovač podle směrovací tabulky pošle paket na další skok k cíli; multicast doručí jeden video stream současně skupině příjemců místo posílání kopie každému zvlášť.",
        "cv": "Vysvětli rozdíl mezi unicastem, broadcastem a multicastem a uveď ke každému typickou aplikaci."
      },
      "Zajištěný přenos, sestavení a ukončení spojení": {
        "ex": "TCP naváže spojení třícestným handshakem (SYN, SYN-ACK, ACK), čísluje bajty a ztracené segmenty posílá znovu podle chybějících potvrzení.",
        "cv": "Nakresli sled zpráv třícestného handshake TCP a vysvětli, jak příjemce pozná ztracený segment."
      },
      "Transportní protokoly": {
        "ex": "Stahování souboru používá TCP (spolehlivost je důležitější než rychlost), živé video či online hra spíš UDP (snese ztrátu, ale ne zpoždění).",
        "cv": "Pro čtyři aplikace (e-mail, videohovor, DNS dotaz, přenos souboru) vyber TCP, nebo UDP a rozhodnutí zdůvodni."
      }
    },
    "Síťové aplikace a bezpečnost": {
      "Základní aplikační protokoly (pošta, přenos souborů, web, jmenná služba)": {
        "ex": "Při psaní www.muni.cz do prohlížeče nejprve DNS přeloží jméno na IP adresu a teprve pak HTTP stáhne stránku z toho serveru.",
        "cv": "Ke každému protokolu SMTP, IMAP, HTTP, FTP a DNS přiřaď jeho úlohu a uveď, na kterém portu typicky běží."
      },
      "Principy popisu a zajištění kvality služby": {
        "ex": "Bez QoS jsou všechny pakety obslouženy „nejlépe, jak to jde“; s QoS dostane hlasový hovor přednost před stahováním, aby se nesekal.",
        "cv": "Vyjmenuj čtyři parametry QoS (propustnost, zpoždění, jitter, ztrátovost) a urči, na které z nich je citlivý videohovor."
      },
      "Použití pro multimédia": {
        "ex": "Streamovaný film se ukládá do vyrovnávací paměti o několik sekund dopředu, aby kolísání zpoždění sítě nezpůsobilo trhání obrazu.",
        "cv": "Vysvětli, proč živé vysílání volí UDP a toleruje občasnou ztrátu paketu, a jak buffer vyhladí jitter."
      },
      "Zabezpečení síťové komunikace, autentizace a šifrování": {
        "ex": "HTTPS zajišťuje důvěrnost (šifrování), integritu (data nelze nepozorovaně změnit) i autentizaci serveru pomocí certifikátu.",
        "cv": "Pro komunikaci s internetovým bankovnictvím urči, jak je zajištěna důvěrnost, integrita a autentizace a jakým primitivem."
      },
      "Zabezpečení na jednotlivých protokolových vrstvách": {
        "ex": "TLS zabezpečuje jednotlivé spojení na transportní vrstvě (základ HTTPS), IPsec chrání veškerý IP provoz na síťové vrstvě (základ VPN).",
        "cv": "Porovnej TLS a IPsec: na které vrstvě působí, jaký rozsah provozu chrání a kde se každé typicky nasazuje."
      }
    },
    "Základy informační bezpečnosti": {
      "Základní bezpečnostní funkce – důvěrnost, integrita, dostupnost, nepopiratelnost": {
        "ex": "Šifrování e-mailu zajišťuje důvěrnost, kontrolní součet integritu, záložní server dostupnost a digitální podpis nepopiratelnost odeslání.",
        "cv": "Pro únik databáze hesel, podvržení převodního příkazu a DDoS útok urči, kterou z vlastností triády CIA každý incident porušuje."
      },
      "Kryptografická primitiva": {
        "ex": "Symetrická šifra AES šifruje data jedním sdíleným klíčem rychle, asymetrická RSA řeší výměnu klíče a hašovací funkce SHA-256 ověří integritu.",
        "cv": "Ke každému primitivu (symetrická šifra, asymetrická šifra, hašovací funkce, digitální podpis) přiřaď, jaký bezpečnostní cíl plní."
      },
      "Kryptografické protokoly": {
        "ex": "Protokol TLS handshake pomocí asymetrické kryptografie ustaví sdílený symetrický klíč a ověří identitu serveru – jediná chyba v jeho návrhu by jej prolomila.",
        "cv": "Popiš v krocích, jak dvě strany pomocí asymetrické kryptografie bezpečně ustaví sdílený symetrický klíč."
      },
      "Řízení rizik": {
        "ex": "Riziko ztráty notebooku lze snížit šifrováním disku, přenést pojištěním, nebo akceptovat – volba závisí na hodnotě dat a ceně opatření.",
        "cv": "Pro firmu identifikuj jedno aktivum, jednu hrozbu a zranitelnost, odhadni dopad a navrhni přiměřené protiopatření."
      },
      "Audit, bezpečnostní operace, standardy": {
        "ex": "Bezpečnostní audit nezávisle ověří, zda firma dodržuje své politiky; tým bezpečnostních operací přitom průběžně monitoruje logy a reaguje na incidenty.",
        "cv": "Vysvětli rozdíl mezi jednorázovým auditem a průběžnými bezpečnostními operacemi a uveď roli normy řady ISO/IEC 27000."
      },
      "Hodnocení bezpečnosti": {
        "ex": "Produkt se podle kritérií Common Criteria otestuje a získá úroveň záruky EAL, která vyjadřuje doloženou míru důvěry v jeho bezpečnost.",
        "cv": "Vysvětli, k čemu slouží standardizovaná kritéria (například Common Criteria) a co vyjadřuje výsledná úroveň záruky."
      }
    },
    "Informační bezpečnost": {
      "Řízení identity a přístupu": {
        "ex": "Zaměstnanec se přihlásí heslem a kódem z mobilu (vícefaktorová autentizace) a podle role účetní vidí jen účetní modul (autorizace, nejmenší oprávnění).",
        "cv": "Navrhni pro firemní systém role a jejich oprávnění a vysvětli, jak uplatníš princip nejmenších oprávnění."
      },
      "Ochrana soukromí – koncepty a metody": {
        "ex": "E-shop má podle zásady minimalizace dat sbírat jen údaje nutné k dodání zboží; ke statistikám pak používá anonymizovaná data.",
        "cv": "Pro mobilní aplikaci navrhni, která data sbírat podle minimalizace dat, a urči, kde použít anonymizaci či pseudonymizaci."
      },
      "Síťové útoky": {
        "ex": "Při útoku man-in-the-middle se útočník vloží mezi klienta a server, odposlouchává a podvrhuje data; DDoS naopak zahltí server a způsobí jeho nedostupnost.",
        "cv": "Ke třem útokům (odposlech, man-in-the-middle, DDoS) přiřaď, kterou vlastnost triády CIA ohrožují, a navrhni ke každému obranu."
      },
      "Bezpečné programování a vývoj SW": {
        "ex": "SQL injection vznikne vložením vstupu přímo do dotazu; obranou je parametrizovaný dotaz, který vstup nikdy nepovažuje za součást příkazu.",
        "cv": "Najdi v zadaném kódu zranitelnost typu SQL injection nebo přetečení bufferu a oprav ji bezpečným postupem."
      },
      "Použitelná bezpečnost": {
        "ex": "Příliš přísná politika hesel vede k tomu, že si je lidé píší na lísteček – nesrozumitelné opatření uživatelé obcházejí a bezpečnost klesá.",
        "cv": "Navrhni přihlašování, které je bezpečné i použitelné, a vysvětli, jak vyvažuješ ochranu a pohodlí uživatele."
      }
    },
    "Aplikované informační systémy": {
      "Definice AIS": {
        "ex": "Nemocniční AIS eviduje pacienty, vyšetření, výsledky a ordinace léků. Kromě aplikace obsahuje databázi, role lékařů a sester, proces příjmu pacienta, pravidla přístupu a integrace na laboratorní systém.",
        "cv": "U univerzitního studijního systému identifikuj data, uživatele, procesy a hlavní cíle systému."
      },
      "Oblasti použití IS: státní správa, výroba, zdravotnictví, sklady a obchod": {
        "ex": "Skladový IS sleduje příjem zboží, umístění položek, rezervace pro objednávky a expedici. Ve výrobě by analogický systém navíc řešil kusovníky, výrobní příkazy a sledování rozpracovanosti.",
        "cv": "Porovnej IS pro zdravotnictví a e-shop: uveď dva společné rysy a dvě doménová specifika."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Třívrstvá architektura oddělí webové UI, aplikační server s obchodní logikou a databázi. Díky tomu lze škálovat webové servery zvlášť a databázi chránit před přímým přístupem klientů.",
        "cv": "Navrhni hrubou architekturu informačního systému pro síť skladů včetně integrací na účetnictví a dopravce."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "Při zavádění ERP se nejprve mapují procesy a požadavky, poté se plánují etapy, migrace dat, školení a akceptační testy. Změna požadavků musí projít řízením dopadu na cenu, čas a rizika.",
        "cv": "Popiš plán zavedení nového AIS ve firmě: fáze, hlavní rizika a způsob ověření, že systém splňuje požadavky."
      },
      "Řízení provozu IS": {
        "ex": "Provoz AIS zahrnuje monitoring dostupnosti, logů a výkonu, pravidelné zálohy a postup obnovy. Incident typu výpadek databáze má mít jasný eskalační postup a měřený čas obnovy.",
        "cv": "Navrhni základní provozní opatření pro kritický IS: monitoring, zálohování, incident management a nasazování změn."
      }
    },
    "Digitální systémy": {
      "Teorie zobrazení dat a kódování informací včetně operací": {
        "ex": "Osmibitový doplňkový kód reprezentuje −1 jako 11111111; přičtením 00000001 vznikne 00000000 po zahození přenosu. Stejná bitová posloupnost může mít různý význam podle interpretace.",
        "cv": "Zapiš číslo −7 v osmibitovém doplňkovém kódu a vysvětli, proč stejné bity mohou jako unsigned znamenat jiné číslo."
      },
      "Algebraické, grafické a algoritmické minimalizační metody": {
        "ex": "Funkci AB + A¬B lze algebraicky upravit na A(B+¬B)=A. Karnaughova mapa ukáže totéž seskupením dvou sousedních jedniček lišících se jen v proměnné B.",
        "cv": "Minimalizuj funkci F(A,B,C)=Σm(1,3,5,7) a popiš, jak bys výsledek získal Karnaughovou mapou."
      },
      "Optimalizace zpoždění, logických prvků a testovatelnosti": {
        "ex": "Dvouúrovňový součin-součet může mít malé zpoždění, ale více hradel. Naopak sdílení mezivýrazů šetří hradla, může však prodloužit kritickou cestu a zkomplikovat testování vnitřních uzlů.",
        "cv": "Uveď příklad kompromisu mezi minimalizací počtu hradel a minimalizací zpoždění v logickém obvodu."
      },
      "Kombinační konstrukční prvky digitálních systémů": {
        "ex": "Multiplexer 4:1 má čtyři datové vstupy, dva adresové vstupy a jeden výstup. Podle adresy vybere jeden vstup; lze jím realizovat libovolnou logickou funkci dvou proměnných uložením pravdivostní tabulky na datové vstupy.",
        "cv": "Navrhni poloviční sčítačku a určete, které výstupy odpovídají XOR a AND vstupů."
      },
      "Sekvenční obvody a kódování vnitřních stavů": {
        "ex": "Automat se čtyřmi stavy lze kódovat dvěma bity binárně nebo čtyřmi bity one-hot. One-hot spotřebuje více klopných obvodů, ale často zjednoduší přechodovou logiku.",
        "cv": "Porovnej binární a one-hot kódování stavů pro automat s osmi stavy."
      },
      "Typy a vlastnosti klopných obvodů": {
        "ex": "D klopný obvod při aktivní hraně hodin uloží hodnotu D na výstup Q. Pokud se D změní těsně před hranou a poruší setup time, výstup může být metastabilní.",
        "cv": "Vysvětli rozdíl mezi D a T klopným obvodem a uveď typické použití T obvodu."
      },
      "Základní sekvenční konstrukční prvky": {
        "ex": "Synchronní čítač modulo 4 používá dva klopné obvody a prochází stavy 00, 01, 10, 11. Řadič procesoru je složitější sekvenční obvod, který generuje posloupnost řídicích signálů pro instrukce.",
        "cv": "Navrhni stavovou posloupnost čítače modulo 3 a určete minimální počet klopných obvodů."
      }
    },
    "Paralelní systémy": {
      "Dekompozice, mapování a komunikační primitiva": {
        "ex": "Násobení velké matice lze dekomponovat po blocích řádků. Každé vlákno počítá jiné řádky výsledku a na konci se výsledky spojí; komunikace je minimální, pokud mají vlákna potřebná vstupní data.",
        "cv": "Navrhni dekompozici pro paralelní výpočet součtu velkého pole a určete, kde je potřeba komunikace nebo synchronizace."
      },
      "Výkonnostní analýza paralelních algoritmů": {
        "ex": "Pokud 90 % programu lze paralelizovat a 10 % zůstane sekvenčních, Amdahlův zákon dává při nekonečně mnoha procesorech maximální zrychlení 1/0,1 = 10.",
        "cv": "Spočítej zrychlení podle Amdahlova zákona pro program, kde 80 % času lze paralelizovat, při použití 4 procesorů."
      },
      "Paralelní algoritmy se sdílenou pamětí": {
        "ex": "Dvě vlákna inkrementující společnou proměnnou bez synchronizace mohou ztratit aktualizaci. Operace read-modify-write není atomická; je nutný mutex, atomická proměnná nebo redukce.",
        "cv": "Uveď příklad datového závodu ve sdílené paměti a navrhni opravu pomocí mutexu nebo atomické operace."
      },
      "OpenMP standard": {
        "ex": "#pragma omp parallel for rozdělí iterace cyklu mezi vlákna. Pro součet hodnot je nutné použít reduction(+:sum), aby každé vlákno mělo lokální akumulátor a výsledky se bezpečně sloučily.",
        "cv": "Napiš kostru OpenMP paralelního cyklu pro výpočet maxima pole a vysvětli, proč je potřeba redukce."
      },
      "POSIX Threads": {
        "ex": "V pthreads se vytvoří vlákno pomocí pthread_create a čeká se na něj pomocí pthread_join. Sdílenou frontu je nutné chránit pthread_mutex_t, jinak mohou dvě vlákna poškodit její vnitřní stav.",
        "cv": "Popiš kroky programu, který vytvoří N POSIX vláken, předá jim rozsahy pole a počká na jejich dokončení."
      },
      "Lock-free přístup": {
        "ex": "Lock-free zásobník může měnit ukazatel na vrchol pomocí compare-and-swap. Pokud jiný thread mezitím vrchol změnil, CAS selže a operace se zopakuje bez blokujícího zámku.",
        "cv": "Vysvětli rozdíl mezi lock-free algoritmem a algoritmem chráněným mutexem z hlediska uváznutí a složitosti návrhu."
      },
      "Paralelní algoritmy s distribuovanou pamětí a MPI": {
        "ex": "V MPI může proces 0 rozeslat části pole pomocí Scatter, každý proces spočítá lokální součet a Reduce je sečte do globálního výsledku. Data se nesdílí pamětí, ale kopírují zprávami.",
        "cv": "Navrhni MPI postup pro výpočet skalárního součinu dvou vektorů rozdělených mezi procesy."
      }
    },
    "Moderní značkovací jazyky": {
      "Základní standardy rodiny XML": {
        "ex": "XML určí syntaxi elementů, XPath vybere například všechny elementy book, XML Schema ověří, že book má povinné isbn, a XSLT převede seznam knih do HTML tabulky.",
        "cv": "Přiřaď XML, XML Schema, XPath, XQuery a XSLT k jejich hlavní roli v práci s XML dokumentem."
      },
      "Aplikace XML pro dokumenty a data": {
        "ex": "Formát faktury v XML je datově orientovaný: má pravidelné elementy částek, položek a identifikátorů. XHTML článek je dokumentově orientovaný: záleží na pořadí odstavců a smíšeném textu.",
        "cv": "Rozhodni, zda je XML vhodné pro konfigurační soubor aplikace, a uveď dvě výhody a dvě nevýhody."
      },
      "Objektový model dokumentu (DOM)": {
        "ex": "DOM pro <kniha><nazev>AI</nazev></kniha> vytvoří element kniha s potomkem nazev a textovým uzlem AI. Program může najít uzel nazev a změnit jeho text.",
        "cv": "Popiš, jak by DOM reprezentoval XML dokument s kořenovým elementem objednavka a několika položkami."
      },
      "Jazyky schémat (XML Schema)": {
        "ex": "Schéma může určit, že element vek je celé číslo nezáporné a element osoba musí obsahovat právě jedno jmeno. Dokument s textem abc ve vek pak není validní.",
        "cv": "Navrhni jednoduché XML Schema pravidlo pro element student s povinným atributem id a elementem jmeno."
      },
      "Navigace a dotazování v XML datech (XPath, XQuery)": {
        "ex": "XPath výraz /knihovna/kniha[@rok>2020]/nazev vybere názvy knih v elementech kniha s atributem rok větším než 2020.",
        "cv": "Napiš XPath výraz, který vybere e-maily všech studentů s atributem rocnik=\"2\"."
      },
      "Transformace XML (XSLT)": {
        "ex": "XSLT šablona match=\"kniha\" může pro každý element kniha vytvořit HTML řádek tabulky s názvem a autorem. Transformace odděluje data od prezentačního výstupu.",
        "cv": "Popiš, jak by XSLT převedlo XML seznam knih na HTML seznam ul/li."
      }
    }
  },
  "solutions": {
    "Lineární algebra": {
      "Operace s vektory a maticemi": {
        "ex": "Sčítání i násobení skalárem se provádí po složkách, proto a+b=(5,−2,2) a 3a=(3,−6,9). Součin A·B existuje, je-li počet sloupců A roven počtu řádků B; rozměr výsledku je (řádky A)×(sloupce B), tedy 2×2, kdežto B·A vyjde 3×3 – už různý rozměr ukazuje nekomutativitu.",
        "cv": "2a−b = (4,2,−2)−(1,3,0) = (3,−1,−2). A·B = [[1·3+2·2, 1·1+2·4],[0·3+1·2, 0·1+1·4]] = [[7,9],[2,4]]. B·A = [[3·1+1·0, 3·2+1·1],[2·1+4·0, 2·2+4·1]] = [[3,7],[2,8]] ≠ A·B."
      },
      "Vlastnosti lineárních operací a skalární součin": {
        "ex": "u·v = 1·2 + 2·(−1) + 2·0 = 0; nulový skalární součin znamená kolmost. Délky: |u| = √(1+4+4) = 3, |v| = √(4+1+0) = √5. Protože cos φ = (u·v)/(|u|·|v|) = 0, je úhel 90°.",
        "cv": "u·v = 1·2 + 0·1 + 1·(−2) = 0. |u| = √(1+0+1) = √2, |v| = √(4+1+4) = 3. cos φ = 0/(√2·3) = 0 ⇒ φ = 90°, vektory jsou kolmé (úhel pravý)."
      },
      "Gaussova eliminace": {
        "ex": "Od 2. řádku odečteme dvojnásobek prvního, od 3. řádku první; vznikne trojúhelníkový tvar. Zpětnou substitucí vyjde z=3, y=2, x=1. Jediné řešení odpovídá tomu, že matice soustavy má plnou hodnost 3.",
        "cv": "R2−2R1: −3y−z=−7. R3−3R1: −2y−4z=−3. Z první z=7−3y, dosazením do druhé: 10y=25 ⇒ y=2,5, z=−0,5, x=4−y−z=2. Hodnost matice je 3 = počet neznámých ⇒ jediné řešení (2; 2,5; −0,5)."
      },
      "Determinant": {
        "ex": "Pro matici 2×2 je det = ad−bc, takže det([[2,1],[3,4]]) = 2·4 − 1·3 = 5. Nenulová hodnota ⇒ matice je regulární. Číslo 5 udává, že transformace zvětší obsah pětkrát; kladné znaménko znamená zachování orientace.",
        "cv": "Rozvoj podle 1. sloupce (prvky 1, 0, 2): det = 1·det([[3,4],[0,1]]) − 0 + 2·det([[2,0],[3,4]]) = 1·(3−0) + 2·(8−0) = 3 + 16 = 19. Nenulový determinant ⇒ matice je regulární a má inverzi."
      },
      "Vlastní čísla a vektory a jejich geometrický význam": {
        "ex": "Matice [[2,0],[0,3]] je diagonální, vlastní čísla jsou přímo prvky diagonály: 2 a 3. K číslu 2 patří vektor (1,0), protože A·(1,0)=(2,0)=2·(1,0); k číslu 3 vektor (0,1). Transformace jen natáhne osy, jejich směr se nemění.",
        "cv": "det(A−λI)=0: (2−λ)²−1=0 ⇒ 2−λ=±1 ⇒ λ₁=1, λ₂=3. Pro λ=1 dává (A−I)v=0 rovnici v₁+v₂=0, vektor (1,−1). Pro λ=3 rovnici v₁−v₂=0, vektor (1,1). Ověření: A·(1,1)=(3,3)=3·(1,1). ✓"
      },
      "Inverzní matice": {
        "ex": "Pro 2×2 platí A⁻¹ = (1/det)·[[d,−b],[−c,a]]. U A=[[2,1],[5,3]] je det = 2·3−1·5 = 1, takže A⁻¹ = [[3,−1],[−5,2]]. Kontrola: A·A⁻¹ = [[1,0],[0,1]] = I.",
        "cv": "det(A) = 2·3−1·5 = 1, A⁻¹ = [[3,−1],[−5,2]]. x = A⁻¹·b = (3·1−1·4, −5·1+2·4) = (−1, 3). Kontrola A·x = (2·(−1)+1·3, 5·(−1)+3·3) = (1, 4) = b. ✓"
      },
      "Vektorové podprostory": {
        "ex": "Rovina x+y+z=0 prochází počátkem, obsahuje tedy nulový vektor. Součet dvou jejích vektorů má součet souřadnic 0+0=0 a násobek má c·0=0 – obě uzavřenosti platí. Rovina x+y+z=1 počátek neobsahuje, proto podprostorem není.",
        "cv": "Nulový vektor: 0+0+0=0 ✓. Součet: z x₁+y₁+z₁=0 a x₂+y₂+z₂=0 plyne (x₁+x₂)+(y₁+y₂)+(z₁+z₂)=0 ✓. Násobek: c·x+c·y+c·z=c·0=0 ✓. M je podprostor dimenze 2; báze například {(1,−1,0),(1,0,−1)}."
      },
      "Vektorové báze": {
        "ex": "Vektory (1,0,0),(0,1,0),(0,0,1) jsou lineárně nezávislé a generují celé R³, tvoří tedy bázi. Báze (1,1,0),(0,1,1),(1,0,1) je jiná, ale má stejný počet prvků – 3. Tento počet je dimenze a na volbě báze nezávisí.",
        "cv": "Platí v3 = v1 + v2, protože (1,0,1)+(0,1,1)=(1,1,2). Vektory jsou tedy lineárně závislé. Nezávislé jsou jen v1 a v2, takže dimenze prostoru, který generují, je 2 (rovina v R³)."
      },
      "Lineární transformace": {
        "ex": "T(x,y)=(2x−y, x+3y) je lineární – dosazením lze ověřit T(u+v)=T(u)+T(v) i T(c·u)=c·T(u). Sloupce matice jsou obrazy bázových vektorů: T(1,0)=(2,1), T(0,1)=(−1,3), matice je tedy [[2,−1],[1,3]].",
        "cv": "Linearita: rozepsáním po složkách vyjde T(au+bv)=a·T(u)+b·T(v) ✓. Matice má ve sloupcích obrazy bázových vektorů: T(1,0)=(1,3), T(0,1)=(2,−1), tedy [[1,2],[3,−1]]. T(2,−1) = (2+2·(−1), 3·2−(−1)) = (0, 7)."
      }
    },
    "Základy matematické analýzy": {
      "Relace a zobrazení": {
        "ex": "Relace „je dělitelem“ obsahuje dvojici (a,b) právě tehdy, když a dělí b – například (2,4) i (1,3). Zobrazení f(x)=x² není prosté: různým vstupům −1 a 1 přiřadí stejný výstup, tedy f(−1)=f(1)=1.",
        "cv": "f(x)=2x+1 je prostá (z 2x₁+1=2x₂+1 plyne x₁=x₂) i surjektivní (každé y má vzor x=(y−1)/2), tedy bijektivní. g(x)=x² prostá není (g(−2)=g(2)) a surjektivní z R do R také ne (záporné hodnoty nemají vzor)."
      },
      "Vlastnosti reálných funkcí": {
        "ex": "f(x)=x² je definovaná na celém R. Sudost: f(−x)=(−x)²=x²=f(x) ✓. Hodnoty jsou vždy nezáporné, takže je zdola omezená nulou. Derivace 2x je pro záporná x záporná (funkce klesá) a pro kladná x kladná (roste).",
        "cv": "Definiční obor f(x)=1/(x−2) je R bez bodu 2 (jmenovatel nesmí být nula). Na (−∞,2) i na (2,∞) je funkce klesající. Není sudá ani lichá. Omezená není – v okolí bodu 2 roste hodnota nade všechny meze."
      },
      "Polynomy": {
        "ex": "p(x)=x³−x = x(x²−1) = x(x−1)(x+1), kořeny jsou tedy −1, 0, 1. Stupeň 3 je lichý a vedoucí koeficient kladný, proto p(x) roste do +∞ pro x jdoucí do +∞ a klesá do −∞ pro x jdoucí do −∞.",
        "cv": "p(x)=x³−4x = x(x²−4) = x(x−2)(x+2). Reálné kořeny: −2, 0, 2. Stupeň je 3. Vedoucí člen x³ má lichý stupeň a kladný koeficient ⇒ pro x do +∞ jde p do +∞, pro x do −∞ jde p do −∞."
      },
      "Spojité funkce a limity": {
        "ex": "Pro x≠1 platí (x²−1)/(x−1) = ((x−1)(x+1))/(x−1) = x+1, takže limita pro x→1 je 2. V bodě 1 funkce spojitá není (není tam definovaná), ale dodefinováním f(1)=2 se „díra“ zacelí.",
        "cv": "Pro x≠2 je (x²−4)/(x−2) = ((x−2)(x+2))/(x−2) = x+2, limita pro x→2 je tedy 4. Aby byla funkce v bodě 2 spojitá, dodefinujeme ji hodnotou rovnou limitě, tj. f(2)=4."
      },
      "Derivace": {
        "ex": "f′(x)=3x²−3; z f′(x)=0 plyne x²=1, tedy x=±1. Druhá derivace f″(x)=6x: v bodě −1 je f″(−1)=−6 (záporná) ⇒ lokální maximum, v bodě 1 je f″(1)=6 (kladná) ⇒ lokální minimum.",
        "cv": "f′(x)=3x²−3=3(x−1)(x+1). Na (−∞,−1) a (1,∞) je f′ kladná – funkce roste; na (−1,1) je záporná – klesá. V x=−1 přechod z růstu na klesání ⇒ lokální maximum f(−1)=2; v x=1 ⇒ lokální minimum f(1)=−2."
      },
      "Neurčitý a určitý integrál": {
        "ex": "Primitivní funkce k x² je x³/3, protože (x³/3)′=x². Newtonova–Leibnizova věta: ∫₀² x² dx = [x³/3]₀² = 2³/3 − 0³/3 = 8/3.",
        "cv": "Primitivní funkce k x²+1 je x³/3 + x. Dosazení mezí: ∫₀² (x²+1) dx = [x³/3 + x]₀² = (8/3 + 2) − 0 = 8/3 + 6/3 = 14/3."
      },
      "Geometrický význam": {
        "ex": "f′(x)=2x, takže f′(2)=4 je směrnice tečny v bodě (2,4). Primitivní funkce k x je x²/2, proto ∫₀¹ x dx = [x²/2]₀¹ = 1/2 – obsah pravoúhlého trojúhelníka s odvěsnami délky 1.",
        "cv": "f(1)=1 a směrnice f′(1)=2·1=2. Rovnice tečny: y−1 = 2(x−1), tedy y = 2x−1. Obsah pod grafem: ∫₀¹ x² dx = [x³/3]₀¹ = 1/3."
      },
      "Diferenciální počet": {
        "ex": "f′(x)=3x²−3 dává extrémy v x=±1 (maximum v −1, minimum v 1). f″(x)=6x je nulová v 0, kde se mění konvexita ⇒ inflexní bod (0,0). Taylorův polynom v 0: z f(0)=0 a f′(0)=−3 plyne lineární přiblížení −3x.",
        "cv": "Definiční obor R. f′(x)=3x²−3: roste na (−∞,−1) a (1,∞), klesá na (−1,1); lokální maximum (−1,2), minimum (1,−2). f″(x)=6x: pro záporná x konkávní, pro kladná konvexní, inflexní bod (0,0). Funkce je lichá a neomezená."
      }
    },
    "Popisná statistika": {
      "Popisná statistika": {
        "ex": "Z [4,5,5,6,8] spočítáme průměr (4+5+5+6+8)/5 = 5,6 a rozsah od 4 do 8. Tyto charakteristiky popisují pouze tuto třídu – o úrovni jiných tříd nevypovídají, protože popisná statistika nezobecňuje na populaci.",
        "cv": "Tabulka četností: známka 1 → 1×, 2 → 2×, 3 → 3×, 4 → 1× (celkem 7 hodnot). Vhodný graf je sloupcový diagram, kde výška sloupce odpovídá četnosti dané známky."
      },
      "Střední hodnota": {
        "ex": "Průměr = součet / počet = (25+27+30+28+200)/5 = 310/5 = 62. Většina hodnot leží kolem 28, ale jediná hodnota 200 průměr vytáhne nahoru – ukazuje to citlivost průměru na odlehlé hodnoty.",
        "cv": "Průměr [5,7,7,9,12] = 40/5 = 8. Po přidání hodnoty 100: (40+100)/6 = 140/6 ≈ 23,3. Jediná odlehlá hodnota průměr téměř ztrojnásobila, ačkoli většina dat zůstala kolem 8."
      },
      "Medián": {
        "ex": "Seřazená data [25,27,28,30,200] mají 5 hodnot, medián je prostřední (třetí) = 28. Odlehlá hodnota 200 medián neovlivní, protože medián závisí jen na pořadí, ne na velikosti krajních hodnot.",
        "cv": "Data jsou seřazená, 7 hodnot. Medián = 4. hodnota = 8. Dolní kvartil (medián [3,5,7]) = 5, horní kvartil (medián [10,12,15]) = 12. Krabicový graf: krabice od 5 do 12, čára uvnitř na 8, vousy k 3 a 15."
      },
      "Rozptyl": {
        "ex": "[5,5,5]: průměr 5, všechny odchylky 0 ⇒ rozptyl 0. [2,5,8]: průměr 5, odchylky −3, 0, 3, jejich kvadráty 9, 0, 9, průměr kvadrátů = 18/3 = 6. Stejný průměr, ale různá variabilita.",
        "cv": "Průměr = 40/8 = 5. Odchylky: −3,−1,−1,−1,0,0,2,4; kvadráty: 9,1,1,1,0,0,4,16, součet 32. Rozptyl = 32/8 = 4, směrodatná odchylka = √4 = 2 – hodnoty leží typicky asi 2 jednotky od průměru."
      },
      "Korelace": {
        "ex": "Korelace +0,7 znamená, že vyšší výška obvykle provází vyšší hmotnost (silný, ne dokonalý vztah). Prodej zmrzliny a počet utonutí korelují proto, že obojí roste s teplotou – jde o společnou příčinu, ne kauzalitu mezi nimi.",
        "cv": "S rostoucím x roste i y (2→4→5→9), korelace je tedy kladná a poměrně silná. Příklad bez kauzality: počet čápů a porodnost v regionech korelují kladně, ale jeden nezpůsobuje druhý – obojí souvisí s venkovskostí oblasti."
      },
      "Odhady statistik a jejich spolehlivost": {
        "ex": "Z výběru 100 lidí je bodový odhad podpory 40 %. Konfidenční interval k němu připojuje nejistotu danou velikostí vzorku – pro n=100 je řádově ±10 %, pro n=1000 klesne zhruba na třetinu, protože šířka klesá s odmocninou z n.",
        "cv": "Šířka konfidenčního intervalu je úměrná 1/√n. Zvětšíme-li n čtyřikrát, dělíme šířku √4 = 2 – interval se zúží na polovinu. Čtyřnásobek dat tedy zpřesní odhad dvakrát."
      },
      "Distribuční funkce": {
        "ex": "Distribuční funkce F(x)=P(X≤x). Pro kostku: F(3)=P(X≤3)=P(1)+P(2)+P(3)=3/6=1/2. F je schodovitá, v každé celočíselné hodnotě skočí o 1/6 a roste od 0 do 1.",
        "cv": "F(x)=P(X≤x): pro x menší než 1 je F=0; na intervalu [1,2) je F=0,2; na [2,3) je F=0,2+0,5=0,7; pro x≥3 je F=1. Graf je schodovitý se skoky 0,2; 0,5; 0,3 v bodech 1, 2 a 3."
      },
      "Rozdělení náhodných veličin a jejich příklady": {
        "ex": "Počet líců z 10 hodů: pevný počet pokusů s pravděpodobností 1/2 ⇒ binomické rozdělení. Počet e-mailů za hodinu: počet vzácných událostí za interval ⇒ Poissonovo. Výška lidí: spojitá veličina daná mnoha vlivy ⇒ přibližně normální.",
        "cv": "Hod kostkou 20× a počítání šestek: pevný počet pokusů ⇒ binomické rozdělení. Čekací doba na zákazníka: spojitá doba mezi vzácnými událostmi ⇒ exponenciální rozdělení. Chyba měření délky: součet mnoha malých vlivů ⇒ normální rozdělení."
      }
    },
    "Grafy a jejich prohledávání": {
      "Typy grafů": {
        "ex": "Silniční síť: města jsou vrcholy, silnice hrany bez směru s délkou jako vahou ⇒ neorientovaný ohodnocený graf. Závislosti úkolů mají směr a nesmějí tvořit cyklus ⇒ orientovaný acyklický graf. Rodokmen je souvislý a bez cyklů ⇒ strom.",
        "cv": "Přátelství je vzájemné ⇒ neorientovaný graf. Odkazy mezi stránkami mají směr (A odkazuje na B, opačně nemusí) ⇒ orientovaný graf. Potrubí s průtoky má u každé trubky směr toku i číselný průtok ⇒ orientovaný ohodnocený graf."
      },
      "Stromy": {
        "ex": "Strom je souvislý a bez cyklů, proto má strom s n vrcholy vždy n−1 hran (zde 6−1=5). Mezi každými dvěma vrcholy vede právě jedna cesta; přidání další hrany spojí dva už propojené vrcholy, čímž vznikne cyklus.",
        "cv": "Strom se 7 vrcholy má přesně 7−1 = 6 hran. Cesta mezi dvěma listy je jediná – vede přes jejich nejbližšího společného předka. Přidání hrany mezi dva libovolné vrcholy by vytvořilo cyklus."
      },
      "Stupně vrcholů": {
        "ex": "Stupeň vrcholu je počet hran z něj vedoucích. V trojúhelníku ABC má každý vrchol stupeň 2 a součet stupňů je 6. Princip podání rukou: každá hrana přispěje do součtu stupňů dvakrát, takže součet = 2·(počet hran) = 2·3.",
        "cv": "Součet stupňů = 3+3+2+2+2 = 12. Podle principu podání rukou je součet stupňů roven dvojnásobku počtu hran, takže hran je 12/2 = 6. Součet je sudé číslo, takže takový graf může existovat."
      },
      "Orientované grafy": {
        "ex": "Hrana A→B v grafu závislostí znamená, že A musí předcházet B. Orientovaný cyklus by způsobil, že každá úloha v něm nepřímo čeká sama na sebe – závislosti by nešlo splnit a úlohy by byly neřešitelné.",
        "cv": "Každý vrchol má jednu příchozí a jednu odchozí hranu, takže vstupní i výstupní stupeň je u všech tří vrcholů roven 1. Hrany A→B→C→A tvoří orientovaný cyklus – ten v grafu existuje."
      },
      "Reprezentace grafů": {
        "ex": "Matice sousednosti grafu se 4 vrcholy má 4×4 = 16 buněk bez ohledu na počet hran – je rychlá na dotaz „existuje hrana?“, ale paměťově náročná. Seznamy sousedů ukládají jen skutečné hrany, takže pro řídký graf jsou úspornější.",
        "cv": "Matice sousednosti má jedničky na pozicích (1,2),(2,1),(2,3),(3,2),(3,4),(4,3),(1,4),(4,1), jinde nuly. Seznamy sousedů: 1:[2,4], 2:[1,3], 3:[2,4], 4:[3,1]. Matice má 16 buněk, seznamy jen 8 položek – pro tento řídký graf úspornější."
      },
      "Algoritmy prohledávání do hloubky a do šířky a jejich využití": {
        "ex": "BFS používá frontu a navštěvuje vrcholy po vrstvách podle vzdálenosti od startu, proto v neohodnoceném grafu najde cestu s nejmenším počtem hran. DFS jde co nejhlouběji pomocí zásobníku či rekurze; hrana zpět na vrchol na aktuální cestě odhalí cyklus.",
        "cv": "BFS od A: zařadíme A, pak jeho sousedy, pak sousedy sousedů – pořadí je po vrstvách podle vzdálenosti. DFS od A: jdeme co nejhlouběji jednou větví a teprve při zaseknutí se vracíme (backtracking). Oba projdou všech 7 vrcholů v lineárním čase, ale v jiném pořadí."
      },
      "Komponenty souvislosti": {
        "ex": "Komponenta je maximální množina vzájemně dosažitelných vrcholů. V grafu s hranami AB a CD nelze přejít z {A,B} do {C,D}, jde tedy o dvě komponenty. Najdeme je tak, že spustíme DFS z A a poté znovu z prvního nenavštíveného vrcholu.",
        "cv": "Hrany AB a BC spojují A, B, C; hrana DE spojuje D, E; vrchol F nemá žádnou hranu. Komponenty jsou tedy tři: {A,B,C}, {D,E} a {F}. Najdeme je opakovaným spuštěním DFS z dosud nenavštíveného vrcholu."
      }
    },
    "Grafové algoritmy": {
      "Ohodnocené grafy": {
        "ex": "Ve váženém grafu nese každá hrana číslo – u mapy měst vzdálenost v km. Pouhá existence cesty pak nestačí: mezi dvěma městy může vést více cest a zajímá nás ta s nejmenším součtem vah.",
        "cv": "Stačí nakreslit 4 vrcholy a hrany s kladnými vahami, například AB=10, AC=25, BC=15, CD=8, BD=30. Nejdražší je hrana s nejvyšší vahou – zde BD s váhou 30."
      },
      "Definice nejkratší cesty": {
        "ex": "Přímá hrana A→B má váhu 5, ale cesta A→C→B má váhu 2+1=3. Nejkratší cesta je ta s nejmenším součtem vah hran, nikoli ta s nejmenším počtem hran – proto vede přes vrchol C.",
        "cv": "Nejkratší cestu najdeme porovnáním součtů vah všech cest mezi danými vrcholy a vybereme minimum. Obsahuje-li graf na cestě záporný cyklus, lze cyklus opakovat a součet vah neomezeně snižovat – minimum neexistuje, cesta tedy není definována."
      },
      "Minimální kostry grafu": {
        "ex": "Kostra propojuje všechny vrcholy a je stromem (bez cyklu), má proto n−1 hran. Minimální kostra je ta s nejmenším součtem vah – u sítě měst odpovídá nejlevnějšímu způsobu, jak je všechna propojit kabelem.",
        "cv": "Hladově přidáváme nejlevnější hrany, které nevytvoří cyklus, dokud nemáme n−1 = 4 hrany spojující všech 5 vrcholů. Celková váha kostry je součet vah těchto čtyř vybraných hran."
      },
      "Algoritmy pro hledání nejkratších cest (Dijkstra, Bellman–Ford)": {
        "ex": "Dijkstrův algoritmus opakovaně vybírá nejbližší dosud nezpracovaný vrchol a relaxuje jeho hrany. Funguje jen pro nezáporné váhy – záporná hrana by mohla zlevnit cestu k už uzavřenému vrcholu. Pro záporné váhy slouží Bellman–Ford.",
        "cv": "Začneme vzdáleností 0 u A a ∞ u ostatních. Opakovaně vybereme nejbližší neuzavřený vrchol a relaxujeme jeho hrany (zmenšíme vzdálenost souseda, je-li cesta přes daný vrchol kratší). Po zpracování všech vrcholů obsahuje tabulka nejkratší vzdálenosti z A."
      },
      "Algoritmy pro hledání minimálních koster": {
        "ex": "Kruskal třídí hrany podle váhy a přidává nejlevnější, které nevytvoří cyklus (cyklus hlídá struktura union-find). Prim nechává strom růst z jednoho vrcholu a vždy přidá nejlevnější hranu vedoucí ven. Oba jsou hladové a díky řezovému lemmatu optimální.",
        "cv": "Kruskal: seřadíme hrany vzestupně a bereme je, pokud nevytvoří cyklus, dokud nespojí všechny vrcholy. Prim: od jednoho vrcholu opakovaně přidáme nejlevnější hranu vedoucí mimo dosavadní strom. Oba dají kostru se stejnou minimální celkovou váhou."
      }
    },
    "Stromové datové struktury": {
      "Binární vyhledávací stromy": {
        "ex": "Při vkládání 5,3,8,1,4 jde 3 vlevo od 5, 8 vpravo, 1 vlevo od 3, 4 vpravo od 3. Hledání 4: 5 (menší → vlevo), 3 (větší → vpravo), nález. Vzestupná posloupnost 1,2,3,4,5 vkládá každý prvek vpravo ⇒ strom degeneruje na seznam.",
        "cv": "7 je kořen; 3 jde vlevo (menší), 9 vpravo (větší); 1 vlevo od 3; 5 vpravo od 3; 8 vlevo od 9. Hledání klíče 5: 7 (5 je menší → vlevo), 3 (5 je větší → vpravo), 5 – nález po 3 porovnáních."
      },
      "B-stromy": {
        "ex": "Index nad milionem záznamů má v B-stromu hloubku jen 3–4, protože každý uzel má mnoho potomků (vysoký větvící faktor). Jeden uzel odpovídá diskovému bloku, takže nalezení záznamu vyžaduje jen 3–4 pomalá čtení z disku.",
        "cv": "Uzel pojme nejvýše 2 klíče. Vložením 1, 2 vznikne uzel [1,2]; vložení 3 ho přeplní, prostřední klíč 2 vystoupí jako nový kořen a vzniknou listy [1] a [3]. Stejně se uzel rozštěpí při každém dalším přeplnění – strom roste vyváženě od kořene."
      },
      "Červeno-černé stromy": {
        "ex": "Poruší-li nový červený uzel pravidlo „dva červené uzly nesmějí být za sebou“, strom situaci napraví: přebarví uzly, případně provede jednu rotaci. Tím se obnoví barevné invarianty a strom zůstane vyvážený, aniž by se přebudovával.",
        "cv": "Pravidla žádají, aby každá cesta od uzlu k listům obsahovala stejný počet černých uzlů a aby se červené uzly neopakovaly za sebou. Nejkratší cesta může být celá černá, nejdelší střídá černá–červená – má tedy nejvýše dvojnásobek uzlů, proto je hloubka logaritmická."
      },
      "Haldy": {
        "ex": "V min-haldě je každý rodič menší nebo roven svým potomkům, takže nejmenší prvek je vždy v kořeni a získáme ho v konstantním čase. Pole [1,3,2,7,4] tuto vlastnost splňuje: 1≤3, 1≤2, 3≤7, 3≤4.",
        "cv": "Stavbou haldy z [9,4,7,1,−2,6,5] vznikne min-halda s kořenem −2. Extract-min: vyjmeme −2, na kořen dáme poslední prvek a probubláme dolů ⇒ kořenem se stane 1. Druhý extract-min vyjme 1 a po probublání je kořenem 4. Každá operace trvá O(log n)."
      },
      "Související operace a jejich složitost": {
        "ex": "Ve vyváženém BST je hloubka O(log n), takže hledání projde nejvýše log n uzlů. Zvrhne-li se BST na seznam (například vkládáním seřazených dat), je hloubka n a hledání trvá O(n) – proto se používají samovyvažující stromy.",
        "cv": "Vyvážený BST: search, insert i delete vše O(log n). Nevyvážený BST: tytéž operace v nejhorším případě O(n). Halda: nalezení minima O(1), insert a extract-min O(log n), hledání obecného prvku O(n)."
      },
      "Typické implementace a příklady použití": {
        "ex": "Vyvážené stromy udržují prvky seřazené a umožňují rychlé hledání – proto implementují množiny a slovníky (std::map). B-stromy minimalizují diskové přístupy ⇒ databázové indexy. Halda dává rychlý přístup k minimu ⇒ prioritní fronta v Dijkstrově algoritmu.",
        "cv": "Slovník (mapa klíč→hodnota): vyvážený binární vyhledávací strom, nebo hašovací tabulka. Prioritní fronta: halda – rychlé vložení i odebrání prvku s nejvyšší prioritou. Databázový index: B-strom, protože minimalizuje počet čtení diskových bloků."
      }
    },
    "Návrh algoritmů": {
      "Metoda rozděl a panuj": {
        "ex": "Binární vyhledávání porovná hledaný prvek s prostředním: je-li menší, hledá v levé polovině, jinak v pravé. Každý krok zahodí polovinu dat, takže po log₂n krocích zbude jediný prvek – odtud složitost O(log n).",
        "cv": "Rozdělení: pole se rozpůlí na dvě poloviny. Řešení: každá polovina se rekurzivně seřadí mergesortem. Sloučení: dvě seřazené poloviny se slijí v lineárním čase. Rekurence T(n)=2·T(n/2)+O(n) dává složitost O(n log n)."
      },
      "Výhody a nevýhody použití rekurze": {
        "ex": "Rekurzivní fib(n)=fib(n−1)+fib(n−2) volá tytéž podproblémy znovu a znovu – počet volání roste exponenciálně. Memoizace (uložení už spočtených hodnot) nebo převod na iteraci tuto duplicitu odstraní.",
        "cv": "Funkce: fact(n) = (n=0) ? 1 : n·fact(n−1). Každé volání zabere jeden rámec na zásobníku; při velmi velkém n (řádově desetitisíce volání podle limitu zásobníku) zásobník přeteče a program spadne. Bezpečnější je iterativní verze."
      },
      "Odstranění rekurze": {
        "ex": "Koncová rekurze, kde je rekurzivní volání poslední operací, se převede na prostý cyklus. Obecná rekurze (například průchod stromem do obou potomků) se nahradí explicitním zásobníkem, do nějž ukládáme, co ještě zbývá zpracovat.",
        "cv": "Iterativně: výsledek = 1; pro i od 2 do n opakuj výsledek = výsledek·i; vrať výsledek. Ušetří se režie volání funkcí a spotřeba zásobníku – iterativní verze používá konstantní paměť a nehrozí přetečení zásobníku."
      },
      "Řadicí rekurzivní algoritmy": {
        "ex": "Mergesort dělí pole vždy přesně na poloviny, proto má spolehlivě O(n log n). Quicksort dělí podle pivotu; vyjde-li pivot vždy krajní (například na seřazeném poli s prvním prvkem jako pivotem), jsou části velikosti 0 a n−1 ⇒ O(n²).",
        "cv": "Mergesort: [5,2,8,1,9,3] → [5,2,8] a [1,9,3] → rekurzivně seřadit na [2,5,8] a [1,3,9] → sloučit na [1,2,3,5,8,9]. Quicksort s pivotem 5: menší [2,1,3], větší [8,9] → rekurzivně [1,2,3] a [8,9] → výsledek [1,2,3,5,8,9]."
      },
      "Vztah rekurze a matematické indukce": {
        "ex": "Rekurzivní algoritmus i indukční důkaz mají stejnou kostru: ukončovací podmínka odpovídá bázi indukce, rekurzivní volání na menším vstupu indukčnímu kroku. Protože se velikost problému s každým voláním zmenšuje, indukce zaručuje i konečnost výpočtu.",
        "cv": "Báze: sum(0)=0 = 0·1/2 ✓. Indukční krok: předpokládejme sum(n−1)=(n−1)·n/2. Pak sum(n)=n+sum(n−1)=n+(n−1)·n/2 = (2n+n²−n)/2 = (n²+n)/2 = n(n+1)/2. ✓ Tvrzení platí pro všechna n."
      }
    },
    "Funkcionální programování": {
      "Funkcionální programovací paradigma": {
        "ex": "Funkce délka seznamu je definovaná jen pomocí vstupu a rekurze, bez měnitelné proměnné. Díky referenční transparentnosti vrátí pro stejný vstup vždy stejný výsledek – snáz se uvažuje o správnosti a výpočet lze paralelizovat.",
        "cv": "Imperativně: zavedeme proměnnou součet=0 a cyklem ji v každém kroku měníme (součet = součet + prvek) – stav se mění. Funkcionálně: foldr (+) 0 seznam – fold rekurzivně sloučí prvky do jediné hodnoty bez měnitelné proměnné a bez cyklu."
      },
      "Princip výpočtu a redukční krok": {
        "ex": "Redex je část výrazu, kterou lze přepsat. (λx. x+1) 4 má redex celé aplikace: dosadíme 4 za x a vznikne 4+1; to je další redex, jehož přepisem získáme 5 – normální tvar, který je výsledkem.",
        "cv": "double (double 3) → double (3+3) → double 6 → 6+6 → 12. Každý krok přepíše jeden redex podle definice double x = x+x; po vyčerpání redexů zůstane normální tvar 12."
      },
      "Redukční strategie a jejich vlastnosti": {
        "ex": "fst (3, ⊥) vrací první složku dvojice. Líná strategie vyhodnocuje argument až při potřebě – druhá složka ⊥ se nikdy nevyžádá a výsledek je 3. Striktní strategie vyhodnotí oba argumenty předem, narazí na ⊥ a zacyklí se.",
        "cv": "Vezměme const x y = x a výraz const 5 nekonečnýVýpočet. Líná (normální) strategie druhý argument nikdy nevyhodnotí a vrátí 5. Striktní (aplikační) strategie nejdřív vyhodnocuje oba argumenty – druhý se nedopočítá a výpočet se zacyklí."
      },
      "Funkce vyšších řádů a jejich využití": {
        "ex": "map aplikuje funkci na všechny prvky: map (*2) [1,2,3] = [2,4,6]. filter ponechá prvky splňující podmínku: filter even [1..6] = [2,4,6]. foldr sloučí prvky jednou operací: foldr (+) 0 [1,2,3] = 1+(2+(3+0)) = 6.",
        "cv": "foldr (+) 0 (map (^2) (filter even [1..10])). filter even [1..10] = [2,4,6,8,10]; map (^2) z toho udělá [4,16,36,64,100]; foldr (+) 0 sečte na výsledek 220."
      },
      "Nepojmenované funkce": {
        "ex": "Krátkou jednorázovou funkci není nutné pojmenovávat – přímo na místě použití se zapíše lambda. Místo definice square x = x·x se ve volání map napíše λx → x·x. Pojem pochází z lambda kalkulu, teoretického základu funkcionálního programování.",
        "cv": "Pojmenovaná funkce inc x = x+1 odpovídá lambda výrazu λx → x+1 (v Haskellu zapsanému jako anonymní funkce). Volání map (λx → x+1) [1,2,3] dá výsledek [2,3,4]."
      },
      "Elementární programování v Haskellu": {
        "ex": "Funkce v Haskellu se definuje rovnicemi s pattern matchingem. length [] = 0 pokrývá prázdný seznam (báze rekurze); length (_:xs) = 1 + length xs zpracuje neprázdný seznam – jednička za hlavu plus délka zbytku.",
        "cv": "sumList [] = 0; sumList (x:xs) = x + sumList xs. První rovnice (báze) řeší prázdný seznam, druhá vezme hlavu x a přičte k ní rekurzivně spočtený součet zbytku xs."
      }
    },
    "Regulární jazyky": {
      "Chomského hierarchie formálních jazyků": {
        "ex": "Slova nad {a,b} sudé délky pozná konečný automat (stačí pamatovat paritu délky) ⇒ regulární, typ 3. Jazyk aⁿbⁿ vyžaduje počítat a, na to stačí zásobník ⇒ bezkontextový, typ 2. aⁿbⁿcⁿ vyžaduje hlídat tři počty zároveň – zásobník nestačí.",
        "cv": "„Slova obsahující ab“ pozná konečný automat ⇒ regulární, typ 3. aⁿbⁿ vyžaduje porovnat dva počty, na to stačí zásobníkový automat ⇒ bezkontextový, typ 2. aⁿbⁿcⁿ vyžaduje porovnat tři počty – ani zásobníkový automat nestačí, jazyk je až kontextový, typ 1."
      },
      "Regulární jazyky, jejich reprezentace a převody": {
        "ex": "Tři reprezentace jsou ekvivalentní: regulární výraz, pravolineární gramatika a konečný automat popisují přesně tutéž třídu jazyků. Mezi nimi existují algoritmické převody, například z regulárního výrazu na automat Thompsonovou konstrukcí.",
        "cv": "Automat má 3 stavy: q0 (počáteční), q1, q2 (přijímající). Z q0 přes b zpět do q0, přes a do q1. Z q1 přes a zpět do q1, přes b do q2. Z q2 přes a do q1, přes b do q0. Automat přijímá právě slova končící dvojicí „ab“."
      },
      "Varianty konečných automatů": {
        "ex": "Konečný automat má stavy, abecedu, přechodovou funkci, počáteční a přijímající stavy. DKA má pro stav a symbol právě jeden přechod, NKA může mít více, NKA s ε-přechody navíc přechody bez čtení symbolu. Všechny varianty rozpoznávají regulární jazyky.",
        "cv": "Stavy odpovídají zbytku po dělení 3: s0, s1, s2 (s0 je počáteční i přijímající). Přečtení bitu b znamená nové číslo 2·staré+b: ze s0 přes 0→s0, 1→s1; ze s1 přes 0→s2, 1→s0; ze s2 přes 0→s1, 1→s2. Slovo je přijato, skončí-li ve stavu s0."
      },
      "Nedeterminismus a determinizace automatů": {
        "ex": "NKA pro slova končící na „ab“ má 3 stavy a může „uhodnout“, kde začíná koncové ab. Podmnožinová konstrukce vytvoří DKA, jehož stavy jsou množiny stavů NKA – tedy které stavy NKA mohou být po přečtení daného prefixu aktivní.",
        "cv": "Stav výsledného DKA je množina současně dosažitelných stavů NKA. Začneme množinou s počátečním stavem; pro každý symbol spočítáme množinu nástupců a postup opakujeme, dokud vznikají nové množiny. DKA přijímá, obsahuje-li množina přijímající stav NKA; počet stavů může vzrůst exponenciálně."
      },
      "Uzávěrové vlastnosti regulárních jazyků": {
        "ex": "Uzavřenost se dokazuje konstrukcí: pro průnik se sestrojí součinový automat, pro doplněk se prohodí přijímající a nepřijímající stavy DKA, pro sjednocení a zřetězení se automaty pospojují. Výsledkem je vždy opět konečný automat, jazyk je tedy regulární.",
        "cv": "Předpokládejme, že L=aⁿbⁿ je regulární s konstantou p z pumping lemmatu. Vezmeme slovo aᵖbᵖ. Lemma rozdělí slovo na xyz, kde y leží v prvních p znacích, tedy y=aᵏ s k≥1. Napumpováním vznikne aᵖ⁺ᵏbᵖ, kde počty a a b nesouhlasí – slovo do L nepatří. Spor ⇒ L není regulární."
      }
    },
    "Rozhodnutelnost": {
      "Pojem algoritmického problému a algoritmu": {
        "ex": "„Je dané číslo prvočíslo?“ má vstup (číslo) a odpověď ANO/NE, jde tedy o rozhodovací problém. Algoritmus zkusmého dělení postupně zkouší dělitele do odmocniny – po konečném počtu kroků jednoznačně odpoví, splňuje tedy definici algoritmu.",
        "cv": "Rozhodovací problém: vstupem je seznam, otázka „obsahuje dva stejné prvky?“, odpověď ANO/NE. Algoritmus: prvky vkládej postupně do množiny; narazíš-li na prvek, který už v ní je, vrať ANO, jinak po projití celého seznamu vrať NE. Skončí po konečném počtu kroků."
      },
      "Turingův stroj": {
        "ex": "Stroj pro aⁿbⁿ střídavě škrtá jedno a a jedno b a vrací hlavu zpět. V konečném řízení si pamatuje jen fázi (hledám a / hledám b), nikoli kolik jich už zpracoval – počty „pamatuje“ samotná páska.",
        "cv": "Stroj prochází vstup aⁿ a každé a zpracuje tak, že ho označí a na konec pásky dopíše dvě nová a. Postup opakuje pro každé původní a; po vyčerpání vstupu obsahuje páska a²ⁿ. Klíčové je systematicky střídat čtení vlevo a zápis vpravo."
      },
      "Problém zastavení": {
        "ex": "Kdyby existoval univerzální „detektor zastavení“ H, šel by z něj sestrojit program D, který se zacyklí právě tehdy, když H tvrdí, že D skončí. Předpoklad existence H tedy vede ke sporu – H existovat nemůže.",
        "cv": "Předpokládejme program H(p,v), jenž řekne, zda p na vstupu v skončí. Sestrojíme D(p): zavolá H(p,p); řekne-li H „skončí“, D se zacyklí, jinak skončí. Spustíme D(D): D skončí ⇒ H řekl „skončí“ ⇒ D se měl zacyklit, a naopak. Spor ⇒ H nemůže existovat."
      },
      "Rozhodnutelnost a částečná rozhodnutelnost": {
        "ex": "Problém zastavení je částečně rozhodnutelný: program odsimulujeme – skončí-li, odpovíme ANO. Záporné případy ale poznat neumíme: pokud program běží dál, nikdy nevíme, zda se nezastaví později – simulace u nich neskončí.",
        "cv": "Rozhodnutelný problém má algoritmus, který pro každý vstup vždy skončí správnou odpovědí. Částečně rozhodnutelný má algoritmus, jenž skončí s ANO na kladných vstupech, na záporných se může zacyklit. Věta o doplňku: problém je rozhodnutelný právě tehdy, když jsou částečně rozhodnutelné on i jeho doplněk."
      },
      "Nerozhodnutelnost": {
        "ex": "Otázka ekvivalence dvou programů je nerozhodnutelná. Nejde o to, že by počítač byl pomalý – žádný algoritmus, ani s libovolným časem a pamětí, ji nevyřeší pro všechny vstupy. Je to principiální mez výpočtu.",
        "cv": "Tři příklady: problém zastavení (zda program skončí), ekvivalence dvou programů (zda počítají tutéž funkci) a zda program někdy vypíše dané slovo. Nerozhodnutelnost nesouvisí s rychlostí: rychlejší počítač zkrátí čas, ale neexistujícího algoritmu se nedobere."
      },
      "Metoda redukce": {
        "ex": "Z libovolného programu P a vstupu v sestrojíme program, který odsimuluje P a po jeho skončení vypíše „HELLO“. Ten vypíše HELLO právě tehdy, když P skončí – řešení otázky „vypíše program HELLO?“ by tedy vyřešilo i problém zastavení.",
        "cv": "Z programu P a vstupu v sestrojíme program Q, jenž odsimuluje P na v a teprve po jeho skončení použije nějakou proměnnou. Q proměnnou použije právě tehdy, když P skončí. Kdyby šlo rozhodnout „použije Q proměnnou?“, vyřešili bychom i problém zastavení – ten je ale nerozhodnutelný, takže i nový problém je nerozhodnutelný."
      },
      "Diagonalizace": {
        "ex": "Předpokládáme, že lze všechna reálná čísla z (0,1) vypsat do seznamu. Zkonstruujeme číslo lišící se od n-tého čísla seznamu na n-té číslici. To se liší od každého čísla v seznamu, takže v seznamu být nemůže – seznam tedy nebyl úplný.",
        "cv": "Předpokládejme seznam všech nekonečných posloupností nul a jedniček s₁, s₂, s₃, … Sestrojíme posloupnost t, jejíž n-tý prvek je opakem n-tého prvku posloupnosti sₙ. Pak se t liší od každé sₙ aspoň na n-té pozici, takže v seznamu chybí – posloupností je nespočetně mnoho."
      }
    },
    "Složitost": {
      "Složitost algoritmu versus složitost problému": {
        "ex": "Bublinkové řazení dělá až n² porovnání ⇒ O(n²); mergesort O(n log n). Složitost problému řazení porovnáváním je dolním odhadem Ω(n log n) – žádný algoritmus založený na porovnávání nemůže být asymptoticky rychlejší.",
        "cv": "Naivní algoritmus násobení matic n×n počítá n² prvků, každý jako součet n součinů ⇒ O(n³). To je složitost konkrétního algoritmu (horní mez problému). Složitost problému je složitost nejlepšího možného algoritmu – ta je nižší a její přesná hodnota není známa."
      },
      "Složitostní třídy (P, NP, PSPACE)": {
        "ex": "Nejkratší cesta se najde v polynomiálním čase ⇒ třída P. U Sudoku se navržené řešení snadno (polynomiálně) ověří, i když ho těžko hledáme ⇒ NP. Vyhodnocení kvantifikované formule potřebuje polynomiální prostor ⇒ PSPACE.",
        "cv": "Třídění: existuje algoritmus O(n log n), běží v polynomiálním čase ⇒ P (a tím i NP). SAT: navržené ohodnocení proměnných se ověří dosazením v polynomiálním čase ⇒ NP. Hledání nejkratší cesty: Dijkstrův algoritmus běží polynomiálně ⇒ P."
      },
      "Vztahy mezi třídami a příklady problémů": {
        "ex": "Každý problém řešitelný v polynomiálním čase lze v polynomiálním čase i ověřit, takže P ⊆ NP; každý ověřitelný v polynomiálním čase lze řešit v polynomiálním prostoru, takže NP ⊆ PSPACE. Zda jsou inkluze ostré, není známo.",
        "cv": "Diagram: tři vnořené oblasti, P uvnitř NP a NP uvnitř PSPACE. Do P patří třídění a hledání nejkratší cesty, do NP problém SAT a barvení grafu, do PSPACE vyhodnocování kvantifikovaných booleovských formulí. Otázka P = NP je nejznámějším otevřeným problémem oboru."
      },
      "Těžkost a úplnost problému": {
        "ex": "SAT je v NP (ohodnocení se ověří dosazením) a zároveň NP-těžký – každý problém z NP se na něj polynomiálně redukuje (Cookova–Levinova věta). Splňuje obě podmínky, je tedy NP-úplný: reprezentativní nejtěžší zástupce třídy NP.",
        "cv": "NP-těžký problém je takový, na nějž lze polynomiálně redukovat každý problém z NP – sám v NP být nemusí. NP-úplný je problém, který je NP-těžký a navíc leží v NP. Příklad NP-úplného: SAT. Příklad NP-těžkého (zřejmě mimo NP): problém zastavení Turingova stroje."
      },
      "Polynomiální redukce problémů": {
        "ex": "Nezávislá množina v grafu G odpovídá klice v doplňkovém grafu Ḡ. Převod G na Ḡ je polynomiální, takže řešení klikového problému dává i řešení problému nezávislé množiny – problémy jsou stejně těžké.",
        "cv": "Redukce 3-SAT na klikový problém: pro formuli s k klauzulemi sestrojíme graf, kde vrcholy jsou literály klauzulí a hranou spojíme literály z různých klauzulí, které si neodporují. Formule je splnitelná právě tehdy, když má graf kliku velikosti k. Převod je polynomiální."
      },
      "NP-úplné úlohy": {
        "ex": "SAT je NP-úplný (Cookova–Levinova věta); barvení grafu, problém obchodního cestujícího i problém batohu se na něj dají polynomiálně převést. Kdyby pro jediný z nich existoval polynomiální algoritmus, převedl by se na všechny ostatní – platilo by P = NP.",
        "cv": "SAT: vstup je booleovská formule, otázka „existuje splňující ohodnocení?“, certifikátem je ohodnocení (ověří se dosazením). Barvení grafu: vstup graf a počet k, otázka „lze obarvit k barvami?“, certifikát je obarvení. Problém batohu: vstup předměty s váhami a hodnotami, certifikát je výběr předmětů."
      }
    },
    "Strukturování a řízení běhu programu": {
      "Podprogramy": {
        "ex": "Funkce obsah(a,b) odstraní duplicitu: výpočet a*b je na jednom místě a volající předává jen různé argumenty. Výhoda je údržba i čitelnost: změna pravidla výpočtu se provede jednou a všechny volání ji používají automaticky.",
        "cv": "Rozdělení může být prumer(pole), který sečte prvky a vydělí počtem, a smerodatnaOdchylka(pole), která nejprve zavolá prumer(pole), pak spočítá průměr čtverců odchylek a odmocninu. Volání: m=prumer(data); s=smerodatnaOdchylka(data). Každá funkce má jednu odpovědnost."
      },
      "Rozsahy jmen": {
        "ex": "Rozsah jména určuje, kde je identifikátor viditelný. Lokální proměnná i uvnitř funkce nebo bloku překryje případné vnější jméno jen v tomto rozsahu a po opuštění bloku zaniká. Proto stejně pojmenované proměnné v různých funkcích nekolidují.",
        "cv": "Například globální x=10 a uvnitř funkce lokální x=3. Příkaz print(x) uvnitř funkce vypíše 3, protože lokální jméno překrývá globální. Příkaz print(x) mimo funkci vypíše 10. Po skončení funkce lokální x neexistuje a globální hodnota zůstává nezměněná."
      },
      "Předávání hodnot": {
        "ex": "Při předání hodnotou funkce pracuje s kopií, takže změna parametru typu číslo neovlivní proměnnou volajícího. Při předání odkazem či ukazatelem funkce dostane přístup k původnímu objektu; změna prvku pole se projeví venku. Rozdíl je zásadní pro mutaci dat a efektivitu.",
        "cv": "Swap hodnotou dostane kopie a po návratu jsou původní proměnné stejné. Při předání odkazem nebo ukazatelem lze provést tmp=*a; *a=*b; *b=tmp, takže se mění paměť volajícího. Proto v C typicky píšeme swap(int *a, int *b) a voláme swap(&x,&y)."
      },
      "Výjimky": {
        "ex": "Výjimka oddělí běžný tok programu od ošetření chyby. Rizikový kód je v try, konkrétní catch zachytí očekávaný typ chyby a provede náhradní postup nebo hlášení. Program tak nemusí po dělení nulou či chybě souboru spadnout bez kontroly.",
        "cv": "Nejdřív mají být konkrétní výjimky, potom obecnější. Pseudokód: try { n=parseInt(text); vysledek=a/n; } catch (FormatException e) { ohlas neplatné číslo; } catch (ArithmeticException e) { ohlas dělení nulou; } catch (Exception e) { obecná chyba; }. Obecný catch na začátku by pohltil všechny specializované případy."
      },
      "Objektově orientované programování": {
        "ex": "Třída je předpis společných atributů a metod, objekt je konkrétní instance. BankovníÚčet definuje zůstatek a operace vložit/vybrat; účet Alice a účet Boba jsou dva objekty s odlišným stavem. Metody pracují nad stavem příslušné instance.",
        "cv": "Třída Auto může mít atributy znacka, spz, rychlost a metody zrychli(delta), zabrzdi(delta), popis(). Instance a1=Auto('Skoda','1A2',0) a a2=Auto('Toyota','2B3',50) sdílejí stejný kód metod, ale mají vlastní hodnoty atributů."
      },
      "Zapouzdření": {
        "ex": "Zapouzdření skrývá reprezentaci objektu a vynucuje invarianty přes veřejné metody. Pokud je zůstatek private, cizí kód nemůže nastavit zápornou částku přímo; musí použít vybrat(), která kontroluje limit. Objekt tak chrání svou konzistenci.",
        "cv": "Veřejný atribut vek nahraď soukromým _vek. Getter getVek() hodnotu vrací, setter setVek(v) nejprve ověří v>=0 a rozumnou horní mez, jinak odmítne změnu. Klient používá metody, takže třída může hlídat platnost dat a později změnit interní reprezentaci bez změny rozhraní."
      },
      "Dědičnost": {
        "ex": "Dědičnost modeluje vztah „je druhem“. Student je Osoba, proto přebírá jméno a věk a specializuje se atributem obor nebo metodou zapišPředmět. Společné chování se neduplikuje v potomcích, ale zůstává v předkovi.",
        "cv": "Předek Zaměstnanec: jmeno, mzda, metoda vypocetVyplaty(). Manažer dědí společné atributy a přidá tym nebo bonusZaTym. Programátor dědí totéž a přidá jazyk nebo senioritu. Společné vlastnosti jsou v předkovi, specializované jen v konkrétních potomcích."
      },
      "Polymorfismus": {
        "ex": "Polymorfismus dovoluje zacházet s různými objekty přes společné rozhraní. Pole Tvar může obsahovat Kruh i Čtverec; volání vykresli() se dynamicky naváže na skutečný typ objektu. Klient tedy nemusí psát podmínky podle typu každého tvaru.",
        "cv": "Rozhraní Tvar definuje obvod(). Třída Kruh vrací 2πr, třída Obdelnik vrací 2*(a+b). Seznam [Kruh(1), Obdelnik(2,3)] lze projít cyklem a pro každý prvek zavolat t.obvod(). Volající zná jen rozhraní Tvar, konkrétní výpočet řeší implementace dané třídy."
      }
    },
    "Principy nízkoúrovňového programování": {
      "Paměťový model programu": {
        "ex": "Zásobník slouží pro aktivační záznamy funkcí a lokální automatické proměnné; po návratu z funkce je paměť neplatná. Halda obsahuje dynamicky alokované bloky řízené malloc/free a přežije návrat z funkce. Statická data obsahují globální a static proměnné s životností celého programu.",
        "cv": "V C programu bude globální int g ve statických datech, lokální int x uvnitř funkce na zásobníku, blok vrácený malloc na haldě a pointer p jako lokální proměnná typicky na zásobníku. Samotný p je adresa, ale paměť, na kterou ukazuje, je na haldě."
      },
      "Správa paměti a dynamická alokace": {
        "ex": "malloc vrací blok, který program musí přesně jednou uvolnit pomocí free. Chybějící free způsobí únik paměti, opakovaný free nebo použití pointeru po free vede k nedefinovanému chování. Po free je vhodné pointer nepoužívat, případně ho nastavit na NULL.",
        "cv": "Kód: int *a = malloc(n * sizeof *a); if (!a) řeš chybu; for (i=0;i<n;i++) a[i]=i; ...; free(a); a=NULL;. Únik by vznikl při návratu z funkce po malloc před free, například v chybové větvi. Každá větev po úspěšné alokaci musí dojít k uvolnění."
      },
      "Práce s uživatelskými datovými strukturami": {
        "ex": "Uzel seznamu může mít tvar struct Node { int value; struct Node *next; }. Vložení na začátek alokuje nový uzel, nastaví jeho next na původní hlavu a hlavu přesune na nový uzel. Pro uvolnění je nutné projít celý seznam a free zavolat na každý uzel.",
        "cv": "insert_front(&head,x): alokuj uzel, nastav value=x, next=head, potom head=novy. print(head): dokud p!=NULL, vypiš p->value a přejdi p=p->next. free_list(head): ulož next=p->next, free(p), p=next. Bez posledního průchodu by každý alokovaný uzel zůstal na haldě jako únik."
      },
      "Nízkoúrovňová práce s pamětí": {
        "ex": "C nekontroluje meze pole za běhu. Zápis a[10] u pole int a[10] míří za poslední platný prvek a může přepsat jinou lokální proměnnou, návratovou adresu nebo metadata haldy. Následek může být pád, tichá chyba dat i zneužitelná zranitelnost.",
        "cv": "Typická chyba je cyklus for (i=0; i<=10; i++) a[i]=0 u pole o 10 prvcích. Oprava je i<10, případně používat velikost předanou jako parametr a důsledně ji kontrolovat. Nebezpečí spočívá v přepisu cizí paměti, který jazyk neodmítne."
      },
      "Ukazatel": {
        "ex": "Ukazatel uchovává adresu objektu. Operátor & adresu získá, operátor * dereferencuje ukazatel a zpřístupní hodnotu na dané adrese. Proto *p=8 po p=&x mění přímo x, ne kopii. Dereferencovat se smí jen platný ukazatel.",
        "cv": "Funkce: void inc(int *p) { if (p) (*p)++; }. Volání: int x=5; inc(&x); po návratu je x=6. &x předá adresu proměnné a funkce přes *p upraví původní paměťové místo."
      },
      "Pole a ukazatelová aritmetika": {
        "ex": "Ve výrazech se jméno pole často převede na ukazatel na první prvek. Výraz a+i ukazuje na i-tý prvek, protože aritmetika ukazatelů škáluje posun velikostí prvku. Proto a[i] je definováno jako *(a+i).",
        "cv": "Pro int a[5] a int *p=a lze psát for (p=a; p<a+5; ++p) printf(\"%d\", *p);. Nepoužívají se indexy, jen porovnání adres v rámci stejného pole a dereference aktuálního ukazatele. Konec je a+5, tedy adresa těsně za posledním prvkem, kterou už nedereferencujeme."
      },
      "Způsoby ladění programu (debugging)": {
        "ex": "Debugger umožní zastavit program na breakpointu, krokovat instrukce/řádky a sledovat hodnoty proměnných. Když výsledek začne být špatný po konkrétní iteraci, zúží se příčina na několik řádků. Valgrind nebo sanitizery doplní kontrolu paměťových chyb, které běžný debugger nemusí hned ukázat.",
        "cv": "Nejprve bych vytvořil minimální vstup, kde chyba nastane. Breakpoint dám před cyklus, sleduji proměnné řídící index, mez a akumulátor. Krokováním porovnávám očekávaný a skutečný stav po každé iteraci. Jakmile se poprvé liší, ověřím podmínku cyklu, aktualizaci indexu a zápis do datové struktury."
      }
    },
    "Architektury": {
      "Číselné soustavy a vztahy mezi nimi": {
        "ex": "13 děleno dvěma dává zbytky 1,0,1,1 čtené odzadu, tedy 1101₂. Šestnáctkově je 13 jedna cifra D. Zpětně 1101₂ = 1·8+1·4+0·2+1 = 13 a D₁₆ = 13.",
        "cv": "45 dělením dvěma: zbytky 1,0,1,1,0,1 čtené odzadu dávají 101101₂. Do hexu seskupíme 0010 1101, tedy 2D₁₆. Kontrola: 2·16+13=45 a 101101₂ = 32+8+4+1=45."
      },
      "Zobrazení celého čísla v počítači a aritmetika": {
        "ex": "V doplňkovém kódu dostaneme −5 tak, že 00000101 invertujeme na 11111010 a přičteme 1: 11111011. Součet s +5 je 11111011 + 00000101 = 1 00000000; přenos mimo 8 bitů se zahodí a výsledek je nula.",
        "cv": "+12 je 00001100, inverze 11110011, plus 1 dává 11110100, tedy −12 v 8 bitech. Přetečení při sčítání kladných nastane, když výsledek přesáhne 127, například 01111111 + 00000001 = 10000000, což má znaménkový bit 1 a interpretuje se jako −128."
      },
      "Kódy (vnitřní, vnější, detekční a opravné)": {
        "ex": "Paritní bit doplní počet jedniček na sudý nebo lichý. Jedna změna bitu paritu převrátí a chyba se odhalí. Dvě změny ji ale mohou zachovat. Hammingův kód používá více kontrolních bitů, jejichž syndrom ukáže pozici jedné chybné cifry.",
        "cv": "Slovo 1011 má tři jedničky. Pro sudou paritu doplníme paritní bit 1, aby celkový počet jedniček byl 4; vznikne například 10111 podle zvolené pozice parity. Parita neodhalí sudý počet chyb, například překlopení dvou datových bitů, protože celková parita zůstane sudá."
      },
      "Obvody a paměti (parametry, architektura)": {
        "ex": "Kombinační obvod nemá paměť; výstup sčítačky je funkcí aktuálních vstupů. Sekvenční obvod obsahuje stav, typicky klopné obvody, takže výstup závisí i na minulosti. Registr je sada klopných obvodů uchovávající více bitů.",
        "cv": "Poloviční sčítačka má vstupy A,B. Tabulka: 00→S=0,C=0; 01→S=1,C=0; 10→S=1,C=0; 11→S=0,C=1. Součet S je XOR(A,B), přenos C je AND(A,B). Obvod tedy tvoří jedna brána XOR a jedna brána AND."
      },
      "Procesor, programování, mikroprogramování": {
        "ex": "V cyklu fetch-decode-execute procesor podle PC načte instrukci do instrukčního registru, zvýší PC nebo připraví skok, dekodér určí operaci a operandy a výkonná část provede ALU operaci, přístup do paměti nebo změnu řízení. Mikroprogramovaný řadič rozkládá složité instrukce na mikrooperace.",
        "cv": "Fetch: PC se pošle do paměti, načtená instrukce jde do IR, PC se posune na další instrukci. Decode: řadič rozpozná opcode a adresovací režim, připraví registry a řídicí signály. Execute: ALU počítá, paměť čte/zapisuje nebo se mění PC při skoku; výsledek se uloží do registru nebo paměti."
      },
      "Architektury RISC/CISC a vyrovnávací paměti": {
        "ex": "RISC preferuje jednoduché instrukce pevné délky, mnoho registrů a load/store přístup k paměti. CISC nabízí složitější instrukce a adresovací režimy, často proměnné délky. Cache využívá časovou a prostorovou lokalitu: nedávno či sousedně použitá data se pravděpodobně použijí znovu.",
        "cv": "RISC: jednodušší dekódování, snadnější pipeline, více práce pro překladač. CISC: hustší instrukční kód, složitější dekódování, instrukce mohou dělat více práce. Cache funguje, protože programy opakovaně sahají na stejná data a instrukce a na data blízko sebe; proto malá rychlá paměť významně snižuje průměrnou latenci."
      }
    },
    "Databáze": {
      "Relační model dat": {
        "ex": "Relace je množina n-tic stejného schématu. STUDENT(id,jméno,ročník) má atributy se svými doménami a každý řádek je jedna n-tice. Pořadí řádků ani sloupců není podstatou relace; důležité jsou hodnoty atributů a integritní omezení.",
        "cv": "KNIHA(isbn: text, nazev: text, autor: text, rok: celé číslo, stav: {volná,půjčená}) je relace, protože všechny řádky mají stejné atributy a hodnoty pocházejí z určených domén. Každý řádek reprezentuje jednu knihu nebo jeden exemplář podle zvoleného modelu."
      },
      "Relační schéma": {
        "ex": "Schéma popisuje strukturu a typy: KNIHA(ISBN:text, název:text, rok:int). Instance relace je aktuální obsah tabulky, který se mění vložením či smazáním řádků. Schéma je stabilnější kontrakt, podle něhož databáze kontroluje data.",
        "cv": "ZAMĚSTNANEC(id:int, jmeno:text, prijmeni:text, email:text, datum_nastupu:date, plat:decimal, id_odd:int). id může být primární klíč, email unikátní, id_odd cizí klíč na oddělení. Datové typy určují domény povolených hodnot."
      },
      "Klíče relačních schémat": {
        "ex": "Kandidátní klíč minimálně jednoznačně identifikuje řádek. Primární klíč je vybraný kandidátní klíč používaný jako hlavní identifikátor. Cizí klíč je atribut nebo sada atributů odkazující na klíč jiné relace a vynucuje referenční integritu.",
        "cv": "ZÁKAZNÍK(id_zak, jmeno, email) má primární klíč id_zak. OBJEDNÁVKA(id_obj, datum, id_zak, castka) má primární klíč id_obj. Atribut OBJEDNÁVKA.id_zak je cizí klíč na ZÁKAZNÍK(id_zak), takže každá objednávka patří existujícímu zákazníkovi."
      },
      "Relační algebra (projekce, selekce, agregace, přejmenování)": {
        "ex": "Selekce filtruje řádky podle podmínky, projekce vybírá atributy, přejmenování mění názvy atributů nebo relací a agregace shrnuje skupiny. Výraz σ(ročník=1)(STUDENT) zachová celé řádky prváků, π(jméno)(...) z nich vybere jen jména.",
        "cv": "Dotaz „jména studentů 3. ročníku“ zapíšeme π_jméno(σ_ročník=3(STUDENT)). Nejprve selekce omezí relaci na studenty třetího ročníku, potom projekce ponechá pouze atribut jméno."
      },
      "Spojování relací": {
        "ex": "Join kombinuje související řádky z více relací. Přirozené spojení STUDENT ⋈ OBOR přes id_oboru spojí jen dvojice se stejnou hodnotou id_oboru a výsledkem je tabulka obsahující údaje studenta i název oboru.",
        "cv": "Výraz může být ZAMĚSTNANEC ⋈_{ZAMĚSTNANEC.id_odd = ODDĚLENÍ.id_odd} ODDĚLENÍ a následně projekce π_{id,jméno,název}(...). Pokud mají oba atributy stejný název id_odd, lze použít i přirozené spojení po tomto atributu."
      },
      "Funkční závislosti": {
        "ex": "ISBN→název,autor říká, že dvě n-tice se stejným ISBN musí mít stejný název a autora. Název→ISBN obecně neplatí, protože různé knihy mohou mít stejný název. Funkční závislosti popisují sémantiku dat a určují klíče i normalizaci.",
        "cv": "Pro OBJEDNÁVKA(č_obj, datum, č_zák, jméno_zák) typicky platí č_obj→datum,č_zák a č_zák→jméno_zák. Z tranzitivity plyne č_obj→jméno_zák. Klíčem je č_obj, protože určí všechny ostatní atributy; závislost č_zák→jméno_zák ale způsobuje redundanci údajů o zákazníkovi."
      },
      "Normální formy (1NF, 2NF, 3NF, BCNF)": {
        "ex": "1NF vyžaduje atomické hodnoty bez opakujících se seznamů v buňce. Sloupec telefony obsahující více čísel porušuje 1NF; správně vznikne samostatná relace TELEFON(osoba_id,telefon) nebo více řádků, kde každá hodnota je atomická.",
        "cv": "U STUDENT(č_stud,předmět,jméno_uč,kabinet_uč) je přirozený klíč (č_stud,předmět), ale předmět určuje jméno_uč a jméno_uč určuje kabinet_uč. Nejde o 3NF kvůli tranzitivním a částečným závislostem neklíčových atributů. Rozklad na ZÁPIS(č_stud,předmět), VÝUKA(předmět,jméno_uč) a UČITEL(jméno_uč,kabinet_uč) redundanci odstraní."
      },
      "Vztahy mezi normálními formami": {
        "ex": "Normální formy jsou hierarchické: BCNF ⇒ 3NF ⇒ 2NF ⇒ 1NF. Silnější forma splňuje všechny slabší požadavky. Přechod výš obvykle snižuje redundanci a aktualizační anomálie, ale může zvýšit počet spojení v dotazech.",
        "cv": "Pořadí od nejslabší: 1NF požaduje atomické hodnoty; 2NF navíc odstraňuje závislost neklíčových atributů na části složeného klíče; 3NF odstraňuje tranzitivní závislosti neklíčových atributů; BCNF požaduje, aby levá strana každé netriviální funkční závislosti byla nadklíčem."
      },
      "Dekompozice relačních schémat a normalizace": {
        "ex": "Rozklad STUDENT(č_stud,předmět,jméno_uč) na ZÁPIS(č_stud,předmět) a VÝUKA(předmět,jméno_uč) odstraní opakování jména učitele u každého studenta stejného předmětu. Spojením podle předmětu lze původní informaci obnovit, pokud předmět jednoznačně určuje učitele.",
        "cv": "Například R(č_obj,datum,č_zák,jméno_zák) s č_obj→datum,č_zák a č_zák→jméno_zák rozložíme na OBJ(č_obj,datum,č_zák) a ZAK(č_zák,jméno_zák). Průnik je č_zák, který je klíčem ZAK, takže spojení je bezeztrátové. Závislosti č_obj→datum,č_zák a č_zák→jméno_zák jsou zachovány v jednotlivých relacích."
      }
    },
    "SQL, transakce a zpracování dotazů": {
      "Syntaxe a sémantika příkazů": {
        "ex": "SQL dotaz má syntaktickou stránku, tedy povolený tvar příkazu, a sémantiku, tedy jaký výsledek nad databází označuje. SELECT jméno FROM Student WHERE ročník=1 vybírá atribut jméno z řádků splňujících podmínku. SŘBD rozhoduje, jaký fyzický plán pro tento deklarativní požadavek použije.",
        "cv": "SELECT jmeno, email FROM Student WHERE rocnik = 2 ORDER BY prijmeni; Pokud se atributy jmenují s diakritikou, odpovídající varianta je SELECT jméno, email FROM Student WHERE ročník = 2 ORDER BY příjmení. WHERE filtruje druhý ročník a ORDER BY určuje řazení výsledku."
      },
      "Příkazy pro dotazování a aktualizaci dat": {
        "ex": "SELECT nemění data, pouze vrací výsledek. INSERT vloží nový řádek, UPDATE mění existující řádky vybrané podmínkou a DELETE je odstraní. U UPDATE a DELETE je WHERE zásadní; bez něj se operace provede nad celou tabulkou.",
        "cv": "INSERT INTO Student(id,jmeno,rocnik) VALUES (10,'Eva',1); UPDATE Student SET rocnik = rocnik + 1 WHERE id = 10; SELECT * FROM Student WHERE rocnik = 1; DELETE FROM Student WHERE id = 10;. Každý příkaz pokrývá jednu ze základních operací CRUD."
      },
      "Agregační funkce": {
        "ex": "GROUP BY rozdělí řádky do skupin podle oboru a COUNT(*) spočítá počet řádků v každé skupině. HAVING filtruje až hotové skupiny, například HAVING COUNT(*) >= 10. WHERE by filtrovalo jednotlivé řádky před seskupením.",
        "cv": "SELECT id_odd, AVG(plat) AS prumerny_plat FROM Zamestnanec GROUP BY id_odd HAVING COUNT(*) >= 5;. GROUP BY vytvoří skupinu pro každé oddělení, AVG spočítá průměrný plat a HAVING odstraní oddělení s méně než pěti zaměstnanci."
      },
      "Triggery a uložené procedury": {
        "ex": "Trigger je databázová reakce na událost. AFTER INSERT ON Objednavka může pro každý vložený řádek provést UPDATE Sklad SET kusu = kusu - NEW.mnozstvi WHERE id = NEW.id_zbozi. Výhoda je centrální vynucení pravidla, riziko skrytá vedlejší logika.",
        "cv": "Trigger: AFTER DELETE ON Zakaznik FOR EACH ROW INSERT INTO AuditZakaznik(jmeno, smazano_v) VALUES (OLD.jmeno, CURRENT_TIMESTAMP). OLD obsahuje hodnoty mazáného řádku. Auditní tabulka tak zachová informaci, kdo byl smazán a kdy, i když původní řádek zmizel."
      },
      "Definice dat a integritní omezení": {
        "ex": "DDL definuje strukturu a omezení, která SŘBD kontroluje při každé změně. PRIMARY KEY zajišťuje identitu řádku, FOREIGN KEY existenci odkazovaného řádku, NOT NULL povinnou hodnotu a CHECK doménové pravidlo typu věk>=18.",
        "cv": "CREATE TABLE Zamestnanec (id INT PRIMARY KEY, jmeno VARCHAR(100) NOT NULL, plat DECIMAL(10,2) NOT NULL CHECK (plat >= 0), id_odd INT NOT NULL, FOREIGN KEY (id_odd) REFERENCES Oddeleni(id));. Tabulka vynucuje identitu zaměstnance, povinné hodnoty, nezáporný plat a existující oddělení."
      },
      "Transakční zpracování a jeho vlastnosti": {
        "ex": "Převod peněz se nesmí provést jen napůl. BEGIN zahájí transakci, první UPDATE odečte částku, druhý ji připíše. Pokud druhý krok selže, ROLLBACK vrátí i první změnu; teprve COMMIT trvale uloží obě změny.",
        "cv": "BEGIN; UPDATE Ucet SET zustatek=zustatek-:castka WHERE id=:z; UPDATE Ucet SET zustatek=zustatek+:castka WHERE id=:c; COMMIT; při chybě ROLLBACK. Atomicitu zajišťuje commit/rollback, konzistenci omezení a kontrola zůstatku, izolaci zámky nebo MVCC, trvanlivost zápis transakčního logu před potvrzením."
      },
      "Základní principy vyhodnocování dotazů": {
        "ex": "Bez indexu musí databáze porovnat id s každým řádkem, tedy sekvenční průchod. B-stromový index nad id umožní navigaci podle klíče v logaritmickém počtu kroků a potom načtení odpovídajícího řádku. Optimalizátor volí plán podle odhadu selektivity a ceny.",
        "cv": "Index nad příjmení umožní rychle najít rozsah záznamů s hodnotou 'Novák' místo čtení celé tabulky. Cena indexu je dodatečné místo na disku a pomalejší INSERT/UPDATE/DELETE, protože se musí udržovat i indexová struktura. U málo selektivních hodnot nemusí index pomoci."
      }
    },
    "Operační systémy": {
      "Architektura operačního systému a jádra": {
        "ex": "Monolitické jádro drží správu procesů, paměti, souborů i mnoho ovladačů v privilegovaném prostoru, což snižuje režii volání. Mikrojádro nechává v jádře jen minimum a služby běží jako oddělené procesy, takže pád ovladače nemusí shodit celé jádro, ale komunikace přes zprávy stojí výkon.",
        "cv": "Výkon: monolitické jádro bývá rychlejší díky přímým voláním, mikrojádro má režii komunikace. Spolehlivost: mikrojádro lépe izoluje služby, monolitický ovladač může poškodit celé jádro. Rozšiřování: mikrojádro má čistší oddělení služeb, monolitické systémy často používají moduly, ale stále v jádře."
      },
      "Základní režimy procesoru": {
        "ex": "Uživatelský režim zakazuje privilegované instrukce a přímý přístup k zařízením. Systémové volání přepne procesor řízeně do režimu jádra, kde OS ověří oprávnění a provede operaci. Tím se chrání paměť, soubory i hardware před libovolnou aplikací.",
        "cv": "Kdyby aplikace běžely privilegovaně, mohly by číst cizí paměť, přepsat jádro, ovládat zařízení nebo obejít práva. Přechod do jádra spouští systémové volání, přerušení od zařízení nebo výjimka procesoru, například page fault či dělení nulou."
      },
      "Programovací rozhraní a knihovny": {
        "ex": "Knihovna nabízí pohodlné funkce, ale skutečnou službu vykoná jádro přes systémové volání. printf formátuje text v uživatelském prostoru a nakonec použije write pro zápis na deskriptor. API tak odděluje aplikaci od detailů hardwaru a jádra.",
        "cv": "Soubory: open, read, write, close pro práci s deskriptory. Procesy: fork, exec, wait nebo exit pro vytváření a řízení procesů. Paměť: mmap, brk nebo munmap pro mapování a správu adresního prostoru. Každá skupina zpřístupňuje chráněný prostředek přes kontrolované rozhraní."
      },
      "Uživatel, přístupová práva, virtualizace": {
        "ex": "Práva rw-r--r-- znamenají: vlastník může číst a zapisovat, skupina jen číst, ostatní jen číst. Kontejner izoluje procesy, souborový systém a síťové prostředí pomocí mechanismů stejného jádra, zatímco virtuální stroj virtualizuje celý hardware pro hostovaný OS.",
        "cv": "rwxr-x---: vlastník smí číst, zapisovat a spouštět; skupina smí číst a spouštět, ale ne zapisovat; ostatní nemají žádná práva. U adresáře x znamená možnost projít adresářem, r vypsat jména a w měnit jeho obsah."
      },
      "Virtuální paměť, proces a stránkové tabulky": {
        "ex": "Virtuální adresa se rozdělí na číslo stránky a offset. Stránková tabulka procesu převede číslo virtuální stránky na fyzický rámec, offset se zachová. Proto mohou dva procesy používat stejnou virtuální adresu, ale mapovat ji na jiné fyzické místo.",
        "cv": "Procesor vezme číslo virtuální stránky, najde záznam ve stránkové tabulce nebo TLB a získá číslo fyzického rámce; offset připojí beze změny. Pokud záznam není přítomen, vznikne page fault. Jádro stránku načte z disku nebo vytvoří, aktualizuje tabulku a instrukci zopakuje; neplatný přístup skončí chybou procesu."
      },
      "Vlákno, plánování vláken a procesů": {
        "ex": "Proces vlastní adresní prostor a prostředky, vlákna uvnitř procesu sdílejí paměť, ale mají vlastní zásobník a kontext běhu. Plánovač přepíná runnable vlákna na CPU. Round-robin dává každému časové kvantum, čímž zlepšuje odezvu interaktivních úloh.",
        "cv": "Postup: u FCFS se úlohy seřadí podle příchodu; čekání úlohy je součet dob běhu předchozích úloh. U round-robin se simuluje fronta po kvantech, nedokončená úloha jde na konec. Pro každou úlohu spočítej čas dokončení, čekání = dokončení − příchod − vlastní běh, a průměr je součet čekání dělený počtem úloh."
      },
      "Souběžnost, uváznutí, přidělování zdrojů": {
        "ex": "Deadlock vznikne, když vlákno T1 drží zámek A a čeká na B, zatímco T2 drží B a čeká na A. Jsou splněny podmínky vzájemného vyloučení, drž a čekej, nepreemptivnost a cyklické čekání. Jednotné pořadí zamykání, například vždy A potom B, cyklus odstraní.",
        "cv": "Situace: T1 zamkne L1 a pak žádá L2; T2 zamkne L2 a pak žádá L1. Obě čekají navždy. Oprava: stanovit globální pořadí zámků a vynutit, že každé vlákno zamyká nejprve L1 a teprve potom L2, případně použít try-lock s uvolněním a opakováním."
      },
      "Vznik procesu v POSIX a copy-on-write": {
        "ex": "fork vytvoří potomka jako kopii procesu. V rodiči vrátí PID potomka, v potomkovi 0, při chybě −1. Copy-on-write znamená, že stránky se fyzicky nekopírují hned; oba procesy je sdílejí jen pro čtení a kopie vznikne až při zápisu.",
        "cv": "Příklad: pid_t pid=fork(); if (pid==0) { /* potomek */ } else if (pid>0) { /* rodič, pid je PID potomka */ } else { /* chyba */ }. Po fork běží oba procesy od stejného místa programu, ale návratová hodnota jim umožní zvolit odlišnou větev."
      }
    },
    "Souborové systémy": {
      "Blokové zařízení": {
        "ex": "Blokové zařízení neumí alokovat půl bloku jako samostatnou jednotku souborového systému. Soubor 5 KiB při bloku 4 KiB potřebuje ceil(5/4)=2 bloky, tedy 8 KiB prostoru. Nevyužité 3 KiB v posledním bloku jsou vnitřní fragmentace.",
        "cv": "10 KiB při bloku 4 KiB potřebuje ceil(10/4)=3 bloky. Tři bloky mají kapacitu 12 KiB, takže poslední blok obsahuje 2 KiB dat a 2 KiB zůstávají nevyužité. V bajtech je to 2048 B nevyužitého místa."
      },
      "Bloková vrstva a I/O plánovač": {
        "ex": "U rotačního disku dominuje seek, tedy přesun hlavy. SCAN se chová jako výtah: obsluhuje požadavky ve směru pohybu podle pořadí stop, po dosažení konce nebo posledního požadavku změní směr. Tím snižuje chaotické skákání hlavy proti FCFS.",
        "cv": "Seřaď požadavky podle čísla stopy. Od aktuální pozice nejprve vezmi všechny požadavky ve zvoleném směru v rostoucím nebo klesajícím pořadí, poté otoč směr a obsluž zbytek. Celkový pohyb je součet absolutních rozdílů mezi po sobě navštívenými stopami, včetně případného dojezdu na kraj podle varianty SCAN."
      },
      "RAID": {
        "ex": "RAID 0 stripuje data a zvyšuje propustnost, ale nemá redundanci. RAID 1 zrcadlí stejná data, takže kapacita je poloviční, ale jeden disk může selhat. RAID 5 rozkládá data i paritu, využitelná kapacita je N−1 disků a snese výpadek jednoho disku.",
        "cv": "RAID 0: kapacita součet disků, vysoká rychlost, žádná odolnost. RAID 1: kapacita jedné kopie, rychlé čtení, zápis jako na jeden disk, přežije selhání jedné kopie. RAID 5: kapacita (N−1) disků, dobré čtení, zápisy dražší kvůli paritě, přežije výpadek jednoho disku."
      },
      "Šifrování disku": {
        "ex": "Full-disk encryption chrání data v klidu: bez klíče jsou bloky na disku nerozlišitelné od náhodných dat. Po přihlášení se data transparentně dešifrují pro běžící systém, takže nechrání před malwarem aktivním v odemčené relaci.",
        "cv": "Šifrování celého disku chrání celý oddíl včetně dočasných souborů a swapu při ztrátě zařízení, ale po odemčení vidí data celý systém. Šifrování jednotlivých souborů chrání vybrané soubory a může rozlišovat příjemce, ale metadata a nešifrované kopie mohou zůstat jinde."
      },
      "Obyčejné soubory": {
        "ex": "Souborový systém neví, že bajty tvoří třeba obrázek nebo text; to interpretuje aplikace podle formátu. Metadata jsou informace o souboru, nikoli jeho obsah: velikost, vlastník, práva, časy, odkazy na bloky nebo typ položky.",
        "cv": "Metadata zahrnují velikost, vlastníka, skupinu, práva, časy vytvoření/změny/přístupu, počet odkazů a umístění datových bloků. Obsah je vlastní posloupnost bajtů čtená aplikací. Změna obsahu mění data souboru, změna práv mění metadata."
      },
      "Alokace volného místa a fragmentace": {
        "ex": "Souvislá alokace drží bloky za sebou, takže sekvenční i náhodný přístup je rychlý, ale hledá se dostatečně velká mezera. Zřetězená alokace snadno přidává bloky, ale náhodný přístup je pomalý. Indexová alokace drží seznam bloků v indexu, typicky i-uzlu, a lépe podporuje náhodný přístup.",
        "cv": "Souvislá: rychlá, jednoduchá, trpí externí fragmentací a špatně roste. Zřetězená: netrpí požadavkem na souvislé místo, ale náhodný přístup vyžaduje průchod řetězem a poškození odkazu je problém. Indexová: bloky mohou být kdekoliv, náhodný přístup je přes index, ale index zabírá místo a u velkých souborů se musí vrstvit."
      },
      "Adresářová struktura a její reprezentace na disku": {
        "ex": "Adresář mapuje jména na identifikátory souborů, typicky i-uzly. I-uzel nese metadata a adresy datových bloků. Oddělení jména od i-uzlu umožňuje hardlinky: více adresářových položek může odkazovat na stejný soubor.",
        "cv": "Při otevření /home/user/data.txt systém začne v kořenovém adresáři /, najde položku home a její i-uzel, v něm najde adresář user, potom položku data.txt. Z cílového i-uzlu ověří práva, vytvoří otevřený soubor/deskriptor a podle odkazů v i-uzlu načítá datové bloky."
      },
      "Vstup a výstup mapovaný do paměti": {
        "ex": "mmap namapuje soubor do virtuální paměti procesu. První přístup na stránku vyvolá page fault a jádro načte odpovídající blok; další práce je běžné čtení paměti. Zápisy se podle režimu promítají zpět do souboru nebo jen do soukromé kopie.",
        "cv": "Výhody: méně explicitních kopií a systémových volání, jednoduchý přístup jako k poli, sdílení mapovaných stránek mezi procesy. Hodí se pro velké soubory s náhodným přístupem, databázové indexy nebo sdílenou paměť. Nevýhodou je nutnost správně řešit chyby stránkování a synchronizaci zápisů."
      }
    },
    "Sítě": {
      "Modely vrstev (ISO/OSI, TCP/IP)": {
        "ex": "Vrstvení rozděluje komunikaci na úrovně s jasným rozhraním. ISO/OSI je pedagogický sedmivrstvý model, TCP/IP praktický model internetu. Nižší vrstvy řeší fyzický přenos a doručení paketů, vyšší vrstvy transport mezi aplikacemi a aplikační protokoly.",
        "cv": "HTTP patří do aplikační vrstvy a přenáší webové požadavky a odpovědi. TCP patří do transportní vrstvy a poskytuje spolehlivý proud bajtů mezi porty. IP je internetová/síťová vrstva a směruje pakety mezi sítěmi. Ethernet je vrstva síťového rozhraní/linková vrstva a přenáší rámce v lokální síti."
      },
      "Funkcionalita a součinnost vrstev, adresace": {
        "ex": "Zapouzdření znamená, že každá vrstva přidá vlastní hlavičku. Aplikace vytvoří data, TCP přidá porty a sekvenční čísla, IP přidá zdrojovou a cílovou IP adresu, Ethernet přidá MAC adresy v rámci lokálního segmentu. Příjemce hlavičky postupně odstraňuje.",
        "cv": "Aplikační data se předají transportní vrstvě, ta vytvoří segment s porty. Síťová vrstva ho zabalí do IP paketu se zdrojovou a cílovou IP adresou. Linková vrstva vytvoří rámec se zdrojovou a cílovou MAC adresou pro další skok. Fyzická vrstva převede bity rámce na signál."
      },
      "Fyzická vrstva, signály a jejich kódování": {
        "ex": "Fyzická vrstva řeší reprezentaci bitů v médiu. NRZ drží jednu úroveň pro 1 a druhou pro 0, ale dlouhé sekvence stejných bitů ztěžují synchronizaci. Manchester vkládá přechod uprostřed bitového intervalu, takže nese i hodinovou informaci za cenu vyšší šířky pásma.",
        "cv": "U NRZ lze 1011 zakreslit jako vysoká, nízká, vysoká, vysoká úroveň v po sobě jdoucích intervalech. U Manchesteru má každý bit přechod uprostřed; podle zvolené konvence například 1 jako nízká→vysoká a 0 jako vysoká→nízká. Sekvence 1011 tedy obsahuje středové přechody v každém bitu."
      },
      "Řízení přístupu k médiu": {
        "ex": "CSMA/CD: stanice poslouchá médium, vysílá, a pokud detekuje kolizi, přeruší vysílání a opakuje po náhodné prodlevě. U Wi-Fi stanice při vysílání špatně detekuje kolizi, protože vlastní signál přehluší příjem a existují skryté stanice; proto používá CSMA/CA, tedy vyhýbání kolizím.",
        "cv": "CSMA/CD kolize detekuje po zahájení vysílání a řeší je zastavením a backoffem; hodí se pro starý sdílený drátový Ethernet. CSMA/CA se snaží kolizi předejít čekáním, náhodným backoffem a případně RTS/CTS. Bezdrátové sítě nepoužívají spolehlivou detekci kolizí kvůli skrytým uzlům a omezení rádiového vysílače/přijímače."
      },
      "Propojování počítačových sítí": {
        "ex": "Opakovač pracuje na fyzické vrstvě a regeneruje signál bez znalosti rámců. Přepínač pracuje na linkové vrstvě, učí se MAC adresy a posílá rámce na správný port. Směrovač pracuje na síťové vrstvě, rozhoduje podle IP adres a propojuje různé sítě.",
        "cv": "Opakovač: fyzická vrstva, zesílí nebo obnoví bity signálu. Přepínač: linková vrstva, přeposílá Ethernetové rámce podle MAC tabulky v jedné LAN. Směrovač: síťová vrstva, podle směrovací tabulky posílá IP pakety mezi sítěmi a obvykle odděluje broadcast domény."
      },
      "Síťové protokoly, přepínání a směrování, multicast": {
        "ex": "Směrování vybírá cestu mezi sítěmi podle IP prefixů a směrovacích tabulek. Přepínání posílá rámce uvnitř lokální sítě podle MAC adres. Multicast šetří kapacitu: zdroj pošle jeden tok pro skupinovou adresu a síť ho větví jen tam, kde jsou příjemci.",
        "cv": "Unicast je komunikace jeden odesílatel jednomu příjemci, například HTTP požadavek. Broadcast je doručení všem v lokální síti, například ARP dotaz. Multicast je doručení členům skupiny, například IPTV nebo distribuovaný video stream pro přihlášené příjemce."
      },
      "Zajištěný přenos, sestavení a ukončení spojení": {
        "ex": "TCP handshake synchronizuje počáteční sekvenční čísla: klient pošle SYN, server SYN-ACK, klient ACK. Spolehlivost potom stojí na číslování bajtů, potvrzeních a retransmisích. Pokud potvrzení nepřijde včas nebo ACK přeskočí očekávaný rozsah, odesílatel ztracená data pošle znovu.",
        "cv": "Sled zpráv: klient → server SYN(seq=x), server → klient SYN-ACK(seq=y, ack=x+1), klient → server ACK(ack=y+1). Příjemce pozná ztrátu podle mezery v sekvenčních číslech nebo opakovaně potvrzuje poslední souvisle přijatý bajt. Odesílatel reaguje timeoutem nebo fast retransmit po duplicitních ACK."
      },
      "Transportní protokoly": {
        "ex": "TCP volíme tam, kde je nutná úplnost a pořadí dat; cena je handshake, potvrzování a řízení zahlcení. UDP volíme tam, kde je důležitá nízká latence nebo jednoduchý dotaz/odpověď a aplikace si případnou spolehlivost řeší sama.",
        "cv": "E-mail: TCP, protože SMTP/IMAP potřebují spolehlivý přenos. Videohovor: typicky UDP, protože zpožděný paket už nemá hodnotu. DNS dotaz: běžně UDP kvůli krátké výměně, TCP pro velké odpovědi nebo zónové přenosy. Přenos souboru: TCP, protože soubor musí dorazit celý a ve správném pořadí."
      }
    },
    "Síťové aplikace a bezpečnost": {
      "Základní aplikační protokoly (pošta, přenos souborů, web, jmenná služba)": {
        "ex": "DNS překládá doménové jméno na IP adresu, protože HTTP pracuje až se serverem dostupným přes síťovou adresu. Po získání IP adresy prohlížeč naváže TCP/TLS spojení a odešle HTTP požadavek. Aplikační protokoly tedy často spolupracují.",
        "cv": "SMTP odesílá poštu, port 25 pro server-server, často 587 pro submission. IMAP zpřístupňuje schránku, port 143 nebo 993 s TLS. HTTP přenáší web, port 80, HTTPS 443. FTP přenáší soubory, řídicí port 21. DNS překládá jména, port 53 UDP/TCP."
      },
      "Principy popisu a zajištění kvality služby": {
        "ex": "Best effort nedává provozu záruky, takže stahování může zaplnit fronty a zhoršit hovor. QoS klasifikuje provoz a může dát hlasu prioritu, rezervovat kapacitu nebo řídit fronty. Cílem není magicky zvýšit kapacitu, ale rozumně rozhodnout, komu se zpoždění a ztráty přidělí.",
        "cv": "Parametry QoS: propustnost, zpoždění, jitter a ztrátovost. Videohovor je silně citlivý na zpoždění a jitter, protože interakce musí být plynulá; snese omezenou ztrátovost díky kodekům. Potřebuje také dostatečnou propustnost pro zvolenou kvalitu obrazu."
      },
      "Použití pro multimédia": {
        "ex": "Buffer ukládá několik sekund dat před přehráním. Když některé pakety dorazí později, přehrávač je ještě stihne použít, protože přehrává starší část streamu. U živé komunikace je buffer menší, aby nezvyšoval latenci.",
        "cv": "Živé vysílání používá UDP, protože čekání na retransmisi by často zhoršilo výsledek víc než ztracený paket. Kodek ztrátu zakryje nebo přeskočí. Buffer vyhladí jitter tím, že přehrává data s malým zpožděním a absorbuje rozdíly v čase doručení paketů."
      },
      "Zabezpečení síťové komunikace, autentizace a šifrování": {
        "ex": "HTTPS je HTTP nad TLS. Důvěrnost zajišťuje symetrické šifrování dat po handshaku, integritu autentizační tag/MAC v TLS záznamech a autentizaci serveru certifikát podepsaný důvěryhodnou certifikační autoritou.",
        "cv": "U bankovnictví důvěrnost zajišťuje šifrování spojení v TLS, typicky symetrická šifra po ustavení klíče. Integritu zajišťují autentizované šifrovací režimy nebo MAC. Autentizace serveru stojí na certifikátu a digitálním podpisu CA; autentizace uživatele na hesle, MFA nebo klientském certifikátu."
      },
      "Zabezpečení na jednotlivých protokolových vrstvách": {
        "ex": "TLS chrání konkrétní transportní spojení aplikace, například prohlížeč-server u HTTPS. IPsec pracuje na IP vrstvě a může chránit veškerý provoz mezi dvěma uzly nebo sítěmi. Rozdíl je v rozsahu i v tom, zda ochranu řeší aplikace, nebo síťová konfigurace.",
        "cv": "TLS: nad transportní vrstvou, chrání jednotlivé aplikační spojení, typicky HTTPS, IMAPS nebo API. IPsec: síťová vrstva, chrání IP pakety mezi hosty nebo branami, typicky site-to-site nebo remote-access VPN. TLS je jednodušší pro aplikace, IPsec transparentnější pro provoz celé sítě."
      }
    },
    "Základy informační bezpečnosti": {
      "Základní bezpečnostní funkce – důvěrnost, integrita, dostupnost, nepopiratelnost": {
        "ex": "Důvěrnost brání neoprávněnému čtení, integrita neoprávněné změně, dostupnost výpadku služby a nepopiratelnost popření původu či akce. Různá opatření kryjí různé vlastnosti: šifrování, MAC/hash, redundance a digitální podpis.",
        "cv": "Únik databáze hesel porušuje důvěrnost. Podvržení převodního příkazu porušuje integritu a může souviset i s autentizací/nepopiratelností. DDoS útok porušuje dostupnost, protože oprávnění uživatelé se ke službě nedostanou."
      },
      "Kryptografická primitiva": {
        "ex": "Symetrická kryptografie je rychlá a vhodná pro velká data, ale vyžaduje sdílený tajný klíč. Asymetrická kryptografie řeší výměnu klíčů a podpisy pomocí páru klíčů. Hash vytváří otisk dat; digitální podpis váže otisk na identitu držitele soukromého klíče.",
        "cv": "Symetrická šifra zajišťuje důvěrnost dat se sdíleným klíčem. Asymetrická šifra umožňuje šifrování pro držitele soukromého klíče nebo ustavení klíče. Hašovací funkce zajišťuje otisk pro kontrolu integrity. Digitální podpis zajišťuje integritu, autentizaci původu a nepopiratelnost."
      },
      "Kryptografické protokoly": {
        "ex": "TLS handshake kombinuje primitiva do protokolu: ověří certifikát serveru, dohodne parametry a pomocí výměny klíčů vytvoří sdílené tajemství. Poté se data šifrují rychlou symetrickou šifrou. Bez autentizace by byl protokol zranitelný vůči man-in-the-middle.",
        "cv": "Jednoduché schéma: klient získá veřejný klíč serveru z certifikátu a ověří podpis CA. Strany provedou výměnu klíče, například Diffie-Hellman s podepsanými parametry. Z výsledného sdíleného tajemství odvodí symetrické klíče. Další komunikace se šifruje symetricky a chrání integritou."
      },
      "Řízení rizik": {
        "ex": "Riziko je kombinace pravděpodobnosti a dopadu hrozby využívající zranitelnost aktiva. Šifrování disku snižuje dopad ztráty notebooku, pojištění přenáší finanční dopad a akceptace znamená vědomé přijetí zbytkového rizika.",
        "cv": "Aktivum: zákaznická databáze. Hrozba: únik dat přes kompromitovaný účet. Zranitelnost: chybějící MFA a příliš široká oprávnění. Dopad: právní sankce a ztráta důvěry. Protiopatření: MFA, princip nejmenších oprávnění, audit přístupů, šifrování záloh a plán reakce na incident."
      },
      "Audit, bezpečnostní operace, standardy": {
        "ex": "Audit je časově ohraničené nezávislé ověření souladu s politikami, požadavky nebo normou. Bezpečnostní operace jsou průběžná činnost: monitoring, detekce, triáž a reakce na incidenty. Standardy dávají společný rámec a slovník.",
        "cv": "Jednorázový audit poskytne snímek stavu a doporučení, například před certifikací. Bezpečnostní operace běží trvale a řeší aktuální události v logách, alertech a incidentech. ISO/IEC 27000 popisuje rámec řízení bezpečnosti informací, role, procesy a požadavky na ISMS."
      },
      "Hodnocení bezpečnosti": {
        "ex": "Common Criteria definuje bezpečnostní cíle, požadavky a úrovně záruky. Hodnocení neříká, že produkt je absolutně bezpečný; říká, že byl proti danému profilu a rozsahu posouzen určitou hloubkou. Vyšší EAL znamená vyšší míru ověření, ne automaticky vhodnost pro každý účel.",
        "cv": "Standardizovaná kritéria umožňují opakovatelně popsat, co se hodnotí a jaké důkazy musí výrobce dodat. Výsledná úroveň záruky vyjadřuje důvěru získanou analýzou, testováním a kontrolou vývoje. Je nutné ji číst spolu s bezpečnostním cílem a rozsahem hodnocení."
      }
    },
    "Informační bezpečnost": {
      "Řízení identity a přístupu": {
        "ex": "Autentizace ověřuje identitu, autorizace rozhoduje o oprávnění. MFA kombinuje alespoň dva faktory, například heslo a zařízení. Role účetní pak dostane jen oprávnění potřebná k účetním úlohám; omezení práv snižuje dopad omylu i kompromitace účtu.",
        "cv": "Role: zaměstnanec čte vlastní výplatní pásky, účetní spravuje faktury, manažer schvaluje objednávky svého týmu, administrátor spravuje účty bez přístupu k obchodním datům. Princip nejmenších oprávnění znamená přidělit výchozí minimum, práva časově omezovat a pravidelně revidovat."
      },
      "Ochrana soukromí – koncepty a metody": {
        "ex": "Minimalizace dat omezuje sběr na údaje nutné pro daný účel. E-shop potřebuje doručovací adresu pro objednávku, ale nepotřebuje datum narození, pokud neprodává věkově omezené zboží. Anonymizace odstraňuje vazbu na osobu, pseudonymizace ji nahrazuje odděleným identifikátorem.",
        "cv": "Mobilní aplikace má sbírat jen data nutná pro funkci: například e-mail pro účet a polohu jen při funkci, která ji vyžaduje. Analytiku ukládat agregovaně nebo anonymizovaně. Pseudonymizaci použít tam, kde je třeba spojit události jednoho uživatele bez přímého jména; klíč držet odděleně."
      },
      "Síťové útoky": {
        "ex": "Odposlech pasivně ohrožuje důvěrnost. Man-in-the-middle ohrožuje důvěrnost i integritu, protože útočník komunikaci čte a mění. DDoS cílí na dostupnost zahlcením zdrojů. Obrana musí odpovídat vlastnosti, kterou útok porušuje.",
        "cv": "Odposlech: ohrožuje důvěrnost, obrana TLS/VPN a šifrování. Man-in-the-middle: ohrožuje důvěrnost, integritu i autentizaci, obrana ověřené certifikáty, HSTS, pinning tam, kde dává smysl. DDoS: ohrožuje dostupnost, obrana filtrace, rate limiting, anycast/CDN a kapacitní mitigace."
      },
      "Bezpečné programování a vývoj SW": {
        "ex": "SQL injection vzniká, když se vstup spojí s SQL textem jako kód. Parametrizovaný dotaz oddělí strukturu dotazu od hodnot: SELECT ... WHERE name = ? s parametrem. Databáze pak vstup interpretuje jako data i tehdy, když obsahuje uvozovky nebo SQL klíčová slova.",
        "cv": "U SQL injection nahraď skládání řetězce parametrizovaným dotazem nebo prepared statementem a validuj vstup podle očekávaného typu. U buffer overflow nahraď neomezené kopírování kontrolou délky, bezpečnější funkcí a velikostí cílového bufferu. Oprava musí odstranit příčinu, ne jen filtrovat jeden známý útok."
      },
      "Použitelná bezpečnost": {
        "ex": "Opatření, které uživatelé nedokážou rozumně dodržet, vytváří obcházení. Příliš časté změny hesel a složitá pravidla vedou k zapisování hesel nebo opakování vzorů. Použitelná bezpečnost hledá mechanismus, který je bezpečný v reálném lidském chování.",
        "cv": "Vhodné přihlášení: správce hesel podporovaný dlouhými hesly nebo passkeys, MFA pomocí push/FIDO2 místo opisování složitých kódů, jasné chybové hlášky a bezpečná obnova účtu. Vyvážení spočívá v silné ochraně proti phishingu a hádání, ale s minimem zbytečných kroků pro běžný legitimní přístup."
      }
    },
    "Aplikované informační systémy": {
      "Definice AIS": {
        "ex": "AIS je sociotechnický celek: software bez procesů, datové odpovědnosti a uživatelských rolí nestačí. U nemocnice jsou klíčové entity pacient, návštěva, vyšetření a medikace; procesy zahrnují příjem, vyšetření a propuštění. Přístupová práva chrání citlivá data.",
        "cv": "Data: studenti, předměty, zápisy, známky. Uživatelé: studenti, vyučující, studijní oddělení, administrátoři. Procesy: registrace předmětů, hodnocení, kontrola studia. Cílem je evidence studia, samoobsluha a spolehlivé podklady pro rozhodování."
      },
      "Oblasti použití IS: státní správa, výroba, zdravotnictví, sklady a obchod": {
        "ex": "Skladový IS je transakční systém s důrazem na přesnost zásob a rychlou expedici. Výrobní IS navíc plánuje návaznosti operací, materiálové potřeby a kapacity strojů. Oba vyžadují aktuální data a integraci s ekonomickým systémem.",
        "cv": "Společné rysy: práce s osobními nebo zákaznickými daty a potřeba auditovat změny. Zdravotnictví řeší zdravotnickou dokumentaci, souhlasy a vysokou citlivost údajů. E-shop řeší katalog, košík, platby, skladovou dostupnost a logistiku."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Oddělení vrstev omezuje závislosti: UI neobsahuje SQL dotazy a databáze není vystavena internetu. Integrace se řeší API nebo message brokerem. U rozsáhlého IS je důležitá i observabilita, autentizace a autorizační služba.",
        "cv": "Architektura: webové a mobilní UI, aplikační služby pro zásoby a objednávky, centrální databáze, message broker pro události, API na účetnictví a dopravce. Sklady mohou mít lokální čtečky čárových kódů, které komunikují přes aplikační API."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "ERP projekt má vysoké organizační riziko, protože mění procesy. Proto nestačí programovat: je nutné řídit stakeholdery, migraci, testování i školení. Akceptace se váže na scénáře reálné práce, ne pouze na technickou instalaci.",
        "cv": "Fáze: analýza procesů, návrh cílového řešení, implementace, migrace dat, integrační a akceptační testy, školení, pilot, ostrý provoz. Rizika: nejasné požadavky, špatná data, odpor uživatelů, integrace. Ověření: akceptační scénáře a měřitelné požadavky."
      },
      "Řízení provozu IS": {
        "ex": "Monitoring musí hlídat nejen server, ale i aplikační metriky, například počet chyb přihlášení nebo frontu nezpracovaných zpráv. Zálohy musí být pravidelně testované obnovou. Jinak existuje jen domněnka, že data lze obnovit.",
        "cv": "Opatření: dostupnostní monitoring a alerty, centrální logy, denní zálohy s testem obnovy, definované priority incidentů, plán obnovy po havárii, staging prostředí a řízené nasazování změn s možností návratu."
      }
    },
    "Digitální systémy": {
      "Teorie zobrazení dat a kódování informací včetně operací": {
        "ex": "Doplňkový kód sjednocuje sčítání kladných a záporných čísel: stejná sčítačka zpracuje oba případy. Význam bitů ale závisí na typu: 11111111 je −1 jako signed 8bit, ale 255 jako unsigned.",
        "cv": "+7 je 00000111, inverze 11111000 a plus 1 dává 11111001. Jako signed je to −7, jako unsigned je to 249. Interpretace není uložena v bitech, ale v typu a operaci, která je používá."
      },
      "Algebraické, grafické a algoritmické minimalizační metody": {
        "ex": "Výraz AB + A¬B obsahuje společný faktor A. Protože B+¬B=1, zůstane A. Obvod se zjednoduší z kombinace dvou AND a jednoho OR na pouhý signál A.",
        "cv": "Mintermy 1,3,5,7 odpovídají všem kombinacím, kde C=1 bez ohledu na A a B. Karnaughova mapa umožní seskupit všechny čtyři jedničky do jedné skupiny. Minimalizovaný výsledek je F=C."
      },
      "Optimalizace zpoždění, logických prvků a testovatelnosti": {
        "ex": "Kritická cesta určuje maximální frekvenci synchronního obvodu. Přidání paralelní logiky nebo pipeline registru může zrychlit časování, i když zvýší počet prvků. Testovatelný návrh může přidat scan chain, který zvyšuje režii, ale usnadňuje odhalení vad.",
        "cv": "Například sdílení jednoho mezivýrazu X pro více výstupů sníží počet hradel, ale všechny výstupy čekají na výpočet X. Duplikace logiky zvýší počet hradel, ale zkrátí nebo rozdělí kritickou cestu a může zvýšit rychlost."
      },
      "Kombinační konstrukční prvky digitálních systémů": {
        "ex": "Multiplexer lze chápat jako hardwarový výběr podle adresy. Když datové vstupy nastavíme na hodnoty pravdivostní tabulky, adresové vstupy reprezentují proměnné a výstup realizuje danou funkci.",
        "cv": "Poloviční sčítačka: pro A,B je součet S=A XOR B a přenos C=A AND B. Tabulka: 00→00, 01→10, 10→10, 11→01, pokud zapisujeme S,C. Stačí hradlo XOR a hradlo AND."
      },
      "Sekvenční obvody a kódování vnitřních stavů": {
        "ex": "Kódování stavů není jen formální detail. Binární kód šetří registry, ale přechodová logika může být složitější. One-hot používá jeden klopný obvod na stav, ale přechody se často vyjadřují jednodušeji.",
        "cv": "Osm stavů binárně potřebuje ceil(log2 8)=3 klopné obvody, one-hot potřebuje 8. Binární kód šetří hardware stavu, one-hot může zjednodušit dekódování stavů a zrychlit řadič v FPGA."
      },
      "Typy a vlastnosti klopných obvodů": {
        "ex": "Setup a hold time jsou minimální intervaly stability vstupu kolem hrany hodin. Jejich porušení může vést k metastabilitě, kdy se výstup po určitou dobu nechová jako platná 0 nebo 1.",
        "cv": "D obvod ukládá přímo vstup D při hodinové hraně a hodí se pro registry. T obvod při T=1 překlápí stav, při T=0 ho drží; proto se používá pro čítače a děličky frekvence."
      },
      "Základní sekvenční konstrukční prvky": {
        "ex": "Čítač je konečný automat se zvláštní posloupností stavů. Řadič je obecnější automat, jehož výstupy ovládají datovou cestu, například povolení zápisu registru nebo výběr vstupu multiplexoru.",
        "cv": "Modulo 3 má stavy 00, 01, 10 a potom návrat na 00; stav 11 je nepoužitý a měl by být ošetřen návratem do platného stavu. Minimální počet klopných obvodů je ceil(log2 3)=2."
      }
    },
    "Paralelní systémy": {
      "Dekompozice, mapování a komunikační primitiva": {
        "ex": "Bloková dekompozice matice snižuje režii plánování a zlepšuje lokalitu cache. Špatné mapování může nechat některé procesory nečinné, zatímco jiné stále počítají. Cílem je vysoká paralelita a nízká komunikace.",
        "cv": "Pole rozdělíme na bloky, každý worker spočítá lokální součet svého bloku. Komunikace je potřeba jen při závěrečném sloučení lokálních součtů, například redukcí nebo chráněným přičtením do globální sumy."
      },
      "Výkonnostní analýza paralelních algoritmů": {
        "ex": "Amdahlův zákon: S(p)=1/((1-f)+f/p). Pro f=0,9 a p→∞ zůstane jmenovatel 0,1, tedy maximum 10. Přidávání procesorů nepomůže odstranit sekvenční část.",
        "cv": "S(4)=1/((1−0,8)+0,8/4)=1/(0,2+0,2)=2,5. Efektivita je S/p=2,5/4=0,625. Zbytek výkonu ztrácí sekvenční část a paralelní režie."
      },
      "Paralelní algoritmy se sdílenou pamětí": {
        "ex": "Závod nastane, když výsledek závisí na proložení operací vláken. Inkrement x++ obsahuje načtení, zvýšení a zápis; dvě vlákna mohou načíst stejnou starou hodnotu a zapsat stejný výsledek.",
        "cv": "Příklad: dvě vlákna provádějí counter++. Oprava mutexem: zamknout před inkrementem a odemknout po něm. Oprava atomikou: použít atomic_fetch_add, která provede read-modify-write nedělitelně."
      },
      "OpenMP standard": {
        "ex": "Redukce v OpenMP řeší častý vzor lokální výpočet plus globální sloučení. Bez reduction by všechna vlákna zapisovala do stejné proměnné sum a vznikl by závod.",
        "cv": "Kostra: #pragma omp parallel for reduction(max:maxVal) for (...) maxVal = max(maxVal, a[i]);. Redukce je potřeba, protože maximum je sdílená agregace a prostý zápis z více vláken by byl závod."
      },
      "POSIX Threads": {
        "ex": "Pthreads dávají větší kontrolu než OpenMP, ale také více odpovědnosti. Je třeba řešit životnost předaných argumentů, synchronizaci a návratové hodnoty. pthread_join brání tomu, aby hlavní vlákno skončilo dřív než pracovní.",
        "cv": "Program rozdělí pole na N rozsahů, pro každý připraví strukturu s ukazatelem na pole a mezemi, zavolá pthread_create, každé vlákno spočítá lokální výsledek, hlavní vlákno provede pthread_join a výsledky sloučí."
      },
      "Lock-free přístup": {
        "ex": "Lock-free neznamená wait-free: jednotlivé vlákno může opakovaně selhávat, ale nějaké vlákno vždy postupuje. Výhodou je absence deadlocku způsobeného zámkem, nevýhodou problémy jako ABA a složité dokazování správnosti.",
        "cv": "Mutex je jednodušší, ale vlákno držící zámek může zablokovat ostatní a při chybě způsobit deadlock. Lock-free používá atomické instrukce a neblokuje celý systém, ale návrh je náročnější a citlivý na paměťový model."
      },
      "Paralelní algoritmy s distribuovanou pamětí a MPI": {
        "ex": "MPI explicitně zviditelňuje cenu komunikace. Algoritmus, který ve sdílené paměti jen čte pole, musí v MPI data nejprve rozdělit a výsledky explicitně sesbírat. Proto je důležité minimalizovat počet a objem zpráv.",
        "cv": "Proces 0 rozdělí oba vektory pomocí Scatter. Každý proces spočítá lokální součet součinů své části. MPI_Reduce s operací SUM sečte lokální výsledky do globálního skalárního součinu na procesu 0."
      }
    },
    "Moderní značkovací jazyky": {
      "Základní standardy rodiny XML": {
        "ex": "Jednotlivé standardy mají oddělené odpovědnosti: XML je syntaxe stromu, XML Schema typový kontrakt, XPath adresace uzlů, XQuery dotazování a XSLT transformace. Díky tomu lze nástroje kombinovat.",
        "cv": "XML zapisuje data, XML Schema validuje strukturu a typy, XPath vybírá části dokumentu, XQuery pokládá dotazy nad XML daty a XSLT převádí XML do jiného formátu."
      },
      "Aplikace XML pro dokumenty a data": {
        "ex": "XML je vhodné tam, kde je důležitá interoperabilita, hierarchie a validace. Pro velmi objemná nebo výkonově citlivá data může být nevhodné kvůli velikosti a nákladům parsování.",
        "cv": "Pro konfiguraci je XML vhodné díky čitelnosti, hierarchii a validaci schématem. Nevýhody: je verbose a ruční editace může být náchylná k chybám ve značkách nebo jmenných prostorech."
      },
      "Objektový model dokumentu (DOM)": {
        "ex": "DOM drží celý strom v paměti, proto je pohodlný pro editaci a náhodný přístup. U obrovských dokumentů je lepší SAX/StAX proudový parser, protože nemusí načíst vše najednou.",
        "cv": "Kořen objednavka je kořenový element, má potomky položka, každý element položka má atributy nebo podřízené elementy jako nazev, mnozstvi a cena. Text uvnitř elementů je samostatný textový uzel."
      },
      "Jazyky schémat (XML Schema)": {
        "ex": "Validita je silnější než dobře utvořenost. Dokument může mít správně uzavřené značky, ale být nevalidní, pokud chybí povinný element nebo má hodnota špatný typ.",
        "cv": "Schéma může definovat element student jako complexType s atributem id use=\"required\" typu xs:string a sekvencí obsahující element jmeno typu xs:string. Validátor pak odmítne studenta bez id nebo bez jména."
      },
      "Navigace a dotazování v XML datech (XPath, XQuery)": {
        "ex": "XPath je výrazový jazyk pro výběr uzlů; predikát v hranatých závorkách filtruje podle atributu, pozice nebo podmínky. XQuery nad tím staví celé dotazy včetně konstrukce výsledků.",
        "cv": "Výraz může být //student[@rocnik=\"2\"]/email. Dvojité lomítko hledá studenty kdekoliv v dokumentu, predikát filtruje druhý ročník a /email vybere jejich e-mailové elementy."
      },
      "Transformace XML (XSLT)": {
        "ex": "XSLT používá šablony řízené strukturou vstupu, ne ruční průchod jako běžný imperativní program. Pro každý nalezený uzel se použije nejvhodnější šablona a vytvoří se výstupní strom.",
        "cv": "Šablona pro kořen vytvoří <ul>, potom apply-templates na všechny knihy. Šablona pro kniha vytvoří <li> s hodnotou elementu nazev, případně autora. Výstupem je HTML seznam odpovídající XML datům."
      }
    }
  }
});
