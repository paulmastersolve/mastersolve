<?php

    class ContactTask
    {        
        function ContactTaskCount($bean, $event, $arguments)
        {
            $bean->load_relationships('contacts');
            $contacts = $bean->contacts->getBeans();
           $GLOBALS['log']->fatal('test Task Contact' .$event .' ' .$bean->name); 

           if((isset($contacts)) && (count($contacts)>0))
           {

              // $GLOBALS['log']->fatal('lala' .$contacts[1]->last_name);

               foreach($contacts as $contact)
               {
              
		//$GLOBALS['log']->fatal(var_dump($contacts));
		$GLOBALS['log']->fatal(' content ' .$contact->last_name);
               
              	$contact->load_relationships('tasks');
              	$tasks= $contact->tasks->getBeans();
              	$contact->task_count_c = count($tasks);
	      	$contact->save(false);
              }
           }


           // foreach($contacts as $contact)
           // {            
                
           //     $contact->load_relationships('meetings');
           //     $meetings = $contact->meetings->getBeans();
           //     $contact->meetings = count($meetings);
           //     $contact->save(false);
           // }
          $GLOBALS['log']->fatal('test Task Contact' .$event  .' ' .count($contacts));
        }
    }    
?>
