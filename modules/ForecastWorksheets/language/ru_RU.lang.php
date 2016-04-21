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
  'ERR_FORECAST_AMOUNT' => 'Сумма должна быть в виде числа.',
  'LBL_ACCOUNT_NAME' => 'Контрагент:',
  'LBL_AMOUNT' => 'Сумма',
  'LBL_BASE_RATE' => 'Базовая процентная ставка',
  'LBL_CALCULATED_LINE_ITEM_AMOUNT' => 'Предполагаемая сумма дохода по продукту',
  'LBL_CATEGORY_NAME' => 'Категория',
  'LBL_COMMIT_HEADER' => 'Подтвердить прогноз',
  'LBL_COMMIT_MESSAGE' => 'Вы подтверждаете эти суммы?',
  'LBL_COMMIT_NOTE' => 'Укажите суммы, которые Вы хотите подтвердить для выбранного периода отчета:',
  'LBL_COMMIT_STAGE' => 'Стадия совершения продажи',
  'LBL_COST_PRICE' => 'Себестоимость',
  'LBL_CREATED_BY' => 'Создано',
  'LBL_CURRENCY' => 'Валюта',
  'LBL_CURRENCY_ID' => 'ID валюты',
  'LBL_CURRENCY_RATE' => 'Валютный курс',
  'LBL_DATE_CLOSED' => 'Ожидаемая дата закрытия продажи',
  'LBL_DATE_COMMITTED' => 'Дата совершения продажи',
  'LBL_DATE_ENTERED' => 'Дата создания',
  'LBL_DATE_MODIFIED' => 'Дата изменения',
  'LBL_DELETED' => 'Удалено',
  'LBL_DISCOUNT_PRICE' => 'Цена за единицу',
  'LBL_DV_FORECAST_OPPORTUNITY' => 'Продажи по прогнозу',
  'LBL_DV_FORECAST_PERIOD' => 'Отчетный период по прогнозу',
  'LBL_DV_FORECAST_ROLLUP' => 'Смещение прогноза',
  'LBL_DV_HEADER' => 'Прогнозы: лист',
  'LBL_DV_LAST_COMMIT_AMOUNT' => 'Последние подтвержденные суммы:',
  'LBL_DV_LAST_COMMIT_DATE' => 'Последняя подтвержденная дата:',
  'LBL_DV_MY_FORECASTS' => 'Мои прогнозы',
  'LBL_DV_MY_TEAM' => 'Прогнозы моей команды',
  'LBL_DV_TIMEPERIOD' => 'Период отчета:',
  'LBL_DV_TIMEPERIODS' => 'Периоды отчета:',
  'LBL_DV_TIMPERIOD_DATES' => 'Диапазон дат:',
  'LBL_EDITABLE_INVALID' => 'Неправильное значение для {{field_name}}',
  'LBL_EDITABLE_INVALID_RANGE' => 'Значение должно быть между {{min}} и {{max}}',
  'LBL_FC_START_DATE' => 'Дата начала',
  'LBL_FC_USER' => 'Запланировать для',
  'LBL_FDR_ADJ_AMOUNT' => 'Скорректированная сумма',
  'LBL_FDR_COMMIT' => 'Подтвержденная сумма',
  'LBL_FDR_DATE_COMMIT' => 'Подтвердить дату',
  'LBL_FDR_OPPORTUNITIES' => 'Продажи в прогнозе:',
  'LBL_FDR_USER_NAME' => 'Полный отчет',
  'LBL_FDR_WEIGH' => 'Взвешенная сумма продаж:',
  'LBL_FORECAST' => 'Прогноз',
  'LBL_FORECAST_HISTORY' => 'Прогнозы: история',
  'LBL_FORECAST_HISTORY_TITLE' => 'История',
  'LBL_FORECAST_ID' => 'ID прогноза',
  'LBL_FORECAST_OPP_COUNT' => 'Итоговая сумма продаж',
  'LBL_FORECAST_OPP_WEIGH' => 'Взвешенная сумма',
  'LBL_FORECAST_PIPELINE_OPP_COUNT' => 'Итоговая сумма продаж по воронке',
  'LBL_FORECAST_TIME_ID' => 'ID периода отчета',
  'LBL_FORECAST_TYPE' => 'Тип прогноза',
  'LBL_FORECAST_USER' => 'Пользователь',
  'LBL_FS_CASCADE' => 'Каскадировать?',
  'LBL_FS_CREATED_BY' => 'Создано',
  'LBL_FS_DATE_ENTERED' => 'Дата создана',
  'LBL_FS_DATE_MODIFIED' => 'Дата изменена',
  'LBL_FS_DELETED' => 'Удалено',
  'LBL_FS_END_DATE' => 'Дата окончания',
  'LBL_FS_FORECAST_FOR' => 'Запланировать для:',
  'LBL_FS_FORECAST_START_DATE' => 'Дата начала прогноза',
  'LBL_FS_MODULE_NAME' => 'План прогноза',
  'LBL_FS_START_DATE' => 'Дата начала',
  'LBL_FS_STATUS' => 'Статус',
  'LBL_FS_TIMEPERIOD' => 'Период отчета',
  'LBL_FS_TIMEPERIOD_ID' => 'ID периода отчета',
  'LBL_FS_USER_ID' => 'ID пользователя',
  'LBL_LEAD_SOURCE' => 'Lead Source',
  'LBL_LIST_FORM_TITLE' => 'Подтвержденные прогнозы',
  'LBL_LIST_PRICE' => 'Прейскурантная цена',
  'LBL_LOADING_COMMIT_HISTORY' => 'Загружается история подтверждений…',
  'LBL_LV_COMMIT' => 'Подтвержденная сумма',
  'LBL_LV_COMMIT_DATE' => 'Дата подтверждена',
  'LBL_LV_OPPORTUNITIES' => 'Продажи',
  'LBL_LV_TIMPERIOD' => 'Период отчета',
  'LBL_LV_TIMPERIOD_END_DATE' => 'Дата окончания',
  'LBL_LV_TIMPERIOD_START_DATE' => 'Дата начала',
  'LBL_LV_TYPE' => 'Тип прогноза',
  'LBL_LV_WEIGH' => 'Взвешенная сумма',
  'LBL_MANAGER_NOTIFY' => '{0} {1} не были подтверждены в последний раз после их предыдущего подтверждения',
  'LBL_MODIFIED_USER_ID' => 'Изменено',
  'LBL_MODULE_NAME' => 'Планшет прогнозов',
  'LBL_MODULE_NAME_SINGULAR' => 'Лист прогноза',
  'LBL_MODULE_TITLE' => 'Листы прогнозов',
  'LBL_NEXT_STEP' => 'Следующий шаг',
  'LBL_NO_ACTIVE_TIMEPERIOD' => 'Нет активных периодов отчета для прогнозирования.',
  'LBL_OPPORTUNITY_NAME' => 'Название сделки',
  'LBL_OW_ACCOUNTNAME' => 'Контрагент',
  'LBL_OW_DESCRIPTION' => 'Описание',
  'LBL_OW_MODULE_TITLE' => 'Лист продажи',
  'LBL_OW_NEXT_STEP' => 'Следующий шаг',
  'LBL_OW_OPPORTUNITIES' => 'Продажа',
  'LBL_OW_PROBABILITY' => 'Вероятность продажи',
  'LBL_OW_REVENUE' => 'Сумма',
  'LBL_OW_TYPE' => 'Тип',
  'LBL_OW_WEIGHTED' => 'Взвешенная сумма',
  'LBL_PERCENT' => 'Процент',
  'LBL_PRODUCT' => 'Продукт',
  'LBL_PRODUCT_ID' => 'ID продукта',
  'LBL_QC_COMMIT_BUTTON' => 'Подтвердить',
  'LBL_QC_COMMIT_VALUE' => 'Подтвердить сумму:',
  'LBL_QC_DIRECT_FORECAST' => 'Мой полный прогонз:',
  'LBL_QC_HEADER_DELIM' => 'Кому',
  'LBL_QC_LAST_COMMIT_VALUE' => 'Последняя подтвержденная сумма:',
  'LBL_QC_LAST_DATE_COMMITTED' => 'Дата последнего подтверждения:',
  'LBL_QC_OPPORTUNITY_COUNT' => 'Сумма продаж:',
  'LBL_QC_ROLLUP_FORECAST' => 'Прогноз моей группы:',
  'LBL_QC_ROLL_COMMIT_VALUE' => 'Сместить подтверждение суммы:',
  'LBL_QC_TIME_PERIOD' => 'Период отчета:',
  'LBL_QC_UPCOMING_FORECASTS' => 'Мои прогнозы',
  'LBL_QC_WEIGHT_VALUE' => 'Взвешенная сумма:',
  'LBL_QC_WORKSHEET_BUTTON' => 'Лист прогнозов',
  'LBL_QUANTITY' => 'Количество',
  'LBL_QUOTA' => 'Квота',
  'LBL_QUOTA_ID' => 'ID квоты',
  'LBL_REPORTS_TO_USER_NAME' => 'Руководитель',
  'LBL_RESET_CHECK' => 'Все данные листа для выбранного периода отчета и авторизованного пользователя будут удалены. Продолжить?',
  'LBL_RESET_WOKSHEET' => 'Сбросить данные листа',
  'LBL_REVENUELINEITEM_NAME' => 'Доход по продукту',
  'LBL_SALES_STAGE' => 'Стадия продажи',
  'LBL_SALES_STATUS' => 'Статус',
  'LBL_SAVE_WOKSHEET' => 'Сохранить лист',
  'LBL_SEARCH' => 'Выбрать',
  'LBL_SEARCH_LABEL' => 'Выбрать',
  'LBL_SHOW_CHART' => 'Посмотреть график',
  'LBL_SVFS_CASCADE' => 'Каскадировать в отчеты?',
  'LBL_SVFS_FORECASTDATE' => 'Запланировать дату начала',
  'LBL_SVFS_HEADER' => 'План прогноза:',
  'LBL_SVFS_STATUS' => 'Статус',
  'LBL_SVFS_USER' => 'Для',
  'LBL_TIMEPERIOD_NAME' => 'Период отчета',
  'LBL_TOTAL_DISCOUNT_AMOUNT' => 'Итоговая сумма скидки',
  'LBL_TYPE' => 'Тип',
  'LBL_USER_NAME' => 'Пользователь',
  'LBL_VERSION' => 'Версия',
  'LBL_WK_REVISION' => 'Ревизия',
  'LBL_WK_VERSION' => 'Версия',
  'LB_FS_KEY' => 'ID',
  'LNK_ACCOUNTS' => 'Контрагент',
  'LNK_FORECAST_LIST' => 'Просмотреть историю по прогнозу',
  'LNK_NEW_OPPORTUNITY' => 'Новая продажа',
  'LNK_NEW_TIMEPERIOD' => 'Создать период отчета',
  'LNK_OPPORTUNITY' => 'Продажа',
  'LNK_QUOTA' => 'Просмотреть квоты',
  'LNK_TIMEPERIOD_LIST' => 'Просмотреть периоды отчета',
  'LNK_UPD_FORECAST' => 'Лист прогнозов',
);

