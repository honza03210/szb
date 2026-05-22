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
        "ex": "Příklad: u tématu „Vývoj a provoz softwarových systémů“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Vývoj zahrnuje požadavky, návrh, implementaci, testování a nasazení. Provoz řeší monitoring, incidenty, změny, podporu uživatelů a údržbu.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Vývoj a provoz softwarových systémů“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Použití UML při vývoji software": {
        "ex": "Příklad: u tématu „Použití UML při vývoji software“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: UML poskytuje diagramy pro modelování struktury a chování systému, například use case, class, sequence a activity diagram. Pomáhá sdílet návrh mezi analytiky, vývojáři a zadavateli.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Použití UML při vývoji software“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Aplikované informační systémy": {
        "ex": "Příklad: u tématu „Aplikované informační systémy“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: AIS podporují konkrétní organizační domény, například výrobu, obchod nebo veřejnou správu. Spojují software, data, procesy, role a infrastrukturu.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Aplikované informační systémy“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Příklad: u tématu „Architektury rozsáhlých informačních systémů“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Rozsáhlé IS používají vrstvení, služby, integrační rozhraní a oddělení prezentační, aplikační a datové vrstvy. Řeší škálování, dostupnost, bezpečnost a audit.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Architektury rozsáhlých informačních systémů“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "Příklad: u tématu „Metody vedení rozsáhlých projektů“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Řízení projektu pracuje s rozsahem, harmonogramem, riziky, změnami, stakeholdery a akceptací. U velkých IS je kritická migrace dat a zavedení do organizace.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Metody vedení rozsáhlých projektů“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Řízení provozu IS": {
        "ex": "Příklad: u tématu „Řízení provozu IS“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Provoz IS zahrnuje SLA, monitoring, zálohy, obnovu, patchování, incident management, správu kapacit a řízené nasazování změn.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Řízení provozu IS“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Organizace a řízení kyberbezpečnosti": {
      "Důvěrnost, integrita, dostupnost a nepopiratelnost": {
        "ex": "Příklad: u tématu „Důvěrnost, integrita, dostupnost a nepopiratelnost“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Důvěrnost chrání před neoprávněným čtením, integrita před změnou, dostupnost před výpadkem a nepopiratelnost před popřením původu akce.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Důvěrnost, integrita, dostupnost a nepopiratelnost“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Bezpečnostní politiky a procedury": {
        "ex": "Příklad: u tématu „Bezpečnostní politiky a procedury“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Politika stanoví závazná pravidla a cíle, procedury popisují konkrétní postupy. Musí být schválené, známé, vymahatelné a pravidelně aktualizované.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Bezpečnostní politiky a procedury“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Struktura řízení kyberbezpečnosti": {
        "ex": "Příklad: u tématu „Struktura řízení kyberbezpečnosti“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Řízení definuje orgány, komise, reporting, eskalace a vztah bezpečnosti k vedení organizace. Cílem je, aby bezpečnost měla mandát a vazbu na rizika organizace.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Struktura řízení kyberbezpečnosti“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Role, odpovědnosti a kompetence": {
        "ex": "Příklad: u tématu „Role, odpovědnosti a kompetence“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Role jako CISO, vlastník aktiva, správce systému, bezpečnostní tým a uživatel mají odlišné odpovědnosti. Kompetence musí odpovídat pravomocem a odpovědnosti.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Role, odpovědnosti a kompetence“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Metody autentizace a řízení přístupu": {
      "Metody autentizace": {
        "ex": "Příklad: u tématu „Metody autentizace“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Autentizace může používat heslo, jednorázový kód, hardwarový token, certifikát, passkey nebo biometrický znak. Vícefaktorová autentizace kombinuje nezávislé faktory.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Metody autentizace“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Řízení přístupu": {
        "ex": "Příklad: u tématu „Řízení přístupu“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Autorizace se opírá o modely jako DAC, MAC, RBAC nebo ABAC. Princip nejmenších oprávnění omezuje dopad kompromitace účtu.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Řízení přístupu“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Biometrické metody autentizace": {
        "ex": "Příklad: u tématu „Biometrické metody autentizace“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Biometrie používá fyzické nebo behaviorální znaky. Výhodou je pohodlí, rizikem nemožnost snadné změny kompromitovaného biometrického znaku a otázky soukromí.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Biometrické metody autentizace“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Elektronický podpis a jeho použití": {
        "ex": "Příklad: u tématu „Elektronický podpis a jeho použití“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Elektronický podpis používá kryptografii k prokázání integrity a původu dokumentu. Právní účinky závisí na typu podpisu, certifikátu a právním rámci.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Elektronický podpis a jeho použití“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Autentizace strojů a aplikací": {
        "ex": "Příklad: u tématu „Autentizace strojů a aplikací“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Stroje a aplikace se autentizují certifikáty, klíči, tokeny nebo vzájemným TLS. Nutná je bezpečná správa tajemství a rotace klíčů.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Autentizace strojů a aplikací“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Analýza a řízení rizik": {
      "Asset management": {
        "ex": "Příklad: u tématu „Asset management“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Asset management eviduje aktiva, jejich vlastníky, hodnotu, umístění, závislosti a kritičnost. Bez znalosti aktiv nelze smysluplně řídit rizika.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Asset management“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Analýza rizik": {
        "ex": "Příklad: u tématu „Analýza rizik“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Analýza rizik kombinuje hrozby, zranitelnosti, pravděpodobnost a dopad. Výsledkem je priorita rizik a podklad pro rozhodnutí o opatřeních.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Analýza rizik“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Opatření proti rizikům a jejich účinnost": {
        "ex": "Příklad: u tématu „Opatření proti rizikům a jejich účinnost“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Riziko lze snížit, přenést, vyhnout se mu nebo ho akceptovat. Účinnost opatření se měří proti cíli a nákladům.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Opatření proti rizikům a jejich účinnost“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Řízení identity a přístupu, ACL a privilegovaní uživatelé": {
        "ex": "Příklad: u tématu „Řízení identity a přístupu, ACL a privilegovaní uživatelé“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: IAM spravuje identity a oprávnění. ACL explicitně říkají, kdo smí k objektu přistupovat. Privilegované účty vyžadují zvláštní ochranu a audit.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Řízení identity a přístupu, ACL a privilegovaní uživatelé“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Audit, standardy a hodnocení bezpečnosti": {
        "ex": "Příklad: u tématu „Audit, standardy a hodnocení bezpečnosti“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Audit ověřuje soulad a účinnost kontrol. Standardy poskytují rámec a hodnocení bezpečnosti dokládá míru důvěry ve splnění požadavků.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Audit, standardy a hodnocení bezpečnosti“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Bezpečnostní architektura": {
      "Bezpečnost sítí, izolace a segmentace": {
        "ex": "Příklad: u tématu „Bezpečnost sítí, izolace a segmentace“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Segmentace rozděluje síť na zóny podle důvěry a funkce. Izolace omezuje laterální pohyb útočníka a dopad kompromitace.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Bezpečnost sítí, izolace a segmentace“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Firewally": {
        "ex": "Příklad: u tématu „Firewally“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Firewall filtruje provoz podle pravidel na základě adres, portů, protokolů nebo aplikačního kontextu. Je hranicí mezi zónami, ne jediným bezpečnostním opatřením.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Firewally“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Monitoring, detekce a logování": {
        "ex": "Příklad: u tématu „Monitoring, detekce a logování“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Logování zaznamenává události, monitoring sleduje stav a detekce hledá známky útoku. Kvalitní logy musí mít čas, zdroj, integritu a jasnou návaznost na reakci.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Monitoring, detekce a logování“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Bezpečnost operačních systémů": {
        "ex": "Příklad: u tématu „Bezpečnost operačních systémů“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Hardening OS zahrnuje minimalizaci služeb, aktualizace, správu účtů, práva, audit, izolaci a bezpečnou konfiguraci.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Bezpečnost operačních systémů“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Bezpečnost dat": {
        "ex": "Příklad: u tématu „Bezpečnost dat“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Data se chrání klasifikací, řízením přístupu, šifrováním, zálohováním, mazáním a prevencí úniku. Opatření závisí na citlivosti a životním cyklu dat.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Bezpečnost dat“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Kyberbezpečnost v organizaci": {
      "Událost, incident, útok, zranitelnost a slabina": {
        "ex": "Příklad: u tématu „Událost, incident, útok, zranitelnost a slabina“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Událost je pozorovaný jev, incident narušuje bezpečnost, útok je úmyslná aktivita útočníka, zranitelnost je využitelná chyba a slabina obecný nedostatek kontroly.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Událost, incident, útok, zranitelnost a slabina“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Role a činnosti bezpečnostního týmu": {
        "ex": "Příklad: u tématu „Role a činnosti bezpečnostního týmu“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Bezpečnostní tým monitoruje, analyzuje alerty, řeší incidenty, spravuje detekce, komunikuje a zlepšuje obranu. Role zahrnují analytiky, incident manažera a vlastníky systémů.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Role a činnosti bezpečnostního týmu“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Řešení kyberbezpečnostního incidentu": {
        "ex": "Příklad: u tématu „Řešení kyberbezpečnostního incidentu“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Incident response zahrnuje přípravu, detekci, triáž, analýzu, omezení dopadu, odstranění příčiny, obnovu a vyhodnocení. Důležitá je evidence rozhodnutí.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Řešení kyberbezpečnostního incidentu“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Bezpečnostní varování a příklady z praxe": {
        "ex": "Příklad: u tématu „Bezpečnostní varování a příklady z praxe“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Varování informuje o hrozbě nebo zranitelnosti a doporučuje opatření. V praxi může jít o kritickou zranitelnost VPN, phishingovou kampaň nebo únik přihlašovacích údajů.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Bezpečnostní varování a příklady z praxe“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Kyberútoky": {
      "Životní cyklus kyberútoku": {
        "ex": "Příklad: u tématu „Životní cyklus kyberútoku“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Útok typicky začíná průzkumem, pokračuje počátečním přístupem, vykonáním kódu, perzistencí, eskalací oprávnění, laterálním pohybem a cílovou akcí.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Životní cyklus kyberútoku“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Advanced Persistent Threat": {
        "ex": "Příklad: u tématu „Advanced Persistent Threat“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: APT je dlouhodobá cílená kampaň vedená schopným aktérem. Důraz je na vytrvalost, opatrnost, průzkum a přizpůsobení oběti.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Advanced Persistent Threat“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "MITRE ATT&CK taktiky, techniky a procedury": {
        "ex": "Příklad: u tématu „MITRE ATT&CK taktiky, techniky a procedury“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: ATT&CK třídí chování útočníků do taktik, technik a konkrétních procedur. Umožňuje porovnat pokrytí detekcí a plánovat obranu.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „MITRE ATT&CK taktiky, techniky a procedury“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Průzkum, počáteční přístup a zneužití zranitelnosti": {
        "ex": "Příklad: u tématu „Průzkum, počáteční přístup a zneužití zranitelnosti“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Průzkum sbírá informace, počáteční přístup získává první vstup a zneužití zranitelnosti využívá chybu systému nebo konfigurace.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Průzkum, počáteční přístup a zneužití zranitelnosti“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Spuštění kódu, upevnění přístupu a cílové akce": {
        "ex": "Příklad: u tématu „Spuštění kódu, upevnění přístupu a cílové akce“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Útočník spouští payload, buduje perzistenci a směřuje k cíli, například exfiltraci, šifrování dat nebo sabotáž.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Spuštění kódu, upevnění přístupu a cílové akce“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Obrana na úrovni hostitele a sítě": {
        "ex": "Příklad: u tématu „Obrana na úrovni hostitele a sítě“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Hostitelská obrana zahrnuje hardening, EDR, patching a least privilege. Síťová obrana zahrnuje segmentaci, IDS/IPS, filtrování a monitoring toků.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Obrana na úrovni hostitele a sítě“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Vymezení bezpečnostních studií": {
      "Pojmy bezpečnost, hrozba a riziko": {
        "ex": "Příklad: u tématu „Pojmy bezpečnost, hrozba a riziko“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Bezpečnost je stav přijatelné ochrany hodnot, hrozba potenciální zdroj škody a riziko kombinace pravděpodobnosti a dopadu. V kyberprostoru se vztahují k aktivům, službám a společnosti.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Pojmy bezpečnost, hrozba a riziko“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Vnitřní a vnější bezpečnost a sektory": {
        "ex": "Příklad: u tématu „Vnitřní a vnější bezpečnost a sektory“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Vnitřní bezpečnost se týká fungování státu a společnosti uvnitř, vnější bezpečnost vztahů a hrozeb zvenčí. Kyberbezpečnost prochází sektory obrany, ekonomiky, zdravotnictví i veřejné správy.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Vnitřní a vnější bezpečnost a sektory“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Bezpečnostní politika a její analýza": {
        "ex": "Příklad: u tématu „Bezpečnostní politika a její analýza“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Bezpečnostní politika vymezuje cíle, instituce, nástroje a priority. Analýza sleduje problém, aktéry, pravomoci, zdroje, implementaci a měření výsledků.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Bezpečnostní politika a její analýza“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Bezpečnostní strategie": {
      "Strategické dokumenty České republiky": {
        "ex": "Příklad: u tématu „Strategické dokumenty České republiky“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Strategické dokumenty vymezují bezpečnostní zájmy, hrozby a priority. Kyberbezpečnost se v nich objevuje jako průřezová podmínka fungování státu a ekonomiky.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Strategické dokumenty České republiky“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Význam kyberbezpečnosti ve strategiích": {
        "ex": "Příklad: u tématu „Význam kyberbezpečnosti ve strategiích“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Digitální závislost zvyšuje dopad kyberincidentů na stát, služby a občany. Strategie proto řeší odolnost, prevenci, reakci a mezinárodní spolupráci.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Význam kyberbezpečnosti ve strategiích“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Bezpečnostní systém ČR a role institucí": {
        "ex": "Příklad: u tématu „Bezpečnostní systém ČR a role institucí“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Instituce mají rozdělené kompetence: regulace, prevence, detekce, vyšetřování, obrana a krizové řízení. Koordinace je nutná, protože kyberincidenty překračují hranice sektorů.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Bezpečnostní systém ČR a role institucí“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Kyberválka": {
      "Definice, historie a současné trendy": {
        "ex": "Příklad: u tématu „Definice, historie a současné trendy“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Kyberválka nemá jednotnou definici; obvykle zahrnuje státem řízené nebo podporované kyberoperace v konfliktu. Trendem je propojení s hybridními a informačními operacemi.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Definice, historie a současné trendy“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Aktéři a přisouzení kyberútoků": {
        "ex": "Příklad: u tématu „Aktéři a přisouzení kyberútoků“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Aktéry mohou být státy, zpravodajské služby, proxy skupiny i kriminální aktéři. Přisouzení je obtížné kvůli anonymizaci, falešným stopám a přeshraniční infrastruktuře.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Aktéři a přisouzení kyberútoků“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Odstrašení v kyberprostoru": {
        "ex": "Příklad: u tématu „Odstrašení v kyberprostoru“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Odstrašení může stát na hrozbě odvety, odepření úspěchu útoku nebo zvýšení odolnosti. Problémem je nejisté přisouzení a nejasné prahy reakce.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Odstrašení v kyberprostoru“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Netwars a kyberkonflikt": {
        "ex": "Příklad: u tématu „Netwars a kyberkonflikt“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Netwars zdůrazňují síťovou organizaci aktérů, informační rozměr a decentralizovanou koordinaci. V kyberkonfliktu se projevují kampaněmi, hacktivismem a informačními operacemi.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Netwars a kyberkonflikt“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Ochrana kritické infrastruktury": {
      "Vymezení kritické infrastruktury": {
        "ex": "Příklad: u tématu „Vymezení kritické infrastruktury“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Kritická infrastruktura zahrnuje prvky a služby nezbytné pro fungování státu a společnosti. V kyberbezpečnosti se posuzuje závislost těchto služeb na informačních systémech.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Vymezení kritické infrastruktury“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Kyberútoky na kritickou infrastrukturu": {
        "ex": "Příklad: u tématu „Kyberútoky na kritickou infrastrukturu“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Útok může narušit dostupnost, integritu řídicích dat nebo bezpečný provoz. Dopady se mohou projevit ve fyzickém světě, například výpadkem energie nebo zdravotních služeb.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Kyberútoky na kritickou infrastrukturu“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Přisouzení a odstrašování": {
        "ex": "Příklad: u tématu „Přisouzení a odstrašování“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Přisouzení útoku na kritickou infrastrukturu je důležité pro politickou a právní reakci. Odstrašení kombinuje odolnost, schopnost reakce a mezinárodní signály.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Přisouzení a odstrašování“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Právní úprava kyberbezpečnosti v ČR a EU": {
      "Základní instituty a principy": {
        "ex": "Příklad: u tématu „Základní instituty a principy“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Právo vymezuje regulované subjekty, bezpečnostní opatření, incidenty, hlášení a dohled. Principy zahrnují přiměřenost, řízení rizik a odpovědnost.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Základní instituty a principy“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Povinné orgány a subjekty": {
        "ex": "Příklad: u tématu „Povinné orgány a subjekty“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Povinnosti se vztahují na vybrané poskytovatele služeb a orgány podle významu pro společnost. Orgány dohledu vydávají metodiky, přijímají hlášení a kontrolují plnění.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Povinné orgány a subjekty“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Systém zajištění kybernetické bezpečnosti": {
        "ex": "Příklad: u tématu „Systém zajištění kybernetické bezpečnosti“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Systém kombinuje prevenci, minimální bezpečnostní požadavky, hlášení incidentů, varování, protiopatření, kontrolu a spolupráci na národní i evropské úrovni.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Systém zajištění kybernetické bezpečnosti“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Kyberkriminalita": {
      "Prameny práva": {
        "ex": "Příklad: u tématu „Prameny práva“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Kyberkriminalita se řeší podle trestního práva, procesních předpisů, evropských nástrojů a mezinárodních úmluv. Přeshraniční povaha vyžaduje spolupráci států.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Prameny práva“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Typická trestná činnost": {
        "ex": "Příklad: u tématu „Typická trestná činnost“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Patří sem neoprávněný přístup, malware, ransomware, phishing, DDoS, podvody a zásahy do dat nebo systémů. Některé činy cílí na systém, jiné systém používají jako prostředek.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Typická trestná činnost“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Klasifikace, právní kvalifikace a postupy": {
        "ex": "Příklad: u tématu „Klasifikace, právní kvalifikace a postupy“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Právní kvalifikace určuje skutkovou podstatu, zavinění, škodu a postup orgánů. Důležité je odlišit incident od trestného činu a zajistit důkazy zákonně.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Klasifikace, právní kvalifikace a postupy“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Mezinárodní spolupráce": {
        "ex": "Příklad: u tématu „Mezinárodní spolupráce“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Data, pachatelé i infrastruktura bývají v různých státech. Spolupráce zahrnuje právní pomoc, kontaktní body, evropské nástroje a koordinaci vyšetřování.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Mezinárodní spolupráce“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Elektronické důkazy a jejich zajišťování": {
      "Procesní instituty a praktické využití": {
        "ex": "Příklad: u tématu „Procesní instituty a praktické využití“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Procesní právo určuje, kdy a jak lze důkazy zajistit, vydat nebo odnět. Prakticky se řeší rychlé zajištění volatilních dat a zákonnost zásahu.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Procesní instituty a praktické využití“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Nakládání s elektronickými důkazy": {
        "ex": "Příklad: u tématu „Nakládání s elektronickými důkazy“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Důkaz se dokumentuje, hashuje, bezpečně ukládá a analyzuje na kopii. Řetězec opatrování ukazuje, kdo s důkazem kdy manipuloval.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Nakládání s elektronickými důkazy“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Elektronické dokumenty": {
        "ex": "Příklad: u tématu „Elektronické dokumenty“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Elektronický dokument může být důkazem, pokud lze posoudit jeho obsah, původ a integritu. Význam mají metadata, elektronický podpis, pečeť a časové razítko.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Elektronické dokumenty“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Ochrana osobních údajů": {
      "Právní úprava a základní definice": {
        "ex": "Příklad: u tématu „Právní úprava a základní definice“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Osobní údaj identifikuje nebo může identifikovat osobu. Zpracování zahrnuje sběr, uložení, použití, předání i výmaz. Správce určuje účely a prostředky zpracování.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Právní úprava a základní definice“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Zásady zpracování a posouzení rizik": {
        "ex": "Příklad: u tématu „Zásady zpracování a posouzení rizik“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Zpracování musí být zákonné, transparentní, účelově omezené, minimalizované, přesné a zabezpečené. Rizika se posuzují podle dopadu na práva a svobody osob.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Zásady zpracování a posouzení rizik“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Test proporcionality, účely a právní tituly": {
        "ex": "Příklad: u tématu „Test proporcionality, účely a právní tituly“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Proporcionalita hodnotí vhodnost, potřebnost a přiměřenost zásahu. Právní titul může být souhlas, smlouva, právní povinnost, oprávněný zájem nebo jiný titul.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Test proporcionality, účely a právní tituly“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "ÚOOÚ a jeho úloha": {
        "ex": "Příklad: u tématu „ÚOOÚ a jeho úloha“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: ÚOOÚ dohlíží na ochranu osobních údajů, řeší stížnosti, provádí kontroly, vydává metodiky a může ukládat nápravná opatření nebo sankce.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „ÚOOÚ a jeho úloha“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      }
    },
    "Elektronický podpis a elektronická pečeť": {
      "Právní úprava a druhy elektronického podpisu": {
        "ex": "Příklad: u tématu „Právní úprava a druhy elektronického podpisu“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Elektronický podpis může mít různé úrovně podle použité technologie, certifikátu a prostředku pro vytváření podpisu. Vyšší úroveň dává silnější záruky identity a integrity.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Právní úprava a druhy elektronického podpisu“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Elektronická pečeť": {
        "ex": "Příklad: u tématu „Elektronická pečeť“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Elektronická pečeť potvrzuje původ a integritu dokumentu vydaného právnickou osobou. Na rozdíl od podpisu nevyjadřuje jednání konkrétní fyzické osoby.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Elektronická pečeť“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
      },
      "Datové schránky – právní úprava a praxe": {
        "ex": "Příklad: u tématu „Datové schránky – právní úprava a praxe“ popiš konkrétní situaci z kyberbezpečnostní praxe a ukaž, jak se v ní uplatní hlavní pojmy: Datové schránky slouží k elektronickému doručování. V praxi je důležité sledovat doručení, oprávněné osoby, fikci doručení a archivaci zpráv.",
        "cv": "Vypracuj krátkou státnicovou odpověď k pojmu „Datové schránky – právní úprava a praxe“: definice, klíčové prvky, praktický příklad a jedno riziko nebo omezení."
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
        "ex": "Řešení má začít přesnou definicí pojmu „Vývoj a provoz softwarových systémů“, poté uvést jeho roli v oblasti „Softwarové a informační systémy“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Vývoj a provoz softwarových systémů“. Poté uveď 2–3 klíčové prvky z definice: Vývoj zahrnuje požadavky, návrh, implementaci, testování a nasazení. Provoz řeší monitoring, incidenty, změny, podporu uživatelů a údržbu. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Použití UML při vývoji software": {
        "ex": "Řešení má začít přesnou definicí pojmu „Použití UML při vývoji software“, poté uvést jeho roli v oblasti „Softwarové a informační systémy“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Použití UML při vývoji software“. Poté uveď 2–3 klíčové prvky z definice: UML poskytuje diagramy pro modelování struktury a chování systému, například use case, class, sequence a activity diagram. Pomáhá sdílet návrh mezi analytiky, vývojáři a zadavateli. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Aplikované informační systémy": {
        "ex": "Řešení má začít přesnou definicí pojmu „Aplikované informační systémy“, poté uvést jeho roli v oblasti „Softwarové a informační systémy“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Aplikované informační systémy“. Poté uveď 2–3 klíčové prvky z definice: AIS podporují konkrétní organizační domény, například výrobu, obchod nebo veřejnou správu. Spojují software, data, procesy, role a infrastrukturu. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Architektury rozsáhlých informačních systémů": {
        "ex": "Řešení má začít přesnou definicí pojmu „Architektury rozsáhlých informačních systémů“, poté uvést jeho roli v oblasti „Softwarové a informační systémy“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Architektury rozsáhlých informačních systémů“. Poté uveď 2–3 klíčové prvky z definice: Rozsáhlé IS používají vrstvení, služby, integrační rozhraní a oddělení prezentační, aplikační a datové vrstvy. Řeší škálování, dostupnost, bezpečnost a audit. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Metody vedení rozsáhlých projektů": {
        "ex": "Řešení má začít přesnou definicí pojmu „Metody vedení rozsáhlých projektů“, poté uvést jeho roli v oblasti „Softwarové a informační systémy“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Metody vedení rozsáhlých projektů“. Poté uveď 2–3 klíčové prvky z definice: Řízení projektu pracuje s rozsahem, harmonogramem, riziky, změnami, stakeholdery a akceptací. U velkých IS je kritická migrace dat a zavedení do organizace. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Řízení provozu IS": {
        "ex": "Řešení má začít přesnou definicí pojmu „Řízení provozu IS“, poté uvést jeho roli v oblasti „Softwarové a informační systémy“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Řízení provozu IS“. Poté uveď 2–3 klíčové prvky z definice: Provoz IS zahrnuje SLA, monitoring, zálohy, obnovu, patchování, incident management, správu kapacit a řízené nasazování změn. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Organizace a řízení kyberbezpečnosti": {
      "Důvěrnost, integrita, dostupnost a nepopiratelnost": {
        "ex": "Řešení má začít přesnou definicí pojmu „Důvěrnost, integrita, dostupnost a nepopiratelnost“, poté uvést jeho roli v oblasti „Organizace a řízení kyberbezpečnosti“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Důvěrnost, integrita, dostupnost a nepopiratelnost“. Poté uveď 2–3 klíčové prvky z definice: Důvěrnost chrání před neoprávněným čtením, integrita před změnou, dostupnost před výpadkem a nepopiratelnost před popřením původu akce. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Bezpečnostní politiky a procedury": {
        "ex": "Řešení má začít přesnou definicí pojmu „Bezpečnostní politiky a procedury“, poté uvést jeho roli v oblasti „Organizace a řízení kyberbezpečnosti“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Bezpečnostní politiky a procedury“. Poté uveď 2–3 klíčové prvky z definice: Politika stanoví závazná pravidla a cíle, procedury popisují konkrétní postupy. Musí být schválené, známé, vymahatelné a pravidelně aktualizované. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Struktura řízení kyberbezpečnosti": {
        "ex": "Řešení má začít přesnou definicí pojmu „Struktura řízení kyberbezpečnosti“, poté uvést jeho roli v oblasti „Organizace a řízení kyberbezpečnosti“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Struktura řízení kyberbezpečnosti“. Poté uveď 2–3 klíčové prvky z definice: Řízení definuje orgány, komise, reporting, eskalace a vztah bezpečnosti k vedení organizace. Cílem je, aby bezpečnost měla mandát a vazbu na rizika organizace. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Role, odpovědnosti a kompetence": {
        "ex": "Řešení má začít přesnou definicí pojmu „Role, odpovědnosti a kompetence“, poté uvést jeho roli v oblasti „Organizace a řízení kyberbezpečnosti“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Role, odpovědnosti a kompetence“. Poté uveď 2–3 klíčové prvky z definice: Role jako CISO, vlastník aktiva, správce systému, bezpečnostní tým a uživatel mají odlišné odpovědnosti. Kompetence musí odpovídat pravomocem a odpovědnosti. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Metody autentizace a řízení přístupu": {
      "Metody autentizace": {
        "ex": "Řešení má začít přesnou definicí pojmu „Metody autentizace“, poté uvést jeho roli v oblasti „Metody autentizace a řízení přístupu“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Metody autentizace“. Poté uveď 2–3 klíčové prvky z definice: Autentizace může používat heslo, jednorázový kód, hardwarový token, certifikát, passkey nebo biometrický znak. Vícefaktorová autentizace kombinuje nezávislé faktory. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Řízení přístupu": {
        "ex": "Řešení má začít přesnou definicí pojmu „Řízení přístupu“, poté uvést jeho roli v oblasti „Metody autentizace a řízení přístupu“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Řízení přístupu“. Poté uveď 2–3 klíčové prvky z definice: Autorizace se opírá o modely jako DAC, MAC, RBAC nebo ABAC. Princip nejmenších oprávnění omezuje dopad kompromitace účtu. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Biometrické metody autentizace": {
        "ex": "Řešení má začít přesnou definicí pojmu „Biometrické metody autentizace“, poté uvést jeho roli v oblasti „Metody autentizace a řízení přístupu“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Biometrické metody autentizace“. Poté uveď 2–3 klíčové prvky z definice: Biometrie používá fyzické nebo behaviorální znaky. Výhodou je pohodlí, rizikem nemožnost snadné změny kompromitovaného biometrického znaku a otázky soukromí. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Elektronický podpis a jeho použití": {
        "ex": "Řešení má začít přesnou definicí pojmu „Elektronický podpis a jeho použití“, poté uvést jeho roli v oblasti „Metody autentizace a řízení přístupu“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Elektronický podpis a jeho použití“. Poté uveď 2–3 klíčové prvky z definice: Elektronický podpis používá kryptografii k prokázání integrity a původu dokumentu. Právní účinky závisí na typu podpisu, certifikátu a právním rámci. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Autentizace strojů a aplikací": {
        "ex": "Řešení má začít přesnou definicí pojmu „Autentizace strojů a aplikací“, poté uvést jeho roli v oblasti „Metody autentizace a řízení přístupu“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Autentizace strojů a aplikací“. Poté uveď 2–3 klíčové prvky z definice: Stroje a aplikace se autentizují certifikáty, klíči, tokeny nebo vzájemným TLS. Nutná je bezpečná správa tajemství a rotace klíčů. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Analýza a řízení rizik": {
      "Asset management": {
        "ex": "Řešení má začít přesnou definicí pojmu „Asset management“, poté uvést jeho roli v oblasti „Analýza a řízení rizik“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Asset management“. Poté uveď 2–3 klíčové prvky z definice: Asset management eviduje aktiva, jejich vlastníky, hodnotu, umístění, závislosti a kritičnost. Bez znalosti aktiv nelze smysluplně řídit rizika. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Analýza rizik": {
        "ex": "Řešení má začít přesnou definicí pojmu „Analýza rizik“, poté uvést jeho roli v oblasti „Analýza a řízení rizik“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Analýza rizik“. Poté uveď 2–3 klíčové prvky z definice: Analýza rizik kombinuje hrozby, zranitelnosti, pravděpodobnost a dopad. Výsledkem je priorita rizik a podklad pro rozhodnutí o opatřeních. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Opatření proti rizikům a jejich účinnost": {
        "ex": "Řešení má začít přesnou definicí pojmu „Opatření proti rizikům a jejich účinnost“, poté uvést jeho roli v oblasti „Analýza a řízení rizik“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Opatření proti rizikům a jejich účinnost“. Poté uveď 2–3 klíčové prvky z definice: Riziko lze snížit, přenést, vyhnout se mu nebo ho akceptovat. Účinnost opatření se měří proti cíli a nákladům. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Řízení identity a přístupu, ACL a privilegovaní uživatelé": {
        "ex": "Řešení má začít přesnou definicí pojmu „Řízení identity a přístupu, ACL a privilegovaní uživatelé“, poté uvést jeho roli v oblasti „Analýza a řízení rizik“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Řízení identity a přístupu, ACL a privilegovaní uživatelé“. Poté uveď 2–3 klíčové prvky z definice: IAM spravuje identity a oprávnění. ACL explicitně říkají, kdo smí k objektu přistupovat. Privilegované účty vyžadují zvláštní ochranu a audit. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Audit, standardy a hodnocení bezpečnosti": {
        "ex": "Řešení má začít přesnou definicí pojmu „Audit, standardy a hodnocení bezpečnosti“, poté uvést jeho roli v oblasti „Analýza a řízení rizik“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Audit, standardy a hodnocení bezpečnosti“. Poté uveď 2–3 klíčové prvky z definice: Audit ověřuje soulad a účinnost kontrol. Standardy poskytují rámec a hodnocení bezpečnosti dokládá míru důvěry ve splnění požadavků. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Bezpečnostní architektura": {
      "Bezpečnost sítí, izolace a segmentace": {
        "ex": "Řešení má začít přesnou definicí pojmu „Bezpečnost sítí, izolace a segmentace“, poté uvést jeho roli v oblasti „Bezpečnostní architektura“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Bezpečnost sítí, izolace a segmentace“. Poté uveď 2–3 klíčové prvky z definice: Segmentace rozděluje síť na zóny podle důvěry a funkce. Izolace omezuje laterální pohyb útočníka a dopad kompromitace. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Firewally": {
        "ex": "Řešení má začít přesnou definicí pojmu „Firewally“, poté uvést jeho roli v oblasti „Bezpečnostní architektura“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Firewally“. Poté uveď 2–3 klíčové prvky z definice: Firewall filtruje provoz podle pravidel na základě adres, portů, protokolů nebo aplikačního kontextu. Je hranicí mezi zónami, ne jediným bezpečnostním opatřením. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Monitoring, detekce a logování": {
        "ex": "Řešení má začít přesnou definicí pojmu „Monitoring, detekce a logování“, poté uvést jeho roli v oblasti „Bezpečnostní architektura“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Monitoring, detekce a logování“. Poté uveď 2–3 klíčové prvky z definice: Logování zaznamenává události, monitoring sleduje stav a detekce hledá známky útoku. Kvalitní logy musí mít čas, zdroj, integritu a jasnou návaznost na reakci. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Bezpečnost operačních systémů": {
        "ex": "Řešení má začít přesnou definicí pojmu „Bezpečnost operačních systémů“, poté uvést jeho roli v oblasti „Bezpečnostní architektura“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Bezpečnost operačních systémů“. Poté uveď 2–3 klíčové prvky z definice: Hardening OS zahrnuje minimalizaci služeb, aktualizace, správu účtů, práva, audit, izolaci a bezpečnou konfiguraci. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Bezpečnost dat": {
        "ex": "Řešení má začít přesnou definicí pojmu „Bezpečnost dat“, poté uvést jeho roli v oblasti „Bezpečnostní architektura“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Bezpečnost dat“. Poté uveď 2–3 klíčové prvky z definice: Data se chrání klasifikací, řízením přístupu, šifrováním, zálohováním, mazáním a prevencí úniku. Opatření závisí na citlivosti a životním cyklu dat. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Kyberbezpečnost v organizaci": {
      "Událost, incident, útok, zranitelnost a slabina": {
        "ex": "Řešení má začít přesnou definicí pojmu „Událost, incident, útok, zranitelnost a slabina“, poté uvést jeho roli v oblasti „Kyberbezpečnost v organizaci“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Událost, incident, útok, zranitelnost a slabina“. Poté uveď 2–3 klíčové prvky z definice: Událost je pozorovaný jev, incident narušuje bezpečnost, útok je úmyslná aktivita útočníka, zranitelnost je využitelná chyba a slabina obecný nedostatek kontroly. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Role a činnosti bezpečnostního týmu": {
        "ex": "Řešení má začít přesnou definicí pojmu „Role a činnosti bezpečnostního týmu“, poté uvést jeho roli v oblasti „Kyberbezpečnost v organizaci“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Role a činnosti bezpečnostního týmu“. Poté uveď 2–3 klíčové prvky z definice: Bezpečnostní tým monitoruje, analyzuje alerty, řeší incidenty, spravuje detekce, komunikuje a zlepšuje obranu. Role zahrnují analytiky, incident manažera a vlastníky systémů. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Řešení kyberbezpečnostního incidentu": {
        "ex": "Řešení má začít přesnou definicí pojmu „Řešení kyberbezpečnostního incidentu“, poté uvést jeho roli v oblasti „Kyberbezpečnost v organizaci“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Řešení kyberbezpečnostního incidentu“. Poté uveď 2–3 klíčové prvky z definice: Incident response zahrnuje přípravu, detekci, triáž, analýzu, omezení dopadu, odstranění příčiny, obnovu a vyhodnocení. Důležitá je evidence rozhodnutí. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Bezpečnostní varování a příklady z praxe": {
        "ex": "Řešení má začít přesnou definicí pojmu „Bezpečnostní varování a příklady z praxe“, poté uvést jeho roli v oblasti „Kyberbezpečnost v organizaci“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Bezpečnostní varování a příklady z praxe“. Poté uveď 2–3 klíčové prvky z definice: Varování informuje o hrozbě nebo zranitelnosti a doporučuje opatření. V praxi může jít o kritickou zranitelnost VPN, phishingovou kampaň nebo únik přihlašovacích údajů. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Kyberútoky": {
      "Životní cyklus kyberútoku": {
        "ex": "Řešení má začít přesnou definicí pojmu „Životní cyklus kyberútoku“, poté uvést jeho roli v oblasti „Kyberútoky“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Životní cyklus kyberútoku“. Poté uveď 2–3 klíčové prvky z definice: Útok typicky začíná průzkumem, pokračuje počátečním přístupem, vykonáním kódu, perzistencí, eskalací oprávnění, laterálním pohybem a cílovou akcí. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Advanced Persistent Threat": {
        "ex": "Řešení má začít přesnou definicí pojmu „Advanced Persistent Threat“, poté uvést jeho roli v oblasti „Kyberútoky“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Advanced Persistent Threat“. Poté uveď 2–3 klíčové prvky z definice: APT je dlouhodobá cílená kampaň vedená schopným aktérem. Důraz je na vytrvalost, opatrnost, průzkum a přizpůsobení oběti. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "MITRE ATT&CK taktiky, techniky a procedury": {
        "ex": "Řešení má začít přesnou definicí pojmu „MITRE ATT&CK taktiky, techniky a procedury“, poté uvést jeho roli v oblasti „Kyberútoky“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „MITRE ATT&CK taktiky, techniky a procedury“. Poté uveď 2–3 klíčové prvky z definice: ATT&CK třídí chování útočníků do taktik, technik a konkrétních procedur. Umožňuje porovnat pokrytí detekcí a plánovat obranu. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Průzkum, počáteční přístup a zneužití zranitelnosti": {
        "ex": "Řešení má začít přesnou definicí pojmu „Průzkum, počáteční přístup a zneužití zranitelnosti“, poté uvést jeho roli v oblasti „Kyberútoky“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Průzkum, počáteční přístup a zneužití zranitelnosti“. Poté uveď 2–3 klíčové prvky z definice: Průzkum sbírá informace, počáteční přístup získává první vstup a zneužití zranitelnosti využívá chybu systému nebo konfigurace. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Spuštění kódu, upevnění přístupu a cílové akce": {
        "ex": "Řešení má začít přesnou definicí pojmu „Spuštění kódu, upevnění přístupu a cílové akce“, poté uvést jeho roli v oblasti „Kyberútoky“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Spuštění kódu, upevnění přístupu a cílové akce“. Poté uveď 2–3 klíčové prvky z definice: Útočník spouští payload, buduje perzistenci a směřuje k cíli, například exfiltraci, šifrování dat nebo sabotáž. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Obrana na úrovni hostitele a sítě": {
        "ex": "Řešení má začít přesnou definicí pojmu „Obrana na úrovni hostitele a sítě“, poté uvést jeho roli v oblasti „Kyberútoky“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Obrana na úrovni hostitele a sítě“. Poté uveď 2–3 klíčové prvky z definice: Hostitelská obrana zahrnuje hardening, EDR, patching a least privilege. Síťová obrana zahrnuje segmentaci, IDS/IPS, filtrování a monitoring toků. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Vymezení bezpečnostních studií": {
      "Pojmy bezpečnost, hrozba a riziko": {
        "ex": "Řešení má začít přesnou definicí pojmu „Pojmy bezpečnost, hrozba a riziko“, poté uvést jeho roli v oblasti „Vymezení bezpečnostních studií“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Pojmy bezpečnost, hrozba a riziko“. Poté uveď 2–3 klíčové prvky z definice: Bezpečnost je stav přijatelné ochrany hodnot, hrozba potenciální zdroj škody a riziko kombinace pravděpodobnosti a dopadu. V kyberprostoru se vztahují k aktivům, službám a společnosti. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Vnitřní a vnější bezpečnost a sektory": {
        "ex": "Řešení má začít přesnou definicí pojmu „Vnitřní a vnější bezpečnost a sektory“, poté uvést jeho roli v oblasti „Vymezení bezpečnostních studií“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Vnitřní a vnější bezpečnost a sektory“. Poté uveď 2–3 klíčové prvky z definice: Vnitřní bezpečnost se týká fungování státu a společnosti uvnitř, vnější bezpečnost vztahů a hrozeb zvenčí. Kyberbezpečnost prochází sektory obrany, ekonomiky, zdravotnictví i veřejné správy. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Bezpečnostní politika a její analýza": {
        "ex": "Řešení má začít přesnou definicí pojmu „Bezpečnostní politika a její analýza“, poté uvést jeho roli v oblasti „Vymezení bezpečnostních studií“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Bezpečnostní politika a její analýza“. Poté uveď 2–3 klíčové prvky z definice: Bezpečnostní politika vymezuje cíle, instituce, nástroje a priority. Analýza sleduje problém, aktéry, pravomoci, zdroje, implementaci a měření výsledků. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Bezpečnostní strategie": {
      "Strategické dokumenty České republiky": {
        "ex": "Řešení má začít přesnou definicí pojmu „Strategické dokumenty České republiky“, poté uvést jeho roli v oblasti „Bezpečnostní strategie“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Strategické dokumenty České republiky“. Poté uveď 2–3 klíčové prvky z definice: Strategické dokumenty vymezují bezpečnostní zájmy, hrozby a priority. Kyberbezpečnost se v nich objevuje jako průřezová podmínka fungování státu a ekonomiky. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Význam kyberbezpečnosti ve strategiích": {
        "ex": "Řešení má začít přesnou definicí pojmu „Význam kyberbezpečnosti ve strategiích“, poté uvést jeho roli v oblasti „Bezpečnostní strategie“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Význam kyberbezpečnosti ve strategiích“. Poté uveď 2–3 klíčové prvky z definice: Digitální závislost zvyšuje dopad kyberincidentů na stát, služby a občany. Strategie proto řeší odolnost, prevenci, reakci a mezinárodní spolupráci. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Bezpečnostní systém ČR a role institucí": {
        "ex": "Řešení má začít přesnou definicí pojmu „Bezpečnostní systém ČR a role institucí“, poté uvést jeho roli v oblasti „Bezpečnostní strategie“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Bezpečnostní systém ČR a role institucí“. Poté uveď 2–3 klíčové prvky z definice: Instituce mají rozdělené kompetence: regulace, prevence, detekce, vyšetřování, obrana a krizové řízení. Koordinace je nutná, protože kyberincidenty překračují hranice sektorů. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Kyberválka": {
      "Definice, historie a současné trendy": {
        "ex": "Řešení má začít přesnou definicí pojmu „Definice, historie a současné trendy“, poté uvést jeho roli v oblasti „Kyberválka“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Definice, historie a současné trendy“. Poté uveď 2–3 klíčové prvky z definice: Kyberválka nemá jednotnou definici; obvykle zahrnuje státem řízené nebo podporované kyberoperace v konfliktu. Trendem je propojení s hybridními a informačními operacemi. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Aktéři a přisouzení kyberútoků": {
        "ex": "Řešení má začít přesnou definicí pojmu „Aktéři a přisouzení kyberútoků“, poté uvést jeho roli v oblasti „Kyberválka“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Aktéři a přisouzení kyberútoků“. Poté uveď 2–3 klíčové prvky z definice: Aktéry mohou být státy, zpravodajské služby, proxy skupiny i kriminální aktéři. Přisouzení je obtížné kvůli anonymizaci, falešným stopám a přeshraniční infrastruktuře. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Odstrašení v kyberprostoru": {
        "ex": "Řešení má začít přesnou definicí pojmu „Odstrašení v kyberprostoru“, poté uvést jeho roli v oblasti „Kyberválka“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Odstrašení v kyberprostoru“. Poté uveď 2–3 klíčové prvky z definice: Odstrašení může stát na hrozbě odvety, odepření úspěchu útoku nebo zvýšení odolnosti. Problémem je nejisté přisouzení a nejasné prahy reakce. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Netwars a kyberkonflikt": {
        "ex": "Řešení má začít přesnou definicí pojmu „Netwars a kyberkonflikt“, poté uvést jeho roli v oblasti „Kyberválka“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Netwars a kyberkonflikt“. Poté uveď 2–3 klíčové prvky z definice: Netwars zdůrazňují síťovou organizaci aktérů, informační rozměr a decentralizovanou koordinaci. V kyberkonfliktu se projevují kampaněmi, hacktivismem a informačními operacemi. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Ochrana kritické infrastruktury": {
      "Vymezení kritické infrastruktury": {
        "ex": "Řešení má začít přesnou definicí pojmu „Vymezení kritické infrastruktury“, poté uvést jeho roli v oblasti „Ochrana kritické infrastruktury“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Vymezení kritické infrastruktury“. Poté uveď 2–3 klíčové prvky z definice: Kritická infrastruktura zahrnuje prvky a služby nezbytné pro fungování státu a společnosti. V kyberbezpečnosti se posuzuje závislost těchto služeb na informačních systémech. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Kyberútoky na kritickou infrastrukturu": {
        "ex": "Řešení má začít přesnou definicí pojmu „Kyberútoky na kritickou infrastrukturu“, poté uvést jeho roli v oblasti „Ochrana kritické infrastruktury“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Kyberútoky na kritickou infrastrukturu“. Poté uveď 2–3 klíčové prvky z definice: Útok může narušit dostupnost, integritu řídicích dat nebo bezpečný provoz. Dopady se mohou projevit ve fyzickém světě, například výpadkem energie nebo zdravotních služeb. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Přisouzení a odstrašování": {
        "ex": "Řešení má začít přesnou definicí pojmu „Přisouzení a odstrašování“, poté uvést jeho roli v oblasti „Ochrana kritické infrastruktury“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Přisouzení a odstrašování“. Poté uveď 2–3 klíčové prvky z definice: Přisouzení útoku na kritickou infrastrukturu je důležité pro politickou a právní reakci. Odstrašení kombinuje odolnost, schopnost reakce a mezinárodní signály. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Právní úprava kyberbezpečnosti v ČR a EU": {
      "Základní instituty a principy": {
        "ex": "Řešení má začít přesnou definicí pojmu „Základní instituty a principy“, poté uvést jeho roli v oblasti „Právní úprava kyberbezpečnosti v ČR a EU“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Základní instituty a principy“. Poté uveď 2–3 klíčové prvky z definice: Právo vymezuje regulované subjekty, bezpečnostní opatření, incidenty, hlášení a dohled. Principy zahrnují přiměřenost, řízení rizik a odpovědnost. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Povinné orgány a subjekty": {
        "ex": "Řešení má začít přesnou definicí pojmu „Povinné orgány a subjekty“, poté uvést jeho roli v oblasti „Právní úprava kyberbezpečnosti v ČR a EU“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Povinné orgány a subjekty“. Poté uveď 2–3 klíčové prvky z definice: Povinnosti se vztahují na vybrané poskytovatele služeb a orgány podle významu pro společnost. Orgány dohledu vydávají metodiky, přijímají hlášení a kontrolují plnění. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Systém zajištění kybernetické bezpečnosti": {
        "ex": "Řešení má začít přesnou definicí pojmu „Systém zajištění kybernetické bezpečnosti“, poté uvést jeho roli v oblasti „Právní úprava kyberbezpečnosti v ČR a EU“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Systém zajištění kybernetické bezpečnosti“. Poté uveď 2–3 klíčové prvky z definice: Systém kombinuje prevenci, minimální bezpečnostní požadavky, hlášení incidentů, varování, protiopatření, kontrolu a spolupráci na národní i evropské úrovni. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Kyberkriminalita": {
      "Prameny práva": {
        "ex": "Řešení má začít přesnou definicí pojmu „Prameny práva“, poté uvést jeho roli v oblasti „Kyberkriminalita“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Prameny práva“. Poté uveď 2–3 klíčové prvky z definice: Kyberkriminalita se řeší podle trestního práva, procesních předpisů, evropských nástrojů a mezinárodních úmluv. Přeshraniční povaha vyžaduje spolupráci států. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Typická trestná činnost": {
        "ex": "Řešení má začít přesnou definicí pojmu „Typická trestná činnost“, poté uvést jeho roli v oblasti „Kyberkriminalita“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Typická trestná činnost“. Poté uveď 2–3 klíčové prvky z definice: Patří sem neoprávněný přístup, malware, ransomware, phishing, DDoS, podvody a zásahy do dat nebo systémů. Některé činy cílí na systém, jiné systém používají jako prostředek. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Klasifikace, právní kvalifikace a postupy": {
        "ex": "Řešení má začít přesnou definicí pojmu „Klasifikace, právní kvalifikace a postupy“, poté uvést jeho roli v oblasti „Kyberkriminalita“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Klasifikace, právní kvalifikace a postupy“. Poté uveď 2–3 klíčové prvky z definice: Právní kvalifikace určuje skutkovou podstatu, zavinění, škodu a postup orgánů. Důležité je odlišit incident od trestného činu a zajistit důkazy zákonně. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Mezinárodní spolupráce": {
        "ex": "Řešení má začít přesnou definicí pojmu „Mezinárodní spolupráce“, poté uvést jeho roli v oblasti „Kyberkriminalita“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Mezinárodní spolupráce“. Poté uveď 2–3 klíčové prvky z definice: Data, pachatelé i infrastruktura bývají v různých státech. Spolupráce zahrnuje právní pomoc, kontaktní body, evropské nástroje a koordinaci vyšetřování. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Elektronické důkazy a jejich zajišťování": {
      "Procesní instituty a praktické využití": {
        "ex": "Řešení má začít přesnou definicí pojmu „Procesní instituty a praktické využití“, poté uvést jeho roli v oblasti „Elektronické důkazy a jejich zajišťování“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Procesní instituty a praktické využití“. Poté uveď 2–3 klíčové prvky z definice: Procesní právo určuje, kdy a jak lze důkazy zajistit, vydat nebo odnět. Prakticky se řeší rychlé zajištění volatilních dat a zákonnost zásahu. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Nakládání s elektronickými důkazy": {
        "ex": "Řešení má začít přesnou definicí pojmu „Nakládání s elektronickými důkazy“, poté uvést jeho roli v oblasti „Elektronické důkazy a jejich zajišťování“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Nakládání s elektronickými důkazy“. Poté uveď 2–3 klíčové prvky z definice: Důkaz se dokumentuje, hashuje, bezpečně ukládá a analyzuje na kopii. Řetězec opatrování ukazuje, kdo s důkazem kdy manipuloval. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Elektronické dokumenty": {
        "ex": "Řešení má začít přesnou definicí pojmu „Elektronické dokumenty“, poté uvést jeho roli v oblasti „Elektronické důkazy a jejich zajišťování“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Elektronické dokumenty“. Poté uveď 2–3 klíčové prvky z definice: Elektronický dokument může být důkazem, pokud lze posoudit jeho obsah, původ a integritu. Význam mají metadata, elektronický podpis, pečeť a časové razítko. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Ochrana osobních údajů": {
      "Právní úprava a základní definice": {
        "ex": "Řešení má začít přesnou definicí pojmu „Právní úprava a základní definice“, poté uvést jeho roli v oblasti „Ochrana osobních údajů“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Právní úprava a základní definice“. Poté uveď 2–3 klíčové prvky z definice: Osobní údaj identifikuje nebo může identifikovat osobu. Zpracování zahrnuje sběr, uložení, použití, předání i výmaz. Správce určuje účely a prostředky zpracování. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Zásady zpracování a posouzení rizik": {
        "ex": "Řešení má začít přesnou definicí pojmu „Zásady zpracování a posouzení rizik“, poté uvést jeho roli v oblasti „Ochrana osobních údajů“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Zásady zpracování a posouzení rizik“. Poté uveď 2–3 klíčové prvky z definice: Zpracování musí být zákonné, transparentní, účelově omezené, minimalizované, přesné a zabezpečené. Rizika se posuzují podle dopadu na práva a svobody osob. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Test proporcionality, účely a právní tituly": {
        "ex": "Řešení má začít přesnou definicí pojmu „Test proporcionality, účely a právní tituly“, poté uvést jeho roli v oblasti „Ochrana osobních údajů“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Test proporcionality, účely a právní tituly“. Poté uveď 2–3 klíčové prvky z definice: Proporcionalita hodnotí vhodnost, potřebnost a přiměřenost zásahu. Právní titul může být souhlas, smlouva, právní povinnost, oprávněný zájem nebo jiný titul. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "ÚOOÚ a jeho úloha": {
        "ex": "Řešení má začít přesnou definicí pojmu „ÚOOÚ a jeho úloha“, poté uvést jeho roli v oblasti „Ochrana osobních údajů“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „ÚOOÚ a jeho úloha“. Poté uveď 2–3 klíčové prvky z definice: ÚOOÚ dohlíží na ochranu osobních údajů, řeší stížnosti, provádí kontroly, vydává metodiky a může ukládat nápravná opatření nebo sankce. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    },
    "Elektronický podpis a elektronická pečeť": {
      "Právní úprava a druhy elektronického podpisu": {
        "ex": "Řešení má začít přesnou definicí pojmu „Právní úprava a druhy elektronického podpisu“, poté uvést jeho roli v oblasti „Elektronický podpis a elektronická pečeť“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Právní úprava a druhy elektronického podpisu“. Poté uveď 2–3 klíčové prvky z definice: Elektronický podpis může mít různé úrovně podle použité technologie, certifikátu a prostředku pro vytváření podpisu. Vyšší úroveň dává silnější záruky identity a integrity. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Elektronická pečeť": {
        "ex": "Řešení má začít přesnou definicí pojmu „Elektronická pečeť“, poté uvést jeho roli v oblasti „Elektronický podpis a elektronická pečeť“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Elektronická pečeť“. Poté uveď 2–3 klíčové prvky z definice: Elektronická pečeť potvrzuje původ a integritu dokumentu vydaného právnickou osobou. Na rozdíl od podpisu nevyjadřuje jednání konkrétní fyzické osoby. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      },
      "Datové schránky – právní úprava a praxe": {
        "ex": "Řešení má začít přesnou definicí pojmu „Datové schránky – právní úprava a praxe“, poté uvést jeho roli v oblasti „Elektronický podpis a elektronická pečeť“ a navázat praktickou situací. Podstatné je zmínit nejen technický nebo právní mechanismus, ale i dopad na řízení bezpečnosti a omezení daného přístupu.",
        "cv": "Odpověď: nejprve vymez pojem „Datové schránky – právní úprava a praxe“. Poté uveď 2–3 klíčové prvky z definice: Datové schránky slouží k elektronickému doručování. V praxi je důležité sledovat doručení, oprávněné osoby, fikci doručení a archivaci zpráv. Nakonec přidej příklad z praxe a upozorni na typické riziko, například špatné nastavení, nejasnou odpovědnost, nedostatečné důkazy nebo nepřiměřené opatření."
      }
    }
  }
});
