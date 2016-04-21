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
  'LBL_MODULE_NAME' => 'Definice procesu',
  'LBL_MODULE_NAME_SINGULAR' => 'Definice procesu',
  'LBL_MODULE_TITLE' => 'Definice procesů',
  'LBL_PMSE_ADAM_DESIGNER_ACTION' => 'Akce',
  'LBL_PMSE_ADAM_DESIGNER_COMMENT' => 'Komentář',
  'LBL_PMSE_ADAM_DESIGNER_DOCUMENTS' => 'Dokumenty',
  'LBL_PMSE_ADAM_DESIGNER_DOCUMENT_START_EVENT' => 'Startovací event dokumentů',
  'LBL_PMSE_ADAM_DESIGNER_END_EVENT' => 'Konečný Event',
  'LBL_PMSE_ADAM_DESIGNER_EXCLUSIVE' => 'Exkluzivní',
  'LBL_PMSE_ADAM_DESIGNER_EXCLUSIVE_GATEWAY' => 'Exkluzivní Gateway',
  'LBL_PMSE_ADAM_DESIGNER_LEADS' => 'Přiležitosti',
  'LBL_PMSE_ADAM_DESIGNER_LEAD_START_EVENT' => 'Startovací event příležitosti',
  'LBL_PMSE_ADAM_DESIGNER_MESSAGE_EVENT' => 'Zpravodajský event',
  'LBL_PMSE_ADAM_DESIGNER_OPPORTUNITY' => 'Příležitost',
  'LBL_PMSE_ADAM_DESIGNER_OPPORTUNITY_START_EVENT' => 'Startovací event obchodní příležitosti',
  'LBL_PMSE_ADAM_DESIGNER_PARALLEL' => 'Paralelní',
  'LBL_PMSE_ADAM_DESIGNER_PARALLEL_GATEWAY' => 'Paralelní Gateway',
  'LBL_PMSE_ADAM_DESIGNER_RECEIVE_MESSAGE' => 'Obdržet zprávu',
  'LBL_PMSE_ADAM_DESIGNER_REDO' => 'Znovu',
  'LBL_PMSE_ADAM_DESIGNER_SAVE' => 'Uložit',
  'LBL_PMSE_ADAM_DESIGNER_SEND_MESSAGE' => 'Poslat zprávu',
  'LBL_PMSE_ADAM_DESIGNER_TASK' => 'Aktivity',
  'LBL_PMSE_ADAM_DESIGNER_TEXT_ANNOTATION' => 'Textová anotace',
  'LBL_PMSE_ADAM_DESIGNER_UNDO' => 'Zpět',
  'LBL_PMSE_ADAM_DESIGNER_USER_TASK' => 'Aktivity',
  'LBL_PMSE_ADAM_DESIGNER_WAIT' => 'Čekat',
  'LBL_PMSE_ADAM_DESIGNER_WAIT_EVENT' => 'Čekací event',
  'LBL_PMSE_ALL_PROCESS_DEFINITIONS' => 'Všechny definice procesu',
  'LBL_PMSE_BPMN_WARNING_LABEL' => 'Chyby',
  'LBL_PMSE_BPMN_WARNING_PANEL_TITLE' => 'Element Errors',
  'LBL_PMSE_BPMN_WARNING_SINGULAR_LABEL' => 'Chyba',
  'LBL_PMSE_BUTTON_CANCEL' => 'Zrušit',
  'LBL_PMSE_BUTTON_NO' => 'Ne',
  'LBL_PMSE_BUTTON_OK' => 'OK',
  'LBL_PMSE_BUTTON_SAVE' => 'Uložit',
  'LBL_PMSE_BUTTON_YES' => 'Ano',
  'LBL_PMSE_CONTEXT_MENU_100' => '100%',
  'LBL_PMSE_CONTEXT_MENU_125' => '125%',
  'LBL_PMSE_CONTEXT_MENU_150' => '150%',
  'LBL_PMSE_CONTEXT_MENU_50' => '50%',
  'LBL_PMSE_CONTEXT_MENU_75' => '75%',
  'LBL_PMSE_CONTEXT_MENU_ACTION' => 'Akce',
  'LBL_PMSE_CONTEXT_MENU_ACTION_TYPE' => 'Typ akce',
  'LBL_PMSE_CONTEXT_MENU_ADD_RELATED_RECORD' => 'Přidat související záznam',
  'LBL_PMSE_CONTEXT_MENU_ASSIGN_TEAM' => 'Round Robin',
  'LBL_PMSE_CONTEXT_MENU_ASSIGN_USER' => 'Přiřadit uživatele',
  'LBL_PMSE_CONTEXT_MENU_BUSINESS_RULE' => 'Byznys pravidlo',
  'LBL_PMSE_CONTEXT_MENU_CHANGE_FIELD' => 'Změnit políčko',
  'LBL_PMSE_CONTEXT_MENU_CONVERGING' => 'Konvergence',
  'LBL_PMSE_CONTEXT_MENU_CONVERT' => 'Konvertovat',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_EVENT' => '(Event)',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_FLOW' => 'standardní flow',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_GATEWAY' => '(Gateway)',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_TASK' => '(Activita)',
  'LBL_PMSE_CONTEXT_MENU_DELETE' => 'Smazat',
  'LBL_PMSE_CONTEXT_MENU_DIRECTION' => 'Směr',
  'LBL_PMSE_CONTEXT_MENU_DIVERGING' => 'Divergence',
  'LBL_PMSE_CONTEXT_MENU_DO_NOTHING' => 'Nic nedělat',
  'LBL_PMSE_CONTEXT_MENU_EVENT_BASED_GATEWAY' => 'Event-Based Gateway',
  'LBL_PMSE_CONTEXT_MENU_EXCLUSIVE_GATEWAY' => 'Exkluzivní Gateway',
  'LBL_PMSE_CONTEXT_MENU_FORMS' => 'Formy...',
  'LBL_PMSE_CONTEXT_MENU_INCLUSIVE_GATEWAY' => 'Inkluzivní Gateway',
  'LBL_PMSE_CONTEXT_MENU_LISTEN' => 'Poslouchat',
  'LBL_PMSE_CONTEXT_MENU_NONE' => 'Žádný',
  'LBL_PMSE_CONTEXT_MENU_PARELLEL_GATEWAY' => 'Paralelní Gateway',
  'LBL_PMSE_CONTEXT_MENU_PROCESS_DEFINITION' => 'Definice procesu',
  'LBL_PMSE_CONTEXT_MENU_RECEIVE_MESSAGE' => 'Obdržet zprávu',
  'LBL_PMSE_CONTEXT_MENU_REFRESH' => 'Obnovit',
  'LBL_PMSE_CONTEXT_MENU_RESULT' => 'Výsledek:',
  'LBL_PMSE_CONTEXT_MENU_SAVE' => 'Uložit',
  'LBL_PMSE_CONTEXT_MENU_SEND_MESSAGE' => 'Poslat zprávu',
  'LBL_PMSE_CONTEXT_MENU_SETTINGS' => 'Nastavení...',
  'LBL_PMSE_CONTEXT_MENU_TERMINATE_PROCESS' => 'Ukončit proces',
  'LBL_PMSE_CONTEXT_MENU_TIMER' => 'Timer',
  'LBL_PMSE_CONTEXT_MENU_UNASSIGNED' => 'Nepřiřazené',
  'LBL_PMSE_CONTEXT_MENU_USERS' => 'Uživatelé...',
  'LBL_PMSE_CONTEXT_MENU_ZOOM' => 'Zoomovat',
  'LBL_PMSE_EMAILPICKER_CURRENT_USER' => 'Aktuální uživatel',
  'LBL_PMSE_EMAILPICKER_RECORD_OWNER' => 'Vlastník záznamu',
  'LBL_PMSE_EMAILPICKER_RESULTS_TITLE' => '%NUMBER% doporučení pro "%TEXT%"',
  'LBL_PMSE_EMAILPICKER_SUGGESTIONS' => 'Doporučení',
  'LBL_PMSE_EMAILPICKER_SUPERVISOR' => 'Supervisor',
  'LBL_PMSE_EMAILPICKER_TEAMS' => 'Týmy',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_BR' => 'Obchodní pravidlo',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_RESPONSE' => 'Odpověď',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_TITLE' => 'Evaluace obchodních pravidel',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC' => 'String, Number and Boolean',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_BOOLEAN' => 'Přidat boolean (ano, ne)',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_NUMBER' => 'přidat číslo',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_STRING' => 'přidat string (vlákno)',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_VALUE' => 'Hodnota',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_FIXED_DATE' => 'Fixní datum',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_FIXED_DATETIME' => 'Fixovaný Datetime',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_TITLE' => 'Konstanty',
  'LBL_PMSE_EXPCONTROL_EVALUATIONS_TITLE' => 'Evaluace',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_FORM' => 'Forma',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_STATUS' => 'Status:',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_TITLE' => 'Evaluace responsivní formy',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_MODULE' => 'Modul',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_TITLE' => 'Evaluace políček modulu',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_VALUE' => 'Hodnota',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_VARIABLE' => 'Pole',
  'LBL_PMSE_EXPCONTROL_OPERATOR_EQUAL' => 'rovná se',
  'LBL_PMSE_EXPCONTROL_OPERATOR_EQUAL_TEXT' => 'je',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR' => 'je větší než',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR_DATE' => 'po',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR_EQUAL' => 'je větší nebo rovno',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_EQUAL_THAN' => 'je menší nebo rovno',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_THAN' => 'je menší než',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_THAN_DATE' => 'před',
  'LBL_PMSE_EXPCONTROL_OPERATOR_NOT_EQUAL' => 'nerovná se',
  'LBL_PMSE_EXPCONTROL_OPERATOR_NOT_EQUAL_TEXT' => 'není',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_CURRENT' => 'Aktuální uživatel',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_ADMIN' => 'Je admin',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_ADMIN' => 'Není admin',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_ROLE' => 'Není role',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_USER' => 'Není uživatel',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_ROLE' => 'Je role',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_USER' => 'Je uživatel',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_OPERATOR' => 'Operátor',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_OWNER' => 'Vlastník záznamu',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_SUPERVISOR' => 'Supervisor',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_AMOUNT' => 'Hodnota',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_DAYS' => 'dny',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_HOURS' => 'hodiny',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_MINUTES' => 'minuty',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_MONTHS' => 'měsíce',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_TITLE' => 'Time Span',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_UNIT' => 'Jednotka',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_WEEKS' => 'týdny',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_YEARS' => 'roky',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TITLE' => 'Evaluace uživatele',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_USER' => 'Uživatel',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_VALUE' => 'Hodnota',
  'LBL_PMSE_EXPCONTROL_VARIABLES_PANEL_TITLE' => 'Pole',
  'LBL_PMSE_FORMPANEL_SUBMIT' => 'Odeslat',
  'LBL_PMSE_FORM_LABEL_APPLIES_TO' => 'Aplikovat na',
  'LBL_PMSE_FORM_LABEL_ASSIGNMENT_METHOD' => 'Metoda zadání',
  'LBL_PMSE_FORM_LABEL_ASSIGN_TO_TEAM' => 'Přidělit týmu',
  'LBL_PMSE_FORM_LABEL_ASSIGN_TO_USER' => 'Přidělit uživateli',
  'LBL_PMSE_FORM_LABEL_CRITERIA' => 'Kritéria',
  'LBL_PMSE_FORM_LABEL_DURATION' => 'Doba trvání',
  'LBL_PMSE_FORM_LABEL_EMAIL_BCC' => 'Skrytá kopie (bcc):',
  'LBL_PMSE_FORM_LABEL_EMAIL_CC' => 'Kopie (cc):',
  'LBL_PMSE_FORM_LABEL_EMAIL_TEMPLATE' => 'Vzor emailu',
  'LBL_PMSE_FORM_LABEL_EMAIL_TO' => 'Do',
  'LBL_PMSE_FORM_LABEL_EXPECTED_TIME' => 'Očekávaný čas',
  'LBL_PMSE_FORM_LABEL_FIELDS' => 'Pole',
  'LBL_PMSE_FORM_LABEL_FIXED_DATE' => 'Fixní datum',
  'LBL_PMSE_FORM_LABEL_FORM_TYPE' => 'Typ formy',
  'LBL_PMSE_FORM_LABEL_GENERAL_SETTINGS' => 'Obecné',
  'LBL_PMSE_FORM_LABEL_MODULE' => 'Modul',
  'LBL_PMSE_FORM_LABEL_OTHER_DERIVATION_OPTIONS' => 'Další Routing možnosti',
  'LBL_PMSE_FORM_LABEL_READ_ONLY_FIELDS' => 'Políčka určená pouze pro čtení',
  'LBL_PMSE_FORM_LABEL_RELATED_MODULE' => 'Související modul',
  'LBL_PMSE_FORM_LABEL_REQUIRED_FIELDS' => 'Povinné políčka',
  'LBL_PMSE_FORM_LABEL_RESPONSE_BUTTONS' => 'Tlačítka formy',
  'LBL_PMSE_FORM_LABEL_TEAM' => 'Tým',
  'LBL_PMSE_FORM_LABEL_UNIT' => 'Jednotka',
  'LBL_PMSE_FORM_LABEL_UPDATE_RECORD_OWNER' => 'Oznámit vlastníky záznamu',
  'LBL_PMSE_FORM_OPTION_ADMINISTRATOR' => 'Administrátor:',
  'LBL_PMSE_FORM_OPTION_APPROVE_REJECT' => 'Schválit/Odmítnout',
  'LBL_PMSE_FORM_OPTION_CURRENT_USER' => 'Stávající uživatel',
  'LBL_PMSE_FORM_OPTION_DAYS' => 'Dny',
  'LBL_PMSE_FORM_OPTION_HOURS' => 'Hodiny',
  'LBL_PMSE_FORM_OPTION_MINUTES' => 'Minuty',
  'LBL_PMSE_FORM_OPTION_RECORD_OWNER' => 'Vlastník záznamu',
  'LBL_PMSE_FORM_OPTION_ROUND_ROBIN' => 'Round Robin',
  'LBL_PMSE_FORM_OPTION_ROUTE' => 'Směrovat',
  'LBL_PMSE_FORM_OPTION_SELECT' => 'Vyberte...',
  'LBL_PMSE_FORM_OPTION_SELF_SERVICE' => 'Samoobslužný servis',
  'LBL_PMSE_FORM_OPTION_STATIC_ASSIGNMENT' => 'Statické zadání',
  'LBL_PMSE_FORM_OPTION_SUPERVISOR' => 'Supervisor',
  'LBL_PMSE_FORM_OPTION_TARGET_MODULE' => 'Cílový Modul:',
  'LBL_PMSE_FORM_TITLE_ACTIVITY' => 'Aktivita',
  'LBL_PMSE_FORM_TITLE_ADD_RELATED_RECORD' => 'Přidat související záznam',
  'LBL_PMSE_FORM_TITLE_ASSIGN_TEAM' => 'Round Robin',
  'LBL_PMSE_FORM_TITLE_ASSIGN_USER' => 'Přiřadit uživatele',
  'LBL_PMSE_FORM_TITLE_BUSINESS_RULE' => 'Byznys pravidlo',
  'LBL_PMSE_FORM_TITLE_CHANGE_FIELDS' => 'Změnit pole',
  'LBL_PMSE_FORM_TITLE_GATEWAY' => 'Gateway',
  'LBL_PMSE_FORM_TITLE_LABEL_EVENT' => 'Event',
  'LBL_PMSE_FORM_TITLE_USER_DEFINITION' => 'Definice uživatele',
  'LBL_PMSE_FORM_TOOLTIP_DURATION' => 'Definuje dobu timerového eventu',
  'LBL_PMSE_FORM_TOOLTIP_EVENT_MODULE' => 'Vybrat SugarCRM modul, který souvisí se spuštěním eventu',
  'LBL_PMSE_IMPORT_BUTTON_LABEL' => 'Import',
  'LBL_PMSE_LABEL_DELETE' => 'Smazat',
  'LBL_PMSE_LABEL_DESCRIPTION' => 'Popis',
  'LBL_PMSE_LABEL_DESIGN' => 'Design',
  'LBL_PMSE_LABEL_DISABLE' => 'Vypnout',
  'LBL_PMSE_LABEL_ENABLE' => 'Povoleno',
  'LBL_PMSE_LABEL_EXPORT' => 'Export',
  'LBL_PMSE_LABEL_LOCKED_FIELDS' => 'Uzamčené políčka',
  'LBL_PMSE_LABEL_PROCESS_NAME' => 'Název procesu',
  'LBL_PMSE_LABEL_RULE' => 'Pravidlo',
  'LBL_PMSE_LABEL_TERMINATE_PROCESS' => 'Ukončit proces',
  'LBL_PMSE_MESSAGE_ACTIVITY_NAME_ALREADY_EXISTS' => 'Jméno "%s" již existuje',
  'LBL_PMSE_MESSAGE_ACTIVITY_NAME_EMPTY' => 'Jméno aktivity je prázdné',
  'LBL_PMSE_MESSAGE_CANCEL_CONFIRM' => 'Některé nastavení se změnilo. Chcete zrušit změny?',
  'LBL_PMSE_MESSAGE_ERROR_ACTIVITY_INCOMING' => 'Aktivita musí mít příchozí sekvenční flow',
  'LBL_PMSE_MESSAGE_ERROR_ACTIVITY_OUTGOING' => 'Aktivita musí mít vycházející sekvenční flow',
  'LBL_PMSE_MESSAGE_ERROR_ANNOTATION' => 'Textová anotace musí mít asociační linii',
  'LBL_PMSE_MESSAGE_ERROR_BOUNDARY_EVENT_OUTGOING' => 'Boundary event musí mít jedno vycházející sekveční flow',
  'LBL_PMSE_MESSAGE_ERROR_END_EVENT_INCOMING' => 'Konečný event musí mít přicházející sekvenční flow',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_CONVERGING_INCOMING' => 'Gateway musí mít dvě nebo více příchozích sekvenčních flows',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_CONVERGING_OUTGOING' => 'Gateway nemůže mít vycházející sekvenční flow',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_DIVERGING_INCOMING' => 'Gateway může mít jedno nebo více příchozích sekvenčních flow',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_DIVERGING_OUTGOING' => 'Gateway musí mít dvě nebo více vycházejících sekvenčních flow',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_MIXED_INCOMING' => 'Gateway musí mít dvě nebo více příchozích sekvenčních flows',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_MIXED_OUTGOING' => 'Gateway musí mít dvě nebo více vycházejících sekvenčních flows',
  'LBL_PMSE_MESSAGE_ERROR_INTERMEDIATE_EVENT_INCOMING' => 'Intermediate event musí mít příchozí nebo více sekvenční flow',
  'LBL_PMSE_MESSAGE_ERROR_INTERMEDIATE_EVENT_OUTGOING' => 'Intermediate event musí mít jedno výcházející sekvenční flow',
  'LBL_PMSE_MESSAGE_ERROR_START_EVENT_OUTGOING' => 'Začínajcí event musí mít výcházející sekvenční flow',
  'LBL_PMSE_MESSAGE_INVALID_CONNECTION' => 'Neplatné spojení',
  'LBL_PMSE_MESSAGE_REMOVE_ALL_START_CRITERIA' => 'Modul se mění, takže kritérie budou také smazány, protože nemají žádný políčkový vztah s novým modulem',
  'LBL_PMSE_MY_PROCESS_DEFINITIONS' => 'Moje definice procesu',
  'LBL_PMSE_PROCESS_DEFINITIONS_DISABLED' => 'Vypnuto',
  'LBL_PMSE_PROCESS_DEFINITIONS_ENABLED' => 'Povoleno',
  'LBL_PMSE_PROCESS_DEFINITION_EMPTY_WARNING' => 'Prosím, vyberte platný *.bpm soubor',
  'LBL_PMSE_PROCESS_DEFINITION_IMPORT_SUCCESS' => 'Process Definitions byly úspěšně importovány do Vašeho systému',
  'LBL_PMSE_PROCESS_DEFINITION_IMPORT_TEXT' => 'Automaticky vytvořit nový záznam Definice procesu importováním .bpm soubor ze systému.',
  'LBL_PMSE_SAVE_DESIGN_BUTTON_LABEL' => 'Uložit a design',
  'LBL_PMSE_UPDATERFIELD_VARIABLES_LIST_TITLE' => '%MODULE% pole',
  'LBL_PRJ_MODULE' => 'Cílový Modul:',
  'LBL_PRJ_STATUS' => 'Stav',
  'LNK_LIST' => 'Zobrazit procesy',
);

