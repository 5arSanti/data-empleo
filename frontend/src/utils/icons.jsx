import { MdAccountBalance, MdConstruction } from "react-icons/md";
import { FaPaintbrush } from "react-icons/fa6"
import { GiMineWagon, GiSewingMachine } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import { FaBus } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import { IoSchoolSharp } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa6";

const icons = {
    "Actividades artísticas": <FaPaintbrush />,
    "Actividades financieras": <MdAccountBalance />,
    "Industrias manufactureras": <GiSewingMachine  />,
    "Construcción": <MdConstruction  />,
    "Minas y canterasación": <GiMineWagon /> ,
    "Tecnología": <MdComputer /> ,
    "Salud": <GiHealthNormal/>,
    "Turismo y Hoteleria": <ImAirplane/>,
    "Transporte": <FaBus />,
    "Marketing": <RiMegaphoneFill/>,
    "Educación": <IoSchoolSharp/>,
    "Industria": <FaIndustry/>,
}

export { icons };