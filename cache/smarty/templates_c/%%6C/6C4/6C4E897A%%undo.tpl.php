<?php /* Smarty version 2.6.11, created on 2016-04-18 19:16:30
         compiled from modules/Import/tpls/undo.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'sugar_csrf_form_token', 'modules/Import/tpls/undo.tpl', 21, false),)), $this); ?>
<br>
<?php if ($this->_tpl_vars['UNDO_SUCCESS']): ?>
<h3><?php echo $this->_tpl_vars['MOD']['LBL_LAST_IMPORT_UNDONE']; ?>
</h3>
<?php else: ?>
<h3><?php echo $this->_tpl_vars['MOD']['LBL_NO_IMPORT_TO_UNDO']; ?>
</h3>
<?php endif; ?>
<br />
<form enctype="multipart/form-data" name="importundo" method="POST" action="index.php" id="importundo">
<?php echo smarty_function_sugar_csrf_form_token(array(), $this);?>

<input type="hidden" name="module" value="Import">
<input type="hidden" name="action" value="Step1">
<input type="hidden" name="import_module" value="<?php echo $this->_tpl_vars['IMPORT_MODULE']; ?>
">
<table width="100%" cellpadding="2" cellspacing="0" border="0">
<tr>
    <td align="left">
       <input title="<?php echo $this->_tpl_vars['MOD']['LBL_MODULE_NAME']; ?>
&nbsp;<?php echo $this->_tpl_vars['MODULENAME']; ?>
"  class="button" type="submit" name="button"
            value="<?php echo $this->_tpl_vars['MOD']['LBL_MODULE_NAME']; ?>
&nbsp;<?php echo $this->_tpl_vars['MODULENAME']; ?>
">

        <input title="<?php echo $this->_tpl_vars['MOD']['LBL_FINISHED'];  echo $this->_tpl_vars['MODULENAME']; ?>
"  class="button" type="button"
            name="finished" id="finished" value="<?php echo $this->_tpl_vars['MOD']['LBL_IMPORT_COMPLETE']; ?>
">
    </td>
</tr>
</table>
<br />
</form>
