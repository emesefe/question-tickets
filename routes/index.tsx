import { StudentLists } from "../islands/StudentsList.tsx";


export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Tickets Restantes</h1>

          <StudentLists />
        
      </div>
    </div>
  );
}
