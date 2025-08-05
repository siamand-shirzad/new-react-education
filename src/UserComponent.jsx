import { useEffect, useState } from "react";

const UserComponent = () => {
    const [age, setAge] = useState(20);

    useEffect(()=>{
        // mounting
        console.log("send request to server");
        //unmounting
        return ()=>{
            console.log("your logout");
        }
    },[])
    //updating
    useEffect(()=>{
        console.log(age);
        if (age == 30) {
            console.log("your age is 30");
        }        
    },[age])
    return (
        <div>
            <h1>User component</h1>
            <button onClick={()=> setAge((prevAge) =>prevAge + 1)} >
                change age
            </button>
            <ul>
                <li>Name:siamand</li>
                <li>Age: {age}</li>
            </ul>
            
        </div>
    );
};

export default UserComponent;