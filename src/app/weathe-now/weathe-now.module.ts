import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherNowComponent } from './weather-now.component';
import { ZipcodeInputComponent } from './zipcode-input/zipcode-input.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: WeatherNowComponent }];
@NgModule({
  declarations: [
    WeatherNowComponent,
    ZipcodeInputComponent,
    WeatherCardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatheNowModule {}
