import type { Filme } from "../../../model/imports.ts";

export function ingoreFields(filme: Filme, ignore: string[]) {
    const fieldsToIgnore = ignore ? ignore.toString().split(",") : [];
    const copy: Partial<Filme> = { ...filme };
    fieldsToIgnore.forEach((field: string) => {
        delete copy[field as keyof Filme];
    });
    return copy;
}
