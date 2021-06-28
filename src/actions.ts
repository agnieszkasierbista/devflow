export const INPUT_NAME = "INPUT_NAME";

export function inputName(name: string) {
    return {
        type: INPUT_NAME,
        payload: name
    }
}