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
  'ERR_DELETE_RECORD' => 'Morate navesti broj zapisa da bi obrisali sastanak.',
  'LBL_ACCEPT_LINK' => 'Prihvati link',
  'LBL_ACCEPT_STATUS' => 'Prihvati status',
  'LBL_ACCEPT_THIS' => 'Prihvati?',
  'LBL_ACCOUNT_NAME' => 'Kompanija',
  'LBL_ACTIVITIES_REPORTS' => 'Izveštaj o Aktivnostima',
  'LBL_ADD_BUTTON' => 'Dodaj',
  'LBL_ADD_INVITEE' => 'Dodaj pozvane',
  'LBL_ASSIGNED_TO_NAME' => 'Dodeljeno',
  'LBL_CANCEL_CREATE_INVITEE' => 'Otkaži',
  'LBL_COLON' => ':',
  'LBL_CONFIRM_REMOVE_ALL_RECURRENCES' => 'Da li ste sigurni da želite da uklonite ponavljajuće zapise?',
  'LBL_CONTACTS_SUBPANEL_TITLE' => 'Kontakti',
  'LBL_CONTACT_NAME' => 'Kontakt:',
  'LBL_CREATED_BY' => 'Autor',
  'LBL_CREATED_USER' => 'Kreirao',
  'LBL_CREATE_AND_ADD' => 'Napravi i dodaj',
  'LBL_CREATE_CONTACT' => 'Kreiraj kontakt',
  'LBL_CREATE_INVITEE' => 'Kreiraj pozivnicu',
  'LBL_CREATE_LEAD' => 'Kreiraj potencijalnog klijenta',
  'LBL_CREATE_MODULE' => 'Zakaži sastanak',
  'LBL_CREATOR' => 'Kreator sastanka',
  'LBL_DATE' => 'Datum početka:',
  'LBL_DATE_END' => 'Datum završetka',
  'LBL_DATE_END_ERROR' => 'Datum kraja je pre datuma početka',
  'LBL_DATE_TIME' => 'Datum i vreme početka:',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Sastanci',
  'LBL_DEL' => 'Brisanje',
  'LBL_DESCRIPTION' => 'Opis:',
  'LBL_DESCRIPTION_INFORMATION' => 'Opisne informacije',
  'LBL_DIRECTION' => 'Smer:',
  'LBL_DISPLAYED_URL' => 'Prikaži URL',
  'LBL_DURATION' => 'Trajanje:',
  'LBL_DURATION_HOURS' => 'Trajanje u satima:',
  'LBL_DURATION_MINUTES' => 'Trajanje u minutima:',
  'LBL_EDIT_ALL_RECURRENCES' => 'Uredi sva ponavljanja',
  'LBL_EMAIL' => 'Email',
  'LBL_EMAIL_REMINDER' => 'Email podsetnik',
  'LBL_EMAIL_REMINDER_SENT' => 'Email podsetnik poslat',
  'LBL_EMAIL_REMINDER_TIME' => 'Vreme email podsetnika',
  'LBL_EMPTY_SEARCH_RESULT' => 'Žao nam je, nije pronađen ni jedan rezultat. Molimo kreirajte pozivnicu ispod:',
  'LBL_ERROR_LAUNCH_MEETING_GENERAL' => 'Pojavila se greška prilikom pokretanja ovog sastanka. Molim kontaktirajte Administratora',
  'LBL_EXPORT_ASSIGNED_USER_ID' => 'ID broj dodeljenog korisnika',
  'LBL_EXPORT_ASSIGNED_USER_NAME' => 'Ime dodeljenog korisnika',
  'LBL_EXPORT_CREATED_BY' => 'ID broj osobe koja je kreirala',
  'LBL_EXPORT_DATE_END' => 'Datum i vreme završetka',
  'LBL_EXPORT_DATE_START' => 'Datum i vreme početka',
  'LBL_EXPORT_DISPLAYED_URL' => 'Prikazani URL',
  'LBL_EXPORT_EXTERNAL_ID' => 'Eksterni ID',
  'LBL_EXPORT_HOST_URL' => 'URL lokacije',
  'LBL_EXPORT_JOIN_URL' => 'URL za priključivanje',
  'LBL_EXPORT_MODIFIED_USER_ID' => 'ID korisnika koji je promenio',
  'LBL_EXPORT_PARENT_ID' => 'Matični ID broj:',
  'LBL_EXPORT_PARENT_TYPE' => 'Povezani tip',
  'LBL_EXPORT_REMINDER_TIME' => 'Vreme podsetnika (u minutima)',
  'LBL_EXTERNALID' => 'ID spoljne aplikacije',
  'LBL_EXTNOSTART_HEADER' => 'Greška: Nije moguće započeti sastanak',
  'LBL_EXTNOSTART_MAIN' => 'Ne možete započeti ovaj sastanak zato što niste Administrator ili vlasnik sastanka.',
  'LBL_EXTNOT_GO_BACK' => 'Vratite se na prethodni zapis',
  'LBL_EXTNOT_HEADER' => 'Greška: Nije pozvan',
  'LBL_EXTNOT_MAIN' => 'Ne možete da se pridružite sastanku zato što niste pozvani.',
  'LBL_EXTNOT_RECORD_LINK' => 'Pregledaj sastanke',
  'LBL_FIRST_NAME' => 'Ime',
  'LBL_HELP_CREATE' => 'Da bi  {{module_name}} bio kreiran: 1. Obezbediti vrednost za polja po želji. - Polja označena kao "Obavezna" moraju biti uneta pre čuvanja podataka. - Klik na "Pokaži više" za prikaz dodatnih polja ako je potrebno. 2. Klik na "Sačuvaj" da dovršimo novi zapis i povratak na predhodnu stranu. - Izaberi "Sačuvaj i pregledaj" za otvaranje novog {{module_name}} u pogledu zapisa. - Izaberi "Sačuvaj i kreiraj novi" za momentalno kreiranje novog {{module_name}}.',
  'LBL_HELP_RECORD' => '{{plural_module_name}}  modul se sastoji od stavki individualnih linija posla koje su uključene na {{opportunities_singular_module}} zapis i praćen kroz ceo prodajni životni ciklus. {{opportunities_singular_module}} zapis ima ulugo zaglavlja za jedan ili više {{module_name}} zapis. - Izmena polja ovog zapisa klikom na pojedinačno polje ili pritiskom na dugme Izmena. - Pregled ili izmena linkova ka drugim zapisima u podformama, uključujući {{campaigns_singular_module}} korisnike, prebacivanjem donjeg levog okvira na "Pregled Podataka". - Kreiraj i pregledaj korisničke komentare i snimi istoriju izmena u {{activitystream_singular_module}} prebacivanjem donjeg levog okvira na "To Aktivnosti". - Prati ili favorizuj ovaj zapis koristeći ikone desno od imena zapisa. - Dodatne akcije su dostupne u padajućem Akcija meniju desno od dugmeta Izmena.',
  'LBL_HELP_RECORDS' => '{{plural_module_name}} modul se sastoji od svih proizvoda koji su već prodati ili su u procesu prodaje klijentu. Lista proizvoda koja je prodala vaša organizacija je smeštena u Admin : Proizvodni Katalog i administratori imaju mogućnost dodavanja proizvoda po potrebi. Kada kreirate {{plural_module_name}}, imate opciju ili da odaberete proizvod iz kataloga ili da kreirate novi proizvod preko {{plural_module_name}} modula. Postoji nekoliko načina da se kreira {{plural_module_name}} u Sugar-u kao što su preko {{plural_module_name}} modula, {{quotes_module_name}} modul, uvozom {{plural_module_name}}, itd.  Jednom kada je {{module_name}} kreiran, moguće je pregledati i izmeniti informacije koji se tiču {{module_name}} kroz {{module_name}}-og pregleda zapisa.',
  'LBL_HISTORY_SUBPANEL_TITLE' => 'Beleške',
  'LBL_HOST_EXT_MEETING' => 'Započni sastanak',
  'LBL_HOST_URL' => 'URL lokacije',
  'LBL_HOURS_ABBREV' => 's',
  'LBL_HOURS_MINS' => '(sati/minuta)',
  'LBL_INVITEE' => 'Pozvani',
  'LBL_JOIN_EXT_MEETING' => 'Pridruži se sastanku',
  'LBL_JOIN_MEETING' => 'Pridružiti se {{tip sastanka}}',
  'LBL_LAST_NAME' => 'Prezime',
  'LBL_LEADS_SUBPANEL_TITLE' => 'Potencijalni klijenti',
  'LBL_LIST_ASSIGNED_TO_NAME' => 'Dodeljeni korisnik',
  'LBL_LIST_CLOSE' => 'Zatvori',
  'LBL_LIST_CONTACT' => 'Kontakt',
  'LBL_LIST_DATE' => 'Datum početka',
  'LBL_LIST_DATE_MODIFIED' => 'Datum izmene',
  'LBL_LIST_DIRECTION' => 'Smer',
  'LBL_LIST_DUE_DATE' => 'Krajnji rok',
  'LBL_LIST_FORM_TITLE' => 'Lista sastanaka',
  'LBL_LIST_JOIN_MEETING' => 'Pridruži se sastanku',
  'LBL_LIST_MY_MEETINGS' => 'Moji sastanci',
  'LBL_LIST_RELATED_TO' => 'Povezano sa',
  'LBL_LIST_STATUS' => 'Status',
  'LBL_LIST_SUBJECT' => 'Naslov',
  'LBL_LIST_TIME' => 'Vreme početka',
  'LBL_LOCATION' => 'Lokacija:',
  'LBL_MEETING' => 'Sastanak:',
  'LBL_MEETING_CLOSE_SUCCESS' => 'Sastanak uspešno zatvoren.',
  'LBL_MEETING_INFORMATION' => 'Pregled sastanka',
  'LBL_MINSS_ABBREV' => 'm',
  'LBL_MODIFIED_BY' => 'Promenio',
  'LBL_MODIFIED_USER' => 'Promenio',
  'LBL_MODULE_NAME' => 'Sastanci',
  'LBL_MODULE_NAME_SINGULAR' => 'Sastanak:',
  'LBL_MODULE_TITLE' => 'Sastanci: Početna strana',
  'LBL_MY_SCHEDULED_MEETINGS' => 'Moji Zakazani Sastanci',
  'LBL_NAME' => 'Naziv',
  'LBL_NEW_FORM_TITLE' => 'Zakaži sastanak',
  'LBL_NO_ACCESS' => 'Nemate pristup ovom delu. Kontaktirajte administratora vašeg sajta kako biste dobili pristup.',
  'LBL_OUTLOOK_ID' => 'Outlook ID',
  'LBL_PARENT_ID' => 'Matični ID broj:',
  'LBL_PARENT_TYPE' => 'Matični tip',
  'LBL_PASSWORD' => 'Lozinka sastanka',
  'LBL_PHONE' => 'Poslovni telefon:',
  'LBL_POPUP_REMINDER' => 'Iskačući prozor podsetnik',
  'LBL_POPUP_REMINDER_TIME' => 'Iskačući vremenski podsetnik',
  'LBL_RECORD_SAVED_ACCESS_DENIED' => 'Uspešno ste napravili zapis, ali nemate dovoljna ovlašćenja da pristupite zapisu.',
  'LBL_RECORD_SAVED_SUCCESS' => 'Uspešno ste napravili {{moduleSingularLower}} <a href="#{{buildRoute model=this}}">{{name}}</a>.',
  'LBL_RECURRENCE' => 'Ponavljanje',
  'LBL_RECURRING_LIMIT_ERROR' => 'Nije moguće zakazati ponavljajući poziv zato što prelazi maksimalni broj ponavljanja - $limit',
  'LBL_RECURRING_SOURCE' => 'Izvor ponavljanja',
  'LBL_RELATED_RECORD_DEFAULT_NAME' => 'Sastani se sa {{{this}}}',
  'LBL_RELATED_TO' => 'Povezano sa:',
  'LBL_REMINDER' => 'Podsetnik:',
  'LBL_REMINDER_EMAIL' => 'Email',
  'LBL_REMINDER_EMAIL_ALL_INVITEES' => 'Pošaljite email svim pozvanima.',
  'LBL_REMINDER_POPUP' => 'Popup',
  'LBL_REMINDER_TIME' => 'Vreme podsetnika',
  'LBL_REMINDER_TITLE' => 'Sastanak:',
  'LBL_REMOVE' => 'Ukloni',
  'LBL_REMOVE_ALL_RECURRENCES' => 'Obriši sva ponavljanja',
  'LBL_REPEAT_COUNT' => 'Broj ponavljanja',
  'LBL_REPEAT_DOW' => 'Na',
  'LBL_REPEAT_END' => 'Kraj',
  'LBL_REPEAT_END_AFTER' => 'Posle',
  'LBL_REPEAT_END_BY' => 'Od',
  'LBL_REPEAT_INTERVAL' => 'Svaki',
  'LBL_REPEAT_OCCURRENCES' => 'ponavljanja',
  'LBL_REPEAT_PARENT_ID' => 'Matični ID ponavljanja',
  'LBL_REPEAT_TYPE' => 'Ponavlja se',
  'LBL_REPEAT_UNTIL' => 'Ponavlja se do',
  'LBL_REVENUELINEITEMS' => 'Stavke prihoda',
  'LBL_SCHEDULING_FORM_TITLE' => 'Zakazivanje',
  'LBL_SEARCH_BUTTON' => 'Pretraga',
  'LBL_SEARCH_FORM_TITLE' => 'Pretraga sastanaka',
  'LBL_SEND_BUTTON_KEY' => 'I',
  'LBL_SEND_BUTTON_LABEL' => 'Pošalji pozvanima',
  'LBL_SEND_BUTTON_TITLE' => 'Pošalji pozvanima [Alt+I]',
  'LBL_SEND_INVITES' => 'Pošalji pozivnice',
  'LBL_SEQUENCE' => 'Sekvenca ažuriranja sastanka',
  'LBL_START_MEETING' => 'Započeti {{tip sastanka}}',
  'LBL_STATUS' => 'Status:',
  'LBL_SUBJECT' => 'Naslov:',
  'LBL_SYNCED_RECURRING_MSG' => 'Ovaj sastanak vodi poreklo iz eksternog sistema i sinhronizovan je u Sugar. Kako biste ga menjali, neophodno je izvršiti izmene u originalnom sistemu, koje kasnije mogu biti sinhronizovane ovde.',
  'LBL_TIME' => 'Početno vreme:',
  'LBL_TYPE' => 'Tip sastanka',
  'LBL_URL' => 'Početak/Pridruženje sastanku',
  'LBL_USERS_SUBPANEL_TITLE' => 'Korisnici',
  'LNK_IMPORT_MEETINGS' => 'Uvezi sastanke',
  'LNK_MEETING_LIST' => 'Pregledaj sastanke',
  'LNK_NEW_APPOINTMENT' => 'Zakaži sastanak',
  'LNK_NEW_MEETING' => 'Zakaži sastanak',
  'NOTICE_DURATION_TIME' => 'Vreme trajanja mora biti veće od 0',
  'NTC_REMOVE_INVITEE' => 'Da li sigurno želite da uklonite ovog pozvanog sa sastanka?',
);

