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
  'DEF_CREATE_LOG' => 'ドキュメント作成日',
  'ERR_DELETE_CONFIRM' => 'この版を削除してよいですか？',
  'ERR_DELETE_LATEST_VERSION' => '最新版を削除することを許可されていません。',
  'ERR_DOC_ACTIVE_DATE' => '発行日',
  'ERR_DOC_EXP_DATE' => '有効期限',
  'ERR_DOC_NAME' => 'ドキュメント名',
  'ERR_DOC_VERSION' => 'ドキュメントのバージョン',
  'ERR_FILENAME' => 'ファイル名',
  'ERR_INVALID_EXTERNAL_API_ACCESS' => 'ユーザが無効の外部API（{0}）へアクセスしようとしました',
  'ERR_INVALID_EXTERNAL_API_LOGIN' => '外部API（{0}）のログインチェックに失敗しました',
  'ERR_MISSING_FILE' => 'このドキュメントにはファイルがありません。アップロード時のエラーである可能性があります。再度アップロードを実行するか、システム管理者に連絡してください。',
  'LBL_ACCOUNTS_SUBPANEL_TITLE' => '取引先',
  'LBL_ACTIVE_DATE' => '発行日',
  'LBL_ASSIGNED_TO_NAME' => 'アサイン先:',
  'LBL_BUGS_SUBPANEL_TITLE' => 'バグトラッカー',
  'LBL_CASES_SUBPANEL_TITLE' => 'ケース',
  'LBL_CATEGORY' => 'カテゴリ',
  'LBL_CATEGORY_VALUE' => 'カテゴリ:',
  'LBL_CAT_OR_SUBCAT_UNSPEC' => '未指定',
  'LBL_CHANGE_LOG' => '更新履歴',
  'LBL_CONTACTS_SUBPANEL_TITLE' => '取引先担当者',
  'LBL_CONTRACTS' => '契約',
  'LBL_CONTRACTS_SUBPANEL_TITLE' => '契約',
  'LBL_CONTRACT_NAME' => '契約名:',
  'LBL_CONTRACT_STATUS' => '契約ステータス:',
  'LBL_CREATED' => '作成者',
  'LBL_CREATED_BY' => '作成者',
  'LBL_CREATED_USER' => '作成者',
  'LBL_DATE_ENTERED' => '作成日',
  'LBL_DATE_MODIFIED' => '更新日',
  'LBL_DELETED' => '削除済み',
  'LBL_DESCRIPTION' => '詳細',
  'LBL_DET_IS_TEMPLATE' => 'テンプレート :',
  'LBL_DET_RELATED_DOCUMENT' => '関連ドキュメント:',
  'LBL_DET_RELATED_DOCUMENT_VERSION' => '関連ドキュメントの版:',
  'LBL_DET_TEMPLATE_TYPE' => 'ドキュメントタイプ:',
  'LBL_DOCUMENT' => '関連ドキュメント',
  'LBL_DOCUMENT_ID' => 'ドキュメントID',
  'LBL_DOCUMENT_INFORMATION' => 'ドキュメントの概要',
  'LBL_DOCUMENT_NAME' => 'ドキュメント名:',
  'LBL_DOCUMENT_REVISION_ID' => 'ドキュメントの版数ID',
  'LBL_DOC_ACTIVE_DATE' => '発行日:',
  'LBL_DOC_DESCRIPTION' => '詳細:',
  'LBL_DOC_EXP_DATE' => '有効期限:',
  'LBL_DOC_ID' => 'ドキュメントソースID',
  'LBL_DOC_NAME' => 'ドキュメント名:',
  'LBL_DOC_REV_HEADER' => 'ドキュメントの版',
  'LBL_DOC_STATUS' => 'ステータス:',
  'LBL_DOC_STATUS_ID' => 'ステータスID:',
  'LBL_DOC_TYPE' => 'ソース',
  'LBL_DOC_TYPE_POPUP' => 'このドキュメントのアップロード先のソースを選択してください。',
  'LBL_DOC_URL' => 'ドキュメントソースURL',
  'LBL_DOC_VERSION' => '版:',
  'LBL_DOWNNLOAD_FILE' => 'ファイルダウンロード:',
  'LBL_EXPIRATION_DATE' => '有効期限',
  'LBL_EXTERNAL_DOCUMENT_NOTE' => '一覧には最も直近に更新された20のファイルが降順に表示されます。他のファイルは検索してください。',
  'LBL_FILENAME' => 'ファイル名:',
  'LBL_FILE_EXTENSION' => 'ファイル拡張子',
  'LBL_FILE_UPLOAD' => 'ファイル:',
  'LBL_FILE_URL' => 'ファイルURL',
  'LBL_HOMEPAGE_TITLE' => '私のドキュメント',
  'LBL_IS_TEMPLATE' => 'テンプレート',
  'LBL_LASTEST_REVISION_NAME' => '最新版の名称:',
  'LBL_LAST_REV_CREATE_DATE' => '最新版作成日',
  'LBL_LAST_REV_CREATOR' => '版の作成者:',
  'LBL_LAST_REV_DATE' => '改版日:',
  'LBL_LAST_REV_MIME_TYPE' => '最新版のMIMEタイプ',
  'LBL_LATEST_REVISION' => '最新版',
  'LBL_LATEST_REVISION_ID' => '最新版ID',
  'LBL_LINKED_ID' => 'リンクID',
  'LBL_LIST_ACTIVE_DATE' => '発行日',
  'LBL_LIST_CATEGORY' => 'カテゴリ',
  'LBL_LIST_DOCUMENT' => 'ドキュメント',
  'LBL_LIST_DOCUMENT_NAME' => 'ドキュメント名',
  'LBL_LIST_DOC_TYPE' => 'ソース',
  'LBL_LIST_DOWNLOAD' => 'ダウンロード',
  'LBL_LIST_EXP_DATE' => '有効期限',
  'LBL_LIST_EXT_DOCUMENT_NAME' => 'ファイル名',
  'LBL_LIST_FILENAME' => 'ファイル:',
  'LBL_LIST_FORM_TITLE' => 'ドキュメント一覧',
  'LBL_LIST_IS_TEMPLATE' => 'テンプレート？',
  'LBL_LIST_LAST_REV_CREATOR' => '発行者',
  'LBL_LIST_LAST_REV_DATE' => '改版日',
  'LBL_LIST_LATEST_REVISION' => '最新版',
  'LBL_LIST_REVISION' => '版',
  'LBL_LIST_SELECTED_REVISION' => '選択された版',
  'LBL_LIST_STATUS' => 'ステータス',
  'LBL_LIST_SUBCATEGORY' => 'サブカテゴリ',
  'LBL_LIST_TEMPLATE_TYPE' => 'ドキュメントタイプ',
  'LBL_LIST_VIEW_DOCUMENT' => '閲覧',
  'LBL_MAIL_MERGE_DOCUMENT' => 'メールマージテンプレート:',
  'LBL_MIME' => 'Mimeタイプ',
  'LBL_MODIFIED' => '更新者ID',
  'LBL_MODIFIED_USER' => '更新者',
  'LBL_MODULE_NAME' => 'ドキュメント',
  'LBL_MODULE_NAME_SINGULAR' => 'ドキュメント',
  'LBL_MODULE_TITLE' => 'ドキュメント: ホーム',
  'LBL_NAME' => 'ドキュメント名',
  'LBL_NEW_FORM_TITLE' => 'ドキュメント作成',
  'LBL_OPPORTUNITIES_SUBPANEL_TITLE' => '商談',
  'LBL_QUOTES_SUBPANEL_TITLE' => '見積',
  'LBL_RELATED_DOCUMENT_ID' => '関連ドキュメントID',
  'LBL_RELATED_DOCUMENT_REVISION_ID' => '関連ドキュメント版ID',
  'LBL_REVISION' => '版',
  'LBL_REVISIONS' => '版',
  'LBL_REVISIONS_PANEL' => '版の詳細',
  'LBL_REVISIONS_SUBPANEL' => '版',
  'LBL_REVISION_NAME' => '版数',
  'LBL_RLI_SUBPANEL_TITLE' => '商談品目',
  'LBL_SEARCH_EXTERNAL_DOCUMENT' => 'ファイル名',
  'LBL_SEARCH_FORM_TITLE' => 'ドキュメント検索',
  'LBL_SELECTED_REVISION_FILENAME' => '選択された版のファイル名',
  'LBL_SELECTED_REVISION_ID' => '選択された版のID',
  'LBL_SELECTED_REVISION_NAME' => '選択された版の名称:',
  'LBL_SF_ACTIVE_DATE' => '発行日:',
  'LBL_SF_CATEGORY' => 'カテゴリ:',
  'LBL_SF_DOCUMENT' => 'ドキュメント名:',
  'LBL_SF_EXP_DATE' => '有効期限:',
  'LBL_SF_SUBCATEGORY' => 'サブカテゴリ:',
  'LBL_STATUS' => 'ステータス',
  'LBL_SUBCATEGORY' => 'サブカテゴリ',
  'LBL_SUBCATEGORY_VALUE' => 'サブカテゴリ:',
  'LBL_TEAM' => 'チーム:',
  'LBL_TEMPLATE_TYPE' => 'ドキュメントタイプ',
  'LBL_THEREVISIONS_SUBPANEL_TITLE' => '版',
  'LBL_TREE_TITLE' => 'ドキュメント',
  'LNK_DOCUMENT_LIST' => 'ドキュメント一覧',
  'LNK_NEW_DOCUMENT' => 'ドキュメント作成',
  'LNK_NEW_MAIL_MERGE' => 'メールマージ',
);

