export type BoardSettings = {
    id: number,
    title: string,
    color: string,
    number: number,
};

export type TaskSettings = {
    id: number,
    type: "todo" | "inProgress" | "complete" | "toRefactor",
    title: string,
    description: string,
    priority: number,
}