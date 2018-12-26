import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/Employee.model';

@Pipe({
  name: 'employeeDepartmentFilter'
})
export class EmployeeDepartmentFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    
    searchText = searchText.toLowerCase();
        return items.filter( it => {
          return it.department.toLowerCase().includes(searchText);
        });
   } 
}
