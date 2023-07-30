import { puppyworld } from "./world";

export class puppy{
    public img:string;
    public name:string;
    public desc: string;
    public prize:string;
    public pups:puppyworld[];
     constructor(img:string,name:string,desc:string, prize:string,pups:puppyworld[]){
        this.img=img;
        this.name=name;
        this.desc=desc;
        this.pups=pups;
        this.prize=prize;

     }
}