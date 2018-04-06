import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../../models/hotel.interface';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-lista-hotels',
  templateUrl: './lista-hotels.component.html',
  styleUrls: ['./lista-hotels.component.css']
})
export class ListaHotelsComponent implements OnInit {

  title = 'Hoteles';
  hotels: Hotel[] = [];

  constructor(private hotelsService: HotelsService, private router: Router) { }

  ngOnInit() {
    this.hotelsService.getAllPosts().subscribe(hotels => {
      this.hotels = hotels;
    });
  }
  newHotel() {
    this.router.navigate(['/new']);
  }
}
