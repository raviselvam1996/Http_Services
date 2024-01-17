import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { filter,map } from 'rxjs/operators';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sivaform';
  datas:any
  data1: any;
  id:any;
  datass: any;
  editmode: boolean = false;
  currentId: any;
 
  //persons=new Persons()

  
  constructor(private fb:FormBuilder,private apiService:ApiService){}
ngOnInit(): void {
  this.getemployee();
}
 


  contactForm=this.fb.group({
    // firstname: ['', [Validators.required, Validators.minLength(10)]],
      eid:['',[Validators.required,Validators.minLength(10)]],
      ename:['',[Validators.required,Validators.maxLength(50)]],
      edob:['',[Validators.required]],
      email:['',[Validators.required,Validators.maxLength(50)]],
      phoneNumber:['',[Validators.required,Validators.maxLength(12)]],
      esalary:['',[Validators.required,Validators.maxLength(6)]],
      gender:['',[Validators.required]]


  })

  
  get eid(){
   return this.contactForm.get('eid');
  }
  get ename(){
    return this.contactForm.get('ename');
  }

  get edob(){
    return this.contactForm.get('edob');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get phoneNumber(){
    return this.contactForm.get('phoneNumber');
  }

get esalary(){
  return this.contactForm.get('esalary');
}

get gender(){
  return this.contactForm.get('gender');
}


addemployee(){
  if (!this.editmode) {
  this.apiService.addemployee(this.contactForm.value).subscribe(() => {
    this.getemployee();
    this.contactForm.reset();
  });

  }
  else{
    this.apiService.editemployee(this.currentId,this.contactForm.value).subscribe(() => {
      this.getemployee();
      this.editmode = false;
      this.contactForm.reset();
    });
   
  }
}

   
    
    

  
  getemployee(){
    
     this.apiService.getemployee().subscribe(res=>{
      this.datas=res;
      
       
       console.log(res)
   
     })
//  this.datas.find((i:any)=>{return i.id==1})
}

getperson(id:any){
  
  // this.apiService.getperson(id).subscribe(_ress=>{
  //   this.datass=_ress

    
  // })
  this.currentId = id;
  this.datass = this.datas.find((p:any) => {
    return p.id == id
  })
  console.log(this.contactForm);
  
  this.contactForm.setValue({
    eid: this.datass.eid,
    ename: this.datass.ename,
    edob: this.datass.edob,
    email: this.datass.email,
    phoneNumber: this.datass.phoneNumber,
    esalary: this.datass.esalary,
    gender: this.datass.gender
  });
  this.editmode = true;


}
delpersons(id:any){
  this.apiService.delemployee(id).subscribe(() => {
    this.getemployee();
  });

}



}

function result(value: Object): void {
  throw new Error('Function not implemented.');
}

function res(value: Object): void {
  throw new Error('Function not implemented.');
}

