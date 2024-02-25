import Counter from "../islands/Counter.tsx";

interface StudentProps {
  name: string
  tickets: number
  refetch: () => void
}

export default function Student(props: StudentProps) {

    return (
    <div class="flex items-center w-full">
        <p class="text-2xl w-1/3"> {props.name} </p>
        <Counter name={props.name} count={props.tickets} refetch={props.refetch} />
    </div>
  );
}
