<?php
/***************/
/* 
 * USERS
 */
define("USER",1);
define("UUID",2);
define("CUID",3);
define("ROOT",4);
define("HTTP",5);
define("AB_SYS","ABOX00");
define("DEBUG","DBG");

/* 
 * CALL TYPES
 */
define("AB_SYNC",true);
define("AB_ASYNC",false);
define("AB_IN",true);
define("AB_OUT",false);
define("AB_DESTROY",true);
define("AB_NOW",true);
define("AB_NOTNOW",true);
/*
 * ABOX PECULIAR TYPES
 */
define("AB_FIELD",0);
define("AB_INDEX",1);
define("AB_FOLDER",2);
define("AB_FILE",3);
define("AB_FLOAT",4);
define("AB_INTEGER",5);
define("AB_STRING",6);
define("AB_BINARY",7);
define("AB_ABSOLUTE",8);
define("AB_ARRAY",9);
define("AB_JSON",10);
define("AB_OBJECT",11);
define("AB_LOCAL",12);
define("AB_GLOBAL",13);
define("AB_ASSOC",14);
define("AB_MYSQLI_OBJ",15);
define("AB_NOABSOLUTE",16);

/*
 * HANDLER MODES
 */
define("AB_NEW",0);
define("AB_INSERT",0);
define("AB_EDIT",1);
define("AB_UPDATE",1);
define("AB_REMOVE",2);
define("AB_DELETE",2);
define("AB_VIEW",3);
define("AB_REPLACE",4);
define("AB_APPEND",5);
define("AB_PREPEND",6);
define("AB_RECURSIVE",true);
define("AB_NORECURSIVE",false);
define("AB_FORCE",true);
define("AB_NOFORCE",false);
define("AB_STANDARD",false);
define("AB_PORTRAIT",false);
define("AB_LANDSCAPE",true);
define("AB_LOG",true);
define("AB_NOLOG",false);

/*
 * ENVIROMENTS
 */
define("AB_SESSION",1);
define("AB_COOKIE",2);

/*
 * OUATH CLIENTS
 */
define("AB_OLX",1);
define("AB_FACEBOOK",2);
define("AB_INSTAGRAM",3);
define("AB_GOOGLE",4);
define("AB_MP",5);

/*
 * SPECIAL ELEMENTS ENUMERATOR
 */
define("AB_TEXT",1);
define("AB_COMBO",2);
define("AB_TILE",3);
define("AB_ROW",4);
define("AB_WINDOW",5);
define("AB_PANEL",6);
define("AB_DIALOG",7);
define("AB_WRAPPER",8);
define("AB_SSCOPE",true);
define("AB_NOSSCOPE",false);
define("AB_PRINT",true);
define("AB_NOPRINT",false);

/*
 * CALLBACKcSTATUS
 */
define("AB_FAILURE",0);
define("AB_NOT_ALLOWED",0);
define("AB_PASS",1);
define("AB_ALLOWED",1);
define("AB_SUCCESS",200);

/*
 * WINDOW STATE
 */
define("AB_NORMAL",0);
define("AB_MINIMIZED",1);
define("AB_MAXIMIZED",2);

/*
 * ERRORS
 */
define("AB_NOTHING",0);
define("AB_TYPE_MISMATCH",-5);

/*
 * ACCESS LEVEL
 */
define("AB_PUBLIC",0);
define("AB_USER",1);
define("AB_MANAGER",2);
define("AB_DIRECTOR",3);
define("AB_TI1",4);
define("AB_TI2",5);
define("AB_ADMIN",6);
define("AB_OWNER",7);
define("AB_ROOT",8);
define("AB_DEVELOPER",9);
function translate_user_level($u=null){
	if($u!==null) return ["Público","Usuário","Gerente","Diretor","TI-I","TI-II","Administrativo","Proprietário","Superusuário","Desenvolvedor"][$u];
}
/***************/?>