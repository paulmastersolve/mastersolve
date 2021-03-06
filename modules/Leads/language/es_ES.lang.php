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
  'ERR_DELETE_RECORD' => 'Debe especificar un número de registro a eliminar.',
  'LBL_ACCOUNT_DESCRIPTION' => 'Descripción de la Cuenta',
  'LBL_ACCOUNT_ID' => 'ID Cuenta',
  'LBL_ACCOUNT_NAME' => 'Nombre de cuenta:',
  'LBL_ACTIVITIES_COPY' => 'Copiar actividad a',
  'LBL_ACTIVITIES_COPY_HELP' => 'Selecciona el o los resgistros para cada copia creada de las actividades de los Clientes Potenciales. Las nuevas Tareas, Llamadas, Reuniones y Notas serán creadas para cada registro seleccionado. Los Emails se relacionarán con los registros seleccionados.',
  'LBL_ACTIVITIES_MOVE' => 'Mover actividad a',
  'LBL_ACTIVITIES_MOVE_HELP' => 'Seleccione los registros de actividad que quiera mover de los clientes potenciales. Tareas, llamadas, reuniones, notas y correos electrónicos que serán trasladados al registro seleccionado.',
  'LBL_ACTIVITIES_SUBPANEL_TITLE' => 'Actividades',
  'LBL_ADDRESS_INFORMATION' => 'Direcciones',
  'LBL_ADD_BUSINESSCARD' => 'Añadir Tarjeta de Visita',
  'LBL_ALTERNATE_ADDRESS' => 'Dirección alternativa:',
  'LBL_ALT_ADDRESS_CITY' => 'Ciudad de dirección alternativa',
  'LBL_ALT_ADDRESS_COUNTRY' => 'País de dirección alternativa',
  'LBL_ALT_ADDRESS_POSTALCODE' => 'CP de dirección alternativa',
  'LBL_ALT_ADDRESS_STATE' => 'Estado/Provincia de dirección alternativa',
  'LBL_ALT_ADDRESS_STREET' => 'Calle de dirección alternativa',
  'LBL_ALT_ADDRESS_STREET_2' => 'Calle de dirección alternativa 2',
  'LBL_ALT_ADDRESS_STREET_3' => 'Calle de dirección alternativa 3',
  'LBL_ANY_ADDRESS' => 'Cualquier dirección:',
  'LBL_ANY_EMAIL' => 'Cualquier Email:',
  'LBL_ANY_PHONE' => 'Cualquier teléfono:',
  'LBL_ASSIGNED_TO_ID' => 'Usuario Asignado:',
  'LBL_ASSIGNED_TO_NAME' => 'Asignado a',
  'LBL_ASSISTANT' => 'Asistente',
  'LBL_ASSISTANT_PHONE' => 'Tel. Asistente',
  'LBL_BACKTOLEADS' => 'Volver a Cliente Potenciales',
  'LBL_BIRTHDATE' => 'Cumpleaños:',
  'LBL_BUSINESSCARD' => 'Convertir Cliente Potencial',
  'LBL_CAMPAIGN' => 'Campaña:',
  'LBL_CAMPAIGNS' => 'Campañas',
  'LBL_CAMPAIGNS_SUBPANEL_TITLE' => 'Campañas',
  'LBL_CAMPAIGN_ID' => 'Id de Campaña',
  'LBL_CAMPAIGN_LEAD' => 'Campañas',
  'LBL_CAMPAIGN_LIST_SUBPANEL_TITLE' => 'Campañas',
  'LBL_CITY' => 'Ciudad:',
  'LBL_CLICK_TO_RETURN' => 'Volver al Portal',
  'LBL_CONTACT' => 'Cliente Potencial:',
  'LBL_CONTACT_ID' => 'ID Contacto',
  'LBL_CONTACT_INFORMATION' => 'Visión General',
  'LBL_CONTACT_NAME' => 'Nombre del cliente potencial:',
  'LBL_CONTACT_OPP_FORM_TITLE' => 'Cliente Potencial-Oportunidad:',
  'LBL_CONTACT_ROLE' => 'Rol:',
  'LBL_CONVERTED' => 'Convertido',
  'LBL_CONVERTED_ACCOUNT' => 'Cuenta Convertida:',
  'LBL_CONVERTED_CONTACT' => 'Contacto Convertido:',
  'LBL_CONVERTED_OPP' => 'Oportunidad Convertida:',
  'LBL_CONVERTLEAD' => 'Convertir Cliente Potencial',
  'LBL_CONVERTLEAD_BUTTON_KEY' => 'V',
  'LBL_CONVERTLEAD_ERROR' => 'No es posible convertir el cliente potencial',
  'LBL_CONVERTLEAD_FILE_WARN' => 'Ha convertido de forma satisfactoria el cliente potencial {{leadName}}, pero existe un problema cargando los adjuntos en uno o más registros',
  'LBL_CONVERTLEAD_SUCCESS' => 'Ha convertido de forma satisfactoria el cliente potencial {{leadName}}',
  'LBL_CONVERTLEAD_TITLE' => 'Convertir Cliente Potencial [Alt+V]',
  'LBL_CONVERTLEAD_WARNING' => 'Aviso: El estado del Cliente Potencial que está a punto de convertir es "Convertido". Es posible que ya se haya creado algún registros de tipo Contacto y/o Cuenta a partir de este Cliente Potencial. Si desea continuar con la conversión del Cliente Potencial, haga clic en Guardar. Para volver al Cliente Potencial sin realizar la conversión, haga clic en Cancelar.',
  'LBL_CONVERTLEAD_WARNING_INTO_RECORD' => 'Posible Contacto:',
  'LBL_CONVERT_ACCESS_DENIED' => 'No dispone de permisos de edición de los módulos involucrados en la conversión de un cliente potencial: {{requiredModulesMissing}}',
  'LBL_CONVERT_ADD_MODULE' => 'Agregar Módulo',
  'LBL_CONVERT_ASSOCIATED_MODULE' => 'Asociado {{moduleName}}',
  'LBL_CONVERT_ASSOCIATE_MODULE' => 'Asociar {{moduleName}}',
  'LBL_CONVERT_BACK_TO_DUPLICATES' => 'Volver a los duplicados',
  'LBL_CONVERT_BUTTON_LABEL' => 'Convertir',
  'LBL_CONVERT_COPY' => 'Copiar Datos',
  'LBL_CONVERT_CREATE_NEW' => 'Nuevo {{moduleName}}',
  'LBL_CONVERT_DELETE' => 'Eliminar',
  'LBL_CONVERT_DUPLICATES_FOUND' => '{{duplicateCount}} duplicados encontrados',
  'LBL_CONVERT_EDIT' => 'Editar',
  'LBL_CONVERT_EDIT_LAYOUT' => 'Editar Diseño de Conversión',
  'LBL_CONVERT_FINDING_DUPLICATES' => 'Buscando duplicados...',
  'LBL_CONVERT_IGNORE_DUPLICATES' => 'Ignorar y crear nuevo',
  'LBL_CONVERT_MODULE_ASSOCIATED' => '{{moduleName}} Asociado',
  'LBL_CONVERT_MODULE_ASSOCIATED_NEW_SUCCESS' => 'Has asociado {{moduleNameLower}} {{recordName}} sin embargo no será creado hasta que termines y guardes.',
  'LBL_CONVERT_MODULE_ASSOCIATED_SUCCESS' => 'Has asociado {{moduleNameLower}} {{recordName}} sin embargo no será vinculado hasta que termines y guardes.',
  'LBL_CONVERT_MODULE_NAME' => 'Módulo',
  'LBL_CONVERT_MODULE_NAME_SINGULAR' => 'Módulo',
  'LBL_CONVERT_PANEL_OPTIONAL' => '(opcional)',
  'LBL_CONVERT_REQUIRED' => 'Requerido',
  'LBL_CONVERT_RESET_PANEL' => 'Restablecer',
  'LBL_CONVERT_SELECT' => 'Permitir Selección',
  'LBL_CONVERT_SWITCH_TO_CREATE' => 'Crear Nuevo',
  'LBL_CONVERT_SWITCH_TO_SEARCH' => 'Buscar',
  'LBL_COPY_TIP' => 'Si está seleccionado, los campos del cliente potencial serán copiados a campos con el mismo nombre en los registros recién creados.',
  'LBL_COUNTRY' => 'País:',
  'LBL_CREATE' => 'Crear',
  'LBL_CREATED' => 'Creado por',
  'LBL_CREATED_ACCOUNT' => 'Creada una nueva cuenta',
  'LBL_CREATED_CALL' => 'Creada una nueva llamada',
  'LBL_CREATED_CONTACT' => 'Creado un nuevo contacto',
  'LBL_CREATED_ID' => 'Creado por Id',
  'LBL_CREATED_MEETING' => 'Creada una nueva reunión',
  'LBL_CREATED_NEW' => 'Ha creado un nuevo',
  'LBL_CREATED_OPPORTUNITY' => 'Creada una nueva oportunidad',
  'LBL_CREATED_USER' => 'Usuario Creado',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Clientes Potenciales',
  'LBL_DELETE_TIP' => 'Quitar este módulo del diseño de conversión.',
  'LBL_DEPARTMENT' => 'Departamento:',
  'LBL_DESCRIPTION' => 'Descripción:',
  'LBL_DESCRIPTION_INFORMATION' => 'Información adicional',
  'LBL_DNB_BAL_PREVIEW' => 'Vista Previa de Clientes Potenciales',
  'LBL_DNB_BAL_RSLT_CNT' => 'Clientes Potenciales',
  'LBL_DNB_BAL_RSLT_HEADER' => 'D&B: Información de Clientes Potenciales',
  'LBL_DNB_PRINCIPAL_ID' => 'ID Principal de D&B',
  'LBL_DO_NOT_CALL' => 'No llamar:',
  'LBL_DUPLICATE' => 'Clientes potenciales similares',
  'LBL_EDITLAYOUT' => 'Editar diseño',
  'LBL_EDIT_INLINE' => 'Editar',
  'LBL_EDIT_TIP' => 'Modificar el diseño de conversión para este módulo.',
  'LBL_EMAIL_ADDRESS' => 'Correo electrónico:',
  'LBL_EMAIL_OPT_OUT' => 'Rehusar Email:',
  'LBL_ENTERDATE' => 'Introducir fecha',
  'LBL_EXISTING_ACCOUNT' => 'Usada una cuenta existente',
  'LBL_EXISTING_CONTACT' => 'Usado un contacto existente',
  'LBL_EXISTING_OPPORTUNITY' => 'Usada una oportunidad existente',
  'LBL_EXPORT_ASSIGNED_USER_ID' => 'ID Usuario asignado',
  'LBL_EXPORT_ASSIGNED_USER_NAME' => 'Usuario asignado',
  'LBL_EXPORT_CREATED_BY' => 'Creado por ID',
  'LBL_EXPORT_EMAIL2' => 'Otra Dirección de Email',
  'LBL_EXPORT_MODIFIED_USER_ID' => 'Modificado por ID',
  'LBL_EXPORT_PHONE_MOBILE' => 'Móvil',
  'LBL_FAX_PHONE' => 'Fax:',
  'LBL_FILTER_LEADS_REPORTS' => 'Informes de Clientes Potenciales',
  'LBL_FIRST_NAME' => 'Nombre:',
  'LBL_FULL_NAME' => 'Nombre Completo:',
  'LBL_HELP_CONVERT' => 'Sugar ele permite convertir {{plural_module_name}} en {{contacts_module}}, {{accounts_module}}, y otros módulos cuando el {{module_name}} cumple sus criterios de cualificación.

