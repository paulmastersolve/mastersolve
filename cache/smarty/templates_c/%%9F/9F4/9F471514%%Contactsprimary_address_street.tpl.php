<?php /* Smarty version 2.6.11, created on 2016-04-18 19:10:37
         compiled from cache/modules/Import/Contactsprimary_address_street.tpl */ ?>

<?php if (empty ( $this->_tpl_vars['fields']['primary_address_street']['value'] )):  $this->assign('value', $this->_tpl_vars['fields']['primary_address_street']['default_value']);  else:  $this->assign('value', $this->_tpl_vars['fields']['primary_address_street']['value']);  endif; ?>  




<textarea  id='<?php echo $this->_tpl_vars['fields']['primary_address_street']['name']; ?>
' name='<?php echo $this->_tpl_vars['fields']['primary_address_street']['name']; ?>
'
rows="4" 
cols="60" 
title='' tabindex="1" 
 ><?php echo $this->_tpl_vars['value']; ?>
</textarea>

