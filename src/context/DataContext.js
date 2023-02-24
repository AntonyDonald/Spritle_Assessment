import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Api from "../axios/Api";


const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [getData, setGetData] = useState([]);
    const [getStuData, setGetStuData] = useState([]);
    const [calculation, setCalculation] = useState([]);
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const [type, setType] = useState("");
    const [login, setLogin] = useState(0)

    const navigate = useNavigate('')

    useEffect(() => {
        const fetchData1 = async () => {
            const response = await Api.get('/master');
            setGetData(response.data)
        }
        fetchData1()
        const fetchData2 = async () => {
            const response = await Api.get('/student');
            setGetStuData(response.data)
        }
        fetchData2()
        const fetchData3 = async () => {
            const response = await Api.get('/calculation');
            setCalculation(response.data)
        }
        fetchData3()
    }, [])

    return (
        <DataContext.Provider value={{
            getData, setGetData, userName, setUserName, password, setPassword, retypePassword, setRetypePassword, navigate, type, setType,
            getStuData, setGetStuData, calculation, setCalculation, login, setLogin
        }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContext