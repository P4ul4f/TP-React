import { Alert } from "react-bootstrap";

type AlertGeneratorProps = {
    message: string;
}

//el componente hijo tiene argumentos del tipo "AlertGeneratorProps"
const AlertGenerator = ({message}: AlertGeneratorProps) => {


    return (  
        
        <Alert variant="success" className="mt-2 w-50">
            <Alert.Heading> Mensaje recibido </Alert.Heading>
            <p>
                {message}
            </p>
        </Alert>
    )
}
 
export default AlertGenerator;
