import express from "express";

const app = express();
// use interface for objects and type for everything else
interface Params {
    a: number;
    b: number;
}

type add = (a: number, b: number) => void;
//or
type Add = (x: Params) => void;

// const add = (a: number, b?: number): number => {
//     if (b) {
//         return a + b!; //! I know it is defined so don't bother me
//     } else {
//         return a + 0;
//     }
// };

//or

//when you define a type for a function you don't have to define
// the type of the params anywhere else, you only define the function
// type as the type you previously defined, juts like that:

const add: Add = (x): number => {
    if (x.b) {
        return x.a + x.b!; //! I know it is defined so don't bother me
    } else {
        return x.a + 0;
    }
};

app.get("/", (req: any) => {
    // (req as any).name = "bob";  scaping the type of a function, or add :any to the parameter definition
    // req.name = "bob";
    // console.log(req.name);
    var result = add({ a: 1, b: 2 });
    console.log(result);
});

app.listen(3000, () => {
    console.log("started");
});
