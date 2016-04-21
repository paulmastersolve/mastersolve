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
  'ERR_DELETE_RECORD' => 'Um número de registo necessita ser especificado para eliminar um Bug.',
  'LBL_ACCOUNTS_SUBPANEL_TITLE' => 'Contas',
  'LBL_ACTIVITIES_SUBPANEL_TITLE' => 'Atividades',
  'LBL_ASSIGNED_TO_NAME' => 'Atribuído a',
  'LBL_BUG' => 'Bug:',
  'LBL_BUG_INFORMATION' => 'Informação do Bug',
  'LBL_BUG_NUMBER' => 'Número do Bug:',
  'LBL_BUG_SUBJECT' => 'Assunto do Bug:',
  'LBL_CASES_SUBPANEL_TITLE' => 'Ocorrências',
  'LBL_CONTACTS_SUBPANEL_TITLE' => 'Contatos',
  'LBL_CONTACT_BUG_TITLE' => 'Contato-Bug:',
  'LBL_CONTACT_NAME' => 'Nome do Contato:',
  'LBL_CONTACT_ROLE' => 'Função:',
  'LBL_CREATED_BY' => 'Criado por:',
  'LBL_DATE_CREATED' => 'Data de criação:',
  'LBL_DATE_LAST_MODIFIED' => 'Data de modificação:',
  'LBL_DEFAULT_SUBPANEL_TITLE' => 'Bug Tracker',
  'LBL_DESCRIPTION' => 'Descrição:',
  'LBL_DOCUMENTS_SUBPANEL_TITLE' => 'Documentos',
  'LBL_EXPORT_ASSIGNED_USER_ID' => 'ID usuário Atribuído',
  'LBL_EXPORT_ASSIGNED_USER_NAME' => 'nome de usuário atribuído',
  'LBL_EXPORT_CREATED_BY' => 'Criado pelo ID',
  'LBL_EXPORT_FIXED_IN_RELEASE_NAMR' => 'Ajustado em nome',
  'LBL_EXPORT_MODIFIED_USER_ID' => 'Modificado Por ID',
  'LBL_FIXED_IN_RELEASE' => 'Corrigido na versão:',
  'LBL_FOUND_IN_RELEASE' => 'Encontrado na versão:',
  'LBL_FOUND_IN_RELEASE_NAME' => 'Encontrado em nome',
  'LBL_HELP_CREATE' => 'O {{}} plural_module_name módulo é utilizado para controlar e gerenciar os problemas relacionados com o produto, comumente referido como {{}} plural_module_name ou defeitos, seja encontrada internamente ou relatados pelos clientes. Para criar uma {{}} module_name: 1. Fornecer valores para os campos conforme desejado. - Os campos marcados "necessária" deve ser preenchido antes de salvar. - Clique em "Ver Mais" para expor campos adicionais, se necessário. 2. Clique em "Salvar" para finalizar o novo álbum e voltar para a página anterior. - Escolha "Salvar e visualizar" para abrir a nova {{}} module_name no modo de registro. - Escolha "Salvar e criar novo" para criar imediatamente um outro novo {{}} module_name.',
  'LBL_HELP_RECORD' => 'O {{}} plural_module_name módulo é utilizado para controlar e gerenciar os problemas relacionados com o produto, comumente referido como {{}} plural_module_name ou defeitos, seja encontrada internamente ou relatados pelos clientes. - Editar campos deste registo, clicando em um campo individual ou no botão Editar. - Exibir ou modificar as ligações a outros registros nos subpainéis alternando no painel esquerdo inferior para "Ver dados". - Fazer e ver comentários de usuários e histórico de alterações de registro no {{}} activitystream_singular_module alternando no painel esquerdo inferior para "Atividade Stream". - Siga ou favorito este registro usando os ícones à direita do nome do registro. - Estão disponíveis ações adicionais no menu Ações suspensas à direita do botão Editar.',
  'LBL_HELP_RECORDS' => 'O {{}} plural_module_name módulo é utilizado para controlar e gerenciar os problemas relacionados com o produto, comumente referido como {{}} plural_module_name ou defeitos, seja encontrada internamente ou relatados pelos clientes. O {{}} plural_module_name pode ser ainda triagem, acompanhando o encontrados e corrigidos no lançamento. O {{}} plural_module_name módulo oferece aos usuários uma maneira de rever rapidamente todos os detalhes do {{}} module_name eo processo a ser utilizado para corrigi-lo. Uma vez por {{}} module_name é criado ou enviado, você pode visualizar e editar as informações relativas à {{}} module_name via {{}} module_name &#39;s modo de registro. Cada {{}} module_name registro pode então relacionar com outros registros de açúcar, como {{}} calls_module, {{}} contacts_module, {{}} cases_module, e muitos outros.',
  'LBL_HISTORY_SUBPANEL_TITLE' => 'Histórico',
  'LBL_INVITEE' => 'Contatos',
  'LBL_LIST_ACCOUNT_NAME' => 'Nome da conta',
  'LBL_LIST_ASSIGNED_TO_NAME' => 'Utilizador',
  'LBL_LIST_CONTACT_NAME' => 'Nome do Contato',
  'LBL_LIST_EMAIL_ADDRESS' => 'Endereço de e-mail',
  'LBL_LIST_FIXED_IN_RELEASE' => 'Corrigido na versão',
  'LBL_LIST_FORM_TITLE' => 'Listar Bugs',
  'LBL_LIST_LAST_MODIFIED' => 'Última modificação',
  'LBL_LIST_MY_BUGS' => 'Os Meus Bugs',
  'LBL_LIST_NUMBER' => 'Núm.',
  'LBL_LIST_PHONE' => 'Telefone',
  'LBL_LIST_PRIORITY' => 'Prioridade',
  'LBL_LIST_RELEASE' => 'Versão',
  'LBL_LIST_RESOLUTION' => 'Resolução',
  'LBL_LIST_STATUS' => 'Status',
  'LBL_LIST_SUBJECT' => 'Assunto',
  'LBL_LIST_TYPE' => 'Tipo',
  'LBL_MODIFIED_BY' => 'Modificado por:',
  'LBL_MODULE_ID' => 'Bugs',
  'LBL_MODULE_NAME' => 'Bug Tracker',
  'LBL_MODULE_NAME_SINGULAR' => 'Bug:',
  'LBL_MODULE_TITLE' => 'Bug Tracker: Tela Principal',
  'LBL_NEW_FORM_TITLE' => 'Criar Bug',
  'LBL_NOTES_SUBPANEL_TITLE' => 'Notas',
  'LBL_NUMBER' => 'Número:',
  'LBL_PORTAL_TOUR_RECORDS_CREATE' => 'Se você tem um novo caso de suporte que você gostaria de enviar, você pode clicar aqui para enviar um novo caso.',
  'LBL_PORTAL_TOUR_RECORDS_FILTER' => 'Você pode filtrar a lista de casos através de um termo de pesquisa.',
  'LBL_PORTAL_TOUR_RECORDS_FILTER_EXAMPLE' => 'Por exemplo, você pode usar isso para encontrar um caso sobre um tema específico de interesse.',
  'LBL_PORTAL_TOUR_RECORDS_INTRO' => 'O módulo de Casos é para o gerenciamento de problemas de suporte que afetam a sua conta. Use as setas abaixo para passar por um rápido passeio.',
  'LBL_PORTAL_TOUR_RECORDS_PAGE' => 'Esta página mostra a lista de bugs publicados.',
  'LBL_PORTAL_TOUR_RECORDS_RETURN' => 'Clicando aqui, você voltará para esta visualizacão a qualquer momento.',
  'LBL_PORTAL_VIEWABLE' => 'Portal visível',
  'LBL_PRIORITY' => 'Prioridade:',
  'LBL_PRODUCT_CATEGORY' => 'Categoria:',
  'LBL_PROJECTS_SUBPANEL_TITLE' => 'Projetos',
  'LBL_RELEASE' => 'Versão:',
  'LBL_RESOLUTION' => 'Resolução:',
  'LBL_SEARCH_FORM_TITLE' => 'Pesquisar Bugs',
  'LBL_SHOW_IN_PORTAL' => 'Mostrar no Portal',
  'LBL_SHOW_MORE' => 'Exibir mais Bugs',
  'LBL_SOURCE' => 'Origem:',
  'LBL_STATUS' => 'Estado:',
  'LBL_SUBJECT' => 'Assunto:',
  'LBL_SYSTEM_ID' => 'ID do Sistema',
  'LBL_TYPE' => 'Tipo:',
  'LBL_WORK_LOG' => 'Log de trabalho:',
  'LNK_BUG_LIST' => 'Bugs',
  'LNK_BUG_REPORTS' => 'Relatórios de Bug',
  'LNK_CREATE' => 'Reportar Bug',
  'LNK_CREATE_WHEN_EMPTY' => 'Reportar um Bug agora.',
  'LNK_IMPORT_BUGS' => 'Importar Bugs',
  'LNK_NEW_BUG' => 'Reportar Bug',
  'NTC_DELETE_CONFIRMATION' => 'Tem a certeza de que pretende eliminar este Contato deste Bug?',
  'NTC_REMOVE_ACCOUNT_CONFIRMATION' => 'Tem a certeza de que pretende eliminar este Bug desta conta?',
  'NTC_REMOVE_INVITEE' => 'Tem a certeza de que pretende eliminar este contato deste Bug?',
);

