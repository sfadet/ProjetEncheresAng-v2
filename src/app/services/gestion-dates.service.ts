import { Injectable } from '@angular/core';
import {DateTime} from "../models/DateTime";

@Injectable({
  providedIn: 'root'
})
export class GestionDatesService {

  private tabmois: string[] = ["", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  constructor() { }

  public dateToString(date: Date): string {
    const dt = new Date(date)
    return dt.getDate() + " " + this.tabmois[dt.getMonth()] + " " + dt.getFullYear();
  }
}
