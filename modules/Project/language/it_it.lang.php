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
  'CONTACT_REMOVE_PROJECT_CONFIRM' => 'Sei sicuro di voler rimuovere questo contatto dal progetto?',
  'ERR_DATE' => 'La data specificata cade in un giorno non lavorativo.',
  'ERR_DURATION' => 'La durata deve essere un numero intero.',
  'ERR_FINISH_DATE' => 'Data Fine non può risultare prima della Data Inizio.',
  'ERR_IS_EMPTY' => 'non può essere vuoto.',
  'ERR_PERCENT_COMPLETE' => '% Completamento deve avere un valore tra 0 e 100.',
  'ERR_PREDECESSORS_INPUT' => 'I valori inseriti nei campi Predecessori devono essere nella forma di "1" o "1,2"',
  'ERR_PREDECESSORS_OUT_OF_RANGE' => 'Il valore specificato nel campo Predecessore è maggiore del numero delle righe.',
  'ERR_PREDECESSOR_CYCLE_FAIL' => 'Il predecessore specificato causa un ciclo di dipendenza.',
  'ERR_PREDECESSOR_IS_PARENT_OR_CHILD_FAIL' => 'Il predecessore specificato è o un compito padre o un sotto-compito.',
  'ERR_TASK_NAME_FOR_ROW' => 'Nome Compito per Fila',
  'LBL_ACCOUNTS_SUBPANEL_TITLE' => 'Aziende',
  'LBL_ACCOUNT_SUBPANEL_TITLE' => 'Aziende',
  'LBL_ACTIVITIES_SUBPANEL_TITLE' => 'Attività',
  'LBL_ACTIVITIES_TITLE' => 'Attività',
  'LBL_ACTUAL_DURATION' => 'Durata Attuale',
  'LBL_ASSIGNED_USER_ID' => 'Assegnato a:',
  'LBL_ASSIGNED_USER_NAME' => 'Assegnato a:',
  'LBL_BIWEEK_BUTTON' => '2 Settimane',
  'LBL_BUGS_SUBPANEL_TITLE' => 'Bugs',
  'LBL_CASES_SUBPANEL_TITLE' => 'Reclami',
  'LBL_COLLAPSE_ALL_BUTTON' => 'Comprimi Tutto',
  'LBL_CONTACTS_RESOURCE' => 'Risorsa Contatto',
  'LBL_CONTACTS_SUBPANEL_TITLE' => 'Contatti',
  'LBL_CONTACT_SUBPANEL_TITLE' => 'Contatti',
  'LBL_COPY_BUTTON' => 'Copia',
  'LBL_CREATED_BY' => 'Creato Da:',
  'LBL_CUT_BUTTON' => 'Taglia',
  'LBL_DAILY_REPORT' => 'Report Giornaliero',
  'LBL_DATE' => 'Data',
  'LBL_DATE_END' => 'Data Fine:',
  'LBL_DATE_ENTERED' => 'Data Inserimento:',
  'LBL_DATE_MODIFIED' => 'Data Modifica:',
  'LBL_DATE_START' => 'Data Inizio:',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Progetti',
  'LBL_DELETED' => 'Cancellato:',
  'LBL_DELETE_BUTTON' => 'Cancella',
  'LBL_DESCRIPTION' => 'Descrizione:',
  'LBL_DURATION' => 'Durata',
  'LBL_DURATION_WIDGET' => 'durata',
  'LBL_EDITLAYOUT' => 'Modifica Layout',
  'LBL_EDIT_PROJECT_TASKS_TITLE' => 'Modifica Compiti di Progetto',
  'LBL_EXPAND_ALL_BUTTON' => 'Espandi Tutto',
  'LBL_EXPORT_TO_MS_PROJECT' => 'Esposta in MS Progetto',
  'LBL_EXPORT_TO_PDF' => 'Esporta in PDF',
  'LBL_FILTER_ALL_TASKS' => 'Tutti i Compiti',
  'LBL_FILTER_COMPLETED_TASKS' => 'Compiti Completati',
  'LBL_FILTER_DATE_RANGE' => 'Compiti in un Intervallo di tempo specifico',
  'LBL_FILTER_DATE_RANGE_FINISH' => 'e prima',
  'LBL_FILTER_DATE_RANGE_START' => 'Compiti che iniziano o finiscono dopo',
  'LBL_FILTER_INCOMPLETE_TASKS' => 'Compiti non Completati',
  'LBL_FILTER_MILESTONES' => 'Compiti Fondamentali',
  'LBL_FILTER_MY_OVERDUE_TASKS' => 'I miei Compiti Scaduti',
  'LBL_FILTER_MY_TASKS' => 'I miei Compiti',
  'LBL_FILTER_MY_UPCOMING_TASKS' => 'I miei Prossimi Compiti (1 Settimana)',
  'LBL_FILTER_RESOURCE' => 'Compiti usando la Risorsa',
  'LBL_FILTER_VIEW' => 'Visualizza',
  'LBL_FINISH' => 'Fine',
  'LBL_FINISH_WIDGET' => 'data_fine',
  'LBL_GANTT_ONLY' => 'Gantt',
  'LBL_GRID_GANTT' => 'Griglia/Gantt',
  'LBL_GRID_ONLY' => 'Griglia',
  'LBL_HIDE_OPTIONAL_COLUMNS_BUTTON' => 'Nascondi Colonne Opzionali',
  'LBL_HISTORY_SUBPANEL_TITLE' => 'Cronologia',
  'LBL_HISTORY_TITLE' => 'Cronologia',
  'LBL_HOLIDAY' => 'Festività',
  'LBL_HOLIDAYS_SUBPANEL_TITLE' => 'Festività',
  'LBL_HOLIDAYS_TITLE' => 'Festività',
  'LBL_ID' => 'Id:',
  'LBL_INDENT_BUTTON' => 'Indent',
  'LBL_INSERTROWS' => 'Inserire Righe',
  'LBL_INSERT_BUTTON' => 'Inserire Righe',
  'LBL_IS_TEMPLATE' => 'E´ un modello',
  'LBL_LAST_WEEK' => 'Precedente',
  'LBL_LIST_ASSIGNED_USER_ID' => 'Assegnato A:',
  'LBL_LIST_DAYS' => 'giorni',
  'LBL_LIST_END_DATE' => 'Data Fine',
  'LBL_LIST_FILTER_VIEW' => 'Visualizza:',
  'LBL_LIST_FORM_TITLE' => 'Visualizza Progetti',
  'LBL_LIST_NAME' => 'Nome',
  'LBL_LIST_OPEN_CASES' => 'Reclami Aperti',
  'LBL_LIST_OVERDUE_TASKS' => 'Compiti Scaduti',
  'LBL_LIST_RESOURCE' => 'Risorse:',
  'LBL_LIST_TEAM_ID' => 'Gruppo',
  'LBL_LIST_TOTAL_ACTUAL_EFFORT' => 'Totale Sforzo Effettivo (ore)',
  'LBL_LIST_TOTAL_ESTIMATED_EFFORT' => 'Totale Sforzo Stimato (ore)',
  'LBL_LIST_UPCOMING_TASKS' => 'Prossimi Compiti (1 Settimana)',
  'LBL_MARK_AS_MILESTONE_BUTTON' => 'Segna come Compito Fondamentale',
  'LBL_MODIFIED_USER_ID' => 'ID Utente Modificato:',
  'LBL_MODULE_NAME' => 'Progetto',
  'LBL_MODULE_NAME_SINGULAR' => 'Progetto',
  'LBL_MODULE_TITLE' => 'Progetti: Home',
  'LBL_MONTH_BUTTON' => 'Mese',
  'LBL_MORE' => 'Per saperne di più...',
  'LBL_MY_PROJECTS' => 'I miei Progetti',
  'LBL_MY_PROJECTS_DASHBOARD' => 'Dashboard dei miei Progetti',
  'LBL_MY_PROJECT_TASKS' => 'Compiti del Mio Progetto',
  'LBL_NAME' => 'Nome:',
  'LBL_NEW_FORM_TITLE' => 'Nuovo Progetto',
  'LBL_NEXT_WEEK' => 'Prossima',
  'LBL_OPPORTUNITIES' => 'Opportunità',
  'LBL_OPPORTUNITIES_SUBPANEL_TITLE' => 'Opportunità',
  'LBL_OPPORTUNITY_SUBPANEL_TITLE' => 'Opportunità',
  'LBL_OUTDENT_BUTTON' => 'Outdent',
  'LBL_PASTE_BUTTON' => 'Incolla',
  'LBL_PDF_PROJECT_NAME' => 'Nome Progetto:',
  'LBL_PERCENT_BUSY' => '% Occupato',
  'LBL_PERCENT_COMPLETE' => '% Completo',
  'LBL_PERCENT_COMPLETE_WIDGET' => 'percentuale_completamento',
  'LBL_PERSONAL_HOLIDAY' => '-- Ferie Personali--',
  'LBL_POPUP_DATE_FINISH' => 'Data Fine:',
  'LBL_POPUP_DATE_START' => 'Data Inizio:',
  'LBL_POPUP_PERCENT_COMPLETE' => '% Completamento:',
  'LBL_POPUP_RESOURCE_NAME' => 'Nome Risorsa:',
  'LBL_PREDECESSORS' => 'Predecessori',
  'LBL_PREDECESSORS_WIDGET' => 'predecessori_',
  'LBL_PRIORITY' => 'Priorità:',
  'LBL_PRODUCTS_SUBPANEL_TITLE' => 'Prodotti',
  'LBL_PROJECTRESOURCES_SUBPANEL_TITLE' => 'Risorse Progetto',
  'LBL_PROJECTTASK_SUBPANEL_TITLE' => 'Compiti di Progetto',
  'LBL_PROJECT_HOLIDAYS' => 'Festività',
  'LBL_PROJECT_HOLIDAYS_TITLE' => 'Gestione Piano Ferie',
  'LBL_PROJECT_INFORMATION' => 'Informazioni Progetto',
  'LBL_PROJECT_NAME' => 'Nome Progetto:',
  'LBL_PROJECT_SUBPANEL_TITLE' => 'Progetti',
  'LBL_PROJECT_TASKS_SUBPANEL_TITLE' => 'Compiti di Progetto',
  'LBL_PROJECT_TASK_SUBPANEL_TITLE' => 'Compiti di Progetto',
  'LBL_PROJECT_TEMPLATE' => 'Modello Progetto',
  'LBL_PROJECT_TEMPLATES_LIST' => 'Elenco Modelli Progetto',
  'LBL_PROJECT_TEMPLATES_TITLE' => 'Modelli Progetti: Home',
  'LBL_PROJECT_TEMPLATE_NAME' => 'Nome Modello:',
  'LBL_QUICK_NEW_PROJECT' => 'Nuovo Progetto',
  'LBL_QUOTES_SUBPANEL_TITLE' => 'Offerte',
  'LBL_QUOTE_SUBPANEL_TITLE' => 'Offerte',
  'LBL_RECALCULATE_DATES_BUTTON' => 'Ri-calcolo Date',
  'LBL_REPORT' => 'Report',
  'LBL_RESOURCES_SUBPANEL_TITLE' => 'Risorse',
  'LBL_RESOURCE_NAME' => 'Nome',
  'LBL_RESOURCE_NAMES' => 'Risorsa',
  'LBL_RESOURCE_NAMES_WIDGET' => 'risorsa',
  'LBL_RESOURCE_REPORT' => 'Report Risorsa',
  'LBL_RESOURCE_TYPE' => 'Tipo',
  'LBL_RLI_SUBPANEL_TITLE' => 'Elementi dell´Opportunità',
  'LBL_SAVE_AS_NEW_PROJECT_BUTTON' => 'Salva come Nuovo Progetto',
  'LBL_SAVE_AS_NEW_TEMPLATE_BUTTON' => 'Salva come Nuovo Modello',
  'LBL_SAVE_AS_PROJECT' => 'Salva come Progetto',
  'LBL_SAVE_AS_TEMPLATE' => 'Salva come Modello',
  'LBL_SAVE_BUTTON' => 'Salva',
  'LBL_SAVE_TEMPLATE_BUTTON_LABEL' => 'Salva come Modello',
  'LBL_SAVE_TEMPLATE_BUTTON_TITLE' => 'Salva come Modello',
  'LBL_SEARCH_FORM_TITLE' => 'Cerca Progetto',
  'LBL_SHOW_OPTIONAL_COLUMNS_BUTTON' => 'Mostra Colonne Opzionali',
  'LBL_START' => 'Inizio',
  'LBL_START_WIDGET' => 'data_inizio',
  'LBL_STATUS' => 'Stato:',
  'LBL_TASK_ID' => 'ID',
  'LBL_TASK_ID_WIDGET' => 'id',
  'LBL_TASK_NAME' => 'Nome Compito',
  'LBL_TASK_NAME_WIDGET' => 'descrizione',
  'LBL_TEAM_ID' => 'Gruppo:',
  'LBL_TEMPLATE_NAME' => 'Nome Modello:',
  'LBL_TOTAL_ACTUAL_EFFORT' => 'Totale Sforzo Effettivo (ore):',
  'LBL_TOTAL_ESTIMATED_EFFORT' => 'Totale Sforzo Stimato (ore):',
  'LBL_UNMARK_AS_MILESTONE_BUTTON' => 'Deseleziona come Compito Fondamentale',
  'LBL_USER_RESOURCE' => 'Risorsa Utente',
  'LBL_VIEW_GANTT_TITLE' => 'Visualizza Gantt',
  'LBL_VIEW_TASK_DETAILS_BUTTON' => 'Visualizza Dettagli Compiti',
  'LBL_WEEK_BUTTON' => 'Settimana',
  'LNK_NEW_PROJECT' => 'Nuovo Progetto',
  'LNK_NEW_PROJECT_TASK' => 'Nuovo Compito di Progetto',
  'LNK_NEW_PROJECT_TEMPLATES' => 'Nuovo Modello Progetto',
  'LNK_PROJECT_DASHBOARD' => 'Visualizza la Dashboard dei miei Progetti',
  'LNK_PROJECT_LIST' => 'Visualizza Progetti',
  'LNK_PROJECT_RESOURCE_REPORT' => 'Report Risorse',
  'LNK_PROJECT_TASKS_DASHBOARD' => 'Dashboard dei miei Compiti di Progetto',
  'LNK_PROJECT_TASK_LIST' => 'Visualizza Compiti di Progetto',
  'LNK_PROJECT_TEMPLATES_LIST' => 'Visualizza Modelli di Progetto',
  'NTC_ASSIGN_RIGHT_TEAM' => 'Assicurarsi che tutti le risorse del progetto siano membri di questo gruppo.',
  'NTC_DELETE_TASK_AND_SUBTASKS' => 'Sei sicuro di voler cancellare questo compito e tutti i suoi sottocompiti?',
  'NTC_NO_ACTIVE_PROJECTS' => 'Non hai nessun progetto attivo o compiti di progetto.',
);

