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
  'ERR_DELETE_RECORD' => 'Per eliminare il prodotto deve essere specificato il numero del record.',
  'LBL_ACCOUNT_ID' => 'ID Azienda',
  'LBL_ACCOUNT_NAME' => 'Nome Azienda:',
  'LBL_ASSET_NUMBER' => 'Numero di cespite:',
  'LBL_ASSIGNED_TO_NAME' => 'Assegnato a:',
  'LBL_ASSIGNED_USER_ID' => 'ID Utente Assegnato',
  'LBL_ASSOCIATED_QUOTE' => 'Oggetto dell´Offerta',
  'LBL_BOOK_VALUE' => 'Valore contabile:',
  'LBL_BOOK_VALUE_DATE' => 'Data del valore contabile:',
  'LBL_BOOK_VALUE_USDOLLAR' => 'Valore contabile (US Dollar):',
  'LBL_CALCULATED_LINE_ITEM_AMOUNT' => 'Importo Calcolato Line Item Quotata',
  'LBL_CAMPAIGN_PRODUCT' => 'Elemento della Campagna Riportato',
  'LBL_CATEGORY' => 'Categoria:',
  'LBL_CATEGORY_NAME' => 'Nome Categoria:',
  'LBL_COMMIT_STAGE' => 'Fase di Conferma',
  'LBL_COMMIT_STAGE_FORECAST' => 'Previsione',
  'LBL_CONTACT' => 'Contatto',
  'LBL_CONTACTS_SUBPANEL_TITLE' => 'Contatti',
  'LBL_CONTACT_ID' => 'ID Contatto',
  'LBL_CONTACT_NAME' => 'Nome Contatto:',
  'LBL_CONTRACTS' => 'Contratti',
  'LBL_CONTRACTS_SUBPANEL_TITLE' => 'Contratti',
  'LBL_CONVERT_TO_QUOTE_ERROR' => 'Errore:',
  'LBL_CONVERT_TO_QUOTE_ERROR_MESSAGE' => 'Si è verificato un errore nella conversione di questa Line Item quotata in Offerta',
  'LBL_COST_PRICE' => 'Costo:',
  'LBL_COST_USDOLLAR' => 'Costo (US Dollar)',
  'LBL_CREATED_USER' => 'Utente Creato',
  'LBL_CURRENCY' => 'Valuta:',
  'LBL_CURRENCY_ID' => 'ID Valuta',
  'LBL_CURRENCY_RATE' => 'Tasso di Valuta',
  'LBL_CURRENCY_SYMBOL_NAME' => 'Nome Simbolo Valuta',
  'LBL_DATE_CLOSED' => 'Data Chiusura Prevista',
  'LBL_DATE_CLOSED_TIMESTAMP' => 'Data Chiusura Prevista Timestamp',
  'LBL_DATE_PURCHASED' => 'Data acquisto:',
  'LBL_DATE_SUPPORT_EXPIRES' => 'Scadenza assistenza:',
  'LBL_DATE_SUPPORT_STARTS' => 'Inizio assistenza:',
  'LBL_DEAL_TOT' => 'Sconto:',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Prodotti',
  'LBL_DESCRIPTION' => 'Descrizione:',
  'LBL_DISCOUNT_AMOUNT' => 'Importo Sconto',
  'LBL_DISCOUNT_AS_PERCENT' => 'Sconto %',
  'LBL_DISCOUNT_PRICE' => 'Prezzo unitario:',
  'LBL_DISCOUNT_PRICE_DATE' => 'Data del prezzo scontato:',
  'LBL_DISCOUNT_RATE' => 'Tariffa scontata',
  'LBL_DISCOUNT_RATE_USDOLLAR' => 'Tariffa scontata (Dollari US)',
  'LBL_DISCOUNT_TOTAL' => 'Sconto',
  'LBL_DISCOUNT_TOTAL_USDOLLAR' => 'Sconto (Dollari US)',
  'LBL_DISCOUNT_USDOLLAR' => 'Sconto (US Dollar)',
  'LBL_DOCUMENTS_SUBPANEL_TITLE' => 'Documenti',
  'LBL_EDITLAYOUT' => 'Modifica Layout',
  'LBL_EXPERT_ID' => 'Esperto di Prodotto',
  'LBL_EXPORT_CURRENCY_ID' => 'ID Valuta',
  'LBL_EXT_PRICE' => 'Prezzo Totale',
  'LBL_FORECAST' => 'Includi nella Previsione',
  'LBL_HELP_CREATE' => 'Il modulo {{plural_module_name}} consiste in tutti i prodotti che sono già stati venduti o che stanno per essere venduti ai clienti. Per creare un {{module_name}}: 
