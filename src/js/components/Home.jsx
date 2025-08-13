import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	//let nuevoTodo= "";

	const [nuevoTodo, setnuevoTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handleClick = () => {
		console.log("hola")
		setTodos([...todos, nuevoTodo])
	}

	const deleteTodo = (indice) => {
		const listaNueva = todos.filter((todo,i) => i !== indice)
		setTodos(listaNueva);

	}

	const handleChange = (event) => {
		setnuevoTodo (event.target.value)

	}



	return (
		<div className="container">
			<div>
				<h1>To do list</h1>
			</div>
			<div>

		    <input type= "text" onChange={handleChange}></input>

			<button onClick={handleClick}>
				Agregar tarea
			</button>

			</div>
			<div>
				<p>Nueva tarea : {nuevoTodo}</p>
			</div>
			<ul>
				{todos.map((todo, indice) => {
					return (
						<li>
							{todo}<button onClick={()=> deleteTodo (indice)}>Borrar</button>

						</li>
					)
				})}
			</ul>


          
		</div>
	);
};

export default Home;
