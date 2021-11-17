import { Icategory } from "../interface/icategory";

export class Categorys implements Icategory {
    Status: boolean | any;
    Success: string | any;
    Message: string | any;
    "Main Category": {
      id: number,
      name: string,
      name_ar: string,
      photo:string,
      created_at: string,
      updated_at: string
    }
}
