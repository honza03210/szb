window.STUDY_DATASETS = window.STUDY_DATASETS || [];

window.STUDY_DATASETS.push({
  "id": "cs",
  "name": "B-CS Kyberbezpečnost",
  "categoryLabels": {
    "Technologie a bezpečnost": "Technologie a bezpečnost",
    "Právo a politika pro kyberbezpečnost": "Právo a politika"
  },
  "topics": [
    {
      "cat": "Technologie a bezpečnost",
      "title": "Výpočetní systémy",
      "codes": [
        "PB151"
      ],
      "def": "Výpočetní systém je celek tvořený procesorem, pamětí, vstupně-výstupními zařízeními, sběrnicemi a softwarem, který nad hardwarem vykonává programy. Základním principem je reprezentace dat pomocí bitů: čísla se zapisují v různých soustavách, celá čísla se v počítači ukládají například v doplňkovém kódu a aritmetika je omezena pevnou šířkou slova. Kódy slouží k vnitřní reprezentaci znaků a dat i k detekci a opravě chyb. Procesor provádí instrukce, má parametry jako frekvence, šířka slova, počet jader, pipeline a cache, a existuje v různých architekturách. Paměťová hierarchie kombinuje rychlé malé paměti a pomalejší velké paměti, od registrů přes cache a RAM až po externí úložiště. Vstupní a výstupní zařízení se připojují přes řadiče a rozhraní, používají přerušení, DMA a ovladače. Pro kyberbezpečnost je důležité chápat, kde vznikají chyby reprezentace, přetečení, úniky dat z paměti i slabiny periferií.",
      "scope": [
        {
          "t": "Číselné soustavy a vztahy mezi soustavami",
          "d": "Počítače pracují binárně, ale pro člověka se používá i desítková a šestnáctková soustava. Převody mezi soustavami vycházejí z pozičního zápisu a seskupování bitů. Šestnáctkový zápis je kompaktní forma binárních dat."
        },
        {
          "t": "Zobrazení celého čísla v počítači a aritmetika",
          "d": "Celá čísla se ukládají v pevné šířce, často v doplňkovém kódu pro znaménková čísla. Aritmetika může přetéct, protože rozsah hodnot je omezený. Interpretace bitů závisí na zvoleném typu."
        },
        {
          "t": "Kódy vnitřní, vnější, detekční a opravné",
          "d": "Vnitřní kódy reprezentují data uvnitř systému, například znaky nebo čísla. Vnější kódy slouží pro komunikaci či ukládání. Detekční a opravné kódy přidávají redundanci, aby bylo možné odhalit nebo opravit chyby."
        },
        {
          "t": "Procesory, jejich parametry a architektury",
          "d": "Procesor vykonává instrukce v cyklu načti, dekóduj a proveď. Důležité parametry jsou instrukční sada, počet jader, frekvence, cache, pipeline a spotřeba. Architektury se liší například přístupem RISC/CISC."
        },
        {
          "t": "Vnitřní a vnější paměti a principy jejich funkce",
          "d": "Paměťová hierarchie zahrnuje registry, cache, operační paměť a externí úložiště. Čím je paměť blíže procesoru, tím bývá rychlejší, menší a dražší. Princip lokality vysvětluje účinnost cache."
        },
        {
          "t": "Vstupní a výstupní zařízení a jejich připojování",
          "d": "I/O zařízení komunikují přes řadiče, sběrnice a ovladače. Procesor je může obsluhovat programově, přes přerušení nebo pomocí DMA. Bezpečnostně jsou důležitá práva zařízení, firmware a důvěryhodnost periferií."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Operační systémy",
      "codes": [
        "PB152",
        "PB152cv",
        "PV004"
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
      "cat": "Technologie a bezpečnost",
      "title": "Souborové systémy",
      "codes": [
        "PB152",
        "PV004"
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
      "cat": "Technologie a bezpečnost",
      "title": "Sítě",
      "codes": [
        "PB156",
        "PB156cv"
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
      "cat": "Technologie a bezpečnost",
      "title": "Síťové aplikace a bezpečnost",
      "codes": [
        "PB156",
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
      "cat": "Technologie a bezpečnost",
      "title": "Principy programování",
      "codes": [
        "PB071",
        "PV080"
      ],
      "def": "Principy programování pro kyberbezpečnost spojují schopnost psát strukturovaný imperativní kód s porozuměním tomu, jak program pracuje s pamětí a jak chyby v implementaci vedou ke zranitelnostem. Strukturované programování používá sekvenci, větvení, cykly, podprogramy a jasné rozhraní funkcí místo neřízených skoků. Na nižší úrovni je nutné chápat zásobník, haldu, statická data, dynamickou alokaci, ukazatele, pole a ukazatelovou aritmetiku. Uživatelské datové struktury, například spojové seznamy, vyžadují správnou správu životnosti paměti. Debugging pomáhá najít logické chyby i paměťové chyby pomocí krokování, breakpointů, sanitizerů a nástrojů typu Valgrind. Bezpečné programování doplňuje validaci vstupů, kontrolu mezí, parametrizované dotazy, bezpečné zacházení s chybami a princip nejmenších oprávnění v návrhu aplikace.",
      "scope": [
        {
          "t": "Strukturované programování v imperativním jazyce",
          "d": "Strukturované programování staví program ze sekvencí, podmínek, cyklů a podprogramů. Cílem je čitelnost, lokální uvažování a omezení neřízených skoků. Funkce mají mít jasné vstupy, výstupy a odpovědnost."
        },
        {
          "t": "Paměťový model programu",
          "d": "Program pracuje se zásobníkem, haldou, statickými daty a kódem. Lokální automatické proměnné typicky žijí na zásobníku, dynamicky alokovaná data na haldě a globální proměnné ve statické oblasti."
        },
        {
          "t": "Správa paměti, dynamická alokace a uživatelské datové struktury",
          "d": "Dynamická alokace umožňuje vytvářet data za běhu, ale vyžaduje správné uvolnění. Datové struktury jako seznamy a stromy často obsahují uzly na haldě propojené ukazateli. Chyby vedou k únikům, use-after-free nebo dvojímu uvolnění."
        },
        {
          "t": "Nízkoúrovňová práce s pamětí, ukazatel, pole a ukazatelová aritmetika",
          "d": "Ukazatel obsahuje adresu objektu, pole souvislý blok prvků. Ukazatelová aritmetika se posouvá po prvcích daného typu. Přístup mimo meze nebo dereference neplatného ukazatele je častý zdroj zranitelností."
        },
        {
          "t": "Způsoby ladění programu",
          "d": "Ladění používá breakpointy, krokování, sledování proměnných, logování, core dumpy, sanitizery a analyzátory paměti. Systematický postup hledá první místo, kde se skutečný stav odchýlí od očekávaného."
        },
        {
          "t": "Bezpečné programování a vývoj SW",
          "d": "Bezpečný vývoj předchází zranitelnostem validací vstupů, kontrolou mezí, bezpečnými API, parametrizovanými dotazy, ošetřením chyb, code review, testováním a bezpečností zahrnutou už v návrhu."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Databáze",
      "codes": [
        "PB154 || PB168"
      ],
      "def": "Databáze v kyberbezpečnostním studiu zahrnují relační model, dotazovací jazyk SQL, integritní omezení, zpracování dotazů, indexování a transakční zpracování. Relační model organizuje data do relací s atributy a n-ticemi; schéma určuje strukturu a klíče identifikují řádky. Integritní omezení, zejména primární a cizí klíče, UNIQUE, NOT NULL a CHECK, brání nekonzistentním datům. Relační algebra poskytuje formální základ operací, jako je selekce, projekce a spojení. SQL je praktický jazyk pro dotazování a aktualizaci dat, včetně SELECT, JOIN a agregačních funkcí. SŘBD dotazy optimalizuje pomocí plánů, odhadů nákladů, indexů a někdy hašování. Transakce seskupují operace do logického celku a jejich vlastnosti ACID jsou zásadní pro správnost i při souběhu a selhání. Bezpečnostně jsou důležité přístupová práva, audit, ochrana před injection a konzistence citlivých dat.",
      "scope": [
        {
          "t": "Relační model, schéma a klíče",
          "d": "Relační model reprezentuje data jako relace s atributy a n-ticemi. Relační schéma popisuje názvy a domény atributů. Klíče minimálně a jednoznačně identifikují řádky, cizí klíče propojují relace."
        },
        {
          "t": "Integritní omezení",
          "d": "Integritní omezení zajišťují platnost dat. PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL a CHECK chrání identitu, odkazy, povinné hodnoty a doménová pravidla."
        },
        {
          "t": "Relační algebra a spojování relací",
          "d": "Relační algebra formálně popisuje dotazy pomocí selekce, projekce, přejmenování, agregace a spojení. Join kombinuje řádky z více relací podle společného atributu nebo podmínky."
        },
        {
          "t": "SQL SELECT, spojování a agregace",
          "d": "SELECT vybírá a transformuje data. WHERE filtruje řádky, JOIN spojuje relace, GROUP BY tvoří skupiny a agregační funkce jako COUNT, SUM nebo AVG počítají souhrny."
        },
        {
          "t": "Zpracování dotazů a indexování",
          "d": "SŘBD převádí SQL dotaz na plán vykonání a optimalizuje ho podle odhadů nákladů. Indexy, typicky B-stromy nebo hašování, urychlují vyhledávání za cenu místa a pomalejších zápisů."
        },
        {
          "t": "Transakce a vlastnosti transakčního zpracování",
          "d": "Transakce je posloupnost operací provedená jako celek. ACID znamená atomicitu, konzistenci, izolaci a trvanlivost. Tyto vlastnosti chrání data při chybách a souběžném přístupu."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Softwarové a informační systémy",
      "codes": [
        "PB007",
        "PV028"
      ],
      "def": "Softwarové a informační systémy zahrnují vývoj, dokumentaci, nasazení a provoz aplikací i rozsáhlých organizačních informačních systémů. Důležité je rozumět životnímu cyklu softwaru, práci s požadavky, modelování pomocí UML, architekturám AIS, řízení rozsáhlých projektů a provozu služeb po nasazení.",
      "scope": [
        {
          "t": "Vývoj a provoz softwarových systémů",
          "d": "Vývoj zahrnuje požadavky, návrh, implementaci, testování a nasazení. Provoz řeší monitoring, incidenty, změny, podporu uživatelů a údržbu."
        },
        {
          "t": "Použití UML při vývoji software",
          "d": "UML poskytuje diagramy pro modelování struktury a chování systému, například use case, class, sequence a activity diagram. Pomáhá sdílet návrh mezi analytiky, vývojáři a zadavateli."
        },
        {
          "t": "Aplikované informační systémy",
          "d": "AIS podporují konkrétní organizační domény, například výrobu, obchod nebo veřejnou správu. Spojují software, data, procesy, role a infrastrukturu."
        },
        {
          "t": "Architektury rozsáhlých informačních systémů",
          "d": "Rozsáhlé IS používají vrstvení, služby, integrační rozhraní a oddělení prezentační, aplikační a datové vrstvy. Řeší škálování, dostupnost, bezpečnost a audit."
        },
        {
          "t": "Metody vedení rozsáhlých projektů",
          "d": "Řízení projektu pracuje s rozsahem, harmonogramem, riziky, změnami, stakeholdery a akceptací. U velkých IS je kritická migrace dat a zavedení do organizace."
        },
        {
          "t": "Řízení provozu IS",
          "d": "Provoz IS zahrnuje SLA, monitoring, zálohy, obnovu, patchování, incident management, správu kapacit a řízené nasazování změn."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Organizace a řízení kyberbezpečnosti",
      "codes": [
        "PV080",
        "PV017",
        "PV210"
      ],
      "def": "Organizace a řízení kyberbezpečnosti převádí obecné bezpečnostní cíle do rolí, odpovědností, politik, procesů a kontrol. Základ tvoří důvěrnost, integrita, dostupnost a nepopiratelnost, ale praktické zajištění vyžaduje bezpečnostní politiku, procedury, řízení rizik, odpovědnosti a strukturu řízení napříč organizací.",
      "scope": [
        {
          "t": "Důvěrnost, integrita, dostupnost a nepopiratelnost",
          "d": "Důvěrnost chrání před neoprávněným čtením, integrita před změnou, dostupnost před výpadkem a nepopiratelnost před popřením původu akce."
        },
        {
          "t": "Bezpečnostní politiky a procedury",
          "d": "Politika stanoví závazná pravidla a cíle, procedury popisují konkrétní postupy. Musí být schválené, známé, vymahatelné a pravidelně aktualizované."
        },
        {
          "t": "Struktura řízení kyberbezpečnosti",
          "d": "Řízení definuje orgány, komise, reporting, eskalace a vztah bezpečnosti k vedení organizace. Cílem je, aby bezpečnost měla mandát a vazbu na rizika organizace."
        },
        {
          "t": "Role, odpovědnosti a kompetence",
          "d": "Role jako CISO, vlastník aktiva, správce systému, bezpečnostní tým a uživatel mají odlišné odpovědnosti. Kompetence musí odpovídat pravomocem a odpovědnosti."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Metody autentizace a řízení přístupu",
      "codes": [
        "PV080",
        "PV157"
      ],
      "def": "Autentizace ověřuje identitu subjektu a řízení přístupu rozhoduje, co smí provádět. Metody zahrnují znalostní faktory, vlastnictví tokenu, biometriku, certifikáty a autentizaci strojů či aplikací. Elektronický podpis zajišťuje integritu, autentizaci původu a za určitých podmínek právní účinky. Bezpečný návrh musí řešit životní cyklus identit, správu oprávnění, privilegované účty, revokaci a audit.",
      "scope": [
        {
          "t": "Metody autentizace",
          "d": "Autentizace může používat heslo, jednorázový kód, hardwarový token, certifikát, passkey nebo biometrický znak. Vícefaktorová autentizace kombinuje nezávislé faktory."
        },
        {
          "t": "Řízení přístupu",
          "d": "Autorizace se opírá o modely jako DAC, MAC, RBAC nebo ABAC. Princip nejmenších oprávnění omezuje dopad kompromitace účtu."
        },
        {
          "t": "Biometrické metody autentizace",
          "d": "Biometrie používá fyzické nebo behaviorální znaky. Výhodou je pohodlí, rizikem nemožnost snadné změny kompromitovaného biometrického znaku a otázky soukromí."
        },
        {
          "t": "Elektronický podpis a jeho použití",
          "d": "Elektronický podpis používá kryptografii k prokázání integrity a původu dokumentu. Právní účinky závisí na typu podpisu, certifikátu a právním rámci."
        },
        {
          "t": "Autentizace strojů a aplikací",
          "d": "Stroje a aplikace se autentizují certifikáty, klíči, tokeny nebo vzájemným TLS. Nutná je bezpečná správa tajemství a rotace klíčů."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Analýza a řízení rizik",
      "codes": [
        "PV080",
        "PV157",
        "PV017"
      ],
      "def": "Analýza a řízení rizik identifikuje aktiva, hrozby, zranitelnosti, pravděpodobnost a dopad incidentů. Na základě rizika se volí opatření, sleduje se jejich účinnost a zbytkové riziko. Součástí je asset management, řízení identit a přístupu, správa privilegovaných účtů, audit, standardy a hodnocení bezpečnosti.",
      "scope": [
        {
          "t": "Asset management",
          "d": "Asset management eviduje aktiva, jejich vlastníky, hodnotu, umístění, závislosti a kritičnost. Bez znalosti aktiv nelze smysluplně řídit rizika."
        },
        {
          "t": "Analýza rizik",
          "d": "Analýza rizik kombinuje hrozby, zranitelnosti, pravděpodobnost a dopad. Výsledkem je priorita rizik a podklad pro rozhodnutí o opatřeních."
        },
        {
          "t": "Opatření proti rizikům a jejich účinnost",
          "d": "Riziko lze snížit, přenést, vyhnout se mu nebo ho akceptovat. Účinnost opatření se měří proti cíli a nákladům."
        },
        {
          "t": "Řízení identity a přístupu, ACL a privilegovaní uživatelé",
          "d": "IAM spravuje identity a oprávnění. ACL explicitně říkají, kdo smí k objektu přistupovat. Privilegované účty vyžadují zvláštní ochranu a audit."
        },
        {
          "t": "Audit, standardy a hodnocení bezpečnosti",
          "d": "Audit ověřuje soulad a účinnost kontrol. Standardy poskytují rámec a hodnocení bezpečnosti dokládá míru důvěry ve splnění požadavků."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Bezpečnostní architektura",
      "codes": [
        "PB156",
        "PB156cv",
        "PV004",
        "PV175"
      ],
      "def": "Bezpečnostní architektura navrhuje technické i organizační vrstvy ochrany systémů. V sítích používá izolaci, segmentaci, firewally, řízení přístupu a bezpečné protokoly. Monitoring, detekce a logování poskytují viditelnost a podporu reakce na incidenty. Bezpečnost operačních systémů se opírá o hardening, správu aktualizací, izolaci procesů, práva a audit. Bezpečnost dat zahrnuje klasifikaci, šifrování, zálohy, DLP a řízení životního cyklu dat.",
      "scope": [
        {
          "t": "Bezpečnost sítí, izolace a segmentace",
          "d": "Segmentace rozděluje síť na zóny podle důvěry a funkce. Izolace omezuje laterální pohyb útočníka a dopad kompromitace."
        },
        {
          "t": "Firewally",
          "d": "Firewall filtruje provoz podle pravidel na základě adres, portů, protokolů nebo aplikačního kontextu. Je hranicí mezi zónami, ne jediným bezpečnostním opatřením."
        },
        {
          "t": "Monitoring, detekce a logování",
          "d": "Logování zaznamenává události, monitoring sleduje stav a detekce hledá známky útoku. Kvalitní logy musí mít čas, zdroj, integritu a jasnou návaznost na reakci."
        },
        {
          "t": "Bezpečnost operačních systémů",
          "d": "Hardening OS zahrnuje minimalizaci služeb, aktualizace, správu účtů, práva, audit, izolaci a bezpečnou konfiguraci."
        },
        {
          "t": "Bezpečnost dat",
          "d": "Data se chrání klasifikací, řízením přístupu, šifrováním, zálohováním, mazáním a prevencí úniku. Opatření závisí na citlivosti a životním cyklu dat."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Kyberbezpečnost v organizaci",
      "codes": [
        "PB177",
        "PV210"
      ],
      "def": "Kyberbezpečnost v organizaci řeší praktické zvládání událostí, incidentů, útoků, zranitelností a slabin. Bezpečnostní tým monitoruje prostředí, vyhodnocuje varování, koordinuje reakci, komunikuje s vedením i externími subjekty a zajišťuje poučení z incidentů. Incident response má fáze přípravy, detekce, analýzy, containmentu, eradikace, obnovy a lessons learned.",
      "scope": [
        {
          "t": "Událost, incident, útok, zranitelnost a slabina",
          "d": "Událost je pozorovaný jev, incident narušuje bezpečnost, útok je úmyslná aktivita útočníka, zranitelnost je využitelná chyba a slabina obecný nedostatek kontroly."
        },
        {
          "t": "Role a činnosti bezpečnostního týmu",
          "d": "Bezpečnostní tým monitoruje, analyzuje alerty, řeší incidenty, spravuje detekce, komunikuje a zlepšuje obranu. Role zahrnují analytiky, incident manažera a vlastníky systémů."
        },
        {
          "t": "Řešení kyberbezpečnostního incidentu",
          "d": "Incident response zahrnuje přípravu, detekci, triáž, analýzu, omezení dopadu, odstranění příčiny, obnovu a vyhodnocení. Důležitá je evidence rozhodnutí."
        },
        {
          "t": "Bezpečnostní varování a příklady z praxe",
          "d": "Varování informuje o hrozbě nebo zranitelnosti a doporučuje opatření. V praxi může jít o kritickou zranitelnost VPN, phishingovou kampaň nebo únik přihlašovacích údajů."
        }
      ]
    },
    {
      "cat": "Technologie a bezpečnost",
      "title": "Kyberútoky",
      "codes": [
        "PB177"
      ],
      "def": "Kyberútoky lze popsat životním cyklem od průzkumu přes počáteční přístup, spuštění kódu, upevnění přístupu, pohyb v síti až po cílové akce. Advanced Persistent Threat označuje dlouhodobě působícího, dobře vybaveného aktéra se specifickým cílem. Rámec MITRE ATT&CK popisuje taktiky, techniky a procedury útočníků a pomáhá mapovat detekce a obranu. Obrana kombinuje prevenci, hardening, segmentaci, monitoring, EDR, síťovou detekci, patch management a reakci na incidenty.",
      "scope": [
        {
          "t": "Životní cyklus kyberútoku",
          "d": "Útok typicky začíná průzkumem, pokračuje počátečním přístupem, vykonáním kódu, perzistencí, eskalací oprávnění, laterálním pohybem a cílovou akcí."
        },
        {
          "t": "Advanced Persistent Threat",
          "d": "APT je dlouhodobá cílená kampaň vedená schopným aktérem. Důraz je na vytrvalost, opatrnost, průzkum a přizpůsobení oběti."
        },
        {
          "t": "MITRE ATT&CK taktiky, techniky a procedury",
          "d": "ATT&CK třídí chování útočníků do taktik, technik a konkrétních procedur. Umožňuje porovnat pokrytí detekcí a plánovat obranu."
        },
        {
          "t": "Průzkum, počáteční přístup a zneužití zranitelnosti",
          "d": "Průzkum sbírá informace, počáteční přístup získává první vstup a zneužití zranitelnosti využívá chybu systému nebo konfigurace."
        },
        {
          "t": "Spuštění kódu, upevnění přístupu a cílové akce",
          "d": "Útočník spouští payload, buduje perzistenci a směřuje k cíli, například exfiltraci, šifrování dat nebo sabotáž."
        },
        {
          "t": "Obrana na úrovni hostitele a sítě",
          "d": "Hostitelská obrana zahrnuje hardening, EDR, patching a least privilege. Síťová obrana zahrnuje segmentaci, IDS/IPS, filtrování a monitoring toků."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Vymezení bezpečnostních studií",
      "codes": [
        "BSSb1101"
      ],
      "def": "Bezpečnostní studia zkoumají bezpečnost jako společenský, politický a institucionální problém. V kyberbezpečnosti pracují s pojmy bezpečnost, hrozba a riziko, rozlišují vnitřní a vnější bezpečnost a posuzují sektory společnosti ovlivněné digitálními technologiemi. Bezpečnostní politika stanoví cíle, nástroje a priority státu nebo organizace a její analýza hodnotí aktéry, problémy, opatření a dopady.",
      "scope": [
        {
          "t": "Pojmy bezpečnost, hrozba a riziko",
          "d": "Bezpečnost je stav přijatelné ochrany hodnot, hrozba potenciální zdroj škody a riziko kombinace pravděpodobnosti a dopadu. V kyberprostoru se vztahují k aktivům, službám a společnosti."
        },
        {
          "t": "Vnitřní a vnější bezpečnost a sektory",
          "d": "Vnitřní bezpečnost se týká fungování státu a společnosti uvnitř, vnější bezpečnost vztahů a hrozeb zvenčí. Kyberbezpečnost prochází sektory obrany, ekonomiky, zdravotnictví i veřejné správy."
        },
        {
          "t": "Bezpečnostní politika a její analýza",
          "d": "Bezpečnostní politika vymezuje cíle, instituce, nástroje a priority. Analýza sleduje problém, aktéry, pravomoci, zdroje, implementaci a měření výsledků."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Bezpečnostní strategie",
      "codes": [
        "BSSb1103"
      ],
      "def": "Bezpečnostní strategie popisují zájmy, hrozby, cíle a nástroje státu. V České republice kyberbezpečnost prostupuje strategickými dokumenty a je spojena s ochranou kritické infrastruktury, obranyschopností, fungováním veřejné správy a mezinárodní spoluprací. Bezpečnostní systém ČR tvoří instituce s rozdílnými rolemi, například vláda, bezpečnostní rady, NÚKIB, zpravodajské služby, policie, armáda a správci regulovaných služeb.",
      "scope": [
        {
          "t": "Strategické dokumenty České republiky",
          "d": "Strategické dokumenty vymezují bezpečnostní zájmy, hrozby a priority. Kyberbezpečnost se v nich objevuje jako průřezová podmínka fungování státu a ekonomiky."
        },
        {
          "t": "Význam kyberbezpečnosti ve strategiích",
          "d": "Digitální závislost zvyšuje dopad kyberincidentů na stát, služby a občany. Strategie proto řeší odolnost, prevenci, reakci a mezinárodní spolupráci."
        },
        {
          "t": "Bezpečnostní systém ČR a role institucí",
          "d": "Instituce mají rozdělené kompetence: regulace, prevence, detekce, vyšetřování, obrana a krizové řízení. Koordinace je nutná, protože kyberincidenty překračují hranice sektorů."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Kyberválka",
      "codes": [
        "BSSb1152"
      ],
      "def": "Kyberválka označuje použití kybernetických prostředků v konfliktu mezi politickými aktéry, často ve spojení s konvenčními, informačními a zpravodajskými operacemi. Problematické je vymezení, prah použití síly, přisouzení útoku a odstrašení. Současné trendy zahrnují útoky na infrastrukturu, dodavatelské řetězce, dezinformační operace a využívání proxy aktérů. Koncept netwars popisuje síťově organizované konflikty mezi státy, nestátními aktéry a decentralizovanými skupinami.",
      "scope": [
        {
          "t": "Definice, historie a současné trendy",
          "d": "Kyberválka nemá jednotnou definici; obvykle zahrnuje státem řízené nebo podporované kyberoperace v konfliktu. Trendem je propojení s hybridními a informačními operacemi."
        },
        {
          "t": "Aktéři a přisouzení kyberútoků",
          "d": "Aktéry mohou být státy, zpravodajské služby, proxy skupiny i kriminální aktéři. Přisouzení je obtížné kvůli anonymizaci, falešným stopám a přeshraniční infrastruktuře."
        },
        {
          "t": "Odstrašení v kyberprostoru",
          "d": "Odstrašení může stát na hrozbě odvety, odepření úspěchu útoku nebo zvýšení odolnosti. Problémem je nejisté přisouzení a nejasné prahy reakce."
        },
        {
          "t": "Netwars a kyberkonflikt",
          "d": "Netwars zdůrazňují síťovou organizaci aktérů, informační rozměr a decentralizovanou koordinaci. V kyberkonfliktu se projevují kampaněmi, hacktivismem a informačními operacemi."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Ochrana kritické infrastruktury",
      "codes": [
        "BSSb1103"
      ],
      "def": "Kritická infrastruktura zahrnuje systémy, jejichž narušení by mělo závažný dopad na bezpečnost státu, ekonomiku nebo základní potřeby obyvatel. Kyberútoky na energetiku, zdravotnictví, dopravu nebo komunikace mohou způsobit fyzické i společenské následky. Ochrana vyžaduje identifikaci kritických služeb, řízení rizik, odolnost, kontinuitu provozu, incident response a spolupráci veřejného a soukromého sektoru.",
      "scope": [
        {
          "t": "Vymezení kritické infrastruktury",
          "d": "Kritická infrastruktura zahrnuje prvky a služby nezbytné pro fungování státu a společnosti. V kyberbezpečnosti se posuzuje závislost těchto služeb na informačních systémech."
        },
        {
          "t": "Kyberútoky na kritickou infrastrukturu",
          "d": "Útok může narušit dostupnost, integritu řídicích dat nebo bezpečný provoz. Dopady se mohou projevit ve fyzickém světě, například výpadkem energie nebo zdravotních služeb."
        },
        {
          "t": "Přisouzení a odstrašování",
          "d": "Přisouzení útoku na kritickou infrastrukturu je důležité pro politickou a právní reakci. Odstrašení kombinuje odolnost, schopnost reakce a mezinárodní signály."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Právní úprava kyberbezpečnosti v ČR a EU",
      "codes": [
        "BVV03K"
      ],
      "def": "Právní úprava kyberbezpečnosti stanoví povinnosti subjektů, kompetence orgánů a mechanismy prevence, hlášení a řešení incidentů. V ČR a EU vychází z národních zákonů a evropských předpisů, které definují regulované služby, povinné osoby, bezpečnostní opatření, hlášení incidentů, dohled a sankce. Důležitými principy jsou řízení rizik, proporcionalita, odpovědnost a koordinace mezi státem a regulovanými subjekty.",
      "scope": [
        {
          "t": "Základní instituty a principy",
          "d": "Právo vymezuje regulované subjekty, bezpečnostní opatření, incidenty, hlášení a dohled. Principy zahrnují přiměřenost, řízení rizik a odpovědnost."
        },
        {
          "t": "Povinné orgány a subjekty",
          "d": "Povinnosti se vztahují na vybrané poskytovatele služeb a orgány podle významu pro společnost. Orgány dohledu vydávají metodiky, přijímají hlášení a kontrolují plnění."
        },
        {
          "t": "Systém zajištění kybernetické bezpečnosti",
          "d": "Systém kombinuje prevenci, minimální bezpečnostní požadavky, hlášení incidentů, varování, protiopatření, kontrolu a spolupráci na národní i evropské úrovni."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Kyberkriminalita",
      "codes": [
        "BVV03K"
      ],
      "def": "Kyberkriminalita zahrnuje trestnou činnost páchanou proti informačním systémům nebo s jejich využitím. Prameny práva jsou národní, evropské i mezinárodní. Typické činy zahrnují neoprávněný přístup, poškození dat, podvody, vydírání ransomwarem, šíření malware, útoky na dostupnost a trestnou činnost s digitálním obsahem. Vyšetřování vyžaduje právní kvalifikaci, zajištění elektronických důkazů a často mezinárodní spolupráci.",
      "scope": [
        {
          "t": "Prameny práva",
          "d": "Kyberkriminalita se řeší podle trestního práva, procesních předpisů, evropských nástrojů a mezinárodních úmluv. Přeshraniční povaha vyžaduje spolupráci států."
        },
        {
          "t": "Typická trestná činnost",
          "d": "Patří sem neoprávněný přístup, malware, ransomware, phishing, DDoS, podvody a zásahy do dat nebo systémů. Některé činy cílí na systém, jiné systém používají jako prostředek."
        },
        {
          "t": "Klasifikace, právní kvalifikace a postupy",
          "d": "Právní kvalifikace určuje skutkovou podstatu, zavinění, škodu a postup orgánů. Důležité je odlišit incident od trestného činu a zajistit důkazy zákonně."
        },
        {
          "t": "Mezinárodní spolupráce",
          "d": "Data, pachatelé i infrastruktura bývají v různých státech. Spolupráce zahrnuje právní pomoc, kontaktní body, evropské nástroje a koordinaci vyšetřování."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Elektronické důkazy a jejich zajišťování",
      "codes": [
        "BVV03K"
      ],
      "def": "Elektronické důkazy jsou digitální informace použitelné v řízení, například logy, soubory, metadata, komunikace, obrazy disků nebo data z cloudových služeb. Jejich zajištění musí zachovat integritu, autenticitu, řetězec opatrování a zákonnost postupu. Prakticky se používá forenzní kopie, hashování, dokumentace úkonů a kontrolované nakládání s nosiči. Elektronické dokumenty mají právní význam podle původu, integrity a typu podpisu či pečeti.",
      "scope": [
        {
          "t": "Procesní instituty a praktické využití",
          "d": "Procesní právo určuje, kdy a jak lze důkazy zajistit, vydat nebo odnět. Prakticky se řeší rychlé zajištění volatilních dat a zákonnost zásahu."
        },
        {
          "t": "Nakládání s elektronickými důkazy",
          "d": "Důkaz se dokumentuje, hashuje, bezpečně ukládá a analyzuje na kopii. Řetězec opatrování ukazuje, kdo s důkazem kdy manipuloval."
        },
        {
          "t": "Elektronické dokumenty",
          "d": "Elektronický dokument může být důkazem, pokud lze posoudit jeho obsah, původ a integritu. Význam mají metadata, elektronický podpis, pečeť a časové razítko."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Ochrana osobních údajů",
      "codes": [
        "BI301K"
      ],
      "def": "Ochrana osobních údajů upravuje zpracování informací vztahujících se k identifikované nebo identifikovatelné osobě. Právní rámec stanoví zásady zákonnosti, korektnosti, transparentnosti, účelového omezení, minimalizace, přesnosti, omezení uložení, integrity a důvěrnosti. Správce musí mít právní titul, posuzovat rizika, uplatnit přiměřená opatření a respektovat práva subjektů údajů. ÚOOÚ vykonává dozor v České republice.",
      "scope": [
        {
          "t": "Právní úprava a základní definice",
          "d": "Osobní údaj identifikuje nebo může identifikovat osobu. Zpracování zahrnuje sběr, uložení, použití, předání i výmaz. Správce určuje účely a prostředky zpracování."
        },
        {
          "t": "Zásady zpracování a posouzení rizik",
          "d": "Zpracování musí být zákonné, transparentní, účelově omezené, minimalizované, přesné a zabezpečené. Rizika se posuzují podle dopadu na práva a svobody osob."
        },
        {
          "t": "Test proporcionality, účely a právní tituly",
          "d": "Proporcionalita hodnotí vhodnost, potřebnost a přiměřenost zásahu. Právní titul může být souhlas, smlouva, právní povinnost, oprávněný zájem nebo jiný titul."
        },
        {
          "t": "ÚOOÚ a jeho úloha",
          "d": "ÚOOÚ dohlíží na ochranu osobních údajů, řeší stížnosti, provádí kontroly, vydává metodiky a může ukládat nápravná opatření nebo sankce."
        }
      ]
    },
    {
      "cat": "Právo a politika pro kyberbezpečnost",
      "title": "Elektronický podpis a elektronická pečeť",
      "codes": [
        "BI301K"
      ],
      "def": "Elektronický podpis a elektronická pečeť jsou prostředky pro prokázání původu a integrity elektronických dokumentů. Podpis se váže k fyzické osobě, pečeť k právnické osobě nebo organizaci. Právní úprava rozlišuje různé úrovně elektronického podpisu s odlišnými požadavky a účinky. Datové schránky jsou zákonem upravený systém elektronického doručování, kde je důležitá identifikace adresátů, fikce doručení a praktické dopady pro komunikaci s veřejnou mocí.",
      "scope": [
        {
          "t": "Právní úprava a druhy elektronického podpisu",
          "d": "Elektronický podpis může mít různé úrovně podle použité technologie, certifikátu a prostředku pro vytváření podpisu. Vyšší úroveň dává silnější záruky identity a integrity."
        },
        {
          "t": "Elektronická pečeť",
          "d": "Elektronická pečeť potvrzuje původ a integritu dokumentu vydaného právnickou osobou. Na rozdíl od podpisu nevyjadřuje jednání konkrétní fyzické osoby."
        },
        {
          "t": "Datové schránky – právní úprava a praxe",
          "d": "Datové schránky slouží k elektronickému doručování. V praxi je důležité sledovat doručení, oprávněné osoby, fikci doručení a archivaci zpráv."
        }
      ]
    }
  ],
  "detail": {
    "Výpočetní systémy": {
      "Číselné soustavy a vztahy mezi soustavami": {
        "ex": "Adresa 0x2A je šestnáctkový zápis hodnoty 42; každá hex číslice odpovídá čtyřem bitům, takže 0x2A = 0010 1010₂.",
        "cv": "Převeď 173₁₀ do dvojkové a šestnáctkové soustavy a ověř výsledek zpětným převodem."
      },
      "Zobrazení celého čísla v počítači a aritmetika": {
        "ex": "Na 8 bitech je 127 největší kladná signed hodnota. Součet 01111111 + 00000001 dá 10000000, což je v doplňkovém kódu −128, tedy přetečení.",
        "cv": "Zapiš −18 v osmibitovém doplňkovém kódu a uveď, jak poznáš přetečení při sčítání signed čísel."
      },
      "Kódy vnitřní, vnější, detekční a opravné": {
        "ex": "Sudý paritní bit u slova 1011001 doplní počet jedniček na sudý. Jednu chybu odhalí změnou parity, ale dvě současné chyby mohou zůstat neodhaleny.",
        "cv": "Porovnej paritu a Hammingův kód z hlediska detekce a opravy chyby."
      },
      "Procesory, jejich parametry a architektury": {
        "ex": "Procesor s hlubší pipeline může mít vyšší propustnost, ale skoky a závislosti instrukcí způsobují zahození rozpracovaných instrukcí. Cache snižuje čekání na RAM.",
        "cv": "Vysvětli rozdíl mezi frekvencí procesoru, počtem jader a IPC a proč samotná frekvence nestačí k porovnání výkonu."
      },
      "Vnitřní a vnější paměti a principy jejich funkce": {
        "ex": "Cache funguje, protože programy často opakovaně používají stejná data nebo data blízko sebe. Pokud pole procházíme sekvenčně, prostorová lokalita zvyšuje počet zásahů cache.",
        "cv": "Seřaď registry, cache, RAM a SSD podle rychlosti a kapacity a vysvětli princip lokality."
      },
      "Vstupní a výstupní zařízení a jejich připojování": {
        "ex": "Síťová karta může pomocí DMA zapisovat přijaté pakety přímo do paměti bez kopírování procesorem. IOMMU omezuje, kam zařízení smí zapisovat, což je důležité bezpečnostní opatření.",
        "cv": "Popiš rozdíl mezi programovým I/O, přerušením a DMA."
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
    "Principy programování": {
      "Strukturované programování v imperativním jazyce": {
        "ex": "Výpočet průměru pole lze rozdělit na funkci suma(pole) a prumer(pole), místo aby se stejný cyklus kopíroval na více míst. Program je kratší a lépe testovatelný.",
        "cv": "Navrhni strukturu programu, který načte čísla, ověří vstup, spočítá průměr a vypíše výsledek."
      },
      "Paměťový model programu": {
        "ex": "Funkce vracející adresu lokální proměnné vrací ukazatel na zásobník, který po návratu funkce už neplatí. Pozdější dereference je nedefinované chování.",
        "cv": "Urči, kde leží globální proměnná, lokální proměnná, blok z malloc a řetězcový literál."
      },
      "Správa paměti, dynamická alokace a uživatelské datové struktury": {
        "ex": "Spojový seznam alokuje každý uzel zvlášť. Při mazání seznamu je nutné uložit next před free aktuálního uzlu; jinak po uvolnění ztratíme cestu ke zbytku seznamu.",
        "cv": "Popiš bezpečné uvolnění jednosměrného seznamu a uveď dvě typické chyby správy paměti."
      },
      "Nízkoúrovňová práce s pamětí, ukazatel, pole a ukazatelová aritmetika": {
        "ex": "U pole int a[10] je poslední platný index 9. Zápis a[10]=0 může přepsat sousední paměť a stát se bezpečnostní zranitelností.",
        "cv": "Napiš funkci, která přes ukazatel inkrementuje integer, a vysvětli, proč musí volající předat adresu."
      },
      "Způsoby ladění programu": {
        "ex": "AddressSanitizer často okamžitě ukáže řádek, kde program čte za koncem pole. Debugger pak umožní prohlédnout hodnotu indexu a zjistit, proč cyklus běžel o iteraci navíc.",
        "cv": "Popiš postup ladění programu, který občas vrací špatný výsledek jen pro velký vstup."
      },
      "Bezpečné programování a vývoj SW": {
        "ex": "SQL injection vznikne složením dotazu z textu od uživatele. Parametrizovaný dotaz oddělí data od kódu, takže vstup se nikdy neinterpretuje jako SQL příkaz.",
        "cv": "Uveď tři bezpečné vývojové praktiky, které snižují riziko zranitelností v C nebo webové aplikaci."
      }
    },
    "Databáze": {
      "Relační model, schéma a klíče": {
        "ex": "UŽIVATEL(id,email,role) je relační schéma. id je vhodný primární klíč, email může být kandidátní klíč, role může odkazovat na tabulku ROLÍ.",
        "cv": "Navrhni schéma pro evidenci bezpečnostních incidentů včetně primárního klíče."
      },
      "Integritní omezení": {
        "ex": "CHECK(zavaznost BETWEEN 1 AND 5) zabrání uložení nesmyslné severity incidentu. FOREIGN KEY zajistí, že incident odkazuje jen na existujícího analytika.",
        "cv": "Uveď omezení pro tabulku Ucet(id, email, heslo_hash, aktivni)."
      },
      "Relační algebra a spojování relací": {
        "ex": "Spojení INCIDENT ⋈ UZIVATEL přes id_analytik přidá ke každému incidentu jméno přiřazeného analytika. Projekce pak vybere jen potřebné sloupce.",
        "cv": "Zapiš relační algebrou dotaz na názvy rolí uživatele s daným id."
      },
      "SQL SELECT, spojování a agregace": {
        "ex": "SELECT stav, COUNT(*) FROM Incident GROUP BY stav vrátí počty incidentů podle stavu. HAVING COUNT(*) > 10 by ponechal jen časté stavy.",
        "cv": "Napiš SQL dotaz, který vypíše počet incidentů podle závažnosti za posledních 30 dní."
      },
      "Zpracování dotazů a indexování": {
        "ex": "Index nad email umožní rychlé vyhledání uživatele při přihlášení. Bez indexu by databáze musela projít všechny řádky tabulky uživatelů.",
        "cv": "Vysvětli, kdy index nad sloupcem stav incidentu nemusí pomoci."
      },
      "Transakce a vlastnosti transakčního zpracování": {
        "ex": "Změna stavu incidentu a vložení auditního záznamu mají být jedna transakce. Pokud audit selže, změna stavu se má vrátit, jinak by historie neodpovídala realitě.",
        "cv": "Popiš ACID na příkladu převodu peněz nebo změny oprávnění uživatele."
      }
    },
    "Softwarové a informační systémy": {
      "Vývoj a provoz softwarových systémů": {
        "ex": "Examinátor může zadat případ: organizace pořizuje nový klientský portál a musí obhájit, jak požadavky, návrh, testování, nasazení a provoz ovlivní bezpečnost i použitelnost. Zaměř se na „Vývoj a provoz softwarových systémů“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Navrhni odpověď jako u státnice: zařaď pojem do životního cyklu IS, ukaž konkrétní rozhodnutí v projektu nebo provozu a zmiň dopad na bezpečnost. Konkrétně zapoj pojem „Vývoj a provoz softwarových systémů“ a zakonči jedním rizikem nebo limitem."
      },
      "Použití UML při vývoji software": {
        "ex": "Examinátor může zadat případ: organizace pořizuje nový klientský portál a musí obhájit, jak požadavky, návrh, testování, nasazení a provoz ovlivní bezpečnost i použitelnost. Zaměř se na „Použití UML při vývoji software“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Navrhni odpověď jako u státnice: zařaď pojem do životního cyklu IS, ukaž konkrétní rozhodnutí v projektu nebo provozu a zmiň dopad na bezpečnost. Konkrétně zapoj pojem „Použití UML při vývoji software“ a zakonči jedním rizikem nebo limitem."
      },
      "Aplikované informační systémy": {
        "ex": "Examinátor může zadat případ: organizace pořizuje nový klientský portál a musí obhájit, jak požadavky, návrh, testování, nasazení a provoz ovlivní bezpečnost i použitelnost. Zaměř se na „Aplikované informační systémy“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Navrhni odpověď jako u státnice: zařaď pojem do životního cyklu IS, ukaž konkrétní rozhodnutí v projektu nebo provozu a zmiň dopad na bezpečnost. Konkrétně zapoj pojem „Aplikované informační systémy“ a zakonči jedním rizikem nebo limitem."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Examinátor může zadat případ: organizace pořizuje nový klientský portál a musí obhájit, jak požadavky, návrh, testování, nasazení a provoz ovlivní bezpečnost i použitelnost. Zaměř se na „Architektury rozsáhlých informačních systémů“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Navrhni odpověď jako u státnice: zařaď pojem do životního cyklu IS, ukaž konkrétní rozhodnutí v projektu nebo provozu a zmiň dopad na bezpečnost. Konkrétně zapoj pojem „Architektury rozsáhlých informačních systémů“ a zakonči jedním rizikem nebo limitem."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "Examinátor může zadat případ: organizace pořizuje nový klientský portál a musí obhájit, jak požadavky, návrh, testování, nasazení a provoz ovlivní bezpečnost i použitelnost. Zaměř se na „Metody vedení rozsáhlých projektů“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Navrhni odpověď jako u státnice: zařaď pojem do životního cyklu IS, ukaž konkrétní rozhodnutí v projektu nebo provozu a zmiň dopad na bezpečnost. Konkrétně zapoj pojem „Metody vedení rozsáhlých projektů“ a zakonči jedním rizikem nebo limitem."
      },
      "Řízení provozu IS": {
        "ex": "Examinátor může zadat případ: organizace pořizuje nový klientský portál a musí obhájit, jak požadavky, návrh, testování, nasazení a provoz ovlivní bezpečnost i použitelnost. Zaměř se na „Řízení provozu IS“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Navrhni odpověď jako u státnice: zařaď pojem do životního cyklu IS, ukaž konkrétní rozhodnutí v projektu nebo provozu a zmiň dopad na bezpečnost. Konkrétně zapoj pojem „Řízení provozu IS“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Organizace a řízení kyberbezpečnosti": {
      "Důvěrnost, integrita, dostupnost a nepopiratelnost": {
        "ex": "Examinátor může zadat případ: po větším incidentu vedení zjišťuje, kdo měl rozhodovat, kdo měl mít informace a které politiky byly skutečně vymahatelné. Zaměř se na „Důvěrnost, integrita, dostupnost a nepopiratelnost“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Připrav odpověď pro zkoušejícího: vysvětli pojem, ukaž odpovědnosti rolí a přidej praktický následek špatného řízení. Konkrétně zapoj pojem „Důvěrnost, integrita, dostupnost a nepopiratelnost“ a zakonči jedním rizikem nebo limitem."
      },
      "Bezpečnostní politiky a procedury": {
        "ex": "Examinátor může zadat případ: po větším incidentu vedení zjišťuje, kdo měl rozhodovat, kdo měl mít informace a které politiky byly skutečně vymahatelné. Zaměř se na „Bezpečnostní politiky a procedury“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Připrav odpověď pro zkoušejícího: vysvětli pojem, ukaž odpovědnosti rolí a přidej praktický následek špatného řízení. Konkrétně zapoj pojem „Bezpečnostní politiky a procedury“ a zakonči jedním rizikem nebo limitem."
      },
      "Struktura řízení kyberbezpečnosti": {
        "ex": "Examinátor může zadat případ: po větším incidentu vedení zjišťuje, kdo měl rozhodovat, kdo měl mít informace a které politiky byly skutečně vymahatelné. Zaměř se na „Struktura řízení kyberbezpečnosti“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Připrav odpověď pro zkoušejícího: vysvětli pojem, ukaž odpovědnosti rolí a přidej praktický následek špatného řízení. Konkrétně zapoj pojem „Struktura řízení kyberbezpečnosti“ a zakonči jedním rizikem nebo limitem."
      },
      "Role, odpovědnosti a kompetence": {
        "ex": "Examinátor může zadat případ: po větším incidentu vedení zjišťuje, kdo měl rozhodovat, kdo měl mít informace a které politiky byly skutečně vymahatelné. Zaměř se na „Role, odpovědnosti a kompetence“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Připrav odpověď pro zkoušejícího: vysvětli pojem, ukaž odpovědnosti rolí a přidej praktický následek špatného řízení. Konkrétně zapoj pojem „Role, odpovědnosti a kompetence“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Metody autentizace a řízení přístupu": {
      "Metody autentizace": {
        "ex": "Examinátor může zadat případ: kritický systém má umožnit přístup zaměstnancům, dodavatelům a administrátorům, ale omezit dopad kompromitovaného účtu. Zaměř se na „Metody autentizace“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem na konkrétním přístupovém scénáři, porovnej vhodné mechanismy a upozorni na typickou slabinu. Konkrétně zapoj pojem „Metody autentizace“ a zakonči jedním rizikem nebo limitem."
      },
      "Řízení přístupu": {
        "ex": "Examinátor může zadat případ: kritický systém má umožnit přístup zaměstnancům, dodavatelům a administrátorům, ale omezit dopad kompromitovaného účtu. Zaměř se na „Řízení přístupu“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem na konkrétním přístupovém scénáři, porovnej vhodné mechanismy a upozorni na typickou slabinu. Konkrétně zapoj pojem „Řízení přístupu“ a zakonči jedním rizikem nebo limitem."
      },
      "Biometrické metody autentizace": {
        "ex": "Examinátor může zadat případ: kritický systém má umožnit přístup zaměstnancům, dodavatelům a administrátorům, ale omezit dopad kompromitovaného účtu. Zaměř se na „Biometrické metody autentizace“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem na konkrétním přístupovém scénáři, porovnej vhodné mechanismy a upozorni na typickou slabinu. Konkrétně zapoj pojem „Biometrické metody autentizace“ a zakonči jedním rizikem nebo limitem."
      },
      "Elektronický podpis a jeho použití": {
        "ex": "Examinátor může zadat případ: kritický systém má umožnit přístup zaměstnancům, dodavatelům a administrátorům, ale omezit dopad kompromitovaného účtu. Zaměř se na „Elektronický podpis a jeho použití“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem na konkrétním přístupovém scénáři, porovnej vhodné mechanismy a upozorni na typickou slabinu. Konkrétně zapoj pojem „Elektronický podpis a jeho použití“ a zakonči jedním rizikem nebo limitem."
      },
      "Autentizace strojů a aplikací": {
        "ex": "Examinátor může zadat případ: kritický systém má umožnit přístup zaměstnancům, dodavatelům a administrátorům, ale omezit dopad kompromitovaného účtu. Zaměř se na „Autentizace strojů a aplikací“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem na konkrétním přístupovém scénáři, porovnej vhodné mechanismy a upozorni na typickou slabinu. Konkrétně zapoj pojem „Autentizace strojů a aplikací“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Analýza a řízení rizik": {
      "Asset management": {
        "ex": "Examinátor může zadat případ: nemocnice hodnotí riziko výpadku informačního systému, úniku dat a ransomware útoku před investicí do nových opatření. Zaměř se na „Asset management“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Proveď krátkou rizikovou úvahu: aktivum, hrozba, zranitelnost, dopad, opatření a zbytkové riziko. Konkrétně zapoj pojem „Asset management“ a zakonči jedním rizikem nebo limitem."
      },
      "Analýza rizik": {
        "ex": "Examinátor může zadat případ: nemocnice hodnotí riziko výpadku informačního systému, úniku dat a ransomware útoku před investicí do nových opatření. Zaměř se na „Analýza rizik“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Proveď krátkou rizikovou úvahu: aktivum, hrozba, zranitelnost, dopad, opatření a zbytkové riziko. Konkrétně zapoj pojem „Analýza rizik“ a zakonči jedním rizikem nebo limitem."
      },
      "Opatření proti rizikům a jejich účinnost": {
        "ex": "Examinátor může zadat případ: nemocnice hodnotí riziko výpadku informačního systému, úniku dat a ransomware útoku před investicí do nových opatření. Zaměř se na „Opatření proti rizikům a jejich účinnost“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Proveď krátkou rizikovou úvahu: aktivum, hrozba, zranitelnost, dopad, opatření a zbytkové riziko. Konkrétně zapoj pojem „Opatření proti rizikům a jejich účinnost“ a zakonči jedním rizikem nebo limitem."
      },
      "Řízení identity a přístupu, ACL a privilegovaní uživatelé": {
        "ex": "Examinátor může zadat případ: nemocnice hodnotí riziko výpadku informačního systému, úniku dat a ransomware útoku před investicí do nových opatření. Zaměř se na „Řízení identity a přístupu, ACL a privilegovaní uživatelé“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Proveď krátkou rizikovou úvahu: aktivum, hrozba, zranitelnost, dopad, opatření a zbytkové riziko. Konkrétně zapoj pojem „Řízení identity a přístupu, ACL a privilegovaní uživatelé“ a zakonči jedním rizikem nebo limitem."
      },
      "Audit, standardy a hodnocení bezpečnosti": {
        "ex": "Examinátor může zadat případ: nemocnice hodnotí riziko výpadku informačního systému, úniku dat a ransomware útoku před investicí do nových opatření. Zaměř se na „Audit, standardy a hodnocení bezpečnosti“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Proveď krátkou rizikovou úvahu: aktivum, hrozba, zranitelnost, dopad, opatření a zbytkové riziko. Konkrétně zapoj pojem „Audit, standardy a hodnocení bezpečnosti“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Bezpečnostní architektura": {
      "Bezpečnost sítí, izolace a segmentace": {
        "ex": "Examinátor může zadat případ: firma odděluje veřejné služby, interní systémy, databáze, správu a zálohy tak, aby chyba v jedné části neohrozila vše. Zaměř se na „Bezpečnost sítí, izolace a segmentace“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš architektonické rozhodnutí, které by zkoušející čekal: bezpečnostní hranice, kontrolu, detekci a provozní omezení. Konkrétně zapoj pojem „Bezpečnost sítí, izolace a segmentace“ a zakonči jedním rizikem nebo limitem."
      },
      "Firewally": {
        "ex": "Examinátor může zadat případ: firma odděluje veřejné služby, interní systémy, databáze, správu a zálohy tak, aby chyba v jedné části neohrozila vše. Zaměř se na „Firewally“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš architektonické rozhodnutí, které by zkoušející čekal: bezpečnostní hranice, kontrolu, detekci a provozní omezení. Konkrétně zapoj pojem „Firewally“ a zakonči jedním rizikem nebo limitem."
      },
      "Monitoring, detekce a logování": {
        "ex": "Examinátor může zadat případ: firma odděluje veřejné služby, interní systémy, databáze, správu a zálohy tak, aby chyba v jedné části neohrozila vše. Zaměř se na „Monitoring, detekce a logování“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš architektonické rozhodnutí, které by zkoušející čekal: bezpečnostní hranice, kontrolu, detekci a provozní omezení. Konkrétně zapoj pojem „Monitoring, detekce a logování“ a zakonči jedním rizikem nebo limitem."
      },
      "Bezpečnost operačních systémů": {
        "ex": "Examinátor může zadat případ: firma odděluje veřejné služby, interní systémy, databáze, správu a zálohy tak, aby chyba v jedné části neohrozila vše. Zaměř se na „Bezpečnost operačních systémů“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš architektonické rozhodnutí, které by zkoušející čekal: bezpečnostní hranice, kontrolu, detekci a provozní omezení. Konkrétně zapoj pojem „Bezpečnost operačních systémů“ a zakonči jedním rizikem nebo limitem."
      },
      "Bezpečnost dat": {
        "ex": "Examinátor může zadat případ: firma odděluje veřejné služby, interní systémy, databáze, správu a zálohy tak, aby chyba v jedné části neohrozila vše. Zaměř se na „Bezpečnost dat“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš architektonické rozhodnutí, které by zkoušející čekal: bezpečnostní hranice, kontrolu, detekci a provozní omezení. Konkrétně zapoj pojem „Bezpečnost dat“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Kyberbezpečnost v organizaci": {
      "Událost, incident, útok, zranitelnost a slabina": {
        "ex": "Examinátor může zadat případ: SOC řeší podezřelé přihlášení, možné zneužití účtu a komunikaci s vlastníkem služby. Zaměř se na „Událost, incident, útok, zranitelnost a slabina“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Odpověz postupově: co se stalo, kdo rozhoduje, jaké důkazy nebo logy potřebuješ a jaký je další krok. Konkrétně zapoj pojem „Událost, incident, útok, zranitelnost a slabina“ a zakonči jedním rizikem nebo limitem."
      },
      "Role a činnosti bezpečnostního týmu": {
        "ex": "Examinátor může zadat případ: SOC řeší podezřelé přihlášení, možné zneužití účtu a komunikaci s vlastníkem služby. Zaměř se na „Role a činnosti bezpečnostního týmu“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Odpověz postupově: co se stalo, kdo rozhoduje, jaké důkazy nebo logy potřebuješ a jaký je další krok. Konkrétně zapoj pojem „Role a činnosti bezpečnostního týmu“ a zakonči jedním rizikem nebo limitem."
      },
      "Řešení kyberbezpečnostního incidentu": {
        "ex": "Examinátor může zadat případ: SOC řeší podezřelé přihlášení, možné zneužití účtu a komunikaci s vlastníkem služby. Zaměř se na „Řešení kyberbezpečnostního incidentu“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Odpověz postupově: co se stalo, kdo rozhoduje, jaké důkazy nebo logy potřebuješ a jaký je další krok. Konkrétně zapoj pojem „Řešení kyberbezpečnostního incidentu“ a zakonči jedním rizikem nebo limitem."
      },
      "Bezpečnostní varování a příklady z praxe": {
        "ex": "Examinátor může zadat případ: SOC řeší podezřelé přihlášení, možné zneužití účtu a komunikaci s vlastníkem služby. Zaměř se na „Bezpečnostní varování a příklady z praxe“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Odpověz postupově: co se stalo, kdo rozhoduje, jaké důkazy nebo logy potřebuješ a jaký je další krok. Konkrétně zapoj pojem „Bezpečnostní varování a příklady z praxe“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Kyberútoky": {
      "Životní cyklus kyberútoku": {
        "ex": "Examinátor může zadat případ: útok začal phishingem, pokračoval spuštěním skriptu, laterálním pohybem a pokusem o exfiltraci dat. Zaměř se na „Životní cyklus kyberútoku“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Zařaď pojem do fáze útoku, uveď konkrétní techniku útočníka a navrhni prevenci nebo detekci. Konkrétně zapoj pojem „Životní cyklus kyberútoku“ a zakonči jedním rizikem nebo limitem."
      },
      "Advanced Persistent Threat": {
        "ex": "Examinátor může zadat případ: útok začal phishingem, pokračoval spuštěním skriptu, laterálním pohybem a pokusem o exfiltraci dat. Zaměř se na „Advanced Persistent Threat“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Zařaď pojem do fáze útoku, uveď konkrétní techniku útočníka a navrhni prevenci nebo detekci. Konkrétně zapoj pojem „Advanced Persistent Threat“ a zakonči jedním rizikem nebo limitem."
      },
      "MITRE ATT&CK taktiky, techniky a procedury": {
        "ex": "Examinátor může zadat případ: útok začal phishingem, pokračoval spuštěním skriptu, laterálním pohybem a pokusem o exfiltraci dat. Zaměř se na „MITRE ATT&CK taktiky, techniky a procedury“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Zařaď pojem do fáze útoku, uveď konkrétní techniku útočníka a navrhni prevenci nebo detekci. Konkrétně zapoj pojem „MITRE ATT&CK taktiky, techniky a procedury“ a zakonči jedním rizikem nebo limitem."
      },
      "Průzkum, počáteční přístup a zneužití zranitelnosti": {
        "ex": "Examinátor může zadat případ: útok začal phishingem, pokračoval spuštěním skriptu, laterálním pohybem a pokusem o exfiltraci dat. Zaměř se na „Průzkum, počáteční přístup a zneužití zranitelnosti“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Zařaď pojem do fáze útoku, uveď konkrétní techniku útočníka a navrhni prevenci nebo detekci. Konkrétně zapoj pojem „Průzkum, počáteční přístup a zneužití zranitelnosti“ a zakonči jedním rizikem nebo limitem."
      },
      "Spuštění kódu, upevnění přístupu a cílové akce": {
        "ex": "Examinátor může zadat případ: útok začal phishingem, pokračoval spuštěním skriptu, laterálním pohybem a pokusem o exfiltraci dat. Zaměř se na „Spuštění kódu, upevnění přístupu a cílové akce“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Zařaď pojem do fáze útoku, uveď konkrétní techniku útočníka a navrhni prevenci nebo detekci. Konkrétně zapoj pojem „Spuštění kódu, upevnění přístupu a cílové akce“ a zakonči jedním rizikem nebo limitem."
      },
      "Obrana na úrovni hostitele a sítě": {
        "ex": "Examinátor může zadat případ: útok začal phishingem, pokračoval spuštěním skriptu, laterálním pohybem a pokusem o exfiltraci dat. Zaměř se na „Obrana na úrovni hostitele a sítě“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Zařaď pojem do fáze útoku, uveď konkrétní techniku útočníka a navrhni prevenci nebo detekci. Konkrétně zapoj pojem „Obrana na úrovni hostitele a sítě“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Vymezení bezpečnostních studií": {
      "Pojmy bezpečnost, hrozba a riziko": {
        "ex": "Examinátor může zadat případ: výpadek digitální veřejné služby má technické, společenské, ekonomické i politické dopady. Zaměř se na „Pojmy bezpečnost, hrozba a riziko“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem mimo čisté IT: ukaž chráněné hodnoty, aktéry, dopady a politické nebo společenské souvislosti. Konkrétně zapoj pojem „Pojmy bezpečnost, hrozba a riziko“ a zakonči jedním rizikem nebo limitem."
      },
      "Vnitřní a vnější bezpečnost a sektory": {
        "ex": "Examinátor může zadat případ: výpadek digitální veřejné služby má technické, společenské, ekonomické i politické dopady. Zaměř se na „Vnitřní a vnější bezpečnost a sektory“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem mimo čisté IT: ukaž chráněné hodnoty, aktéry, dopady a politické nebo společenské souvislosti. Konkrétně zapoj pojem „Vnitřní a vnější bezpečnost a sektory“ a zakonči jedním rizikem nebo limitem."
      },
      "Bezpečnostní politika a její analýza": {
        "ex": "Examinátor může zadat případ: výpadek digitální veřejné služby má technické, společenské, ekonomické i politické dopady. Zaměř se na „Bezpečnostní politika a její analýza“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli pojem mimo čisté IT: ukaž chráněné hodnoty, aktéry, dopady a politické nebo společenské souvislosti. Konkrétně zapoj pojem „Bezpečnostní politika a její analýza“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Bezpečnostní strategie": {
      "Strategické dokumenty České republiky": {
        "ex": "Examinátor může zadat případ: stát stanovuje priority kyberbezpečnosti a potřebuje propojit strategické cíle s institucemi, zdroji a měřitelnými kroky. Zaměř se na „Strategické dokumenty České republiky“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Propoj strategickou úroveň s praxí: cíl, instituce, nástroje, odpovědnost, zdroje a měření výsledků. Konkrétně zapoj pojem „Strategické dokumenty České republiky“ a zakonči jedním rizikem nebo limitem."
      },
      "Význam kyberbezpečnosti ve strategiích": {
        "ex": "Examinátor může zadat případ: stát stanovuje priority kyberbezpečnosti a potřebuje propojit strategické cíle s institucemi, zdroji a měřitelnými kroky. Zaměř se na „Význam kyberbezpečnosti ve strategiích“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Propoj strategickou úroveň s praxí: cíl, instituce, nástroje, odpovědnost, zdroje a měření výsledků. Konkrétně zapoj pojem „Význam kyberbezpečnosti ve strategiích“ a zakonči jedním rizikem nebo limitem."
      },
      "Bezpečnostní systém ČR a role institucí": {
        "ex": "Examinátor může zadat případ: stát stanovuje priority kyberbezpečnosti a potřebuje propojit strategické cíle s institucemi, zdroji a měřitelnými kroky. Zaměř se na „Bezpečnostní systém ČR a role institucí“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Propoj strategickou úroveň s praxí: cíl, instituce, nástroje, odpovědnost, zdroje a měření výsledků. Konkrétně zapoj pojem „Bezpečnostní systém ČR a role institucí“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Kyberválka": {
      "Definice, historie a současné trendy": {
        "ex": "Examinátor může zadat případ: kyberoperace vedená v mezinárodním konfliktu kombinuje technický útok, špionáž, informační působení a problém přisouzení. Zaměř se na „Definice, historie a současné trendy“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Rozliš technickou, politickou a právní rovinu a ukaž, proč je v kyberprostoru obtížné určit hranice konfliktu. Konkrétně zapoj pojem „Definice, historie a současné trendy“ a zakonči jedním rizikem nebo limitem."
      },
      "Aktéři a přisouzení kyberútoků": {
        "ex": "Examinátor může zadat případ: kyberoperace vedená v mezinárodním konfliktu kombinuje technický útok, špionáž, informační působení a problém přisouzení. Zaměř se na „Aktéři a přisouzení kyberútoků“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Rozliš technickou, politickou a právní rovinu a ukaž, proč je v kyberprostoru obtížné určit hranice konfliktu. Konkrétně zapoj pojem „Aktéři a přisouzení kyberútoků“ a zakonči jedním rizikem nebo limitem."
      },
      "Odstrašení v kyberprostoru": {
        "ex": "Examinátor může zadat případ: kyberoperace vedená v mezinárodním konfliktu kombinuje technický útok, špionáž, informační působení a problém přisouzení. Zaměř se na „Odstrašení v kyberprostoru“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Rozliš technickou, politickou a právní rovinu a ukaž, proč je v kyberprostoru obtížné určit hranice konfliktu. Konkrétně zapoj pojem „Odstrašení v kyberprostoru“ a zakonči jedním rizikem nebo limitem."
      },
      "Netwars a kyberkonflikt": {
        "ex": "Examinátor může zadat případ: kyberoperace vedená v mezinárodním konfliktu kombinuje technický útok, špionáž, informační působení a problém přisouzení. Zaměř se na „Netwars a kyberkonflikt“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Rozliš technickou, politickou a právní rovinu a ukaž, proč je v kyberprostoru obtížné určit hranice konfliktu. Konkrétně zapoj pojem „Netwars a kyberkonflikt“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Ochrana kritické infrastruktury": {
      "Vymezení kritické infrastruktury": {
        "ex": "Examinátor může zadat případ: útok na energetiku nebo zdravotnictví může narušit nejen IT, ale i fyzickou službu a důvěru veřejnosti. Zaměř se na „Vymezení kritické infrastruktury“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Začni dopadem na službu, popiš závislosti a navrhni opatření pro odolnost a obnovu. Konkrétně zapoj pojem „Vymezení kritické infrastruktury“ a zakonči jedním rizikem nebo limitem."
      },
      "Kyberútoky na kritickou infrastrukturu": {
        "ex": "Examinátor může zadat případ: útok na energetiku nebo zdravotnictví může narušit nejen IT, ale i fyzickou službu a důvěru veřejnosti. Zaměř se na „Kyberútoky na kritickou infrastrukturu“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Začni dopadem na službu, popiš závislosti a navrhni opatření pro odolnost a obnovu. Konkrétně zapoj pojem „Kyberútoky na kritickou infrastrukturu“ a zakonči jedním rizikem nebo limitem."
      },
      "Přisouzení a odstrašování": {
        "ex": "Examinátor může zadat případ: útok na energetiku nebo zdravotnictví může narušit nejen IT, ale i fyzickou službu a důvěru veřejnosti. Zaměř se na „Přisouzení a odstrašování“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Začni dopadem na službu, popiš závislosti a navrhni opatření pro odolnost a obnovu. Konkrétně zapoj pojem „Přisouzení a odstrašování“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Právní úprava kyberbezpečnosti v ČR a EU": {
      "Základní instituty a principy": {
        "ex": "Examinátor může zadat případ: provozovatel důležité služby posuzuje své povinnosti, řízení rizik, hlášení incidentů a roli orgánu dohledu. Zaměř se na „Základní instituty a principy“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli právní institut prakticky: kdo má povinnost, co musí doložit, komu hlásí a jak se posuzuje přiměřenost. Konkrétně zapoj pojem „Základní instituty a principy“ a zakonči jedním rizikem nebo limitem."
      },
      "Povinné orgány a subjekty": {
        "ex": "Examinátor může zadat případ: provozovatel důležité služby posuzuje své povinnosti, řízení rizik, hlášení incidentů a roli orgánu dohledu. Zaměř se na „Povinné orgány a subjekty“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli právní institut prakticky: kdo má povinnost, co musí doložit, komu hlásí a jak se posuzuje přiměřenost. Konkrétně zapoj pojem „Povinné orgány a subjekty“ a zakonči jedním rizikem nebo limitem."
      },
      "Systém zajištění kybernetické bezpečnosti": {
        "ex": "Examinátor může zadat případ: provozovatel důležité služby posuzuje své povinnosti, řízení rizik, hlášení incidentů a roli orgánu dohledu. Zaměř se na „Systém zajištění kybernetické bezpečnosti“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli právní institut prakticky: kdo má povinnost, co musí doložit, komu hlásí a jak se posuzuje přiměřenost. Konkrétně zapoj pojem „Systém zajištění kybernetické bezpečnosti“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Kyberkriminalita": {
      "Prameny práva": {
        "ex": "Examinátor může zadat případ: organizace zjistí kompromitaci účtu, únik dat a podezření na vydírání, přičemž část infrastruktury je v zahraničí. Zaměř se na „Prameny práva“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Spoj technický incident s právním postupem: možné jednání pachatele, důkazy, kvalifikace a přeshraniční spolupráce. Konkrétně zapoj pojem „Prameny práva“ a zakonči jedním rizikem nebo limitem."
      },
      "Typická trestná činnost": {
        "ex": "Examinátor může zadat případ: organizace zjistí kompromitaci účtu, únik dat a podezření na vydírání, přičemž část infrastruktury je v zahraničí. Zaměř se na „Typická trestná činnost“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Spoj technický incident s právním postupem: možné jednání pachatele, důkazy, kvalifikace a přeshraniční spolupráce. Konkrétně zapoj pojem „Typická trestná činnost“ a zakonči jedním rizikem nebo limitem."
      },
      "Klasifikace, právní kvalifikace a postupy": {
        "ex": "Examinátor může zadat případ: organizace zjistí kompromitaci účtu, únik dat a podezření na vydírání, přičemž část infrastruktury je v zahraničí. Zaměř se na „Klasifikace, právní kvalifikace a postupy“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Spoj technický incident s právním postupem: možné jednání pachatele, důkazy, kvalifikace a přeshraniční spolupráce. Konkrétně zapoj pojem „Klasifikace, právní kvalifikace a postupy“ a zakonči jedním rizikem nebo limitem."
      },
      "Mezinárodní spolupráce": {
        "ex": "Examinátor může zadat případ: organizace zjistí kompromitaci účtu, únik dat a podezření na vydírání, přičemž část infrastruktury je v zahraničí. Zaměř se na „Mezinárodní spolupráce“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Spoj technický incident s právním postupem: možné jednání pachatele, důkazy, kvalifikace a přeshraniční spolupráce. Konkrétně zapoj pojem „Mezinárodní spolupráce“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Elektronické důkazy a jejich zajišťování": {
      "Procesní instituty a praktické využití": {
        "ex": "Examinátor může zadat případ: po incidentu je nutné zajistit notebook, logy a e-mailovou komunikaci tak, aby důkaz nebyl zpochybněn. Zaměř se na „Procesní instituty a praktické využití“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš forenzně čistý postup: zajištění, hash, dokumentace, práce na kopii a řetězec opatrování. Konkrétně zapoj pojem „Procesní instituty a praktické využití“ a zakonči jedním rizikem nebo limitem."
      },
      "Nakládání s elektronickými důkazy": {
        "ex": "Examinátor může zadat případ: po incidentu je nutné zajistit notebook, logy a e-mailovou komunikaci tak, aby důkaz nebyl zpochybněn. Zaměř se na „Nakládání s elektronickými důkazy“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš forenzně čistý postup: zajištění, hash, dokumentace, práce na kopii a řetězec opatrování. Konkrétně zapoj pojem „Nakládání s elektronickými důkazy“ a zakonči jedním rizikem nebo limitem."
      },
      "Elektronické dokumenty": {
        "ex": "Examinátor může zadat případ: po incidentu je nutné zajistit notebook, logy a e-mailovou komunikaci tak, aby důkaz nebyl zpochybněn. Zaměř se na „Elektronické dokumenty“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Popiš forenzně čistý postup: zajištění, hash, dokumentace, práce na kopii a řetězec opatrování. Konkrétně zapoj pojem „Elektronické dokumenty“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Ochrana osobních údajů": {
      "Právní úprava a základní definice": {
        "ex": "Examinátor může zadat případ: nová aplikace zpracovává identifikační údaje, kontakty, logy a někdy i údaje o poloze uživatelů. Zaměř se na „Právní úprava a základní definice“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Aplikuj zásady GDPR: účel, právní titul, minimalizace, transparentnost, zabezpečení a riziko pro osoby. Konkrétně zapoj pojem „Právní úprava a základní definice“ a zakonči jedním rizikem nebo limitem."
      },
      "Zásady zpracování a posouzení rizik": {
        "ex": "Examinátor může zadat případ: nová aplikace zpracovává identifikační údaje, kontakty, logy a někdy i údaje o poloze uživatelů. Zaměř se na „Zásady zpracování a posouzení rizik“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Aplikuj zásady GDPR: účel, právní titul, minimalizace, transparentnost, zabezpečení a riziko pro osoby. Konkrétně zapoj pojem „Zásady zpracování a posouzení rizik“ a zakonči jedním rizikem nebo limitem."
      },
      "Test proporcionality, účely a právní tituly": {
        "ex": "Examinátor může zadat případ: nová aplikace zpracovává identifikační údaje, kontakty, logy a někdy i údaje o poloze uživatelů. Zaměř se na „Test proporcionality, účely a právní tituly“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Aplikuj zásady GDPR: účel, právní titul, minimalizace, transparentnost, zabezpečení a riziko pro osoby. Konkrétně zapoj pojem „Test proporcionality, účely a právní tituly“ a zakonči jedním rizikem nebo limitem."
      },
      "ÚOOÚ a jeho úloha": {
        "ex": "Examinátor může zadat případ: nová aplikace zpracovává identifikační údaje, kontakty, logy a někdy i údaje o poloze uživatelů. Zaměř se na „ÚOOÚ a jeho úloha“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Aplikuj zásady GDPR: účel, právní titul, minimalizace, transparentnost, zabezpečení a riziko pro osoby. Konkrétně zapoj pojem „ÚOOÚ a jeho úloha“ a zakonči jedním rizikem nebo limitem."
      }
    },
    "Elektronický podpis a elektronická pečeť": {
      "Právní úprava a druhy elektronického podpisu": {
        "ex": "Examinátor může zadat případ: úřad nebo firma elektronicky doručuje dokumenty a musí prokázat původ, integritu, doručení a právní účinky. Zaměř se na „Právní úprava a druhy elektronického podpisu“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli technologii i právní účinek: identita nebo původ, integrita, certifikát, čas a praktické riziko. Konkrétně zapoj pojem „Právní úprava a druhy elektronického podpisu“ a zakonči jedním rizikem nebo limitem."
      },
      "Elektronická pečeť": {
        "ex": "Examinátor může zadat případ: úřad nebo firma elektronicky doručuje dokumenty a musí prokázat původ, integritu, doručení a právní účinky. Zaměř se na „Elektronická pečeť“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli technologii i právní účinek: identita nebo původ, integrita, certifikát, čas a praktické riziko. Konkrétně zapoj pojem „Elektronická pečeť“ a zakonči jedním rizikem nebo limitem."
      },
      "Datové schránky – právní úprava a praxe": {
        "ex": "Examinátor může zadat případ: úřad nebo firma elektronicky doručuje dokumenty a musí prokázat původ, integritu, doručení a právní účinky. Zaměř se na „Datové schránky – právní úprava a praxe“ a ukaž, jak by tento pojem změnil konkrétní rozhodnutí, postup nebo kontrolu.",
        "cv": "Vysvětli technologii i právní účinek: identita nebo původ, integrita, certifikát, čas a praktické riziko. Konkrétně zapoj pojem „Datové schránky – právní úprava a praxe“ a zakonči jedním rizikem nebo limitem."
      }
    }
  },
  "solutions": {
    "Výpočetní systémy": {
      "Číselné soustavy a vztahy mezi soustavami": {
        "ex": "Hex zápis zkracuje binární data: 2 je 0010 a A je 1010. Proto 0x2A odpovídá 00101010₂ a výpočet 2·16+10=42 potvrzuje desítkovou hodnotu.",
        "cv": "173 dělením nebo rozkladem je 128+32+8+4+1, tedy 10101101₂. Po čtveřicích 1010 1101 dostaneme AD₁₆. Kontrola: 10·16+13=173."
      },
      "Zobrazení celého čísla v počítači a aritmetika": {
        "ex": "Přetečení signed aritmetiky nastane, když sečteme dvě kladná čísla a vyjde záporné, nebo dvě záporná a vyjde kladné. Bitový výsledek existuje, ale neodpovídá matematickému výsledku v daném rozsahu.",
        "cv": "+18 je 00010010, inverze 11101101 a plus 1 je 11101110. Přetečení poznáme u sčítání operandů stejného znaménka, pokud výsledek má opačné znaménko."
      },
      "Kódy vnitřní, vnější, detekční a opravné": {
        "ex": "Parita je jednoduchý detekční kód s malou režií. Neurčí pozici chyby a neumí ji opravit. Je vhodná jen pro jednoduchou detekci lichého počtu chyb.",
        "cv": "Parita typicky odhalí lichý počet bitových chyb, ale neopravuje. Hammingův kód má více kontrolních bitů; syndrom určí pozici jedné chybné cifry, takže jednu chybu opraví a některé vícenásobné chyby detekuje."
      },
      "Procesory, jejich parametry a architektury": {
        "ex": "Výkon procesoru závisí na instrukční sadě, IPC, frekvenci, paralelismu, cache i paměťovém subsystému. Vyšší frekvence nepomůže, pokud procesor často čeká na paměť nebo má nízké IPC.",
        "cv": "Frekvence říká počet taktů za sekundu, IPC počet instrukcí na takt a počet jader kolik nezávislých výpočetních jednotek může běžet paralelně. Výkon přibližně souvisí s frekvencí×IPC×využitelnými jádry, omezen je ale programem a pamětí."
      },
      "Vnitřní a vnější paměti a principy jejich funkce": {
        "ex": "Paměťová hierarchie je kompromis: malé rychlé paměti drží právě používaná data a velké pomalejší paměti drží zbytek. Lokalita umožňuje, aby cache měla vysoký zásahový poměr.",
        "cv": "Od nejrychlejších: registry, cache, RAM, SSD. Kapacita obvykle roste opačným směrem. Časová lokalita znamená opakované použití stejné položky, prostorová lokalita použití sousedních adres."
      },
      "Vstupní a výstupní zařízení a jejich připojování": {
        "ex": "DMA zvyšuje výkon, ale zařízení získává přímý přístup k paměti. Proto moderní systémy používají izolaci zařízení, ovladače a IOMMU, aby chyba nebo útok přes periférii nepoškodil libovolnou paměť.",
        "cv": "Programové I/O znamená, že CPU aktivně čte nebo zapisuje registr zařízení. Přerušení umožní zařízení upozornit CPU až při události. DMA přenáší bloky dat mezi zařízením a pamětí bez průběžné účasti CPU."
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
    "Principy programování": {
      "Strukturované programování v imperativním jazyce": {
        "ex": "Podprogramy snižují duplicitu a zlepšují kontrolu toku. Strukturovaný kód lze číst shora dolů a každou funkci testovat samostatně.",
        "cv": "Rozumné členění: readNumbers(), validateNumbers(), average(numbers), printResult(avg). Hlavní funkce pouze řídí kroky a chyby řeší na jasně určeném místě."
      },
      "Paměťový model programu": {
        "ex": "Životnost objektu musí odpovídat použití ukazatele. Lokální proměnná zaniká při návratu z funkce, zatímco alokace na haldě trvá do free.",
        "cv": "Globální proměnná je ve statické oblasti, lokální automatická obvykle na zásobníku, malloc blok na haldě a řetězcový literál v paměti programu nebo read-only statické oblasti podle implementace."
      },
      "Správa paměti, dynamická alokace a uživatelské datové struktury": {
        "ex": "Správné uvolnění datové struktury musí projít všechny vlastněné alokace přesně jednou. Vlastnictví paměti má být jasné: kdo alokuje, kdo uvolňuje.",
        "cv": "Postup: p=head; dokud p!=NULL, uložit next=p->next, free(p), p=next. Typické chyby: memory leak při neprovedení free, use-after-free při použití uvolněného uzlu, double free při opakovaném uvolnění."
      },
      "Nízkoúrovňová práce s pamětí, ukazatel, pole a ukazatelová aritmetika": {
        "ex": "C nekontroluje meze automaticky. Bezpečný kód musí nést velikost pole spolu s ukazatelem a ověřovat indexy před přístupem.",
        "cv": "void inc(int *p){ if(p) (*p)++; } Volání: inc(&x). Volající předá adresu proměnné, aby funkce měnila původní objekt, ne jen lokální kopii hodnoty."
      },
      "Způsoby ladění programu": {
        "ex": "Paměťové chyby se často projeví později než vzniknou. Kombinace reprodukovatelného vstupu, sanitizeru a breakpointů pomáhá najít příčinu, ne jen místo pádu.",
        "cv": "Zmenšit vstup na reprodukovatelný případ, přidat kontrolní aserce, spustit sanitizer, nastavit breakpoint před podezřelý cyklus, sledovat indexy a mezní hodnoty, porovnat očekávané invarianty po každé iteraci."
      },
      "Bezpečné programování a vývoj SW": {
        "ex": "Bezpečnost musí být součástí návrhu a implementace, ne až poslední kontrolou. Vstupy jsou nedůvěryhodné, chyby se mají ošetřit bezpečně a citlivá data minimalizovat.",
        "cv": "Praktiky: validace vstupů a kontrola mezí, parametrizované SQL dotazy, používání bezpečných knihoven místo ruční kryptografie, code review, statická analýza, fuzzing a běh s minimálními oprávněními."
      }
    },
    "Databáze": {
      "Relační model, schéma a klíče": {
        "ex": "Klíč má jednoznačně identifikovat řádek a neměl by se měnit. Umělý identifikátor často zjednoduší odkazy z jiných tabulek.",
        "cv": "INCIDENT(id_incident, cas, zavaznost, stav, id_analytik). Primární klíč id_incident. id_analytik může být cizí klíč na UZIVATEL(id)."
      },
      "Integritní omezení": {
        "ex": "Integritní omezení přesouvají část kontroly do databáze, takže pravidla platí pro všechny aplikace, které s daty pracují.",
        "cv": "id PRIMARY KEY, email UNIQUE NOT NULL, heslo_hash NOT NULL, aktivni NOT NULL DEFAULT true. Lze doplnit CHECK na formát nebo stav, ale složité kontroly patří spíš do aplikace."
      },
      "Relační algebra a spojování relací": {
        "ex": "Join je základ normalizovaného modelu: data jsou rozdělená bez redundance a při dotazu se skládají podle klíčů.",
        "cv": "Například π_nazev(σ_UZIVATEL.id=5(UZIVATEL ⋈ UZIVATEL_ROLE ⋈ ROLE)), přes odpovídající cizí klíče. Nejprve spojíme vazební tabulky, pak filtrujeme uživatele a projektujeme název role."
      },
      "SQL SELECT, spojování a agregace": {
        "ex": "GROUP BY mění úroveň výsledku z jednotlivých řádků na skupiny. Agregační funkce počítají hodnotu za každou skupinu.",
        "cv": "SELECT zavaznost, COUNT(*) FROM Incident WHERE cas >= CURRENT_DATE - INTERVAL '30 days' GROUP BY zavaznost ORDER BY zavaznost; WHERE filtruje čas před seskupením."
      },
      "Zpracování dotazů a indexování": {
        "ex": "Optimalizátor volí index jen tehdy, když očekává menší cenu než sekvenční průchod. U málo selektivních hodnot může být levnější přečíst tabulku.",
        "cv": "Pokud má stav jen několik hodnot a dotaz vybírá velkou část tabulky, index vrátí mnoho odkazů a následné čtení řádků může být dražší než sekvenční scan. Index také zpomaluje zápisy."
      },
      "Transakce a vlastnosti transakčního zpracování": {
        "ex": "Transakce chrání invarianty databáze i při selhání uprostřed operace. Izolace navíc brání tomu, aby souběžné operace viděly nekonzistentní mezistav.",
        "cv": "Atomicita: odebrání staré role a přidání nové proběhne celé nebo vůbec. Konzistence: omezení zůstanou splněna. Izolace: souběžný dotaz nevidí napůl změněné role. Trvanlivost: po COMMIT změna přežije pád systému."
      }
    },
    "Softwarové a informační systémy": {
      "Vývoj a provoz softwarových systémů": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Softwarové a informační systémy“ a hned ho ukáže na situaci typu portál klientů, ERP nebo nemocniční AIS. Vývoj zahrnuje požadavky, návrh, implementaci, testování a nasazení. Provoz řeší monitoring, incidenty, změny, podporu uživatelů a údržbu. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Vývoj zahrnuje požadavky, návrh, implementaci, testování a nasazení. Provoz řeší monitoring, incidenty, změny, podporu uživatelů a údržbu. Ve státnicové odpovědi přidej konkrétní scénář (portál klientů, ERP nebo nemocniční AIS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bezpečnost řešená až na konci projektu vede k drahým opravám a slabému provozu."
      },
      "Použití UML při vývoji software": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Softwarové a informační systémy“ a hned ho ukáže na situaci typu portál klientů, ERP nebo nemocniční AIS. UML poskytuje diagramy pro modelování struktury a chování systému, například use case, class, sequence a activity diagram. Pomáhá sdílet návrh mezi analytiky, vývojáři a zadavateli. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: UML poskytuje diagramy pro modelování struktury a chování systému, například use case, class, sequence a activity diagram. Pomáhá sdílet návrh mezi analytiky, vývojáři a zadavateli. Ve státnicové odpovědi přidej konkrétní scénář (portál klientů, ERP nebo nemocniční AIS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bezpečnost řešená až na konci projektu vede k drahým opravám a slabému provozu."
      },
      "Aplikované informační systémy": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Softwarové a informační systémy“ a hned ho ukáže na situaci typu portál klientů, ERP nebo nemocniční AIS. AIS podporují konkrétní organizační domény, například výrobu, obchod nebo veřejnou správu. Spojují software, data, procesy, role a infrastrukturu. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: AIS podporují konkrétní organizační domény, například výrobu, obchod nebo veřejnou správu. Spojují software, data, procesy, role a infrastrukturu. Ve státnicové odpovědi přidej konkrétní scénář (portál klientů, ERP nebo nemocniční AIS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bezpečnost řešená až na konci projektu vede k drahým opravám a slabému provozu."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Softwarové a informační systémy“ a hned ho ukáže na situaci typu portál klientů, ERP nebo nemocniční AIS. Rozsáhlé IS používají vrstvení, služby, integrační rozhraní a oddělení prezentační, aplikační a datové vrstvy. Řeší škálování, dostupnost, bezpečnost a audit. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Rozsáhlé IS používají vrstvení, služby, integrační rozhraní a oddělení prezentační, aplikační a datové vrstvy. Řeší škálování, dostupnost, bezpečnost a audit. Ve státnicové odpovědi přidej konkrétní scénář (portál klientů, ERP nebo nemocniční AIS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bezpečnost řešená až na konci projektu vede k drahým opravám a slabému provozu."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Softwarové a informační systémy“ a hned ho ukáže na situaci typu portál klientů, ERP nebo nemocniční AIS. Řízení projektu pracuje s rozsahem, harmonogramem, riziky, změnami, stakeholdery a akceptací. U velkých IS je kritická migrace dat a zavedení do organizace. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Řízení projektu pracuje s rozsahem, harmonogramem, riziky, změnami, stakeholdery a akceptací. U velkých IS je kritická migrace dat a zavedení do organizace. Ve státnicové odpovědi přidej konkrétní scénář (portál klientů, ERP nebo nemocniční AIS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bezpečnost řešená až na konci projektu vede k drahým opravám a slabému provozu."
      },
      "Řízení provozu IS": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Softwarové a informační systémy“ a hned ho ukáže na situaci typu portál klientů, ERP nebo nemocniční AIS. Provoz IS zahrnuje SLA, monitoring, zálohy, obnovu, patchování, incident management, správu kapacit a řízené nasazování změn. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Provoz IS zahrnuje SLA, monitoring, zálohy, obnovu, patchování, incident management, správu kapacit a řízené nasazování změn. Ve státnicové odpovědi přidej konkrétní scénář (portál klientů, ERP nebo nemocniční AIS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bezpečnost řešená až na konci projektu vede k drahým opravám a slabému provozu."
      }
    },
    "Organizace a řízení kyberbezpečnosti": {
      "Důvěrnost, integrita, dostupnost a nepopiratelnost": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Organizace a řízení kyberbezpečnosti“ a hned ho ukáže na situaci typu ransomware incident, výjimka z politiky nebo práce bezpečnostní komise. Důvěrnost chrání před neoprávněným čtením, integrita před změnou, dostupnost před výpadkem a nepopiratelnost před popřením původu akce. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Důvěrnost chrání před neoprávněným čtením, integrita před změnou, dostupnost před výpadkem a nepopiratelnost před popřením původu akce. Ve státnicové odpovědi přidej konkrétní scénář (ransomware incident, výjimka z politiky nebo práce bezpečnostní komise), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nejasný mandát způsobí pomalou eskalaci a nikdo nepřijme zbytkové riziko."
      },
      "Bezpečnostní politiky a procedury": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Organizace a řízení kyberbezpečnosti“ a hned ho ukáže na situaci typu ransomware incident, výjimka z politiky nebo práce bezpečnostní komise. Politika stanoví závazná pravidla a cíle, procedury popisují konkrétní postupy. Musí být schválené, známé, vymahatelné a pravidelně aktualizované. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Politika stanoví závazná pravidla a cíle, procedury popisují konkrétní postupy. Musí být schválené, známé, vymahatelné a pravidelně aktualizované. Ve státnicové odpovědi přidej konkrétní scénář (ransomware incident, výjimka z politiky nebo práce bezpečnostní komise), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nejasný mandát způsobí pomalou eskalaci a nikdo nepřijme zbytkové riziko."
      },
      "Struktura řízení kyberbezpečnosti": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Organizace a řízení kyberbezpečnosti“ a hned ho ukáže na situaci typu ransomware incident, výjimka z politiky nebo práce bezpečnostní komise. Řízení definuje orgány, komise, reporting, eskalace a vztah bezpečnosti k vedení organizace. Cílem je, aby bezpečnost měla mandát a vazbu na rizika organizace. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Řízení definuje orgány, komise, reporting, eskalace a vztah bezpečnosti k vedení organizace. Cílem je, aby bezpečnost měla mandát a vazbu na rizika organizace. Ve státnicové odpovědi přidej konkrétní scénář (ransomware incident, výjimka z politiky nebo práce bezpečnostní komise), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nejasný mandát způsobí pomalou eskalaci a nikdo nepřijme zbytkové riziko."
      },
      "Role, odpovědnosti a kompetence": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Organizace a řízení kyberbezpečnosti“ a hned ho ukáže na situaci typu ransomware incident, výjimka z politiky nebo práce bezpečnostní komise. Role jako CISO, vlastník aktiva, správce systému, bezpečnostní tým a uživatel mají odlišné odpovědnosti. Kompetence musí odpovídat pravomocem a odpovědnosti. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Role jako CISO, vlastník aktiva, správce systému, bezpečnostní tým a uživatel mají odlišné odpovědnosti. Kompetence musí odpovídat pravomocem a odpovědnosti. Ve státnicové odpovědi přidej konkrétní scénář (ransomware incident, výjimka z politiky nebo práce bezpečnostní komise), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nejasný mandát způsobí pomalou eskalaci a nikdo nepřijme zbytkové riziko."
      }
    },
    "Metody autentizace a řízení přístupu": {
      "Metody autentizace": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Metody autentizace a řízení přístupu“ a hned ho ukáže na situaci typu administrátorský účet, dodavatelský VPN přístup nebo role účetního. Autentizace může používat heslo, jednorázový kód, hardwarový token, certifikát, passkey nebo biometrický znak. Vícefaktorová autentizace kombinuje nezávislé faktory. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Autentizace může používat heslo, jednorázový kód, hardwarový token, certifikát, passkey nebo biometrický znak. Vícefaktorová autentizace kombinuje nezávislé faktory. Ve státnicové odpovědi přidej konkrétní scénář (administrátorský účet, dodavatelský VPN přístup nebo role účetního), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: sdílené účty, slabá MFA nebo příliš široká oprávnění zvyšují dopad kompromitace."
      },
      "Řízení přístupu": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Metody autentizace a řízení přístupu“ a hned ho ukáže na situaci typu administrátorský účet, dodavatelský VPN přístup nebo role účetního. Autorizace se opírá o modely jako DAC, MAC, RBAC nebo ABAC. Princip nejmenších oprávnění omezuje dopad kompromitace účtu. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Autorizace se opírá o modely jako DAC, MAC, RBAC nebo ABAC. Princip nejmenších oprávnění omezuje dopad kompromitace účtu. Ve státnicové odpovědi přidej konkrétní scénář (administrátorský účet, dodavatelský VPN přístup nebo role účetního), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: sdílené účty, slabá MFA nebo příliš široká oprávnění zvyšují dopad kompromitace."
      },
      "Biometrické metody autentizace": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Metody autentizace a řízení přístupu“ a hned ho ukáže na situaci typu administrátorský účet, dodavatelský VPN přístup nebo role účetního. Biometrie používá fyzické nebo behaviorální znaky. Výhodou je pohodlí, rizikem nemožnost snadné změny kompromitovaného biometrického znaku a otázky soukromí. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Biometrie používá fyzické nebo behaviorální znaky. Výhodou je pohodlí, rizikem nemožnost snadné změny kompromitovaného biometrického znaku a otázky soukromí. Ve státnicové odpovědi přidej konkrétní scénář (administrátorský účet, dodavatelský VPN přístup nebo role účetního), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: sdílené účty, slabá MFA nebo příliš široká oprávnění zvyšují dopad kompromitace."
      },
      "Elektronický podpis a jeho použití": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Metody autentizace a řízení přístupu“ a hned ho ukáže na situaci typu administrátorský účet, dodavatelský VPN přístup nebo role účetního. Elektronický podpis používá kryptografii k prokázání integrity a původu dokumentu. Právní účinky závisí na typu podpisu, certifikátu a právním rámci. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Elektronický podpis používá kryptografii k prokázání integrity a původu dokumentu. Právní účinky závisí na typu podpisu, certifikátu a právním rámci. Ve státnicové odpovědi přidej konkrétní scénář (administrátorský účet, dodavatelský VPN přístup nebo role účetního), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: sdílené účty, slabá MFA nebo příliš široká oprávnění zvyšují dopad kompromitace."
      },
      "Autentizace strojů a aplikací": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Metody autentizace a řízení přístupu“ a hned ho ukáže na situaci typu administrátorský účet, dodavatelský VPN přístup nebo role účetního. Stroje a aplikace se autentizují certifikáty, klíči, tokeny nebo vzájemným TLS. Nutná je bezpečná správa tajemství a rotace klíčů. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Stroje a aplikace se autentizují certifikáty, klíči, tokeny nebo vzájemným TLS. Nutná je bezpečná správa tajemství a rotace klíčů. Ve státnicové odpovědi přidej konkrétní scénář (administrátorský účet, dodavatelský VPN přístup nebo role účetního), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: sdílené účty, slabá MFA nebo příliš široká oprávnění zvyšují dopad kompromitace."
      }
    },
    "Analýza a řízení rizik": {
      "Asset management": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Analýza a řízení rizik“ a hned ho ukáže na situaci typu ransomware, výpadek databáze nebo únik osobních údajů. Asset management eviduje aktiva, jejich vlastníky, hodnotu, umístění, závislosti a kritičnost. Bez znalosti aktiv nelze smysluplně řídit rizika. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Asset management eviduje aktiva, jejich vlastníky, hodnotu, umístění, závislosti a kritičnost. Bez znalosti aktiv nelze smysluplně řídit rizika. Ve státnicové odpovědi přidej konkrétní scénář (ransomware, výpadek databáze nebo únik osobních údajů), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: opatření bez vazby na aktiva a dopady mohou chránit nedůležité věci a ignorovat kritické služby."
      },
      "Analýza rizik": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Analýza a řízení rizik“ a hned ho ukáže na situaci typu ransomware, výpadek databáze nebo únik osobních údajů. Analýza rizik kombinuje hrozby, zranitelnosti, pravděpodobnost a dopad. Výsledkem je priorita rizik a podklad pro rozhodnutí o opatřeních. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Analýza rizik kombinuje hrozby, zranitelnosti, pravděpodobnost a dopad. Výsledkem je priorita rizik a podklad pro rozhodnutí o opatřeních. Ve státnicové odpovědi přidej konkrétní scénář (ransomware, výpadek databáze nebo únik osobních údajů), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: opatření bez vazby na aktiva a dopady mohou chránit nedůležité věci a ignorovat kritické služby."
      },
      "Opatření proti rizikům a jejich účinnost": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Analýza a řízení rizik“ a hned ho ukáže na situaci typu ransomware, výpadek databáze nebo únik osobních údajů. Riziko lze snížit, přenést, vyhnout se mu nebo ho akceptovat. Účinnost opatření se měří proti cíli a nákladům. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Riziko lze snížit, přenést, vyhnout se mu nebo ho akceptovat. Účinnost opatření se měří proti cíli a nákladům. Ve státnicové odpovědi přidej konkrétní scénář (ransomware, výpadek databáze nebo únik osobních údajů), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: opatření bez vazby na aktiva a dopady mohou chránit nedůležité věci a ignorovat kritické služby."
      },
      "Řízení identity a přístupu, ACL a privilegovaní uživatelé": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Analýza a řízení rizik“ a hned ho ukáže na situaci typu ransomware, výpadek databáze nebo únik osobních údajů. IAM spravuje identity a oprávnění. ACL explicitně říkají, kdo smí k objektu přistupovat. Privilegované účty vyžadují zvláštní ochranu a audit. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: IAM spravuje identity a oprávnění. ACL explicitně říkají, kdo smí k objektu přistupovat. Privilegované účty vyžadují zvláštní ochranu a audit. Ve státnicové odpovědi přidej konkrétní scénář (ransomware, výpadek databáze nebo únik osobních údajů), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: opatření bez vazby na aktiva a dopady mohou chránit nedůležité věci a ignorovat kritické služby."
      },
      "Audit, standardy a hodnocení bezpečnosti": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Analýza a řízení rizik“ a hned ho ukáže na situaci typu ransomware, výpadek databáze nebo únik osobních údajů. Audit ověřuje soulad a účinnost kontrol. Standardy poskytují rámec a hodnocení bezpečnosti dokládá míru důvěry ve splnění požadavků. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Audit ověřuje soulad a účinnost kontrol. Standardy poskytují rámec a hodnocení bezpečnosti dokládá míru důvěry ve splnění požadavků. Ve státnicové odpovědi přidej konkrétní scénář (ransomware, výpadek databáze nebo únik osobních údajů), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: opatření bez vazby na aktiva a dopady mohou chránit nedůležité věci a ignorovat kritické služby."
      }
    },
    "Bezpečnostní architektura": {
      "Bezpečnost sítí, izolace a segmentace": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní architektura“ a hned ho ukáže na situaci typu DMZ, serverová zóna, správcovská síť a oddělené zálohy. Segmentace rozděluje síť na zóny podle důvěry a funkce. Izolace omezuje laterální pohyb útočníka a dopad kompromitace. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Segmentace rozděluje síť na zóny podle důvěry a funkce. Izolace omezuje laterální pohyb útočníka a dopad kompromitace. Ve státnicové odpovědi přidej konkrétní scénář (DMZ, serverová zóna, správcovská síť a oddělené zálohy), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: příliš široká pravidla a chybějící segmentace umožní laterální pohyb útočníka."
      },
      "Firewally": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní architektura“ a hned ho ukáže na situaci typu DMZ, serverová zóna, správcovská síť a oddělené zálohy. Firewall filtruje provoz podle pravidel na základě adres, portů, protokolů nebo aplikačního kontextu. Je hranicí mezi zónami, ne jediným bezpečnostním opatřením. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Firewall filtruje provoz podle pravidel na základě adres, portů, protokolů nebo aplikačního kontextu. Je hranicí mezi zónami, ne jediným bezpečnostním opatřením. Ve státnicové odpovědi přidej konkrétní scénář (DMZ, serverová zóna, správcovská síť a oddělené zálohy), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: příliš široká pravidla a chybějící segmentace umožní laterální pohyb útočníka."
      },
      "Monitoring, detekce a logování": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní architektura“ a hned ho ukáže na situaci typu DMZ, serverová zóna, správcovská síť a oddělené zálohy. Logování zaznamenává události, monitoring sleduje stav a detekce hledá známky útoku. Kvalitní logy musí mít čas, zdroj, integritu a jasnou návaznost na reakci. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Logování zaznamenává události, monitoring sleduje stav a detekce hledá známky útoku. Kvalitní logy musí mít čas, zdroj, integritu a jasnou návaznost na reakci. Ve státnicové odpovědi přidej konkrétní scénář (DMZ, serverová zóna, správcovská síť a oddělené zálohy), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: příliš široká pravidla a chybějící segmentace umožní laterální pohyb útočníka."
      },
      "Bezpečnost operačních systémů": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní architektura“ a hned ho ukáže na situaci typu DMZ, serverová zóna, správcovská síť a oddělené zálohy. Hardening OS zahrnuje minimalizaci služeb, aktualizace, správu účtů, práva, audit, izolaci a bezpečnou konfiguraci. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Hardening OS zahrnuje minimalizaci služeb, aktualizace, správu účtů, práva, audit, izolaci a bezpečnou konfiguraci. Ve státnicové odpovědi přidej konkrétní scénář (DMZ, serverová zóna, správcovská síť a oddělené zálohy), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: příliš široká pravidla a chybějící segmentace umožní laterální pohyb útočníka."
      },
      "Bezpečnost dat": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní architektura“ a hned ho ukáže na situaci typu DMZ, serverová zóna, správcovská síť a oddělené zálohy. Data se chrání klasifikací, řízením přístupu, šifrováním, zálohováním, mazáním a prevencí úniku. Opatření závisí na citlivosti a životním cyklu dat. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Data se chrání klasifikací, řízením přístupu, šifrováním, zálohováním, mazáním a prevencí úniku. Opatření závisí na citlivosti a životním cyklu dat. Ve státnicové odpovědi přidej konkrétní scénář (DMZ, serverová zóna, správcovská síť a oddělené zálohy), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: příliš široká pravidla a chybějící segmentace umožní laterální pohyb útočníka."
      }
    },
    "Kyberbezpečnost v organizaci": {
      "Událost, incident, útok, zranitelnost a slabina": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberbezpečnost v organizaci“ a hned ho ukáže na situaci typu alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele. Událost je pozorovaný jev, incident narušuje bezpečnost, útok je úmyslná aktivita útočníka, zranitelnost je využitelná chyba a slabina obecný nedostatek kontroly. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Událost je pozorovaný jev, incident narušuje bezpečnost, útok je úmyslná aktivita útočníka, zranitelnost je využitelná chyba a slabina obecný nedostatek kontroly. Ve státnicové odpovědi přidej konkrétní scénář (alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bez evidence kroků a vlastníků se incident těžko vyšetří a poučení se nepromítne do obrany."
      },
      "Role a činnosti bezpečnostního týmu": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberbezpečnost v organizaci“ a hned ho ukáže na situaci typu alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele. Bezpečnostní tým monitoruje, analyzuje alerty, řeší incidenty, spravuje detekce, komunikuje a zlepšuje obranu. Role zahrnují analytiky, incident manažera a vlastníky systémů. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Bezpečnostní tým monitoruje, analyzuje alerty, řeší incidenty, spravuje detekce, komunikuje a zlepšuje obranu. Role zahrnují analytiky, incident manažera a vlastníky systémů. Ve státnicové odpovědi přidej konkrétní scénář (alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bez evidence kroků a vlastníků se incident těžko vyšetří a poučení se nepromítne do obrany."
      },
      "Řešení kyberbezpečnostního incidentu": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberbezpečnost v organizaci“ a hned ho ukáže na situaci typu alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele. Incident response zahrnuje přípravu, detekci, triáž, analýzu, omezení dopadu, odstranění příčiny, obnovu a vyhodnocení. Důležitá je evidence rozhodnutí. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Incident response zahrnuje přípravu, detekci, triáž, analýzu, omezení dopadu, odstranění příčiny, obnovu a vyhodnocení. Důležitá je evidence rozhodnutí. Ve státnicové odpovědi přidej konkrétní scénář (alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bez evidence kroků a vlastníků se incident těžko vyšetří a poučení se nepromítne do obrany."
      },
      "Bezpečnostní varování a příklady z praxe": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberbezpečnost v organizaci“ a hned ho ukáže na situaci typu alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele. Varování informuje o hrozbě nebo zranitelnosti a doporučuje opatření. V praxi může jít o kritickou zranitelnost VPN, phishingovou kampaň nebo únik přihlašovacích údajů. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Varování informuje o hrozbě nebo zranitelnosti a doporučuje opatření. V praxi může jít o kritickou zranitelnost VPN, phishingovou kampaň nebo únik přihlašovacích údajů. Ve státnicové odpovědi přidej konkrétní scénář (alert ze SIEM, kompromitovaný účet nebo bezpečnostní varování dodavatele), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: bez evidence kroků a vlastníků se incident těžko vyšetří a poučení se nepromítne do obrany."
      }
    },
    "Kyberútoky": {
      "Životní cyklus kyberútoku": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberútoky“ a hned ho ukáže na situaci typu phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace. Útok typicky začíná průzkumem, pokračuje počátečním přístupem, vykonáním kódu, perzistencí, eskalací oprávnění, laterálním pohybem a cílovou akcí. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Útok typicky začíná průzkumem, pokračuje počátečním přístupem, vykonáním kódu, perzistencí, eskalací oprávnění, laterálním pohybem a cílovou akcí. Ve státnicové odpovědi přidej konkrétní scénář (phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: zaměření jen na jednu fázi útoku nechá útočníkovi jiné cesty k cíli."
      },
      "Advanced Persistent Threat": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberútoky“ a hned ho ukáže na situaci typu phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace. APT je dlouhodobá cílená kampaň vedená schopným aktérem. Důraz je na vytrvalost, opatrnost, průzkum a přizpůsobení oběti. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: APT je dlouhodobá cílená kampaň vedená schopným aktérem. Důraz je na vytrvalost, opatrnost, průzkum a přizpůsobení oběti. Ve státnicové odpovědi přidej konkrétní scénář (phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: zaměření jen na jednu fázi útoku nechá útočníkovi jiné cesty k cíli."
      },
      "MITRE ATT&CK taktiky, techniky a procedury": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberútoky“ a hned ho ukáže na situaci typu phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace. ATT&CK třídí chování útočníků do taktik, technik a konkrétních procedur. Umožňuje porovnat pokrytí detekcí a plánovat obranu. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: ATT&CK třídí chování útočníků do taktik, technik a konkrétních procedur. Umožňuje porovnat pokrytí detekcí a plánovat obranu. Ve státnicové odpovědi přidej konkrétní scénář (phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: zaměření jen na jednu fázi útoku nechá útočníkovi jiné cesty k cíli."
      },
      "Průzkum, počáteční přístup a zneužití zranitelnosti": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberútoky“ a hned ho ukáže na situaci typu phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace. Průzkum sbírá informace, počáteční přístup získává první vstup a zneužití zranitelnosti využívá chybu systému nebo konfigurace. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Průzkum sbírá informace, počáteční přístup získává první vstup a zneužití zranitelnosti využívá chybu systému nebo konfigurace. Ve státnicové odpovědi přidej konkrétní scénář (phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: zaměření jen na jednu fázi útoku nechá útočníkovi jiné cesty k cíli."
      },
      "Spuštění kódu, upevnění přístupu a cílové akce": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberútoky“ a hned ho ukáže na situaci typu phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace. Útočník spouští payload, buduje perzistenci a směřuje k cíli, například exfiltraci, šifrování dat nebo sabotáž. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Útočník spouští payload, buduje perzistenci a směřuje k cíli, například exfiltraci, šifrování dat nebo sabotáž. Ve státnicové odpovědi přidej konkrétní scénář (phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: zaměření jen na jednu fázi útoku nechá útočníkovi jiné cesty k cíli."
      },
      "Obrana na úrovni hostitele a sítě": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberútoky“ a hned ho ukáže na situaci typu phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace. Hostitelská obrana zahrnuje hardening, EDR, patching a least privilege. Síťová obrana zahrnuje segmentaci, IDS/IPS, filtrování a monitoring toků. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Hostitelská obrana zahrnuje hardening, EDR, patching a least privilege. Síťová obrana zahrnuje segmentaci, IDS/IPS, filtrování a monitoring toků. Ve státnicové odpovědi přidej konkrétní scénář (phishing, zneužitá VPN, PowerShell, perzistence a exfiltrace), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: zaměření jen na jednu fázi útoku nechá útočníkovi jiné cesty k cíli."
      }
    },
    "Vymezení bezpečnostních studií": {
      "Pojmy bezpečnost, hrozba a riziko": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Vymezení bezpečnostních studií“ a hned ho ukáže na situaci typu výpadek nemocnice, energetiky nebo digitální služby státu. Bezpečnost je stav přijatelné ochrany hodnot, hrozba potenciální zdroj škody a riziko kombinace pravděpodobnosti a dopadu. V kyberprostoru se vztahují k aktivům, službám a společnosti. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Bezpečnost je stav přijatelné ochrany hodnot, hrozba potenciální zdroj škody a riziko kombinace pravděpodobnosti a dopadu. V kyberprostoru se vztahují k aktivům, službám a společnosti. Ve státnicové odpovědi přidej konkrétní scénář (výpadek nemocnice, energetiky nebo digitální služby státu), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: redukce problému na technickou závadu podcení společenské a politické dopady."
      },
      "Vnitřní a vnější bezpečnost a sektory": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Vymezení bezpečnostních studií“ a hned ho ukáže na situaci typu výpadek nemocnice, energetiky nebo digitální služby státu. Vnitřní bezpečnost se týká fungování státu a společnosti uvnitř, vnější bezpečnost vztahů a hrozeb zvenčí. Kyberbezpečnost prochází sektory obrany, ekonomiky, zdravotnictví i veřejné správy. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Vnitřní bezpečnost se týká fungování státu a společnosti uvnitř, vnější bezpečnost vztahů a hrozeb zvenčí. Kyberbezpečnost prochází sektory obrany, ekonomiky, zdravotnictví i veřejné správy. Ve státnicové odpovědi přidej konkrétní scénář (výpadek nemocnice, energetiky nebo digitální služby státu), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: redukce problému na technickou závadu podcení společenské a politické dopady."
      },
      "Bezpečnostní politika a její analýza": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Vymezení bezpečnostních studií“ a hned ho ukáže na situaci typu výpadek nemocnice, energetiky nebo digitální služby státu. Bezpečnostní politika vymezuje cíle, instituce, nástroje a priority. Analýza sleduje problém, aktéry, pravomoci, zdroje, implementaci a měření výsledků. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Bezpečnostní politika vymezuje cíle, instituce, nástroje a priority. Analýza sleduje problém, aktéry, pravomoci, zdroje, implementaci a měření výsledků. Ve státnicové odpovědi přidej konkrétní scénář (výpadek nemocnice, energetiky nebo digitální služby státu), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: redukce problému na technickou závadu podcení společenské a politické dopady."
      }
    },
    "Bezpečnostní strategie": {
      "Strategické dokumenty České republiky": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní strategie“ a hned ho ukáže na situaci typu národní strategie, akční plán, role NÚKIB/CERT a sektorová spolupráce. Strategické dokumenty vymezují bezpečnostní zájmy, hrozby a priority. Kyberbezpečnost se v nich objevuje jako průřezová podmínka fungování státu a ekonomiky. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Strategické dokumenty vymezují bezpečnostní zájmy, hrozby a priority. Kyberbezpečnost se v nich objevuje jako průřezová podmínka fungování státu a ekonomiky. Ve státnicové odpovědi přidej konkrétní scénář (národní strategie, akční plán, role NÚKIB/CERT a sektorová spolupráce), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: strategie bez odpovědných institucí, zdrojů a metrik zůstane pouze deklarací."
      },
      "Význam kyberbezpečnosti ve strategiích": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní strategie“ a hned ho ukáže na situaci typu národní strategie, akční plán, role NÚKIB/CERT a sektorová spolupráce. Digitální závislost zvyšuje dopad kyberincidentů na stát, služby a občany. Strategie proto řeší odolnost, prevenci, reakci a mezinárodní spolupráci. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Digitální závislost zvyšuje dopad kyberincidentů na stát, služby a občany. Strategie proto řeší odolnost, prevenci, reakci a mezinárodní spolupráci. Ve státnicové odpovědi přidej konkrétní scénář (národní strategie, akční plán, role NÚKIB/CERT a sektorová spolupráce), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: strategie bez odpovědných institucí, zdrojů a metrik zůstane pouze deklarací."
      },
      "Bezpečnostní systém ČR a role institucí": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Bezpečnostní strategie“ a hned ho ukáže na situaci typu národní strategie, akční plán, role NÚKIB/CERT a sektorová spolupráce. Instituce mají rozdělené kompetence: regulace, prevence, detekce, vyšetřování, obrana a krizové řízení. Koordinace je nutná, protože kyberincidenty překračují hranice sektorů. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Instituce mají rozdělené kompetence: regulace, prevence, detekce, vyšetřování, obrana a krizové řízení. Koordinace je nutná, protože kyberincidenty překračují hranice sektorů. Ve státnicové odpovědi přidej konkrétní scénář (národní strategie, akční plán, role NÚKIB/CERT a sektorová spolupráce), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: strategie bez odpovědných institucí, zdrojů a metrik zůstane pouze deklarací."
      }
    },
    "Kyberválka": {
      "Definice, historie a současné trendy": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberválka“ a hned ho ukáže na situaci typu operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň. Kyberválka nemá jednotnou definici; obvykle zahrnuje státem řízené nebo podporované kyberoperace v konfliktu. Trendem je propojení s hybridními a informačními operacemi. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Kyberválka nemá jednotnou definici; obvykle zahrnuje státem řízené nebo podporované kyberoperace v konfliktu. Trendem je propojení s hybridními a informačními operacemi. Ve státnicové odpovědi přidej konkrétní scénář (operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: unáhlená atribuce nebo nejasný práh reakce může vést k eskalaci."
      },
      "Aktéři a přisouzení kyberútoků": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberválka“ a hned ho ukáže na situaci typu operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň. Aktéry mohou být státy, zpravodajské služby, proxy skupiny i kriminální aktéři. Přisouzení je obtížné kvůli anonymizaci, falešným stopám a přeshraniční infrastruktuře. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Aktéry mohou být státy, zpravodajské služby, proxy skupiny i kriminální aktéři. Přisouzení je obtížné kvůli anonymizaci, falešným stopám a přeshraniční infrastruktuře. Ve státnicové odpovědi přidej konkrétní scénář (operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: unáhlená atribuce nebo nejasný práh reakce může vést k eskalaci."
      },
      "Odstrašení v kyberprostoru": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberválka“ a hned ho ukáže na situaci typu operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň. Odstrašení může stát na hrozbě odvety, odepření úspěchu útoku nebo zvýšení odolnosti. Problémem je nejisté přisouzení a nejasné prahy reakce. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Odstrašení může stát na hrozbě odvety, odepření úspěchu útoku nebo zvýšení odolnosti. Problémem je nejisté přisouzení a nejasné prahy reakce. Ve státnicové odpovědi přidej konkrétní scénář (operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: unáhlená atribuce nebo nejasný práh reakce může vést k eskalaci."
      },
      "Netwars a kyberkonflikt": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberválka“ a hned ho ukáže na situaci typu operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň. Netwars zdůrazňují síťovou organizaci aktérů, informační rozměr a decentralizovanou koordinaci. V kyberkonfliktu se projevují kampaněmi, hacktivismem a informačními operacemi. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Netwars zdůrazňují síťovou organizaci aktérů, informační rozměr a decentralizovanou koordinaci. V kyberkonfliktu se projevují kampaněmi, hacktivismem a informačními operacemi. Ve státnicové odpovědi přidej konkrétní scénář (operace pod prahem ozbrojeného konfliktu, hacktivismus nebo státem podporovaná kampaň), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: unáhlená atribuce nebo nejasný práh reakce může vést k eskalaci."
      }
    },
    "Ochrana kritické infrastruktury": {
      "Vymezení kritické infrastruktury": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Ochrana kritické infrastruktury“ a hned ho ukáže na situaci typu energetika, zdravotnictví, vodárenství nebo doprava. Kritická infrastruktura zahrnuje prvky a služby nezbytné pro fungování státu a společnosti. V kyberbezpečnosti se posuzuje závislost těchto služeb na informačních systémech. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Kritická infrastruktura zahrnuje prvky a služby nezbytné pro fungování státu a společnosti. V kyberbezpečnosti se posuzuje závislost těchto služeb na informačních systémech. Ve státnicové odpovědi přidej konkrétní scénář (energetika, zdravotnictví, vodárenství nebo doprava), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: selhání ICT se může projevit kaskádově ve fyzickém světě a ohrozit základní služby."
      },
      "Kyberútoky na kritickou infrastrukturu": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Ochrana kritické infrastruktury“ a hned ho ukáže na situaci typu energetika, zdravotnictví, vodárenství nebo doprava. Útok může narušit dostupnost, integritu řídicích dat nebo bezpečný provoz. Dopady se mohou projevit ve fyzickém světě, například výpadkem energie nebo zdravotních služeb. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Útok může narušit dostupnost, integritu řídicích dat nebo bezpečný provoz. Dopady se mohou projevit ve fyzickém světě, například výpadkem energie nebo zdravotních služeb. Ve státnicové odpovědi přidej konkrétní scénář (energetika, zdravotnictví, vodárenství nebo doprava), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: selhání ICT se může projevit kaskádově ve fyzickém světě a ohrozit základní služby."
      },
      "Přisouzení a odstrašování": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Ochrana kritické infrastruktury“ a hned ho ukáže na situaci typu energetika, zdravotnictví, vodárenství nebo doprava. Přisouzení útoku na kritickou infrastrukturu je důležité pro politickou a právní reakci. Odstrašení kombinuje odolnost, schopnost reakce a mezinárodní signály. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Přisouzení útoku na kritickou infrastrukturu je důležité pro politickou a právní reakci. Odstrašení kombinuje odolnost, schopnost reakce a mezinárodní signály. Ve státnicové odpovědi přidej konkrétní scénář (energetika, zdravotnictví, vodárenství nebo doprava), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: selhání ICT se může projevit kaskádově ve fyzickém světě a ohrozit základní služby."
      }
    },
    "Právní úprava kyberbezpečnosti v ČR a EU": {
      "Základní instituty a principy": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Právní úprava kyberbezpečnosti v ČR a EU“ a hned ho ukáže na situaci typu zákon o kybernetické bezpečnosti, NIS/NIS2 rámec, incident reporting a dohled. Právo vymezuje regulované subjekty, bezpečnostní opatření, incidenty, hlášení a dohled. Principy zahrnují přiměřenost, řízení rizik a odpovědnost. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Právo vymezuje regulované subjekty, bezpečnostní opatření, incidenty, hlášení a dohled. Principy zahrnují přiměřenost, řízení rizik a odpovědnost. Ve státnicové odpovědi přidej konkrétní scénář (zákon o kybernetické bezpečnosti, NIS/NIS2 rámec, incident reporting a dohled), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: formální shoda bez reálného řízení rizik nechrání službu ani organizaci."
      },
      "Povinné orgány a subjekty": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Právní úprava kyberbezpečnosti v ČR a EU“ a hned ho ukáže na situaci typu zákon o kybernetické bezpečnosti, NIS/NIS2 rámec, incident reporting a dohled. Povinnosti se vztahují na vybrané poskytovatele služeb a orgány podle významu pro společnost. Orgány dohledu vydávají metodiky, přijímají hlášení a kontrolují plnění. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Povinnosti se vztahují na vybrané poskytovatele služeb a orgány podle významu pro společnost. Orgány dohledu vydávají metodiky, přijímají hlášení a kontrolují plnění. Ve státnicové odpovědi přidej konkrétní scénář (zákon o kybernetické bezpečnosti, NIS/NIS2 rámec, incident reporting a dohled), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: formální shoda bez reálného řízení rizik nechrání službu ani organizaci."
      },
      "Systém zajištění kybernetické bezpečnosti": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Právní úprava kyberbezpečnosti v ČR a EU“ a hned ho ukáže na situaci typu zákon o kybernetické bezpečnosti, NIS/NIS2 rámec, incident reporting a dohled. Systém kombinuje prevenci, minimální bezpečnostní požadavky, hlášení incidentů, varování, protiopatření, kontrolu a spolupráci na národní i evropské úrovni. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Systém kombinuje prevenci, minimální bezpečnostní požadavky, hlášení incidentů, varování, protiopatření, kontrolu a spolupráci na národní i evropské úrovni. Ve státnicové odpovědi přidej konkrétní scénář (zákon o kybernetické bezpečnosti, NIS/NIS2 rámec, incident reporting a dohled), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: formální shoda bez reálného řízení rizik nechrání službu ani organizaci."
      }
    },
    "Kyberkriminalita": {
      "Prameny práva": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberkriminalita“ a hned ho ukáže na situaci typu phishingový podvod, ransomware, neoprávněný přístup nebo DDoS. Kyberkriminalita se řeší podle trestního práva, procesních předpisů, evropských nástrojů a mezinárodních úmluv. Přeshraniční povaha vyžaduje spolupráci států. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Kyberkriminalita se řeší podle trestního práva, procesních předpisů, evropských nástrojů a mezinárodních úmluv. Přeshraniční povaha vyžaduje spolupráci států. Ve státnicové odpovědi přidej konkrétní scénář (phishingový podvod, ransomware, neoprávněný přístup nebo DDoS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: neodborná manipulace se systémy může zničit důkazy nebo zkomplikovat právní postup."
      },
      "Typická trestná činnost": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberkriminalita“ a hned ho ukáže na situaci typu phishingový podvod, ransomware, neoprávněný přístup nebo DDoS. Patří sem neoprávněný přístup, malware, ransomware, phishing, DDoS, podvody a zásahy do dat nebo systémů. Některé činy cílí na systém, jiné systém používají jako prostředek. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Patří sem neoprávněný přístup, malware, ransomware, phishing, DDoS, podvody a zásahy do dat nebo systémů. Některé činy cílí na systém, jiné systém používají jako prostředek. Ve státnicové odpovědi přidej konkrétní scénář (phishingový podvod, ransomware, neoprávněný přístup nebo DDoS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: neodborná manipulace se systémy může zničit důkazy nebo zkomplikovat právní postup."
      },
      "Klasifikace, právní kvalifikace a postupy": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberkriminalita“ a hned ho ukáže na situaci typu phishingový podvod, ransomware, neoprávněný přístup nebo DDoS. Právní kvalifikace určuje skutkovou podstatu, zavinění, škodu a postup orgánů. Důležité je odlišit incident od trestného činu a zajistit důkazy zákonně. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Právní kvalifikace určuje skutkovou podstatu, zavinění, škodu a postup orgánů. Důležité je odlišit incident od trestného činu a zajistit důkazy zákonně. Ve státnicové odpovědi přidej konkrétní scénář (phishingový podvod, ransomware, neoprávněný přístup nebo DDoS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: neodborná manipulace se systémy může zničit důkazy nebo zkomplikovat právní postup."
      },
      "Mezinárodní spolupráce": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Kyberkriminalita“ a hned ho ukáže na situaci typu phishingový podvod, ransomware, neoprávněný přístup nebo DDoS. Data, pachatelé i infrastruktura bývají v různých státech. Spolupráce zahrnuje právní pomoc, kontaktní body, evropské nástroje a koordinaci vyšetřování. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Data, pachatelé i infrastruktura bývají v různých státech. Spolupráce zahrnuje právní pomoc, kontaktní body, evropské nástroje a koordinaci vyšetřování. Ve státnicové odpovědi přidej konkrétní scénář (phishingový podvod, ransomware, neoprávněný přístup nebo DDoS), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: neodborná manipulace se systémy může zničit důkazy nebo zkomplikovat právní postup."
      }
    },
    "Elektronické důkazy a jejich zajišťování": {
      "Procesní instituty a praktické využití": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Elektronické důkazy a jejich zajišťování“ a hned ho ukáže na situaci typu forenzní obraz disku, logy přihlášení, e-mail s přílohou a chain of custody. Procesní právo určuje, kdy a jak lze důkazy zajistit, vydat nebo odnět. Prakticky se řeší rychlé zajištění volatilních dat a zákonnost zásahu. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Procesní právo určuje, kdy a jak lze důkazy zajistit, vydat nebo odnět. Prakticky se řeší rychlé zajištění volatilních dat a zákonnost zásahu. Ve státnicové odpovědi přidej konkrétní scénář (forenzní obraz disku, logy přihlášení, e-mail s přílohou a chain of custody), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: spuštění nebo změna zařízení bez dokumentace může kontaminovat důkaz."
      },
      "Nakládání s elektronickými důkazy": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Elektronické důkazy a jejich zajišťování“ a hned ho ukáže na situaci typu forenzní obraz disku, logy přihlášení, e-mail s přílohou a chain of custody. Důkaz se dokumentuje, hashuje, bezpečně ukládá a analyzuje na kopii. Řetězec opatrování ukazuje, kdo s důkazem kdy manipuloval. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Důkaz se dokumentuje, hashuje, bezpečně ukládá a analyzuje na kopii. Řetězec opatrování ukazuje, kdo s důkazem kdy manipuloval. Ve státnicové odpovědi přidej konkrétní scénář (forenzní obraz disku, logy přihlášení, e-mail s přílohou a chain of custody), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: spuštění nebo změna zařízení bez dokumentace může kontaminovat důkaz."
      },
      "Elektronické dokumenty": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Elektronické důkazy a jejich zajišťování“ a hned ho ukáže na situaci typu forenzní obraz disku, logy přihlášení, e-mail s přílohou a chain of custody. Elektronický dokument může být důkazem, pokud lze posoudit jeho obsah, původ a integritu. Význam mají metadata, elektronický podpis, pečeť a časové razítko. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Elektronický dokument může být důkazem, pokud lze posoudit jeho obsah, původ a integritu. Význam mají metadata, elektronický podpis, pečeť a časové razítko. Ve státnicové odpovědi přidej konkrétní scénář (forenzní obraz disku, logy přihlášení, e-mail s přílohou a chain of custody), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: spuštění nebo změna zařízení bez dokumentace může kontaminovat důkaz."
      }
    },
    "Ochrana osobních údajů": {
      "Právní úprava a základní definice": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Ochrana osobních údajů“ a hned ho ukáže na situaci typu školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou. Osobní údaj identifikuje nebo může identifikovat osobu. Zpracování zahrnuje sběr, uložení, použití, předání i výmaz. Správce určuje účely a prostředky zpracování. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Osobní údaj identifikuje nebo může identifikovat osobu. Zpracování zahrnuje sběr, uložení, použití, předání i výmaz. Správce určuje účely a prostředky zpracování. Ve státnicové odpovědi přidej konkrétní scénář (školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nadměrný sběr dat a nejasný účel zvyšují právní i bezpečnostní riziko."
      },
      "Zásady zpracování a posouzení rizik": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Ochrana osobních údajů“ a hned ho ukáže na situaci typu školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou. Zpracování musí být zákonné, transparentní, účelově omezené, minimalizované, přesné a zabezpečené. Rizika se posuzují podle dopadu na práva a svobody osob. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Zpracování musí být zákonné, transparentní, účelově omezené, minimalizované, přesné a zabezpečené. Rizika se posuzují podle dopadu na práva a svobody osob. Ve státnicové odpovědi přidej konkrétní scénář (školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nadměrný sběr dat a nejasný účel zvyšují právní i bezpečnostní riziko."
      },
      "Test proporcionality, účely a právní tituly": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Ochrana osobních údajů“ a hned ho ukáže na situaci typu školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou. Proporcionalita hodnotí vhodnost, potřebnost a přiměřenost zásahu. Právní titul může být souhlas, smlouva, právní povinnost, oprávněný zájem nebo jiný titul. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Proporcionalita hodnotí vhodnost, potřebnost a přiměřenost zásahu. Právní titul může být souhlas, smlouva, právní povinnost, oprávněný zájem nebo jiný titul. Ve státnicové odpovědi přidej konkrétní scénář (školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nadměrný sběr dat a nejasný účel zvyšují právní i bezpečnostní riziko."
      },
      "ÚOOÚ a jeho úloha": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Ochrana osobních údajů“ a hned ho ukáže na situaci typu školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou. ÚOOÚ dohlíží na ochranu osobních údajů, řeší stížnosti, provádí kontroly, vydává metodiky a může ukládat nápravná opatření nebo sankce. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: ÚOOÚ dohlíží na ochranu osobních údajů, řeší stížnosti, provádí kontroly, vydává metodiky a může ukládat nápravná opatření nebo sankce. Ve státnicové odpovědi přidej konkrétní scénář (školní IS, e-shop, kamerový systém nebo mobilní aplikace s polohou), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: nadměrný sběr dat a nejasný účel zvyšují právní i bezpečnostní riziko."
      }
    },
    "Elektronický podpis a elektronická pečeť": {
      "Právní úprava a druhy elektronického podpisu": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Elektronický podpis a elektronická pečeť“ a hned ho ukáže na situaci typu podepsané PDF, pečetěná faktura, datová schránka a časové razítko. Elektronický podpis může mít různé úrovně podle použité technologie, certifikátu a prostředku pro vytváření podpisu. Vyšší úroveň dává silnější záruky identity a integrity. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Elektronický podpis může mít různé úrovně podle použité technologie, certifikátu a prostředku pro vytváření podpisu. Vyšší úroveň dává silnější záruky identity a integrity. Ve státnicové odpovědi přidej konkrétní scénář (podepsané PDF, pečetěná faktura, datová schránka a časové razítko), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: spoléhat na ikonu podpisu bez ověření certifikátu, času a integrity je nedostatečné."
      },
      "Elektronická pečeť": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Elektronický podpis a elektronická pečeť“ a hned ho ukáže na situaci typu podepsané PDF, pečetěná faktura, datová schránka a časové razítko. Elektronická pečeť potvrzuje původ a integritu dokumentu vydaného právnickou osobou. Na rozdíl od podpisu nevyjadřuje jednání konkrétní fyzické osoby. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Elektronická pečeť potvrzuje původ a integritu dokumentu vydaného právnickou osobou. Na rozdíl od podpisu nevyjadřuje jednání konkrétní fyzické osoby. Ve státnicové odpovědi přidej konkrétní scénář (podepsané PDF, pečetěná faktura, datová schránka a časové razítko), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: spoléhat na ikonu podpisu bez ověření certifikátu, času a integrity je nedostatečné."
      },
      "Datové schránky – právní úprava a praxe": {
        "ex": "Dobrá odpověď pojem zařadí do tématu „Elektronický podpis a elektronická pečeť“ a hned ho ukáže na situaci typu podepsané PDF, pečetěná faktura, datová schránka a časové razítko. Datové schránky slouží k elektronickému doručování. V praxi je důležité sledovat doručení, oprávněné osoby, fikci doručení a archivaci zpráv. Důležité je dodat, jaký dopad má pojem na rozhodnutí v praxi a neuzavřít odpověď jen definicí.",
        "cv": "Modelová odpověď: Datové schránky slouží k elektronickému doručování. V praxi je důležité sledovat doručení, oprávněné osoby, fikci doručení a archivaci zpráv. Ve státnicové odpovědi přidej konkrétní scénář (podepsané PDF, pečetěná faktura, datová schránka a časové razítko), popiš relevantní role, důkazy, opatření nebo právní následky a uzavři omezením: spoléhat na ikonu podpisu bez ověření certifikátu, času a integrity je nedostatečné."
      }
    }
  }
});
