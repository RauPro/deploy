import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  loaderState!: Observable<boolean>;
  constructor(private loader: LoadingService) {}

  ngOnInit(): void {
    this.loaderState = this.loader.isLoading;
  }
}
