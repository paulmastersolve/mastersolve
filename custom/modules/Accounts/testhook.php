<?php
    class testhook
    {
        function testmethod($bean, $event, $arguments)
        {

          $bean->load_relationships('contacts');
          $contacts = $bean->contacts->getBeans();

          foreach ($contacts as $contact)
          {
            $contact->description="This is working!!!";
            $contact->save(false);
          }


        }
    }
?>