import { Button } from "../components/Button.tsx";


interface CounterProps {
  name: string;
  count: number;
  refetch: () => void
}

function Clamp (val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
} 

async function ModifyCounterValue(props: CounterProps, amount: number) {
  
  let tickets = props.count
  tickets = Clamp(tickets + amount, 0, 3);
  
  const response = await fetch("/api/studentsManager")
  const studentRecord = await response.json() as Record<string, number>

  studentRecord[props.name] = tickets

  try{
    await fetch("/api/studentsManager", {
        headers: {
          'content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(studentRecord)
    })
    props.refetch()
  }
  catch{
      alert("⛔️ No hemos podido cambiar ticket ⛔️")
  }
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-2 py-6 w-2/3">
      <Button 
        onClick={() => ModifyCounterValue(props, -1)}> 
        -1 
      </Button>
      <p class="text-2xl">{props.count}</p>
      <Button 
        onClick={() => ModifyCounterValue(props, 1)}> 
        +1 
      </Button>
    </div>
  );
}
