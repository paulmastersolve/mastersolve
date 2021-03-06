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
  'ERR_DELETE_RECORD' => 'Πρέπει να προσδιορίσετε αριθμό εγγραφής για να διαγράψετε την προσφορά.',
  'EXCEPTION_QUOTE_ALREADY_CONVERTED' => 'Η Προσφορά Μετατράπηκε Σε Ευκαιρία',
  'LBL_ACCOUNT_ID' => 'Ταυτότητα Λογαριασμού',
  'LBL_ACCOUNT_NAME' => 'Όνομα Λογαριασμού:',
  'LBL_ACTIVITIES_SUBPANEL_TITLE' => 'Δραστηριότητες',
  'LBL_ADDRESS_INFORMATION' => 'Πληροφορίες Διεύθυνσης',
  'LBL_ADD_COMMENT' => 'Προσθήκη Σχολίου',
  'LBL_ADD_GROUP' => 'Προσθήκη Γκρουπ',
  'LBL_ADD_ROW' => 'Προσθήκη Γραμμής',
  'LBL_AMOUNT' => 'Ποσό Προσφοράς:',
  'LBL_AMOUNT_USDOLLAR' => 'Ποσό:',
  'LBL_ANY_ADDRESS' => 'Οποιαδήποτε Διεύθυνση:',
  'LBL_ASSIGNED_TO_ID' => 'Ανατεθειμένος Χειριστής',
  'LBL_ASSIGNED_TO_NAME' => 'Ανατέθηκε σε:',
  'LBL_ATTACHMENT' => 'Επισύναψη',
  'LBL_BILLING_ACCOUNT' => 'Λογαριασμός:',
  'LBL_BILLING_ACCOUNT_NAME' => 'Όνομα Λογαριασμού Τιμολόγησης:',
  'LBL_BILLING_ADDRESS' => 'Διεύθυνση Τιμολόγησης:',
  'LBL_BILLING_ADDRESS_CITY' => 'Διεύθυνση Τιμολόγησης, Πόλη:',
  'LBL_BILLING_ADDRESS_COUNTRY' => 'Διεύθυνση Τιμολόγησης, Χώρα:',
  'LBL_BILLING_ADDRESS_POSTAL_CODE' => 'Διεύθυνση Τιμολόγησης, Τ.Κ:',
  'LBL_BILLING_ADDRESS_STATE' => 'Διεύθυνση Τιμολόγησης, Περιοχή:',
  'LBL_BILLING_ADDRESS_STREET' => 'Διεύθυνση Τιμολόγησης',
  'LBL_BILLING_CONTACT' => 'Επαφή:',
  'LBL_BILLING_CONTACT_ID' => 'Ταυτότητα Επαφής Τιμολόγησης:',
  'LBL_BILLING_CONTACT_NAME' => 'Όνομα Επαφής Τιμολόγησης:',
  'LBL_BILL_TO' => 'Τιμολόγηση σε',
  'LBL_BUNDLE_DISCOUNT' => 'Έκπτωση:',
  'LBL_BUNDLE_NAME' => 'Όνομα Γκρουπ:',
  'LBL_BUNDLE_STAGE' => 'Στάδιο Γκρουπ:',
  'LBL_CALC_GRAND' => 'Εμφάνιση Γενικού Συνόλου:',
  'LBL_CHECK_DATA' => 'Άκυρη εισαγωγή δεδομένων. παρακαλώ να ελέγξετε τα στοιχεία σας και βεβαιωθείτε ότι έχετε έγκυρους αριθμούς (0-9 ή " ";)',
  'LBL_CITY' => 'Πόλη:',
  'LBL_CONTACT_NAME' => 'Όνομα Επαφής:',
  'LBL_CONTACT_QUOTE_FORM_TITLE' => 'Επαφή-Προσφορά:',
  'LBL_CONTACT_ROLE' => 'Ρόλος Επαφής:',
  'LBL_CONTRACTS' => 'Συμβάσεις',
  'LBL_CONTRACTS_SUBPANEL_TITLE' => 'Συμβάσεις',
  'LBL_COUNTRY' => 'Χώρα:',
  'LBL_CREATED_BY' => 'Δημιουργήθηκε Από',
  'LBL_CURRENCY' => 'Νόμισμα:',
  'LBL_CURRENCY_RATE' => 'Ισοτιμία Νομίσματος',
  'LBL_DATE_QUOTE_CLOSED' => 'Πραγματική Ημερομηνία Κλεισίματος',
  'LBL_DATE_QUOTE_EXPECTED_CLOSED' => 'Ισχύει Μέχρι:',
  'LBL_DEAL_TOT' => 'Συνολική Έκπτωση:',
  'LBL_DEAL_TOT_USDOLLAR' => 'σύνολο έκπτωσης (US Δολλάριο)',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Προσφορές',
  'LBL_DELETE_GROUP' => 'Διαγραφή Γκρουπ',
  'LBL_DESCRIPTION' => 'Περιγραφή',
  'LBL_DESCRIPTION_INFORMATION' => 'Περιγραφή Πληροφορίας',
  'LBL_DISCOUNT_TOTAL' => 'Έκπτωση',
  'LBL_DOCUMENTS_SUBPANEL_TITLE' => 'Έγγραφα',
  'LBL_DUPLICATE' => 'Πιθανά Αντίγραφο Καταχώρησης Προσφοράς',
  'LBL_EDITLAYOUT' => 'Επεξεργασία Διάταξης',
  'LBL_EMAIL_ATTACHMENT' => 'Επισύναψη Email',
  'LBL_EMAIL_DEFAULT_DESCRIPTION' => 'Εδώ είναι η προσφορά που ζητήσατε (Μπορείτε να αλλάξετε αυτό το κείμενο)',
  'LBL_EMAIL_QUOTE_FOR' => 'Προσφορά για:',
  'LBL_HISOTRY_SUBPANEL_TITLE' => 'Ιστορικό',
  'LBL_INVITEE' => 'Επαφές',
  'LBL_INVOICE' => 'Τιμολόγιο',
  'LBL_LEAD_SOURCE' => 'Πηγή Προέλευσης:',
  'LBL_LINE_ITEM_INFORMATION' => 'Γραμμή Στοιχείων',
  'LBL_LIST_ACCOUNT_NAME' => 'Όνομα Λογαριασμού',
  'LBL_LIST_AMOUNT' => 'Ποσό Προσφοράς',
  'LBL_LIST_AMOUNT_USDOLLAR' => 'Συνολικό Ποσό',
  'LBL_LIST_ASSIGNED_TO_NAME' => 'Ανατεθειμένος Χειριστής',
  'LBL_LIST_COST_PRICE' => 'Κόστος',
  'LBL_LIST_DATE_QUOTE_CLOSED' => 'Πραγματική Ημερομηνία Κλεισίματος',
  'LBL_LIST_DATE_QUOTE_EXPECTED_CLOSED' => 'Ισχύει Μέχρι',
  'LBL_LIST_DEAL_TOT' => 'Έκπτωση',
  'LBL_LIST_DISCOUNT_PRICE' => 'Τιμή Μονάδας',
  'LBL_LIST_FORM_TITLE' => 'Λίστα Προσφοράς',
  'LBL_LIST_GRAND_TOTAL' => 'Γενικό Σύνολο',
  'LBL_LIST_LIST_PRICE' => 'Λίστα',
  'LBL_LIST_MANUFACTURER_PART_NUM' => 'Αριθμός Κατατσκευαστή',
  'LBL_LIST_MY_QUOTES' => 'Προσφορές Μου',
  'LBL_LIST_PRICING_FACTOR' => 'Συντελεστής',
  'LBL_LIST_PRICING_FORMULA' => 'Υπόδειγμα Τιμολόγησης',
  'LBL_LIST_PRODUCT_NAME' => 'Γραμμή Εισηγμένων Ειδών',
  'LBL_LIST_QUANTITY' => 'Ποσότητα',
  'LBL_LIST_QUOTE_NAME' => 'Θέμα',
  'LBL_LIST_QUOTE_NUM' => 'Αριθμός:',
  'LBL_LIST_QUOTE_STAGE' => 'Στάδιο',
  'LBL_LIST_TAXCLASS' => 'Κατηγορία Φόρου:',
  'LBL_MODIFIED_BY' => 'Τροποποιήθηκε Από',
  'LBL_MODULE_NAME' => 'Προσφορές',
  'LBL_MODULE_NAME_SINGULAR' => 'Προσφορά',
  'LBL_MODULE_TITLE' => 'Προσφορές: Αρχή',
  'LBL_NAME' => 'Όνομα Προσφοράς',
  'LBL_NEW_FORM_TITLE' => 'Δημιουργία Προσφοράς',
  'LBL_NEW_SUB' => 'Εκπτωτικό Υποσύνολο:',
  'LBL_NEXT_STEP' => 'Επόμενο Βήμα:',
  'LBL_NON_TAXABLE' => 'Μη-Φορολογήσιμος',
  'LBL_OPPORTUNITY_NAME' => 'Όνομα Ευκαιρίας:',
  'LBL_ORDER_STAGE' => 'Στάδιο Παραγγελίας',
  'LBL_ORIGINAL_PO_DATE' => 'Ημερομηνία Εν. Παραγ.:',
  'LBL_PAYMENT_TERMS' => 'Όροι Πληρωμής:',
  'LBL_PDF_BILLING_ADDRESS' => 'Τιμολόγηση Σε',
  'LBL_PDF_CURRENCY' => 'Νόμισμα:',
  'LBL_PDF_DISCOUNT' => 'Έκπτωση:',
  'LBL_PDF_GRAND_TOTAL' => 'Γενικό Σύνολο',
  'LBL_PDF_INVOICE_NUMBER' => 'Αριθμός Τιμολογίου',
  'LBL_PDF_INVOICE_TITLE' => 'Τιμολόγιο',
  'LBL_PDF_ITEM_DISCOUNT' => 'Έκπτωση',
  'LBL_PDF_ITEM_EXT_PRICE' => 'Εξωτ.Τιμή',
  'LBL_PDF_ITEM_LIST_PRICE' => 'Τιμοκατάλογος',
  'LBL_PDF_ITEM_PRODUCT' => 'Γραμμή Εισηγμένων Ειδών',
  'LBL_PDF_ITEM_QUANTITY' => 'Ποσότητα',
  'LBL_PDF_ITEM_SELECT_DISCOUNT' => ' ',
  'LBL_PDF_ITEM_UNIT_PRICE' => 'Τιμή Μονάδας',
  'LBL_PDF_NEW_SUB' => 'Εκπτωτικό Υποσύνολο:',
  'LBL_PDF_PART_NUMBER' => 'Αριθμός Παραγωγής:',
  'LBL_PDF_QUOTE_CLOSE' => 'Ισχύει Μέχρι:',
  'LBL_PDF_QUOTE_DATE' => 'Ημερομηνία:',
  'LBL_PDF_QUOTE_NUMBER' => 'Αριθμός Προσφοράς:',
  'LBL_PDF_QUOTE_TITLE' => 'Προσφορά',
  'LBL_PDF_SALES_PERSON' => 'Πωλητής:',
  'LBL_PDF_SHIPPING' => 'Παράδοση:',
  'LBL_PDF_SHIPPING_ADDRESS' => 'Παράδοση Σε',
  'LBL_PDF_SHIPPING_COMPANY' => 'Πάροχος Παράδοσης:',
  'LBL_PDF_SUBTOTAL' => 'Υποσύνολο:',
  'LBL_PDF_TAX' => 'Φόρος:',
  'LBL_PDF_TAX_RATE' => 'Φορολογικό Ποσοστό:',
  'LBL_PDF_TOTAL' => 'Σύνολο:',
  'LBL_POSTAL_CODE' => 'Τ.Κ:',
  'LBL_PROJECTS_SUBPANEL_TITLE' => 'Έργα',
  'LBL_PROJECT_SUBPANEL_TITLE' => 'Έργα',
  'LBL_PROPOSAL' => 'Προσφορά',
  'LBL_PURCHASE_ORDER_NUM' => 'Αριθμός Εντολής Αγοράς:',
  'LBL_QUOTE' => 'Προσφορά:',
  'LBL_QUOTE_INFORMATION' => 'Επισκόπηση',
  'LBL_QUOTE_LAYOUT_DOES_NOT_EXIST_ERROR' => 'προσφορά αρχείου διάταξης δεν υπάρχει: $layout',
  'LBL_QUOTE_LAYOUT_REGISTERED_ERROR' => 'προσφορά διάταξης δεν είναι καταχωρημένη στις modules/Quotes/Layouts.php',
  'LBL_QUOTE_NAME' => 'Θέμα Προσφοράς:',
  'LBL_QUOTE_NUM' => 'Αριθμός Προσφοράς:',
  'LBL_QUOTE_STAGE' => 'Στάδιο Προσφοράς:',
  'LBL_QUOTE_TYPE' => 'Τύπος Προσφοράς',
  'LBL_REMOVE_COMMENT' => 'Αφαίρεση Σχολίου',
  'LBL_REMOVE_ROW' => 'Αφαίρεση Γραμμής',
  'LBL_RENAME_ERROR' => 'ΛΑΘΟΣ: Δεν μπορεί να αφαιρέσει το pdf $προορισμό. Πρέπει να προσπαθήσετε να φτιάξετε τον κατάλογο εγγράψιμο από τον διακομιστή webserver',
  'LBL_REVENUELINEITEMS' => 'Γραμμή Εσόδων Ειδών',
  'LBL_SALES_STAGE' => 'Στάδιο Πώλησης:',
  'LBL_SEARCH_FORM_TITLE' => 'Αναζήτηση Προσφοράς',
  'LBL_SHIPPING' => 'Παράδοση:',
  'LBL_SHIPPING_ACCOUNT' => 'Λογαριασμός:',
  'LBL_SHIPPING_ACCOUNT_NAME' => 'Όνομα Λογαριασμού Παράδοσης:',
  'LBL_SHIPPING_ADDRESS' => 'Διεύθυνση Παράδοσης:',
  'LBL_SHIPPING_ADDRESS_CITY' => 'Διεύθυνση Παράδοσης, Πόλη:',
  'LBL_SHIPPING_ADDRESS_COUNTRY' => 'Διεύθυνση Παράδοσης, Χώρα:',
  'LBL_SHIPPING_ADDRESS_POSTAL_CODE' => 'Διεύθυνση Παράδοσης, Τ.Κ:',
  'LBL_SHIPPING_ADDRESS_STATE' => 'Διεύθυνση Παράδοσης, Περιοχή:',
  'LBL_SHIPPING_ADDRESS_STREET' => 'Διεύθυνση Παράδοσης:',
  'LBL_SHIPPING_CONTACT' => 'Επαφή:',
  'LBL_SHIPPING_CONTACT_ID' => 'Ταυτότητα Επαφής Παράδοσης:',
  'LBL_SHIPPING_CONTACT_NAME' => 'Όνομα Επαφής Παράδοσης:',
  'LBL_SHIPPING_PROVIDER' => 'Πάροχος Παράδοσης:',
  'LBL_SHIPPING_USDOLLAR' => 'Παράδοση (US Δολλάριο)',
  'LBL_SHIP_TO' => 'Παράδοση σε',
  'LBL_SHOW_LINE_NUMS' => 'Εμφάνιση Αριθμών Γραμμής:',
  'LBL_STATE' => 'Περιοχή:',
  'LBL_SUBTOTAL' => 'Υποσύνολο:',
  'LBL_SUBTOTAL_USDOLLAR' => 'Υποσύνολο (US Δολλάριο)',
  'LBL_SYSTEM_ID' => 'Ταυτότητα Συστήματος',
  'LBL_TAX' => 'Φόρος:',
  'LBL_TAXABLE' => 'Φορολογήσιμος',
  'LBL_TAXRATE' => 'Φορολογικό Ποσοστό:',
  'LBL_TAX_USDOLLAR' => 'Φόρος (US Δολλάριο)',
  'LBL_TOTAL' => 'Σύνολο:',
  'LBL_TOTAL_USDOLLAR' => 'Σύνολο (US Δολλάριο)',
  'LBL_TYPE' => 'Τύπος:',
  'LNK_NEW_QUOTE' => 'Δημιουργία Προσφοράς',
  'LNK_QUOTE_LIST' => 'Προβολή Προσφορών',
  'LNK_QUOTE_REPORTS' => 'Προβολή Αναφορών Προσφορών',
  'MSG_DUPLICATE' => 'Δημιουργείτε ένα αντίγραφο προσφοράς. Μπορείτε είτε να επιλέξετε μία προσφορά από την παρακάτω λίστα, είτε μπορείτε να πατήσετε το κουμπί "Αποθήκευση" για να αναπαραγάγετε την προσφορά.',
  'NTC_COPY_BILLING_ADDRESS' => 'Αντιγραφή της διεύθυνσης τιμολόγησης στη διεύθυνση παράδοσης',
  'NTC_COPY_BILLING_ADDRESS2' => 'Αντιγραφή στην παράδοση',
  'NTC_COPY_SHIPPING_ADDRESS' => 'Αντιγραφή της διεύθυνσης παράδοσης στη διεύθυνση τιμολόγησης',
  'NTC_COPY_SHIPPING_ADDRESS2' => 'Αντιγραφή στην τιμολόγηση',
  'NTC_OVERWRITE_ADDRESS_PHONE_CONFIRM' => 'Αυτή η εγγραφή περιέχει τρέχουσες τιμές στα πεδία Διευθύνσεων. Για να επανεγγράψετε αυτές τις τιμές με την ακόλουθη διεύθυνση του λογαριασμου που επιλέξατε, πατήστε το κουμπί "Εντάξει". Για να κρατήσετε τις τρέχουσες τιμές, πατήστε το κουμπί "Ακύρωση".',
  'NTC_REMOVE_COMMENT_CONFIRMATION' => 'Είστε βέβαιοι ότι θέλετε να αφαιρέσετε αυτό το σχόλιο από την προσφορά;',
  'NTC_REMOVE_GROUP_CONFIRMATION' => 'Είστε βέβαιοι ότι θέλετε να αφαιρέσετε αυτό το γκρουπ από την προσφορά;',
  'NTC_REMOVE_PRODUCT_CONFIRMATION' => 'Είστε βέβαιοι ότι θέλετε να αφαιρέσετε αυτό το στοιχείο γραμμής από την προσφορά;',
  'NTC_REMOVE_QUOTE_CONFIRMATION' => 'Είστε βέβαιοι ότι θέλετε να αφαιρέσετε την επαφή από την προσφορά;',
  'QUOTE_REMOVE_PROJECT_CONFIRM' => 'Είστε βέβαιοι ότι θέλετε να αφαιρέσετε αυτήν την προσφορά από το έργο;',
);

