import { Routes } from "@angular/router";
import { ChildComponent } from "./parent/child/child/child.component";
import { ParentComponent } from "./parent/child/parent/parent.component";
const routes :Routes=[

    {path:'parent',component:ParentComponent,children:[{path:'child',component:ChildComponent}]}
]