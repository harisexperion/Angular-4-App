import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name : 'customSpaceFilter'
})
export class customSpaceFilter  implements PipeTransform {

        transform(value:string , character : string ) :string {
            return value.replace(character ,'  ');

        }
}