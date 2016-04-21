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
  'LBL_MODULE_NAME' => 'Definime procesi',
  'LBL_MODULE_NAME_SINGULAR' => 'Definimi procesit',
  'LBL_MODULE_TITLE' => 'Definime procesi',
  'LBL_PMSE_ADAM_DESIGNER_ACTION' => 'Veprim',
  'LBL_PMSE_ADAM_DESIGNER_COMMENT' => 'Koment',
  'LBL_PMSE_ADAM_DESIGNER_DOCUMENTS' => 'Dokumentacionet',
  'LBL_PMSE_ADAM_DESIGNER_DOCUMENT_START_EVENT' => 'Ngjarja e fillimit të dokumentit',
  'LBL_PMSE_ADAM_DESIGNER_END_EVENT' => 'Fundi i ngjarjes',
  'LBL_PMSE_ADAM_DESIGNER_EXCLUSIVE' => 'Ekskluziv',
  'LBL_PMSE_ADAM_DESIGNER_EXCLUSIVE_GATEWAY' => 'Largim ekskluziv',
  'LBL_PMSE_ADAM_DESIGNER_LEADS' => 'Udhëheqje',
  'LBL_PMSE_ADAM_DESIGNER_LEAD_START_EVENT' => 'Ngjarje e fillimit të udhëheqjes',
  'LBL_PMSE_ADAM_DESIGNER_MESSAGE_EVENT' => 'Ngjarja e mesazhit',
  'LBL_PMSE_ADAM_DESIGNER_OPPORTUNITY' => 'Mundësi',
  'LBL_PMSE_ADAM_DESIGNER_OPPORTUNITY_START_EVENT' => 'Ngjarja e fillimit të mundësisë',
  'LBL_PMSE_ADAM_DESIGNER_PARALLEL' => 'Pararel',
  'LBL_PMSE_ADAM_DESIGNER_PARALLEL_GATEWAY' => 'Largim paralel',
  'LBL_PMSE_ADAM_DESIGNER_RECEIVE_MESSAGE' => 'Prano mesazh',
  'LBL_PMSE_ADAM_DESIGNER_REDO' => 'Ribëj',
  'LBL_PMSE_ADAM_DESIGNER_SAVE' => 'Ruaj',
  'LBL_PMSE_ADAM_DESIGNER_SEND_MESSAGE' => 'Dërgo mesazh',
  'LBL_PMSE_ADAM_DESIGNER_TASK' => 'Aktivitetet',
  'LBL_PMSE_ADAM_DESIGNER_TEXT_ANNOTATION' => 'Shënim teksti',
  'LBL_PMSE_ADAM_DESIGNER_UNDO' => 'Zhbëj',
  'LBL_PMSE_ADAM_DESIGNER_USER_TASK' => 'Aktivitet',
  'LBL_PMSE_ADAM_DESIGNER_WAIT' => 'Prit',
  'LBL_PMSE_ADAM_DESIGNER_WAIT_EVENT' => 'Ngjarja e pritjes',
  'LBL_PMSE_ALL_PROCESS_DEFINITIONS' => 'Të gjitha definimet e procesit',
  'LBL_PMSE_BPMN_WARNING_LABEL' => 'Gabime',
  'LBL_PMSE_BPMN_WARNING_PANEL_TITLE' => 'Gabime elementi',
  'LBL_PMSE_BPMN_WARNING_SINGULAR_LABEL' => 'Gabim',
  'LBL_PMSE_BUTTON_CANCEL' => 'Anulo',
  'LBL_PMSE_BUTTON_NO' => 'Jo',
  'LBL_PMSE_BUTTON_OK' => 'OK',
  'LBL_PMSE_BUTTON_SAVE' => 'Ruaj',
  'LBL_PMSE_BUTTON_YES' => 'Po',
  'LBL_PMSE_CONTEXT_MENU_100' => '100%',
  'LBL_PMSE_CONTEXT_MENU_125' => '125%',
  'LBL_PMSE_CONTEXT_MENU_150' => '150%',
  'LBL_PMSE_CONTEXT_MENU_50' => '50%',
  'LBL_PMSE_CONTEXT_MENU_75' => '75%',
  'LBL_PMSE_CONTEXT_MENU_ACTION' => 'Veprim',
  'LBL_PMSE_CONTEXT_MENU_ACTION_TYPE' => 'Lloji i veprimit',
  'LBL_PMSE_CONTEXT_MENU_ADD_RELATED_RECORD' => 'Shto regjistrim të lidhur',
  'LBL_PMSE_CONTEXT_MENU_ASSIGN_TEAM' => 'Garë me sistem qarku',
  'LBL_PMSE_CONTEXT_MENU_ASSIGN_USER' => 'Përdorues i caktuar',
  'LBL_PMSE_CONTEXT_MENU_BUSINESS_RULE' => 'Rregulla biznesi',
  'LBL_PMSE_CONTEXT_MENU_CHANGE_FIELD' => 'Ndrysho fushën',
  'LBL_PMSE_CONTEXT_MENU_CONVERGING' => 'Konvergjencë',
  'LBL_PMSE_CONTEXT_MENU_CONVERT' => 'Konvertim...',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_EVENT' => '(Ngjarje)',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_FLOW' => 'Rrjedhë e caktuar',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_GATEWAY' => '(Gateway)',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_TASK' => '(Aktivitet)',
  'LBL_PMSE_CONTEXT_MENU_DELETE' => 'Fshi',
  'LBL_PMSE_CONTEXT_MENU_DIRECTION' => 'Drejtim...',
  'LBL_PMSE_CONTEXT_MENU_DIVERGING' => 'Divergjencë',
  'LBL_PMSE_CONTEXT_MENU_DO_NOTHING' => 'Mos bë gjë',
  'LBL_PMSE_CONTEXT_MENU_EVENT_BASED_GATEWAY' => 'Largim i bazuar në ngjarje',
  'LBL_PMSE_CONTEXT_MENU_EXCLUSIVE_GATEWAY' => 'Largim ekskluziv',
  'LBL_PMSE_CONTEXT_MENU_FORMS' => 'Forma...',
  'LBL_PMSE_CONTEXT_MENU_INCLUSIVE_GATEWAY' => 'Largim inkluziv',
  'LBL_PMSE_CONTEXT_MENU_LISTEN' => 'Dëgjo',
  'LBL_PMSE_CONTEXT_MENU_NONE' => 'Asnjë',
  'LBL_PMSE_CONTEXT_MENU_PARELLEL_GATEWAY' => 'Largim paralel',
  'LBL_PMSE_CONTEXT_MENU_PROCESS_DEFINITION' => 'Definimi procesit',
  'LBL_PMSE_CONTEXT_MENU_RECEIVE_MESSAGE' => 'Prano mesazh',
  'LBL_PMSE_CONTEXT_MENU_REFRESH' => 'Rifresko',
  'LBL_PMSE_CONTEXT_MENU_RESULT' => 'Rezultati',
  'LBL_PMSE_CONTEXT_MENU_SAVE' => 'Ruaj',
  'LBL_PMSE_CONTEXT_MENU_SEND_MESSAGE' => 'Dërgo mesazh',
  'LBL_PMSE_CONTEXT_MENU_SETTINGS' => 'Konfigurime...',
  'LBL_PMSE_CONTEXT_MENU_TERMINATE_PROCESS' => 'Ndalo procesin',
  'LBL_PMSE_CONTEXT_MENU_TIMER' => 'Kohëmatës',
  'LBL_PMSE_CONTEXT_MENU_UNASSIGNED' => 'E pacaktuar',
  'LBL_PMSE_CONTEXT_MENU_USERS' => 'Përdorues...',
  'LBL_PMSE_CONTEXT_MENU_ZOOM' => 'Zmadho',
  'LBL_PMSE_EMAILPICKER_CURRENT_USER' => 'Përdorues aktual',
  'LBL_PMSE_EMAILPICKER_RECORD_OWNER' => 'Pronar regjistrimi',
  'LBL_PMSE_EMAILPICKER_RESULTS_TITLE' => '%NUMBER% sugjerime për "%TEXT%"',
  'LBL_PMSE_EMAILPICKER_SUGGESTIONS' => 'Sugjerime',
  'LBL_PMSE_EMAILPICKER_SUPERVISOR' => 'Mbikqyrës',
  'LBL_PMSE_EMAILPICKER_TEAMS' => 'Ekipet',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_BR' => 'Rregulla biznesi',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_RESPONSE' => 'Përgjigje',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_TITLE' => 'Evaluim i përgjigjes së binesit',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC' => 'Varg, numër dhe boolean',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_BOOLEAN' => 'shto boolean',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_NUMBER' => 'shto numër',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_STRING' => 'shto varg',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_VALUE' => 'Vlera',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_FIXED_DATE' => 'Datë e fiksuar',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_FIXED_DATETIME' => 'Datë kohore e fiksuar',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_TITLE' => 'Konstanta',
  'LBL_PMSE_EXPCONTROL_EVALUATIONS_TITLE' => 'Vlerësime',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_FORM' => 'Forma',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_STATUS' => 'Statusi',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_TITLE' => 'Evaluimi i formës së përgjigjes',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_MODULE' => 'Moduli',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_TITLE' => 'Evaluimi i fushës së modulit',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_VALUE' => 'Vlera',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_VARIABLE' => 'Fusha',
  'LBL_PMSE_EXPCONTROL_OPERATOR_EQUAL' => 'është e barabartë me',
  'LBL_PMSE_EXPCONTROL_OPERATOR_EQUAL_TEXT' => 'është',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR' => 'është më e madhe se',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR_DATE' => 'pas',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR_EQUAL' => 'është më e madhe ose e barabartë se',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_EQUAL_THAN' => 'është më e vogël ose e barabartë se',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_THAN' => 'është më pak se',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_THAN_DATE' => 'më përpara',
  'LBL_PMSE_EXPCONTROL_OPERATOR_NOT_EQUAL' => 'nuk është e barabartë me',
  'LBL_PMSE_EXPCONTROL_OPERATOR_NOT_EQUAL_TEXT' => 'nuk është',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_CURRENT' => 'Përdorues aktual',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_ADMIN' => 'Është admin',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_ADMIN' => 'Nuk është admin',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_ROLE' => 'Nuk është rol',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_USER' => 'Nuk është përdorues',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_ROLE' => 'Është admin',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_USER' => 'Është përdorues',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_OPERATOR' => 'Operatori',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_OWNER' => 'Pronar regjistrimi',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_SUPERVISOR' => 'Mbikqyrës',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_AMMOUNT' => '',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_AMOUNT' => 'Vlera',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_DAYS' => 'Ditët',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_HOURS' => 'orët',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_MINUTES' => 'minutat',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_MONTHS' => 'muaj',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_TITLE' => 'Interval kohor',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_UNIT' => 'Njësi',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_WEEKS' => 'javë',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_YEARS' => 'vite',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TITLE' => 'Evaluim përdoruesi',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_USER' => 'Përdorues',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_VALUE' => 'Vlera',
  'LBL_PMSE_EXPCONTROL_VARIABLES_PANEL_TITLE' => 'Fushat',
  'LBL_PMSE_FORMPANEL_SUBMIT' => 'Paraqit',
  'LBL_PMSE_FORM_LABEL_APPLIES_TO' => 'I aplikohet',
  'LBL_PMSE_FORM_LABEL_ASSIGNMENT_METHOD' => 'Metoda e caktimit',
  'LBL_PMSE_FORM_LABEL_ASSIGN_TO_TEAM' => 'Drejtuar grupit',
  'LBL_PMSE_FORM_LABEL_ASSIGN_TO_USER' => 'Cakto përdorues',
  'LBL_PMSE_FORM_LABEL_CRITERIA' => 'Kriteri',
  'LBL_PMSE_FORM_LABEL_DURATION' => 'Kohëzgjatja',
  'LBL_PMSE_FORM_LABEL_EMAIL_BCC' => 'Bcc',
  'LBL_PMSE_FORM_LABEL_EMAIL_CC' => 'Cc',
  'LBL_PMSE_FORM_LABEL_EMAIL_TEMPLATE' => 'Email shablloni',
  'LBL_PMSE_FORM_LABEL_EMAIL_TO' => 'Deri',
  'LBL_PMSE_FORM_LABEL_EXPECTED_TIME' => 'Koha e pritur',
  'LBL_PMSE_FORM_LABEL_FIELDS' => 'Fushat',
  'LBL_PMSE_FORM_LABEL_FIXED_DATE' => 'Datë e fiksuar',
  'LBL_PMSE_FORM_LABEL_FORM_TYPE' => 'Lloji i formës',
  'LBL_PMSE_FORM_LABEL_GENERAL_SETTINGS' => 'E përgjithëshme',
  'LBL_PMSE_FORM_LABEL_MODULE' => 'Moduli',
  'LBL_PMSE_FORM_LABEL_OTHER_DERIVATION_OPTIONS' => 'Opcionet e rutës së tjetër',
  'LBL_PMSE_FORM_LABEL_READ_ONLY_FIELDS' => 'Fusha lexovetëm',
  'LBL_PMSE_FORM_LABEL_RELATED_MODULE' => 'Mouli lidhës',
  'LBL_PMSE_FORM_LABEL_REQUIRED_FIELDS' => 'Fusha të domosdoshme',
  'LBL_PMSE_FORM_LABEL_RESPONSE_BUTTONS' => 'Butonat e formës',
  'LBL_PMSE_FORM_LABEL_TEAM' => 'Ekipi',
  'LBL_PMSE_FORM_LABEL_UNIT' => 'Njësi',
  'LBL_PMSE_FORM_LABEL_UPDATE_RECORD_OWNER' => 'Pronar i regjistrimit të lajmëruar',
  'LBL_PMSE_FORM_OPTION_ADMINISTRATOR' => 'Administratori',
  'LBL_PMSE_FORM_OPTION_APPROVE_REJECT' => 'Aprovo/Refuzo',
  'LBL_PMSE_FORM_OPTION_CURRENT_USER' => 'Përdoruesi aktual',
  'LBL_PMSE_FORM_OPTION_DAYS' => 'Ditë',
  'LBL_PMSE_FORM_OPTION_HOURS' => 'Orët',
  'LBL_PMSE_FORM_OPTION_MINUTES' => 'Minutat',
  'LBL_PMSE_FORM_OPTION_RECORD_OWNER' => 'Regjistro pronarin',
  'LBL_PMSE_FORM_OPTION_ROUND_ROBIN' => 'Garë me sistem qarku',
  'LBL_PMSE_FORM_OPTION_ROUTE' => 'Ruta',
  'LBL_PMSE_FORM_OPTION_SELECT' => 'Selekto...',
  'LBL_PMSE_FORM_OPTION_SELF_SERVICE' => 'Vetëshërbim',
  'LBL_PMSE_FORM_OPTION_STATIC_ASSIGNMENT' => 'Caktim statik',
  'LBL_PMSE_FORM_OPTION_SUPERVISOR' => 'Mbikqyrës',
  'LBL_PMSE_FORM_OPTION_TARGET_MODULE' => 'Moduli i synimit',
  'LBL_PMSE_FORM_TITLE_ACTIVITY' => 'Aktivitetet',
  'LBL_PMSE_FORM_TITLE_ADD_RELATED_RECORD' => 'Shto regjistrim të lidhur',
  'LBL_PMSE_FORM_TITLE_ASSIGN_TEAM' => 'Garë me sistem qarku',
  'LBL_PMSE_FORM_TITLE_ASSIGN_USER' => 'Përdorues i caktuar',
  'LBL_PMSE_FORM_TITLE_BUSINESS_RULE' => 'Rregulla biznesi',
  'LBL_PMSE_FORM_TITLE_CHANGE_FIELDS' => 'Fushat e ndryshimit',
  'LBL_PMSE_FORM_TITLE_GATEWAY' => 'Largim',
  'LBL_PMSE_FORM_TITLE_LABEL_EVENT' => 'Ngjarje',
  'LBL_PMSE_FORM_TITLE_USER_DEFINITION' => 'Definim i përdoruesit',
  'LBL_PMSE_FORM_TOOLTIP_DURATION' => 'Definon kohëzgjatjen e ngjarjes kohore',
  'LBL_PMSE_FORM_TOOLTIP_EVENT_MODULE' => 'Selekto SugarCRM modulin për të aplikuar këmbën e ngjarjes',
  'LBL_PMSE_IMPORT_BUTTON_LABEL' => 'Importo',
  'LBL_PMSE_IMPORT_PROCESS_DEFINITION_FAILURE' => 'Dështim për të krijuar Proces Definimin nga fajlli',
  'LBL_PMSE_LABEL_DELETE' => 'Fshi [Alt+D]',
  'LBL_PMSE_LABEL_DESCRIPTION' => 'Përshkrim',
  'LBL_PMSE_LABEL_DESIGN' => 'Dizajno',
  'LBL_PMSE_LABEL_DISABLE' => 'Çaktivizo',
  'LBL_PMSE_LABEL_ENABLE' => 'Aktivizo',
  'LBL_PMSE_LABEL_EXPORT' => 'Eksporto',
  'LBL_PMSE_LABEL_LOCKED_FIELDS' => 'Fusha të mbyllura',
  'LBL_PMSE_LABEL_PROCESS_NAME' => 'Emri i procesit',
  'LBL_PMSE_LABEL_RULE' => 'Rregulla',
  'LBL_PMSE_LABEL_TERMINATE_PROCESS' => 'Ndalo procesin',
  'LBL_PMSE_MESSAGE_ACTIVITY_NAME_ALREADY_EXISTS' => 'Emri "%s" vetëm se ekziston në familjen e formave.',
  'LBL_PMSE_MESSAGE_ACTIVITY_NAME_EMPTY' => 'Emri i aktivitetit është i zbrazur.',
  'LBL_PMSE_MESSAGE_CANCEL_CONFIRM' => 'Disa konfigurime kanë ndryshuar. Dëshironi ti anuloni ndryshimet?',
  'LBL_PMSE_MESSAGE_ERROR_ACTIVITY_INCOMING' => 'Aktiviteti duhet të ketë një rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_ACTIVITY_OUTGOING' => 'duhet të ketë një rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_ANNOTATION' => 'Shënimi tekstor duhet të ketë lidhje asociacioni',
  'LBL_PMSE_MESSAGE_ERROR_BOUNDARY_EVENT_OUTGOING' => 'Ngjarja kufi duhet të ketë një rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_END_EVENT_INCOMING' => 'Fundi i ngjarjes duhet të ketë një rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_CONVERGING_INCOMING' => 'Largimi duhet të ketë dy ose më shumë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_CONVERGING_OUTGOING' => 'Largimi nuk mund të ketë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_DIVERGING_INCOMING' => 'Largimi duhet të ketë një ose më shumë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_DIVERGING_OUTGOING' => 'Largimi duhet të ketë dy ose më shumë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_MIXED_INCOMING' => 'Largimi duhet të ketë dy ose më shumë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_MIXED_OUTGOING' => 'Largimi duhet të ketë dy ose më shumë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_INTERMEDIATE_EVENT_INCOMING' => 'Mesi i ngjarjes duhet të ketë një ose më shumë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_INTERMEDIATE_EVENT_OUTGOING' => 'Mesi i ngjarjes duhet të ketë një ose më shumë rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_ERROR_START_EVENT_OUTGOING' => 'Fillimi i ngjarjes duhet të ketë një rrjedhë sekuence',
  'LBL_PMSE_MESSAGE_INVALID_CONNECTION' => 'Lidhje jo valide',
  'LBL_PMSE_MESSAGE_REMOVE_ALL_START_CRITERIA' => 'Moduli është duke e ndryshuar kështu që kriteri do të hiqet poashtu, meqë nuk ka fusha të lidhura me modulin e ri,',
  'LBL_PMSE_MY_PROCESS_DEFINITIONS' => 'Definimet e mia të procesit',
  'LBL_PMSE_PROCESS_DEFINITIONS_DISABLED' => 'E pamundësuar',
  'LBL_PMSE_PROCESS_DEFINITIONS_ENABLED' => 'Mundësuar',
  'LBL_PMSE_PROCESS_DEFINITION_EMPTY_WARNING' => 'Ju lutemi selektoni fajll *.bpm valid.',
  'LBL_PMSE_PROCESS_DEFINITION_IMPORT_SUCCESS' => 'Definimet e procesit u importuan me sukses në sistem.',
  'LBL_PMSE_PROCESS_DEFINITION_IMPORT_TEXT' => 'Automatikisht krijo regjistrim të definimeve të reja të procesit duke importuar *.bpm fajli nga sistemi juaj i fajllave.',
  'LBL_PMSE_SAVE_DESIGN_BUTTON_LABEL' => 'Ruaj dhe dizajno',
  'LBL_PMSE_UPDATERFIELD_VARIABLES_LIST_TITLE' => '%MODULE% fusha',
  'LBL_PRJ_MODULE' => 'Moduli i synimit',
  'LBL_PRJ_STATUS' => 'Statusi',
  'LNK_LIST' => 'Shiko definimet e procesit',
);
