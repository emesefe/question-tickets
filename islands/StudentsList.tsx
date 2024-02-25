import { Signal, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import Student from "../components/Student.tsx";

type GetStudentsManagerResponse = Record<string, number>;

async function FetchStudentLists() {
    const response = await fetch("/api/studentsManager");
    const studentsRecord = await response.json() as GetStudentsManagerResponse;

    return studentsRecord;
}

export function StudentLists() {
    const fetchCounter = useSignal(0)
    const errorMessage = useSignal<string | undefined>(undefined);
    const entries = useSignal<GetStudentsManagerResponse>({});
    const reload = () => { fetchCounter.value++ }

    useEffect(
        () => {
        FetchStudentLists()
            .then((data) => {
                entries.value = data;
            })
            .catch((err) => {
                errorMessage.value = err.message;
            });
        },
        [fetchCounter.value],
  );

  return (
    <div className="flex flex-wrap w-full">
        {
           Object.entries(entries.value).map(([student, tickets]) => (
                <div className="w-1/2">
                    <Student name={student} tickets={tickets} refetch={reload}/>
                </div>
            ))
        }
    </div>
  );
}
