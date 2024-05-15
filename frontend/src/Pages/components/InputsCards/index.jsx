import { AiOutlineCloudUpload } from "react-icons/ai";
import "./styles.css";

const InputCard = ({type="text", id, label, placeholder="placeholder", onChange, required=true, defaultValue="", className="input-container", haveLabel=true}) => {
    return(
        <div className={`${className}`}>
            {haveLabel && <label htmlFor={id}>{label} {required && "*"}</label>}
            
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required={required}
                defaultValue={defaultValue}
            />
        </div>
    );
}

const OptionInputCard = ({id, label, array=[], onChange, defaultValue=0}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} </label>
            <select 
                name={id} 
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                value={defaultValue}
            >
                {array?.map((item, index) => (
                    <option 
                        key={index}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div> 
    );
}

const TextAreaCard = ({id, label, placeholder="placeholder", onChange, required=true, stateKey, defaultValue=""}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <textarea
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required
                defaultValue={defaultValue}
            />
        </div>
    );
}

const UploadFileCard = ({id, label="Cargar Archivo", onChange, description}) => {
    return(
        <label htmlFor={id} className="upload-file-container">
            <input
                id={id}
                name={id}
                type="file"
                accept=".pdf, .xlsx"
                onChange={(event) => {onChange(event)}}
                onClick={(event) => event.target.value = null}
            />
            <span>
                <AiOutlineCloudUpload/>
            </span>
            <div className="upload-file-info-container">
                <p>{label}</p>
                <p>{description}</p>
            </div>

        </label>
    );
}


export { InputCard, OptionInputCard, TextAreaCard, UploadFileCard };