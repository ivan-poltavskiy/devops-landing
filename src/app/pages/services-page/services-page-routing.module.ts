import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ServicesPageComponent } from "./components/services-page/services-page.component"

const routes: Routes = [{ path: "", component: ServicesPageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesPageRoutingModule {}
