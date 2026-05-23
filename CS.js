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
        "ex": "Vodopádový model definuje fáze sekvenčně (požadavky → návrh → implementace → test → nasazení), zatímco agilní přístupy pracují v iteracích a průběžně začleňují zpětnou vazbu zákazníka.",
        "cv": "Porovnej vodopádový a agilní přístup k vývoji z hlediska řízení změn požadavků, frekvence nasazení a zapojení zadavatele."
      },
      "Použití UML při vývoji software": {
        "ex": "Use case diagram klientského portálu zachycuje aktéry (klient, administrátor) a jejich interakce se systémem; sekvenční diagram pak modeluje průběh přihlášení včetně ověření identity.",
        "cv": "Pro systém objednávek nakresli use case diagram se třemi aktéry a pěti případy užití a vysvětli, kdy bys doplnil sekvenční diagram."
      },
      "Aplikované informační systémy": {
        "ex": "ERP systém integruje finance, sklad, výrobu a HR do jedné databáze, čímž odstraní duplicity a zajistí konzistentní data napříč odděleními organizace.",
        "cv": "Popiš tři klíčové moduly nemocničního informačního systému a vysvětli, proč je důležitá jejich vzájemná integrace."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Třívrstvá architektura odděluje prezentaci (web), aplikační logiku (server) a data (databáze); každou vrstvu lze škálovat a zabezpečit nezávisle.",
        "cv": "Porovnej monolitickou a mikroservisní architekturu z hlediska škálovatelnosti, nasazení a odolnosti vůči výpadkům."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "Migrace dat z legacy systému do nového ERP vyžaduje mapování datových struktur, čištění dat, testovací běhy a plán návratu pro případ selhání.",
        "cv": "Navrhni postup zavedení nového IS do organizace s 500 zaměstnanci: volba strategie (big bang vs. postupný přechod), školení a akceptační kritéria."
      },
      "Řízení provozu IS": {
        "ex": "SLA definuje dostupnost služby na 99,9 %, což znamená maximálně 8,7 hodiny výpadku ročně; monitoring hlídá dodržení a incident management řeší odchylky.",
        "cv": "Vysvětli, jak spolu souvisí SLA, monitoring, incident management a change management při provozu kritického IS."
      }
    },
    "Organizace a řízení kyberbezpečnosti": {
      "Důvěrnost, integrita, dostupnost a nepopiratelnost": {
        "ex": "Ransomware ohrožuje dostupnost šifrováním dat, ale pokud útočník data zároveň exfiltruje, narušuje i důvěrnost; logování operací pak zajišťuje nepopiratelnost.",
        "cv": "Na příkladu úniku osobních údajů z nemocnice rozber, které bezpečnostní cíle (CIA + nepopiratelnost) byly narušeny, a navrhni opatření pro každý z nich."
      },
      "Bezpečnostní politiky a procedury": {
        "ex": "Politika hesel stanoví minimální délku a složitost; procedura resetování hesla popisuje konkrétní kroky ověření identity, včetně eskalace při podezření na kompromitaci účtu.",
        "cv": "Navrhni bezpečnostní politiku pro používání USB zařízení v organizaci a odvoď z ní jednu konkrétní proceduru."
      },
      "Struktura řízení kyberbezpečnosti": {
        "ex": "CISO reportuje přímo představenstvu, bezpečnostní komise čtvrtletně hodnotí rizika a SOC eskaluje kritické incidenty manažerovi bezpečnosti do 30 minut.",
        "cv": "Nakresli organizační schéma řízení kyberbezpečnosti ve střední firmě a vysvětli, proč by CISO neměl být podřízen IT řediteli."
      },
      "Role, odpovědnosti a kompetence": {
        "ex": "Vlastník aktiva rozhoduje o klasifikaci dat a akceptaci zbytkového rizika; správce systému implementuje technická opatření; uživatel dodržuje politiky a hlásí incidenty.",
        "cv": "Pro scénář ransomware incidentu urči, kdo rozhoduje o odpojení systému, kdo komunikuje s vedením a kdo provádí forenzní analýzu."
      }
    },
    "Metody autentizace a řízení přístupu": {
      "Metody autentizace": {
        "ex": "Heslo je znalostní faktor, TOTP aplikace je faktor vlastnictví a otisk prstu je biometrický faktor; MFA kombinuje minimálně dva různé nezávislé faktory.",
        "cv": "Pro přístup administrátora k produkční databázi navrhni vícefaktorovou autentizaci a zdůvodni volbu každého faktoru."
      },
      "Řízení přístupu": {
        "ex": "V RBAC má účetní roli ‚Finance' s právem číst a vytvářet faktury, ale ne schvalovat platby nad limit; tím se uplatňuje princip nejmenších oprávnění a oddělení povinností.",
        "cv": "Porovnej modely DAC, MAC a RBAC na příkladu vojenského informačního systému a navrhni, který je nejvhodnější a proč."
      },
      "Biometrické metody autentizace": {
        "ex": "Čtečka otisku prstu porovnává markantní body s uloženou šablonou; FAR udává podíl falešně akceptovaných, FRR podíl falešně odmítnutých osob.",
        "cv": "Vysvětli vztah mezi FAR a FRR, co je EER, a navrhni nastavení prahu citlivosti pro vstup do serverovny vs. odemčení telefonu."
      },
      "Elektronický podpis a jeho použití": {
        "ex": "Kvalifikovaný elektronický podpis vyžaduje kvalifikovaný certifikát a bezpečné zařízení pro vytváření podpisu; má právní účinky rovné vlastnoručnímu podpisu dle eIDAS.",
        "cv": "Rozliš prostý, zaručený a kvalifikovaný elektronický podpis z hlediska technických požadavků a právních účinků."
      },
      "Autentizace strojů a aplikací": {
        "ex": "Microservice se při volání API autentizuje pomocí JWT tokenu podepsaného sdíleným tajemstvím; pro vyšší bezpečnost se používá mutual TLS s klientským certifikátem.",
        "cv": "Navrhni autentizaci mezi webovou aplikací a databázovým serverem a vysvětli, proč je hardcoded heslo v kódu nebezpečné."
      }
    },
    "Analýza a řízení rizik": {
      "Asset management": {
        "ex": "Evidence aktiv ukáže, že databáze pacientů závisí na třech serverech, dvou síťových segmentech a jednom administrátorovi; bez této znalosti nelze odhadnout dopad výpadku.",
        "cv": "Pro e-shop identifikuj pět klíčových aktiv, urči jejich vlastníky a ohodnoť kritičnost z hlediska dopadu na podnikání."
      },
      "Analýza rizik": {
        "ex": "Hrozba ransomware × zranitelnost nezáplatovaného VPN × dopad ztráty dat na 2 dny = vysoké riziko; po nasazení záplat a offline záloh se zbytkové riziko sníží na střední.",
        "cv": "Pro webovou aplikaci banky proveď analýzu rizika SQL injection: hrozba, zranitelnost, pravděpodobnost, dopad a navrhni opatření."
      },
      "Opatření proti rizikům a jejich účinnost": {
        "ex": "Šifrování disku snižuje riziko úniku dat při krádeži notebooku; kybernetické pojištění přenáší finanční dopad; akceptace se volí u nízko hodnoceného rizika.",
        "cv": "Pro tři identifikovaná rizika navrhni po jednom opatření typu snížení, přenesení a akceptace a zdůvodni volbu."
      },
      "Řízení identity a přístupu, ACL a privilegovaní uživatelé": {
        "ex": "PAM řešení ukládá hesla administrátorů do trezoru, umožňuje jen časově omezený přístup, nahrává relace a vyžaduje schválení nadřízeným před elevací.",
        "cv": "Navrhni řízení privilegovaných účtů pro firmu s 10 administrátory a vysvětli, proč sdílený root účet bez auditu představuje kritické riziko."
      },
      "Audit, standardy a hodnocení bezpečnosti": {
        "ex": "ISO 27001 certifikace vyžaduje zavedení ISMS včetně analýzy rizik, výběru kontrol z Annex A a pravidelných interních auditů; certifikační orgán ověřuje soulad.",
        "cv": "Porovnej ISO 27001 a NIST CSF z hlediska přístupu k řízení rizik a vysvětli, kdy je certifikace vyžadována regulací."
      }
    },
    "Bezpečnostní architektura": {
      "Bezpečnost sítí, izolace a segmentace": {
        "ex": "DMZ odděluje veřejně dostupný webserver od interní sítě; kompromitace serveru v DMZ nedá útočníkovi přímý přístup k databázi ve vnitřní zóně.",
        "cv": "Navrhni síťovou segmentaci pro firmu s webovými servery, interní sítí, vývojem a správou a vysvětli pravidla komunikace mezi zónami."
      },
      "Firewally": {
        "ex": "Stavový firewall sleduje TCP handshake a povoluje odpovědi na navázaná spojení; aplikační firewall (WAF) navíc analyzuje obsah HTTP požadavků a blokuje SQL injection.",
        "cv": "Porovnej paketový, stavový a aplikační firewall z hlediska vrstvy inspekce, výkonu a schopnosti detekovat útoky na aplikační vrstvě."
      },
      "Monitoring, detekce a logování": {
        "ex": "SIEM agreguje logy z firewallů, serverů a endpointů, koreluje události a generuje alert při detekci podezřelého vzoru, například mnoha neúspěšných přihlášení z jedné IP.",
        "cv": "Navrhni, jaké události by měl logovat webový server z bezpečnostního hlediska, a vysvětli, proč musí být logy chráněny proti manipulaci."
      },
      "Bezpečnost operačních systémů": {
        "ex": "Hardening linuxového serveru zahrnuje odstranění nepotřebných služeb, nastavení iptables, konfiguraci SELinux, pravidelné patchování a omezení sudo přístupu.",
        "cv": "Navrhni checklist pro hardening nové instalace Windows Server a vysvětli, proč je výchozí konfigurace OS z bezpečnostního hlediska nedostatečná."
      },
      "Bezpečnost dat": {
        "ex": "Data klasifikovaná jako ‚důvěrná' musí být šifrována at rest i in transit, přístup je omezen na definované role a po skončení životního cyklu se bezpečně smažou.",
        "cv": "Navrhni klasifikační schéma dat pro univerzitu (veřejná, interní, důvěrná, přísně důvěrná) a ke každé kategorii přiřaď konkrétní opatření."
      }
    },
    "Kyberbezpečnost v organizaci": {
      "Událost, incident, útok, zranitelnost a slabina": {
        "ex": "Neúspěšné přihlášení je bezpečnostní událost; tisíc neúspěšných přihlášení za minutu z jedné IP je incident (brute-force útok); slabé heslo je zranitelnost, chybějící politika hesel je slabina.",
        "cv": "Rozliš na třech konkrétních příkladech rozdíl mezi bezpečnostní událostí, incidentem a útokem."
      },
      "Role a činnosti bezpečnostního týmu": {
        "ex": "L1 analytik SOC monitoruje alerty a provádí prvotní triáž; L2 analytik provádí hlubší analýzu a rozhoduje o eskalaci; incident manažer koordinuje reakci a komunikaci.",
        "cv": "Popiš typický pracovní den L1 analytika SOC a vysvětli, podle jakých kritérií eskaluje alert na L2."
      },
      "Řešení kyberbezpečnostního incidentu": {
        "ex": "Po detekci ransomware se nejprve omezí šíření (containment) odpojením zasažených strojů, pak se analyzuje vektor útoku, odstraní malware a obnoví data ze zálohy.",
        "cv": "Pro scénář phishingového e-mailu, který vedl ke kompromitaci účtu zaměstnance, navrhni postup incident response podle fází NIST."
      },
      "Bezpečnostní varování a příklady z praxe": {
        "ex": "NÚKIB vydá varování o kritické zranitelnosti ve VPN s CVSS 9.8; organizace musí posoudit, zda provozuje postižený produkt, a nasadit záplatu nebo workaround.",
        "cv": "Obdržel jsi bezpečnostní varování o zero-day zranitelnosti v e-mailovém serveru. Popiš kroky od příjmu varování po ověření, že opatření funguje."
      }
    },
    "Kyberútoky": {
      "Životní cyklus kyberútoku": {
        "ex": "Útočník nejprve provede OSINT průzkum, doručí spear-phishing s exploitem, získá přístup, eskaluje oprávnění, pohybuje se laterálně a nakonec exfiltruje data.",
        "cv": "Namapuj fáze modelu Cyber Kill Chain na konkrétní scénář útoku na firemní síť a ke každé fázi navrhni obranné opatření."
      },
      "Advanced Persistent Threat": {
        "ex": "APT skupina operuje měsíce bez detekce, využívá zero-day zranitelnosti, custom malware a legitimní nástroje (living off the land), aby se vyhnula detekci.",
        "cv": "Porovnej APT útok s oportunistickým kyberútokem z hlediska motivace, zdrojů, doby působení a obtížnosti detekce."
      },
      "MITRE ATT&CK taktiky, techniky a procedury": {
        "ex": "Taktika ‚Persistence' zahrnuje techniky jako vytvoření naplánované úlohy nebo modifikace registru; organizace mapuje své detekce na ATT&CK matici a identifikuje mezery.",
        "cv": "Vyber tři taktiky z ATT&CK (např. Initial Access, Lateral Movement, Exfiltration) a ke každé uveď jednu techniku a odpovídající detekční mechanismus."
      },
      "Průzkum, počáteční přístup a zneužití zranitelnosti": {
        "ex": "Útočník pomocí Shodan najde exponovaný RDP port, použije ukradené přihlašovací údaje z dřívějšího úniku a získá počáteční přístup do firemní sítě.",
        "cv": "Popiš tři typické vektory počátečního přístupu (phishing, exploitace veřejné služby, supply chain) a ke každému navrhni preventivní opatření."
      },
      "Spuštění kódu, upevnění přístupu a cílové akce": {
        "ex": "Po spuštění payloadu útočník vytvoří perzistenci přes Windows Service, stáhne C2 beacon a postupuje k exfiltraci dat přes DNS tunneling.",
        "cv": "Vysvětli, proč útočník buduje perzistenci, uveď tři mechanismy perzistence v OS Windows a navrhni jejich detekci."
      },
      "Obrana na úrovni hostitele a sítě": {
        "ex": "EDR na endpointech detekuje podezřelé chování procesů, IDS na síti zachytí anomální komunikaci a patch management snižuje plochu zranitelností.",
        "cv": "Navrhni vícevrstvou obranu (defense in depth) pro firemní síť a vysvětli, proč nestačí spoléhat na jediné bezpečnostní opatření."
      }
    },
    "Vymezení bezpečnostních studií": {
      "Pojmy bezpečnost, hrozba a riziko": {
        "ex": "Kybernetická hrozba (např. státem sponzorovaná špionáž) se stává rizikem teprve v kombinaci se zranitelností konkrétní organizace a hodnotou jejích aktiv.",
        "cv": "Rozliš pojmy bezpečnost, hrozba a riziko na příkladu ochrany kritické infrastruktury a vysvětli, proč je riziko vždy kontextuální."
      },
      "Vnitřní a vnější bezpečnost a sektory": {
        "ex": "Kyberútok na volební systém je hrozbou vnitřní bezpečnosti; útok cizí mocnosti na energetickou síť propojuje vnější a vnitřní bezpečnost současně.",
        "cv": "Uveď příklad kybernetické hrozby pro sektor zdravotnictví a vysvětli, zda jde primárně o vnitřní nebo vnější bezpečnostní problém."
      },
      "Bezpečnostní politika a její analýza": {
        "ex": "Národní strategie kyberbezpečnosti definuje cíle (odolnost, prevence, reakce), určuje zodpovědné instituce a alokuje zdroje; analýza hodnotí jejich naplňování.",
        "cv": "Analyzuj fiktivní bezpečnostní politiku organizace: identifikuj cíl, odpovědný subjekt, nástroj a metriku úspěšnosti."
      }
    },
    "Bezpečnostní strategie": {
      "Strategické dokumenty České republiky": {
        "ex": "Bezpečnostní strategie ČR identifikuje kybernetické hrozby jako průřezovou výzvu; Národní strategie kyberbezpečnosti ji konkretizuje do cílů a úkolů pro příslušné orgány.",
        "cv": "Vysvětli vztah mezi Bezpečnostní strategií ČR a Národní strategií kyberbezpečnosti a uveď, jakou roli v nich hraje NÚKIB."
      },
      "Význam kyberbezpečnosti ve strategiích": {
        "ex": "Závislost státní správy na digitálních systémech znamená, že kyberincident může ochromit daňovou správu, zdravotnictví i komunikaci krizového řízení.",
        "cv": "Na příkladu výpadku systému datových schránek vysvětli, proč je kyberbezpečnost strategickou prioritou státu."
      },
      "Bezpečnostní systém ČR a role institucí": {
        "ex": "NÚKIB reguluje a dohlíží na kyberbezpečnost, vojenské zpravodajství řeší kybernetickou obranu, policie vyšetřuje kyberkriminalitu – kompetence se nepřekrývají, ale vyžadují koordinaci.",
        "cv": "Přiřaď ke třem institucím (NÚKIB, policie, zpravodajské služby) jejich hlavní roli v kyberbezpečnosti a vysvětli, jak spolu koordinují reakci na APT útok."
      }
    },
    "Kyberválka": {
      "Definice, historie a současné trendy": {
        "ex": "Útoky na ukrajinskou energetickou síť ukázaly, že kybernetické operace mohou mít přímé fyzické dopady a být součástí hybridního konfliktu.",
        "cv": "Definuj kyberválku, vysvětli, proč je obtížné stanovit práh použití síly v kyberprostoru, a uveď historický příklad."
      },
      "Aktéři a přisouzení kyberútoků": {
        "ex": "Přisouzení útoku státnímu aktérovi vyžaduje kombinaci technických indikátorů (infrastruktura, malware), zpravodajských informací a geopolitického kontextu.",
        "cv": "Vysvětli, proč je atribuce kyberútoku obtížná, a popiš tři typy důkazů, které se k přisouzení používají."
      },
      "Odstrašení v kyberprostoru": {
        "ex": "Odstrašení odvetou je v kyberprostoru problematické kvůli obtížné atribuci; proto se prosazuje odstrašení odepřením – zvyšování odolnosti cílů.",
        "cv": "Porovnej koncept odstrašení odvetou a odstrašení odepřením v kontextu kyberprostoru a uveď, proč je klasické jaderné odstrašení špatnou analogií."
      },
      "Netwars a kyberkonflikt": {
        "ex": "Netwars popisuje konflikty vedené decentralizovanými sítěmi aktérů, kde nestátní skupiny využívají kybernetické nástroje pro politické nebo ideologické cíle.",
        "cv": "Vysvětli koncept netwars a uveď příklad, kdy nestátní aktér vedl kybernetickou operaci s politickým dopadem."
      }
    },
    "Ochrana kritické infrastruktury": {
      "Vymezení kritické infrastruktury": {
        "ex": "Elektrárna, nemocnice a telekomunikační uzel jsou prvky kritické infrastruktury; jejich výpadek by měl závažný dopad na bezpečnost státu, zdraví obyvatel nebo ekonomiku.",
        "cv": "Vysvětli průřezová a sektorová kritéria pro určení prvku kritické infrastruktury v ČR a uveď příklad z energetického sektoru."
      },
      "Kyberútoky na kritickou infrastrukturu": {
        "ex": "Útok na SCADA systém vodárny může změnit dávkování chemikálií; kombinace IT a OT zvyšuje útočnou plochu a dopad na fyzický svět.",
        "cv": "Popiš specifika kyberútoků na průmyslové řídicí systémy (ICS/SCADA) oproti běžným IT útokům a navrhni dvě obranná opatření."
      },
      "Přisouzení a odstrašování": {
        "ex": "Přisouzení útoku na kritickou infrastrukturu státnímu aktérovi může vést k diplomatickým, ekonomickým nebo vojenským reakcím; proto je důkazní kvalita klíčová.",
        "cv": "Vysvětli, jaké důsledky má (ne)schopnost přisoudit kyberútok na kritickou infrastrukturu konkrétnímu aktérovi z hlediska odstrašení a mezinárodního práva."
      }
    },
    "Právní úprava kyberbezpečnosti v ČR a EU": {
      "Základní instituty a principy": {
        "ex": "Zákon o kybernetické bezpečnosti ukládá povinným osobám provádět analýzu rizik, zavádět bezpečnostní opatření a hlásit incidenty NÚKIB; směrnice NIS2 rozšiřuje okruh povinných subjektů.",
        "cv": "Vysvětli, jaké povinnosti ukládá zákon o kybernetické bezpečnosti správci informačního systému kritické infrastruktury."
      },
      "Povinné orgány a subjekty": {
        "ex": "Správce IS základní služby musí zavést bezpečnostní opatření podle vyhlášky, provádět audit a hlásit incidenty; NÚKIB vykonává dozor a může uložit reaktivní opatření.",
        "cv": "Rozliš role správce IS kritické infrastruktury, provozovatele základní služby a poskytovatele digitální služby z hlediska jejich povinností."
      },
      "Systém zajištění kybernetické bezpečnosti": {
        "ex": "Systém zahrnuje prevenci (bezpečnostní opatření), detekci (vládní CERT, NÚKIB), reakci (hlášení incidentů, reaktivní opatření) a dohled (kontroly, sankce).",
        "cv": "Nakresli schéma systému zajištění kybernetické bezpečnosti v ČR a vysvětli tok informací při hlášení a řešení bezpečnostního incidentu."
      }
    },
    "Kyberkriminalita": {
      "Prameny práva": {
        "ex": "Trestní zákoník obsahuje skutkové podstaty jako neoprávněný přístup k počítačovému systému (§ 230); Budapešťská úmluva harmonizuje definice přeshraničně.",
        "cv": "Uveď tři skutkové podstaty trestných činů v kyberprostoru podle českého trestního zákoníku a přiřaď k nim typické jednání pachatele."
      },
      "Typická trestná činnost": {
        "ex": "Phishing směřující k získání přihlašovacích údajů k bankovnímu účtu může naplnit podvod a neoprávněný přístup; ransomware může být vydírání i poškození dat.",
        "cv": "Pro scénář DDoS útoku na e-shop identifikuj možnou právní kvalifikaci a vysvětli, jaké důkazy by policie potřebovala."
      },
      "Klasifikace, právní kvalifikace a postupy": {
        "ex": "Rozlišuje se kyberkriminalita v užším smyslu (cílem je počítačový systém) a v širším smyslu (počítač je nástrojem klasického trestného činu, např. podvodu).",
        "cv": "Klasifikuj pět příkladů jednání (phishing, ransomware, online podvod, kyberšikana, neoprávněný přístup) a rozhodni, zda jde o kyberkriminalitu v užším či širším smyslu."
      },
      "Mezinárodní spolupráce": {
        "ex": "Pachatel útočí z jurisdikce A na oběť v jurisdikci B přes server v jurisdikci C; vyšetřování vyžaduje právní pomoc, sdílení důkazů a koordinaci přes Europol.",
        "cv": "Vysvětli, jaké překážky přináší přeshraniční kyberkriminalita pro orgány činné v trestním řízení a jaké nástroje spolupráce existují."
      }
    },
    "Elektronické důkazy a jejich zajišťování": {
      "Procesní instituty a praktické využití": {
        "ex": "Domovní prohlídka za účelem zajištění serverů vyžaduje příkaz soudu; data na cloudovém serveru v zahraničí se zajišťují prostřednictvím mezinárodní právní pomoci.",
        "cv": "Vysvětli, jaké procesní úkony jsou potřeba k zajištění elektronických důkazů z firemní sítě a za jakých podmínek lze provést prohlídku."
      },
      "Nakládání s elektronickými důkazy": {
        "ex": "Forenzní kopie disku se vytváří bit-po-bitu s vypočteným hashem SHA-256; analýza probíhá výhradně na kopii a řetězec opatrování dokumentuje každý přístup k důkazu.",
        "cv": "Popiš postup forenzního zajištění notebooku podezřelého zaměstnance tak, aby důkaz obstál u soudu."
      },
      "Elektronické dokumenty": {
        "ex": "E-mail jako důkaz vyžaduje ověření hlaviček, časových razítek a integrity; metadata dokumentu mohou prozradit autora, čas úprav a použitý software.",
        "cv": "Vysvětli, jakou důkazní hodnotu má e-mail a jak se ověřuje jeho autenticita a integrita v trestním řízení."
      }
    },
    "Ochrana osobních údajů": {
      "Právní úprava a základní definice": {
        "ex": "GDPR definuje osobní údaj široce – i IP adresa nebo cookie může být osobním údajem, pokud umožňuje identifikaci fyzické osoby přímo nebo nepřímo.",
        "cv": "Rozhodni u pěti příkladů dat (jméno, IP adresa, anonymizovaná statistika, e-mail, číslo průkazu), zda jde o osobní údaj ve smyslu GDPR, a zdůvodni."
      },
      "Zásady zpracování a posouzení rizik": {
        "ex": "Zásada minimalizace dat říká, že aplikace shromažďuje jen údaje nezbytné pro daný účel; zásada omezení uložení vyžaduje jejich smazání po splnění účelu.",
        "cv": "Pro mobilní fitness aplikaci identifikuj zpracovávané osobní údaje a u každého posuď, zda je sběr nezbytný vzhledem k účelu."
      },
      "Test proporcionality, účely a právní tituly": {
        "ex": "Zaměstnavatel monitoruje e-maily zaměstnanců – právní titul oprávněného zájmu vyžaduje test proporcionality: je sledování nezbytné a přiměřené vzhledem k zásahu do soukromí?",
        "cv": "Pro kamerový systém v obchodě urči účel zpracování, právní titul a proveď stručný test proporcionality."
      },
      "ÚOOÚ a jeho úloha": {
        "ex": "ÚOOÚ může provádět kontroly, ukládat nápravná opatření a pokuty za porušení GDPR; subjekt údajů se na něj obrací stížností, pokud správce nereaguje na jeho žádost.",
        "cv": "Vysvětli, jaké pravomoci má ÚOOÚ při dozoru nad zpracováním osobních údajů a jaký je postup při podání stížnosti subjektem údajů."
      }
    },
    "Elektronický podpis a elektronická pečeť": {
      "Právní úprava a druhy elektronického podpisu": {
        "ex": "Nařízení eIDAS rozlišuje prostý, zaručený a kvalifikovaný elektronický podpis; pouze kvalifikovaný podpis má automaticky právní účinek rovný vlastnoručnímu ve všech členských státech EU.",
        "cv": "Porovnej tři úrovně elektronického podpisu podle eIDAS z hlediska technických požadavků, právní síly a typického použití."
      },
      "Elektronická pečeť": {
        "ex": "Elektronická pečeť organizace potvrzuje původ a integritu dokumentu jménem právnické osoby; na rozdíl od podpisu není vázána na konkrétní fyzickou osobu.",
        "cv": "Vysvětli rozdíl mezi elektronickým podpisem a elektronickou pečetí a uveď, kdy organizace použije pečeť místo podpisu."
      },
      "Datové schránky – právní úprava a praxe": {
        "ex": "Zpráva doručená do datové schránky se považuje za doručenou přihlášením, nebo po 10 dnech fikcí doručení; to má stejné účinky jako doručení do vlastních rukou.",
        "cv": "Vysvětli princip fikce doručení u datových schránek a uveď, jaké právní následky má ignorování zpráv v datové schránce."
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
        "ex": "Vodopád vyžaduje pevné požadavky na začátku a pozdní změny jsou drahé. Agilní přístupy dodávají funkční inkrementy v krátkých sprintech a umožňují průběžné korekce kurzu podle zpětné vazby. V praxi se oba přístupy kombinují, například regulované domény vyžadují dokumentaci blízkou vodopádu, ale implementace běží agilně.",
        "cv": "Vodopád: změna požadavků po fázi návrhu je nákladná, nasazení proběhne jednorázově na konci, zadavatel vidí výsledek pozdě. Agilní: změny jsou očekávané mezi iteracemi, nasazení může být po každém sprintu, zadavatel participuje průběžně. Volba závisí na stabilitě požadavků, regulaci a velikosti týmu."
      },
      "Použití UML při vývoji software": {
        "ex": "Use case diagram definuje hranice systému a interakce aktérů – ukazuje CO systém dělá, ne JAK. Sekvenční diagram modeluje časový průběh zpráv mezi objekty, například kroky přihlášení: uživatel → login form → auth service → databáze. Diagramy slouží ke komunikaci mezi rolemi a jako základ pro testy.",
        "cv": "Use case diagram se třemi aktéry (zákazník, skladník, administrátor) a případy užití (vytvořit objednávku, potvrdit expedici, spravovat uživatele, zobrazit katalog, generovat report). Sekvenční diagram se doplní, když je potřeba modelovat komplexní interakci mezi komponentami – například platební proces se třemi externími systémy."
      },
      "Aplikované informační systémy": {
        "ex": "ERP eliminuje datové ostrůvky: objednávka ze skladu automaticky aktualizuje stav zásob a spustí finanční operaci. Bez integrace by se data zadávala ručně, vznikaly by nekonzistence a výrazně by rostla chybovost i náklady na koordinaci.",
        "cv": "Nemocniční IS: elektronická zdravotní dokumentace (přístup lékaři a sestry), laboratorní modul (zpracování výsledků a napojení na přístroje), lékárenský modul (kontrola interakcí a skladové hospodářství). Integrace zajišťuje, že výsledek z laboratoře je okamžitě viditelný u pacienta a ovlivní doporučení léčby."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Třívrstvá architektura izoluje vrstvy: prezentaci lze přepsat bez změny logiky, databázi škálovat nezávisle. Každá vrstva může mít vlastní bezpečnostní kontroly – firewall mezi vrstvami, autentizace na aplikační vrstvě, šifrování na datové.",
        "cv": "Monolit: snadný vývoj na začátku, ale škálovat lze jen celý blok a výpadek jedné komponenty ohrozí vše. Mikroservisy: nezávislé nasazení a škálování služeb, ale složitější infrastruktura, monitoring, distribuované transakce a síťová latence. Odolnost: výpadek jedné mikroservisy nemusí shodit ostatní díky circuit breaker patternu."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "Migrace vyžaduje: analýzu zdrojových a cílových schémat, transformační pravidla, čištění dat (duplicity, neplatné záznamy), testovací migraci na kopii, validaci výsledků oproti originálu a plán rollbacku – pokud se data po přepnutí neshodují, vrátí se na starý systém.",
        "cv": "Big bang: rychlý přechod v jednom víkendu, ale vysoké riziko – selže-li migrace, stojí celá organizace. Postupný přechod: běží oba systémy paralelně po odděleních, riziko rozložené, ale delší trvání a náklady na synchronizaci. Školení probíhá před přechodem na klíčových uživatelích. Akceptační kritéria: všechna data migrována, klíčové procesy ověřeny, výkon nepodkročí stanovenou mez."
      },
      "Řízení provozu IS": {
        "ex": "SLA 99,9 % dovolí přibližně 8,7 hodiny výpadku ročně. Monitoring detekuje odchylky (zvýšená latence, chyby) a spustí alert. Incident management zajistí rychlou obnovu služby. Change management řídí nasazování úprav, aby změna nezpůsobila nový výpadek.",
        "cv": "SLA definuje cíl a měřitelný závazek. Monitoring kontinuálně sleduje metriky a porovnává je s prahy. Incident management řeší narušení služby – detekce, eskalace, obnova. Change management řídí plánované změny, aby změna v konfiguraci nebo kódu nezpůsobila incident. Všechny procesy spolu souvisí: špatně řízená změna vyvolá incident, ten poruší SLA a monitoring to zachytí."
      }
    },
    "Organizace a řízení kyberbezpečnosti": {
      "Důvěrnost, integrita, dostupnost a nepopiratelnost": {
        "ex": "Únik osobních údajů z nemocnice narušuje důvěrnost (data pacientů čte neoprávněná osoba), pokud útočník navíc záznamy pozměnil – i integritu, při ransomware i dostupnost. Nepopiratelnost se zajistí auditním logem, který prokáže, kdo a kdy k datům přistoupil.",
        "cv": "Důvěrnost: neoprávněné osoby získaly přístup k zdravotním záznamům → opatření: šifrování dat at rest, řízení přístupu na úrovni rolí. Integrita: útočník mohl pozměnit záznamy → opatření: kontrolní součty, digitální podpisy. Dostupnost: ransomware znemožnil přístup lékařům → opatření: offline zálohy s pravidelným testem obnovy. Nepopiratelnost: nemocnice musí prokázat, kdo data zpřístupnil → opatření: centrální auditní log s ochranou proti manipulaci a časovými razítky."
      },
      "Bezpečnostní politiky a procedury": {
        "ex": "Politika pro USB zařízení stanoví, že přenosná média smí být používána pouze firemní, šifrovaná a schválená IT oddělením. Procedura registrace USB: uživatel podá žádost → IT ověří oprávnění → zapíše sériové číslo do evidence → povolí v DLP politice → uživatel potvrdí seznámení s pravidly.",
        "cv": "Politika: ‚V organizaci je zakázáno používat soukromá USB zařízení. Povolena jsou pouze šifrovaná média registrovaná IT oddělením. Porušení se hlásí jako bezpečnostní incident.' Procedura registrace: 1) zaměstnanec vyplní formulář s důvodem a typem dat, 2) nadřízený schválí, 3) IT přidělí šifrované USB, zapíše sériové číslo do CMDB, 4) DLP povolí zápis pouze na registrované zařízení, 5) zaměstnanec podepíše prohlášení o odpovědnosti. Politika říká ‚co a proč', procedura říká ‚jak krok po kroku'."
      },
      "Struktura řízení kyberbezpečnosti": {
        "ex": "CISO ve střední firmě reportuje přímo jednateli nebo představenstvu, nikoli IT řediteli. Důvod: pokud CISO spadá pod IT, existuje střet zájmů – IT upřednostní dostupnost a rychlost nasazení, zatímco bezpečnost může vyžadovat omezení. Bezpečnostní komise čtvrtletně hodnotí rizika a SOC eskaluje incidenty.",
        "cv": "Organizační schéma: Představenstvo → CISO (na úrovni ostatních ředitelů) → bezpečnostní tým / SOC. Paralelně: IT ředitel → infrastruktura, vývoj. CISO by neměl být podřízen IT řediteli, protože: 1) IT rozhoduje o rozpočtech, prioritách nasazení a změnách, které CISO musí nezávisle posuzovat, 2) konflikt zájmů – IT chce rychle nasadit, bezpečnost může požadovat odklad kvůli zranitelnostem, 3) pokud IT ředitel škrtne bezpečnostní rozpočet, CISO nemá eskalační cestu. Nezávislý reporting zajišťuje, že bezpečnostní rizika se dostanou na úroveň vedení bez filtrování."
      },
      "Role, odpovědnosti a kompetence": {
        "ex": "Při ransomware incidentu rozhoduje o odpojení systému incident manažer (ve spolupráci s vlastníkem aktiva), s vedením komunikuje CISO, forenzní analýzu provádí L2/L3 analytik SOC nebo externí tým a právní oddělení posuzuje ohlašovací povinnosti.",
        "cv": "Odpojení systému: rozhoduje incident manažer ve spolupráci s vlastníkem aktiva (ten zná obchodní dopad odstávky). V časové tísni má SOC pre-autorizaci odpojit systém a informovat ex post. Komunikace s vedením: CISO informuje představenstvo o rozsahu, dopadu a navržených krocích; PR/legal řeší komunikaci navenek. Forenzní analýza: provádí L2/L3 analytik nebo externí DFIR tým – zajistí image disků, analyzuje vektor útoku, identifikuje IOC. Klíčové je, aby odpovědnosti byly definovány předem v incident response plánu, jinak dochází ke zpoždění a nikdo nepřijme rozhodnutí o odpojení kritického systému."
      }
    },
    "Metody autentizace a řízení přístupu": {
      "Metody autentizace": {
        "ex": "Pro administrátora produkční databáze je vhodná kombinace: silné heslo (znalost) + hardwarový klíč FIDO2 (vlastnictví). TOTP z telefonu je přijatelná alternativa, ale podléhá phishingu; FIDO2 je phishing-resistant. Samotná biometrie by nestačila – funguje jako lokální odemčení zařízení, nikoli jako síťový faktor.",
        "cv": "Návrh MFA pro administrátora DB: 1. faktor – heslo min. 16 znaků uložené v password manageru (znalost), 2. faktor – FIDO2 hardwarový klíč (vlastnictví, phishing-resistant). Zdůvodnění: heslo ověřuje znalost, FIDO2 vyžaduje fyzický předmět a kryptograficky ověřuje doménu (chrání před phishingem). Alternativy jako SMS kód jsou slabší (SIM swap). Biometrie (otisk prstu) slouží jako lokální odemčení klíče, nikoli jako samostatný síťový faktor. Pro kritický systém se doporučuje i časové omezení session a logování každého přístupu."
      },
      "Řízení přístupu": {
        "ex": "DAC: vlastník souboru sám určuje, kdo má přístup (typicky NTFS ACL). MAC: systém vynucuje klasifikaci – uživatel s ‚Tajné' nesmí data sdílet s ‚Důvěrné' (Bell-LaPadula). RBAC: přístup se přiděluje přes role (‚Analytik', ‚Velitel'), nikoli přímo uživatelům – při změně pozice stačí změnit roli.",
        "cv": "DAC (Discretionary): vlastník objektu rozhoduje o přístupu – flexibilní, ale riziko nekonzistentního sdílení; vhodný pro běžné firemní prostředí. MAC (Mandatory): centrální politika klasifikace, uživatel nemůže přístup měnit – nutný ve vojenském IS, kde je klíčový princip need-to-know a no-write-down/no-read-up (Bell-LaPadula). RBAC (Role-Based): přístup přes role – škálovatelný, umožňuje oddělení povinností; uživatel s rolí ‚finance' nemá přístup k vojenským datům. Pro vojenský IS je nejvhodnější MAC, protože vynucuje klasifikační úrovně systémově a zabraňuje neautorizovanému sdílení, které by DAC nebo RBAC samy o sobě neodchytily."
      },
      "Biometrické metody autentizace": {
        "ex": "FAR (False Acceptance Rate) a FRR (False Rejection Rate) jsou v inverzním vztahu – snížení prahu zvýší FAR a sníží FRR. EER (Equal Error Rate) je bod, kde se FAR = FRR, a slouží k porovnání kvality snímačů. Pro serverovnu se nastaví nízký FAR (raději odmítnout oprávněného), pro telefon nízký FRR (komfort).",
        "cv": "FAR = podíl falešně přijatých neoprávněných osob; FRR = podíl falešně odmítnutých oprávněných. Zvýšení prahu citlivosti sníží FAR (méně neoprávněných projde), ale zvýší FRR (více oprávněných odmítnuto). EER je průsečík obou křivek – čím nižší EER, tím kvalitnější snímač. Serverovna: nastavit práh blízko minimálního FAR (např. FAR < 0,01 %), protože neoprávněný fyzický přístup je kritický; oprávněný zaměstnanec to zkusí znovu nebo použije alternativní faktor. Telefon: nastavit práh blízko minimálního FRR (např. FRR < 1 %), protože komfort je prioritou a riziko je nižší – telefon má PIN jako fallback."
      },
      "Elektronický podpis a jeho použití": {
        "ex": "Prostý e-podpis: jméno v e-mailu – žádné technické záruky, omezená důkazní hodnota. Zaručený: založen na kvalifikovaném certifikátu a kryptografii, ale nemusí používat bezpečné zařízení. Kvalifikovaný: kvalifikovaný certifikát + QSCD (kvalifikované zařízení, např. čipová karta) – právně ekvivalentní vlastnoručnímu podpisu dle eIDAS.",
        "cv": "Prostý elektronický podpis: jakékoliv elektronické vyjádření (napsané jméno, zaškrtnutí checkboxu) – neposkytuje záruky integrity ani identity, důkazní hodnota závisí na kontextu. Zaručený: jednoznačně spojen s podepisující osobou, umožňuje její identifikaci, vytvořen daty pod výlučnou kontrolou – vyžaduje kryptografický klíč a certifikát, ale ne nutně QSCD. Kvalifikovaný: zaručený + kvalifikovaný certifikát od kvalifikovaného poskytovatele + QSCD (čipová karta, USB token) – automaticky uznáván ve všech státech EU jako ekvivalent vlastnoručního podpisu. Typické použití: prostý pro běžné e-maily, zaručený pro firemní dokumenty, kvalifikovaný pro smlouvy, podání na úřady a daňová přiznání."
      },
      "Autentizace strojů a aplikací": {
        "ex": "Webová aplikace se k databázi autentizuje pomocí krátkodobého tokenu z vault služby (např. HashiCorp Vault), nikoli hardcoded heslem v kódu. Hardcoded heslo se dostane do verzovacího systému, nelze ho rotovat bez redeploye a při úniku zdrojového kódu je kompromitováno okamžitě.",
        "cv": "Návrh: aplikace si při startu vyžádá krátkodobé credentials z vault služby (např. HashiCorp Vault), která vygeneruje dočasný databázový účet s omezenou platností (např. 1 hodina). Alternativně mutual TLS – aplikace i DB server si ověří klientský certifikát. Proč ne hardcoded heslo: 1) dostane se do Git historie – každý s přístupem k repozitáři ho vidí, 2) nelze rotovat bez redeploye celé aplikace, 3) při kompromitaci zdrojového kódu je heslo okamžitě zneužitelné, 4) sdílené heslo neumožňuje rozlišit, která instance aplikace přistupuje. Vault řeší všechny tyto problémy: credentials jsou krátkodobé, rotace je automatická a auditovaná."
      }
    },
    "Analýza a řízení rizik": {
      "Asset management": {
        "ex": "E-shop: 1) webová aplikace (kritičnost vysoká – generuje tržby), vlastník: vedoucí e-commerce; 2) platební brána (vysoká – zpracovává transakce), vlastník: finanční ředitel; 3) zákaznická databáze (vysoká – osobní údaje, GDPR), vlastník: DPO; 4) skladový systém (střední – bez něj nelze expedovat), vlastník: vedoucí logistiky; 5) interní wiki (nízká – podpůrný systém), vlastník: IT.",
        "cv": "Pět klíčových aktiv e-shopu: 1) Webová aplikace – vlastník: vedoucí e-commerce, kritičnost: vysoká (výpadek = ztráta tržeb, poškození reputace); 2) Platební brána – vlastník: CFO, kritičnost: vysoká (zpracování transakcí, PCI DSS požadavky); 3) Zákaznická databáze – vlastník: DPO, kritičnost: vysoká (osobní údaje, hrozba pokuty GDPR); 4) Skladový/ERP systém – vlastník: vedoucí logistiky, kritičnost: střední (bez něj nelze expedovat, ale data lze dočasně vést ručně); 5) E-mailový server – vlastník: IT manažer, kritičnost: střední (komunikace se zákazníky, potvrzení objednávek). Bez evidence aktiv a vlastníků se při incidentu neví, koho informovat, kdo rozhodne o odstávce a jaké dopady očekávat."
      },
      "Analýza rizik": {
        "ex": "SQL injection na bankovní webovou aplikaci: hrozba = útočník, zranitelnost = nedostatečná validace vstupů, pravděpodobnost = vysoká (automatizované skenery), dopad = únik klientských dat + finanční ztráty + regulatorní sankce. Opatření: prepared statements, WAF, penetrační testy, code review.",
        "cv": "Hrozba: útočník provádějící SQL injection. Zranitelnost: webová aplikace banky nepoužívá parametrizované dotazy a nemá WAF. Pravděpodobnost: vysoká – SQL injection je v OWASP Top 10 a automatizované nástroje ji detekují snadno. Dopad: kritický – únik osobních a finančních dat klientů, porušení bankovní regulace, pokuta od ČNB/ÚOOÚ, reputační škoda. Výsledné riziko: kritické (vysoká pravděpodobnost × kritický dopad). Opatření ke snížení: 1) parametrizované dotazy (prepared statements) v kódu – eliminuje zranitelnost, 2) nasazení WAF s pravidly pro SQL injection – snižuje pravděpodobnost, 3) pravidelné penetrační testy – ověřuje účinnost, 4) princip nejmenších oprávnění pro DB účet aplikace – snižuje dopad."
      },
      "Opatření proti rizikům a jejich účinnost": {
        "ex": "Riziko krádeže notebooku s daty: snížení = šifrování celého disku (BitLocker/LUKS). Riziko finanční ztráty z ransomware: přenesení = kybernetické pojištění pokrývající náklady na obnovu a výpadek. Riziko výpadku starého tiskového serveru: akceptace = dopad je nízký, náklady na redundanci nepřiměřené.",
        "cv": "Riziko 1 – krádež notebooku s klientskými daty: opatření typu snížení – šifrování disku (BitLocker/LUKS). Zdůvodnění: šifrování neodstraní hrozbu krádeže, ale eliminuje dopad úniku dat; náklady minimální, účinnost vysoká. Riziko 2 – finanční ztráta z ransomware: opatření typu přenesení – kybernetické pojištění. Zdůvodnění: pojištění pokryje náklady na obnovu, právní služby a výpadek provozu; vhodné jako doplněk technických opatření, nikoli jako náhrada. Riziko 3 – výpadek starého tiskového serveru (tiskne interní štítky): opatření typu akceptace. Zdůvodnění: dopad nízký (zaměstnanci mohou dočasně tisknout jinde), náklady na redundantní server nepřiměřené vzhledem k riziku; vlastník aktiva akceptaci podepíše."
      },
      "Řízení identity a přístupu, ACL a privilegovaní uživatelé": {
        "ex": "PAM řešení pro 10 administrátorů: hesla uložena v trezoru, check-out na 4 hodiny se schválením nadřízeného, relace nahrávány. Sdílený root bez auditu = nikdo neví, kdo provedl změnu, nelze vyvodit odpovědnost ani detekovat insider threat.",
        "cv": "Návrh PAM pro 10 administrátorů: 1) Trezor hesel – administrátor si ‚vypůjčí' heslo na časově omezenou dobu (např. 4 h), po skončení se heslo automaticky rotuje. 2) Schvalovací workflow – přístup k produkčním systémům vyžaduje schválení nadřízeného nebo druhého admina (four-eyes principle). 3) Nahrávání relací – veškerá aktivita privilegovaného účtu se zaznamenává pro audit. 4) Osobní jmenné účty – žádný sdílený root. Proč sdílený root bez auditu = kritické riziko: nelze určit, kdo provedl destruktivní změnu (např. smazání databáze), nelze detekovat insider threat, nelze splnit požadavky auditora na accountability a nelze odvolat přístup jednomu adminovi bez změny hesla pro všechny."
      },
      "Audit, standardy a hodnocení bezpečnosti": {
        "ex": "ISO 27001 vyžaduje formální ISMS s analýzou rizik a výběrem kontrol; certifikace je ověřitelná třetí stranou. NIST CSF je dobrovolný framework organizovaný do 5 funkcí (Identify, Protect, Detect, Respond, Recover) bez formální certifikace. Certifikace ISO 27001 může být vyžadována regulací (např. zákon o KB) nebo obchodními partnery.",
        "cv": "ISO 27001: normativní standard s požadavky na ISMS – organizace musí provést analýzu rizik, vybrat kontroly z Annex A, zavést je a pravidelně auditovat; výsledkem je certifikát platný 3 roky s ročními dozorový audity. NIST CSF: dobrovolný framework, organizuje bezpečnost do 5 funkcí (Identify, Protect, Detect, Respond, Recover) a umožňuje hodnocení zralosti; nemá formální certifikaci. Srovnání přístupu k rizikům: ISO 27001 předepisuje proces řízení rizik, NIST CSF nechává volbu metody na organizaci. Kdy je certifikace vyžadována: zákon o kybernetické bezpečnosti vyžaduje bezpečnostní opatření srovnatelná s ISO 27001 pro správce IS KI/ZS; obchodní partneři (banky, cloudoví poskytovatelé) ji často požadují smluvně."
      }
    },
    "Bezpečnostní architektura": {
      "Bezpečnost sítí, izolace a segmentace": {
        "ex": "Návrh segmentace: DMZ (webservery, reverzní proxy) – přístupná z internetu, ale nemá přímé spojení do interní DB zóny. Serverová zóna (aplikační servery, DB) – přístupná jen z DMZ na definovaných portech. Uživatelská LAN – oddělena od serverové zóny firewallem. Správcovská síť (jump host) – přístup k managementu zařízení pouze odtud.",
        "cv": "Zóny: 1) DMZ – webové servery, reverzní proxy; povolena komunikace z internetu na port 443 a z DMZ do serverové zóny na port 8443 (aplikační API). 2) Serverová zóna – aplikační servery, databáze; povolena komunikace z DMZ na definované porty, zakázán přímý přístup z internetu i uživatelské LAN. 3) Uživatelská LAN (vývoj) – přístup k interním nástrojům a testovacímu prostředí, ale ne k produkčním DB. 4) Správcovská síť – jump host pro SSH/RDP k managementu všech zón; přístup jen pro administrátory přes VPN + MFA. Pravidla: default deny mezi zónami, povoleny jen explicitní toky. DMZ → serverová: pouze specifické porty. Uživatelská → serverová: zakázáno přímo, pouze přes CI/CD pipeline. Správcovská → všechny: management porty. Segmentace omezuje laterální pohyb – kompromitace webserveru v DMZ nedá přístup k DB."
      },
      "Firewally": {
        "ex": "Paketový firewall filtruje na L3/L4 (IP, port) – rychlý, ale nerozumí obsahu. Stavový firewall sleduje stav TCP spojení – povoluje odpovědi jen na navázaná spojení. Aplikační firewall (WAF) analyzuje L7 obsah HTTP požadavků a dokáže blokovat SQL injection nebo XSS v payloadu.",
        "cv": "Paketový firewall: inspekce na vrstvě 3-4 (zdrojová/cílová IP, port, protokol). Výhoda: vysoký výkon, jednoduchost. Omezení: nerozumí kontextu spojení ani obsahu – propustí útok uvnitř povoleného portu. Stavový firewall: sleduje stav TCP handshake (SYN, SYN-ACK, ACK) a UDP pseudo-stavů. Výhoda: automaticky povoluje odpovědi na legitimní spojení, blokuje nesolicited pakety. Omezení: stále nevidí do obsahu aplikačních dat. Aplikační firewall (WAF): inspekce na vrstvě 7 – parsuje HTTP požadavky, hledá vzory útoků (SQL injection, XSS, path traversal). Výhoda: detekuje útoky na aplikační vrstvě. Omezení: vyšší latence, nutnost ladění pravidel (false positives), neochrání před zero-day. Všechny tři typy se v praxi kombinují: paketový/stavový na perimetru, WAF před webovými aplikacemi."
      },
      "Monitoring, detekce a logování": {
        "ex": "Webový server by měl logovat: přístupové logy (IP, URL, status kód, user agent), autentizační události (úspěšné/neúspěšné přihlášení, odhlášení), chyby aplikace (500, stack trace), změny konfigurace. Logy se odesílají do SIEM přes syslog/TLS a chrání se proti manipulaci – lokální kopie na serveru je pouze dočasná.",
        "cv": "Bezpečnostně relevantní události webového serveru: 1) Autentizace – úspěšná i neúspěšná přihlášení (detekce brute-force), změny hesel, vytváření účtů. 2) Autorizace – odmítnuté přístupy (detekce privilege escalation pokusů). 3) Přístupové logy – IP, URL, HTTP metoda, status kód, velikost odpovědi, user agent (detekce skenování, anomálií). 4) Chyby aplikace – 500 kódy, neošetřené výjimky (mohou indikovat injection pokusy). 5) Administrativní akce – změny konfigurace, restart služeb. Ochrana logů: logy musí být chráněny proti manipulaci, protože útočník po kompromitaci serveru mění/maže logy, aby skryl stopy. Opatření: odesílat logy v reálném čase do centrálního SIEM přes šifrovaný kanál (syslog/TLS), append-only úložiště, hash řetězce pro detekci modifikace, oddělené přístupové oprávnění k logům."
      },
      "Bezpečnost operačních systémů": {
        "ex": "Hardening Windows Server: deaktivovat SMBv1, nastavit Windows Firewall, zapnout BitLocker, konfigurovat AppLocker (whitelist aplikací), omezit lokální admin účty, zapnout audit logon events, nastavit WSUS pro automatické záplaty, odebrat nepotřebné role a features.",
        "cv": "Checklist hardening Windows Server: 1) Minimalizace služeb – odebrat nepotřebné role (např. Print Server, Fax), deaktivovat SMBv1 a NetBIOS. 2) Patch management – konfigurovat WSUS/SCCM, testovací okno → produkční nasazení. 3) Účty a oprávnění – přejmenovat/deaktivovat výchozí Administrator, vytvořit jmenné admin účty, nastavit Account Lockout Policy. 4) Aplikační whitelisting – AppLocker/WDAC povolí jen schválené binárky. 5) Šifrování – BitLocker na systémovém disku s TPM. 6) Firewall – Windows Firewall s pravidly per služba, default deny inbound. 7) Audit – zapnout logování přihlášení, změn oprávnění, přístupu k objektům. 8) Síťová konfigurace – zakázat LLMNR/WPAD, nastavit NTP. Výchozí konfigurace je nedostatečná, protože Microsoft upřednostňuje kompatibilitu a snadné nasazení – výchozí stav má zapnuté legacy protokoly, slabé politiky hesel a minimální audit."
      },
      "Bezpečnost dat": {
        "ex": "Klasifikace pro univerzitu: Veřejná (web, studijní plány) – bez omezení. Interní (zápisy z porad, rozvrhy) – přístup jen pro zaměstnance. Důvěrná (hodnocení studentů, osobní údaje) – šifrování, řízený přístup. Přísně důvěrná (výsledky přijímacích řízení, zdravotní dokumentace) – šifrování + audit přístupu + need-to-know.",
        "cv": "Klasifikační schéma: 1) Veřejná – webové stránky, studijní programy, harmonogram. Opatření: žádná zvláštní, integrita zajištěna verzováním. 2) Interní – zápisy z porad, interní směrnice, rozvrhy. Opatření: přístup jen s univerzitním účtem, základní řízení přístupu. 3) Důvěrná – hodnocení studentů, osobní údaje zaměstnanců, smlouvy. Opatření: šifrování at rest (AES-256) i in transit (TLS), přístup jen pro definované role (studijní oddělení, HR), logování přístupu. 4) Přísně důvěrná – výsledky přijímacích řízení před zveřejněním, zdravotní dokumentace, disciplinární spisy. Opatření: šifrování + striktní need-to-know přístup + auditní log každého přístupu + bezpečné mazání po uplynutí doby uchování (přepis, kryptografická destrukce). Ke každé kategorii patří pravidla pro sdílení, přenos, zálohování a konec životního cyklu."
      }
    },
    "Kyberbezpečnost v organizaci": {
      "Událost, incident, útok, zranitelnost a slabina": {
        "ex": "Událost: neúspěšný pokus o přihlášení z neznámé IP – samo o sobě nemusí být škodlivé. Incident: 500 neúspěšných přihlášení za minutu z jedné IP na jeden účet – brute-force útok narušující bezpečnost. Útok: brute-force je úmyslná aktivita útočníka s cílem získat přístup. Zranitelnost: účet nemá ochranu proti opakovanému zadávání hesla (chybí account lockout). Slabina: organizace nemá politiku hesel ani lockout politiku.",
        "cv": "Příklad 1 – Událost vs. incident: jeden neúspěšný login z neznámé IP je bezpečnostní událost; tisíc neúspěšných loginů za minutu na jeden účet z jedné IP je incident (brute-force útok). Příklad 2 – Incident vs. útok: zaměstnanec omylem otevře phishingový odkaz a zadá heslo na falešné stránce – incident; útočník cíleně vytvořil phishingovou stránku a rozeslal e-maily – útok. Příklad 3 – Zranitelnost vs. slabina: nezáplatovaná CVE v Apache (konkrétní, využitelná technická chyba) je zranitelnost; absence procesu patch managementu v organizaci je slabina (systémový nedostatek kontroly, který umožňuje existenci zranitelností)."
      },
      "Role a činnosti bezpečnostního týmu": {
        "ex": "L1 analytik SOC: monitoruje dashboard SIEM, zpracovává alerty podle playbooku (ověří IP, uživatele, kontext), falešně pozitivní uzavře s komentářem, podezřelé eskaluje na L2 s enrichmentem (IOC, timeline). Kritéria eskalace: alert koreluje s více zdroji, týká se privilegovaného účtu, nebo indikuje laterální pohyb.",
        "cv": "Typický den L1 analytika: Začátek směny – handover od předchozí směny (otevřené incidenty, sledované trendy). Průběžně: monitorování SIEM dashboardu, zpracování alertů podle playbooků – ověření kontextu (je IP na blocklist? je uživatel VIP? je to pracovní doba?), obohacení o threat intel. Uzavření falešně pozitivních alertů s dokumentací důvodu. Eskalace na L2 při: 1) alert koreluje s více nezávislými zdroji (např. firewall + EDR), 2) cílem je privilegovaný účet nebo kritický systém, 3) alert indikuje laterální pohyb nebo exfiltraci, 4) playbook neobsahuje postup pro daný typ události. Konec směny: aktualizace shift reportu, předání otevřených případů."
      },
      "Řešení kyberbezpečnostního incidentu": {
        "ex": "Phishing vedl ke kompromitaci účtu zaměstnance. NIST fáze: 1) Preparation – IR plán, playbook pro phishing. 2) Detection & Analysis – SIEM detekuje anomální přihlášení z cizí země, L1 eskaluje. 3) Containment – reset hesla, revokace sessions, blokace phishingové domény. 4) Eradication – skenování mailboxu, identifikace dalších příjemců. 5) Recovery – obnova přístupu po MFA enrollment. 6) Post-Incident – lessons learned, úprava mail filtru.",
        "cv": "Scénář: zaměstnanec klikl na phishingový odkaz a zadal přihlašovací údaje na falešné stránce O365. Postup podle NIST SP 800-61: 1) Příprava: existuje IR plán a playbook pro kompromitaci účtu, kontakty na tým. 2) Detekce a analýza: SIEM detekuje přihlášení z neobvyklé lokace → L1 ověří s uživatelem → potvrdí phishing → eskalace na L2. L2 zjistí rozsah: kdo další dostal e-mail, zda útočník nastavil forwarding pravidlo. 3) Omezení: okamžitý reset hesla, revokace všech aktivních sessions, blokace phishingové domény na proxy, dočasné omezení přístupu z externích IP. 4) Odstranění: kontrola mailboxu (forwarding rules, delegace), skenování endpointu na malware, identifikace všech příjemců phishingu a preventivní reset. 5) Obnova: enrollment nového MFA faktoru, obnovení plného přístupu, monitoring účtu 30 dní. 6) Poučení: aktualizace mail filtrů, security awareness školení, úprava detekčního pravidla v SIEM."
      },
      "Bezpečnostní varování a příklady z praxe": {
        "ex": "Zero-day v e-mailovém serveru (CVSS 9.8): 1) Příjem varování z NÚKIB/CERT – posoudit relevanci (provozujeme tento produkt?). 2) Ověřit verzi a konfiguraci – jsme zranitelní? 3) Nasadit workaround (zakázat zranitelnou službu, omezit přístup ACL). 4) Aplikovat záplatu po testování. 5) Prověřit logy – nebyli jsme již kompromitováni? 6) Potvrdit, že opatření funguje (sken, test).",
        "cv": "Kroky po příjmu varování o zero-day v e-mailovém serveru: 1) Posouzení relevance – ověřit v CMDB, zda organizace provozuje postižený produkt a verzi. 2) Analýza dopadu – určit CVSS skóre, vektor útoku (vzdálený? autentizovaný?), dopad na CIA. 3) Okamžitý workaround – pokud záplata není dostupná: omezit přístup k zranitelné službě (ACL na firewallu), deaktivovat zranitelnou komponentu, přidat detekční pravidlo do IDS/SIEM. 4) Retroaktivní kontrola – prohledat logy za posledních 30+ dní na IOC spojené se zranitelností (nebyli jsme kompromitováni?). 5) Aplikace záplaty – po testování v neprodukčním prostředí nasadit na produkci v maintenance okně. 6) Ověření – vulnerability scan potvrdí, že záplata je účinná; monitoring anomálií pokračuje. 7) Reporting – informovat vedení o stavu, aktualizovat registr rizik."
      }
    },
    "Kyberútoky": {
      "Životní cyklus kyberútoku": {
        "ex": "Scénář mapovaný na Cyber Kill Chain: 1) Reconnaissance – útočník OSINT průzkumem zjistí jména zaměstnanců a e-maily z LinkedInu. 2) Weaponization – vytvoří Word dokument s makrem stahujícím payload. 3) Delivery – spear-phishing e-mail cílený na účetní. 4) Exploitation – makro zneužije zranitelnost v Office. 5) Installation – dropper nainstaluje RAT. 6) C2 – RAT komunikuje přes HTTPS na C2 server. 7) Actions on Objectives – exfiltrace finančních dat.",
        "cv": "Fáze Cyber Kill Chain na příkladu útoku na firemní síť: 1) Průzkum (Reconnaissance) – OSINT: LinkedIn profily, DNS záznamy, technologie na webu → Obrana: minimalizace veřejných informací, monitoring externího footprintu. 2) Vyzbrojení (Weaponization) – vytvoření exploitu/dokumentu s payloadem → Obrana: threat intelligence, sdílení IOC. 3) Doručení (Delivery) – spear-phishing e-mail → Obrana: e-mailový filtr, sandboxing příloh, awareness školení. 4) Zneužití (Exploitation) – exploit zranitelnosti v aplikaci → Obrana: patch management, aplikační whitelisting. 5) Instalace – dropper nainstaluje backdoor → Obrana: EDR, aplikační whitelisting. 6) Řízení (C2) – komunikace s C2 serverem přes HTTPS → Obrana: DNS filtering, analýza síťového provozu, proxy inspekce. 7) Cílové akce – exfiltrace dat → Obrana: DLP, segmentace, monitoring odchozí komunikace. Klíčový princip: narušení jakékoliv fáze zastaví celý útok."
      },
      "Advanced Persistent Threat": {
        "ex": "APT: státní aktér operuje v síti 6+ měsíců, používá zero-day exploity, custom malware a legitimní nástroje (PowerShell, WMI – living off the land). Oportunistický útok: kriminální skupina masově rozesílá ransomware, cílí na kohokoliv se zranitelným RDP, operuje dny až týdny.",
        "cv": "Srovnání APT vs. oportunistický útok: Motivace – APT: špionáž, sabotáž, geopolitické cíle; oportunistický: finanční zisk. Zdroje – APT: státní rozpočet, výzkumné týmy, zero-day zásoby; oportunistický: komerční nástroje, veřejné exploity. Doba působení – APT: měsíce až roky (persistence, opatrnost); oportunistický: hodiny až dny (rychlý zisk). Cílení – APT: konkrétní organizace/sektor; oportunistický: masové, nevybíravé. Obtížnost detekce – APT: velmi vysoká (custom malware, living off the land, šifrovaná C2, falešné stopy); oportunistický: nižší (známý malware, hlučné chování). Obrana proti APT vyžaduje threat hunting, behaviorální analýzu, segmentaci a předpoklad, že útočník je už uvnitř (assume breach)."
      },
      "MITRE ATT&CK taktiky, techniky a procedury": {
        "ex": "Initial Access – T1566 Phishing: detekce e-mailovým filtrem, sandboxingem příloh, awareness školením. Lateral Movement – T1021 Remote Services (RDP, SSH): detekce monitoringem neobvyklých přihlášení, segmentací sítě. Exfiltration – T1048 Exfiltration Over Alternative Protocol (DNS tunneling): detekce analýzou DNS dotazů (délka, frekvence, entropie).",
        "cv": "Tři taktiky z ATT&CK s technikami a detekcí: 1) Initial Access – technika T1566 Phishing (spear-phishing příloha): útočník posílá e-mail s malicious dokumentem. Detekce: sandboxing příloh v mail gateway, analýza URL reputace, korelace s threat intel feeds; uživatelské hlášení phishingu. 2) Lateral Movement – technika T1021 Remote Services (RDP, SMB): útočník se s ukradenými credentials přihlašuje na další stanice. Detekce: monitoring neobvyklých RDP/SMB spojení mezi stanicemi (běžný uživatel se nepřipojuje na servery), honeypot účty a sdílené složky, analýza autentizačních logů (neobvyklý čas, zdroj). 3) Exfiltration – technika T1048 Exfiltration Over Alternative Protocol (DNS tunneling): útočník kóduje data do DNS dotazů. Detekce: monitoring délky a entropie DNS dotazů (base64-encoded data mají vysokou entropii), objem DNS provozu na neznámé domény, passive DNS analýza."
      },
      "Průzkum, počáteční přístup a zneužití zranitelnosti": {
        "ex": "Phishing: zaměstnanec dostane e-mail napodobující interní systém → klikne na odkaz → zadá credentials. Prevence: e-mailový filtr, MFA, security awareness. Exploitace veřejné služby: útočník najde nezáplatovaný Exchange server → využije CVE → získá shell. Prevence: patch management, vulnerability scanning. Supply chain: útočník kompromituje aktualizaci dodavatele → malware se distribuuje legitimním kanálem. Prevence: ověřování integrity aktualizací, vendor risk management.",
        "cv": "Tři vektory počátečního přístupu: 1) Phishing – nejčastější vektor; útočník sociálním inženýrstvím přiměje uživatele kliknout na odkaz nebo otevřít přílohu. Prevence: multi-layered e-mail filtering (SPF, DKIM, DMARC), sandboxing příloh, security awareness training, MFA (i po úniku hesla útočník neprojde bez druhého faktoru). 2) Exploitace veřejně dostupné služby – útočník zneužije zranitelnost v exponované službě (VPN, webmail, RDP). Prevence: pravidelný vulnerability scanning, patch management s SLA (kritické záplaty do 48h), minimalizace exponovaných služeb, WAF. 3) Supply chain compromise – útočník kompromituje dodavatele software a distribuuje malware přes legitimní aktualizační mechanismus. Prevence: ověřování integrity aktualizací (digitální podpisy), vendor risk assessment, segmentace přístupu dodavatelů, monitoring chování software po aktualizaci."
      },
      "Spuštění kódu, upevnění přístupu a cílové akce": {
        "ex": "Perzistence ve Windows: 1) Scheduled Task – úloha spouští payload při každém startu. 2) Registry Run Key – záznam v HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run. 3) Windows Service – malware registrován jako služba. Detekce: monitoring nových scheduled tasks, registry changes a service installations přes Sysmon/EDR.",
        "cv": "Proč útočník buduje perzistenci: po restartu systému nebo odhlášení by ztratil přístup; perzistence zajistí, že se payload automaticky spustí znovu i bez další interakce útočníka. Tři mechanismy ve Windows: 1) Scheduled Task (T1053.005) – útočník vytvoří naplánovanou úlohu, která spouští payload při startu systému nebo periodicky. Detekce: Sysmon Event ID 1 (process creation) s rodičem schtasks.exe, monitoring nových tasků přes Event ID 4698. 2) Registry Run Key (T1547.001) – záznam v HKCU/HKLM Run key spouští program při přihlášení. Detekce: Sysmon Event ID 13 (registry value set) na Run/RunOnce klíče, baseline známých hodnot. 3) Windows Service (T1543.003) – malware se registruje jako služba s automatickým startem. Detekce: Sysmon Event ID 6 (driver loaded) / Event ID 7 (image loaded), monitoring sc.exe a New-Service, alert na služby spuštěné z neobvyklých cest (Temp, AppData)."
      },
      "Obrana na úrovni hostitele a sítě": {
        "ex": "Defense in depth: perimetr (firewall, WAF) zachytí vnější útoky; síť (IDS/IPS, segmentace) omezí laterální pohyb; endpoint (EDR, hardening, patching) detekuje aktivitu na stanici; data (šifrování, DLP) chrání cílová aktiva. Selhání jedné vrstvy neznamená kompromitaci – další vrstva útok detekuje nebo zastaví.",
        "cv": "Vícevrstvá obrana (defense in depth) pro firemní síť: 1) Perimetr – firewall s default deny, WAF před webovými aplikacemi, e-mailový filtr se sandboxingem. 2) Síťová vrstva – segmentace do zón (DMZ, servery, uživatelé, správa), IDS/IPS na hranicích zón, DNS filtering, network monitoring (NetFlow analýza). 3) Endpoint vrstva – EDR na všech stanicích a serverech, OS hardening (CIS benchmarks), aplikační whitelisting, pravidelný patching (WSUS/SCCM). 4) Datová vrstva – šifrování citlivých dat at rest i in transit, DLP politiky proti exfiltraci, zálohy podle pravidla 3-2-1. 5) Identita – MFA pro všechny uživatele, PAM pro administrátory, princip nejmenších oprávnění. Proč nestačí jediné opatření: firewall nezastaví phishing (legitimní e-mail projde), antivirus nedetekuje zero-day, segmentace nepomůže, pokud útočník má credentials administrátora. Kombinace vrstev zajišťuje, že selhání jedné nevede k úplné kompromitaci."
      }
    },
    "Vymezení bezpečnostních studií": {
      "Pojmy bezpečnost, hrozba a riziko": {
        "ex": "Ochrana kritické infrastruktury: bezpečnost = stav, kdy elektrárna dokáže odolat známým hrozbám a udržet provoz. Hrozba = státem sponzorovaná APT skupina cílící na energetický sektor. Riziko = pravděpodobnost úspěšného kyberútoku × dopad (výpadek dodávek elektřiny pro statisíce lidí). Riziko je vždy kontextuální – stejná hrozba představuje jiné riziko pro elektrárnu a jiné pro kavárnu.",
        "cv": "Bezpečnost: stav přijatelné ochrany referenčních hodnot (aktiva, služby, životy, suverenita); není absolutní – vždy existuje zbytkové riziko. Hrozba: potenciální příčina nechtěné události – může být přírodní (záplava), technická (selhání HW) nebo lidská (útočník, insider). Riziko: kombinace pravděpodobnosti realizace hrozby a dopadu na chráněné hodnoty. Příklad kritické infrastruktury: hrozba – APT skupina cílí na energetiku; zranitelnost – SCADA systém bez aktualizací; dopad – výpadek elektřiny pro region. Riziko je kontextuální, protože závisí na konkrétních zranitelnostech a hodnotě aktiv dané organizace. Tatáž hrozba (ransomware gang) představuje kritické riziko pro nemocnici (ohrožení životů) a nízké riziko pro izolovaný testovací server."
      },
      "Vnitřní a vnější bezpečnost a sektory": {
        "ex": "Ransomware útok na nemocnici je primárně hrozba vnitřní bezpečnosti – narušuje fungování zdravotnictví uvnitř státu, ohrožuje životy pacientů a důvěru ve veřejné služby. Pokud útok provedla cizí zpravodajská služba jako součást hybridní kampaně, propojuje se i s vnější bezpečností.",
        "cv": "Příklad: ransomware útok na nemocnici v ČR. Sektor: zdravotnictví. Primárně jde o vnitřní bezpečnost – narušení fungování zdravotní péče na území státu, ohrožení životů pacientů, ztráta důvěry ve veřejné služby. Přechod k vnější bezpečnosti nastává, pokud: útok je součástí koordinované kampaně cizího státu proti zdravotnickému sektoru ČR, nebo pokud cizí zpravodajská služba cíleně destabilizuje zdravotnictví jako součást hybridní války. V praxi: kyberútok na nemocnici může mít kaskádové dopady – sanitky přesměrovány do vzdálenějších nemocnic, odložené operace, únik zdravotních záznamů. Nelze ho redukovat na ‚IT problém' – jde o průřezovou bezpečnostní hrozbu překračující hranice sektoru."
      },
      "Bezpečnostní politika a její analýza": {
        "ex": "Fiktivní politika: ‚Organizace X zavede šifrování všech mobilních zařízení do Q2 2025.' Analýza: Cíl = ochrana dat při ztrátě/krádeži. Odpovědný subjekt = CISO. Nástroj = MDM řešení s vynuceným šifrováním. Metrika = % zařízení s aktivním šifrováním (cíl 100 %).",
        "cv": "Analýza fiktivní bezpečnostní politiky ‚Organizace X zavede povinné šifrování všech mobilních zařízení do Q2 2025': Cíl – ochrana důvěrnosti dat při ztrátě nebo krádeži mobilního zařízení (notebook, telefon, tablet). Odpovědný subjekt – CISO zodpovídá za politiku, IT oddělení za implementaci, zaměstnanci za dodržování. Nástroj – MDM (Mobile Device Management) řešení vynucující BitLocker/FileVault na noteboocích a šifrování úložiště na telefonech; politika zakazující přístup nešifrovaným zařízením do firemní sítě. Metrika úspěšnosti – % zařízení s aktivním šifrováním (cíl 100 %), počet incidentů s nešifrovanými zařízeními (cíl 0), doba od registrace zařízení do aktivace šifrování (cíl < 24 h). Omezení: politika neřeší šifrování dat v cloudu ani na soukromých zařízeních (BYOD); chybí sankce za nedodržení."
      }
    },
    "Bezpečnostní strategie": {
      "Strategické dokumenty České republiky": {
        "ex": "Bezpečnostní strategie ČR je zastřešující dokument, který identifikuje bezpečnostní zájmy, hrozby a cíle státu – kybernetické hrozby řadí mezi průřezové. Národní strategie kyberbezpečnosti ji konkretizuje: definuje cíle (odolnost, prevence, reakce), zodpovědné orgány a akční plány. NÚKIB je gestor implementace a koordinátor na národní úrovni.",
        "cv": "Bezpečnostní strategie ČR: zastřešující dokument vlády, identifikuje bezpečnostní zájmy a hrozby včetně kybernetických; je rámcová a průřezová. Národní strategie kyberbezpečnosti: odvozena z Bezpečnostní strategie, konkretizuje cíle pro kyberprostor – budování odolnosti, prevence, reakce na incidenty, mezinárodní spolupráce, vzdělávání. Hierarchie: Bezpečnostní strategie → Národní strategie kyberbezpečnosti → Akční plán (konkrétní úkoly, termíny, zodpovědné orgány). Role NÚKIB: gestor Národní strategie kyberbezpečnosti, koordinuje její implementaci, předkládá vládě zprávy o plnění, provozuje GovCERT.CZ, vydává varování a reaktivní opatření. NÚKIB je zároveň regulátorem podle zákona o kybernetické bezpečnosti."
      },
      "Význam kyberbezpečnosti ve strategiích": {
        "ex": "Výpadek systému datových schránek by ochromil komunikaci státní správy s občany a firmami – právní úkony by se zdržely, fikce doručení by nezačala běžet, úřady by musely přejít na papírovou komunikaci. Proto je kyberbezpečnost strategickou prioritou – digitalizace zvýšila závislost státu na IT systémech.",
        "cv": "Příklad: výpadek datových schránek na 48 hodin. Dopady: 1) právní úkony (podání, doručování rozhodnutí) se zastaví – lhůty se mohou zkomplikovat, 2) firmy nemohou komunikovat s úřady – daňová přiznání, výběrová řízení, 3) občané nedostanou úřední rozhodnutí, 4) alternativa (papírová pošta) je pomalá a nepřipravená na nárazový objem. Proč je kyberbezpečnost strategickou prioritou: stát digitalizoval klíčové služby (datové schránky, eGovernment, základní registry, daňový portál) → závislost na IT systémech je existenční. Kyberincident může ochromit daňovou správu, zdravotnictví, justici a komunikaci krizového řízení současně. Bez strategického přístupu (prevence, detekce, reakce, redundance) může jeden úspěšný útok paralyzovat fungování státu."
      },
      "Bezpečnostní systém ČR a role institucí": {
        "ex": "NÚKIB: regulace a dohled nad kyberbezpečností, provoz GovCERT.CZ. Policie ČR (NCKB): vyšetřování kyberkriminality. Zpravodajské služby (VZ, BIS): kybernetická obrana a kontrarozvědka. Při APT útoku: NÚKIB detekuje a varuje, VZ analyzuje geopolitický kontext, policie vyšetřuje, pokud jde o trestný čin, a všichni sdílejí IOC.",
        "cv": "Tři klíčové instituce a jejich role: 1) NÚKIB – regulace (zákon o KB), dohled nad povinnými subjekty, provoz GovCERT.CZ (detekce, varování, koordinace reakce), vydávání reaktivních opatření. 2) Policie ČR (NCKB – Národní centrála proti kybernetické kriminalitě) – vyšetřování trestných činů v kyberprostoru, zajišťování elektronických důkazů, mezinárodní policejní spolupráce (Europol, Interpol). 3) Zpravodajské služby – Vojenské zpravodajství: kybernetická obrana, aktivní opatření v kyberprostoru; BIS: kontrarozvědná činnost, detekce státem sponzorované špionáže. Koordinace při APT útoku: NÚKIB detekuje anomálii přes GovCERT → vydá varování dotčeným subjektům → sdílí IOC se zpravodajskými službami. VZ analyzuje technické a geopolitické indikátory pro atribuci. Pokud jde o trestný čin, NÚKIB předá informace policii. Koordinace probíhá přes Bezpečnostní radu státu a operativně přes sdílení IOC a situační zprávy."
      }
    },
    "Kyberválka": {
      "Definice, historie a současné trendy": {
        "ex": "Kyberválka: státem řízené kyberoperace prováděné v kontextu ozbrojeného nebo politického konfliktu s cílem poškodit protivníka. Problém definice: chybí konsenzus, zda kyberútok sám o sobě může dosáhnout prahu ‚použití síly' podle čl. 2(4) Charty OSN. Historický příklad: útoky na Estonsko (2007) – masivní DDoS na vládní a bankovní systémy v kontextu politického sporu s Ruskem.",
        "cv": "Definice kyberválky: neexistuje jednotná definice; obecně zahrnuje státem řízené nebo sponzorované kybernetické operace vedené v kontextu konfliktu s cílem poškodit, destabilizovat nebo získat strategickou výhodu nad protivníkem. Tallinnský manuál aplikuje mezinárodní humanitární právo na kyberprostor, ale není právně závazný. Problém prahu použití síly: kyberútok sám o sobě dosáhne prahu ‚ozbrojený útok' jen pokud způsobí důsledky srovnatelné s konvenčním útokem (ztráty na životech, fyzická destrukce). Většina kyberoperací zůstává pod tímto prahem – špionáž, narušení služeb, manipulace informací. Historický příklad: Estonsko 2007 – masivní DDoS útoky na vládní, bankovní a mediální systémy po přemístění sovětského pomníku; atribuováno Rusku, ale důkazy neprokázaly přímé řízení státem – ilustruje obtížnost stanovení prahu i atribuce."
      },
      "Aktéři a přisouzení kyberútoků": {
        "ex": "Atribuce kyberútoku je obtížná: útočník používá proxy servery, VPN, kompromitované stroje třetích stran a záměrně zanechává falešné stopy (false flags). Tři typy důkazů: 1) technické (malware, infrastruktura C2, kód), 2) zpravodajské (HUMINT, SIGINT), 3) kontextuální (geopolitická motivace, timing).",
        "cv": "Proč je atribuce obtížná: 1) Anonymizace – útočník maskuje původ přes VPN, Tor, kompromitované stroje v třetích zemích. 2) False flags – záměrné zanechání stop ukazujících na jiného aktéra (komentáře v kódu v cizím jazyce, přepsání časových pásem). 3) Přeshraniční infrastruktura – C2 servery v jurisdikcích, které nespolupracují. 4) Sdílení nástrojů – stejný malware používá více skupin (leaked tools). Tři typy důkazů k přisouzení: 1) Technické – unikátní malware, infrastruktura C2 (registrace domén, IP rozsahy), kryptografické artefakty, TTPs mapované na známé skupiny v ATT&CK. 2) Zpravodajské – HUMINT (zdroje uvnitř služeb protivníka), SIGINT (zachycená komunikace), sdílení informací mezi aliančními partnery. 3) Kontextuální/geopolitické – cui bono (kdo má motiv), timing útoku vůči politickým událostem, konzistence s doktrínou státu. Spolehlivá atribuce vyžaduje kombinaci všech tří typů; samotný technický důkaz je nedostatečný."
      },
      "Odstrašení v kyberprostoru": {
        "ex": "Odstrašení odvetou (deterrence by punishment): hrozba protiopatřením – v kyberprostoru problematické, protože útočník nemusí být spolehlivě identifikován (atribuce), a proto hrozba není věrohodná. Odstrašení odepřením (deterrence by denial): zvyšování odolnosti cílů tak, aby útok neměl očekávaný efekt – v kyberprostoru účinnější přístup.",
        "cv": "Odstrašení odvetou: stát hrozí protivníkovi, že na kyberútok odpoví (kyberneticky, diplomaticky, ekonomicky nebo vojensky). Problém v kyberprostoru: 1) obtížná atribuce – pokud nevíme jistě, kdo zaútočil, hrozba odvetou není věrohodná, 2) proporcionalita – jaká reakce je přiměřená na DDoS vs. sabotáž infrastruktury? 3) eskalační riziko – odveta může vést ke spirále. Odstrašení odepřením: zvyšování odolnosti cílů, aby útok nezpůsobil očekávaný dopad. V kyberprostoru: segmentace, redundance, zálohy, incident response → útočník investuje zdroje, ale nedosáhne cíle. Výhoda: nevyžaduje atribuci. Proč jaderné odstrašení je špatná analogie: 1) jaderné zbraně mají jednoznačný signální efekt – kyberoperace jsou často skryté, 2) jaderná atribuce je triviální (raketa má trajektorii) – kybernetická ne, 3) jaderný práh je jasný – kybernetický neexistuje, 4) MAD (mutually assured destruction) předpokládá racionalitu obou stran a jasné signály – v kyberprostoru aktéři jednají pod nejistotou."
      },
      "Netwars a kyberkonflikt": {
        "ex": "Netwars (Arquilla & Ronfeldt): konflikty vedené decentralizovanými sítěmi aktérů, kteří využívají informační technologie pro koordinaci a útok. Příklad: hacktivistická skupina Anonymous – decentralizovaná, bez formálního velení, koordinovaná přes sociální sítě – DDoS útoky na vládní weby během politických protestů.",
        "cv": "Koncept netwars (Arquilla & Ronfeldt, RAND): konflikty vedené síťově organizovanými aktéry (nestátní skupiny, sociální hnutí, teroristé), kteří využívají informační sítě pro komunikaci, koordinaci a útok. Klíčové znaky: decentralizace (žádné centrální velení), flexibilita, rychlá adaptace, informační rozměr (narativ je zbraň). Příklad nestátního aktéra: Anonymous – decentralizovaná hacktivistická síť bez formální hierarchie. Operace OpTunisia (2011): DDoS útoky na vládní weby Tuniska během Arabského jara na podporu protestujících. Politický dopad: narušení vládní cenzury, zvýšení mezinárodní pozornosti, podpora opozice. Ukazuje, že nestátní aktér může prostřednictvím kyberoperací ovlivnit politické dění bez konvenční vojenské síly. Omezení konceptu: ne každý kyberkonflikt je netwars – státní APT skupiny mají hierarchickou strukturu, nikoli síťovou."
      }
    },
    "Ochrana kritické infrastruktury": {
      "Vymezení kritické infrastruktury": {
        "ex": "Průřezová kritéria: prvek KI se určuje podle dopadu výpadku – počet zasažených osob (> 125 000), ekonomická ztráta, narušení veřejného pořádku. Sektorová kritéria: pro energetiku např. výkon elektrárny nad stanoveným limitem. Příklad: velká elektrárna splňující výkonový práh je prvek KI v sektoru energetiky; její výpadek by zasáhl statisíce odběratelů.",
        "cv": "Průřezová kritéria určení KI (nařízení vlády č. 432/2010 Sb.): posuzuje se dopad na: 1) počet osob s narušeným životem (> 125 000), 2) ekonomický dopad (> stanoveného prahu), 3) rozsah území, 4) časová hranice výpadku. Sektorová kritéria: specifikují se pro každý sektor zvlášť – energetika (výkon elektrárny, délka vedení), vodárenství (objem dodávek), doprava (kapacita uzlu), zdravotnictví (počet lůžek), ICT (počet uživatelů). Příklad z energetického sektoru: elektrárna s instalovaným výkonem nad 200 MW splňuje sektorové kritérium a její výpadek by zasáhl rozsáhlé území → je určena jako prvek KI. Správce tohoto prvku má povinnosti podle zákona o KB: analýza rizik, bezpečnostní opatření, hlášení incidentů NÚKIB, audit. V kyberbezpečnosti: posuzuje se závislost provozu elektrárny na IS (SCADA, DCS, podnikové systémy) a dopad jejich kompromitace na fyzický provoz."
      },
      "Kyberútoky na kritickou infrastrukturu": {
        "ex": "ICS/SCADA útok vs. běžný IT útok: SCADA používá proprietární protokoly (Modbus, DNP3) bez autentizace; důsledky útoku jsou fyzické (poškození turbíny, únik chemikálií); patching je obtížný (systémy běží 24/7 bez odstávek). Opatření: síťová izolace OT od IT (air gap nebo striktní DMZ), monitoring OT protokolů, whitelisting aplikací na HMI.",
        "cv": "Specifika ICS/SCADA oproti IT: 1) Priorita: v IT je na prvním místě důvěrnost, v OT dostupnost a bezpečnost provozu (safety). 2) Protokoly: Modbus, DNP3, IEC 104 – navrženy bez autentizace a šifrování. 3) Životní cyklus: OT systémy běží 15–25 let, často na zastaralých OS bez záplat. 4) Patching: odstávka pro aktualizaci je nákladná nebo nemožná (nepřetržitý provoz). 5) Důsledky: kompromitace IT = ztráta dat; kompromitace OT = fyzické poškození (turbína, ventil), únik chemikálií, ohrožení životů. Dvě obranná opatření: 1) Síťová izolace OT od IT – buď fyzický air gap, nebo striktní průmyslová DMZ (Purdue model, zóny a conduits podle IEC 62443): IT síť nemá přímý přístup k OT, data se přenášejí jednosměrně přes data diodu nebo jump server. 2) Monitoring OT protokolů – specializované IDS pro průmyslové protokoly (detekce neobvyklých příkazů, změn setpointů, neautorizovaných přístupů k PLC); běžný IT IDS nerozumí Modbus/DNP3 komunikaci."
      },
      "Přisouzení a odstrašování": {
        "ex": "Důsledky (ne)schopnosti atribuce útoku na KI: pokud stát dokáže útok přisoudit konkrétnímu aktérovi s dostatečnou důkazní kvalitou, může reagovat diplomaticky (vyhoštění, sankce), právně (trestní stíhání) nebo vojensky. Pokud atribuce selže, stát nemůže legitimně reagovat a odstrašení ztrácí věrohodnost.",
        "cv": "Důsledky schopné atribuce: stát může 1) diplomaticky – veřejné přisouzení (naming & shaming), vyhoštění diplomatů, koordinované prohlášení s aliančními partnery; 2) ekonomicky – sankce proti jednotlivcům/entitám (zmrazení aktiv, zákaz obchodu); 3) právně – mezinárodní zatykač, trestní stíhání (i in absentia); 4) vojensky – protiopatření v kyberprostoru nebo konvenční reakce (pokud útok dosáhl prahu ozbrojeného útoku). Důsledky neschopnosti atribuce: stát nemůže legitimně reagovat proti konkrétnímu aktérovi, odstrašení odvetou ztrácí věrohodnost, útočník je povzbuzen k dalším operacím (beztrestnost). Z hlediska mezinárodního práva: odpovědnost státu za mezinárodně protiprávní akt vyžaduje přisouzení jednání státu (atribuce); bez ní nelze uplatnit protiopatření podle čl. 49–54 Articles on State Responsibility. Proto je kvalita důkazů klíčová – unáhlená atribuce může vést k diplomatické krizi, zatímco absence atribuce podkopává mezinárodní normy zodpovědného chování v kyberprostoru."
      }
    },
    "Právní úprava kyberbezpečnosti v ČR a EU": {
      "Základní instituty a principy": {
        "ex": "Zákon o kybernetické bezpečnosti (181/2014 Sb.) ukládá správci IS kritické infrastruktury: provádět analýzu rizik, zavést organizační a technická bezpečnostní opatření (podle vyhlášky 82/2018 Sb.), detekovat a hlásit bezpečnostní incidenty NÚKIB bez zbytečného odkladu, provádět pravidelný audit a umožnit kontrolu ze strany NÚKIB. NIS2 rozšiřuje okruh povinných subjektů.",
        "cv": "Povinnosti správce IS KI podle zákona o KB: 1) Zavést bezpečnostní opatření – organizační (bezpečnostní politika, řízení rizik, řízení dodavatelů, řízení přístupu, zvládání incidentů) a technická (fyzická bezpečnost, ochrana komunikačních sítí, kryptografické prostředky, logování a detekce, bezpečnost průmyslových systémů) – specifikováno vyhláškou 82/2018 Sb. 2) Provést analýzu rizik a na jejím základě vybrat přiměřená opatření. 3) Hlásit bezpečnostní incidenty NÚKIB – bez zbytečného odkladu (do 24h pro závažné incidenty dle NIS2). 4) Provádět pravidelný audit bezpečnosti (min. jednou ročně pro KI). 5) Plnit reaktivní opatření vydaná NÚKIB. 6) Umožnit kontrolu NÚKIB. NIS2 rozšiřuje povinnosti: odpovědnost managementu, povinné školení vedení, vyšší sankce (až 10M EUR nebo 2 % obratu), rozšíření okruhu regulovaných subjektů na ‚essential' a ‚important' entity."
      },
      "Povinné orgány a subjekty": {
        "ex": "Správce IS KI: provozovatel systému, jehož narušení by ohrozilo bezpečnost státu (energetika, doprava); nejpřísnější povinnosti. Provozovatel základní služby: poskytovatel služby závislé na IS, jejíž narušení by mělo významný dopad (nemocnice, vodárny). Poskytovatel digitální služby: online tržiště, vyhledávač, cloud; lehčí regulace, samohodnocení.",
        "cv": "Tři kategorie regulovaných subjektů a jejich povinnosti: 1) Správce IS kritické infrastruktury – nejpřísnější režim: kompletní bezpečnostní opatření dle vyhlášky, hlášení incidentů, audit, plán kontinuity, povinnost plnit reaktivní opatření NÚKIB. Příklad: provozovatel elektrárny, telekomunikační operátor. 2) Provozovatel základní služby – střední režim: bezpečnostní opatření přiměřená riziku, hlášení incidentů s významným dopadem, audit. Příklad: nemocnice, vodárna, univerzita se systémem základní služby. 3) Poskytovatel digitální služby – lehčí režim: samohodnocení rizik, hlášení incidentů s podstatným dopadem, NÚKIB dozoruje reaktivně (na základě podnětu). Příklad: cloud computing, online tržiště, vyhledávač. NÚKIB: dozorový orgán pro všechny kategorie – vydává vyhlášky a metodiky, přijímá hlášení incidentů, provádí kontroly, vydává varování a reaktivní opatření, může uložit pokutu."
      },
      "Systém zajištění kybernetické bezpečnosti": {
        "ex": "Schéma systému: Prevence (bezpečnostní opatření, vyhláška) → Detekce (NÚKIB/GovCERT monitoruje, subjekty detekují) → Hlášení (subjekt → NÚKIB, do 24 h) → Reakce (NÚKIB vydá varování nebo reaktivní opatření) → Kontrola (NÚKIB provádí dozor, ukládá sankce) → Zpětná vazba (lessons learned, aktualizace opatření).",
        "cv": "Schéma systému zajištění kybernetické bezpečnosti v ČR: 1) Prevence – povinné subjekty zavádějí bezpečnostní opatření (organizační + technická), provádějí analýzu rizik, školí zaměstnance. 2) Detekce – subjekty monitorují své systémy; GovCERT.CZ (provozovaný NÚKIB) monitoruje kybernetický prostor ČR, sbírá threat intelligence. 3) Hlášení incidentů – subjekt detekuje incident → hlásí NÚKIB (kontaktní údaje, popis, dopad, přijatá opatření) → NÚKIB posoudí závažnost. 4) Reakce – NÚKIB může vydat: varování (upozornění na hrozbu), reaktivní opatření (závazný pokyn k akci, např. odpojit systém, aplikovat záplatu) nebo ochranné opatření. Subjekt je povinen plnit. 5) Koordinace – GovCERT.CZ koordinuje reakci, sdílí IOC s ostatními CERT týmy (CSIRT.CZ pro soukromý sektor), spolupracuje s EU (ENISA, CSIRTs Network). 6) Dohled – NÚKIB provádí kontroly plnění povinností, může uložit nápravná opatření a pokuty. Tok informací: subjekt → NÚKIB (hlášení) → GovCERT (analýza, koordinace) → varování/reaktivní opatření → zpět k subjektům."
      }
    },
    "Kyberkriminalita": {
      "Prameny práva": {
        "ex": "Tři skutkové podstaty: 1) § 230 TZ – neoprávněný přístup k počítačovému systému: pachatel bez oprávnění překoná bezpečnostní opatření a získá přístup. 2) § 231 TZ – opatření a nabízení přístupového zařízení a hesla: prodej crackovacích nástrojů nebo ukradených credentials. 3) § 209 TZ – podvod (kyber): phishing – pachatel uvede oběť v omyl falešnou stránkou a vyláká přihlašovací údaje k bankovnímu účtu.",
        "cv": "Tři skutkové podstaty trestných činů v kyberprostoru: 1) § 230 TZ – Neoprávněný přístup k počítačovému systému a nosiči informací: pachatel překoná bezpečnostní opatření a získá přístup k systému nebo datům bez oprávnění. Typické jednání: hacker prolomí heslo k firemnímu serveru a stáhne databázi zákazníků. 2) § 232 TZ – Poškození záznamu v počítačovém systému a na nosiči informací: pachatel neoprávněně data zničí, poškodí, změní nebo učiní neupotřebitelnými. Typické jednání: ransomware zašifruje soubory a znemožní přístup. 3) § 209 TZ – Podvod (s kybernetickým prvkem): pachatel uvedením v omyl způsobí škodu. Typické jednání: phishing – pachatel rozešle e-maily napodobující banku, oběť zadá přihlašovací údaje na falešné stránce, pachatel převede peníze. Další relevantní: § 175 TZ (vydírání – ransomware), § 234 TZ (neoprávněné nakládání s osobními údaji)."
      },
      "Typická trestná činnost": {
        "ex": "DDoS útok na e-shop: právní kvalifikace potenciálně jako § 232 TZ (poškození záznamu v počítačovém systému) – útočník znepřístupnil službu; pokud za zastavení požaduje výkupné, i § 175 TZ (vydírání). Důkazy: logy serveru (zdrojové IP, objem provozu), komunikace útočníka (e-mail s požadavkem), záznamy ISP, finanční škoda (ušlý zisk).",
        "cv": "DDoS útok na e-shop – právní kvalifikace: primárně § 232 TZ (poškození záznamu v počítačovém systému / zásah do provozu) – útočník záměrně znepřístupnil systém. Pokud útočník požaduje výkupné za zastavení: souběh s § 175 TZ (vydírání). Pokud způsobí škodu nad 100 000 Kč: kvalifikovaná skutková podstata s vyšší trestní sazbou. Důkazy potřebné pro vyšetřování: 1) Technické – serverové logy (zdrojové IP adresy, objem a typ provozu, časové razítka), záznamy firewallu/IDS, komunikace s ISP o mitigaci. 2) Komunikační – e-mail nebo zpráva útočníka s požadavkem výkupného, metadata komunikace. 3) Finanční – vyčíslení škody (ušlý zisk za dobu výpadku, náklady na mitigaci, náklady na forenzní analýzu). 4) Svědecké – výpovědi administrátorů, timeline událostí. Policie by potřebovala spolupráci s ISP pro identifikaci zdrojů útoku a případně mezinárodní právní pomoc, pokud jsou zdroje v zahraničí."
      },
      "Klasifikace, právní kvalifikace a postupy": {
        "ex": "Kyberkriminalita v užším smyslu: cílem je počítačový systém sám – neoprávněný přístup, šíření malwaru, DDoS. V širším smyslu: počítač je nástrojem klasického trestného činu – online podvod, kyberšikana, distribuce nelegálního obsahu. Hranice se prolínají: ransomware je zásah do systému (užší) i vydírání (širší).",
        "cv": "Klasifikace pěti příkladů: 1) Phishing – širší smysl: počítač je nástrojem podvodu (§ 209 TZ), cílem není systém sám, ale oklamání oběti. 2) Ransomware – obojí: zásah do systému (§ 232 TZ, užší smysl) + vydírání (§ 175 TZ, širší smysl). 3) Online podvod (falešný e-shop) – širší smysl: klasický podvod spáchaný prostřednictvím internetu, počítač je médium. 4) Kyberšikana (online harassment) – širší smysl: klasický trestný čin (nebezpečné pronásledování § 354 TZ, pomluva § 184 TZ) realizovaný elektronicky. 5) Neoprávněný přístup (hacking) – užší smysl: cílem je přímo počítačový systém (§ 230 TZ). Praktický význam rozlišení: u kyberkriminality v užším smyslu jsou důkazy primárně digitální a vyžadují speciální forenzní postupy; u širšího smyslu se kombinují tradiční a digitální důkazy."
      },
      "Mezinárodní spolupráce": {
        "ex": "Překážky: rozdílné právní systémy (co je trestné v ČR nemusí být v zemi pachatele), zdlouhavé MLA (mutual legal assistance) procedury (měsíce vs. volatilita důkazů), nespolupracující jurisdikce (safe havens), jazykové a kulturní bariéry. Nástroje: Budapešťská úmluva, Europol/EC3, Eurojust, EIO (Evropský vyšetřovací příkaz), 24/7 kontaktní body.",
        "cv": "Překážky přeshraniční kyberkriminality: 1) Jurisdikční – pachatel v zemi A, oběť v zemi B, server v zemi C; která země je příslušná? 2) Časové – MLA (mutual legal assistance) trvá měsíce, ale digitální důkazy jsou volatilní (logy se přepisují, servery se přesouvají). 3) Právní nekompatibilita – odlišné definice trestných činů, odlišné standardy důkazů, dual criminality requirement (jednání musí být trestné v obou jurisdikcích). 4) Nespolupracující jurisdikce – některé státy útočníky nekriminalizují nebo nevydávají. Nástroje spolupráce: 1) Budapešťská úmluva (2001) – harmonizuje definice, stanoví procesní nástroje, zavádí 24/7 kontaktní body pro rychlé zajištění dat. 2) Europol/EC3 (European Cybercrime Centre) – operativní koordinace, analytická podpora, joint investigation teams. 3) Eurojust – koordinace trestního stíhání mezi státy EU. 4) EIO (Evropský vyšetřovací příkaz) – v rámci EU rychlejší alternativa k MLA (do 90 dnů). 5) Bilaterální MLAT smlouvy – mimo EU."
      }
    },
    "Elektronické důkazy a jejich zajišťování": {
      "Procesní instituty a praktické využití": {
        "ex": "Procesní úkony k zajištění důkazů z firemní sítě: 1) Příkaz k prohlídce jiných prostor (kanceláře firmy) – vydává soudce na návrh státního zástupce. 2) Příkaz k vydání/odnětí věci – server, notebook. 3) Příkaz k zajištění dat – provider musí uchovat logy. Podmínky prohlídky: předchozí výslech podezřelého (nebo odůvodnění, proč nelze), přítomnost nezúčastněné osoby.",
        "cv": "Procesní úkony pro zajištění elektronických důkazů z firemní sítě: 1) Příkaz k prohlídce jiných prostor a pozemků (§ 83a TŘ) – nutný pro přístup do kanceláří firmy; vydává soudce na návrh státního zástupce; v neodkladných případech může nařídit státní zástupce. 2) Příkaz k vydání věci (§ 78 TŘ) – firma je vyzvána k dobrovolnému vydání serveru/notebooku; pokud odmítne, následuje odnětí věci (§ 79 TŘ). 3) Příkaz k zajištění dat (§ 7b TŘ) – nařízení poskytovateli služeb zachovat a uchovat specifikovaná data (logy, e-maily) po dobu vyšetřování. 4) Příkaz k odposlechu a záznamu telekomunikačního provozu (§ 88 TŘ) – pro monitorování síťové komunikace v reálném čase; pouze pro úmyslné TČ s horní sazbou ≥ 8 let nebo taxativně vyjmenované. Podmínky prohlídky: předchozí výslech osoby, jejíž prostory se prohledávají (nebo odůvodnění neodkladnosti), přítomnost nezúčastněné osoby, protokol o prohlídce. Klíčové: nezákonně získaný důkaz je nepoužitelný (doktrína plodů otráveného stromu)."
      },
      "Nakládání s elektronickými důkazy": {
        "ex": "Postup forenzního zajištění notebooku: 1) Pokud běží – zaznamenat stav (screenshot, čas, otevřené aplikace), zajistit RAM dump. 2) Odpojit od sítě (ne vypínat!). 3) Vytvořit bit-po-bitu forenzní kopii disku pomocí write-blockeru. 4) Vypočítat hash (SHA-256) originálu i kopie – musí se shodovat. 5) Zabalit originál do antistatického obalu, zapečetit, zdokumentovat chain of custody. 6) Analýza probíhá výhradně na kopii.",
        "cv": "Postup forenzního zajištění notebooku podezřelého zaměstnance: 1) Dokumentace stavu – fotograficky zdokumentovat notebook (otevřený/zavřený, připojená zařízení), zaznamenat čas, místo, přítomné osoby. 2) Volatilní data – pokud notebook běží: RAM dump (zachycení obsahu paměti, běžících procesů, síťových spojení), screenshot obrazovky; pokud je vypnutý: NEZAPÍNAT (změnilo by to časová razítka a metadata). 3) Odpojení od sítě – vytáhnout síťový kabel, zapnout airplane mode (zabránit vzdálenému smazání). 4) Forenzní kopie – připojit disk přes hardware write-blocker (zabrání jakémukoliv zápisu na originál), vytvořit bit-po-bitu image celého disku (dd, FTK Imager). 5) Hashování – vypočítat SHA-256 hash originálu i kopie → musí být identické (důkaz integrity). 6) Chain of custody – zapečetit originál, vyplnit formulář (kdo, kdy, kde, co – každé předání důkazu). 7) Analýza – výhradně na forenzní kopii, nikdy na originálu. Aby důkaz obstál u soudu: řetězec opatrování musí být nepřerušený, postup musí být reprodukovatelný a hash musí prokázat, že důkaz nebyl pozměněn."
      },
      "Elektronické dokumenty": {
        "ex": "E-mail jako důkaz: autenticita se ověřuje analýzou hlaviček (Received, Message-ID, DKIM podpis), časových razítek, konzistencí metadat. Samotný obsah e-mailu má omezenou důkazní hodnotu – hlavičky lze podvrhnout (spoofing). DKIM podpis potvrzuje, že e-mail nebyl pozměněn po odeslání a pochází z dané domény.",
        "cv": "Důkazní hodnota e-mailu: e-mail sám o sobě má omezenou důkazní sílu, protože obsah i hlavičky lze technicky podvrhnout (SMTP spoofing). Ověření autenticity: 1) Hlavičky – analýza Received polí (trasování cesty přes servery), Message-ID, X-Originating-IP; konzistence s předpokládanou cestou. 2) DKIM podpis – kryptograficky ověřuje, že e-mail nebyl pozměněn po odeslání a pochází ze serveru, který drží privátní klíč dané domény. 3) SPF/DMARC záznamy – ověřují, zda odesílající server je autorizován pro danou doménu. 4) Serverové logy – logy mailového serveru odesílatele i příjemce potvrzují čas odeslání/přijetí. 5) Metadata – skrytá metadata příloh (autor, časová razítka, verze software). Ověření integrity v trestním řízení: ideálně se e-mail zajistí přímo ze serverového úložiště (nikoliv z klienta uživatele), vytvoří se forenzní kopie mailboxu s hashem. Soud hodnotí e-mail jako listinný důkaz – důkazní hodnota závisí na kvalitě ověření autenticity a integrity."
      }
    },
    "Ochrana osobních údajů": {
      "Právní úprava a základní definice": {
        "ex": "Pět příkladů: jméno = osobní údaj (přímo identifikuje). IP adresa = osobní údaj (nepřímo identifikuje ve spojení s ISP záznamy). Anonymizovaná statistika (průměrný věk zákazníků) = není osobní údaj (nelze zpětně identifikovat). E-mail jan.novak@firma.cz = osobní údaj (obsahuje jméno). Číslo občanského průkazu = osobní údaj (jednoznačně identifikuje).",
        "cv": "Posouzení pěti příkladů: 1) Jméno ‚Jan Novák' – ANO, osobní údaj: přímo identifikuje osobu (byť nemusí být unikátní, v kontextu dalších údajů identifikace je možná). 2) IP adresa – ANO, osobní údaj: SDEU judikoval, že i dynamická IP je osobní údaj, pokud existuje právní cesta k identifikaci (ISP záznamy); recitál 30 GDPR. 3) Anonymizovaná statistika (průměrný věk zákazníků = 34 let) – NE, není osobní údaj: agregovaná data, ze kterých nelze zpětně identifikovat jednotlivce; pozor na pseudonymizovaná data (ta osobním údajem zůstávají). 4) E-mail jan.novak@firma.cz – ANO, osobní údaj: obsahuje jméno osoby a organizaci, umožňuje přímou identifikaci. 5) Číslo občanského průkazu – ANO, osobní údaj: jednoznačný identifikátor přiřazený konkrétní fyzické osobě."
      },
      "Zásady zpracování a posouzení rizik": {
        "ex": "Mobilní fitness aplikace: zpracovává GPS polohu (sledování trasy běhu), tepovou frekvenci, váhu, výšku, věk, pohlaví, e-mail. Posouzení nezbytnosti: GPS trasa – nezbytná pro hlavní účel (mapování běhu); tepová frekvence – nezbytná pro fitness metriky; váha/výška – nezbytná pro BMI a kalorický výdej; pohlaví/věk – nezbytné pro přesný výpočet; e-mail – nezbytný pro registraci. Kontakty z telefonu – NENÍ nezbytné pro fitness účel.",
        "cv": "Fitness aplikace – zpracovávané osobní údaje a posouzení nezbytnosti: 1) GPS poloha (trasa běhu) – nezbytné pro hlavní účel (mapování); ale: nutno minimalizovat přesnost (nepotřebujeme přesnost na metry pro statistiky), smazat po agregaci do statistik. 2) Tepová frekvence – nezbytné pro fitness metriky (zóny zátěže, kalorický výdej); pozor: jde o údaj o zdraví = zvláštní kategorie dle čl. 9 GDPR, vyžaduje výslovný souhlas. 3) Váha, výška – nezbytné pro BMI a kalorický výdej; rovněž zdravotní údaj. 4) Věk, pohlaví – nezbytné pro přesný výpočet metabolismu; minimalizace: stačí věková kategorie, ne přesné datum narození. 5) E-mail – nezbytný pro registraci a komunikaci; ale: nesmí být použit k marketingu bez samostatného souhlasu. 6) Kontakty z telefonu – NENÍ nezbytné pro fitness funkci; porušuje zásadu minimalizace, pokud aplikace přistupuje ke kontaktům pro ‚sdílení výsledků' bez výslovného souhlasu. Zásada minimalizace (čl. 5(1)(c) GDPR): sbírat jen údaje nezbytné pro konkrétní účel; co není nezbytné, nesmí být sbíráno."
      },
      "Test proporcionality, účely a právní tituly": {
        "ex": "Kamerový systém v obchodě: Účel – ochrana majetku a bezpečnost zákazníků. Právní titul – oprávněný zájem provozovatele (čl. 6(1)(f) GDPR). Test proporcionality: opatření je vhodné (kamery reálně odrazují krádeže), potřebné (jiné méně invazivní opatření – např. EAS brány – nestačí samo) a přiměřené (záběry se uchovávají max. 72 h, nezabírají se šatny/toalety).",
        "cv": "Kamerový systém v obchodě: Účel zpracování – ochrana majetku (prevence krádeží), bezpečnost zaměstnanců a zákazníků (dokazování incidentů). Právní titul – oprávněný zájem správce (čl. 6(1)(f) GDPR); souhlas není vhodný (zákazník nemá reálnou volbu). Test proporcionality: 1) Vhodnost – kamery prokazatelně snižují krádeže a umožňují řešení incidentů; ANO. 2) Potřebnost – existuje méně invazivní prostředek se stejným účinkem? EAS brány chrání zboží, ale nezachytí násilné incidenty; kamery jsou potřebné jako doplněk. 3) Přiměřenost v užším smyslu – zásah do soukromí zákazníků vs. přínos: kamery NEZABÍRAJÍ šatny, toalety, odpočinkové zóny zaměstnanců; záběry se uchovávají max. 72 hodin (dostatečné pro řešení incidentů); přístup k záznamům má pouze bezpečnostní manažer; zákazníci jsou informováni informační tabulí u vstupu. Závěr: zpracování je proporcionální za uvedených podmínek. DPIA (posouzení vlivu) je doporučeno, ale pro běžný obchod není povinné (není systematické monitorování veřejně přístupných prostor ve velkém měřítku)."
      },
      "ÚOOÚ a jeho úloha": {
        "ex": "ÚOOÚ (Úřad pro ochranu osobních údajů) – nezávislý dozorový orgán ČR podle čl. 51 GDPR. Pravomoci: provádění kontrol (z vlastního podnětu i na základě stížnosti), vydávání nápravných opatření (příkaz k uvedení do souladu), ukládání pokut (až 20M EUR / 4 % obratu), konzultace k DPIA, vydávání stanovisek a metodik.",
        "cv": "Pravomoci ÚOOÚ při dozoru: 1) Vyšetřovací – provádění auditů a kontrol zpracování osobních údajů, přístup k prostorám správce, získání přístupu k datům a dokumentaci. 2) Nápravné – vydání varování (hrozí porušení), napomenutí (porušení nastalo), příkaz k uvedení zpracování do souladu s GDPR, příkaz k oznámení porušení subjektům údajů, dočasný nebo trvalý zákaz zpracování, uložení správní pokuty. 3) Povolující a poradní – konzultace k DPIA (čl. 36 GDPR), vydávání stanovisek a metodik, schvalování kodexů chování. Postup při stížnosti subjektu údajů: 1) Subjekt nejprve uplatní práva u správce (žádost o přístup, výmaz, opravu – čl. 15-22 GDPR). 2) Pokud správce nereaguje do 1 měsíce nebo zamítne žádost, subjekt podá stížnost k ÚOOÚ. 3) ÚOOÚ stížnost posoudí, může zahájit kontrolu u správce. 4) Výsledek: ÚOOÚ informuje stěžovatele o průběhu a výsledku do 3 měsíců; může uložit nápravné opatření nebo pokutu správci."
      }
    },
    "Elektronický podpis a elektronická pečeť": {
      "Právní úprava a druhy elektronického podpisu": {
        "ex": "Tři úrovně dle eIDAS: 1) Prostý – jakékoliv elektronické vyjádření identity (jméno v e-mailu); nízké záruky, ale nelze mu upřít právní účinky jen proto, že je elektronický. 2) Zaručený – jednoznačně spojen s podepisující osobou, data pod její kontrolou, umožňuje detekci změn; vyžaduje certifikát a kryptografii. 3) Kvalifikovaný – zaručený + kvalifikovaný certifikát + QSCD; právně ekvivalentní vlastnoručnímu podpisu ve všech státech EU.",
        "cv": "Srovnání tří úrovní elektronického podpisu podle eIDAS: Prostý (čl. 3(10)) – technické požadavky: žádné specifické (text v e-mailu, zaškrtnutí checkboxu, nakreslený podpis); právní síla: nelze mu upřít právní účinky a přípustnost jako důkaz jen proto, že je elektronický, ale konkrétní účinky závisí na kontextu a národním právu; typické použití: běžná e-mailová komunikace, potvrzení objednávky. Zaručený (čl. 3(11-12) + čl. 26) – technické požadavky: jednoznačně spojen s podepisující osobou, umožňuje její identifikaci, vytvořen daty pod výlučnou kontrolou (privátní klíč), umožňuje detekci jakékoliv následné změny; právní síla: vyšší důkazní hodnota, ale ne automaticky ekvivalent vlastnoručního; typické použití: firemní dokumenty, interní smlouvy. Kvalifikovaný (čl. 3(12) + čl. 25(2)) – technické požadavky: zaručený + kvalifikovaný certifikát (od kvalifikovaného poskytovatele z EU trust listu) + vytvořen kvalifikovaným prostředkem QSCD (čipová karta, USB token s certifikací); právní síla: automaticky právně ekvivalentní vlastnoručnímu podpisu ve všech členských státech EU; typické použití: smlouvy, podání na úřady, daňová přiznání, komunikace s datovou schránkou."
      },
      "Elektronická pečeť": {
        "ex": "Elektronický podpis: vyjadřuje projev vůle konkrétní fyzické osoby (‚já, Jan Novák, podepisuji tuto smlouvu'). Elektronická pečeť: potvrzuje původ a integritu dokumentu vydaného právnickou osobou (‚tento výpis vydala Banka X'), ale nevyjadřuje jednání žádné konkrétní osoby. Organizace použije pečeť pro automaticky generované dokumenty – faktury, výpisy, potvrzení.",
        "cv": "Elektronický podpis vs. elektronická pečeť: Podpis – subjekt: fyzická osoba; účel: vyjádření projevu vůle (souhlas, schválení); příklad: jednatel podepisuje smlouvu. Pečeť – subjekt: právnická osoba; účel: potvrzení původu a integrity dokumentu; příklad: banka automaticky opatří pečetí výpis z účtu, firma pečetí faktury. Klíčový rozdíl: podpis váže konkrétní osobu k dokumentu, pečeť váže organizaci. Kdy použít pečeť místo podpisu: 1) Automaticky generované dokumenty (faktury, výpisy, potvrzení) – žádná konkrétní osoba je nepodepisuje, ale organizace garantuje jejich původ. 2) Hromadné dokumenty – tisíce faktur nelze ručně podepisovat. 3) Důkaz integrity – pečeť zajistí, že dokument nebyl pozměněn po vydání. 4) Právní požadavek na prokázání původu dokumentu od organizace, nikoliv od osoby. Pečeť má analogicky tři úrovně jako podpis (prostá, zaručená, kvalifikovaná) s obdobnými technickými požadavky."
      },
      "Datové schránky – právní úprava a praxe": {
        "ex": "Fikce doručení: zpráva doručená do datové schránky se považuje za doručenou přihlášením oprávněné osoby, nebo – pokud se nikdo nepřihlásí – uplynutím 10 dnů od dodání zprávy. Po uplynutí 10 dnů nastávají právní účinky doručení bez ohledu na to, zda si adresát zprávu přečetl. Ignorování datové schránky může vést k promeškání lhůt, nabytí právní moci rozhodnutí nebo exekuci.",
        "cv": "Fikce doručení u datových schránek (zákon č. 300/2008 Sb.): Zpráva je doručena okamžikem přihlášení oprávněné osoby do datové schránky (nikoliv otevřením konkrétní zprávy). Pokud se oprávněná osoba nepřihlásí do 10 dnů od dodání zprávy do schránky, nastává fikce doručení – dokument se považuje za doručený uplynutím 10. dne. Právní účinky jsou totožné s doručením do vlastních rukou. Právní následky ignorování: 1) Promeškání lhůt – odvolací lhůta (15 dnů) běží od doručení; při fikci doručení subjekt neví, že lhůta běží, a zmešká ji. 2) Nabytí právní moci – rozhodnutí nabude právní moci a stane se vykonatelným. 3) Exekuce – platební příkaz se stane pravomocným a může být zahájena exekuce. 4) Správní řízení – rozhodnutí o pokutě, stavebním povolení apod. nabude účinnosti. Praxe: organizace musí zajistit pravidelnou kontrolu datové schránky (ideálně denně), nastavit notifikace na e-mail, pověřit konkrétní osobu odpovědnou za zpracování zpráv a archivovat zprávy mimo datovou schránku (zprávy se po 90 dnech mažou)."
      }
    }
  }
});
