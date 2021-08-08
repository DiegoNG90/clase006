 import {useForm} from 'react-hook-form'
 import shortId from 'short-id';

 const TaskForm = ({ addTask }) => {
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();

   const createTask = (object) => {
     addTask({ ...object, id: shortId.generate() });
   };
   console.log(watch('name'));
   return (
     <>
       <form onSubmit={handleSubmit(createTask)}>
         <div>
           <input
             type="text"
             placeholder="Nombre de la tarea"
             {...register('name', { required: true })}
           />
           {errors?.name && <span>El campo es obligatorio</span>}
           <br />
           <div>
             <textarea
               rows={5}
               cols={5}
               placeholder="descripcion"
               {...register('description', { required: true })}
             />
             {errors?.description && <span>El campo es obligatorio</span>}
           </div>
         </div>
         <button type="submit">Guardar tarea</button>
       </form>
     </>
   );
 };

 export default TaskForm;