1. Compila i campi con i valori desiderati 
- I campi segnati come "Obbligatorio" devono essere compilati prima del salvataggio. 
- Clicca "Mostra più Moduli" per visualizzare ulteriori campi se necessario. 
2. Clicca "Salva" per salvare il nuovo record e tornare alla pagina precedente. 
- Scegli "Salva e Visualizza" per aprire la vista elenco del nuovo {{module_name}}. 
- Scegli "Salva e crea nuovo" per creare immediatamente un altro nuovo {{module_name}}.',
  'LBL_HELP_RECORD' => 'Il modulo {{plural_module_name}} consiste in tutti i prodotti che sono già stati venduti o che stanno per essere venduti ai clienti. 
- Modifica i campi di questo record cliccando un singolo campo o il pulsante Modifica. 
- Visualizza o modifica i link con gli altri records nel sottopannello agendo sul pulsante "Visualizza dati" in basso a sinistra. 
- Crea e visualizza i commenti dell´utente e la cronologia delle modifiche ai record nel modulo {{activitystream_singular_module}} agendo sul pulsante "Activity Stream" in basso a sinistra. 
- Segui o imposta come preferito questo record usando le icone alla destra del nome del record. 
- Azioni aggiuntive sono disponibili nel menù a tendina Azioni alla destra del pulsante Modifica.',
  'LBL_HELP_RECORDS' => 'Il modulo {{plural_module_name}} consiste in tutti i prodotti che sono già stati venduti o stanno per esse venduti ai clienti. La lista dei prodotti venduti dalla tua azienda sono contenuti in Admin > Catalogo Prodotti e gli amministratori hanno la possibilità di aggiungere prodotti se necessario. Quando si creano {{plural_module_name}}, é possibile selezionare prodotti dal catalogo o creare nuovi prodotti dal modulo {{plural_module_name}}. Ci sono diversi modi per creare {{plural_module_name}} in Sugar come dal modulo {{plural_module_name}}, dal modulo {{quotes_module}}, duplicando un prodotto esistente, importando {{plural_module_name}}, ecc. Una volta che il modulo {{module_name}} è stato creato, puoi visualizzarlo e modificare le sue informazioni dalla maschera del modulo {{plural_module_name}}.',
  'LBL_LEADS_SUBPANEL_TITLE' => 'Lead',
  'LBL_LEAD_SOURCE' => 'Fonte del Lead:',
  'LBL_LIST_ACCOUNT_NAME' => 'Azienda',
  'LBL_LIST_CONTACT_NAME' => 'Nome contatto',
  'LBL_LIST_COST_PRICE' => 'Costo',
  'LBL_LIST_DATE_PURCHASED' => 'Acquistato',
  'LBL_LIST_DISCOUNT_PRICE' => 'Prezzo Scontato',
  'LBL_LIST_FORM_TITLE' => 'Elenco Prodotti',
  'LBL_LIST_LBL_MFT_PART_NUM' => 'Part Numb Prod.',
  'LBL_LIST_LIST_PRICE' => 'Prezzo Listino',
  'LBL_LIST_MANUFACTURER' => 'Produttore',
  'LBL_LIST_NAME' => 'Prodotto',
  'LBL_LIST_PRICE' => 'Prezzo di listino:',
  'LBL_LIST_QUANTITY' => 'Quantità',
  'LBL_LIST_QUOTE_NAME' => 'Nome Offerta',
  'LBL_LIST_STATUS' => 'Stato',
  'LBL_LIST_SUPPORT_EXPIRES' => 'Scad. assist.',
  'LBL_LIST_USDOLLAR' => 'Prezzo di Listino (US Dollar)',
  'LBL_MANUFACTURER' => 'Produttore:',
  'LBL_MANUFACTURERS' => 'Produttori',
  'LBL_MANUFACTURER_NAME' => 'Nome Produttore:',
  'LBL_MEMBER_OF' => 'Membro di:',
  'LBL_MFT_PART_NUM' => 'Codice Prodotto Produttore:',
  'LBL_MODIFIED_USER' => 'Utente Modificato',
  'LBL_MODULE_NAME' => 'Prodotti',
  'LBL_MODULE_NAME_SINGULAR' => 'Prodotto',
  'LBL_MODULE_TITLE' => 'Prodotti: Home',
  'LBL_NAME' => 'Nome',
  'LBL_NEW_FORM_TITLE' => 'Crea Prodotto',
  'LBL_NEXT_STEP' => 'Prossimo Passo:',
  'LBL_NOTES_SUBPANEL_TITLE' => 'Note',
  'LBL_OPPORTUNITY' => 'Opportunità',
  'LBL_OPPORTUNITY_ID' => 'ID Opportunità',
  'LBL_PIPELINE_TOTAL_IS' => 'La Pipeline Totale è',
  'LBL_PRICING_FACTOR' => 'Quoziente di Prezzo',
  'LBL_PRICING_FORMULA' => 'Formula di Pricing:',
  'LBL_PROBABILITY' => 'Probabilità (%)',
  'LBL_PRODUCT' => 'Prodotto:',
  'LBL_PRODUCTS_SUBPANEL_TITLE' => 'Prodotti',
  'LBL_PRODUCT_CATEGORIES' => 'Categorie Prodotto',
  'LBL_PRODUCT_TEMPLATE' => 'Catalogo Prodotto:',
  'LBL_PRODUCT_TEMPLATE_ID' => 'ID Template Prodotto:',
  'LBL_PRODUCT_TYPES' => 'Tipi Prodotto',
  'LBL_PROJECTS_SUBPANEL_TITLE' => 'Progetti',
  'LBL_QUANTITY' => 'Quantità:',
  'LBL_QUOTE' => 'Offerta',
  'LBL_QUOTES_SUBPANEL_TITLE' => 'Offerte',
  'LBL_QUOTE_ID' => 'ID Offerta',
  'LBL_QUOTE_NAME' => 'Nome Offerta:',
  'LBL_RELATED_PRODUCTS' => 'Prodotti Correlati',
  'LBL_RELATED_PRODUCTS_TITLE' => 'Prodotti',
  'LBL_REVENUELINEITEM' => 'Elemento dell´Opportunità',
  'LBL_REVENUELINEITEMS' => 'Elementi dell´Opportunità',
  'LBL_REVENUELINEITEM_ID' => 'ID Elemento dell´Opportunità:',
  'LBL_REVENUELINEITEM_NAME' => 'Nome Elemento dell´Opportunità:',
  'LBL_SALES_STAGE' => 'Fase di Vendita',
  'LBL_SALES_STATUS' => 'Stato Elementi dell´Opportunità',
  'LBL_SEARCH_FORM_TITLE' => 'Ricerca Prodotti',
  'LBL_SELECT_DISCOUNT' => 'Sconto in %',
  'LBL_SERIAL_NUMBER' => 'Numero di serie:',
  'LBL_STATUS' => 'Stato:',
  'LBL_SUBTOTAL' => 'Subtotale',
  'LBL_SUPPORT_CONTACT' => 'Contatto per Assistenza:',
  'LBL_SUPPORT_DESCRIPTION' => 'Support Description:',
  'LBL_SUPPORT_NAME' => 'Titolo Assistenza:',
  'LBL_SUPPORT_TERM' => 'Condizioni assistenza:',
  'LBL_TAX_CLASS' => 'Classe Fiscale:',
  'LBL_TYPE' => 'Tipo:',
  'LBL_URL' => 'URL del prodotto:',
  'LBL_VENDOR_PART_NUM' => 'Codice Prodotto Fornitore:',
  'LBL_WEBSITE' => 'Sito web',
  'LBL_WEIGHT' => 'Peso:',
  'LNK_IMPORT_PRODUCTS' => 'Importa Prodotti',
  'LNK_NEW_PRODUCT' => 'Crea Prodotto',
  'LNK_PRODUCT_LIST' => 'Prodotti',
  'NTC_DELETE_CONFIRMATION' => 'Sei sicuro di voler eliminare questo record ?',
  'NTC_REMOVE_CONFIRMATION' => 'Sei sicuro di voler rimuovere la relazione di questo prodotto?',
);

