import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GlobalState } from '../../../../core/global/global-state';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { HomeScreenService } from '../../servcies/homeScreen.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends GlobalState implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  perfomance = "all";
  public datatableElement: DataTableDirective;
  viewTable = true;
  profilesLimit;
  dtOptions: any = {}; //Table options
  dtTrigger: Subject<any> = new Subject(); //Used for table refresh
  dtInstance: DataTables.Api = null;
  orderTypes = { asc: 'asc', desc: 'desc' };
  order: string = this.orderTypes.desc;
  loading = false;
  usersList;
  filteredList;
  perfomances;
  constructor(private service: HomeScreenService,private router:Router) {
    super();  
   }

   async ngOnInit(): Promise<void>  {
     this.getUsers();
     this.getPerformances();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  relocation(user) {
    const that = this;
    this.confirmInput = {
      shown: true, msg: this.language.relocationMessage,
      input: {department:user.department,id:user.id}, yesFn(value) {
        let indexToUpdate = that.usersList.findIndex(item => item.id === value.id);
        that.usersList[indexToUpdate].department = value.department;
        that.notifier = {
          shown: true,
          msg: that.language.success,
          subMsg: '',
          type: 'success',
        };
      }, noFn() { }
    }
  } 
  getUsers() {
    this.loading = true;
    this.usersList = [];
      this.service.getUsers().subscribe(
      (res) => {
          if (res?.data) {
            this.usersList = res.data;
            this.filteredList = this.usersList;
        } else
          this.notifier = {
            shown: true,
            msg: res.description,
            subMsg: '',
            type: 'error',
          };
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }
  getPerformances() {
    this.perfomances = [];
    this.service.getPerformances().subscribe(res => {
        this.perfomances = res.perfomances;
    })
  }
  selectedType() {
    if (this.perfomance == 'all') this.filteredList = this.usersList;
    else
    this.filteredList = this.usersList.filter(item => item.performance == this.perfomance);
  }
}
