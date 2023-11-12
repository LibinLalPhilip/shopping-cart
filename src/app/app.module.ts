import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { setBackground } from './Custom Directives/setBackground.directive';
import { HighlightDirectiveDirective } from './Custom Directives/highlight-directive.directive';
import { HoverDirective } from './Custom Directives/hover.directive';
import { CloseDirective } from './Custom Directives/close.directive';
import { ProductDetailHoverDirective } from './Custom Directives/product-detail-hover.directive';
import { ProductDetailHoverColorDirective } from './Custom Directives/product-detail-hover-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'

import {MatDialogModule} from '@angular/material/dialog'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    setBackground,
    HighlightDirectiveDirective,
    HoverDirective,
    CloseDirective,
    ProductDetailHoverDirective,
    ProductDetailHoverColorDirective,
    LoginDialogComponent,
    
  ],
  imports: [BrowserModule, NgbModule, NgbCarousel, FormsModule, BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
