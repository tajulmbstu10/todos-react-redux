import React from 'react';

const EditTodoForm = ({ id, content, updateTodo }) => {
    let input 

    return(
        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            updateTodo(id,input.value)
            input.value = ''
          }}>
            {/* <input } /> */}
            <input  ref={node => input = node}
                    defaultValue={content}
                    style={{width:300}}/>
     
          </form>
    )
  }
  
export default EditTodoForm;