import * as fs from "node:fs";

const JSON_PATH = '/Users/mariasantos/Developer/DenoProjects/tickets-dudas/data/students.json'

// Esta función, funciona 🤗
export function LoadStudents(): Record<string, number> {
    console.log("Load")

    const rawData = fs.readFileSync(JSON_PATH, 'utf-8');

    const jsonObj = JSON.parse(rawData) as Record<string, number>
    return jsonObj

}

export function SaveStudents(students: Record<string, number>) {
    console.log("Save")

    const jsonString = JSON.stringify(students, null, 2);

    fs.writeFileSync(JSON_PATH, jsonString, 'utf-8');
}