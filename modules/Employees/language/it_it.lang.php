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
  'ERR_DELETE_RECORD' => 'Per eliminare l´azienda deve essere specificato il numero del record.',
  'ERR_EMPLOYEE_NAME_EXISTS_1' => 'Nome Dipendente',
  'ERR_EMPLOYEE_NAME_EXISTS_2' => 'esiste già. Non sono ammessi dipendenti con lo stesso nome. Modifica il nome afffinchè sia unico.',
  'ERR_LAST_ADMIN_1' => 'Il dipendente "',
  'ERR_LAST_ADMIN_2' => 'è l´ultimo dipendente con accesso amministrativo. Deve esserci almeno un dipendente amministratore.',
  'LBL_ADDRESS' => 'Indirizzo:',
  'LBL_ADDRESS_CITY' => 'Indirizzo Comune',
  'LBL_ADDRESS_COUNTRY' => 'Indirizzo Nazione',
  'LBL_ADDRESS_INFORMATION' => 'Indirizzo',
  'LBL_ADDRESS_POSTALCODE' => 'Indirizzo CAP',
  'LBL_ADDRESS_STATE' => 'Indirizzo Provincia',
  'LBL_ADDRESS_STREET' => 'Indirizzo Via',
  'LBL_ADMIN' => 'Amministratore:',
  'LBL_ANY_ADDRESS' => 'Altro indirizzo:',
  'LBL_ANY_EMAIL' => 'Altra Email:',
  'LBL_ANY_PHONE' => 'Altro Telefono:',
  'LBL_AUTHENTICATE_ID' => 'ID Autenticazione',
  'LBL_CITY' => 'Comune:',
  'LBL_COUNTRY' => 'Nazione:',
  'LBL_CREATED_BY_NAME' => 'Creato Da',
  'LBL_CREATE_USER_BUTTON_KEY' => 'N',
  'LBL_CREATE_USER_BUTTON_LABEL' => 'Nuovo Utente',
  'LBL_CREATE_USER_BUTTON_TITLE' => 'Nuovo Utente [Alt+N]',
  'LBL_CURRENCY' => 'Valuta:',
  'LBL_DATE_ENTERED' => 'Data inserimento',
  'LBL_DATE_FORMAT' => 'Formato Data:',
  'LBL_DATE_MODIFIED' => 'Data Modifica',
  'LBL_DEFAULT_TEAM' => 'Gruppo Predefinito:',
  'LBL_DEFAULT_TEAM_TEXT' => 'Seleziona il gruppo predefinito per i nuovi record',
  'LBL_DELETED' => 'Cancellato',
  'LBL_DELETE_EMPLOYEE_CONFIRM' => 'Sei sicuro di voler eliminare questo dipendente?',
  'LBL_DELETE_USER_CONFIRM' => 'Questo dipendente è anche un utente. Eliminando il record del dipendente verrà eliminato anche il record dell´utente, e l´utente non sarà più in grado di accedere all´applicativo. Vuoi procedere ugualmente con l´eliminazione di questo record?',
  'LBL_DEPARTMENT' => 'Divisione:',
  'LBL_DESCRIPTION' => 'Descrizione',
  'LBL_EMAIL' => 'Email:',
  'LBL_EMAIL_ADDRESS' => 'Indirizzo Email:',
  'LBL_EMAIL_LINK_TYPE' => 'Client Email',
  'LBL_EMAIL_LINK_TYPE_HELP' => '<b>Client di posta di Sugar:</b> Invia email utilizzando il client di posta dell´applicazione Sugar.<br><b>Client di posta esterno:</b> Invia email utilizzando un client di posta esterno all´applicazione Sugar, come ad esempio Microsoft Outlook.',
  'LBL_EMPLOYEE' => 'Dipendenti:',
  'LBL_EMPLOYEE_INFORMATION' => 'Informazioni Dipendente',
  'LBL_EMPLOYEE_NAME' => 'Nome Dipendente:',
  'LBL_EMPLOYEE_SETTINGS' => 'Impostazioni Dipendente',
  'LBL_EMPLOYEE_STATUS' => 'Stato Dipendente:',
  'LBL_ERROR' => 'Errore:',
  'LBL_EXT_AUTHENTICATE' => 'Autenticazione Esterna',
  'LBL_FAVORITE_COLOR' => 'Colore Preferito:',
  'LBL_FAX' => 'Fax:',
  'LBL_FAX_PHONE' => 'Fax',
  'LBL_FF_CLEAR' => 'Azzera',
  'LBL_FIRST_NAME' => 'Nome:',
  'LBL_GROUP' => 'Gruppo Utenti',
  'LBL_GROUP_USER' => 'Gruppo Utenti',
  'LBL_HOME_PHONE' => 'Telefono Casa:',
  'LBL_IS_ADMIN' => 'è Amministratore',
  'LBL_LANGUAGE' => 'Lingua:',
  'LBL_LAST_NAME' => 'Cognome:',
  'LBL_LIST_ACCEPT_STATUS' => 'Accetta Stato',
  'LBL_LIST_ADMIN' => 'Admin',
  'LBL_LIST_DEPARTMENT' => 'Dipartimento',
  'LBL_LIST_DESCRIPTION' => 'Descrizione',
  'LBL_LIST_EMAIL' => 'Email',
  'LBL_LIST_EMPLOYEE_NAME' => 'Nome Dipendente',
  'LBL_LIST_EMPLOYEE_STATUS' => 'Stato Dipendente',
  'LBL_LIST_FORM_TITLE' => 'Dipendenti',
  'LBL_LIST_LAST_NAME' => 'Cognome',
  'LBL_LIST_NAME' => 'Nome',
  'LBL_LIST_PRIMARY_PHONE' => 'Telefono',
  'LBL_LIST_REPORTS_TO_NAME' => 'Dipende Da',
  'LBL_LIST_USER_NAME' => 'Nome Utente',
  'LBL_LOGIN' => 'Login',
  'LBL_MESSENGER_ID' => 'Nome IM:',
  'LBL_MESSENGER_TYPE' => 'Tipo IM:',
  'LBL_MOBILE_PHONE' => 'Telefono Cellulare:',
  'LBL_MODIFIED_BY' => 'Modificato Da',
  'LBL_MODIFIED_BY_ID' => 'Modificato Da Id',
  'LBL_MODULE_NAME' => 'Dipendenti',
  'LBL_MODULE_NAME_SINGULAR' => 'Dipendente',
  'LBL_MODULE_TITLE' => 'Dipendenti: Home',
  'LBL_MY_TEAMS' => 'I miei Gruppi',
  'LBL_NAME' => 'Nome:',
  'LBL_NEW_EMPLOYEE_BUTTON_KEY' => 'N',
  'LBL_NEW_EMPLOYEE_BUTTON_LABEL' => 'Nuovo Dipendente',
  'LBL_NEW_EMPLOYEE_BUTTON_TITLE' => 'Nuovo Dipendente [Alt+N]',
  'LBL_NEW_FORM_TITLE' => 'Nuovo Dipendente',
  'LBL_NOTES' => 'Note:',
  'LBL_OFFICE_PHONE' => 'Telefono Ufficio:',
  'LBL_ONLY_ACTIVE' => 'Dipendenti attivi',
  'LBL_OTHER' => 'Altro:',
  'LBL_OTHER_EMAIL' => 'Altra Email:',
  'LBL_OTHER_PHONE' => 'Altro:',
  'LBL_PASSWORD' => 'Password:',
  'LBL_PHOTO' => 'Foto',
  'LBL_PICTURE_FILE' => 'Immagine',
  'LBL_PORTAL_ONLY' => 'Portale Solo Utenti',
  'LBL_PORTAL_ONLY_USER' => 'Portal API User',
  'LBL_POSTAL_CODE' => 'CAP:',
  'LBL_PRIMARY_ADDRESS' => 'Indirizzo principale:',
  'LBL_PSW_MODIFIED' => 'Ultima Password Cambiata',
  'LBL_RECEIVE_NOTIFICATIONS' => 'Notifica di Assegnazione',
  'LBL_REPORTS_TO' => 'Dipende da Id:',
  'LBL_REPORTS_TO_NAME' => 'Dipende da',
  'LBL_RESET_PREFERENCES' => 'Ripristina Preferenze Predefinite',
  'LBL_SAVED_SEARCH' => 'Opzioni Layout',
  'LBL_SEARCH_FORM_TITLE' => 'Cerca Dipendente',
  'LBL_SELECT' => 'Seleziona',
  'LBL_SHOW_ON_EMPLOYEES' => 'Mostra Record Dipendenti',
  'LBL_STATE' => 'Provincia:',
  'LBL_STATUS' => 'Stato',
  'LBL_SUGAR_LOGIN' => 'è utente sugar',
  'LBL_SYSTEM_GENERATED_PASSWORD' => 'Password Generate dal Sistema',
  'LBL_THEME' => 'Tema:',
  'LBL_TIMEZONE' => 'Fuso Orario:',
  'LBL_TIME_FORMAT' => 'Formato Ora:',
  'LBL_TITLE' => 'Funzione:',
  'LBL_USER_HASH' => 'Password',
  'LBL_USER_NAME' => 'Nome Utente:',
  'LBL_USER_TYPE' => 'Tipo Utente',
  'LBL_WORK_PHONE' => 'Telefono Lavoro:',
  'LNK_EDIT_TABS' => 'Modifica Schede',
  'LNK_EMPLOYEE_LIST' => 'Visualizza Dipendenti',
  'LNK_NEW_EMPLOYEE' => 'Nuovo Dipendente',
  'NTC_REMOVE_TEAM_MEMBER_CONFIRMATION' => 'Sei sicuro di voler rimuovere questo membro?',
);

