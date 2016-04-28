<?php

   $hook_version=1;
   $hook_array=Array();

   $hook_array['after_save']=Array();
   $hook_array['after_save'][]=Array(1,'Increment task count on contact', 'custom/modules/Tasks/task_contact_count.php', 'ContactTask', 'ContactTaskCount');
   $hook_array['after_relationship_add']=Array();
   $hook_array['after_relationship_add'][]=Array(1,'Increment task count on meeting assignment', 'custom/modules/Tasks/task_contact_count.php','ContactTask','ContactTaskCount');
?>
