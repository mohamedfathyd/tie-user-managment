import { Component } from '@angular/core';
import { GlobalState } from '../../global/global-state';
import { HomeScreenService } from '../../../pages/homeScreen/servcies/homeScreen.service';


@Component({
    selector: 'confirm-input',
    templateUrl: './confirm-input.component.html',
    styleUrls: ['./confirm-input.component.scss']
})
export class ConfirmInputComponent extends GlobalState {
    userData;
    departments;
    currentDepartment;
    constructor( private service:HomeScreenService) { 
        super();
    }
    ngOnInit(): void { 
        this.userData = this.confirmInput.input;
        this.currentDepartment= this.confirmInput.input.department;
        this.getDepartments();
    }
    checkValue(userData) {
        if(userData.department!=this.currentDepartment)
            this.closeConfrimInput(true, userData)
        else
        this.notifier = {
            shown: true,
            msg: this.language.errorMessage,
            subMsg: '',
            type: 'error',
          };
    }
    getDepartments() {
        this.departments = [];
        this.service.getDepartments().subscribe(res => {
            this.departments = res.departments;
        })
    }
}
