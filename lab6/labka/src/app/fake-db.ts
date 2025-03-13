import { Albums } from "./models";

export const ALBUMS: Albums[] =[];

for(let i = 0; i < 7; i++){
    ALBUMS.push(
        {
            id: i+1,
            title: `title ${i+1}`,
            body: 'dada'

        }
    )
}