Pase a través de cada módulo modificando los campos y confirmando los valores de nuevos registros haciendo clic haciendo clic en cada botón Asociar. 

Si Sugar detecta un registro existente que coincide con la información de su {{module_name}}, tiene la opción de elegir el duplicado y confirmar la selección con el botón Asociar o hacer clic en "Ignorar y crear nuevos" y proceder normalmente.

Tras confirmar cada módulo necesario y deseado, haga clic en el botón Guardar y Convertir en la parte superior para finalizar la conversión.',
  'LBL_HELP_CONVERT_TITLE' => 'Convertir a {{module_name}}',
  'LBL_HELP_CREATE' => 'El módulo {{plural_module_name}} se compone por personas individuales que son clientes potenciales y pueden estar interesados ​​en un producto o servicio que su empresa proporciona. Una vez el {{module_name}}  es cualificado como una {{opportunity_module}} de venta, podrá ser convertido a {{contact_module}}, {{account_module}}, {{opportunity_module}}, u otro registro.

Para crear un {{module_name}}:
1. Proporcione valores para los campos que desee.
 - Los campos marcados como "Obligatorio" se deben completar antes de guardar.
 - Haga clic en "Mostrar más" para ver los campos adicionales si es necesario.
2. Haga clic en "Guardar" para finalizar el nuevo registro y volver a la página previa. 
 - Seleccione la opción "Guardar y ver" para abrir el nuevo {{module_name}} como vista de registro.
 - Seleccione la opción "Guardar y crear nuevo" para crear un nuevo {{module_name}} inmediatamente.',
  'LBL_HELP_RECORD' => 'El módulo {{plural_module_name}} consiste clientes potenciales quienes pueden estar interesados en un producto o servicio que ofrezca tu empresa.

