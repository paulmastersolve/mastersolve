
{if empty($fields.primary_address_street.value)}
{assign var="value" value=$fields.primary_address_street.default_value }
{else}
{assign var="value" value=$fields.primary_address_street.value }
{/if}  




<textarea  id='{$fields.primary_address_street.name}' name='{$fields.primary_address_street.name}'
rows="4" 
cols="60" 
title='' tabindex="1" 
 >{$value}</textarea>


