import { AiOutlineCloudUpload } from "react-icons/ai";
import "./styles.css";

const InputCard = ({type="text", id, label, placeholder="placeholder", onChange, required=true, stateKey, defaultValue="", className="input-container"}) => {
    return(
        <div className={`${className}`}>
            <label htmlFor={id}>{label} {required && "*"}</label>
            <input
                type={type}
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

const InputCard2 = ({type="text", id, label, placeholder="placeholder", onChange, required=true, defaultValue="", className="input2-container", haveLabel=true}) => {
    return(
        <div className={`${className}`}>
            {haveLabel && <label htmlFor={id}>{label} {required && "*"}</label>}
            
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
                required={false}
                defaultValue={defaultValue}
            />
        </div>
    );
}

const OptionInputCard = ({id, label, array=[], onChange, stateKey, defaultValue=0}) => {
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

const UploadFileCard = ({id, label="Cargar Archivo", onChange, selectedFile=null, description="Archivos PDF (.pdf) o Excel (.xlsx)"}) => {
    return(
        <label htmlFor={id} className="upload-file-container">
            <input
                id={id}
                type="file"
                accept=".pdf, .xlsx"
                onChange={(event) => {onChange(event)}}
                onClick={(event) => event.target.value = null}
                name={id}
            />
            <span>
                <AiOutlineCloudUpload/>
            </span>
            <div className="upload-file-info-container">
                <p>{label}</p>
                <p>{selectedFile ? selectedFile : description}</p>
            </div>

        </label>
    );
}


export { InputCard, InputCard2, OptionInputCard, TextAreaCard, UploadFileCard };