import { useEffect, useState } from "react";
import PeopleTable from "./Table";
import { useParams } from "react-router-dom";
import * as courseClient from  "../client"

export default function People() {
    const [users, setUsers] = useState<any[]>([]);
    const { cid } = useParams();

    const fetchUsersForCourse = async () => {
        const users = await courseClient.findUsersForCourse(cid as string);
        setUsers(users);
    };
    useEffect(() => {
        fetchUsersForCourse();
    }, [cid]);

    useEffect(() => {
        console.log("Users fetched:", users);
    }, [users]);
  
    return (
        <div>
            <PeopleTable  users={users}/>
        </div>
    );
}