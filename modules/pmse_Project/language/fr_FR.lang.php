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
  'LBL_MODULE_NAME' => 'Définitions des processus',
  'LBL_MODULE_NAME_SINGULAR' => 'Définition de processus',
  'LBL_MODULE_TITLE' => 'Définitions des processus',
  'LBL_PMSE_ADAM_DESIGNER_ACTION' => 'Action',
  'LBL_PMSE_ADAM_DESIGNER_COMMENT' => 'Commentaire',
  'LBL_PMSE_ADAM_DESIGNER_DOCUMENTS' => 'Documents',
  'LBL_PMSE_ADAM_DESIGNER_DOCUMENT_START_EVENT' => 'Evènement sur un document',
  'LBL_PMSE_ADAM_DESIGNER_END_EVENT' => 'Événement de fin',
  'LBL_PMSE_ADAM_DESIGNER_EXCLUSIVE' => 'Exclusif',
  'LBL_PMSE_ADAM_DESIGNER_EXCLUSIVE_GATEWAY' => 'Passerelle exclusive',
  'LBL_PMSE_ADAM_DESIGNER_LEADS' => 'Leads',
  'LBL_PMSE_ADAM_DESIGNER_LEAD_START_EVENT' => 'Evènement sur un lead',
  'LBL_PMSE_ADAM_DESIGNER_MESSAGE_EVENT' => 'Evènement sur un message',
  'LBL_PMSE_ADAM_DESIGNER_OPPORTUNITY' => 'Affaire',
  'LBL_PMSE_ADAM_DESIGNER_OPPORTUNITY_START_EVENT' => 'Evènement sur une affaire',
  'LBL_PMSE_ADAM_DESIGNER_PARALLEL' => 'Parallèle',
  'LBL_PMSE_ADAM_DESIGNER_PARALLEL_GATEWAY' => 'Passerelle parallèle',
  'LBL_PMSE_ADAM_DESIGNER_RECEIVE_MESSAGE' => 'Réception d&#39;un message',
  'LBL_PMSE_ADAM_DESIGNER_REDO' => 'Réappliquer',
  'LBL_PMSE_ADAM_DESIGNER_SAVE' => 'Sauvegarder',
  'LBL_PMSE_ADAM_DESIGNER_SEND_MESSAGE' => 'Envoi d&#39;un message',
  'LBL_PMSE_ADAM_DESIGNER_TASK' => 'Activité',
  'LBL_PMSE_ADAM_DESIGNER_TEXT_ANNOTATION' => 'Annotation',
  'LBL_PMSE_ADAM_DESIGNER_UNDO' => 'Annuler',
  'LBL_PMSE_ADAM_DESIGNER_USER_TASK' => 'Activité',
  'LBL_PMSE_ADAM_DESIGNER_WAIT' => 'Attente',
  'LBL_PMSE_ADAM_DESIGNER_WAIT_EVENT' => 'Evènement sur une attente',
  'LBL_PMSE_ALL_PROCESS_DEFINITIONS' => 'Toutes les définitions des processus',
  'LBL_PMSE_BPMN_WARNING_LABEL' => 'Erreurs',
  'LBL_PMSE_BPMN_WARNING_PANEL_TITLE' => 'Eléments en erreurs',
  'LBL_PMSE_BPMN_WARNING_SINGULAR_LABEL' => 'Erreur',
  'LBL_PMSE_BUTTON_CANCEL' => 'Annuler',
  'LBL_PMSE_BUTTON_NO' => 'Non',
  'LBL_PMSE_BUTTON_OK' => 'OK',
  'LBL_PMSE_BUTTON_SAVE' => 'Sauvegarder',
  'LBL_PMSE_BUTTON_YES' => 'Oui',
  'LBL_PMSE_CONTEXT_MENU_100' => '100%',
  'LBL_PMSE_CONTEXT_MENU_125' => '125%',
  'LBL_PMSE_CONTEXT_MENU_150' => '150%',
  'LBL_PMSE_CONTEXT_MENU_50' => '50%',
  'LBL_PMSE_CONTEXT_MENU_75' => '75%',
  'LBL_PMSE_CONTEXT_MENU_ACTION' => 'Action',
  'LBL_PMSE_CONTEXT_MENU_ACTION_TYPE' => 'Type d&#39;action',
  'LBL_PMSE_CONTEXT_MENU_ADD_RELATED_RECORD' => 'Ajouter un enregistrement liéé',
  'LBL_PMSE_CONTEXT_MENU_ASSIGN_TEAM' => 'Round Robin',
  'LBL_PMSE_CONTEXT_MENU_ASSIGN_USER' => 'Assigner un utilisateur',
  'LBL_PMSE_CONTEXT_MENU_BUSINESS_RULE' => 'Règle de gestion',
  'LBL_PMSE_CONTEXT_MENU_CHANGE_FIELD' => 'Changer le champ',
  'LBL_PMSE_CONTEXT_MENU_CONVERGING' => 'Convergent',
  'LBL_PMSE_CONTEXT_MENU_CONVERT' => 'Convertir...',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_EVENT' => '(Evènement)',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_FLOW' => 'Flux par défaut',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_GATEWAY' => '(Passerelle)',
  'LBL_PMSE_CONTEXT_MENU_DEFAULT_TASK' => '(Activité)',
  'LBL_PMSE_CONTEXT_MENU_DELETE' => 'Supprimer',
  'LBL_PMSE_CONTEXT_MENU_DIRECTION' => 'Direction...',
  'LBL_PMSE_CONTEXT_MENU_DIVERGING' => 'Divergent',
  'LBL_PMSE_CONTEXT_MENU_DO_NOTHING' => 'Ne rien faire',
  'LBL_PMSE_CONTEXT_MENU_EVENT_BASED_GATEWAY' => 'Passerelle basé sur les évènements',
  'LBL_PMSE_CONTEXT_MENU_EXCLUSIVE_GATEWAY' => 'Passerelle exclusive',
  'LBL_PMSE_CONTEXT_MENU_FORMS' => 'Formulaires...',
  'LBL_PMSE_CONTEXT_MENU_INCLUSIVE_GATEWAY' => 'Passerelle inclue',
  'LBL_PMSE_CONTEXT_MENU_LISTEN' => 'Ecoute',
  'LBL_PMSE_CONTEXT_MENU_NONE' => 'Aucun',
  'LBL_PMSE_CONTEXT_MENU_PARELLEL_GATEWAY' => 'Passerelle parallèle',
  'LBL_PMSE_CONTEXT_MENU_PROCESS_DEFINITION' => 'Définition de processus',
  'LBL_PMSE_CONTEXT_MENU_RECEIVE_MESSAGE' => 'Réception d&#39;un message',
  'LBL_PMSE_CONTEXT_MENU_REFRESH' => 'Rafraîchir',
  'LBL_PMSE_CONTEXT_MENU_RESULT' => 'Résultat',
  'LBL_PMSE_CONTEXT_MENU_SAVE' => 'Sauvegarder',
  'LBL_PMSE_CONTEXT_MENU_SEND_MESSAGE' => 'Envoi d&#39;un message',
  'LBL_PMSE_CONTEXT_MENU_SETTINGS' => 'Paramétrage...',
  'LBL_PMSE_CONTEXT_MENU_TERMINATE_PROCESS' => 'Terminer le processus',
  'LBL_PMSE_CONTEXT_MENU_TIMER' => 'Timer',
  'LBL_PMSE_CONTEXT_MENU_UNASSIGNED' => 'Non assigné',
  'LBL_PMSE_CONTEXT_MENU_USERS' => 'Utilisateurs...',
  'LBL_PMSE_CONTEXT_MENU_ZOOM' => 'Zoom',
  'LBL_PMSE_EMAILPICKER_CURRENT_USER' => 'Utilisateur courant',
  'LBL_PMSE_EMAILPICKER_RECORD_OWNER' => 'Propriétaire de l&#39;enregistrement',
  'LBL_PMSE_EMAILPICKER_RESULTS_TITLE' => '%NUMBER% suggestion(s) pour "%TEXT%"',
  'LBL_PMSE_EMAILPICKER_SUGGESTIONS' => 'Suggestions',
  'LBL_PMSE_EMAILPICKER_SUPERVISOR' => 'Superviseur',
  'LBL_PMSE_EMAILPICKER_TEAMS' => 'Equipes',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_BR' => 'Règle de gestion',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_RESPONSE' => 'Réponse',
  'LBL_PMSE_EXPCONTROL_BUSINESS_RULES_EVALUATION_TITLE' => 'Evaluation des règles de gestion',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC' => 'Chaîne, nombre et boolean',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_BOOLEAN' => 'et boolean',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_NUMBER' => 'et nombre',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_ADD_STRING' => 'et chaîne',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_BASIC_VALUE' => 'Valeur',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_FIXED_DATE' => 'Date fixe',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_FIXED_DATETIME' => 'Date fixe',
  'LBL_PMSE_EXPCONTROL_CONSTANTS_TITLE' => 'Contantes',
  'LBL_PMSE_EXPCONTROL_EVALUATIONS_TITLE' => 'Evaluation',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_FORM' => 'Formulaire',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_STATUS' => 'Statut',
  'LBL_PMSE_EXPCONTROL_FORM_RESPONSE_EVALUATION_TITLE' => 'Evaluation de réponse de formulaire',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_MODULE' => 'Module',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_TITLE' => 'Evaluation de champ du module',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_VALUE' => 'Valeur',
  'LBL_PMSE_EXPCONTROL_MODULE_FIELD_EVALUATION_VARIABLE' => 'Champ',
  'LBL_PMSE_EXPCONTROL_OPERATOR_EQUAL' => 'est égal à',
  'LBL_PMSE_EXPCONTROL_OPERATOR_EQUAL_TEXT' => 'est',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR' => 'est supérieur à',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR_DATE' => 'après',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MAJOR_EQUAL' => 'est supérieur ou égal à',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_EQUAL_THAN' => 'est inférieur ou égal à',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_THAN' => 'est inférieur à',
  'LBL_PMSE_EXPCONTROL_OPERATOR_MINOR_THAN_DATE' => 'avant',
  'LBL_PMSE_EXPCONTROL_OPERATOR_NOT_EQUAL' => 'est différent de',
  'LBL_PMSE_EXPCONTROL_OPERATOR_NOT_EQUAL_TEXT' => 'n&#39;est pas',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_CURRENT' => 'Utilisateur courant',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_ADMIN' => 'est administrateur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_ADMIN' => 'n&#39;est pas administrateur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_ROLE' => 'n&#39;a pas le rôle',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_NOT_USER' => 'n&#39;est pas l&#39;utilisateur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_ROLE' => 'a le rôle',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_IS_USER' => 'est l&#39;utilisateur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_OPERATOR' => 'Opérateur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_OWNER' => 'Propriétaire de l&#39;enregistrement',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_SUPERVISOR' => 'Superviseur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_AMOUNT' => 'Valeur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_DAYS' => 'jours',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_HOURS' => 'heures',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_MINUTES' => 'minutes',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_MONTHS' => 'mois',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_TITLE' => 'Laps de temps',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_UNIT' => 'Unité',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_WEEKS' => 'semaines',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TIMESPAN_YEARS' => 'années',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_TITLE' => 'Evaluation utilisateur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_USER' => 'Utilisateur',
  'LBL_PMSE_EXPCONTROL_USER_EVALUATION_VALUE' => 'Valeur',
  'LBL_PMSE_EXPCONTROL_VARIABLES_PANEL_TITLE' => 'Champs',
  'LBL_PMSE_FORMPANEL_SUBMIT' => 'Envoyer',
  'LBL_PMSE_FORM_LABEL_APPLIES_TO' => 'Appliquer à',
  'LBL_PMSE_FORM_LABEL_ASSIGNMENT_METHOD' => 'Méthode d&#39;assignation',
  'LBL_PMSE_FORM_LABEL_ASSIGN_TO_TEAM' => 'Assigné à l&#39;équipe',
  'LBL_PMSE_FORM_LABEL_ASSIGN_TO_USER' => 'Assigné à l&#39;utilisateur',
  'LBL_PMSE_FORM_LABEL_CRITERIA' => 'Critère',
  'LBL_PMSE_FORM_LABEL_DURATION' => 'Durée',
  'LBL_PMSE_FORM_LABEL_EMAIL_BCC' => 'Cci',
  'LBL_PMSE_FORM_LABEL_EMAIL_CC' => 'Cc',
  'LBL_PMSE_FORM_LABEL_EMAIL_TEMPLATE' => 'Modèle d&#39;email',
  'LBL_PMSE_FORM_LABEL_EMAIL_TO' => 'Pour',
  'LBL_PMSE_FORM_LABEL_EXPECTED_TIME' => 'Durée prévue',
  'LBL_PMSE_FORM_LABEL_FIELDS' => 'Champs',
  'LBL_PMSE_FORM_LABEL_FIXED_DATE' => 'Date fixe',
  'LBL_PMSE_FORM_LABEL_FORM_TYPE' => 'Type de formulaire',
  'LBL_PMSE_FORM_LABEL_GENERAL_SETTINGS' => 'Général',
  'LBL_PMSE_FORM_LABEL_MODULE' => 'Module',
  'LBL_PMSE_FORM_LABEL_OTHER_DERIVATION_OPTIONS' => 'Autre options de routage',
  'LBL_PMSE_FORM_LABEL_READ_ONLY_FIELDS' => 'Champs en lecture seule',
  'LBL_PMSE_FORM_LABEL_RELATED_MODULE' => 'Module associé',
  'LBL_PMSE_FORM_LABEL_REQUIRED_FIELDS' => 'Champs obligatoires',
  'LBL_PMSE_FORM_LABEL_RESPONSE_BUTTONS' => 'Buttons de formulaire',
  'LBL_PMSE_FORM_LABEL_TEAM' => 'Equipe',
  'LBL_PMSE_FORM_LABEL_UNIT' => 'Unité',
  'LBL_PMSE_FORM_LABEL_UPDATE_RECORD_OWNER' => 'Notifier le propriétaire de l&#39;enregistrement',
  'LBL_PMSE_FORM_OPTION_ADMINISTRATOR' => 'Administrateur',
  'LBL_PMSE_FORM_OPTION_APPROVE_REJECT' => 'Approuver / Rejetter',
  'LBL_PMSE_FORM_OPTION_CURRENT_USER' => 'Utilisateur courant',
  'LBL_PMSE_FORM_OPTION_DAYS' => 'Jours',
  'LBL_PMSE_FORM_OPTION_HOURS' => 'Heures',
  'LBL_PMSE_FORM_OPTION_MINUTES' => 'Minutes',
  'LBL_PMSE_FORM_OPTION_RECORD_OWNER' => 'Propriétaire de l&#39;enregistrement',
  'LBL_PMSE_FORM_OPTION_ROUND_ROBIN' => 'Round Robin',
  'LBL_PMSE_FORM_OPTION_ROUTE' => 'Route',
  'LBL_PMSE_FORM_OPTION_SELECT' => 'Sélection...',
  'LBL_PMSE_FORM_OPTION_SELF_SERVICE' => 'Libre service',
  'LBL_PMSE_FORM_OPTION_STATIC_ASSIGNMENT' => 'Assignation statique',
  'LBL_PMSE_FORM_OPTION_SUPERVISOR' => 'Superviseur',
  'LBL_PMSE_FORM_OPTION_TARGET_MODULE' => 'Module cible',
  'LBL_PMSE_FORM_TITLE_ACTIVITY' => 'Activité',
  'LBL_PMSE_FORM_TITLE_ADD_RELATED_RECORD' => 'Ajouter un enregistrement liéé',
  'LBL_PMSE_FORM_TITLE_ASSIGN_TEAM' => 'Round Robin',
  'LBL_PMSE_FORM_TITLE_ASSIGN_USER' => 'Assigner un utilisateur',
  'LBL_PMSE_FORM_TITLE_BUSINESS_RULE' => 'Règle de gestion',
  'LBL_PMSE_FORM_TITLE_CHANGE_FIELDS' => 'Changer les champs',
  'LBL_PMSE_FORM_TITLE_GATEWAY' => 'Passerelle',
  'LBL_PMSE_FORM_TITLE_LABEL_EVENT' => 'Evènement',
  'LBL_PMSE_FORM_TITLE_USER_DEFINITION' => 'Définition utilisateur',
  'LBL_PMSE_FORM_TOOLTIP_DURATION' => 'Définir la durée du timer de l&#39;évènement',
  'LBL_PMSE_FORM_TOOLTIP_EVENT_MODULE' => 'Sélectionner le module Sugar déclenchant l&#39;évènement',
  'LBL_PMSE_IMPORT_BUTTON_LABEL' => 'Importer',
  'LBL_PMSE_IMPORT_PROCESS_DEFINITION_FAILURE' => 'La création de définition de processus à partir du fichier a échoué',
  'LBL_PMSE_LABEL_DELETE' => 'Supprimer',
  'LBL_PMSE_LABEL_DESCRIPTION' => 'Description',
  'LBL_PMSE_LABEL_DESIGN' => 'Modélisation',
  'LBL_PMSE_LABEL_DISABLE' => 'Désactiver',
  'LBL_PMSE_LABEL_ENABLE' => 'Activer',
  'LBL_PMSE_LABEL_EXPORT' => 'Exporter',
  'LBL_PMSE_LABEL_LOCKED_FIELDS' => 'Champs bloqués',
  'LBL_PMSE_LABEL_PROCESS_NAME' => 'Nom du processus',
  'LBL_PMSE_LABEL_RULE' => 'Règle',
  'LBL_PMSE_LABEL_TERMINATE_PROCESS' => 'Terminer le processus',
  'LBL_PMSE_MESSAGE_ACTIVITY_NAME_ALREADY_EXISTS' => 'Le nom "%s" existe déjà dans la famille des formes disponibles.',
  'LBL_PMSE_MESSAGE_ACTIVITY_NAME_EMPTY' => 'Le nom de l&#39;activité est vide.',
  'LBL_PMSE_MESSAGE_CANCEL_CONFIRM' => 'Certain paramètres ont changé. Souhaitez-vous annuler ces changements ?',
  'LBL_PMSE_MESSAGE_ERROR_ACTIVITY_INCOMING' => 'Une activité doit avoir un flux d&#39;entrée',
  'LBL_PMSE_MESSAGE_ERROR_ACTIVITY_OUTGOING' => 'Une activité doit avoir un flux de sortie',
  'LBL_PMSE_MESSAGE_ERROR_ANNOTATION' => 'Une annotation doit avoir une ligne d&#39;association',
  'LBL_PMSE_MESSAGE_ERROR_BOUNDARY_EVENT_OUTGOING' => 'Un événement d&#39;attente de début doit avoir un flux de sortie',
  'LBL_PMSE_MESSAGE_ERROR_END_EVENT_INCOMING' => 'Un événement de fin doit avoir un flux d&#39;entrée',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_CONVERGING_INCOMING' => 'Une passerelle doit avoir au moins deux flux d&#39;entrée',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_CONVERGING_OUTGOING' => 'Une passerelle ne peut pasavoir un seul flux de sortie',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_DIVERGING_INCOMING' => 'Une passerelle peut avoir un ou plusieurs flux d&#39;entrée',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_DIVERGING_OUTGOING' => 'Une passerelle doit avoir au moins deux flux de sortie',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_MIXED_INCOMING' => 'Une passerelle doit avoir au moins deux flux d&#39;entrée',
  'LBL_PMSE_MESSAGE_ERROR_GATEWAY_MIXED_OUTGOING' => 'Une passerelle doit avoir au moins deux flux de sortie',
  'LBL_PMSE_MESSAGE_ERROR_INTERMEDIATE_EVENT_INCOMING' => 'Un événement de fin doit avoir un flux ou plusieurs flux de d&#39;entrée',
  'LBL_PMSE_MESSAGE_ERROR_INTERMEDIATE_EVENT_OUTGOING' => 'Un événement de fin doit avoir un ou plusieurs flux de sortie',
  'LBL_PMSE_MESSAGE_ERROR_START_EVENT_OUTGOING' => 'Un événement de début doit avoir un flux de sortie',
  'LBL_PMSE_MESSAGE_INVALID_CONNECTION' => 'Connexion invalide',
  'LBL_PMSE_MESSAGE_REMOVE_ALL_START_CRITERIA' => 'Le module a changé et par conséquence des critères seront supprimés étant donné qu&#39;il n&#39;y a plus de champs liés à ce module.',
  'LBL_PMSE_MY_PROCESS_DEFINITIONS' => 'Mes définitions de processus',
  'LBL_PMSE_PROCESS_DEFINITIONS_DISABLED' => 'Désactivé',
  'LBL_PMSE_PROCESS_DEFINITIONS_ENABLED' => 'Activé',
  'LBL_PMSE_PROCESS_DEFINITION_EMPTY_WARNING' => 'Veuillez sélectionner un fichier *.bpm valide.',
  'LBL_PMSE_PROCESS_DEFINITION_IMPORT_SUCCESS' => 'La définition de processus a été importé correctement dans le système.',
  'LBL_PMSE_PROCESS_DEFINITION_IMPORT_TEXT' => 'Création automatique d&#39;une nouvelle définition de processus en important un fichier *.bpm depuis votre ordinateur.',
  'LBL_PMSE_SAVE_DESIGN_BUTTON_LABEL' => 'Sauvegarder et modéliser',
  'LBL_PMSE_UPDATERFIELD_VARIABLES_LIST_TITLE' => 'champs du module %MODULE%',
  'LBL_PRJ_MODULE' => 'Module cible',
  'LBL_PRJ_STATUS' => 'Statut',
  'LNK_LIST' => 'Voir les définitions des processus',
);

