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
  'ERR_DELETE_RECORD' => 'Duhet përcaktuar numrin e regjistrimit për të fshirë llogarinë',
  'LBL_ACCEPT' => 'Prano',
  'LBL_ACCEPT_THIS' => 'Prano?',
  'LBL_COLON' => ':',
  'LBL_CONTACT_NAME' => 'Emri i kontaktit',
  'LBL_DATE' => 'Data e nisjes',
  'LBL_DATE_TIME' => 'Data dhe ora e nisjes',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Aktivitetet e hapura',
  'LBL_DELETE_ACTIVITY' => 'Jeni të sigurt që dëshironi ta fshini këtë aktivitet?',
  'LBL_DESCRIPTION' => 'Përshkrim',
  'LBL_DESCRIPTION_INFORMATION' => 'Informacioni përshkrues',
  'LBL_DIRECTION' => 'Drejtimi',
  'LBL_DURATION' => 'Kohëzgjatja',
  'LBL_DURATION_MINUTES' => 'minutat e zgjatjes',
  'LBL_HISTORY' => 'Historia',
  'LBL_HOURS_MINS' => '(orët/minutat)',
  'LBL_INVITEE' => 'Të ftuarit',
  'LBL_LIST_ASSIGNED_TO_NAME' => 'Përdorues i caktuar',
  'LBL_LIST_CLOSE' => 'Mbyll:',
  'LBL_LIST_CONTACT' => 'Kontakt',
  'LBL_LIST_DATE' => 'Data',
  'LBL_LIST_DIRECTION' => 'Drejtimi',
  'LBL_LIST_DUE_DATE' => 'Data e caktuar',
  'LBL_LIST_FORM_TITLE' => 'lista e aktiviteteve',
  'LBL_LIST_LAST_MODIFIED' => 'Ndryshimi i fundit',
  'LBL_LIST_RELATED_TO' => 'në lidhje me',
  'LBL_LIST_STATUS' => 'Statusi',
  'LBL_LIST_SUBJECT' => 'subjekti',
  'LBL_LIST_TIME' => 'Ora e nisjes',
  'LBL_LOCATION' => 'Lokacioni',
  'LBL_MEETING' => 'Mbledhje',
  'LBL_MODULE_NAME' => 'Aktivitetet',
  'LBL_MODULE_NAME_SINGULAR' => 'Aktivitetet',
  'LBL_MODULE_TITLE' => 'Aktivitetet: Ballina',
  'LBL_NEW_NOTE_BUTTON_KEY' => 'T',
  'LBL_NEW_NOTE_BUTTON_LABEL' => 'Krijo shënim ose bashkëngjitje',
  'LBL_NEW_NOTE_BUTTON_TITLE' => 'Krijo shënim ose bashkëngjitje',
  'LBL_NEW_TASK_BUTTON_KEY' => 'N',
  'LBL_NEW_TASK_BUTTON_LABEL' => 'Krijo detyrë',
  'LBL_NEW_TASK_BUTTON_TITLE' => 'Krijo detyrë [Alt+N]',
  'LBL_OPEN_ACTIVITIES' => 'Hap aktivitetet',
  'LBL_SCHEDULE_CALL_BUTTON_KEY' => 'C',
  'LBL_SCHEDULE_CALL_BUTTON_LABEL' => 'Thirje identifikuese',
  'LBL_SCHEDULE_CALL_BUTTON_TITLE' => 'Thirje identifikuese',
  'LBL_SCHEDULE_MEETING_BUTTON_KEY' => 'M',
  'LBL_SCHEDULE_MEETING_BUTTON_LABEL' => 'Cakto mbledhje',
  'LBL_SCHEDULE_MEETING_BUTTON_TITLE' => 'Cakto mbledhje',
  'LBL_SEARCH_FORM_TITLE' => 'Kerkim i aktiviteteve',
  'LBL_STATUS' => 'Statusi',
  'LBL_SUBJECT' => 'Subjekti',
  'LBL_TIME' => 'Ora e nisjes',
  'LBL_TODAY' => 'Përmes',
  'LBL_TRACK_EMAIL_BUTTON_KEY' => 'K',
  'LBL_TRACK_EMAIL_BUTTON_LABEL' => 'Emaili i arkivuar',
  'LBL_TRACK_EMAIL_BUTTON_TITLE' => 'Emaili i arkivuar',
  'LBL_UPCOMING' => 'Takimet e mia të ardhëshme',
  'LNK_CALL_LIST' => 'Shiko thirjet',
  'LNK_EMAIL_LIST' => 'shiko emailet',
  'LNK_IMPORT_CALLS' => 'Thirje të rëndësishme',
  'LNK_IMPORT_MEETINGS' => 'Mbledhje të rëndësishme',
  'LNK_IMPORT_NOTES' => 'Shënime të rëndësishme',
  'LNK_IMPORT_TASKS' => 'Detyra të rëndësishme',
  'LNK_MEETING_LIST' => 'shiko mbledhjet',
  'LNK_NEW_APPOINTMENT' => 'Takim i ri',
  'LNK_NEW_CALL' => 'thirja identifikuese',
  'LNK_NEW_EMAIL' => 'Krijo email të arkivuar',
  'LNK_NEW_MEETING' => 'Orari i mbledhjes',
  'LNK_NEW_NOTE' => 'Krijo shënim ose bashkangjit dokument',
  'LNK_NEW_TASK' => 'Krijo detyrë',
  'LNK_NOTE_LIST' => 'Shiko shënimet',
  'LNK_TASK_LIST' => 'Shiko detyrat',
  'LNK_VIEW_CALENDAR' => 'Shiko kalendarin',
  'NTC_NONE' => 'Asnjëra',
  'NTC_NONE_SCHEDULED' => 'Asnjë planifikim',
  'NTC_REMOVE_INVITEE' => 'A jeni të sigurt që dëshironi të fshini këtë  të ftuar nga mbledhja?',
  'appointment_filter_dom' => 
  array (
    'last next_month' => 'Muajin e ardhshëm',
    'last this_month' => 'Në fund të këtij muaji<br />Këtë muaj',
    'next Saturday' => 'Të shtunën e ardhëshme<br />Javën e ardhëshme',
    'this Saturday' => 'Këtë të shtunë<br />Këtë javë',
    'today' => 'Sot',
    'tomorrow' => 'Nesër',
  ),
);
