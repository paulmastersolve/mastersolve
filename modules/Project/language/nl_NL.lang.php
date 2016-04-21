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
  'CONTACT_REMOVE_PROJECT_CONFIRM' => 'Weet je zeker dat je de relatie tussen deze Persoon en dit Project wilt verwijderen?',
  'ERR_DATE' => 'Ingegeven datum is geen werkdag.',
  'ERR_DURATION' => 'Duur is een geheel getal.',
  'ERR_FINISH_DATE' => 'Einddatum kan niet voor Begindatum liggen.',
  'ERR_IS_EMPTY' => 'Mag niet leeg zijn',
  'ERR_PERCENT_COMPLETE' => '% Voltooid is een waarde tuusen 0 en 100.',
  'ERR_PREDECESSORS_INPUT' => 'Waarden in het voorgangers veld moeten van het formaat \\\\"1\\\\" of \\\\"1,2 \\\\"zijn.',
  'ERR_PREDECESSORS_OUT_OF_RANGE' => 'De waarde in het voorgangersveld is groter dan het aantal rijen',
  'ERR_PREDECESSOR_CYCLE_FAIL' => 'De ingegeven voorganger veroorzaakt een lus.',
  'ERR_PREDECESSOR_IS_PARENT_OR_CHILD_FAIL' => 'De opgegeven voorganger is een bovenliggende taak of een onderliggende taak.',
  'ERR_TASK_NAME_FOR_ROW' => 'Taak naam voor Rij',
  'LBL_ACCOUNTS_SUBPANEL_TITLE' => 'Organisaties',
  'LBL_ACCOUNT_SUBPANEL_TITLE' => 'Organisaties',
  'LBL_ACTIVITIES_SUBPANEL_TITLE' => 'Activiteiten',
  'LBL_ACTIVITIES_TITLE' => 'Activiteiten',
  'LBL_ACTUAL_DURATION' => 'Werkelijke Tijdsduur',
  'LBL_ASSIGNED_USER_ID' => 'Toegewezen aan:',
  'LBL_ASSIGNED_USER_NAME' => 'Toegewezen aan:',
  'LBL_BIWEEK_BUTTON' => '2 Weken',
  'LBL_BUGS_SUBPANEL_TITLE' => 'Bugs',
  'LBL_CASES_SUBPANEL_TITLE' => 'Cases',
  'LBL_COLLAPSE_ALL_BUTTON' => 'Alles openklappen',
  'LBL_CONTACTS_RESOURCE' => 'Contactpersoon Resource',
  'LBL_CONTACTS_SUBPANEL_TITLE' => 'Personen',
  'LBL_CONTACT_SUBPANEL_TITLE' => 'Personen',
  'LBL_COPY_BUTTON' => 'Kopiëren',
  'LBL_CREATED_BY' => 'Aangemaakt Door:',
  'LBL_CUT_BUTTON' => 'Knippen',
  'LBL_DAILY_REPORT' => 'Dagelijkse voortgang',
  'LBL_DATE' => 'Datum:',
  'LBL_DATE_END' => 'Einddatum:',
  'LBL_DATE_ENTERED' => 'Ingevoerd:',
  'LBL_DATE_MODIFIED' => 'Datum gewijzigd:',
  'LBL_DATE_START' => 'Startdatum:',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Projecten',
  'LBL_DELETED' => 'Verwijderd:',
  'LBL_DELETE_BUTTON' => 'Verwijderen',
  'LBL_DESCRIPTION' => 'Beschrijving:',
  'LBL_DURATION' => 'Duur',
  'LBL_DURATION_WIDGET' => 'Duur',
  'LBL_EDITLAYOUT' => 'Wijzig Lay-out',
  'LBL_EDIT_PROJECT_TASKS_TITLE' => 'Wijzig Projecttaken',
  'LBL_EXPAND_ALL_BUTTON' => 'Alles openklappen',
  'LBL_EXPORT_TO_MS_PROJECT' => 'Exporteren naar MS Project',
  'LBL_EXPORT_TO_PDF' => 'Exporteer naar PDF',
  'LBL_FILTER_ALL_TASKS' => 'Alle Taken',
  'LBL_FILTER_COMPLETED_TASKS' => 'Voltooide Taken',
  'LBL_FILTER_DATE_RANGE' => 'Taken binnen datumbereik',
  'LBL_FILTER_DATE_RANGE_FINISH' => 'en voor',
  'LBL_FILTER_DATE_RANGE_START' => 'Taken welke beginnen of eindigen na',
  'LBL_FILTER_INCOMPLETE_TASKS' => 'Open Taken',
  'LBL_FILTER_MILESTONES' => 'Mijlpalen',
  'LBL_FILTER_MY_OVERDUE_TASKS' => 'Mijn achterstallige Taken',
  'LBL_FILTER_MY_TASKS' => 'Mijn Taken',
  'LBL_FILTER_MY_UPCOMING_TASKS' => 'Mijn Geplande Taken (1 week)',
  'LBL_FILTER_RESOURCE' => 'Taken met behulp van Resource',
  'LBL_FILTER_VIEW' => 'Bekijken',
  'LBL_FINISH' => 'Einddatum',
  'LBL_FINISH_WIDGET' => 'Einddatum',
  'LBL_GANTT_ONLY' => 'Strokenplanning',
  'LBL_GRID_GANTT' => 'Net/Strokenplanning',
  'LBL_GRID_ONLY' => 'Netplanning',
  'LBL_HIDE_OPTIONAL_COLUMNS_BUTTON' => 'Verberg optionele Kolommen',
  'LBL_HISTORY_SUBPANEL_TITLE' => 'Historie',
  'LBL_HISTORY_TITLE' => 'Historie',
  'LBL_HOLIDAY' => 'Vakantie-/Feestdag',
  'LBL_HOLIDAYS_SUBPANEL_TITLE' => 'Vakantie- Feestdagen',
  'LBL_HOLIDAYS_TITLE' => 'Vakantie- en feestdagen',
  'LBL_ID' => 'Id:',
  'LBL_INDENT_BUTTON' => 'Inspringen',
  'LBL_INSERTROWS' => 'Rijen Tussenvoegen',
  'LBL_INSERT_BUTTON' => 'Rijen Tussenvoegen',
  'LBL_IS_TEMPLATE' => 'Is sjabloon',
  'LBL_LAST_WEEK' => 'Vorige',
  'LBL_LIST_ASSIGNED_USER_ID' => 'Toegewezen aan',
  'LBL_LIST_DAYS' => 'Dagen',
  'LBL_LIST_END_DATE' => 'Einddatum',
  'LBL_LIST_FILTER_VIEW' => 'Bekijken:',
  'LBL_LIST_FORM_TITLE' => 'Projectenlijst',
  'LBL_LIST_NAME' => 'Naam',
  'LBL_LIST_OPEN_CASES' => 'Openstaande Cases',
  'LBL_LIST_OVERDUE_TASKS' => 'Achterstallige Taken',
  'LBL_LIST_RESOURCE' => 'Resource:',
  'LBL_LIST_TEAM_ID' => 'Team',
  'LBL_LIST_TOTAL_ACTUAL_EFFORT' => 'Totaal Uren Werkelijk',
  'LBL_LIST_TOTAL_ESTIMATED_EFFORT' => 'Totaal Uren Begroot',
  'LBL_LIST_UPCOMING_TASKS' => 'Geplande Taken (1 Week)',
  'LBL_MARK_AS_MILESTONE_BUTTON' => 'Als Mijlpaal instellen',
  'LBL_MODIFIED_USER_ID' => 'Gewijzigde Gebruikers ID:',
  'LBL_MODULE_NAME' => 'Project',
  'LBL_MODULE_NAME_SINGULAR' => 'Project',
  'LBL_MODULE_TITLE' => 'Projecten: Start',
  'LBL_MONTH_BUTTON' => 'Maand',
  'LBL_MORE' => 'Meer...',
  'LBL_MY_PROJECTS' => 'Mijn Projecten',
  'LBL_MY_PROJECTS_DASHBOARD' => 'Mijn Projectendashboard',
  'LBL_MY_PROJECT_TASKS' => 'Mijn Projecttaken',
  'LBL_NAME' => 'Naam:',
  'LBL_NEW_FORM_TITLE' => 'Nieuw Project',
  'LBL_NEXT_WEEK' => 'Volgende',
  'LBL_OPPORTUNITIES' => 'Opportunities',
  'LBL_OPPORTUNITIES_SUBPANEL_TITLE' => 'Opportunities',
  'LBL_OPPORTUNITY_SUBPANEL_TITLE' => 'Opportunities',
  'LBL_OUTDENT_BUTTON' => 'Uitspringen',
  'LBL_PASTE_BUTTON' => 'Plakken',
  'LBL_PDF_PROJECT_NAME' => 'Projectnaam:',
  'LBL_PERCENT_BUSY' => '% Bezet',
  'LBL_PERCENT_COMPLETE' => '% Volooid',
  'LBL_PERCENT_COMPLETE_WIDGET' => '% Voltooid',
  'LBL_PERSONAL_HOLIDAY' => '--Persoonlijke vrije dag--',
  'LBL_POPUP_DATE_FINISH' => 'Einddatum:',
  'LBL_POPUP_DATE_START' => 'Startdatum:',
  'LBL_POPUP_PERCENT_COMPLETE' => '% Voltooid:',
  'LBL_POPUP_RESOURCE_NAME' => 'Resourcenaam:',
  'LBL_PREDECESSORS' => 'Voorgangers',
  'LBL_PREDECESSORS_WIDGET' => 'Voorgangers',
  'LBL_PRIORITY' => 'Prioriteit:',
  'LBL_PRODUCTS_SUBPANEL_TITLE' => 'Geoffreerde producten',
  'LBL_PROJECTRESOURCES_SUBPANEL_TITLE' => 'Project Resources',
  'LBL_PROJECTTASK_SUBPANEL_TITLE' => 'Project Taak',
  'LBL_PROJECT_HOLIDAYS' => 'Vakantie- Feestdag',
  'LBL_PROJECT_HOLIDAYS_TITLE' => 'Niet-werkbare dagen',
  'LBL_PROJECT_INFORMATION' => 'Projecten Overzicht',
  'LBL_PROJECT_NAME' => 'Projectnaam:',
  'LBL_PROJECT_SUBPANEL_TITLE' => 'Projecten',
  'LBL_PROJECT_TASKS_SUBPANEL_TITLE' => 'Project Taak',
  'LBL_PROJECT_TASK_SUBPANEL_TITLE' => 'Project Taak',
  'LBL_PROJECT_TEMPLATE' => 'Projectsjabloon',
  'LBL_PROJECT_TEMPLATES_LIST' => 'Projectsjablonen',
  'LBL_PROJECT_TEMPLATES_TITLE' => 'Projectsjablonen: Start',
  'LBL_PROJECT_TEMPLATE_NAME' => 'Sjabloonnaam:',
  'LBL_QUICK_NEW_PROJECT' => 'Nieuw Project',
  'LBL_QUOTES_SUBPANEL_TITLE' => 'Offertes',
  'LBL_QUOTE_SUBPANEL_TITLE' => 'Offertes',
  'LBL_RECALCULATE_DATES_BUTTON' => 'Herberekenen Data',
  'LBL_REPORT' => 'Rapportage',
  'LBL_RESOURCES_SUBPANEL_TITLE' => 'Resources',
  'LBL_RESOURCE_NAME' => 'Resourcenaam',
  'LBL_RESOURCE_NAMES' => 'Resource',
  'LBL_RESOURCE_NAMES_WIDGET' => 'Resource',
  'LBL_RESOURCE_REPORT' => 'Rapportage Resources',
  'LBL_RESOURCE_TYPE' => 'Type Resource',
  'LBL_RLI_SUBPANEL_TITLE' => 'Opportunityregels',
  'LBL_SAVE_AS_NEW_PROJECT_BUTTON' => 'Opslaan als nieuw Project',
  'LBL_SAVE_AS_NEW_TEMPLATE_BUTTON' => 'Opslaan als nieuw sjabloon',
  'LBL_SAVE_AS_PROJECT' => 'Opslaan als Project',
  'LBL_SAVE_AS_TEMPLATE' => 'Opslaan als sjabloon',
  'LBL_SAVE_BUTTON' => 'Opslaan',
  'LBL_SAVE_TEMPLATE_BUTTON_LABEL' => 'Opslaan als sjabloon',
  'LBL_SAVE_TEMPLATE_BUTTON_TITLE' => 'Opslaan als sjabloon',
  'LBL_SEARCH_FORM_TITLE' => 'Projecten Zoeken',
  'LBL_SHOW_OPTIONAL_COLUMNS_BUTTON' => 'Toon optionele Kolommen',
  'LBL_START' => 'Startdatum',
  'LBL_START_WIDGET' => 'Startdatum',
  'LBL_STATUS' => 'Status:',
  'LBL_TASK_ID' => 'Taak ID',
  'LBL_TASK_ID_WIDGET' => 'Taak ID',
  'LBL_TASK_NAME' => 'Taaknaam',
  'LBL_TASK_NAME_WIDGET' => 'Taakomschrijving:',
  'LBL_TEAM_ID' => 'Team:',
  'LBL_TEMPLATE_NAME' => 'Sjabloonnaam:',
  'LBL_TOTAL_ACTUAL_EFFORT' => 'Totaal Uren Werkelijk:',
  'LBL_TOTAL_ESTIMATED_EFFORT' => 'Totaal Uren Begroot:',
  'LBL_UNMARK_AS_MILESTONE_BUTTON' => 'Als Mijlpaal verwijderen',
  'LBL_USER_RESOURCE' => 'Gebruikersresource',
  'LBL_VIEW_GANTT_TITLE' => 'Bekijk Gantt',
  'LBL_VIEW_TASK_DETAILS_BUTTON' => 'Bekijk Details Taken',
  'LBL_WEEK_BUTTON' => 'Week',
  'LNK_NEW_PROJECT' => 'Nieuw Project',
  'LNK_NEW_PROJECT_TASK' => 'Nieuwe Projecttaak',
  'LNK_NEW_PROJECT_TEMPLATES' => 'Nieuw Projectsjabloon',
  'LNK_PROJECT_DASHBOARD' => 'Bekijk Mijn Projectendashboard',
  'LNK_PROJECT_LIST' => 'Bekijk Projecten Lijst',
  'LNK_PROJECT_RESOURCE_REPORT' => 'Resources rapportage',
  'LNK_PROJECT_TASKS_DASHBOARD' => 'Mijn Projecttakendashboard',
  'LNK_PROJECT_TASK_LIST' => 'Bekijk Project Taak',
  'LNK_PROJECT_TEMPLATES_LIST' => 'Bekijk Projectsjablonen',
  'NTC_ASSIGN_RIGHT_TEAM' => 'Zorg ervoor dat alle projectresources lid zijn van dit team.',
  'NTC_DELETE_TASK_AND_SUBTASKS' => 'Weet u het zeker dat u deze taak en alle onderliggende taken wilt verwijderen?',
  'NTC_NO_ACTIVE_PROJECTS' => 'U heeft geen actieve Projecten of Projecttaken.',
);

