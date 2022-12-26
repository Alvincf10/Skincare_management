import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/@core/model/navigation.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigation = new NavigationModel();
  haveClass = false;

  constructor() { }

  ngOnInit(): void {
  }

  dropDownCLick = (event: any) => {
    const id = event.target.id;

    if (document.getElementById(`menu-${id}`)?.classList.contains('open')){
      document.getElementById(`menu-${id}`)?.classList.remove('open');
    }else{
      document.getElementById(`menu-${id}`)?.classList.add('open');
    }
  }

}
