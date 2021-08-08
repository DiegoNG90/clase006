// Los test no necesitan levantar la aplicacion. LEvanta un DOM y chequea "offline"
import {render} from "@testing-library/react"
import TaskList from "../TaskList"


/* - test o it se usan de la misma forma
   - getByText busca 1 sólo match
   - getAllByText busca más de un match
*/

describe("TaskList", () => {
  let defaultProps;
  beforeEach(() => {
      defaultProps = {
        mockTask: [
        {
            id: 1,
            name: 'Tarea 1',
            description: 'Description Mock',
            done: false,
        },
      ]
    }
  })
  test("Should render some basic component with text", () => {
      const {getAllByText} = render(<TaskList tasks={defaultProps.mockTask}/>)
      getAllByText(/tareas/i)
  })

  test('Should render Task List Information', () => {
    const { getByText } = render(<TaskList tasks={defaultProps.mockTask} />);
    getByText(/Tarea 1/i); // Regex
  });

  test('Should render empty component', () => {
    const mockTasks = [];
    const { getByText } = render(<TaskList tasks={mockTasks} />);
    getByText('No hay tareas para mostrar');
  });

  test("Should render two tasks", () => {
      defaultProps.mockTask = [
        ...defaultProps.mockTask,
        { id: 2, name: 'Otra tarea', description: 'bla' },
      ];
      const { getByText } = render(<TaskList tasks={defaultProps.mockTask} />);
      getByText('Tarea 1');
      getByText('Otra tarea');

  })

  // it("Should delete specific task", ()=> {

  // })
})