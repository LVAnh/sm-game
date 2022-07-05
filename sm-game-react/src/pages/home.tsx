import {useAppSelector} from "../hooks";
import {useEffect} from "react";
import api from "../api";


function Home() {

    // const auth = useAppSelector((state) => state.auth);
    //
    // useEffect(() => {
    //     async function fetchAllGames() {
    //         const res = await api.get("/");
    //
    //         if (res.status === 200) {
    //             console.log(res)
    //             //setGames(res.data);
    //         }
    //     }
    //
    //     fetchAllGames();
    // }, [auth]);
    const login = async () => {
        const res = await api.post("/",{
            name: "Anh",
            wallet:"test"
        });

        if (res.status === 200) {
            console.log(res)
            //setGames(res.data);
        }
    }
    return (
        <div onClick={login}>
            LVA
        </div>
    );
}

export default Home;
