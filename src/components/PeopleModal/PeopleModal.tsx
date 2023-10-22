import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { People } from "../../types/People";

//dependencias para validar formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { PeopleService } from "../../services/PeopleService";

//notificaciones al usuario
import {toast} from 'react-toastify';


type PeopleModalProps = {
    show: boolean;
    onHide:() => void;
    name: string;
    modalType: ModalType;
    peop: People;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}


const PeopleModal = ({show, onHide, name, modalType, peop, refreshData}: PeopleModalProps) => {

    //CREATE - UPDATE
    const handleSaveUpdate =async (peo:People) => {
        try {
            const isNew = peop.id === 0;
            if(isNew){
                await PeopleService.createPeople(peo);
            } else {
                await PeopleService.updatePeople(peo.id,peo);
            }
            toast.success(isNew ? "Persona creada" : "Persona actualizada", {
                position: "top-center",
            });

            onHide();
            refreshData(prevState => !prevState)
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error")
        }  
    };

    //DELETE
    const handleDelete =async () => {
        try {
            await PeopleService.deletePeople(peop.id);
            toast.success("Persona eliminada con éxito",{
                position:"top-center"
            });
            onHide();
            refreshData(prevState => !prevState)
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error")
        }
        
    }

    //Yup, esquema de validacion
    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            name: Yup.string().required('El titulo es requerido'),
            hair_color: Yup.string().required('El color de pelo es requerido'),
            gender: Yup.string().required('El genero es requerido'),
            url: Yup.string().required('La URL es requerida')
        });
    };

    //Formik, utiliza el esquema de validacion para crear un formulario dinamico y que lo bloquee en caso de haber errores
    const formik = useFormik({
        initialValues: peop,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: People) => handleSaveUpdate(obj),
    });

    return (  
        <>
            {modalType === ModalType.DELETE ? (
                <>
                <Modal show={show} onHide={onHide} centered backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title> {name} </Modal.Title>
                    </Modal.Header> 
                    <Modal.Body>
                        <p>¿Está seguro que desea eliminar la persona?
                        <strong> {peop.name}</strong> </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}> Cancelar </Button>
                        <Button variant="primary" onClick={handleDelete}> Eliminar </Button>
                    </Modal.Footer>
                </Modal>
                </>
            ) : (
                <>
                <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                    <Modal.Header closeButton>
                        <Modal.Title> {name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {/* Formulario */}
                        <Form onSubmit={formik.handleSubmit}>

                            {/* Form.Group por cada campo para dar de alta o modificar un producto */}
                            {/* Titulo */}
                            <Form.Group controlId="formNombre">
                                <Form.Label> Nombre </Form.Label>
                                <Form.Control
                                name= "name"
                                type= "text"
                                value={formik.values.name || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.name && formik.touched.name)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Color de pelo */}
                            <Form.Group controlId="formColorPelo">
                                <Form.Label> Color de pelo </Form.Label>
                                <Form.Control
                                name= "hair_color"
                                type= "text"
                                value={formik.values.hair_color || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.hair_color && formik.touched.hair_color)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.hair_color}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Genero */}
                            <Form.Group controlId="formGenero">
                                <Form.Label> Genero </Form.Label>
                                <Form.Control
                                name= "gender"
                                type= "text"
                                value={formik.values.gender || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.gender && formik.touched.gender)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.gender}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* URL */}
                            <Form.Group controlId="formUrl">
                                <Form.Label> Url </Form.Label>
                                <Form.Control
                                name= "url"
                                type= "text"
                                value={formik.values.url || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.url && formik.touched.url)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.url}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Modal.Footer className="mt-4">
                                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                                <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                            </Modal.Footer>




                        </Form>
                    </Modal.Body>
                </Modal>
                </>
            )}
        </>
    )
}
 
export default PeopleModal;