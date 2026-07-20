import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';

import { Api } from '../../../api/api';
import { apisettinggetone, apiservicegetall, apigallerygetall, apiusergetall } from '../../../api/functions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, SkeletonModule, TagModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private readonly api    = inject(Api);
  private readonly router = inject(Router);
  private readonly cdr    = inject(ChangeDetectorRef);

  setting: any   = null;
  services: any[] = [];
  gallery: any[]  = [];
  barbers: any[]  = [];
  loading = true;
  today = new Date();

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    Promise.all([
      this.api.invoke(apisettinggetone),
      this.api.invoke(apiservicegetall),
      this.api.invoke(apigallerygetall),
      this.api.invoke(apiusergetall)
    ]).then(([setting, services, gallery, users]) => {
      const parse = (r: any) => (typeof r === 'string' ? JSON.parse(r) : r);

      const s  = parse(setting);
      const sv = parse(services);
      const g  = parse(gallery);
      const u  = parse(users);

      this.setting  = s?.setting ?? null;
      this.services = (sv?.listService ?? []).filter((x: any) => x.status === 1);
      this.gallery  = g?.listGallery ?? [];
      this.barbers  = (u?.listUser ?? []).filter((x: any) => x.role === 'BARBER' && x.status === 1);
      this.loading  = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  goToBooking(): void {
    this.router.navigate(['/booking']);
  }

  goToAdmin(): void {
    this.router.navigate(['/auth/login']);
  }
}