- Edita el registro haciendo clic en el campo individual o el botón Editar. 
- Ver o modificar enlaces a otros registros en los subpanales yendo a la pestaña "Ver Datos".
- Comentar o ver otros comentarios de usuarios y ver el historial del registro en {{activitystream_singular_module}} yendo a "Actividades Recientes".
- Seguir o guardar como favorito el registro utilizando los iconos a la izquierda del nombre del registro. 
- Acciones adicionales están disponibles en el botón desplegable Acciones.',
  'LBL_HELP_RECORDS' => 'El módulo {{plural_module_name}} se compone por personas individuales que son clientes potenciales y pueden estar interesados ​​en un producto o servicio que su empresa proporciona. Cuando el {{module_name}} es cualificado como una {{opportunity_module}} de venta, los {{plural_module_name}} podrán ser convertidos a {{contacts_module}}, {{opportunities_module}}, y {{accounts_module}}. Hay varias maneras de crear {{plural_module_name}} en Sugar como por ejemplo a través del módulo {{plural_module_name}}, duplicando, importando {{plural_module_name}}, etc. Cuando el registro {{module_name}} se ha creado, podrá ver y editar la información relacionada con el {{module_name}} mediante la vista de registros de {{plural_module_name}}.',
  'LBL_HISTORY_SUBPANEL_TITLE' => 'Historial',
  'LBL_HOME_PHONE' => 'Tel. casa:',
  'LBL_IMPORT_VCARD' => 'Importar vCard',
  'LBL_IMPORT_VCARDTEXT' => 'Automaticamente crea un nuevo cliente potencial importando una vCard.',
  'LBL_IMPORT_VCARD_SUCCESS' => 'El cliente potencial se ha creado de forma correcta desde la vCard',
  'LBL_INVALID_EMAIL' => 'Email No Váildo:',
  'LBL_INVITEE' => 'Informadores',
  'LBL_LAST_NAME' => 'Apellidos:',
  'LBL_LEAD_SOURCE' => 'Toma de contacto:',
  'LBL_LEAD_SOURCE_DESCRIPTION' => 'Descripción de toma de contacto:',
  'LBL_LIST_ACCEPT_STATUS' => 'Aceptar Estato',
  'LBL_LIST_ACCOUNT_NAME' => 'Cuenta',
  'LBL_LIST_ASSIGNED_TO_NAME' => 'Usuario Asignado',
  'LBL_LIST_CONTACT_NAME' => 'Contacto',
  'LBL_LIST_CONTACT_ROLE' => 'Rol',
  'LBL_LIST_DATE_ENTERED' => 'Creado',
  'LBL_LIST_EMAIL_ADDRESS' => 'Email',
  'LBL_LIST_FIRST_NAME' => 'Nombre',
  'LBL_LIST_FORM_TITLE' => 'Lista de Clientes Potenciales',
  'LBL_LIST_LAST_NAME' => 'Apellidos',
  'LBL_LIST_LEAD_SOURCE' => 'Toma de Contacto',
  'LBL_LIST_LEAD_SOURCE_DESCRIPTION' => 'Descripción de Toma de Contacto',
  'LBL_LIST_MY_LEADS' => 'Mis Clientes Potenciales',
  'LBL_LIST_NAME' => 'Nombre',
  'LBL_LIST_PHONE' => 'Teléfono',
  'LBL_LIST_REFERED_BY' => 'Referido por',
  'LBL_LIST_STATUS' => 'Estado',
  'LBL_LIST_TITLE' => 'Cargo',
  'LBL_LOADING' => 'Cargando ...',
  'LBL_MESSAGE' => 'Por favor, introduzca sus datos a continuación. Se creará la información y/o cuenta para usted, pendiente de aprobación.',
  'LBL_MKTO_ID' => 'ID del Lead de Marketo',
  'LBL_MKTO_LEAD_SCORE' => 'Clasificación del Lead',
  'LBL_MKTO_SYNC' => 'Sincronización con Marketo®',
  'LBL_MOBILE_PHONE' => 'Móvil:',
  'LBL_MODIFIED' => 'Modificado por',
  'LBL_MODIFIED_ID' => 'Modificado por Id',
  'LBL_MODIFIED_USER' => 'Usuario Modificado',
  'LBL_MODULE_NAME' => 'Clientes Potenciales',
  'LBL_MODULE_NAME_SINGULAR' => 'Cliente Potencial',
  'LBL_MODULE_TIP' => 'Módulo en el que crear un nuevo registro.',
  'LBL_MODULE_TITLE' => 'Clientes Potenciales: Inicio',
  'LBL_NAME' => 'Nombre:',
  'LBL_NEW_FORM_TITLE' => 'Nuevo Cliente Potencial',
  'LBL_NEW_PORTAL_PASSWORD' => 'Nueva Contraseña del Portal:',
  'LBL_NOTES_SUBPANEL_TITLE' => 'Notas',
  'LBL_NOTICE_OLD_LEAD_CONVERT_OVERRIDE' => 'Aviso: La pantalla actual de Convertir Cliente Potencial contiene campos personalizados. Cuando personalice por primera vez la pantalla de Convertir Cliente Potencial en el Estudio, tendrá que añadir los campos personalizados al diseño, según sea necesario. Los campos personalizados no aparecerán automáticamente en el diseño como lo hacían antes.',
  'LBL_OFFICE_PHONE' => 'Tel. Oficina:',
  'LBL_OPPORTUNITIES_SUBPANEL_TITLE' => 'Oportunidades',
  'LBL_OPPORTUNITY_AMOUNT' => 'Cantidad de la Oportunidad:',
  'LBL_OPPORTUNITY_ID' => 'ID Oportunidad',
  'LBL_OPPORTUNITY_NAME' => 'Nombre de la Oportunidad:',
  'LBL_OPP_NAME' => 'Nombre de la Oportunidad:',
  'LBL_OTHER_EMAIL_ADDRESS' => 'Email Alternativo:',
  'LBL_OTHER_PHONE' => 'Tel. Alternativo:',
  'LBL_PHONE' => 'Teléfono:',
  'LBL_PHONE_FAX' => 'Fax oficina',
  'LBL_PHONE_HOME' => 'Teléfono de casa',
  'LBL_PHONE_MOBILE' => 'Móvil',
  'LBL_PHONE_OTHER' => 'Otro teléfono',
  'LBL_PHONE_WORK' => 'Teléfono del trabajo',
  'LBL_PORTAL_ACTIVE' => 'Portal Activo:',
  'LBL_PORTAL_APP' => 'Aplicación del Portal',
  'LBL_PORTAL_INFORMATION' => 'Información del Portal',
  'LBL_PORTAL_NAME' => 'Nombre del Portal:',
  'LBL_PORTAL_PASSWORD_ISSET' => 'Contraseña del Portal Establecida:',
  'LBL_POSTAL_CODE' => 'Código postal:',
  'LBL_PRIMARY_ADDRESS' => 'Dirección principal:',
  'LBL_PRIMARY_ADDRESS_CITY' => 'Ciudad de dirección principal',
  'LBL_PRIMARY_ADDRESS_COUNTRY' => 'País de dirección principal',
  'LBL_PRIMARY_ADDRESS_POSTALCODE' => 'CP de dirección principal',
  'LBL_PRIMARY_ADDRESS_STATE' => 'Estado/Provincia de dirección principal',
  'LBL_PRIMARY_ADDRESS_STREET' => 'Calle de dirección principal',
  'LBL_PRIMARY_ADDRESS_STREET_2' => 'Calle de dirección principal 2',
  'LBL_PRIMARY_ADDRESS_STREET_3' => 'Calle de dirección principal 3',
  'LBL_PROSPECT_LIST' => 'Público Objetivo',
  'LBL_RECORD_SAVED_SUCCESS' => 'Ha creado de forma satisfactoria el {{moduleSingularLower}} <a href="#{{buildRoute model=this}}">{{full_name}}</a>.',
  'LBL_REFERED_BY' => 'Referido por:',
  'LBL_REGISTRATION' => 'Registro',
  'LBL_REPORTS_FROM' => 'Informes de:',
  'LBL_REPORTS_TO' => 'Informa a:',
  'LBL_REPORTS_TO_ID' => 'Informa a ID',
  'LBL_REQUIRED_TIP' => 'Debe seleccionar o crear los módulos requeridos antes de que el cliente potencial pueda ser convertido.',
  'LBL_SALUTATION' => 'Saludo',
  'LBL_SAVED' => 'Gracias por registrarse. Su cuenta será creada y se pondrán en contacto con usted en breve.',
  'LBL_SAVE_CONVERT_BUTTON_LABEL' => 'Guardar y Convertir',
  'LBL_SEARCH_FORM_TITLE' => 'Búsqueda de Clientes Potenciales',
  'LBL_SELECT' => '<b>O</b> Seleccionar',
  'LBL_SELECTION_TIP' => 'Los módulos con un campo relacionado en Contactos pueden ser seleccionados en lugar de creados durante el proceso de conversión del cliente potencial.',
  'LBL_SELECT_CHECKED_BUTTON_LABEL' => 'Seleccionar Clientes Potenciales Marcados',
  'LBL_SELECT_CHECKED_BUTTON_TITLE' => 'Seleccionar Clientes Potenciales Marcados',
  'LBL_SERVER_IS_CURRENTLY_UNAVAILABLE' => 'Disculpe, el servidor no está disponible en estos momentos. Por favor, inténtelo de nuevo más tarde.',
  'LBL_STATE' => 'Estado/Provincia:',
  'LBL_STATUS' => 'Estado:',
  'LBL_STATUS_DESCRIPTION' => 'Descripción estado:',
  'LBL_STREET' => 'Calle',
  'LBL_TARGET_BUTTON_KEY' => 'T',
  'LBL_TARGET_BUTTON_LABEL' => 'Objetivo',
  'LBL_TARGET_BUTTON_TITLE' => 'Objetivo',
  'LBL_TARGET_OF_CAMPAIGNS' => 'Campaña Existosa:',
  'LBL_THANKS_FOR_SUBMITTING_LEAD' => 'Gracias por la información.',
  'LBL_TITLE' => 'Cargo:',
  'LBL_UNCONVERTED' => 'No Convertido',
  'LBL_VCARD' => 'vCard',
  'LBL_VIEW_FORM_TITLE' => 'Vista de Clientes Potenciales',
  'LBL_WEBSITE' => 'Sitio Web',
  'LNK_IMPORT_LEADS' => 'Importar Clientes Potenciales',
  'LNK_IMPORT_VCARD' => 'Nuevo Cliente Potencial desde vCard',
  'LNK_LEAD_LIST' => 'Ver Clientes Potenciales',
  'LNK_LEAD_REPORTS' => 'Ver Informes de Clientes Potenciales',
  'LNK_NEW_ACCOUNT' => 'Nueva Cuenta',
  'LNK_NEW_APPOINTMENT' => 'Nueva Cita',
  'LNK_NEW_CALL' => 'Registrar Llamada',
  'LNK_NEW_CASE' => 'Nuevo Caso',
  'LNK_NEW_CONTACT' => 'Nuevo Contacto',
  'LNK_NEW_LEAD' => 'Nuevo Cliente Potencial',
  'LNK_NEW_MEETING' => 'Programar Reunión',
  'LNK_NEW_NOTE' => 'Nueva Nota',
  'LNK_NEW_OPPORTUNITY' => 'Nueva Oportunidad',
  'LNK_NEW_TASK' => 'Nueva Tarea',
  'LNK_SELECT_ACCOUNTS' => '<b>O</b> Seleccione una Cuenta',
  'LNK_SELECT_CONTACTS' => '<b>O</b> Seleccione un Contacto',
  'NTC_COPY_ALTERNATE_ADDRESS' => 'Copiar dirección alternativa a dirección principal',
  'NTC_COPY_PRIMARY_ADDRESS' => 'Copiar dirección principal a dirección alternativa',
  'NTC_DELETE_CONFIRMATION' => '¿Está seguro de que desea eliminar este registro?',
  'NTC_OPPORTUNITY_REQUIRES_ACCOUNT' => 'La creación de una oportunidad requiere una cuenta.\\n Por favor, o bien cree una nueva o seleccione una existente.',
  'NTC_REMOVE_CONFIRMATION' => '¿Está seguro de que desea quitar este cliente potencial del caso?',
  'NTC_REMOVE_DIRECT_REPORT_CONFIRMATION' => '¿Está seguro que quiere quitar este registro como informador?',
  'TPL_BROWSER_SUGAR7_RECORDS_TITLE' => '{{module}} &raquo; {{appId}}',
  'TPL_BROWSER_SUGAR7_RECORD_TITLE' => '{{#if last_name}}{{#if first_name}}{{first_name}} {{/if}}{{last_name}} &raquo; {{/if}}{{module}} &raquo; {{appId}}',
  'db_account_name' => 'LBL_LIST_ACCOUNT_NAME',
  'db_email1' => 'LBL_LIST_EMAIL_ADDRESS',
  'db_email2' => 'LBL_LIST_EMAIL_ADDRESS',
  'db_first_name' => 'LBL_LIST_FIRST_NAME',
  'db_last_name' => 'LBL_LIST_LAST_NAME',
  'db_title' => 'LBL_LIST_TITLE',
);

