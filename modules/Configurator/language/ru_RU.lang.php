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
  'ADVANCED' => 'Расширенные',
  'CURRENT_LOGO' => 'Текущий логотип:',
  'CURRENT_LOGO_HELP' => 'Данный логотип отображается в левом верхнем углу приложения Sugar.',
  'DEFAULT_CURRENCY' => 'Валюта по умолчанию',
  'DEFAULT_CURRENCY_ISO4217' => 'Код валюты - ISO 4217',
  'DEFAULT_CURRENCY_NAME' => 'Валюта',
  'DEFAULT_CURRENCY_SYMBOL' => 'Символ валюты',
  'DEFAULT_DATE_FORMAT' => 'Формат даты по умолчанию',
  'DEFAULT_DECIMAL_SEP' => 'Десятичный разделитель',
  'DEFAULT_LANGUAGE' => 'Язык по умолчанию',
  'DEFAULT_NUMBER_GROUPING_SEP' => 'Символ разделителя разрядов',
  'DEFAULT_OC_STATUS' => 'Активировать Оффлайн клиент по умолчанию',
  'DEFAULT_SYSTEM_SETTINGS' => 'Интерфейс пользователя',
  'DEFAULT_THEME' => 'Тема по умолчанию',
  'DEFAULT_TIME_FORMAT' => 'Формат времени по умолчанию',
  'DEVELOPER_MODE' => 'Режим разработки',
  'DISPLAY_RESPONSE_TIME' => 'Отображать время ответа сервера',
  'ERR_ALERT_FILE_UPLOAD' => 'Произошла ошибка в процессе загрузки изображения.',
  'ERR_DELETE_CORE_FILE' => 'ОШИБКА: Невозможно удалить базовый шрифт.',
  'ERR_EMPTY_SAML_CERT' => 'SAML сертификат не может быть пустым',
  'ERR_EMPTY_SAML_LOGIN' => 'URL-адрес входа SAML не может быть пустым',
  'ERR_EZPDF_DISABLE' => 'Внимание: класс EZPDF исключён из конфигурации таблицы и вместо него установлен класс PDF. Сохраните эту форму, чтобы установить TCPDF в качестве класса PDF и вернуться к стабильному состоянию.',
  'ERR_FONT_ALREADY_EXIST' => 'ОШИБКА: Этот шрифт уже существует. Возврат...',
  'ERR_FONT_EMPTYFILE' => 'ОШИБКА: Имя файла не может быть пустым!',
  'ERR_FONT_FILE_DO_NOT_EXIST' => 'не существует или не является каталогом.',
  'ERR_FONT_MAKEFONT' => 'ОШИБКА: ошибка создания шрифта',
  'ERR_FONT_NOT_WRITABLE' => 'недоступен для записи.',
  'ERR_FONT_UNKNOW_TYPE' => 'ОШИБКА: Неизвестный тип шрифта:',
  'ERR_LOADFONTFILE' => 'ОШИБКА: ошибка загрузки файла шрифта!',
  'ERR_MISSING_CIDINFO' => 'Поле с информацией о CID не может быть пустым.',
  'ERR_NO_CUSTOM_FONT_PATH' => 'ОШИБКА: Путь к индивидуальному шрифту недоступен!',
  'ERR_NO_FONT_PATH' => 'ОШИБКА: Путь к шрифту недоступен!',
  'ERR_PDF_NO_UPLOAD' => 'Произошла ошибка при загрузке шрифта в файл измерений.',
  'ERR_SAML_LOGIN_URL' => 'Недопустимый URL-адрес входа SAML',
  'ERR_SAML_SLO_URL' => 'Недопустимый URL-адрес SLO SAML',
  'HEAD_MAGNIFICATION' => 'Увеличение заголовка',
  'HEAD_MAGNIFICATION_INFO' => 'Фактор увеличения для названий.',
  'IMAGES' => 'Логотипы',
  'JS_ALERT_PDF_WRONG_EXTENSION' => 'Расширение данного файла не подходит.',
  'K_CELL_HEIGHT_RATIO' => 'Коэффициент высоты ячеек',
  'K_CELL_HEIGHT_RATIO_INFO' => 'Если высота ячеек меньше, чем (Font Height x Cell Height Ratio), то (Font Height x Cell Height Ratio) используется в качестве высоты ячеек. (Font Height x Cell Height Ratio) также используется в качестве высоты ячейки, когда высота не задана.',
  'K_SMALL_RATIO' => 'Фактор маленького шрифта',
  'K_SMALL_RATIO_INFO' => 'Фактор уменьшения для маленького шрифта.',
  'K_TITLE_MAGNIFICATION' => 'Увеличение названия',
  'K_TITLE_MAGNIFICATION_INFO' => 'Соблюдение увеличения названия для размера основного шрифта.',
  'LBL_ADDFONTRESULT_TITLE' => 'Результат добавления шрифта',
  'LBL_ADDFONT_TITLE' => 'Добавить шрифт для PDF',
  'LBL_ADD_FONT' => 'Добавить шрифт',
  'LBL_ADD_FONT_BUTTON' => 'Добавить',
  'LBL_ADMIN_WIZARD' => 'Мастер настройки системы',
  'LBL_ALERT_JPG_IMAGE' => 'Файл изображения должен быть в формате JPEG. Загрузите новый файл с расширением .jpg.',
  'LBL_ALERT_SIZE_RATIO' => 'Соотношение сторон изображения должно быть между 1:1 и 10:1. Размер изображения будет изменен.',
  'LBL_ALERT_SIZE_RATIO_QUOTES' => 'Соотношение сторон изображения должно быть между 3:1 и 20:1. Загрузите новый файл.',
  'LBL_ALERT_TYPE_IMAGE' => 'Файл изображения должен быть в формате JPEG или PNG. Загрузите новый файл с расширением .jpg или .png.',
  'LBL_ALL' => 'Все',
  'LBL_ALLOW_DEFAULT_SELECTION' => 'Разрешить пользователям использовать эту учетную запись для исходящих сообщений:',
  'LBL_ALLOW_DEFAULT_SELECTION_HELP' => 'При выборе данной опции все пользователи смогут отправлять электронную почту (включая автоматические уведомления о назначении записей и системные уведомления) с использованием указанного здесь стандартного сервера исходящей почты. В противном случае каждому пользователю при настройке учетной записи электронной почты необходимо вручную ввести настройки сервера исходящей почты.',
  'LBL_ALLOW_USER_TABS' => 'Разрешить пользователям скрывать закладки',
  'LBL_BACK' => 'Назад',
  'LBL_CHOOSE_EMAIL_PROVIDER' => 'Выберите почтовую службу:',
  'LBL_CONFIGURE_SETTINGS_TITLE' => 'Настройка конфигурации',
  'LBL_DELETE' => 'Удалить',
  'LBL_DISALBE_CONVERT_LEAD' => 'Отключить опцию конвертации предварительного контакта для уже конвертированных предварительных контактов',
  'LBL_DISALBE_CONVERT_LEAD_DESC' => 'Если предварительный контакт уже конвертирован, то подключение этой опции деактивирует опцию конвертации предварительного контакта.',
  'LBL_DISPLAYING_LOG' => 'Результат логирования:',
  'LBL_ENABLE_ACTION_MENU' => 'Отображать действия в меню',
  'LBL_ENABLE_ACTION_MENU_DESC' => 'Выберите для отображения DetailView и действий субпанелей в выпадающем меню. Если опция не выбрана, действия будут отображены в виде отдельных кнопок.',
  'LBL_ENABLE_HISTORY_CONTACTS_EMAILS' => 'Разрешить/Запретить отображение электронных писем от связанных контактов на субпанели Email.',
  'LBL_ENABLE_MAILMERGE' => 'Включить объединение почты?',
  'LBL_EXCHANGE_LOGO' => 'Exchange',
  'LBL_EXCHANGE_SMTPPASS' => 'Exchange - пароль:',
  'LBL_EXCHANGE_SMTPPORT' => 'Exchange - порт сервера:',
  'LBL_EXCHANGE_SMTPSERVER' => 'Exchange  - сервер:',
  'LBL_EXCHANGE_SMTPUSER' => 'Exchange - логин:',
  'LBL_FONTMANAGER_BUTTON' => 'Менеджер шрифтов PDF',
  'LBL_FONTMANAGER_TITLE' => 'Менеджер шрифтов PDF',
  'LBL_FONT_BOLD' => 'Полужирный',
  'LBL_FONT_BOLDITALIC' => 'Пполужирный/Курсив',
  'LBL_FONT_ITALIC' => 'Курсив',
  'LBL_FONT_LIST_CIDINFO' => 'Информация о CID',
  'LBL_FONT_LIST_CIDINFO_INFO' => 'Примеры:<br /><br />Китайский традиционный:<br /><br />$enc=\\&#39;UniCNS-UTF16-H\\&#39;;<br />$cidinfo=array(\\&#39;Registry\\&#39;=>\\&#39;Adobe\\&#39;, \\&#39;Ordering\\&#39;=>\\&#39;CNS1\\&#39;,\\&#39;Supplement\\&#39;=>0);<br />include(\\&#39;include/tcpdf/fonts/uni2cid_ac15.php\\&#39;);<br />Китайский упрощённый:<br /><br />$enc=\\&#39;UniGB-UTF16-H\\&#39;;<br />$cidinfo=array(\\&#39;Registry\\&#39;=>\\&#39;Adobe\\&#39;, \\&#39;Ordering\\&#39;=>\\&#39;GB1\\&#39;,\\&#39;Supplement\\&#39;=>2);<br />include(\\&#39;include/tcpdf/fonts/uni2cid_ag15.php\\&#39;);<br />Корейский:<br /><br />$enc=\\&#39;UniKS-UTF16-H\\&#39;;<br />$cidinfo=array(\\&#39;Registry\\&#39;=>\\&#39;Adobe\\&#39;, \\&#39;Ordering\\&#39;=>\\&#39;Korea1\\&#39;,\\&#39;Supplement\\&#39;=>0);<br />include(\\&#39;include/tcpdf/fonts/uni2cid_ak12.php\\&#39;);<br />Японский:<br /><br />$enc=\\&#39;UniJIS-UTF16-H\\&#39;;<br />$cidinfo=array(\\&#39;Registry\\&#39;=>\\&#39;Adobe\\&#39;, \\&#39;Ordering\\&#39;=>\\&#39;Japan1\\&#39;,\\&#39;Supplement\\&#39;=>5);<br />include(\\&#39;include/tcpdf/fonts/uni2cid_aj16.php\\&#39;);<br /><br />Для дополнительной информации посетите www.tcpdf.org',
  'LBL_FONT_LIST_EMBEDDED' => 'Встроенный',
  'LBL_FONT_LIST_EMBEDDED_INFO' => 'Отметьте, чтобы включить этот шрифт в файл PDF',
  'LBL_FONT_LIST_ENC' => 'Кодировка',
  'LBL_FONT_LIST_FILENAME' => 'Название файла',
  'LBL_FONT_LIST_FILESIZE' => 'Размер шрифта',
  'LBL_FONT_LIST_NAME' => 'Название',
  'LBL_FONT_LIST_STYLE' => 'Стиль',
  'LBL_FONT_LIST_STYLE_INFO' => 'Стиль шрифта',
  'LBL_FONT_LIST_TYPE' => 'Тип',
  'LBL_FONT_MOVE_DEFFILE' => 'Файл определения шрифтов перемещён в :',
  'LBL_FONT_MOVE_FILE' => 'Файл шрифта перемещён в :',
  'LBL_FONT_REGULAR' => 'Обычный',
  'LBL_FONT_TYPE_CID0' => 'CID-0',
  'LBL_FONT_TYPE_CORE' => 'Ядро',
  'LBL_FONT_TYPE_TRUETYPE' => 'TrueType',
  'LBL_FONT_TYPE_TRUETYPEU' => 'TrueTypeUnicode',
  'LBL_FONT_TYPE_TYPE1' => 'Type1',
  'LBL_GMAIL_LOGO' => 'Gmail',
  'LBL_GMAIL_SMTPPASS' => 'Gmail - пароль:',
  'LBL_GMAIL_SMTPUSER' => 'Gmail - адрес:',
  'LBL_IGNORE_SELF' => 'Игнорировать:',
  'LBL_IMG_RESIZED' => '(размер изменен для отображения)',
  'LBL_IMPORT_MAX_RECORDS' => 'Импорт - максимальное количество строк:',
  'LBL_IMPORT_MAX_RECORDS_HELP' => 'Укажите, сколько строк разрешено в файлах импорта. Если количество строк файла импорта превысит это число, пользователь увидит уведомление. Если число не указано, будет разрешено неограниченное количество строк.',
  'LBL_IT_WILL_BE_IGNORED' => 'Будет игнорирован',
  'LBL_JS_CONFIRM_DELETE_FONT' => 'Вы уверены, что хотите удалить этот шрифт?',
  'LBL_LDAP_ADMIN_PASSWORD' => 'Пароль:',
  'LBL_LDAP_ADMIN_USER' => 'Имя пользователя:',
  'LBL_LDAP_ADMIN_USER_DESC' => 'Поиск пользователя Sugar. В случае отсутствия параметра будет выполнен анонимный вход.',
  'LBL_LDAP_AUTHENTICATION' => 'Авторизация:',
  'LBL_LDAP_AUTHENTICATION_DESC' => 'Авторизация на сервере LDAP, используя данные пользователя',
  'LBL_LDAP_AUTO_CREATE_USERS' => 'Автоматическое создание пользователей:',
  'LBL_LDAP_AUTO_CREATE_USERS_DESC' => 'Если авторизованный пользователь не существует в базе Sugar, то он будет создан.',
  'LBL_LDAP_BIND_ATTRIBUTE' => 'Bind-атрибут:',
  'LBL_LDAP_BIND_ATTRIBUTE_DESC' => 'Авторизация пользователя LDAP, например:[<b>AD:</b> userPrincipalName] [<b>openLDAP:</b> userPrincipalName] [<b>Mac OS X:</b> uid]',
  'LBL_LDAP_ENABLE' => 'Включить LDAP',
  'LBL_LDAP_ENC_KEY' => 'Ключ шифрования:',
  'LBL_LDAP_ENC_KEY_DESC' => 'Для SOAP-авторизации при использовании LDAP.',
  'LBL_LDAP_GROUP_ATTR' => 'Атрибут группы:',
  'LBL_LDAP_GROUP_ATTR_DESC' => 'Уникальный Атрибут группы, используемый для фильтрации по идентификатору пользователя, например: <em>memberUid</em>',
  'LBL_LDAP_GROUP_DN' => 'DN группы:',
  'LBL_LDAP_GROUP_DN_DESC' => 'Пример: <em>ou=groups,dc=example,dc=com</em>',
  'LBL_LDAP_GROUP_MEMBERSHIP' => 'Роль в группе:',
  'LBL_LDAP_GROUP_MEMBERSHIP_DESC' => 'Пользователь должен быть членом определенной группы',
  'LBL_LDAP_GROUP_NAME' => 'Группа:',
  'LBL_LDAP_GROUP_NAME_DESC' => 'Пример: <em>cn=sugarcrm</em>',
  'LBL_LDAP_GROUP_USER_ATTR' => 'Атрибут пользователя:',
  'LBL_LDAP_GROUP_USER_ATTR_DESC' => 'Уникальный идентификатор пользователя, используемый для проверки принадлежности пользователя к определенной группе, например: <em>uid</em>',
  'LBL_LDAP_LOGIN_ATTRIBUTE' => 'Login-атрибут:',
  'LBL_LDAP_LOGIN_ATTRIBUTE_DESC' => 'Поиск пользователя LDAP, например:[<b>AD:</b> userPrincipalName] [<b>openLDAP:</b> dn] [<b>Mac OS X:</b> dn]',
  'LBL_LDAP_SERVER_HOSTNAME' => 'Сервер:',
  'LBL_LDAP_SERVER_HOSTNAME_DESC' => 'Пример: ldap.example.com или ldaps://ldap.example.com при включении SSL',
  'LBL_LDAP_SERVER_PORT' => 'Порт:',
  'LBL_LDAP_SERVER_PORT_DESC' => 'Пример: 389 или 636 при включении SSL',
  'LBL_LDAP_TITLE' => 'Поддержка LDAP-авторизации',
  'LBL_LDAP_USER_DN' => 'DN пользователя:',
  'LBL_LDAP_USER_DN_DESC' => 'Пример: <em>ou=people,dc=example,dc=com</eM>',
  'LBL_LDAP_USER_FILTER' => 'Параметры:',
  'LBL_LDAP_USER_FILTER_DESC' => 'Любые дополнительные параметры, применяемые в процессе авторизации пользователей, например: <em>is_sugar_user=1 или (is_sugar_user=1)(is_sales=1)</em>',
  'LBL_LEAD_CONV_OPTION' => 'Опции конверсии предварительных контактов',
  'LBL_LOADING' => 'Загрузка...',
  'LBL_LOCK_SUBPANELS_DESC' => 'Эти настройки применяются к модулям предыдущей модели (не sidecar)',
  'LBL_LOGGER' => 'Параметры журнала',
  'LBL_LOGGER_DEFAULT_DATE_FORMAT' => 'Формат даты по умолчанию',
  'LBL_LOGGER_FILENAME' => 'Имя файла журнала:',
  'LBL_LOGGER_FILENAME_SUFFIX' => 'Дополнительный суффикс имени файла журнала:',
  'LBL_LOGGER_FILE_EXTENSION' => 'Расширение',
  'LBL_LOGGER_LOG_LEVEL' => 'Уровень детализации:',
  'LBL_LOGGER_MAX_LOGS' => 'Максимальное количество файлов журнала:',
  'LBL_LOGGER_MAX_LOG_SIZE' => 'Максимальный размер файла журнала:',
  'LBL_LOGO' => 'Логотип',
  'LBL_LOGVIEW' => 'Настройки журнала',
  'LBL_LOG_NOT_CHANGED' => 'Журнал не был изменен',
  'LBL_MAILMERGE' => 'Объединение почты',
  'LBL_MAILMERGE_DESC' => 'Этот флажок может быть установлен только при наличии соответствующего плагина для Microsoft® Word®.',
  'LBL_MAIL_SMTPAUTH_REQ' => 'SMTP-сервер требует авторизацию?',
  'LBL_MAIL_SMTPPASS' => 'SMTP-пароль:',
  'LBL_MAIL_SMTPPORT' => 'SMTP-порт',
  'LBL_MAIL_SMTPSERVER' => 'Сервер исходящей почты',
  'LBL_MAIL_SMTPTYPE' => 'Тип SMTP сервера:',
  'LBL_MAIL_SMTPUSER' => 'SMTP-логин',
  'LBL_MAIL_SMTP_SETTINGS' => 'Настройка SMTP-сервера',
  'LBL_MARKING_WHERE_START_LOGGING' => 'Контрольная точка в журнале установлена',
  'LBL_MARK_POINT' => 'Установить контрольную точку',
  'LBL_MIN_AUTO_REFRESH_INTERVAL' => 'Минимальное время автоматического обновления раздела',
  'LBL_MIN_AUTO_REFRESH_INTERVAL_HELP' => 'Это минимальное значение времени автоматического обновления раздела. Выберите "Никогда" чтобы полностью запретить автоматическое обновление разделов.',
  'LBL_MOBILE_MOD_REPORTS_RESTRICTION' => '* Модуль Отчеты доступен только для мобильного клиента Sugar iPhone.',
  'LBL_MOBILE_MOD_REPORTS_RESTRICTION2' => '* Модуль отчетов недоступен для просмотра при входе в браузер с мобильного телефона',
  'LBL_MODULE_FAVICON' => 'Отображать иконку модуля в качестве иконки сайта',
  'LBL_MODULE_FAVICON_HELP' => 'Если вы находитесь в модуле, содержащем иконку, то эта иконка будет использоваться в качестве иконки сайта, вместо иконки сайта, содержащейся в текущей теме.',
  'LBL_MODULE_ID' => 'Конфигуратор',
  'LBL_MODULE_NAME' => 'Настройка конфигурации',
  'LBL_MODULE_NAME_SINGULAR' => 'Настройки системы',
  'LBL_MODULE_TITLE' => 'Интерфейс пользователя',
  'LBL_NEXT_' => 'Далее>>',
  'LBL_NOTIFY_FROMADDRESS' => '"От" Адрес:',
  'LBL_NOTIFY_SUBJECT' => 'Тема E-mail-сообщения:',
  'LBL_NO_PRIVATE_TEAM_UPDATE' => 'Предотвратить изменения названий пользователями для обновления Названий приватных команд',
  'LBL_OC_STATUS' => 'Статус оффлайн клиента по умолчанию',
  'LBL_OC_STATUS_DESC' => 'Нажмите здесь, если хотите, чтоб у всех пользователей был доступ к Оффлайн клиенту. Вы также можете настроить доступ на уровне пользователя.',
  'LBL_PDFMODULE_NAME' => 'Настройки PDF',
  'LBL_PDF_ENCODING_TABLE' => 'Таблица кодировок',
  'LBL_PDF_ENCODING_TABLE_INFO' => 'Название таблицы кодировок<br />Эта опция игнорируется для TrueType Unicode, OpenType Unicode и символьных шрифтов. Кодировка определяет соответствие между кодом (от 0 до 255) и символом, содержащимся в шрифте. Первые 128 позиций являются фиксированными и соответствуют ASCII.',
  'LBL_PDF_FONT_FILE' => 'Файл шрифта',
  'LBL_PDF_FONT_FILE_INFO' => 'файл .ttf или .otf или .pfb',
  'LBL_PDF_INSTRUCTIONS' => 'Инструкции',
  'LBL_PDF_METRIC_FILE' => 'Файл измерений',
  'LBL_PDF_METRIC_FILE_INFO' => 'файл .afm или .ufm',
  'LBL_PDF_PATCH' => 'Патч',
  'LBL_PDF_PATCH_INFO' => 'Пользовательское изменение кодировки. Запись в массив PHP.<br />Пример:<br />Кодировка ISO-8859-1 не содержит символа евро. Чтобы добавить его на позиции № 164, напишите "array(164=>\\&#39;Euro\\&#39;)".',
  'LBL_PORTAL_ON' => 'Разрешить управление пользователями портала',
  'LBL_PORTAL_ON_DESC' => 'Позволяет пользователям управлять информацией пользователя портала внутри записей контактов. Пользователи портала могут получить доступ к статьям Обращений, Ошибок, Базы знаний и другим данным через приложение Sugar Portal.',
  'LBL_PORTAL_TITLE' => 'Пользовательский портал',
  'LBL_PROXY_AUTH' => 'Авторизация?',
  'LBL_PROXY_HOST' => 'Прокси-сервер',
  'LBL_PROXY_ON' => 'Использовать прокси-сервер?',
  'LBL_PROXY_ON_DESC' => 'Используйте прокси-сервер для настроек авторизации',
  'LBL_PROXY_PASSWORD' => 'Пароль',
  'LBL_PROXY_PORT' => 'Порт',
  'LBL_PROXY_TITLE' => 'Настройки прокси-сервера',
  'LBL_PROXY_USERNAME' => 'Логин',
  'LBL_REFRESH_FROM_MARK' => 'Обновить с контрольной точки',
  'LBL_REG_EXP' => 'Регистрация истекает:',
  'LBL_REMOVE' => 'удал.',
  'LBL_RESTORE_BUTTON_LABEL' => 'Восстановить',
  'LBL_SEARCH' => 'Поиск:',
  'LBL_SESSION_TIMEOUT_TOOLTIP' => 'Время ожидания сессии портала установлено для действующих версий портала Sugar, доступных для Sugar 6.5 и выше.',
  'LBL_SKYPEOUT_ON' => 'Включить SkypeOut&reg; интеграцию',
  'LBL_SKYPEOUT_ON_DESC' => 'Разрешать пользователям кликать на телефонных номерах с целью дозвона, используя SkypeOut®. Для использования этой функции номера должны быть правильно отформатированы: + (код страны) (телефонный номер), например: +1 (555) 555-1234. За дополнительной информацией обращайтесь к Skype FAQ: https://support.skype.com/#calling',
  'LBL_SKYPEOUT_TITLE' => 'SkypeOut®',
  'LBL_STATUS_FONT_ERROR' => 'ОШИБКА: Шрифт не был добавлен. Просмотрите журнал ошибок.',
  'LBL_STATUS_FONT_SUCCESS' => 'УСПЕШНО: Шрифт был добавлен в SugarCRM.',
  'LBL_SYSTEM_SETTINGS' => 'Настройка конфигурации',
  'LBL_TWEETTOCASE_ON' => 'Включить Tweet&reg; к интеграции обращений',
  'LBL_TWEETTOCASE_ON_DESC' => 'Позволяет пользователям создавать обращения из Tweets',
  'LBL_TWEETTOCASE_TITLE' => 'Tweet&reg; к обращению',
  'LBL_USE_REAL_NAMES' => 'Отображать полные имена',
  'LBL_USE_REAL_NAMES_DESC' => 'Отображать полные имена пользователей вместо логина в полях назначения записей.',
  'LBL_VCAL_PERIOD' => 'Параметры доступности vCal:',
  'LBL_WELCOME' => 'Добро пожаловать',
  'LBL_WIRELESS_LIST_ENTRIES' => 'Количество отображаемых записей на странице (мобильная версия)',
  'LBL_WIRELESS_SERVER_URL' => 'Сервер Sugar Mobile Plus',
  'LBL_WIRELESS_SUBPANEL_LIST_ENTRIES' => 'Количество отображаемых субпанелей на странице (мобильная версия)',
  'LBL_WIZARD_BACK_BUTTON' => '< Назад',
  'LBL_WIZARD_CONTINUE_BUTTON' => 'Продолжить',
  'LBL_WIZARD_FINISH' => 'Нажмите на кнопку <b>Продолжить</b> для настройки учетной записи.<br />Для настройки дополнительных параметров системы нажмите <a href="index.php?module=Administration&action=index" target="_blank">здесь</a>.',
  'LBL_WIZARD_FINISH_BUTTON' => 'Готово',
  'LBL_WIZARD_FINISH_TAB' => 'Готово',
  'LBL_WIZARD_FINISH_TITLE' => 'Настройка основных параметров системы завершена',
  'LBL_WIZARD_LOCALE_DESC' => 'Укажите, каким образом должны быть представлены данные в системе, основываясь на Вашем географическом положении. Указанные здесь параметры будут являться параметрами по умолчанию. В дальнейшем пользователи смогут изменить параметры по своему усмотрению.',
  'LBL_WIZARD_NEXT_BUTTON' => 'Далее >',
  'LBL_WIZARD_SKIP_BUTTON' => 'Пропустить',
  'LBL_WIZARD_SMTP_DESC' => 'Учетная запись исходящей почты будет использоваться для отправки исходящей почты, в том числе для уведомлений о назначении записей и задач, и писем с информацией о новом пароле. Электронный адрес данной учетной записи будет фигурировать в письмах в качестве отправителя.',
  'LBL_WIZARD_SYSTEM_DESC' => 'Укажите название вашей организации и выберите логотип.',
  'LBL_WIZARD_SYSTEM_TITLE' => 'Настройка логотипа',
  'LBL_WIZARD_TITLE' => 'Мастер настройки системы',
  'LBL_WIZARD_WELCOME' => 'Предлагаем Вам настроить параметры системы: настроить логотип вашей организации, сконфигурировать региональные настройки системы,настроить параметры сервера исходящей почты.<br />По завершении работы мастера Вы сможете настроить параметры собственной учетной записи и приступить к работе в системе.<br />Если Вы хотите настроить параметры системы позже, нажмите на кнопку <b>Пропустить</b>.',
  'LBL_WIZARD_WELCOME_TAB' => 'Добро пожаловать',
  'LBL_WIZARD_WELCOME_TITLE' => 'Добро пожаловать в Sugar!',
  'LBL_YAHOOMAIL_SMTPPASS' => 'Yahoo! - пароль:',
  'LBL_YAHOOMAIL_SMTPUSER' => 'Yahoo! - учетная запись почты:',
  'LBL_YAHOO_MAIL' => 'Почта Yahoo',
  'LBL_YOUR_IP_ADDRESS' => 'Ваш IP-адрес:',
  'LBL_YOUR_PROCESS_ID' => 'ID процесса:',
  'LDAP_ENC_KEY_NO_FUNC_DESC' => 'Расширение php_mcrypt должно быть включено в файле php.ini или же php должен быть скомпилирован с указанием соответствующего ключа.',
  'LEAD_CONV_OPT_HELP' => '<b>Copy</b> - Копирует и соотносит копии всей действий по предварительному контакту в новые записи, которые выбраны пользователем во время конверсии. Для каждой из выбранных записей создаются копии.<br /><br><br><b>Move</b> - Перемещает все действия по предварительному контакту в новую записи, которая выбрана пользователем во время конверсии<br /><br><br><b>Do Nothing</b> - Ничего не делает с действиями по предварительному контакту во время конверсии. Действия так и относятся только к предварительному контакту.',
  'LIST_ENTRIES_PER_LISTVIEW' => 'Количество отображаемых записей на странице',
  'LIST_ENTRIES_PER_SUBPANEL' => 'Количество отображаемых субпанелей на странице',
  'LOCK_HOMEPAGE' => 'Запретить пользователям настройку главной страницы',
  'LOCK_HOMEPAGE_HELP' => 'Данный параметр запрещает:<br />1) добавлять Разделы на главную страницу системы <br />2) перемещать Разделы мышью на главной странице системы',
  'LOCK_SUBPANELS' => 'Запретить пользователям настройку субпанелей',
  'LOG_MEMORY_USAGE' => 'Вести журнал использования памяти',
  'LOG_SLOW_QUERIES' => 'Вести журнал медленных запросов',
  'MAX_DASHLETS' => 'Максимальное количество Разделов на главной странице системы',
  'NEW_LOGO' => 'Выбрать логотип:',
  'NEW_LOGO_HELP' => 'Допустимы следующие форматы логотипов: PNG или JPG.<br />Рекомендуемый размер логотипов - 212x40 пикселей.',
  'NEW_LOGO_HELP_NO_SPACE' => 'Формат изображения должен быть .png или .jpg. Максимальная высота 17 пикселов, максимальная широта 450 пикселов. Любое загруженное изображение большего размера будет изменено до данного размера. В названии файла не должно содержаться пробелов.',
  'NEW_QUOTE_LOGO' => 'Загрузить логотип для Коммерческих предложений',
  'NEW_QUOTE_LOGO_HELP' => 'Допустимы следующие форматы логотипов: PNG или JPG.<br />Рекомендуемый размер логотипа - 867x74 пикселей.',
  'PDF_ACL_ACCESS' => 'Контроль доступа',
  'PDF_ACL_ACCESS_INFO' => 'Контроль доступа по умолчанию для создания PDF.',
  'PDF_AUTHOR' => 'Автор',
  'PDF_AUTHOR_INFO' => 'Информация об авторе отображается в свойствах документа.',
  'PDF_COMPRESSION' => 'Сжатие',
  'PDF_COMPRESSION_INFO' => 'Включить или выключить сжатие страницы.<br />Если включено, внутреннее представление каждой страницы сжимается, что в итоге приводит к коэффициенту сжатию документа: 2.',
  'PDF_CREATOR' => 'Генератор PDF',
  'PDF_CREATOR_INFO' => 'Определяет создателя документа. <br />Обычно, это название приложения, которое генерирует PDF.',
  'PDF_FILENAME' => 'Имя файла по умолчанию',
  'PDF_FILENAME_INFO' => 'Название по умолчанию для сгенерированных PDF-файлов',
  'PDF_GD_WARNING' => 'У вас не установлена библиотека GD для PHP. Без библиотеки GD, в файлах PDF могут отображаться только логотипы в формате JPEG.',
  'PDF_HEADER_LOGO' => 'Для PDF-документов коммерческих предложений',
  'PDF_HEADER_LOGO_INFO' => 'Этот логотип отображается в заголовке PDF-документов коммерческих предложений по умолчанию.',
  'PDF_HEADER_LOGO_WIDTH' => 'Ширина логотипа заголовка коммерческих предложений',
  'PDF_HEADER_LOGO_WIDTH_INFO' => 'Изменить масштаб загруженного логотипа для отображения в PDF коммерческих предложений. (Только TCPDF)',
  'PDF_HEADER_STRING' => 'Строка заголовка',
  'PDF_HEADER_STRING_INFO' => 'Описание строки заголовка',
  'PDF_HEADER_TITLE' => 'Заголовок',
  'PDF_HEADER_TITLE_INFO' => 'Строка для печати как заголовок документа',
  'PDF_IMAGE_SCALE_RATIO' => 'Отношение масштаба логотипа',
  'PDF_IMAGE_SCALE_RATIO_INFO' => 'Отношение, используемое для масштабирования логотипов',
  'PDF_INSTRUCTIONS_ADD_FONT' => 'Шрифты, поддерживаемые SugarPDF :<br /><br />    * TrueTypeUnicode (UTF-8 Unicode)<br />    * OpenTypeUnicode<br />    * TrueType<br />    * OpenType<br />    * Type1<br />    * CID-0<br /><br />Если Вы выберете не включать ваш шрифт в PDF, созданный PDF получится меньшего объема, но для отсутствующих шрифтов будет производиться замена.<br /><br />Добавление шрифта PDF в SugarCRM требует прохождения шагов 1 и 2, описанных документации о шрифтах TCPDF, доступной в разделе "DOCS" на сайте TCPDF. (http://www.tcpdf.org)<br /><br />Утилиты pfm2afm и ttf2ufm доступны в разделе fonts/utils пакета TCPDF. Сам пакет находится в разделе "DOWNLOAD" сайта TCPDF (http://www.tcpdf.org).',
  'PDF_JPEG_QUALITY' => 'Качество JPEG (1-100)',
  'PDF_JPEG_QUALITY_INFO' => 'Настроить с качеством сжатия JPEG по умолчанию (1-100)',
  'PDF_KEYWORDS' => 'Ключевое слово (слова)',
  'PDF_KEYWORDS_INFO' => 'Связать ключевые слова с документом, обычно в виде "ключевоеслово1 ключевоеслово2..."',
  'PDF_NEW_HEADER_LOGO' => 'Выбрать новый логотип для коммерческих предложений',
  'PDF_NEW_HEADER_LOGO_INFO' => 'Формат файла может быть .jpg или .png. (Только .jpg для EZPDF)<br />Рекомендованный размер: 212x40 px.',
  'PDF_NEW_SMALL_HEADER_LOGO' => 'Выбрать новый логотип для отчетов',
  'PDF_NEW_SMALL_HEADER_LOGO_INFO' => 'Формат файла может быть .jpg или .png. (Только .jpg для EZPDF)<br />Рекомендованный размер: 212x40 px.',
  'PDF_OWNER_PASSWORD' => 'Пароль владельца',
  'PDF_OWNER_PASSWORD_INFO' => 'Если настроен пароль пользователя, программа просмотра PDF попросит ввести пароль перед отображением документа.<br />Если главный пароль будет отличаться от пользовательского, он будет использован для полного доступа.',
  'PDF_PDF_VERSION' => 'Версия PDF',
  'PDF_PDF_VERSION_INFO' => 'Установить версию PDF (проверить ссылку на PDF для действующих пользователей).',
  'PDF_PROTECTION' => 'Защита документа',
  'PDF_PROTECTION_INFO' => 'Настроить защиту документа<br />- копирование: копировать текст и логотипа в буфер обмена<br />- печать: распечатать документ<br />- изменить: изменить документ (кроме комментариев и форм)<br />- комментарии и формы: добавить комментарии и формы<br />Примечание: защиту от изменений можно настроить людям, обладающим полным продуктом Acrobat',
  'PDF_SMALL_HEADER_LOGO' => 'Для отчетов',
  'PDF_SMALL_HEADER_LOGO_INFO' => 'Этот логотип отображается в заголовке PDF-документов Отчеты по умолчанию.<br />Этот логотип также отображается в верхнем левом углу системы Sugar.',
  'PDF_SMALL_HEADER_LOGO_WIDTH' => 'Ширина логотипа Отчеты',
  'PDF_SMALL_HEADER_LOGO_WIDTH_INFO' => 'Изменить масштаб загруженного логотипа для отображения в PDF-документах Отчеты. (Только TCPDF)',
  'PDF_SUBJECT' => 'Тема',
  'PDF_SUBJECT_INFO' => 'Тема отобразится в свойствах документа.',
  'PDF_TITLE' => 'Название',
  'PDF_TITLE_INFO' => 'Название отобразится в свойствах документа.',
  'PDF_UNIT' => 'Единица измерения',
  'PDF_UNIT_INFO' => 'Единица измерения документа',
  'PDF_USER_PASSWORD' => 'Пароль пользователя',
  'PDF_USER_PASSWORD_INFO' => 'Если пароль не настроен, документ откроется, как обычно.<br />Если настроен пароль пользователя, программа просмотра PDF попросит ввести пароль перед отображением документа.<br />Если главный пароль будет отличаться от пользовательского, он будет использован для полного доступа.',
  'QUOTES_CURRENT_LOGO' => 'Логотип для Коммерческих предложений',
  'SESSION_TIMEOUT' => 'Истечение времени ожидания ответа от Портала',
  'SESSION_TIMEOUT_UNITS' => 'секунд',
  'SHOW_DOWNLOADS_TAB' => 'Отображать панель загрузок',
  'SHOW_DOWNLOADS_TAB_HELP' => 'Когда данная опция включена, панель загрузок будет отображаться в настройках пользователя и предоставлять пользователь доступ к расширениям Sugar и другим доступным файлам.',
  'SLOW_QUERY_TIME_MSEC' => 'Пороговое время выполнения медленных запросов (мсек)',
  'STACK_TRACE_ERRORS' => 'Отображать трассировку ошибок',
  'SUGARPDF_ADVANCED_SETTINGS' => 'Расширенные настройки',
  'SUGARPDF_BASIC_SETTINGS' => 'Свойства документа',
  'SUGARPDF_LOGO_SETTINGS' => 'Логотипы',
  'SYSTEM_NAME' => 'Имя системы:',
  'SYSTEM_NAME_HELP' => 'Данное название отображается в заголовке браузера.',
  'SYSTEM_NAME_WIZARD' => 'Название:',
  'TPL_LIST_ENTRIES_PER_LISTVIEW_HELP' => 'Рекомендуемая настройка для допустимого уровня производительности представлена ниже {{listEntriesNum}}. С каждым добавлением полей в списочное представление, этот номер должен быть в конце рекомендуемых настроек.',
  'TPL_LIST_ENTRIES_PER_SUBPANEL_HELP' => 'Рекомендуемая настройка для допустимого уровня производительности представлена ниже {{subpanelEntriesNum}}. С каждым добавлением полей в списочное представление, этот номер должен быть в конце рекомендуемых настроек.',
  'UPLOAD_MAX_SIZE' => 'Максимальный размер загружаемого файла',
  'VERIFY_CLIENT_IP' => 'Проверка IP-адреса пользователя',
  'vCAL_HELP' => 'Используйте этот параметр для указания количества месяцев, в течение которых возможна публикация данных о занятости (звонки и встречи) из календаря. <br />При включенной публикации допустимы значения от 1 до 12 месяцев. Для выключения возможности публикации введите "0".',
);

