import React, {useState} from 'react';
import "../styles/login.scss"

const Trello1 = () => {

    const [tasks1, setTasks1] = useState([])
    const [tasks1_1, setTasks1_1] = useState([])
    let a = tasks1;
    const [tasks2, setTasks2] = useState([])
    const [tasks2_1, setTasks2_1] = useState([])
    let b = tasks2;

    const [idd, setId]=React.useState("");

    function ChangeTasks(e) {

        console.log(e.target.value)
        setTasks1_1(e.target.value)

    }

    function AddTasks() {
        let newTasks = {
            task: tasks1_1
        }
        a = a.concat(newTasks)
        setTasks1(a)

        setTasks1_1("")


    }

    function ChangeTasks2(e) {

        setTasks2_1(e.target.value)

    }

    function AddTasks2() {
        let newTasks = {
            task: tasks2_1
        }
        b = b.concat(newTasks)
        setTasks2(b)

        setTasks2_1("")

    }



    function mouseMove(target, event) {
        target.style.position='absolute';
        target.style.top=(event.clientY-20)+"px";
        target.style.left=(event.clientX-150)+"px";
    }
    function mouseDown(e, id) {
        setId(id);
        window.addEventListener('mousemove', (event)=>{
            mouseMove(e.target, event);
        })
    }
    function mouseUp() {
        let todos1=document.querySelectorAll('.todos1');
        todos1.forEach((item)=>{
            if (item.id===idd.toString()){
                console.log("ewfefwef");
                window.removeEventListener('mousemove', (event)=>{
                    mouseMove(item, event);
                })
            }
        });
    }


    return (
        <div className="login">
            <div className="container">
                <div className="row pt-3">
                    <div className="col-4 offset-1" onMouseUp={mouseUp}>
                        <div className="card">
                            <div className="card-header">
                                <h3>Trello1</h3>
                            </div>
                            <div className="card-body">
                                {
                                    tasks1.map((item)=>{
                                        return <div className="d-flex align-items-center bg-primary w-100 p-2 mt-2"
                                                    onMouseDown={(e)=>mouseDown(e,item.id)}
                                        >
                                            <p className="mb-0">{item.task}</p>
                                        </div>
                                    })
                                    // console.log(tasks1)
                                }
                            </div>
                            <div className="card-footer">
                                 <textarea onChange={ChangeTasks} value={tasks1_1} className="form-control" placeholder="Type here"/>
                                <button type="button" onClick={AddTasks} className="btn btn-success mt-3">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 offset-1" onMouseUp={mouseUp}>
                        <div className="card">
                            <div className="card-header">
                                <h3>Trello2</h3>
                            </div>
                            <div className="card-body">
                                {
                                    tasks2.map((item)=>{
                                        return <div className="d-flex align-items-center bg-primary w-100 p-2 mt-2"
                                                    onMouseDown={(e)=>mouseDown(e,item.id)}
                                        >
                                            <p className="mb-0">{item.task}</p>
                                        </div>
                                    })
                                    // console.log(tasks1)
                                }
                            </div>
                            <div className="card-footer">
                                <textarea onChange={ChangeTasks2} value={tasks2_1} className="form-control" placeholder="Type here"/>
                                <button type="button" onClick={AddTasks2} className="btn btn-success mt-3">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trello1;

