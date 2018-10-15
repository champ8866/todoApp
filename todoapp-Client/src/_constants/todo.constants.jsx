export const todoConstants = {
// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 



//Create
  CREATE_TODO : '[Todo] CREATE_TODO' ,
  CREATE_TODO_SUCCESS : '[Todo] CREATE_TODO_SUCCESS' ,
  CREATE_TODO_ERROR : '[Todo] CREATE_TODO_ERROR' ,


//Read
  GET_TODOS : '[Todo] GET_TODOS' ,
  GET_TODOS_SUCCESS : '[Todo] GET_TODOS_SUCCESS' ,
  GET_TODOS_ERROR : '[Todo] GET_TODOS_ERROR' ,


//Update
  START_EDITING :'[Todo] START_EDITING',
  CANCEL_EDITING : '[Todo] CANCEL_EDITING',

  UPDATE_TODO : '[Todo] UPDATE_TODO' ,
  UPDATE_TODO_SUCCESS : '[Todo] UPDATE_TODO_SUCCESS' ,
  UPDATE_TODO_ERROR : '[Todo] UPDATE_TODO_ERROR' ,

  COMPLETE_TODO : 'COMPLETE_TODO',


//Delete
  DELETE_TODO : '[Todo] DELETE_TODO' ,
  DELETE_TODO_SUCCESS : '[Todo] DELETE_TODO_SUCCESS' ,
  DELETE_TODO_ERROR : '[Todo] DELETE_TODO_ERROR' ,

}
