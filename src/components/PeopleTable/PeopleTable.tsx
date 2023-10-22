import { useEffect, useState } from "react";
import { People } from "../../types/People";
import { PeopleService } from "../../services/PeopleService";
import Loader from "../Loader/Loader";
import { Button, Table } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import PeopleModal from "../PeopleModal/PeopleModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";

//const para inicializar un persona por defecto y evitar el undefined
//vamos a crear una persona nueva


const initiazableNewPerson = (): People => {
    return {
        id:0,
        name: "",
        hair_color: "",
        gender: "",
        url: ""
    };
};



const PeopleTable = () => {

    //variable que va a contener los datos recibidos por la API
    const [people, setPeople] = useState<People[]>([]);

    //variable que muestra el componente Loader hasta que se reciban los datos de la API
    const [isLoading, setIsLoading] = useState(true);

    //variable que va a actualizar los datos de la tabla luego de cada operacion exitosa
    const [refreshData, setRefreshData] = useState(false);

    //este hook se va a ejecutar cada vez que se renderice el componente o
    //refreshData cambie de estado
    useEffect(() => {
        //llamamos a la funcion para obtener todos los productos declarados en el PeopleService
        const fetchPeople =async () => {
            const peopleData = await PeopleService.getPeople();
            setPeople(peopleData);
            setIsLoading(false);
            
        };

        fetchPeople();
    }, [refreshData] );

    //Test, este log esta modificado para que muestre los datos de una manera mas legible
    console.log(JSON.stringify(people, null, 2));

    //persona seleccionada que se va a pasar como prop al modal
    const [person, setPerson] = useState<People>(initiazableNewPerson);

    //const para manejar el estado del modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [nombre, setNombre] = useState("");

    //logica del modal
    const handleClick = (newName: string, peop: People, modal: ModalType) => {
        setNombre(newName);
        setModalType(modal);
        setPerson(peop);
        setShowModal(true);
    };

    return (  
        <> 
        <Button onClick={() => handleClick("Nueva persona", initiazableNewPerson(), ModalType.CREATE)}>
            Nueva Persona
        </Button>
        {isLoading ? <Loader/> : (
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Color de pelo</th>
                        <th>Genero</th>
                        <th>URL</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(people => (
                        <tr>
                            <td>{people.name}</td>
                            <td>{people.hair_color}</td>
                            <td>{people.gender}</td>
                            <td>{people.url}</td>
                            <td> <EditButton onClick={() => handleClick("Editar persona", person, ModalType.UPDATE)}/></td>
                            <td> <DeleteButton onClick={() => handleClick("Borrar persona", person, ModalType.UPDATE)}/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}

    
        {showModal && (
            <PeopleModal
            show={showModal}
            onHide={() => setShowModal(false)}
            name={nombre}
            modalType={modalType}
            peop={person}
            refreshData={setRefreshData}
            />
        )}
    
        </>
    )
}
 
export default PeopleTable;