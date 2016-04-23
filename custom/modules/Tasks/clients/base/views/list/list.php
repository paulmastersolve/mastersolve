<?php
$viewdefs['Tasks'] = 
array (
  'base' => 
  array (
    'view' => 
    array (
      'list' => 
      array (
        'panels' => 
        array (
          0 => 
          array (
            'label' => 'LBL_PANEL_1',
            'fields' => 
            array (
              0 => 
              array (
                'name' => 'status',
                'label' => 'LBL_LIST_STATUS',
                'link' => false,
                'enabled' => true,
                'default' => true,
              ),
              1 => 
              array (
                'name' => 'name',
                'link' => true,
                'label' => 'LBL_LIST_SUBJECT',
                'enabled' => true,
                'default' => true,
              ),
              2 => 
              array (
                'name' => 'contact_name',
                'label' => 'LBL_LIST_CONTACT',
                'link' => true,
                'id' => 'CONTACT_ID',
                'module' => 'Contacts',
                'enabled' => true,
                'default' => true,
                'ACLTag' => 'CONTACT',
                'related_fields' => 
                array (
                  0 => 'contact_id',
                ),
              ),
              3 => 
              array (
                'name' => 'parent_name',
                'label' => 'LBL_LIST_RELATED_TO',
                'dynamic_module' => 'PARENT_TYPE',
                'id' => 'PARENT_ID',
                'link' => true,
                'enabled' => true,
                'default' => true,
                'sortable' => false,
                'ACLTag' => 'PARENT',
                'related_fields' => 
                array (
                  0 => 'parent_id',
                  1 => 'parent_type',
                ),
              ),
              4 => 
              array (
                'name' => 'date_due',
                'label' => 'LBL_LIST_DUE_DATE',
                'type' => 'datetimecombo-colorcoded',
                'completed_status_value' => 'Completed',
                'link' => false,
                'enabled' => true,
                'default' => true,
              ),
              5 => 
              array (
                'name' => 'assigned_user_name',
                'label' => 'LBL_LIST_ASSIGNED_TO_NAME',
                'id' => 'ASSIGNED_USER_ID',
                'enabled' => true,
                'default' => true,
              ),
              6 => 
              array (
                'name' => 'date_modified',
                'enabled' => true,
                'default' => true,
              ),
              7 => 
              array (
                'name' => 'date_entered',
                'label' => 'LBL_DATE_ENTERED',
                'enabled' => true,
                'default' => true,
                'readonly' => true,
              ),
              8 => 
              array (
                'name' => 'team_name',
                'label' => 'LBL_LIST_TEAM',
                'enabled' => true,
                'default' => false,
              ),
              9 => 
              array (
                'name' => 'date_start',
                'label' => 'LBL_LIST_START_DATE',
                'link' => false,
                'enabled' => true,
                'default' => false,
              ),
            ),
          ),
        ),
      ),
    ),
  ),
);
