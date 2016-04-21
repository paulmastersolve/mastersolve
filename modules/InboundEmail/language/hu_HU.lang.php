<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');


/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
	

$mod_strings = array (
  'ERR_BAD_LOGIN_PASSWORD' => 'Hibás login vagy jelszó',
  'ERR_BODY_TOO_LONG' => '\\rA főszöveg túl hosszú a megjelenítéshez. Le lett rövidítve.',
  'ERR_DELETE_FOLDER' => 'A mappa törlése sikertelen.',
  'ERR_INI_ZLIB' => 'Átmenetileg nem lehet kikapcsolni a Zlib tömörítést. A "Teszt beállítás" végkimenetele sikertelen lehet.',
  'ERR_MAILBOX_FAIL' => 'Nem sikerült letölteni mail fiókot.',
  'ERR_NO_IMAP' => 'Nem található IMAP könyvtár. Kérem, orvosolja a problémát, mielőtt folytatná a bejövő emailek fogadását.',
  'ERR_NO_OPTS_SAVED' => 'Nincsenek optimális értékek mentve bejövő email fiókjához. Kérem, ellenőrizze a beállításokat',
  'ERR_TEST_MAILBOX' => 'Kérem, ellenőrizze a beállításait és próbálja újra!',
  'ERR_UNSUBSCRIBE_FROM_FOLDER' => 'Nem sikerült leiratkozni a mappáról törlés előtt.',
  'LBL_ALLOW_OUTBOUND_GROUP_USAGE' => 'Engedélyezze a felhasználók számára, hogy a küldő nevét és email címét használják később válasz címként',
  'LBL_ALLOW_OUTBOUND_GROUP_USAGE_DESC' => 'Az opció kiválasztása esetén a csoporttal azonosított feladó név és email cím kiválasztható lesz a csoporttagok számára email írása során.',
  'LBL_APPLY_OPTIMUMS' => 'Optimumok alkalmazása',
  'LBL_ASSIGN_TEAM' => 'Hozzárendelés a csoportokhoz',
  'LBL_ASSIGN_TO_GROUP_FOLDER' => 'Hozzárendelés a csoport mappához',
  'LBL_ASSIGN_TO_GROUP_FOLDER_DESC' => 'Válassza ki, ha minden bejövő email mellé automatikusan rekordokat szeretne létrehozni a Sugar rendszerében!',
  'LBL_ASSIGN_TO_TEAM_DESC' => 'A kiválasztott csoport hozzáfér a levelező fiókhoz.',
  'LBL_ASSIGN_TO_USER' => 'Felhasználóhoz rendel',
  'LBL_AUTOREPLY' => 'Automatikus válasz sablon',
  'LBL_AUTOREPLY_HELP' => 'Válasszon ki egy automatikus választ, ami arról értesíti az emailek küldőjét, hogy üzenetét fogadta a rendszer!',
  'LBL_AUTOREPLY_OPTIONS' => 'Automatikus válasz opciók',
  'LBL_BASIC' => 'Levelezési fiók információ',
  'LBL_BOUNCE_MODULE_NAME' => 'Visszapattanó postaláda',
  'LBL_CASE_MACRO' => 'Eset makró',
  'LBL_CASE_MACRO_DESC' => 'Állítsa be a makrót, ami elemzi, majd hozzákapcsolja a bejövő emaileket az esetekhez!',
  'LBL_CASE_MACRO_DESC2' => 'Adjon meg bármilyen értéket, de őrizze meg a "%1"-et.',
  'LBL_CERT' => 'Tanúsítvány jóváhagyása',
  'LBL_CERT_DESC' => 'A mail szerverre vonatkozó biztonsági tanúsítvány jóváhagyásának kényszerítése - személyes bejelentkezés esetén ne használja.',
  'LBL_CLOSE_POPUP' => 'Ablak bezárása',
  'LBL_CREATE_CASE' => 'Eset létrehozása emailből',
  'LBL_CREATE_CASE_HELP' => 'Válassza ki, hogy a rendszer automatikusan hozzon létre eset rekordokat a Sugarban a bejövő emailek alapján.',
  'LBL_CREATE_CASE_REPLY_TEMPLATE' => 'Új eset automatikus válasz sablon',
  'LBL_CREATE_CASE_REPLY_TEMPLATE_HELP' => 'Válasszon ki egy automatikus válasz emailt, amely arról tájékoztatja a feladót, hogy az esetet létrehozták. Az email tárgya a makróknak megfelelő eset száma lesz. A  válasz emailt csak az első üzenete beérkeztével kapja meg a feladó.',
  'LBL_CREATE_NEW_GROUP' => '--Csoport létrehozása a mentésen--',
  'LBL_CREATE_TEMPLATE' => 'Létrehozás',
  'LBL_DEFAULT_FROM_ADDR' => 'Alapértelmezett:',
  'LBL_DEFAULT_FROM_NAME' => 'Alapértelmezett:',
  'LBL_DELETED_FOLDERS_LIST' => 'A következő mappák: %s vagy nem léteznek, vagy a felhasználó törölte őket.',
  'LBL_DELETE_SEEN' => 'Olvasott levelek törlése importálás után',
  'LBL_DISTRIBUTION_METHOD' => 'Terítési módszer',
  'LBL_EDIT_LAYOUT' => 'Elrendezés szerkesztése',
  'LBL_EDIT_TEMPLATE' => 'Szerkesztés',
  'LBL_EMAIL_BOUNCE_OPTIONS' => 'Visszapattanó email-kezelés beállításai',
  'LBL_EMAIL_OPTIONS' => 'Email-kezelés beállításai',
  'LBL_ENABLE_AUTO_IMPORT' => 'Emailek automatikus importálása',
  'LBL_FILTER_DOMAIN' => 'Nincs automatikus válasz ehhez a domain-hez',
  'LBL_FILTER_DOMAIN_DESC' => 'Adja meg a domain-t, ahova a rendszer ne küldjön automatikus válasz üzeneteket.',
  'LBL_FIND_OPTIMUM_KEY' => 'f',
  'LBL_FIND_OPTIMUM_MSG' => 'Optimális kapcsolódás keresése.',
  'LBL_FIND_OPTIMUM_TITLE' => 'Optimális beállítás keresése',
  'LBL_FIND_SSL_WARN' => 'Az SSL tesztelése hosszabb ideig is eltarthat. Kérem, várjon türelemmel!',
  'LBL_FORCE' => 'Negatív válasz kikényszerítése',
  'LBL_FORCE_DESC' => 'Néhány IMAP/POP3 szervernek szüksége lehet speciális kapcsolókra. Kényszerítse a negatív kapcsolót kapcsolódás során (pl. /notls)',
  'LBL_FOUND_MAILBOXES' => 'A rendszer a következő használható dossziékat találta.<br>Kattintson az egyikre a kiválasztáshoz:',
  'LBL_FOUND_OPTIMUM_MSG' => 'A rendszer optimális beállításokat talált. Nyomja meg a lenti gombot azok email fiókján való alkalmazásához!',
  'LBL_FROM_ADDR' => 'Küldő cím',
  'LBL_FROM_ADDR_DESC' => 'Bizonyos szerver korlátozások miatt az itt megadott email cím elképzelhető, hogy nem fog megjelenni a kimenő üzenet "Feladó" sorában. Ebben az esetben a kimenő mail szerverhez rögzített email cím fog feladó címként megjelenni.',
  'LBL_FROM_NAME' => 'Feladó neve',
  'LBL_FROM_NAME_ADDR' => 'Feladó neve/címe',
  'LBL_GETTING_FOLDERS_LIST' => 'Mappalista lekérése',
  'LBL_GET_SENT_FOLDER' => 'Elküldöttek mappa megnyitása',
  'LBL_GET_TRASH_FOLDER' => 'Szemetes mappa megnyitása',
  'LBL_GROUPFOLDER_ID' => 'Csoport mappa azonosító',
  'LBL_GROUP_QUEUE' => 'Hozzárendelés csoporthoz',
  'LBL_HOME' => 'Főoldal',
  'LBL_IS_GROUP' => 'csoport',
  'LBL_IS_PERSONAL' => 'személyes',
  'LBL_LIST_GLOBAL_PERSONAL' => 'Típus',
  'LBL_LIST_MAILBOX_TYPE' => 'Levelező fiók használat',
  'LBL_LIST_NAME' => 'Név:',
  'LBL_LIST_SERVER_URL' => 'Levelező szerver',
  'LBL_LIST_STATUS' => 'Állapot',
  'LBL_LOGIN' => 'Felhasználó név',
  'LBL_MAILBOX' => 'Megfigyelt mappák',
  'LBL_MAILBOX_DEFAULT' => 'BEJÖVŐ',
  'LBL_MAILBOX_SSL' => 'SSL használata',
  'LBL_MAILBOX_SSL_DESC' => 'Használja az SSL-t csatlakozáskor. Hiba esetén ellenőrizze, hogy az Ön PHP-telepítése tartalmazza-e a  "--with-imap-ssl" hivatkozást a konfigurációban!',
  'LBL_MAILBOX_TYPE' => 'Lehetséges eljárások',
  'LBL_MARK_READ' => 'Hagyja az üzenetek a szerveren',
  'LBL_MARK_READ_DESC' => 'A mail szerveren jelölje olvasottnak a leveleket importálás során; ne törölje azokat.',
  'LBL_MARK_READ_NO' => 'Emailek töröltté nyilvánítása importálás után',
  'LBL_MARK_READ_YES' => 'Importálás után a szerveren maradt emailek',
  'LBL_MAX_AUTO_REPLIES' => 'Automatikus válaszok száma',
  'LBL_MAX_AUTO_REPLIES_DESC' => 'Adja meg azt a számot, ahány automatikus választ küldhet a rendszer egy bejövő email címre 24 órán belül!',
  'LBL_MODULE_NAME' => 'Csoportos levelező fiók',
  'LBL_MODULE_NAME_SINGULAR' => 'Csoportos levelező fiók',
  'LBL_MODULE_TITLE' => 'Bejövő email',
  'LBL_NAME' => 'Név',
  'LBL_NONE' => 'nincs',
  'LBL_NO_OPTIMUMS' => 'Optimális beállítások nem találhatók. Kérem, ellenőrizze a beállításokat és próbálja újra!',
  'LBL_ONLY_SINCE' => 'Csak az utolsó lekérés óta beérkezetteket importálja',
  'LBL_ONLY_SINCE_DESC' => 'POP3 használata esetén a PHP nem tud új/olvasatlan üzenetekre szűrni. Ez a kijelölés az előző lekérés óta beérkezett emailek keresését teszi lehetővé. Amennyiben a szervere nem támogatja az IMAP-ot, ez jelentős teljesítménynövekedést eredményezhet.',
  'LBL_ONLY_SINCE_NO' => 'Nem. Ellenőrizze újra az összes levelet az email szerveren.',
  'LBL_ONLY_SINCE_YES' => 'Igen.',
  'LBL_OUTBOUND_SERVER' => 'Kimenő levelező szerver',
  'LBL_PASSWORD' => 'Jelszó',
  'LBL_PASSWORD_CHECK' => 'Jelszó ellenőrzése',
  'LBL_PERSONAL_MODULE_NAME' => 'Személyes levelező fiók',
  'LBL_PERSONAL_MODULE_NAME_SINGULAR' => 'Személyes levelező fiók',
  'LBL_POP3_SUCCESS' => 'A POP3 teszt csatlakozás sikeres volt.',
  'LBL_POPUP_FAILURE' => 'Teszt csatlakozási hiba. A hibaüzenet alul látható.',
  'LBL_POPUP_SUCCESS' => 'Teszt csatlakozás sikeres. A beállításai működnek.',
  'LBL_POPUP_TITLE' => 'Teszt beállítások',
  'LBL_PORT' => 'Levelező szerver port',
  'LBL_POSSIBLE_ACTION_DESC' => 'Az eset létrehozása opcióhoz, csoport mappát kell választania',
  'LBL_QUEUE' => 'Levelező fiók sor',
  'LBL_RE' => 'Válasz:',
  'LBL_REPLY_NAME_ADDR' => 'Válasz név/email',
  'LBL_REPLY_TO_ADDR' => '"Válasz" cím',
  'LBL_REPLY_TO_NAME' => '"Válasz" név',
  'LBL_SAME_AS_ABOVE' => 'Használja a küldő neve/címe adatokat',
  'LBL_SAVE_RAW' => 'Nyers forrás mentése',
  'LBL_SAVE_RAW_DESC_1' => 'Válassza az "igen" opciót, ha szeretné megőrizni a nyers forrást minden importált email esetén.',
  'LBL_SAVE_RAW_DESC_2' => 'A nagy mellékletek hibákat okozhatnak helytelenül beállított adatbázisok esetén.',
  'LBL_SELECT' => 'Válasszon',
  'LBL_SELECT_SENT_FOLDERS' => 'Válassza ki az elküldött mappát',
  'LBL_SELECT_SUBSCRIBED_FOLDERS' => 'Válassza ki a feliratkozott mappákat',
  'LBL_SELECT_TRASH_FOLDERS' => 'Válassza ki a szemetes mappát',
  'LBL_SENT_FOLDER' => 'Elküldöttek mappája',
  'LBL_SERVER_OPTIONS' => 'További beállítások',
  'LBL_SERVER_TYPE' => 'Levelező szerver protokoll',
  'LBL_SERVER_URL' => 'Levelező szerver címe',
  'LBL_SSL' => 'SSL használata',
  'LBL_SSL_DESC' => 'Ha a levelezési kiszolgáló támogatja a biztonságos socket kapcsolatokat, kiválasztás esetén ez kényszeríteni fogja az SSL kapcsolatot emailek importálása során.',
  'LBL_STATUS' => 'Állapot',
  'LBL_STATUS_ACTIVE' => 'Aktív',
  'LBL_STATUS_INACTIVE' => 'Inaktív',
  'LBL_SUBSCRIBE_FOLDERS' => 'Feliratkozott mappák',
  'LBL_SYSTEM_DEFAULT' => 'Rendszer alapbeállítás',
  'LBL_TEST_BUTTON_KEY' => 't',
  'LBL_TEST_BUTTON_TITLE' => 'Teszt',
  'LBL_TEST_SETTINGS' => 'Teszt beállítások',
  'LBL_TEST_SUCCESSFUL' => 'A csatlakozás sikerese.',
  'LBL_TEST_WAIT_MESSAGE' => 'Egy pillanat...',
  'LBL_TLS' => 'TLS használata',
  'LBL_TLS_DESC' => 'Használja a Szállítási Szintű Biztonságot, amikor a levelező szerverhez csatlakozik - ezt csak akkor használja, ha a levelező rendszere támogatja ezt a protokollt.',
  'LBL_TRASH_FOLDER' => 'Szemetes mappa',
  'LBL_WARNING_CHANGING_AUTO_IMPORT' => 'Figyelmeztetés: Ön az automatikus email beállításainak megváltoztatására készül, ami adatvesztéssel járhat.',
  'LBL_WARNING_CHANGING_AUTO_IMPORT_WITH_CREATE_CASE' => 'Figyelmeztetés: az esetek automatikus létrehozásához engedélyezni kell a az automatikus import funkciót.',
  'LBL_WARN_IMAP' => 'Figyelmeztetések:',
  'LBL_WARN_IMAP_TITLE' => 'Bejövő emailek letiltva',
  'LBL_WARN_NO_IMAP' => 'A bejövő email fiók nem működik az IMAP c-kliens könyvtárak engedélyezése/PHP modullal történő összeegyeztetése nélkül. Kérem, lépjen kapcsolatba a rendszergazdával a probléma orvoslása végett!',
  'LNK_CREATE_GROUP' => 'Új csoport létrehozása',
  'LNK_LIST_CREATE_NEW_BOUNCE' => 'Új visszapattanó-kezelő fiók',
  'LNK_LIST_CREATE_NEW_GROUP' => 'Új csoport levelező fiók',
  'LNK_LIST_MAILBOXES' => 'Minden levelező fiók',
  'LNK_LIST_QUEUES' => 'Minden várólista',
  'LNK_LIST_SCHEDULER' => 'Ütemezők',
  'LNK_LIST_TEST_IMPORT' => 'Email import tesztelése',
  'LNK_NEW_QUEUES' => 'Új várólista létrehozása',
  'LNK_SEED_QUEUES' => 'Várólisták kiemelése a csoportokból',
);

