import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[], filterByCategory: string): Project[] {
    console.log("CategoryPipe input: " + input);
    if (input) {
      console.log("filterByCategory: " + filterByCategory);

      const output: Project[] = [];
      for (let i = 0; i < input.length; i++) {
        if (filterByCategory === 'all') {
          output.push(input[i]);
        } else {
          if (input[i].category === filterByCategory) {
            output.push(input[i]);
          }
        }
      }
      return output;
    }
  }
}
