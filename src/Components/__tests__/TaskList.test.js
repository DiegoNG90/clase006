// Los test no necesitan levantar la aplicacion. LEvanta un DOM y chequea "offline"
import {render} from "@testing-library/react"
import TaskList from "../TaskList"


/* - test o it se usan de la misma forma
   - getByText busca 1 sólo match
   - getAllByText busca más de un match
*/

describe("TaskList", () => {
  test("Should render some basic component with text", () => {
      const {getAllByText} = render(<TaskList />)
      getAllByText(/tareas/i)
  })

  test('Should render Task List Information', () => {
    const mockTask = [
      {
        id: 1,
        name: 'Tarea 1',
        description: 'Description Mock',
        done: false,
      },
    ];
    const { getByText } = render(<TaskList tasks={mockTask} />);
    getByText(/Tarea 1/i); // Regex
  });

  test('Should render empty component', () => {
    const mockTasks = [];
    const { getByText } = render(<TaskList tasks={mockTasks} />);
    getByText('No hay tareas para mostrar');
  });
  // it("Should delete specific task", ()=> {

  // })
})