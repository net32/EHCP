/**
 * init.js
 *
 * Copyright (c) 1999-2009 The SquirrelMail Project Team
 * Licensed under the GNU GPL. For full terms see the file COPYING.
 *
 * Grabs the text from the SquirrelMail field and submits it to
 * the squirrelspell.
 *
 * $Id: init.js 13549 2009-04-15 22:00:49Z jervfors $
 */

/**
 * This is the work function.
 *
 * @param  flag tells the function whether to automatically submit the
 *              form, or wait for user input. True submits the form, while
 *              false doesn't.
 * @return      void 
 */
function sqspell_init(flag){
  textToSpell = opener.document.compose.subject.value + "\n" + opener.document.compose.body.value;
  document.forms[0].sqspell_text.value = textToSpell;
  if (flag) document.forms[0].submit();
}
