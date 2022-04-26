import {Table} from "react-bootstrap";
import {useCallback, useEffect, useRef, useState} from "react";
import Api from "../api";

export interface IStudent {
    ordering: number
    userName: string,
}

export function Queue() {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [stompClient, setStompClient] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await Api.get<IStudent[]>("/queue");
            console.log(response.data)
            setStudents(response.data)
        }
        const interval = setInterval(() => {
            fetchData();
        }, 1000)


        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            <Table hover>
                <tbody>
                {
                    students.map((student, i) => {
                        return (
                            <tr key={i}>
                                <td>{student.userName}</td>
                                <td>{student.ordering}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
        </div>


    )
}